import type { SiteTranslations } from './types'
import { companyCalculatorEs } from './companyCalculator/es'
import { incidentBriefEs } from './incidentBrief/es'
import { lifeAlgorithmEs } from './lifeAlgorithm/es'

const es: SiteTranslations = {
  hero: {
    subtitle1: 'Pequeños experimentos digitales',
    subtitle2: 'hechos con IA por Nina Baldó.',
    scrollHint: 'Desplázate a los proyectos',
    phoneTitle: "Nina's Lab",
    phoneMeta: 'Explorando con la IA',
  },
  intro: {
    eyebrow: 'Experimentos digitales',
    title1: 'Pequeñas ideas.',
    title2: 'Convertidas en algo real.',
    text: "Nina's Lab es una colección de pequeños experimentos digitales hechos con IA por Nina Baldó — interfaces y herramientas para explorar ideas, resolver problemas sencillos y aprender haciendo.",
    meta: {
      project: 'Proyecto',
      type: 'Tipo',
      year: 'Año',
      tech: 'Tech',
      techValue: 'React · TypeScript · PWA · GitHub · Vercel · IA (Cursor)',
      projectValue: "Nina's Lab",
      typeValue: 'Experimentos digitales',
    },
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Esto es con lo que puedo ayudarte',
    lead: 'Cinco líneas de trabajo para crear productos digitales, desde apps pequeñas hasta experiencias para marcas.',
    modelLabel: 'Modelo',
    cta: 'Hablemos de tu proyecto',
    ctaHref: 'mailto:holaninabaldo@gmail.com',
    items: {
      smallWebApps: {
        title: 'Aplicaciones web pequeñas',
        description:
          'Productos que resuelven una necesidad concreta y funcionan desde el navegador.',
        model: 'Uso gratuito, funciones premium o pago único.',
      },
      interactiveExperiences: {
        title: 'Experiencias digitales interactivas',
        description: 'Proyectos más experimentales, visuales y sorprendentes.',
        model: 'Proyectos propios para captar audiencia o encargos para marcas.',
      },
      websitesMicrosites: {
        title: 'Webs y microsites para otras personas',
        description:
          'Crear páginas web con identidad visual propia y funciones interactivas.',
        model: 'Cobrar por proyecto y, si hace falta, por mantenimiento.',
      },
      businessTools: {
        title: 'Herramientas y automatizaciones para pequeños negocios',
        description:
          'Aplicaciones que ahorran trabajo manual a profesionales y empresas.',
        model: 'Desarrollo a medida, configuración y mantenimiento mensual.',
      },
      educationalProducts: {
        title: 'Productos educativos interactivos',
        description:
          'Convertir conocimientos o contenidos en experiencias prácticas.',
        model: 'Venta de guías, cursos o licencias.',
      },
    },
  },
  workExamples: {
    eyebrow: 'En la práctica',
    title: 'Ejemplos del lab',
    lead:
      'Proyectos reales para ver cómo se traducen los servicios — muchos puedes probarlos aquí.',
    serviceTags: {
      smallWebApps: 'App web',
      interactiveExperiences: 'Interactiva',
      websitesMicrosites: 'Web / microsite',
      businessTools: 'Herramienta negocio',
      educationalProducts: 'Educativo',
    },
    items: {
      breathe: {
        name: 'Breathe',
        description: 'Experiencia de respiración minimalista para calmarte y volver al presente.',
        cta: 'Probar',
      },
      'life-algorithm': {
        name: 'Life Algorithm',
        description: 'Cuestionario que genera un perfil personalizado según tus respuestas.',
        cta: 'En el lab',
      },
      'focus-timer': {
        name: 'Focus Timer',
        description: 'Temporizador pomodoro ligero para concentrarte desde el navegador.',
        cta: 'En el lab',
      },
      scopo: {
        name: 'Scopo',
        description: 'Producto digital móvil con identidad propia y flujo pensado para el móvil.',
        cta: 'Ver proyecto',
      },
      picked: {
        name: 'Picked',
        description: 'App para descubrir lugares a través de recomendaciones reales.',
        cta: 'Ver proyecto',
      },
      'incident-brief': {
        name: 'Incident Brief',
        description: 'Herramienta que convierte texto de incidencia en resumen accionable.',
        cta: 'Probar',
      },
      'nina-lab': {
        name: "Nina's Lab",
        description: 'Esta misma web: portfolio, servicios y experimentos en un solo sitio.',
        cta: 'Explorar',
      },
    },
  },
  experiments: {
    title: 'Experimentos',
    projects: 'proyectos',
    tryInLab: 'Probar en el lab',
    tryIt: 'Probar',
    openApp: 'Abrir app',
    tryInLabAria: 'Probar en el laboratorio interactivo',
    comingSoon: 'Próximamente',
    secondaryEyebrow: 'Lab',
    secondaryLead: 'Micro-apps para probar ideas rápido — el playground del lab.',
    items: {
      breathe: {
        name: 'Breathe',
        category: 'Bienestar',
        description:
          'Una experiencia de respiración minimalista para frenar, resetear y volver al presente.',
      },
      'focus-timer': {
        name: 'Focus Timer',
        category: 'Productividad',
        description: 'Un temporizador pomodoro suave con feedback visual ambiental.',
      },
      'life-algorithm': {
        name: 'El algoritmo de la vida',
        category: 'Experiencia',
        description: '10 decisiones. Una vida posible. Un perfil ficticio según cómo eliges vivir.',
      },
      'split-the-bill': {
        name: 'Split the Bill',
        category: 'Utilidad',
        description: 'Divide cuentas de restaurante entre amigos — propina incluida.',
      },
      affirmations: {
        name: 'Afirmaciones',
        category: 'Bienestar',
        description: 'Un generador suave de afirmaciones positivas de Jung, Fromm, Hillman, Buda, Neville Goddard y más.',
      },
    },
  },
  projects: {
    homeEyebrow: 'Portfolio',
    title: 'Proyectos',
    subtitle: 'Experiencias digitales — producto, diseño y tecnología.',
    comingSoon: 'Próximamente',
    viewProjects: 'Ver proyectos',
    back: 'Volver al inicio',
    teaserEyebrow: 'Más allá de las micro-apps',
    teaserTitle: 'Proyectos',
    teaserText: 'Ideas más grandes tomando forma — hechas despacio, con calma.',
    empty: 'Más proyectos en camino.',
    comingSoonHeadline: 'Aún en el laboratorio',
    comingSoonText:
      'Ideas más grandes, hechas sin prisas. Mientras tanto, explora los experimentos del lab.',
    openProject: 'Abrir el proyecto',
    mobileRowAria: 'Proyectos móviles',
    backToProjects: 'Volver a proyectos',
    items: {
      nook: {
        name: 'nook',
        category: 'Estilismo de interiores',
        description: 'Página web interactiva para profesionales del estilismo de interiores.',
        previewAria: 'Vista previa del sitio nook',
      },
      scopo: {
        name: 'Scopo',
        category: 'App móvil',
        description:
          'Producto digital pensado para móvil: acceso rápido, exploración libre y registro cuando toque.',
        previewAria: 'Vista previa móvil de Scopo',
      },
      picked: {
        name: 'Picked',
        category: 'App móvil',
        description:
          'Descubre lugares a través de personas: recomendaciones reales en un flujo pensado para móvil.',
        previewAria: 'Vista previa móvil de Picked',
      },
    },
  },
  contact: {
    modalEyebrow: 'Contacto',
    modalTitle: 'Hablemos de tu proyecto',
    modalLead: 'Cuéntame qué tienes en mente. Te responderé desde holaninabaldo@gmail.com.',
    footerTitle: 'Contacto',
    footerLead: 'Escríbeme aquí — mismo formulario que en el popup.',
    nameLabel: 'Nombre',
    emailLabel: 'Email',
    messageLabel: 'Mensaje',
    messagePlaceholder: '¿En qué puedo ayudarte?',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    success: 'Mensaje enviado. Gracias — te responderé pronto.',
    error: 'No se pudo enviar. Prueba de nuevo o escríbeme a holaninabaldo@gmail.com.',
    close: 'Cerrar',
    closeAria: 'Cerrar formulario de contacto',
  },
  footer: {
    nameFirst: 'Nina',
    nameLast: 'Baldó',
    tagline1: 'Productos digitales, interfaces',
    tagline2: 'y pequeños experimentos.',
    socialAria: 'Enlaces sociales',
    support: 'Dame apoyo',
    projects: 'Proyectos',
    services: 'Servicios',
    contact: 'Contacto',
    copy: '© 2026 Nina Baldó',
  },
  modal: {
    close: 'Cerrar',
    closeAria: 'Cerrar',
  },
  apps: {
    focusTimer: {
      durationAria: 'Duración',
      min: 'min',
      start: 'Empezar',
      pause: 'Pausar',
      resume: 'Continuar',
      reset: 'Reiniciar',
    },
    lifeAlgorithm: lifeAlgorithmEs,
    splitBill: {
      billTotal: 'Total cuenta',
      tip: 'Propina',
      tipAria: 'Porcentaje de propina',
      people: 'Personas',
      add: '+ Añadir',
      subtotal: 'Subtotal',
      total: 'Total',
      person: 'Persona',
      removeAria: 'Eliminar',
    },
    affirmations: {
      newAffirmation: 'Nueva afirmación',
    },
    incidentBrief: incidentBriefEs,
    companyCalculator: companyCalculatorEs,
  },
  controls: {
    language: 'Idioma',
  },
  labDesign: {
    eyebrow: 'Interactivo',
    title: "Personaliza Nina's Lab",
    lead: 'Prueba colores, tipografías y estilos distintos. Haz tuyo este lab.',
    cta: "Personalizar Nina's Lab",
    panelEyebrow: 'Vista previa en vivo',
    panelTitle: "Personaliza Nina's Lab",
    close: 'Cerrar panel de personalización',
    colorsTitle: 'Colores',
    colorsHint: 'Elige una paleta o ajusta cada color. Los cambios se aplican al instante en toda la web.',
    palettesAria: 'Paletas de color',
    paletteApply: 'Aplicar paleta',
    primary: 'Primario',
    background: 'Fondo',
    text: 'Texto',
    surface: 'Superficie / tarjetas',
    typographyTitle: 'Tipografía',
    displayFont: 'Títulos',
    bodyFont: 'Texto general',
    defaultDisplayFont: 'Predeterminado del Lab (Syne)',
    previewTitle: 'Vista previa de título',
    previewBody: 'Texto de párrafo para descripciones y copy de interfaz.',
    previewButton: 'Botón',
    styleTitle: 'Estilo general',
    styles: {
      minimal: 'Minimal',
      editorial: 'Editorial',
      tech: 'Tech',
      playful: 'Playful',
    },
    reset: 'Restablecer',
  },
}

export default es
