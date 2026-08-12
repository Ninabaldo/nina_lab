import { BreatheStaticPreview } from '../../apps/breathe/BreatheApp'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './FeaturedProject.css'

interface FeaturedProjectProps {
  projectId: 'breathe'
}

export function FeaturedProject({ projectId }: FeaturedProjectProps) {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()
  const project = t.projects.items[projectId]

  return (
    <article className="featured-project reveal" ref={ref} aria-labelledby="featured-project-heading">
      <header className="featured-project__header">
        <p className="featured-project__eyebrow">{t.projects.featured}</p>
        <span className="featured-project__badge">{t.projects.comingSoon}</span>
        <span className="featured-project__category">{project.category}</span>
        <h2 id="featured-project-heading" className="featured-project__title">
          {project.name}
        </h2>
        <p className="featured-project__text">{project.description}</p>
      </header>

      <div className="featured-project__stage" aria-label={project.previewAria}>
        <div className="featured-project__frame">
          {projectId === 'breathe' ? <BreatheStaticPreview /> : null}
        </div>
      </div>
    </article>
  )
}
