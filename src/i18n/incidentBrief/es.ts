import type { IncidentBriefCopy } from '../types'

export const incidentBriefEs: IncidentBriefCopy = {
  eyebrow: 'Operaciones',
  title: 'Incident Brief',
  subtitle:
    'Convierte errores técnicos y respuestas de API en un lenguaje claro para clientes y equipos.',
  inputLabel: 'Entrada técnica',
  inputPlaceholder:
    'Pega un mensaje de error, stack trace o JSON de API…\n\nEjemplo:\n{"error":"card_declined","message":"Your card was declined."}',
  analyze: 'Analizar',
  analyzing: 'Analizando…',
  clear: 'Limpiar',
  outputTitle: 'Resumen',
  sections: {
    whatHappened: 'Qué ha pasado',
    businessImpact: 'Impacto en el negocio',
    recommendedAction: 'Acción recomendada',
  },
  emptySection: 'Ejecuta un análisis para rellenar esta sección.',
  errors: {
    emptyInput: 'Pega un error o JSON antes de analizar.',
    missingApiKey:
      'Falta OPENAI_API_KEY. Añádela a .env.local y reinicia el servidor de desarrollo.',
    generic: 'Algo ha fallado. Inténtalo de nuevo.',
  },
}
