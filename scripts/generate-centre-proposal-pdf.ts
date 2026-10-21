/**
 * Generates docs/proposta-centre.pdf from Catalan centre proposal copy.
 * Run: npx tsx scripts/generate-centre-proposal-pdf.ts
 */
import { execFileSync } from 'node:child_process'
import { accessSync, constants, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ca from '../src/i18n/centreProposal/ca.ts'
import {
  ADDON_GROUPS,
  ADDON_PRICES_EUR,
  INCLUDED_ADDONS,
  MAINTENANCE_IDS,
  MAINTENANCE_PRICES_EUR,
  SOFTWARE_IDS,
  SOFTWARE_PRICES_EUR,
  STORE_PUBLISHING_EUR,
  formatEuro,
} from '../src/apps/centre-proposal/pricing.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outDir = join(root, 'docs')
const htmlPath = join(outDir, 'proposta-centre.html')
const pdfPath = join(outDir, 'proposta-centre.pdf')

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function eur(n: number): string {
  return formatEuro(n, 'ca')
}

function buildHtml(): string {
  const copy = ca
  const cfg = copy.configurator
  const lang = 'ca'

  const softwareBlocks = SOFTWARE_IDS.map((id) => {
    const s = cfg.software[id]
    return `
      <article class="card">
        <p class="price">${eur(SOFTWARE_PRICES_EUR[id])} <span class="price-note">${esc(cfg.step1.priceNote)}</span></p>
        <h3>${esc(s.title)}</h3>
        <p class="timeline-badge">${esc(cfg.step1.timelineLabel)} ${esc(s.timeline)}</p>
        <p class="lead">${esc(s.tagline)}</p>
        <ul>${s.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
        <h4>${esc(cfg.step1.seeIncludes)}</h4>
        <ul class="includes">${s.includes.map((line) => `<li>${esc(line)}</li>`).join('')}</ul>
      </article>`
  }).join('')

  const addonGroups = ADDON_GROUPS.map((group) => {
    const title = cfg.step2.groups[group.id]
    const rows = group.addonIds
      .map((id) => {
        const a = copy.section02.addons[id]
        const includedInFull = INCLUDED_ADDONS.full.includes(id)
        return `<tr>
          <td><strong>${esc(a.title)}</strong><br/><span class="muted">${esc(a.description)}</span></td>
          <td>${eur(ADDON_PRICES_EUR[id])}</td>
          <td>${includedInFull ? esc(cfg.step2.includedBadge + ' (Plataforma completa)') : '—'}</td>
        </tr>`
      })
      .join('')
    return `<h3>${esc(title)}</h3><table><thead><tr><th>Funcionalitat</th><th>Preu</th><th>Notes</th></tr></thead><tbody>${rows}</tbody></table>`
  }).join('')

  const maintenanceBlocks = MAINTENANCE_IDS.map((id) => {
    const m = cfg.maintenance[id]
    const price = MAINTENANCE_PRICES_EUR[id]
    const includes = m.includes?.length
      ? `<ul>${m.includes.map((line) => `<li>${esc(line)}</li>`).join('')}</ul>`
      : ''
    return `<article class="card card--compact">
      <p class="price">${price > 0 ? `${eur(price)}/mes` : eur(0)}</p>
      <h3>${esc(m.title)}</h3>
      <p>${esc(m.description)}</p>
      ${includes}
    </article>`
  }).join('')

  const studentFeatures = copy.section01.student.features
    .map((f) => `<li><strong>${esc(f.label)}:</strong> ${esc(f.text)}</li>`)
    .join('')
  const dashFeatures = copy.section01.dashboard.features
    .map((f) => `<li><strong>${esc(f.label)}:</strong> ${esc(f.text)}</li>`)
    .join('')

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <title>${esc(copy.hero.title)} — Proposta centre</title>
  <style>
    @page { margin: 18mm 16mm; }
    * { box-sizing: border-box; }
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.45;
      color: #1a1a1a;
      max-width: 720px;
      margin: 0 auto;
      padding: 0 8px;
    }
    h1 { font-size: 22pt; letter-spacing: -0.02em; margin: 0 0 8px; line-height: 1.1; }
    h2 { font-size: 14pt; margin: 28px 0 8px; page-break-after: avoid; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
    h3 { font-size: 11pt; margin: 14px 0 6px; page-break-after: avoid; }
    h4 { font-size: 9.5pt; margin: 10px 0 4px; text-transform: uppercase; letter-spacing: 0.06em; color: #666; }
    p { margin: 0 0 8px; }
    .eyebrow { font-size: 8pt; text-transform: uppercase; letter-spacing: 0.12em; color: #888; margin-bottom: 12px; }
    .lead { font-size: 11pt; color: #444; }
    .muted { color: #666; font-size: 9pt; }
    .timeline-badge { display: inline-block; font-size: 9.5pt; font-weight: 700; color: #1a3d2e; background: #e8f0eb; border: 1px solid #b8d4c4; border-radius: 999px; padding: 3px 10px; margin: 4px 0 8px; }
    .timeline-overview { background: #f0f6f2; border: 1px solid #b8d4c4; border-radius: 8px; padding: 12px 14px; margin: 0 0 16px; page-break-inside: avoid; }
    .timeline-overview ul { list-style: none; padding: 0; margin: 0; }
    .timeline-overview li { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 6px 0; border-bottom: 1px solid #d8e8de; }
    .timeline-overview li:last-child { border-bottom: none; }
    .timeline-overview li strong { font-size: 10pt; }
    .index { font-size: 8pt; color: #999; font-weight: 600; letter-spacing: 0.08em; }
    .section-lead { color: #444; margin-bottom: 12px; }
    .note { font-size: 9pt; color: #666; background: #f6f6f4; padding: 10px 12px; border-radius: 6px; margin: 12px 0; }
    ul { margin: 0 0 10px; padding-left: 18px; }
    .grid-3 { display: grid; grid-template-columns: 1fr; gap: 12px; }
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 12px 14px;
      page-break-inside: avoid;
    }
    .card--compact { margin-bottom: 8px; }
    .price { font-size: 14pt; font-weight: 700; margin: 0 0 4px; }
    .price-note { font-size: 8pt; font-weight: 500; color: #888; }
    table { width: 100%; border-collapse: collapse; margin: 8px 0 16px; font-size: 9.5pt; }
    th, td { border: 1px solid #e5e5e5; padding: 8px; vertical-align: top; text-align: left; }
    th { background: #f8f8f8; font-size: 8pt; text-transform: uppercase; letter-spacing: 0.04em; }
    .footer { margin-top: 32px; padding-top: 12px; border-top: 1px solid #ddd; font-size: 9pt; color: #666; text-align: center; }
    .page-break { page-break-before: always; }
    @media print {
      body { max-width: none; }
      a { color: inherit; text-decoration: none; }
    }
  </style>
</head>
<body>
  <header>
    <p class="eyebrow">${esc(copy.hero.eyebrow)}</p>
    <h1>${esc(copy.hero.title)}</h1>
    <p class="lead">${esc(copy.hero.lead)}</p>
    <p>${esc(copy.hero.intro)}</p>
    <p class="note">Versió PDF de la proposta web <strong>/proposta-centre</strong>. Les demos interactives (app alumnes i dashboard) estan disponibles en línia a la mateixa URL.</p>
  </header>

  <section>
    <p class="index">${esc(copy.section01.index)}</p>
    <h2>${esc(copy.section01.title)}</h2>
    <h3>${esc(copy.section01.student.title)}</h3>
    <p>${esc(copy.section01.student.lead)}</p>
    <p class="muted">${esc(copy.section01.student.demoLabel)}</p>
    <ul>${studentFeatures}</ul>
    <h3>${esc(copy.section01.dashboard.title)}</h3>
    <p>${esc(copy.section01.dashboard.lead)}</p>
    <p class="muted">${esc(copy.section01.dashboard.demoLabel)}</p>
    <ul>${dashFeatures}</ul>
    <p class="note">${esc(copy.demo.disclaimer)}</p>
  </section>

  <section class="page-break">
    <p class="index">${esc(copy.section02.index)}</p>
    <h2>${esc(copy.section02.title)}</h2>
    <p class="section-lead">${esc(copy.section02.lead)}</p>
    <div class="timeline-overview">
      <h3>${esc(cfg.step1.timelinesHeading)}</h3>
      <ul>
        ${SOFTWARE_IDS.map((id) => {
          const s = cfg.software[id]
          return `<li><strong>${esc(s.title)}</strong><span class="timeline-badge">${esc(s.timeline)}</span></li>`
        }).join('')}
      </ul>
    </div>
    <h3>${esc(cfg.step1.title)}</h3>
    <p>${esc(cfg.step1.lead)}</p>
    <p class="muted">${esc(cfg.step1.storeExcludedNote)}</p>
    <div class="grid-3">${softwareBlocks}</div>
    ${cfg.step1.timelineDisclaimer.map((p) => `<p class="note">${esc(p)}</p>`).join('')}
  </section>

  <section>
    <h3>${esc(cfg.step2.title)}</h3>
    <p>${esc(cfg.step2.lead)}</p>
    ${addonGroups}
    <h3>${esc(cfg.step2.storePublishing.title)}</h3>
    <p>${esc(cfg.step2.storePublishing.description)}</p>
    <p><strong>${eur(STORE_PUBLISHING_EUR)}</strong> — ${esc('Només opcions Web + app i Plataforma completa.')}</p>
    <p class="muted">${esc(cfg.step2.storePublishing.offNote)}</p>
  </section>

  <section>
    <h3>${esc(cfg.step3.title)}</h3>
    <p>${esc(cfg.step3.lead)}</p>
    ${maintenanceBlocks}
  </section>

  <section>
    <h3>${esc(cfg.summary.storeFeesTitle)}</h3>
    <ul>
      <li>${esc(cfg.summary.storeFeesApple)}</li>
      <li>${esc(cfg.summary.storeFeesGoogle)}</li>
    </ul>
    <p class="muted">${esc(cfg.summary.storeFeesNote)}</p>
  </section>

  <section class="page-break">
    <p class="index">${esc(copy.section05.index)}</p>
    <h2>${esc(copy.section05.title)}</h2>
    <p>${esc(copy.section05.intro)}</p>
    <ul>${copy.section05.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
    ${copy.section05.closing.map((p) => `<p>${esc(p)}</p>`).join('')}
  </section>

  <section>
    <p class="index">${esc(copy.section06.index)}</p>
    <h2>${esc(copy.section06.title)}</h2>
    <p>${esc(copy.section06.intro)}</p>
    <ul>${copy.section06.context.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
    <h3>${esc(copy.section06.deliverablesTitle)}</h3>
    <ul>${copy.section06.deliverables.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
    <h3>${esc(copy.section06.stackTitle)}</h3>
    <p class="muted">${esc(copy.section06.stackNote)}</p>
    <table>
      <thead><tr><th>Eina</th><th>Ús al projecte</th></tr></thead>
      <tbody>
        ${copy.section06.stackItems
          .map((row) => `<tr><td><strong>${esc(row.name)}</strong></td><td>${esc(row.detail)}</td></tr>`)
          .join('')}
      </tbody>
    </table>
    <h3>${esc(copy.section06.handoverTitle)}</h3>
    <ol>${copy.section06.handoverSteps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
    <p><strong>${esc(copy.section06.closing)}</strong></p>
  </section>

  <footer class="footer">
    <p>${esc(copy.footer)}</p>
    <p>Document generat el ${esc(new Date().toLocaleDateString('ca-ES', { dateStyle: 'long' }))}</p>
  </footer>
</body>
</html>`
}

function findChrome(): string {
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  ]
  for (const path of candidates) {
    try {
      accessSync(path, constants.X_OK)
      return path
    } catch {
      /* try next */
    }
  }
  throw new Error('No s’ha trobat Chrome/Chromium/Edge per generar el PDF.')
}

function main() {
  mkdirSync(outDir, { recursive: true })
  const html = buildHtml()
  writeFileSync(htmlPath, html, 'utf8')

  const chrome = findChrome()
  const fileUrl = `file://${htmlPath}`

  execFileSync(
    chrome,
    ['--headless', '--disable-gpu', '--no-pdf-header-footer', `--print-to-pdf=${pdfPath}`, fileUrl],
    { stdio: 'inherit' },
  )

  console.log(`\nPDF: ${pdfPath}`)
  console.log(`HTML: ${htmlPath}`)
}

main()
