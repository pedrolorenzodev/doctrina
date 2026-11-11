"use client";

import { focusRingClassName, motionClassName, motionStyle } from "@/features/reader-ai/motion";
import { WhatItSees } from "@/features/reader-ai/what-it-sees";
import type { Scope } from "@/features/reader-ai/scope-control";
import type { AskText } from "@/features/reader-ai/text";

type ContextLineProps = {
  text: AskText["sees"];
  chapter: string;
  edition: string;
  notesOn: boolean;
  onNotes: (on: boolean) => void;
  scope: Scope;
  scopeName: string;
  onScope: (scope: Scope) => void;
  open: boolean;
  onOpen: (open: boolean) => void;
};

export function ContextLine({
  text,
  chapter,
  edition,
  notesOn,
  onNotes,
  scope,
  scopeName,
  onScope,
  open,
  onOpen,
}: ContextLineProps) {
  return (
    <div data-ask-context="" className="flex-none">
      <div className="flex min-h-9 items-center justify-between gap-2.5 border-b border-rule pr-2 pl-5.5 text-label leading-(--ask-leading-ui) text-ink-3">
        <span className="truncate">
          {text.chapterValue.replace("{chapter}", chapter).replace("{edition}", edition)}
        </span>
        <button
          type="button"
          data-bare-focus=""
          aria-expanded={open}
          aria-controls="ask-context-sees"
          onClick={() => onOpen(!open)}
          className={`group/line inline-flex min-h-7.5 flex-none cursor-pointer items-center gap-1 rounded-6 px-2 text-label leading-(--ask-leading-ui) font-medium whitespace-nowrap text-ink-2 hover:bg-hover hover:text-ink aria-expanded:bg-hover aria-expanded:text-ink pointer-coarse:min-h-11 ${focusRingClassName}`}
        >
          {scopeName}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="transition-transform duration-200 ease-standard group-aria-expanded/line:rotate-180 motion-reduce:transition-none"
          >
            <path d="M3 4.5L6 7.5l3-3" />
          </svg>
        </button>
      </div>
      <div
        id="ask-context-sees"
        data-open={open || undefined}
        inert={!open}
        style={motionStyle(["max-height", 300, "reveal"])}
        className={`max-h-0 overflow-hidden border-b border-transparent data-open:max-h-80 data-open:border-rule motion-reduce:transition-none ${motionClassName}`}
      >
        <WhatItSees
          text={text}
          chapter={chapter}
          edition={edition}
          notesOn={notesOn}
          onNotes={onNotes}
          scope={scope}
          onScope={onScope}
        />
      </div>
    </div>
  );
}
