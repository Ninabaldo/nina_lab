export type OracleTheme = 'love' | 'relations' | 'work'

export type OracleSymbol =
  | 'sun'
  | 'moon'
  | 'star'
  | 'wave'
  | 'leaf'
  | 'flame'
  | 'circle'
  | 'path'
  | 'door'
  | 'key'
  | 'anchor'
  | 'compass'
  | 'bloom'

export interface OracleCardMeta {
  id: number
  theme: OracleTheme
  symbol: OracleSymbol
  variant: 0 | 1 | 2 | 3
}

const SYMBOLS: OracleSymbol[] = [
  'sun', 'moon', 'star', 'wave', 'leaf', 'flame', 'circle',
  'path', 'door', 'key', 'anchor', 'compass', 'bloom',
]

const THEMES: OracleTheme[] = ['love', 'relations', 'work']

export const ORACLE_CARD_META: OracleCardMeta[] = Array.from({ length: 52 }, (_, index) => ({
  id: index + 1,
  theme: THEMES[index % 3]!,
  symbol: SYMBOLS[index % 13]!,
  variant: Math.floor(index / 13) as 0 | 1 | 2 | 3,
}))
