import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import {
  analyzeIncidentInput,
  INCIDENT_BRIEF_LANGUAGE_NAMES,
  INCIDENT_BRIEF_MAX_INPUT_LENGTH,
} from '../api/_lib/incidentBrief.js'

function readRequestBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })
}

function sendJson(res: ServerResponse, statusCode: number, body: unknown) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

export function incidentBriefDevApi(apiKey: string | undefined): Plugin {
  return {
    name: 'incident-brief-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url !== '/api/incident-brief') {
          next()
          return
        }

        if (req.method !== 'POST') {
          res.setHeader('Allow', 'POST')
          sendJson(res, 405, { error: 'Method not allowed. Use POST.' })
          return
        }

        try {
          const rawBody = await readRequestBody(req)
          const payload = rawBody ? (JSON.parse(rawBody) as Record<string, unknown>) : null
          const input = typeof payload?.input === 'string' ? payload.input.trim() : ''
          const language =
            typeof payload?.language === 'string' && payload.language in INCIDENT_BRIEF_LANGUAGE_NAMES
              ? payload.language
              : 'en'

          if (!input) {
            sendJson(res, 400, { error: 'Missing input. Paste an error message or API JSON.' })
            return
          }

          if (input.length > INCIDENT_BRIEF_MAX_INPUT_LENGTH) {
            sendJson(res, 400, {
              error: `Input is too long. Maximum ${INCIDENT_BRIEF_MAX_INPUT_LENGTH} characters.`,
            })
            return
          }

          if (!apiKey) {
            sendJson(res, 500, {
              error: 'Server configuration error: OPENAI_API_KEY is not set.',
            })
            return
          }

          const analysis = await analyzeIncidentInput(input, language, apiKey)
          sendJson(res, 200, { analysis })
        } catch (error) {
          const message =
            error instanceof Error ? error.message : 'Unable to analyze the incident right now.'
          sendJson(res, 502, { error: message })
        }
      })
    },
  }
}
