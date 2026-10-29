"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import { prefersReducedMotion } from "@/lib/branch-motion";
import { focusRingClassName, motionClassName, motionStyle } from "@/features/reader-ai/motion";
import { quotes, type QuoteId } from "@/features/reader-ai/quotes";
import type { AskText } from "@/features/reader-ai/text";
import { askTokens } from "@/features/reader-ai/tokens";

type QuoteWindowProps = {
  text: AskText["cite"];
  closeLabel: string;
  quote: QuoteId | null;
  onClose: () => void;
};

const narrowQuery = "(max-width: 44.99rem)";
const copiedMs = 1600;
const focusDelayMs = 200;

const subscribeNarrow = (listener: () => void) => {
  const query = matchMedia(narrowQuery);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
};

export function QuoteWindow({ text, closeLabel, quote, onClose }: QuoteWindowProps) {
  const narrow = useSyncExternalStore(
    subscribeNarrow,
    () => matchMedia(narrowQuery).matches,
    () => false,
  );
  const [last, setLast] = useState(quote);
  const [copied, setCopied] = useState(false);
  const close = useRef<HTMLButtonElement>(null);
  const timer = useRef(0);
  const latestClose = useRef(onClose);
  useEffect(() => {
    latestClose.current = onClose;
  });
  if (quote && quote !== last) setLast(quote);
  const open = quote !== null;
  const entry = last ? quotes[last] : null;

  useEffect(() => {
    if (!open) return;
    const release = registerEscape(escapePriority.window, () => latestClose.current());
    const focus = window.setTimeout(
      () => close.current?.focus({ preventScroll: true }),
      prefersReducedMotion() ? 0 : focusDelayMs,
    );
    return () => {
      release();
      clearTimeout(focus);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = () => {
    if (!entry) return;
    navigator.clipboard?.writeText(`«${entry.text}» (${entry.who}, ${entry.work})`).catch(() => undefined);
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), copiedMs);
  };

  const hide = open ? 0 : narrow ? 260 : 200;
  const windowStyle: React.CSSProperties = {
    ...askTokens,
    ...(narrow
      ? motionStyle(["translate", 260, "move"], ["visibility", 0, "linear", hide])
      : motionStyle(["opacity", 200, "standard"], ["translate", 200, "standard"], ["visibility", 0, "linear", hide])),
  };
  return (
    <>
      <div
        aria-hidden="true"
        data-open={(open && narrow) || undefined}
        onClick={onClose}
        style={motionStyle(["opacity", 200, "standard"], ["visibility", 0, "linear", open ? 0 : 200])}
        className={`invisible fixed inset-0 z-68 bg-scrim opacity-0 data-open:visible data-open:opacity-100 ${motionClassName}`}
      />
      <div
        role="dialog"
        aria-label={text.window}
        data-ask-window=""
        data-open={open || undefined}
        data-narrow={narrow || undefined}
        style={windowStyle}
        className={`group/window texture-layer invisible fixed top-32.5 right-6 z-70 flex max-h-(--ask-window-max) w-100 translate-y-1.5 flex-col rounded-10 border border-rule-2 bg-panel font-ui text-ui-base leading-normal text-ink opacity-0 shadow-floating data-open:visible data-open:translate-y-0 data-open:opacity-100 data-narrow:top-auto data-narrow:right-0 data-narrow:bottom-0 data-narrow:left-0 data-narrow:max-h-(--ask-window-sheet) data-narrow:w-auto data-narrow:translate-y-full data-narrow:rounded-t-14 data-narrow:rounded-b-none data-narrow:border-x-0 data-narrow:border-b-0 data-narrow:opacity-100 data-narrow:data-open:translate-y-0 safe-bottom ${motionClassName}`}
      >
        <span
          aria-hidden="true"
          className="absolute top-1.75 left-1/2 hidden h-1 w-7 -translate-x-1/2 rounded-2 bg-rule-2 group-data-narrow/window:block"
        />
        <div className="flex items-center justify-between border-b border-rule py-1.5 pr-1.5 pl-4 text-label leading-(--ask-leading-ui) font-medium text-ink-3 group-data-narrow/window:pt-4">
          <span>{text.window}</span>
          <button
            ref={close}
            type="button"
            data-bare-focus=""
            aria-label={closeLabel}
            onClick={onClose}
            className={`grid size-9 cursor-pointer place-items-center rounded-6 text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:size-11 ${focusRingClassName}`}
          >
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
          </button>
        </div>
        {entry ? (
          <div data-lenis-prevent className="overflow-y-auto px-4.5 pt-4 pb-4.5">
            <p className="m-0 mb-3.5 font-head text-quote-window font-light text-ink italic opsz-24 guillemets">
              {entry.text}
            </p>
            <div className="text-go leading-(--ask-leading-row) font-medium text-ink">{entry.who}</div>
            <div className="mt-0.5 mb-3.5 text-btn leading-normal text-ink-3">{entry.work}</div>
            <p className="m-0 mb-3.5 text-label leading-normal text-ink-3">{entry.edition}</p>
            <button
              type="button"
              data-bare-focus=""
              onClick={copy}
              className={`${focusRingClassName} inline-flex min-h-10 cursor-pointer items-center justify-center rounded-7 border border-rule-2 bg-card px-3.5 text-ui-sm leading-(--ask-leading-ui) font-medium text-ink transition-colors duration-150 ease-standard hover:border-ink hover:bg-hover`}
            >
              {copied ? text.copied : text.copy}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
