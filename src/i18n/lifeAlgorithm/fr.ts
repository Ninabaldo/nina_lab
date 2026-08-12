import type { LifeAlgorithmCopy } from '../types'

export const lifeAlgorithmFr: LifeAlgorithmCopy = {
  lab: "Nina's Lab",
  title: 'L\u2019algorithme de la vie',
  subtitle: '10 choix. Une vie possible.',
  introHint: 'Choisissez vite. Ne réfléchissez pas trop.',
  start: 'Commencer',
  tryAgain: 'Recommencer',
  resultEyebrow: 'Votre algorithme de vie',
  resultLead: 'Vous pourriez vous épanouir à {city}.',
  yourVersion: 'Votre version de vie',
  idealDay: 'Votre journée idéale',
  obsYouValue: 'Vous valorisez',
  obsYouNeed: 'Vous avez besoin de',
  obsYouEnjoy: 'Vous appréciez probablement',
  obsYouMiss: 'Il vous manque peut-être',
  closing1: 'Votre vie n\u2019a pas besoin d\u2019impressionner.',
  closing2: 'Elle doit vous ressembler.',
  questions: {
    morning: {
      theme: 'Matin',
      a: { label: 'Lever de soleil', detail: '08:00', subdetail: 'rues calmes' },
      b: { label: 'Matin lent', detail: '10:30', subdetail: 'café d\u2019abord' },
    },
    home: {
      theme: 'Maison',
      a: { label: 'Appartement en ville', detail: '4e étage', subdetail: 'tout à pied' },
      b: { label: 'Maison au bord de mer', detail: 'air libre', subdetail: 'espace pour respirer' },
    },
    saturday: {
      theme: 'Samedi',
      a: { label: 'Planifier', detail: 'réservé', subdetail: 'pas de surprises' },
      b: { label: 'Voir ce qui arrive', detail: 'journée ouverte', subdetail: 'suivre l\u2019humeur' },
    },
    work: {
      theme: 'Travail',
      a: { label: 'Même lieu, focus profond', detail: 'un bureau', subdetail: 'moins de distractions' },
      b: { label: 'Nouveau lieu, nouvelles gens', detail: 'en mouvement', subdetail: 'énergie fraîche' },
    },
    distance: {
      theme: 'Distance',
      a: { label: '10 minutes de tout', detail: 'compact', subdetail: 'toujours proche' },
      b: { label: '30 minutes pour plus d\u2019espace', detail: 'plus large', subdetail: 'temps contre mètres' },
    },
    evening: {
      theme: 'Soir',
      a: { label: 'Dîner entre amis', detail: 'table animée', subdetail: 'beaucoup de voix' },
      b: { label: 'Dîner à deux', detail: 'petite table', subdetail: 'longue conversation' },
    },
    money: {
      theme: 'Argent',
      a: { label: 'Plus de temps', detail: 'moins d\u2019heures', subdetail: 'la vie d\u2019abord' },
      b: { label: 'Plus de choses', detail: 'beaux objets', subdetail: 'confort autour' },
    },
    travel: {
      theme: 'Voyage',
      a: { label: 'Un lieu, plus profond', detail: 'rester', subdetail: 'apprendre les recoins' },
      b: { label: 'Beaucoup de lieux, souvent', detail: 'toujours en route', subdetail: 'toujours en arrivée' },
    },
    weather: {
      theme: 'Climat',
      a: { label: 'Soleil toute l\u2019année', detail: 'lumière chaque jour', subdetail: 'dehors souvent' },
      b: { label: 'Quatre saisons', detail: 'ciels changeants', subdetail: 'rythme de l\u2019année' },
    },
    life: {
      theme: 'Vie',
      a: { label: 'Racines', detail: 'appartenir', subdetail: 'des gens qui vous connaissent' },
      b: { label: 'Liberté', detail: 'rester légère', subdetail: 'options ouvertes' },
    },
  },
  profiles: {
    coastalCreative: {
      name: 'La créative côtière',
      city: 'Lisbonne',
      lifestyle:
        'Vous semblez valoriser la liberté sans perdre le lien. Une ville walkable, un travail créatif, l\u2019océan à proximité et assez d\u2019espace pour disparaître un après-midi pourraient vous convenir.',
      timeline: [
        { time: '08:00', activity: 'Café & promenade' },
        { time: '09:30', activity: 'Travail profond' },
        { time: '13:00', activity: 'Déjeuner dehors' },
        { time: '17:30', activity: 'Mouvement au bord de l\u2019eau' },
        { time: '20:00', activity: 'Dîner entre amis' },
      ],
      observations: {
        value: 'Autonomie',
        need: 'Espace',
        enjoy: 'Petits cercles sociaux',
        miss: 'Variété',
      },
    },
    urbanNomad: {
      name: 'Le nomade urbain',
      city: 'Copenhague',
      lifestyle:
        'Vos choix pointent vers le mouvement, le design et l\u2019indépendance. Une ville qui fonctionne bien, ouvre la curiosité et offre de nouveaux recoins pourrait correspondre à votre façon de vivre.',
      timeline: [
        { time: '07:30', activity: 'Traversée matinale de la ville' },
        { time: '09:00', activity: 'Travail depuis un nouveau lieu' },
        { time: '13:30', activity: 'Déjeuner rapide, observer' },
        { time: '16:00', activity: 'Rendez-vous ailleurs' },
        { time: '19:30', activity: 'Culture & dîner dehors' },
      ],
      observations: {
        value: 'Indépendance',
        need: 'Stimulation',
        enjoy: 'Nouveaux environnements',
        miss: 'Calme',
      },
    },
    slowBuilder: {
      name: 'La bâtisseuse lente',
      city: 'Gérone',
      lifestyle:
        'Cette version de vie pourrait vous convenir : un rythme plus petit, des routines sensées, la nature à proximité et le temps de construire quelque chose sans précipitation.',
      timeline: [
        { time: '08:30', activity: 'Petit-déjeuner sans hâte' },
        { time: '10:00', activity: 'Travail personnel concentré' },
        { time: '14:00', activity: 'Promenade hors de la ville' },
        { time: '17:00', activity: 'Courses & petits rituels' },
        { time: '20:30', activity: 'Dîner à la maison' },
      ],
      observations: {
        value: 'Profondeur',
        need: 'Routine',
        enjoy: 'Relations proches',
        miss: 'Énergie de grande ville',
      },
    },
    culturalExplorer: {
      name: 'L\u2019exploratrice culturelle',
      city: 'Paris',
      lifestyle:
        'Vous pourriez vous épanouir là où beauté, culture et découverte quotidienne se croisent. Longues marches, expositions, restaurants et une ville qui offre toujours quelque chose de nouveau.',
      timeline: [
        { time: '09:00', activity: 'Café & lecture' },
        { time: '11:00', activity: 'Galerie ou archive' },
        { time: '14:00', activity: 'Long déjeuner' },
        { time: '17:00', activity: 'Flâner sans plan' },
        { time: '21:00', activity: 'Dîner tardif' },
      ],
      observations: {
        value: 'Découverte',
        need: 'Inspiration',
        enjoy: 'Beauté urbaine',
        miss: 'Silence',
      },
    },
    sunSeeker: {
      name: 'La chercheuse de soleil',
      city: 'Valence',
      lifestyle:
        'Vos choix suggèrent lumière, mouvement et chaleur sociale. Une ville où la vie se passe dehors, où l\u2019on partage les repas et le rythme reste humain pourrait vous aller naturellement.',
      timeline: [
        { time: '08:00', activity: 'Soleil & étirements' },
        { time: '10:00', activity: 'Travail, puis pause' },
        { time: '14:00', activity: 'Long repas avec d\u2019autres' },
        { time: '18:00', activity: 'Plage ou parc' },
        { time: '21:30', activity: 'Soirée légère dehors' },
      ],
      observations: {
        value: 'Connexion',
        need: 'Lumière',
        enjoy: 'Repas partagés',
        miss: 'Structure',
      },
    },
    quietAchiever: {
      name: 'L\u2019accomplie discrète',
      city: 'Zurich',
      lifestyle:
        'Cette version de vie pourrait vous convenir : clarté, qualité, focus et un environnement calme où tout fonctionne — avec la nature assez proche pour recharger.',
      timeline: [
        { time: '07:00', activity: 'Début tôt, esprit clair' },
        { time: '09:00', activity: 'Bloc de focus profond' },
        { time: '12:30', activity: 'Déjeuner simple' },
        { time: '17:00', activity: 'Marche ou retour' },
        { time: '19:00', activity: 'Soirée tranquille chez soi' },
      ],
      observations: {
        value: 'Qualité',
        need: 'Ordre',
        enjoy: 'Environnements calmes',
        miss: 'Spontanéité',
      },
    },
  },
}
