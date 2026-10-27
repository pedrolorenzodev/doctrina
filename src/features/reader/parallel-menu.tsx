"use client";

import { useCallback, useId, useRef, useState, type KeyboardEvent } from "react";
import { HangingMenu } from "@/components/hanging-menu";
import type { PickerOption } from "@/features/reader/translation-picker";
import { TranslationRows } from "@/features/reader/translation-rows";
import { useSideRoom } from "@/features/reader/use-second-translation";
import { chooseSecondTranslation, noSecond, type SecondChoice, type SecondMode } from "@/lib/second-translation";

type ParallelMenuText = {
  label: string;
  mode: string;
  none: string;
  below: string;
  side: string;
  sideNote: string;
  list: string;
  spanish: string;
  english: string;
};

type ParallelMenuProps = {
  text: ParallelMenuText;
  options: PickerOption[];
  firstId: string;
  second: SecondChoice;
};

const modes: SecondMode[] = ["off", "below", "side"];

export function ParallelMenu({ text, options, firstId, second }: ParallelMenuProps) {
  const id = useId();
  const button = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const room = useSideRoom();
  const others = options.filter((option) => option.id !== firstId);
  const close = useCallback(() => setOpen(false), []);
  const label: Record<SecondMode, string> = { off: text.none, below: text.below, side: text.side };

  const setMode = (mode: SecondMode) => {
    if (mode === "off") chooseSecondTranslation(noSecond);
    else chooseSecondTranslation({ mode, id: second.id ?? others[0]?.id ?? null });
  };
  const setTranslation = (translation: string) =>
    chooseSecondTranslation({ mode: second.mode === "off" ? "below" : second.mode, id: translation });

  const onListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
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
      const id = rows[at]?.dataset.id;
      if (id) setTranslation(id);
    }
  };

  if (others.length === 0) return null;
  return (
    <div className="inline-block">
      <button
        ref={button}
        type="button"
        data-parallel=""
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        aria-pressed={second.mode !== "off"}
        onClick={() => setOpen((previous) => !previous)}
        className="inline-grid size-8.5 cursor-pointer place-items-center rounded-6 text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-expanded:bg-hover aria-pressed:bg-accent-weak aria-pressed:text-accent pointer-coarse:size-11"
      >
        <span className="sr-only">{text.label}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="12" height="10" rx="2" />
          <path d="M8 3v10" strokeLinecap="round" />
        </svg>
      </button>
      <HangingMenu
        id={`${id}-menu`}
        role="dialog"
        aria-label={text.label}
        open={open}
        onClose={close}
        anchor={button}
        align="end"
        className="w-85 max-sm:right-2 max-sm:left-2 max-sm:w-auto"
        bodyClassName="px-4 pt-3.5 pb-4"
      >
        <p data-menu-item="" className="mt-0.5 mb-1.5 ml-1 text-label font-medium text-ink-3">
          {text.mode}
        </p>
        <div
          data-menu-item=""
          role="group"
          aria-label={text.mode}
          className="mt-0.5 mb-1.5 flex gap-0.5 rounded-8 border border-rule p-0.75"
        >
          {modes.map((mode) => (
            <button
              key={mode}
              type="button"
              disabled={mode === "side" && !room}
              aria-pressed={mode === second.mode}
              onClick={() => setMode(mode)}
              className="inline-flex min-h-8.5 flex-1 cursor-pointer items-center justify-center rounded-6 px-1 text-btn leading-label font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink disabled:cursor-default disabled:opacity-40 disabled:hover:bg-transparent aria-pressed:bg-accent-weak aria-pressed:text-ink pointer-coarse:min-h-11"
            >
              {label[mode]}
            </button>
          ))}
        </div>
        {room ? null : (
          <p data-menu-item="" className="mt-1.5 ml-1 text-reader-note text-ink-3">
            {text.sideNote}
          </p>
        )}
        {second.mode === "off" ? null : (
          <>
            <p data-menu-item="" className="mt-3.5 mb-1.5 ml-1 text-label font-medium text-ink-3">
              {text.list}
            </p>
            <div role="listbox" aria-label={text.label} onKeyDown={onListKeyDown}>
              <TranslationRows
                spanish={text.spanish}
                english={text.english}
                options={others}
                value={second.id}
                onChoose={setTranslation}
                tabbable
              />
            </div>
          </>
        )}
      </HangingMenu>
    </div>
  );
}
