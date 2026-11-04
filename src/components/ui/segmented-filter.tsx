"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

type SegmentedOption = {
  id: string;
  label: string;
  content?: ReactNode;
  count?: number | undefined;
  inert?: boolean;
  disabled?: boolean;
};

type SegmentedFilterProps = {
  label: string;
  options: SegmentedOption[];
  value: string;
  onChange: (id: string) => void;
  stretch?: boolean;
  stackOnPhone?: boolean;
  flush?: boolean;
  compact?: boolean;
  wrap?: boolean;
};

type Box = { x: number; w: number };

export function SegmentedFilter({
  label,
  options,
  value,
  onChange,
  stretch = false,
  stackOnPhone = false,
  flush = false,
  compact = false,
  wrap = false,
}: SegmentedFilterProps) {
  const group = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box | null>(null);
  const [settled, setSettled] = useState(false);

  useLayoutEffect(() => {
    const element = group.current;
    if (!element) return;
    const measure = () => {
      const pressed = element.querySelector<HTMLElement>('[aria-pressed="true"]');
      if (pressed && pressed.offsetWidth > 0) setBox({ x: pressed.offsetLeft, w: pressed.offsetWidth });
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
      className={`group/seg relative gap-0.5 rounded-8 border border-rule p-0.75 ${stretch ? "flex w-full" : "inline-flex max-sm:flex max-sm:w-full"} ${flush ? "" : stretch ? "mb-4" : "mb-4.5"} ${stackOnPhone ? "max-sm:flex-col" : ""} ${wrap ? "flex-wrap" : ""}`}
    >
      {box ? (
        <span
          aria-hidden="true"
          data-instant={settled ? undefined : ""}
          data-slide-indicator=""
          style={{ "--slide-x": `${box.x}px`, "--slide-w": `${box.w}px` } as React.CSSProperties}
          className={`slide-indicator pointer-events-none absolute top-0.75 bottom-0.75 left-0 w-(--slide-w) translate-x-(--slide-x) ${compact ? "rounded-5" : "rounded-6"} selected-ink ${stackOnPhone ? "max-sm:hidden" : ""}`}
        />
      ) : null}
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={option.id === value}
          disabled={option.disabled}
          onClick={() => {
            if (!option.inert) onChange(option.id);
          }}
          className={`group/opt relative inline-flex cursor-pointer items-center justify-center gap-1.75 text-ink-2 ${compact ? "min-h-7 rounded-5 py-1 text-ui-xs leading-label" : "min-h-8.5 rounded-6 py-1.5 text-btn leading-label"} ${stretch ? (compact ? "flex-1 px-3.5" : flush ? "flex-1 px-1" : "flex-1 px-2") : "px-3 max-sm:flex-1 max-sm:px-2"} disabled:cursor-default disabled:opacity-40 disabled:hover:bg-transparent transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:selected-ink aria-pressed:font-medium aria-pressed:text-bg group-data-ready/seg:aria-pressed:bg-transparent group-data-ready/seg:aria-pressed:before:hidden ${stackOnPhone ? "max-sm:group-data-ready/seg:aria-pressed:bg-ink max-sm:group-data-ready/seg:aria-pressed:before:block" : ""} pointer-coarse:min-h-11`}
        >
          {stretch ? (
            <span data-label={option.label} className="reserve-bold inline-grid">
              {option.label}
            </span>
          ) : (
            (option.content ?? option.label)
          )}
          {option.count === undefined ? null : (
            <span className="text-ui-2xs leading-label font-normal text-ink-3 tabular-nums group-aria-pressed/opt:text-bg group-aria-pressed/opt:opacity-80">
              {option.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
