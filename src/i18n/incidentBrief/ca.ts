import type { IncidentBriefCopy } from '../types'

export const incidentBriefCa: IncidentBriefCopy = {
  eyebrow: 'Operacions',
  title: 'Incident Brief',
  subtitle:
    'Converteix errors tècnics i respostes d\'API en un llenguatge clar per a clients i equips.',
  inputLabel: 'Entrada tècnica',
  inputPlaceholder:
    'Enganxa un missatge d\'error, stack trace o JSON d\'API…\n\nExemple:\n{"error":"card_declined","message":"Your card was declined."}',
  analyze: 'Analitzar',
  analyzing: 'Analitzant…',
  clear: 'Netejar',
  outputTitle: 'Resum',
  sections: {
    whatHappened: 'Què ha passat',
    businessImpact: 'Impacte en el negoci',
    recommendedAction: 'Acció recomanada',
  },
  emptySection: 'Executa una anàlisi per omplir aquesta secció.',
  errors: {
    emptyInput: 'Enganxa un error o JSON abans d\'analitzar.',
    missingApiKey:
      'Falta OPENAI_API_KEY. Afegeix-la a .env.local i reinicia el servidor de desenvolupament.',
    generic: 'Alguna cosa ha fallat. Torna-ho a provar.',
  },
}
