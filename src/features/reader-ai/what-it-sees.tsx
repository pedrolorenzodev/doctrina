"use client";

import { focusRingClassName, motionClassName, motionStyle } from "@/features/reader-ai/motion";
import { ScopeControl, type Scope } from "@/features/reader-ai/scope-control";
import type { AskText } from "@/features/reader-ai/text";

type WhatItSeesProps = {
  text: AskText["sees"];
  chapter: string;
  edition: string;
  notesOn: boolean;
  onNotes: (on: boolean) => void;
  scope: Scope;
  onScope: (scope: Scope) => void;
};

const labelClassName = "text-label leading-(--ask-leading-ui) font-medium text-ink-3";
const rowClassName =
  "flex min-h-7.5 items-center justify-between gap-2.5 text-btn leading-(--ask-leading-row) text-ink-2";

export function WhatItSees({ text, chapter, edition, notesOn, onNotes, scope, onScope }: WhatItSeesProps) {
  return (
    <div data-ask-sees="" className="mb-4 grid gap-1.5 border-b border-rule pb-3.5">
      <p className={`mb-0.5 ${labelClassName}`}>{text.label}</p>
      <div className={rowClassName}>
        <span>{text.chapter}</span>
        <small className="text-label leading-(--ask-leading-ui) text-ink-3">
          {text.chapterValue.replace("{chapter}", chapter).replace("{edition}", edition)}
        </small>
      </div>
      <div className={rowClassName}>
        <span id="ask-notes-label">{text.yours}</span>
        <button
          type="button"
          role="switch"
          data-bare-focus=""
          aria-checked={notesOn}
          aria-labelledby="ask-notes-label"
          onClick={() => onNotes(!notesOn)}
          style={motionStyle(["background-color", 200, "standard"], ["border-color", 200, "standard"])}
          className={`group/switch relative h-5 w-8.5 flex-none cursor-pointer rounded-10 border border-rule-2 bg-card aria-checked:border-accent-mid aria-checked:bg-accent-weak ${motionClassName} ${focusRingClassName}`}
        >
          <span
            aria-hidden="true"
            style={motionStyle(["translate", 220, "reveal"], ["background-color", 200, "standard"])}
            className={`absolute top-0.5 left-0.5 size-3.5 rounded-full bg-ink-3 group-aria-checked/switch:translate-x-3.5 group-aria-checked/switch:bg-accent ${motionClassName}`}
          />
        </button>
      </div>
      <div
        aria-hidden={!notesOn}
        data-on={notesOn || undefined}
        style={motionStyle(["max-height", 260, "reveal"], ["opacity", 200, "standard"])}
        className={`flex max-h-0 items-center gap-1.5 overflow-hidden text-label leading-(--ask-leading-ui) text-ink-3 opacity-0 data-on:max-h-10 data-on:opacity-100 ${motionClassName}`}
      >
        <span>{text.note}</span>
        <span>{text.highlight}</span>
        <i className="inline-block size-2.5 rounded-full bg-hls-green shadow-swatch" />
        <span>{text.green}</span>
      </div>
      <p className={`mt-2.5 mb-0.5 ${labelClassName}`}>{text.where}</p>
      <ScopeControl
        label={text.where}
        value={scope}
        onChange={onScope}
        options={[
          { id: "chapter", label: text.scopes.chapter.replace("{chapter}", chapter) },
          { id: "bible", label: text.scopes.bible },
          { id: "fathers", label: text.scopes.fathers },
          { id: "all", label: text.scopes.all },
        ]}
      />
    </div>
  );
}
