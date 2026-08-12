export type ExperimentStatus = 'coming-soon' | 'available' | 'draft'

export type ExperimentPreviewType = 'breathe' | 'timer' | 'colors' | 'bill' | 'affirmations' | 'oracle'

export type ExperimentSize = 'large' | 'medium' | 'small'

export interface Experiment {
  id: string
  status: ExperimentStatus
  previewType: ExperimentPreviewType
  size: ExperimentSize
}

export const experiments: Experiment[] = [
  {
    id: 'breathe',
    status: 'available',
    previewType: 'breathe',
    size: 'medium',
  },
  {
    id: 'focus-timer',
    status: 'available',
    previewType: 'timer',
    size: 'small',
  },
  {
    id: 'color-studio',
    status: 'available',
    previewType: 'colors',
    size: 'medium',
  },
  {
    id: 'split-the-bill',
    status: 'available',
    previewType: 'bill',
    size: 'small',
  },
  {
    id: 'affirmations',
    status: 'available',
    previewType: 'affirmations',
    size: 'medium',
  },
  {
    id: 'oracle-cards',
    status: 'available',
    previewType: 'oracle',
    size: 'medium',
  },
]

export function isExperimentAvailable(experiment: Experiment): boolean {
  return experiment.status === 'available'
}
