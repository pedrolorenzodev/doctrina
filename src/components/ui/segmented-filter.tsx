"use client";

import { useLayoutEffect, useRef, useState } from "react";

type SegmentedOption = {
  id: string;
  label: string;
  count?: number | undefined;
  inert?: boolean;
};

type SegmentedFilterProps = {
  label: string;
  options: SegmentedOption[];
  value: string;
  onChange: (id: string) => void;
  stretch?: boolean;
};

type Box = { x: number; w: number };

export function SegmentedFilter({ label, options, value, onChange, stretch = false }: SegmentedFilterProps) {
  const group = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box | null>(null);
  const [settled, setSettled] = useState(false);

  useLayoutEffect(() => {
    const element = group.current;
    if (!element) return;
    const measure = () => {
      const pressed = element.querySelector<HTMLElement>('[aria-pressed="true"]');
      if (pressed) setBox({ x: pressed.offsetLeft, w: pressed.offsetWidth });
    };
    measure();
    const observer = new ResizeObserver(measure);
    element.querySelectorAll("button").forEach((button) => observer.observe(button));
    return () => observer.disconnect();
  }, [value, options]);

  useLayoutEffect(() => {
    if (!box || settled) return;
    const frame = requestAnimationFrame(() => setSettled(true));
    return () => cancelAnimationFrame(frame);
  }, [box, settled]);

  return (
    <div
      ref={group}
      role="group"
      aria-label={label}
      data-ready={box ? "" : undefined}
      className={`group/seg relative gap-0.5 rounded-8 border border-rule p-0.75 ${stretch ? "mb-4 flex w-full" : "mb-4.5 inline-flex max-sm:flex max-sm:w-full"}`}
    >
      {box ? (
        <span
          aria-hidden="true"
          data-instant={settled ? undefined : ""}
          data-slide-indicator=""
          style={{ "--slide-x": `${box.x}px`, "--slide-w": `${box.w}px` } as React.CSSProperties}
          className={`slide-indicator pointer-events-none absolute top-0.75 bottom-0.75 left-0 w-(--slide-w) translate-x-(--slide-x) rounded-6 bg-accent-weak ${stretch ? "shadow-current-underline" : ""}`}
        />
      ) : null}
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={option.id === value}
          onClick={() => {
            if (!option.inert) onChange(option.id);
          }}
          className={`relative inline-flex min-h-8.5 cursor-pointer items-center justify-center gap-1.75 rounded-6 py-1.5 text-btn leading-label text-ink-2 ${stretch ? "flex-1 px-2" : "px-3 max-sm:flex-1 max-sm:px-2"} transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:bg-accent-weak aria-pressed:font-medium aria-pressed:text-ink group-data-ready/seg:aria-pressed:bg-transparent pointer-coarse:min-h-11`}
        >
          {stretch ? (
            <span data-label={option.label} className="reserve-bold inline-grid">
              {option.label}
            </span>
          ) : (
            option.label
          )}
          {option.count === undefined ? null : (
            <span className="text-ui-2xs leading-label font-normal text-ink-3 tabular-nums">{option.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
