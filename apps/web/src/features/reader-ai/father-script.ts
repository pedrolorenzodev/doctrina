import { makeScript, type AskScript } from "@/features/reader-ai/ask-script";
import { fatherScriptData } from "@/features/reader-ai/father-script-data";
import type { WorkScript } from "@/features/reader-ai/father-script-data";
import type { Answer } from "@/features/reader-ai/script";

const plain = (text: string) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export const fatherScriptWorks = Object.keys(fatherScriptData);

const unscripted: WorkScript = { quotes: {}, topics: [] };

export function fatherScript(workId: string): AskScript {
  const work = fatherScriptData[workId] ?? unscripted;
  const topicIds = work.topics.map((topic) => topic.id);
  const answers: Record<string, Answer> = {
    ...Object.fromEntries(
      work.topics.map((topic) => [
        topic.id,
        {
          question: topic.question,
          scope: topic.scope,
          blocks: topic.quotes.map((quote) => ({ quote })),
          prose: topic.prose,
          follow: topicIds.filter((id) => id !== topic.id),
        } satisfies Answer,
      ]),
    ),
    meaning: {
      question: "",
      scope: "Sobre esta obra.",
      disputed:
        "Doctrina no da una lectura propia de este pasaje. Puede mostrar qué dice la obra, con sus palabras, y cómo lo lee cada tradición en sus documentos.",
      follow: topicIds.slice(0, 2),
    },
    none: {
      question: "",
      scope: "Sobre esta obra.",
      plain:
        topicIds.length > 0
          ? "El corpus no tiene pasajes de esta obra que respondan esto con citas, así que no hay respuesta. Prueba con una de estas:"
          : "Todavía no hay respuestas preparadas para esta obra, y Doctrina no responde sin citas.",
      follow: topicIds.slice(0, 2),
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
  const suggestions = work.topics.map((topic) => ({ id: topic.id, label: topic.question }));
  return makeScript({
    id: `fathers:${workId}`,
    answers,
    chips: Object.fromEntries(work.topics.map((topic) => [topic.id, topic.question])),
    suggestionSets: { chapter: suggestions, verse: suggestions },
    exampleHistory: [],
    quotes: work.quotes,
    traditions: [],
    route: (question) => {
      const text = plain(question);
      if (/confesarme|confesion de mis|absol|bendic|bendig|suicid|crisis|quiero morir|me siento muy mal/.test(text))
        return "pastoral";
      const topic = work.topics.find((candidate) => candidate.pattern.test(text));
      if (topic) return topic.id;
      if (/significa|quiere decir|explica|interpreta|literal|simbol|quien tiene razon/.test(text)) return "meaning";
      return "none";
    },
  });
}
