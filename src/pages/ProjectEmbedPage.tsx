import { ExternalSitePreview } from '../components/FeaturedProject/ExternalSitePreview'
import { projectAppComponents } from '../data/projectApps'
import { getProjectById, getProjectEmbedSource } from '../data/projects'
import { useSiteLanguage } from '../hooks/useSiteLanguage'
import './ProjectEmbedPage.css'

interface ProjectEmbedPageProps {
  projectId: string
}

export function ProjectEmbedPage({ projectId }: ProjectEmbedPageProps) {
  const { t } = useSiteLanguage()
  const project = getProjectById(projectId)
  const copy = project ? t.projects.items[project.id] : undefined
  const embedSource = project ? getProjectEmbedSource(project) : undefined
  const ProjectApp = projectAppComponents[projectId]

  if (!embedSource || !copy) {
    return (
      <main className="project-embed project-embed--missing">
        <a href="/projects" className="project-embed__back" aria-label={t.projects.backToProjects}>
          <span aria-hidden="true">←</span>
          {t.projects.title}
        </a>
        <p className="project-embed__missing">{t.projects.empty}</p>
      </main>
    )
  }

  return (
    <main className="project-embed">
      <header className="project-embed__bar">
        <a href="/projects" className="project-embed__back" aria-label={t.projects.backToProjects}>
          <span aria-hidden="true">←</span>
          {t.projects.title}
        </a>
        <h1 className="project-embed__title">{copy.name}</h1>
      </header>

      {ProjectApp ? (
        <div className="project-embed__app">
          <ProjectApp embedded />
        </div>
      ) : (
        <ExternalSitePreview url={embedSource} title={copy.previewAria} />
      )}
    </main>
  )
}
