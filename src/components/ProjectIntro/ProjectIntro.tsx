import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './ProjectIntro.css'

export function ProjectIntro() {
  const ref = useScrollReveal<HTMLElement>()
  const { t } = useSiteLanguage()

  return (
    <section className="project-intro reveal" ref={ref} aria-labelledby="intro-heading">
      <div className="project-intro__inner">
        <aside className="project-intro__meta">
          <dl className="meta-list">
            <div className="meta-list__item">
              <dt>{t.intro.meta.project}</dt>
              <dd>{t.intro.meta.projectValue}</dd>
            </div>
            <div className="meta-list__item">
              <dt>{t.intro.meta.type}</dt>
              <dd>{t.intro.meta.typeValue}</dd>
            </div>
            <div className="meta-list__item">
              <dt>{t.intro.meta.year}</dt>
              <dd>2026</dd>
            </div>
            <div className="meta-list__item">
              <dt>{t.intro.meta.tech}</dt>
              <dd>React · TypeScript · PWA · IA</dd>
            </div>
          </dl>
        </aside>

        <div className="project-intro__content">
          <p className="project-intro__eyebrow">{t.intro.eyebrow}</p>
          <h2 id="intro-heading" className="project-intro__title">
            {t.intro.title1}
            <br />
            {t.intro.title2}
          </h2>
          <p className="project-intro__text">{t.intro.text}</p>
        </div>
      </div>
    </section>
  )
}
