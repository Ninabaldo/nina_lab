import { buildPickedPreviewHtml, resolvePickedLang } from './_lib/pickedPreviewHtml.js'

interface ApiRequest {
  query: Partial<Record<string, string | string[]>>
}

interface ApiResponse {
  status: (code: number) => ApiResponse
  setHeader: (name: string, value: string) => ApiResponse
  send: (body: string) => void
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  const rawLang = req.query.lang
  const langInput = typeof rawLang === 'string' ? rawLang : undefined

  try {
    const html = await buildPickedPreviewHtml(resolvePickedLang(langInput))
    res.status(200).send(html)
  } catch {
    res.status(502).send('<!doctype html><title>picked preview unavailable</title>')
  }
}
