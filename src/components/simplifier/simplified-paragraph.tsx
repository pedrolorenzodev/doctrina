"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { showPair } from "@/components/simplifier/pair-highlight";
import { closePanelBox, crossfade, glideHeight, openPanelBox } from "@/components/simplifier/panel-motion";
import { SimplifiedPanel, type PanelContent } from "@/components/simplifier/simplified-panel";
import { hasStreamed, levelOf, markStreamed, rememberLevel } from "@/components/simplifier/simplifier-memory";
import { registerOpener, unregisterOpener } from "@/components/simplifier/simplifier-openers";
import { getSimplifierText, simplifyMessage } from "@/components/simplifier/simplifier-text";
import { useSimplification, type SimplifyOutcome } from "@/components/simplifier/use-simplification";
import { useStream } from "@/components/simplifier/use-stream";
import { Tooltip } from "@/components/ui/tooltip";
import type { SimplifyAddress } from "@/lib/ai/contracts";
import { prefersReducedMotion } from "@/lib/branch-motion";
import type { Locale } from "@/lib/locale";
import { simplifierEnabled } from "@/lib/simplifier-enabled";
import type { SimplifierLevel } from "@/lib/simplifier-types";
import { takeSimplifierMark } from "@/lib/simplifier-mark-request";
import { useSimplifierVisibility } from "@/lib/simplifier-visibility";

type Tone = "prose" | "definition" | "reader";

type SimplifiedParagraphProps = {
  id: string;
  locale: Locale;
  address: SimplifyAddress | undefined;
  tone: Tone;
  className?: string;
  children: ReactNode;
};

const toneClassName: Record<Tone, string> = {
  prose: "text-prose-mobile sm:text-prose",
  definition: "text-defn-mobile sm:text-defn",
  reader: "text-reader",
};

const spinDelayMs = 200;
const spinMinMs = 400;

const wordCount = (sentences: string[]) => sentences.reduce((total, sentence) => total + sentence.split(" ").length, 0);

export function SimplifiedParagraph(props: SimplifiedParagraphProps) {
  const { address, children } = props;
  if (!address || !simplifierEnabled) return <>{children}</>;
  return (
    <SimplifiedView {...props} address={address}>
      {children}
    </SimplifiedView>
  );
}

function SimplifiedView({
  id,
  locale,
  address,
  tone,
  className = "",
  children,
}: SimplifiedParagraphProps & { address: SimplifyAddress }) {
  const text = getSimplifierText(locale);
  const panelId = useId();
  const simplification = useSimplification(address, locale);
  const visibility = useSimplifierVisibility();
  const [content, setContent] = useState<PanelContent | null>(null);
  const [shown, setShown] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  const [level, setLevel] = useState<SimplifierLevel>("clear");
  const [streaming, setStreaming] = useState(false);
  const [stoppedAt, setStoppedAt] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [holding, setHolding] = useState(false);
  const spunAt = useRef<number | null>(null);
  const spinTimer = useRef(0);
  const hold = useRef<{ cancel: () => void } | null>(null);
  const busy = simplification.pending || holding;
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
  const entry = content?.kind === "entry" ? content.entry : null;
  const stream = useStream(streaming, entry ? wordCount(entry[level]) + 1 : 0, finish);

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
    showPair(root.current, hovered === null || !entry ? null : (entry.original[hovered] ?? null));
    return () => showPair(null, null);
  }, [hovered, entry]);

  const reveal = (outcome: SimplifyOutcome) => {
    const found = outcome.kind === "entry";
    const first = found && !hasStreamed(id) && !prefersReducedMotion();
    if (found) markStreamed(id);
    const requested = takeSimplifierMark(id);
    setSelected(found ? requested : null);
    closing.current = false;
    fadeOnOpen.current = !first;
    setContent(
      found
        ? outcome
        : { kind: "message", text: simplifyMessage(outcome.code, locale), retry: outcome.retry, lang: locale },
    );
    setLevel(levelOf(id));
    setStoppedAt(null);
    stream.reset();
    setStreaming(first);
    setShown(true);
    setMounted(true);
    setOpenCount((count) => count + 1);
  };

  const open = async () => {
    const known = simplification.recall();
    if (known) {
      reveal(known);
      return;
    }
    spinTimer.current = window.setTimeout(() => {
      spunAt.current = performance.now();
      setSpinning(true);
    }, spinDelayMs);
    const outcome = await simplification.load();
    clearTimeout(spinTimer.current);
    let go = outcome !== null;
    const rest = spunAt.current === null ? 0 : spinMinMs - (performance.now() - spunAt.current);
    if (outcome && rest > 0) {
      setHolding(true);
      go = await new Promise<boolean>((resolve) => {
        const id = window.setTimeout(() => {
          hold.current = null;
          resolve(true);
        }, rest);
        hold.current = {
          cancel: () => {
            clearTimeout(id);
            hold.current = null;
            resolve(false);
          },
        };
      });
    }
    spunAt.current = null;
    setSpinning(false);
    setHolding(false);
    if (outcome && go) reveal(outcome);
  };

  const stopWaiting = () => {
    if (hold.current) hold.current.cancel();
    else simplification.cancel();
  };

  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  });
  const shownRef = useRef(shown);
  useEffect(() => {
    shownRef.current = shown;
  });
  useEffect(() => {
    registerOpener(id, () => {
      if (!shownRef.current) void openRef.current();
    });
    return () => unregisterOpener(id);
  }, [id]);

  useEffect(
    () => () => {
      clearTimeout(spinTimer.current);
      hold.current?.cancel();
    },
    [],
  );

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
    if (content?.kind !== "entry") {
      rememberLevel(id, next);
      setLevel(next);
      return;
    }
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

  const retry = () => {
    close(true);
    void open();
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
        if (event.key !== "Escape" || !(shown || busy)) return;
        event.preventDefault();
        event.stopPropagation();
        if (shown) close(true);
        else stopWaiting();
      }}
    >
      <div ref={root} className={`group/simplifier relative ${toneClassName[tone]}`}>
        {children}
        <span
          className={`absolute top-simplifier-ring -right-10 z-10 max-md:-top-8.5 max-md:-right-3.5 ${visibility === "hidden" && !shown && !busy ? "hidden" : ""}`}
        >
          <Tooltip label={busy ? text.pending : text.mark} align="end">
            <button
              ref={ring}
              type="button"
              data-simplifier-mark=""
              aria-label={text.mark}
              aria-expanded={shown}
              aria-controls={mounted ? panelId : undefined}
              aria-busy={busy}
              onPointerEnter={simplification.prefetch}
              onFocus={simplification.prefetch}
              onClick={() => {
                if (busy) stopWaiting();
                else if (shown) close(false);
                else void open();
              }}
              className="group/ring hit-44 grid size-7 cursor-pointer place-items-center rounded-full opacity-0 transition-opacity duration-150 ease-standard group-hover/simplifier:opacity-100 focus-visible:opacity-100 aria-expanded:opacity-100 aria-busy:opacity-100 pointer-coarse:opacity-100 max-md:size-11 max-md:opacity-100"
            >
              <i
                className={`block size-3.5 rounded-full simplifier-ring-line transition-colors duration-150 ease-standard group-hover/ring:border-ink group-aria-expanded/ring:border-ink group-aria-expanded/ring:bg-ink ${busy ? (spinning ? "border-dashed border-ink simplifier-ring-turn" : "border-ink") : "border-ink-3"}`}
              />
            </button>
          </Tooltip>
        </span>
        <span role="status" className="sr-only">
          {busy ? text.pending : content?.kind === "message" && shown ? content.text : ""}
        </span>
      </div>
      {mounted && content ? (
        <SimplifiedPanel
          id={panelId}
          text={text}
          content={content}
          level={level}
          streaming={streaming}
          tick={stream.tick}
          stoppedAt={stoppedAt}
          hovered={hovered}
          selection={selected}
          boxRef={box}
          innerRef={inner}
          wrapRef={wrap}
          layerRef={layer}
          onLevel={chooseLevel}
          onStop={stop}
          onHide={() => close(true)}
          onHover={setHovered}
          onRetry={retry}
        />
      ) : null}
    </div>
  );
}
