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
    lead: 'Cinc línies de treball per crear productes digitals, des d’apps petites fins a experiències per a marques.',
    modelLabel: 'Model',
    cta: 'Parlem del teu projecte',
    ctaHref: 'mailto:holaninabaldo@gmail.com',
    items: {
      smallWebApps: {
        title: 'Aplicacions web petites',
        description:
          'Productes que resolen una necessitat concreta i funcionen des del navegador.',
        model: 'Ús gratuït, funcions premium o pagament únic.',
      },
      interactiveExperiences: {
        title: 'Experiències digitals interactives',
        description: 'Projectes més experimentals, visuals i sorprenents.',
        model: 'Projectes propis per captar audiència o encàrrecs per a marques.',
      },
      websitesMicrosites: {
        title: 'Webs i microsites per a altres persones',
        description:
          'Crear pàgines web amb una identitat visual pròpia i funcions interactives.',
        model: 'Cobrar per projecte i, si cal, pel manteniment.',
      },
      businessTools: {
        title: 'Eines i automatitzacions per a petits negocis',
        description:
          'Aplicacions que estalvien feina manual a professionals i empreses.',
        model: 'Desenvolupament a mida, configuració i manteniment mensual.',
      },
      educationalProducts: {
        title: 'Productes educatius interactius',
        description:
          'Convertir coneixements o continguts en experiències pràctiques.',
        model: 'Venda de guies, cursos o llicències.',
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
  contact: {
    modalEyebrow: 'Contacte',
    modalTitle: 'Parlem del teu projecte',
    modalLead: 'Explica’m què tens al cap. Et respondré des de holaninabaldo@gmail.com.',
    footerTitle: 'Contacte',
    footerLead: 'Escriu-me aquí — el mateix formulari que al popup.',
    nameLabel: 'Nom',
    emailLabel: 'Email',
    messageLabel: 'Missatge',
    messagePlaceholder: 'En què et puc ajudar?',
    send: 'Enviar missatge',
    sending: 'Enviant…',
    success: 'Missatge enviat. Gràcies — et respondré aviat.',
    error: 'No s’ha pogut enviar. Torna-ho a provar o escriu a holaninabaldo@gmail.com.',
    close: 'Tancar',
    closeAria: 'Tancar formulari de contacte',
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
    contact: 'Contacte',
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
