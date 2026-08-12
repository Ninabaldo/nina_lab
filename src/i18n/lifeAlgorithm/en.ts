import type { LifeAlgorithmCopy } from '../types'

export const lifeAlgorithmEn: LifeAlgorithmCopy = {
  lab: "Nina's Lab",
  title: 'The Life Algorithm',
  subtitle: '10 choices. One possible life.',
  introHint: 'Choose quickly. Don\u2019t overthink it.',
  start: 'Start',
  tryAgain: 'Try again',
  resultEyebrow: 'Your life algorithm',
  resultLead: 'You might thrive in {city}.',
  yourVersion: 'Your version of life',
  idealDay: 'Your ideal day',
  obsYouValue: 'You value',
  obsYouNeed: 'You need',
  obsYouEnjoy: 'You probably enjoy',
  obsYouMiss: 'You might miss',
  closing1: 'Your life doesn\u2019t need to look impressive.',
  closing2: 'It needs to feel like yours.',
  questions: {
    morning: {
      theme: 'Morning',
      a: { label: 'Sunrise', detail: '08:00', subdetail: 'quiet streets' },
      b: { label: 'Slow morning', detail: '10:30', subdetail: 'coffee first' },
    },
    home: {
      theme: 'Home',
      a: { label: 'City apartment', detail: '4th floor', subdetail: 'walk everywhere' },
      b: { label: 'House by the sea', detail: 'open air', subdetail: 'room to breathe' },
    },
    saturday: {
      theme: 'Saturday',
      a: { label: 'Plan ahead', detail: 'booked', subdetail: 'no surprises' },
      b: { label: 'See what happens', detail: 'open day', subdetail: 'follow the mood' },
    },
    work: {
      theme: 'Work',
      a: { label: 'Same place, deep focus', detail: 'one desk', subdetail: 'fewer distractions' },
      b: { label: 'New place, new people', detail: 'moving around', subdetail: 'fresh energy' },
    },
    distance: {
      theme: 'Distance',
      a: { label: '10 minutes from everything', detail: 'compact', subdetail: 'always close' },
      b: { label: '30 minutes for more space', detail: 'wider', subdetail: 'trade time for room' },
    },
    evening: {
      theme: 'Evening',
      a: { label: 'Dinner with friends', detail: 'lively table', subdetail: 'many voices' },
      b: { label: 'Dinner for two', detail: 'small table', subdetail: 'long conversation' },
    },
    money: {
      theme: 'Money',
      a: { label: 'More time', detail: 'fewer hours', subdetail: 'life first' },
      b: { label: 'More things', detail: 'nice objects', subdetail: 'comfort around you' },
    },
    travel: {
      theme: 'Travel',
      a: { label: 'One place, deeper', detail: 'stay longer', subdetail: 'learn the corners' },
      b: { label: 'Many places, often', detail: 'keep moving', subdetail: 'always arriving' },
    },
    weather: {
      theme: 'Weather',
      a: { label: 'Sun all year', detail: 'light every day', subdetail: 'outdoors often' },
      b: { label: 'Four seasons', detail: 'changing skies', subdetail: 'rhythm of the year' },
    },
    life: {
      theme: 'Life',
      a: { label: 'Roots', detail: 'belong somewhere', subdetail: 'people who know you' },
      b: { label: 'Freedom', detail: 'stay light', subdetail: 'options open' },
    },
  },
  profiles: {
    coastalCreative: {
      name: 'The Coastal Creative',
      city: 'Lisbon',
      lifestyle:
        'You seem to value freedom without losing connection. A walkable city, creative work, the ocean nearby and enough space to disappear for an afternoon could be a good combination for you.',
      timeline: [
        { time: '08:00', activity: 'Coffee & a walk' },
        { time: '09:30', activity: 'Deep work' },
        { time: '13:00', activity: 'Lunch outside' },
        { time: '17:30', activity: 'Movement by the water' },
        { time: '20:00', activity: 'Dinner with friends' },
      ],
      observations: {
        value: 'Autonomy',
        need: 'Space',
        enjoy: 'Small social circles',
        miss: 'Variety',
      },
    },
    urbanNomad: {
      name: 'The Urban Nomad',
      city: 'Copenhagen',
      lifestyle:
        'Your choices point towards movement, design and independence. A city that works well, welcomes curiosity and keeps offering new corners might suit the way you want to live.',
      timeline: [
        { time: '07:30', activity: 'Early ride through the city' },
        { time: '09:00', activity: 'Work from a new spot' },
        { time: '13:30', activity: 'Quick lunch, people-watching' },
        { time: '16:00', activity: 'Meeting somewhere different' },
        { time: '19:30', activity: 'Culture & dinner out' },
      ],
      observations: {
        value: 'Independence',
        need: 'Stimulation',
        enjoy: 'New environments',
        miss: 'Stillness',
      },
    },
    slowBuilder: {
      name: 'The Slow Builder',
      city: 'Girona',
      lifestyle:
        'This version of life could suit you: a smaller rhythm, meaningful routines, nature close by and time to build something slowly without rushing the process.',
      timeline: [
        { time: '08:30', activity: 'Unhurried breakfast' },
        { time: '10:00', activity: 'Focused personal work' },
        { time: '14:00', activity: 'Walk outside town' },
        { time: '17:00', activity: 'Errands & small rituals' },
        { time: '20:30', activity: 'Dinner at home' },
      ],
      observations: {
        value: 'Depth',
        need: 'Routine',
        enjoy: 'Close relationships',
        miss: 'Big-city energy',
      },
    },
    culturalExplorer: {
      name: 'The Cultural Explorer',
      city: 'Paris',
      lifestyle:
        'You might thrive where beauty, culture and daily discovery overlap. Long walks, exhibitions, restaurants and a city that always has something new to notice could fit you well.',
      timeline: [
        { time: '09:00', activity: 'Café & reading' },
        { time: '11:00', activity: 'Gallery or archive' },
        { time: '14:00', activity: 'Long lunch' },
        { time: '17:00', activity: 'Wandering without a plan' },
        { time: '21:00', activity: 'Late dinner' },
      ],
      observations: {
        value: 'Discovery',
        need: 'Inspiration',
        enjoy: 'Urban beauty',
        miss: 'Quiet',
      },
    },
    sunSeeker: {
      name: 'The Sun Seeker',
      city: 'Valencia',
      lifestyle:
        'Your choices suggest light, movement and social warmth. A city where life happens outside, food is shared and the pace stays human could feel very natural to you.',
      timeline: [
        { time: '08:00', activity: 'Sun & stretch' },
        { time: '10:00', activity: 'Work, then break' },
        { time: '14:00', activity: 'Long meal with others' },
        { time: '18:00', activity: 'Beach or park' },
        { time: '21:30', activity: 'Easy evening out' },
      ],
      observations: {
        value: 'Connection',
        need: 'Light',
        enjoy: 'Shared meals',
        miss: 'Structure',
      },
    },
    quietAchiever: {
      name: 'The Quiet Achiever',
      city: 'Zurich',
      lifestyle:
        'This version of life could suit you: clarity, quality, focus and a calm environment where things work — with nature still close enough to reset when you need it.',
      timeline: [
        { time: '07:00', activity: 'Early start, clear head' },
        { time: '09:00', activity: 'Deep focus block' },
        { time: '12:30', activity: 'Simple lunch' },
        { time: '17:00', activity: 'Walk or train home' },
        { time: '19:00', activity: 'Quiet evening in' },
      ],
      observations: {
        value: 'Quality',
        need: 'Order',
        enjoy: 'Calm environments',
        miss: 'Spontaneity',
      },
    },
  },
}
