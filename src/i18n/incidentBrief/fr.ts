import type { IncidentBriefCopy } from '../types'

export const incidentBriefFr: IncidentBriefCopy = {
  eyebrow: 'Opérations',
  title: 'Incident Brief',
  subtitle:
    'Transformez les erreurs techniques et les réponses API en langage clair pour les clients et les équipes.',
  inputLabel: 'Entrée technique',
  inputPlaceholder:
    'Collez un message d\'erreur, une stack trace ou un JSON d\'API…\n\nExemple :\n{"error":"card_declined","message":"Your card was declined."}',
  analyze: 'Analyser',
  analyzing: 'Analyse en cours…',
  clear: 'Effacer',
  outputTitle: 'Synthèse',
  sections: {
    whatHappened: 'Ce qui s\'est passé',
    businessImpact: 'Impact business',
    recommendedAction: 'Action recommandée',
  },
  emptySection: 'Lancez une analyse pour remplir cette section.',
  errors: {
    emptyInput: 'Collez une erreur ou un JSON avant d\'analyser.',
    missingApiKey:
      'OPENAI_API_KEY est manquante. Ajoutez-la à .env.local et redémarrez le serveur de dev.',
    generic: 'Une erreur est survenue. Réessayez.',
  },
}
