import type { Note } from "@/lib/notes";

const fadeMs = 280;
let clearTimer = 0;

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

function overlayOf(root: HTMLElement): HTMLElement {
  const existing = root.querySelector<HTMLElement>("[data-note-overlay]");
  if (existing) return existing;
  const layer = document.createElement("div");
  layer.setAttribute("data-note-overlay", "");
  layer.setAttribute("aria-hidden", "true");
  layer.className = "note-overlay pointer-events-none absolute inset-0";
  root.append(layer);
  return layer;
}

export function markNoteWords(root: HTMLElement, notes: Note[], translationId: string, secondId: string | null) {
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
  window.clearTimeout(clearTimer);
  const layer = overlayOf(root);
  const origin = root.getBoundingClientRect();
  layer.replaceChildren(
    ...ranges.map((range) => {
      const group = document.createElement("div");
      group.setAttribute("data-note-range", "");
      for (const rect of range.getClientRects()) {
        const box = document.createElement("div");
        box.className = "absolute rounded-2 bg-accent-weak";
        Object.assign(box.style, {
          left: `${rect.left - origin.left}px`,
          top: `${rect.top - origin.top}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        });
        group.append(box);
      }
      return group;
    }),
  );
  requestAnimationFrame(() => layer.setAttribute("data-shown", ""));
}

export function clearNoteWords() {
  const layers = document.querySelectorAll<HTMLElement>("[data-note-overlay]");
  for (const layer of layers) layer.removeAttribute("data-shown");
  window.clearTimeout(clearTimer);
  clearTimer = window.setTimeout(() => {
    for (const layer of layers) if (!layer.hasAttribute("data-shown")) layer.replaceChildren();
  }, fadeMs);
}
