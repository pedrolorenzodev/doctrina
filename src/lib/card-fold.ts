import { easeReveal, prefersReducedMotion } from "@/lib/branch-motion";

const foldMs = 380;
const exitMs = 180;
const animationId = "card-fold";

export function foldCard(element: HTMLElement, open: boolean): void {
  for (const animation of element.getAnimations()) animation.cancel();
  if (open) {
    element.hidden = false;
    if (prefersReducedMotion()) return;
    const end = element.scrollHeight;
    element.animate(
      [
        { height: "0px", opacity: 0 },
        { height: `${end}px`, opacity: 1 },
      ],
      { duration: foldMs, easing: easeReveal, id: animationId },
    );
    return;
  }
  if (prefersReducedMotion()) {
    element.hidden = true;
    return;
  }
  const start = element.offsetHeight;
  element.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: exitMs,
    easing: "ease-in",
    fill: "forwards",
    id: animationId,
  });
  element
    .animate([{ height: `${start}px` }, { height: "0px" }], {
      duration: foldMs,
      delay: exitMs,
      easing: easeReveal,
      fill: "forwards",
      id: animationId,
    })
    .finished.then(
      () => {
        element.hidden = true;
        for (const animation of element.getAnimations()) animation.cancel();
      },
      () => undefined,
    );
}
