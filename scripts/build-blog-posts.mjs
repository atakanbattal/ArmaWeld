#!/usr/bin/env node
// Builds blog posts written as source modules in scripts/blog-src/<slug>.mjs.
//
// Each source module exports { slug, key, date, section, keywords, related, tr: {...}, en: {...}, ... }.
// For every post this script writes:
//   blog/<slug>.html                  Turkish page (text inline + i18n keys)
//   assets/blog-posts/<slug>.js       translations for that post only (all 8 languages)
// and keeps these in sync:
//   assets/blog-posts/_cards.js       card texts for blog/index.html
//   blog/index.html                   cards between <!-- aw:src-cards:start/end -->
//   sitemap.xml                       one <url> per post
//   scripts/static-text-i18n.json     section/tag strings used in meta tags
//
// Post pages that carry <meta name="aw-post-i18n"> load only their own small
// translation file instead of the large assets/blog-translations-2026.js bundle.
//
// Usage: node scripts/build-blog-posts.mjs     then  node scripts/build-lang-pages.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, ALL_LANGS, loadTranslations } from './lang-lib.mjs';

const SITE = 'https://www.armaweld.com';
const SRC_DIR = path.join(ROOT, 'scripts/blog-src');
const OUT_DIR = path.join(ROOT, 'assets/blog-posts');
const REQUIRED = ['title', 'meta', 'og', 'tag', 'h1', 'crumb', 'read', 'body', 'faq', 'cta_h3', 'cta_p', 'cta_btn'];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const ver = () => {
  const m = fs.readFileSync(path.join(ROOT, 'assets/i18n.js'), 'utf8').match(/BUNDLE_V\s*=\s*['"]([^'"]+)['"]/);
  return m ? m[1] : '1';
};

// Existing translations (old posts' titles for related links, shared blog labels).
const DICT = loadTranslations({ blog: true, posts: false });
const BASE = loadTranslations({ blog: false });

const files = fs.existsSync(SRC_DIR) ? fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.mjs')).sort() : [];
const posts = [];
for (const f of files) {
  const mod = (await import(pathToFileURL(path.join(SRC_DIR, f)).href + '?t=' + Date.now())).default;
  posts.push(mod);
}
posts.sort((a, b) => (a.order || 0) - (b.order || 0));
const bySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

const problems = [];
for (const p of posts) {
  for (const l of ALL_LANGS) {
    if (!p[l]) { problems.push(`${p.slug}: missing language ${l}`); continue; }
    for (const k of REQUIRED) if (!p[l][k] || (Array.isArray(p[l][k]) && !p[l][k].length)) problems.push(`${p.slug}/${l}: missing ${k}`);
    const banned = /bünyemiz|tek çatı|under one roof|unter einem dach|robot/i;
    const txt = JSON.stringify(p[l]);
    if (banned.test(txt)) problems.push(`${p.slug}/${l}: banned wording (${txt.match(banned)[0]})`);
  }
}
if (problems.length) { console.error(problems.join('\n')); process.exit(1); }

const k = (p, name) => `blog_${p.key}_${name}`;
const faqHtml = (L, heading) => `<h2>${heading}</h2>` + L.faq.map(([q, a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('');
const FAQ_H = { tr: 'Sık Sorulan Sorular', en: 'Frequently Asked Questions', de: 'Häufige Fragen', es: 'Preguntas frecuentes', fr: 'Questions fréquentes', it: 'Domande frequenti', nl: 'Veelgestelde vragen', no: 'Ofte stilte spørsmål' };
const SHARED = ['blog_breadcrumb_home', 'blog_breadcrumb_blog', 'blog_wps_author', 'blog_related_h', 'blog_back'];

const template = fs.readFileSync(path.join(ROOT, 'blog/sicak-daldirma-galvaniz-kaynakli-parca.html'), 'utf8');
const STYLE = template.slice(template.indexOf('<style>'), template.indexOf('</style>') + 8);
const HEAD_ICONS = template.slice(template.indexOf('  <link rel="icon"'), template.indexOf('  <link rel="canonical"'));
const GTAG = template.slice(template.indexOf('  <!-- Google tag'), template.indexOf('</head>'));
const FONTS = template.slice(template.indexOf('<link rel="preconnect"'), template.indexOf('<link rel="stylesheet" href="../assets/theme.css'));
const V = ver();

function relatedTitle(slug, lang) {
  if (bySlug[slug]) return { key: k(bySlug[slug], 'h1'), text: bySlug[slug][lang].h1 };
  const html = fs.readFileSync(path.join(ROOT, 'blog', slug + '.html'), 'utf8');
  const m = html.match(/<h1[^>]*data-i18n="([^"]+)"[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) throw new Error('related post without h1 key: ' + slug);
  const key = m[1];
  const text = (DICT[lang] && DICT[lang][key]) || (DICT.tr && DICT.tr[key]) || stripTags(m[2]);
  return { key, text };
}

function pageHtml(p) {
  const L = p.tr;
  const url = `${SITE}/blog/${p.slug}.html`;
  const ld = (o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n</script>`;
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: L.h1, description: L.meta,
    image: `${SITE}/assets/og-armaweld.jpg`, datePublished: p.date, dateModified: p.modified || p.date,
    author: { '@type': 'Organization', name: 'ArmaWeld Mühendislik', url: SITE },
    publisher: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'ArmaWeld', logo: { '@type': 'ImageObject', url: `${SITE}/android-chrome-512x512.png` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }, url, inLanguage: 'tr-TR', articleSection: L.tag, keywords: p.keywords,
  };
  const crumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ArmaWeld', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
    { '@type': 'ListItem', position: 3, name: L.h1, item: url }] };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: L.faq.map(([q, a]) => ({ '@type': 'Question', name: stripTags(q), acceptedAnswer: { '@type': 'Answer', text: stripTags(a) } })) };
  const related = p.related.map((s) => { const r = relatedTitle(s, 'tr'); return `        <li><a href="${s}.html" data-i18n="${r.key}">${r.text}</a></li>`; }).join('\n');
  return `<!DOCTYPE html>
<html lang="tr" data-i18n-title="${k(p, 'title')}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title data-i18n="${k(p, 'title')}">${esc(L.title)} | ArmaWeld</title>
  <meta name="description" data-i18n="${k(p, 'meta_desc')}" content="${esc(L.meta)}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="aw-post-i18n" content="${p.slug}" />
${HEAD_ICONS}  <link rel="canonical" href="${url}" />
<!-- aw:hreflang -->
<!-- /aw:hreflang -->
  <meta property="og:type" content="article" />
  <meta property="og:title" data-i18n="${k(p, 'og_title')}" content="${esc(L.og)}" />
  <meta property="og:description" data-i18n="${k(p, 'meta_desc')}" content="${esc(L.meta)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${SITE}/assets/og-armaweld.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:locale" content="tr_TR" />
  <meta property="og:site_name" content="ArmaWeld" />
  <meta property="article:published_time" content="${p.date}" />
  <meta property="article:modified_time" content="${p.modified || p.date}" />
  <meta property="article:author" content="ArmaWeld Mühendislik" />
  <meta property="article:section" content="${esc(L.tag)}" />
${FONTS}<link rel="stylesheet" href="../assets/theme.css?v=${V}" />
${STYLE}
${ld(article)}
${ld(crumbs)}
${ld(faq)}
${GTAG}</head>
<body>

<section class="page-hero">
  <div class="hero-inner">
    <div class="breadcrumb"><a href="../index.html" data-i18n="blog_breadcrumb_home">ArmaWeld</a> &nbsp;/&nbsp; <a href="index.html" data-i18n="blog_breadcrumb_blog">Blog</a> &nbsp;/&nbsp; <span data-i18n="${k(p, 'breadcrumb3')}">${L.crumb}</span></div>
    <div class="article-tag" data-i18n="${k(p, 'tag')}">${L.tag}</div>
    <h1 data-i18n="${k(p, 'h1')}">${L.h1}</h1>
    <div class="article-meta">
      <span><time datetime="${p.date}">${p.date}</time></span>
      <span data-i18n="${k(p, 'read')}">${L.read}</span>
      <span data-i18n="blog_wps_author">ArmaWeld Mühendislik</span>
    </div>
  </div>
</section>

<section class="article-wrap">
  <article class="article-body">
<div data-i18n-html="${k(p, 'body')}">
${L.body.trim()}
</div>

<div data-i18n-html="${k(p, 'faq')}">
${faqHtml(L, FAQ_H.tr)}
</div>

    <div class="cta-box">
      <h3 data-i18n="${k(p, 'cta_h3')}">${L.cta_h3}</h3>
      <p data-i18n="${k(p, 'cta_p')}">${L.cta_p}</p>
      <a href="../iletisim.html" class="btn-arc" data-i18n="${k(p, 'cta_btn')}">${L.cta_btn}</a>
    </div>

    <!-- related:start -->
    <nav class="related" aria-label="İlgili makaleler">
      <h2 data-i18n="blog_related_h">İlgili Makaleler</h2>
      <ul>
${related}
      </ul>
    </nav>
    <!-- related:end -->

    <div class="article-footer">
      <a href="index.html" class="back-link" data-i18n="blog_back">← Blog'a Dön</a>
    </div>

  </article>
</section>
<script src="../assets/lang/tr.js?v=${V}"></script>
<script src="../assets/i18n.js?v=${V}"></script>
<script src="../assets/chrome.js?v=${V}"></script>
<script src="../assets/analytics.js?v=20261120"></script>
<script>mountChrome('blog', '../');</script>
</body>
</html>
`;
}

function postKeys(p, lang) {
  const L = p[lang];
  const out = {
    [k(p, 'title')]: `${L.title} | ArmaWeld`, [k(p, 'meta_desc')]: L.meta, [k(p, 'og_title')]: L.og, [k(p, 'tag')]: L.tag,
    [k(p, 'h1')]: L.h1, [k(p, 'breadcrumb3')]: L.crumb, [k(p, 'read')]: L.read, [k(p, 'body')]: L.body.trim(),
    [k(p, 'faq')]: faqHtml(L, FAQ_H[lang]), [k(p, 'cta_h3')]: L.cta_h3, [k(p, 'cta_p')]: L.cta_p, [k(p, 'cta_btn')]: L.cta_btn,
  };
  for (const s of SHARED) {
    if (BASE[lang] && BASE[lang][s]) continue;
    const v = (DICT[lang] && DICT[lang][s]) || (DICT.tr && DICT.tr[s]);
    if (v) out[s] = v;
  }
  for (const s of p.related) { const r = relatedTitle(s, lang); out[r.key] = r.text; }
  return out;
}

const wrap = (data) => `// Generated by scripts/build-blog-posts.mjs. Edit scripts/blog-src/ instead.\n(function(){var T=window.TRANSLATIONS;if(!T)return;var d=${JSON.stringify(data)};for(var l in d){var t=T[l]||(T[l]={});for(var k in d[l])t[k]=d[l][k];}})();\n`;

fs.mkdirSync(OUT_DIR, { recursive: true });
const cards = {};
for (const p of posts) {
  fs.writeFileSync(path.join(ROOT, 'blog', p.slug + '.html'), pageHtml(p));
  const data = {};
  for (const l of ALL_LANGS) data[l] = postKeys(p, l);
  fs.writeFileSync(path.join(OUT_DIR, p.slug + '.js'), wrap(data));
  for (const l of ALL_LANGS) {
    cards[l] = cards[l] || {};
    Object.assign(cards[l], { [k(p, 'tag')]: p[l].tag, [k(p, 'h1')]: p[l].h1, [k(p, 'meta_desc')]: p[l].meta, [k(p, 'read')]: p[l].read });
  }
}
fs.writeFileSync(path.join(OUT_DIR, '_cards.js'), wrap(cards));

// Blog index cards
const idxPath = path.join(ROOT, 'blog/index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
const CS = '<!-- aw:src-cards:start -->', CE = '<!-- aw:src-cards:end -->';
const cardHtml = posts.map((p) => `
      <article class="card">
        <div class="card-body">
          <div class="card-tag" data-i18n="${k(p, 'tag')}">${p.tr.tag}</div>
          <h2 data-i18n="${k(p, 'h1')}">${p.tr.h1}</h2>
          <p data-i18n="${k(p, 'meta_desc')}">${p.tr.meta}</p>
          <div class="card-meta">
            <span>${p.date}</span>
            <span data-i18n="${k(p, 'read')}">${p.tr.read}</span>
          </div>
          <a href="${p.slug}.html" class="card-link" data-i18n="blog_back_read">Makaleyi Oku →</a>
        </div>
      </article>
`).join('');
if (!idx.includes(CS)) idx = idx.replace('<div class="blog-grid">\n', `<div class="blog-grid">\n${CS}\n${CE}\n`);
// One grid, newest first: collect every card (generated and hand-written), drop stale copies of
// generated posts, sort by the date shown on the card and keep them all between the markers.
{
  const cardRe = /\n?[ \t]*<article class="card">[\s\S]*?<\/article>\n?/g;
  const gStart = idx.indexOf(CS);
  const tail = idx.slice(gStart);
  const lastArt = tail.lastIndexOf('</article>');
  const gridEnd = Math.max(tail.indexOf(CE) + CE.length, lastArt >= 0 ? lastArt + '</article>'.length : 0);
  const region = tail.slice(0, gridEnd);
  const srcSlugs = new Set(posts.map((p) => p.slug + '.html'));
  const others = (region.match(cardRe) || []).filter((c) => { const h = c.match(/href="([^"]+)" class="card-link"/); return !(h && srcSlugs.has(h[1])); });
  const all = others.map((c) => c.trim()).concat(cardHtml.match(cardRe).map((c) => c.trim()));
  const dateOf = (c) => (c.match(/<div class="card-meta">\s*<span>(\d{4}-\d{2}-\d{2})<\/span>/) || [, ''])[1];
  all.sort((a, b) => dateOf(b).localeCompare(dateOf(a)));
  idx = idx.slice(0, gStart) + CS + '\n' + all.map((c) => '      ' + c).join('\n\n') + '\n' + CE + '\n' + tail.slice(gridEnd);
}
fs.writeFileSync(idxPath, idx);

// Sitemap
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
for (const p of posts) {
  const loc = `${SITE}/blog/${p.slug}.html`;
  if (sm.includes(`<loc>${loc}</loc>`)) continue;
  sm = sm.replace('</urlset>', `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${p.modified || p.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`);
}
fs.writeFileSync(smPath, sm);

// Static text for meta article:section
const stPath = path.join(ROOT, 'scripts/static-text-i18n.json');
const st = JSON.parse(fs.readFileSync(stPath, 'utf8'));
for (const p of posts) {
  const entry = {};
  for (const l of ALL_LANGS) if (l !== 'tr') entry[l] = p[l].tag;
  st[p.tr.tag] = Object.assign(st[p.tr.tag] || {}, entry);
}
fs.writeFileSync(stPath, JSON.stringify(st, null, 2) + '\n');

console.log(`built ${posts.length} posts`);
