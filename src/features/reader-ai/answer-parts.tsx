"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { focusRingClassName, playEnter, type Enter } from "@/features/reader-ai/motion";
import { quotes, johnSix, type QuoteId } from "@/features/reader-ai/quotes";
import { sourceOf, verseLabel } from "@/features/reader-ai/script";

export type CiteHandlers = {
  onVerse: (verse: number, element: HTMLElement) => void;
  onQuote: (quote: QuoteId, element: HTMLElement) => void;
  onPreview: (
    target: { verse: number } | { quote: QuoteId } | null,
    element: HTMLElement | null,
    immediate?: boolean,
  ) => void;
};

export const pClassName = "mb-3";
const citeClassName = `cursor-pointer rounded-2 text-left text-cite underline decoration-dotted decoration-(length:--ask-underline) underline-offset-4 box-decoration-clone transition-colors duration-150 ease-standard hover:bg-cite-weak hover:decoration-solid aria-expanded:bg-cite-weak aria-expanded:decoration-solid ${focusRingClassName}`;
export const proseClassName = `${pClassName} text-go leading-(--ask-leading-prose) text-ink-2`;
const quoteBaseClassName = "m-0 text-passage-compact leading-normal font-light text-ink italic opsz-24 guillemets";
export const quoteTextClassName = `${quoteBaseClassName} font-head`;
export const verseQuoteClassName = `${quoteBaseClassName} font-body`;
export const sourceClassName = "text-ui-xs leading-(--ask-leading-meta) text-ink-3";
export const headClassName = "text-ui-xs leading-(--ask-leading-ui) font-medium text-ink-2";

export function Entering({
  as: Tag = "div",
  enter,
  className,
  children,
}: {
  as?: "div" | "p" | "figure" | "ul" | "span";
  enter: Enter;
  className?: string;
  children: ReactNode;
}) {
  const element = useRef<HTMLElement>(null);
  useLayoutEffect(() => playEnter(element.current, enter), [enter]);
  return (
    <Tag ref={element as never} className={className}>
      {children}
    </Tag>
  );
}

export function CiteButton({
  target,
  handlers,
  className = "",
  children,
}: {
  target: { verse: number } | { quote: QuoteId };
  handlers: CiteHandlers;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      data-ask-cite=""
      data-bare-focus=""
      aria-haspopup={"quote" in target ? "dialog" : undefined}
      onClick={(event) => {
        if ("verse" in target) handlers.onVerse(target.verse, event.currentTarget);
        else handlers.onQuote(target.quote, event.currentTarget);
      }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") handlers.onPreview(target, event.currentTarget);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") handlers.onPreview(null, event.currentTarget);
      }}
      onFocus={(event) => {
        if (event.currentTarget.matches(":focus-visible")) handlers.onPreview(target, event.currentTarget, true);
      }}
      onBlur={(event) => handlers.onPreview(null, event.currentTarget)}
      className={`${citeClassName} ${className}`}
    >
      {children}
    </button>
  );
}

export function QuoteBlock({
  quote,
  head,
  handlers,
  enter,
}: {
  quote: QuoteId;
  head?: string | undefined;
  handlers: CiteHandlers;
  enter: Enter;
}) {
  const entry = quotes[quote];
  return (
    <Entering as="figure" enter={enter} className="m-0 grid gap-1">
      {head ? <span className={headClassName}>{head}</span> : null}
      <blockquote className={quoteTextClassName}>{entry.text}</blockquote>
      <figcaption className={sourceClassName}>
        <CiteButton target={{ quote }} handlers={handlers}>
          {sourceOf(entry)}
        </CiteButton>
        {entry.bible ? `, ${entry.edition}` : null}
      </figcaption>
    </Entering>
  );
}

export function ProseWord({ token, handlers, enter }: { token: string; handlers: CiteHandlers; enter: Enter }) {
  const element = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => playEnter(element.current, enter), [enter]);
  const parts = token.split(/(\{\d+\})/);
  return (
    <span ref={element}>
      {parts.map((part, index) => {
        const verse = /^\{(\d+)\}$/.exec(part);
        return verse ? (
          <CiteButton key={index} target={{ verse: Number(verse[1]) }} handlers={handlers}>
            {verseLabel(Number(verse[1]))}
          </CiteButton>
        ) : (
          part
        );
      })}{" "}
    </span>
  );
}

export const verseText = (verse: number) => johnSix[verse] ?? "";
