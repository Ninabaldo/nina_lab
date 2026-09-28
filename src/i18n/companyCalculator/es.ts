import type { CompanyCalculatorCopy } from '../types'

export const companyCalculatorEs: CompanyCalculatorCopy = {
  eyebrow: 'Herramienta de análisis',
  title: 'Calculadora financiera de empresas',
  subtitle:
    'Explora métricas clave de empresas con datos públicos de mercado — para aprender, no como asesoramiento de inversión.',
  tickerLabel: 'Ticker de la empresa',
  tickerPlaceholder: 'NVDA',
  analyze: 'Analizar',
  analyzing: 'Analizando…',
  loading: 'Obteniendo datos de la empresa…',
  notAvailable: '—',
  companyHeaderAria: 'Resumen de la empresa',
  metricsAria: 'Métricas financieras',
  latestTradingDay: 'Última sesión',
  sourcesTitle: 'Fuentes de datos',
  disclaimer:
    'Esta herramienta es solo para análisis educativo. No ofrece asesoramiento de inversión personalizado.',
  sources: {
    price: 'Precio — cotización de mercado de Alpha Vantage',
    eps: 'BPA — BPA diluido TTM de Alpha Vantage',
    roe: 'ROE — rentabilidad sobre capital (TTM) de Alpha Vantage',
    pe: 'PER — calculado por Nina\'s Lab (precio ÷ BPA diluido TTM)',
    debtEquity:
      'Deuda / Capital — calculado por Nina\'s Lab desde el último balance trimestral',
    netDebtEbitda:
      'Deuda neta / EBITDA — calculado por Nina\'s Lab con deuda neta trimestral y EBITDA TTM',
    peg: 'PEG — valor calculado por el proveedor Alpha Vantage',
  },
  errors: {
    invalidTicker: 'Introduce un ticker válido (letras, números, puntos o guiones).',
    rateLimit: 'Límite de peticiones del proveedor alcanzado. Inténtalo más tarde.',
    noData: 'Los datos financieros no están disponibles para este ticker ahora mismo.',
    network: 'No se pudo contactar con el servidor. Comprueba tu conexión e inténtalo de nuevo.',
    unknown: 'Algo falló al obtener los datos de la empresa.',
  },
  metrics: {
    eps: {
      label: 'BPA',
      tooltipTitle: 'Beneficio por acción',
      tooltipBody: 'Beneficio diluido por acción en los últimos doce meses (TTM).',
      tooltipPeriod: 'Periodo: BPA diluido TTM.',
      tooltipSource: 'Fuente: datos overview de Alpha Vantage.',
    },
    pe: {
      label: 'PER',
      tooltipTitle: 'Precio / beneficio',
      tooltipBody: 'Precio actual dividido por el beneficio diluido TTM por acción.',
      tooltipPeriod: 'Periodo: trailing (BPA TTM).',
      tooltipSource: 'Fuente: calculado por Nina\'s Lab.',
    },
    peg: {
      label: 'PEG',
      tooltipTitle: 'Precio / beneficio / crecimiento',
      tooltipBody:
        'Ratio de valoración que ajusta el PER por el crecimiento esperado del beneficio. Nina\'s Lab muestra el valor del proveedor tal cual.',
      tooltipPeriod: 'Periodo: definido por el proveedor (Alpha Vantage).',
      tooltipSource: 'Fuente: datos overview de Alpha Vantage.',
    },
    roe: {
      label: 'ROE',
      tooltipTitle: 'Rentabilidad sobre capital',
      tooltipBody: 'Eficiencia con la que la empresa genera beneficio a partir del capital propio.',
      tooltipPeriod: 'Periodo: últimos doce meses (TTM).',
      tooltipSource: 'Fuente: datos overview de Alpha Vantage.',
    },
    debtEquity: {
      label: 'Deuda / Capital',
      tooltipTitle: 'Deuda sobre capital',
      tooltipBody:
        'Deuda total dividida por el capital total de accionistas del último balance trimestral.',
      tooltipPeriod: 'Fecha del balance: {date}.',
      tooltipSource: 'Fuente: calculado por Nina\'s Lab.',
    },
    netDebtEbitda: {
      label: 'Deuda neta / EBITDA',
      tooltipTitle: 'Deuda neta sobre EBITDA',
      tooltipBody:
        'Deuda neta (deuda total menos caja) dividida por la suma del EBITDA de los últimos cuatro trimestres.',
      tooltipPeriod: 'Deuda neta a {date}; EBITDA sumado en los últimos cuatro trimestres.',
      tooltipSource: 'Fuente: calculado por Nina\'s Lab.',
    },
  },
}
