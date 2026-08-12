import type { Language } from '../../lib/preferences'
import { ORACLE_CARD_META, type OracleCardMeta, type OracleTheme } from './oracleMeta'
import { oracleMessages } from './oracleMessages'

export type OracleIntention = OracleTheme | 'open'

export interface OracleCard extends OracleCardMeta {
  text: string
}

export function getOracleDeck(language: Language): OracleCard[] {
  const messages = oracleMessages[language]
  return ORACLE_CARD_META.map((meta, index) => ({
    ...meta,
    text: messages[index] ?? messages[0]!,
  }))
}

export function pickRandomOracleCard(
  deck: OracleCard[],
  options?: { exclude?: OracleCard; intention?: OracleIntention },
): OracleCard {
  const { exclude, intention } = options ?? {}
  let pool =
    intention && intention !== 'open'
      ? deck.filter((card) => card.theme === intention)
      : deck

  if (exclude && pool.length > 1) {
    pool = pool.filter((card) => card.id !== exclude.id)
  }

  if (pool.length === 0) {
    pool = deck.filter((card) => card.id !== exclude?.id)
  }

  return pool[Math.floor(Math.random() * pool.length)]!
}
