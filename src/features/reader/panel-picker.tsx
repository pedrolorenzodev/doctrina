"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { revealMenu } from "@/lib/reveal-motion";

type PanelPickerOption = { id: string; label: string };

type PanelPickerProps = {
  label: string;
  value: string;
  options: PanelPickerOption[];
  onChange: (id: string) => void;
};

export function PanelPicker({ label, value, options, onChange }: PanelPickerProps) {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const shown = useRef(false);
  const [open, setOpen] = useState(false);
  const current = options.find((option) => option.id === value) ?? options[0];

  useEffect(() => {
    const element = list.current;
    if (!element || shown.current === open) return;
    shown.current = open;
    revealMenu(element, open);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const rows = () => Array.from(list.current?.querySelectorAll<HTMLElement>('[role="option"]') ?? []);
    (rows().find((row) => row.getAttribute("aria-selected") === "true") ?? rows()[0])?.focus({ preventScroll: true });
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const choose = (optionId: string) => {
    onChange(optionId);
    setOpen(false);
    button.current?.focus({ preventScroll: true });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const rows = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('[role="option"]'));
    const at = rows.findIndex((row) => row === document.activeElement);
    const move = (to: number) => {
      event.preventDefault();
      rows[Math.max(0, Math.min(rows.length - 1, to))]?.focus();
    };
    if (event.key === "ArrowDown") move(at + 1);
    else if (event.key === "ArrowUp") move(at - 1);
    else if (event.key === "Home") move(0);
    else if (event.key === "End") move(rows.length - 1);
    else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const picked = rows[at]?.dataset.id;
      if (picked) choose(picked);
    } else if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      button.current?.focus({ preventScroll: true });
    } else if (event.key === "Tab") setOpen(false);
  };

  return (
    <div ref={root} className="relative inline-block">
      <button
        ref={button}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        onClick={() => setOpen((previous) => !previous)}
        className="group/pick inline-flex min-h-8.5 cursor-pointer items-center justify-center gap-2 rounded-6 border border-rule-2 bg-card px-2.5 py-1 text-ui-xs leading-label font-medium text-ink transition-colors duration-150 ease-standard hover:border-ink hover:bg-hover pointer-coarse:min-h-11"
      >
        <span className="font-normal text-ink-3">{label}</span>
        <span>{current?.label}</span>
        <svg
          className="rotate-90 text-ink-3 transition-transform duration-200 ease-standard group-aria-expanded/pick:-rotate-90"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M3.5 1.5 7 5l-3.5 3.5" />
        </svg>
      </button>
      <div
        ref={list}
        id={`${id}-list`}
        role="listbox"
        aria-label={label}
        hidden
        onKeyDown={onKeyDown}
        className="absolute top-full left-0 z-45 mt-1.5 max-h-80 w-max min-w-full max-w-72 overflow-y-auto overscroll-contain rounded-8 border border-rule-2 bg-panel p-1.5 shadow-floating"
      >
        {options.map((option) => (
          <div
            key={option.id}
            role="option"
            tabIndex={-1}
            aria-selected={option.id === value}
            data-id={option.id}
            data-menu-item=""
            onClick={() => choose(option.id)}
            className="flex min-h-11 cursor-pointer items-center rounded-6 px-2.5 py-2 text-picker-option text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink focus:outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent aria-selected:bg-accent-weak aria-selected:font-medium aria-selected:text-ink aria-selected:shadow-current"
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
