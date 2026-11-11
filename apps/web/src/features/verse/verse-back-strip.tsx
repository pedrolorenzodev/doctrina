"use client";

import { useRouter } from "next/navigation";
import { useRef, useSyncExternalStore } from "react";
import { useStuck } from "@/lib/use-stuck";
import {
  clearVerseBack,
  currentVerseBack,
  parseVerseBack,
  serverVerseBack,
  subscribeVerseBack,
} from "@/lib/verse-back";

type VerseBackStripProps = { text: { short: string; rest: string } };

export function VerseBackStrip({ text }: VerseBackStripProps) {
  const router = useRouter();
  const strip = useRef<HTMLDivElement>(null);
  const stuck = useStuck(strip);
  const raw = useSyncExternalStore(subscribeVerseBack, currentVerseBack, serverVerseBack);
  const back = parseVerseBack(raw);
  return (
    <div
      ref={strip}
      data-stuck={stuck ? "" : undefined}
      className="texture-layer sticky top-top z-31 hidden items-center gap-3 border-b border-transparent bg-bg -mr-4 -ml-4 px-4 py-1 transition-colors duration-150 ease-standard data-stuck:border-rule verse-back:flex sm:-mr-8 sm:-ml-8 sm:px-8 sm:py-1.5 md:-mr-26 md:-ml-12 md:pr-26 md:pl-12 lg:-mr-28 lg:-ml-16 lg:pr-28 lg:pl-16 *:relative *:z-1"
    >
      <button
        type="button"
        onClick={() => {
          if (!back) return;
          clearVerseBack();
          router.push(back.href);
        }}
        className="-ml-2.5 inline-flex min-h-10 flex-none cursor-pointer items-center gap-1.5 rounded-6 px-2.5 py-2 text-ui-sm font-medium text-ink transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:min-h-11"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M8.5 3 4.5 7l4 4" />
        </svg>
        {text.short} <span className="verse-narrow:sr-only">{text.rest}</span>
      </button>
      <span className="min-w-0 truncate text-btn text-ink-3">{back?.label ?? ""}</span>
    </div>
  );
}
