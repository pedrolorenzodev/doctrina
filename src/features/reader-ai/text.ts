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
    empty: string;
    emptyNote: string;
    jump: string;
    newChat: string;
    history: string;
    fromAnswer: string;
    askThis: string;
    pillGo: string;
    placeholder: string;
    question: string;
    send: string;
    stop: string;
    removePill: string;
    phases: string[];
    seconds: string;
    consulted: string;
    consultedOne: string;
    metaLive: string;
    fixedLine: string;
    stopped: string;
    copy: string;
    copied: string;
    save: string;
    saved: string;
    report: string;
    reported: string;
  };
  cite: {
    window: string;
    edition: string;
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
      empty: "Pregunta sobre {where}",
      emptyNote: "Con los textos que guarda Doctrina: la Biblia, los Padres y los documentos de cada tradición.",
      jump: "Ir al final",
      newChat: "Nueva conversación",
      history: "Preguntas anteriores",
      fromAnswer: "De la respuesta",
      askThis: "Preguntar sobre esto",
      pillGo: "Ir a {reference} en el texto",
      placeholder: "Pregunta sobre {chapter}",
      question: "Tu pregunta",
      send: "Preguntar",
      stop: "Detener",
      removePill: "Quitar lo elegido",
      phases: ["Buscando en los Padres", "Comprobando las citas en la edición", "Redactando"],
      seconds: "{n} s",
      consulted: "Consultó {n} textos",
      consultedOne: "Consultó 1 texto",
      metaLive: "Generada por IA. Buscado en: {scope}.",
      fixedLine: "Texto fijo de Doctrina. No lo escribe la IA.",
      stopped: "Detenida.",
      copy: "Copiar con citas",
      copied: "Copiado",
      save: "Guardar en Tus notas",
      saved: "Guardada en Tus notas",
      report: "Informar un error",
      reported: "Gracias. Esta versión todavía no envía reportes.",
    },
    cite: {
      window: "Cita",
      edition: "Edición",
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
      empty: "Ask about {where}",
      emptyNote: "With the texts Doctrina keeps: the Bible, the Fathers and each tradition's documents.",
      jump: "Go to the end",
      newChat: "New conversation",
      history: "Earlier questions",
      fromAnswer: "From the answer",
      askThis: "Ask about this",
      pillGo: "Go to {reference} in the text",
      placeholder: "Ask about {chapter}",
      question: "Your question",
      send: "Ask",
      stop: "Stop",
      removePill: "Remove the selection",
      phases: ["Searching the Fathers", "Checking the quotations in the edition", "Writing"],
      seconds: "{n} s",
      consulted: "Consulted {n} texts",
      consultedOne: "Consulted 1 text",
      metaLive: "AI-generated. Searched in: {scope}.",
      fixedLine: "Fixed text from Doctrina. Not written by the AI.",
      stopped: "Stopped.",
      copy: "Copy with citations",
      copied: "Copied",
      save: "Save to Your notes",
      saved: "Saved to Your notes",
      report: "Report an error",
      reported: "Thank you. This version does not send reports yet.",
    },
    cite: {
      window: "Citation",
      edition: "Edition",
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
