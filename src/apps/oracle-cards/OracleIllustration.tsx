import type { JSX } from 'react'
import type { OracleSymbol } from './oracleMeta'
import './OracleIllustration.css'

interface OracleIllustrationProps {
  symbol: OracleSymbol
  variant: 0 | 1 | 2 | 3
  compact?: boolean
}

function DecorativeFrame() {
  return (
    <>
      <rect x="6" y="6" width="88" height="88" rx="3" fill="none" stroke="currentColor" strokeWidth="0.55" opacity="0.45" />
      <rect x="10" y="10" width="80" height="80" rx="2" fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.25" />
      {[
        [6, 6], [94, 6], [6, 94], [94, 94],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.2" fill="currentColor" opacity="0.35" />
      ))}
    </>
  )
}

function Stardust({ count = 6 }: { count?: number }) {
  const dots = [
    [18, 22], [82, 18], [76, 72], [24, 78], [50, 14], [14, 52], [86, 48], [42, 86],
  ].slice(0, count)
  return (
    <>
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="0.7" fill="currentColor" opacity="0.35" />
      ))}
    </>
  )
}

function SunArt() {
  const rays = Array.from({ length: 28 }, (_, i) => {
    const angle = (i * 360) / 28 - 90
    const rad = (angle * Math.PI) / 180
    const inner = 22
    const outer = i % 2 === 0 ? 38 : 32
    const x1 = 50 + Math.cos(rad) * inner
    const y1 = 62 + Math.sin(rad) * inner
    const x2 = 50 + Math.cos(rad) * outer
    const y2 = 62 + Math.sin(rad) * outer
    return { x1, y1, x2, y2, w: i % 2 === 0 ? 0.7 : 0.45 }
  })

  return (
    <>
      <path d="M18 62 Q50 78 82 62 L82 88 Q50 92 18 88 Z" fill="currentColor" opacity="0.08" stroke="none" />
      {rays.map((ray, i) => (
        <line key={i} x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2} stroke="currentColor" strokeWidth={ray.w} strokeLinecap="round" opacity="0.85" />
      ))}
      <path d="M22 62 A28 28 0 0 1 78 62" fill="currentColor" opacity="0.12" stroke="none" />
      <circle cx="50" cy="62" r="10" fill="currentColor" opacity="0.18" stroke="none" />
      <circle cx="50" cy="62" r="10" fill="none" stroke="currentColor" strokeWidth="0.7" />
    </>
  )
}

function MoonArt() {
  return (
    <>
      <path d="M58 24a18 18 0 1 1-12 32a14 14 0 1 0 12-32z" fill="currentColor" opacity="0.15" stroke="none" />
      <path d="M58 24a18 18 0 1 1-12 32a14 14 0 1 0 12-32z" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="28" cy="30" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="22" cy="42" r="0.6" fill="currentColor" opacity="0.35" />
      <path d="M74 28l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z" fill="currentColor" opacity="0.55" />
      <path d="M68 52l.8 1.6 1.8.3-1.3 1.2.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.2 1.8-.3z" fill="currentColor" opacity="0.4" />
    </>
  )
}

function StarArt() {
  return (
    <>
      <path d="M50 18l5.5 11.2 12.3 1.8-8.9 6.7 2.1 12.3-10.9-5.7-10.9 5.7 2.1-12.3-8.9-6.7 12.3-1.8z" fill="currentColor" opacity="0.12" stroke="none" />
      <path d="M50 18l5.5 11.2 12.3 1.8-8.9 6.7 2.1 12.3-10.9-5.7-10.9 5.7 2.1-12.3-8.9-6.7 12.3-1.8z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round" />
      <path d="M20 34l12 8 18-14" fill="none" stroke="currentColor" strokeWidth="0.45" strokeDasharray="1.5 2.5" opacity="0.5" />
      <circle cx="20" cy="34" r="1" fill="currentColor" opacity="0.45" />
      <circle cx="32" cy="42" r="0.7" fill="currentColor" opacity="0.35" />
      <circle cx="50" cy="28" r="0.7" fill="currentColor" opacity="0.35" />
      <path d="M72 58l8-4 6 8" fill="none" stroke="currentColor" strokeWidth="0.45" opacity="0.4" />
    </>
  )
}

function WaveArt() {
  return (
    <>
      <circle cx="72" cy="28" r="8" fill="currentColor" opacity="0.12" stroke="none" />
      <circle cx="72" cy="28" r="8" fill="none" stroke="currentColor" strokeWidth="0.6" />
      {Array.from({ length: 8 }, (_, i) => {
        const angle = -40 + i * 10
        const rad = (angle * Math.PI) / 180
        return (
          <line
            key={i}
            x1={72 + Math.cos(rad) * 10}
            y1={28 + Math.sin(rad) * 10}
            x2={72 + Math.cos(rad) * 14}
            y2={28 + Math.sin(rad) * 14}
            stroke="currentColor"
            strokeWidth="0.4"
            strokeLinecap="round"
            opacity="0.5"
          />
        )
      })}
      <path d="M12 58c10-6 18-6 26 0s18 6 26 0 18-6 26 0" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <path d="M8 68c10-6 18-6 26 0s18 6 26 0 18-6 28 0" fill="none" stroke="currentColor" strokeWidth="0.55" opacity="0.65" />
      <path d="M10 78c10-5 18-5 26 0s18 5 26 0 18-5 28 0" fill="none" stroke="currentColor" strokeWidth="0.45" opacity="0.45" />
    </>
  )
}

function LeafArt() {
  return (
    <>
      <path d="M50 82V48" stroke="currentColor" strokeWidth="0.7" />
      <path d="M50 48c-14-4-22 2-22 14 0 8 8 12 22 10" fill="currentColor" opacity="0.1" stroke="none" />
      <path d="M50 48c-14-4-22 2-22 14 0 8 8 12 22 10" fill="none" stroke="currentColor" strokeWidth="0.65" />
      <path d="M50 52c14-4 22 2 22 14 0 8-8 12-22 10" fill="currentColor" opacity="0.1" stroke="none" />
      <path d="M50 52c14-4 22 2 22 14 0 8-8 12-22 10" fill="none" stroke="currentColor" strokeWidth="0.65" />
      <path d="M50 82c-8 6-12 10-12 10M50 82c8 6 12 10 12 10" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
      <path d="M44 86c-4 4-6 6-8 8M56 86c4 4 6 6 8 8" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      <ellipse cx="50" cy="44" rx="3" ry="5" fill="currentColor" opacity="0.2" stroke="none" />
    </>
  )
}

function FlameArt() {
  return (
    <>
      <path d="M50 78c-10-8-12-18-6-26 2.5 4 5 4 7 0 2.5 10 8 14 0 22 2 8 6 14 0 24z" fill="currentColor" opacity="0.12" stroke="none" />
      <path d="M50 78c-10-8-12-18-6-26 2.5 4 5 4 7 0 2.5 10 8 14 0 22 2 8 6 14 0 24z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round" />
      <path d="M50 72c-5-5-6-12-3-17 1.5 2.5 3 2.5 4.5 0 1.5 6 5 8 0 14z" fill="currentColor" opacity="0.2" stroke="none" />
      <circle cx="38" cy="36" r="0.8" fill="currentColor" opacity="0.4" />
      <circle cx="62" cy="40" r="0.6" fill="currentColor" opacity="0.35" />
      <circle cx="44" cy="28" r="0.5" fill="currentColor" opacity="0.3" />
    </>
  )
}

function CircleArt() {
  const rays = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 360) / 16
    const rad = (angle * Math.PI) / 180
    return {
      x1: 50 + Math.cos(rad) * 18,
      y1: 50 + Math.sin(rad) * 18,
      x2: 50 + Math.cos(rad) * 28,
      y2: 50 + Math.sin(rad) * 28,
    }
  })

  return (
    <>
      {rays.map((ray, i) => (
        <line key={i} x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2} stroke="currentColor" strokeWidth="0.45" strokeLinecap="round" opacity="0.55" />
      ))}
      <ellipse cx="50" cy="50" rx="14" ry="9" fill="currentColor" opacity="0.08" stroke="none" />
      <ellipse cx="50" cy="50" rx="14" ry="9" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.25" stroke="none" />
      <circle cx="50" cy="50" r="4" fill="none" stroke="currentColor" strokeWidth="0.55" />
      <circle cx="50" cy="50" r="1.5" fill="currentColor" />
    </>
  )
}

function PathArt() {
  return (
    <>
      <path d="M22 76c8-28 20-38 28-52s8-14 14-18" fill="none" stroke="currentColor" strokeWidth="0.65" strokeDasharray="2 3" opacity="0.55" />
      <path d="M22 76c8-28 20-38 28-52s8-14 14-18" fill="none" stroke="currentColor" strokeWidth="0.7" />
      {[
        [22, 76], [30, 62], [38, 48], [46, 36], [54, 28], [62, 22],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.5" fill="currentColor" opacity={0.3 + i * 0.08} />
      ))}
      <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <path d="M50 42v4M50 54v4M42 50h4M54 50h4" stroke="currentColor" strokeWidth="0.45" opacity="0.45" />
      <path d="M46 46l8 8M54 46l-8 8" stroke="currentColor" strokeWidth="0.45" opacity="0.45" />
    </>
  )
}

function DoorArt() {
  return (
    <>
      <path d="M30 78V38a20 20 0 0 1 40 0v40" fill="currentColor" opacity="0.06" stroke="none" />
      <path d="M30 78V38a20 20 0 0 1 40 0v40" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <path d="M34 78V40a16 16 0 0 1 32 0v38" fill="none" stroke="currentColor" strokeWidth="0.45" opacity="0.45" />
      {Array.from({ length: 7 }, (_, i) => (
        <line key={i} x1={50} y1={28 - i * 3} x2={50} y2={22 - i * 3} stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity={0.3 + i * 0.06} />
      ))}
      <circle cx="50" cy="58" r="2" fill="currentColor" opacity="0.35" stroke="none" />
      <path d="M38 78h24" stroke="currentColor" strokeWidth="0.55" opacity="0.4" />
    </>
  )
}

function KeyArt() {
  return (
    <>
      <circle cx="38" cy="38" r="12" fill="currentColor" opacity="0.1" stroke="none" />
      <circle cx="38" cy="38" r="12" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="38" cy="38" r="5" fill="none" stroke="currentColor" strokeWidth="0.55" />
      <path d="M46 42l24-8-3 6 5 3-8 18" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round" />
      <path d="M62 52v6M66 52v4M70 54v5" stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M34 26l1.5 3 3.3.5-2.4 2.3.6 3.3-3-1.6-3 1.6.6-3.3-2.4-2.3 3.3-.5z" fill="currentColor" opacity="0.45" />
    </>
  )
}

function AnchorArt() {
  return (
    <>
      <circle cx="50" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="0.65" />
      <path d="M50 27v34" stroke="currentColor" strokeWidth="0.75" />
      <path d="M34 78h32" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
      <path d="M28 68c0 12 9.8 22 22 22s22-10 22-22" fill="none" stroke="currentColor" strokeWidth="0.65" />
      <path d="M36 58l14 14M64 58L50 72" stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M42 18h16" stroke="currentColor" strokeWidth="0.55" opacity="0.5" />
      <path d="M12 72c8-4 14-4 20 0M68 72c8-4 14-4 20 0" stroke="currentColor" strokeWidth="0.4" opacity="0.35" />
    </>
  )
}

function CompassArt() {
  return (
    <>
      <circle cx="50" cy="50" r="28" fill="currentColor" opacity="0.06" stroke="none" />
      <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.65" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.45" />
      <path d="M50 24l5 14 14 5-14 5-5 14-5-14-14-5 14-5z" fill="currentColor" opacity="0.15" stroke="none" />
      <path d="M50 24l5 14 14 5-14 5-5 14-5-14-14-5 14-5z" fill="none" stroke="currentColor" strokeWidth="0.65" strokeLinejoin="round" />
      <path d="M50 22v6M50 72v6M22 50h6M72 50h6" stroke="currentColor" strokeWidth="0.45" opacity="0.45" />
      <text x="50" y="20" textAnchor="middle" fontSize="5" fill="currentColor" opacity="0.5" fontFamily="serif">N</text>
    </>
  )
}

function BloomArt() {
  const petals = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180)
    const cx = 50 + Math.cos(angle) * 12
    const cy = 44 + Math.sin(angle) * 12
    return { cx, cy, rot: i * 60 }
  })

  return (
    <>
      <path d="M50 78V58" stroke="currentColor" strokeWidth="0.65" />
      <path d="M44 66c-6 2-10 4-12 6M56 66c6 2 10 4 12 6" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
      {petals.map((petal, i) => (
        <ellipse
          key={i}
          cx={petal.cx}
          cy={petal.cy}
          rx="7"
          ry="11"
          fill="currentColor"
          opacity="0.1"
          stroke="none"
          transform={`rotate(${petal.rot} ${petal.cx} ${petal.cy})`}
        />
      ))}
      {petals.map((petal, i) => (
        <ellipse
          key={`s-${i}`}
          cx={petal.cx}
          cy={petal.cy}
          rx="7"
          ry="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          transform={`rotate(${petal.rot} ${petal.cx} ${petal.cy})`}
        />
      ))}
      <circle cx="50" cy="44" r="5" fill="currentColor" opacity="0.2" stroke="none" />
      <circle cx="50" cy="44" r="5" fill="none" stroke="currentColor" strokeWidth="0.55" />
    </>
  )
}

const ART: Record<OracleSymbol, () => JSX.Element> = {
  sun: SunArt,
  moon: MoonArt,
  star: StarArt,
  wave: WaveArt,
  leaf: LeafArt,
  flame: FlameArt,
  circle: CircleArt,
  path: PathArt,
  door: DoorArt,
  key: KeyArt,
  anchor: AnchorArt,
  compass: CompassArt,
  bloom: BloomArt,
}

export function OracleIllustration({ symbol, variant, compact }: OracleIllustrationProps) {
  const Art = ART[symbol]

  return (
    <div
      className={`oracle-art oracle-art--${symbol} oracle-art--v${variant} ${compact ? 'oracle-art--compact' : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="oracle-art__svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <DecorativeFrame />
        <Stardust />
        <Art />
      </svg>
    </div>
  )
}
