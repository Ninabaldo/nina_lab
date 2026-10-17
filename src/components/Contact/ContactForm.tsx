import { useState, type FormEvent } from 'react'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import {
  CONTACT_MESSAGE_MIN_LENGTH,
  submitContactForm,
  validateContactPayload,
} from '../../lib/contactSubmit'
import './ContactForm.css'

interface ContactFormProps {
  variant?: 'default' | 'footer'
  onSuccess?: () => void
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'
type FormError = 'generic' | 'validation'

export function ContactForm({ variant = 'default', onSuccess }: ContactFormProps) {
  const { t } = useSiteLanguage()
  const copy = t.contact
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorKind, setErrorKind] = useState<FormError>('generic')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending') return

    if (!validateContactPayload({ name, email, message })) {
      setErrorKind('validation')
      setStatus('error')
      return
    }

    setStatus('sending')
    setErrorKind('generic')

    try {
      await submitContactForm({ name, email, message })
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      onSuccess?.()
    } catch (error) {
      setErrorKind(error instanceof Error && error.message === 'validation' ? 'validation' : 'generic')
      setStatus('error')
    }
  }

  return (
    <form
      className={`contact-form contact-form--${variant}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="contact-form__fields">
        <label className="contact-form__field">
          <span className="contact-form__label">{copy.nameLabel}</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={120}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="contact-form__input"
          />
        </label>

        <label className="contact-form__field">
          <span className="contact-form__label">{copy.emailLabel}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={200}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="contact-form__input"
          />
        </label>

        <label className="contact-form__field contact-form__field--full">
          <span className="contact-form__label">{copy.messageLabel}</span>
          <textarea
            name="message"
            required
            minLength={CONTACT_MESSAGE_MIN_LENGTH}
            maxLength={4000}
            rows={variant === 'footer' ? 4 : 5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="contact-form__input contact-form__textarea"
            placeholder={copy.messagePlaceholder}
          />
        </label>
      </div>

      {status === 'success' ? (
        <p className="contact-form__feedback contact-form__feedback--success" role="status">
          {copy.success}
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="contact-form__feedback contact-form__feedback--error" role="alert">
          {errorKind === 'validation' ? copy.validationError : copy.error}
        </p>
      ) : null}

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? copy.sending : copy.send}
      </button>
    </form>
  )
}
