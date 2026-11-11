"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { focusRingClassName, playEnter, type Enter } from "@/features/reader-ai/motion";
import { useAskScript } from "@/features/reader-ai/ask-script";
import { johnSix } from "@/features/reader-ai/quotes";
import { sourceOf, verseLabel } from "@/features/reader-ai/script";
import { openNoteEvent, type OpenNoteDetail } from "@/lib/notes";
import { getNotes } from "@/lib/note-store";
import type { Locale } from "@doctrina/core/locale";
import { getBibleBook } from "@/content/bible-books";
import { bibleChapterHref } from "@/content/bible-routes";

export type CiteHandlers = {
  onVerse: (verse: number, element: HTMLElement) => void;
  onQuote: (quote: string, element: HTMLElement) => void;
  onPreview: (
    target: { verse: number } | { quote: string } | null,
    element: HTMLElement | null,
    immediate?: boolean,
  ) => void;
};

export const pClassName = "m-0";
const citeClassName = `cursor-pointer rounded-2 text-left text-cite underline decoration-dotted decoration-(length:--ask-underline) underline-offset-4 box-decoration-clone transition-colors duration-150 ease-standard hover:bg-cite-weak hover:decoration-solid aria-expanded:bg-cite-weak aria-expanded:decoration-solid ${focusRingClassName}`;
export const proseClassName = "m-0 font-body text-synthesis font-light text-ink-2 opsz-18";
const quoteBaseClassName = "m-0 text-passage-compact leading-normal font-light text-ink italic opsz-24 guillemets";
export const quoteTextClassName = `${quoteBaseClassName} font-head`;
export const verseQuoteClassName = `${quoteBaseClassName} font-body`;
export const sourceClassName = "mt-2 text-btn leading-(--ask-leading-meta) text-ink-3";
export const headClassName = "mb-1.5 block text-label leading-label font-medium text-ink-3";

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
  target: { verse: number } | { quote: string };
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
  quote: string;
  head?: string | undefined;
  handlers: CiteHandlers;
  enter: Enter;
}) {
  const entry = useAskScript().quote(quote);
  return (
    <Entering as="figure" enter={enter} className="m-0 border-t border-rule py-3.5">
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
  const script = useAskScript();
  const parts = token.split(/(\{\d+\}|\{q:[^}\s]+\})/);
  return (
    <span ref={element}>
      {parts.map((part, index) => {
        const verse = /^\{(\d+)\}$/.exec(part);
        const cited = /^\{q:([^}\s]+)\}$/.exec(part)?.[1];
        if (cited) {
          if (!(cited in script.quotes)) return null;
          const entry = script.quote(cited);
          return (
            <CiteButton key={index} target={{ quote: cited }} handlers={handlers}>
              {entry.bible ? sourceOf(entry) : entry.work}
            </CiteButton>
          );
        }
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

export type NoteToken = { word: string } | { ref: string; tail: string };

export function noteTokens(before: string, ref: string, after: string): NoteToken[] {
  const words = (text: string) => text.split(" ").filter(Boolean);
  const [tail = "", ...rest] = after.startsWith(" ") ? ["", ...words(after)] : words(after);
  return [...words(before).map((word) => ({ word })), { ref, tail }, ...rest.map((word) => ({ word }))];
}

function openNote(text: string, locale: Locale, go: (href: string) => void) {
  const event = new CustomEvent<OpenNoteDetail>(openNoteEvent, { detail: { text }, cancelable: true });
  if (!window.dispatchEvent(event)) return;
  const note = getNotes().find((candidate) => candidate.text === text);
  const book = note ? getBibleBook(note.book) : undefined;
  if (!note || !book) return;
  go(`${bibleChapterHref(locale, book, note.chapter)}${note.verse === null ? "" : `#v-${note.verse}`}`);
}

export function NoteWord({
  token,
  noteText,
  locale,
  enter,
}: {
  token: NoteToken;
  noteText: string;
  locale: Locale;
  enter: Enter;
}) {
  const element = useRef<HTMLSpanElement>(null);
  const router = useRouter();
  useLayoutEffect(() => playEnter(element.current, enter), [enter]);
  if ("word" in token) return <span ref={element}>{token.word} </span>;
  return (
    <span ref={element}>
      <button
        type="button"
        data-ask-note-cite=""
        data-bare-focus=""
        onClick={() => openNote(noteText, locale, (href) => router.push(href))}
        className={citeClassName}
      >
        {token.ref}
      </button>
      {token.tail}{" "}
    </span>
  );
}
