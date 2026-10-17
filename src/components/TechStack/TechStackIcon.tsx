import type { TechStackId } from '../../data/techStack'

interface TechStackIconProps {
  id: TechStackId
}

export function TechStackIcon({ id }: TechStackIconProps) {
  switch (id) {
    case 'react':
      return (
        <svg className="tech-stack__icon tech-stack__icon--react" viewBox="-11.5 -10.23174 23 20.46348" aria-hidden>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" fill="none" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    case 'typescript':
      return (
        <svg className="tech-stack__icon" viewBox="0 0 24 24" aria-hidden>
          <rect width="24" height="24" rx="4" fill="#3178c6" />
          <text
            x="12"
            y="16"
            fill="#fff"
            fontSize="10"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            TS
          </text>
        </svg>
      )
    case 'vite':
      return (
        <svg className="tech-stack__icon" viewBox="0 0 24 24" aria-hidden>
          <path
            fill="#646cff"
            d="M12 1.5 22.5 7v10L12 22.5 1.5 17V7L12 1.5z"
          />
          <path fill="#ffd62e" d="M12 1.5v8.2l8.8-3.2L12 1.5z" />
          <path fill="#ff4154" d="M12 9.7 3.2 6.5 1.5 7 12 9.7z" />
        </svg>
      )
    case 'pwa':
      return <span className="tech-stack__glyph" aria-hidden>📱</span>
    case 'vercel':
      return (
        <svg className="tech-stack__icon tech-stack__icon--vercel" viewBox="0 0 24 24" aria-hidden>
          <path fill="currentColor" d="M12 2 22 20H2L12 2z" />
        </svg>
      )
    case 'github':
      return (
        <svg className="tech-stack__icon tech-stack__icon--github" viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.48A10 10 0 0 0 12 2z"
          />
        </svg>
      )
    case 'cursor':
      return <span className="tech-stack__glyph" aria-hidden>✨</span>
    default:
      return null
  }
}
