import { SiteLanguageProvider } from './context/SiteLanguageProvider'
import { SiteThemeProvider } from './context/SiteThemeProvider'
import { Hero } from './components/Hero/Hero'
import { ProjectIntro } from './components/ProjectIntro/ProjectIntro'
import { Experiments } from './components/Experiments/Experiments'
import { ProjectsTeaser } from './components/ProjectsTeaser/ProjectsTeaser'
import { Footer } from './components/Footer/Footer'
import { SiteControls } from './components/SiteControls/SiteControls'
import { BreatheApp } from './apps/breathe/BreatheApp'
import { IncidentBriefApp } from './apps/incident-brief/IncidentBriefApp'
import { usePathname } from './hooks/usePathname'
import { ProjectEmbedPage } from './pages/ProjectEmbedPage'
import { ProjectsPage } from './pages/ProjectsPage'

function Portfolio() {
  return (
    <>
      <Hero />
      <ProjectIntro />
      <Experiments />
      <ProjectsTeaser />
      <Footer />
    </>
  )
}

function App() {
  const path = usePathname()
  const isEmbedded = window.self !== window.top
  const projectMatch = path.match(/^\/projects\/([^/]+)\/?$/)

  let content = <Portfolio />
  if (path.startsWith('/breathe')) content = <BreatheApp />
  else if (path.startsWith('/incident-brief')) content = <IncidentBriefApp />
  else if (projectMatch) content = <ProjectEmbedPage projectId={projectMatch[1]} />
  else if (path.startsWith('/projects')) content = <ProjectsPage />

  return (
    <SiteThemeProvider>
      <SiteLanguageProvider>
        {!isEmbedded && <SiteControls />}
        {content}
      </SiteLanguageProvider>
    </SiteThemeProvider>
  )
}

export default App
