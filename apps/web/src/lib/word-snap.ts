const wordCharacter = /[\p{L}\p{M}\p{N}'\u2019]/u;

const isWord = (character: string | undefined) => character !== undefined && wordCharacter.test(character);

export function snapToWords(text: string, from: number, to: number): [number, number] | null {
  let start = Math.max(0, Math.min(from, text.length));
  let end = Math.max(start, Math.min(to, text.length));
  while (start > 0 && isWord(text[start - 1]) && isWord(text[start])) start -= 1;
  while (end < text.length && isWord(text[end - 1]) && isWord(text[end])) end += 1;
  while (start < end && /\s/.test(text[start] ?? "")) start += 1;
  while (end > start && /\s/.test(text[end - 1] ?? "")) end -= 1;
  return start < end ? [start, end] : null;
}
