#!/usr/bin/env node
// Static Turkish markup (JSON-LD, pills, badges) that has no i18n key: exact and pattern replacements.
// Usage: node scripts/claims/static-cleanup.mjs
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from '../lang-lib.mjs';

const EXACT = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/claims/static-exact.json'), 'utf8'));
const PATTERNS = [
  // EN 1090 with an execution class -> EN 1090-2
  [/\b(?:DIN\s)?EN(?:\s|&nbsp;)?1090(?:-2)?(?:\s*[·\-–,]\s*|\s+)(?:EXC\s?[1-4]|EXC1)(?:\s*(?:\/|–|-|ve|and)\s*(?:EXC\s?)?[1-4])*/g, 'EN 1090-2'],
  [/EN(&nbsp;|\s)1090<small>EXC\d<\/small>/g, 'EN$11090<small>-2</small>'],
];
const files = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html'));
let total = 0;
for (const f of files) {
  const p = path.join(ROOT, f);
  let s = fs.readFileSync(p, 'utf8');
  const before = s;
  for (const [a, b] of Object.entries(EXACT)) s = s.split(a).join(b);
  for (const [re, rep] of PATTERNS) s = s.replace(re, rep);
  if (s !== before) { fs.writeFileSync(p, s); total++; console.log('updated', f); }
}
console.log('files updated:', total);
