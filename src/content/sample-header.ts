import type { Locale } from "@/lib/locale";

// TODO: replaced by the page data of B2; the English lines are placeholders until the English copy is reviewed (D3)
export const sampleHeader: Record<Locale, { title: string; lede: string }> = {
  es: {
    title: "La posición católica",
    lede: "Cómo la Iglesia católica entiende la Eucaristía, con sus propias fuentes.",
  },
  en: {
    title: "The Catholic position",
    lede: "How the Catholic Church understands the Eucharist, with its own sources.",
  },
};
