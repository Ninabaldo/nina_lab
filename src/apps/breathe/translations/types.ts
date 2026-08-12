export type Language = 'en' | 'es' | 'ca' | 'fr'

export interface Translations {
  appName: string
  tagline1: string
  tagline2: string
  goalQuestion: string
  goalCalm: string
  goalFocus: string
  goalReset: string
  goalSleep: string
  durationQuestion: string
  duration5: string
  duration10: string
  duration15: string
  moodQuestion: string
  moodAfterQuestion: string
  moodBefore: string
  moodAfter: string
  start: string
  quickReset: string
  quickResetDuration: string
  inhale: string
  hold: string
  exhale: string
  pause: string
  resume: string
  end: string
  endConfirm: string
  endConfirmYes: string
  endConfirmNo: string
  done: string
  doneMessage: string
  doneMessageQuick: string
  breatheAgain: string
  close: string
  sessionProgress: string
  weekTitle: string
  weekSessions: string
  weekMinutes: string
}

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'EN',
  es: 'ES',
  ca: 'CA',
  fr: 'FR',
}

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'es', 'ca', 'fr']
