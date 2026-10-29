"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { prefersReducedMotion } from "@/lib/branch-motion";
import {
  CiteButton,
  Entering,
  ProseWord,
  QuoteBlock,
  headClassName,
  pClassName,
  proseClassName,
  verseQuoteClassName,
  sourceClassName,
  verseText,
  type CiteHandlers,
} from "@/features/reader-ai/answer-parts";
import { AnswerActions } from "@/features/reader-ai/answer-actions";
import { motionClassName, motionStyle, type Enter } from "@/features/reader-ai/motion";
import {
  answers,
  chips,
  traditions,
  verseReference,
  yours,
  type AnswerId,
  type ChipId,
} from "@/features/reader-ai/script";
import type { AskText } from "@/features/reader-ai/text";

type Piece =
  | { kind: "status"; leaving: boolean }
  | { kind: "plain" }
  | { kind: "disputed" }
  | { kind: "words" }
  | { kind: "quote"; index: number }
  | { kind: "tradition"; index: number }
  | { kind: "yourHighlight" }
  | { kind: "yourNote" }
  | { kind: "prose" }
  | { kind: "stopped" }
  | { kind: "follow" }
  | { kind: "actions" };

type Shown = { piece: Piece; enter: Enter };

type AnswerProps = {
  id: AnswerId;
  meta: string;
  text: AskText["chat"];
  stop: RefObject<boolean>;
  handlers: CiteHandlers;
  onMarks: () => void;
  onFollow: (chip: ChipId) => void;
  onDone: () => void;
};

const wordMs = 55;

export function Answer({ id, meta, text, stop, handlers, onMarks, onFollow, onDone }: AnswerProps) {
  const answer = answers[id];
  const body = useRef<HTMLDivElement>(null);
  const [pieces, setPieces] = useState<Shown[]>([]);
  const [words, setWords] = useState(0);
  const [instant] = useState(() => prefersReducedMotion());
  const tokens = answer.prose ? answer.prose.split(" ") : [];
  const latest = useRef({ onMarks, onDone });
  useEffect(() => {
    latest.current = { onMarks, onDone };
  });

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        if (instant) resolve();
        else timers.push(window.setTimeout(resolve, ms));
      });
    const add = (piece: Piece, enter: Enter = "pop") =>
      setPieces((current) => [...current, { piece, enter: instant ? "none" : enter }]);
    const run = async () => {
      setPieces([]);
      setWords(0);
      if (!answer.fixed && !answer.plain && !instant) {
        add({ kind: "status", leaving: false }, "fade");
        await wait(750);
        if (cancelled) return;
        setPieces((current) =>
          current.map((shown) =>
            shown.piece.kind === "status" ? { ...shown, piece: { kind: "status", leaving: true } } : shown,
          ),
        );
        await wait(200);
        if (cancelled) return;
        setPieces((current) => current.filter((shown) => shown.piece.kind !== "status"));
      }
      if (answer.plain) {
        await wait(250);
        if (cancelled) return;
        add({ kind: "plain" }, "fade");
      }
      if (answer.disputed) {
        add({ kind: "disputed" });
        await wait(260);
      }
      if (answer.words) {
        add({ kind: "words" });
        await wait(260);
      }
      for (const [index] of (answer.blocks ?? []).entries()) {
        if (cancelled || stop.current) break;
        add({ kind: "quote", index });
        await wait(280);
      }
      if (answer.traditions) {
        for (const [index] of traditions.entries()) {
          if (cancelled || stop.current) break;
          add({ kind: "tradition", index });
          await wait(280);
        }
      }
      if (answer.mine) {
        add({ kind: "yourHighlight" });
        await wait(280);
        add({ kind: "yourNote" });
        await wait(280);
      }
      if (cancelled) return;
      if (answer.marks) {
        latest.current.onMarks();
        await wait(300);
      }
      if (answer.prose && !stop.current && !cancelled) {
        add({ kind: "prose" }, "none");
        if (instant) setWords(tokens.length);
        else
          for (let count = 1; count <= tokens.length; count += 1) {
            if (cancelled || stop.current) break;
            setWords(count);
            await new Promise<void>((resolve) => timers.push(window.setTimeout(resolve, wordMs)));
          }
      }
      if (cancelled) return;
      if (stop.current) add({ kind: "stopped" }, "fade");
      if (answer.follow.length > 0) {
        await wait(160);
        if (cancelled) return;
        add({ kind: "follow" }, "fade");
      }
      if (!answer.fixed && !answer.plain) add({ kind: "actions" }, "fade");
      latest.current.onDone();
    };
    void run();
    return () => {
      cancelled = true;
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [answer, instant, stop, tokens.length]);

  const render = ({ piece, enter }: Shown, key: number) => {
    switch (piece.kind) {
      case "status":
        return (
          <Entering key={key} as="p" enter={enter} className={`${pClassName} text-btn leading-normal text-ink-3`}>
            <span
              data-leaving={piece.leaving || undefined}
              style={motionStyle(["opacity", 200, "standard"])}
              className={`data-leaving:opacity-0 ${motionClassName}`}
            >
              {text.searching}
            </span>
          </Entering>
        );
      case "plain":
        return (
          <Entering key={key} as="p" enter={enter} className={proseClassName}>
            {answer.plain}
          </Entering>
        );
      case "disputed":
        return (
          <Entering
            key={key}
            as="p"
            enter={enter}
            className={`${pClassName} rounded-6 bg-hover px-3 py-2.5 text-btn leading-(--ask-leading-note) text-ink-2`}
          >
            {answer.disputed}
          </Entering>
        );
      case "words":
        return (
          <Entering key={key} as="ul" enter={enter} className="m-0 grid list-none p-0">
            {(answer.words ?? []).map((row) => (
              <li key={row.tradition} className="grid gap-0.5 border-t border-rule py-2.25 last:border-b">
                <span className="text-label leading-(--ask-leading-ui) font-medium text-ink-3">{row.tradition}</span>
                <span className="font-head text-row font-light text-ink italic guillemets">{row.words}</span>
                <span>
                  <CiteButton target={{ quote: row.quote }} handlers={handlers}>
                    {row.source}
                  </CiteButton>
                </span>
              </li>
            ))}
          </Entering>
        );
      case "quote": {
        const block = answer.blocks?.[piece.index];
        return block ? (
          <QuoteBlock key={key} quote={block.quote} head={block.head} handlers={handlers} enter={enter} />
        ) : null;
      }
      case "tradition": {
        const group = traditions[piece.index]!;
        return (
          <Entering key={key} enter={enter} className="grid gap-2.5">
            <span className={headClassName}>{group.name}</span>
            {group.quotes.map((quote) => (
              <QuoteBlock key={quote} quote={quote} handlers={handlers} enter="none" />
            ))}
          </Entering>
        );
      }
      case "yourHighlight":
        return (
          <Entering key={key} as="figure" enter={enter} className="m-0 grid gap-1">
            <blockquote className={verseQuoteClassName}>
              <mark className="rounded-2 bg-hl-green text-inherit">{verseText(yours.highlightVerse)}</mark>
            </blockquote>
            <figcaption className={sourceClassName}>
              <CiteButton target={{ verse: yours.highlightVerse }} handlers={handlers}>
                {verseReference(yours.highlightVerse)}
              </CiteButton>
              {yours.highlightCaption}
            </figcaption>
          </Entering>
        );
      case "yourNote":
        return (
          <Entering key={key} as="figure" enter={enter} className="m-0 grid gap-1">
            <span className={headClassName}>{yours.noteHead}</span>
            <p className={`${pClassName} font-body text-row leading-(--ask-leading-prose) font-light text-ink-2`}>
              {yours.note}
            </p>
            <figcaption className={sourceClassName}>
              <CiteButton target={{ verse: yours.noteVerse }} handlers={handlers}>
                {verseReference(yours.noteVerse)}
              </CiteButton>
            </figcaption>
          </Entering>
        );
      case "prose":
        return (
          <p key={key} className={proseClassName}>
            {tokens.slice(0, words).map((token, index) => (
              <ProseWord key={index} token={token} handlers={handlers} enter={instant ? "none" : "word"} />
            ))}
          </p>
        );
      case "stopped":
        return (
          <Entering key={key} as="p" enter={enter} className={`${pClassName} text-btn leading-normal text-ink-3`}>
            {text.stopped}
          </Entering>
        );
      case "follow":
        return (
          <Entering key={key} enter={enter} className="flex flex-wrap gap-1.5">
            {answer.follow.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => onFollow(chip)}
                className="min-h-8.5 cursor-pointer rounded-6 border border-rule px-2.75 py-1.5 text-left text-btn leading-group text-ink-2 transition-colors duration-150 ease-standard hover:border-rule-2 hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
              >
                {chips[chip]}
              </button>
            ))}
          </Entering>
        );
      case "actions":
        return <AnswerActions key={key} enter={enter} text={text} copyFrom={body} />;
    }
  };

  return (
    <div
      ref={body}
      data-ask-answer={id}
      className="relative grid min-w-0 grid-cols-1 gap-3 border-l border-rule-2 pl-3.5"
    >
      <p data-ask-meta="" className={`${pClassName} text-label leading-(--ask-leading-meta) text-ink-3`}>
        <b className="block font-medium text-ink-2">{answer.fixed ? text.fixed : text.generated}</b>
        {answer.fixed ? text.fixedNote : meta}
      </p>
      {pieces.map(render)}
    </div>
  );
}
