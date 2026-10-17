import { resolveLabPreviewLang } from './previewLang.js'

const PICKED_ORIGIN = 'https://picked-beta.vercel.app'

export function resolvePickedLang(input: string | undefined): string {
  return resolveLabPreviewLang(input)
}

function buildPickedBootstrapScript(lang: string, moduleSrc: string): string {
  const langLiteral = JSON.stringify(lang)
  const moduleLiteral = JSON.stringify(moduleSrc)

  return `<script>
(function () {
  var lang = ${langLiteral};
  var moduleSrc = ${moduleLiteral};

  try {
    localStorage.setItem('picked.lang', lang);
  } catch (e) {}

  try {
    history.replaceState(null, '', '/');
  } catch (e) {}

  var script = document.createElement('script');
  script.type = 'module';
  script.crossOrigin = 'anonymous';
  script.src = moduleSrc;
  document.head.appendChild(script);
})();
</script>`
}

export async function buildPickedPreviewHtml(lang: string): Promise<string> {
  const response = await fetch(`${PICKED_ORIGIN}/`)
  if (!response.ok) {
    throw new Error(`Unable to load picked preview (${response.status}).`)
  }

  const html = await response.text()
  const moduleMatch = html.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/)
  const moduleSrc = moduleMatch
    ? new URL(moduleMatch[1], PICKED_ORIGIN).href
    : `${PICKED_ORIGIN}/assets/index.js`

  const withoutModule = html.replace(
    /<script type="module" crossorigin src="[^"]+"><\/script>\s*/,
    '',
  )

  const inject = `<base href="${PICKED_ORIGIN}/">${buildPickedBootstrapScript(lang, moduleSrc)}`

  return withoutModule
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace('<head>', `<head>${inject}`)
}
