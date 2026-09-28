import type { IncidentBriefCopy } from '../types'

export const incidentBriefEn: IncidentBriefCopy = {
  eyebrow: 'Operations',
  title: 'Incident Brief',
  subtitle: 'Turn technical errors and API responses into clear language for clients and teams.',
  inputLabel: 'Technical input',
  inputPlaceholder:
    'Paste an error message, stack trace, or API JSON response…\n\nExample:\n{"error":"card_declined","message":"Your card was declined."}',
  analyze: 'Analyze',
  analyzing: 'Analyzing…',
  clear: 'Clear',
  outputTitle: 'Brief',
  sections: {
    whatHappened: 'What happened',
    businessImpact: 'Business impact',
    recommendedAction: 'Recommended action',
  },
  emptySection: 'Run an analysis to populate this section.',
  errors: {
    emptyInput: 'Paste an error message or JSON before analyzing.',
    missingApiKey:
      'OPENAI_API_KEY is missing. Add it to .env.local and restart the dev server.',
    generic: 'Something went wrong. Please try again.',
  },
}
