import { useState } from 'react'
import './CentreProposalApp.css'

type DashTab = 'resum' | 'calendari' | 'classes' | 'alumnes' | 'abonaments'

const TABS: { id: DashTab; label: string }[] = [
  { id: 'resum', label: 'Resum' },
  { id: 'calendari', label: 'Calendari' },
  { id: 'classes', label: 'Classes' },
  { id: 'alumnes', label: 'Alumnes' },
  { id: 'abonaments', label: 'Abonaments' },
]

export function DashboardDemo() {
  const [tab, setTab] = useState<DashTab>('resum')

  return (
    <div className="centre-demo">
      <header className="centre-demo__bar">
        <a href="/proposta-centre" className="centre-demo__back">
          ← Tornar a la proposta
        </a>
        <span className="centre-demo__badge">Demo · Dashboard centre</span>
      </header>

      <div className="centre-demo__layout">
        <div className="centre-demo__dash">
          <nav className="centre-demo__sidebar" aria-label="Seccions del dashboard">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-current={tab === item.id ? 'page' : undefined}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="centre-demo__panel">
            {tab === 'resum' ? <ResumPanel /> : null}
            {tab === 'calendari' ? <CalendariPanel /> : null}
            {tab === 'classes' ? <ClassesPanel /> : null}
            {tab === 'alumnes' ? <AlumnesPanel /> : null}
            {tab === 'abonaments' ? <AbonamentsDashPanel /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

function ResumPanel() {
  return (
    <>
      <h1>Resum del dia</h1>
      <p className="centre-demo__panel-lead">Dilluns · 6 reserves confirmades · 2 classes plenes</p>
      <ul className="centre-demo__card-list">
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>10:00 · Yoga suau</span>
            <span>8/10</span>
          </div>
          <p className="centre-demo__card-meta">Laura · Sala A</p>
        </li>
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>18:30 · Pilates</span>
            <span className="centre-demo__pill centre-demo__pill--warn">10/10</span>
          </div>
          <p className="centre-demo__card-meta">Marc · Sala B · Llista d&apos;espera: 2</p>
        </li>
      </ul>
    </>
  )
}

function CalendariPanel() {
  return (
    <>
      <h1>Calendari</h1>
      <p className="centre-demo__panel-lead">Vista setmanal de les activitats programades.</p>
      <ul className="centre-demo__card-list">
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Dilluns</span>
          </div>
          <p className="centre-demo__card-meta">10:00 Yoga · 18:30 Pilates</p>
        </li>
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Dimarts</span>
          </div>
          <p className="centre-demo__card-meta">09:00 Stretching · 19:00 HIIT</p>
        </li>
      </ul>
    </>
  )
}

function ClassesPanel() {
  return (
    <>
      <h1>Classes</h1>
      <p className="centre-demo__panel-lead">Crea activitats, assigna instructors i defineix aforament.</p>
      <ul className="centre-demo__card-list">
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Yoga suau</span>
            <span>Aforament 10</span>
          </div>
          <p className="centre-demo__card-meta">Instructora: Laura · Dilluns 10:00</p>
        </li>
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Pilates</span>
            <span>Aforament 10</span>
          </div>
          <p className="centre-demo__card-meta">Instructor: Marc · Dilluns 18:30</p>
        </li>
      </ul>
    </>
  )
}

function AlumnesPanel() {
  return (
    <>
      <h1>Alumnes</h1>
      <p className="centre-demo__panel-lead">Consulta perfils i reserves associades.</p>
      <ul className="centre-demo__card-list">
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Maria Soler</span>
            <span>Pack 8</span>
          </div>
          <p className="centre-demo__card-meta">Pròxima: Yoga dilluns 10:00</p>
        </li>
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Jordi Puig</span>
            <span>Membresia</span>
          </div>
          <p className="centre-demo__card-meta">3 reserves aquesta setmana</p>
        </li>
      </ul>
    </>
  )
}

function AbonamentsDashPanel() {
  return (
    <>
      <h1>Abonaments</h1>
      <p className="centre-demo__panel-lead">Gestiona packs i membresies del centre.</p>
      <ul className="centre-demo__card-list">
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Pack 8 classes</span>
            <span>120 €</span>
          </div>
          <p className="centre-demo__card-meta">12 alumnes actius</p>
        </li>
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Membresia mensual</span>
            <span>65 €/mes</span>
          </div>
          <p className="centre-demo__card-meta">Reserves il·limitades · 28 actius</p>
        </li>
      </ul>
    </>
  )
}
