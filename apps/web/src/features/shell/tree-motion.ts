import { easeReveal } from "@/lib/branch-motion";

const [bx1, by1, bx2, by2] = (easeReveal.match(/[\d.]+/g) ?? []).map(Number) as [number, number, number, number];

function eased(x: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const cx = 3 * bx1;
  const bx = 3 * (bx2 - bx1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * by1;
  const by = 3 * (by2 - by1) - cy;
  const ay = 1 - cy - by;
  let low = 0;
  let high = 1;
  let t = x;
  for (let step = 0; step < 24; step += 1) {
    const at = ((ax * t + bx) * t + cx) * t;
    if (Math.abs(at - x) < 1e-6) break;
    if (at < x) low = t;
    else high = t;
    t = (low + high) / 2;
  }
  return ((ay * t + by) * t + cy) * t;
}

export const markTravelMs = 360;

export function visibleRow(nav: HTMLElement, id: string): HTMLElement | null {
  let item = nav.querySelector<HTMLElement>(`li[data-id="${CSS.escape(id)}"]`);
  while (item) {
    const row = item.querySelector<HTMLElement>(":scope > [data-row]");
    if (row && row.offsetParent !== null) return row;
    item = item.parentElement?.closest<HTMLElement>("li[data-id]") ?? null;
  }
  return null;
}

export type Box = { x: number; y: number; width: number; height: number };

export function boxWithin(nav: HTMLElement, element: HTMLElement): Box {
  const navRect = nav.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left - navRect.left + nav.scrollLeft,
    y: rect.top - navRect.top + nav.scrollTop,
    width: rect.width,
    height: rect.height,
  };
}

export function travelMark(
  nav: HTMLElement,
  from: Box,
  toRow: HTMLElement,
  onEnd: () => void,
  settlingShift = 0,
  scrollTo: number | null = null,
): () => void {
  const landing = boxWithin(nav, toRow);
  const to = { ...landing, y: landing.y - settlingShift };
  const mark = document.createElement("span");
  mark.dataset.mark = "";
  mark.setAttribute("aria-hidden", "true");
  mark.className = "pointer-events-none absolute z-0 rounded-6 row-current";
  Object.assign(mark.style, {
    left: `${to.x}px`,
    top: `${to.y}px`,
  });
  const place = (progress: number) => {
    const at = (a: number, b: number) => a + (b - a) * progress;
    mark.style.transform = `translate(${at(from.x - to.x, 0)}px, ${at(from.y - to.y, 0)}px)`;
    mark.style.width = `${at(from.width, to.width)}px`;
    mark.style.height = `${at(from.height, to.height)}px`;
  };
  place(0);
  nav.appendChild(mark);
  const scrollFrom = nav.scrollTop;
  let taken = scrollTo === null;
  const takeOver = () => {
    taken = true;
  };
  nav.addEventListener("wheel", takeOver, { passive: true });
  nav.addEventListener("pointerdown", takeOver, { passive: true });
  let frame = 0;
  let begun: number | null = null;
  const end = () => {
    cancelAnimationFrame(frame);
    nav.removeEventListener("wheel", takeOver);
    nav.removeEventListener("pointerdown", takeOver);
    mark.remove();
  };
  const step = (now: number) => {
    begun ??= now;
    const progress = eased((now - begun) / markTravelMs);
    place(progress);
    if (!taken && scrollTo !== null) nav.scrollTop = scrollFrom + (scrollTo - scrollFrom) * progress;
    if (now - begun < markTravelMs) {
      frame = requestAnimationFrame(step);
      return;
    }
    end();
    onEnd();
  };
  frame = requestAnimationFrame(step);
  return end;
}
