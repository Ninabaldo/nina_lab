interface ApiRequest {
  method?: string
  body?: string | Record<string, unknown>
}

interface ApiResponse {
  status: (code: number) => ApiResponse
  json: (body: unknown) => ApiResponse
  setHeader: (name: string, value: string) => ApiResponse
}

function parseRequestBody(body: ApiRequest['body']): Record<string, unknown> | null {
  if (!body) return null
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as Record<string, unknown>
    } catch {
      return null
    }
  }
  return body
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  const payload = parseRequestBody(req.body)
  const name = typeof payload?.name === 'string' ? payload.name.trim() : ''
  const email = typeof payload?.email === 'string' ? payload.email.trim() : ''
  const message = typeof payload?.message === 'string' ? payload.message.trim() : ''

  if (name.length < 2 || name.length > 120) {
    return res.status(400).json({ error: 'Invalid name.' })
  }

  if (!isValidEmail(email) || email.length > 200) {
    return res.status(400).json({ error: 'Invalid email.' })
  }

  if (message.length < 5 || message.length > 4000) {
    return res.status(400).json({ error: 'Invalid message.' })
  }

  return res.status(410).json({
    error: 'Use the site contact form. Submissions are sent from the browser via FormSubmit.',
  })
}
