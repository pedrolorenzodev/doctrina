"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";

type SlidingTab = {
  id: string;
  label: string;
  disabled?: boolean;
  title?: string;
};

type SlidingTabsProps = {
  label: string;
  tabs: SlidingTab[];
  value: string;
  onChange: (id: string) => void;
  variant: "flat" | "heading";
};

type Box = { x: number; w: number };

const groupClassNames = {
  flat: "gap-0.5",
  heading: "w-full gap-9 border-b border-rule max-sm:gap-6",
};

const indicatorClassNames = {
  flat: "top-0 bottom-0 rounded-6 bg-accent-weak shadow-current-underline",
  heading: "-bottom-px h-0.5 bg-accent",
};

const tabClassNames = {
  flat: "min-h-9 rounded-6 px-2.75 text-ui-sm text-ink-2 hover:bg-hover hover:text-ink aria-pressed:font-medium aria-pressed:text-ink pointer-coarse:min-h-11",
  heading:
    "pb-3 font-head text-layer-tab-mobile font-normal text-ink-3 opsz-24 hover:text-ink aria-pressed:text-ink aria-disabled:opacity-60 aria-disabled:hover:text-ink-3 sm:text-layer-tab",
};

export function SlidingTabs({ label, tabs, value, onChange, variant }: SlidingTabsProps) {
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
  }, [value, tabs]);

  useLayoutEffect(() => {
    if (!box || settled) return;
    const frame = requestAnimationFrame(() => setSettled(true));
    return () => cancelAnimationFrame(frame);
  }, [box, settled]);

  return (
    <div ref={group} role="group" aria-label={label} className={`relative flex max-w-full ${groupClassNames[variant]}`}>
      {box ? (
        <span
          aria-hidden="true"
          data-instant={settled ? undefined : ""}
          style={{ "--slide-x": `${box.x}px`, "--slide-w": `${box.w}px` } as CSSProperties}
          className={`slide-indicator pointer-events-none absolute left-0 w-(--slide-w) translate-x-(--slide-x) ${indicatorClassNames[variant]}`}
        />
      ) : null}
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          title={tab.title}
          aria-pressed={tab.id === value}
          aria-disabled={tab.disabled ? "true" : undefined}
          onClick={() => {
            if (!tab.disabled) onChange(tab.id);
          }}
          className={`relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap transition-colors duration-150 ease-standard aria-disabled:cursor-default ${tabClassNames[variant]}`}
        >
          <span data-label={tab.label} className="reserve-bold inline-grid">
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}
