import { snapToWords } from "@/lib/word-snap";

export type VerseRange = { verse: number; from: number; to: number };

export type ReaderSelection = { ranges: VerseRange[]; text: string; rect: DOMRect };

function offsetIn(unit: HTMLElement, node: Node, offset: number): number {
  const range = document.createRange();
  range.selectNodeContents(unit);
  range.setEnd(node, offset);
  return range.toString().length;
}

export function readSelection(root: HTMLElement): ReaderSelection | null {
  const selection = getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return null;
  const range = selection.getRangeAt(0);
  if (!root.contains(range.commonAncestorContainer)) return null;
  const ranges: VerseRange[] = [];
  const parts: string[] = [];
  for (const unit of root.querySelectorAll<HTMLElement>("[data-verse-text]")) {
    if (!range.intersectsNode(unit)) continue;
    const text = unit.textContent ?? "";
    const from = unit.contains(range.startContainer) ? offsetIn(unit, range.startContainer, range.startOffset) : 0;
    const to = unit.contains(range.endContainer) ? offsetIn(unit, range.endContainer, range.endOffset) : text.length;
    const snapped = snapToWords(text, from, to);
    if (!snapped) continue;
    ranges.push({ verse: Number(unit.dataset.verseText), from: snapped[0], to: snapped[1] });
    parts.push(text.slice(snapped[0], snapped[1]));
  }
  return ranges.length > 0 ? { ranges, text: parts.join(" "), rect: range.getBoundingClientRect() } : null;
}
