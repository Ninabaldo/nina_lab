import type { Experiment } from '../data/experiments'

/** Standalone routes for experiments that leave the home shell. */
export function getExperimentHref(experiment: Experiment): string {
  if (experiment.id === 'breathe') return '/breathe'
  return '/#experiments'
}
