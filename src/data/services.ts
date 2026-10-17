export const serviceIds = [
  'smallWebApps',
  'interactiveExperiences',
  'websitesMicrosites',
  'businessTools',
  'educationalProducts',
] as const

export type ServiceId = (typeof serviceIds)[number]
