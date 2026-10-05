/**
 * Blog makalelerine Türkçe içeriği statik olarak yazar (SEO prerender).
 *
 * Makale sayfaları içeriği i18n.js ile JS üzerinden dolduruyor; ham HTML'de
 * <title>, meta description, og:* ve gövde boş kalıyordu. Bu script dil
 * paketlerini (tr) okuyup boş data-i18n alanlarını HTML'e işler. data-i18n
 * öznitelikleri korunur; dil değiştirme davranışı aynı kalır.
 *
 * Kullanım: node scripts/prerender-blog-tr.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const BLOG = path.join(ROOT, 'blog');
const SITE = 'https://www.armaweld.com';

function loadTr() {
  const window = { TRANSLATIONS: {} };
  const ctx = vm.createContext({ window, console });
  for (const f of ['assets/lang/tr.js', 'assets/i18n-content.js', 'assets/i18n-tools-ext.js', 'assets/i18n-trace-docs.js']) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
  }
  for (const key of ['__AW_DEEP_TRANSLATIONS__', '__AW_TOOLS_EXT__', '__AW_TRACE_DOCS__']) {
    if (window[key] && window[key].tr) Object.assign(window.TRANSLATIONS.tr, window[key].tr);
  }
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/blog-translations-2026.js'), 'utf8'), ctx);
  return window.TRANSLATIONS.tr;
}

const decode = (s) => s
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&rsquo;/g, '’').replace(/&mdash;/g, '—');
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => escText(s).replace(/"/g, '&quot;');
const stripTags = (s) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

function prerender(file, tr) {
  const fp = path.join(BLOG, file);
  let html = fs.readFileSync(fp, 'utf8');
  const before = html;
  const t = (k) => (k && tr[k] ? tr[k] : null);

  // Boş meta content
  html = html.replace(/<meta([^>]*?)data-i18n="([^"]+)"([^>]*?)content=""([^>]*)>/g, (m, a, key, b, c) => {
    const v = t(key);
    return v ? `<meta${a}data-i18n="${key}"${b}content="${escAttr(decode(v))}"${c}>` : m;
  });

  // <title>: html[data-i18n-title] anahtarı
  const titleKey = (html.match(/<html[^>]*data-i18n-title="([^"]+)"/) || [])[1];
  if (t(titleKey)) {
    html = html.replace(/<title([^>]*)>ArmaWeld Blog<\/title>/, (m, a) => `<title${a}>${escText(decode(t(titleKey)))}</title>`);
  }

  // Boş metin elemanları
  html = html.replace(/<(h1|h2|h3|span|div|p|a)([^>]*?)data-i18n="([^"]+)"([^>]*)>\s*<\/\1>/g, (m, tag, a, key, b) => {
    const v = t(key);
    return v ? `<${tag}${a}data-i18n="${key}"${b}>${escText(decode(v))}</${tag}>` : m;
  });

  // Boş HTML blokları
  html = html.replace(/<div([^>]*?)data-i18n-html="([^"]+)"([^>]*)>\s*<\/div>/g, (m, a, key, b) => {
    const v = t(key);
    return v ? `<div${a}data-i18n-html="${key}"${b}>\n${v}\n    </div>` : m;
  });

  // Article JSON-LD: headline, description, image, dil, mainEntityOfPage
  const slug = file;
  const url = `${SITE}/blog/${slug}`;
  const h1 = stripTags((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '');
  const desc = decode((html.match(/<meta name="description"[^>]*content="([^"]*)"/) || [])[1] || '');
  const tag = stripTags((html.match(/<div class="article-tag"[^>]*>([\s\S]*?)<\/div>/) || [])[1] || '');
  html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (m, json) => {
    let data;
    try { data = JSON.parse(json); } catch { return m; }
    if (data['@type'] !== 'Article') return m;
    const out = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: data.headline || h1,
      description: data.description || desc,
      image: `${SITE}/assets/og-armaweld.jpg`,
      datePublished: data.datePublished,
      dateModified: data.dateModified || data.datePublished,
      author: data.author,
      publisher: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'ArmaWeld', logo: { '@type': 'ImageObject', url: `${SITE}/android-chrome-512x512.png` } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
      inLanguage: 'tr-TR',
    };
    if (tag) out.articleSection = tag;
    if (data.about) out.about = data.about;
    const crumbs = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ArmaWeld', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
        { '@type': 'ListItem', position: 3, name: h1, item: url },
      ],
    };
    return `<script type="application/ld+json">\n${JSON.stringify(out, null, 2)}\n</script>\n<script type="application/ld+json">\n${JSON.stringify(crumbs, null, 2)}\n</script>`;
  });

  // og:image boyutları ve twitter kartı
  if (!/twitter:card/.test(html)) {
    html = html.replace(/(<meta property="og:image"[^>]*>)/, `$1\n  <meta property="og:image:width" content="1200" />\n  <meta property="og:image:height" content="630" />\n  <meta name="twitter:card" content="summary_large_image" />`);
  }

  if (html !== before) fs.writeFileSync(fp, html);
  return html !== before;
}

// "İlgili Makaleler" bloğu: aynı etiketteki en yeni yazılar, eksikse en yeniler
function meta(file) {
  const html = fs.readFileSync(path.join(BLOG, file), 'utf8');
  return {
    file,
    title: stripTags((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || ''),
    key: (html.match(/<h1[^>]*data-i18n="([^"]+)"/) || [])[1] || '',
    tag: stripTags((html.match(/<div class="article-tag"[^>]*>([\s\S]*?)<\/div>/) || [])[1] || ''),
    date: (html.match(/article:published_time" content="([^"]+)"/) || [])[1] || '',
  };
}

function addRelated(file, all) {
  const fp = path.join(BLOG, file);
  let html = fs.readFileSync(fp, 'utf8');
  if (html.includes('<!-- related:start -->')) return false;
  const self = all.find((m) => m.file === file);
  const others = all.filter((m) => m.file !== file).sort((a, b) => b.date.localeCompare(a.date));
  const words = (t) => new Set(t.toLowerCase().split(/[^a-zçğıöşü0-9]+/).filter((w) => w.length > 3));
  const sw = words(self.tag);
  const pick = others.filter((m) => [...words(m.tag)].some((w) => sw.has(w))).slice(0, 3);
  for (const m of others) { if (pick.length >= 3) break; if (!pick.includes(m)) pick.push(m); }
  const block = `<!-- related:start -->
    <nav class="related" aria-label="İlgili makaleler">
      <h2 data-i18n="blog_related_h">İlgili Makaleler</h2>
      <ul>
${pick.map((m) => `        <li><a href="${m.file}"${m.key ? ` data-i18n="${m.key}"` : ''}>${escText(m.title)}</a></li>`).join('\n')}
      </ul>
    </nav>
    <!-- related:end -->

    `;
  html = html.replace('<div class="article-footer">', block + '<div class="article-footer">');
  if (!html.includes('.related {')) {
    html = html.replace('</style>', `  .related { margin-top: 56px; }
  .related h2 { border-top: none !important; padding-top: 0 !important; margin-top: 0 !important; font-size: 20px !important; }
  .related ul { list-style: none; padding: 0; }
  .related li { border-bottom: 1px solid var(--ink-4); padding: 12px 0; margin: 0; }
  .related a { color: var(--bone); text-decoration: none; }
  .related a:hover { color: var(--arc-2); }
</style>`);
  }
  fs.writeFileSync(fp, html);
  return true;
}

const tr = loadTr();
const files = fs.readdirSync(BLOG).filter((f) => f.endsWith('.html') && f !== 'index.html');
let changed = 0;
for (const f of files) {
  if (prerender(f, tr)) changed++;
}
const all = files.map(meta);
let related = 0;
for (const f of files) {
  if (addRelated(f, all)) related++;
}
console.log(`prerendered ${changed} blog pages, added related links to ${related}`);
