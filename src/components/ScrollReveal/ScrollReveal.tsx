import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface ScrollRevealProps {
  as?: ElementType
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function ScrollReveal({
  as: Tag = 'div',
  className = '',
  style,
  children,
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLElement>()
  const classes = className.includes('reveal') ? className : `${className} reveal`.trim()

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  )
}
