import type { Quote, QuoteId } from "@/features/reader-ai/quotes";

export type AnswerId =
  "fathers" | "traditions" | "whoIsRight" | "words" | "mine" | "meaning" | "none" | "scopeMiss" | "pastoral";
export type ChipId = "fathers" | "traditions" | "whoIsRight" | "words" | "scopeFix" | "mine";

export type Answer = {
  question: string;
  scope: string;
  blocks?: { quote: QuoteId; head?: string }[];
  traditions?: boolean;
  disputed?: string;
  words?: { tradition: string; source: string; words: string; quote: QuoteId }[];
  marks?: boolean;
  mine?: boolean;
  prose?: string;
  plain?: string;
  fixed?: boolean;
  follow: ChipId[];
};

export const answers: Record<AnswerId, Answer> = {
  fathers: {
    question: "¿Qué dijeron los Padres sobre este versículo?",
    scope: "Sobre Juan 6:53. Pasajes de los Padres que lo citan, en las obras que tiene Doctrina.",
    blocks: [
      { quote: "cyr224" },
      { quote: "cyr226", head: "Dos párrafos después, en la misma catequesis" },
      { quote: "ddc" },
      { quote: "aug275" },
    ],
    prose:
      "Cirilo cita el versículo y lo lee junto con la reacción de los oyentes, que «se volvieron atrás» ({66}); dos párrafos después pide no juzgar «por el gusto, sino por la fe». Agustín lo usa en Sobre la doctrina cristiana como ejemplo de una frase que se lee como figura, y en los Tratados lo pone junto a «la carne nada aprovecha» ({63}).",
    follow: ["traditions", "whoIsRight"],
  },
  traditions: {
    question: "¿Qué dice cada tradición sobre este pasaje?",
    scope: "Lo que cada tradición dice de la Eucaristía o Cena del Señor, en sus propios documentos.",
    traditions: true,
    prose:
      "De estos textos, solo el Catecismo católico cita este capítulo ({60}); los demás hablan de la Cena en general.",
    follow: ["whoIsRight", "fathers"],
  },
  whoIsRight: {
    question: "¿Quién tiene razón?",
    scope: "Pregunta disputada.",
    disputed:
      "Doctrina no decide quién tiene razón. Muestra qué palabras usa cada tradición en sus textos, para que las leas y las compares.",
    words: [
      {
        tradition: "Católica",
        source: "Trento, sesión XIII, canon 8",
        words: "sacramental y realmente",
        quote: "trent8",
      },
      {
        tradition: "Ortodoxa",
        source: "Filareto, pregunta 340",
        words: "verdadera, real y sustancialmente",
        quote: "phil340",
      },
      {
        tradition: "Luterana",
        source: "Apología, art. X",
        words: "verdadera y sustancialmente presentes",
        quote: "apol10",
      },
      {
        tradition: "Reformada",
        source: "Confesión Belga, art. 35",
        words: "no es por la boca, sino por el Espíritu mediante la fe",
        quote: "belg35",
      },
      {
        tradition: "Bautista",
        source: "Fe y Mensaje Bautistas, art. VII",
        words: "un acto simbólico de obediencia",
        quote: "bfm7",
      },
    ],
    follow: ["traditions", "fathers"],
  },
  words: {
    question: "¿Qué palabras de 6:51 vuelven en 6:53?",
    scope: "Sobre Juan 6:51-56, Reina-Valera 1909.",
    marks: true,
    prose:
      "Vuelven «comer», «carne» y «vida» ({51}, {53}). «Beber» y «sangre» aparecen por primera vez en el capítulo en {53}, y desde ahí se repiten en {54}, {55} y {56}.",
    follow: ["fathers", "traditions"],
  },
  mine: {
    question: "¿Qué subrayé en verde en este capítulo?",
    scope: "Sobre tus notas y subrayados de Juan 6, guardados en este navegador.",
    mine: true,
    prose: "Un subrayado verde, en {56}. Tu nota de este capítulo está en {53}.",
    follow: ["fathers"],
  },
  meaning: {
    question: "",
    scope: "Sobre Juan 6:53.",
    disputed:
      "Doctrina no da una lectura propia de este versículo. Puede mostrar cómo lo leen los Padres y cada tradición, con sus palabras.",
    follow: ["fathers", "traditions"],
  },
  none: {
    question: "",
    scope: "Sobre Juan 6.",
    plain:
      "El corpus no tiene pasajes que respondan esto con citas, así que no hay respuesta. Prueba con una de estas:",
    follow: ["fathers", "traditions", "words"],
  },
  scopeMiss: {
    question: "¿Qué dijeron los Padres sobre este versículo?",
    scope: "",
    plain:
      "En Juan 6 está solo el texto bíblico. Los comentarios de los Padres están en «Padres» o en «Todo el corpus».",
    follow: ["scopeFix"],
  },
  pastoral: {
    question: "",
    scope: "",
    fixed: true,
    plain:
      "Esto no lo puede hacer una herramienta. Para pedir confesión, absolución o una bendición, busca a un sacerdote o a un pastor de tu comunidad. Si estás pasando por un momento muy difícil, habla hoy con alguien de confianza o con un servicio de ayuda de tu país.",
    follow: [],
  },
};

export const chips: Record<ChipId, string> = {
  fathers: "¿Qué dijeron los Padres sobre este versículo?",
  traditions: "¿Qué dice cada tradición?",
  whoIsRight: "¿Quién tiene razón?",
  words: "¿Qué palabras de 6:51 vuelven aquí?",
  scopeFix: "Buscar en los Padres",
  mine: "¿Qué subrayé en verde en este capítulo?",
};

export const traditions: { name: string; quotes: QuoteId[] }[] = [
  { name: "Católica", quotes: ["ccc1336", "trent8"] },
  { name: "Ortodoxa", quotes: ["phil340"] },
  { name: "Luterana", quotes: ["apol10"] },
  { name: "Reformada", quotes: ["belg35"] },
  { name: "Bautista", quotes: ["bfm7"] },
];

export const wordMarks: Record<number, string[]> = {
  51: ["comiere", "carne", "vida"],
  53: ["comiereis", "carne", "bebiereis", "sangre", "vida"],
};

export const yours = {
  highlightVerse: 56,
  highlightCaption: ", tu subrayado verde del 17 oct",
  noteVerse: 53,
  noteHead: "Tu nota, 12 oct",
  note: "Comparar con 1 Corintios 11:27-29.",
};

export const sourceOf = (quote: Quote) => `${quote.who}, ${quote.work}`;
export const afterAuthor = (quote: Quote) => `, ${quote.work}. ${quote.edition}`;
export const afterReference = (edition: string) => `, ${edition}`;
export const verseLabel = (verse: number) => `6:${verse}`;
export const verseReference = (verse: number) => `Juan 6:${verse}`;

const plainText = (text: string) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function routeQuestion(question: string): AnswerId {
  const text = plainText(question);
  if (/confesarme|confesion de mis|absol|bendic|bendig|suicid|crisis|quiero morir|me siento muy mal/.test(text))
    return "pastoral";
  if (/subray|mis notas|en verde/.test(text)) return "mine";
  if (/padre|agustin|cirilo|patrist|ignacio/.test(text)) return "fathers";
  if (/razon|correct|quien acierta|debo creer|que creer|herej|verdadera\b/.test(text)) return "whoIsRight";
  if (/tradici|catolic|ortodox|luteran|reformad|bautist|iglesia|protestant/.test(text)) return "traditions";
  if (/palabra|repite|vuelve|comer|beber|sangre|carne/.test(text)) return "words";
  if (/significa|quiere decir|explica|interpreta|literal|simbol/.test(text)) return "meaning";
  return "none";
}
