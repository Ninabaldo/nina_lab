import type { IncidentBriefCopy } from '../types'

export const incidentBriefCa: IncidentBriefCopy = {
  eyebrow: 'Operacions',
  title: 'Incident Brief',
  subtitle:
    'Converteix errors tècnics i respostes d\'API en un llenguatge clar per a clients i equips. Mode demo il·limitat, sense crèdits d\'IA.',
  inputLabel: 'Entrada tècnica',
  inputPlaceholder:
    'Enganxa un missatge d\'error, stack trace o JSON d\'API…\n\nExemple:\n{"error":"card_declined","message":"Your card was declined."}',
  analyze: 'Analitzar',
  analyzing: 'Analitzant…',
  clear: 'Netejar',
  outputTitle: 'Resum',
  sections: {
    whatHappened: 'Què ha passat',
    businessImpact: 'Impacte en el negoci',
    recommendedAction: 'Acció recomanada',
  },
  emptySection: 'Executa una anàlisi per omplir aquesta secció.',
  demoBadge: 'Mode demo',
  demoDetailSuffix: 'Senyal detectada: «{detail}».',
  demo: {
    payment: {
      whatHappened:
        'El pagament del client no s\'ha completat: el banc o la xarxa de targetes ha rebutjat la transacció.',
      businessImpact:
        'La venda queda pendent; el client pot pensar que el càrrec s\'ha fet o abandonar el procés.',
      recommendedAction:
        'Demana al client que provi una altra targeta o mètode de pagament i comprova a la passarel·la si hi ha més detalls del declinament.',
    },
    auth: {
      whatHappened:
        'La petició s\'ha fet sense permís vàlid: la sessió ha caducat, el token és incorrecte o l\'usuari no té accés.',
      businessImpact:
        'L\'usuari no pot continuar (login, checkout o pantalla interna) fins que es restableixi l\'accés.',
      recommendedAction:
        'Torna a iniciar sessió o regenera el token; si persisteix, revisa rols i claus d\'API a l\'entorn afectat.',
    },
    notFound: {
      whatHappened:
        'El sistema ha buscat un recurs (URL, ID o endpoint) que no existeix o ja no està disponible.',
      businessImpact:
        'Enllaços trencats, pantalles en blanc o operacions que fallen en silenci per als usuaris.',
      recommendedAction:
        'Verifica l\'URL o l\'identificador, desplegaments recents i redireccions; corregeix dades obsoletes al client o API.',
    },
    rateLimit: {
      whatHappened:
        'S\'han enviat massa peticions en poc temps i el servei ha aplicat un límit temporal.',
      businessImpact:
        'Funcionalitats clau (login, cerca, pagaments) poden fallar intermitentment sota càrrega o bots.',
      recommendedAction:
        'Afegeix reintents amb backoff, revisa quotas i cache; si és legítim tràfic, demana augment de límit al proveïdor.',
    },
    timeout: {
      whatHappened:
        'El servei o una dependència externa no ha respost a temps i la connexió s\'ha tallat.',
      businessImpact:
        'Experiència lenta o errors intermitents; risc de duplicats si l\'usuari reintenta sense saber si l\'operació va arribar.',
      recommendedAction:
        'Comprova estat del proveïdor, latència i timeouts; mostra missatge clar al client i idempotència on calgui.',
    },
    server: {
      whatHappened:
        'El servidor ha trobat un error intern o està temporalment indisponible (5xx).',
      businessImpact:
        'Interrupció parcial o total del servei; pèrdua de confiança si es repeteix en hora punta.',
      recommendedAction:
        'Consulta logs i alertes, comprova desplegaments recents i escala o activa pla de comunicació si l\'impacte és ampli.',
    },
    validation: {
      whatHappened:
        'Les dades enviades no compleixen el que l\'API espera (format, camps obligatoris o valors invàlids).',
      businessImpact:
        'Formularis o integracions que fallen; suport rep tickets per errors que semblen «bug» però són dades incorrectes.',
      recommendedAction:
        'Revisa el payload amb la documentació de l\'API, millora missatges de validació al client i corregeix el camp afectat.',
    },
    apiKey: {
      whatHappened:
        'La integració amb el servei d\'IA o una API externa ha fallat perquè la clau d\'accés no és vàlida, ha caducat o s\'ha revocat.',
      businessImpact:
        'Les funcions que depenen d\'aquest servei (com l\'anàlisi automàtica) no funcionen fins que es configuri una clau vàlida.',
      recommendedAction:
        'Genera una clau nova al panell del proveïdor, actualitza-la a l\'entorn (local o Vercel) i torna a desplegar; no compartis la clau al client ni al repositori.',
    },
    generic: {
      whatHappened:
        'S\'ha produït un error tècnic en processar la petició; cal traduir el senyal concret a impacte de negoci.',
      businessImpact:
        'Depèn del flux (pagament, registre, operació interna); val la pena classificar si és bloquejant o recuperable.',
      recommendedAction:
        'Enganxa el missatge complet a suport o enginyeria, indica hora i acció de l\'usuari, i demana seguiment amb prioritat segons volum.',
    },
  },
  errors: {
    emptyInput: 'Enganxa un error o JSON abans d\'analitzar.',
    missingApiKey:
      'Falta OPENAI_API_KEY. Afegeix-la a .env.local i reinicia el servidor de desenvolupament.',
    generic: 'Alguna cosa ha fallat. Torna-ho a provar.',
  },
}
