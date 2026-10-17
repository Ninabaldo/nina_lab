/** Languages supported by Nina Lab site UI. */
const LAB_LANGS = new Set(['ca', 'es', 'en', 'fr'])

/**
 * Map lab language to embedded app preview locale.
 * Extra codes (e.g. `it` on Nook/Scopo) pass through when listed.
 */
export function resolveLabPreviewLang(
  input: string | undefined,
  extraAllowed: readonly string[] = [],
): string {
  if (input && (LAB_LANGS.has(input) || extraAllowed.includes(input))) {
    return input
  }
  return 'ca'
}
