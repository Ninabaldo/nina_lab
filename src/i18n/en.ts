import type { SiteTranslations } from './types'
import { companyCalculatorEn } from './companyCalculator/en'
import { incidentBriefEn } from './incidentBrief/en'
import { lifeAlgorithmEn } from './lifeAlgorithm/en'

const en: SiteTranslations = {
  hero: {
    subtitle1: 'Small digital experiments',
    subtitle2: 'made with AI by Nina Baldó.',
    scrollHint: 'Scroll to projects',
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
      techValue: 'React · TypeScript · PWA · GitHub · Vercel · AI (Cursor)',
      projectValue: "Nina's Lab",
      typeValue: 'Digital experiments',
    },
  },
  techStack: {
    eyebrow: 'Technology',
    title: 'What we use to build these projects',
    lead: 'The same stack across the lab, microapps, and client work.',
    items: {
      react: 'React',
      typescript: 'TypeScript',
      vite: 'Vite',
      pwa: 'PWA',
      vercel: 'Vercel',
      github: 'GitHub',
      cursor: 'AI (Cursor)',
    },
  },
  services: {
    eyebrow: 'Services',
    title: "Here's how I can help",
    lead: 'Five ways I build digital products — from small browser apps to brand experiences.',
    modelLabel: 'Model',
    cta: 'Talk about your project',
    ctaHref: 'mailto:holaninabaldo@gmail.com',
    items: {
      smallWebApps: {
        title: 'Small web applications',
        description:
          'Products that solve a specific need and run in the browser.',
        model: 'Free tier, premium features or one-time payment.',
      },
      interactiveExperiences: {
        title: 'Interactive digital experiences',
        description: 'More experimental, visual and surprising projects.',
        model: 'Own projects to grow an audience or commissioned work for brands.',
      },
      websitesMicrosites: {
        title: 'Websites & microsites for others',
        description:
          'Web pages with a distinct visual identity and interactive features.',
        model: 'Project fee plus optional ongoing maintenance.',
      },
      businessTools: {
        title: 'Tools & automations for small businesses',
        description:
          'Apps that cut manual work for professionals and companies.',
        model: 'Custom build, setup and monthly maintenance.',
      },
      educationalProducts: {
        title: 'Interactive educational products',
        description:
          'Turn knowledge or content into hands-on experiences.',
        model: 'Sales of guides, courses or licenses.',
      },
    },
  },
  workExamples: {
    eyebrow: 'In practice',
    title: 'Lab examples',
    lead:
      'Small lab experiments — always here. Try them to see how I work; bigger projects come later.',
    openExperiment: 'Try it',
  },
  experiments: {
    title: 'Experiments',
    projects: 'projects',
    tryInLab: 'Try in lab',
    tryIt: 'Try it',
    openApp: 'Open app',
    tryInLabAria: 'Try in interactive lab',
    comingSoon: 'Coming soon',
    secondaryEyebrow: 'Lab',
    secondaryLead: 'Micro-apps to try ideas quickly — the lab playground.',
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
      'life-algorithm': {
        name: 'The Life Algorithm',
        category: 'Experience',
        description: '10 choices. One possible life. A fictional profile shaped by how you choose to live.',
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
    homeEyebrow: 'Portfolio',
    title: 'Projects',
    subtitle: 'Digital experiences — product, design, and technology.',
    comingSoon: 'Coming soon',
    viewProjects: 'View projects',
    back: 'Back to home',
    teaserEyebrow: 'Beyond micro-apps',
    teaserTitle: 'Projects',
    teaserText: 'Bigger ideas taking shape — built slowly, with care.',
    empty: 'More projects on the way.',
    comingSoonHeadline: 'Still in the lab',
    comingSoonText:
      'Bigger ideas, built without rush. In the meantime, explore the experiments on the home page.',
    openProject: 'Open project',
    mobileRowAria: 'Mobile projects',
    backToProjects: 'Back to projects',
    items: {
      nook: {
        name: 'nook',
        category: 'Interior styling',
        description: 'An interactive website for interior styling professionals.',
        previewAria: 'Preview of the nook website',
      },
      scopo: {
        name: 'Scopo',
        category: 'Mobile app',
        description:
          'A mobile-first digital product: quick access, browse freely, and sign up when you are ready.',
        previewAria: 'Mobile preview of Scopo',
      },
      picked: {
        name: 'Picked',
        category: 'Mobile app',
        description:
          'Discover places through people—real recommendations in a mobile-first flow.',
        previewAria: 'Mobile preview of Picked',
      },
    },
  },
  contact: {
    modalEyebrow: 'Contact',
    modalTitle: 'Talk about your project',
    modalLead: 'Tell me what you have in mind. I’ll reply from holaninabaldo@gmail.com.',
    footerTitle: 'Contact',
    footerLead: 'Write to me here — same form as the popup.',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    messagePlaceholder: 'How can I help?',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Message sent. Thanks — I’ll get back to you soon.',
    error: 'Couldn’t send. Try again or email holaninabaldo@gmail.com.',
    close: 'Close',
    closeAria: 'Close contact form',
  },
  footer: {
    nameFirst: 'Nina',
    nameLast: 'Baldó',
    tagline1: 'Digital products, interfaces',
    tagline2: 'and small experiments.',
    socialAria: 'Social links',
    support: 'Support me',
    projects: 'Projects',
    services: 'Services',
    contact: 'Contact',
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
    lifeAlgorithm: lifeAlgorithmEn,
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
    incidentBrief: incidentBriefEn,
    companyCalculator: companyCalculatorEn,
  },
  controls: {
    language: 'Language',
  },
  siteHeader: {
    tagline: 'Digital product creation service',
  },
  backToTop: {
    ariaLabel: 'Back to top',
  },
  labDesign: {
    eyebrow: 'Interactive',
    title: "Customize Nina's Lab",
    lead: 'Explore different colors, typography and styles. Make this lab yours.',
    cta: "Customize Nina's Lab",
    panelEyebrow: 'Live preview',
    panelTitle: "Customize Nina's Lab",
    close: 'Close customization panel',
    colorsTitle: 'Colors',
    colorsHint: 'Pick a palette or fine-tune each token. Changes apply instantly across the site.',
    palettesAria: 'Color palettes',
    paletteApply: 'Apply palette',
    primary: 'Primary',
    background: 'Background',
    text: 'Text',
    surface: 'Surface / cards',
    typographyTitle: 'Typography',
    displayFont: 'Headings',
    bodyFont: 'Body text',
    defaultDisplayFont: 'Lab default (Syne)',
    previewTitle: 'Heading preview',
    previewBody: 'Body text preview for paragraphs, descriptions and UI copy.',
    previewButton: 'Button',
    styleTitle: 'General style',
    styles: {
      minimal: 'Minimal',
      editorial: 'Editorial',
      tech: 'Tech',
      playful: 'Playful',
    },
    reset: 'Reset',
  },
}

export default en
