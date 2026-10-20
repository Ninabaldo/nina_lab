import type { CentreProposalCopy } from '../../i18n/centreProposal/types'
import type { Language } from '../../lib/preferences'

export type SoftwareId = 'web' | 'webApp' | 'full'

export type AddonId =
  | 'subscriptions'
  | 'waitlist'
  | 'payments'
  | 'reminders'
  | 'instructors'
  | 'analytics'

export type AddonGroupId = 'students' | 'management' | 'automation'

export type MaintenanceId = 'none' | 'basic' | 'webApps' | 'extended'

export type ConfiguratorStep = 1 | 2 | 3

export const SOFTWARE_IDS: SoftwareId[] = ['web', 'webApp', 'full']

export const SOFTWARE_PRICES_EUR: Record<SoftwareId, number> = {
  web: 2400,
  webApp: 4500,
  full: 6200,
}

export const STORE_PUBLISHING_EUR = 450

export const ADDON_IDS: AddonId[] = [
  'subscriptions',
  'waitlist',
  'payments',
  'reminders',
  'instructors',
  'analytics',
]

export const ADDON_GROUPS: { id: AddonGroupId; addonIds: AddonId[] }[] = [
  { id: 'students', addonIds: ['subscriptions', 'payments', 'waitlist'] },
  { id: 'management', addonIds: ['instructors', 'analytics'] },
  { id: 'automation', addonIds: ['reminders'] },
]

export const ADDON_PRICES_EUR: Record<AddonId, number> = {
  subscriptions: 250,
  waitlist: 150,
  payments: 350,
  reminders: 150,
  instructors: 200,
  analytics: 200,
}

/** Add-ons bundled with each software tier (not charged again). */
export const INCLUDED_ADDONS: Record<SoftwareId, readonly AddonId[]> = {
  web: [],
  webApp: [],
  full: ['subscriptions', 'waitlist', 'payments', 'reminders', 'instructors'],
}

export const MAINTENANCE_PRICES_EUR: Record<MaintenanceId, number> = {
  none: 0,
  basic: 60,
  webApps: 120,
  extended: 180,
}

export const MAINTENANCE_IDS: MaintenanceId[] = ['none', 'basic', 'webApps', 'extended']

/** @deprecated Use SOFTWARE_PRICES_EUR */
export const BASE_IMPLEMENTATION_EUR = SOFTWARE_PRICES_EUR.web

export function softwareHasApps(id: SoftwareId): boolean {
  return id === 'webApp' || id === 'full'
}

export function isAddonIncluded(softwareId: SoftwareId, addonId: AddonId): boolean {
  return INCLUDED_ADDONS[softwareId].includes(addonId)
}

export function sumSelectedAddons(
  softwareId: SoftwareId,
  selected: Record<AddonId, boolean>,
): number {
  return ADDON_IDS.reduce((total, id) => {
    if (isAddonIncluded(softwareId, id)) return total
    return selected[id] ? total + ADDON_PRICES_EUR[id] : total
  }, 0)
}

export function computeImplementationTotal(
  softwareId: SoftwareId,
  selectedAddons: Record<AddonId, boolean>,
  storePublishing: boolean,
): number {
  let total = SOFTWARE_PRICES_EUR[softwareId]
  total += sumSelectedAddons(softwareId, selectedAddons)
  if (storePublishing && softwareHasApps(softwareId)) {
    total += STORE_PUBLISHING_EUR
  }
  return total
}

export function sanitizeAddonsForSoftware(
  softwareId: SoftwareId,
  selected: Record<AddonId, boolean>,
): Record<AddonId, boolean> {
  const next = { ...selected }
  for (const id of ADDON_IDS) {
    if (isAddonIncluded(softwareId, id)) next[id] = false
  }
  return next
}

export function initialAddons(): Record<AddonId, boolean> {
  return Object.fromEntries(ADDON_IDS.map((id) => [id, false])) as Record<AddonId, boolean>
}

/** Proposal copy uses European amounts like 1.200 € (ca/es), not bare 1200 € from es-ES Intl. */
export function formatEuro(amount: number, language: Language): string {
  if (language === 'en') {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  if (language === 'fr') {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace(/\u202f/g, ' ')
  }

  const grouped = new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 0,
  }).format(amount)

  return `${grouped} €`
}

export function buildProposalText(
  softwareId: SoftwareId,
  selectedAddons: Record<AddonId, boolean>,
  storePublishing: boolean,
  maintenanceId: MaintenanceId,
  copy: CentreProposalCopy,
  language: Language,
): string {
  const cfg = copy.configurator
  const lines: string[] = [copy.mail.greeting, '', cfg.proposal.readyLead, '']

  const software = cfg.software[softwareId]
  lines.push(`${cfg.summary.software}: ${software.title}`)
  lines.push(`${cfg.summary.implementation}: ${formatEuro(SOFTWARE_PRICES_EUR[softwareId], language)}`)

  const paidAddons = ADDON_IDS.filter(
    (id) => !isAddonIncluded(softwareId, id) && selectedAddons[id],
  )
  if (paidAddons.length > 0) {
    lines.push('', `${copy.mail.addonsHeading}:`)
    for (const id of paidAddons) {
      const addon = copy.section02.addons[id]
      lines.push(`- ${addon.title}: ${formatEuro(ADDON_PRICES_EUR[id], language)}`)
    }
  }

  if (storePublishing && softwareHasApps(softwareId)) {
    lines.push(
      `- ${cfg.step2.storePublishing.title}: ${formatEuro(STORE_PUBLISHING_EUR, language)}`,
    )
  }

  const implementation = computeImplementationTotal(softwareId, selectedAddons, storePublishing)
  lines.push('', `${copy.mail.implementationLabel}: ${formatEuro(implementation, language)}`)

  if (maintenanceId !== 'none') {
    const maintenance = cfg.maintenance[maintenanceId]
    const price = formatEuro(MAINTENANCE_PRICES_EUR[maintenanceId], language)
    lines.push(
      copy.mail.maintenanceLine.replace('{title}', maintenance.title).replace('{price}', price),
    )
  } else {
    lines.push(copy.mail.maintenanceNone)
  }

  lines.push('', copy.mail.thanks)
  return lines.join('\n')
}

/** @deprecated */
export function sumSelectedAddonsLegacy(selected: Record<AddonId, boolean>): number {
  return ADDON_IDS.reduce(
    (total, id) => (selected[id] ? total + ADDON_PRICES_EUR[id] : total),
    0,
  )
}

/** @deprecated */
export function buildProposalMailBody(
  selectedAddons: Record<AddonId, boolean>,
  maintenanceId: MaintenanceId,
  copy: CentreProposalCopy,
  language: Language,
): string {
  return buildProposalText('web', selectedAddons, false, maintenanceId, copy, language)
}
