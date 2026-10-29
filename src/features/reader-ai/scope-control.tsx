"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { focusRingClassName, motionClassName, motionStyle } from "@/features/reader-ai/motion";

export type Scope = "chapter" | "bible" | "fathers" | "all";

type ScopeControlProps = {
  label: string;
  options: { id: Scope; label: string }[];
  value: Scope;
  onChange: (scope: Scope) => void;
};

type Box = { x: number; w: number };

export function ScopeControl({ label, options, value, onChange }: ScopeControlProps) {
  const group = useRef<HTMLSpanElement>(null);
  const [box, setBox] = useState<Box | null>(null);
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    const element = group.current;
    if (!element) return;
    const measure = () => {
      const pressed = element.querySelector<HTMLElement>('[aria-pressed="true"]');
      if (pressed) setBox({ x: pressed.offsetLeft, w: pressed.offsetWidth });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span
      ref={group}
      role="group"
      aria-label={label}
      className="relative flex w-full gap-0.5 rounded-8 border border-rule p-0.75"
    >
      {box ? (
        <span
          aria-hidden="true"
          style={
            {
              "--slide-x": `${box.x}px`,
              "--slide-w": `${box.w}px`,
              ...(animate ? motionStyle(["translate", 340, "reveal"], ["width", 340, "reveal"]) : {}),
            } as React.CSSProperties
          }
          className={`absolute top-0.75 bottom-0.75 left-0 w-(--slide-w) translate-x-(--slide-x) rounded-6 bg-accent-weak ${animate ? motionClassName : ""}`}
        />
      ) : null}
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          data-bare-focus=""
          aria-pressed={option.id === value}
          onClick={() => {
            setAnimate(true);
            onChange(option.id);
          }}
          className={`relative z-1 inline-flex min-h-8 flex-1 cursor-pointer items-center justify-center rounded-6 px-1 text-ui-xs leading-(--ask-leading-ui) whitespace-nowrap text-ink-2 transition-colors duration-150 ease-standard hover:text-ink aria-pressed:font-medium aria-pressed:text-ink pointer-coarse:min-h-11 ${focusRingClassName}`}
        >
          {option.label}
        </button>
      ))}
    </span>
  );
}
