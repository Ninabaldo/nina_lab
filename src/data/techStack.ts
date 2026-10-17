export const techStackIds = [
  'react',
  'typescript',
  'vite',
  'pwa',
  'vercel',
  'github',
  'cursor',
] as const

export type TechStackId = (typeof techStackIds)[number]
