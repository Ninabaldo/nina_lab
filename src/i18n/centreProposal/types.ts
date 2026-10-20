import type { AddonId, MaintenanceId } from '../../apps/centre-proposal/pricing'

export type CentreProposalStudentTab = 'horaris' | 'reserves' | 'meves' | 'abonaments' | 'perfil'
export type CentreProposalDashTab = 'resum' | 'calendari' | 'classes' | 'alumnes' | 'abonaments'

export interface CentreProposalFeatureLine {
  label: string
  text: string
}

export interface CentreProposalCopy {
  meta: {
    mailSubject: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    intro: string
    ctaExplore: string
    ctaBudget: string
  }
  section01: {
    index: string
    title: string
    student: {
      title: string
      lead: string
      demoLabel: string
      features: CentreProposalFeatureLine[]
      cta: string
      openFull: string
    }
    dashboard: {
      title: string
      lead: string
      demoLabel: string
      features: CentreProposalFeatureLine[]
      cta: string
      openFull: string
    }
  }
  section02: {
    index: string
    title: string
    lead: string
    base: {
      title: string
      subtitle: string
      priceNote: string
      includesLabel: string
      includes: string[]
      footnote: string
    }
    addonsTitle: string
    addonsLead: string
    addonsRunningTotal: string
    addonIncluded: string
    addons: Record<AddonId, { title: string; description: string; detail: string }>
  }
  section03: {
    index: string
    title: string
    lead: string
    maintenance: Record<
      MaintenanceId,
      { title: string; description: string; includes?: string[]; extra?: string }
    >
    maintenanceGroupLabel: string
  }
  section04: {
    index: string
    title: string
    lead: string
    rows: {
      base: string
      addons: string
      addonsNone: string
      implementation: string
      maintenance: string
      maintenanceOptional: string
    }
    cta: string
  }
  section05: {
    index: string
    title: string
    paragraphs: string[]
    notesTitle: string
    notes: string[]
  }
  footer: string
  demo: {
    back: string
    studentBadge: string
    dashboardBadge: string
    interactiveLabel: string
    studentTabs: Record<CentreProposalStudentTab, string>
    dashTabs: Record<CentreProposalDashTab, string>
    student: {
      labels: {
        spots: string
        full: string
        book: string
        toastBooked: string
        toastCancelled: string
        tapHint: string
        syncHint: string
      }
      horaris: {
        title: string
        viewWeek: string
        viewMonth: string
        classes: { id: 'yoga' | 'pilates' | 'stretching'; name: string; meta: string }[]
      }
      reserves: {
        title: string
        confirm: string
        cancel: string
      }
      meves: {
        title: string
        upcomingLabel: string
        historyLabel: string
        upcoming: { name: string; status: string; meta: string }
        history: { name: string; meta: string }
      }
      abonaments: { title: string; pack: string; status: string; meta: string }
      perfil: {
        title: string
        nameLabel: string
        name: string
        emailLabel: string
        email: string
        prefsLabel: string
        prefs: string
      }
    }
    dashboard: {
      resum: {
        title: string
        leadTemplate: string
        kpis: {
          id: 'revenue' | 'activeStudents' | 'bookingsToday' | 'occupancy'
          label: string
          value: string
          hint: string
        }[]
        paymentsTitle: string
        payments: { label: string; amount: string; meta: string; tone: 'ok' | 'pending' }[]
        scheduleTitle: string
        rows: { id: 'yoga' | 'pilates'; time: string; meta: string }[]
      }
      calendari: {
        title: string
        lead: string
        viewWeek: string
        viewMonth: string
        days: { label: string; meta: string }[]
      }
      classes: {
        title: string
        lead: string
        studentsLabel: string
        rows: { id?: 'yoga' | 'pilates'; name: string; capacity: string; meta: string }[]
      }
      alumnes: { title: string; lead: string; rows: { name: string; plan: string; meta: string }[] }
      abonaments: { title: string; lead: string; rows: { name: string; price: string; meta: string }[] }
    }
  }
  mail: {
    greeting: string
    intro: string
    baseLabel: string
    addonsHeading: string
    addonsNone: string
    implementationLabel: string
    maintenanceNone: string
    maintenanceLine: string
    thanks: string
  }
}
