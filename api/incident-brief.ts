import {
  analyzeIncidentInput,
  INCIDENT_BRIEF_LANGUAGE_NAMES,
  INCIDENT_BRIEF_MAX_INPUT_LENGTH,
} from './_lib/incidentBrief.js'

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

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  const payload = parseRequestBody(req.body)
  const input = typeof payload?.input === 'string' ? payload.input.trim() : ''
  const language =
    typeof payload?.language === 'string' && payload.language in INCIDENT_BRIEF_LANGUAGE_NAMES
      ? payload.language
      : 'en'

  if (!input) {
    return res.status(400).json({ error: 'Missing input. Paste an error message or API JSON.' })
  }

  if (input.length > INCIDENT_BRIEF_MAX_INPUT_LENGTH) {
    return res.status(400).json({
      error: `Input is too long. Maximum ${INCIDENT_BRIEF_MAX_INPUT_LENGTH} characters.`,
    })
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error: 'Server configuration error: OPENAI_API_KEY is not set.',
    })
  }

  try {
    const analysis = await analyzeIncidentInput(input, language, apiKey)
    return res.status(200).json({ analysis })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to analyze the incident right now.'
    return res.status(502).json({ error: message })
  }
}
