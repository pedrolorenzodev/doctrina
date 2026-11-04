import { easeReveal, prefersReducedMotion } from "@/lib/branch-motion";

const motion = { heightMs: 380, closeFadeMs: 120, closeDelayMs: 100, fadeMs: 180 };
const animationId = "simplifier";

const heightOf = (element: HTMLElement) => element.getBoundingClientRect().height;

export function cancelPanelMotion(box: HTMLElement) {
  for (const animation of box.getAnimations({ subtree: true })) {
    if (animation.id === animationId) animation.cancel();
  }
}

export function openPanelBox(box: HTMLElement, inner: HTMLElement, fade: boolean) {
  if (prefersReducedMotion()) return;
  const running = box.getAnimations().some((animation) => animation.id === animationId);
  const from = running ? heightOf(box) : 0;
  const startOpacity = running ? Number(getComputedStyle(inner).opacity) : 0;
  cancelPanelMotion(box);
  box.animate([{ height: `${from}px` }, { height: `${heightOf(inner)}px` }], {
    duration: motion.heightMs,
    easing: easeReveal,
    id: animationId,
  });
  if (!fade && !running) return;
  inner.animate([{ opacity: startOpacity }, { opacity: 1 }], {
    duration: motion.heightMs,
    easing: easeReveal,
    id: animationId,
  });
}

export function closePanelBox(box: HTMLElement, inner: HTMLElement): Promise<void> {
  if (prefersReducedMotion()) return Promise.resolve();
  const from = heightOf(box);
  cancelPanelMotion(box);
  inner.animate([{ opacity: Number(getComputedStyle(inner).opacity) }, { opacity: 0 }], {
    duration: motion.closeFadeMs,
    easing: "ease",
    fill: "forwards",
    id: animationId,
  });
  return box
    .animate([{ height: `${from}px` }, { height: "0px" }], {
      duration: motion.heightMs,
      delay: motion.closeDelayMs,
      easing: easeReveal,
      fill: "both",
      id: animationId,
    })
    .finished.then(
      () => undefined,
      () => Promise.reject(new Error("interrupted")),
    );
}

export function glideHeight(wrap: HTMLElement, from: number) {
  if (prefersReducedMotion()) return;
  const to = heightOf(wrap);
  if (Math.abs(to - from) <= 1) return;
  wrap.animate([{ height: `${from}px` }, { height: `${to}px` }], {
    duration: motion.heightMs,
    easing: easeReveal,
    id: animationId,
  });
}

export function crossfade(incoming: HTMLElement, outgoing: HTMLElement | null) {
  if (prefersReducedMotion()) {
    outgoing?.remove();
    return;
  }
  const options = { duration: motion.fadeMs, easing: "cubic-bezier(0.25, 0.1, 0.25, 1)", id: animationId };
  incoming.animate([{ opacity: 0 }, { opacity: 1 }], options);
  if (!outgoing) return;
  const gone = () => outgoing.remove();
  outgoing.animate([{ opacity: 1 }, { opacity: 0 }], { ...options, fill: "forwards" }).finished.then(gone, gone);
}
