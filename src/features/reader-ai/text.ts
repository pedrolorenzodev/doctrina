import type { Locale } from "@/lib/locale";

export type AskText = {
  ask: string;
  keyHint: string;
  title: string;
  close: string;
  sees: {
    label: string;
    chapter: string;
    chapterValue: string;
    yours: string;
    note: string;
    highlight: string;
    green: string;
    where: string;
    scopes: { chapter: string; bible: string; fathers: string; all: string };
  };
  chat: {
    suggested: string;
    placeholder: string;
    question: string;
    send: string;
    stop: string;
    removePill: string;
    searching: string;
    stopped: string;
    generated: string;
    searchedIn: string;
    everything: string;
    fixed: string;
    fixedNote: string;
    copy: string;
    copied: string;
    save: string;
    saved: string;
    report: string;
    reported: string;
  };
  cite: {
    window: string;
    copy: string;
    copied: string;
    verseEdition: string;
    verseCheck: string;
    inEdition: string;
    fatherCheck: string;
    storedCheck: string;
    back: string;
  };
};

export const askText: Record<Locale, AskText> = {
  es: {
    ask: "Preguntar",
    keyHint: "Tecla /",
    title: "Preguntar",
    close: "Cerrar",
    sees: {
      label: "Lo que puede ver",
      chapter: "Este capítulo",
      chapterValue: "{chapter}, {edition}",
      yours: "Tus notas y subrayados",
      note: "1 nota",
      highlight: "1 subrayado",
      green: "verde",
      where: "Dónde busca",
      scopes: { chapter: "{chapter}", bible: "Biblia", fathers: "Padres", all: "Todo el corpus" },
    },
    chat: {
      suggested: "Preguntas sugeridas",
      placeholder: "Pregunta sobre {chapter}",
      question: "Tu pregunta",
      send: "Preguntar",
      stop: "Detener",
      removePill: "Quitar lo elegido",
      searching: "Buscando en el corpus",
      stopped: "Detenida.",
      generated: "Respuesta generada por IA",
      searchedIn: "Buscado en: {scope}.",
      everything: "todo el corpus",
      fixed: "Texto fijo de Doctrina",
      fixedNote: "No lo escribe la IA.",
      copy: "Copiar con citas",
      copied: "Copiado",
      save: "Guardar en Tus notas",
      saved: "Guardada en Tus notas",
      report: "Informar un error",
      reported: "Gracias. Lo revisará una persona.",
    },
    cite: {
      window: "Cita",
      copy: "Copiar cita",
      copied: "Cita copiada",
      verseEdition: "Reina-Valera 1909",
      verseCheck: "Texto de la edición. Clic para ir al versículo.",
      inEdition: "En la edición, {at}",
      fatherCheck: "Cita comprobada en la edición. Clic para leerla en el texto.",
      storedCheck: "Cita comprobada en el texto que guarda Doctrina. Clic para abrirla.",
      back: "Volver a donde estabas",
    },
  },
  en: {
    ask: "Ask",
    keyHint: "Key /",
    title: "Ask",
    close: "Close",
    sees: {
      label: "What it can see",
      chapter: "This chapter",
      chapterValue: "{chapter}, {edition}",
      yours: "Your notes and highlights",
      note: "1 note",
      highlight: "1 highlight",
      green: "green",
      where: "Where it searches",
      scopes: { chapter: "{chapter}", bible: "Bible", fathers: "Fathers", all: "Whole corpus" },
    },
    chat: {
      suggested: "Suggested questions",
      placeholder: "Ask about {chapter}",
      question: "Your question",
      send: "Ask",
      stop: "Stop",
      removePill: "Remove the selection",
      searching: "Searching the corpus",
      stopped: "Stopped.",
      generated: "AI-generated answer",
      searchedIn: "Searched in: {scope}.",
      everything: "the whole corpus",
      fixed: "Fixed text from Doctrina",
      fixedNote: "Not written by the AI.",
      copy: "Copy with citations",
      copied: "Copied",
      save: "Save to Your notes",
      saved: "Saved to Your notes",
      report: "Report an error",
      reported: "Thank you. A person will review it.",
    },
    cite: {
      window: "Citation",
      copy: "Copy citation",
      copied: "Citation copied",
      verseEdition: "Reina-Valera 1909",
      verseCheck: "Text from the edition. Click to go to the verse.",
      inEdition: "In the edition, {at}",
      fatherCheck: "Quotation checked against the edition. Click to read it in the text.",
      storedCheck: "Quotation checked against the text Doctrina keeps. Click to open it.",
      back: "Back to where you were",
    },
  },
};
