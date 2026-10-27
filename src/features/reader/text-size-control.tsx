"use client";

import { useEffect, useSyncExternalStore } from "react";
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

export const stepButtonClassName =
  "inline-flex min-h-7 min-w-7.5 cursor-pointer items-center justify-center rounded-5 px-2.5 py-1 text-ui-xs leading-label font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink disabled:cursor-default disabled:opacity-40 disabled:hover:bg-transparent pointer-coarse:min-h-11 pointer-coarse:min-w-11";

export function TextSizeControl({ text }: { text: TextSizeControlText }) {
  const size = useSyncExternalStore(subscribeReaderSize, currentReaderSize, () => defaultReaderSize);

  useEffect(() => applyReaderSize(size), [size]);

  const step = (direction: -1 | 1) => {
    const next = steppedReaderSize(size, direction);
    if (next !== size) chooseReaderSize(next);
  };

  return (
    <div role="group" aria-label={text.group} className="inline-flex gap-0.5 rounded-8 border border-rule p-0.75">
      <button
        type="button"
        aria-label={text.smaller}
        disabled={size === readerSizes[0]}
        onClick={() => step(-1)}
        className={stepButtonClassName}
      >
        {text.smallerMark}
      </button>
      <button
        type="button"
        aria-label={text.larger}
        disabled={size === readerSizes[readerSizes.length - 1]}
        onClick={() => step(1)}
        className={stepButtonClassName}
      >
        {text.largerMark}
      </button>
    </div>
  );
}
