"use client";

import { useState, type Ref } from "react";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import type { SimplifierText } from "@/components/simplifier/simplifier-text";
import type { SimplifiedEntry, SimplifierLevel } from "@/lib/simplifier-types";

type SimplifiedPanelProps = {
  id: string;
  text: SimplifierText;
  entry: SimplifiedEntry;
  level: SimplifierLevel;
  streaming: boolean;
  tick: number;
  stoppedAt: number | null;
  hovered: number | null;
  boxRef: Ref<HTMLDivElement>;
  innerRef: Ref<HTMLDivElement>;
  wrapRef: Ref<HTMLDivElement>;
  layerRef: Ref<HTMLParagraphElement>;
  onLevel: (level: SimplifierLevel) => void;
  onStop: () => void;
  onHide: () => void;
  onHover: (sentence: number | null) => void;
};

const footButton =
  "inline-flex min-h-8 cursor-pointer items-center justify-center rounded-6 px-2 text-ui-xs font-medium whitespace-nowrap text-ink-3 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11";
const noteLine = "ml-2 text-simplified-note text-ink-3";

export function SimplifiedPanel({
  id,
  text,
  entry,
  level,
  streaming,
  tick,
  stoppedAt,
  hovered,
  boxRef,
  innerRef,
  wrapRef,
  layerRef,
  onLevel,
  onStop,
  onHide,
  onHover,
}: SimplifiedPanelProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [reported, setReported] = useState(false);
  const sentences = entry[level];
  const limit = stoppedAt ?? (streaming ? tick : Number.POSITIVE_INFINITY);
  const sizes = sentences.map((sentence) => sentence.split(" ").length);
  const starts = sizes.map((_, index) => sizes.slice(0, index).reduce((total, size) => total + size, 0));

  const copy = () => {
    navigator.clipboard?.writeText(sentences.join(" ")).catch(() => undefined);
    setCopied(true);
  };

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
      <span className={noteLine}>{text.status}</span>
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
          <span data-simplifier-label="" className="text-simplified-note text-ink-3">
            {text.label}
          </span>
        </div>
        <div ref={wrapRef} className="relative mb-3 overflow-hidden">
          <p
            key={level}
            ref={layerRef}
            lang={entry.lang}
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
                    {words.map((word, at) => (
                      <span key={at} data-word="" className={mark(first + at + 1 <= limit)}>
                        {at > 0 ? " " : ""}
                        {word}
                      </span>
                    ))}
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
        </div>
        <div className="grid">
          {streamFooter}
          {finalFooter}
        </div>
      </div>
    </div>
  );
}
