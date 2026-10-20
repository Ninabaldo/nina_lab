/** Keep in sync with src/lib/embeddedProjectLocale.ts */

export const PICKED_LANGUAGE_STORAGE_KEY = 'picked-language'
export const NOOK_LANGUAGE_STORAGE_KEY = 'nook.lang'
export const PICKED_LANGUAGE_LEGACY_KEY = 'picked.lang'

export function buildEmbeddedLocaleStorageScript(lang: string): string {
  const langLiteral = JSON.stringify(lang)
  const pickedKey = JSON.stringify(PICKED_LANGUAGE_STORAGE_KEY)
  const nookKey = JSON.stringify(NOOK_LANGUAGE_STORAGE_KEY)
  const legacyKey = JSON.stringify(PICKED_LANGUAGE_LEGACY_KEY)

  return `
  try {
    localStorage.setItem(${pickedKey}, ${langLiteral});
    localStorage.setItem(${legacyKey}, ${langLiteral});
    localStorage.setItem(${nookKey}, ${langLiteral});
  } catch (e) {}`
}
