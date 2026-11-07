"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import type { AskPhase } from "@/lib/ai/contracts";
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
import { focusRingClassName, growSmoothly, type Enter } from "@/features/reader-ai/motion";
import { useAskScript, type AskScript } from "@/features/reader-ai/ask-script";
import {
  sourceOf,
  verseReference,
  yours,
  type Answer as AnswerData,
  type AnswerId,
  type ChipId,
} from "@/features/reader-ai/script";
import type { AskText } from "@/features/reader-ai/text";

type Piece =
  | { kind: "meta" }
  | { kind: "plain" }
  | { kind: "disputed" }
  | { kind: "words" }
  | { kind: "quote"; index: number }
  | { kind: "yourHighlight" }
  | { kind: "yourNote" }
  | { kind: "prose" }
  | { kind: "stopped" }
  | { kind: "foot" };

type Shown = { piece: Piece; enter: Enter };

type Status = { phase: number; seconds: number } | { done: true; seconds: number } | null;

type AnswerProps = {
  id: AnswerId;
  scopeName: string;
  chapterSource: string;
  text: AskText["chat"];
  stop: RefObject<boolean>;
  handlers: CiteHandlers;
  onMarks: () => void;
  onFollow: (chip: ChipId) => void;
  onDone: () => void;
  replay: boolean;
  seconds: number;
  live?: { pending: boolean; phase: AskPhase | null } | undefined;
  privacy?: string | undefined;
};

const statusMs = 3800;
const phaseMs = 1300;
const tickMs = 200;
const quoteGapMs = 480;
const wordMs = 100;
const liveSlowQuotes = 8;
const liveTailGapMs = 160;
const liveProseCapMs = 6000;

const liveStatusIndex = (phase: AskPhase | null) => (phase === "write" ? 2 : phase === "check" ? 1 : 0);

const blocksOf = (answer: AnswerData, traditions: AskScript["traditions"]): { quote: string; head?: string }[] => {
  if (answer.traditions)
    return traditions.flatMap((group) => group.quotes.map((quote) => ({ quote, head: group.name })));
  return answer.blocks ?? [];
};

function Chevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-200 ease-standard group-aria-expanded/stat:rotate-90 motion-reduce:transition-none"
    >
      <path d="M6 3.5L10.5 8 6 12.5" />
    </svg>
  );
}

const statClassName = "flex min-h-7.5 items-center gap-2 text-left text-ui-sm leading-(--ask-leading-row) text-ink-3";

export function Answer({
  id,
  scopeName,
  chapterSource,
  text,
  stop,
  handlers,
  onMarks,
  onFollow,
  onDone,
  replay,
  seconds,
  live,
  privacy,
}: AnswerProps) {
  const script = useAskScript();
  const answer = script.answer(id);
  const blocks = useMemo(() => blocksOf(answer, script.traditions), [answer, script.traditions]);
  const isLive = live !== undefined;
  const pending = live?.pending ?? false;
  const livePhase = live?.phase ?? null;
  const startedAt = useRef(0);
  const outer = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const [pieces, setPieces] = useState<Shown[]>([]);
  const [words, setWords] = useState(0);
  const [status, setStatus] = useState<Status>(null);
  const [listOpen, setListOpen] = useState(false);
  const [instant] = useState(() => replay || prefersReducedMotion());
  const tokens = answer.prose ? answer.prose.split(" ") : [];
  const latest = useRef({ onMarks, onDone });
  useEffect(() => {
    latest.current = { onMarks, onDone };
  });

  useEffect(() => {
    if (!outer.current || !body.current) return;
    return growSmoothly(outer.current, body.current);
  }, []);

  useEffect(() => {
    startedAt.current = performance.now();
  }, []);

  useEffect(() => {
    if (!pending) return;
    const tick = () =>
      setStatus({
        phase: liveStatusIndex(livePhase),
        seconds: Math.floor((performance.now() - startedAt.current) / 1000),
      });
    tick();
    const ticker = window.setInterval(tick, tickMs);
    return () => clearInterval(ticker);
  }, [pending, livePhase]);

  useEffect(() => {
    if (pending) return;
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
      const started = isLive ? startedAt.current : performance.now();
      if (answer.fixed) setStatus(null);
      if (!answer.fixed && !instant && !isLive) {
        setStatus({ phase: 0, seconds: 0 });
        const ticker = window.setInterval(() => {
          const elapsed = performance.now() - started;
          setStatus({ phase: Math.min(2, Math.floor(elapsed / phaseMs)), seconds: Math.floor(elapsed / 1000) });
        }, tickMs);
        timers.push(ticker);
        await wait(statusMs);
        clearInterval(ticker);
        if (cancelled) return;
      }
      if (!answer.fixed)
        setStatus({
          done: true,
          seconds: instant && !isLive ? seconds : Math.max(1, Math.round((performance.now() - started) / 1000)),
        });
      add({ kind: "meta" }, "none");
      if (answer.plain) add({ kind: "plain" }, "fade");
      if (answer.disputed) {
        add({ kind: "disputed" });
        await wait(quoteGapMs);
      }
      if (answer.words) {
        add({ kind: "words" });
        await wait(quoteGapMs);
      }
      for (const [index] of blocks.entries()) {
        if (cancelled || stop.current) break;
        const tail = isLive && index >= liveSlowQuotes;
        add({ kind: "quote", index }, tail ? "fade" : "pop");
        await wait(tail ? liveTailGapMs : quoteGapMs);
      }
      if (answer.mine) {
        add({ kind: "yourHighlight" });
        await wait(quoteGapMs);
        add({ kind: "yourNote" });
        await wait(quoteGapMs);
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
            const gap = isLive ? Math.min(wordMs, liveProseCapMs / tokens.length) : wordMs;
            await new Promise<void>((resolve) => timers.push(window.setTimeout(resolve, gap)));
          }
      }
      if (cancelled) return;
      if (stop.current) add({ kind: "stopped" }, "fade");
      else if (!answer.fixed || answer.follow.length > 0) add({ kind: "foot" }, "fade");
      latest.current.onDone();
    };
    void run();
    return () => {
      cancelled = true;
      timers.forEach((timer) => {
        clearTimeout(timer);
        clearInterval(timer);
      });
    };
  }, [answer, blocks, instant, isLive, pending, seconds, stop, tokens.length]);

  const sources = answer.consulted ?? [
    ...blocks.map((block) => block.quote),
    ...(answer.words ?? []).map((row) => row.quote),
  ];
  const consulted = answer.consulted ? sources.length : Math.max(sources.length, 1);

  const render = ({ piece, enter }: Shown, key: number) => {
    switch (piece.kind) {
      case "meta":
        return (
          <p key={key} data-ask-meta="" className="m-0 text-label leading-normal text-ink-3">
            {answer.meta ?? (answer.fixed ? text.fixedLine : text.metaLive.replace("{scope}", scopeName))}
          </p>
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
        const block = blocks[piece.index];
        return block ? (
          <QuoteBlock key={key} quote={block.quote} head={block.head} handlers={handlers} enter={enter} />
        ) : null;
      }
      case "yourHighlight":
        return (
          <Entering key={key} as="figure" enter={enter} className="m-0 border-t border-rule py-3.5">
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
          <Entering key={key} as="figure" enter={enter} className="m-0 border-t border-rule py-3.5">
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
          <Entering key={key} as="p" enter={enter} className="m-0 text-btn text-ink-3">
            {text.stopped}
          </Entering>
        );
      case "foot":
        return (
          <Entering key={key} enter={enter} className="mt-0.5 grid grid-cols-1 gap-3">
            {privacy ? (
              <p data-ask-privacy="" className="m-0 text-label leading-normal text-ink-3">
                {privacy}
              </p>
            ) : null}
            {answer.follow.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {answer.follow.slice(0, isLive ? answer.follow.length : 2).map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    data-bare-focus=""
                    onClick={() => onFollow(chip)}
                    className={`inline-flex min-h-9 cursor-pointer items-center justify-start rounded-6 border border-rule px-2.5 py-1.5 text-left text-ui-xs leading-label text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11 ${focusRingClassName}`}
                  >
                    {script.chips[chip]}
                  </button>
                ))}
              </div>
            ) : null}
            {answer.fixed ? null : <AnswerActions text={text} copyFrom={body} />}
          </Entering>
        );
    }
  };

  return (
    <div ref={outer} data-ask-answer={id} className="min-w-0">
      <div ref={body} className="grid min-w-0 grid-cols-1 gap-2.5">
        {status && "phase" in status ? (
          <p data-ask-status="" className={`m-0 ${statClassName}`}>
            <span>{text.phases[status.phase]}</span>
            <span className="tabular-nums">{text.seconds.replace("{n}", String(status.seconds))}</span>
          </p>
        ) : null}
        {status && "done" in status && consulted === 0 ? (
          <p data-ask-status="" className={`m-0 ${statClassName}`}>
            <span>{text.consulted.replace("{n}", "0")}</span>
            <span className="tabular-nums">{text.seconds.replace("{n}", String(status.seconds))}</span>
          </p>
        ) : null}
        {status && "done" in status && consulted > 0 ? (
          <div data-ask-status="">
            <button
              type="button"
              data-bare-focus=""
              aria-expanded={listOpen}
              onClick={() => setListOpen(!listOpen)}
              className={`group/stat cursor-pointer ${statClassName} ${focusRingClassName}`}
            >
              <span>{consulted === 1 ? text.consultedOne : text.consulted.replace("{n}", String(consulted))}</span>
              <span className="tabular-nums">{text.seconds.replace("{n}", String(status.seconds))}</span>
              <Chevron />
            </button>
            <ul
              hidden={!listOpen}
              className="m-0 mb-1 grid list-none gap-1 border-l border-rule pl-3 text-ui-xs leading-(--ask-leading-meta) text-ink-3"
            >
              {sources.length > 0
                ? sources.map((quote) => <li key={quote}>{sourceOf(script.quote(quote))}</li>)
                : [<li key="chapter">{chapterSource}</li>]}
            </ul>
          </div>
        ) : null}
        {pieces.length > 0 ? (
          <>
            {pieces.filter((shown) => shown.piece.kind === "meta").map(render)}
            {blocks.length > 0 || answer.mine ? (
              <div className="grid grid-cols-1">
                {pieces
                  .filter((shown) => ["quote", "yourHighlight", "yourNote"].includes(shown.piece.kind))
                  .map(render)}
              </div>
            ) : null}
            {pieces
              .filter((shown) => !["meta", "quote", "yourHighlight", "yourNote"].includes(shown.piece.kind))
              .map(render)}
          </>
        ) : null}
      </div>
    </div>
  );
}
