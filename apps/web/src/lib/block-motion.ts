import { easeReveal, prefersReducedMotion } from "@/lib/branch-motion";

const motion = { moveMs: 380, exitMs: 180, enterMs: 420, enterDelayMs: 120, shiftPx: 8 };
const animationId = "flip-block";

type Box = { x: number; y: number; width: number; height: number };

const isShown = (element: Element) => element.getClientRects().length > 0;
const blocksOf = (container: HTMLElement) => [...container.querySelectorAll<HTMLElement>("[data-flip-block]")];
const keyOf = (block: HTMLElement) => block.dataset.flipBlock ?? "";

function measure(container: HTMLElement, copy: boolean) {
  const boxes = new Map<string, Box>();
  const copies = new Map<string, HTMLElement>();
  for (const block of blocksOf(container)) {
    if (!isShown(block)) continue;
    const rect = block.getBoundingClientRect();
    const key = keyOf(block);
    boxes.set(key, { x: rect.left, y: rect.top, width: rect.width, height: rect.height });
    if (copy) copies.set(key, block.cloneNode(true) as HTMLElement);
  }
  return { boxes, copies };
}

function fadeOut(copy: HTMLElement, box: Box, ghosts: HTMLElement, origin: DOMRect) {
  copy.removeAttribute("data-flip-block");
  copy.removeAttribute("id");
  copy.querySelectorAll("[id]").forEach((child) => child.removeAttribute("id"));
  Object.assign(copy.style, {
    position: "absolute",
    left: `${box.x - origin.left}px`,
    top: `${box.y - origin.top}px`,
    width: `${box.width}px`,
    height: `${box.height}px`,
    margin: "0",
  });
  ghosts.append(copy);
  copy
    .animate([{ opacity: 1 }, { opacity: 0 }], { duration: motion.exitMs, easing: "ease-out", fill: "forwards" })
    .finished.then(
      () => copy.remove(),
      () => copy.remove(),
    );
}

export function flipBlocks(container: HTMLElement, ghosts: HTMLElement, mutate: () => void) {
  if (prefersReducedMotion()) {
    mutate();
    return;
  }
  const before = measure(container, true);
  for (const animation of container.getAnimations({ subtree: true })) {
    if (animation.id === animationId) animation.cancel();
  }
  mutate();
  const natural = measure(container, false);
  const leaving = [...before.boxes.keys()].filter((key) => !natural.boxes.has(key));
  const shrinks = [...natural.boxes].some(([key, box]) => (before.boxes.get(key)?.height ?? 0) > box.height + 1);
  const moveDelay = leaving.length > 0 || shrinks ? motion.exitMs : 0;
  const origin = ghosts.getBoundingClientRect();
  for (const key of leaving) {
    const box = before.boxes.get(key);
    const copy = before.copies.get(key);
    if (box && copy) fadeOut(copy, box, ghosts, origin);
  }
  const blocks = blocksOf(container).filter(isShown);
  for (const block of blocks) {
    const from = before.boxes.get(keyOf(block));
    const to = natural.boxes.get(keyOf(block));
    if (!from || !to || Math.abs(from.height - to.height) <= 1) continue;
    block.animate([{ height: `${from.height}px` }, { height: `${to.height}px` }], {
      duration: motion.moveMs,
      easing: easeReveal,
      delay: to.height < from.height ? motion.exitMs : 0,
      fill: "backwards",
      id: animationId,
    });
  }
  const after = measure(container, false);
  for (const block of blocks) {
    const key = keyOf(block);
    const from = before.boxes.get(key);
    const to = after.boxes.get(key);
    if (!to) continue;
    if (!from) {
      block.animate(
        [
          { opacity: 0, transform: `translateY(${motion.shiftPx}px)` },
          { opacity: 1, transform: "none" },
        ],
        {
          duration: motion.enterMs,
          delay: motion.enterDelayMs,
          easing: easeReveal,
          fill: "backwards",
          id: animationId,
        },
      );
      continue;
    }
    const dx = from.x - to.x;
    const dy = from.y - to.y;
    if (Math.abs(dx) <= 0.5 && Math.abs(dy) <= 0.5) continue;
    block.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], {
      duration: motion.moveMs,
      easing: easeReveal,
      delay: moveDelay,
      fill: "backwards",
      id: animationId,
    });
  }
}
