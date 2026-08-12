import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import { BUY_ME_A_COFFEE_URL } from '../../lib/links'
import './Footer.css'

export function Footer() {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()

  return (
    <footer className="footer reveal" ref={ref}>
      <div className="footer__inner">
        <div className="footer__brand">
          <h2 className="footer__name">
            <span className="footer__name-line">{t.footer.nameFirst}</span>
            <span className="footer__name-line footer__name-line--last">{t.footer.nameLast}</span>
          </h2>
          <p className="footer__tagline">
            {t.footer.tagline1}
            <br />
            {t.footer.tagline2}
          </p>
        </div>

        <nav className="footer__links" aria-label={t.footer.socialAria}>
          <a href="/projects" className="footer__link">
            {t.footer.projects}
          </a>
          <a
            href="https://www.linkedin.com/in/ninabaldorousseau/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:holaninabaldo@gmail.com" className="footer__link">
            Email
          </a>
          <a
            href={BUY_ME_A_COFFEE_URL}
            className="footer__link footer__link--support"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.support}
            <span className="footer__heart" aria-hidden="true">♥</span>
          </a>
        </nav>

        <p className="footer__copy">{t.footer.copy}</p>
      </div>
    </footer>
  )
}
