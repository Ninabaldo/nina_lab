import type { IncidentBriefCopy } from '../types'

export const incidentBriefEs: IncidentBriefCopy = {
  eyebrow: 'Operaciones',
  title: 'Incident Brief',
  subtitle:
    'Convierte errores técnicos y respuestas de API en un lenguaje claro para clientes y equipos. Modo demo ilimitado, sin créditos de IA.',
  inputLabel: 'Entrada técnica',
  inputPlaceholder:
    'Pega un mensaje de error, stack trace o JSON de API…\n\nEjemplo:\n{"error":"card_declined","message":"Your card was declined."}',
  analyze: 'Analizar',
  analyzing: 'Analizando…',
  clear: 'Limpiar',
  outputTitle: 'Resumen',
  sections: {
    whatHappened: 'Qué ha pasado',
    businessImpact: 'Impacto en el negocio',
    recommendedAction: 'Acción recomanada',
  },
  emptySection: 'Ejecuta un análisis para rellenar esta sección.',
  demoBadge: 'Modo demo',
  demoDetailSuffix: 'Señal detectada: «{detail}».',
  demo: {
    payment: {
      whatHappened:
        'El pago del cliente no se ha completado: el banco o la red de tarjetas ha rechazado la transacción.',
      businessImpact:
        'La venta queda pendiente; el cliente puede creer que el cargo se ha hecho o abandonar el proceso.',
      recommendedAction:
        'Pide al cliente que pruebe otra tarjeta o método de pago y revisa en la pasarela si hay más detalle del rechazo.',
    },
    auth: {
      whatHappened:
        'La petición se ha hecho sin permiso válido: la sesión caducó, el token es incorrecto o el usuario no tiene acceso.',
      businessImpact:
        'El usuario no puede continuar (login, checkout o pantalla interna) hasta restablecer el acceso.',
      recommendedAction:
        'Vuelve a iniciar sesión o regenera el token; si persiste, revisa roles y claves de API en el entorno afectado.',
    },
    notFound: {
      whatHappened:
        'El sistema buscó un recurso (URL, ID o endpoint) que no existe o ya no está disponible.',
      businessImpact:
        'Enlaces rotos, pantallas en blanco u operaciones que fallan en silencio para los usuarios.',
      recommendedAction:
        'Verifica la URL o el identificador, despliegues recientes y redirecciones; corrige datos obsoletos en cliente o API.',
    },
    rateLimit: {
      whatHappened:
        'Se enviaron demasiadas peticiones en poco tiempo y el servicio aplicó un límite temporal.',
      businessImpact:
        'Funciones clave (login, búsqueda, pagos) pueden fallar de forma intermitente bajo carga o bots.',
      recommendedAction:
        'Añade reintentos con backoff, revisa cuotas y caché; si es tráfico legítimo, pide aumento de límite al proveedor.',
    },
    timeout: {
      whatHappened:
        'El servicio o una dependencia externa no respondió a tiempo y la conexión se cortó.',
      businessImpact:
        'Experiencia lenta o errores intermitentes; riesgo de duplicados si el usuario reintenta sin saber si la operación llegó.',
      recommendedAction:
        'Comprueba estado del proveedor, latencia y timeouts; muestra un mensaje claro al cliente e idempotencia donde haga falta.',
    },
    server: {
      whatHappened:
        'El servidor encontró un error interno o está temporalmente no disponible (5xx).',
      businessImpact:
        'Interrupción parcial o total del servicio; pérdida de confianza si se repite en hora punta.',
      recommendedAction:
        'Consulta logs y alertas, revisa despliegues recientes y escala o activa plan de comunicación si el impacto es amplio.',
    },
    validation: {
      whatHappened:
        'Los datos enviados no cumplen lo que la API espera (formato, campos obligatorios o valores inválidos).',
      businessImpact:
        'Formularios o integraciones que fallan; soporte recibe tickets por errores que parecen «bug» pero son datos incorrectos.',
      recommendedAction:
        'Revisa el payload con la documentación de la API, mejora mensajes de validación en cliente y corrige el campo afectado.',
    },
    apiKey: {
      whatHappened:
        'La integración con el servicio de IA o una API externa falló porque la clave de acceso no es válida, caducó o fue revocada.',
      businessImpact:
        'Las funciones que dependen de ese servicio (como el análisis automático) no funcionan hasta configurar una clave válida.',
      recommendedAction:
        'Genera una clave nueva en el panel del proveedor, actualízala en el entorno (local o Vercel) y vuelve a desplegar; no expongas la clave en el cliente ni en el repositorio.',
    },
    generic: {
      whatHappened:
        'Se produjo un error técnico al procesar la petición; conviene traducir la señal concreta a impacto de negocio.',
      businessImpact:
        'Depende del flujo (pago, registro, operación interna); clasifica si es bloqueante o recuperable.',
      recommendedAction:
        'Pega el mensaje completo a soporte o ingeniería, indica hora y acción del usuario, y pide seguimiento según volumen.',
    },
  },
  errors: {
    emptyInput: 'Pega un error o JSON antes de analizar.',
    missingApiKey:
      'Falta OPENAI_API_KEY. Añádela a .env.local y reinicia el servidor de desarrollo.',
    generic: 'Algo ha fallado. Inténtalo de nuevo.',
  },
}
