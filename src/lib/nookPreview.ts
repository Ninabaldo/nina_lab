import type { Language } from './preferences'

const NOOK_HOST = 'nook-ochre-eight.vercel.app'

export function isNookPreviewUrl(url: string): boolean {
  try {
    return new URL(url).hostname === NOOK_HOST
  } catch {
    return false
  }
}

/** Nook reads `?lang=` on load (en, es, ca, fr). */
export function withNookLanguage(url: string, language: Language): string {
  if (!isNookPreviewUrl(url)) return url

  const parsed = new URL(url)
  parsed.searchParams.set('lang', language)
  return parsed.toString()
}
