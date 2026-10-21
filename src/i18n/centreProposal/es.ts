import { configuratorEs } from './configuratorCopy'
import type { CentreProposalCopy } from './types'

const es: CentreProposalCopy = {
  meta: { mailSubject: 'Propuesta plataforma de gestión de clases' },
  hero: {
    eyebrow: 'Propuesta de software',
    title: 'Tu centro, con su propio sistema.',
    lead:
      'Una plataforma de gestión de clases diseñada para adaptarse al funcionamiento de tu centro.',
    intro:
      'Consulta la propuesta, explora las dos experiencias de software y configura las funcionalidades que necesitas. Los importes de Nina Lab no incluyen suscripciones ni comisiones de terceros (dominio, hosting, pagos…).',
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
  configurator: configuratorEs,
  section02: {
    index: '02',
    title: 'Configura tu presupuesto',
    lead: 'Tres pasos para definir software, funcionalidades y mantenimiento.',
    externalCostsTeaser:
      'Implementación y mantenimiento opcional no incluyen suscripciones de terceros; sí podemos configurarlas con cuentas y datos del centro.',
    externalCostsLink: 'Ver costes externos y qué configuramos',
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
      webApps: {
        title: 'Mantenimiento web + apps',
        description: 'Mantenimiento de web, backend y apps.',
        includes: ['Corrección de incidencias técnicas.'],
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
    intro:
      'Antes de empezar el desarrollo, haremos una sesión de definición para concretar las necesidades del centro y validar el alcance del proyecto.',
    steps: [
      'Revisaremos las funcionalidades seleccionadas y las prioridades del centro.',
      'Definiremos los procesos de reserva, cancelación y gestión de clases.',
      'Validaremos las pantallas y la experiencia de alumnos y equipo del centro.',
      'Concretaremos las integraciones necesarias, los plazos y las condiciones de pago.',
    ],
    closing: [
      'Una vez validada esta información, prepararemos el presupuesto definitivo y el calendario de desarrollo.',
      'El proyecto comenzará cuando se apruebe la propuesta definitiva y se acuerden las condiciones de inicio.',
    ],
  },
  section06: {
    index: '06',
    title: 'Si dejáis el mantenimiento o cambiáis de desarrollador',
    intro:
      'El centro es propietario del software desarrollado. Tanto si optáis por no contratar mantenimiento como si en el futuro queréis trabajar con otro equipo, el proyecto debe seguir operativo y ser transferible sin depender exclusivamente de Nina Lab.',
    context: [
      'Sin mantenimiento: el software sigue funcionando; actualizaciones, incidencias y evoluciones pueden encargarse internamente o con otro proveedor.',
      'Cambio de desarrollador: entregamos el proyecto de forma ordenada para que un nuevo equipo pueda continuar el desarrollo y el despliegue.',
    ],
    deliverablesTitle: 'Qué entregaríamos',
    deliverables: [
      'Código fuente completo en un repositorio GitHub del centro (web, backend, apps y scripts de despliegue).',
      'Documentación para instalar el proyecto, ejecutarlo en local y desplegarlo en producción.',
      'Lista de variables de entorno y guía de transferencia segura de secretos (sin enviar contraseñas por email).',
      'Acceso o exportación de la base de datos, esquema, migraciones y procedimiento de copias de seguridad.',
      'Inventario de cuentas externas a nombre del centro (dominio, hosting, stores, pagos, email).',
    ],
    stackTitle: 'Herramientas y stack previsto',
    stackNote:
      'La combinación concreta se valida al inicio del proyecto; la entrega incluye la lista exacta con versiones y enlaces.',
    stackItems: [
      { name: 'GitHub', detail: 'Código versionado, historial, issues y permisos de administración para el centro.' },
      {
        name: 'React + TypeScript',
        detail: 'Web de reservas y dashboard del centro (p. ej. Vite como entorno de build).',
      },
      {
        name: 'Apps móviles (iOS / Android)',
        detail: 'App para alumnos con stack acordado (p. ej. React Native / Expo o equivalente documentado).',
      },
      {
        name: 'API / backend',
        detail: 'Servicio backend documentado (p. ej. Node.js) con endpoints de reservas, alumnos y gestión.',
      },
      {
        name: 'Base de datos',
        detail: 'PostgreSQL o equivalente gestionado; esquema, migraciones y datos en la cuenta del centro.',
      },
      {
        name: 'Hosting y despliegue',
        detail: 'Web y API en producción (p. ej. Vercel o proveedor acordado), con configuración documentada.',
      },
      {
        name: 'Integraciones',
        detail: 'Pagos, email, recordatorios y otros servicios conectados a las cuentas del centro.',
      },
    ],
    handoverTitle: 'Cómo sería la transferencia',
    handoverSteps: [
      'Sesión de entrega con el centro (y el nuevo equipo, si ya lo tenéis).',
      'Transferencia del repositorio GitHub y revisión de permisos de administración.',
      'Revisión conjunta de despliegue, copias de seguridad y restauración de la base de datos.',
      'Periodo breve de soporte para dudas técnicas de la entrega (duración acordada en el contrato).',
    ],
    closing:
      'El objetivo es que el centro no quede “atrapado”: el producto es vuestro y debe poder evolucionar con el equipo que elijáis.',
  },
  section07: {
    index: '07',
    title: 'Costes externos (a cargo del centro)',
    intro:
      'Además del presupuesto de desarrollo y, si se elige, del mantenimiento mensual con Nina Lab, el centro paga directamente a los proveedores los servicios que mantienen la plataforma en producción. Estos importes no se pagan a Nina Lab.',
    disclaimer:
      'Las cifras son orientativas; varían según proveedor, país, IVA, volumen y plan contratado.',
    setupTitle: 'No incluido como suscripción, pero lo configuramos con vuestras cuentas',
    setupIntro:
      'Las cuotas de los proveedores no forman parte del precio de implementación de Nina Lab, pero sí podemos dejarlo conectado y documentado: integración en el código, entornos, despliegue y pruebas, con cuentas a nombre del centro y datos que facilite el centro o su administrador.',
    setupItems: [
      'Repositorio GitHub del centro, CI/CD y despliegue inicial en hosting (web y API).',
      'Enlace del dominio y HTTPS (DNS en el registrador del centro).',
      'Base de datos gestionada: proyecto, esquema inicial, migraciones y variables de entorno.',
      'Stripe: conexión a la cuenta del centro, entornos de prueba y producción, webhooks.',
      'Email transaccional: verificación del dominio, DNS y plantillas básicas si están en el alcance.',
      'Apps (si se contratan): builds y publicación en stores con cuentas de desarrollador del centro.',
      'Otras integraciones del alcance con claves o invitaciones de admin del centro.',
    ],
    setupAccessNote:
      'El centro abre las cuentas a su nombre y da acceso de administrador a Nina Lab. No pedimos contraseñas por email; claves y secretos van en variables de entorno con documentación de transferencia segura.',
    groups: [
      {
        title: 'Dominio y hosting',
        items: [
          { name: 'Dominio web', note: 'Pago periódico al registrador (p. ej. anual).' },
          {
            name: 'Hosting web y API',
            note: 'Cuota mensual según tráfico (p. ej. Vercel). Suele haber plan gratuito limitado.',
          },
          { name: 'HTTPS', note: 'Normalmente incluido al enlazar el dominio.' },
        ],
      },
      {
        title: 'Base de datos',
        items: [
          {
            name: 'PostgreSQL gestionado (Supabase, Neon, etc.)',
            note: 'Cuenta a nombre del centro. Plan gratuito inicial posible; coste mensual al crecer.',
          },
        ],
      },
      {
        title: 'Pagos online',
        items: [
          {
            name: 'Stripe (cuenta del centro)',
            note: 'Comisión por transacción exitosa. La cobra Stripe, no Nina Lab. Liquidación al banco del centro.',
          },
        ],
      },
      {
        title: 'Email y notificaciones',
        items: [
          {
            name: 'Email transaccional',
            note: 'Resend, Postmark, SendGrid, etc.: según volumen. Requiere DNS del dominio.',
          },
          { name: 'SMS (opcional)', note: 'Coste por mensaje si se usan recordatorios SMS.' },
        ],
      },
      {
        title: 'Stores (si hay app)',
        items: [
          { name: 'Apple Developer Program', note: 'Aprox. 99 USD/año — cuenta del centro.' },
          { name: 'Google Play Console', note: 'Aprox. 25 USD (pago único) — cuenta del centro.' },
        ],
      },
      {
        title: 'Opcional',
        items: [
          { name: 'IA (API)', note: 'Coste por uso si se integran funciones de IA.' },
          { name: 'Otras integraciones', note: 'Calendarios, analytics, etc., según alcance.' },
        ],
      },
    ],
    maintenanceNote:
      'El mantenimiento mensual con Nina Lab (si se contrata) cubre el software que desarrollamos; no sustituye facturas de dominio, hosting, base de datos, Stripe, email, stores ni otros terceros.',
    closing:
      'Recomendamos abrir estas cuentas a nombre del centro desde el inicio y reflejarlas en el contrato.',
  },
  footer: 'Propuesta preparada por Nina Baldó',
  demo: {
    back: '← Volver a la propuesta',
    studentBadge: 'Demo · App alumnos',
    dashboardBadge: 'Demo · Dashboard centro',
    interactiveLabel: 'Mockup interactivo',
    disclaimer:
      'Esto es solo un ejemplo interactivo. La plataforma puede configurarse según las necesidades del centro y activando únicamente los componentes que se deseen.',
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
            value: '212',
            hint: '34 con membresía',
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
        chartsTitle: 'Ingresos',
        charts: {
          monthlyTitle: 'Ingresos mensuales',
          annualTitle: 'Ingresos anuales',
          monthly: [
            { label: 'May', valueLabel: '3,2k €', amount: 3200 },
            { label: 'Jun', valueLabel: '3,4k €', amount: 3400 },
            { label: 'Jul', valueLabel: '3,6k €', amount: 3600 },
            { label: 'Ago', valueLabel: '3,9k €', amount: 3900 },
            { label: 'Sep', valueLabel: '4,1k €', amount: 4100 },
            { label: 'Oct', valueLabel: '4,3k €', amount: 4280, highlight: true },
          ],
          annual: [
            { label: '2022', valueLabel: '38k €', amount: 38000 },
            { label: '2023', valueLabel: '44k €', amount: 44000 },
            { label: '2024', valueLabel: '47k €', amount: 47000 },
            { label: '2025', valueLabel: '42k €', amount: 42000, highlight: true },
          ],
        },
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
          { label: 'Miércoles', meta: '10:00 Spin · 17:00 Yoga suave' },
          { label: 'Jueves', meta: '09:00 Stretching · 19:00 HIIT' },
          { label: 'Viernes', meta: '08:30 Pilates mañana' },
          { label: 'Sábado', meta: '11:00 Yoga familiar' },
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
          {
            id: 'stretching',
            name: 'Stretching',
            capacity: '12',
            meta: 'Anna · Martes y jueves 09:00 · Sala A',
          },
          {
            id: 'hiit',
            name: 'HIIT',
            capacity: '16',
            meta: 'Oriol · Martes y jueves 19:00 · Alta demanda',
          },
          {
            id: 'spin',
            name: 'Ciclismo indoor',
            capacity: '14',
            meta: 'Paula · Miércoles 10:00 · 11 inscritos hoy',
          },
          {
            id: 'barre',
            name: 'Barre',
            capacity: '10',
            meta: 'Sílvia · Jueves 11:00 · Nueva franja',
          },
          {
            id: 'meditation',
            name: 'Meditación guiada',
            capacity: '8',
            meta: 'Gerard · Viernes 20:00 · Grupos reducidos',
          },
          {
            id: 'familia',
            name: 'Yoga familiar',
            capacity: '12',
            meta: 'Laura · Sábado 11:00 · Todos los niveles',
          },
        ],
      },
      alumnes: {
        title: 'Alumnos',
        lead: 'Base de datos del centro: búsqueda, perfiles y actividad reciente.',
        searchPlaceholder: 'Buscar por nombre o email…',
        countTemplate: '{n} alumnos registrados',
        columns: {
          name: 'Nombre',
          email: 'Email',
          plan: 'Plan',
          status: 'Estado',
          activity: 'Actividad',
        },
        rows: [
          {
            id: 'maria',
            name: 'María Soler',
            email: 'maria@ejemplo.es',
            plan: 'Pack 8',
            status: 'active',
            statusLabel: 'Activo',
            activity: 'Próxima: Yoga lunes 10:00',
          },
          {
            id: 'jordi',
            name: 'Jordi Puig',
            email: 'jordi@ejemplo.es',
            plan: 'Membresía',
            status: 'active',
            statusLabel: 'Activo',
            activity: '3 reservas esta semana',
          },
          {
            id: 'laura',
            name: 'Laura Costa',
            email: 'laura@ejemplo.es',
            plan: 'Drop-in',
            status: 'pending',
            statusLabel: 'Pendiente',
            activity: 'Pago sesión Pilates',
          },
          {
            id: 'anna',
            name: 'Anna Ruiz',
            email: 'anna@ejemplo.es',
            plan: 'Pack 8',
            status: 'active',
            statusLabel: 'Activo',
            activity: 'Stretching martes 09:00',
          },
          {
            id: 'marc',
            name: 'Marc Vidal',
            email: 'marc@ejemplo.es',
            plan: 'Membresía',
            status: 'active',
            statusLabel: 'Activo',
            activity: 'Pilates lunes 18:30',
          },
          {
            id: 'paula',
            name: 'Paula Mestres',
            email: 'paula@ejemplo.es',
            plan: 'Pack 12',
            status: 'active',
            statusLabel: 'Activo',
            activity: 'Spin miércoles 10:00',
          },
          {
            id: 'oriol',
            name: 'Oriol Casals',
            email: 'oriol@ejemplo.es',
            plan: 'Membresía',
            status: 'active',
            statusLabel: 'Activo',
            activity: 'HIIT martes 19:00',
          },
          {
            id: 'silvia',
            name: 'Sílvia Navarro',
            email: 'silvia@ejemplo.es',
            plan: 'Bono 10',
            status: 'active',
            statusLabel: 'Activo',
            activity: 'Barre jueves 11:00',
          },
          {
            id: 'gerard',
            name: 'Gerard Ferrer',
            email: 'gerard@ejemplo.es',
            plan: 'Drop-in',
            status: 'pending',
            statusLabel: 'Pendiente',
            activity: 'Meditación · pago pendiente',
          },
          {
            id: 'nuria',
            name: 'Núria Bosch',
            email: 'nuria@ejemplo.es',
            plan: 'Trimestral',
            status: 'active',
            statusLabel: 'Activo',
            activity: 'Yoga familiar sábado',
          },
          {
            id: 'clara',
            name: 'Clara Domènech',
            email: 'clara@ejemplo.es',
            plan: 'Pack 8',
            status: 'active',
            statusLabel: 'Activo',
            activity: '2 reservas esta semana',
          },
        ],
      },
      abonaments: {
        title: 'Abonos',
        lead: 'Gestiona packs y membresías del centro.',
        rows: [
          { name: 'Pack 8 clases', price: '120 €', meta: '18 alumnos activos' },
          { name: 'Pack 12 clases', price: '165 €', meta: '14 alumnos activos' },
          { name: 'Membresía mensual', price: '65 €/mes', meta: 'Reservas ilimitadas · 34 activos' },
          { name: 'Membresía trimestral', price: '175 €/trim.', meta: 'Descuento 10 % · 22 activos' },
          { name: 'Bono 10 sesiones', price: '95 €', meta: 'Sin caducidad · 9 activos' },
          { name: 'Sesión suelta', price: '18 €', meta: 'Drop-in · media 40/semana' },
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
