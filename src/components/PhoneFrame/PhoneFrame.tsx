import type { ReactNode } from 'react'
import './PhoneFrame.css'

interface PhoneFrameProps {
  children?: ReactNode
  className?: string
}

export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div className={`phone-frame ${className}`.trim()} aria-hidden={!children}>
      <div className="phone-frame__bezel">
        <div className="phone-frame__notch" />
        <div className="phone-frame__screen">
          {children}
        </div>
      </div>
    </div>
  )
}
