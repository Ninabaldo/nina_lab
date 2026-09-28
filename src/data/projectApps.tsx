import type { JSX } from 'react'
import { IncidentBriefApp } from '../apps/incident-brief/IncidentBriefApp'

type ProjectAppComponent = (props: { embedded?: boolean }) => JSX.Element

export const projectAppComponents: Record<string, ProjectAppComponent> = {
  'incident-brief': IncidentBriefApp,
}
