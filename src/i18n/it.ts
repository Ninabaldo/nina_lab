import type { SiteTranslations } from './types'
import { companyCalculatorIt } from './companyCalculator/it'
import { incidentBriefIt } from './incidentBrief/it'
import { lifeAlgorithmIt } from './lifeAlgorithm/it'
const it: SiteTranslations = {
  hero: {
    subtitle1: 'Piccoli esperimenti digitali',
    subtitle2: 'realizzati con IA da Nina Baldó.',
    scrollHint: 'Scorri ai progetti',
    phoneTitle: "Nina's Lab",
    phoneMeta: 'Esplorando con l\'IA',
  },
  intro: {
    eyebrow: 'Esperimenti digitali',
    title1: 'Piccole idee.',
    title2: 'Trasformate in qualcosa di reale.',
    text: "Nina's Lab è una raccolta di piccoli esperimenti digitali realizzati con IA da Nina Baldó — interfacce e strumenti per esplorare idee, risolvere problemi semplici e imparare facendo.",
    meta: {
      project: 'Progetto',
      type: 'Tipo',
      year: 'Anno',
      tech: 'Tech',
      techValue: 'React · TypeScript · PWA · GitHub · Vercel · IA (Cursor)',
      projectValue: "Nina's Lab",
      typeValue: 'Esperimenti digitali',
    },
  },
  techStack: {
    eyebrow: 'Tecnologia',
    title: 'Con cosa costruiamo questi progetti',
    lead: 'Lo stesso stack nel lab, nelle microapp e nei progetti per clienti.',
    items: {
      react: 'React',
      typescript: 'TypeScript',
      vite: 'Vite',
      pwa: 'PWA',
      vercel: 'Vercel',
      github: 'GitHub',
      cursor: 'IA (Cursor)',
    },
  },
  services: {
    eyebrow: 'Servizi',
    title: 'Ecco come posso aiutarti',
    lead: 'Cinque modi per creare prodotti digitali, dalle piccole app web alle esperienze per brand.',
    modelLabel: 'Modello',
    cta: 'Parliamo del tuo progetto',
    ctaHref: 'mailto:holaninabaldo@gmail.com',
    items: {
      smallWebApps: {
        title: 'Piccole applicazioni web',
        description:
          'Prodotti che risolvono un bisogno concreto e funzionano dal browser.',
        model: 'Uso gratuito, funzioni premium o pagamento una tantum.',
      },
      interactiveExperiences: {
        title: 'Esperienze digitali interattive',
        description: 'Progetti più sperimentali, visivi e sorprendenti.',
        model: 'Progetti propri per audience o commissioni per brand.',
      },
      websitesMicrosites: {
        title: 'Siti e microsite per altri',
        description:
          'Pagine web con identità visiva propria e funzioni interattive.',
        model: 'Tariffa a progetto e, se serve, manutenzione.',
      },
      businessTools: {
        title: 'Strumenti e automazioni per piccole imprese',
        description:
          'App che riducono il lavoro manuale di professionisti e aziende.',
        model: 'Sviluppo su misura, setup e manutenzione mensile.',
      },
      educationalProducts: {
        title: 'Prodotti educativi interattivi',
        description:
          'Trasformare conoscenze o contenuti in esperienze pratiche.',
        model: 'Vendita di guide, corsi o licenze.',
      },
    },
  },
  workExamples: {
    eyebrow: 'In pratica',
    title: 'Esempi dal lab',
    lead:
      'Piccoli esperimenti del lab — sempre qui. Provali per vedere come lavoro; i progetti più grandi arrivano dopo.',
    openExperiment: 'Prova',
  },
  experiments: {
    title: 'Esperimenti',
    projects: 'progetti',
    tryInLab: 'Prova nel lab',
    tryIt: 'Prova',
    openApp: 'Apri app',
    tryInLabAria: 'Prova nel laboratorio interattivo',
    comingSoon: 'Prossimamente',
    secondaryEyebrow: 'Lab',
    secondaryLead: 'Micro-app per testare idee in fretta — il playground del lab.',
    items: {
      breathe: {
        name: 'Breathe',
        category: 'Benessere',
        description:
          "Un'esperienza di respirazione minimalista per rallentare, resettare e tornare al presente.",
      },
      'focus-timer': {
        name: 'Focus Timer',
        category: 'Produttività',
        description: 'Un timer pomodoro leggero con feedback visivo ambientale.',
      },
      'life-algorithm': {
        name: "L'algoritmo della vita",
        category: 'Esperienza',
        description: '10 scelte. Una vita possibile. Un profilo immaginario in base a come scegli di vivere.',
      },
      'split-the-bill': {
        name: 'Split the Bill',
        category: 'Utilità',
        description: 'Dividi il conto del ristorante tra amici — mancia inclusa.',
      },
      affirmations: {
        name: 'Affermazioni',
        category: 'Benessere',
        description: 'Un generatore gentile di affermazioni positive da Jung, Fromm, Hillman, Buddha, Neville Goddard e altri.',
      },
    },
  },
  projects: {
    homeEyebrow: 'Portfolio',
    title: 'Progetti',
    subtitle: 'Esperienze digitali — prodotto, design e tecnologia.',
    comingSoon: 'Prossimamente',
    viewProjects: 'Vedi progetti',
    back: 'Torna alla home',
    teaserEyebrow: 'Oltre le micro-app',
    teaserTitle: 'Progetti',
    teaserText: 'Idee più grandi che prendono forma — con calma, senza fretta.',
    empty: 'Altri progetti in arrivo.',
    comingSoonHeadline: 'Ancora in laboratorio',
    comingSoonText:
      'Idee più grandi, senza fretta. Nel frattempo, esplora gli esperimenti del lab.',
    openProject: 'Apri il progetto',
    mobileRowAria: 'Progetti mobile',
    backToProjects: 'Torna ai progetti',
    items: {
      nook: {
        name: 'nook',
        category: 'Interior styling',
        description: "Sito interattivo per professionisti dell'interior styling.",
        previewAria: 'Anteprima del sito nook',
      },
      scopo: {
        name: 'Scopo',
        category: 'App mobile',
        description:
          'Prodotto digitale mobile-first: accesso rapido, esplorazione libera e registrazione quando serve.',
        previewAria: 'Anteprima mobile di Scopo',
      },
      picked: {
        name: 'Picked',
        category: 'App mobile',
        description:
          'Scopri luoghi attraverso le persone: consigli reali in un flusso pensato per mobile.',
        previewAria: 'Anteprima mobile di Picked',
      },
    },
  },
  contact: {
    modalEyebrow: 'Contatto',
    modalTitle: 'Parliamo del tuo progetto',
    modalLead: 'Raccontami la tua idea. Risponderò da holaninabaldo@gmail.com.',
    footerTitle: 'Contatto',
    footerLead: 'Scrivimi qui — stesso modulo del popup.',
    nameLabel: 'Nome',
    emailLabel: 'Email',
    messageLabel: 'Messaggio',
    messagePlaceholder: 'Come posso aiutarti?',
    send: 'Invia messaggio',
    sending: 'Invio in corso…',
    success: 'Messaggio inviato. Grazie — ti risponderò presto.',
    error: 'Invio non riuscito. Riprova o scrivimi a holaninabaldo@gmail.com.',
    validationError: 'Controlla i campi: nome, email valida e messaggio di almeno 5 caratteri.',
    activationError:
      'FormSubmit non è ancora attivato. Controlla holaninabaldo@gmail.com (e spam), apri il link «Activate Form» e reinvia.',
    close: 'Chiudi',
    closeAria: 'Chiudi modulo di contatto',
  },
  footer: {
    nameFirst: 'Nina',
    nameLast: 'Baldó',
    tagline1: 'Prodotti digitali, interfacce',
    tagline2: 'e piccoli esperimenti.',
    socialAria: 'Link social',
    support: 'Supportami',
    projects: 'Progetti',
    services: 'Servizi',
    contact: 'Contatto',
    copy: '© 2026 Nina Baldó',
  },
  modal: {
    close: 'Chiudi',
    closeAria: 'Chiudi',
  },
  apps: {
    focusTimer: {
      durationAria: 'Durata',
      min: 'min',
      start: 'Inizia',
      pause: 'Pausa',
      resume: 'Riprendi',
      reset: 'Reimposta',
    },
    lifeAlgorithm: lifeAlgorithmIt,
    splitBill: {
      billTotal: 'Totale conto',
      tip: 'Mancia',
      tipAria: 'Percentuale mancia',
      people: 'Persone',
      add: '+ Aggiungi',
      subtotal: 'Subtotale',
      total: 'Totale',
      person: 'Persona',
      removeAria: 'Rimuovi',
    },
    affirmations: {
      newAffirmation: 'Nuova affermazione',
    },
    incidentBrief: incidentBriefIt,
    companyCalculator: companyCalculatorIt,
  },
  controls: {
    language: 'Lingua',
  },
  siteHeader: {
    tagline: 'Servizio di creazione prodotti digitali',
  },
  backToTop: {
    ariaLabel: 'Torna su',
  },
  labDesign: {
    eyebrow: 'Interattivo',
    title: "Personalizza Nina's Lab",
    lead: 'Prova colori, tipografie e stili diversi. Rendi tuo questo lab.',
    cta: "Personalizza Nina's Lab",
    panelEyebrow: 'Anteprima live',
    panelTitle: "Personalizza Nina's Lab",
    close: 'Chiudi pannello personalizzazione',
    colorsTitle: 'Colori',
    colorsHint: 'Scegli una palette o regola ogni colore. Le modifiche si applicano subito a tutto il sito.',
    palettesAria: 'Palette di colori',
    paletteApply: 'Applica palette',
    primary: 'Primario',
    background: 'Sfondo',
    text: 'Testo',
    surface: 'Superficie / schede',
    typographyTitle: 'Tipografia',
    displayFont: 'Titoli',
    bodyFont: 'Testo generale',
    defaultDisplayFont: 'Predefinito del Lab (Syne)',
    previewTitle: 'Anteprima titolo',
    previewBody: 'Testo di paragrafo per descrizioni e copy di interfaccia.',
    previewButton: 'Pulsante',
    styleTitle: 'Stile generale',
    styles: {
      minimal: 'Minimal',
      editorial: 'Editorial',
      tech: 'Tech',
      playful: 'Playful',
    },
    reset: 'Reimposta',
  },
}

export default it
