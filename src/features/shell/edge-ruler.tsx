"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { scrollToElement } from "@/lib/scroll";

type RulerSection = {
  id: string;
  label: string;
};

type EdgeRulerProps = {
  label: string;
  sections: RulerSection[];
};

const activeLine = 0.35;
const lockMs = 800;
const bulgeFloor = 16;

function activeIndex(sections: RulerSection[]): number {
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) return sections.length - 1;
  let active = 0;
  sections.forEach((section, index) => {
    const element = document.getElementById(section.id);
    if (element && element.getBoundingClientRect().top < innerHeight * activeLine) active = index;
  });
  return active;
}

function bulge(index: number, hovered: number | null, count: number): number {
  if (hovered === null) return 1;
  return Math.max(1, 2.5 + 2 * Math.cos((Math.PI * Math.abs(index - hovered)) / Math.max(count, bulgeFloor)));
}

export function EdgeRuler({ label, sections }: EdgeRulerProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const lock = useRef<number | null>(null);
  const lockTimer = useRef<number | undefined>(undefined);
  const root = useRef<HTMLElement>(null);
  const reach = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      if (lock.current === null) setActive(activeIndex(sections));
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
      clearTimeout(lockTimer.current);
    };
  }, [sections]);

  if (sections.length < 2) return null;

  function nearestTick(clientY: number): number {
    const ticks = root.current?.querySelectorAll<HTMLElement>("[data-tick]") ?? [];
    let best = 0;
    let bestDistance = Infinity;
    ticks.forEach((tick, index) => {
      const rect = tick.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - clientY);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });
    return best;
  }

  function jump(index: number) {
    const target = sections[index];
    const element = target ? document.getElementById(target.id) : null;
    if (!element) return;
    lock.current = index;
    setActive(index);
    clearTimeout(lockTimer.current);
    lockTimer.current = window.setTimeout(() => {
      lock.current = null;
    }, lockMs);
    scrollToElement(element);
  }

  return (
    <nav
      ref={root}
      aria-label={label}
      onPointerMove={(event) => setHovered(nearestTick(event.clientY))}
      onPointerLeave={() => setHovered(null)}
      onClick={(event) => {
        if (event.target === event.currentTarget || event.target === reach.current) jump(nearestTick(event.clientY));
      }}
      className="fixed top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end edge-right md:flex"
    >
      <span ref={reach} aria-hidden="true" className="absolute -inset-3 hidden pointer-coarse:block" />
      {sections.map((section, index) => (
        <button
          key={section.id}
          type="button"
          data-tick
          data-active={index === active || undefined}
          data-hover={index === hovered || undefined}
          aria-label={section.label}
          aria-current={index === active ? "true" : undefined}
          onClick={() => jump(index)}
          onFocus={() => setHovered(index)}
          onBlur={() => setHovered(null)}
          className="group/tick relative flex h-3.25 w-16 cursor-pointer items-center justify-end p-0"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-22.5 -translate-y-1/2 translate-x-1.25 text-ruler font-normal whitespace-nowrap text-ink opacity-0 font-head group-data-hover/tick:translate-x-0 group-data-hover/tick:opacity-100 group-data-hover/tick:transition group-data-hover/tick:duration-200 group-data-hover/tick:ease-standard"
          >
            {section.label}
          </span>
          <span
            aria-hidden="true"
            style={{ "--k": bulge(index, hovered, sections.length), "--dl": `${900 + index * 100}ms` } as CSSProperties}
            className="block h-0.75 w-4 rounded-2 bg-ink opacity-30 tick-fill group-data-active/tick:bg-accent group-data-active/tick:opacity-100 group-data-hover/tick:opacity-100"
          />
        </button>
      ))}
    </nav>
  );
}
