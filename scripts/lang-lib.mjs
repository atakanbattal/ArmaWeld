// Shared helpers for building per-language static pages (/en/, /de/, /es/, /fr/).
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
export const LANGS = ['en', 'de', 'es', 'fr'];
export const ALL_LANGS = ['tr', ...LANGS];

// Mirrors the runtime load order in assets/i18n.js
export function loadTranslations({ blog }) {
  const sandbox = { window: {} };
  sandbox.window.window = sandbox.window;
  vm.createContext(sandbox);
  const run = (rel) => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), sandbox, { filename: rel });
  for (const l of ALL_LANGS) run(`assets/lang/${l}.js`);
  run('assets/i18n-content.js');
  run('assets/i18n-tools-ext.js');
  run('assets/i18n-trace-docs.js');
  const w = sandbox.window;
  const merge = (src) => { if (!src) return; for (const l in src) Object.assign(w.TRANSLATIONS[l] = w.TRANSLATIONS[l] || {}, src[l]); };
  merge(w.__AW_DEEP_TRANSLATIONS__);
  merge(w.__AW_TOOLS_EXT__);
  merge(w.__AW_TRACE_DOCS__);
  if (blog) run('assets/blog-translations-2026.js');
  return w.TRANSLATIONS;
}
