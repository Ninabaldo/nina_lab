import type { IncidentBriefCopy } from '../types'

export const incidentBriefIt: IncidentBriefCopy = {
  eyebrow: 'Operations',
  title: 'Incident Brief',
  subtitle:
    'Trasforma errori tecnici e risposte API in un linguaggio chiaro per clienti e team. Modalità demo illimitata, senza crediti IA.',
  inputLabel: 'Input tecnico',
  inputPlaceholder:
    'Incolla un messaggio di errore, stack trace o JSON API…\n\nEsempio:\n{"error":"card_declined","message":"Your card was declined."}',
  analyze: 'Analizza',
  analyzing: 'Analisi in corso…',
  clear: 'Cancella',
  outputTitle: 'Sintesi',
  sections: {
    whatHappened: 'Cosa è successo',
    businessImpact: 'Impatto sul business',
    recommendedAction: 'Azione consigliata',
  },
  emptySection: 'Esegui un\'analisi per compilare questa sezione.',
  demoBadge: 'Modalità demo',
  demoDetailSuffix: 'Segnale rilevato: «{detail}».',
  demo: {
    payment: {
      whatHappened:
        'Il pagamento del cliente non è andato a buon fine: la banca o la rete carta ha rifiutato la transazione.',
      businessImpact:
        'La vendita resta in sospeso; il cliente può pensare di essere stato addebitato o abbandonare il checkout.',
      recommendedAction:
        'Chiedi al cliente di provare un\'altra carta o metodo di pagamento e controlla nel gateway i dettagli del rifiuto.',
    },
    auth: {
      whatHappened:
        'La richiesta non aveva permessi validi: sessione scaduta, token errato o utente senza accesso.',
      businessImpact:
        'L\'utente non può proseguire (login, checkout o schermate interne) finché l\'accesso non è ripristinato.',
      recommendedAction:
        'Accedi di nuovo o rigenera il token; se persiste, verifica ruoli e chiavi API nell\'ambiente interessato.',
    },
    notFound: {
      whatHappened:
        'Il sistema ha cercato una risorsa (URL, ID o endpoint) che non esiste o non è più disponibile.',
      businessImpact:
        'Link rotti, schermate vuote o operazioni che falliscono in silenzio per gli utenti.',
      recommendedAction:
        'Verifica URL o identificativo, deploy recenti e redirect; correggi dati obsoleti lato client o API.',
    },
    rateLimit: {
      whatHappened:
        'Troppe richieste in poco tempo: il servizio ha applicato un limite temporaneo.',
      businessImpact:
        'Funzioni chiave (login, ricerca, pagamenti) possono fallire in modo intermittente sotto carico o bot.',
      recommendedAction:
        'Aggiungi retry con backoff, rivedi quote e cache; se il traffico è legittimo, chiedi un aumento del limite al provider.',
    },
    timeout: {
      whatHappened:
        'Il servizio o una dipendenza esterna non ha risposto in tempo e la connessione è caduta.',
      businessImpact:
        'Esperienza lenta o errori intermittenti; rischio di duplicati se l\'utente riprova senza sapere se l\'operazione è andata a buon fine.',
      recommendedAction:
        'Controlla stato del provider, latenza e timeout; mostra un messaggio chiaro e usa idempotenza dove serve.',
    },
    server: {
      whatHappened:
        'Il server ha riscontrato un errore interno o è temporaneamente non disponibile (5xx).',
      businessImpact:
        'Interruzione parziale o totale del servizio; calo di fiducia se si ripete nelle ore di punta.',
      recommendedAction:
        'Consulta log e alert, verifica deploy recenti e scala o comunica se l\'impatto è ampio.',
    },
    validation: {
      whatHappened:
        'I dati inviati non corrispondono a quanto l\'API si aspetta: formato, campi obbligatori o valori non validi.',
      businessImpact:
        'Form o integrazioni che falliscono; il supporto riceve ticket che sembrano bug ma sono input errati.',
      recommendedAction:
        'Confronta il payload con la documentazione API, migliora i messaggi di validazione lato client e correggi il campo interessato.',
    },
    apiKey: {
      whatHappened:
        'L\'integrazione con il servizio IA o un\'API esterna è fallita perché la chiave di accesso non è valida, è scaduta o è stata revocata.',
      businessImpact:
        'Le funzioni che dipendono da quel servizio (es. analisi automatica) restano ferme finché non configuri una chiave valida.',
      recommendedAction:
        'Crea una nuova chiave nel pannello del provider, aggiornala nell\'ambiente (locale o Vercel) e ridistribuisci; non esporre la chiave nel client o nel repo.',
    },
    generic: {
      whatHappened:
        'Si è verificato un errore tecnico durante l\'elaborazione; conviene tradurre il segnale specifico in impatto business.',
      businessImpact:
        'Dipende dal flusso (pagamento, registrazione, operazioni interne); classifica se è bloccante o recuperabile.',
      recommendedAction:
        'Condividi il messaggio completo con supporto o engineering, indica ora e azione dell\'utente e prioritizza in base al volume.',
    },
  },
  errors: {
    emptyInput: 'Incolla un errore o JSON prima di analizzare.',
    missingApiKey:
      'Manca OPENAI_API_KEY. Aggiungila a .env.local e riavvia il server di sviluppo.',
    generic: 'Qualcosa è andato storto. Riprova.',
  },
}
