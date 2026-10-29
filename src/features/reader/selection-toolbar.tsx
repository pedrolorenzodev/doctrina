"use client";

import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";
import { CopyButton } from "@/components/ui/copy-button";
import { HighlightColors } from "@/features/reader/highlight-colors";
import { readSelection, type ReaderSelection, type VerseRange } from "@/features/reader/read-selection";
import { useSearch } from "@/components/search-provider";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import type { HighlightColor } from "@/lib/highlights";

type SelectionToolbarText = {
  label: string;
  cite: string;
  citeCopied: string;
  find: string;
  note: string;
  ask?: string;
  highlight: Parameters<typeof HighlightColors>[0]["text"];
};

type SelectionToolbarProps = {
  rootRef: RefObject<HTMLElement | null>;
  text: SelectionToolbarText;
  isMarked: (ranges: VerseRange[]) => boolean;
  lastColor: () => HighlightColor;
  chosenIn: (ranges: VerseRange[]) => HighlightColor | null;
  hasHighlightIn: (ranges: VerseRange[]) => boolean;
  citation: (selection: ReaderSelection) => string;
  onHighlight: (ranges: VerseRange[], color: HighlightColor) => void;
  onRemove: (ranges: VerseRange[]) => void;
  onNote: (selection: ReaderSelection) => void;
  onAsk?: (selection: ReaderSelection) => void;
};

const dockedQuery = "(max-width: 40rem), (pointer: coarse)";
const mouseDelayMs = 10;
const touchDelayMs = 400;
const keyDelayMs = 300;
const gap = 8;
const searchLength = 80;

const plainButtonClassName =
  "inline-flex min-h-9 cursor-pointer items-center justify-center rounded-6 px-2.5 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11";
const askButtonClassName =
  "inline-flex min-h-9 cursor-pointer items-center justify-center rounded-6 px-2.5 text-btn font-medium text-ink transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:min-h-11";

export function SelectionToolbar({
  rootRef,
  text,
  isMarked,
  lastColor,
  chosenIn,
  hasHighlightIn,
  citation,
  onHighlight,
  onRemove,
  onNote,
  onAsk,
}: SelectionToolbarProps) {
  const bar = useRef<HTMLDivElement>(null);
  const { show: showSearch } = useSearch();
  const [current, setCurrent] = useState<ReaderSelection | null>(null);
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    let timer = 0;
    const reveal = () => {
      const root = rootRef.current;
      const selection = root ? readSelection(root) : null;
      if (!selection) {
        setOpen(false);
        return;
      }
      setCurrent(selection);
      setDocked(matchMedia(dockedQuery).matches);
      setOpen(true);
    };
    const schedule = (delay: number) => {
      clearTimeout(timer);
      timer = window.setTimeout(reveal, delay);
    };
    const onPointerUp = (event: PointerEvent) => {
      if (event.target instanceof Node && bar.current?.contains(event.target)) return;
      schedule(event.pointerType === "touch" ? touchDelayMs : mouseDelayMs);
    };
    const onSelectionChange = () => {
      if (getSelection()?.isCollapsed) {
        clearTimeout(timer);
        setOpen(false);
      } else if (matchMedia("(pointer: coarse)").matches) schedule(touchDelayMs);
    };
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.startsWith("Arrow")) schedule(keyDelayMs);
    };
    const onScroll = () => {
      if (!matchMedia(dockedQuery).matches) setOpen(false);
    };
    const onContextMenu = (event: MouseEvent) => {
      const root = rootRef.current;
      const unit =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("[data-verse-text], [data-second-text]")
          : null;
      if (!root || !unit || !root.contains(unit) || matchMedia("(pointer: coarse)").matches) return;
      event.preventDefault();
      const selection = getSelection();
      if (!selection) return;
      const inside = !selection.isCollapsed && selection.containsNode(unit, true);
      if (!inside) {
        const range = document.createRange();
        range.selectNodeContents(unit);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      schedule(mouseDelayMs);
    };
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("selectionchange", onSelectionChange);
    document.addEventListener("keyup", onKeyUp);
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("selectionchange", onSelectionChange);
      document.removeEventListener("keyup", onKeyUp);
      removeEventListener("scroll", onScroll);
    };
  }, [rootRef]);

  useLayoutEffect(() => {
    const element = bar.current;
    if (!element || !open || !current || docked) return;
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const column = rootRef.current?.getBoundingClientRect();
    const least = Math.max(gap, column?.left ?? gap);
    const x = Math.min(Math.max(current.rect.left, least), Math.max(least, innerWidth - width - gap));
    const below = current.rect.bottom + gap;
    const y = below + height > innerHeight - gap ? current.rect.top - height - gap : below;
    element.style.setProperty("--x", `${Math.round(x)}px`);
    element.style.setProperty("--y", `${Math.round(y)}px`);
  }, [current, open, docked, rootRef]);

  const finish = () => {
    getSelection()?.removeAllRanges();
    setOpen(false);
  };

  const highlight = (color: HighlightColor) => {
    if (!current) return;
    onHighlight(current.ranges, color);
    finish();
  };

  const unmark = () => {
    if (!current) return;
    onRemove(current.ranges);
    finish();
  };

  const note = () => {
    if (!current) return;
    onNote(current);
    finish();
  };

  const ask = () => {
    if (!current || !onAsk) return;
    onAsk(current);
    finish();
  };

  const find = () => {
    if (!current) return;
    const query = current.text.slice(0, searchLength);
    finish();
    showSearch(undefined, query);
  };

  useEffect(() => {
    if (!open || !current) return;
    const marked = isMarked(current.ranges);
    const release = registerEscape(escapePriority.window, () => setOpen(false));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.target instanceof HTMLElement && event.target.closest("input, textarea, [contenteditable]")) return;
      if (event.key === "s" || event.key === "S") {
        event.preventDefault();
        if (marked) unmark();
        else highlight(lastColor());
      } else if (event.key === "n" || event.key === "N") {
        event.preventDefault();
        note();
      } else if ((event.key === "c" || event.key === "C") && !event.shiftKey) {
        event.preventDefault();
        bar.current?.querySelector<HTMLButtonElement>("[data-cite-button] button")?.click();
      }
    };
    addEventListener("keydown", onKeyDown);
    return () => {
      release();
      removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div
      ref={bar}
      role="toolbar"
      aria-label={text.label}
      data-open={open}
      data-docked={docked || undefined}
      onMouseDown={(event) => event.preventDefault()}
      className="group/toolbar toolbar-motion invisible pointer-events-none fixed top-(--y) left-(--x) z-86 flex translate-y-1 items-center gap-0.5 rounded-8 border border-rule-2 bg-bg texture-layer px-1.5 py-0.75 opacity-0 shadow-floating data-[open=true]:pointer-events-auto data-[open=true]:visible data-[open=true]:translate-y-0 data-[open=true]:opacity-100 data-docked:inset-x-0 data-docked:top-auto data-docked:bottom-0 data-docked:left-0 data-docked:translate-y-full data-docked:flex-wrap data-docked:justify-center data-docked:rounded-none data-docked:border-x-0 data-docked:border-b-0 data-docked:safe-bottom data-docked:data-[open=true]:translate-y-0"
    >
      <HighlightColors
        text={text.highlight}
        current={current ? chosenIn(current.ranges) : null}
        canRemove={current ? hasHighlightIn(current.ranges) : false}
        onPick={highlight}
        onRemove={unmark}
      />
      <button type="button" onClick={note} aria-keyshortcuts="N" className={plainButtonClassName}>
        {text.note}
      </button>
      {text.ask && onAsk ? (
        <button type="button" onClick={ask} className={askButtonClassName}>
          {text.ask}
        </button>
      ) : null}
      <span aria-hidden="true" className="mx-1 h-5 w-px bg-rule group-data-docked/toolbar:hidden" />
      <span data-cite-button="" className="inline-flex">
        <CopyButton compact label={text.cite} done={text.citeCopied} text={() => (current ? citation(current) : "")} />
      </span>
      <button type="button" onClick={find} className={plainButtonClassName}>
        {text.find}
      </button>
    </div>
  );
}
