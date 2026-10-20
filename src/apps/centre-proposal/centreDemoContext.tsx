import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type DemoClassId = 'yoga' | 'pilates' | 'stretching'

type ToastKind = 'booked' | 'cancelled' | null

interface CentreDemoContextValue {
  selectedClassId: DemoClassId
  studentBookedYoga: boolean
  yogaSpotsLeft: number
  yogaOccupancy: number
  yogaCapacity: number
  confirmedBookings: number
  toast: ToastKind
  selectClass: (id: DemoClassId) => void
  openBooking: (id: DemoClassId) => void
  confirmBooking: () => void
  cancelBooking: () => void
  clearToast: () => void
  isClassFull: (id: DemoClassId) => boolean
}

const CentreDemoContext = createContext<CentreDemoContextValue | null>(null)

const INITIAL_SPOTS = 3
const INITIAL_OCCUPANCY = 8
const YOGA_CAPACITY = 10
const INITIAL_BOOKINGS = 6

export function CentreDemoProvider({ children }: { children: ReactNode }) {
  const [selectedClassId, setSelectedClassId] = useState<DemoClassId>('yoga')
  const [studentBookedYoga, setStudentBookedYoga] = useState(false)
  const [yogaSpotsLeft, setYogaSpotsLeft] = useState(INITIAL_SPOTS)
  const [yogaOccupancy, setYogaOccupancy] = useState(INITIAL_OCCUPANCY)
  const [confirmedBookings, setConfirmedBookings] = useState(INITIAL_BOOKINGS)
  const [toast, setToast] = useState<ToastKind>(null)

  const isClassFull = useCallback((id: DemoClassId) => {
    if (id === 'pilates') return true
    if (id === 'yoga') return yogaSpotsLeft <= 0
    return false
  }, [yogaSpotsLeft])

  const selectClass = useCallback((id: DemoClassId) => {
    setSelectedClassId(id)
  }, [])

  const openBooking = useCallback(
    (id: DemoClassId) => {
      if (isClassFull(id)) return
      setSelectedClassId(id)
    },
    [isClassFull],
  )

  const confirmBooking = useCallback(() => {
    if (selectedClassId !== 'yoga' || studentBookedYoga || yogaSpotsLeft <= 0) return
    setStudentBookedYoga(true)
    setYogaSpotsLeft((n) => n - 1)
    setYogaOccupancy((n) => n + 1)
    setConfirmedBookings((n) => n + 1)
    setToast('booked')
  }, [selectedClassId, studentBookedYoga, yogaSpotsLeft])

  const cancelBooking = useCallback(() => {
    if (!studentBookedYoga) return
    setStudentBookedYoga(false)
    setYogaSpotsLeft((n) => n + 1)
    setYogaOccupancy((n) => n - 1)
    setConfirmedBookings((n) => n - 1)
    setToast('cancelled')
  }, [studentBookedYoga])

  const clearToast = useCallback(() => setToast(null), [])

  const value = useMemo(
    () => ({
      selectedClassId,
      studentBookedYoga,
      yogaSpotsLeft,
      yogaOccupancy,
      yogaCapacity: YOGA_CAPACITY,
      confirmedBookings,
      toast,
      selectClass,
      openBooking,
      confirmBooking,
      cancelBooking,
      clearToast,
      isClassFull,
    }),
    [
      selectedClassId,
      studentBookedYoga,
      yogaSpotsLeft,
      yogaOccupancy,
      confirmedBookings,
      toast,
      selectClass,
      openBooking,
      confirmBooking,
      cancelBooking,
      clearToast,
      isClassFull,
    ],
  )

  return <CentreDemoContext.Provider value={value}>{children}</CentreDemoContext.Provider>
}

export function useCentreDemo() {
  const ctx = useContext(CentreDemoContext)
  if (!ctx) {
    throw new Error('useCentreDemo must be used within CentreDemoProvider')
  }
  return ctx
}
