import type { IncidentBriefCopy } from '../types'

export const incidentBriefFr: IncidentBriefCopy = {
  eyebrow: 'Opérations',
  title: 'Incident Brief',
  subtitle:
    'Transformez les erreurs techniques et les réponses API en langage clair pour les clients et les équipes. Mode démo illimité, sans crédits IA.',
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
  demoBadge: 'Mode démo',
  demoDetailSuffix: 'Signal détecté : « {detail} ».',
  demo: {
    payment: {
      whatHappened:
        'Le paiement client n\'a pas abouti : la banque ou le réseau de cartes a refusé la transaction.',
      businessImpact:
        'La vente reste en suspens ; le client peut croire qu\'il a été débité ou abandonner le parcours.',
      recommendedAction:
        'Proposez une autre carte ou un autre moyen de paiement et consultez la passerelle pour le motif du refus.',
    },
    auth: {
      whatHappened:
        'La requête n\'avait pas les droits valides : session expirée, jeton incorrect ou accès refusé.',
      businessImpact:
        'L\'utilisateur ne peut pas continuer (connexion, paiement, écran interne) tant que l\'accès n\'est pas rétabli.',
      recommendedAction:
        'Reconnectez-vous ou régénérez le jeton ; si ça persiste, vérifiez rôles et clés API sur l\'environnement concerné.',
    },
    notFound: {
      whatHappened:
        'Le système a cherché une ressource (URL, ID ou endpoint) inexistante ou plus disponible.',
      businessImpact:
        'Liens cassés, écrans vides ou échecs silencieux pour les utilisateurs.',
      recommendedAction:
        'Vérifiez l\'URL ou l\'identifiant, les déploiements récents et les redirections ; corrigez les données obsolètes côté client ou API.',
    },
    rateLimit: {
      whatHappened:
        'Trop de requêtes en peu de temps : le service a appliqué une limite temporaire.',
      businessImpact:
        'Les parcours clés (connexion, recherche, paiement) peuvent échouer par intermittence sous charge ou bots.',
      recommendedAction:
        'Ajoutez des retries avec backoff, revoyez quotas et cache ; si le trafic est légitime, demandez une hausse de limite au fournisseur.',
    },
    timeout: {
      whatHappened:
        'Le service ou une dépendance externe n\'a pas répondu à temps et la connexion a été coupée.',
      businessImpact:
        'Lenteur ou erreurs intermittentes ; risque de doublons si l\'utilisateur réessaie sans savoir si l\'opération a abouti.',
      recommendedAction:
        'Vérifiez l\'état du fournisseur, la latence et les timeouts ; message clair côté client et idempotence si besoin.',
    },
    server: {
      whatHappened:
        'Le serveur a rencontré une erreur interne ou est temporairement indisponible (5xx).',
      businessImpact:
        'Interruption partielle ou totale ; perte de confiance si cela se répète aux heures de pointe.',
      recommendedAction:
        'Consultez logs et alertes, déploiements récents, scalez si nécessaire et communiquez si l\'impact est large.',
    },
    validation: {
      whatHappened:
        'Les données envoyées ne correspondent pas à ce que l\'API attend (format, champs requis, valeurs invalides).',
      businessImpact:
        'Formulaires ou intégrations en échec ; le support reçoit des tickets « bug » qui sont souvent des données incorrectes.',
      recommendedAction:
        'Comparez le payload à la doc API, améliorez les messages de validation côté client et corrigez le champ concerné.',
    },
    apiKey: {
      whatHappened:
        'L\'intégration au service IA ou à une API externe a échoué : la clé d\'accès est invalide, expirée ou révoquée.',
      businessImpact:
        'Les fonctions qui en dépendent (comme l\'analyse automatique) restent indisponibles tant qu\'une clé valide n\'est pas configurée.',
      recommendedAction:
        'Créez une nouvelle clé dans le tableau de bord du fournisseur, mettez-la à jour dans l\'environnement (local ou Vercel) et redéployez—ne jamais exposer la clé côté client ou dans le dépôt.',
    },
    generic: {
      whatHappened:
        'Une erreur technique s\'est produite lors du traitement ; il faut traduire le signal concret en impact métier.',
      businessImpact:
        'Dépend du parcours (paiement, inscription, opération interne)—distinguer bloquant ou récupérable.',
      recommendedAction:
        'Transmettez le message complet au support ou à l\'ingénierie, avec l\'heure et l\'action utilisateur, et priorisez selon le volume.',
    },
  },
  errors: {
    emptyInput: 'Collez une erreur ou un JSON avant d\'analyser.',
    missingApiKey:
      'OPENAI_API_KEY est manquante. Ajoutez-la à .env.local et redémarrez le serveur de dev.',
    generic: 'Une erreur est survenue. Réessayez.',
  },
}
