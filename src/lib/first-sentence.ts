const sentenceEnd = /^(.+?[.!?])(?:\s+[A-ZÁÉÍÓÚÑ¿¡«]|$)/;

export const firstSentence = (text: string) => sentenceEnd.exec(text)?.[1] ?? text;
