import type { CentreProposalConfiguratorCopy } from './types'

const maintenanceCa: CentreProposalConfiguratorCopy['maintenance'] = {
  none: {
    title: 'Sense manteniment',
    description: 'Les intervencions posteriors es pressuposten a part.',
  },
  basic: {
    title: 'Manteniment bàsic',
    description: '60 €/mes per a la web.',
    includes: ['Actualitzacions tècniques.', 'Còpies de seguretat.', 'Incidències menors.'],
  },
  webApps: {
    title: 'Manteniment web + apps',
    description: '120 €/mes.',
    includes: ['Manteniment de web, backend i apps.', 'Correcció d’incidències tècniques.'],
  },
  extended: {
    title: 'Manteniment ampliat',
    description: '180 €/mes.',
    includes: [
      'Tot el manteniment web + apps.',
      'Petites millores de funcionalitat.',
      'Prioritat d’atenció.',
    ],
  },
}

export const configuratorCa: CentreProposalConfiguratorCopy = {
  progress: { software: 'Software', customize: 'Personalitza', maintenance: 'Manteniment' },
  nav: { back: 'Enrere', continue: 'Continuar' },
  step1: {
    title: 'Escull el teu software',
    lead: 'Tria el punt de partida que millor encaixi amb el teu centre. Pots personalitzar funcionalitats al pas següent.',
    priceNote: 'implementació',
    timelineLabel: 'Termini estimat:',
    seeIncludes: 'Veure què inclou',
    closeIncludes: 'Tancar',
    storeExcludedNote:
      'La publicació a App Store i Google Play no està inclosa en aquests preus de desenvolupament.',
    timelineDisclaimer: [
      'Els terminis són estimacions de desenvolupament a partir de la validació de l’abast i l’inici del projecte. Poden variar segons les funcionalitats seleccionades, la complexitat de les integracions i el temps necessari per validar les diferents fases del projecte.',
      'En les opcions amb app, el temps de revisió i aprovació per part d’Apple i Google és extern al desenvolupament i pot ampliar el termini de publicació.',
    ],
  },
  software: {
    web: {
      title: 'Web de reserves',
      tagline: 'Plataforma al navegador, sense instal·lar cap app.',
      timeline: '3–5 setmanes',
      highlights: [
        'Calendari i reserves en línia',
        'Dashboard bàsic de gestió',
        'Alumnes, classes i aforaments',
      ],
      includes: [
        'Web responsive de reserves.',
        'Calendari de classes.',
        'Reserves i cancel·lacions.',
        'Dashboard bàsic de gestió.',
        'Gestió d’alumnes i instructors.',
        'Configuració de classes i aforaments.',
      ],
    },
    webApp: {
      title: 'Web + app',
      tagline: 'La web de reserves més una app instal·lable per als alumnes.',
      timeline: '6–9 setmanes',
      highlights: [
        'Tot el software web',
        'App iOS i Android per alumnes',
        'Experiència mòbil per a l’ús diari',
      ],
      includes: [
        'Tot el software de l’opció Web de reserves.',
        'App per als alumnes (iOS i Android).',
        'Experiència mòbil adaptada a l’ús recurrent.',
        'Publicació a stores disponible com a servei addicional (pas 2).',
      ],
    },
    full: {
      title: 'Plataforma completa',
      tagline: 'Solució ampliada per centres amb més necessitats de gestió.',
      timeline: '9–14 setmanes',
      highlights: [
        'Web, app i dashboard ampliat',
        'Abonaments, pagaments i llista d’espera',
        'Automatitzacions i instructors',
      ],
      includes: [
        'Web de reserves i app per als alumnes.',
        'Dashboard de gestió ampliat.',
        'Abonaments i packs.',
        'Llista d’espera.',
        'Pagaments online.',
        'Recordatoris automàtics.',
        'Gestió avançada d’instructors.',
      ],
    },
  },
  step2: {
    title: 'Personalitza la proposta',
    lead: 'Activa només les funcionalitats addicionals que encara no inclou l’opció escollida.',
    groups: {
      students: 'Experiència dels alumnes',
      management: 'Gestió del centre',
      automation: 'Automatitzacions',
    },
    includedBadge: 'Inclòs',
    addLabel: 'Afegir',
    removeLabel: 'Treure',
    storePublishing: {
      title: 'Publicació a App Store i Google Play',
      description:
        'Preparació de recursos, fitxes de les apps i enviament a revisió de les stores.',
      offNote:
        'El desenvolupament de l’app continua inclòs; sense aquest servei no es prepara ni es publica a les stores.',
    },
  },
  step3: {
    title: 'Manteniment',
    lead: 'Quota mensual separada de la implementació. Tria la modalitat que prefereixis.',
  },
  maintenance: maintenanceCa,
  summary: {
    title: 'Resum',
    software: 'Software',
    addons: 'Funcionalitats addicionals',
    addonsNone: 'Cap addicional',
    storePublishing: 'Publicació a stores',
    storePublishingOff: 'No seleccionada',
    implementation: 'Total implementació',
    maintenance: 'Manteniment mensual',
    maintenanceNone: 'Sense quota',
    breakdownToggle: 'Veure desglossament',
    storeFeesTitle: 'Tarifes externes de les stores',
    storeFeesApple: 'Apple Developer: 99 USD/any',
    storeFeesGoogle: 'Google Play: 25 USD (pagament únic)',
    storeFeesNote:
      'Imports dels comptes de desenvolupador; no formen part del servei de Nina Lab. Poden variar segons moneda, impostos i condicions dels proveïdors.',
    mobileCta: 'Veure proposta',
  },
  proposal: {
    title: 'El teu software, configurat per al teu centre.',
    readyLead: 'Aquesta és la selecció configurada per al centre:',
    prepareCta: 'Preparar proposta',
    copyCta: 'Copiar al porta-retalls',
    copied: 'Copiat',
    editCta: 'Modificar configuració',
    copyError: 'No s’ha pogut copiar. Selecciona el text manualment.',
  },
}

export const configuratorEn: CentreProposalConfiguratorCopy = {
  progress: { software: 'Software', customize: 'Customize', maintenance: 'Maintenance' },
  nav: { back: 'Back', continue: 'Continue' },
  step1: {
    title: 'Choose your software',
    lead: 'Pick the starting point that fits your centre. You can customize features in the next step.',
    priceNote: 'implementation',
    timelineLabel: 'Estimated timeline:',
    seeIncludes: 'See what’s included',
    closeIncludes: 'Close',
    storeExcludedNote:
      'App Store and Google Play publishing is not included in these development prices.',
    timelineDisclaimer: [
      'Timelines are development estimates from scope validation and project kick-off. They may vary with selected features, integration complexity, and time needed to validate each project phase.',
      'For app options, Apple and Google review and approval times are outside development and may extend the publication timeline.',
    ],
  },
  software: {
    web: {
      title: 'Booking website',
      tagline: 'Browser-based platform—no app install required.',
      timeline: '3–5 weeks',
      highlights: ['Online calendar and bookings', 'Basic management dashboard', 'Students, classes, capacity'],
      includes: [
        'Responsive booking website.',
        'Class calendar.',
        'Bookings and cancellations.',
        'Basic management dashboard.',
        'Student and instructor management.',
        'Classes and capacity setup.',
      ],
    },
    webApp: {
      title: 'Web + app',
      tagline: 'The booking website plus an installable student app.',
      timeline: '6–9 weeks',
      highlights: ['Full web software', 'iOS & Android student app', 'Mobile-first daily use'],
      includes: [
        'Everything in the booking website option.',
        'Student app (iOS and Android).',
        'Mobile experience for recurring use.',
        'Store publishing available as an add-on (step 2).',
      ],
    },
    full: {
      title: 'Full platform',
      tagline: 'Expanded solution for centres with broader management needs.',
      timeline: '9–14 weeks',
      highlights: ['Web, app & extended dashboard', 'Passes, payments & waitlist', 'Automations & instructors'],
      includes: [
        'Booking website and student app.',
        'Extended management dashboard.',
        'Passes and memberships.',
        'Waitlist.',
        'Online payments.',
        'Automatic reminders.',
        'Advanced instructor management.',
      ],
    },
  },
  step2: {
    title: 'Customize your proposal',
    lead: 'Enable only add-ons not already included in your chosen option.',
    groups: {
      students: 'Student experience',
      management: 'Centre management',
      automation: 'Automations',
    },
    includedBadge: 'Included',
    addLabel: 'Add',
    removeLabel: 'Remove',
    storePublishing: {
      title: 'App Store & Google Play publishing',
      description: 'Asset prep, store listings, and submission for review.',
      offNote:
        'App development stays included; without this service, store prep and publishing are not covered.',
    },
  },
  step3: {
    title: 'Maintenance',
    lead: 'Monthly fee separate from implementation. Choose one plan.',
  },
  maintenance: {
    none: { title: 'No maintenance', description: 'Later work is quoted separately.' },
    basic: {
      title: 'Basic maintenance',
      description: '€60/mo for the website.',
      includes: ['Technical updates.', 'Backups.', 'Minor incidents.'],
    },
    webApps: {
      title: 'Web + apps maintenance',
      description: '€120/mo.',
      includes: ['Web, backend and apps maintenance.', 'Technical incident fixes.'],
    },
    extended: {
      title: 'Extended maintenance',
      description: '€180/mo.',
      includes: ['Everything in web + apps.', 'Small feature improvements.', 'Priority support.'],
    },
  },
  summary: {
    title: 'Summary',
    software: 'Software',
    addons: 'Add-on features',
    addonsNone: 'None',
    storePublishing: 'Store publishing',
    storePublishingOff: 'Not selected',
    implementation: 'Implementation total',
    maintenance: 'Monthly maintenance',
    maintenanceNone: 'No monthly fee',
    breakdownToggle: 'View breakdown',
    storeFeesTitle: 'External store fees',
    storeFeesApple: 'Apple Developer: USD 99/year',
    storeFeesGoogle: 'Google Play: USD 25 one-time',
    storeFeesNote:
      'Developer account fees; not part of Nina Lab’s service. May vary by currency, tax, and provider terms.',
    mobileCta: 'View proposal',
  },
  proposal: {
    title: 'Your software, configured for your centre.',
    readyLead: 'Configured selection for the centre:',
    prepareCta: 'Prepare proposal',
    copyCta: 'Copy to clipboard',
    copied: 'Copied',
    editCta: 'Edit configuration',
    copyError: 'Could not copy. Please select the text manually.',
  },
}

export const configuratorEs: CentreProposalConfiguratorCopy = {
  ...configuratorCa,
  progress: { software: 'Software', customize: 'Personaliza', maintenance: 'Mantenimiento' },
  nav: { back: 'Atrás', continue: 'Continuar' },
  step1: {
    ...configuratorCa.step1,
    title: 'Elige tu software',
    lead: 'Elige el punto de partida que mejor encaje con tu centro. Personaliza en el siguiente paso.',
    timelineLabel: 'Plazo estimado:',
    seeIncludes: 'Ver qué incluye',
    closeIncludes: 'Cerrar',
    storeExcludedNote:
      'La publicación en App Store y Google Play no está incluida en estos precios de desarrollo.',
    timelineDisclaimer: [
      'Los plazos son estimaciones de desarrollo a partir de la validación del alcance y el inicio del proyecto. Pueden variar según las funcionalidades seleccionadas, la complejidad de las integraciones y el tiempo necesario para validar las distintas fases.',
      'En las opciones con app, el tiempo de revisión y aprobación de Apple y Google es externo al desarrollo y puede ampliar el plazo de publicación.',
    ],
  },
  software: {
    web: {
      title: 'Web de reservas',
      tagline: 'Plataforma en el navegador, sin instalar app.',
      timeline: '3–5 semanas',
      highlights: ['Calendario y reservas online', 'Dashboard básico', 'Alumnos, clases y aforo'],
      includes: configuratorCa.software.web.includes,
    },
    webApp: {
      title: 'Web + app',
      tagline: 'La web de reservas más una app instalable para alumnos.',
      timeline: '6–9 semanas',
      highlights: ['Todo el software web', 'App iOS y Android', 'Experiencia móvil diaria'],
      includes: configuratorCa.software.webApp.includes,
    },
    full: {
      title: 'Plataforma completa',
      tagline: 'Solución ampliada para centros con más necesidades.',
      timeline: '9–14 semanas',
      highlights: ['Web, app y dashboard ampliado', 'Abonos, pagos y lista de espera', 'Automatizaciones'],
      includes: configuratorCa.software.full.includes,
    },
  },
  step2: {
    ...configuratorCa.step2,
    title: 'Personaliza la propuesta',
    lead: 'Activa solo las funcionalidades que aún no incluye la opción elegida.',
    groups: {
      students: 'Experiencia de los alumnos',
      management: 'Gestión del centro',
      automation: 'Automatizaciones',
    },
    addLabel: 'Añadir',
    removeLabel: 'Quitar',
    storePublishing: {
      title: 'Publicación en App Store y Google Play',
      description: 'Preparación de recursos, fichas y envío a revisión.',
      offNote:
        'El desarrollo de la app sigue incluido; sin este servicio no se prepara ni publica en las stores.',
    },
  },
  step3: { title: 'Mantenimiento', lead: 'Cuota mensual separada de la implementación.' },
  maintenance: {
    none: { title: 'Sin mantenimiento', description: 'Las intervenciones posteriores se presupuestan aparte.' },
    basic: {
      title: 'Mantenimiento básico',
      description: '60 €/mes para la web.',
      includes: ['Actualizaciones técnicas.', 'Copias de seguridad.', 'Incidencias menores.'],
    },
    webApps: {
      title: 'Mantenimiento web + apps',
      description: '120 €/mes.',
      includes: ['Mantenimiento de web, backend y apps.', 'Corrección de incidencias.'],
    },
    extended: {
      title: 'Mantenimiento ampliado',
      description: '180 €/mes.',
      includes: ['Todo el mantenimiento web + apps.', 'Pequeñas mejoras.', 'Prioridad de atención.'],
    },
  },
  summary: {
    ...configuratorCa.summary,
    addons: 'Funcionalidades adicionales',
    addonsNone: 'Ninguna',
    storePublishingOff: 'No seleccionada',
    implementation: 'Total implementación',
    maintenance: 'Mantenimiento mensual',
    maintenanceNone: 'Sin cuota',
    breakdownToggle: 'Ver desglose',
    storeFeesTitle: 'Tarifas externas de las stores',
    storeFeesNote:
      'Cuentas de desarrollador; no forman parte del servicio. Pueden variar según moneda e impuestos.',
    mobileCta: 'Ver propuesta',
  },
  proposal: {
    title: 'Tu software, configurado para tu centro.',
    readyLead: 'Selección configurada para el centro:',
    prepareCta: 'Preparar propuesta',
    copyCta: 'Copiar al portapapeles',
    copied: 'Copiado',
    editCta: 'Modificar configuración',
    copyError: 'No se pudo copiar. Selecciona el texto manualmente.',
  },
}

export const configuratorFr: CentreProposalConfiguratorCopy = {
  ...configuratorEn,
  progress: { software: 'Logiciel', customize: 'Personnaliser', maintenance: 'Maintenance' },
  nav: { back: 'Retour', continue: 'Continuer' },
  step1: {
    ...configuratorEn.step1,
    title: 'Choisissez votre logiciel',
    lead: 'Choisissez le point de départ adapté à votre centre. Personnalisez à l’étape suivante.',
    timelineLabel: 'Délai estimé :',
    seeIncludes: 'Voir le détail',
    closeIncludes: 'Fermer',
    storeExcludedNote:
      'La publication App Store et Google Play n’est pas incluse dans ces prix de développement.',
    timelineDisclaimer: [
      'Les délais sont des estimations de développement à partir de la validation du périmètre et du démarrage du projet. Ils peuvent varier selon les fonctionnalités, la complexité des intégrations et le temps de validation des phases.',
      'Pour les options avec app, les délais de revue Apple et Google sont externes au développement et peuvent prolonger la publication.',
    ],
  },
  software: {
    web: {
      title: 'Site de réservation',
      tagline: 'Plateforme navigateur, sans installation.',
      timeline: '3–5 semaines',
      highlights: ['Calendrier et réservations', 'Dashboard de base', 'Élèves, cours, capacité'],
      includes: configuratorEn.software.web.includes,
    },
    webApp: {
      title: 'Web + app',
      tagline: 'Le site plus une app installable pour les élèves.',
      timeline: '6–9 semaines',
      highlights: ['Logiciel web complet', 'App iOS et Android', 'Usage mobile quotidien'],
      includes: configuratorEn.software.webApp.includes,
    },
    full: {
      title: 'Plateforme complète',
      tagline: 'Solution étendue pour les centres exigeants.',
      timeline: '9–14 semaines',
      highlights: ['Web, app et dashboard étendu', 'Abonnements, paiements, liste d’attente', 'Automatisations'],
      includes: configuratorEn.software.full.includes,
    },
  },
  step2: {
    ...configuratorEn.step2,
    title: 'Personnalisez la proposition',
    groups: {
      students: 'Expérience des élèves',
      management: 'Gestion du centre',
      automation: 'Automatisations',
    },
    includedBadge: 'Inclus',
    addLabel: 'Ajouter',
    removeLabel: 'Retirer',
    storePublishing: {
      title: 'Publication App Store et Google Play',
      description: 'Préparation des assets, fiches et soumission en revue.',
      offNote:
        'Le développement de l’app reste inclus ; sans ce service, pas de préparation ni publication.',
    },
  },
  step3: { title: 'Maintenance', lead: 'Forfait mensuel séparé de l’implémentation.' },
  maintenance: {
    none: { title: 'Sans maintenance', description: 'Interventions ultérieures sur devis.' },
    basic: {
      title: 'Maintenance de base',
      description: '60 €/mois pour le site.',
      includes: ['Mises à jour techniques.', 'Sauvegardes.', 'Incidents mineurs.'],
    },
    webApps: {
      title: 'Maintenance web + apps',
      description: '120 €/mois.',
      includes: ['Maintenance web, backend et apps.', 'Correction d’incidents.'],
    },
    extended: {
      title: 'Maintenance étendue',
      description: '180 €/mois.',
      includes: ['Tout le pack web + apps.', 'Petites évolutions.', 'Priorité support.'],
    },
  },
  summary: {
    ...configuratorEn.summary,
    addons: 'Fonctionnalités additionnelles',
    addonsNone: 'Aucune',
    storePublishingOff: 'Non sélectionnée',
    implementation: 'Total implémentation',
    maintenance: 'Maintenance mensuelle',
    maintenanceNone: 'Sans forfait',
    breakdownToggle: 'Voir le détail',
    storeFeesTitle: 'Frais externes des stores',
    storeFeesNote:
      'Comptes développeur ; hors prestation Nina Lab. Variables selon devise et taxes.',
    mobileCta: 'Voir la proposition',
  },
  proposal: {
    title: 'Votre logiciel, configuré pour votre centre.',
    readyLead: 'Sélection configurée :',
    prepareCta: 'Préparer la proposition',
    copyCta: 'Copier dans le presse-papiers',
    copied: 'Copié',
    editCta: 'Modifier la configuration',
    copyError: 'Copie impossible. Sélectionnez le texte manuellement.',
  },
}

export const configuratorIt: CentreProposalConfiguratorCopy = {
  ...configuratorEn,
  progress: { software: 'Software', customize: 'Personalizza', maintenance: 'Manutenzione' },
  nav: { back: 'Indietro', continue: 'Continua' },
  step1: {
    ...configuratorEn.step1,
    title: 'Scegli il software',
    lead: 'Scegli il punto di partenza per il tuo centro. Personalizza al passo successivo.',
    timelineLabel: 'Tempo stimato:',
    seeIncludes: 'Cosa include',
    closeIncludes: 'Chiudi',
    storeExcludedNote:
      'La pubblicazione su App Store e Google Play non è inclusa in questi prezzi di sviluppo.',
    timelineDisclaimer: [
      'I tempi sono stime di sviluppo dalla validazione del perimetro e dall’avvio del progetto. Possono variare in base alle funzionalità, alle integrazioni e al tempo per validare le fasi.',
      'Per le opzioni con app, i tempi di revisione Apple e Google sono esterni allo sviluppo e possono allungare la pubblicazione.',
    ],
  },
  software: {
    web: {
      title: 'Sito prenotazioni',
      tagline: 'Piattaforma browser, senza installare app.',
      timeline: '3–5 settimane',
      highlights: ['Calendario e prenotazioni', 'Dashboard base', 'Allievi, corsi, capienza'],
      includes: configuratorEn.software.web.includes,
    },
    webApp: {
      title: 'Web + app',
      tagline: 'Il sito più un’app installabile per gli allievi.',
      timeline: '6–9 settimane',
      highlights: ['Software web completo', 'App iOS e Android', 'Uso mobile quotidiano'],
      includes: configuratorEn.software.webApp.includes,
    },
    full: {
      title: 'Piattaforma completa',
      tagline: 'Soluzione ampliata per centri con più esigenze.',
      timeline: '9–14 settimane',
      highlights: ['Web, app e dashboard esteso', 'Abbonamenti, pagamenti, lista d’attesa', 'Automazioni'],
      includes: configuratorEn.software.full.includes,
    },
  },
  step2: {
    ...configuratorEn.step2,
    title: 'Personalizza la proposta',
    groups: {
      students: 'Esperienza allievi',
      management: 'Gestione centro',
      automation: 'Automazioni',
    },
    includedBadge: 'Incluso',
    addLabel: 'Aggiungi',
    removeLabel: 'Rimuovi',
    storePublishing: {
      title: 'Pubblicazione App Store e Google Play',
      description: 'Preparazione asset, schede store e invio in revisione.',
      offNote:
        'Lo sviluppo dell’app resta incluso; senza questo servizio niente preparazione né pubblicazione.',
    },
  },
  step3: { title: 'Manutenzione', lead: 'Quota mensile separata dall’implementazione.' },
  maintenance: {
    none: { title: 'Senza manutenzione', description: 'Interventi successivi su preventivo.' },
    basic: {
      title: 'Manutenzione base',
      description: '60 €/mese per il sito.',
      includes: ['Aggiornamenti tecnici.', 'Backup.', 'Incidenti minori.'],
    },
    webApps: {
      title: 'Manutenzione web + app',
      description: '120 €/mese.',
      includes: ['Manutenzione web, backend e app.', 'Correzione incidenti.'],
    },
    extended: {
      title: 'Manutenzione estesa',
      description: '180 €/mese.',
      includes: ['Tutto web + app.', 'Piccoli miglioramenti.', 'Priorità supporto.'],
    },
  },
  summary: {
    ...configuratorEn.summary,
    addons: 'Funzionalità aggiuntive',
    addonsNone: 'Nessuna',
    storePublishingOff: 'Non selezionata',
    implementation: 'Totale implementazione',
    maintenance: 'Manutenzione mensile',
    maintenanceNone: 'Nessuna quota',
    breakdownToggle: 'Vedi dettaglio',
    storeFeesTitle: 'Tariffe esterne store',
    storeFeesNote:
      'Account sviluppatore; non parte del servizio Nina Lab. Possono variare per valuta e tasse.',
    mobileCta: 'Vedi proposta',
  },
  proposal: {
    title: 'Il tuo software, configurato per il tuo centro.',
    readyLead: 'Selezione configurata:',
    prepareCta: 'Preparare proposta',
    copyCta: 'Copia negli appunti',
    copied: 'Copiato',
    editCta: 'Modifica configurazione',
    copyError: 'Impossibile copiare. Seleziona il testo manualmente.',
  },
}
