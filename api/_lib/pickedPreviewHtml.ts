import { resolveLabPreviewLang } from './previewLang.js'

const PICKED_ORIGIN = 'https://picked-beta.vercel.app'

export function resolvePickedLang(input: string | undefined): string {
  return resolveLabPreviewLang(input)
}

export async function buildPickedPreviewHtml(lang: string): Promise<string> {
  const response = await fetch(`${PICKED_ORIGIN}/`)
  if (!response.ok) {
    throw new Error(`Unable to load picked preview (${response.status}).`)
  }

  const html = await response.text()
  const langLiteral = JSON.stringify(lang)
  const inject = `<script>try{localStorage.setItem("picked.lang",${langLiteral})}catch(e){}</script><base href="${PICKED_ORIGIN}/">`

  return html
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace('<head>', `<head>${inject}`)
}
