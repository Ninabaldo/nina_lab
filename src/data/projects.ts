export type ProjectStatus = 'coming-soon' | 'available'

export interface Project {
  id: string
  status: ProjectStatus
  featured?: boolean
  previewUrl?: string
  appPath?: string
}

export const projects: Project[] = [
  {
    id: 'nook',
    status: 'coming-soon',
    featured: true,
    previewUrl: 'https://nook-ochre-eight.vercel.app/',
  },
]

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.featured)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectEmbedSource(project: Project): string | undefined {
  return project.previewUrl ?? project.appPath
}
