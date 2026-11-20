// Mechanical, language-neutral rewrites for unproven claims (EXC class, PT/MT in-house lists, "35 m" SAW line).
const CONJ = '(?:\\/|–|-|to|bis|à|a|al|tot|til|e|ve|und|y|et|og|en|and|or|oder|o|ou|of|eller|veya|\\+)';
const EXC_TAIL = `(?:\\s*(?:[·\\-–,:]\\s*)?(?:<em>|<small>|<span[^>]*>)?\\s*(?:EXC\\s?[1-4]|EXC1)(?:\\s*${CONJ}\\s*(?:EXC\\s?)?[1-4])*(?:'?(?:e|a|ye|ya)\\s+kadar)?(?:<\\/em>|<\\/small>|<\\/span>)?)`;
export function applyRules(v) {
  if (typeof v !== 'string') return v;
  let s = v;
  // "EN 1090-2 EXC3", "EN 1090 · EXC2/3", "EN 1090-2 <em>EXC3</em>" -> "EN 1090-2"
  s = s.replace(new RegExp(`\\b(?:DIN\\s)?EN\\s?1090(?:-2)?(?::\\d{4}(?:\\+A1:\\d{4})?)?${EXC_TAIL}+`, 'g'), 'EN 1090-2');
  s = s.replace(/\bEN\s?1090(?![-\d])/g, 'EN 1090-2');
  s = s.replace(/EN 1090-2(?:\s*[·,]\s*EN 1090-2)+/g, 'EN 1090-2');
  // NDT lists: drop PT and MT next to other method codes
  s = s.replace(/\b(VT|UT|RT)((?:\s*(?:[,·\/+]|\s)\s*(?:PT|MT)\b)+)/g, '$1');
  s = s.replace(/\b(?:PT|MT)\s*[,·\/+]\s*(?=(?:PT|MT|VT|UT|RT)\b)/g, '');
  s = s.replace(/\b(?:PT|MT)\b(?:\s*[,·\/+]\s*(?:PT|MT)\b)*\s*[,·\/+]?\s*(?=(?:VT|UT|RT)\b)/g, '');
  // "35 m" submerged-arc line length (not confirmed)
  s = s.replace(/\b35\s?m(?:etre|eter|etri|ètres|etros|eters)?\b\s*/gi, '');
  return s;
}
