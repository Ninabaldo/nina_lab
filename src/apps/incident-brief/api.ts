import type {
  IncidentAnalysis,
  IncidentBriefErrorResponse,
  IncidentBriefResponse,
} from './types'

async function parseResponsePayload(
  response: Response,
): Promise<IncidentBriefResponse | IncidentBriefErrorResponse | null> {
  const raw = await response.text()
  if (!raw) return null

  try {
    return JSON.parse(raw) as IncidentBriefResponse | IncidentBriefErrorResponse
  } catch {
    return null
  }
}

export async function analyzeIncident(
  input: string,
  language: string,
): Promise<IncidentAnalysis> {
  const response = await fetch('/api/incident-brief', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input, language }),
  })

  const payload = await parseResponsePayload(response)

  if (!payload) {
    if (response.status === 404) {
      throw new Error(
        'Analysis API is not available yet. Add OPENAI_API_KEY to .env.local and restart the dev server.',
      )
    }
    throw new Error('Unexpected response from analysis service.')
  }

  if (!response.ok) {
    const message =
      'error' in payload && typeof payload.error === 'string'
        ? payload.error
        : 'Unable to analyze the incident.'
    throw new Error(message)
  }

  if (!('analysis' in payload)) {
    throw new Error('Invalid response from analysis service.')
  }

  return payload.analysis
}
