export const QUESTION_IDS = [
  'morning',
  'home',
  'saturday',
  'work',
  'distance',
  'evening',
  'money',
  'travel',
  'weather',
  'life',
] as const

export type QuestionId = (typeof QUESTION_IDS)[number]

export type Choice = 'a' | 'b'

export type ProfileId =
  | 'coastalCreative'
  | 'urbanNomad'
  | 'slowBuilder'
  | 'culturalExplorer'
  | 'sunSeeker'
  | 'quietAchiever'

export type Dimension =
  | 'urbanity'
  | 'nature'
  | 'structure'
  | 'spontaneity'
  | 'autonomy'
  | 'socialEnergy'
  | 'intimacy'
  | 'stability'
  | 'exploration'
  | 'simplicity'
  | 'materialComfort'
  | 'seasonalVariety'

export type DimensionScores = Record<Dimension, number>
