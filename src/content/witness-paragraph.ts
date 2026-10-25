export type ParagraphPart = { text: string; highlighted: boolean };

const quoteGap = /\s*\[\.\.\.\]\s*/;
const trailingPunctuation = /[.,;:]+$/;

export function quoteParts(quote: string): string[] {
  return quote
    .split(quoteGap)
    .map((part) => part.trim())
    .filter((part) => part !== "");
}

export function highlightParagraph(paragraph: string, quote: string): ParagraphPart[] | null {
  const parts: ParagraphPart[] = [];
  let cursor = 0;
  for (const sentence of quoteParts(quote)) {
    let start = paragraph.indexOf(sentence, cursor);
    let found = sentence;
    if (start < 0) {
      found = sentence.replace(trailingPunctuation, "");
      start = paragraph.indexOf(found, cursor);
    }
    if (start < 0) return null;
    if (start > cursor) parts.push({ text: paragraph.slice(cursor, start), highlighted: false });
    parts.push({ text: found, highlighted: true });
    cursor = start + found.length;
  }
  if (cursor < paragraph.length) parts.push({ text: paragraph.slice(cursor), highlighted: false });
  return parts;
}
