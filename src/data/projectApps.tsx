import type { JSX } from 'react'

type ProjectAppComponent = (props: { embedded?: boolean }) => JSX.Element

export const projectAppComponents: Record<string, ProjectAppComponent> = {}
