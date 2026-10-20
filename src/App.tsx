import { DesignYourLabSection } from './components/DesignYourLab/DesignYourLabSection'
import { LabDesignPanel } from './components/DesignYourLab/LabDesignPanel'
import { LabDesignProvider } from './context/LabDesignProvider'
import { SiteLanguageProvider } from './context/SiteLanguageProvider'
import { SiteThemeProvider } from './context/SiteThemeProvider'
import { Hero } from './components/Hero/Hero'
import { HowICanHelp } from './components/HowICanHelp/HowICanHelp'
import { TechStack } from './components/TechStack/TechStack'
import { WorkExamples } from './components/WorkExamples/WorkExamples'
import { ProjectsShowcase } from './components/ProjectsShowcase/ProjectsShowcase'
import { ContactModal } from './components/Contact/ContactModal'
import { Footer } from './components/Footer/Footer'
import { BackToTop } from './components/BackToTop/BackToTop'
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { ContactProvider } from './context/ContactProvider'
import { BreatheApp } from './apps/breathe/BreatheApp'
import { CentreProposalApp } from './apps/centre-proposal/CentreProposalApp'
import { DashboardDemo } from './apps/centre-proposal/DashboardDemo'
import { StudentAppDemo } from './apps/centre-proposal/StudentAppDemo'
import { IncidentBriefApp } from './apps/incident-brief/IncidentBriefApp'
import { usePathname } from './hooks/usePathname'
import { ProjectEmbedPage } from './pages/ProjectEmbedPage'
import { ProjectsPage } from './pages/ProjectsPage'

function Portfolio() {
  return (
    <>
      <Hero />
      <TechStack />
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
  const isCentreProposal = path.startsWith('/proposta-centre')
  const projectMatch = path.match(/^\/projects\/([^/]+)\/?$/)

  let content = <Portfolio />
  if (path.startsWith('/proposta-centre/alumnes')) content = <StudentAppDemo />
  else if (path.startsWith('/proposta-centre/dashboard')) content = <DashboardDemo />
  else if (isCentreProposal) content = <CentreProposalApp />
  else if (path.startsWith('/breathe')) content = <BreatheApp />
  else if (path.startsWith('/incident-brief')) content = <IncidentBriefApp />
  else if (projectMatch) content = <ProjectEmbedPage projectId={projectMatch[1]} />
  else if (path.startsWith('/projects')) content = <ProjectsPage />

  return (
    <SiteThemeProvider>
      <SiteLanguageProvider>
        <ContactProvider>
          <LabDesignProvider>
            {!isEmbedded && !isCentreProposal ? (
              <>
                <SiteHeader />
                <BackToTop />
                <ContactModal />
              </>
            ) : null}
            <div
              className={
                isEmbedded || isCentreProposal ? undefined : 'site-shell'
              }
            >
              {content}
            </div>
            {!isEmbedded && !isCentreProposal && <LabDesignPanel />}
          </LabDesignProvider>
        </ContactProvider>
      </SiteLanguageProvider>
    </SiteThemeProvider>
  )
}

export default App
