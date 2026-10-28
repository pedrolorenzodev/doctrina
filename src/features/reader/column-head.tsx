"use client";

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import type { PickerOption } from "@/features/reader/translation-picker";
import { TranslationRows } from "@/features/reader/translation-rows";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import { revealMenu } from "@/lib/reveal-motion";

export type ColumnHeadText = {
  first: string;
  second: string;
  spanish: string;
  english: string;
};

type ColumnHeadProps = {
  label: string;
  abbreviation: string;
  name: string;
  options: PickerOption[];
  value: string;
  onChoose: (id: string) => void;
  text: Pick<ColumnHeadText, "spanish" | "english">;
};

export function ColumnHead({ label, abbreviation, name, options, value, onChoose, text }: ColumnHeadProps) {
  const id = useId();
  const button = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const shown = useRef(false);
  const focusOnOpen = useRef(false);
  const [open, setOpen] = useState(false);

  const rows = () => Array.from(menu.current?.querySelectorAll<HTMLElement>('[role="option"]') ?? []);
  const close = useCallback((refocus: boolean) => {
    setOpen(false);
    if (refocus) button.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const element = menu.current;
    if (!element || shown.current === open) return;
    shown.current = open;
    revealMenu(element, open);
    if (open && focusOnOpen.current) {
      focusOnOpen.current = false;
      (rows().find((row) => row.getAttribute("aria-selected") === "true") ?? rows()[0])?.focus({ preventScroll: true });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (menu.current?.contains(target) || button.current?.contains(target)) return;
      setOpen(false);
    };
    const release = registerEscape(escapePriority.window, () => close(true));
    const onResize = () => setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    addEventListener("resize", onResize);
    return () => {
      release();
      document.removeEventListener("pointerdown", onPointerDown);
      removeEventListener("resize", onResize);
    };
  }, [open, close]);

  const choose = (optionId: string) => {
    onChoose(optionId);
    close(true);
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const items = rows();
    const at = items.findIndex((row) => row === document.activeElement);
    const move = (to: number) => {
      event.preventDefault();
      items[Math.max(0, Math.min(items.length - 1, to))]?.focus();
    };
    if (event.key === "ArrowDown") move(at + 1);
    else if (event.key === "ArrowUp") move(at - 1);
    else if (event.key === "Home") move(0);
    else if (event.key === "End") move(items.length - 1);
    else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const picked = items[at]?.dataset.id;
      if (picked) choose(picked);
    } else if (event.key === "Tab") close(false);
  };

  return (
    <div className="min-w-0">
      <div className="relative inline-block">
        <button
          ref={button}
          type="button"
          data-column-head=""
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${id}-list`}
          onClick={(event) => {
            focusOnOpen.current = event.detail === 0;
            setOpen((previous) => !previous);
          }}
          className="group/head -mx-1.5 -my-1 inline-flex min-h-7 cursor-pointer items-center justify-center gap-1.5 rounded-5 px-1.5 py-1 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover aria-expanded:bg-hover pointer-coarse:min-h-11"
        >
          <span className="sr-only">{label}</span>
          <span>{abbreviation}</span>
          <svg
            className="rotate-90 text-ink-3 transition-transform duration-200 ease-standard group-aria-expanded/head:-rotate-90"
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
          ref={menu}
          id={`${id}-list`}
          role="listbox"
          aria-label={label}
          hidden
          data-lenis-prevent
          onKeyDown={onListKeyDown}
          className="absolute top-full left-0 z-45 mt-1.5 max-h-96 w-85 overflow-y-auto overscroll-contain rounded-8 border border-rule-2 bg-panel p-1.5 shadow-floating scrollbar-rule texture-layer"
        >
          <TranslationRows
            spanish={text.spanish}
            english={text.english}
            options={options}
            value={value}
            onChoose={choose}
            tabbable
          />
        </div>
      </div>
      <p className="mt-0.5 mb-0 text-label text-ink-3">{name}</p>
    </div>
  );
}
