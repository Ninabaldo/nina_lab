import type { CentreProposalCopy } from './types'

const it: CentreProposalCopy = {
  meta: { mailSubject: 'Proposta piattaforma gestione corsi' },
  hero: {
    eyebrow: 'Proposta software',
    title: 'Il tuo centro, con il proprio sistema.',
    lead:
      'Una piattaforma per gestire i corsi, pensata per adattarsi al modo in cui lavora il tuo centro.',
    intro:
      'Consulta la proposta, esplora le due esperienze software e configura le funzionalità di cui hai bisogno.',
    ctaExplore: 'Esplora il software',
    ctaBudget: 'Configura il budget',
  },
  section01: {
    index: '01',
    title: "Un'esperienza per ogni profilo",
    student: {
      title: 'App per allievi',
      lead: 'Un modo semplice per consultare i corsi e gestire le prenotazioni dal telefono.',
      demoLabel: 'Funzionalità base del mockup:',
      features: [
        { label: 'Orari', text: 'consulta attività programmate e posti disponibili.' },
        { label: 'Prenotazioni', text: 'prenota un corso o cancella un posto.' },
        { label: 'I miei corsi', text: 'consulta prossime prenotazioni e storico.' },
        { label: 'Abbonamenti', text: 'visualizza pacchetto o membership e lezioni disponibili.' },
        { label: 'Profilo', text: 'consulta i tuoi dati e preferenze.' },
      ],
      cta: "Esplora l'app allievi",
      openFull: 'Apri demo a schermo intero',
    },
    dashboard: {
      title: 'Dashboard per il centro',
      lead:
        'Uno spazio di gestione per corsi, allievi e prenotazioni nello stesso posto.',
      demoLabel: 'Funzionalità base del mockup:',
      features: [
        { label: 'Riepilogo', text: 'consulta prenotazioni e corsi del giorno.' },
        { label: 'Calendario', text: 'organizza attività per giorni e ore.' },
        { label: 'Corsi', text: 'crea attività, assegna istruttori e definisci capienze.' },
        { label: 'Allievi', text: 'consulta profili e prenotazioni.' },
        { label: 'Abbonamenti', text: 'gestisci pacchetti e membership del centro.' },
      ],
      cta: 'Esplora la dashboard',
      openFull: 'Apri demo a schermo intero',
    },
  },
  section02: {
    index: '02',
    title: 'Configura il tuo software',
    lead: 'Seleziona le funzionalità più adatte al centro.',
    base: {
      title: 'Software base',
      subtitle: 'Piattaforma prenotazioni e gestione',
      priceNote: 'implementazione',
      includesLabel: 'Include:',
      includes: [
        'Sito responsive per prenotazioni.',
        'App allievi ottimizzata per mobile.',
        'Dashboard di gestione per il centro.',
        'Calendario corsi e attività.',
        'Gestione prenotazioni e cancellazioni.',
        'Gestione base allievi.',
        'Configurazione corsi, istruttori e capienze.',
      ],
      footnote: 'Questo è il punto di partenza del progeto.',
    },
    addonsTitle: 'Funzionalità aggiuntive',
    addonsLead: 'Seleziona i complementi da includere:',
    addonsRunningTotal: 'Totale complementi selezionati',
    addonIncluded: 'Incluso',
    addons: {
      subscriptions: {
        title: 'Abbonamenti e pacchetti',
        description: 'Gestione di pacchetti lezioni e membership.',
        detail:
          'Definisci modalità, consulta le lezioni disponibili per ogni allievo e gestisci la validità.',
      },
      waitlist: {
        title: "Lista d'attesa",
        description: 'Quando un corso è al completo, gli allievi possono iscriversi in lista d\'attesa.',
        detail: 'Gestisci posti liberati e persone in attesa.',
      },
      payments: {
        title: 'Pagamenti online',
        description:
          'Integrazione pagamenti per acquistare abbonamenti o pagare attività dalla piattaforma.',
        detail: 'Il budget finale dipenderà dal provider di pagamento e dalle commissioni.',
      },
      reminders: {
        title: 'Promemoria automatici',
        description: 'Email di promemoria prima delle lezioni prenotate.',
        detail: 'Aiuta a ridurre le assenze e a ricordare le prenotazioni.',
      },
      instructors: {
        title: 'Gestione avanzata istruttori',
        description: 'Gestisci istruttori, corsi assegnati e orari di ogni professionista.',
        detail: '',
      },
      analytics: {
        title: 'Statistiche e report',
        description: 'Occupazione corsi, prenotazioni e attività del centro.',
        detail: 'Panoramica su come stanno andando le attività.',
      },
    },
  },
  section03: {
    index: '03',
    title: 'Manutenzione',
    lead: 'Dopo l\'implementazione puoi attivare un servizio di manutenzione.',
    maintenanceGroupLabel: 'Manutenzione',
    maintenance: {
      none: {
        title: 'Senza manutenzione',
        description: 'Nessuna quota mensile.',
        extra: 'Interventi successivi saranno preventivati in base alle esigenze.',
      },
      basic: {
        title: 'Manutenzione base',
        description: 'Supervisione e supporto tecnico della piattaforma.',
        includes: [
          'Monitoraggio base del funzionamento.',
          'Correzione di bug nel software consegnato.',
          'Aggiornamenti tecnici minori.',
          'Supporto per incidenti della piattaforma.',
        ],
      },
      extended: {
        title: 'Manutenzione estesa',
        description: 'Manutenzione base con priorità e piccoli miglioramenti.',
        includes: [
          'Tutto quanto in manutenzione base.',
          'Piccoli miglioramenti funzionali.',
          'Aggiustamenti minori al funzionamento.',
          'Priorità nella risoluzione degli incidenti.',
        ],
        extra: 'Nuove funzionalità o ampliamenti importanti saranno preventivati a parte.',
      },
    },
  },
  section04: {
    index: '04',
    title: 'La tua proposta',
    lead: 'Seleziona le funzionalità e consulta il budget stimato.',
    rows: {
      base: 'Software base',
      addons: 'Complementi',
      addonsNone: 'Nessuno selezionato',
      implementation: 'Implementazione',
      maintenance: 'Manutenzione',
      maintenanceOptional: 'Quota mensile opzionale',
    },
    cta: 'Prepara proposta',
  },
  section05: {
    index: '05',
    title: 'Come procediamo?',
    paragraphs: [
      'Una volta definite le funzionalità, concretizziamo ambito e budget definitivo.',
      'Il passo successivo è validare schermate, flussi di prenotazione ed esigenze specifiche del centro prima dello sviluppo.',
    ],
    notesTitle: 'Note',
    notes: [
      'Questo budget è indicativo e soggetto alla definizione finale di funzionalità e ambito.',
      'Gli importi non includono IVA né commissioni di servizi esterni (pagamenti, email, hosting).',
      'Implementazione, tempi e condizioni di pagamento saranno definiti nella proposta finale.',
    ],
  },
  footer: 'Proposta preparata da Nina Baldó',
  demo: {
    back: '← Torna alla proposta',
    studentBadge: 'Demo · App allievi',
    dashboardBadge: 'Demo · Dashboard centro',
    interactiveLabel: 'Mockup interattivo',
    studentTabs: {
      horaris: 'Orari',
      reserves: 'Prenotazioni',
      meves: 'I miei corsi',
      abonaments: 'Packs',
      perfil: 'Profilo',
    },
    dashTabs: {
      resum: 'Riepilogo',
      calendari: 'Calendario',
      classes: 'Corsi',
      alumnes: 'Allievi',
      abonaments: 'Abbonamenti',
    },
    student: {
      labels: {
        spots: '{n} posti',
        full: 'Completo',
        book: 'Prenota',
        toastBooked: 'Prenotazione confermata',
        toastCancelled: 'Prenotazione cancellata',
        tapHint: 'Prova a prenotare un corso',
        syncHint: 'In tempo reale: app allievi e dashboard del centro sono collegati.',
      },
      horaris: {
        title: 'Orari',
        viewWeek: 'Settimana',
        viewMonth: 'Mese',
        classes: [
          { id: 'yoga', name: 'Yoga suave', meta: 'Lunedì · 10:00 · Sala A · Laura' },
          { id: 'pilates', name: 'Pilates', meta: 'Lunedì · 18:30 · Sala B · Marc' },
          { id: 'stretching', name: 'Stretching', meta: 'Martedì · 09:00 · Sala A · Anna' },
        ],
      },
      reserves: {
        title: 'Prenotazione',
        confirm: 'Conferma prenotazione',
        cancel: 'Annulla posto',
      },
      meves: {
        title: 'I miei corsi',
        upcomingLabel: 'Prossime',
        historyLabel: 'Storico',
        upcoming: { name: 'Yoga suave', status: 'Confermata', meta: 'Lunedì 10:00' },
        history: { name: 'Pilates', meta: 'Giovedì scorso · Partecipata' },
      },
      abonaments: {
        title: 'Abbonamento',
        pack: 'Pacchetto 8 lezioni',
        status: 'Attivo',
        meta: '5 lezioni rimanenti · Valido fino al 30/11',
      },
      perfil: {
        title: 'Profilo',
        nameLabel: 'Nome',
        name: 'Maria Soler',
        emailLabel: 'Email',
        email: 'maria@esempio.it',
        prefsLabel: 'Preferenze',
        prefs: 'Promemoria via email · Italiano',
      },
    },
    dashboard: {
      resum: {
        title: 'Riepilogo del giorno',
        leadTemplate: 'Lunedì · {bookings} prenotazioni confermate · {full} corsi al completo',
        kpis: [
          {
            id: 'revenue',
            label: 'Incassi (ott.)',
            value: '4.280 €',
            hint: '+12 % vs mese scorso',
          },
          {
            id: 'activeStudents',
            label: 'Allievi attivi',
            value: '186',
            hint: '28 con membership',
          },
          {
            id: 'bookingsToday',
            label: 'Prenotazioni oggi',
            value: '{n}',
            hint: 'Confermate in calendario',
          },
          {
            id: 'occupancy',
            label: 'Occupazione media',
            value: '78 %',
            hint: 'Settimana in corso',
          },
        ],
        paymentsTitle: 'Pagamenti recenti',
        payments: [
          {
            label: 'Membership mensile',
            amount: '65 €',
            meta: 'Maria Soler · Pagato oggi',
            tone: 'ok',
          },
          {
            label: 'Pacchetto 8 lezioni',
            amount: '120 €',
            meta: 'Jordi Puig · Pagato ieri',
            tone: 'ok',
          },
          {
            label: 'Pilates (singola)',
            amount: '18 €',
            meta: 'In attesa · Link inviato',
            tone: 'pending',
          },
        ],
        scheduleTitle: 'Lezioni di oggi',
        rows: [
          { id: 'yoga', time: '10:00 · Yoga suave', meta: 'Laura · Sala A' },
          { id: 'pilates', time: '18:30 · Pilates', meta: "Marc · Sala B · Lista d'attesa: 2" },
        ],
      },
      calendari: {
        title: 'Calendario',
        lead: 'Passa dalla vista settimanale a quella mensile delle attività programmate.',
        viewWeek: 'Settimana',
        viewMonth: 'Mese',
        days: [
          { label: 'Lunedì', meta: '10:00 Yoga · 18:30 Pilates' },
          { label: 'Martedì', meta: '09:00 Stretching · 19:00 HIIT' },
        ],
      },
      classes: {
        title: 'Corsi',
        lead: 'Occupazione per attività e dati chiave di ogni lezione.',
        studentsLabel: 'allievi',
        rows: [
          {
            id: 'yoga',
            name: 'Yoga suave',
            capacity: '10',
            meta: 'Laura · Lunedì 10:00 · Media settimanale 82 %',
          },
          {
            id: 'pilates',
            name: 'Pilates',
            capacity: '10',
            meta: 'Istruttore: Marc · Lunedì 18:30 · Lista d’attesa attiva',
          },
        ],
      },
      alumnes: {
        title: 'Allievi',
        lead: 'Consulta profili e prenotazioni associate.',
        rows: [
          { name: 'Maria Soler', plan: 'Pacchetto 8', meta: 'Prossima: Yoga lunedì 10:00' },
          { name: 'Jordi Puig', plan: 'Membership', meta: '3 prenotazioni questa settimana' },
        ],
      },
      abonaments: {
        title: 'Abbonamenti',
        lead: 'Gestisci pacchetti e membership del centro.',
        rows: [
          { name: 'Pacchetto 8 lezioni', price: '120 €', meta: '12 allievi attivi' },
          { name: 'Membership mensile', price: '65 €/mese', meta: 'Prenotazioni illimitate · 28 attivi' },
        ],
      },
    },
  },
  mail: {
    greeting: 'Ciao Nina,',
    intro: 'Mi interessa la proposta di piattaforma per la gestione dei corsi. Ecco la mia selezione:',
    baseLabel: 'Software base',
    addonsHeading: 'Complementi',
    addonsNone: 'ninguno seleccionado',
    implementationLabel: 'Implementazione stimata',
    maintenanceNone: 'Manutenzione: nessuna quota mensile',
    maintenanceLine: 'Manutenzione: {title} ({price}/mese)',
    thanks: 'Grazie!',
  },
}

export default it
