import { DesignYourLabSection } from './components/DesignYourLab/DesignYourLabSection'
import { LabDesignPanel } from './components/DesignYourLab/LabDesignPanel'
import { LabDesignProvider } from './context/LabDesignProvider'
import { SiteLanguageProvider } from './context/SiteLanguageProvider'
import { SiteThemeProvider } from './context/SiteThemeProvider'
import { Hero } from './components/Hero/Hero'
import { HowICanHelp } from './components/HowICanHelp/HowICanHelp'
import { WorkExamples } from './components/WorkExamples/WorkExamples'
import { ProjectsShowcase } from './components/ProjectsShowcase/ProjectsShowcase'
import { ContactModal } from './components/Contact/ContactModal'
import { Footer } from './components/Footer/Footer'
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { ContactProvider } from './context/ContactProvider'
import { BreatheApp } from './apps/breathe/BreatheApp'
import { IncidentBriefApp } from './apps/incident-brief/IncidentBriefApp'
import { usePathname } from './hooks/usePathname'
import { ProjectEmbedPage } from './pages/ProjectEmbedPage'
import { ProjectsPage } from './pages/ProjectsPage'

function Portfolio() {
  return (
    <>
      <Hero />
      <HowICanHelp />
      <WorkExamples />
      <DesignYourLabSection />
      <ProjectsShowcase />
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
        <ContactProvider>
          <LabDesignProvider>
            {!isEmbedded ? (
              <>
                <SiteHeader />
                <ContactModal />
              </>
            ) : null}
            <div className={isEmbedded ? undefined : 'site-shell'}>{content}</div>
            {!isEmbedded && <LabDesignPanel />}
          </LabDesignProvider>
        </ContactProvider>
      </SiteLanguageProvider>
    </SiteThemeProvider>
  )
}

export default App
