import type { BreathingGoal } from './hooks/breathingConstants'

export type DurationMinutes = 5 | 10 | 15

export type SessionGoal = BreathingGoal | 'quick'

export interface SessionRecord {
  date: string
  durationMinutes: number
  goal: SessionGoal
  moodBefore?: number
  moodAfter?: number
}

export interface WeekStats {
  sessionCount: number
  totalMinutes: number
  days: boolean[]
}

const DURATION_KEY = 'breathe-duration'
const GOAL_KEY = 'breathe-goal'
const SESSIONS_KEY = 'breathe-sessions'

export function getStoredDuration(): DurationMinutes {
  const value = localStorage.getItem(DURATION_KEY)
  if (value === '10') return 10
  if (value === '15') return 15
  return 5
}

export function storeDuration(minutes: DurationMinutes) {
  localStorage.setItem(DURATION_KEY, String(minutes))
}

export function getStoredGoal(): BreathingGoal {
  const value = localStorage.getItem(GOAL_KEY)
  if (value === 'focus' || value === 'reset' || value === 'sleep') return value
  return 'calm'
}

export function storeGoal(goal: BreathingGoal) {
  localStorage.setItem(GOAL_KEY, goal)
}

export function getSessions(): SessionRecord[] {
  try {
    const raw = localStorage.getItem(SESSIONS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as SessionRecord[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveSession(record: SessionRecord) {
  const sessions = getSessions()
  sessions.unshift(record)
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions.slice(0, 100)))
}

export function getWeekStats(): WeekStats {
  const sessions = getSessions()
  const now = new Date()
  const weekStart = new Date(now)
  weekStart.setDate(weekStart.getDate() - 6)
  weekStart.setHours(0, 0, 0, 0)

  const weekSessions = sessions.filter((session) => new Date(session.date) >= weekStart)
  const totalMinutes = weekSessions.reduce((sum, session) => sum + session.durationMinutes, 0)

  const days = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(weekStart)
    day.setDate(day.getDate() + index)
    const dayKey = day.toISOString().slice(0, 10)
    return weekSessions.some((session) => session.date.slice(0, 10) === dayKey)
  })

  return {
    sessionCount: weekSessions.length,
    totalMinutes,
    days,
  }
}
