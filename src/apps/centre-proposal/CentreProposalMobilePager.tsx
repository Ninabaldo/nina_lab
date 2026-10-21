import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type { CentreProposalCopy } from '../../i18n/centreProposal/types'
import {
  CentreProposalPagerProvider,
  type CentreProposalSlideId,
} from './centreProposalPagerContext'

const MOBILE_MAX = 720

const SLIDE_ORDER: CentreProposalSlideId[] = [
  'intro',
  'student',
  'dashboard',
  'config',
  'next',
  'handover',
  'external',
]

function useMobileProposalLayout(): boolean {
  const [mobile, setMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(`(max-width: ${MOBILE_MAX}px)`).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`)
    const sync = () => setMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return mobile
}

interface CentreProposalMobilePagerProps {
  copy: CentreProposalCopy
  children: ReactNode
}

export function CentreProposalMobilePager({ copy, children }: CentreProposalMobilePagerProps) {
  const mobile = useMobileProposalLayout()
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const slideLabels = useMemo(
    () => [
      copy.mobilePager.slides.intro,
      copy.mobilePager.slides.student,
      copy.mobilePager.slides.dashboard,
      copy.mobilePager.slides.config,
      copy.mobilePager.slides.next,
      copy.mobilePager.slides.handover,
      copy.mobilePager.slides.external,
    ],
    [copy.mobilePager.slides],
  )

  const slideCount = slideLabels.length

  const syncIndexFromScroll = useCallback(() => {
    const track = trackRef.current
    if (!track || !mobile) return
    const width = track.clientWidth
    if (width <= 0) return
    const index = Math.round(track.scrollLeft / width)
    setActiveIndex(Math.min(slideCount - 1, Math.max(0, index)))
  }, [mobile, slideCount])

  const goToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current
      if (!track || !mobile) return
      const clamped = Math.min(slideCount - 1, Math.max(0, index))
      track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' })
      setActiveIndex(clamped)
    },
    [mobile, slideCount],
  )

  const goToId = useCallback(
    (id: CentreProposalSlideId) => {
      const index = SLIDE_ORDER.indexOf(id)
      if (index >= 0) goToIndex(index)
    },
    [goToIndex],
  )

  useEffect(() => {
    if (!mobile) return
    const track = trackRef.current
    if (!track) return

    const onScroll = () => syncIndexFromScroll()
    track.addEventListener('scroll', onScroll, { passive: true })

    const ro = new ResizeObserver(() => syncIndexFromScroll())
    ro.observe(track)

    return () => {
      track.removeEventListener('scroll', onScroll)
      ro.disconnect()
    }
  }, [mobile, syncIndexFromScroll])

  const pagerApi = useMemo(
    () => ({
      enabled: mobile,
      activeIndex,
      slideCount,
      goToIndex,
      goToId,
    }),
    [mobile, activeIndex, slideCount, goToIndex, goToId],
  )

  const progressLabel = copy.mobilePager.slideOf
    .replace('{current}', String(activeIndex + 1))
    .replace('{total}', String(slideCount))

  const childArray = Children.toArray(children).filter(isValidElement)

  return (
    <CentreProposalPagerProvider value={pagerApi}>
      <div className={`centre-proposal cp-mobile-pager-root${mobile ? ' cp-mobile-pager-root--active' : ''}`}>
        <main className="centre-proposal__main cp-mobile-pager__main">
          <div
            ref={trackRef}
            className="cp-mobile-pager__track"
            role={mobile ? 'group' : undefined}
            aria-roledescription={mobile ? copy.mobilePager.carouselLabel : undefined}
            aria-label={mobile ? copy.mobilePager.carouselLabel : undefined}
          >
            {childArray}
          </div>
        </main>

        {mobile ? (
          <nav className="cp-mobile-pager__nav" aria-label={copy.mobilePager.navLabel}>
            <button
              type="button"
              className="cp-mobile-pager__nav-btn"
              disabled={activeIndex === 0}
              onClick={() => goToIndex(activeIndex - 1)}
            >
              {copy.mobilePager.prev}
            </button>
            <div className="cp-mobile-pager__nav-meta">
              <p className="cp-mobile-pager__nav-title">{slideLabels[activeIndex]}</p>
              <p className="cp-mobile-pager__nav-progress">{progressLabel}</p>
              <div className="cp-mobile-pager__dots" role="tablist" aria-label={copy.mobilePager.dotsLabel}>
                {slideLabels.map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={label}
                    className={`cp-mobile-pager__dot${i === activeIndex ? ' cp-mobile-pager__dot--active' : ''}`}
                    onClick={() => goToIndex(i)}
                  />
                ))}
              </div>
            </div>
            <button
              type="button"
              className="cp-mobile-pager__nav-btn cp-mobile-pager__nav-btn--next"
              disabled={activeIndex >= slideCount - 1}
              onClick={() => goToIndex(activeIndex + 1)}
            >
              {copy.mobilePager.next}
            </button>
          </nav>
        ) : null}
      </div>
    </CentreProposalPagerProvider>
  )
}
