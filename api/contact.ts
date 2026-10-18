import {
  isValidContactPayload,
  parseContactPayload,
} from './_lib/contactValidation.js'

interface ApiRequest {
  method?: string
  body?: string | Record<string, unknown>
}

interface ApiResponse {
  status: (code: number) => ApiResponse
  json: (body: unknown) => ApiResponse
  setHeader: (name: string, value: string) => ApiResponse
}

function parseRequestBody(body: ApiRequest['body']): unknown {
  if (!body) return null
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as unknown
    } catch {
      return null
    }
  }
  return body
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  const payload = parseContactPayload(parseRequestBody(req.body))
  if (!payload || !isValidContactPayload(payload)) {
    return res.status(400).json({ error: 'Invalid contact payload.' })
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return res.status(503).json({ error: 'Contact delivery is not configured on the server.' })
  }

  const { name, email, message } = payload

  try {
    const upstream = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `Nina's Lab — ${name}`,
        from_name: name,
        replyto: email,
      }),
    })

    const data = (await upstream.json().catch(() => null)) as { success?: boolean } | null

    if (!upstream.ok || !data?.success) {
      return res.status(502).json({ error: 'Delivery failed.' })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ error: 'Delivery failed.' })
  }
}
