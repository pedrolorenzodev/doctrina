"use client";

import { useEffect, useMemo, useRef, useState, type Ref } from "react";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import type { SimplifierText } from "@/components/simplifier/simplifier-text";
import { prefersReducedMotion } from "@/lib/branch-motion";
import { findSelectionMark } from "@/lib/simplifier-selection";
import type { SimplifiedEntry, SimplifierLevel, SimplifyStatus } from "@/lib/simplifier-types";

export type PanelContent =
  | { kind: "entry"; entry: SimplifiedEntry; status: SimplifyStatus }
  | { kind: "message"; text: string; retry: boolean; lang: "es" | "en" };

type SimplifiedPanelProps = {
  id: string;
  text: SimplifierText;
  content: PanelContent;
  level: SimplifierLevel;
  singleLevel: boolean;
  streaming: boolean;
  tick: number;
  stoppedAt: number | null;
  hovered: number | null;
  selection?: string | null;
  boxRef: Ref<HTMLDivElement>;
  innerRef: Ref<HTMLDivElement>;
  wrapRef: Ref<HTMLDivElement>;
  layerRef: Ref<HTMLParagraphElement>;
  onLevel: (level: SimplifierLevel) => void;
  onStop: () => void;
  onHide: () => void;
  onHover: (sentence: number | null) => void;
  onRetry: () => void;
};

const footButton =
  "inline-flex min-h-8 cursor-pointer items-center justify-center rounded-6 px-2 text-ui-xs font-medium whitespace-nowrap text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11";
const markDelayMs = 400;
const markHoldMs = 2000;
const viewMargin = 64;
const noteLine = "ml-2 text-simplified-note text-ink-3";

export function SimplifiedPanel({
  id,
  text,
  content,
  level,
  singleLevel,
  streaming,
  tick,
  stoppedAt,
  hovered,
  selection = null,
  boxRef,
  innerRef,
  wrapRef,
  layerRef,
  onLevel,
  onStop,
  onHide,
  onHover,
  onRetry,
}: SimplifiedPanelProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [reported, setReported] = useState(false);
  const sentences = content.kind === "entry" ? content.entry[level] : [];
  const marked = useMemo(
    () =>
      selection && content.kind === "entry"
        ? findSelectionMark(content.entry.original, content.entry[level], selection)
        : null,
    [selection, content, level],
  );
  const [markOn, setMarkOn] = useState(false);
  const firstMarked = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!marked || streaming) return;
    const start = window.setTimeout(() => {
      setMarkOn(true);
      const word = firstMarked.current;
      const box = word?.getBoundingClientRect();
      if (word && box && (box.top < viewMargin || box.bottom > innerHeight - viewMargin))
        word.scrollIntoView({ block: "center", behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }, markDelayMs);
    const end = window.setTimeout(() => setMarkOn(false), markDelayMs + markHoldMs);
    return () => {
      clearTimeout(start);
      clearTimeout(end);
      setMarkOn(false);
    };
  }, [marked, streaming]);
  const limit = stoppedAt ?? (streaming ? tick : Number.POSITIVE_INFINITY);
  const sizes = sentences.map((sentence) => sentence.split(" ").length);
  const starts = sizes.map((_, index) => sizes.slice(0, index).reduce((total, size) => total + size, 0));

  const copy = () => {
    navigator.clipboard?.writeText(sentences.join(" ")).catch(() => undefined);
    setCopied(true);
  };

  const statusLine =
    content.kind === "entry" && content.status === "reviewed" ? text.statusReviewed : text.statusGenerated;

  const messageFooter = (
    <div className="-ml-2 flex flex-wrap items-center gap-x-0.5">
      <button type="button" data-simplifier-hide="" onClick={onHide} className={footButton}>
        {text.hide}
      </button>
      {content.kind === "message" && content.retry ? (
        <button type="button" data-simplifier-retry="" onClick={onRetry} className={footButton}>
          {text.retry}
        </button>
      ) : null}
    </div>
  );

  const finalFooter = (
    <div
      className={`col-start-1 row-start-1 -ml-2 flex flex-wrap items-center gap-x-0.5 ${streaming ? "invisible" : ""}`}
    >
      <button type="button" data-simplifier-hide="" onClick={onHide} className={footButton}>
        {text.hide}
      </button>
      <button type="button" onClick={copy} className={footButton}>
        {copied ? text.copied : text.copy}
      </button>
      {/* TODO: save the simplified text into the notes store («Tus notas») once the simplifier is real */}
      <button type="button" onClick={() => setSaved(true)} className={footButton}>
        {saved ? text.saved : text.save}
      </button>
      {/* TODO: send the report to the same queue as the site's content errors */}
      <button type="button" onClick={() => setReported(true)} className={footButton}>
        {reported ? text.reported : text.report}
      </button>
      <span className={noteLine}>{statusLine}</span>
      {stoppedAt === null ? null : <span className={noteLine}>{text.stopped}</span>}
    </div>
  );

  const streamFooter = (
    <div className={`col-start-1 row-start-1 -ml-2 flex flex-wrap items-center ${streaming ? "" : "invisible"}`}>
      <button type="button" data-simplifier-stop="" onClick={onStop} className={footButton}>
        {text.stop}
      </button>
      <span className={noteLine}>{text.writing}</span>
    </div>
  );

  return (
    <div
      ref={boxRef}
      id={id}
      data-simplifier-panel=""
      role="region"
      aria-label={text.mark}
      className="relative overflow-hidden no-scroll-anchor"
    >
      <div
        ref={innerRef}
        data-live={streaming ? "" : undefined}
        className={`mt-3 ml-0.5 grid gap-2.5 border-l border-rule-2 pt-1.5 pb-4.5 pl-4 ${streaming ? "border-dashed" : ""}`}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {singleLevel ? null : (
            <SegmentedFilter
              label={text.levels}
              flush
              options={[
                { id: "clear", label: text.clear },
                { id: "very", label: text.very },
              ]}
              value={level}
              onChange={(next) => onLevel(next as SimplifierLevel)}
            />
          )}
          <span data-simplifier-label="" className="text-simplified-note text-ink-3">
            {text.label}
          </span>
        </div>
        <div ref={wrapRef} className="relative mb-3 overflow-hidden">
          {content.kind === "message" ? (
            <p
              key="message"
              ref={layerRef}
              lang={content.lang}
              data-simplifier-text=""
              data-simplifier-message=""
              className="m-0 font-ui text-simplified text-ink-3"
            >
              {content.text}
            </p>
          ) : (
            <p
              key={level}
              ref={layerRef}
              lang={content.entry.lang}
              aria-busy={streaming}
              data-simplifier-text=""
              onPointerOver={(event) => {
                const target = (event.target as HTMLElement).closest<HTMLElement>("[data-sentence]");
                onHover(target ? Number(target.dataset.sentence) : null);
              }}
              onPointerLeave={() => onHover(null)}
              className="m-0 font-ui text-simplified text-ink-2"
            >
              {sentences.map((sentence, index) => {
                const words = sentence.split(" ");
                const first = starts[index] ?? 0;
                const last = first + words.length;
                const mark = (visible: boolean) => (visible ? "" : stoppedAt === null ? "invisible" : "hidden");
                return (
                  <span key={index} data-sentence={index}>
                    <span
                      className={`rounded-2 ${hovered === index ? "bg-cite-weak" : ""} ${stoppedAt !== null && first >= limit ? "hidden" : ""}`}
                    >
                      {words.map((word, at) => {
                        const inMark =
                          marked !== null && marked.sentence === index && at >= marked.from && at < marked.to;
                        return (
                          <span
                            key={at}
                            ref={inMark && at === marked.from ? firstMarked : undefined}
                            data-word=""
                            data-marked={inMark && markOn ? "" : undefined}
                            className={`${mark(first + at + 1 <= limit)} ${inMark ? "rounded-2 transition-colors duration-1200 ease-standard data-marked:bg-mark data-marked:duration-200" : ""}`}
                          >
                            {at > 0 ? " " : ""}
                            {word}
                          </span>
                        );
                      })}
                    </span>
                    <span className={mark(last + 1 <= limit)}>
                      <sup
                        aria-label={text.sentence.replace("{n}", String(index + 1))}
                        className={`top-0 cursor-pointer rounded-2 px-0.5 ml-px align-super text-micro leading-natural font-medium text-cite hover:bg-cite-weak ${hovered === index ? "bg-cite-weak" : ""}`}
                      >
                        {index + 1}
                      </sup>{" "}
                    </span>
                  </span>
                );
              })}
            </p>
          )}
        </div>
        {content.kind === "message" ? (
          messageFooter
        ) : (
          <div className="grid">
            {streamFooter}
            {finalFooter}
          </div>
        )}
      </div>
    </div>
  );
}
