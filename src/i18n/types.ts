import type { Language } from '../lib/preferences'

export interface ExperimentCopy {
  name: string
  description: string
  category: string
}

export interface LifeAlgorithmOptionCopy {
  label: string
  detail: string
  subdetail: string
}

export interface LifeAlgorithmQuestionCopy {
  theme: string
  a: LifeAlgorithmOptionCopy
  b: LifeAlgorithmOptionCopy
}

export interface LifeAlgorithmTimelineItem {
  time: string
  activity: string
}

export interface LifeAlgorithmProfileCopy {
  name: string
  city: string
  lifestyle: string
  timeline: LifeAlgorithmTimelineItem[]
  observations: {
    value: string
    need: string
    enjoy: string
    miss: string
  }
}

export interface LifeAlgorithmCopy {
  lab: string
  title: string
  subtitle: string
  introHint: string
  start: string
  tryAgain: string
  resultEyebrow: string
  resultLead: string
  yourVersion: string
  idealDay: string
  obsYouValue: string
  obsYouNeed: string
  obsYouEnjoy: string
  obsYouMiss: string
  closing1: string
  closing2: string
  questions: Record<
    | 'morning'
    | 'home'
    | 'saturday'
    | 'work'
    | 'distance'
    | 'evening'
    | 'money'
    | 'travel'
    | 'weather'
    | 'life',
    LifeAlgorithmQuestionCopy
  >
  profiles: Record<
    | 'coastalCreative'
    | 'urbanNomad'
    | 'slowBuilder'
    | 'culturalExplorer'
    | 'sunSeeker'
    | 'quietAchiever',
    LifeAlgorithmProfileCopy
  >
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
    comingSoonHeadline: string
    comingSoonText: string
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
    lifeAlgorithm: LifeAlgorithmCopy
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
  }
  controls: {
    language: string
  }
}

export type { Language }
