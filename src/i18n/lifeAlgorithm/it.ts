import type { LifeAlgorithmCopy } from '../types'

export const lifeAlgorithmIt: LifeAlgorithmCopy = {
  lab: "Nina's Lab",
  title: 'L\'algoritmo della vita',
  subtitle: '10 scelte. Una vita possibile.',
  introHint: 'Scegli in fretta. Non pensarci troppo.',
  start: 'Inizia',
  tryAgain: 'Riprova',
  resultEyebrow: 'Il tuo algoritmo di vita',
  resultLead: 'Potresti prosperare a {city}.',
  yourVersion: 'La tua versione di vita',
  idealDay: 'La tua giornata ideale',
  obsYouValue: 'Dai valore a',
  obsYouNeed: 'Hai bisogno di',
  obsYouEnjoy: 'Probabilmente ti piace',
  obsYouMiss: 'Forse ti manca',
  closing1: 'La tua vita non deve sembrare impressionante.',
  closing2: 'Deve sentirsi tua.',
  questions: {
    morning: {
      theme: 'Mattina',
      a: { label: 'Alba', detail: '08:00', subdetail: 'strade tranquille' },
      b: { label: 'Mattina lenta', detail: '10:30', subdetail: 'caffè prima' },
    },
    home: {
      theme: 'Casa',
      a: { label: 'Appartamento in città', detail: '4° piano', subdetail: 'a piedi' },
      b: { label: 'Casa sul mare', detail: 'aria aperta', subdetail: 'spazio per respirare' },
    },
    saturday: {
      theme: 'Sabato',
      a: { label: 'Pianificare', detail: 'prenotato', subdetail: 'niente sorprese' },
      b: { label: 'Vedere cosa succede', detail: 'giornata libera', subdetail: "seguire l'umore" },
    },
    work: {
      theme: 'Lavoro',
      a: { label: 'Stesso posto, focus profondo', detail: 'una scrivania', subdetail: 'meno distrazioni' },
      b: { label: 'Posto nuovo, persone nuove', detail: 'in movimento', subdetail: 'energia fresca' },
    },
    distance: {
      theme: 'Distanza',
      a: { label: '10 minuti da tutto', detail: 'compatto', subdetail: 'sempre vicino' },
      b: { label: '30 minuti per più spazio', detail: 'più ampio', subdetail: 'tempo in cambio di spazio' },
    },
    evening: {
      theme: 'Sera',
      a: { label: 'Cena con amici', detail: 'tavolo vivace', subdetail: 'tante voci' },
      b: { label: 'Cena per due', detail: 'tavolo piccolo', subdetail: 'lunga conversazione' },
    },
    money: {
      theme: 'Soldi',
      a: { label: 'Più tempo', detail: 'meno ore', subdetail: 'vita prima' },
      b: { label: 'Più cose', detail: 'belle cose', subdetail: 'comfort intorno' },
    },
    travel: {
      theme: 'Viaggi',
      a: { label: 'Un posto, più a fondo', detail: 'restare', subdetail: 'imparare gli angoli' },
      b: { label: 'Tanti posti, spesso', detail: 'seguire in movimento', subdetail: 'sempre in arrivo' },
    },
    weather: {
      theme: 'Clima',
      a: { label: "Sole tutto l'anno", detail: 'luce ogni giorno', subdetail: 'spesso fuori' },
      b: { label: 'Quattro stagioni', detail: 'cieli che cambiano', subdetail: "ritmo dell'anno" },
    },
    life: {
      theme: 'Vita',
      a: { label: 'Radici', detail: 'appartenere', subdetail: 'persone che ti conoscono' },
      b: { label: 'Libertà', detail: 'leggera', subdetail: 'opzioni aperte' },
    },
  },
  profiles: {
    coastalCreative: {
      name: 'La creativa costiera',
      city: 'Lisbona',
      lifestyle:
        "Sembra che tu dia valore alla libertà senza perdere legami. Una città percorribile a piedi, lavoro creativo, l'oceano vicino e spazio per sparire un pomeriggio potrebbero calzarti.",
      timeline: [
        { time: '08:00', activity: 'Caffè e passeggiata' },
        { time: '09:30', activity: 'Lavoro profundo' },
        { time: '13:00', activity: 'Pranzo fuori' },
        { time: '17:30', activity: "Movimento vicino all'acqua" },
        { time: '20:00', activity: 'Cena con amici' },
      ],
      observations: {
        value: 'Autonomia',
        need: 'Spazio',
        enjoy: 'Cerchie sociali ristrette',
        miss: 'Varietà',
      },
    },
    urbanNomad: {
      name: 'Il nomade urbano',
      city: 'Copenhagen',
      lifestyle:
        'Le tue scelte puntano a movimento, design e indipendenza. Una città che funziona bene, stimola curiosità e offre angoli nuovi potrebbe adattarsi al modo in cui vuoi vivere.',
      timeline: [
        { time: '07:30', activity: 'Giro mattutino in città' },
        { time: '09:00', activity: 'Lavoro da un posto nuovo' },
        { time: '13:30', activity: 'Pranzo veloce, osservare la gente' },
        { time: '16:00', activity: 'Riunione altrove' },
        { time: '19:30', activity: 'Cultura e cena fuori' },
      ],
      observations: {
        value: 'Indipendenza',
        need: 'Stimolazione',
        enjoy: 'Ambienti nuovi',
        miss: 'Calma',
      },
    },
    slowBuilder: {
      name: 'La costruttrice lenta',
      city: 'Girona',
      lifestyle:
        'Questa versione di vita potrebbe calzarti: un ritmo più piccolo, routine con senso, natura vicina e tempo per costruire qualcosa senza fretta.',
      timeline: [
        { time: '08:30', activity: 'Colazione senza fretta' },
        { time: '10:00', activity: 'Lavoro personale concentrato' },
        { time: '14:00', activity: 'Passeggiata fuori paese' },
        { time: '17:00', activity: 'Commissioni e piccoli rituali' },
        { time: '20:30', activity: 'Cena a casa' },
      ],
      observations: {
        value: 'Profondità',
        need: 'Routine',
        enjoy: 'Relazioni strette',
        miss: 'Energia da grande città',
      },
    },
    culturalExplorer: {
      name: "L'esploratrice culturale",
      city: 'Parigi',
      lifestyle:
        'Potresti prosperare dove bellezza, cultura e scoperta quotidiana si incrociano. Lunghe camminate, mostre, ristoranti e una città che ha sempre qualcosa di nuovo da notare.',
      timeline: [
        { time: '09:00', activity: 'Caffè e lettura' },
        { time: '11:00', activity: 'Galleria o archivio' },
        { time: '14:00', activity: 'Pranzo lungo' },
        { time: '17:00', activity: 'Vagare senza piano' },
        { time: '21:00', activity: 'Cena tardiva' },
      ],
      observations: {
        value: 'Scoperta',
        need: 'Ispirazione',
        enjoy: 'Bellezza urbana',
        miss: 'Silenzio',
      },
    },
    sunSeeker: {
      name: 'La cercatrice di sole',
      city: 'Valencia',
      lifestyle:
        'Le tue scelte suggeriscono luce, movimento e calore sociale. Una città dove la vita è fuori, si condivide il cibo e il ritmo resta umano potrebbe sentirsi naturale.',
      timeline: [
        { time: '08:00', activity: 'Sole e stretching' },
        { time: '10:00', activity: 'Lavoro, poi pausa' },
        { time: '14:00', activity: 'Pasto lungo con altri' },
        { time: '18:00', activity: 'Spiaggia o parco' },
        { time: '21:30', activity: 'Serata leggera fuori' },
      ],
      observations: {
        value: 'Connessione',
        need: 'Luce',
        enjoy: 'Pasti condivisi',
        miss: 'Struttura',
      },
    },
    quietAchiever: {
      name: 'Il realizzatore silenzioso',
      city: 'Zurigo',
      lifestyle:
        'Questa versione di vita potrebbe calzarti: chiarezza, qualità, focus e un ambiente calmo dove le cose funzionano — con la natura abbastanza vicina per ricaricarti.',
      timeline: [
        { time: '07:00', activity: 'Inizio presto, mente lucida' },
        { time: '09:00', activity: 'Blocco di focus profondo' },
        { time: '12:30', activity: 'Pranzo semplice' },
        { time: '17:00', activity: 'Passeggiata o rientro' },
        { time: '19:00', activity: 'Serata tranquilla in casa' },
      ],
      observations: {
        value: 'Qualità',
        need: 'Ordine',
        enjoy: 'Ambienti calmi',
        miss: 'Spontaneità',
      },
    },
  },
}
