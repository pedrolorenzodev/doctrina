import { layoutTop, scrollOffset, scrollToY } from "@/lib/scroll";

const fadeMs = 280;
const layerAttribute = "data-ask-marks";
let clearTimer = 0;
let watcher: ResizeObserver | null = null;

function rangesOf(unit: HTMLElement, words: string[]): Range[] {
  const pattern = new RegExp(`\\b(${words.join("|")})\\b`, "gi");
  const ranges: Range[] = [];
  const walker = document.createTreeWalker(unit, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const content = node.textContent ?? "";
    for (const match of content.matchAll(pattern)) {
      const range = document.createRange();
      range.setStart(node, match.index);
      range.setEnd(node, match.index + match[0].length);
      ranges.push(range);
    }
  }
  return ranges;
}

function layerOf(root: HTMLElement): HTMLElement {
  const existing = root.querySelector<HTMLElement>(`[${layerAttribute}]`);
  if (existing) return existing;
  const layer = document.createElement("div");
  layer.setAttribute(layerAttribute, "");
  layer.setAttribute("aria-hidden", "true");
  layer.className = "note-overlay pointer-events-none absolute inset-0";
  root.prepend(layer);
  return layer;
}

function draw(root: HTMLElement, marks: Record<number, string[]>) {
  const origin = root.getBoundingClientRect();
  const boxes: HTMLElement[] = [];
  for (const [verse, words] of Object.entries(marks)) {
    const unit = root.querySelector<HTMLElement>(`[data-verse-text="${verse}"]`);
    if (!unit) continue;
    for (const range of rangesOf(unit, words)) {
      for (const rect of range.getClientRects()) {
        const box = document.createElement("div");
        box.className = "absolute rounded-2 bg-accent-weak";
        Object.assign(box.style, {
          left: `${rect.left - origin.left}px`,
          top: `${rect.top - origin.top}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        });
        boxes.push(box);
      }
    }
  }
  layerOf(root).replaceChildren(...boxes);
}

export function markWords(marks: Record<number, string[]>, firstVerse: number): void {
  const anchor = document.getElementById(`v-${firstVerse}`);
  const root = anchor?.closest<HTMLElement>("[data-chapter-text]");
  if (!anchor || !root) return;
  window.clearTimeout(clearTimer);
  draw(root, marks);
  watcher?.disconnect();
  watcher = new ResizeObserver(() => draw(root, marks));
  watcher.observe(root);
  const layer = layerOf(root);
  requestAnimationFrame(() => requestAnimationFrame(() => layer.setAttribute("data-shown", "")));
  const top = anchor.getBoundingClientRect().top;
  if (top < scrollOffset() || top > innerHeight - 160) scrollToY(layoutTop(anchor) - scrollOffset());
}

export function clearWords(): void {
  watcher?.disconnect();
  watcher = null;
  const layers = document.querySelectorAll<HTMLElement>(`[${layerAttribute}]`);
  for (const layer of layers) layer.removeAttribute("data-shown");
  window.clearTimeout(clearTimer);
  clearTimer = window.setTimeout(() => {
    for (const layer of layers) if (!layer.hasAttribute("data-shown")) layer.remove();
  }, fadeMs);
}
