import type { CompanyCalculatorCopy } from '../types'

export const companyCalculatorCa: CompanyCalculatorCopy = {
  eyebrow: 'Eina d\'anàlisi',
  title: 'Calculadora financera d\'empreses',
  subtitle:
    'Explora mètriques clau d\'empreses amb dades públiques de mercat — per aprendre, no com a assessorament d\'inversió.',
  tickerLabel: 'Ticker de l\'empresa',
  tickerPlaceholder: 'NVDA',
  analyze: 'Analitzar',
  analyzing: 'Analitzant…',
  loading: 'Obtenint dades de l\'empresa…',
  notAvailable: '—',
  companyHeaderAria: 'Resum de l\'empresa',
  metricsAria: 'Mètriques financeres',
  latestTradingDay: 'Última sessió',
  sourcesTitle: 'Fonts de dades',
  disclaimer:
    'Aquesta eina és només per a anàlisi educatiu. No ofereix assessorament d\'inversió personalitzat.',
  sources: {
    price: 'Preu — cotització de mercat d\'Alpha Vantage',
    eps: 'BPA — BPA diluït TTM d\'Alpha Vantage',
    roe: 'ROE — rendibilitat sobre capital (TTM) d\'Alpha Vantage',
    pe: 'PER — calculat per Nina\'s Lab (preu ÷ BPA diluït TTM)',
    debtEquity:
      'Deute / Capital — calculat per Nina\'s Lab des del darrer balanç trimestral',
    netDebtEbitda:
      'Deute net / EBITDA — calculat per Nina\'s Lab amb deute net trimestral i EBITDA TTM',
    peg: 'PEG — valor calculat pel proveïdor Alpha Vantage',
  },
  errors: {
    invalidTicker: 'Introdueix un ticker vàlid (lletres, números, punts o guions).',
    rateLimit: 'Límit de peticions del proveïdor assolit. Torna-ho a provar més tard.',
    noData: 'Les dades financeres no estan disponibles per a aquest ticker ara mateix.',
    network: 'No s\'ha pogut contactar amb el servidor. Comprova la connexió i torna-ho a provar.',
    unknown: 'Alguna cosa ha fallat en obtenir les dades de l\'empresa.',
  },
  metrics: {
    eps: {
      label: 'BPA',
      tooltipTitle: 'Benefici per acció',
      tooltipBody: 'Benefici diluït per acció en els darrers dotze mesos (TTM).',
      tooltipPeriod: 'Període: BPA diluït TTM.',
      tooltipSource: 'Font: dades overview d\'Alpha Vantage.',
    },
    pe: {
      label: 'PER',
      tooltipTitle: 'Preu / benefici',
      tooltipBody: 'Preu actual dividit pel benefici diluït TTM per acció.',
      tooltipPeriod: 'Període: trailing (BPA TTM).',
      tooltipSource: 'Font: calculat per Nina\'s Lab.',
    },
    peg: {
      label: 'PEG',
      tooltipTitle: 'Preu / benefici / creixement',
      tooltipBody:
        'Ràtio de valoració que ajusta el PER pel creixement esperat del benefici. Nina\'s Lab mostra el valor del proveïdor tal qual.',
      tooltipPeriod: 'Període: definit pel proveïdor (Alpha Vantage).',
      tooltipSource: 'Font: dades overview d\'Alpha Vantage.',
    },
    roe: {
      label: 'ROE',
      tooltipTitle: 'Rendibilitat sobre capital',
      tooltipBody: 'Eficiència amb què l\'empresa genera benefici a partir del capital propi.',
      tooltipPeriod: 'Període: darrers dotze mesos (TTM).',
      tooltipSource: 'Font: dades overview d\'Alpha Vantage.',
    },
    debtEquity: {
      label: 'Deute / Capital',
      tooltipTitle: 'Deute sobre capital',
      tooltipBody:
        'Deute total dividit pel capital total d\'accionistes del darrer balanç trimestral.',
      tooltipPeriod: 'Data del balanç: {date}.',
      tooltipSource: 'Font: calculat per Nina\'s Lab.',
    },
    netDebtEbitda: {
      label: 'Deute net / EBITDA',
      tooltipTitle: 'Deute net sobre EBITDA',
      tooltipBody:
        'Deute net (deute total menys caixa) dividit per la suma de l\'EBITDA dels darrers quatre trimestres.',
      tooltipPeriod: 'Deute net a {date}; EBITDA sumat en els darrers quatre trimestres.',
      tooltipSource: 'Font: calculat per Nina\'s Lab.',
    },
  },
}
