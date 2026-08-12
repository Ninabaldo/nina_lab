import type { SiteTranslations } from './types'

const es: SiteTranslations = {
  hero: {
    subtitle1: 'Pequeños experimentos digitales',
    subtitle2: 'hechos con IA por Nina Baldó.',
    scrollHint: 'Desplázate para explorar',
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
      projectValue: "Nina's Lab",
      typeValue: 'Experimentos digitales',
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
      'color-studio': {
        name: 'Color Studio',
        category: 'Diseño',
        description: 'Un medidor de color minimalista — captura cualquier color de tu pantalla.',
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
    title: 'Proyectos',
    subtitle: 'Experimentos más grandes — hechos despacio, con calma.',
    featured: 'Experimento destacado',
    comingSoon: 'Próximamente',
    viewProjects: 'Ver proyectos',
    back: 'Volver al inicio',
    teaserEyebrow: 'Más allá de las micro-apps',
    teaserTitle: 'Proyectos',
    teaserText: 'Ideas más grandes tomando forma — hechas despacio, con calma.',
    empty: 'Más proyectos en camino.',
    items: {},
  },
  footer: {
    nameFirst: 'Nina',
    nameLast: 'Baldó',
    tagline1: 'Productos digitales, interfaces',
    tagline2: 'y pequeños experimentos.',
    socialAria: 'Enlaces sociales',
    support: 'Dame apoyo',
    projects: 'Proyectos',
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
    colorStudio: {
      label: 'Medidor de color',
      chooseColor: 'Elegir color',
      pick: 'Capturar de pantalla',
      picking: 'Capturando…',
      recent: 'Recientes',
      fallback:
        'La captura de pantalla está disponible en Chrome y Edge en escritorio. Usa el selector de color para elegir cualquier tono.',
      copyHex: 'Copiar color hex',
      copied: 'Copiado',
    },
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
  },
  controls: {
    language: 'Idioma',
  },
}

export default es
