#!/usr/bin/env node
// Builds static per-language copies of the site: /en/, /de/, /es/, /fr/.
//
// Turkish stays at the root. For every root page and blog post this script
// writes <lang>/<same path> with the translations from the i18n bundles baked
// into the HTML (title, meta, body text), its own canonical URL and hreflang
// links. It also keeps the hreflang block in the Turkish source pages and
// sitemap-i18n.xml in sync.
//
// Usage: node scripts/build-lang-pages.mjs          (writes everything)
//        node scripts/build-lang-pages.mjs --check  (fails if TR pages or the sitemap are out of date)
//
// The language folders are build output (git-ignored); the deploy workflow
// runs this script before uploading the site.
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import { ROOT, LANGS, ALL_LANGS, loadTranslations } from './lang-lib.mjs';

const SITE = 'https://www.armaweld.com';
const CHECK = process.argv.includes('--check');
const OG_LOCALE = { tr: 'tr_TR', en: 'en_US', de: 'de_DE', es: 'es_ES', fr: 'fr_FR' };
const HREFLANG_START = '<!-- aw:hreflang -->';
const HREFLANG_END = '<!-- /aw:hreflang -->';

const DICT = { root: loadTranslations({ blog: false }), blog: loadTranslations({ blog: true }) };

const rootPages = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html') && f !== '404.html').sort();
const blogPages = fs.readdirSync(path.join(ROOT, 'blog')).filter((f) => f.endsWith('.html')).sort().map((f) => 'blog/' + f);
const PAGES = [...rootPages, ...blogPages];
const PAGE_SET = new Set(PAGES);

const urlFor = (lang, page) => {
  const p = page.replace(/(^|\/)index\.html$/, '$1');
  return SITE + '/' + (lang === 'tr' ? '' : lang + '/') + p;
};

function hreflangBlock(page, indent) {
  const lines = ALL_LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${urlFor(l, page)}" />`);
  lines.push(`<link rel="alternate" hreflang="x-default" href="${urlFor('tr', page)}" />`);
  return [HREFLANG_START, ...lines, HREFLANG_END].map((l) => indent + l).join('\n');
}

// Visitors who picked another language before land on that language's address.
// Search engines have no stored preference, so they always see the Turkish page.
const TR_REDIRECT = `<script>(function(){try{var l=localStorage.getItem('armaweld-lang');if(!l||l==='tr')return;var a=document.querySelector('link[rel="alternate"][hreflang="'+l+'"]');if(a)location.replace(new URL(a.href).pathname+location.search+location.hash)}catch(e){}})();</script>`;

function upsertHreflang(html, page, extra) {
  const block = hreflangBlock(page, '') + (extra ? '\n' + extra : '');
  const s = html.indexOf(HREFLANG_START);
  if (s !== -1) {
    const e = html.indexOf(HREFLANG_END, s);
    let end = e + HREFLANG_END.length;
    if (extra && html.startsWith('\n' + extra, end)) end += extra.length + 1;
    return html.slice(0, s) + block + html.slice(end);
  }
  const m = html.match(/<link rel="canonical"[^>]*>\n?/);
  if (!m) throw new Error('No canonical link in ' + page);
  const at = m.index + m[0].length;
  return html.slice(0, at) + block + '\n' + html.slice(at);
}

const decode = (v) => (v.includes('&') ? cheerio.load('<x>' + v + '</x>')('x').text() : v);

function truncate(text, max = 158) {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:·—–-]+$/, '') + '…';
}

// Relative URL on a page one level deeper (inside /<lang>/)
function rewriteUrl(value, page, lang) {
  if (!value) return value;
  const v = value.trim();
  if (/^(#|[a-z][a-z0-9+.-]*:|\/\/|\$\{)/i.test(v)) return value;
  const m = v.match(/^([^?#]*)(.*)$/);
  const pathPart = m[1];
  const rest = m[2];
  if (v.startsWith('/')) {
    let target = pathPart.slice(1);
    if (target === '' || target.endsWith('/')) target += 'index.html';
    return PAGE_SET.has(target) ? '/' + lang + pathPart + rest : value;
  }
  if (pathPart === '') return value;
  let target = path.posix.normalize(path.posix.join(path.posix.dirname(page), pathPart));
  if (pathPart.endsWith('/') || target === '.') target = path.posix.join(target === '.' ? '' : target, 'index.html');
  if (PAGE_SET.has(target)) return value;
  return '../' + v;
}

function rewriteSrcset(value, page, lang) {
  return value.split(',').map((part) => {
    const [u, ...d] = part.trim().split(/\s+/);
    return [rewriteUrl(u, page, lang), ...d].join(' ');
  }).join(', ');
}

const rewriteCssUrls = (css, page, lang) =>
  css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (all, q, u) => `url(${q}${rewriteUrl(u, page, lang)}${q})`);

// https://www.armaweld.com/<page> -> https://www.armaweld.com/<lang>/<page> for pages that are built per language
function localizeSiteUrl(value, lang) {
  if (!value.startsWith(SITE + '/')) return value;
  const m = value.slice(SITE.length + 1).match(/^([^?#]*)(.*)$/);
  let target = m[1];
  if (target === '' || target.endsWith('/')) target += 'index.html';
  return PAGE_SET.has(target) ? SITE + '/' + lang + '/' + m[1] + m[2] : value;
}

function localizeJsonLd(json, page, lang, title, desc) {
  const to = urlFor(lang, page);
  const fix = (node) => {
    if (Array.isArray(node)) return node.map(fix).filter((n) => n !== undefined);
    if (typeof node === 'string') return localizeSiteUrl(node, lang);
    if (!node || typeof node !== 'object') return node;
    const type = [].concat(node['@type'] || []);
    // FAQ answers are Turkish-only text in the markup
    if (type.includes('FAQPage')) return undefined;
    const out = {};
    for (const [k, v] of Object.entries(node)) {
      // the company is one entity across languages
      const nv = k === '@id' && /#organization$/.test(v) ? v : fix(v);
      if (nv !== undefined) out[k] = nv;
    }
    if ('inLanguage' in out) out.inLanguage = lang;
    if (type.includes('ListItem') && out.item === to) out.name = title.replace(/\s*[|—–-]\s*ArmaWeld.*$/, '');
    if (type.some((t) => /Article|BlogPosting|WebPage/.test(t))) {
      if ('headline' in out) out.headline = title.replace(/\s*[|—–-]\s*ArmaWeld.*$/, '');
      if ('description' in out) out.description = desc;
      if ('name' in out && type.includes('WebPage')) out.name = title;
    }
    return out;
  };
  const data = fix(json);
  if (data && data['@graph']) data['@graph'] = data['@graph'].filter(Boolean);
  return data;
}

function buildPage(page, lang) {
  const isBlog = page.startsWith('blog/');
  const T = isBlog ? DICT.blog : DICT.root;
  const own = T[lang] || {};
  const tr = T.tr || {};
  const resolve = (k) => (k && (own[k] || tr[k])) || null;
  const ownHas = (k) => !!(k && own[k]);

  const src = fs.readFileSync(path.join(ROOT, page), 'utf8').replace('\n' + TR_REDIRECT, '');
  const $ = cheerio.load(src);

  // --- title and description (computed before body text is swapped) ---
  const titleKey = $('title').attr('data-i18n');
  const htmlTitleKey = $('html').attr('data-i18n-title');
  let title;
  if (ownHas(titleKey)) title = own[titleKey];
  else if (ownHas(htmlTitleKey)) {
    title = own[htmlTitleKey];
    if (!/ArmaWeld/i.test(title)) title += isBlog ? ' | ArmaWeld Blog' : ' — ArmaWeld';
  } else {
    const h1k = $('h1').first().attr('data-i18n') || $('h1').first().attr('data-i18n-html');
    title = ownHas(h1k) ? cheerio.load('<x>' + own[h1k] + '</x>')('x').text() + ' — ArmaWeld' : $('title').text();
  }
  title = decode(title);

  const descKey = $('meta[name="description"]').attr('data-i18n');
  let desc;
  if (ownHas(descKey)) desc = decode(own[descKey]);
  else {
    const p = $('main p[data-i18n], article p[data-i18n], p[data-i18n]').filter((_, e) => ownHas(e.attribs['data-i18n']) && own[e.attribs['data-i18n']].length > 60).first();
    desc = p.length ? truncate(decode(own[p.attr('data-i18n')])) : $('meta[name="description"]').attr('content');
  }

  // --- swap translated text (mirrors assets/i18n.js apply()) ---
  $('body [data-i18n]').each((_, el) => {
    const v = resolve(el.attribs['data-i18n']);
    if (v) $(el).text(decode(v));
  });
  $('body [data-i18n-html]').each((_, el) => {
    const v = resolve(el.attribs['data-i18n-html']);
    if (v) $(el).html(v);
  });
  for (const [attr, target] of [['data-i18n-placeholder', 'placeholder'], ['data-i18n-value', 'value'], ['data-i18n-aria', 'aria-label'], ['data-i18n-title', 'title']]) {
    $(`body [${attr}]`).each((_, el) => {
      const v = resolve(el.attribs[attr]);
      if (v) $(el).attr(target, decode(v));
    });
  }

  // --- head ---
  const url = urlFor(lang, page);
  $('html').attr('lang', lang).attr('data-aw-page-lang', lang).removeAttr('data-i18n-title');
  $('title').text(title).removeAttr('data-i18n');
  $('meta[name="description"]').attr('content', desc).removeAttr('data-i18n');
  $('meta[property="og:title"], meta[name="twitter:title"]').attr('content', title).removeAttr('data-i18n');
  $('meta[property="og:description"], meta[name="twitter:description"]').attr('content', desc).removeAttr('data-i18n');
  $('meta[property="og:url"]').attr('content', url);
  $('meta[property="og:locale"]').attr('content', OG_LOCALE[lang]);
  $('link[rel="canonical"]').attr('href', url);

  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const data = localizeJsonLd(JSON.parse($(el).html()), page, lang, title, desc);
      if (!data || (data['@graph'] && !data['@graph'].length)) $(el).remove();
      else $(el).html('\n' + JSON.stringify(data, null, 2) + '\n');
    } catch {
      /* leave unparsable blocks as they are */
    }
  });

  // --- URLs: assets and non-localized pages live one level up ---
  for (const attr of ['href', 'src', 'poster', 'data-src']) {
    $(`[${attr}]`).each((_, el) => {
      if (el.name === 'link' && /alternate|canonical/.test(el.attribs.rel || '')) return;
      if (el.name === 'base') return;
      $(el).attr(attr, rewriteUrl(el.attribs[attr], page, lang));
    });
  }
  $('[srcset]').each((_, el) => { $(el).attr('srcset', rewriteSrcset(el.attribs.srcset, page, lang)); });
  $('[style]').each((_, el) => { $(el).attr('style', rewriteCssUrls(el.attribs.style, page, lang)); });
  $('style').each((_, el) => { $(el).html(rewriteCssUrls($(el).html(), page, lang)); });

  let html = $.html();
  html = upsertHreflang(html, page, '');
  return html;
}

function syncTurkishPage(page) {
  const file = path.join(ROOT, page);
  const html = fs.readFileSync(file, 'utf8');
  const next = upsertHreflang(html, page, TR_REDIRECT);
  if (next !== html) {
    if (CHECK) throw new Error(`${page} has an out-of-date hreflang block; run node scripts/build-lang-pages.mjs`);
    fs.writeFileSync(file, next);
    return true;
  }
  return false;
}

function buildSitemap() {
  const lastmod = new Map();
  const main = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  for (const m of main.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) lastmod.set(m[1], m[2]);
  const out = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
  for (const page of PAGES) {
    const trUrl = urlFor('tr', page);
    if (!lastmod.has(trUrl)) continue; // only pages already listed for Google in Turkish
    const alts = ALL_LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlFor(l, page)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${trUrl}"/>`).join('\n');
    for (const lang of LANGS) {
      out.push('  <url>', `    <loc>${urlFor(lang, page)}</loc>`, `    <lastmod>${lastmod.get(trUrl)}</lastmod>`, alts, '  </url>');
    }
  }
  out.push('</urlset>', '');
  const xml = out.join('\n');
  const file = path.join(ROOT, 'sitemap-i18n.xml');
  const old = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  if (old !== xml) {
    if (CHECK) throw new Error('sitemap-i18n.xml is out of date; run node scripts/build-lang-pages.mjs');
    fs.writeFileSync(file, xml);
  }
}

let changedTr = 0;
for (const page of PAGES) if (syncTurkishPage(page)) changedTr++;
buildSitemap();

let written = 0;
if (!CHECK) {
  for (const lang of LANGS) {
    fs.rmSync(path.join(ROOT, lang), { recursive: true, force: true });
    for (const page of PAGES) {
      const out = path.join(ROOT, lang, page);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, buildPage(page, lang));
      written++;
    }
  }
}
console.log(`Language pages: ${written} written, ${changedTr} Turkish pages updated, ${PAGES.length} pages × ${LANGS.length} languages.`);
