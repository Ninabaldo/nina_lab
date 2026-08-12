import type { LifeAlgorithmCopy } from '../types'

export const lifeAlgorithmCa: LifeAlgorithmCopy = {
  lab: "Nina's Lab",
  title: "L'algoritme de la vida",
  subtitle: '10 decisions. Una vida possible.',
  introHint: 'Tria ràpid. No et pensis massa.',
  start: 'Començar',
  tryAgain: 'Tornar a provar',
  resultEyebrow: 'El teu algoritme de vida',
  resultLead: 'Podries florir a {city}.',
  yourVersion: 'La teva versió de vida',
  idealDay: 'El teu dia ideal',
  obsYouValue: 'Valores',
  obsYouNeed: 'Necessites',
  obsYouEnjoy: 'Probablement gaudeixes de',
  obsYouMiss: 'Potser et falta',
  closing1: 'La teva vida no ha de semblar impressionant.',
  closing2: 'Ha de sentir-se teva.',
  questions: {
    morning: {
      theme: 'Matí',
      a: { label: 'Sortida de sol', detail: '08:00', subdetail: 'carrers tranquils' },
      b: { label: 'Matí lent', detail: '10:30', subdetail: 'cafè primer' },
    },
    home: {
      theme: 'Casa',
      a: { label: 'Pis a la ciutat', detail: '4t pis', subdetail: 'tot a peu' },
      b: { label: 'Casa al mar', detail: 'aire obert', subdetail: 'espai per respirar' },
    },
    saturday: {
      theme: 'Dissabte',
      a: { label: 'Planificar', detail: 'reservat', subdetail: 'sense sorpreses' },
      b: { label: 'Veure què passa', detail: 'dia obert', subdetail: 'seguir l\u2019estat d\u2019ànim' },
    },
    work: {
      theme: 'Feina',
      a: { label: 'Mateix lloc, focus profund', detail: 'un escriptori', subdetail: 'menys distraccions' },
      b: { label: 'Lloc nou, gent nova', detail: 'movent-te', subdetail: 'energia fresca' },
    },
    distance: {
      theme: 'Distància',
      a: { label: '10 minuts de tot', detail: 'compacte', subdetail: 'sempre a prop' },
      b: { label: '30 minuts per més espai', detail: 'més ampli', subdetail: 'canviar temps per m²' },
    },
    evening: {
      theme: 'Vespre',
      a: { label: 'Sopar amb amics', detail: 'taula animada', subdetail: 'moltes veus' },
      b: { label: 'Sopar per dos', detail: 'taula petita', subdetail: 'llarga conversa' },
    },
    money: {
      theme: 'Diners',
      a: { label: 'Més temps', detail: 'menys hores', subdetail: 'vida primer' },
      b: { label: 'Més coses', detail: 'objectes bons', subdetail: 'comfort al voltant' },
    },
    travel: {
      theme: 'Viatges',
      a: { label: 'Un lloc, més profund', detail: 'quedar-te', subdetail: 'aprendre els racons' },
      b: { label: 'Molts llocs, sovint', detail: 'seguir movent-te', subdetail: 'sempre arribant' },
    },
    weather: {
      theme: 'Clima',
      a: { label: 'Sol tot l\u2019any', detail: 'llum cada dia', subdetail: 'fora sovint' },
      b: { label: 'Quatre estacions', detail: 'cels canviants', subdetail: 'ritme de l\u2019any' },
    },
    life: {
      theme: 'Vida',
      a: { label: 'Arrels', detail: 'pertànyer', subdetail: 'gent que et coneix' },
      b: { label: 'Llibertat', detail: 'estar lleugera', subdetail: 'opcions obertes' },
    },
  },
  profiles: {
    coastalCreative: {
      name: 'La creativa costanera',
      city: 'Lisboa',
      lifestyle:
        'Sembles valorar la llibertat sense perdre connexió. Una ciutat caminable, feina creativa, l\u2019oceà a prop i prou espai per desaparèixer una tarda podrien encaixar amb tu.',
      timeline: [
        { time: '08:00', activity: 'Cafè i passeig' },
        { time: '09:30', activity: 'Feina profunda' },
        { time: '13:00', activity: 'Dinar fora' },
        { time: '17:30', activity: 'Moviment a la vora de l\u2019aigua' },
        { time: '20:00', activity: 'Sopar amb amics' },
      ],
      observations: {
        value: 'Autonomia',
        need: 'Espai',
        enjoy: 'Cercles socials petits',
        miss: 'Varietat',
      },
    },
    urbanNomad: {
      name: 'El nomada urbà',
      city: 'Copenhaguen',
      lifestyle:
        'Les teves decisions apunten cap al moviment, el disseny i la independència. Una ciutat que funcioni bé, obri curiositat i ofereixi racons nous podria encaixar amb com vols viure.',
      timeline: [
        { time: '07:30', activity: 'Passeig matinal per la ciutat' },
        { time: '09:00', activity: 'Feina des d\u2019un lloc nou' },
        { time: '13:30', activity: 'Dinar ràpid, mirar gent' },
        { time: '16:00', activity: 'Trobada en un altre lloc' },
        { time: '19:30', activity: 'Cultura i sopar fora' },
      ],
      observations: {
        value: 'Independència',
        need: 'Estimulació',
        enjoy: 'Entorns nous',
        miss: 'Calma',
      },
    },
    slowBuilder: {
      name: 'La constructora lenta',
      city: 'Girona',
      lifestyle:
        'Aquesta versió de vida podria encaixar amb tu: un ritme més petit, rutines amb sentit, natura a prop i temps per construir alguna cosa sense presses.',
      timeline: [
        { time: '08:30', activity: 'Esmorzar sense presses' },
        { time: '10:00', activity: 'Feina personal concentrada' },
        { time: '14:00', activity: 'Passeig fora del poble' },
        { time: '17:00', activity: 'Recados i petits rituals' },
        { time: '20:30', activity: 'Sopar a casa' },
      ],
      observations: {
        value: 'Profunditat',
        need: 'Rutina',
        enjoy: 'Relacions properes',
        miss: 'Energia de gran ciutat',
      },
    },
    culturalExplorer: {
      name: 'L\u2019exploradora cultural',
      city: 'París',
      lifestyle:
        'Podries florir on bellesa, cultura i descoberta diària es creuen. Llargues caminades, exposicions, restaurants i una ciutat que sempre té alguna cosa nova per notar.',
      timeline: [
        { time: '09:00', activity: 'Cafè i lectura' },
        { time: '11:00', activity: 'Galeria o arxiu' },
        { time: '14:00', activity: 'Dinar llarg' },
        { time: '17:00', activity: 'Vagar sense pla' },
        { time: '21:00', activity: 'Sopar tard' },
      ],
      observations: {
        value: 'Descoberta',
        need: 'Inspiració',
        enjoy: 'Bellesa urbana',
        miss: 'Silenci',
      },
    },
    sunSeeker: {
      name: 'La buscadora de sol',
      city: 'València',
      lifestyle:
        'Les teves decisions suggereixen llum, moviment i calor social. Una ciutat on la vida passi fora, el menjar es comparteixi i el ritme sigui humà podria sentir-se molt natural.',
      timeline: [
        { time: '08:00', activity: 'Sol i estiraments' },
        { time: '10:00', activity: 'Feina, després pausa' },
        { time: '14:00', activity: 'Dinar llarg amb altres' },
        { time: '18:00', activity: 'Platja o parc' },
        { time: '21:30', activity: 'Vespre tranquil fora' },
      ],
      observations: {
        value: 'Connexió',
        need: 'Llum',
        enjoy: 'Àpats compartits',
        miss: 'Estructura',
      },
    },
    quietAchiever: {
      name: 'L\u2019assoliment tranquil',
      city: 'Zuric',
      lifestyle:
        'Aquesta versió de vida podria encaixar amb tu: claredat, qualitat, focus i un entorn calm on les coses funcionen — amb natura prou a prop per recarregar.',
      timeline: [
        { time: '07:00', activity: 'Començar aviat, cap clar' },
        { time: '09:00', activity: 'Bloc de focus profund' },
        { time: '12:30', activity: 'Dinar senzill' },
        { time: '17:00', activity: 'Passeig o tornada' },
        { time: '19:00', activity: 'Vespre tranquil a casa' },
      ],
      observations: {
        value: 'Qualitat',
        need: 'Ordre',
        enjoy: 'Entorns calmes',
        miss: 'Espontaneïtat',
      },
    },
  },
}
