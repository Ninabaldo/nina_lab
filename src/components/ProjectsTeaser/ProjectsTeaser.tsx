import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './ProjectsTeaser.css'

export function ProjectsTeaser() {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()

  return (
    <section className="projects-teaser reveal" ref={ref} aria-labelledby="projects-teaser-heading">
      <div className="projects-teaser__inner">
        <div className="projects-teaser__content">
          <p className="projects-teaser__eyebrow">{t.projects.teaserEyebrow}</p>
          <h2 id="projects-teaser-heading" className="projects-teaser__title">
            {t.projects.teaserTitle}
          </h2>
          <p className="projects-teaser__text">{t.projects.teaserText}</p>
        </div>
        <a href="/projects" className="projects-teaser__link">
          {t.projects.viewProjects}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
