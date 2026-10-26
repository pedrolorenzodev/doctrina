"use client";

import { useEffect, useSyncExternalStore } from "react";
import { jumpToY, scrollOffset } from "@/lib/scroll";
import {
  applyReaderSize,
  chooseReaderSize,
  currentReaderSize,
  defaultReaderSize,
  readerSizes,
  steppedReaderSize,
  subscribeReaderSize,
} from "@/lib/reader-size";

type TextSizeControlText = {
  group: string;
  smaller: string;
  larger: string;
  smallerMark: string;
  largerMark: string;
};

const anchorClearance = 40;

function changeKeepingPlace(change: () => void) {
  const line = scrollOffset() + anchorClearance;
  const verses = Array.from(document.querySelectorAll<HTMLElement>('[id^="v-"]'));
  const anchor = verses.find((verse) => verse.getBoundingClientRect().bottom > line);
  const before = anchor?.getBoundingClientRect().top ?? 0;
  change();
  if (!anchor) return;
  const shift = anchor.getBoundingClientRect().top - before;
  if (Math.abs(shift) > 1) jumpToY(scrollY + shift);
}

const buttonClassName =
  "inline-flex min-h-7.5 cursor-pointer items-center justify-center rounded-6 px-2.5 py-1 text-ui-xs leading-label text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink disabled:cursor-default disabled:opacity-40 disabled:hover:bg-transparent pointer-coarse:min-h-11";

export function TextSizeControl({ text }: { text: TextSizeControlText }) {
  const size = useSyncExternalStore(subscribeReaderSize, currentReaderSize, () => defaultReaderSize);

  useEffect(() => applyReaderSize(size), [size]);

  const step = (direction: -1 | 1) => {
    const next = steppedReaderSize(size, direction);
    if (next !== size) changeKeepingPlace(() => chooseReaderSize(next));
  };

  return (
    <div role="group" aria-label={text.group} className="inline-flex gap-0.5 rounded-8 border border-rule p-0.75">
      <button
        type="button"
        aria-label={text.smaller}
        disabled={size === readerSizes[0]}
        onClick={() => step(-1)}
        className={buttonClassName}
      >
        {text.smallerMark}
      </button>
      <button
        type="button"
        aria-label={text.larger}
        disabled={size === readerSizes[readerSizes.length - 1]}
        onClick={() => step(1)}
        className={buttonClassName}
      >
        {text.largerMark}
      </button>
    </div>
  );
}
