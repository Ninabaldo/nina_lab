import type { ExperimentPreviewType } from './experiments'
import type { ServiceId } from './services'

export type WorkExamplePreview =
  | { kind: 'experiment'; previewType: ExperimentPreviewType }
  | { kind: 'project' }
  | { kind: 'tool' }
  | { kind: 'site' }

export type WorkExampleId =
  | 'breathe'
  | 'life-algorithm'
  | 'focus-timer'
  | 'scopo'
  | 'picked'
  | 'incident-brief'
  | 'nina-lab'

export interface WorkExample {
  id: WorkExampleId
  serviceId: ServiceId
  href: string
  preview: WorkExamplePreview
}

export const workExamples: WorkExample[] = [
  {
    id: 'breathe',
    serviceId: 'interactiveExperiences',
    href: '/breathe',
    preview: { kind: 'experiment', previewType: 'breathe' },
  },
  {
    id: 'life-algorithm',
    serviceId: 'interactiveExperiences',
    href: '/#experiments',
    preview: { kind: 'experiment', previewType: 'life' },
  },
  {
    id: 'focus-timer',
    serviceId: 'smallWebApps',
    href: '/#experiments',
    preview: { kind: 'experiment', previewType: 'timer' },
  },
  {
    id: 'scopo',
    serviceId: 'websitesMicrosites',
    href: '/projects/scopo',
    preview: { kind: 'project' },
  },
  {
    id: 'picked',
    serviceId: 'smallWebApps',
    href: '/projects/picked',
    preview: { kind: 'project' },
  },
  {
    id: 'incident-brief',
    serviceId: 'businessTools',
    href: '/incident-brief',
    preview: { kind: 'tool' },
  },
  {
    id: 'nina-lab',
    serviceId: 'websitesMicrosites',
    href: '/',
    preview: { kind: 'site' },
  },
]
