import { resolveLabPreviewLang } from './previewLang.js'

export const SYNC_ORIGIN = 'https://sync-ebon-zeta.vercel.app'

/** Must match Sync app `storageKeys.language` (`sync.language`). */
export const SYNC_LANGUAGE_STORAGE_KEY = 'sync.language'

export function resolveSyncLang(input: string | undefined): string {
  return resolveLabPreviewLang(input)
}

function buildSyncBootstrapScript(lang: string): string {
  const langLiteral = JSON.stringify(lang)
  const originLiteral = JSON.stringify(SYNC_ORIGIN)

  return `<script>
(function () {
  var lang = ${langLiteral};
  var syncOrigin = ${originLiteral};

  try {
    localStorage.setItem('sync.language', lang);
  } catch (e) {}

  try {
    history.replaceState(null, '', window.location.origin + '/');
  } catch (e) {}

  try {
    var base = document.createElement('base');
    base.href = syncOrigin + '/';
    document.head.insertBefore(base, document.head.firstChild);
  } catch (e) {}
})();
</script>`
}

export async function buildSyncPreviewHtml(lang: string): Promise<string> {
  const response = await fetch(`${SYNC_ORIGIN}/`)
  if (!response.ok) {
    throw new Error(`Unable to load sync preview (${response.status}).`)
  }

  const html = await response.text()
  const inject = buildSyncBootstrapScript(lang)

  return html
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace('<head>', `<head>${inject}`)
}
