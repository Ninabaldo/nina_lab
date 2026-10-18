import { resolveLabPreviewLang } from './previewLang.js'

const NOOK_ORIGIN = 'https://nook-ochre-eight.vercel.app'

export function resolveNookLang(input: string | undefined): string {
  return resolveLabPreviewLang(input, ['it'])
}

function absolutizeRootPaths(html: string, origin: string): string {
  return html
    .replace(/\shref="\/(assets\/[^"]+)"/g, ` href="${origin}/$1"`)
    .replace(/\ssrc="\/(assets\/[^"]+)"/g, ` src="${origin}/$1"`)
}

function buildNookBootstrapScript(lang: string, moduleSrc: string): string {
  const langLiteral = JSON.stringify(lang)
  const moduleLiteral = JSON.stringify(moduleSrc)

  return `<script>
(function () {
  var lang = ${langLiteral};
  var moduleSrc = ${moduleLiteral};

  try {
    localStorage.setItem('nook.lang', lang);
  } catch (e) {}

  try {
    history.replaceState(null, '', window.location.origin + '/');
  } catch (e) {}

  var script = document.createElement('script');
  script.type = 'module';
  script.crossOrigin = 'anonymous';
  script.src = moduleSrc;
  document.head.appendChild(script);
})();
</script>`
}

export async function buildNookPreviewHtml(lang: string): Promise<string> {
  const response = await fetch(`${NOOK_ORIGIN}/`)
  if (!response.ok) {
    throw new Error(`Unable to load nook preview (${response.status}).`)
  }

  let html = await response.text()
  const moduleMatch = html.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/)
  const moduleSrc = moduleMatch
    ? new URL(moduleMatch[1], NOOK_ORIGIN).href
    : `${NOOK_ORIGIN}/assets/index.js`

  html = html.replace(/<script type="module" crossorigin src="[^"]+"><\/script>\s*/, '')
  html = absolutizeRootPaths(html, NOOK_ORIGIN)

  const inject = `<base href="${NOOK_ORIGIN}/"><style>html,body{overflow-x:hidden!important;overscroll-behavior-x:none}</style>${buildNookBootstrapScript(lang, moduleSrc)}`

  return html
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace('<head>', `<head>${inject}`)
}
