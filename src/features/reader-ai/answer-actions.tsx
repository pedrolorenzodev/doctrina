"use client";

import { useState, type RefObject } from "react";
import { focusRingClassName } from "@/features/reader-ai/motion";
import type { AskText } from "@/features/reader-ai/text";

type AnswerActionsProps = {
  text: AskText["chat"];
  copyFrom: RefObject<HTMLDivElement | null>;
};

const actionClassName = `min-h-8 cursor-pointer border-b border-transparent px-0.5 text-btn leading-(--ask-leading-ui) text-ink-3 transition-colors duration-150 ease-standard hover:text-ink pointer-coarse:min-h-11 ${focusRingClassName}`;

export function AnswerActions({ text, copyFrom }: AnswerActionsProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [reported, setReported] = useState(false);

  const copy = () => {
    const content = copyFrom.current?.innerText.replace(/\n+/g, "\n") ?? "";
    navigator.clipboard?.writeText(content).catch(() => undefined);
    setCopied(true);
  };

  return (
    <div data-ask-actions="" className="flex flex-wrap gap-x-3.5 gap-y-0.5">
      <button type="button" data-bare-focus="" onClick={copy} className={actionClassName}>
        {copied ? text.copied : text.copy}
      </button>
      {/* TODO: save the question and its prose into the notes store («Tus notas») once the AI answers are real */}
      <button type="button" data-bare-focus="" onClick={() => setSaved(true)} className={actionClassName}>
        {saved ? text.saved : text.save}
      </button>
      {/* TODO: send the report to the same queue as the site's content errors */}
      <button type="button" data-bare-focus="" onClick={() => setReported(true)} className={actionClassName}>
        {reported ? text.reported : text.report}
      </button>
    </div>
  );
}
