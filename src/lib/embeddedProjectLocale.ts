import type { Language } from './preferences'

/** Picked app: src/lib/i18n/languages.js → LANGUAGE_STORAGE_KEY */
export const PICKED_LANGUAGE_STORAGE_KEY = 'picked-language'

/** Nook app localStorage key */
export const NOOK_LANGUAGE_STORAGE_KEY = 'nook.lang'

/** Legacy / alias used by older embed bootstrap scripts */
export const PICKED_LANGUAGE_LEGACY_KEY = 'picked.lang'

/** Persist locale keys for embedded apps (lab origin — previews set these inside the iframe via API bootstrap). */
export function syncEmbeddedAppLanguage(language: Language): void {
  try {
    localStorage.setItem(NOOK_LANGUAGE_STORAGE_KEY, language)
    localStorage.setItem(PICKED_LANGUAGE_STORAGE_KEY, language)
    localStorage.setItem(PICKED_LANGUAGE_LEGACY_KEY, language)
  } catch {
    // Ignore when storage is unavailable.
  }
}
