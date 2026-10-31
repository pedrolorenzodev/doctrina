import type { CSSProperties } from "react";
import { prefersReducedMotion } from "@/lib/branch-motion";

type Part = [property: string, ms: number, ease: "standard" | "move" | "reveal" | "linear", delayMs?: number];

export const motionClassName = "transition-(--ask-tp) duration-(--ask-td) ease-(--ask-te) delay-(--ask-tw)";

export function motionStyle(...parts: Part[]): CSSProperties {
  return {
    "--ask-tp": parts.map(([property]) => property).join(", "),
    "--ask-td": parts.map(([, ms]) => `${ms}ms`).join(", "),
    "--ask-te": parts.map(([, , ease]) => (ease === "linear" ? "linear" : `var(--ease-${ease})`)).join(", "),
    "--ask-tw": parts.map(([, , , delay = 0]) => `${delay}ms`).join(", "),
  } as CSSProperties;
}

export const focusRingClassName =
  "outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid";

export type Enter = "pop" | "fade" | "word" | "pill" | "none";

const enterFrames: Record<Exclude<Enter, "none">, { frames: Keyframe[]; options: KeyframeAnimationOptions }> = {
  pop: {
    frames: [
      { opacity: 0, transform: "translateY(8px)" },
      { opacity: 1, transform: "none" },
    ],
    options: { duration: 420, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
  },
  fade: {
    frames: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 200, easing: "cubic-bezier(0.25, 0.1, 0.25, 1)", fill: "both" },
  },
  word: {
    frames: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 180, easing: "cubic-bezier(0.25, 0.1, 0.25, 1)", fill: "both" },
  },
  pill: {
    frames: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 200, delay: 80, easing: "cubic-bezier(0.25, 0.1, 0.25, 1)", fill: "both" },
  },
};

export function playEnter(element: HTMLElement | null, enter: Enter, delayMs = 0): void {
  if (!element || enter === "none" || prefersReducedMotion()) return;
  const { frames, options } = enterFrames[enter];
  element.animate(frames, { ...options, delay: (options.delay ?? 0) + delayMs });
}

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function scrollBoxTo(host: HTMLElement, to: number, ms: number): void {
  const from = host.scrollTop;
  const distance = to - from;
  if (prefersReducedMotion() || Math.abs(distance) < 1) {
    host.scrollTop = to;
    return;
  }
  const start = performance.now();
  let stopped = false;
  const stop = () => {
    stopped = true;
  };
  host.addEventListener("wheel", stop, { once: true, passive: true });
  host.addEventListener("touchstart", stop, { once: true, passive: true });
  const step = (now: number) => {
    if (stopped) return;
    const t = Math.min(1, (now - start) / ms);
    host.scrollTop = from + distance * easeInOutCubic(t);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
