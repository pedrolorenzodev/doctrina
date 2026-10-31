"use client";

import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { closeAskDrawer, closedAskDrawer, getAskDrawer, openAskDrawer, subscribeAskDrawer } from "@/lib/ask-drawer";
import { escapePriority, registerEscape } from "@/lib/escape-stack";
import { prefersReducedMotion } from "@/lib/branch-motion";
import { focusRingClassName, motionClassName, motionStyle } from "@/features/reader-ai/motion";
import { askTokens } from "@/features/reader-ai/tokens";
import {
  applyDrawerRoom,
  drawerMotion,
  pinColumns,
  sideQuery,
  watchTreeReopen,
  type DrawerLayout,
} from "@/features/reader-ai/drawer-room";

type AskDrawerProps = {
  title: string;
  closeLabel: string;
  bar: ReactNode;
  children: (opening: number) => ReactNode;
};

const subscribeLayout = (listener: () => void) => {
  const query = matchMedia(sideQuery);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
};

const motionOf = (layout: DrawerLayout, open: boolean) => {
  const hide = open ? 0 : drawerMotion.moveMs;
  return layout === "side"
    ? motionStyle(
        ["opacity", drawerMotion.fadeMs, "standard"],
        ["translate", drawerMotion.moveMs, "move"],
        ["visibility", 0, "linear", hide],
      )
    : motionStyle(["translate", drawerMotion.moveMs, "move"], ["visibility", 0, "linear", hide]);
};

const isTyping = (target: EventTarget | null) =>
  target instanceof HTMLElement && Boolean(target.closest("input, textarea, select, [contenteditable]"));

export function AskDrawer({ title, closeLabel, bar, children }: AskDrawerProps) {
  const drawer = useRef<HTMLElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const { open, focus, serial } = useSyncExternalStore(subscribeAskDrawer, getAskDrawer, () => closedAskDrawer);
  const layout: DrawerLayout = useSyncExternalStore(
    subscribeLayout,
    () => (matchMedia(sideQuery).matches ? "side" : "sheet"),
    () => "side",
  );
  const [opening, setOpening] = useState(0);
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) setOpening(opening + 1);
  }
  const shown = useRef<{ open: boolean; layout: DrawerLayout }>({ open: false, layout });
  const [laidOut, setLaidOut] = useState(layout);
  const switching = laidOut !== layout;

  useEffect(() => {
    if (!switching) return;
    const frame = requestAnimationFrame(() => setLaidOut(layout));
    return () => cancelAnimationFrame(frame);
  }, [switching, layout]);

  useLayoutEffect(() => {
    const before = shown.current;
    const animate = !prefersReducedMotion() && before.layout === layout;
    if (before.open !== open || before.layout !== layout) applyDrawerRoom(open ? layout : null, animate);
    shown.current = { open, layout };
  }, [open, layout]);

  useEffect(() => () => applyDrawerRoom(null, false), []);

  useEffect(() => {
    if (body.current) body.current.style.overflowAnchor = "none";
  }, []);

  useEffect(() => {
    let wasOpen = getAskDrawer().open;
    return subscribeAskDrawer(() => {
      const nowOpen = getAskDrawer().open;
      if (nowOpen && !wasOpen) pinColumns();
      wasOpen = nowOpen;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const release = registerEscape(escapePriority.panel, closeAskDrawer);
    const stopWatching = watchTreeReopen(closeAskDrawer);
    return () => {
      release();
      stopWatching();
    };
  }, [open]);

  useEffect(() => {
    if (!open || !focus) return;
    const timer = window.setTimeout(
      () => drawer.current?.querySelector("textarea")?.focus({ preventScroll: true }),
      prefersReducedMotion() ? 0 : drawerMotion.moveMs,
    );
    return () => clearTimeout(timer);
  }, [open, focus, serial]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
      // guard: an open side panel with its own «/» field keeps the key
      if (document.querySelector('[data-side-panel][data-open="true"] [aria-keyshortcuts="/"]')) return;
      event.preventDefault();
      openAskDrawer({ pill: getAskDrawer().pill, focus: true });
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const drawerStyle: React.CSSProperties = { ...askTokens, ...motionOf(layout, open) };

  return (
    <aside
      ref={drawer}
      role="dialog"
      aria-modal="false"
      aria-labelledby="ask-drawer-title"
      data-ask-drawer=""
      data-open={open || undefined}
      data-layout={layout}
      style={drawerStyle}
      className={`group/drawer texture-layer invisible fixed font-ui text-ui-base leading-normal text-ink top-top bottom-0 left-0 z-35 flex w-panel -translate-x-6 flex-col border-r border-rule bg-bg opacity-0 data-open:visible data-open:translate-x-0 data-open:opacity-100 data-[layout=sheet]:top-auto data-[layout=sheet]:right-0 data-[layout=sheet]:h-(--ask-sheet) data-[layout=sheet]:w-auto data-[layout=sheet]:translate-x-0 data-[layout=sheet]:translate-y-full data-[layout=sheet]:rounded-t-14 data-[layout=sheet]:border-t data-[layout=sheet]:border-r-0 data-[layout=sheet]:border-rule-2 data-[layout=sheet]:opacity-100 data-[layout=sheet]:shadow-(--ask-sheet-shadow) data-[layout=sheet]:data-open:translate-y-0 safe-bottom ${switching ? "" : `${motionClassName} motion-reduce:transition-none`}`}
    >
      <span
        aria-hidden="true"
        className="absolute top-1.75 left-1/2 z-3 -ml-3.5 hidden h-1 w-7 cursor-grab rounded-2 bg-rule-2 group-data-[layout=sheet]/drawer:block"
      />
      <div className="flex h-reader-strip flex-none items-center justify-between gap-2.5 border-b border-rule pr-2 pl-5.5 group-data-[layout=sheet]/drawer:h-14.25 group-data-[layout=sheet]/drawer:pt-2.5">
        <span id="ask-drawer-title" className="truncate font-head text-panel-reference font-normal text-ink opsz-24">
          {title}
        </span>
        <button
          type="button"
          data-bare-focus=""
          aria-label={closeLabel}
          onClick={closeAskDrawer}
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
      {bar}
      <div
        ref={body}
        data-lenis-prevent
        data-ask-body=""
        className="relative flex-1 overflow-y-auto overscroll-contain px-5.5 pt-4.5 pb-10 scrollbar-rule"
      >
        {children(opening)}
      </div>
    </aside>
  );
}
