import type { Locale } from "@/lib/locale";

export type SimplifierText = {
  mark: string;
  levels: string;
  clear: string;
  very: string;
  label: string;
  stop: string;
  writing: string;
  stopped: string;
  hide: string;
  copy: string;
  copied: string;
  save: string;
  saved: string;
  report: string;
  reported: string;
  status: string;
  sentence: string;
};

const es: SimplifierText = {
  mark: "En palabras simples",
  levels: "Nivel de lectura",
  clear: "Más claro",
  very: "Muy simple",
  label: "Simplificado por IA",
  stop: "Detener",
  writing: "Escribiendo",
  stopped: "Detenido",
  hide: "Ocultar",
  copy: "Copiar",
  copied: "Copiado",
  save: "Guardar en Tus notas",
  saved: "Guardada en Tus notas",
  report: "Informar un error",
  reported: "Gracias. Lo revisará una persona.",
  status: "Texto de prueba, sin revisar",
  sentence: "Frase {n} del original",
};

const en: SimplifierText = {
  mark: "In simple words",
  levels: "Reading level",
  clear: "Clearer",
  very: "Very simple",
  label: "Simplified by AI",
  stop: "Stop",
  writing: "Writing",
  stopped: "Stopped",
  hide: "Hide",
  copy: "Copy",
  copied: "Copied",
  save: "Save to Your notes",
  saved: "Saved to Your notes",
  report: "Report an error",
  reported: "Thank you. A person will review it.",
  status: "Test text, not reviewed",
  sentence: "Sentence {n} of the original",
};

export const getSimplifierText = (locale: Locale): SimplifierText => (locale === "es" ? es : en);
