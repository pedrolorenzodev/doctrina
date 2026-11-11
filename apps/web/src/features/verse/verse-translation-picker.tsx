"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Chevron } from "@/components/ui/chevron";
import { useVerseEdition } from "@/features/verse/verse-edition";
import { revealMenu } from "@/lib/reveal-motion";

type VerseTranslationPickerProps = {
  text: { label: string; spanish: string; english: string };
};

const listRoom = 336;

const bracketed = (abbreviation: string) => `(${abbreviation})`;

export function VerseTranslationPicker({ text }: VerseTranslationPickerProps) {
  const { editions, selected, choose } = useVerseEdition();
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const shown = useRef(false);
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const groups = [
    { language: "es" as const, label: text.spanish },
    { language: "en" as const, label: text.english },
  ].filter((group) => editions.some((edition) => edition.language === group.language));
  const sentence = [text.label, selected.displayName].join(", ");

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
    const close = () => setOpen(false);
    addEventListener("resize", close);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      removeEventListener("resize", close);
    };
  }, [open]);

  if (editions.length < 2) return null;

  const pick = (editionId: string) => {
    choose(editionId);
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
      if (picked) pick(picked);
    } else if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      button.current?.focus({ preventScroll: true });
    } else if (event.key === "Tab") setOpen(false);
  };

  const toggle = () => {
    if (!open && button.current) {
      const box = button.current.getBoundingClientRect();
      setUp(innerHeight - box.bottom < listRoom && box.top > innerHeight - box.bottom);
    }
    setOpen((previous) => !previous);
  };

  return (
    <div ref={root} className="relative inline-block">
      <button
        ref={button}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        onClick={toggle}
        className="group/pick inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-6 border border-rule-2 bg-card px-3 py-1.5 text-ui-sm leading-label font-medium text-ink transition-colors duration-150 ease-standard hover:border-ink hover:bg-hover"
      >
        <span className="sr-only">{sentence}</span>
        <span aria-hidden="true">{selected.abbreviation}</span>
        <Chevron className="rotate-90 text-ink-3 transition-transform duration-200 ease-standard group-aria-expanded/pick:-rotate-90" />
      </button>
      <div
        ref={list}
        id={`${id}-list`}
        role="listbox"
        aria-label={text.label}
        hidden
        onKeyDown={onKeyDown}
        data-lenis-prevent
        className={`absolute right-0 z-45 verse-picker-list overflow-y-auto overscroll-contain rounded-8 border border-rule-2 bg-panel p-1.5 shadow-floating ${up ? "bottom-full mb-1.5" : "top-full mt-1.5"}`}
      >
        {groups.flatMap((group, index) => [
          <div
            key={`${group.language}-head`}
            role="presentation"
            data-menu-item=""
            className={`px-2.5 pt-2 pb-1 text-label font-medium text-ink-3 ${index > 0 ? "mt-1 border-t border-rule pt-3" : ""}`}
          >
            {group.label}
          </div>,
          ...editions
            .filter((edition) => edition.language === group.language)
            .map((edition) => (
              <div
                key={edition.id}
                role="option"
                tabIndex={-1}
                aria-selected={edition.id === selected.id}
                data-id={edition.id}
                data-menu-item=""
                onClick={() => pick(edition.id)}
                className="group/option flex min-h-11 cursor-pointer items-center rounded-6 px-2.5 py-2 text-picker-option text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink focus:outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent aria-selected:font-medium aria-selected:text-ink mark-dash"
              >
                <span className="min-w-0 text-ink-3">
                  {edition.displayName} <span>{bracketed(edition.abbreviation)}</span>
                </span>
              </div>
            )),
        ])}
      </div>
    </div>
  );
}
