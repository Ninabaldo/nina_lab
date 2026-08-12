import type { ExperimentPreviewType } from '../../data/experiments'

const INTERACTIVE_TYPES: ExperimentPreviewType[] = ['breathe', 'timer', 'colors', 'bill', 'affirmations']

export function isInteractiveExperiment(type: ExperimentPreviewType): boolean {
  return INTERACTIVE_TYPES.includes(type)
}
