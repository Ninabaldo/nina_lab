import type { SiteTranslations } from './types'
import { lifeAlgorithmCa } from './lifeAlgorithm/ca'

const ca: SiteTranslations = {
  hero: {
    subtitle1: 'Petits experiments digitals',
    subtitle2: 'fets amb IA per Nina Baldó.',
    scrollHint: 'Desplaça\'t per explorar',
    phoneTitle: "Nina's Lab",
    phoneMeta: 'Explorant amb la IA',
  },
  intro: {
    eyebrow: 'Experiments digitals',
    title1: 'Petites idees.',
    title2: 'Convertides en alguna cosa real.',
    text: "Nina's Lab és una col·lecció de petits experiments digitals fets amb IA per Nina Baldó — interfícies i eines per explorar idees, resoldre problemes senzills i aprendre fent.",
    meta: {
      project: 'Projecte',
      type: 'Tipus',
      year: 'Any',
      tech: 'Tech',
      projectValue: "Nina's Lab",
      typeValue: 'Experiments digitals',
    },
  },
  experiments: {
    title: 'Experiments',
    projects: 'projectes',
    tryInLab: 'Provar al lab',
    tryIt: 'Provar',
    openApp: 'Obrir app',
    tryInLabAria: 'Provar al laboratori interactiu',
    comingSoon: 'Pròximament',
    items: {
      breathe: {
        name: 'Breathe',
        category: 'Benestar',
        description:
          'Una experiència de respiració minimalista per frenar, resetejar i tornar al present.',
      },
      'focus-timer': {
        name: 'Focus Timer',
        category: 'Productivitat',
        description: 'Un temporitzador pomodoro suau amb feedback visual ambiental.',
      },
      'life-algorithm': {
        name: "L'algoritme de la vida",
        category: 'Experiència',
        description: '10 decisions. Una vida possible. Un perfil fictici basat en com tries viure.',
      },
      'split-the-bill': {
        name: 'Split the Bill',
        category: 'Utilitat',
        description: 'Divideix comptes de restaurant entre amics — propina inclosa.',
      },
      affirmations: {
        name: 'Afirmacions',
        category: 'Benestar',
        description: 'Un generador suau d\'afirmacions positives de Jung, Fromm, Hillman, Budha, Neville Goddard i més.',
      },
    },
  },
  projects: {
    title: 'Projectes',
    subtitle: 'Experiments més grans — fets a poc a poc, amb calma.',
    featured: 'Experiment destacat',
    comingSoon: 'Pròximament',
    viewProjects: 'Veure projectes',
    back: 'Tornar a l\'inici',
    teaserEyebrow: 'Més enllà de les micro-apps',
    teaserTitle: 'Projectes',
    teaserText: 'Idees més grans prenent forma — fetes a poc a poc, amb calma.',
    empty: 'Més projectes en camí.',
    comingSoonHeadline: 'Encara al laboratori',
    comingSoonText:
      'Idees més grans, fetes sense presses. Mentrestant, pots explorar els experiments del lab.',
    items: {},
  },
  footer: {
    nameFirst: 'Nina',
    nameLast: 'Baldó',
    tagline1: 'Productes digitals, interfícies',
    tagline2: 'i petits experiments.',
    socialAria: 'Enllaços socials',
    support: 'Dona\'m suport',
    projects: 'Projectes',
    copy: '© 2026 Nina Baldó',
  },
  modal: {
    close: 'Tancar',
    closeAria: 'Tancar',
  },
  apps: {
    focusTimer: {
      durationAria: 'Durada',
      min: 'min',
      start: 'Començar',
      pause: 'Pausa',
      resume: 'Continuar',
      reset: 'Reiniciar',
    },
    lifeAlgorithm: lifeAlgorithmCa,
    splitBill: {
      billTotal: 'Total compte',
      tip: 'Propina',
      tipAria: 'Percentatge de propina',
      people: 'Persones',
      add: '+ Afegir',
      subtotal: 'Subtotal',
      total: 'Total',
      person: 'Persona',
      removeAria: 'Eliminar',
    },
    affirmations: {
      newAffirmation: 'Nova afirmació',
    },
  },
  controls: {
    language: 'Idioma',
  },
}

export default ca
