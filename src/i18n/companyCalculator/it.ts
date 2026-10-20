import type { CompanyCalculatorCopy } from '../types'

export const companyCalculatorIt: CompanyCalculatorCopy = {
  eyebrow: 'Strumento di analisi',
  title: 'Calcolatore finanziario aziende',
  subtitle:
    'Esplora le metriche chiave da dati di mercato pubblici — per apprendimento, non consulenza d\'investimento.',
  tickerLabel: 'Ticker azienda',
  tickerPlaceholder: 'NVDA',
  analyze: 'Analizza',
  analyzing: 'Analisi in corso…',
  loading: 'Recupero dati azienda…',
  notAvailable: '—',
  companyHeaderAria: 'Panoramica azienda',
  metricsAria: 'Metriche finanziarie',
  latestTradingDay: 'Ultimo giorno di trading',
  sourcesTitle: 'Fonti dati',
  disclaimer:
    'Questo strumento è solo per analisi didattica. Non fornisce consulenza d\'investimento personalizzata.',
  sources: {
    price: 'Prezzo — quotazione Alpha Vantage',
    eps: 'EPS — EPS diluito TTM Alpha Vantage',
    roe: 'ROE — return on equity (TTM) Alpha Vantage',
    pe: 'P/E — calcolato da Nina\'s Lab (prezzo ÷ EPS diluito TTM)',
    debtEquity: 'Debito / Equity — calcolato da Nina\'s Lab dal bilancio trimestrale',
    netDebtEbitda:
      'Net Debt / EBITDA — calcolato da Nina\'s Lab da debito netto trimestrale e EBITDA TTM',
    peg: 'PEG — valore Alpha Vantage dal provider',
  },
  errors: {
    invalidTicker: 'Inserisci un ticker valido (lettere, numeri, punti o trattini).',
    rateLimit: 'Limite del provider dati raggiunto. Riprova più tardi.',
    noData: 'Dati finanziari non disponibili per questo ticker al momento.',
    network: 'Impossibile contattare il server. Controlla la connessione e riprova.',
    unknown: 'Qualcosa è andato storto durante il recupero dei dati.',
  },
  metrics: {
    eps: {
      label: 'EPS',
      tooltipTitle: 'Utili per azione',
      tooltipBody: 'Utili diluiti per azione negli ultimi dodici mesi (TTM).',
      tooltipPeriod: 'Periodo: EPS diluito TTM.',
      tooltipSource: 'Fonte: dati overview Alpha Vantage.',
    },
    pe: {
      label: 'P/E',
      tooltipTitle: 'Prezzo/utili',
      tooltipBody: 'Prezzo corrente diviso EPS diluito TTM.',
      tooltipPeriod: 'Periodo: trailing (EPS TTM).',
      tooltipSource: 'Fonte: calcolato da Nina\'s Lab.',
    },
    peg: {
      label: 'PEG',
      tooltipTitle: 'Prezzo/utili alla crescita',
      tooltipBody:
        'Rapporto di valutazione che aggiusta il P/E alla crescita attesa degli utili. Nina\'s Lab mostra il valore del provider così com\'è.',
      tooltipPeriod: 'Periodo: definito dal provider (Alpha Vantage).',
      tooltipSource: 'Fonte: dati overview Alpha Vantage.',
    },
    roe: {
      label: 'ROE',
      tooltipTitle: 'Return on equity',
      tooltipBody: 'Quanto efficientemente l\'azienda genera profitto dal patrimonio netto.',
      tooltipPeriod: 'Periodo: ultimi dodici mesi (TTM).',
      tooltipSource: 'Fonte: dati overview Alpha Vantage.',
    },
    debtEquity: {
      label: 'Debito / Equity',
      tooltipTitle: 'Debito su patrimonio',
      tooltipBody:
        'Debito totale diviso patrimonio netto dall\'ultimo bilancio trimestrale.',
      tooltipPeriod: 'Data bilancio: {date}.',
      tooltipSource: 'Fonte: calcolato da Nina\'s Lab.',
    },
    netDebtEbitda: {
      label: 'Net Debt / EBITDA',
      tooltipTitle: 'Debito netto su EBITDA',
      tooltipBody:
        'Debito netto (debito totale meno cassa) diviso somma EBITDA degli ultimi quattro trimestri.',
      tooltipPeriod: 'Debito netto al {date}; EBITDA somma ultimi quattro trimestri.',
      tooltipSource: 'Fonte: calcolato da Nina\'s Lab.',
    },
  },
}
