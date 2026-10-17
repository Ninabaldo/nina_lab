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

export const techStackEmojis: Record<TechStackId, string> = {
  react: '⚛️',
  typescript: '📘',
  vite: '⚡',
  pwa: '📱',
  vercel: '▲',
  github: '🐙',
  cursor: '✨',
}
