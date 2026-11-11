import type { Locale } from "@doctrina/core/locale";

export const PASTORAL_PATTERN =
  /confesarme|confesi[oó]n de mis|absu[eé]lv[ae]me|absoluci[oó]n de mis|bend[ií]ceme|bendecime|bend[ií]game|dame (?:la|una|tu) bendici[oó]n|suicid|estoy en crisis|crisis personal|quiero morir|me siento muy mal|confess my|absolve me|absolution for me|bless me|blessing for me|pray for (?:me|my|us)\b|rez(?:a|á|ar) por (?:m[ií]|mi|nosotros)\b|self-harm|kill myself|want to die/i;

export const fixedTexts: Record<"pastoral" | "outOfScope" | "notFound" | "disputed", Record<Locale, string>> = {
  pastoral: {
    es: "Esto no lo puede hacer una herramienta. Para pedir confesión, absolución o una bendición, busca a un sacerdote o a un pastor de tu comunidad. Si estás pasando por un momento muy difícil, habla hoy con alguien de confianza o con un servicio de ayuda de tu país.",
    en: "A tool cannot do this. To ask for confession, absolution or a blessing, look for a priest or a pastor in your community. If you are going through a very hard moment, talk today with someone you trust or with a help service in your country.",
  },
  outOfScope: {
    es: "Doctrina responde solo con los textos de su corpus: la Biblia, los Padres de la Iglesia y los documentos de cada tradición. Esta pregunta no es sobre ellos.",
    en: "Doctrina answers only with the texts in its corpus: the Bible, the Church Fathers and each tradition's documents. This question is not about them.",
  },
  notFound: {
    es: "No encontré pasajes sobre esto en el corpus de Doctrina, así que no hay respuesta.",
    en: "I found no passages about this in Doctrina's corpus, so there is no answer.",
  },
  disputed: {
    es: "Doctrina no decide quién tiene razón. Muestra qué palabras usa cada tradición en sus textos, para que las leas y las compares.",
    en: "Doctrina does not decide who is right. It shows which words each tradition uses in its texts, so that you can read and compare them.",
  },
};

export const privacyLine: Record<Locale, string> = {
  es: "Tus preguntas se envían a un proveedor de IA y se guardan 30 días para revisar errores. No guardamos tu IP.",
  en: "Your questions are sent to an AI provider and kept for 30 days to review errors. We do not keep your IP.",
};

export function isPastoral(question: string): boolean {
  return PASTORAL_PATTERN.test(question.normalize("NFC"));
}
