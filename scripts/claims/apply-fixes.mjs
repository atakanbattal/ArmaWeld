#!/usr/bin/env node
// Applies text fixes from scripts/claims/fixes/*.json to every translation source and the Turkish HTML.
// fixes file: { "<key>": { "tr": "...", "en": "...", ... } }  (only the languages given are changed)
// Usage: node scripts/claims/apply-fixes.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { ROOT, ALL_LANGS, loadTranslations } from '../lang-lib.mjs';
import { selfdrop } from './selfdrop.mjs';

const DRY = process.argv.includes('--dry');
const FIX_DIR = path.join(ROOT, 'scripts/claims/fixes');
const fixes = {};
// later files win per language; regex ("re", "re_<lang>") and "drop" lists from several files are concatenated
const ARR = (k) => k === 're' || k === 'drop' || k.startsWith('re_');
for (const f of fs.readdirSync(FIX_DIR).filter((x) => x.endsWith('.json')).sort()) {
  for (const [key, v] of Object.entries(JSON.parse(fs.readFileSync(path.join(FIX_DIR, f), 'utf8')))) {
    const cur = (fixes[key] ||= {});
    for (const [k, x] of Object.entries(v)) cur[k] = ARR(k) && cur[k] ? [...cur[k], ...x] : x;
  }
}


// "drop": [patterns] removes every list item / table row whose text matches, and every
// sentence that matches inside the remaining text (plain strings and <p>/<li> bodies).
function dropClaims(t, pats) {
  const rx = pats.map((p) => (p.startsWith('=') ? new RegExp(p.slice(1)) : new RegExp(p, 'i'))); // '=' prefix: case-sensitive
  const hit = (x) => rx.some((r) => r.test(x.replace(/<[^>]+>/g, '')));
  t = t.replace(/<(li|tr)\b[^>]*>[\s\S]*?<\/\1>/g, (m) => (hit(m) ? '' : m));
  t = t.replace(/<div class="faq-item">[\s\S]*?<\/div>/g, (m) => (hit(m.replace(/<h3>[\s\S]*?<\/h3>/, '')) || hit(m.match(/<h3>([\s\S]*?)<\/h3>/)?.[1] || '') ? '' : m));
  const sent = (txt) => {
    const parts = txt.split(/(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜÄÖÅÆØÉ<])/);
    const keep = parts.filter((x) => !hit(x));
    return keep.length ? keep.join(' ') : txt;
  };
  if (!/<[a-z]/i.test(t)) return sent(t);
  return t.replace(/(<(p|li|td)\b[^>]*>)([\s\S]*?)(<\/\2>)/g, (m, a, tag, body, z) => a + sent(body) + z);
}

const OLD = loadTranslations({ blog: true });
// expand shorthand: "*" = same text in every language; "re" = [pattern, flags, replacement] applied to each language's current text
for (const [key, v] of Object.entries(fixes)) {
  const out = {};
  for (const l of ALL_LANGS) {
    if (v[l] !== undefined) out[l] = v[l];
    else if (v['*'] !== undefined) out[l] = v['*'];
    else if ((v.re || v['re_' + l] || v.drop || v.selfdrop) && OLD[l] && typeof OLD[l][key] === 'string') {
      let t = OLD[l][key];
      for (const [p, f, r] of [...(v.re || []), ...(v['re_' + l] || [])]) t = t.replace(new RegExp(p, f), r);
      if (v.drop) t = dropClaims(t, v.drop);
      if (v.selfdrop) t = selfdrop(t, l);
      if (t !== OLD[l][key]) out[l] = t;
    }
  }
  fixes[key] = out;
}
const SOURCES = ['assets/i18n-content.js', 'assets/i18n-tools-ext.js', 'assets/i18n-trace-docs.js', 'assets/blog-translations-2026.js', ...ALL_LANGS.map((l) => `assets/lang/${l}.js`)];
const LANG_HDR = /(?:["']?\b(tr|en|de|es|fr|it|nl|no)\b["']?\s*:\s*\{|Object\.assign\(\s*deep\.(tr|en|de|es|fr|it|nl|no)\s*,\s*\{|\badd\(\s*['"](tr|en|de|es|fr|it|nl|no)['"]\s*,\s*\{)/g;

// read one JS string literal starting at s[i] (quote char); returns end index (exclusive)
function literalEnd(s, i) {
  const q = s[i];
  let j = i + 1;
  while (j < s.length) {
    if (s[j] === '\\') { j += 2; continue; }
    if (s[j] === q) return j + 1;
    if (q === '`' && s[j] === '$' && s[j + 1] === '{') throw new Error('template expr');
    j++;
  }
  throw new Error('unterminated');
}
const evalLit = (lit) => vm.runInNewContext(lit);
const enc = (v) => JSON.stringify(v).split('\u2028').join('\\u2028').split('\u2029').join('\\u2029');

const report = { replaced: 0, missing: [], htmlMissing: [] };
for (const rel of SOURCES) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) continue;
  let s = fs.readFileSync(file, 'utf8');
  const fileLang = (rel.match(/assets\/lang\/(\w+)\.js$/) || [])[1];
  const hdrs = [];
  if (!fileLang) { let m; LANG_HDR.lastIndex = 0; while ((m = LANG_HDR.exec(s))) hdrs.push([m.index, m[1] || m[2] || m[3]]); }
  const langAt = (pos) => { if (fileLang) return fileLang; let l = null; for (const [p, x] of hdrs) { if (p > pos) break; l = x; } return l; };
  const edits = [];
  for (const key of Object.keys(fixes)) {
    const re = new RegExp(`(["']?)\\b${key.replace(/[$]/g, '\\$')}\\1\\s*:\\s*(?=["'\`])`, 'g');
    let m;
    while ((m = re.exec(s))) {
      const start = m.index + m[0].length;
      let end;
      try { end = literalEnd(s, start); } catch { continue; }
      const lang = langAt(m.index);
      if (!lang) continue;
      const nv = fixes[key][lang];
      if (nv === undefined || nv === null) continue;
      edits.push([start, end, enc(nv), key, lang]);
    }
  }
  edits.sort((a, b) => b[0] - a[0]);
  for (const [a, b, v] of edits) s = s.slice(0, a) + v + s.slice(b);
  report.replaced += edits.length;
  if (edits.length && !DRY) fs.writeFileSync(file, s);
  if (edits.length) console.log(`${rel}: ${edits.length}`);
}

// Turkish HTML: elements and attributes bound to the key, plus long literal copies (JSON-LD, FAQ)
const esc = (v) => v.replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;');
const escAttr = (v) => esc(v).replace(/"/g, '&quot;');
const plain = (v) => v.replace(/<[^>]+>/g, '');
const htmlFiles = [...fs.readdirSync(ROOT).filter((f) => f.endsWith('.html')), ...fs.readdirSync(path.join(ROOT, 'blog')).filter((f) => f.endsWith('.html')).map((f) => 'blog/' + f)];
const htmlCache = Object.fromEntries(htmlFiles.map((f) => [f, fs.readFileSync(path.join(ROOT, f), 'utf8')]));
const ATTRS = { 'data-i18n': 'content', 'data-i18n-placeholder': 'placeholder', 'data-i18n-aria': 'aria-label', 'data-i18n-alt': 'alt', 'data-i18n-title': 'title', 'data-i18n-value': 'value' };
for (const [key, v] of Object.entries(fixes)) {
  if (v.tr === undefined) continue;
  const old = OLD.tr[key];
  if (!old) report.missing.push(key);
  const k = key.replace(/[$]/g, '\\$');
  let hits = 0;
  for (const f of htmlFiles) {
    let h = htmlCache[f];
    // attribute-bound (meta content, placeholder, ...)
    for (const [a, target] of Object.entries(ATTRS)) {
      const re1 = new RegExp(`(<[^>]*\\s${a}="${k}"[^>]*\\s${target}=")[^"]*(")`, 'g');
      const re2 = new RegExp(`(<[^>]*\\s${target}=")[^"]*("[^>]*\\s${a}="${k}")`, 'g');
      h = h.replace(re1, (m0, p1, p2) => { hits++; return p1 + escAttr(plain(v.tr)) + p2; });
      h = h.replace(re2, (m0, p1, p2) => { hits++; return p1 + escAttr(plain(v.tr)) + p2; });
    }
    // element-bound (closing tag found by depth, so nested same-name tags are kept intact)
    {
      const reOpen = new RegExp(`<(\\w+)\\b[^>]*\\sdata-i18n(-html)?="${k}"[^>]*>`, 'g');
      let out = '', last = 0, mo;
      while ((mo = reOpen.exec(h))) {
        const tag = mo[1], isHtml = mo[2];
        if (tag === 'meta') continue;
        const start = mo.index + mo[0].length;
        const tre = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
        tre.lastIndex = start;
        let depth = 1, end = -1, cm;
        while ((cm = tre.exec(h))) { if (cm[0].endsWith('/>')) continue; depth += cm[1] ? -1 : 1; if (!depth) { end = cm.index; break; } }
        if (end < 0) continue;
        hits++;
        out += h.slice(last, start) + (isHtml ? v.tr : esc(plain(v.tr)));
        last = end;
        reOpen.lastIndex = end;
      }
      h = out + h.slice(last);
    }
    // long literal copies
    if (old && old.length >= 40) {
      for (const o of new Set([old, esc(old)])) { const parts = h.split(o); if (parts.length > 1) { hits += parts.length - 1; h = parts.join(o === old ? v.tr : esc(v.tr)); } }
      const po = plain(old); if (po.length >= 40 && po !== old) { const parts = h.split(po); if (parts.length > 1) { hits += parts.length - 1; h = parts.join(plain(v.tr)); } }
    }
    htmlCache[f] = h;
  }
  if (!hits) report.htmlMissing.push(key);
}
if (!DRY) for (const f of htmlFiles) { const p = path.join(ROOT, f); if (fs.readFileSync(p, 'utf8') !== htmlCache[f]) fs.writeFileSync(p, htmlCache[f]); }
console.log(`literals replaced: ${report.replaced}`);
if (report.missing.length) console.log('keys without Turkish source:', report.missing.join(', '));
if (report.htmlMissing.length) console.log('Turkish text not found in HTML (check by hand):', report.htmlMissing.join(', '));
