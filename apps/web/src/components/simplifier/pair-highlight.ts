const highlightName = "simplifier-pair";

function rangeOf(root: HTMLElement, sentence: string): Range | null {
  const text = (root.textContent ?? "").replace(/ /g, " ");
  const at = text.indexOf(sentence);
  if (at < 0) return null;
  const range = document.createRange();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let offset = 0;
  let started = false;
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const length = node.textContent?.length ?? 0;
    if (!started && at < offset + length) {
      range.setStart(node, at - offset);
      started = true;
    }
    if (started && at + sentence.length <= offset + length) {
      range.setEnd(node, at + sentence.length - offset);
      return range;
    }
    offset += length;
  }
  return null;
}

export function showPair(root: HTMLElement | null, sentence: string | null) {
  if (!("highlights" in CSS)) return;
  const range = root && sentence ? rangeOf(root, sentence) : null;
  if (range) CSS.highlights.set(highlightName, new Highlight(range));
  else CSS.highlights.delete(highlightName);
}
