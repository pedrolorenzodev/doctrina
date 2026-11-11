"use client";

import { useEffect } from "react";
import { scrollOffset, shiftScroll } from "@/lib/scroll";
import { prepareTreeChange, subscribeTree } from "@/lib/tree-visibility";

const treeMoveMs = 360;
const morphAnimationId = "rail-morph";

type Piece = { element: HTMLElement; parent: HTMLElement | null };
type Box = { x: number; y: number; bottom: number };

const boxOf = (element: HTMLElement): Box => {
  const rect = element.getBoundingClientRect();
  return { x: rect.left, y: rect.top, bottom: rect.bottom };
};

function piecesOf(main: HTMLElement): Piece[] {
  const top = [...main.children].filter(
    (child): child is HTMLElement =>
      child instanceof HTMLElement && child.tagName !== "SECTION" && !child.matches(".fixed, .sticky"),
  );
  const parts = [...main.querySelectorAll<HTMLElement>("[data-rail-part]")];
  const pieces: Piece[] = [...top, ...parts].map((element) => ({ element, parent: null }));
  for (const part of parts) {
    for (const item of part.querySelectorAll<HTMLElement>(":is(ul, ol, tbody) > :is(li, tr)")) {
      if (item.getClientRects().length > 0) pieces.push({ element: item, parent: part });
    }
  }
  return pieces;
}

type Prepared = { pieces: Piece[]; before: Map<HTMLElement, Box>; stuck: Set<HTMLElement> };

function morph(main: HTMLElement, { pieces, before, stuck }: Prepared) {
  const line = scrollOffset();
  const below = pieces.filter(({ element }) => (before.get(element)?.y ?? -Infinity) >= line && !stuck.has(element));
  const anchor = below.reduce<Piece | null>(
    (nearest, piece) =>
      !nearest || (before.get(piece.element)?.y ?? 0) < (before.get(nearest.element)?.y ?? 0) ? piece : nearest,
    null,
  );
  const anchorBefore = anchor ? before.get(anchor.element) : undefined;
  if (anchor && anchorBefore) {
    const shift = anchor.element.getBoundingClientRect().top - anchorBefore.y;
    if (Math.abs(shift) >= 1) shiftScroll(shift);
  }
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ease = getComputedStyle(main).getPropertyValue("--ease-smooth").trim();
  const after = new Map(pieces.map(({ element }) => [element, boxOf(element)]));
  const view = { top: -innerHeight / 2, bottom: innerHeight * 1.5 };
  for (const { element, parent } of pieces) {
    const from = before.get(element);
    const to = after.get(element);
    if (!from || !to) continue;
    const seen = (box: Box) => box.bottom > view.top && box.y < view.bottom;
    if (!seen(from) && !seen(to)) continue;
    const parentFrom = parent ? before.get(parent) : undefined;
    const parentTo = parent ? after.get(parent) : undefined;
    const dx = from.x - to.x - (parentFrom && parentTo ? parentFrom.x - parentTo.x : 0);
    const dy = from.y - to.y - (parentFrom && parentTo ? parentFrom.y - parentTo.y : 0);
    if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) continue;
    const animation = element.animate(
      [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "translate(0, 0)" }],
      { duration: treeMoveMs, easing: ease },
    );
    animation.id = morphAnimationId;
  }
}

export function RailMorph() {
  useEffect(() => {
    let pending: Prepared | null = null;
    const main = () => document.getElementById("content");
    const release = prepareTreeChange(() => {
      const content = main();
      if (!content) return;
      const pieces = piecesOf(content);
      pending = {
        pieces,
        before: new Map(pieces.map(({ element }) => [element, boxOf(element)])),
        stuck: new Set(
          [...content.querySelectorAll<HTMLElement>(".rail-head")].filter(
            (head) => getComputedStyle(head).position === "sticky",
          ),
        ),
      };
      for (const animation of content.getAnimations({ subtree: true })) {
        if (animation.id === morphAnimationId) animation.cancel();
      }
    });
    const unsubscribe = subscribeTree(() => {
      const content = main();
      const prepared = pending;
      pending = null;
      if (content && prepared) morph(content, prepared);
    });
    return () => {
      release();
      unsubscribe();
    };
  }, []);
  return null;
}
