"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { clearAskPill, openAskDrawer, type AskPill } from "@/lib/ask-drawer";
import { prefersReducedMotion } from "@/lib/branch-motion";
import { Answer } from "@/features/reader-ai/answer";
import { Entering, type CiteHandlers } from "@/features/reader-ai/answer-parts";
import { focusRingClassName, motionClassName, motionStyle, scrollBoxTo } from "@/features/reader-ai/motion";
import {
  currentConversation,
  recordEntry,
  startConversation,
  type SavedEntry,
} from "@/features/reader-ai/conversations";
import { useAskScript } from "@/features/reader-ai/ask-script";
import type { AnswerId, ChipId } from "@/features/reader-ai/script";
import type { Scope } from "@/features/reader-ai/scope-control";
import type { AskText } from "@/features/reader-ai/text";

type Entry = SavedEntry & { replay?: boolean };

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
  chapterSource: string;
  restored: boolean;
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
const answerSeconds = 4;
const fragmentMax = 160;
const toolbarWidth = 180;
const toolbarHalf = 80;
const toolbarAbove = 48;
const toolbarTop = 56;
const edgePx = 8;

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
  chapterSource,
  restored,
}: ChatProps) {
  const script = useAskScript();
  const opening = pill?.unit ? "verse" : "chapter";
  const [entries, setEntries] = useState<Entry[]>(() => {
    const now = currentConversation();
    if (now.script !== script.id || (!restored && now.opening !== opening)) {
      startConversation(opening, script.id);
      return [];
    }
    return now.entries.map((entry) => ({ ...entry, replay: true }));
  });
  const [fragment, setFragment] = useState<{ x: number; y: number; text: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [chipsLeaving, setChipsLeaving] = useState(false);
  const [draft, setDraft] = useState("");
  const [away, setAway] = useState(false);
  const [lifted, setLifted] = useState(false);
  const stop = useRef(false);
  const field = useRef<HTMLTextAreaElement>(null);
  const chipsRow = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const counter = useRef(entries.reduce((most, entry) => Math.max(most, entry.key), 0));
  const following = useRef(true);
  const busyNow = useRef(false);
  const asked = useRef(entries.length);
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

  useEffect(() => {
    const host = body.current;
    const drawer = host?.closest<HTMLElement>("[data-ask-drawer]");
    if (!host || !drawer) return;
    let timer = 0;
    const onUp = () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        const selection = getSelection();
        const picked = selection && !selection.isCollapsed ? selection.toString().trim() : "";
        const node = selection?.anchorNode ?? null;
        const element = node instanceof Element ? node : (node?.parentElement ?? null);
        if (!selection || !picked || !element?.closest("[data-ask-answer]") || !host.contains(element)) {
          setFragment(null);
          return;
        }
        const range = selection.getRangeAt(0).getBoundingClientRect();
        const frame = drawer.getBoundingClientRect();
        setFragment({
          x: Math.max(
            edgePx,
            Math.min(frame.width - toolbarWidth, range.left - frame.left + range.width / 2 - toolbarHalf),
          ),
          y: Math.max(toolbarTop, range.top - frame.top - toolbarAbove),
          text: picked.length > fragmentMax ? `${picked.slice(0, fragmentMax - 3)}…` : picked,
        });
      }, 10);
    };
    const onDown = (event: PointerEvent) => {
      if (!(event.target instanceof Element && event.target.closest("[data-ask-fragment]"))) setFragment(null);
    };
    const onScroll = () => setFragment(null);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointerdown", onDown);
    host.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerdown", onDown);
      host.removeEventListener("scroll", onScroll);
    };
  }, []);

  const ask = (chip: ChipId | null, typed?: string, label?: string) => {
    if (busy) return;
    let id: AnswerId = chip === null ? script.route(typed ?? "") : chip === "scopeFix" ? "fathers" : chip;
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
    const answer = script.answer(id);
    const entry: SavedEntry = {
      key: counter.current,
      id,
      question: typed || label || answer.question || (chip ? (script.chips[chip] ?? "") : ""),
      pill,
      scopeName: scopeNames[currentScope],
      seconds: answerSeconds,
    };
    setEntries((current) => [...current, entry]);
    recordEntry(entry);
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
                  <p className="m-0 font-head text-panel-reference leading-group font-normal text-pretty text-ink opsz-24">
                    {entry.question}
                  </p>
                  {entry.pill ? (
                    <span className="inline-flex max-w-full items-baseline gap-1.5 text-label leading-label text-ink-3">
                      <b className="flex-none font-medium text-cite">{entry.pill.reference}</b>
                      <span className="truncate font-body text-ui-sm leading-group font-light italic guillemets">
                        {entry.pill.text}
                      </span>
                    </span>
                  ) : null}
                  <Answer
                    id={entry.id}
                    scopeName={entry.scopeName}
                    replay={entry.replay ?? false}
                    seconds={entry.seconds}
                    chapterSource={chapterSource}
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
            data-lenis-prevent
            inert={chipsLeaving}
            className="-mx-5.5 mb-2 flex gap-2 overflow-x-auto overscroll-contain px-5.5 chips-scroll"
          >
            {script.suggestionSets[opening].map((chip) => {
              const label = text.suggestions[opening][chip.id] ?? chip.label;
              return (
                <button
                  key={chip.id}
                  type="button"
                  data-bare-focus=""
                  onClick={() => ask(chip.id, undefined, label)}
                  className={`inline-flex min-h-8.5 flex-none cursor-pointer items-center justify-center rounded-6 border border-rule px-2.5 text-ui-xs leading-label whitespace-nowrap text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11 ${focusRingClassName}`}
                >
                  {label}
                </button>
              );
            })}
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
      {fragment ? (
        <div
          role="toolbar"
          data-ask-fragment=""
          style={{ "--x": `${fragment.x}px`, "--y": `${fragment.y}px` } as React.CSSProperties}
          className="absolute top-(--y) left-(--x) z-20 rounded-8 border border-rule-2 bg-panel p-1 shadow-floating"
        >
          <button
            type="button"
            data-bare-focus=""
            onClick={() => {
              openAskDrawer({ pill: { reference: text.fromAnswer, text: fragment.text }, focus: true });
              setFragment(null);
              getSelection()?.removeAllRanges();
            }}
            className={`min-h-8.5 cursor-pointer rounded-6 px-3 text-btn leading-(--ask-leading-ui) font-medium text-ink hover:bg-hover ${focusRingClassName}`}
          >
            {text.askThis}
          </button>
        </div>
      ) : null}
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
