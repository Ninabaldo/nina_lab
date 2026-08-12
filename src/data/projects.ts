export type ProjectStatus = 'coming-soon' | 'available'

export interface Project {
  id: string
  status: ProjectStatus
  featured?: boolean
}

export const projects: Project[] = []

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.featured)
}
