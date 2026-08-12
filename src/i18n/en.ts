import type { SiteTranslations } from './types'

const en: SiteTranslations = {
  hero: {
    subtitle1: 'Small digital experiments',
    subtitle2: 'made with AI by Nina Baldó.',
    scrollHint: 'Scroll to explore',
    phoneTitle: "Nina's Lab",
    phoneMeta: 'Exploring with AI',
  },
  intro: {
    eyebrow: 'Digital experiments',
    title1: 'Small ideas.',
    title2: 'Built into something real.',
    text: "Nina's Lab is a collection of small digital experiments made with AI by Nina Baldó — interfaces and tools built to explore ideas, solve simple problems and learn by making.",
    meta: {
      project: 'Project',
      type: 'Type',
      year: 'Year',
      tech: 'Tech',
      projectValue: "Nina's Lab",
      typeValue: 'Digital experiments',
    },
  },
  experiments: {
    title: 'Experiments',
    projects: 'projects',
    tryInLab: 'Try in lab',
    tryIt: 'Try it',
    openApp: 'Open app',
    tryInLabAria: 'Try in interactive lab',
    comingSoon: 'Coming soon',
    items: {
      breathe: {
        name: 'Breathe',
        category: 'Wellness',
        description:
          'A minimal breathing experience to slow down, reset and come back to the present.',
      },
      'focus-timer': {
        name: 'Focus Timer',
        category: 'Productivity',
        description: 'A gentle pomodoro timer with ambient visual feedback.',
      },
      'color-studio': {
        name: 'Color Studio',
        category: 'Design',
        description: 'A minimal color meter — sample any color directly from your screen.',
      },
      'split-the-bill': {
        name: 'Split the Bill',
        category: 'Utility',
        description: 'Split restaurant bills fairly among friends — tips included.',
      },
      affirmations: {
        name: 'Affirmations',
        category: 'Wellness',
        description: 'A gentle generator of positive affirmations from Jung, Fromm, Hillman, Buddha, Neville Goddard and more.',
      },
    },
  },
  projects: {
    title: 'Projects',
    subtitle: 'Larger experiments — built slowly, with care.',
    featured: 'Featured experiment',
    comingSoon: 'Coming soon',
    viewProjects: 'View projects',
    back: 'Back to home',
    teaserEyebrow: 'Beyond micro-apps',
    teaserTitle: 'Projects',
    teaserText: 'Bigger ideas taking shape — built slowly, with care.',
    empty: 'More projects on the way.',
    items: {},
  },
  footer: {
    nameFirst: 'Nina',
    nameLast: 'Baldó',
    tagline1: 'Digital products, interfaces',
    tagline2: 'and small experiments.',
    socialAria: 'Social links',
    support: 'Support me',
    projects: 'Projects',
    copy: '© 2026 Nina Baldó',
  },
  modal: {
    close: 'Close',
    closeAria: 'Close',
  },
  apps: {
    focusTimer: {
      durationAria: 'Duration',
      min: 'min',
      start: 'Start',
      pause: 'Pause',
      resume: 'Resume',
      reset: 'Reset',
    },
    colorStudio: {
      label: 'Color meter',
      chooseColor: 'Choose color',
      pick: 'Pick from screen',
      picking: 'Sampling…',
      recent: 'Recent',
      fallback:
        'Screen sampling is available on Chrome and Edge desktop. Use the color picker to choose any shade.',
      copyHex: 'Copy hex color',
      copied: 'Copied',
    },
    splitBill: {
      billTotal: 'Bill total',
      tip: 'Tip',
      tipAria: 'Tip percentage',
      people: 'People',
      add: '+ Add',
      subtotal: 'Subtotal',
      total: 'Total',
      person: 'Person',
      removeAria: 'Remove',
    },
    affirmations: {
      newAffirmation: 'New affirmation',
    },
  },
  controls: {
    language: 'Language',
  },
}

export default en
