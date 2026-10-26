import { easeReveal } from "@/lib/branch-motion";

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

type Box = { x: number; y: number; width: number; height: number };

function boxWithin(nav: HTMLElement, element: HTMLElement): Box {
  const navRect = nav.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left - navRect.left + nav.scrollLeft,
    y: rect.top - navRect.top + nav.scrollTop,
    width: rect.width,
    height: rect.height,
  };
}

export function travelMark(nav: HTMLElement, fromRow: HTMLElement, toRow: HTMLElement, onEnd: () => void): () => void {
  const previous = nav.querySelector<HTMLElement>("[data-mark]");
  const from = previous ? boxWithin(nav, previous) : boxWithin(nav, fromRow);
  previous?.remove();
  const to = boxWithin(nav, toRow);
  const mark = document.createElement("span");
  mark.dataset.mark = "";
  mark.setAttribute("aria-hidden", "true");
  mark.className = "pointer-events-none absolute z-0 rounded-6 bg-accent-weak shadow-current";
  Object.assign(mark.style, {
    left: `${to.x}px`,
    top: `${to.y}px`,
    width: `${to.width}px`,
    height: `${to.height}px`,
  });
  nav.appendChild(mark);
  const animation = mark.animate(
    [
      {
        transform: `translate(${from.x - to.x}px, ${from.y - to.y}px)`,
        width: `${from.width}px`,
        height: `${from.height}px`,
      },
      { transform: "none", width: `${to.width}px`, height: `${to.height}px` },
    ],
    { duration: markTravelMs, easing: easeReveal },
  );
  animation.finished.then(
    () => {
      mark.remove();
      onEnd();
    },
    () => undefined,
  );
  return () => {
    animation.cancel();
    mark.remove();
  };
}
