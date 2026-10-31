"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { verseText } from "@/features/reader-ai/answer-parts";
import { motionClassName, motionStyle } from "@/features/reader-ai/motion";
import { quotes, type QuoteId } from "@/features/reader-ai/quotes";
import { afterAuthor, afterReference, sourceOf, verseReference } from "@/features/reader-ai/script";
import type { AskText } from "@/features/reader-ai/text";
import { askTokens } from "@/features/reader-ai/tokens";

export type CiteTarget = { verse: number } | { quote: QuoteId };

type CitePreviewProps = {
  text: AskText["cite"];
  shown: { target: CiteTarget; anchor: HTMLElement } | null;
};

const edgePx = 8;
const gapPx = 8;
const narrowQuery = "(max-width: 44.99rem)";

function Check() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="flex-none text-ink-2"
    >
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

const quoteClassName = "m-0 mb-2 text-row font-light text-ink opsz-24 guillemets";
const sourceClassName = "m-0 text-label leading-(--ask-leading-meta) text-ink-3";
const checkClassName =
  "mt-2 mb-3 flex items-center gap-1.5 border-t border-rule pt-2 text-ui-2xs leading-(--ask-leading-ui) text-ink-3";

function Content({ target, text }: { target: CiteTarget; text: AskText["cite"] }) {
  if ("verse" in target) {
    return (
      <>
        <p className={`${quoteClassName} font-body`}>{verseText(target.verse)}</p>
        <p className={sourceClassName}>
          <b className="font-medium text-ink-2">{verseReference(target.verse)}</b>
          {afterReference(text.verseEdition)}
        </p>
        <p className={checkClassName}>
          <Check />
          {text.verseCheck}
        </p>
      </>
    );
  }
  const entry = quotes[target.quote];
  if (entry.bible) {
    return (
      <>
        <p className={`${quoteClassName} font-body`}>{entry.text}</p>
        <p className={sourceClassName}>
          <b className="font-medium text-ink-2">{sourceOf(entry)}</b>
          {afterReference(entry.edition)}
        </p>
        <p className={checkClassName}>
          <Check />
          {text.verseCheck}
        </p>
      </>
    );
  }
  return (
    <>
      <p className={`${quoteClassName} font-head italic`}>{entry.text}</p>
      {entry.father ? (
        <div className="mb-2 border-l border-rule-2 pl-2.5 font-body text-ui-sm leading-normal font-light text-ink-prose">
          <small className="mb-0.5 block font-ui text-micro-lg leading-(--ask-leading-ui) font-medium text-ink-3">
            {text.inEdition.replace("{at}", entry.father.at)}
          </small>
          <span lang="en" className="guillemets">
            {entry.father.original}
          </span>
        </div>
      ) : null}
      <p className={sourceClassName}>
        <b className="font-medium text-ink-2">{entry.who}</b>
        {afterAuthor(entry)}
      </p>
      <p className={checkClassName}>
        <Check />
        {entry.father ? text.fatherCheck : text.storedCheck}
      </p>
    </>
  );
}

export function CitePreview({ text, shown }: CitePreviewProps) {
  const card = useRef<HTMLDivElement>(null);
  const [last, setLast] = useState(shown);
  const [place, setPlace] = useState<{ x: number; y: number; narrow: boolean } | null>(null);
  if (shown && shown !== last) setLast(shown);
  const visible = shown ?? last;

  useLayoutEffect(() => {
    const element = card.current;
    if (!element || !shown) return;
    const narrow = matchMedia(narrowQuery).matches;
    const rect = shown.anchor.getBoundingClientRect();
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const x = Math.min(Math.max(edgePx, rect.left), innerWidth - width - edgePx);
    let y = rect.bottom + gapPx;
    if (y + height > innerHeight - edgePx) y = Math.max(edgePx, rect.top - height - gapPx);
    setPlace({ x, y, narrow });
  }, [shown]);

  return (
    <div
      ref={card}
      role="tooltip"
      data-ask-preview=""
      data-open={shown && place ? true : undefined}
      data-narrow={place?.narrow || undefined}
      style={
        {
          ...askTokens,
          "--x": `${place?.x ?? 0}px`,
          "--y": `${place?.y ?? 0}px`,
          ...(shown
            ? motionStyle(["opacity", 150, "reveal"], ["translate", 150, "reveal"], ["visibility", 0, "linear"])
            : motionStyle(
                ["opacity", 120, "standard"],
                ["translate", 120, "standard"],
                ["visibility", 0, "linear", 120],
              )),
        } as React.CSSProperties
      }
      className={`texture-layer pointer-events-none invisible fixed top-(--y) left-(--x) z-92 w-80 max-w-(--ask-card-max) translate-y-1 rounded-8 border border-rule-2 bg-panel px-3.5 py-3 font-ui text-ui-base leading-normal text-ink opacity-0 shadow-floating data-narrow:right-2 data-narrow:left-2 data-narrow:w-auto data-open:visible data-open:translate-y-0 data-open:opacity-100 ${motionClassName}`}
    >
      {visible ? <Content target={visible.target} text={text} /> : null}
    </div>
  );
}
