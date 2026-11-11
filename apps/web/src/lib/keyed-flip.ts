const easeReveal = "cubic-bezier(0.22, 1, 0.36, 1)";
const motion = { moveMs: 380, exitMs: 180, enterMs: 420, enterDelayMs: 120, staggerMs: 40, maxSteps: 8, shiftPx: 8 };
const animationId = "keyed-flip";

const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const keyed = (box: HTMLElement) => [...box.querySelectorAll<HTMLElement>("[data-k]")];
const keyedParent = (element: HTMLElement, box: HTMLElement) => {
  const parent = element.parentElement?.closest<HTMLElement>("[data-k]");
  return parent && box.contains(parent) ? parent : null;
};

export function flipKeyed(box: HTMLElement, ghosts: HTMLElement, mutate: () => void) {
  if (prefersReducedMotion()) {
    mutate();
    return;
  }
  const boxBefore = box.getBoundingClientRect();
  const heightBefore = boxBefore.height;
  const before = new Map<string, { element: HTMLElement; rect: DOMRect; opacity: number }>();
  for (const element of keyed(box)) {
    before.set(element.dataset.k!, {
      element,
      rect: element.getBoundingClientRect(),
      opacity: Number(getComputedStyle(element).opacity),
    });
  }
  for (const animation of box.getAnimations({ subtree: true })) {
    if (animation.id === animationId) animation.cancel();
  }

  mutate();

  const heightAfter = box.offsetHeight;
  const boxAfter = box.getBoundingClientRect();
  const kept = new Set<string>();
  const shifts = new Map<HTMLElement, number>();
  const now = keyed(box);
  for (const element of now) {
    const key = element.dataset.k!;
    kept.add(key);
    const old = before.get(key);
    if (old) {
      shifts.set(element, old.rect.top - boxBefore.top - (element.getBoundingClientRect().top - boxAfter.top));
    }
  }
  let entering = 0;
  for (const element of now) {
    const shift = shifts.get(element);
    if (shift === undefined) {
      element.animate(
        [
          { opacity: 0, transform: `translateY(${motion.shiftPx}px)` },
          { opacity: 1, transform: "none" },
        ],
        {
          duration: motion.enterMs,
          delay: motion.enterDelayMs + Math.min(entering++, motion.maxSteps) * motion.staggerMs,
          easing: easeReveal,
          fill: "backwards",
          id: animationId,
        },
      );
      continue;
    }
    const parent = keyedParent(element, box);
    const relative = shift - (parent ? (shifts.get(parent) ?? 0) : 0);
    const opacity = before.get(element.dataset.k!)!.opacity;
    const parentOpacity = parent ? (before.get(parent.dataset.k!)?.opacity ?? 1) : 1;
    const fading = opacity < 1 && parentOpacity >= 1;
    if (Math.abs(relative) > 0.5 || fading) {
      element.animate(
        [
          { transform: `translateY(${relative}px)`, opacity: fading ? opacity : 1 },
          { transform: "none", opacity: 1 },
        ],
        { duration: motion.moveMs, easing: easeReveal, id: animationId },
      );
    }
  }
  const origin = ghosts.getBoundingClientRect();
  for (const [key, { element, rect, opacity }] of before) {
    if (kept.has(key)) continue;
    const parent = element.parentElement?.closest<HTMLElement>("[data-k]");
    if (parent && !kept.has(parent.dataset.k!) && before.has(parent.dataset.k!)) continue;
    const ghost = element.cloneNode(true) as HTMLElement;
    ghost.removeAttribute("data-k");
    ghost.querySelectorAll("[data-k]").forEach((child) => child.removeAttribute("data-k"));
    ghost.querySelectorAll("[id]").forEach((child) => child.removeAttribute("id"));
    Object.assign(ghost.style, {
      position: "absolute",
      left: `${rect.left - origin.left}px`,
      top: `${rect.top - origin.top}px`,
      width: `${rect.width}px`,
      margin: "0",
      listStyle: "none",
    });
    ghosts.append(ghost);
    ghost
      .animate(
        [
          { opacity, transform: "none" },
          { opacity: 0, transform: "scale(0.96)" },
        ],
        { duration: motion.exitMs, easing: "ease-out", fill: "forwards" },
      )
      .finished.then(
        () => ghost.remove(),
        () => ghost.remove(),
      );
  }
  if (Math.abs(heightBefore - heightAfter) > 1) {
    box.animate(
      [
        { height: `${heightBefore}px`, overflow: "hidden" },
        { height: `${heightAfter}px`, overflow: "hidden" },
      ],
      {
        duration: motion.moveMs,
        delay: heightAfter < heightBefore ? motion.exitMs : 0,
        easing: easeReveal,
        fill: "backwards",
        id: animationId,
      },
    );
  }
}
