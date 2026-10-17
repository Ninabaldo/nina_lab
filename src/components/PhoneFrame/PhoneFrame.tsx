import type { ReactNode } from 'react'
import './PhoneFrame.css'

export type PhoneFrameVariant = 'simple' | 'iphone' | 'simulator'

interface PhoneFrameProps {
  children?: ReactNode
  className?: string
  variant?: PhoneFrameVariant
}

export function PhoneFrame({ children, className = '', variant = 'simple' }: PhoneFrameProps) {
  const isDevice = variant === 'iphone' || variant === 'simulator'

  return (
    <div
      className={`phone-frame${isDevice ? ' phone-frame--iphone' : ''}${
        variant === 'simulator' ? ' phone-frame--simulator' : ''
      } ${className}`.trim()}
      aria-hidden={!children}
    >
      <div className="phone-frame__bezel">
        {isDevice ? (
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
          {isDevice ? <span className="phone-frame__home-indicator" aria-hidden="true" /> : null}
        </div>
      </div>
    </div>
  )
}
