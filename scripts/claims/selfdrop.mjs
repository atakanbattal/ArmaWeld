// Removes ArmaWeld self-claims from blog text: first narrows NDT lists to what is done in-house (VT, UT),
// then drops sentences that speak about ArmaWeld ("we", "our", "ArmaWeld") AND name an unproven claim.
// A paragraph or list item left empty is removed; an ArmaWeld heading left without content is removed.
const CONJ = '(?:ve|and|und|y|et|e|en|og)';
export const NDT_RE = [
  [`VT, PT, MT(,| ${CONJ}) UT`, 'g', 'VT$1 UT'],
  [`VT, MT, PT(,| ${CONJ}) UT`, 'g', 'VT$1 UT'],
  [`VT, MT(,| ${CONJ}) UT`, 'g', 'VT$1 UT'],
  [`, PT, MT (${CONJ}) UT`, 'g', ' $1 UT'],
  [`PT, MT(,| ${CONJ}) UT`, 'g', 'UT'],
  [`MT ${CONJ} UT`, 'g', 'UT'],
  [`(UT|VT) ${CONJ} MT\\b`, 'g', '$1'],
  [`VT ${CONJ} PT\\b`, 'g', 'VT'],
  ['MT/UT', 'g', 'UT'],
  ['UT/MT', 'g', 'UT'],
  ['WPS(-?)\\s*/\\s*WPQR', 'g', 'WPS$1'],
  ['WPS(-?), WPQR-?, ', 'g', 'WPS$1, '],
];
const SELF = {
  tr: /ArmaWeld|\w+(lerimiz|larımız|lerimizle|larımızla|imizde|ımızda|imizle|ımızla)\b|[Bb]ünyemiz|[Tt]esisimiz|[Aa]tölyemiz|hattımız|tezgâhımız|makinemiz|personelimiz|[Kk]aynakçılarımız|WPS'lerimiz|\bbizde\b|(üretiyor|yapıyor|kaynaklıyor|imal ediyor|teslim ediyor|kullanıyor|uyguluyor|sunuyor|işliyor|yürütüyor|birleştiriyor)(uz\b|,)/,
  en: /ArmaWeld|\b[Oo]ur\b|\b[Ww]e (weld|fabricate|produce|manufacture|perform|carry out|use|run|build|make|deliver|offer|operate|inspect|test|have|supply)\b|in-house/,
  de: /ArmaWeld|\b[Uu]nser\w*\b|\b[Ww]ir (schweißen|fertigen|produzieren|führen|nutzen|verwenden|setzen|liefern|bieten|prüfen|haben)\b|im eigenen Haus|im Haus\b/,
  es: /ArmaWeld|\b[Nn]uestr[oa]s?\b|\b(soldamos|fabricamos|producimos|realizamos|utilizamos|usamos|entregamos|ofrecemos|inspeccionamos|contamos)\b|en casa\b/,
  fr: /ArmaWeld|\b[Nn]otre\b|\b[Nn]os\b|\bnous (soudons|fabriquons|produisons|réalisons|utilisons|livrons|proposons|contrôlons|disposons|effectuons)\b|en interne/,
  it: /ArmaWeld|\b[Nn]ostr[oaie]\b|\b(saldiamo|realizziamo|produciamo|utilizziamo|usiamo|consegniamo|offriamo|eseguiamo|disponiamo)\b|internamente|in casa\b/,
  nl: /ArmaWeld|\b[Oo]nze?\b|\b([Ww]e|[Ww]ij) (lassen|produceren|fabriceren|voeren|gebruiken|leveren|bieden|controleren|hebben)\b|in eigen huis/,
  no: /ArmaWeld|\b[Vv]år(e|t)?\b|\b[Vv]i (sveiser|produserer|utfører|bruker|leverer|tilbyr|kontrollerer|har)\b|internt|i eget hus/,
};
const PARTNER = /ortak|partenaire|socio|partner|[Pp]artner|tedarikçi|supplier|Lieferant|proveedor|fournisseur|fornitor|leverancier|leverandør|koordine|coordinat|koordinier|coordin/;
const LASER = /[Ll]azer|[Ll]aser|[Ll]áser|abkant|[Pp]lazma|[Pp]lasma|plasma|press brake|Abkant|plegad|pliage|piegat|kantbank|kantpress/;
const CLAIM = /EXC ?[1-4]|\bCE\b|\bDoP\b|\bFPC\b|WPQR|QMOS|\b35 ?(m|metre|meter|mètres|metri|metros|metrelik)\b|35-m|\bPED\b|PWHT|Strenx|\bPT\b|\bMT\b|EN 15085|9606-2|80\+|[Dd]uplex|[Dd]ubleks|[Pp]aslanmaz|[Ss]tainless|Edelstahl|\binox|[Ii]noxidable|\bRVS\b|\brvs\b|rustfri|[Aa]lüminyum|[Aa]lumin|[Aa]llumin|[Bb]asınçlı|[Pp]ressure vessel|Druckbehält|a presión|sous pression|in pressione|[Dd]rukvat|[Tt]rykkbehold|[Ss]avunma|[Zz]ırhlı|[Dd]efen[cs]|[Vv]erteidig|[Aa]rmou?red|gepanzert|blindé|blindad|blindat|gepantserd|pansre|militær|[Mm]ilitar/;
const text = (s) => s.replace(/<[^>]+>/g, '');
const splitS = (t) => t.split(/(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜÄÅÆØÉ<"“])/);
function sentences(t, lang) {
  // only sentences about ArmaWeld are touched: NDT lists narrowed first, then dropped if a claim is left
  return splitS(t).map((x) => {
    if (!(SELF[lang] && SELF[lang].test(text(x)))) return x;
    for (const [p, f, r] of NDT_RE) x = x.replace(new RegExp(p, f), r);
    const tx = text(x);
    return CLAIM.test(tx) || (LASER.test(tx) && !PARTNER.test(tx)) ? '' : x;
  }).filter(Boolean).join(' ');
}
export function selfdrop(t, lang) {
  if (!/<[a-z]/i.test(t)) return sentences(t, lang);
  // an ArmaWeld section (heading + content up to the next h2/h3) that carries a claim goes as a whole
  t = t.replace(/<(h[23])\b[^>]*>[^<]*ArmaWeld[^<]*<\/\1>[\s\S]*?(?=<h[23]\b|$)/g, (m) => (CLAIM.test(text(m)) ? '' : m));
  t = t.replace(/(<(p|li)\b[^>]*>)([\s\S]*?)(<\/\2>)/g, (m, a, tag, body, z) => {
    const nb = sentences(body, lang).trim();
    return nb ? a + nb + z : '';
  });
  t = t.replace(/<(ul|ol)\b[^>]*>\s*<\/\1>/g, '');
  t = t.replace(/<div class="callout">\s*<\/div>/g, '');
  // heading about ArmaWeld with nothing left under it
  t = t.replace(/<(h[234])\b[^>]*>[^<]*ArmaWeld[^<]*<\/\1>\s*(?=<h[1234]\b|$)/g, '');
  return t;
}
