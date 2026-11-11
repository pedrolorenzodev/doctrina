export type AiErrorCode =
  | "ai_bad_request"
  | "ai_not_found"
  | "ai_not_simplifiable"
  | "ai_disabled"
  | "ai_budget_exhausted"
  | "ai_daily_limit"
  | "ai_rate_limited"
  | "ai_bot_check_failed"
  | "ai_provider_busy"
  | "ai_provider_down"
  | "ai_refused"
  | "ai_verify_failed"
  | "ai_simplify_failed"
  | "ai_misconfigured"
  | "ai_timeout";

export type AiErrorBody = { code: AiErrorCode; message: string; retry: boolean };

export class AiError extends Error {
  readonly code: AiErrorCode;

  constructor(code: AiErrorCode) {
    super(code);
    this.code = code;
  }
}

export type AiOutcome = "ok" | "cache_hit" | "fixed" | AiErrorCode;

export const aiErrorStatus: Record<AiErrorCode, number> = {
  ai_bad_request: 400,
  ai_not_found: 404,
  ai_not_simplifiable: 400,
  ai_disabled: 503,
  ai_budget_exhausted: 503,
  ai_daily_limit: 429,
  ai_rate_limited: 429,
  ai_bot_check_failed: 403,
  ai_provider_busy: 503,
  ai_provider_down: 503,
  ai_refused: 422,
  ai_verify_failed: 422,
  ai_simplify_failed: 422,
  ai_misconfigured: 500,
  ai_timeout: 504,
};

const retryable: Record<AiErrorCode, boolean> = {
  ai_bad_request: false,
  ai_not_found: false,
  ai_not_simplifiable: false,
  ai_disabled: false,
  ai_budget_exhausted: false,
  ai_daily_limit: false,
  ai_rate_limited: true,
  ai_bot_check_failed: false,
  ai_provider_busy: true,
  ai_provider_down: true,
  ai_refused: false,
  ai_verify_failed: true,
  ai_simplify_failed: true,
  ai_misconfigured: false,
  ai_timeout: true,
};

type Messages = { es: string; en: string };

const chatMessages: Record<AiErrorCode, Messages> = {
  ai_bad_request: {
    es: "No pude leer la pregunta. Probá escribirla de nuevo.",
    en: "I could not read the question. Try writing it again.",
  },
  ai_not_found: {
    es: "Esta respuesta ya no está disponible. Hacé la pregunta de nuevo.",
    en: "This answer is no longer available. Ask the question again.",
  },
  ai_not_simplifiable: {
    es: "Este párrafo no se puede simplificar.",
    en: "This paragraph cannot be simplified.",
  },
  ai_disabled: {
    es: "La IA está apagada por ahora. Las preguntas sugeridas siguen funcionando.",
    en: "The AI is switched off for now. The suggested questions still work.",
  },
  ai_budget_exhausted: {
    es: "La IA está pausada por hoy porque se usó todo el presupuesto del día. Las preguntas sugeridas siguen funcionando.",
    en: "The AI is paused for today because the day's budget is used up. The suggested questions still work.",
  },
  ai_daily_limit: {
    es: "Llegaste al límite de preguntas de hoy. Mañana podés seguir; las preguntas sugeridas siguen funcionando.",
    en: "You reached today's limit of questions. You can continue tomorrow; the suggested questions still work.",
  },
  ai_rate_limited: {
    es: "Hiciste varias preguntas seguidas. Esperá un minuto y volvé a intentar.",
    en: "You asked several questions in a row. Wait a minute and try again.",
  },
  ai_bot_check_failed: {
    es: "No pudimos comprobar que la pregunta viene de una persona. Recargá la página y probá de nuevo.",
    en: "We could not check that the question comes from a person. Reload the page and try again.",
  },
  ai_provider_busy: {
    es: "El servicio de IA está ocupado. Probá de nuevo en unos segundos.",
    en: "The AI service is busy. Try again in a few seconds.",
  },
  ai_provider_down: {
    es: "El servicio de IA no responde. Probá de nuevo más tarde.",
    en: "The AI service is not responding. Try again later.",
  },
  ai_refused: {
    es: "El modelo no quiso responder esta pregunta. Probá formularla de otra manera.",
    en: "The model declined this question. Try asking it another way.",
  },
  ai_verify_failed: {
    es: "No encontré citas que pudiera comprobar en las fuentes, así que no hay respuesta.",
    en: "I found no quotes I could check against the sources, so there is no answer.",
  },
  ai_simplify_failed: {
    es: "No se pudo simplificar este párrafo sin cambiar su sentido. El original está arriba.",
    en: "This paragraph could not be simplified without changing its meaning. The original is above.",
  },
  ai_misconfigured: {
    es: "Algo falló de nuestro lado. Ya quedó registrado.",
    en: "Something failed on our side. It has been logged.",
  },
  ai_timeout: {
    es: "La respuesta tardó demasiado. Probá de nuevo.",
    en: "The answer took too long. Try again.",
  },
};

const simplifyOverrides: Partial<Record<AiErrorCode, Messages>> = {
  ai_daily_limit: {
    es: "Llegaste al límite de simplificaciones de hoy.",
    en: "You reached today's limit of simplifications.",
  },
  ai_rate_limited: {
    es: "Pediste varias simplificaciones seguidas. Esperá un minuto.",
    en: "You asked for several simplifications in a row. Wait a minute.",
  },
  ai_disabled: {
    es: "La simplificación está apagada por ahora.",
    en: "Simplification is switched off for now.",
  },
  ai_budget_exhausted: {
    es: "La simplificación está pausada por hoy.",
    en: "Simplification is paused for today.",
  },
  ai_bot_check_failed: {
    es: "No pudimos comprobar que el pedido viene de una persona. Recargá la página y probá de nuevo.",
    en: "We could not check that the request comes from a person. Reload the page and try again.",
  },
};

export function aiErrorBody(
  code: AiErrorCode,
  locale: "es" | "en",
  feature: "chat" | "simplify" = "chat",
): AiErrorBody {
  const messages = (feature === "simplify" ? simplifyOverrides[code] : undefined) ?? chatMessages[code];
  return { code, message: messages[locale], retry: retryable[code] };
}
