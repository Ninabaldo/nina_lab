import { useMemo, useState } from 'react'
import {
  ADDON_OPTIONS,
  BASE_IMPLEMENTATION_EUR,
  MAINTENANCE_OPTIONS,
  type AddonId,
  type MaintenanceId,
  buildProposalMailBody,
  formatEuro,
  sumSelectedAddons,
} from './pricing'
import './CentreProposalApp.css'

const PROPOSAL_EMAIL = 'holaninabaldo@gmail.com'

const initialAddons = (): Record<AddonId, boolean> =>
  Object.fromEntries(ADDON_OPTIONS.map((a) => [a.id, false])) as Record<AddonId, boolean>

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function CentreProposalApp() {
  const [selectedAddons, setSelectedAddons] = useState(initialAddons)
  const [maintenanceId, setMaintenanceId] = useState<MaintenanceId>('none')

  const addonsTotal = useMemo(() => sumSelectedAddons(selectedAddons), [selectedAddons])
  const implementationTotal = BASE_IMPLEMENTATION_EUR + addonsTotal
  const maintenance = MAINTENANCE_OPTIONS.find((m) => m.id === maintenanceId)

  const toggleAddon = (id: AddonId) => {
    setSelectedAddons((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const proposalMailHref = useMemo(() => {
    const subject = encodeURIComponent('Proposta plataforma de gestió de classes')
    const body = encodeURIComponent(buildProposalMailBody(selectedAddons, maintenanceId))
    return `mailto:${PROPOSAL_EMAIL}?subject=${subject}&body=${body}`
  }, [selectedAddons, maintenanceId])

  return (
    <div className="centre-proposal">
      <header className="centre-proposal__hero">
        <div className="centre-proposal__hero-inner">
          <p className="centre-proposal__eyebrow">Proposta de software</p>
          <h1 className="centre-proposal__title">El teu centre, amb el seu propi sistema.</h1>
          <p className="centre-proposal__lead">
            Una plataforma de gestió de classes dissenyada per adaptar-se al funcionament del teu
            centre.
          </p>
          <p className="centre-proposal__intro">
            Consulta la proposta, explora les dues experiències de software i configura les
            funcionalitats que necessites.
          </p>
          <div className="centre-proposal__hero-actions">
            <button
              type="button"
              className="centre-proposal__button centre-proposal__button--primary"
              onClick={() => scrollToId('experiencies')}
            >
              Explorar el software
            </button>
            <button
              type="button"
              className="centre-proposal__button centre-proposal__button--ghost"
              onClick={() => scrollToId('configura')}
            >
              Configurar pressupost
            </button>
          </div>
        </div>
      </header>

      <main className="centre-proposal__main">
        <section
          id="experiencies"
          className="centre-proposal__section"
          aria-labelledby="centre-proposal-exp-heading"
        >
          <p className="centre-proposal__section-index">01</p>
          <h2 id="centre-proposal-exp-heading" className="centre-proposal__section-title">
            Una experiència per a cada perfil
          </h2>

          <div className="centre-proposal__profiles">
            <article className="centre-proposal__profile">
              <h3 className="centre-proposal__profile-title">App per als alumnes</h3>
              <p className="centre-proposal__profile-lead">
                Una manera senzilla de consultar les classes i gestionar les reserves des del mòbil.
              </p>
              <p className="centre-proposal__profile-demo-label">A la demo podràs explorar:</p>
              <ul className="centre-proposal__feature-list">
                <li>
                  <strong>Horaris:</strong> consulta les activitats programades i les places
                  disponibles.
                </li>
                <li>
                  <strong>Reserves:</strong> reserva una classe o cancel·la una plaça.
                </li>
                <li>
                  <strong>Les meves classes:</strong> consulta les pròximes reserves i
                  l&apos;historial.
                </li>
                <li>
                  <strong>Abonaments:</strong> visualitza el teu pack o membresia i les classes
                  disponibles.
                </li>
                <li>
                  <strong>Perfil:</strong> consulta les teves dades i preferències.
                </li>
              </ul>
              <a href="/proposta-centre/alumnes" className="centre-proposal__link-button">
                Explorar l&apos;app dels alumnes
                <span aria-hidden="true">→</span>
              </a>
            </article>

            <article className="centre-proposal__profile">
              <h3 className="centre-proposal__profile-title">Dashboard per al centre</h3>
              <p className="centre-proposal__profile-lead">
                Un espai de gestió per tenir les classes, els alumnes i les reserves organitzades en
                un mateix lloc.
              </p>
              <p className="centre-proposal__profile-demo-label">A la demo podràs explorar:</p>
              <ul className="centre-proposal__feature-list">
                <li>
                  <strong>Resum:</strong> consulta les reserves i les classes del dia.
                </li>
                <li>
                  <strong>Calendari:</strong> organitza les activitats per dies i hores.
                </li>
                <li>
                  <strong>Classes:</strong> crea activitats, assigna instructors i defineix
                  aforaments.
                </li>
                <li>
                  <strong>Alumnes:</strong> consulta els perfils i les seves reserves.
                </li>
                <li>
                  <strong>Abonaments:</strong> gestiona els packs i les membresies del centre.
                </li>
              </ul>
              <a href="/proposta-centre/dashboard" className="centre-proposal__link-button">
                Explorar el dashboard
                <span aria-hidden="true">→</span>
              </a>
            </article>
          </div>
        </section>

        <section
          id="configura"
          className="centre-proposal__section"
          aria-labelledby="centre-proposal-config-heading"
        >
          <p className="centre-proposal__section-index">02</p>
          <h2 id="centre-proposal-config-heading" className="centre-proposal__section-title">
            Configura el teu software
          </h2>
          <p className="centre-proposal__section-lead">
            Selecciona les funcionalitats que millor s&apos;adapten a les necessitats del centre.
          </p>

          <article className="centre-proposal__base-card">
            <div className="centre-proposal__base-head">
              <div>
                <h3 className="centre-proposal__card-title">Software base</h3>
                <p className="centre-proposal__card-subtitle">Plataforma de reserves i gestió</p>
              </div>
              <p className="centre-proposal__price-tag">
                {formatEuro(BASE_IMPLEMENTATION_EUR)}
                <span className="centre-proposal__price-tag-note">implementació</span>
              </p>
            </div>
            <p className="centre-proposal__includes-label">Inclou:</p>
            <ul className="centre-proposal__includes">
              <li>Web responsive de reserves.</li>
              <li>App d&apos;alumnes adaptada a mòbil.</li>
              <li>Dashboard de gestió per al centre.</li>
              <li>Calendari de classes i activitats.</li>
              <li>Gestió de reserves i cancel·lacions.</li>
              <li>Gestió bàsica d&apos;alumnes.</li>
              <li>Configuració de classes, instructors i aforaments.</li>
            </ul>
            <p className="centre-proposal__base-note">Aquest és el punt de partida del projecte.</p>
          </article>

          <h3 className="centre-proposal__subsection-title">Funcionalitats addicionals</h3>
          <p className="centre-proposal__subsection-lead">
            Selecciona els complements que vols incorporar:
          </p>

          <ul className="centre-proposal__addon-list">
            {ADDON_OPTIONS.map((addon) => {
              const checked = selectedAddons[addon.id]
              return (
                <li key={addon.id}>
                  <label
                    className={`centre-proposal__addon${checked ? ' centre-proposal__addon--on' : ''}`}
                  >
                    <input
                      type="checkbox"
                      className="centre-proposal__addon-input"
                      checked={checked}
                      onChange={() => toggleAddon(addon.id)}
                    />
                    <span className="centre-proposal__addon-body">
                      <span className="centre-proposal__addon-head">
                        <span className="centre-proposal__addon-title">{addon.title}</span>
                        <span className="centre-proposal__addon-price">
                          {formatEuro(addon.priceEur)}
                        </span>
                      </span>
                      <span className="centre-proposal__addon-desc">{addon.description}</span>
                      {addon.detail ? (
                        <span className="centre-proposal__addon-detail">{addon.detail}</span>
                      ) : null}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        </section>

        <section
          className="centre-proposal__section"
          aria-labelledby="centre-proposal-maint-heading"
        >
          <p className="centre-proposal__section-index">03</p>
          <h2 id="centre-proposal-maint-heading" className="centre-proposal__section-title">
            Manteniment
          </h2>
          <p className="centre-proposal__section-lead">
            Després de la implementació, pots escollir si vols contractar un servei de manteniment.
          </p>

          <div className="centre-proposal__maintenance-list" role="radiogroup" aria-label="Manteniment">
            {MAINTENANCE_OPTIONS.map((option) => {
              const selected = maintenanceId === option.id
              return (
                <label
                  key={option.id}
                  className={`centre-proposal__maintenance${selected ? ' centre-proposal__maintenance--on' : ''}`}
                >
                  <input
                    type="radio"
                    name="maintenance"
                    className="centre-proposal__maintenance-input"
                    checked={selected}
                    onChange={() => setMaintenanceId(option.id)}
                  />
                  <span className="centre-proposal__maintenance-body">
                    <span className="centre-proposal__maintenance-head">
                      <span className="centre-proposal__maintenance-title">{option.title}</span>
                      {option.priceEurMonthly > 0 ? (
                        <span className="centre-proposal__maintenance-price">
                          {formatEuro(option.priceEurMonthly)}/mes
                        </span>
                      ) : null}
                    </span>
                    <span className="centre-proposal__maintenance-desc">{option.description}</span>
                    {option.includes ? (
                      <ul className="centre-proposal__maintenance-includes">
                        {option.includes.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : null}
                    {option.extra ? (
                      <span className="centre-proposal__maintenance-extra">{option.extra}</span>
                    ) : null}
                  </span>
                </label>
              )
            })}
          </div>
        </section>

        <section
          id="proposta"
          className="centre-proposal__section centre-proposal__section--summary"
          aria-labelledby="centre-proposal-summary-heading"
        >
          <p className="centre-proposal__section-index">04</p>
          <h2 id="centre-proposal-summary-heading" className="centre-proposal__section-title">
            La teva proposta
          </h2>
          <p className="centre-proposal__section-lead">
            Selecciona les funcionalitats que vols incloure i consulta el pressupost estimat.
          </p>

          <div className="centre-proposal__summary">
            <dl className="centre-proposal__summary-lines">
              <div className="centre-proposal__summary-row">
                <dt>Software base</dt>
                <dd>{formatEuro(BASE_IMPLEMENTATION_EUR)}</dd>
              </div>
              <div className="centre-proposal__summary-row">
                <dt>Complements</dt>
                <dd>{addonsTotal > 0 ? formatEuro(addonsTotal) : 'Cap seleccionat'}</dd>
              </div>
              <div className="centre-proposal__summary-row centre-proposal__summary-row--total">
                <dt>Implementació</dt>
                <dd>{formatEuro(implementationTotal)}</dd>
              </div>
              <div className="centre-proposal__summary-row">
                <dt>Manteniment</dt>
                <dd>
                  {maintenance && maintenance.priceEurMonthly > 0
                    ? `${maintenance.title} · ${formatEuro(maintenance.priceEurMonthly)}/mes`
                    : 'Quota mensual opcional'}
                </dd>
              </div>
            </dl>

            <a href={proposalMailHref} className="centre-proposal__button centre-proposal__button--primary">
              Preparar proposta
            </a>
          </div>
        </section>

        <section
          className="centre-proposal__section centre-proposal__section--closing"
          aria-labelledby="centre-proposal-next-heading"
        >
          <p className="centre-proposal__section-index">05</p>
          <h2 id="centre-proposal-next-heading" className="centre-proposal__section-title">
            Com continuem?
          </h2>
          <p className="centre-proposal__closing-text">
            Una vegada definides les funcionalitats, concretarem l&apos;abast del projecte i
            prepararem el pressupost definitiu.
          </p>
          <p className="centre-proposal__closing-text">
            El següent pas serà validar les pantalles, els processos de reserva i les necessitats
            específiques del centre abans de començar el desenvolupament.
          </p>

          <aside className="centre-proposal__notes" aria-labelledby="centre-proposal-notes-heading">
            <h3 id="centre-proposal-notes-heading" className="centre-proposal__notes-title">
              Notes
            </h3>
            <ul>
              <li>
                Aquest pressupost és orientatiu i està subjecte a la definició final de les
                funcionalitats i de l&apos;abast del projecte.
              </li>
              <li>
                Els imports no inclouen IVA, si correspon, ni les comissions de serveis externs, com
                ara plataformes de pagament, email o allotjament.
              </li>
              <li>
                La implementació, els terminis i les condicions de pagament es concretaran en la
                proposta definitiva.
              </li>
            </ul>
          </aside>
        </section>
      </main>

      <footer className="centre-proposal__footer">
        <p>Proposta preparada per Nina Baldó</p>
      </footer>
    </div>
  )
}
