export const BASE_IMPLEMENTATION_EUR = 1200

export type AddonId =
  | 'subscriptions'
  | 'waitlist'
  | 'payments'
  | 'reminders'
  | 'instructors'
  | 'analytics'

export type MaintenanceId = 'none' | 'basic' | 'extended'

export interface AddonOption {
  id: AddonId
  title: string
  priceEur: number
  description: string
  detail: string
}

export interface MaintenanceOption {
  id: MaintenanceId
  title: string
  priceEurMonthly: number
  description: string
  includes?: string[]
  extra?: string
}

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'subscriptions',
    title: 'Abonaments i packs',
    priceEur: 250,
    description: 'Gestió de packs de classes i membresies.',
    detail:
      'Permet definir diferents modalitats, consultar les classes disponibles de cada alumne i gestionar la seva vigència.',
  },
  {
    id: 'waitlist',
    title: "Llista d'espera",
    priceEur: 150,
    description: "Quan una classe estigui completa, els alumnes podran apuntar-se a una llista d'espera.",
    detail:
      'Permet gestionar les places que queden lliures i les persones que esperen per reservar.',
  },
  {
    id: 'payments',
    title: 'Pagaments online',
    priceEur: 350,
    description:
      "Integració d'un sistema de pagament perquè els alumnes puguin comprar abonaments o pagar activitats des de la plataforma.",
    detail:
      'El pressupost definitiu dependrà del proveïdor de pagaments i de les seves comissions.',
  },
  {
    id: 'reminders',
    title: 'Recordatoris automàtics',
    priceEur: 150,
    description: 'Enviament de recordatoris per email abans de les classes reservades.',
    detail: 'Ajuda a reduir les absències i facilita que els alumnes recordin les seves reserves.',
  },
  {
    id: 'instructors',
    title: "Gestió avançada d'instructors",
    priceEur: 200,
    description:
      'Permet gestionar diferents instructors, les seves classes assignades i els horaris de cada professional.',
    detail: '',
  },
  {
    id: 'analytics',
    title: 'Estadístiques i informes',
    priceEur: 200,
    description:
      "Consulta dades sobre l'ocupació de les classes, les reserves i l'activitat del centre.",
    detail:
      "Permet tenir una visió general del funcionament de les activitats.",
  },
]

export const MAINTENANCE_OPTIONS: MaintenanceOption[] = [
  {
    id: 'none',
    title: 'Sense manteniment',
    priceEurMonthly: 0,
    description: 'No inclou una quota mensual.',
    extra: 'Les intervencions posteriors es pressupostaran segons les necessitats del centre.',
  },
  {
    id: 'basic',
    title: 'Manteniment bàsic',
    priceEurMonthly: 50,
    description: 'Supervisió i suport tècnic de la plataforma.',
    includes: [
      'Supervisió bàsica del funcionament.',
      'Correcció d\'errors tècnics del software desenvolupat.',
      'Actualitzacions tècniques menors.',
      'Suport per incidències relacionades amb la plataforma.',
    ],
  },
  {
    id: 'extended',
    title: 'Manteniment ampliat',
    priceEurMonthly: 100,
    description: 'Manteniment bàsic amb prioritat i petites millores.',
    includes: [
      'Tot el manteniment bàsic.',
      'Petites millores de funcionalitat.',
      'Ajustos menors en el funcionament de la plataforma.',
      'Prioritat en la resolució d\'incidències.',
    ],
    extra:
      'Les noves funcionalitats o ampliacions importants es pressupostaran a part.',
  },
]

export function formatEuro(amount: number): string {
  return new Intl.NumberFormat('ca-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function sumSelectedAddons(selected: Record<AddonId, boolean>): number {
  return ADDON_OPTIONS.reduce(
    (total, addon) => (selected[addon.id] ? total + addon.priceEur : total),
    0,
  )
}

export function buildProposalMailBody(
  selectedAddons: Record<AddonId, boolean>,
  maintenanceId: MaintenanceId,
): string {
  const lines: string[] = [
    'Hola Nina,',
    '',
    'M\'interessa la proposta de plataforma de gestió de classes. Aquesta és la meva selecció:',
    '',
    `Software base: ${formatEuro(BASE_IMPLEMENTATION_EUR)}`,
  ]

  const addons = ADDON_OPTIONS.filter((a) => selectedAddons[a.id])
  if (addons.length > 0) {
    lines.push('', 'Complements:')
    for (const addon of addons) {
      lines.push(`- ${addon.title}: ${formatEuro(addon.priceEur)}`)
    }
  } else {
    lines.push('', 'Complements: cap seleccionat')
  }

  const implementation =
    BASE_IMPLEMENTATION_EUR + sumSelectedAddons(selectedAddons)
  lines.push('', `Implementació estimada: ${formatEuro(implementation)}`)

  const maintenance = MAINTENANCE_OPTIONS.find((m) => m.id === maintenanceId)
  if (maintenance && maintenanceId !== 'none') {
    lines.push(
      `Manteniment: ${maintenance.title} (${formatEuro(maintenance.priceEurMonthly)}/mes)`,
    )
  } else {
    lines.push('Manteniment: sense quota mensual')
  }

  lines.push('', 'Gràcies!')
  return lines.join('\n')
}
