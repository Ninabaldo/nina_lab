import type { LifeAlgorithmCopy } from '../types'

export const lifeAlgorithmEs: LifeAlgorithmCopy = {
  lab: "Nina's Lab",
  title: 'El algoritmo de la vida',
  subtitle: '10 decisiones. Una vida posible.',
  introHint: 'Elige rápido. No lo pienses demasiado.',
  start: 'Empezar',
  tryAgain: 'Probar de nuevo',
  resultEyebrow: 'Tu algoritmo de vida',
  resultLead: 'Podrías prosperar en {city}.',
  yourVersion: 'Tu versión de vida',
  idealDay: 'Tu día ideal',
  obsYouValue: 'Valoras',
  obsYouNeed: 'Necesitas',
  obsYouEnjoy: 'Probablemente disfrutas',
  obsYouMiss: 'Quizá te falta',
  closing1: 'Tu vida no tiene que parecer impresionante.',
  closing2: 'Tiene que sentirse tuya.',
  questions: {
    morning: {
      theme: 'Mañana',
      a: { label: 'Amanecer', detail: '08:00', subdetail: 'calles tranquilas' },
      b: { label: 'Mañana lenta', detail: '10:30', subdetail: 'café primero' },
    },
    home: {
      theme: 'Hogar',
      a: { label: 'Piso en la ciudad', detail: '4.º piso', subdetail: 'ir a pie' },
      b: { label: 'Casa junto al mar', detail: 'aire abierto', subdetail: 'espacio para respirar' },
    },
    saturday: {
      theme: 'Sábado',
      a: { label: 'Planificar', detail: 'reservado', subdetail: 'sin sorpresas' },
      b: { label: 'Ver qué pasa', detail: 'día abierto', subdetail: 'seguir el ánimo' },
    },
    work: {
      theme: 'Trabajo',
      a: { label: 'Mismo sitio, foco profundo', detail: 'un escritorio', subdetail: 'menos distracciones' },
      b: { label: 'Sitio nuevo, gente nueva', detail: 'moviéndote', subdetail: 'energía fresca' },
    },
    distance: {
      theme: 'Distancia',
      a: { label: '10 minutos de todo', detail: 'compacto', subdetail: 'siempre cerca' },
      b: { label: '30 minutos por más espacio', detail: 'más amplio', subdetail: 'cambiar tiempo por metros' },
    },
    evening: {
      theme: 'Noche',
      a: { label: 'Cena con amigos', detail: 'mesa animada', subdetail: 'muchas voces' },
      b: { label: 'Cena para dos', detail: 'mesa pequeña', subdetail: 'larga conversación' },
    },
    money: {
      theme: 'Dinero',
      a: { label: 'Más tiempo', detail: 'menos horas', subdetail: 'vida primero' },
      b: { label: 'Más cosas', detail: 'buenos objetos', subdetail: 'confort alrededor' },
    },
    travel: {
      theme: 'Viajes',
      a: { label: 'Un lugar, más profundo', detail: 'quedarte', subdetail: 'aprender los rincones' },
      b: { label: 'Muchos lugares, a menudo', detail: 'seguir moviéndote', subdetail: 'siempre llegando' },
    },
    weather: {
      theme: 'Clima',
      a: { label: 'Sol todo el año', detail: 'luz cada día', subdetail: 'fuera a menudo' },
      b: { label: 'Cuatro estaciones', detail: 'cielos cambiantes', subdetail: 'ritmo del año' },
    },
    life: {
      theme: 'Vida',
      a: { label: 'Raíces', detail: 'pertenecer', subdetail: 'gente que te conoce' },
      b: { label: 'Libertad', detail: 'ir ligera', subdetail: 'opciones abiertas' },
    },
  },
  profiles: {
    coastalCreative: {
      name: 'La creativa costera',
      city: 'Lisboa',
      lifestyle:
        'Pareces valorar la libertad sin perder conexión. Una ciudad caminable, trabajo creativo, el océano cerca y espacio para desaparecer una tarde podrían encajar contigo.',
      timeline: [
        { time: '08:00', activity: 'Café y paseo' },
        { time: '09:30', activity: 'Trabajo profundo' },
        { time: '13:00', activity: 'Comida fuera' },
        { time: '17:30', activity: 'Movimiento junto al agua' },
        { time: '20:00', activity: 'Cena con amigos' },
      ],
      observations: {
        value: 'Autonomía',
        need: 'Espacio',
        enjoy: 'Círculos sociales pequeños',
        miss: 'Variedad',
      },
    },
    urbanNomad: {
      name: 'El nómada urbano',
      city: 'Copenhague',
      lifestyle:
        'Tus decisiones apuntan al movimiento, el diseño y la independencia. Una ciudad que funcione bien, abra curiosidad y ofrezca rincones nuevos podría encajar con cómo quieres vivir.',
      timeline: [
        { time: '07:30', activity: 'Paseo matinal por la ciudad' },
        { time: '09:00', activity: 'Trabajo desde un sitio nuevo' },
        { time: '13:30', activity: 'Comida rápida, mirar gente' },
        { time: '16:00', activity: 'Reunión en otro lugar' },
        { time: '19:30', activity: 'Cultura y cena fuera' },
      ],
      observations: {
        value: 'Independencia',
        need: 'Estimulación',
        enjoy: 'Entornos nuevos',
        miss: 'Calma',
      },
    },
    slowBuilder: {
      name: 'La constructora lenta',
      city: 'Girona',
      lifestyle:
        'Esta versión de vida podría encajar contigo: un ritmo más pequeño, rutinas con sentido, naturaleza cerca y tiempo para construir algo sin prisas.',
      timeline: [
        { time: '08:30', activity: 'Desayuno sin prisas' },
        { time: '10:00', activity: 'Trabajo personal concentrado' },
        { time: '14:00', activity: 'Paseo fuera del pueblo' },
        { time: '17:00', activity: 'Recados y pequeños rituales' },
        { time: '20:30', activity: 'Cena en casa' },
      ],
      observations: {
        value: 'Profundidad',
        need: 'Rutina',
        enjoy: 'Relaciones cercanas',
        miss: 'Energía de gran ciudad',
      },
    },
    culturalExplorer: {
      name: 'La exploradora cultural',
      city: 'París',
      lifestyle:
        'Podrías prosperar donde belleza, cultura y descubrimiento diario se cruzan. Largas caminatas, exposiciones, restaurantes y una ciudad que siempre tiene algo nuevo que notar.',
      timeline: [
        { time: '09:00', activity: 'Café y lectura' },
        { time: '11:00', activity: 'Galería o archivo' },
        { time: '14:00', activity: 'Comida larga' },
        { time: '17:00', activity: 'Vagar sin plan' },
        { time: '21:00', activity: 'Cena tardía' },
      ],
      observations: {
        value: 'Descubrimiento',
        need: 'Inspiración',
        enjoy: 'Belleza urbana',
        miss: 'Silencio',
      },
    },
    sunSeeker: {
      name: 'La buscadora de sol',
      city: 'Valencia',
      lifestyle:
        'Tus decisiones sugieren luz, movimiento y calor social. Una ciudad donde la vida pase fuera, la comida se comparta y el ritmo sea humano podría sentirse muy natural.',
      timeline: [
        { time: '08:00', activity: 'Sol y estiramientos' },
        { time: '10:00', activity: 'Trabajo, luego pausa' },
        { time: '14:00', activity: 'Comida larga con otros' },
        { time: '18:00', activity: 'Playa o parque' },
        { time: '21:30', activity: 'Noche tranquila fuera' },
      ],
      observations: {
        value: 'Conexión',
        need: 'Luz',
        enjoy: 'Comidas compartidas',
        miss: 'Estructura',
      },
    },
    quietAchiever: {
      name: 'El logro silencioso',
      city: 'Zúrich',
      lifestyle:
        'Esta versión de vida podría encajar contigo: claridad, calidad, foco y un entorno calmado donde las cosas funcionan — con naturaleza lo bastante cerca para recargar.',
      timeline: [
        { time: '07:00', activity: 'Empezar temprano, mente clara' },
        { time: '09:00', activity: 'Bloque de foco profundo' },
        { time: '12:30', activity: 'Comida sencilla' },
        { time: '17:00', activity: 'Paseo o vuelta a casa' },
        { time: '19:00', activity: 'Noche tranquila en casa' },
      ],
      observations: {
        value: 'Calidad',
        need: 'Orden',
        enjoy: 'Entornos calmados',
        miss: 'Espontaneidad',
      },
    },
  },
}
