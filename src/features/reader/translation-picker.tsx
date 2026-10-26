"use client";

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { HangingMenu } from "@/components/hanging-menu";

export type PickerOption = {
  id: string;
  abbreviation: string;
  displayName: string;
  language: "es" | "en";
};

type TranslationPickerText = {
  label: string;
  spanish: string;
  english: string;
};

type TranslationPickerProps = {
  text: TranslationPickerText;
  options: PickerOption[];
  value: string;
  onChange: (id: string) => void;
};

const optionClassName =
  "group/option flex min-h-11 cursor-pointer items-center rounded-6 px-2.5 py-2 text-picker-option text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink focus:outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent aria-selected:bg-accent-weak aria-selected:font-medium aria-selected:text-ink aria-selected:shadow-current";

const bracketed = (abbreviation: string) => `(${abbreviation})`;

export function TranslationPicker({ text, options, value, onChange }: TranslationPickerProps) {
  const id = useId();
  const button = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const focusOnOpen = useRef(false);
  const [open, setOpen] = useState(false);

  const groups = [
    { language: "es" as const, label: text.spanish },
    { language: "en" as const, label: text.english },
  ].filter((group) => options.some((option) => option.language === group.language));
  const current = options.find((option) => option.id === value);

  const optionElements = () => Array.from(list.current?.querySelectorAll<HTMLElement>('[role="option"]') ?? []);

  const focusCurrent = useCallback(() => {
    const options = Array.from(list.current?.querySelectorAll<HTMLElement>('[role="option"]') ?? []);
    (options.find((option) => option.getAttribute("aria-selected") === "true") ?? options[0])?.focus({
      preventScroll: true,
    });
  }, []);

  useEffect(() => {
    if (!open || !focusOnOpen.current) return;
    focusOnOpen.current = false;
    focusCurrent();
  }, [open, focusCurrent]);

  const openList = (focusSelected: boolean) => {
    if (open) {
      if (focusSelected) focusCurrent();
      return;
    }
    focusOnOpen.current = focusSelected;
    setOpen(true);
  };

  const closeList = (refocus: boolean) => {
    setOpen(false);
    if (refocus) button.current?.focus({ preventScroll: true });
  };

  const choose = (optionId: string) => {
    onChange(optionId);
    closeList(true);
  };

  const onButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    openList(true);
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const options = optionElements();
    const at = options.findIndex((option) => option === document.activeElement);
    const move = (to: number) => {
      event.preventDefault();
      options[Math.max(0, Math.min(options.length - 1, to))]?.focus({ preventScroll: false });
    };
    if (event.key === "ArrowDown") move(at + 1);
    else if (event.key === "ArrowUp") move(at - 1);
    else if (event.key === "Home") move(0);
    else if (event.key === "End") move(options.length - 1);
    else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const option = options[at];
      if (option?.dataset.id) choose(option.dataset.id);
    } else if (event.key === "Tab") closeList(false);
  };

  return (
    <div className="inline-block">
      <button
        ref={button}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        onClick={(event) => (open ? closeList(false) : openList(event.detail === 0))}
        onKeyDown={onButtonKeyDown}
        className="group/picker inline-flex min-h-8 cursor-pointer items-center justify-center gap-2 rounded-6 px-2.5 py-1 text-ui-xs leading-label font-medium text-ink transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:min-h-11"
      >
        <span className="sr-only">{text.label}</span>
        <span>{current?.abbreviation}</span>
        <svg
          className="rotate-90 text-ink-3 transition-transform duration-200 ease-standard group-aria-expanded/picker:-rotate-90"
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
      <HangingMenu
        ref={list}
        id={`${id}-list`}
        role="listbox"
        aria-label={text.label}
        open={open}
        onClose={() => setOpen(false)}
        anchor={button}
        align="end"
        onKeyDown={onListKeyDown}
        className="w-72 p-1.5 sm:w-85"
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
          ...options
            .filter((option) => option.language === group.language)
            .map((option) => (
              <div
                key={option.id}
                role="option"
                tabIndex={-1}
                aria-selected={option.id === value}
                data-id={option.id}
                data-menu-item=""
                onClick={() => choose(option.id)}
                className={optionClassName}
              >
                <span className="min-w-0">
                  {option.displayName}{" "}
                  <span className="text-ink-3 group-aria-selected/option:text-ink-2">
                    {bracketed(option.abbreviation)}
                  </span>
                </span>
              </div>
            )),
        ])}
      </HangingMenu>
    </div>
  );
}
