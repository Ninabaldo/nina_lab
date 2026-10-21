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

      <p className="centre-demo__db-scroll-hint">{alumnes.tableScrollHint}</p>

      <div className="centre-demo__db-wrap" tabIndex={0} aria-label={alumnes.tableScrollHint}>
        <table className="centre-demo__db-table">
          <thead>
            <tr>
              <th scope="col" className="centre-demo__db-col-name">
                {alumnes.columns.name}
              </th>
              <th scope="col" className="centre-demo__db-col-payments">
                {alumnes.columns.payments}
              </th>
              <th scope="col" className="centre-demo__db-col-plan">
                {alumnes.columns.plan}
              </th>
              <th scope="col" className="centre-demo__db-col-status">
                {alumnes.columns.status}
              </th>
              <th scope="col" className="centre-demo__db-col-activity">
                {alumnes.columns.activity}
              </th>
              <th scope="col" className="centre-demo__db-col-email">
                {alumnes.columns.email}
              </th>
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
                  <td className="centre-demo__db-col-name" data-label={alumnes.columns.name}>
                    {row.name}
                  </td>
                  <td className="centre-demo__db-col-payments" data-label={alumnes.columns.payments}>
                    <span
                      className={`centre-demo__db-payment centre-demo__db-payment--${row.paymentTone}`}
                    >
                      {row.payments}
                    </span>
                  </td>
                  <td className="centre-demo__db-col-plan" data-label={alumnes.columns.plan}>
                    {row.plan}
                  </td>
                  <td className="centre-demo__db-col-status" data-label={alumnes.columns.status}>
                    <span
                      className={`centre-demo__db-status centre-demo__db-status--${row.status}`}
                    >
                      {row.statusLabel}
                    </span>
                  </td>
                  <td className="centre-demo__db-col-activity" data-label={alumnes.columns.activity}>
                    {row.activity}
                  </td>
                  <td className="centre-demo__db-col-email" data-label={alumnes.columns.email}>
                    {row.email}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
