import type { DoctrineId } from "@/content/model/ids";
import type { Locale } from "@/lib/locale";

type HomeQuestion = { question: string; draft: true };

export const homeDraftQuestions: Record<Locale, Record<DoctrineId, HomeQuestion>> = {
  es: {
    eucharist: { question: "¿Qué pasa con el pan y el vino en la Cena del Señor?", draft: true },
    justification: { question: "¿Cómo es declarado justo el pecador ante Dios?", draft: true },
    baptism: { question: "¿Qué hace el bautismo, y a quién se le da?", draft: true },
    papacy: { question: "¿Tiene el obispo de Roma autoridad sobre toda la Iglesia?", draft: true },
    "sola-scriptura": { question: "¿Es la Escritura la única regla infalible de fe?", draft: true },
  },
  en: {
    eucharist: { question: "What happens to the bread and the wine in the Lord's Supper?", draft: true },
    justification: { question: "How is the sinner declared righteous before God?", draft: true },
    baptism: { question: "What does baptism do, and to whom is it given?", draft: true },
    papacy: { question: "Does the bishop of Rome have authority over the whole Church?", draft: true },
    "sola-scriptura": { question: "Is Scripture the only infallible rule of faith?", draft: true },
  },
};
