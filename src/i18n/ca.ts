import type { SiteTranslations } from './types'
import { companyCalculatorCa } from './companyCalculator/ca'
import { incidentBriefCa } from './incidentBrief/ca'
import { lifeAlgorithmCa } from './lifeAlgorithm/ca'

const ca: SiteTranslations = {
  hero: {
    subtitle1: 'Petits experiments digitals',
    subtitle2: 'fets amb IA per Nina Baldó.',
    scrollHint: 'Desplaça\'t pels projectes',
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
      tech: 'Eines',
      techValue: 'React · TypeScript · PWA · GitHub · Vercel · IA (Cursor)',
      projectValue: "Nina's Lab",
      typeValue: 'Experiments digitals',
    },
  },
  services: {
    eyebrow: 'Serveis',
    title: 'Això és amb el que et puc ajudar',
    lead: 'Aquests són els serveis que ofereixo com a product manager i dissenyadora de producte digital.',
    cta: 'Parlem del teu projecte',
    ctaHref: 'mailto:holaninabaldo@gmail.com',
    items: {
      productManagement: {
        title: 'Gestió de producte',
        description:
          'Discovery, roadmap, backlog i prioritats: posar ordre, decidir amb criteri i portar l’equip al mateix lloc.',
      },
      uxUi: {
        title: 'Disseny UX/UI',
        description:
          'Fluxos, pantalles i interfícies clares — des del wireframe fins al disseny llest per desenvolupar o prototipar.',
      },
      prototypes: {
        title: 'Prototips i MVPs',
        description:
          'Validar idees ràpid amb prototips interactius o primers productes funcionals abans d’escalar el desenvolupament.',
      },
      aiProduct: {
        title: 'Producte amb IA',
        description:
          'Micro-apps, automatitzacions i experiments amb IA (com aquest lab) per provar solucions reals sense projectes enormes.',
      },
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
    secondaryEyebrow: 'Lab',
    secondaryLead: 'Micro-apps per provar idees ràpid — el playground del lab.',
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
    homeEyebrow: 'Portfolio',
    title: 'Projectes',
    subtitle: 'Experiències digitals — producte, disseny i tecnologia.',
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
    openProject: 'Obrir el projecte',
    mobileRowAria: 'Projectes mòbils',
    backToProjects: 'Tornar a projectes',
    items: {
      nook: {
        name: 'nook',
        category: 'Estilisme d\'interiors',
        description: 'Pàgina web interactiva per a professionals de l\'estilisme d\'interiors.',
        previewAria: 'Previsualització del web nook',
      },
      scopo: {
        name: 'Scopo',
        category: 'App mòbil',
        description:
          'Producte digital pensat per a mòbil: accés ràpid, exploració lliure i registre quan toca.',
        previewAria: 'Previsualització mòbil de Scopo',
      },
      picked: {
        name: 'Picked',
        category: 'App mòbil',
        description:
          'Descobreix llocs a través de persones: recomanacions reals en un flux pensat per al mòbil.',
        previewAria: 'Previsualització mòbil de Picked',
      },
    },
  },
  footer: {
    nameFirst: 'Nina',
    nameLast: 'Baldó',
    tagline1: 'Productes digitals, interfícies',
    tagline2: 'i petits experiments.',
    socialAria: 'Enllaços socials',
    support: 'Dona\'m suport',
    projects: 'Projectes',
    services: 'Serveis',
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
    incidentBrief: incidentBriefCa,
    companyCalculator: companyCalculatorCa,
  },
  controls: {
    language: 'Idioma',
  },
  labDesign: {
    eyebrow: 'Interactiu',
    title: "Personalitza Nina's Lab",
    lead: 'Prova colors, tipografies i estils diferents. Fes aquest lab teu.',
    cta: "Personalitzar Nina's Lab",
    panelEyebrow: 'Previsualització en viu',
    panelTitle: "Personalitza Nina's Lab",
    close: 'Tancar el panell de personalització',
    colorsTitle: 'Colors',
    colorsHint: 'Tria una paleta o ajusta cada color. Els canvis s’apliquen a tota la web al moment.',
    palettesAria: 'Paletes de color',
    paletteApply: 'Aplicar paleta',
    primary: 'Primari',
    background: 'Fons',
    text: 'Text',
    surface: 'Superfície / targetes',
    typographyTitle: 'Tipografia',
    displayFont: 'Títols',
    bodyFont: 'Text general',
    defaultDisplayFont: 'Per defecte del Lab (Syne)',
    previewTitle: 'Previsualització de títol',
    previewBody: 'Text de cos per paràgrafs, descripcions i interfície.',
    previewButton: 'Botó',
    styleTitle: 'Estil general',
    styles: {
      minimal: 'Minimal',
      editorial: 'Editorial',
      tech: 'Tech',
      playful: 'Playful',
    },
    reset: 'Restablir',
  },
}

export default ca
