"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { clearAskPill, type AskPill } from "@/lib/ask-drawer";
import { prefersReducedMotion } from "@/lib/branch-motion";
import { Answer } from "@/features/reader-ai/answer";
import { Entering, type CiteHandlers } from "@/features/reader-ai/answer-parts";
import { focusRingClassName, smoothScrollBox } from "@/features/reader-ai/motion";
import { answers, chips, routeQuestion, type AnswerId, type ChipId } from "@/features/reader-ai/script";
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
};

const foldMs = 220;
const fadeMs = 160;
const chatGapPx = 18;
const scrollMarginPx = 12;

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
      className="flex-none text-ink-3 transition-transform duration-150 ease-standard group-hover/row:translate-x-0.5"
    >
      <path d="M6 3.5L10.5 8 6 12.5" />
    </svg>
  );
}

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
}: ChatProps) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [busy, setBusy] = useState(false);
  const [top, setTop] = useState<"shown" | "folding" | "hidden">("shown");
  const [draft, setDraft] = useState("");
  const stop = useRef(false);
  const field = useRef<HTMLTextAreaElement>(null);
  const topBox = useRef<HTMLDivElement>(null);
  const thread = useRef<HTMLDivElement>(null);
  const counter = useRef(0);
  const suggestions: ChipId[] = notesOn ? ["fathers", "traditions", "mine"] : ["fathers", "traditions", "words"];

  useLayoutEffect(() => {
    const box = topBox.current;
    if (top !== "folding" || !box) return;
    const height = box.offsetHeight;
    box.style.overflow = "hidden";
    box.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: fadeMs,
      easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      fill: "forwards",
    });
    const fold = box.animate(
      [
        { height: `${height}px`, marginBottom: "0px" },
        { height: "0px", marginBottom: `-${chatGapPx}px` },
      ],
      { duration: foldMs, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" },
    );
    fold.finished.then(
      () => setTop("hidden"),
      () => undefined,
    );
  }, [top]);

  useLayoutEffect(() => {
    const last = thread.current?.lastElementChild;
    const host = thread.current?.closest<HTMLElement>("[data-ask-body]");
    if (!last || !host) return;
    const offset = last.getBoundingClientRect().top - host.getBoundingClientRect().top + host.scrollTop;
    smoothScrollBox(host, Math.max(0, offset - scrollMarginPx));
  }, [entries.length]);

  const ask = (chip: ChipId | null, typed?: string) => {
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
    setBusy(true);
    if (top === "shown") setTop(prefersReducedMotion() ? "hidden" : "folding");
    counter.current += 1;
    const answer = answers[id];
    const searched = text.searchedIn.replace("{scope}", scopeNames[currentScope]);
    setEntries((current) => [
      ...current,
      {
        key: counter.current,
        id,
        question: typed || answer.question || (chip ? chips[chip] : ""),
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
    <div data-ask-chat="" className="grid min-w-0 grid-cols-1 gap-4.5">
      {top !== "hidden" ? (
        <div ref={topBox} data-ask-suggestions="">
          <p className="mb-3 text-label leading-(--ask-leading-ui) font-medium text-ink-3">{text.suggested}</p>
          <ul className="m-0 list-none p-0">
            {suggestions.map((chip) => (
              <li key={chip} className="first:*:border-t">
                <button
                  type="button"
                  onClick={() => ask(chip)}
                  className="group/row flex min-h-11 w-full cursor-pointer items-center justify-between gap-2.5 border-b border-rule py-2.25 pr-2 pl-2.5 text-left text-go leading-(--ask-leading-row) text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink"
                >
                  <span>{chips[chip]}</span>
                  <Chevron />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {entries.length > 0 ? (
        <div
          ref={thread}
          role="log"
          aria-live="polite"
          aria-atomic="false"
          className="grid min-w-0 grid-cols-1 gap-6.5"
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
      ) : null}
      <div className="grid min-w-0 grid-cols-1 gap-2.5">
        <div data-ask-pill-slot="">
          {pill ? (
            <Entering
              enter={prefersReducedMotion() ? "none" : "pill"}
              className="flex max-w-full min-h-8 items-center gap-2 rounded-6 border border-rule bg-hover py-1 pr-1 pl-2.5"
            >
              <b className="flex-none text-label leading-(--ask-leading-ui) font-medium text-cite">{pill.reference}</b>
              <span className="min-w-0 flex-1 truncate font-body text-ui-sm leading-(--ask-leading-ui) font-light text-ink-2 italic guillemets">
                {pill.text}
              </span>
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
        </div>
        <div className="flex items-end gap-2">
          <textarea
            ref={field}
            rows={1}
            data-bare-focus=""
            aria-label={text.question}
            placeholder={text.placeholder.replace("{chapter}", chapter)}
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
            className="min-h-10 max-h-30 min-w-0 flex-1 resize-none rounded-6 border border-rule-2 bg-card px-3 py-2.25 text-ui-base leading-(--ask-leading-row) text-ink outline-none transition-colors duration-150 ease-standard placeholder:text-ink-3 focus:border-ink-3"
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
  );
}
