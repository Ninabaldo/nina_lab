export interface IncidentAnalysis {
  whatHappened: string
  businessImpact: string
  recommendedAction: string
}

export const INCIDENT_BRIEF_LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  es: 'Spanish',
  ca: 'Catalan',
  fr: 'French',
}

export const INCIDENT_BRIEF_MAX_INPUT_LENGTH = 12000

function isValidAnalysis(value: unknown): value is IncidentAnalysis {
  if (!value || typeof value !== 'object') return false
  const record = value as Record<string, unknown>
  return (
    typeof record.whatHappened === 'string' &&
    typeof record.businessImpact === 'string' &&
    typeof record.recommendedAction === 'string'
  )
}

export async function analyzeIncidentInput(
  input: string,
  language: string,
  apiKey: string,
): Promise<IncidentAnalysis> {
  const languageName = INCIDENT_BRIEF_LANGUAGE_NAMES[language] ?? INCIDENT_BRIEF_LANGUAGE_NAMES.en

  const systemPrompt = [
    'You translate technical incidents for product managers, support teams, and client-facing stakeholders.',
    `Write all output in ${languageName}.`,
    'Return strict JSON with exactly these keys:',
    '- whatHappened: plain-language explanation for a non-technical client (2-4 sentences)',
    '- businessImpact: concise user or business impact (1-2 sentences, e.g. "Users cannot complete checkout")',
    '- recommendedAction: concrete next steps for engineering or support (2-4 bullet-like sentences, no markdown list syntax)',
    'If input is JSON, interpret status codes and error fields. If ambiguous, state assumptions briefly inside whatHappened.',
    'Do not invent monitoring data or root causes that are not supported by the input.',
  ].join('\n')

  const openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: input },
      ],
    }),
  })

  const openAiPayload = (await openAiResponse.json()) as {
    error?: { message?: string }
    choices?: Array<{ message?: { content?: string } }>
  }

  if (!openAiResponse.ok) {
    throw new Error(openAiPayload.error?.message ?? 'OpenAI request failed.')
  }

  const content = openAiPayload.choices?.[0]?.message?.content
  if (!content) {
    throw new Error('Empty response from analysis service.')
  }

  const parsed = JSON.parse(content) as unknown
  if (!isValidAnalysis(parsed)) {
    throw new Error('Invalid analysis format returned by model.')
  }

  return parsed
}
