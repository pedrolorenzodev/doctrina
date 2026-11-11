"use client";

import { useRef } from "react";
import { foldBox } from "@/lib/fold-box";
import { closeRedNotice } from "@/lib/red-notice";

type RedNoticeProps = {
  text: { message: string; email: string; close: string };
};

export function RedNotice({ text }: RedNoticeProps) {
  const box = useRef<HTMLDivElement>(null);

  const close = () => {
    const element = box.current;
    if (!element) return;
    void foldBox(element, false).then(closeRedNotice);
  };

  return (
    <div ref={box} data-red-notice-box="" className="red-notice mt-3 flex max-w-reader items-start gap-2">
      <p className="m-0 flex-1 text-reader-note text-ink-3">
        {text.message} {/* TODO: replace with the project's own address once Pedro creates it */}
        <a href={`mailto:${text.email}`} className="text-ink-3 underline underline-offset-2 hover:text-ink">
          {text.email}
        </a>
      </p>
      <button
        type="button"
        aria-label={text.close}
        onClick={close}
        className="-mt-0.5 inline-grid size-6 flex-none cursor-pointer place-items-center rounded-4 text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:size-11"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M2.5 2.5l7 7M9.5 2.5l-7 7" />
        </svg>
      </button>
    </div>
  );
}
