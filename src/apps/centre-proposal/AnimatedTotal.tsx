interface AnimatedTotalProps {
  value: string
  pulseKey: number
  className?: string
}

export function AnimatedTotal({ value, pulseKey, className }: AnimatedTotalProps) {
  return (
    <dd key={pulseKey} className={`${className ?? ''} centre-proposal__price--pulse`.trim()}>
      {value}
    </dd>
  )
}
