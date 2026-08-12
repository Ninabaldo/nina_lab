import { getFeaturedProject } from '../data/projects'
import { FeaturedProject } from '../components/FeaturedProject/FeaturedProject'
import { Footer } from '../components/Footer/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useSiteLanguage } from '../hooks/useSiteLanguage'
import './ProjectsPage.css'

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

          <header className="projects-page__header reveal" ref={headerRef}>
            <h1 className="projects-page__title">{t.projects.title}</h1>
            <p className="projects-page__subtitle">{t.projects.subtitle}</p>
          </header>

          {featured?.id === 'breathe' && (
            <FeaturedProject projectId="breathe" />
          )}

          {!featured && (
            <p className="projects-page__empty">{t.projects.empty}</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
