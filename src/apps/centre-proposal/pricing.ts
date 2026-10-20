import type { CentreProposalCopy } from '../../i18n/centreProposal/types'
import type { Language } from '../../lib/preferences'

export const BASE_IMPLEMENTATION_EUR = 1200

export type AddonId =
  | 'subscriptions'
  | 'waitlist'
  | 'payments'
  | 'reminders'
  | 'instructors'
  | 'analytics'

export type MaintenanceId = 'none' | 'basic' | 'extended'

export const ADDON_IDS: AddonId[] = [
  'subscriptions',
  'waitlist',
  'payments',
  'reminders',
  'instructors',
  'analytics',
]

export const ADDON_PRICES_EUR: Record<AddonId, number> = {
  subscriptions: 250,
  waitlist: 150,
  payments: 350,
  reminders: 150,
  instructors: 200,
  analytics: 200,
}

export const MAINTENANCE_PRICES_EUR: Record<MaintenanceId, number> = {
  none: 0,
  basic: 50,
  extended: 100,
}

const EURO_LOCALES: Record<Language, string> = {
  ca: 'ca-ES',
  es: 'es-ES',
  en: 'en-GB',
  fr: 'fr-FR',
}

export function formatEuro(amount: number, language: Language): string {
  return new Intl.NumberFormat(EURO_LOCALES[language] ?? 'ca-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function sumSelectedAddons(selected: Record<AddonId, boolean>): number {
  return ADDON_IDS.reduce(
    (total, id) => (selected[id] ? total + ADDON_PRICES_EUR[id] : total),
    0,
  )
}

export function buildProposalMailBody(
  selectedAddons: Record<AddonId, boolean>,
  maintenanceId: MaintenanceId,
  copy: CentreProposalCopy,
  language: Language,
): string {
  const lines: string[] = [copy.mail.greeting, '', copy.mail.intro, '']

  lines.push(`${copy.mail.baseLabel}: ${formatEuro(BASE_IMPLEMENTATION_EUR, language)}`)

  const addons = ADDON_IDS.filter((id) => selectedAddons[id])
  if (addons.length > 0) {
    lines.push('', `${copy.mail.addonsHeading}:`)
    for (const id of addons) {
      const addon = copy.section02.addons[id]
      lines.push(`- ${addon.title}: ${formatEuro(ADDON_PRICES_EUR[id], language)}`)
    }
  } else {
    lines.push('', `${copy.mail.addonsHeading}: ${copy.mail.addonsNone}`)
  }

  const implementation = BASE_IMPLEMENTATION_EUR + sumSelectedAddons(selectedAddons)
  lines.push(
    '',
    `${copy.mail.implementationLabel}: ${formatEuro(implementation, language)}`,
  )

  if (maintenanceId !== 'none') {
    const maintenance = copy.section03.maintenance[maintenanceId]
    const price = formatEuro(MAINTENANCE_PRICES_EUR[maintenanceId], language)
    lines.push(
      copy.mail.maintenanceLine
        .replace('{title}', maintenance.title)
        .replace('{price}', price),
    )
  } else {
    lines.push(copy.mail.maintenanceNone)
  }

  lines.push('', copy.mail.thanks)
  return lines.join('\n')
}
