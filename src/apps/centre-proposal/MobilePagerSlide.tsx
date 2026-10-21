import { forwardRef, type ReactNode } from 'react'
import type { CentreProposalSlideId } from './centreProposalPagerContext'

interface MobilePagerSlideProps {
  id: CentreProposalSlideId
  label: string
  children: ReactNode
  className?: string
}

export const MobilePagerSlide = forwardRef<HTMLElement, MobilePagerSlideProps>(function MobilePagerSlide(
  { id, label, children, className = '' },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id === 'config' ? 'configura' : id === 'student' ? 'experiencies' : id === 'external' ? 'costos-externs' : id === 'handover' ? 'continuitat' : undefined}
      className={`cp-mobile-pager__slide cp-mobile-pager__slide--${id}${className ? ` ${className}` : ''}`}
      data-slide-id={id}
      aria-label={label}
    >
      <div className="cp-mobile-pager__slide-inner">{children}</div>
    </section>
  )
})
