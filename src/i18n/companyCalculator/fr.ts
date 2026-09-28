import type { CompanyCalculatorCopy } from '../types'

export const companyCalculatorFr: CompanyCalculatorCopy = {
  eyebrow: 'Outil d\'analyse',
  title: 'Calculateur financier d\'entreprise',
  subtitle:
    'Explorez les métriques clés d\'une entreprise à partir de données de marché publiques — pour apprendre, pas comme conseil en investissement.',
  tickerLabel: 'Ticker de l\'entreprise',
  tickerPlaceholder: 'NVDA',
  analyze: 'Analyser',
  analyzing: 'Analyse…',
  loading: 'Récupération des données de l\'entreprise…',
  notAvailable: '—',
  companyHeaderAria: 'Aperçu de l\'entreprise',
  metricsAria: 'Métriques financières',
  latestTradingDay: 'Dernière séance',
  sourcesTitle: 'Sources de données',
  disclaimer:
    'Cet outil est réservé à l\'analyse éducative. Il ne fournit pas de conseil en investissement personnalisé.',
  sources: {
    price: 'Prix — cotation de marché Alpha Vantage',
    eps: 'BPA — BPA dilué TTM Alpha Vantage',
    roe: 'ROE — rentabilité des capitaux propres (TTM) Alpha Vantage',
    pe: 'PER — calculé par Nina\'s Lab (prix ÷ BPA dilué TTM)',
    debtEquity:
      'Dette / Capitaux propres — calculé par Nina\'s Lab à partir du dernier bilan trimestriel',
    netDebtEbitda:
      'Dette nette / EBITDA — calculé par Nina\'s Lab avec dette nette trimestrielle et EBITDA TTM',
    peg: 'PEG — valeur calculée par le fournisseur Alpha Vantage',
  },
  errors: {
    invalidTicker: 'Saisissez un ticker valide (lettres, chiffres, points ou tirets).',
    rateLimit: 'Limite de requêtes du fournisseur atteinte. Réessayez plus tard.',
    noData: 'Les données financières ne sont pas disponibles pour ce ticker pour le moment.',
    network: 'Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.',
    unknown: 'Une erreur s\'est produite lors de la récupération des données.',
  },
  metrics: {
    eps: {
      label: 'BPA',
      tooltipTitle: 'Bénéfice par action',
      tooltipBody: 'Bénéfice dilué par action sur les douze derniers mois (TTM).',
      tooltipPeriod: 'Période : BPA dilué TTM.',
      tooltipSource: 'Source : données overview Alpha Vantage.',
    },
    pe: {
      label: 'PER',
      tooltipTitle: 'Price to earnings',
      tooltipBody: 'Prix actuel divisé par le bénéfice dilué TTM par action.',
      tooltipPeriod: 'Période : trailing (BPA TTM).',
      tooltipSource: 'Source : calculé par Nina\'s Lab.',
    },
    peg: {
      label: 'PEG',
      tooltipTitle: 'Price / earnings to growth',
      tooltipBody:
        'Ratio de valorisation qui ajuste le PER à la croissance attendue des bénéfices. Nina\'s Lab affiche la valeur du fournisseur telle quelle.',
      tooltipPeriod: 'Période : définie par le fournisseur (Alpha Vantage).',
      tooltipSource: 'Source : données overview Alpha Vantage.',
    },
    roe: {
      label: 'ROE',
      tooltipTitle: 'Return on equity',
      tooltipBody: 'Efficacité avec laquelle l\'entreprise génère du profit à partir des capitaux propres.',
      tooltipPeriod: 'Période : douze derniers mois (TTM).',
      tooltipSource: 'Source : données overview Alpha Vantage.',
    },
    debtEquity: {
      label: 'Dette / Capitaux',
      tooltipTitle: 'Dette sur capitaux propres',
      tooltipBody:
        'Dette totale divisée par le total des capitaux propres du dernier bilan trimestriel.',
      tooltipPeriod: 'Date du bilan : {date}.',
      tooltipSource: 'Source : calculé par Nina\'s Lab.',
    },
    netDebtEbitda: {
      label: 'Dette nette / EBITDA',
      tooltipTitle: 'Dette nette sur EBITDA',
      tooltipBody:
        'Dette nette (dette totale moins trésorerie) divisée par la somme de l\'EBITDA des quatre derniers trimestres.',
      tooltipPeriod: 'Dette nette au {date} ; EBITDA sommé sur les quatre derniers trimestres.',
      tooltipSource: 'Source : calculé par Nina\'s Lab.',
    },
  },
}
