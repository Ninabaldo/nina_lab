import type {
  Choice,
  Dimension,
  DimensionScores,
  ProfileId,
  QuestionId,
} from './types'
import { QUESTION_IDS } from './types'

const DIMENSIONS: Dimension[] = [
  'urbanity',
  'nature',
  'structure',
  'spontaneity',
  'autonomy',
  'socialEnergy',
  'intimacy',
  'stability',
  'exploration',
  'simplicity',
  'materialComfort',
  'seasonalVariety',
]

const EMPTY_SCORES = (): DimensionScores =>
  Object.fromEntries(DIMENSIONS.map((key) => [key, 0])) as DimensionScores

const ANSWER_EFFECTS: Record<QuestionId, Record<Choice, Partial<DimensionScores>>> = {
  morning: {
    a: { structure: 2, autonomy: 1, simplicity: 1 },
    b: { spontaneity: 2, autonomy: 1, structure: -1 },
  },
  home: {
    a: { urbanity: 3, materialComfort: 1, nature: -2 },
    b: { nature: 3, simplicity: 2, urbanity: -2 },
  },
  saturday: {
    a: { structure: 2, stability: 2 },
    b: { spontaneity: 2, exploration: 1 },
  },
  work: {
    a: { stability: 2, structure: 2, simplicity: 1 },
    b: { exploration: 2, socialEnergy: 2, urbanity: 1 },
  },
  distance: {
    a: { urbanity: 2, materialComfort: 1, simplicity: -1 },
    b: { nature: 2, simplicity: 2, urbanity: -1 },
  },
  evening: {
    a: { socialEnergy: 3, intimacy: -1 },
    b: { intimacy: 3, socialEnergy: -1 },
  },
  money: {
    a: { autonomy: 3, simplicity: 2, materialComfort: -2 },
    b: { materialComfort: 3, autonomy: -1 },
  },
  travel: {
    a: { stability: 2, intimacy: 2, exploration: -1 },
    b: { exploration: 3, spontaneity: 1 },
  },
  weather: {
    a: { seasonalVariety: -2, spontaneity: 1 },
    b: { seasonalVariety: 3, structure: 1 },
  },
  life: {
    a: { stability: 3, intimacy: 2, exploration: -1 },
    b: { exploration: 2, autonomy: 3, stability: -1 },
  },
}

const PROFILE_TARGETS: Record<ProfileId, DimensionScores> = {
  coastalCreative: {
    urbanity: 4,
    nature: 7,
    structure: 3,
    spontaneity: 5,
    autonomy: 6,
    socialEnergy: 5,
    intimacy: 4,
    stability: 4,
    exploration: 5,
    simplicity: 5,
    materialComfort: 3,
    seasonalVariety: 2,
  },
  urbanNomad: {
    urbanity: 8,
    nature: 2,
    structure: 3,
    spontaneity: 6,
    autonomy: 7,
    socialEnergy: 6,
    intimacy: 3,
    stability: 3,
    exploration: 8,
    simplicity: 3,
    materialComfort: 4,
    seasonalVariety: 4,
  },
  slowBuilder: {
    urbanity: 2,
    nature: 7,
    structure: 6,
    spontaneity: 2,
    autonomy: 4,
    socialEnergy: 3,
    intimacy: 7,
    stability: 8,
    exploration: 2,
    simplicity: 7,
    materialComfort: 3,
    seasonalVariety: 5,
  },
  culturalExplorer: {
    urbanity: 9,
    nature: 1,
    structure: 3,
    spontaneity: 6,
    autonomy: 5,
    socialEnergy: 7,
    intimacy: 3,
    stability: 3,
    exploration: 8,
    simplicity: 2,
    materialComfort: 6,
    seasonalVariety: 5,
  },
  sunSeeker: {
    urbanity: 5,
    nature: 6,
    structure: 2,
    spontaneity: 7,
    autonomy: 5,
    socialEnergy: 7,
    intimacy: 4,
    stability: 4,
    exploration: 5,
    simplicity: 4,
    materialComfort: 4,
    seasonalVariety: -2,
  },
  quietAchiever: {
    urbanity: 5,
    nature: 6,
    structure: 8,
    spontaneity: 2,
    autonomy: 4,
    socialEnergy: 2,
    intimacy: 5,
    stability: 8,
    exploration: 2,
    simplicity: 6,
    materialComfort: 7,
    seasonalVariety: 4,
  },
}

function applyEffects(scores: DimensionScores, effects: Partial<DimensionScores>) {
  for (const [key, value] of Object.entries(effects) as [Dimension, number][]) {
    scores[key] += value
  }
}

export function computeScores(answers: Choice[]): DimensionScores {
  const scores = EMPTY_SCORES()

  answers.forEach((choice, index) => {
    const questionId = QUESTION_IDS[index]
    if (!questionId) return
    applyEffects(scores, ANSWER_EFFECTS[questionId][choice])
  })

  return scores
}

function distance(a: DimensionScores, b: DimensionScores): number {
  return DIMENSIONS.reduce((sum, key) => sum + (a[key] - b[key]) ** 2, 0)
}

export function selectProfile(answers: Choice[]): ProfileId {
  const scores = computeScores(answers)
  let best: ProfileId = 'coastalCreative'
  let bestDistance = Number.POSITIVE_INFINITY

  for (const [profileId, target] of Object.entries(PROFILE_TARGETS) as [ProfileId, DimensionScores][]) {
    const d = distance(scores, target)
    if (d < bestDistance) {
      bestDistance = d
      best = profileId
    }
  }

  return best
}
