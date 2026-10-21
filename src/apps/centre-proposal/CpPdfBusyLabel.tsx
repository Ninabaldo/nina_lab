interface CpPdfBusyLabelProps {
  busy: boolean
  idleText: string
  busyText: string
}

/** Button label only; spinner is shown centered via CpPdfCenterStatus. */
export function CpPdfBusyLabel({ busy, idleText, busyText }: CpPdfBusyLabelProps) {
  return <>{busy ? busyText : idleText}</>
}
