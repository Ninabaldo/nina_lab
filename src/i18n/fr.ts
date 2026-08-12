import type { SiteTranslations } from './types'

const fr: SiteTranslations = {
  hero: {
    subtitle1: 'Petites expériences digitales',
    subtitle2: 'faites avec l\'IA par Nina Baldó.',
    scrollHint: 'Faites défiler pour explorer',
    phoneTitle: "Nina's Lab",
    phoneMeta: 'Explorer avec l\'IA',
  },
  intro: {
    eyebrow: 'Expériences digitales',
    title1: 'Petites idées.',
    title2: 'Transformées en quelque chose de réel.',
    text: "Nina's Lab est une collection de petites expériences digitales faites avec l'IA par Nina Baldó — interfaces et outils pour explorer des idées, résoudre des problèmes simples et apprendre en créant.",
    meta: {
      project: 'Projet',
      type: 'Type',
      year: 'Année',
      tech: 'Tech',
      projectValue: "Nina's Lab",
      typeValue: 'Expériences digitales',
    },
  },
  experiments: {
    title: 'Expériences',
    projects: 'projets',
    tryInLab: 'Essayer dans le lab',
    tryIt: 'Essayer',
    openApp: 'Ouvrir l\'app',
    tryInLabAria: 'Essayer dans le laboratoire interactif',
    comingSoon: 'Bientôt',
    items: {
      breathe: {
        name: 'Breathe',
        category: 'Bien-être',
        description:
          'Une expérience de respiration minimaliste pour ralentir, se recentrer et revenir au présent.',
      },
      'focus-timer': {
        name: 'Focus Timer',
        category: 'Productivité',
        description: 'Un minuteur pomodoro doux avec un retour visuel apaisant.',
      },
      'color-studio': {
        name: 'Color Studio',
        category: 'Design',
        description: 'Un colorimètre minimaliste — capturez n\'importe quelle couleur de votre écran.',
      },
      'split-the-bill': {
        name: 'Split the Bill',
        category: 'Utilitaire',
        description: 'Partagez l\'addition entre amis — pourboire inclus.',
      },
      affirmations: {
        name: 'Affirmations',
        category: 'Bien-être',
        description: 'Un générateur d\'affirmations positives de Jung, Fromm, Hillman, Bouddha, Neville Goddard et plus.',
      },
    },
  },
  projects: {
    title: 'Projets',
    subtitle: 'Expériences plus grandes — construites lentement, avec soin.',
    featured: 'Expérience à la une',
    comingSoon: 'Bientôt',
    viewProjects: 'Voir les projets',
    back: 'Retour à l\'accueil',
    teaserEyebrow: 'Au-delà des micro-apps',
    teaserTitle: 'Projets',
    teaserText: 'Des idées plus grandes en gestation — construites lentement, avec soin.',
    empty: 'D\'autres projets arrivent bientôt.',
    items: {},
  },
  footer: {
    nameFirst: 'Nina',
    nameLast: 'Baldó',
    tagline1: 'Produits digitaux, interfaces',
    tagline2: 'et petites expériences.',
    socialAria: 'Liens sociaux',
    support: 'Soutenez-moi',
    projects: 'Projets',
    copy: '© 2026 Nina Baldó',
  },
  modal: {
    close: 'Fermer',
    closeAria: 'Fermer',
  },
  apps: {
    focusTimer: {
      durationAria: 'Durée',
      min: 'min',
      start: 'Commencer',
      pause: 'Pause',
      resume: 'Reprendre',
      reset: 'Réinitialiser',
    },
    colorStudio: {
      label: 'Colorimètre',
      chooseColor: 'Choisir une couleur',
      pick: 'Capturer à l\'écran',
      picking: 'Capture…',
      recent: 'Récents',
      fallback:
        'La capture d\'écran est disponible sur Chrome et Edge en bureau. Utilisez le sélecteur de couleur pour choisir n\'importe quelle teinte.',
      copyHex: 'Copier la couleur hex',
      copied: 'Copié',
    },
    splitBill: {
      billTotal: 'Total addition',
      tip: 'Pourboire',
      tipAria: 'Pourcentage de pourboire',
      people: 'Personnes',
      add: '+ Ajouter',
      subtotal: 'Sous-total',
      total: 'Total',
      person: 'Personne',
      removeAria: 'Supprimer',
    },
    affirmations: {
      newAffirmation: 'Nouvelle affirmation',
    },
  },
  controls: {
    language: 'Langue',
  },
}

export default fr
