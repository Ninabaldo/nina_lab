import type { CentreProposalCopy } from '../../i18n/centreProposal/types'

interface CentreDashboardStudentTableProps {
  copy: CentreProposalCopy
  highlightStudentId?: string | null
  registeredCount?: string
}

export function CentreDashboardStudentTable({
  copy,
  highlightStudentId,
  registeredCount = '186',
}: CentreDashboardStudentTableProps) {
  const alumnes = copy.demo.dashboard.alumnes
  const countLabel = alumnes.countTemplate.replace('{n}', registeredCount)

  return (
    <>
      <div className="centre-demo__db-toolbar">
        <input
          type="search"
          readOnly
          className="centre-demo__db-search"
          placeholder={alumnes.searchPlaceholder}
          aria-label={alumnes.searchPlaceholder}
        />
        <p className="centre-demo__db-count">{countLabel}</p>
      </div>

      <div className="centre-demo__db-wrap">
        <table className="centre-demo__db-table">
          <thead>
            <tr>
              <th scope="col">{alumnes.columns.name}</th>
              <th scope="col">{alumnes.columns.email}</th>
              <th scope="col">{alumnes.columns.plan}</th>
              <th scope="col">{alumnes.columns.status}</th>
              <th scope="col">{alumnes.columns.activity}</th>
            </tr>
          </thead>
          <tbody>
            {alumnes.rows.map((row) => {
              const live = highlightStudentId === row.id
              return (
                <tr
                  key={row.id}
                  className={`centre-demo__db-row${live ? ' centre-demo__db-row--live' : ''}`}
                >
                  <td data-label={alumnes.columns.name}>{row.name}</td>
                  <td data-label={alumnes.columns.email}>{row.email}</td>
                  <td data-label={alumnes.columns.plan}>{row.plan}</td>
                  <td data-label={alumnes.columns.status}>
                    <span
                      className={`centre-demo__db-status centre-demo__db-status--${row.status}`}
                    >
                      {row.statusLabel}
                    </span>
                  </td>
                  <td data-label={alumnes.columns.activity}>{row.activity}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
