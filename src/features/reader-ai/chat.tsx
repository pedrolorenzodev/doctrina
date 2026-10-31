"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { clearAskPill, type AskPill } from "@/lib/ask-drawer";
import { prefersReducedMotion } from "@/lib/branch-motion";
import { Answer } from "@/features/reader-ai/answer";
import { Entering, type CiteHandlers } from "@/features/reader-ai/answer-parts";
import { focusRingClassName, motionClassName, motionStyle, scrollBoxTo } from "@/features/reader-ai/motion";
import { answers, chips, routeQuestion, suggestionSets, type AnswerId, type ChipId } from "@/features/reader-ai/script";
import type { Scope } from "@/features/reader-ai/scope-control";
import type { AskText } from "@/features/reader-ai/text";

type Entry = { key: number; id: AnswerId; question: string; pill: AskPill | null; meta: string };

type ChatProps = {
  text: AskText["chat"];
  chapter: string;
  scope: Scope;
  scopeNames: Record<Scope, string>;
  notesOn: boolean;
  pill: AskPill | null;
  handlers: CiteHandlers;
  onScopeFix: () => void;
  onMarks: () => void;
  onAsk: () => void;
  onPillGo: (pill: AskPill) => void;
};

const foldMs = 220;
const fadeMs = 160;
const chipsGapPx = 8;
const askScrollMs = 260;
const doneScrollMs = 240;
const jumpScrollMs = 320;
const followShare = 0.16;
const awayPx = 80;
const bottomPx = 8;
const upKeys = ["ArrowUp", "PageUp", "Home"];

function Cross() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export function Chat({
  text,
  chapter,
  scope,
  scopeNames,
  notesOn,
  pill,
  handlers,
  onScopeFix,
  onMarks,
  onAsk,
  onPillGo,
}: ChatProps) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [busy, setBusy] = useState(false);
  const [chipsLeaving, setChipsLeaving] = useState(false);
  const [draft, setDraft] = useState("");
  const [away, setAway] = useState(false);
  const [lifted, setLifted] = useState(false);
  const stop = useRef(false);
  const field = useRef<HTMLTextAreaElement>(null);
  const chipsRow = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const counter = useRef(0);
  const following = useRef(true);
  const busyNow = useRef(false);
  const asked = useRef(0);
  const opening = pill?.unit ? "verse" : "chapter";
  const where = pill?.unit ? pill.reference : chapter;
  const chipsShown = entries.length === 0 || chipsLeaving;

  const maxTop = () => (body.current ? body.current.scrollHeight - body.current.clientHeight : 0);

  const updateAway = useCallback(() => {
    const host = body.current;
    if (!host) return;
    const far = host.scrollHeight - host.clientHeight - host.scrollTop > awayPx;
    setAway(far && asked.current > 0 && !(following.current && busyNow.current));
    setLifted(host.scrollHeight - host.clientHeight - host.scrollTop > 1);
  }, []);

  useLayoutEffect(() => {
    const row = chipsRow.current;
    if (!chipsLeaving || !row) return;
    const height = row.offsetHeight;
    row.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: fadeMs,
      easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      fill: "forwards",
    });
    const fold = row.animate(
      [
        { height: `${height}px`, marginBottom: `${chipsGapPx}px` },
        { height: "0px", marginBottom: "0px" },
      ],
      { duration: foldMs, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" },
    );
    fold.finished.then(
      () => setChipsLeaving(false),
      () => undefined,
    );
  }, [chipsLeaving]);

  useEffect(() => {
    if (entries.length === 0) return;
    const host = body.current;
    if (!host) return;
    following.current = true;
    scrollBoxTo(host, host.scrollHeight - host.clientHeight, askScrollMs);
  }, [entries.length]);

  useEffect(() => {
    busyNow.current = busy;
    const host = body.current;
    if (!host) return;
    if (!busy) {
      if (asked.current > 0 && following.current) scrollBoxTo(host, maxTop(), doneScrollMs);
      updateAway();
      return;
    }
    let frame = 0;
    const step = () => {
      if (following.current && busyNow.current) {
        const distance = host.scrollHeight - host.clientHeight - host.scrollTop;
        if (distance > 0.5) host.scrollTop += Math.max(1, distance * followShare);
      }
      updateAway();
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [busy, updateAway]);

  useEffect(() => {
    const host = body.current;
    if (!host) return;
    host.style.overflowAnchor = "none";
    const release = () => {
      following.current = false;
    };
    const onWheel = (event: WheelEvent) => {
      if (event.deltaY < 0) release();
    };
    const onTouch = () => {
      if (busyNow.current) release();
    };
    const onKey = (event: KeyboardEvent) => {
      if (upKeys.includes(event.key)) release();
    };
    const onScroll = () => {
      if (host.scrollHeight - host.clientHeight - host.scrollTop < bottomPx && busyNow.current)
        following.current = true;
      updateAway();
    };
    host.addEventListener("wheel", onWheel, { passive: true });
    host.addEventListener("touchmove", onTouch, { passive: true });
    host.addEventListener("keydown", onKey);
    host.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      host.removeEventListener("wheel", onWheel);
      host.removeEventListener("touchmove", onTouch);
      host.removeEventListener("keydown", onKey);
      host.removeEventListener("scroll", onScroll);
    };
  }, [updateAway]);

  const ask = (chip: ChipId | null, typed?: string, label?: string) => {
    if (busy) return;
    let id: AnswerId = chip === null ? routeQuestion(typed ?? "") : chip === "scopeFix" ? "fathers" : chip;
    let currentScope = scope;
    if (chip === "scopeFix") {
      onScopeFix();
      currentScope = "fathers";
    }
    if (id === "fathers" && (currentScope === "chapter" || currentScope === "bible")) id = "scopeMiss";
    if (id === "mine" && !notesOn) id = "none";
    onAsk();
    stop.current = false;
    following.current = true;
    asked.current += 1;
    setBusy(true);
    if (entries.length === 0) setChipsLeaving(!prefersReducedMotion());
    counter.current += 1;
    const answer = answers[id];
    const searched = text.searchedIn.replace("{scope}", scopeNames[currentScope]);
    setEntries((current) => [
      ...current,
      {
        key: counter.current,
        id,
        question: typed || label || answer.question || (chip ? chips[chip] : ""),
        pill,
        meta: answer.scope ? `${searched} ${answer.scope}` : `${searched} `,
      },
    ]);
    clearAskPill();
  };

  const send = () => {
    const question = draft.trim();
    if (!question || busy) return;
    setDraft("");
    if (field.current) field.current.style.height = "";
    ask(null, question);
  };

  return (
    <>
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div
          ref={body}
          data-lenis-prevent
          data-ask-body=""
          className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5.5 pt-4.5 pb-6 fade-bottom scrollbar-rule"
        >
          {entries.length === 0 ? (
            <div data-ask-empty="" className="flex flex-1 flex-col justify-center pb-3">
              <p className="m-0 font-head text-ask-empty font-light text-balance text-ink opsz-36">
                {text.empty.replace("{where}", where)}
              </p>
              <p className="mt-2.5 text-go leading-(--ask-leading-note) text-ink-3">{text.emptyNote}</p>
            </div>
          ) : (
            <div
              role="log"
              aria-live="polite"
              aria-atomic="false"
              className="grid min-w-0 flex-none grid-cols-1 gap-6.5"
            >
              {entries.map((entry) => (
                <Entering
                  key={entry.key}
                  enter={prefersReducedMotion() ? "none" : "pop"}
                  className="grid min-w-0 grid-cols-1 gap-2.5"
                >
                  <p className="mb-3 font-head text-strip-name leading-(--ask-leading-question) font-normal text-pretty text-ink opsz-24">
                    {entry.question}
                  </p>
                  {entry.pill ? (
                    <span className="inline-flex max-w-full items-baseline gap-1.5 text-label leading-(--ask-leading-ui) text-ink-3">
                      <b className="flex-none font-medium text-cite">{entry.pill.reference}</b>
                      <span className="truncate font-body text-btn leading-(--ask-leading-ui) font-light italic guillemets">
                        {entry.pill.text}
                      </span>
                    </span>
                  ) : null}
                  <Answer
                    id={entry.id}
                    meta={entry.meta}
                    text={text}
                    stop={stop}
                    handlers={handlers}
                    onMarks={onMarks}
                    onFollow={(chip) => ask(chip)}
                    onDone={() => setBusy(false)}
                  />
                </Entering>
              ))}
            </div>
          )}
        </div>
        <button
          type="button"
          data-bare-focus=""
          data-ask-jump=""
          aria-label={text.jump}
          aria-hidden={!away}
          tabIndex={away ? 0 : -1}
          data-on={away || undefined}
          onClick={() => {
            following.current = true;
            if (body.current) scrollBoxTo(body.current, maxTop(), jumpScrollMs);
          }}
          style={motionStyle(
            ["opacity", 150, "standard"],
            ["translate", 150, "standard"],
            ["background-color", 150, "standard"],
          )}
          className={`pointer-events-none absolute bottom-3 left-1/2 z-5 grid size-9 -translate-x-1/2 translate-y-1.5 cursor-pointer place-items-center rounded-6 border border-rule-2 bg-panel text-ink-2 opacity-0 shadow-floating hover:bg-card hover:text-ink data-on:pointer-events-auto data-on:translate-y-0 data-on:opacity-100 ${motionClassName} ${focusRingClassName}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 3v10M3.5 8.5L8 13l4.5-4.5" />
          </svg>
        </button>
      </div>
      <div
        data-ask-foot=""
        data-lifted={lifted || undefined}
        className="relative z-3 flex-none px-5.5 pt-1 pb-3.5 transition-shadow duration-200 ease-standard data-lifted:shadow-strip motion-reduce:transition-none"
      >
        {chipsShown ? (
          <div
            ref={chipsRow}
            data-ask-suggestions=""
            inert={chipsLeaving}
            className="-mx-5.5 mb-2 flex gap-2 overflow-x-auto px-5.5 chips-scroll"
          >
            {suggestionSets[opening].map((chip) => (
              <button
                key={chip.id}
                type="button"
                data-bare-focus=""
                onClick={() => ask(chip.id, undefined, chip.label)}
                className={`inline-flex min-h-8.5 flex-none cursor-pointer items-center justify-center rounded-6 border border-rule px-2.5 text-ui-xs leading-label whitespace-nowrap text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11 ${focusRingClassName}`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        ) : null}
        <div className="grid min-w-0 grid-cols-1 gap-2">
          {pill ? (
            <Entering
              enter={prefersReducedMotion() ? "none" : "pill"}
              className={`flex max-w-full min-h-8 items-center gap-2 rounded-6 border border-rule bg-hover py-0.5 pr-1 pl-2.5 transition-colors duration-150 ease-standard ${pill.unit ? "group/pill hover:border-rule-2" : ""}`}
            >
              {pill.unit ? (
                <button
                  type="button"
                  data-bare-focus=""
                  data-ask-pill-go=""
                  aria-label={text.pillGo.replace("{reference}", pill.reference)}
                  onClick={() => onPillGo(pill)}
                  className={`flex min-w-0 flex-1 cursor-pointer items-center gap-2 rounded-4 text-left ${focusRingClassName}`}
                >
                  <PillLabel pill={pill} />
                </button>
              ) : (
                <span className="flex min-w-0 flex-1 items-center gap-2">
                  <PillLabel pill={pill} />
                </span>
              )}
              <button
                type="button"
                aria-label={text.removePill}
                onClick={clearAskPill}
                className="grid size-6.5 flex-none cursor-pointer place-items-center rounded-4 text-ink-3 hover:bg-hover hover:text-ink"
              >
                <Cross />
              </button>
            </Entering>
          ) : null}
          <div className="flex items-end gap-2">
            <textarea
              ref={field}
              rows={1}
              data-bare-focus=""
              aria-label={text.question}
              placeholder={text.placeholder.replace("{chapter}", where)}
              value={draft}
              onChange={(event) => {
                setDraft(event.target.value);
                const element = event.target;
                element.style.height = "auto";
                element.style.height = `${Math.min(120, element.scrollHeight + 2)}px`;
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  send();
                }
              }}
              className="min-h-10 max-h-30 min-w-0 flex-1 resize-none rounded-6 border border-rule-2 bg-card px-3 py-2.25 text-ui-base leading-(--ask-leading-field) text-ink outline-none transition-colors duration-150 ease-standard placeholder:text-ink-3 focus:border-ink-3"
            />
            <button
              type="button"
              data-bare-focus=""
              onClick={() => {
                if (busy) stop.current = true;
                else send();
              }}
              className={`inline-flex min-h-10 flex-none cursor-pointer items-center justify-center rounded-7 border border-rule-2 bg-card px-3.5 text-ui-sm leading-(--ask-leading-ui) font-medium text-ink transition-colors duration-150 ease-standard hover:border-ink hover:bg-hover ${focusRingClassName}`}
            >
              {busy ? text.stop : text.send}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PillLabel({ pill }: { pill: AskPill }) {
  return (
    <>
      <b className="flex-none text-label leading-(--ask-leading-ui) font-medium text-cite">{pill.reference}</b>
      <span className="min-w-0 flex-1 truncate font-body text-ui-sm leading-group font-light text-ink-2 italic transition-colors duration-150 ease-standard guillemets group-hover/pill:text-ink">
        {pill.text}
      </span>
    </>
  );
}
