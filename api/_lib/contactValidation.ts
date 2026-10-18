export const CONTACT_MESSAGE_MIN_LENGTH = 5

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export function parseContactPayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== 'object') return null
  const record = body as Record<string, unknown>
  const name = typeof record.name === 'string' ? record.name.trim() : ''
  const email = typeof record.email === 'string' ? record.email.trim() : ''
  const message = typeof record.message === 'string' ? record.message.trim() : ''
  return { name, email, message }
}

export function isValidContactPayload(payload: ContactPayload): boolean {
  const { name, email, message } = payload
  if (name.length < 2 || name.length > 120) return false
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) return false
  if (message.length < CONTACT_MESSAGE_MIN_LENGTH || message.length > 4000) return false
  return true
}
