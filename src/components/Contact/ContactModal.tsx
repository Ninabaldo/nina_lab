import { useEffect, useRef } from 'react'
import { ContactForm } from './ContactForm'
import { useContact } from '../../hooks/useContact'
import { useSiteLanguage } from '../../hooks/useSiteLanguage'
import './ContactModal.css'

export function ContactModal() {
  const { open, closeContact } = useContact()
  const closeRef = useRef<HTMLButtonElement>(null)
  const { t } = useSiteLanguage()
  const copy = t.contact

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeContact()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, closeContact])

  if (!open) return null

  return (
    <div className="contact-modal" role="presentation">
      <button
        type="button"
        className="contact-modal__backdrop"
        onClick={closeContact}
        aria-label={copy.closeAria}
      />

      <div
        className="contact-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <header className="contact-modal__header">
          <div>
            <p className="contact-modal__eyebrow">{copy.modalEyebrow}</p>
            <h2 id="contact-modal-title" className="contact-modal__title">
              {copy.modalTitle}
            </h2>
            <p className="contact-modal__lead">{copy.modalLead}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="contact-modal__close"
            onClick={closeContact}
          >
            {copy.close}
          </button>
        </header>

        <ContactForm onSuccess={() => undefined} />
      </div>
    </div>
  )
}
