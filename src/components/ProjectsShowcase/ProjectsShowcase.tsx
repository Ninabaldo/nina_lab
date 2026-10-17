import { groupProjectsForDisplay, projects } from '../../data/projects'
import { FeaturedMobileProjectsRow } from '../FeaturedProject/FeaturedMobileProjectsRow'
import { FeaturedProject } from '../FeaturedProject/FeaturedProject'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './ProjectsShowcase.css'

export function ProjectsShowcase() {
  const headerRef = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()

  if (projects.length === 0) return null

  return (
    <section id="projects" className="projects-showcase" aria-labelledby="projects-showcase-heading">
      <div className="projects-showcase__inner">
        <header className="projects-showcase__header reveal" ref={headerRef}>
          <p className="projects-showcase__eyebrow">{t.projects.homeEyebrow}</p>
          <h2 id="projects-showcase-heading" className="projects-showcase__title">
            {t.projects.title}
          </h2>
          <p className="projects-showcase__subtitle">{t.projects.subtitle}</p>
        </header>

        <div className="projects-showcase__list">
          {groupProjectsForDisplay(projects).map((block) =>
            block.kind === 'wide' ? (
              <FeaturedProject key={block.project.id} project={block.project} />
            ) : (
              <FeaturedMobileProjectsRow
                key={block.projects.map((project) => project.id).join('-')}
                projects={block.projects}
              />
            ),
          )}
        </div>

        <div className="projects-showcase__footer">
          <a href="/projects" className="projects-showcase__link">
            {t.projects.viewProjects}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
