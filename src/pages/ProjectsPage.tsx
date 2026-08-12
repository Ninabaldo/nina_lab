import { getFeaturedProject } from '../data/projects'
import { FeaturedProject } from '../components/FeaturedProject/FeaturedProject'
import { Footer } from '../components/Footer/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSiteLanguage } from '../hooks/useSiteLanguage'
import './ProjectsPage.css'

function ProjectsComingSoon() {
  const contentRef = useScrollReveal<HTMLDivElement>()
  const { t } = useSiteLanguage()

  return (
    <div className="projects-coming reveal" ref={contentRef}>
      <span className="projects-coming__badge">{t.projects.comingSoon}</span>
      <h1 className="projects-coming__title">{t.projects.comingSoonHeadline}</h1>
      <p className="projects-coming__text">{t.projects.comingSoonText}</p>
    </div>
  )
}

export function ProjectsPage() {
  const headerRef = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()
  const featured = getFeaturedProject()

  return (
    <>
      <main className="projects-page">
        <div className="projects-page__inner">
          <a href="/" className="projects-page__back">
            {t.projects.back}
            <span aria-hidden="true">←</span>
          </a>

          {featured?.id === 'breathe' ? (
            <>
              <header className="projects-page__header reveal" ref={headerRef}>
                <h1 className="projects-page__title">{t.projects.title}</h1>
                <p className="projects-page__subtitle">{t.projects.subtitle}</p>
              </header>
              <FeaturedProject projectId="breathe" />
            </>
          ) : (
            <ProjectsComingSoon />
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
