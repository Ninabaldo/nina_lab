import { CONTACT_EMAIL } from './contactEmail'

export const CONTACT_MESSAGE_MIN_LENGTH = 5

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export function validateContactPayload(payload: ContactPayload): boolean {
  const name = payload.name.trim()
  const email = payload.email.trim()
  const message = payload.message.trim()

  if (name.length < 2 || name.length > 120) return false
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) return false
  if (message.length < CONTACT_MESSAGE_MIN_LENGTH || message.length > 4000) return false

  return true
}

function isFormSubmitSuccess(data: unknown): boolean {
  if (!data || typeof data !== 'object') return false
  const success = (data as { success?: boolean | string }).success
  return success === true || success === 'true'
}

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  if (!validateContactPayload(payload)) {
    throw new Error('validation')
  }

  const name = payload.name.trim()
  const email = payload.email.trim()
  const message = payload.message.trim()

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Nina's Lab — ${name}`,
        _replyto: email,
        _template: 'table',
        _captcha: 'false',
      }),
    },
  )

  let data: unknown = null
  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok || !isFormSubmitSuccess(data)) {
    throw new Error('delivery')
  }
}
