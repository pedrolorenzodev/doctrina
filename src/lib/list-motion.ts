const easeReveal = "cubic-bezier(0.22, 1, 0.36, 1)";
const reveal = { ms: 420, stepMs: 60, shiftPx: 8 };
const flip = { moveMs: 380, exitMs: 180, delayMs: 120, staggerMs: 40, maxSteps: 8 };
const flipAnimationId = "flip";
const armLine = 1;

const armers = new WeakMap<HTMLElement, (item: HTMLElement) => void>();

const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const isShown = (element: Element) => element.getClientRects().length > 0;
const itemsOf = (list: HTMLElement) =>
  [...list.children].filter((child): child is HTMLElement => child instanceof HTMLElement);
const keyOf = (item: HTMLElement) => item.dataset.id ?? item.textContent?.trim().slice(0, 80) ?? "";

export function revealList(list: HTMLElement): () => void {
  if (prefersReducedMotion()) return () => undefined;
  const items = itemsOf(list).filter(isShown);
  if (items.length === 0) return () => undefined;
  const timers: number[] = [];
  const observer = new IntersectionObserver(
    (entries) => {
      const hits: HTMLElement[] = [];
      for (const entry of entries) {
        const item = entry.target as HTMLElement;
        if (!item.dataset.rvSeen) {
          item.dataset.rvSeen = "1";
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) observer.unobserve(item);
          else item.dataset.rv = "armed";
          continue;
        }
        if (entry.isIntersecting && item.dataset.rv === "armed") {
          observer.unobserve(item);
          hits.push(item);
        }
      }
      hits
        .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
        .forEach((item, index) => {
          item.style.setProperty("--reveal-index", String(index));
          item.dataset.rv = "shown";
          timers.push(
            window.setTimeout(
              () => {
                if (item.dataset.rv === "shown") delete item.dataset.rv;
              },
              reveal.ms + index * reveal.stepMs + 60,
            ),
          );
        });
    },
    { rootMargin: "0px" },
  );
  items.forEach((item) => observer.observe(item));
  let frame = 0;
  const releasePassed = () => {
    frame = 0;
    for (const item of itemsOf(list)) {
      if (item.dataset.rv !== "armed" || item.getBoundingClientRect().bottom >= 0) continue;
      observer.unobserve(item);
      delete item.dataset.rv;
    }
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(releasePassed);
  };
  addEventListener("scroll", onScroll, { passive: true });
  armers.set(list, (item) => {
    item.dataset.rvSeen = "1";
    item.dataset.rv = "armed";
    observer.observe(item);
  });
  return () => {
    removeEventListener("scroll", onScroll);
    cancelAnimationFrame(frame);
    observer.disconnect();
    timers.forEach((timer) => clearTimeout(timer));
    armers.delete(list);
    for (const item of itemsOf(list)) {
      delete item.dataset.rv;
      delete item.dataset.rvSeen;
    }
  };
}

type Box = { x: number; y: number; width: number; height: number };

function measure(list: HTMLElement) {
  const origin = list.getBoundingClientRect();
  const nodes = new Map<string, HTMLElement>();
  const boxes = new Map<string, Box>();
  for (const item of itemsOf(list)) {
    if (!isShown(item)) continue;
    const rect = item.getBoundingClientRect();
    const key = keyOf(item);
    nodes.set(key, item);
    boxes.set(key, { x: rect.left - origin.left, y: rect.top - origin.top, width: rect.width, height: rect.height });
  }
  return { nodes, boxes, height: origin.height };
}

function riseIn(item: HTMLElement, delay: number) {
  item.animate(
    [
      { opacity: 0, transform: `translateY(${reveal.shiftPx}px)` },
      { opacity: 1, transform: "none" },
    ],
    { duration: reveal.ms, delay, easing: easeReveal, fill: "backwards", id: flipAnimationId },
  );
}

export function enterList(list: HTMLElement, delayMs = flip.delayMs) {
  for (const item of itemsOf(list)) delete item.dataset.rv;
  if (prefersReducedMotion()) return;
  itemsOf(list)
    .filter(isShown)
    .forEach((item, index) => riseIn(item, delayMs + Math.min(index, flip.maxSteps) * flip.staggerMs));
}

export function flipList(list: HTMLElement, ghosts: HTMLElement, mutate: () => void) {
  if (prefersReducedMotion()) {
    mutate();
    return;
  }
  for (const animation of [...list.getAnimations({ subtree: true }), ...(list.parentElement?.getAnimations() ?? [])]) {
    if (animation.id === flipAnimationId) animation.cancel();
  }
  for (const item of itemsOf(list)) if (item.dataset.rv === "shown") delete item.dataset.rv;
  const before = measure(list);
  const armed = new Set([...before.nodes].filter(([, node]) => node.dataset.rv === "armed").map(([key]) => key));
  mutate();
  const after = measure(list);
  const listRect = list.getBoundingClientRect();
  const ghostRect = ghosts.getBoundingClientRect();
  for (const [key, node] of before.nodes) {
    if (after.nodes.has(key)) continue;
    const box = before.boxes.get(key);
    if (!box) continue;
    const ghost = node.cloneNode(true) as HTMLElement;
    ghost.removeAttribute("id");
    ghost.querySelectorAll("[id]").forEach((child) => child.removeAttribute("id"));
    Object.assign(ghost.style, {
      position: "absolute",
      left: `${box.x + listRect.left - ghostRect.left}px`,
      top: `${box.y + listRect.top - ghostRect.top}px`,
      width: `${box.width}px`,
      height: `${box.height}px`,
      margin: "0",
      listStyle: "none",
    });
    ghosts.append(ghost);
    ghost
      .animate([{ opacity: 1 }, { opacity: 0, transform: "scale(0.96)" }], {
        duration: flip.exitMs,
        easing: "ease-out",
        fill: "forwards",
      })
      .finished.then(
        () => ghost.remove(),
        () => ghost.remove(),
      );
  }
  const arm = armers.get(list);
  const belowTheFold = new Map<string, boolean>();
  for (const [key, node] of after.nodes)
    belowTheFold.set(key, node.getBoundingClientRect().top > innerHeight * armLine);
  let entering = 0;
  for (const [key, node] of after.nodes) {
    const from = before.boxes.get(key);
    const below = belowTheFold.get(key) ?? false;
    if (!from) {
      if (arm && below) {
        arm(node);
        continue;
      }
      riseIn(node, flip.delayMs + Math.min(entering++, flip.maxSteps) * flip.staggerMs);
      continue;
    }
    if (arm && armed.has(key) && node.dataset.rv !== "armed" && below) {
      arm(node);
      continue;
    }
    const to = after.boxes.get(key);
    if (!to) continue;
    const dx = from.x - to.x;
    const dy = from.y - to.y;
    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      node.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], {
        duration: flip.moveMs,
        easing: easeReveal,
        id: flipAnimationId,
      });
    }
  }
  if (Math.abs(after.height - before.height) > 1) {
    const shrinking = after.height < before.height;
    const heightHolder = getComputedStyle(list).columnCount === "auto" ? list : (list.parentElement ?? list);
    heightHolder.animate([{ height: `${before.height}px` }, { height: `${after.height}px` }], {
      duration: flip.moveMs,
      easing: easeReveal,
      delay: shrinking ? flip.exitMs : 0,
      fill: "backwards",
      id: flipAnimationId,
    });
  }
}
