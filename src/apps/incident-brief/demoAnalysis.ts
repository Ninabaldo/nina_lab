import type { IncidentBriefCopy } from '../../i18n/types'
import type { IncidentAnalysis } from './types'

type DemoScenario = keyof IncidentBriefCopy['demo']

function extractDetail(input: string): string | undefined {
  const trimmed = input.trim()

  try {
    const parsed = JSON.parse(trimmed) as Record<string, unknown>
    const candidates = [parsed.message, parsed.error, parsed.error_description, parsed.detail]
    for (const value of candidates) {
      if (typeof value === 'string' && value.trim()) return value.trim()
    }
    if (typeof parsed.status === 'number') return `HTTP ${parsed.status}`
  } catch {
    // Not JSON — continue with plain-text heuristics.
  }

  const messageMatch = trimmed.match(/"message"\s*:\s*"([^"]+)"/i)
  if (messageMatch?.[1]) return messageMatch[1]

  const firstLine = trimmed.split('\n').find((line) => line.trim())
  if (firstLine && firstLine.length <= 160) return firstLine.trim()

  return undefined
}

function detectScenario(input: string): DemoScenario {
  const lower = input.toLowerCase()

  if (
    /card_declined|payment_failed|insufficient_funds|stripe.*declin|pago rechazado|tarjeta/.test(
      lower,
    )
  ) {
    return 'payment'
  }

  if (
    /api[_ -]?key|openai|invalidated|revoked|incorrect.*key|authentication.*key|invalid_api_key/.test(
      lower,
    )
  ) {
    return 'apiKey'
  }

  if (/401|403|unauthorized|forbidden|invalid[_ ]token|access denied|no autorizado/.test(lower)) {
    return 'auth'
  }

  if (/404|not found|no encontrado|recurso no/.test(lower)) {
    return 'notFound'
  }

  if (/429|rate limit|too many requests|límite de/.test(lower)) {
    return 'rateLimit'
  }

  if (/timeout|timed out|etimedout|504|gateway timeout|tiempo de espera/.test(lower)) {
    return 'timeout'
  }

  if (/500|502|503|internal server|service unavailable|error del servidor/.test(lower)) {
    return 'server'
  }

  if (/400|422|validation|invalid request|bad request|validación/.test(lower)) {
    return 'validation'
  }

  return 'generic'
}

export function analyzeIncidentDemo(input: string, copy: IncidentBriefCopy): IncidentAnalysis {
  const scenario = detectScenario(input)
  const template = copy.demo[scenario]
  const detail = extractDetail(input)

  if (!detail) return { ...template }

  return {
    whatHappened: `${template.whatHappened} ${copy.demoDetailSuffix.replace('{detail}', detail)}`,
    businessImpact: template.businessImpact,
    recommendedAction: template.recommendedAction,
  }
}
