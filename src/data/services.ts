export const serviceIds = [
  'productManagement',
  'uxUi',
  'prototypes',
  'aiProduct',
] as const

export type ServiceId = (typeof serviceIds)[number]
