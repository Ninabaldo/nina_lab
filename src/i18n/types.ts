import type { Language } from '../lib/preferences'

export interface ExperimentCopy {
  name: string
  description: string
  category: string
}

export interface SiteTranslations {
  hero: {
    subtitle1: string
    subtitle2: string
    scrollHint: string
    phoneTitle: string
    phoneMeta: string
  }
  intro: {
    eyebrow: string
    title1: string
    title2: string
    text: string
    meta: {
      project: string
      type: string
      year: string
      tech: string
      projectValue: string
      typeValue: string
    }
  }
  experiments: {
    title: string
    projects: string
    tryInLab: string
    tryIt: string
    openApp: string
    tryInLabAria: string
    comingSoon: string
    items: Record<string, ExperimentCopy>
  }
  projects: {
    title: string
    subtitle: string
    featured: string
    comingSoon: string
    viewProjects: string
    back: string
    teaserEyebrow: string
    teaserTitle: string
    teaserText: string
    empty: string
    items: Record<string, {
      name: string
      category: string
      description: string
      previewAria: string
    }>
  }
  footer: {
    nameFirst: string
    nameLast: string
    tagline1: string
    tagline2: string
    socialAria: string
    support: string
    projects: string
    copy: string
  }
  modal: {
    close: string
    closeAria: string
  }
  apps: {
    focusTimer: {
      durationAria: string
      min: string
      start: string
      pause: string
      resume: string
      reset: string
    }
    colorStudio: {
      label: string
      pick: string
      picking: string
      recent: string
      fallback: string
      copyHex: string
      copied: string
    }
    splitBill: {
      billTotal: string
      tip: string
      tipAria: string
      people: string
      add: string
      subtotal: string
      total: string
      person: string
      removeAria: string
    }
    affirmations: {
      newAffirmation: string
    }
    oracleCards: {
      label: string
      draw: string
      drawAgain: string
      themeLove: string
      themeRelations: string
      themeWork: string
      intentionLabel: string
      intentionOpen: string
      introOpen: string
      introLove: string
      introRelations: string
      introWork: string
      revealOpen: string
      revealLove: string
      revealRelations: string
      revealWork: string
      forYou: string
    }
  }
  controls: {
    themeLight: string
    themeDark: string
    language: string
  }
}

export type { Language }
