import { easeMove, prefersReducedMotion } from "@/lib/branch-motion";

const foldMs = 300;
const animationId = "stream-fold";

function boxOf(element: HTMLElement) {
  const style = getComputedStyle(element);
  return { height: `${element.offsetHeight}px`, paddingTop: style.paddingTop, paddingBottom: style.paddingBottom };
}

const flat = { height: "0px", paddingTop: "0px", paddingBottom: "0px", opacity: 0 };

function release(element: HTMLElement) {
  element.style.removeProperty("height");
  element.style.removeProperty("padding-top");
  element.style.removeProperty("padding-bottom");
  element.style.removeProperty("overflow");
}

export function foldBox(element: HTMLElement, open: boolean, animate = true): Promise<void> {
  if (!animate || prefersReducedMotion()) {
    element.hidden = !open;
    return Promise.resolve();
  }
  const full = { ...boxOf(element), opacity: 1 };
  element.style.overflow = "hidden";
  if (open) Object.assign(element.style, { height: "0px", paddingTop: "0px", paddingBottom: "0px" });
  const animation = element.animate(open ? [flat, full] : [full, flat], {
    duration: foldMs,
    easing: easeMove,
    fill: open ? "none" : "forwards",
    id: animationId,
  });
  return animation.finished.then(
    () => {
      release(element);
      if (open) return;
      element.hidden = true;
      animation.cancel();
    },
    () => undefined,
  );
}
