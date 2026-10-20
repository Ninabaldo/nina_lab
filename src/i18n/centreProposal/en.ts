import type { CentreProposalCopy } from './types'

const en: CentreProposalCopy = {
  meta: { mailSubject: 'Class management platform proposal' },
  hero: {
    eyebrow: 'Software proposal',
    title: 'Your studio, with its own system.',
    lead: 'A class management platform designed to fit how your centre actually runs.',
    intro:
      'Review the proposal, explore both software experiences, and configure the features you need.',
    ctaExplore: 'Explore the software',
    ctaBudget: 'Configure budget',
  },
  section01: {
    index: '01',
    title: 'One experience per role',
    student: {
      title: 'Student app',
      lead: 'A simple way to browse classes and manage bookings from a phone.',
      demoLabel: 'Basic mockup features:',
      features: [
        { label: 'Schedule', text: 'see scheduled activities and available spots.' },
        { label: 'Bookings', text: 'book a class or cancel a spot.' },
        { label: 'My classes', text: 'upcoming bookings and history.' },
        { label: 'Passes', text: 'view your pack or membership and remaining classes.' },
        { label: 'Profile', text: 'your details and preferences.' },
      ],
      cta: 'Explore the student app',
      openFull: 'Open full-screen demo',
    },
    dashboard: {
      title: 'Centre dashboard',
      lead: 'One management space for classes, students, and bookings.',
      demoLabel: 'Basic mockup features:',
      features: [
        { label: 'Overview', text: "today's bookings and classes." },
        { label: 'Calendar', text: 'activities by day and time.' },
        { label: 'Classes', text: 'create sessions, assign instructors, set capacity.' },
        { label: 'Students', text: 'profiles and their bookings.' },
        { label: 'Passes', text: 'manage packs and memberships.' },
      ],
      cta: 'Explore the dashboard',
      openFull: 'Open full-screen demo',
    },
  },
  section02: {
    index: '02',
    title: 'Configure your software',
    lead: 'Pick the features that best match your centre’s needs.',
    base: {
      title: 'Base software',
      subtitle: 'Booking and management platform',
      priceNote: 'implementation',
      includesLabel: 'Includes:',
      includes: [
        'Responsive booking website.',
        'Mobile-friendly student app.',
        'Management dashboard for the centre.',
        'Class and activity calendar.',
        'Booking and cancellation management.',
        'Basic student management.',
        'Classes, instructors, and capacity setup.',
      ],
      footnote: 'This is the project starting point.',
    },
    addonsTitle: 'Add-on features',
    addonsLead: 'Select the extras you want to include:',
    addons: {
      subscriptions: {
        title: 'Passes and memberships',
        description: 'Manage class packs and memberships.',
        detail: 'Define plans, track remaining classes, and manage validity.',
      },
      waitlist: {
        title: 'Waitlist',
        description: 'When a class is full, students can join a waitlist.',
        detail: 'Handle freed spots and people waiting to book.',
      },
      payments: {
        title: 'Online payments',
        description: 'Payment integration for passes and paid activities.',
        detail: 'Final cost depends on the payment provider and fees.',
      },
      reminders: {
        title: 'Automatic reminders',
        description: 'Email reminders before booked classes.',
        detail: 'Helps reduce no-shows and missed bookings.',
      },
      instructors: {
        title: 'Advanced instructor management',
        description: 'Manage instructors, assigned classes, and schedules.',
        detail: '',
      },
      analytics: {
        title: 'Stats and reports',
        description: 'Occupancy, bookings, and centre activity.',
        detail: 'A clear view of how activities are performing.',
      },
    },
  },
  section03: {
    index: '03',
    title: 'Maintenance',
    lead: 'After launch, you can choose an optional maintenance plan.',
    maintenanceGroupLabel: 'Maintenance',
    maintenance: {
      none: {
        title: 'No maintenance',
        description: 'No monthly fee.',
        extra: 'Later work is quoted based on your centre’s needs.',
      },
      basic: {
        title: 'Basic maintenance',
        description: 'Platform supervision and technical support.',
        includes: [
          'Basic operational monitoring.',
          'Bug fixes in delivered software.',
          'Minor technical updates.',
          'Support for platform incidents.',
        ],
      },
      extended: {
        title: 'Extended maintenance',
        description: 'Basic plan plus priority and small improvements.',
        includes: [
          'Everything in basic maintenance.',
          'Small feature improvements.',
          'Minor platform adjustments.',
          'Priority incident handling.',
        ],
        extra: 'Major new features are quoted separately.',
      },
    },
  },
  section04: {
    index: '04',
    title: 'Your proposal',
    lead: 'Select features and see the estimated budget.',
    rows: {
      base: 'Base software',
      addons: 'Add-ons',
      addonsNone: 'None selected',
      implementation: 'Implementation',
      maintenance: 'Maintenance',
      maintenanceOptional: 'Optional monthly fee',
    },
    cta: 'Prepare proposal',
  },
  section05: {
    index: '05',
    title: 'What happens next?',
    paragraphs: [
      'Once features are defined, we’ll scope the project and prepare the final quote.',
      'Next we validate screens, booking flows, and centre-specific needs before development.',
    ],
    notesTitle: 'Notes',
    notes: [
      'This budget is indicative and subject to final scope and feature definition.',
      'Amounts exclude VAT where applicable and third-party fees (payments, email, hosting).',
      'Implementation, timeline, and payment terms will be set in the final proposal.',
    ],
  },
  footer: 'Proposal by Nina Baldó',
  demo: {
    back: '← Back to proposal',
    studentBadge: 'Demo · Student app',
    dashboardBadge: 'Demo · Centre dashboard',
    interactiveLabel: 'Interactive mockup',
    studentTabs: {
      horaris: 'Schedule',
      reserves: 'Book',
      meves: 'Mine',
      abonaments: 'Passes',
      perfil: 'Profile',
    },
    dashTabs: {
      resum: 'Overview',
      calendari: 'Calendar',
      classes: 'Classes',
      alumnes: 'Students',
      abonaments: 'Passes',
    },
    student: {
      horaris: {
        title: 'Schedule',
        classes: [
          { name: 'Gentle yoga', meta: 'Mon · 10:00 · Room A · Laura', spots: '3 spots' },
          { name: 'Pilates', meta: 'Mon · 18:30 · Room B · Marc', spots: 'Full' },
          { name: 'Stretching', meta: 'Tue · 09:00 · Room A · Anna', spots: '5 spots' },
        ],
      },
      reserves: {
        title: 'Booking',
        subtitle: 'Gentle yoga · Mon 10:00',
        confirm: 'Confirm booking',
        cancel: 'Cancel spot',
      },
      meves: {
        title: 'My classes',
        upcomingLabel: 'Upcoming',
        historyLabel: 'History',
        upcoming: { name: 'Gentle yoga', status: 'Confirmed', meta: 'Mon 10:00' },
        history: { name: 'Pilates', meta: 'Last Thu · Attended' },
      },
      abonaments: {
        title: 'Pass',
        pack: '8-class pack',
        status: 'Active',
        meta: '5 classes left · Valid until Nov 30',
      },
      perfil: {
        title: 'Profile',
        nameLabel: 'Name',
        name: 'Maria Soler',
        emailLabel: 'Email',
        email: 'maria@example.com',
        prefsLabel: 'Preferences',
        prefs: 'Email reminders · English',
      },
    },
    dashboard: {
      resum: {
        title: 'Today’s overview',
        lead: 'Mon · 6 confirmed bookings · 2 full classes',
        rows: [
          { time: '10:00 · Gentle yoga', meta: 'Laura · Room A', occupancy: '8/10' },
          { time: '18:30 · Pilates', meta: 'Marc · Room B · Waitlist: 2', occupancy: '10/10' },
        ],
      },
      calendari: {
        title: 'Calendar',
        lead: 'Weekly view of scheduled activities.',
        days: [
          { label: 'Monday', meta: '10:00 Yoga · 18:30 Pilates' },
          { label: 'Tuesday', meta: '09:00 Stretching · 19:00 HIIT' },
        ],
      },
      classes: {
        title: 'Classes',
        lead: 'Create sessions, assign instructors, set capacity.',
        rows: [
          { name: 'Gentle yoga', capacity: 'Capacity 10', meta: 'Laura · Mon 10:00' },
          { name: 'Pilates', capacity: 'Capacity 10', meta: 'Marc · Mon 18:30' },
        ],
      },
      alumnes: {
        title: 'Students',
        lead: 'Profiles and linked bookings.',
        rows: [
          { name: 'Maria Soler', plan: '8-pack', meta: 'Next: Yoga Mon 10:00' },
          { name: 'Jordi Puig', plan: 'Membership', meta: '3 bookings this week' },
        ],
      },
      abonaments: {
        title: 'Passes',
        lead: 'Manage centre packs and memberships.',
        rows: [
          { name: '8-class pack', price: '€120', meta: '12 active students' },
          { name: 'Monthly membership', price: '€65/mo', meta: 'Unlimited bookings · 28 active' },
        ],
      },
    },
  },
  mail: {
    greeting: 'Hi Nina,',
    intro: 'I’m interested in the class management platform proposal. Here is my selection:',
    baseLabel: 'Base software',
    addonsHeading: 'Add-ons',
    addonsNone: 'none selected',
    implementationLabel: 'Estimated implementation',
    maintenanceNone: 'Maintenance: no monthly fee',
    maintenanceLine: 'Maintenance: {title} ({price}/mo)',
    thanks: 'Thanks!',
  },
}

export default en
