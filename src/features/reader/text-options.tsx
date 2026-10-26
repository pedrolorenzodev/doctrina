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
};

export function TextOptions({ text }: { text: TextOptionsText }) {
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
        className="w-90 p-3.5 max-sm:right-2 max-sm:left-2 max-sm:w-auto"
      >
        <p data-menu-item="" className="mb-1.5 ml-1 text-label font-medium text-ink-3">
          {text.size.group}
        </p>
        <div data-menu-item="">
          <TextSizeControl text={text.size} />
        </div>
        <p data-menu-item="" className="mt-4 mb-1.5 ml-1 text-label font-medium text-ink-3">
          {text.formatGroup}
        </p>
        <div
          data-menu-item=""
          role="group"
          aria-label={text.formatGroup}
          className="flex gap-0.5 rounded-8 border border-rule p-0.75"
        >
          {readerFormats.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={option === format}
              onClick={() => chooseReaderFormat(option)}
              className="inline-flex min-h-8.5 flex-1 cursor-pointer items-center justify-center rounded-6 px-2 py-1.5 text-btn leading-label text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:bg-accent-weak aria-pressed:text-ink pointer-coarse:min-h-11"
            >
              {text.formats[option]}
            </button>
          ))}
        </div>
      </HangingMenu>
    </div>
  );
}
