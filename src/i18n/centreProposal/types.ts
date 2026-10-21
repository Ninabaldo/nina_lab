import type {
  AddonGroupId,
  AddonId,
  MaintenanceId,
  SoftwareId,
} from '../../apps/centre-proposal/pricing'

export interface CentreProposalConfiguratorCopy {
  progress: { software: string; customize: string; maintenance: string }
  nav: { back: string; continue: string }
  step1: {
    title: string
    lead: string
    priceNote: string
    timelineLabel: string
    timelinesHeading: string
    changePlan: string
    seeIncludes: string
    closeIncludes: string
    storeExcludedNote: string
    timelineDisclaimer: string[]
  }
  software: Record<
    SoftwareId,
    {
      title: string
      tagline: string
      timeline: string
      highlights: string[]
      includes: string[]
    }
  >
  step2: {
    title: string
    lead: string
    groups: Record<AddonGroupId, string>
    includedBadge: string
    addLabel: string
    removeLabel: string
    storePublishing: {
      title: string
      description: string
      offNote: string
    }
  }
  step3: {
    title: string
    lead: string
  }
  maintenance: Record<
    MaintenanceId,
    { title: string; description: string; includes?: string[] }
  >
  summary: {
    title: string
    software: string
    addons: string
    addonsNone: string
    storePublishing: string
    storePublishingOff: string
    implementation: string
    maintenance: string
    maintenanceNone: string
    breakdownToggle: string
    storeFeesTitle: string
    storeFeesApple: string
    storeFeesGoogle: string
    storeFeesNote: string
    mobileCta: string
  }
  proposal: {
    title: string
    readyLead: string
    prepareCta: string
    copyCta: string
    copied: string
    editCta: string
    copyError: string
  }
}

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
  configurator: CentreProposalConfiguratorCopy
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
    externalCostsTeaser: string
    externalCostsLink: string
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
    intro: string
    steps: string[]
    closing: string[]
  }
  section06: {
    index: string
    title: string
    intro: string
    context: string[]
    deliverablesTitle: string
    deliverables: string[]
    stackTitle: string
    stackNote: string
    stackItems: { name: string; detail: string }[]
    handoverTitle: string
    handoverSteps: string[]
    closing: string
  }
  section07: {
    index: string
    title: string
    intro: string
    disclaimer: string
    setupTitle: string
    setupIntro: string
    setupItems: string[]
    setupAccessNote: string
    groups: { title: string; items: { name: string; note: string }[] }[]
    maintenanceNote: string
    closing: string
  }
  footer: string
  demo: {
    back: string
    studentBadge: string
    dashboardBadge: string
    interactiveLabel: string
    disclaimer: string
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
        chartsTitle: string
        charts: {
          monthlyTitle: string
          annualTitle: string
          monthly: { label: string; valueLabel: string; amount: number; highlight?: boolean }[]
          annual: { label: string; valueLabel: string; amount: number; highlight?: boolean }[]
        }
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
        rows: { id?: string; name: string; capacity: string; meta: string }[]
      }
      alumnes: {
        title: string
        lead: string
        searchPlaceholder: string
        countTemplate: string
        columns: { name: string; email: string; plan: string; status: string; activity: string }
        rows: {
          id: string
          name: string
          email: string
          plan: string
          status: 'active' | 'pending'
          statusLabel: string
          activity: string
        }[]
      }
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
