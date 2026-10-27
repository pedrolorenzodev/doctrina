"use client";

import { useCallback, useId, useRef, useState, useSyncExternalStore } from "react";
import { HangingMenu } from "@/components/hanging-menu";
import { TextSizeControl } from "@/features/reader/text-size-control";
import {
  chooseReaderFormat,
  currentReaderFormat,
  defaultReaderFormat,
  readerFormats,
  subscribeReaderFormat,
} from "@/lib/reader-format";

type TextOptionsText = {
  mark: string;
  label: string;
  size: Parameters<typeof TextSizeControl>[0]["text"];
  formatGroup: string;
  formats: { lines: string; flow: string };
  locked: string;
};

type TextOptionsProps = { text: TextOptionsText; locked: boolean; sizeOnly?: boolean };

export function TextOptions({ text, locked, sizeOnly = false }: TextOptionsProps) {
  const id = useId();
  const button = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const format = useSyncExternalStore(subscribeReaderFormat, currentReaderFormat, () => defaultReaderFormat);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="inline-block">
      <button
        ref={button}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        onClick={() => setOpen((previous) => !previous)}
        className="inline-flex min-h-8.5 min-w-9 cursor-pointer items-center justify-center rounded-6 px-2.5 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-expanded:bg-hover aria-expanded:text-ink pointer-coarse:min-h-11 pointer-coarse:min-w-11"
      >
        <span className="sr-only">{text.label}</span>
        <span aria-hidden="true">{text.mark}</span>
      </button>
      <HangingMenu
        id={`${id}-menu`}
        role="dialog"
        aria-label={text.label}
        open={open}
        onClose={close}
        anchor={button}
        align="end"
        className="w-90 max-sm:right-2 max-sm:left-2 max-sm:w-auto"
        bodyClassName="px-4 pt-3.5 pb-4"
      >
        <p data-menu-item="" className="mt-0.5 mb-1.5 ml-1 text-label font-medium text-ink-3">
          {text.size.group}
        </p>
        <div data-menu-item="" className="flex pb-1 pl-1">
          <TextSizeControl text={text.size} />
        </div>
        {sizeOnly ? null : (
          <>
            <p data-menu-item="" className="mt-3.5 mb-1.5 ml-1 text-label font-medium text-ink-3">
              {text.formatGroup}
            </p>
            <div
              data-menu-item=""
              role="group"
              aria-label={text.formatGroup}
              className="mt-0.5 mb-1.5 flex gap-0.5 rounded-8 border border-rule p-0.75"
            >
              {readerFormats.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={option === (locked ? "lines" : format)}
                  disabled={locked && option === "flow"}
                  onClick={() => chooseReaderFormat(option)}
                  className="inline-flex min-h-8.5 flex-1 cursor-pointer items-center justify-center rounded-6 px-1 text-btn leading-label font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:bg-accent-weak aria-pressed:text-ink disabled:cursor-default disabled:opacity-40 disabled:hover:bg-transparent pointer-coarse:min-h-11"
                >
                  {text.formats[option]}
                </button>
              ))}
            </div>
            {locked ? (
              <p data-menu-item="" className="mt-1.5 ml-1 text-reader-note text-ink-3">
                {text.locked}
              </p>
            ) : null}
          </>
        )}
      </HangingMenu>
    </div>
  );
}
