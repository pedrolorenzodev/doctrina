"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { useCitation } from "@/components/citation-window/citation-context";
import type { CitationView } from "@/lib/citation-view";
import type { CitationWindowText } from "@/components/citation-window/types";
import { MiniTimeline } from "@/components/mini-timeline";
import { PageLink } from "@/components/ui/page-link";
import { IconButton } from "@/components/ui/icon-button";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import { trapTab } from "@/lib/focus";
import { useMediaQuery, useViewport } from "@/lib/use-viewport";
import { clampWindow, type Point } from "@/lib/window-position";

const copiedMs = 1600;

type Drag = { dx: number; dy: number; point: Point };

export function CitationWindow() {
  const { views, text, openId, shownId, position, close, remember } = useCitation();
  const view = shownId ? views[shownId] : undefined;
  const viewport = useViewport();
  const floating = useMediaQuery("(min-width: 40rem)", true);
  const [drag, setDrag] = useState<Drag | null>(null);
  const [copied, setCopied] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const copyTimer = useRef<number | undefined>(undefined);
  const isOpen = openId !== null;

  useEffect(() => {
    if (!isOpen) return;
    const release = registerEscape(escapePriority.window, close);
    const frame = requestAnimationFrame(() => panel.current?.focus({ preventScroll: true }));
    const trap = (event: KeyboardEvent) => {
      if (!floating && panel.current) trapTab(event, panel.current);
    };
    addEventListener("keydown", trap);
    return () => {
      cancelAnimationFrame(frame);
      release();
      removeEventListener("keydown", trap);
    };
  }, [isOpen, floating, close]);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const placed = clampWindow(drag?.point ?? position ?? { x: 0, y: 0 }, viewport);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (!floating || (event.target as HTMLElement).closest("button") || !panel.current) return;
    const rect = panel.current.getBoundingClientRect();
    event.currentTarget.setPointerCapture(event.pointerId);
    setDrag({ dx: event.clientX - rect.left, dy: event.clientY - rect.top, point: { x: rect.left, y: rect.top } });
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag) setDrag({ ...drag, point: { x: event.clientX - drag.dx, y: event.clientY - drag.dy } });
  }

  function endDrag() {
    if (!drag) return;
    remember(clampWindow(drag.point, viewport));
    setDrag(null);
  }

  async function copy() {
    if (!view?.copyText) return;
    try {
      await navigator.clipboard.writeText(view.copyText);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(false), copiedMs);
  }

  return (
    <>
      <div
        aria-hidden="true"
        data-open={isOpen || undefined}
        onClick={close}
        className="pointer-events-none fixed inset-0 z-69 hidden bg-scrim opacity-0 transition-opacity duration-200 ease-standard data-open:pointer-events-auto data-open:opacity-100 max-sm:block"
      />
      <div
        ref={panel}
        role="dialog"
        aria-modal={floating ? "false" : "true"}
        aria-labelledby="citation-window-kind"
        tabIndex={-1}
        data-open={isOpen || undefined}
        style={{ "--x": `${placed.x}px`, "--y": `${placed.y}px` } as CSSProperties}
        className="fixed top-(--y) left-(--x) z-70 flex w-100 window-max-height pointer-events-none invisible translate-y-1.5 flex-col rounded-10 border border-rule-2 bg-panel text-ink opacity-0 shadow-floating window-motion texture-layer outline-none data-open:pointer-events-auto data-open:visible data-open:translate-y-0 data-open:opacity-100 max-sm:inset-x-0 max-sm:top-auto max-sm:bottom-0 max-sm:left-0 max-sm:w-auto max-sm:sheet-max-height max-sm:translate-y-full max-sm:rounded-t-14 max-sm:rounded-b-none max-sm:border-x-0 max-sm:border-b-0 max-sm:opacity-100 max-sm:data-open:translate-y-0"
      >
        <div
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="relative flex touch-none items-center gap-2 border-b border-rule py-2 pr-2 pl-4 select-none sm:cursor-grab sm:active:cursor-grabbing max-sm:pl-2"
        >
          <span
            aria-hidden="true"
            className="absolute top-1.5 left-1/2 hidden h-1 w-7 -translate-x-1/2 rounded-2 bg-rule-2 max-sm:block"
          />
          <span id="citation-window-kind" className="flex-1 text-label font-medium text-ink-3">
            {view?.kind}
          </span>
          <IconButton aria-label={text.close} onClick={close}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="m3 3 8 8M11 3l-8 8" />
            </svg>
          </IconButton>
        </div>
        {view ? <WindowBody key={view.id} view={view} text={text} copied={copied} onCopy={copy} /> : null}
      </div>
    </>
  );
}

type WindowBodyProps = {
  view: CitationView;
  text: CitationWindowText;
  copied: boolean;
  onCopy: () => void;
};

function WindowBody({ view, text, copied, onCopy }: WindowBodyProps) {
  return (
    <div data-lenis-prevent className="overflow-y-auto overscroll-contain p-4.5">
      {view.title ? <h3 className="mb-2.5 font-head text-h3 font-normal text-ink">{view.title}</h3> : null}
      {view.quote ? (
        <p lang={view.quote.lang} className="font-head text-quote-window font-light text-ink italic opsz-24 guillemets">
          {view.quote.text}
        </p>
      ) : null}
      {view.definition ? <p className="font-body text-definition font-light text-ink-2">{view.definition}</p> : null}
      {view.who || view.locator ? (
        <p className="mt-3.5 text-meta">
          {view.who ? <span className="font-medium">{view.who}</span> : null}
          {view.locator ? <span className="block text-ink-3">{view.locator}</span> : null}
        </p>
      ) : null}
      {view.note ? (
        <p className="mt-3.5 text-meta text-ink-2">
          <span className="block text-ui-xs text-ink-3">{view.note.label}</span>
          {view.note.text}
        </p>
      ) : null}
      {view.date ? (
        <>
          <p className="mt-3.5 flex items-baseline gap-2.5 text-ui-xs text-ink-3">
            {text.dateLabel}
            <b className="text-ui-base font-medium text-ink tabular-nums">{view.date.label}</b>
          </p>
          <MiniTimeline start={view.date.start} end={view.date.end} label={view.date.label} />
        </>
      ) : null}
      {view.externalLink || view.copyText ? (
        <div className="mt-4.5 flex flex-wrap items-center gap-x-2.5 gap-y-2">
          {view.externalLink ? (
            <span className="text-btn">
              <PageLink href={view.externalLink.href} external>
                {view.externalLink.label}
              </PageLink>
            </span>
          ) : null}
          {view.copyText ? (
            <button
              type="button"
              onClick={onCopy}
              className="cursor-pointer rounded-6 px-1.5 py-2 text-btn text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
            >
              {copied ? text.copied : text.copy}
            </button>
          ) : null}
        </div>
      ) : null}
      <span role="status" className="sr-only">
        {copied ? text.copied : ""}
      </span>
    </div>
  );
}
