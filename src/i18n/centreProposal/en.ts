import { configuratorEn } from './configuratorCopy'
import type { CentreProposalCopy } from './types'

const en: CentreProposalCopy = {
  meta: { mailSubject: 'Class management platform proposal' },
  hero: {
    eyebrow: 'Software proposal',
    title: 'Your studio, with its own system.',
    lead: 'A class management platform designed to fit how your centre actually runs.',
    intro:
      'Review the proposal, explore both software experiences, and configure the features you need. Nina Lab quotes do not include third-party subscriptions or payment processing fees (domain, hosting, Stripe, etc.).',
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
  configurator: configuratorEn,
  section02: {
    index: '02',
    title: 'Configure your budget',
    lead: 'Three steps to define software, features, and maintenance.',
    externalCostsTeaser:
      'Implementation and optional maintenance do not include third-party subscriptions; we can configure them using the centre’s accounts and data.',
    externalCostsLink: 'External costs and what we set up',
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
    addonsRunningTotal: 'Selected add-ons total',
    addonIncluded: 'Included',
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
      webApps: {
        title: 'Web + apps maintenance',
        description: 'Web, backend and apps maintenance.',
        includes: ['Technical incident fixes.'],
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
    intro:
      'Before development starts, we’ll run a definition session to clarify the centre’s needs and validate project scope.',
    steps: [
      'Review selected features and the centre’s priorities.',
      'Define booking, cancellation, and class management flows.',
      'Validate screens and the experience for students and centre staff.',
      'Confirm required integrations, timelines, and payment terms.',
    ],
    closing: [
      'Once this is validated, we’ll prepare the final quote and development schedule.',
      'The project begins after the final proposal is approved and start conditions are agreed.',
    ],
  },
  section06: {
    index: '06',
    title: 'If you stop maintenance or change developer',
    intro:
      'The centre owns the software we build. Whether you choose not to take ongoing maintenance or you later work with another team, the project should stay operational and transferable without depending solely on Nina Lab.',
    context: [
      'Without maintenance: the software keeps running; updates, incidents, and new features can be handled in-house or by another provider.',
      'Changing developer: we hand over the project in an orderly way so a new team can continue development and deployment.',
    ],
    deliverablesTitle: 'What we would deliver',
    deliverables: [
      'Full source code in the centre’s GitHub repository (web, backend, apps, and deployment scripts).',
      'Documentation to install the project, run it locally, and deploy to production.',
      'Environment variable list and a secure handover guide for secrets (no passwords sent by email).',
      'Database access or export, schema, migrations, and backup procedures.',
      'Inventory of external accounts in the centre’s name (domain, hosting, stores, payments, email).',
    ],
    stackTitle: 'Tools and expected stack',
    stackNote:
      'The exact combination is confirmed at project kick-off; delivery includes the definitive list with versions and links.',
    stackItems: [
      { name: 'GitHub', detail: 'Versioned code, history, issues, and admin permissions for the centre.' },
      {
        name: 'React + TypeScript',
        detail: 'Booking web and centre dashboard (e.g. Vite as the build toolchain).',
      },
      {
        name: 'Mobile apps (iOS / Android)',
        detail: 'Student app using an agreed stack (e.g. React Native / Expo or equivalent, documented).',
      },
      {
        name: 'API / backend',
        detail: 'Documented backend service (e.g. Node.js) with booking, student, and management endpoints.',
      },
      {
        name: 'Database',
        detail: 'PostgreSQL or equivalent managed service; schema, migrations, and data under the centre’s account.',
      },
      {
        name: 'Hosting and deployment',
        detail: 'Production web and API (e.g. Vercel or agreed provider) with documented configuration.',
      },
      {
        name: 'Integrations',
        detail: 'Payments, email, reminders, and other services connected to the centre’s accounts.',
      },
    ],
    handoverTitle: 'How handover would work',
    handoverSteps: [
      'Handover session with the centre (and the new team, if you already have one).',
      'GitHub repository transfer and review of admin permissions.',
      'Joint review of deployment, backups, and database restore.',
      'Short support window for technical questions about the handover (duration agreed in the contract).',
    ],
    closing:
      'The goal is that the centre is never “locked in”: the product is yours and should evolve with whichever team you choose.',
  },
  section07: {
    index: '07',
    title: 'External costs (paid by the centre)',
    intro:
      'Beyond development and any optional monthly maintenance with Nina Lab, the centre pays providers directly for the services that keep the platform running in production. These charges are not paid to Nina Lab.',
    disclaimer:
      'Figures below are rough guides only; they vary by provider, country, tax, usage, and plan.',
    setupTitle: 'Not included as a subscription, but we configure it with your accounts',
    setupIntro:
      'Provider fees are not part of Nina Lab’s implementation price, but we can connect and document everything: code integration, environments, deployment, and testing—using centre-owned accounts and data supplied by the centre or its IT admin.',
    setupItems: [
      'Centre GitHub repo, CI/CD, and initial hosting deployment (web and API).',
      'Domain linking and HTTPS (DNS at the centre’s registrar).',
      'Managed database: project, initial schema, migrations, and env vars (dev / production).',
      'Stripe: connection to the centre’s account, test and live modes, webhooks, and agreed flows.',
      'Transactional email: domain verification, DNS, and basic templates if in scope.',
      'Apps (if purchased): builds and App Store / Google Play publishing with the centre’s developer accounts.',
      'Other in-scope integrations (calendars, analytics, AI, etc.) with keys or admin invites from the centre.',
    ],
    setupAccessNote:
      'The centre opens accounts in its name and grants Nina Lab admin access (GitHub, Stripe, hosting, DB invites, etc.). We do not ask for passwords by email; API keys and secrets go in environment variables with secure handover documentation.',
    groups: [
      {
        title: 'Domain and hosting',
        items: [
          {
            name: 'Web domain',
            note: 'Periodic fee to the registrar (e.g. yearly). Required for the public URL.',
          },
          {
            name: 'Web and API hosting',
            note: 'Monthly fee by traffic and resources (e.g. Vercel). Free tiers exist but production often has a cost.',
          },
          { name: 'HTTPS', note: 'Usually included when the domain is linked to hosting.' },
        ],
      },
      {
        title: 'Database',
        items: [
          {
            name: 'Managed PostgreSQL (Supabase, Neon, etc.)',
            note: 'Account in the centre’s name. Free tier possible; monthly cost as data and usage grow.',
          },
        ],
      },
      {
        title: 'Online payments',
        items: [
          {
            name: 'Stripe (centre’s account)',
            note: 'Fee per successful transaction (percentage + fixed). Charged by Stripe, not Nina Lab. Payouts to the centre’s bank.',
          },
        ],
      },
      {
        title: 'Email and notifications',
        items: [
          {
            name: 'Transactional email',
            note: 'Resend, Postmark, SendGrid, etc.: priced by volume. Domain DNS setup required.',
          },
          { name: 'SMS (optional)', note: 'Per-message cost if the centre wants SMS reminders.' },
        ],
      },
      {
        title: 'App stores (if included)',
        items: [
          { name: 'Apple Developer Program', note: 'Approx. USD 99/year — centre-owned developer account.' },
          { name: 'Google Play Console', note: 'Approx. USD 25 one-time — centre-owned account.' },
        ],
      },
      {
        title: 'Optional',
        items: [
          { name: 'AI (API)', note: 'Usage-based billing if AI features are integrated.' },
          { name: 'Other integrations', note: 'Calendars, analytics, marketing tools, as agreed in scope.' },
        ],
      },
    ],
    maintenanceNote:
      'Optional Nina Lab maintenance covers software we built: incidents, agreed technical updates, etc. It does not pay domain, hosting, database, Stripe, email, store, or other third-party bills.',
    closing:
      'We recommend opening these accounts in the centre’s name from the start and stating them in the contract, to avoid surprises and simplify handover.',
  },
  footer: 'Proposal by Nina Baldó',
  demo: {
    back: '← Back to proposal',
    studentBadge: 'Demo · Student app',
    dashboardBadge: 'Demo · Centre dashboard',
    interactiveLabel: 'Interactive mockup',
    disclaimer:
      'This is only an interactive example. The platform can be tailored to your centre’s needs and enabled with just the components you want.',
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
      labels: {
        spots: '{n} spots',
        full: 'Full',
        book: 'Book',
        toastBooked: 'Booking confirmed',
        toastCancelled: 'Booking cancelled',
        tapHint: 'Try booking a class',
        syncHint: 'Live: the student app and centre dashboard stay in sync.',
      },
      horaris: {
        title: 'Schedule',
        viewWeek: 'Week',
        viewMonth: 'Month',
        classes: [
          { id: 'yoga', name: 'Gentle yoga', meta: 'Mon · 10:00 · Room A · Laura' },
          { id: 'pilates', name: 'Pilates', meta: 'Mon · 18:30 · Room B · Marc' },
          { id: 'stretching', name: 'Stretching', meta: 'Tue · 09:00 · Room A · Anna' },
        ],
      },
      reserves: {
        title: 'Booking',
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
        leadTemplate: 'Mon · {bookings} confirmed bookings · {full} full classes',
        kpis: [
          {
            id: 'revenue',
            label: 'Collections (Oct)',
            value: '€4,280',
            hint: '+12% vs last month',
          },
          {
            id: 'activeStudents',
            label: 'Active students',
            value: '212',
            hint: '34 on membership',
          },
          {
            id: 'bookingsToday',
            label: 'Bookings today',
            value: '{n}',
            hint: 'Confirmed on calendar',
          },
          {
            id: 'occupancy',
            label: 'Avg. occupancy',
            value: '78%',
            hint: 'This week',
          },
        ],
        chartsTitle: 'Revenue',
        charts: {
          monthlyTitle: 'Monthly revenue',
          annualTitle: 'Annual revenue',
          monthly: [
            { label: 'May', valueLabel: '€3.2k', amount: 3200 },
            { label: 'Jun', valueLabel: '€3.4k', amount: 3400 },
            { label: 'Jul', valueLabel: '€3.6k', amount: 3600 },
            { label: 'Aug', valueLabel: '€3.9k', amount: 3900 },
            { label: 'Sep', valueLabel: '€4.1k', amount: 4100 },
            { label: 'Oct', valueLabel: '€4.3k', amount: 4280, highlight: true },
          ],
          annual: [
            { label: '2022', valueLabel: '€38k', amount: 38000 },
            { label: '2023', valueLabel: '€44k', amount: 44000 },
            { label: '2024', valueLabel: '€47k', amount: 47000 },
            { label: '2025', valueLabel: '€42k', amount: 42000, highlight: true },
          ],
        },
        paymentsTitle: 'Recent payments',
        payments: [
          {
            label: 'Monthly membership',
            amount: '€65',
            meta: 'Maria Soler · Paid today',
            tone: 'ok',
          },
          {
            label: '8-class pack',
            amount: '€120',
            meta: 'Jordi Puig · Paid yesterday',
            tone: 'ok',
          },
          {
            label: 'Pilates (drop-in)',
            amount: '€18',
            meta: 'Pending · Link sent',
            tone: 'pending',
          },
        ],
        scheduleTitle: 'Today’s classes',
        rows: [
          { id: 'yoga', time: '10:00 · Gentle yoga', meta: 'Laura · Room A' },
          { id: 'pilates', time: '18:30 · Pilates', meta: 'Marc · Room B · Waitlist: 2' },
        ],
      },
      calendari: {
        title: 'Calendar',
        lead: 'Switch between week and month to see scheduled activities.',
        viewWeek: 'Week',
        viewMonth: 'Month',
        days: [
          { label: 'Monday', meta: '10:00 Yoga · 18:30 Pilates' },
          { label: 'Tuesday', meta: '09:00 Stretching · 19:00 HIIT' },
          { label: 'Wednesday', meta: '10:00 Spin · 17:00 Gentle yoga' },
          { label: 'Thursday', meta: '09:00 Stretching · 19:00 HIIT' },
          { label: 'Friday', meta: '08:30 Morning pilates' },
          { label: 'Saturday', meta: '11:00 Family yoga' },
        ],
      },
      classes: {
        title: 'Classes',
        lead: 'Occupancy per session and key stats for each class.',
        studentsLabel: 'students',
        rows: [
          {
            id: 'yoga',
            name: 'Gentle yoga',
            capacity: '10',
            meta: 'Laura · Mon 10:00 · Weekly avg. 82%',
          },
          {
            id: 'pilates',
            name: 'Pilates',
            capacity: '10',
            meta: 'Marc · Mon 18:30 · Waitlist active',
          },
          {
            id: 'stretching',
            name: 'Stretching',
            capacity: '12',
            meta: 'Anna · Tue & Thu 09:00 · Room A',
          },
          {
            id: 'hiit',
            name: 'HIIT',
            capacity: '16',
            meta: 'Oriol · Tue & Thu 19:00 · High demand',
          },
          {
            id: 'spin',
            name: 'Indoor cycling',
            capacity: '14',
            meta: 'Paula · Wed 10:00 · 11 signed up today',
          },
          {
            id: 'barre',
            name: 'Barre',
            capacity: '10',
            meta: 'Sílvia · Thu 11:00 · New slot',
          },
          {
            id: 'meditation',
            name: 'Guided meditation',
            capacity: '8',
            meta: 'Gerard · Fri 20:00 · Small groups',
          },
          {
            id: 'familia',
            name: 'Family yoga',
            capacity: '12',
            meta: 'Laura · Sat 11:00 · All levels',
          },
        ],
      },
      alumnes: {
        title: 'Students',
        lead: 'Centre database: search, profiles, and recent activity.',
        searchPlaceholder: 'Search by name or email…',
        countTemplate: '{n} students on file',
        columns: {
          name: 'Name',
          email: 'Email',
          plan: 'Plan',
          status: 'Status',
          activity: 'Activity',
        },
        rows: [
          {
            id: 'maria',
            name: 'Maria Soler',
            email: 'maria@example.com',
            plan: '8-pack',
            status: 'active',
            statusLabel: 'Active',
            activity: 'Next: Yoga Mon 10:00',
          },
          {
            id: 'jordi',
            name: 'Jordi Puig',
            email: 'jordi@example.com',
            plan: 'Membership',
            status: 'active',
            statusLabel: 'Active',
            activity: '3 bookings this week',
          },
          {
            id: 'laura',
            name: 'Laura Costa',
            email: 'laura@example.com',
            plan: 'Drop-in',
            status: 'pending',
            statusLabel: 'Pending',
            activity: 'Pilates session payment',
          },
          {
            id: 'anna',
            name: 'Anna Ruiz',
            email: 'anna@example.com',
            plan: '8-pack',
            status: 'active',
            statusLabel: 'Active',
            activity: 'Stretching Tue 09:00',
          },
          {
            id: 'marc',
            name: 'Marc Vidal',
            email: 'marc@example.com',
            plan: 'Membership',
            status: 'active',
            statusLabel: 'Active',
            activity: 'Pilates Mon 18:30',
          },
          {
            id: 'paula',
            name: 'Paula Mestres',
            email: 'paula@example.com',
            plan: '12-pack',
            status: 'active',
            statusLabel: 'Active',
            activity: 'Spin Wed 10:00',
          },
          {
            id: 'oriol',
            name: 'Oriol Casals',
            email: 'oriol@example.com',
            plan: 'Membership',
            status: 'active',
            statusLabel: 'Active',
            activity: 'HIIT Tue 19:00',
          },
          {
            id: 'silvia',
            name: 'Sílvia Navarro',
            email: 'silvia@example.com',
            plan: '10-session pass',
            status: 'active',
            statusLabel: 'Active',
            activity: 'Barre Thu 11:00',
          },
          {
            id: 'gerard',
            name: 'Gerard Ferrer',
            email: 'gerard@example.com',
            plan: 'Drop-in',
            status: 'pending',
            statusLabel: 'Pending',
            activity: 'Meditation · payment pending',
          },
          {
            id: 'nuria',
            name: 'Núria Bosch',
            email: 'nuria@example.com',
            plan: 'Quarterly',
            status: 'active',
            statusLabel: 'Active',
            activity: 'Family yoga Sat',
          },
          {
            id: 'clara',
            name: 'Clara Domènech',
            email: 'clara@example.com',
            plan: '8-pack',
            status: 'active',
            statusLabel: 'Active',
            activity: '2 bookings this week',
          },
        ],
      },
      abonaments: {
        title: 'Passes',
        lead: 'Manage centre packs and memberships.',
        rows: [
          { name: '8-class pack', price: '€120', meta: '18 active students' },
          { name: '12-class pack', price: '€165', meta: '14 active students' },
          { name: 'Monthly membership', price: '€65/mo', meta: 'Unlimited bookings · 34 active' },
          { name: 'Quarterly membership', price: '€175/qtr', meta: '10% off · 22 active' },
          { name: '10-session pass', price: '€95', meta: 'No expiry · 9 active' },
          { name: 'Single session', price: '€18', meta: 'Drop-in · avg. 40/week' },
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
