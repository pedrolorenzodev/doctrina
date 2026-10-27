"use client";

import { useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import { easeReveal, prefersReducedMotion } from "@/lib/branch-motion";

export type PanelSection = {
  id: string;
  label: string;
  count?: number;
  content: ReactNode | null;
};

type PanelSectionsProps = {
  label: string;
  sections: PanelSection[];
  forceId: string | null;
  flip: (mutate: () => void) => void;
};

const exitMs = 140;
const enterMs = 260;
const shiftPx = 16;
const exitEase = "cubic-bezier(0.4, 0, 1, 1)";

export function PanelSections({ label, sections, forceId, flip }: PanelSectionsProps) {
  const body = useRef<HTMLDivElement>(null);
  const exiting = useRef(false);
  const target = useRef<string | null>(null);
  const [chosen, setChosen] = useState<string | null>(null);
  const [shown, setShown] = useState<string | null>(null);
  const [wasForced, setWasForced] = useState(forceId);

  const live = sections.filter((section) => section.content !== null);
  const valid = (id: string | null) => live.find((section) => section.id === id)?.id ?? live[0]?.id ?? null;
  const ids = sections.map((section) => section.id);
  const value = valid(chosen);
  const current = sections.find((section) => section.id === valid(shown));

  const swap = (id: string) => {
    const direction = ids.indexOf(id) > ids.indexOf(valid(shown) ?? id) ? 1 : -1;
    const element = body.current;
    if (!element || prefersReducedMotion()) {
      flip(() => setShown(id));
      return;
    }
    exiting.current = true;
    const opacity = parseFloat(getComputedStyle(element).opacity);
    element.getAnimations().forEach((animation) => animation.cancel());
    element
      .animate(
        [
          { opacity, transform: "none" },
          { opacity: 0, transform: `translateX(${-direction * shiftPx}px)` },
        ],
        { duration: exitMs, easing: exitEase, fill: "forwards" },
      )
      .finished.then(
        () => {
          exiting.current = false;
          const next = target.current ?? id;
          const nextDirection = ids.indexOf(next) > ids.indexOf(valid(shown) ?? next) ? 1 : -1;
          element.getAnimations().forEach((animation) => animation.cancel());
          flip(() => flushSync(() => setShown(next)));
          element.animate(
            [
              { opacity: 0.001, transform: `translateX(${nextDirection * shiftPx}px)` },
              { opacity: 1, transform: "none" },
            ],
            { duration: enterMs, easing: easeReveal, fill: "backwards" },
          );
        },
        () => {
          exiting.current = false;
        },
      );
  };

  const pick = (id: string) => {
    if (id === value || !live.some((section) => section.id === id)) return;
    setChosen(id);
    target.current = id;
    if (!exiting.current) swap(id);
  };

  if (forceId !== wasForced) {
    setWasForced(forceId);
    if (forceId) {
      setChosen(forceId);
      setShown(forceId);
    }
  }

  if (sections.length === 0) return null;
  return (
    <>
      <div data-flip-block="sections-strip" className="flex">
        <SegmentedFilter
          stretch
          label={label}
          value={value ?? ""}
          onChange={pick}
          options={sections.map((section) => ({
            id: section.id,
            label: section.label,
            count: section.count,
            inert: section.content === null,
          }))}
        />
      </div>
      <div ref={body} data-flip-block="sections-body" role="region" aria-label={current?.label} className="flow-root">
        {current?.content}
      </div>
    </>
  );
}
