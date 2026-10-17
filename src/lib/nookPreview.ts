import type { Language } from './preferences'

const NOOK_HOST = 'nook-ochre-eight.vercel.app'

export function isNookPreviewUrl(url: string): boolean {
  try {
    return new URL(url, window.location.origin).hostname === NOOK_HOST
  } catch {
    return false
  }
}

/** Same-origin proxy sets `nook.lang` before the nook bundle runs. */
export function getNookPreviewSrc(language: Language): string {
  return `/api/nook-preview?lang=${encodeURIComponent(language)}`
}

export function withNookLanguage(url: string, language: Language): string {
  if (isNookPreviewUrl(url)) return getNookPreviewSrc(language)
  return url
}
