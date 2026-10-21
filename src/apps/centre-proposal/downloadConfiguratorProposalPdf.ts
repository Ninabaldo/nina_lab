import type { CentreProposalCopy } from '../../i18n/centreProposal/types'
import type { Language } from '../../lib/preferences'
import {
  ADDON_IDS,
  ADDON_PRICES_EUR,
  MAINTENANCE_PRICES_EUR,
  SOFTWARE_PRICES_EUR,
  STORE_PUBLISHING_EUR,
  type AddonId,
  type MaintenanceId,
  type SoftwareId,
  buildProposalText,
  computeImplementationTotal,
  formatEuro,
  isAddonIncluded,
  softwareHasApps,
} from './pricing'

export type ConfiguratorPdfInput = {
  copy: CentreProposalCopy
  language: Language
  softwareId: SoftwareId
  selectedAddons: Record<AddonId, boolean>
  storePublishing: boolean
  maintenanceId: MaintenanceId
}

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function listItems(items: string[], ordered = false): string {
  const tag = ordered ? 'ol' : 'ul'
  return `<${tag}>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</${tag}>`
}

function sectionBlock(index: string, title: string, body: string): string {
  return `<section class="pdf-section">
    <p class="section-index">${esc(index)}</p>
    <h2>${esc(title)}</h2>
    ${body}
  </section>`
}

function buildAppendixHtml(
  input: ConfiguratorPdfInput,
  maintenanceLine: string,
  perMonth: string,
): string {
  const { copy, language, maintenanceId } = input
  const cfg = copy.configurator
  const s3 = copy.section03
  const s5 = copy.section05
  const s6 = copy.section06
  const s7 = copy.section07
  const maintCfg = cfg.maintenance[maintenanceId]
  const maintCopy = s3.maintenance[maintenanceId]
  const maintPrice = MAINTENANCE_PRICES_EUR[maintenanceId]
  const maintPriceLabel =
    maintPrice > 0 ? `${formatEuro(maintPrice, language)}${perMonth}` : formatEuro(0, language)

  const conditionsBody = `
    <p>${esc(s5.intro)}</p>
    ${listItems(s5.steps)}
    ${s5.closing.map((p) => `<p>${esc(p)}</p>`).join('')}
    <p class="note-box">${esc(cfg.step1.storeExcludedNote)}</p>
    ${cfg.step1.timelineDisclaimer.map((p) => `<p class="note-box">${esc(p)}</p>`).join('')}
  `

  const maintenanceBody = `
    <p>${esc(s3.lead)}</p>
    <p class="muted">${esc(cfg.step3.lead)}</p>
    <div class="highlight-box">
      <p class="total-label">${esc(s3.maintenanceGroupLabel)} · ${esc(maintCopy.title)}</p>
      <p class="maint-price">${esc(maintPriceLabel)}</p>
      <p>${esc(maintCfg.description)}</p>
      ${maintCopy.includes?.length ? listItems(maintCopy.includes) : ''}
      ${maintCopy.extra ? `<p class="muted">${esc(maintCopy.extra)}</p>` : ''}
      ${maintCfg.includes?.length && !maintCopy.includes?.length ? listItems(maintCfg.includes) : ''}
    </div>
    <p class="note-box"><strong>${esc(cfg.summary.maintenance)}:</strong> ${esc(maintenanceLine)}</p>
    <p class="note-box">${esc(s7.maintenanceNote)}</p>
  `

  const handoverBody = `
    <p>${esc(s6.intro)}</p>
    ${listItems(s6.context)}
    <h3>${esc(s6.deliverablesTitle)}</h3>
    ${listItems(s6.deliverables)}
    <h3>${esc(s6.stackTitle)}</h3>
    <p class="muted">${esc(s6.stackNote)}</p>
    <table class="stack-table">
      <tbody>
        ${s6.stackItems
          .map(
            (row) =>
              `<tr><td><strong>${esc(row.name)}</strong></td><td>${esc(row.detail)}</td></tr>`,
          )
          .join('')}
      </tbody>
    </table>
    <h3>${esc(s6.handoverTitle)}</h3>
    ${listItems(s6.handoverSteps, true)}
    <p><strong>${esc(s6.closing)}</strong></p>
  `

  const externalCostsBody = `
    <p>${esc(s7.intro)}</p>
    <p class="muted">${esc(s7.disclaimer)}</p>
    <div class="highlight-box highlight-box--soft">
      <h3>${esc(s7.setupTitle)}</h3>
      <p>${esc(s7.setupIntro)}</p>
      ${listItems(s7.setupItems)}
      <p class="note-box">${esc(s7.setupAccessNote)}</p>
    </div>
    ${s7.groups
      .map(
        (group) => `
      <h3>${esc(group.title)}</h3>
      <ul class="cost-list">
        ${group.items
          .map((item) => `<li><strong>${esc(item.name)}</strong> — ${esc(item.note)}</li>`)
          .join('')}
      </ul>`,
      )
      .join('')}
    <p>${esc(s7.closing)}</p>
  `

  return (
    sectionBlock(s5.index, s5.title, conditionsBody) +
    sectionBlock(s7.index, s7.title, externalCostsBody) +
    sectionBlock(s3.index, s3.title, maintenanceBody) +
    sectionBlock(s6.index, s6.title, handoverBody)
  )
}

function pdfFilename(language: Language): string {
  const map: Record<Language, string> = {
    ca: 'proposta-centre.pdf',
    es: 'propuesta-centro.pdf',
    en: 'centre-proposal.pdf',
    fr: 'proposition-centre.pdf',
    it: 'proposta-centro.pdf',
  }
  return map[language] ?? 'centre-proposal.pdf'
}

function buildHtml(input: ConfiguratorPdfInput): string {
  const { copy, language, softwareId, selectedAddons, storePublishing, maintenanceId } = input
  const cfg = copy.configurator
  const software = cfg.software[softwareId]
  const paidAddons = ADDON_IDS.filter(
    (id) => !isAddonIncluded(softwareId, id) && selectedAddons[id],
  )
  const implementationTotal = computeImplementationTotal(
    softwareId,
    selectedAddons,
    storePublishing,
  )
  const maintenancePrice = MAINTENANCE_PRICES_EUR[maintenanceId]
  const maintenance = cfg.maintenance[maintenanceId]
  const perMonth =
    language === 'en' ? '/mo' : language === 'fr' ? '/mois' : language === 'it' ? '/mese' : '/mes'

  const breakdownRows: { label: string; amount: string }[] = [
    {
      label: software.title,
      amount: formatEuro(SOFTWARE_PRICES_EUR[softwareId], language),
    },
  ]
  for (const id of paidAddons) {
    breakdownRows.push({
      label: copy.section02.addons[id].title,
      amount: formatEuro(ADDON_PRICES_EUR[id], language),
    })
  }
  if (storePublishing && softwareHasApps(softwareId)) {
    breakdownRows.push({
      label: cfg.step2.storePublishing.title,
      amount: formatEuro(STORE_PUBLISHING_EUR, language),
    })
  }

  const breakdownHtml = breakdownRows
    .map(
      (row) =>
        `<tr><td>${esc(row.label)}</td><td class="amount">${esc(row.amount)}</td></tr>`,
    )
    .join('')

  const addonsSummary =
    paidAddons.length === 0
      ? cfg.summary.addonsNone
      : paidAddons.map((id) => copy.section02.addons[id].title).join(', ')

  const storeLine =
    softwareHasApps(softwareId) && storePublishing
      ? formatEuro(STORE_PUBLISHING_EUR, language)
      : cfg.summary.storePublishingOff

  const maintenanceLine =
    maintenancePrice > 0
      ? `${formatEuro(maintenancePrice, language)}${perMonth} · ${maintenance.title}`
      : cfg.summary.maintenanceNone

  const generated = new Date().toLocaleDateString(
    language === 'en' ? 'en-GB' : language === 'fr' ? 'fr-FR' : language === 'it' ? 'it-IT' : language === 'es' ? 'es-ES' : 'ca-ES',
    { day: 'numeric', month: 'long', year: 'numeric' },
  )

  const mailBody = esc(buildProposalText(
    softwareId,
    selectedAddons,
    storePublishing,
    maintenanceId,
    copy,
    language,
  ))

  return `<div class="proposal-pdf">
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.45;
      color: #1a1a1a;
      margin: 0;
      padding: 24px 28px;
      max-width: 720px;
    }
    .eyebrow {
      font-size: 8pt;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #777;
      margin: 0 0 8px;
    }
    h1 {
      font-size: 20pt;
      margin: 0 0 6px;
      line-height: 1.15;
      letter-spacing: -0.02em;
    }
    .lead { color: #444; margin: 0 0 20px; font-size: 11pt; }
    .meta { font-size: 9pt; color: #666; margin-bottom: 22px; }
    h2 {
      font-size: 12pt;
      margin: 22px 0 10px;
      padding-bottom: 4px;
      border-bottom: 1px solid #ddd;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 0 0 16px;
      font-size: 10pt;
    }
    td {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
      vertical-align: top;
    }
    td.amount {
      text-align: right;
      font-weight: 600;
      white-space: nowrap;
      padding-left: 12px;
    }
    .total-box {
      margin: 18px 0;
      padding: 14px 16px;
      border: 1px solid #c5d4c8;
      border-radius: 8px;
      background: #f4f8f5;
    }
    .total-box p { margin: 0 0 6px; }
    .total-box p:last-child { margin-bottom: 0; }
    .total-label { font-size: 9pt; text-transform: uppercase; letter-spacing: 0.06em; color: #555; }
    .total-value { font-size: 18pt; font-weight: 700; margin-top: 4px; }
    .timeline {
      display: inline-block;
      font-size: 9pt;
      padding: 2px 8px;
      border-radius: 4px;
      background: #eee;
      margin-top: 4px;
    }
    .note { font-size: 9pt; color: #666; margin-top: 12px; }
    pre {
      white-space: pre-wrap;
      font-family: inherit;
      font-size: 9.5pt;
      background: #f7f7f7;
      padding: 12px 14px;
      border-radius: 6px;
      border: 1px solid #e8e8e8;
      margin: 0;
    }
    footer {
      margin-top: 28px;
      padding-top: 12px;
      border-top: 1px solid #ddd;
      font-size: 9pt;
      color: #666;
    }
    h3 {
      font-size: 10.5pt;
      margin: 16px 0 8px;
      page-break-after: avoid;
    }
    .pdf-section {
      margin-top: 24px;
      padding-top: 8px;
      page-break-inside: avoid;
    }
    .pdf-section + .pdf-section {
      page-break-before: always;
    }
    .section-index {
      font-size: 8pt;
      color: #999;
      font-weight: 600;
      letter-spacing: 0.08em;
      margin: 0 0 4px;
    }
    ul, ol {
      margin: 0 0 12px;
      padding-left: 18px;
    }
    li { margin-bottom: 4px; }
    .muted { font-size: 9.5pt; color: #666; }
    .note-box {
      font-size: 9pt;
      color: #555;
      background: #f6f6f4;
      border: 1px solid #e8e8e4;
      border-radius: 6px;
      padding: 10px 12px;
      margin: 10px 0;
    }
    .highlight-box {
      margin: 12px 0;
      padding: 12px 14px;
      border: 1px solid #c5d4c8;
      border-radius: 8px;
      background: #f4f8f5;
    }
    .highlight-box--soft {
      border-color: #ddd;
      background: #fafafa;
    }
    .maint-price {
      font-size: 14pt;
      font-weight: 700;
      margin: 4px 0 8px;
    }
    .stack-table td {
      font-size: 9pt;
      padding: 6px 8px;
      border-bottom: 1px solid #eee;
    }
    .stack-table td:first-child {
      width: 28%;
      vertical-align: top;
    }
    .cost-list {
      font-size: 9.5pt;
    }
  </style>
  <p class="eyebrow">${esc(copy.hero.eyebrow)}</p>
  <h1>${esc(cfg.proposal.title)}</h1>
  <p class="lead">${esc(cfg.proposal.readyLead)}</p>
  <p class="meta">${esc(cfg.summary.title)} · ${esc(generated)}</p>

  <h2>${esc(cfg.summary.title)}</h2>
  <table>
    <tbody>
      <tr><td>${esc(cfg.summary.software)}</td><td class="amount">${esc(software.title)}</td></tr>
      <tr><td>${esc(cfg.step1.timelineLabel.replace(/:$/, ''))}</td><td class="amount"><span class="timeline">${esc(software.timeline)}</span></td></tr>
      <tr><td>${esc(cfg.summary.addons)}</td><td class="amount">${esc(addonsSummary)}</td></tr>
      ${
        softwareHasApps(softwareId)
          ? `<tr><td>${esc(cfg.summary.storePublishing)}</td><td class="amount">${esc(storeLine)}</td></tr>`
          : ''
      }
      <tr><td>${esc(cfg.summary.maintenance)}</td><td class="amount">${esc(maintenanceLine)}</td></tr>
    </tbody>
  </table>

  <div class="total-box">
    <p class="total-label">${esc(cfg.summary.implementation)}</p>
    <p class="total-value">${esc(formatEuro(implementationTotal, language))}</p>
  </div>

  <h2>${esc(cfg.summary.breakdownToggle)}</h2>
  <table>
    <tbody>
      ${breakdownHtml}
      <tr>
        <td><strong>${esc(cfg.summary.implementation)}</strong></td>
        <td class="amount"><strong>${esc(formatEuro(implementationTotal, language))}</strong></td>
      </tr>
    </tbody>
  </table>

  ${
    softwareHasApps(softwareId)
      ? `<p class="note"><strong>${esc(cfg.summary.storeFeesTitle)}</strong> ${esc(cfg.summary.storeFeesApple)} · ${esc(cfg.summary.storeFeesGoogle)}. ${esc(cfg.summary.storeFeesNote)}</p>`
      : ''
  }

  <h2>${esc(copy.mail.intro)}</h2>
  <pre>${mailBody}</pre>

  ${buildAppendixHtml(input, maintenanceLine, perMonth)}

  <footer>${esc(copy.footer)}</footer>
</div>`
}

function isIosWebKit(): boolean {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  )
}

function pdfCanvasScale(): number {
  if (isIosWebKit()) return 1
  if (typeof window !== 'undefined' && window.innerWidth <= 720) return 1.25
  return 2
}

function preparePdfClone(_document: Document, element: HTMLElement) {
  element.style.setProperty('background', '#ffffff', 'important')
  element.style.setProperty('color', '#1a1a1a', 'important')
}

async function mountHiddenPdfRoot(html: string): Promise<{
  shell: HTMLDivElement
  root: HTMLElement
}> {
  const shell = document.createElement('div')
  shell.className = 'cp-pdf-export-shell'
  shell.setAttribute('aria-hidden', 'true')
  shell.style.cssText = [
    'position:fixed',
    'left:0',
    'top:0',
    'width:794px',
    'max-width:100vw',
    'overflow:visible',
    'opacity:1',
    'pointer-events:none',
    'z-index:-1',
  ].join(';')
  shell.innerHTML = html
  document.body.appendChild(shell)

  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))

  const root = shell.querySelector('.proposal-pdf') as HTMLElement | null
  if (!root) {
    shell.remove()
    throw new Error('proposal-pdf-root-missing')
  }
  root.style.background = '#ffffff'

  return { shell, root }
}

function savePdfBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.rel = 'noopener'
  document.body.appendChild(anchor)
  anchor.click()
  window.setTimeout(() => {
    URL.revokeObjectURL(url)
    anchor.remove()
  }, 2500)
}

export async function downloadConfiguratorProposalPdf(input: ConfiguratorPdfInput): Promise<void> {
  const html = buildHtml(input)
  const { shell, root } = await mountHiddenPdfRoot(html)
  const filename = pdfFilename(input.language)
  const scale = pdfCanvasScale()

  try {
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))

    const html2pdf = (await import('html2pdf.js')).default
    const worker = html2pdf().set({
      margin: [14, 14, 14, 14],
      filename,
      image: { type: 'jpeg', quality: 0.92 },
      html2canvas: {
        scale,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        onclone: preparePdfClone,
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    })

    if (isIosWebKit()) {
      const blob = await worker.from(root).outputPdf('blob')
      savePdfBlob(blob, filename)
    } else {
      await worker.from(root).save()
    }
  } finally {
    shell.remove()
  }
}
