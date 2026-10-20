import type { CentreProposalCopy } from './types'

const fr: CentreProposalCopy = {
  meta: { mailSubject: 'Proposition plateforme de gestion de cours' },
  hero: {
    eyebrow: 'Proposition logicielle',
    title: 'Votre centre, avec son propre système.',
    lead:
      'Une plateforme de gestion de cours conçue pour s’adapter au fonctionnement de votre centre.',
    intro:
      'Consultez la proposition, explorez les deux expériences logicielles et configurez les fonctionnalités dont vous avez besoin.',
    ctaExplore: 'Explorer le logiciel',
    ctaBudget: 'Configurer le budget',
  },
  section01: {
    index: '01',
    title: 'Une expérience par profil',
    student: {
      title: 'App élèves',
      lead: 'Un moyen simple de consulter les cours et gérer les réservations depuis le mobile.',
      demoLabel: 'Fonctionnalités de base du mockup :',
      features: [
        { label: 'Horaires', text: 'activités programmées et places disponibles.' },
        { label: 'Réservations', text: 'réserver un cours ou annuler une place.' },
        { label: 'Mes cours', text: 'prochaines réservations et historique.' },
        { label: 'Abonnements', text: 'forfait ou adhésion et cours restants.' },
        { label: 'Profil', text: 'vos données et préférences.' },
      ],
      cta: 'Explorer l’app élèves',
      openFull: 'Ouvrir la démo plein écran',
    },
    dashboard: {
      title: 'Dashboard centre',
      lead:
        'Un espace de gestion pour classes, élèves et réservations au même endroit.',
      demoLabel: 'Fonctionnalités de base du mockup :',
      features: [
        { label: 'Résumé', text: 'réservations et cours du jour.' },
        { label: 'Calendrier', text: 'activités par jour et heure.' },
        { label: 'Cours', text: 'créer des activités, assigner les instructeurs, définir la capacité.' },
        { label: 'Élèves', text: 'profils et leurs réservations.' },
        { label: 'Abonnements', text: 'forfaits et adhésions du centre.' },
      ],
      cta: 'Explorer le dashboard',
      openFull: 'Ouvrir la démo plein écran',
    },
  },
  section02: {
    index: '02',
    title: 'Configurez votre logiciel',
    lead: 'Sélectionnez les fonctionnalités adaptées à votre centre.',
    base: {
      title: 'Logiciel de base',
      subtitle: 'Plateforme de réservation et gestion',
      priceNote: 'implémentation',
      includesLabel: 'Inclut :',
      includes: [
        'Site responsive de réservation.',
        'App élèves adaptée au mobile.',
        'Dashboard de gestion pour le centre.',
        'Calendrier des cours et activités.',
        'Gestion des réservations et annulations.',
        'Gestion de base des élèves.',
        'Configuration cours, instructeurs et capacité.',
      ],
      footnote: 'C’est le point de départ du projet.',
    },
    addonsTitle: 'Fonctionnalités additionnelles',
    addonsLead: 'Sélectionnez les compléments à intégrer :',
    addonsRunningTotal: 'Total des compléments sélectionnés',
    addonIncluded: 'Inclus',
    addons: {
      subscriptions: {
        title: 'Forfaits et adhésions',
        description: 'Gestion des packs de cours et adhésions.',
        detail: 'Modalités, cours restants par élève et validité.',
      },
      waitlist: {
        title: 'Liste d’attente',
        description: 'Quand un cours est complet, inscription en liste d’attente.',
        detail: 'Gérer les places libérées et les personnes en attente.',
      },
      payments: {
        title: 'Paiements en ligne',
        description: 'Paiement pour forfaits et activités depuis la plateforme.',
        detail: 'Budget final selon le prestataire et ses commissions.',
      },
      reminders: {
        title: 'Rappels automatiques',
        description: 'Emails de rappel avant les cours réservés.',
        detail: 'Réduit les absences et les oublis.',
      },
      instructors: {
        title: 'Gestion avancée des instructeurs',
        description: 'Instructeurs, cours assignés et plannings.',
        detail: '',
      },
      analytics: {
        title: 'Statistiques et rapports',
        description: 'Occupation, réservations et activité du centre.',
        detail: 'Vue d’ensemble du fonctionnement des activités.',
      },
    },
  },
  section03: {
    index: '03',
    title: 'Maintenance',
    lead: 'Après l’implémentation, vous pouvez choisir un service de maintenance.',
    maintenanceGroupLabel: 'Maintenance',
    maintenance: {
      none: {
        title: 'Sans maintenance',
        description: 'Pas de quota mensuel.',
        extra: 'Les interventions ultérieures seront chiffrées selon vos besoins.',
      },
      basic: {
        title: 'Maintenance de base',
        description: 'Supervision et support technique de la plateforme.',
        includes: [
          'Supervision basique du fonctionnement.',
          'Correction des bugs du logiciel livré.',
          'Mises à jour techniques mineures.',
          'Support pour les incidents liés à la plateforme.',
        ],
      },
      extended: {
        title: 'Maintenance étendue',
        description: 'Maintenance de base avec priorité et petites améliorations.',
        includes: [
          'Toute la maintenance de base.',
          'Petites améliorations fonctionnelles.',
          'Ajustements mineurs de la plateforme.',
          'Priorité dans la résolution des incidents.',
        ],
        extra: 'Nouvelles fonctionnalités majeures chiffrées à part.',
      },
    },
  },
  section04: {
    index: '04',
    title: 'Votre proposition',
    lead: 'Sélectionnez les fonctionnalités et consultez le budget estimé.',
    rows: {
      base: 'Logiciel de base',
      addons: 'Compléments',
      addonsNone: 'Aucun sélectionné',
      implementation: 'Implémentation',
      maintenance: 'Maintenance',
      maintenanceOptional: 'Quota mensuel optionnel',
    },
    cta: 'Préparer la proposition',
  },
  section05: {
    index: '05',
    title: 'Et ensuite ?',
    paragraphs: [
      'Une fois les fonctionnalités définies, nous préciserons le périmètre et le devis final.',
      'Prochaine étape : valider les écrans, les parcours de réservation et les besoins spécifiques du centre.',
    ],
    notesTitle: 'Notes',
    notes: [
      'Ce budget est indicatif et soumis à la définition finale des fonctionnalités et du périmètre.',
      'Les montants n’incluent pas la TVA ni les frais de services externes (paiement, email, hébergement).',
      'Implémentation, délais et conditions de paiement seront fixés dans la proposition finale.',
    ],
  },
  footer: 'Proposition par Nina Baldó',
  demo: {
    back: '← Retour à la proposition',
    studentBadge: 'Démo · App élèves',
    dashboardBadge: 'Démo · Dashboard centre',
    interactiveLabel: 'Mockup interactif',
    studentTabs: {
      horaris: 'Horaires',
      reserves: 'Réserver',
      meves: 'Mes cours',
      abonaments: 'Forfaits',
      perfil: 'Profil',
    },
    dashTabs: {
      resum: 'Résumé',
      calendari: 'Calendrier',
      classes: 'Cours',
      alumnes: 'Élèves',
      abonaments: 'Abonnements',
    },
    student: {
      labels: {
        spots: '{n} places',
        full: 'Complet',
        book: 'Réserver',
        toastBooked: 'Réservation confirmée',
        toastCancelled: 'Réservation annulée',
        tapHint: 'Essayez de réserver un cours',
        syncHint: 'En direct : l’app élèves et le dashboard centre restent synchronisés.',
      },
      horaris: {
        title: 'Horaires',
        classes: [
          { id: 'yoga', name: 'Yoga doux', meta: 'Lun · 10:00 · Salle A · Laura' },
          { id: 'pilates', name: 'Pilates', meta: 'Lun · 18:30 · Salle B · Marc' },
          { id: 'stretching', name: 'Stretching', meta: 'Mar · 09:00 · Salle A · Anna' },
        ],
      },
      reserves: {
        title: 'Réservation',
        confirm: 'Confirmer la réservation',
        cancel: 'Annuler la place',
      },
      meves: {
        title: 'Mes cours',
        upcomingLabel: 'À venir',
        historyLabel: 'Historique',
        upcoming: { name: 'Yoga doux', status: 'Confirmée', meta: 'Lun 10:00' },
        history: { name: 'Pilates', meta: 'Jeu dernier · Présente' },
      },
      abonaments: {
        title: 'Forfait',
        pack: 'Pack 8 cours',
        status: 'Actif',
        meta: '5 cours restants · Valable jusqu’au 30/11',
      },
      perfil: {
        title: 'Profil',
        nameLabel: 'Nom',
        name: 'Maria Soler',
        emailLabel: 'Email',
        email: 'maria@exemple.fr',
        prefsLabel: 'Préférences',
        prefs: 'Rappels par email · Français',
      },
    },
    dashboard: {
      resum: {
        title: 'Résumé du jour',
        leadTemplate: 'Lun · {bookings} réservations confirmées · {full} cours complets',
        rows: [
          { id: 'yoga', time: '10:00 · Yoga doux', meta: 'Laura · Salle A' },
          { id: 'pilates', time: '18:30 · Pilates', meta: 'Marc · Salle B · Liste d’attente : 2' },
        ],
      },
      calendari: {
        title: 'Calendrier',
        lead: 'Vue hebdomadaire des activités programmées.',
        days: [
          { label: 'Lundi', meta: '10:00 Yoga · 18:30 Pilates' },
          { label: 'Mardi', meta: '09:00 Stretching · 19:00 HIIT' },
        ],
      },
      classes: {
        title: 'Cours',
        lead: 'Créer des activités, assigner les instructeurs, définir la capacité.',
        rows: [
          { name: 'Yoga doux', capacity: 'Capacité 10', meta: 'Laura · Lun 10:00' },
          { name: 'Pilates', capacity: 'Capacité 10', meta: 'Marc · Lun 18:30' },
        ],
      },
      alumnes: {
        title: 'Élèves',
        lead: 'Profils et réservations associées.',
        rows: [
          { name: 'Maria Soler', plan: 'Pack 8', meta: 'Prochain : Yoga lun 10:00' },
          { name: 'Jordi Puig', plan: 'Adhésion', meta: '3 réservations cette semaine' },
        ],
      },
      abonaments: {
        title: 'Abonnements',
        lead: 'Forfaits et adhésions du centre.',
        rows: [
          { name: 'Pack 8 cours', price: '120 €', meta: '12 élèves actifs' },
          { name: 'Adhésion mensuelle', price: '65 €/mois', meta: 'Réservations illimitées · 28 actifs' },
        ],
      },
    },
  },
  mail: {
    greeting: 'Bonjour Nina,',
    intro: 'Je suis intéressé(e) par la proposition de plateforme de gestion de cours. Voici ma sélection :',
    baseLabel: 'Logiciel de base',
    addonsHeading: 'Compléments',
    addonsNone: 'aucun sélectionné',
    implementationLabel: 'Implémentation estimée',
    maintenanceNone: 'Maintenance : sans quota mensuel',
    maintenanceLine: 'Maintenance : {title} ({price}/mois)',
    thanks: 'Merci !',
  },
}

export default fr
