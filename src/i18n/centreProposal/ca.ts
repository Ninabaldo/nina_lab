import type { CentreProposalCopy } from './types'

const ca: CentreProposalCopy = {
  meta: { mailSubject: 'Proposta plataforma de gestió de classes' },
  hero: {
    eyebrow: 'Proposta de software',
    title: 'El teu centre, amb el seu propi sistema.',
    lead:
      'Una plataforma de gestió de classes dissenyada per adaptar-se al funcionament del teu centre.',
    intro:
      'Consulta la proposta, explora les dues experiències de software i configura les funcionalitats que necessites.',
    ctaExplore: 'Explorar el software',
    ctaBudget: 'Configurar pressupost',
  },
  section01: {
    index: '01',
    title: 'Una experiència per a cada perfil',
    student: {
      title: 'App per als alumnes',
      lead:
        'Una manera senzilla de consultar les classes i gestionar les reserves des del mòbil.',
      demoLabel: 'Funcionalitats bàsiques del mockup:',
      features: [
        { label: 'Horaris', text: 'consulta les activitats programades i les places disponibles.' },
        { label: 'Reserves', text: 'reserva una classe o cancel·la una plaça.' },
        { label: 'Les meves classes', text: "consulta les pròximes reserves i l'historial." },
        { label: 'Abonaments', text: 'visualitza el teu pack o membresia i les classes disponibles.' },
        { label: 'Perfil', text: 'consulta les teves dades i preferències.' },
      ],
      cta: 'Explorar l’app dels alumnes',
      openFull: 'Obrir demo a pantalla completa',
    },
    dashboard: {
      title: 'Dashboard per al centre',
      lead:
        'Un espai de gestió per tenir les classes, els alumnes i les reserves organitzades en un mateix lloc.',
      demoLabel: 'Funcionalitats bàsiques del mockup:',
      features: [
        { label: 'Resum', text: 'consulta les reserves i les classes del dia.' },
        { label: 'Calendari', text: 'organitza les activitats per dies i hores.' },
        { label: 'Classes', text: 'crea activitats, assigna instructors i defineix aforaments.' },
        { label: 'Alumnes', text: 'consulta els perfils i les seves reserves.' },
        { label: 'Abonaments', text: 'gestiona els packs i les membresies del centre.' },
      ],
      cta: 'Explorar el dashboard',
      openFull: 'Obrir demo a pantalla completa',
    },
  },
  section02: {
    index: '02',
    title: 'Configura el teu software',
    lead: 'Selecciona les funcionalitats que millor s’adapten a les necessitats del centre.',
    base: {
      title: 'Software base',
      subtitle: 'Plataforma de reserves i gestió',
      priceNote: 'implementació',
      includesLabel: 'Inclou:',
      includes: [
        'Web responsive de reserves.',
        'App d’alumnes adaptada a mòbil.',
        'Dashboard de gestió per al centre.',
        'Calendari de classes i activitats.',
        'Gestió de reserves i cancel·lacions.',
        'Gestió bàsica d’alumnes.',
        'Configuració de classes, instructors i aforaments.',
      ],
      footnote: 'Aquest és el punt de partida del projecte.',
    },
    addonsTitle: 'Funcionalitats addicionals',
    addonsLead: 'Selecciona els complements que vols incorporar:',
    addonsRunningTotal: 'Total complements seleccionats',
    addonIncluded: 'Inclòs',
    addons: {
      subscriptions: {
        title: 'Abonaments i packs',
        description: 'Gestió de packs de classes i membresies.',
        detail:
          'Permet definir diferents modalitats, consultar les classes disponibles de cada alumne i gestionar la seva vigència.',
      },
      waitlist: {
        title: "Llista d'espera",
        description:
          "Quan una classe estigui completa, els alumnes podran apuntar-se a una llista d'espera.",
        detail:
          'Permet gestionar les places que queden lliures i les persones que esperen per reservar.',
      },
      payments: {
        title: 'Pagaments online',
        description:
          "Integració d'un sistema de pagament perquè els alumnes puguin comprar abonaments o pagar activitats des de la plataforma.",
        detail:
          'El pressupost definitiu dependrà del proveïdor de pagaments i de les seves comissions.',
      },
      reminders: {
        title: 'Recordatoris automàtics',
        description: 'Enviament de recordatoris per email abans de les classes reservades.',
        detail:
          'Ajuda a reduir les absències i facilita que els alumnes recordin les seves reserves.',
      },
      instructors: {
        title: "Gestió avançada d'instructors",
        description:
          'Permet gestionar diferents instructors, les seves classes assignades i els horaris de cada professional.',
        detail: '',
      },
      analytics: {
        title: 'Estadístiques i informes',
        description:
          "Consulta dades sobre l'ocupació de les classes, les reserves i l'activitat del centre.",
        detail: "Permet tenir una visió general del funcionament de les activitats.",
      },
    },
  },
  section03: {
    index: '03',
    title: 'Manteniment',
    lead:
      'Després de la implementació, pots escollir si vols contractar un servei de manteniment.',
    maintenanceGroupLabel: 'Manteniment',
    maintenance: {
      none: {
        title: 'Sense manteniment',
        description: 'No inclou una quota mensual.',
        extra: 'Les intervencions posteriors es pressupostaran segons les necessitats del centre.',
      },
      basic: {
        title: 'Manteniment bàsic',
        description: 'Supervisió i suport tècnic de la plataforma.',
        includes: [
          'Supervisió bàsica del funcionament.',
          "Correcció d'errors tècnics del software desenvolupat.",
          'Actualitzacions tècniques menors.',
          'Suport per incidències relacionades amb la plataforma.',
        ],
      },
      extended: {
        title: 'Manteniment ampliat',
        description: 'Manteniment bàsic amb prioritat i petites millores.',
        includes: [
          'Tot el manteniment bàsic.',
          'Petites millores de funcionalitat.',
          'Ajustos menors en el funcionament de la plataforma.',
          "Prioritat en la resolució d'incidències.",
        ],
        extra: 'Les noves funcionalitats o ampliacions importants es pressupostaran a part.',
      },
    },
  },
  section04: {
    index: '04',
    title: 'La teva proposta',
    lead: 'Selecciona les funcionalitats que vols incloure i consulta el pressupost estimat.',
    rows: {
      base: 'Software base',
      addons: 'Complements',
      addonsNone: 'Cap seleccionat',
      implementation: 'Implementació',
      maintenance: 'Manteniment',
      maintenanceOptional: 'Quota mensual opcional',
    },
    cta: 'Preparar proposta',
  },
  section05: {
    index: '05',
    title: 'Com continuem?',
    paragraphs: [
      'Una vegada definides les funcionalitats, concretarem l’abast del projecte i prepararem el pressupost definitiu.',
      'El següent pas serà validar les pantalles, els processos de reserva i les necessitats específiques del centre abans de començar el desenvolupament.',
    ],
    notesTitle: 'Notes',
    notes: [
      'Aquest pressupost és orientatiu i està subjecte a la definició final de les funcionalitats i de l’abast del projecte.',
      'Els imports no inclouen IVA, si correspon, ni les comissions de serveis externs, com ara plataformes de pagament, email o allotjament.',
      'La implementació, els terminis i les condicions de pagament es concretaran en la proposta definitiva.',
    ],
  },
  footer: 'Proposta preparada per Nina Baldó',
  demo: {
    back: '← Tornar a la proposta',
    studentBadge: 'Demo · App alumnes',
    dashboardBadge: 'Demo · Dashboard centre',
    interactiveLabel: 'Mockup interactiu',
    studentTabs: {
      horaris: 'Horaris',
      reserves: 'Reserves',
      meves: 'Meves',
      abonaments: 'Packs',
      perfil: 'Perfil',
    },
    dashTabs: {
      resum: 'Resum',
      calendari: 'Calendari',
      classes: 'Classes',
      alumnes: 'Alumnes',
      abonaments: 'Abonaments',
    },
    student: {
      labels: {
        spots: '{n} places',
        full: 'Completa',
        book: 'Reservar',
        toastBooked: 'Reserva confirmada',
        toastCancelled: 'Reserva cancel·lada',
        tapHint: 'Prova de reservar una classe',
        syncHint: 'En viu: l’app d’alumnes i el dashboard del centre estan connectats.',
      },
      horaris: {
        title: 'Horaris',
        viewWeek: 'Setmana',
        viewMonth: 'Mes',
        classes: [
          { id: 'yoga', name: 'Yoga suau', meta: 'Dilluns · 10:00 · Sala A · Laura' },
          { id: 'pilates', name: 'Pilates', meta: 'Dilluns · 18:30 · Sala B · Marc' },
          { id: 'stretching', name: 'Stretching', meta: 'Dimarts · 09:00 · Sala A · Anna' },
        ],
      },
      reserves: {
        title: 'Reserva',
        confirm: 'Confirmar reserva',
        cancel: 'Cancel·lar plaça',
      },
      meves: {
        title: 'Les meves classes',
        upcomingLabel: 'Properes',
        historyLabel: 'Historial',
        upcoming: { name: 'Yoga suau', status: 'Confirmada', meta: 'Dilluns 10:00' },
        history: { name: 'Pilates', meta: 'Dijous passat · Assistida' },
      },
      abonaments: {
        title: 'Abonament',
        pack: 'Pack 8 classes',
        status: 'Actiu',
        meta: '5 classes restants · Vàlid fins al 30/11',
      },
      perfil: {
        title: 'Perfil',
        nameLabel: 'Nom',
        name: 'Maria Soler',
        emailLabel: 'Email',
        email: 'maria@exemple.cat',
        prefsLabel: 'Preferències',
        prefs: 'Recordatoris per email · Català',
      },
    },
    dashboard: {
      resum: {
        title: 'Resum del dia',
        leadTemplate: 'Dilluns · {bookings} reserves confirmades · {full} classes plenes',
        rows: [
          { id: 'yoga', time: '10:00 · Yoga suau', meta: 'Laura · Sala A' },
          { id: 'pilates', time: '18:30 · Pilates', meta: 'Marc · Sala B · Llista d’espera: 2' },
        ],
      },
      calendari: {
        title: 'Calendari',
        lead: 'Canvia entre vista setmanal i mensual de les activitats programades.',
        viewWeek: 'Setmana',
        viewMonth: 'Mes',
        days: [
          { label: 'Dilluns', meta: '10:00 Yoga · 18:30 Pilates' },
          { label: 'Dimarts', meta: '09:00 Stretching · 19:00 HIIT' },
        ],
      },
      classes: {
        title: 'Classes',
        lead: 'Crea activitats, assigna instructors i defineix aforament.',
        rows: [
          { name: 'Yoga suau', capacity: 'Aforament 10', meta: 'Instructora: Laura · Dilluns 10:00' },
          { name: 'Pilates', capacity: 'Aforament 10', meta: 'Instructor: Marc · Dilluns 18:30' },
        ],
      },
      alumnes: {
        title: 'Alumnes',
        lead: 'Consulta perfils i reserves associades.',
        rows: [
          { name: 'Maria Soler', plan: 'Pack 8', meta: 'Pròxima: Yoga dilluns 10:00' },
          { name: 'Jordi Puig', plan: 'Membresia', meta: '3 reserves aquesta setmana' },
        ],
      },
      abonaments: {
        title: 'Abonaments',
        lead: 'Gestiona packs i membresies del centre.',
        rows: [
          { name: 'Pack 8 classes', price: '120 €', meta: '12 alumnes actius' },
          { name: 'Membresia mensual', price: '65 €/mes', meta: 'Reserves il·limitades · 28 actius' },
        ],
      },
    },
  },
  mail: {
    greeting: 'Hola Nina,',
    intro: "M'interessa la proposta de plataforma de gestió de classes. Aquesta és la meva selecció:",
    baseLabel: 'Software base',
    addonsHeading: 'Complements',
    addonsNone: 'cap seleccionat',
    implementationLabel: 'Implementació estimada',
    maintenanceNone: 'Manteniment: sense quota mensual',
    maintenanceLine: 'Manteniment: {title} ({price}/mes)',
    thanks: 'Gràcies!',
  },
}

export default ca
