import type { CentreProposalCopy } from '../../i18n/centreProposal/types'

interface CentreDashboardStaffTableProps {
  copy: CentreProposalCopy
  activeCount?: string
}

export function CentreDashboardStaffTable({
  copy,
  activeCount = '4',
}: CentreDashboardStaffTableProps) {
  const personal = copy.demo.dashboard.personal
  const countLabel = personal.countTemplate.replace('{n}', activeCount)

  return (
    <>
      <div className="centre-demo__db-toolbar">
        <input
          type="search"
          readOnly
          className="centre-demo__db-search"
          placeholder={personal.searchPlaceholder}
          aria-label={personal.searchPlaceholder}
        />
        <p className="centre-demo__db-count">{countLabel}</p>
      </div>

      <div className="centre-demo__db-wrap">
        <table className="centre-demo__db-table">
          <thead>
            <tr>
              <th scope="col">{personal.columns.name}</th>
              <th scope="col">{personal.columns.role}</th>
              <th scope="col">{personal.columns.classes}</th>
              <th scope="col">{personal.columns.availability}</th>
              <th scope="col">{personal.columns.status}</th>
            </tr>
          </thead>
          <tbody>
            {personal.rows.map((row) => (
              <tr key={row.id} className="centre-demo__db-row">
                <td data-label={personal.columns.name}>{row.name}</td>
                <td data-label={personal.columns.role}>{row.role}</td>
                <td data-label={personal.columns.classes}>{row.classes}</td>
                <td data-label={personal.columns.availability}>{row.availability}</td>
                <td data-label={personal.columns.status}>
                  <span
                    className={`centre-demo__db-status centre-demo__db-status--${row.status}`}
                  >
                    {row.statusLabel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
