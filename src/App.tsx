import { SiteLanguageProvider } from './context/SiteLanguageProvider'
import { SiteThemeProvider } from './context/SiteThemeProvider'
import { Hero } from './components/Hero/Hero'
import { ProjectIntro } from './components/ProjectIntro/ProjectIntro'
import { Experiments } from './components/Experiments/Experiments'
import { ProjectsTeaser } from './components/ProjectsTeaser/ProjectsTeaser'
import { Footer } from './components/Footer/Footer'
import { SiteControls } from './components/SiteControls/SiteControls'
import { BreatheApp } from './apps/breathe/BreatheApp'
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
  const path = window.location.pathname

  let content = <Portfolio />
  if (path.startsWith('/breathe')) content = <BreatheApp />
  if (path.startsWith('/projects')) content = <ProjectsPage />

  return (
    <SiteThemeProvider>
      <SiteLanguageProvider>
        <SiteControls />
        {content}
      </SiteLanguageProvider>
    </SiteThemeProvider>
  )
}

export default App
