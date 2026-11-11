const easeReveal = "cubic-bezier(0.22, 1, 0.36, 1)";
const fold = { ms: 380, exitMs: 180, rowMs: 420, rowDelayMs: 120, rowStaggerMs: 40, maxSteps: 8, shiftPx: 8 };
const foldAnimationId = "fold";

const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export function foldGroup(box: HTMLElement, rows: HTMLElement[], opening: boolean) {
  const start = box.hidden ? 0 : box.getBoundingClientRect().height;
  for (const animation of box.getAnimations({ subtree: true })) animation.cancel();
  if (opening) {
    box.hidden = false;
    if (prefersReducedMotion()) return;
    const marginTop = getComputedStyle(box).marginTop;
    const end = box.getBoundingClientRect().height;
    box.style.overflow = "hidden";
    box
      .animate(
        [
          { height: `${start}px`, marginTop: start ? marginTop : "0px" },
          { height: `${end}px`, marginTop },
        ],
        { duration: fold.ms, easing: easeReveal, id: foldAnimationId },
      )
      .finished.then(
        () => {
          box.style.overflow = "";
        },
        () => undefined,
      );
    rows.forEach((row, index) =>
      row.animate(
        [
          { opacity: 0, transform: `translateY(${fold.shiftPx}px)` },
          { opacity: 1, transform: "none" },
        ],
        {
          duration: fold.rowMs,
          delay: fold.rowDelayMs + Math.min(index, fold.maxSteps) * fold.rowStaggerMs,
          easing: easeReveal,
          fill: "backwards",
          id: foldAnimationId,
        },
      ),
    );
    return;
  }
  if (prefersReducedMotion()) {
    box.hidden = true;
    return;
  }
  box.style.overflow = "hidden";
  rows.forEach((row) =>
    row.animate([{ opacity: 1 }, { opacity: 0, transform: "scale(0.96)" }], {
      duration: fold.exitMs,
      easing: "ease-out",
      fill: "forwards",
      id: foldAnimationId,
    }),
  );
  box
    .animate(
      [
        { height: `${start}px`, marginTop: getComputedStyle(box).marginTop },
        { height: "0px", marginTop: "0px" },
      ],
      { duration: fold.ms, delay: fold.exitMs, easing: easeReveal, fill: "forwards", id: foldAnimationId },
    )
    .finished.then(
      () => {
        box.hidden = true;
        box.style.overflow = "";
        for (const animation of box.getAnimations({ subtree: true })) animation.cancel();
      },
      () => undefined,
    );
}
