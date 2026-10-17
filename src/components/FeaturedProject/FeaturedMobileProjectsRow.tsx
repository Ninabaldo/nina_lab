import { getProjectEmbedSource, type Project } from '../../data/projects'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { getProjectPreviewLogo, getProjectPreviewLogoVariant } from '../../lib/projectBranding'
import { resolveProjectPreviewUrl } from '../../lib/projectPreview'
import { MobileSitePreview } from './MobileSitePreview'
import './FeaturedMobileProjectsRow.css'

interface FeaturedMobileProjectsRowProps {
  projects: Project[]
}

export function FeaturedMobileProjectsRow({ projects }: FeaturedMobileProjectsRowProps) {
  const ref = useScrollReveal<HTMLElement>()
  const { language, t } = useSiteLanguage()

  return (
    <section className="mobile-projects-row reveal" ref={ref} aria-label={t.projects.mobileRowAria}>
      {projects.map((project) => {
        const copy = t.projects.items[project.id]
        const rawPreviewSource = getProjectEmbedSource(project)
        const previewSource = rawPreviewSource
          ? resolveProjectPreviewUrl(project, rawPreviewSource, language)
          : undefined

        if (!copy) return null

        return (
          <article
            key={project.id}
            className="mobile-project-card"
            aria-labelledby={`mobile-project-heading-${project.id}`}
          >
            <header className="mobile-project-card__header">
              {project.status === 'coming-soon' ? (
                <span className="mobile-project-card__badge">{t.projects.comingSoon}</span>
              ) : null}
              <span className="mobile-project-card__category">{copy.category}</span>
              <h3 id={`mobile-project-heading-${project.id}`} className="mobile-project-card__title">
                {copy.name}
              </h3>
              <p className="mobile-project-card__text">{copy.description}</p>
              {previewSource ? (
                <a href={`/projects/${project.id}`} className="mobile-project-card__open">
                  {t.projects.openProject}
                </a>
              ) : null}
            </header>

            {previewSource ? (
              <div className="mobile-project-card__stage" aria-hidden="true">
                <MobileSitePreview
                  url={previewSource}
                  title={copy.previewAria}
                  static
                  compact
                  logoUrl={getProjectPreviewLogo(project.id)}
                  logoVariant={getProjectPreviewLogoVariant(project.id)}
                />
              </div>
            ) : null}
          </article>
        )
      })}
    </section>
  )
}
