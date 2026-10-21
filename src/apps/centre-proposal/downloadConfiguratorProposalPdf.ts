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

  <footer>${esc(copy.footer)}</footer>
</div>`
}

export async function downloadConfiguratorProposalPdf(input: ConfiguratorPdfInput): Promise<void> {
  const html = buildHtml(input)
  const mount = document.createElement('div')
  mount.style.position = 'fixed'
  mount.style.left = '-10000px'
  mount.style.top = '0'
  mount.style.width = '720px'
  mount.innerHTML = html
  document.body.appendChild(mount)
  const pdfRoot = mount.querySelector('.proposal-pdf') as HTMLElement | null
  if (!pdfRoot) {
    document.body.removeChild(mount)
    throw new Error('proposal-pdf-root-missing')
  }

  try {
    const html2pdf = (await import('html2pdf.js')).default
    await html2pdf()
      .set({
        margin: [14, 14, 14, 14],
        filename: pdfFilename(input.language),
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .from(pdfRoot)
      .save()
  } finally {
    document.body.removeChild(mount)
  }
}
