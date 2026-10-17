import { BreatheStaticPreview } from '../../apps/breathe/BreatheApp'
import { getProjectEmbedSource, type Project } from '../../data/projects'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { getProjectPreviewLogo, getProjectPreviewLogoVariant } from '../../lib/projectBranding'
import { resolveProjectPreviewUrl } from '../../lib/projectPreview'
import { ExternalSitePreview } from './ExternalSitePreview'
import { MobileSitePreview } from './MobileSitePreview'
import './FeaturedProject.css'

interface FeaturedProjectProps {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const ref = useScrollReveal<HTMLElement>()
  const { language, t } = useSiteLanguage()
  const copy = t.projects.items[project.id]
  const embedPath = `/projects/${project.id}`
  const rawPreviewSource = getProjectEmbedSource(project)
  const previewSource = rawPreviewSource
    ? resolveProjectPreviewUrl(project, rawPreviewSource, language)
    : undefined
  const isMobilePreview = project.previewLayout === 'mobile'
  const previewLogo = getProjectPreviewLogo(project.id)
  const previewLogoVariant = getProjectPreviewLogoVariant(project.id)

  if (!copy) return null

  return (
    <article
      className="featured-project reveal"
      ref={ref}
      aria-labelledby={`featured-project-heading-${project.id}`}
    >
      <header className="featured-project__header">
        {project.featured ? (
          <p className="featured-project__eyebrow">{t.projects.featured}</p>
        ) : null}
        {project.status === 'coming-soon' ? (
          <span className="featured-project__badge">{t.projects.comingSoon}</span>
        ) : null}
        <span className="featured-project__category">{copy.category}</span>
        <h2 id={`featured-project-heading-${project.id}`} className="featured-project__title">
          {copy.name}
        </h2>
        <p className="featured-project__text">{copy.description}</p>

        {previewSource ? (
          <a href={embedPath} className="featured-project__open">
            {t.projects.openProject}
          </a>
        ) : null}
      </header>

      {previewSource ? (
        <div className="featured-project__stage" aria-hidden={isMobilePreview ? true : undefined}>
          <div
            className={`featured-project__frame${
              isMobilePreview
                ? ' featured-project__frame--mobile'
                : ' featured-project__frame--preview'
            }`}
          >
            {isMobilePreview ? (
              <MobileSitePreview
                url={previewSource}
                title={copy.previewAria}
                static
                logoUrl={previewLogo}
                logoVariant={previewLogoVariant}
              />
            ) : (
              <ExternalSitePreview
                url={previewSource}
                title={copy.previewAria}
                static
                logoUrl={previewLogo}
                logoVariant={previewLogoVariant}
              />
            )}
          </div>
        </div>
      ) : project.id === 'breathe' ? (
        <div className="featured-project__stage" aria-label={copy.previewAria}>
          <div className="featured-project__frame">
            <BreatheStaticPreview />
          </div>
        </div>
      ) : null}
    </article>
  )
}
