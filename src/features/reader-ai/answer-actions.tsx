"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { Entering } from "@/features/reader-ai/answer-parts";
import type { Enter } from "@/features/reader-ai/motion";
import type { AskText } from "@/features/reader-ai/text";

type AnswerActionsProps = {
  enter: Enter;
  text: AskText["chat"];
  copyFrom: RefObject<HTMLDivElement | null>;
};

const copiedMs = 1600;
const actionClassName =
  "inline-flex min-h-8 cursor-pointer items-center justify-center rounded-6 px-2 text-ui-xs leading-(--ask-leading-ui) font-medium whitespace-nowrap text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11";

export function AnswerActions({ enter, text, copyFrom }: AnswerActionsProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [reported, setReported] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = () => {
    const content = copyFrom.current?.innerText.replace(/\n+/g, "\n") ?? "";
    navigator.clipboard?.writeText(content).catch(() => undefined);
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), copiedMs);
  };

  return (
    <Entering enter={enter} className="-ml-2 flex flex-wrap gap-x-0.5">
      <button type="button" onClick={copy} className={actionClassName}>
        {copied ? text.copied : text.copy}
      </button>
      {/* TODO: save the question and its prose into the notes store («Tus notas») once the AI answers are real */}
      <button type="button" onClick={() => setSaved(true)} className={actionClassName}>
        {saved ? text.saved : text.save}
      </button>
      {reported ? (
        <span className="px-2 py-1.75 text-label leading-(--ask-leading-meta) text-ink-3">{text.reported}</span>
      ) : (
        // TODO: send the report to the same queue as the site's content errors
        <button type="button" onClick={() => setReported(true)} className={actionClassName}>
          {text.report}
        </button>
      )}
    </Entering>
  );
}
