import type { IncidentBriefCopy } from '../types'

export const incidentBriefEn: IncidentBriefCopy = {
  eyebrow: 'Operations',
  title: 'Incident Brief',
  subtitle:
    'Turn technical errors and API responses into clear language for clients and teams. Unlimited demo mode—no AI credits required.',
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
  demoBadge: 'Demo mode',
  demoDetailSuffix: 'Detected signal: «{detail}».',
  demo: {
    payment: {
      whatHappened:
        'The customer payment did not complete—the bank or card network declined the transaction.',
      businessImpact:
        'The sale is left pending; the customer may think they were charged or abandon checkout.',
      recommendedAction:
        'Ask the customer to try another card or payment method and check the gateway for decline details.',
    },
    auth: {
      whatHappened:
        'The request lacked valid permission—the session expired, the token is wrong, or the user lacks access.',
      businessImpact:
        'The user cannot continue (login, checkout, or internal screens) until access is restored.',
      recommendedAction:
        'Sign in again or refresh the token; if it persists, review roles and API keys in the affected environment.',
    },
    notFound: {
      whatHappened:
        'The system looked up a resource (URL, ID, or endpoint) that does not exist or is no longer available.',
      businessImpact:
        'Broken links, blank screens, or silent failures for end users.',
      recommendedAction:
        'Verify the URL or identifier, recent deploys, and redirects; fix stale data on the client or API.',
    },
    rateLimit: {
      whatHappened:
        'Too many requests were sent in a short window and the service applied a temporary limit.',
      businessImpact:
        'Core flows (login, search, payments) may fail intermittently under load or bot traffic.',
      recommendedAction:
        'Add retries with backoff, review quotas and caching; if traffic is legitimate, request a higher limit from the provider.',
    },
    timeout: {
      whatHappened:
        'The service or an external dependency did not respond in time and the connection was dropped.',
      businessImpact:
        'Slow UX or intermittent errors; duplicate actions if users retry without knowing whether the operation succeeded.',
      recommendedAction:
        'Check provider status, latency, and timeouts; show a clear message to users and use idempotency where needed.',
    },
    server: {
      whatHappened:
        'The server hit an internal error or is temporarily unavailable (5xx).',
      businessImpact:
        'Partial or full service disruption; trust erodes if it repeats during peak hours.',
      recommendedAction:
        'Review logs and alerts, check recent deploys, scale if needed, and communicate if impact is broad.',
    },
    validation: {
      whatHappened:
        'The submitted data did not match what the API expects—format, required fields, or invalid values.',
      businessImpact:
        'Forms or integrations fail; support gets tickets that look like bugs but are bad input.',
      recommendedAction:
        'Compare the payload to API docs, improve client-side validation messages, and fix the affected field.',
    },
    apiKey: {
      whatHappened:
        'The integration with the AI service or an external API failed because the access key is invalid, expired, or was revoked.',
      businessImpact:
        'Features that depend on that service (such as automatic analysis) stay down until a valid key is configured.',
      recommendedAction:
        'Create a new key in the provider dashboard, update it in the environment (local or Vercel), and redeploy—never expose the key in the client or repo.',
    },
    generic: {
      whatHappened:
        'A technical error occurred while processing the request; map the specific signal to business impact.',
      businessImpact:
        'Depends on the flow (payment, signup, internal ops)—classify whether it is blocking or recoverable.',
      recommendedAction:
        'Share the full message with support or engineering, note time and user action, and prioritize by volume.',
    },
  },
  errors: {
    emptyInput: 'Paste an error message or JSON before analyzing.',
    missingApiKey:
      'OPENAI_API_KEY is missing. Add it to .env.local and restart the dev server.',
    generic: 'Something went wrong. Please try again.',
  },
}
