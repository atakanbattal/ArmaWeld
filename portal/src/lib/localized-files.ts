import type { SupabaseClient } from '@supabase/supabase-js';
import { getServerI18n } from './i18n/server';
import { normalizeLocale } from './i18n/locale';
import type { Locale } from './i18n/types';

type Bucket = ReturnType<SupabaseClient['storage']['from']>;

// Translated copies live next to the original under an `en/` folder
// (e.g. `<order>/v2/en/<name>`). Non-Turkish UIs get the English copy when
// one exists and fall back to the original file otherwise.
export function localizedPaths(path: string, locale: Locale) {
  if (locale === 'tr') return [path];
  const i = path.lastIndexOf('/');
  return [`${path.slice(0, i + 1)}en/${path.slice(i + 1)}`, path];
}

export async function requestLocale(request: Request): Promise<Locale> {
  const lang = new URL(request.url).searchParams.get('lang');
  if (lang) return normalizeLocale(lang);
  return (await getServerI18n()).locale;
}

export async function downloadLocalized(bucket: Bucket, path: string, locale: Locale) {
  const candidates = localizedPaths(path, locale);
  for (const candidate of candidates.slice(0, -1)) {
    const result = await bucket.download(candidate);
    if (!result.error && result.data) return result;
  }
  return bucket.download(path);
}

export async function signLocalized(bucket: Bucket, path: string, locale: Locale, expiresIn: number) {
  const candidates = localizedPaths(path, locale);
  for (const candidate of candidates.slice(0, -1)) {
    const result = await bucket.createSignedUrl(candidate, expiresIn);
    if (!result.error && result.data?.signedUrl) return result;
  }
  return bucket.createSignedUrl(path, expiresIn);
}
