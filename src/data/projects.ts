export type ProjectStatus = 'coming-soon' | 'available'

export type ProjectPreviewLayout = 'wide' | 'mobile'

export interface Project {
  id: string
  status: ProjectStatus
  previewUrl?: string
  previewLayout?: ProjectPreviewLayout
  appPath?: string
}

export const projects: Project[] = [
  {
    id: 'nook',
    status: 'coming-soon',
    previewUrl: 'https://nook-ochre-eight.vercel.app/',
    previewLayout: 'wide',
  },
  {
    id: 'scopo',
    status: 'available',
    previewUrl: 'https://scopo-omega.vercel.app/',
    previewLayout: 'mobile',
  },
  {
    id: 'picked',
    status: 'available',
    previewUrl: 'https://picked-beta.vercel.app/',
    previewLayout: 'mobile',
  },
]

export type ProjectListBlock =
  | { kind: 'wide'; project: Project }
  | { kind: 'mobile-row'; projects: Project[] }

export function groupProjectsForDisplay(list: Project[]): ProjectListBlock[] {
  const blocks: ProjectListBlock[] = []
  let mobileRun: Project[] = []

  const flushMobile = () => {
    if (mobileRun.length === 0) return
    blocks.push({ kind: 'mobile-row', projects: [...mobileRun] })
    mobileRun = []
  }

  for (const project of list) {
    if (project.previewLayout === 'mobile') {
      mobileRun.push(project)
      continue
    }

    flushMobile()
    blocks.push({ kind: 'wide', project })
  }

  flushMobile()
  return blocks
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectEmbedSource(project: Project): string | undefined {
  return project.previewUrl ?? project.appPath
}
