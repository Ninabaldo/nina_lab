import type { CentreProposalCopy } from './types'

const es: CentreProposalCopy = {
  meta: { mailSubject: 'Propuesta plataforma de gestión de clases' },
  hero: {
    eyebrow: 'Propuesta de software',
    title: 'Tu centro, con su propio sistema.',
    lead:
      'Una plataforma de gestión de clases diseñada para adaptarse al funcionamiento de tu centro.',
    intro:
      'Consulta la propuesta, explora las dos experiencias de software y configura las funcionalidades que necesitas.',
    ctaExplore: 'Explorar el software',
    ctaBudget: 'Configurar presupuesto',
  },
  section01: {
    index: '01',
    title: 'Una experiencia para cada perfil',
    student: {
      title: 'App para alumnos',
      lead: 'Una forma sencilla de consultar clases y gestionar reservas desde el móvil.',
      demoLabel: 'Funcionalidades básicas del mockup:',
      features: [
        { label: 'Horarios', text: 'consulta actividades programadas y plazas disponibles.' },
        { label: 'Reservas', text: 'reserva una clase o cancela una plaza.' },
        { label: 'Mis clases', text: 'consulta próximas reservas e historial.' },
        { label: 'Abonos', text: 'visualiza tu pack o membresía y clases disponibles.' },
        { label: 'Perfil', text: 'consulta tus datos y preferencias.' },
      ],
      cta: 'Explorar la app de alumnos',
      openFull: 'Abrir demo a pantalla completa',
    },
    dashboard: {
      title: 'Dashboard para el centro',
      lead:
        'Un espacio de gestión para tener clases, alumnos y reservas organizados en un mismo lugar.',
      demoLabel: 'Funcionalidades básicas del mockup:',
      features: [
        { label: 'Resumen', text: 'consulta reservas y clases del día.' },
        { label: 'Calendario', text: 'organiza actividades por días y horas.' },
        { label: 'Clases', text: 'crea actividades, asigna instructores y define aforos.' },
        { label: 'Alumnos', text: 'consulta perfiles y sus reservas.' },
        { label: 'Abonos', text: 'gestiona packs y membresías del centro.' },
      ],
      cta: 'Explorar el dashboard',
      openFull: 'Abrir demo a pantalla completa',
    },
  },
  section02: {
    index: '02',
    title: 'Configura tu software',
    lead: 'Selecciona las funcionalidades que mejor se adapten a las necesidades del centro.',
    base: {
      title: 'Software base',
      subtitle: 'Plataforma de reservas y gestión',
      priceNote: 'implementación',
      includesLabel: 'Incluye:',
      includes: [
        'Web responsive de reservas.',
        'App de alumnos adaptada a móvil.',
        'Dashboard de gestión para el centro.',
        'Calendario de clases y actividades.',
        'Gestión de reservas y cancelaciones.',
        'Gestión básica de alumnos.',
        'Configuración de clases, instructores y aforos.',
      ],
      footnote: 'Este es el punto de partida del proyecto.',
    },
    addonsTitle: 'Funcionalidades adicionales',
    addonsLead: 'Selecciona los complementos que quieres incorporar:',
    addonsRunningTotal: 'Total complementos seleccionados',
    addonIncluded: 'Incluido',
    addons: {
      subscriptions: {
        title: 'Abonos y packs',
        description: 'Gestión de packs de clases y membresías.',
        detail:
          'Permite definir modalidades, consultar clases disponibles de cada alumno y gestionar su vigencia.',
      },
      waitlist: {
        title: 'Lista de espera',
        description: 'Cuando una clase esté completa, los alumnos podrán apuntarse a lista de espera.',
        detail: 'Gestiona plazas liberadas y personas en espera.',
      },
      payments: {
        title: 'Pagos online',
        description:
          'Integración de pago para que los alumnos compren abonos o paguen actividades desde la plataforma.',
        detail: 'El presupuesto final dependerá del proveedor de pagos y sus comisiones.',
      },
      reminders: {
        title: 'Recordatorios automáticos',
        description: 'Envío de recordatorios por email antes de las clases reservadas.',
        detail: 'Ayuda a reducir ausencias y facilita que recuerden sus reservas.',
      },
      instructors: {
        title: 'Gestión avanzada de instructores',
        description: 'Gestiona instructores, clases asignadas y horarios de cada profesional.',
        detail: '',
      },
      analytics: {
        title: 'Estadísticas e informes',
        description: 'Consulta ocupación de clases, reservas y actividad del centro.',
        detail: 'Visión general del funcionamiento de las actividades.',
      },
    },
  },
  section03: {
    index: '03',
    title: 'Mantenimiento',
    lead: 'Tras la implementación, puedes contratar un servicio de mantenimiento.',
    maintenanceGroupLabel: 'Mantenimiento',
    maintenance: {
      none: {
        title: 'Sin mantenimiento',
        description: 'No incluye cuota mensual.',
        extra: 'Las intervenciones posteriores se presupuestarán según necesidades.',
      },
      basic: {
        title: 'Mantenimiento básico',
        description: 'Supervisión y soporte técnico de la plataforma.',
        includes: [
          'Supervisión básica del funcionamiento.',
          'Corrección de errores técnicos del software desarrollado.',
          'Actualizaciones técnicas menores.',
          'Soporte para incidencias de la plataforma.',
        ],
      },
      extended: {
        title: 'Mantenimiento ampliado',
        description: 'Mantenimiento básico con prioridad y pequeñas mejoras.',
        includes: [
          'Todo el mantenimiento básico.',
          'Pequeñas mejoras de funcionalidad.',
          'Ajustes menores en el funcionamiento.',
          'Prioridad en la resolución de incidencias.',
        ],
        extra: 'Nuevas funcionalidades o ampliaciones importantes se presupuestarán aparte.',
      },
    },
  },
  section04: {
    index: '04',
    title: 'Tu propuesta',
    lead: 'Selecciona funcionalidades e consulta el presupuesto estimado.',
    rows: {
      base: 'Software base',
      addons: 'Complementos',
      addonsNone: 'Ninguno seleccionado',
      implementation: 'Implementación',
      maintenance: 'Mantenimiento',
      maintenanceOptional: 'Cuota mensual opcional',
    },
    cta: 'Preparar propuesta',
  },
  section05: {
    index: '05',
    title: '¿Cómo seguimos?',
    paragraphs: [
      'Una vez definidas las funcionalidades, concretaremos el alcance y prepararemos el presupuesto definitivo.',
      'El siguiente paso será validar pantallas, procesos de reserva y necesidades específicas del centro antes del desarrollo.',
    ],
    notesTitle: 'Notas',
    notes: [
      'Este presupuesto es orientativo y está sujeto a la definición final de funcionalidades y alcance.',
      'Los importes no incluyen IVA ni comisiones de servicios externos (pagos, email, alojamiento).',
      'Implementación, plazos y condiciones de pago se concretarán en la propuesta definitiva.',
    ],
  },
  footer: 'Propuesta preparada por Nina Baldó',
  demo: {
    back: '← Volver a la propuesta',
    studentBadge: 'Demo · App alumnos',
    dashboardBadge: 'Demo · Dashboard centro',
    interactiveLabel: 'Mockup interactivo',
    studentTabs: {
      horaris: 'Horarios',
      reserves: 'Reservas',
      meves: 'Mis clases',
      abonaments: 'Packs',
      perfil: 'Perfil',
    },
    dashTabs: {
      resum: 'Resumen',
      calendari: 'Calendario',
      classes: 'Clases',
      alumnes: 'Alumnos',
      abonaments: 'Abonos',
    },
    student: {
      labels: {
        spots: '{n} plazas',
        full: 'Completa',
        book: 'Reservar',
        toastBooked: 'Reserva confirmada',
        toastCancelled: 'Reserva cancelada',
        tapHint: 'Prueba a reservar una clase',
        syncHint: 'En vivo: la app de alumnos y el dashboard del centro están conectados.',
      },
      horaris: {
        title: 'Horarios',
        viewWeek: 'Semana',
        viewMonth: 'Mes',
        classes: [
          { id: 'yoga', name: 'Yoga suave', meta: 'Lunes · 10:00 · Sala A · Laura' },
          { id: 'pilates', name: 'Pilates', meta: 'Lunes · 18:30 · Sala B · Marc' },
          { id: 'stretching', name: 'Stretching', meta: 'Martes · 09:00 · Sala A · Anna' },
        ],
      },
      reserves: {
        title: 'Reserva',
        confirm: 'Confirmar reserva',
        cancel: 'Cancelar plaza',
      },
      meves: {
        title: 'Mis clases',
        upcomingLabel: 'Próximas',
        historyLabel: 'Historial',
        upcoming: { name: 'Yoga suave', status: 'Confirmada', meta: 'Lunes 10:00' },
        history: { name: 'Pilates', meta: 'Jueves pasado · Asistida' },
      },
      abonaments: {
        title: 'Abono',
        pack: 'Pack 8 clases',
        status: 'Activo',
        meta: '5 clases restantes · Válido hasta 30/11',
      },
      perfil: {
        title: 'Perfil',
        nameLabel: 'Nombre',
        name: 'María Soler',
        emailLabel: 'Email',
        email: 'maria@ejemplo.es',
        prefsLabel: 'Preferencias',
        prefs: 'Recordatorios por email · Español',
      },
    },
    dashboard: {
      resum: {
        title: 'Resumen del día',
        leadTemplate: 'Lunes · {bookings} reservas confirmadas · {full} clases llenas',
        kpis: [
          {
            id: 'revenue',
            label: 'Cobros (oct.)',
            value: '4.280 €',
            hint: '+12 % vs. mes anterior',
          },
          {
            id: 'activeStudents',
            label: 'Alumnos activos',
            value: '186',
            hint: '28 con membresía',
          },
          {
            id: 'bookingsToday',
            label: 'Reservas hoy',
            value: '{n}',
            hint: 'Confirmadas en calendario',
          },
          {
            id: 'occupancy',
            label: 'Ocupación media',
            value: '78 %',
            hint: 'Semana en curso',
          },
        ],
        paymentsTitle: 'Cobros recientes',
        payments: [
          {
            label: 'Membresía mensual',
            amount: '65 €',
            meta: 'Maria Soler · Pagado hoy',
            tone: 'ok',
          },
          {
            label: 'Pack 8 clases',
            amount: '120 €',
            meta: 'Jordi Puig · Pagado ayer',
            tone: 'ok',
          },
          {
            label: 'Pilates (sesión)',
            amount: '18 €',
            meta: 'Pendiente · Enlace enviado',
            tone: 'pending',
          },
        ],
        scheduleTitle: 'Clases de hoy',
        rows: [
          { id: 'yoga', time: '10:00 · Yoga suave', meta: 'Laura · Sala A' },
          { id: 'pilates', time: '18:30 · Pilates', meta: 'Marc · Sala B · Lista de espera: 2' },
        ],
      },
      calendari: {
        title: 'Calendario',
        lead: 'Alterna entre vista semanal y mensual de las actividades programadas.',
        viewWeek: 'Semana',
        viewMonth: 'Mes',
        days: [
          { label: 'Lunes', meta: '10:00 Yoga · 18:30 Pilates' },
          { label: 'Martes', meta: '09:00 Stretching · 19:00 HIIT' },
        ],
      },
      classes: {
        title: 'Clases',
        lead: 'Ocupación por actividad y datos clave de cada clase.',
        studentsLabel: 'alumnos',
        rows: [
          {
            id: 'yoga',
            name: 'Yoga suave',
            capacity: '10',
            meta: 'Laura · Lunes 10:00 · Media semanal 82 %',
          },
          {
            id: 'pilates',
            name: 'Pilates',
            capacity: '10',
            meta: 'Marc · Lunes 18:30 · Lista de espera activa',
          },
        ],
      },
      alumnes: {
        title: 'Alumnos',
        lead: 'Consulta perfiles y reservas asociadas.',
        rows: [
          { name: 'María Soler', plan: 'Pack 8', meta: 'Próxima: Yoga lunes 10:00' },
          { name: 'Jordi Puig', plan: 'Membresía', meta: '3 reservas esta semana' },
        ],
      },
      abonaments: {
        title: 'Abonos',
        lead: 'Gestiona packs y membresías del centro.',
        rows: [
          { name: 'Pack 8 clases', price: '120 €', meta: '12 alumnos activos' },
          { name: 'Membresía mensual', price: '65 €/mes', meta: 'Reservas ilimitadas · 28 activos' },
        ],
      },
    },
  },
  mail: {
    greeting: 'Hola Nina,',
    intro: 'Me interesa la propuesta de plataforma de gestión de clases. Esta es mi selección:',
    baseLabel: 'Software base',
    addonsHeading: 'Complementos',
    addonsNone: 'ninguno seleccionado',
    implementationLabel: 'Implementación estimada',
    maintenanceNone: 'Mantenimiento: sin cuota mensual',
    maintenanceLine: 'Mantenimiento: {title} ({price}/mes)',
    thanks: '¡Gracias!',
  },
}

export default es
