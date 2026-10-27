import type Lenis from "lenis";

const jumpKeys = ["PageUp", "PageDown", "ArrowUp", "ArrowDown", "Home", "End", " "];

let smooth: Lenis | null = null;
let stopJump: (() => void) | null = null;

export function registerSmoothScroll(instance: Lenis | null) {
  smooth = instance;
}

export function isSmoothScrolling(): boolean {
  return stopJump !== null;
}

export function scrollOffset(): number {
  const style = getComputedStyle(document.documentElement);
  return (
    parseFloat(style.getPropertyValue("--spacing-top")) + parseFloat(style.getPropertyValue("--spacing-scroll-offset"))
  );
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

export function scrollToY(target: number, onDone?: () => void) {
  stopJump?.();
  const y = Math.max(0, Math.min(document.documentElement.scrollHeight - innerHeight, target));
  const distance = y - scrollY;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(distance) < 2) {
    scrollTo(0, y);
    onDone?.();
    return;
  }
  const duration = Math.min(720, 380 + Math.abs(distance) * 0.08);
  const onKey = (event: KeyboardEvent) => {
    if (jumpKeys.includes(event.key)) stop();
  };
  let frame = 0;
  const stop = () => {
    cancelAnimationFrame(frame);
    removeEventListener("keydown", onKey);
    removeEventListener("wheel", stop);
    removeEventListener("touchstart", stop);
    if (smooth) smooth.scrollTo(scrollY, { immediate: true, force: true });
    stopJump = null;
  };
  addEventListener("keydown", onKey);
  const done = () => {
    removeEventListener("keydown", onKey);
    removeEventListener("wheel", stop);
    removeEventListener("touchstart", stop);
    stopJump = null;
    onDone?.();
  };
  stopJump = stop;
  addEventListener("wheel", stop, { passive: true, once: true });
  addEventListener("touchstart", stop, { passive: true, once: true });
  smooth?.resize();
  const start = performance.now();
  const from = scrollY;
  const step = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    const position = from + distance * easeInOutCubic(progress);
    if (smooth) smooth.scrollTo(position, { immediate: true, force: true });
    else scrollTo(0, position);
    if (progress < 1) frame = requestAnimationFrame(step);
    else done();
  };
  frame = requestAnimationFrame(step);
}

export function layoutTop(element: HTMLElement): number {
  let top = 0;
  for (
    let node: HTMLElement | null = element;
    node;
    node = node.offsetParent instanceof HTMLElement ? node.offsetParent : null
  ) {
    top += node.offsetTop;
  }
  return top;
}

export function scrollToLayoutPosition(element: HTMLElement, instant = false) {
  const target = layoutTop(element) - scrollOffset();
  if (!instant) {
    scrollToY(target);
    return;
  }
  jumpToY(target);
}

export function jumpToY(target: number) {
  const y = Math.max(0, Math.min(document.documentElement.scrollHeight - innerHeight, target));
  scrollTo(0, y);
  smooth?.resize();
  smooth?.scrollTo(y, { immediate: true, force: true });
}

const quietMs = 120;
let quietUntil = 0;

export function scrollIsQuiet(): boolean {
  return performance.now() < quietUntil;
}

export function jumpQuietly(target: number) {
  quietUntil = performance.now() + quietMs;
  jumpToY(target);
}

export function scrollToElement(element: HTMLElement) {
  scrollToY(element.getBoundingClientRect().top + scrollY - scrollOffset());
}
