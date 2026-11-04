"use client";

import { useCallback, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { showPair } from "@/components/simplifier/pair-highlight";
import { closePanelBox, crossfade, glideHeight, openPanelBox } from "@/components/simplifier/panel-motion";
import { SimplifiedPanel } from "@/components/simplifier/simplified-panel";
import { hasStreamed, levelOf, markStreamed, rememberLevel } from "@/components/simplifier/simplifier-memory";
import { getSimplifierText } from "@/components/simplifier/simplifier-text";
import type { SimplifiedEntry, SimplifierLevel } from "@/lib/simplifier-types";
import { useStream } from "@/components/simplifier/use-stream";
import { Tooltip } from "@/components/ui/tooltip";
import { prefersReducedMotion } from "@/lib/branch-motion";
import type { Locale } from "@/lib/locale";

type Tone = "prose" | "definition" | "reader";

type SimplifiedParagraphProps = {
  id: string;
  locale: Locale;
  entry: SimplifiedEntry | undefined;
  tone: Tone;
  className?: string;
  children: ReactNode;
};

const toneClassName: Record<Tone, string> = {
  prose: "text-prose-mobile sm:text-prose",
  definition: "text-defn-mobile sm:text-defn",
  reader: "text-reader",
};

const wordCount = (sentences: string[]) => sentences.reduce((total, sentence) => total + sentence.split(" ").length, 0);

export function SimplifiedParagraph(props: SimplifiedParagraphProps) {
  const { entry, children } = props;
  if (!entry) return <>{children}</>;
  return (
    <SimplifiedView {...props} entry={entry}>
      {children}
    </SimplifiedView>
  );
}

function SimplifiedView({
  id,
  locale,
  entry,
  tone,
  className = "",
  children,
}: SimplifiedParagraphProps & { entry: SimplifiedEntry }) {
  const text = getSimplifierText(locale);
  const panelId = useId();
  const [shown, setShown] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  const [level, setLevel] = useState<SimplifierLevel>("clear");
  const [streaming, setStreaming] = useState(false);
  const [stoppedAt, setStoppedAt] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLButtonElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLParagraphElement>(null);
  const fadeOnOpen = useRef(false);
  const glide = useRef<{ from: number; ghost: HTMLElement | null } | null>(null);
  const closing = useRef(false);

  const finish = useCallback(() => setStreaming(false), []);
  const stream = useStream(streaming, wordCount(entry[level]) + 1, finish);

  useLayoutEffect(() => {
    if (openCount === 0 || !box.current || !inner.current) return;
    openPanelBox(box.current, inner.current, fadeOnOpen.current);
  }, [openCount]);

  useLayoutEffect(() => {
    const pending = glide.current;
    glide.current = null;
    if (!pending || !wrap.current) return;
    glideHeight(wrap.current, pending.from);
    if (layer.current && pending.ghost) crossfade(layer.current, pending.ghost);
  }, [level, stoppedAt]);

  useLayoutEffect(() => {
    showPair(root.current, hovered === null ? null : (entry.original[hovered] ?? null));
    return () => showPair(null, null);
  }, [hovered, entry.original]);

  const open = () => {
    const first = !hasStreamed(id) && !prefersReducedMotion();
    markStreamed(id);
    closing.current = false;
    fadeOnOpen.current = !first;
    setLevel(levelOf(id));
    setStoppedAt(null);
    stream.reset();
    setStreaming(first);
    setShown(true);
    setMounted(true);
    setOpenCount((count) => count + 1);
  };

  const close = (returnFocus: boolean) => {
    setStreaming(false);
    setHovered(null);
    setShown(false);
    if (returnFocus) ring.current?.focus({ preventScroll: true });
    if (!box.current || !inner.current) return;
    closing.current = true;
    closePanelBox(box.current, inner.current).then(
      () => {
        if (closing.current) setMounted(false);
      },
      () => undefined,
    );
    if (prefersReducedMotion()) setMounted(false);
  };

  const chooseLevel = (next: SimplifierLevel) => {
    if (next === level) return;
    const current = layer.current;
    const ghost = current && wrap.current ? (current.cloneNode(true) as HTMLElement) : null;
    if (ghost && wrap.current) {
      ghost.removeAttribute("data-simplifier-text");
      ghost.classList.add("absolute", "inset-x-0", "top-0", "pointer-events-none");
      ghost.setAttribute("aria-hidden", "true");
      wrap.current.append(ghost);
    }
    glide.current = { from: wrap.current?.getBoundingClientRect().height ?? 0, ghost };
    rememberLevel(id, next);
    setHovered(null);
    setStreaming(false);
    setStoppedAt(null);
    setLevel(next);
  };

  const stop = () => {
    glide.current = { from: wrap.current?.getBoundingClientRect().height ?? 0, ghost: null };
    setStreaming(false);
    setStoppedAt(stream.tick);
  };

  return (
    <div
      data-simplifier=""
      className={className}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !shown) return;
        event.preventDefault();
        event.stopPropagation();
        close(true);
      }}
    >
      <div ref={root} className={`group/simplifier relative ${toneClassName[tone]}`}>
        {children}
        <span className="absolute top-simplifier-ring -right-10 z-10 max-md:-top-8.5 max-md:-right-3.5">
          <Tooltip label={text.mark} align="end">
            <button
              ref={ring}
              type="button"
              data-simplifier-mark=""
              aria-label={text.mark}
              aria-expanded={shown}
              aria-controls={mounted ? panelId : undefined}
              onClick={() => (shown ? close(false) : open())}
              className="group/ring grid size-7 cursor-pointer place-items-center rounded-full opacity-0 transition-opacity duration-150 ease-standard group-hover/simplifier:opacity-100 focus-visible:opacity-100 aria-expanded:opacity-100 pointer-coarse:opacity-100 max-md:size-11 max-md:opacity-100"
            >
              <i className="block size-3.5 rounded-full simplifier-ring-line border-ink-3 transition-colors duration-150 ease-standard group-hover/ring:border-ink group-aria-expanded/ring:border-ink group-aria-expanded/ring:bg-ink" />
            </button>
          </Tooltip>
        </span>
      </div>
      {mounted ? (
        <SimplifiedPanel
          id={panelId}
          text={text}
          entry={entry}
          level={level}
          streaming={streaming}
          tick={stream.tick}
          stoppedAt={stoppedAt}
          hovered={hovered}
          boxRef={box}
          innerRef={inner}
          wrapRef={wrap}
          layerRef={layer}
          onLevel={chooseLevel}
          onStop={stop}
          onHide={() => close(true)}
          onHover={setHovered}
        />
      ) : null}
    </div>
  );
}
