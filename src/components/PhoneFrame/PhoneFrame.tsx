import type { ReactNode } from 'react'
import './PhoneFrame.css'

export type PhoneFrameVariant = 'simple' | 'iphone'

interface PhoneFrameProps {
  children?: ReactNode
  className?: string
  variant?: PhoneFrameVariant
}

export function PhoneFrame({ children, className = '', variant = 'simple' }: PhoneFrameProps) {
  const isIphone = variant === 'iphone'

  return (
    <div
      className={`phone-frame${isIphone ? ' phone-frame--iphone' : ''} ${className}`.trim()}
      aria-hidden={!children}
    >
      <div className="phone-frame__bezel">
        {isIphone ? (
          <>
            <div className="phone-frame__island" aria-hidden="true" />
            <span className="phone-frame__button phone-frame__button--silent" aria-hidden="true" />
            <span className="phone-frame__button phone-frame__button--volume-up" aria-hidden="true" />
            <span className="phone-frame__button phone-frame__button--volume-down" aria-hidden="true" />
          </>
        ) : (
          <div className="phone-frame__notch" />
        )}
        <div className="phone-frame__screen">
          {children}
          {isIphone ? <span className="phone-frame__home-indicator" aria-hidden="true" /> : null}
        </div>
      </div>
    </div>
  )
}
