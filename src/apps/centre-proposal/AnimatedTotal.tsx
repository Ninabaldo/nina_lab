import { useEffect, useRef } from 'react'

interface AnimatedTotalProps {
  value: string
  pulseKey: number
  className?: string
}

export function AnimatedTotal({ value, pulseKey, className }: AnimatedTotalProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    element.classList.remove('centre-proposal__price--pulse')
    void element.offsetWidth
    element.classList.add('centre-proposal__price--pulse')
  }, [pulseKey])

  return (
    <dd ref={ref} className={className}>
      {value}
    </dd>
  )
}
