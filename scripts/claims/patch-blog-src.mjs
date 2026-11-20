#!/usr/bin/env node
// Applies selfdrop (ArmaWeld self-claims) to blog source modules in scripts/blog-src/*.mjs, in place.
// Then run: node scripts/build-blog-posts.mjs && node scripts/build-lang-pages.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT, ALL_LANGS } from '../lang-lib.mjs';
import { selfdrop } from './selfdrop.mjs';

const DIR = path.join(ROOT, 'scripts/blog-src');
const SKIP = new Set(['title', 'meta', 'og', 'tag', 'h1', 'crumb', 'read']);
const encs = (s) => [
  ['`', s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')],
  ["'", s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")],
  ['"', s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')],
];
let changed = 0, failed = 0;
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.mjs')).sort()) {
  const file = path.join(DIR, f);
  const mod = (await import(pathToFileURL(file).href + '?t=' + Date.now())).default;
  let src = fs.readFileSync(file, 'utf8');
  const pairs = [];
  const walk = (v, lang, key) => {
    if (typeof v === 'string') { if (!SKIP.has(key)) { const n = selfdrop(v, lang); if (n !== v) pairs.push([v, n, lang, key]); } }
    else if (Array.isArray(v)) v.forEach((x) => walk(x, lang, key));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, lang, k);
  };
  for (const l of ALL_LANGS) if (mod[l]) walk(mod[l], l, '');
  for (const [o, n, l, k] of pairs) {
    let done = false;
    for (const [q, eo] of encs(o)) {
      const needle = q + eo + q;
      if (src.includes(needle)) { const en = encs(n).find((x) => x[0] === q)[1]; src = src.split(needle).join(q + en + q); done = true; break; }
    }
    if (!done) { failed++; console.log(`not found: ${f} ${l}.${k}: ${o.slice(0, 80)}`); }
    else changed++;
  }
  fs.writeFileSync(file, src);
}
console.log(`blog-src strings changed: ${changed}, not found: ${failed}`);
