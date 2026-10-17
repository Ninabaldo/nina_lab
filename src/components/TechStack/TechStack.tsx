import { techStackEmojis, techStackIds } from '../../data/techStack'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './TechStack.css'

export function TechStack() {
  const headerRef = useScrollReveal<HTMLElement>()
  const listRef = useScrollReveal<HTMLUListElement>()
  const { t } = useSiteLanguage()
  const copy = t.techStack

  return (
    <section
      id="tecnologia"
      className="tech-stack"
      aria-labelledby="tech-stack-heading"
    >
      <div className="tech-stack__inner">
        <header className="tech-stack__header reveal" ref={headerRef}>
          <p className="tech-stack__eyebrow">{copy.eyebrow}</p>
          <h2 id="tech-stack-heading" className="tech-stack__title">
            {copy.title}
          </h2>
          {copy.lead ? <p className="tech-stack__lead">{copy.lead}</p> : null}
        </header>

        <ul className="tech-stack__list reveal" ref={listRef}>
          {techStackIds.map((id) => (
            <li key={id}>
              <span className="tech-stack__chip">
                <span className="tech-stack__emoji" aria-hidden="true">
                  {techStackEmojis[id]}
                </span>
                {copy.items[id]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
