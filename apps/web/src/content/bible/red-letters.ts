export type RedSpan = [number, number];

export const computedRedEditions: readonly string[] = ["bsb", "rv1909", "dra"];

function compact(text: string): { letters: string; at: number[] } {
  const letters: string[] = [];
  const at: number[] = [];
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index]!;
    if (/[\s[\]]/.test(character)) continue;
    letters.push(character);
    at.push(index);
  }
  return { letters: letters.join(""), at };
}

export function redSpansOf(text: string, phrases: string[]): RedSpan[] {
  const { letters, at } = compact(text);
  const spans: RedSpan[] = [];
  let from = 0;
  for (const phrase of phrases) {
    const wanted = compact(phrase).letters;
    if (wanted.length === 0) continue;
    const found = letters.indexOf(wanted, from);
    if (found < 0) continue;
    const start = at[found]!;
    const end = at[found + wanted.length - 1]! + 1;
    spans.push([start, end]);
    from = found + wanted.length;
  }
  return mergeSpans(text, spans);
}

function mergeSpans(text: string, spans: RedSpan[]): RedSpan[] {
  const merged: RedSpan[] = [];
  for (const span of spans) {
    const last = merged[merged.length - 1];
    if (last && text.slice(last[1], span[0]).trim() === "") last[1] = span[1];
    else merged.push([span[0], span[1]]);
  }
  return merged;
}
