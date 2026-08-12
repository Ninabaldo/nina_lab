import './Hero.css'
import { LabShellPreview } from '../PhoneFrame/LabShellPreview'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'

function DecorativeElements() {
  return (
    <div className="hero__decor" aria-hidden="true">
      <span className="decor decor--circle decor--1" />
      <span className="decor decor--circle decor--2" />
      <span className="decor decor--circle decor--3" />
      <span className="decor decor--line decor--4" />
      <span className="decor decor--line decor--5" />
      <span className="decor decor--tag decor--6">01</span>
      <span className="decor decor--tag decor--7">micro</span>
      <span className="decor decor--word decor--8">calm</span>
      <span className="decor decor--plus decor--9">+</span>
      <span className="decor decor--dot decor--10" />
      <span className="decor decor--dot decor--11" />
    </div>
  )
}

export function Hero() {
  const { t } = useSiteLanguage()

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__inner">
        <header className="hero__header">
          <h1 className="hero__title">
            <span className="hero__title-line">NINA&apos;S</span>
            <span className="hero__title-line hero__title-line--lab">LAB</span>
          </h1>
          <p className="hero__subtitle">
            {t.hero.subtitle1}
            <br />
            {t.hero.subtitle2}
          </p>
        </header>

        <div className="hero__visual">
          <DecorativeElements />
          <LabShellPreview />
        </div>

        <p className="hero__scroll-hint">
          {t.hero.scrollHint}
          <span className="hero__scroll-arrow" aria-hidden="true">↓</span>
        </p>
      </div>
    </section>
  )
}
