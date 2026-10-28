import type { Note } from "@/lib/notes";

const highlightName = "note-words";

function rangeInVerse(
  root: HTMLElement,
  verse: number,
  from: number,
  to: number | null,
  attribute: string,
): Range | null {
  const unit = root.querySelector<HTMLElement>(`[${attribute}="${verse}"]`);
  if (!unit) return null;
  const range = document.createRange();
  const end = to ?? (unit.textContent ?? "").length;
  const walker = document.createTreeWalker(unit, NodeFilter.SHOW_TEXT);
  let seen = 0;
  let started = false;
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const length = node.textContent?.length ?? 0;
    if (!started && from <= seen + length) {
      range.setStart(node, from - seen);
      started = true;
    }
    if (started && end <= seen + length) {
      range.setEnd(node, end - seen);
      return range;
    }
    seen += length;
  }
  if (!started) return null;
  range.setEnd(unit, unit.childNodes.length);
  return range;
}

export function markNoteWords(root: HTMLElement, notes: Note[], translationId: string, secondId: string | null) {
  if (typeof CSS === "undefined" || !("highlights" in CSS)) return;
  const ranges: Range[] = [];
  for (const note of notes) {
    if (note.verse === null) continue;
    const last = note.verseTo ?? note.verse;
    const inSecond = secondId !== null && note.translationId === secondId;
    const exact = note.scope === "words" && (note.translationId === translationId || inSecond);
    const attribute = inSecond && note.scope === "words" ? "data-second-text" : "data-verse-text";
    for (let verse = note.verse; verse <= last; verse += 1) {
      const from = exact && verse === note.verse ? (note.from ?? 0) : 0;
      const to = exact && verse === last ? note.to : null;
      const range = rangeInVerse(root, verse, from, to, attribute);
      if (range) ranges.push(range);
    }
  }
  CSS.highlights.set(highlightName, new Highlight(...ranges));
}

export function clearNoteWords() {
  if (typeof CSS === "undefined" || !("highlights" in CSS)) return;
  CSS.highlights.delete(highlightName);
}
