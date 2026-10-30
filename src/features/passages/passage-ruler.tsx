"use client";

import { useState, type CSSProperties } from "react";

type PassageRulerProps = {
  label: string;
  titles: string[];
  current: number;
  onSelect: (index: number) => void;
};

const tickPitch = 18;
const tickCenter = 11;
const bulgeFloor = 16;

function bulge(index: number, hovered: number | null, count: number): number {
  if (hovered === null) return 1;
  return Math.max(1, 2.5 + 2 * Math.cos((Math.PI * Math.abs(index - hovered)) / Math.max(count, bulgeFloor)));
}

export function PassageRuler({ label, titles, current, onSelect }: PassageRulerProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <>
      <nav
        aria-label={label}
        style={{ "--rail": `${titles.length * tickPitch}px` } as CSSProperties}
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse") return;
          const box = event.currentTarget.getBoundingClientRect();
          const index = Math.round((event.clientY - box.top - tickCenter) / tickPitch);
          setHovered(Math.max(0, Math.min(titles.length - 1, index)));
        }}
        onPointerLeave={() => setHovered(null)}
        className="relative h-(--rail) sticky-below-switcher max-sm:hidden sm:sticky"
      >
        {titles.map((title, index) => (
          <button
            key={title}
            type="button"
            aria-label={title}
            aria-current={index === current ? "true" : undefined}
            data-current={index === current ? "" : undefined}
            data-hover={index === hovered ? "" : undefined}
            onClick={() => onSelect(index)}
            onFocus={() => setHovered(index)}
            onBlur={() => setHovered(null)}
            style={{ "--y": `${index * tickPitch}px`, "--k": bulge(index, hovered, titles.length) } as CSSProperties}
            className="group/tick absolute top-(--y) left-0 block h-4.5 w-full cursor-pointer p-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-0 -mt-0.375 h-0.75 w-4 rounded-2 bg-ink opacity-30 passage-tick group-data-current/tick:bg-accent group-data-current/tick:opacity-100 group-data-hover/tick:opacity-100"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-21 -translate-x-1.25 -translate-y-1/2 font-head text-ruler font-normal whitespace-nowrap text-ink opacity-0 group-data-hover/tick:translate-x-0 group-data-hover/tick:opacity-100 group-data-hover/tick:transition group-data-hover/tick:duration-200 group-data-hover/tick:ease-standard"
            >
              {title}
            </span>
          </button>
        ))}
      </nav>
      <nav aria-label={label} className="flex h-8.5 items-end justify-between px-0.5 sm:hidden">
        {titles.map((title, index) => (
          <button
            key={title}
            type="button"
            aria-label={title}
            aria-current={index === current ? "true" : undefined}
            data-current={index === current ? "" : undefined}
            onClick={() => onSelect(index)}
            className="group/strip grid h-full flex-1 cursor-pointer place-items-end p-0"
          >
            <span
              aria-hidden="true"
              className="h-3.5 w-0.75 rounded-2 bg-ink opacity-30 passage-strip-tick group-data-current/strip:h-6.5 group-data-current/strip:bg-accent group-data-current/strip:opacity-100"
            />
          </button>
        ))}
      </nav>
    </>
  );
}
