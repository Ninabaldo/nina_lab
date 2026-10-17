import { resolveLabPreviewLang } from './previewLang.js'

const NOOK_ORIGIN = 'https://nook-ochre-eight.vercel.app'

export function resolveNookLang(input: string | undefined): string {
  return resolveLabPreviewLang(input, ['it'])
}

export async function buildNookPreviewHtml(lang: string): Promise<string> {
  const response = await fetch(`${NOOK_ORIGIN}/`)
  if (!response.ok) {
    throw new Error(`Unable to load nook preview (${response.status}).`)
  }

  const html = await response.text()
  const langLiteral = JSON.stringify(lang)
  const inject = `<script>try{localStorage.setItem("nook.lang",${langLiteral})}catch(e){}</script><base href="${NOOK_ORIGIN}/">`

  return html.replace('<head>', `<head>${inject}`)
}
