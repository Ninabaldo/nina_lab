import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { SiteControls } from '../SiteControls/SiteControls'
import './SiteHeader.css'

export function SiteHeader() {
  const { t } = useSiteLanguage()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="/" className="site-header__brand" aria-label="Nina's Lab — home">
          <span className="site-header__brand-line">NINA&apos;S</span>
          <span className="site-header__brand-line site-header__brand-line--lab">LAB</span>
        </a>
        <p className="site-header__tagline">{t.siteHeader.tagline}</p>
        <SiteControls />
      </div>
    </header>
  )
}
