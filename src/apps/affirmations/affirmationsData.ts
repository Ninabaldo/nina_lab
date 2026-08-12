import type { Language } from '../../lib/preferences'

export interface Affirmation {
  text: string
  author: string
}

export const affirmationsByLanguage: Record<Language, Affirmation[]> = {
  en: [
    { text: 'Who looks outside, dreams; who looks inside, awakes.', author: 'Carl Jung' },
    { text: 'Love is the only sane and satisfactory answer to the problem of human existence.', author: 'Erich Fromm' },
    { text: 'We need to return to the soul of the world.', author: 'James Hillman' },
    { text: 'Peace comes from within. Do not seek it without.', author: 'Buddha' },
    { text: 'I am not what happened to me, I am what I choose to become.', author: 'Carl Jung' },
    { text: 'Creativity requires the courage to let go of certainties.', author: 'Erich Fromm' },
    { text: 'The soul is not in the body; the body is in the soul.', author: 'James Hillman' },
    { text: 'You yourself, as much as anybody in the entire universe, deserve your love and affection.', author: 'Buddha' },
    { text: 'The privilege of a lifetime is to become who you truly are.', author: 'Carl Jung' },
    { text: 'To love means to care, to want to be present for the other.', author: 'Erich Fromm' },
    { text: 'Grow down into your life.', author: 'James Hillman' },
    { text: 'The mind is everything. What you think you become.', author: 'Buddha' },
    { text: 'Feeling is the secret.', author: 'Neville Goddard' },
    { text: 'Assume the feeling of your wish fulfilled.', author: 'Neville Goddard' },
    { text: 'Imagination is the only redemptive power in the universe.', author: 'Neville Goddard' },
  ],
  es: [
    { text: 'Quien mira hacia fuera, sueña; quien mira hacia dentro, despierta.', author: 'Carl Jung' },
    { text: 'El amor es la única respuesta sana y satisfactoria al problema de la existencia humana.', author: 'Erich Fromm' },
    { text: 'Necesitamos volver al alma del mundo.', author: 'James Hillman' },
    { text: 'La paz viene de dentro. No la busques fuera.', author: 'Buda' },
    { text: 'No soy lo que me pasó, soy lo que elijo ser.', author: 'Carl Jung' },
    { text: 'La creatividad requiere el valor de soltar las certezas.', author: 'Erich Fromm' },
    { text: 'El alma no está en el cuerpo; el cuerpo está en el alma.', author: 'James Hillman' },
    { text: 'Tú mismo, tanto como cualquiera en el universo, mereces tu amor y afecto.', author: 'Buda' },
    { text: 'El privilegio de toda una vida es convertirse en quien realmente eres.', author: 'Carl Jung' },
    { text: 'Amar significa cuidar, querer estar presente para el otro.', author: 'Erich Fromm' },
    { text: 'Crece hacia abajo en tu vida.', author: 'James Hillman' },
    { text: 'La mente lo es todo. En lo que piensas te conviertes.', author: 'Buda' },
    { text: 'El sentimiento es el secreto.', author: 'Neville Goddard' },
    { text: 'Asume el sentimiento de tu deseo cumplido.', author: 'Neville Goddard' },
    { text: 'La imaginación es el único poder redentor en el universo.', author: 'Neville Goddard' },
  ],
  ca: [
    { text: 'Qui mira cap a fora, somia; qui mira cap a dins, desperta.', author: 'Carl Jung' },
    { text: "L'amor és l'única resposta sana i satisfactòria al problema de l'existència humana.", author: 'Erich Fromm' },
    { text: "Necessitem tornar a l'ànima del món.", author: 'James Hillman' },
    { text: 'La pau ve de dins. No la busquis fora.', author: 'Budha' },
    { text: 'No sóc el que em va passar, sóc el que trio ser.', author: 'Carl Jung' },
    { text: 'La creativitat requereix el coratge de deixar anar les certeses.', author: 'Erich Fromm' },
    { text: "L'ànima no és al cos; el cos és a l'ànima.", author: 'James Hillman' },
    { text: "Tu mateix, tant com qualsevol a l'univers, mereixes el teu amor i afecte.", author: 'Budha' },
    { text: 'El privilegi de tota una vida és convertir-se en qui realment ets.', author: 'Carl Jung' },
    { text: "Estimar vol dir cuidar, voler estar present per a l'altre.", author: 'Erich Fromm' },
    { text: 'Creix cap avall en la teva vida.', author: 'James Hillman' },
    { text: 'La ment ho és tot. En el que penses et converteixes.', author: 'Budha' },
    { text: 'El sentiment és el secret.', author: 'Neville Goddard' },
    { text: 'Assumeix el sentiment del teu desig complert.', author: 'Neville Goddard' },
    { text: "La imaginació és l'únic poder redemptor a l'univers.", author: 'Neville Goddard' },
  ],
  fr: [
    { text: 'Celui qui regarde dehors rêve ; celui qui regarde dedans s\'éveille.', author: 'Carl Jung' },
    { text: "L'amour est la seule réponse saine et satisfaisante au problème de l'existence humaine.", author: 'Erich Fromm' },
    { text: 'Nous devons retourner à l\'âme du monde.', author: 'James Hillman' },
    { text: 'La paix vient de l\'intérieur. Ne la cherchez pas dehors.', author: 'Bouddha' },
    { text: 'Je ne suis pas ce qui m\'est arrivé, je suis ce que je choisis de devenir.', author: 'Carl Jung' },
    { text: 'La créativité exige le courage de lâcher prise sur les certitudes.', author: 'Erich Fromm' },
    { text: "L'âme n'est pas dans le corps ; le corps est dans l'âme.", author: 'James Hillman' },
    { text: "Tu es digne de ton propre amour et affection, autant que quiconque dans l'univers.", author: 'Bouddha' },
    { text: 'Le privilège d\'une vie est de devenir qui tu es vraiment.', author: 'Carl Jung' },
    { text: "Aimer, c'est prendre soin, vouloir être présent pour l'autre.", author: 'Erich Fromm' },
    { text: 'Enracine-toi dans ta vie.', author: 'James Hillman' },
    { text: 'L\'esprit est tout. Ce que tu penses, tu le deviens.', author: 'Bouddha' },
    { text: 'Le sentiment est le secret.', author: 'Neville Goddard' },
    { text: 'Assume le sentiment de ton désir accompli.', author: 'Neville Goddard' },
    { text: "L'imagination est le seul pouvoir rédempteur dans l'univers.", author: 'Neville Goddard' },
  ],
}

export function pickRandomAffirmation(
  list: Affirmation[],
  exclude?: Affirmation,
): Affirmation {
  const pool = exclude && list.length > 1
    ? list.filter((item) => item.text !== exclude.text)
    : list
  return pool[Math.floor(Math.random() * pool.length)]
}
