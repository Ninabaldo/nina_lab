import { useState } from 'react'
import './CentreProposalApp.css'

type StudentTab = 'horaris' | 'reserves' | 'meves' | 'abonaments' | 'perfil'

const TABS: { id: StudentTab; label: string }[] = [
  { id: 'horaris', label: 'Horaris' },
  { id: 'reserves', label: 'Reserves' },
  { id: 'meves', label: 'Meves' },
  { id: 'abonaments', label: 'Packs' },
  { id: 'perfil', label: 'Perfil' },
]

export function StudentAppDemo() {
  const [tab, setTab] = useState<StudentTab>('horaris')

  return (
    <div className="centre-demo">
      <header className="centre-demo__bar">
        <a href="/proposta-centre" className="centre-demo__back">
          ← Tornar a la proposta
        </a>
        <span className="centre-demo__badge">Demo · App alumnes</span>
      </header>

      <div className="centre-demo__layout">
        <div className="centre-demo__phone">
          <div className="centre-demo__phone-status">Demo interactiva</div>
          <div className="centre-demo__phone-screen">
            {tab === 'horaris' ? <HorarisPanel /> : null}
            {tab === 'reserves' ? <ReservesPanel /> : null}
            {tab === 'meves' ? <MevesPanel /> : null}
            {tab === 'abonaments' ? <AbonamentsPanel /> : null}
            {tab === 'perfil' ? <PerfilPanel /> : null}
          </div>
          <nav className="centre-demo__phone-nav" aria-label="Navegació demo">
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
        </div>
      </div>
    </div>
  )
}

function HorarisPanel() {
  return (
    <>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.15rem', fontWeight: 600 }}>Horaris</h1>
      <ul className="centre-demo__card-list">
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Yoga suau</span>
            <span className="centre-demo__pill">3 places</span>
          </div>
          <p className="centre-demo__card-meta">Dilluns · 10:00 · Sala A · Laura</p>
        </li>
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Pilates</span>
            <span className="centre-demo__pill centre-demo__pill--warn">Completa</span>
          </div>
          <p className="centre-demo__card-meta">Dilluns · 18:30 · Sala B · Marc</p>
        </li>
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Stretching</span>
            <span className="centre-demo__pill">5 places</span>
          </div>
          <p className="centre-demo__card-meta">Dimarts · 09:00 · Sala A · Anna</p>
        </li>
      </ul>
    </>
  )
}

function ReservesPanel() {
  return (
    <>
      <h1 style={{ margin: '0 0 0.5rem', fontSize: '1.15rem', fontWeight: 600 }}>Reserva</h1>
      <p style={{ margin: '0 0 1rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
        Yoga suau · Dilluns 10:00
      </p>
      <button
        type="button"
        style={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '999px',
          border: 'none',
          background: 'var(--color-text)',
          color: 'var(--color-bg)',
          fontWeight: 600,
          marginBottom: '0.75rem',
        }}
      >
        Confirmar reserva
      </button>
      <button
        type="button"
        style={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '999px',
          border: '1px solid var(--color-border)',
          background: 'transparent',
          color: 'var(--color-text-muted)',
        }}
      >
        Cancel·lar plaça
      </button>
    </>
  )
}

function MevesPanel() {
  return (
    <>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.15rem', fontWeight: 600 }}>Les meves classes</h1>
      <p
        style={{
          margin: '0 0 0.5rem',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--color-text-light)',
        }}
      >
        Properes
      </p>
      <ul className="centre-demo__card-list" style={{ marginBottom: '1.25rem' }}>
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Yoga suau</span>
            <span>Confirmada</span>
          </div>
          <p className="centre-demo__card-meta">Dilluns 10:00</p>
        </li>
      </ul>
      <p
        style={{
          margin: '0 0 0.5rem',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--color-text-light)',
        }}
      >
        Historial
      </p>
      <ul className="centre-demo__card-list">
        <li className="centre-demo__card">
          <div className="centre-demo__card-head">
            <span>Pilates</span>
          </div>
          <p className="centre-demo__card-meta">Dijous passat · Assistida</p>
        </li>
      </ul>
    </>
  )
}

function AbonamentsPanel() {
  return (
    <>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.15rem', fontWeight: 600 }}>Abonament</h1>
      <div className="centre-demo__card">
        <div className="centre-demo__card-head">
          <span>Pack 8 classes</span>
          <span className="centre-demo__pill">Actiu</span>
        </div>
        <p className="centre-demo__card-meta">5 classes restants · Vàlid fins al 30/11</p>
      </div>
    </>
  )
}

function PerfilPanel() {
  return (
    <>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.15rem', fontWeight: 600 }}>Perfil</h1>
      <dl style={{ margin: 0, fontSize: '0.9rem' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <dt style={{ color: 'var(--color-text-light)', fontSize: '0.75rem' }}>Nom</dt>
          <dd style={{ margin: '0.15rem 0 0' }}>Maria Soler</dd>
        </div>
        <div style={{ marginBottom: '0.75rem' }}>
          <dt style={{ color: 'var(--color-text-light)', fontSize: '0.75rem' }}>Email</dt>
          <dd style={{ margin: '0.15rem 0 0' }}>maria@exemple.cat</dd>
        </div>
        <div>
          <dt style={{ color: 'var(--color-text-light)', fontSize: '0.75rem' }}>Preferències</dt>
          <dd style={{ margin: '0.15rem 0 0' }}>Recordatoris per email · Català</dd>
        </div>
      </dl>
    </>
  )
}
