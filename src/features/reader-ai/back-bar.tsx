"use client";

import { useEffect, useState } from "react";
import { motionClassName, motionStyle } from "@/features/reader-ai/motion";
import { askTokens } from "@/features/reader-ai/tokens";

type BackBarProps = {
  label: string;
  from: string | null;
  onBack: () => void;
};

type Box = { left: number; top: number; width: number };

const stripMotionMs = 240;

function measure(): Box | null {
  const strip = document.querySelector<HTMLElement>("[data-reader-strip]");
  const bar = document.querySelector("header");
  if (!strip) return null;
  const rect = strip.getBoundingClientRect();
  return { left: rect.left, width: rect.width, top: Math.max(bar?.getBoundingClientRect().bottom ?? 0, rect.bottom) };
}

export function BackBar({ label, from, onBack }: BackBarProps) {
  const [box, setBox] = useState<Box | null>(null);
  const [last, setLast] = useState(from);
  if (from && from !== last) setLast(from);
  const open = from !== null;

  useEffect(() => {
    if (!open) return;
    let frame = 0;
    let settle = 0;
    const follow = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setBox(measure()));
      clearTimeout(settle);
      settle = window.setTimeout(() => setBox(measure()), stripMotionMs);
    };
    follow();
    addEventListener("scroll", follow, { passive: true });
    addEventListener("resize", follow);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
      removeEventListener("scroll", follow);
      removeEventListener("resize", follow);
    };
  }, [open]);

  return (
    <div
      data-ask-back=""
      data-open={open && box ? true : undefined}
      style={
        {
          ...askTokens,
          "--x": `${box?.left ?? 0}px`,
          "--y": `${box?.top ?? 0}px`,
          "--w": `${box?.width ?? 0}px`,
          ...motionStyle(
            ["opacity", 200, "standard"],
            ["translate", 200, "standard"],
            ["visibility", 0, "linear", open ? 0 : 200],
          ),
        } as React.CSSProperties
      }
      className={`texture-layer pointer-events-none invisible fixed top-(--y) left-(--x) z-30 flex h-10 w-(--w) -translate-y-1.5 items-center gap-2.5 border-b border-rule bg-bg px-4.5 font-ui opacity-0 data-open:pointer-events-auto data-open:visible data-open:translate-y-0 data-open:opacity-100 ${motionClassName}`}
    >
      <button
        type="button"
        onClick={onBack}
        className="-ml-2 inline-flex cursor-pointer items-center gap-2 rounded-6 px-2 py-1.5 text-ui-sm leading-(--ask-leading-ui) font-medium text-ink hover:bg-hover"
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
          <path d="M10 3.5L5.5 8l4.5 4.5" />
        </svg>
        {label}
      </button>
      <span className="truncate text-btn leading-(--ask-leading-ui) whitespace-nowrap text-ink-3">{last}</span>
    </div>
  );
}
