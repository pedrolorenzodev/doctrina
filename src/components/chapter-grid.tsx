"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getReadChapters, noReadChapters, subscribeReadChapters } from "@/lib/read-chapter-store";
import { readChapterKey } from "@/lib/read-chapters";

type ChapterGridProps = {
  bookId: string;
  bookName: string;
  base: string;
  count: number;
  currentChapter: number | null;
  labelTemplate: string;
};

const cellClassName =
  "group/cell relative grid h-8.5 w-full place-items-center text-sidebar text-ink-3 no-underline tabular-nums outline-none after:absolute after:bottom-1.5 after:left-1/2 after:-ml-0.5 after:hidden after:size-1 after:rounded-full after:bg-accent-mid after-empty data-read:after:block data-read:read-dot-in max-lg:h-14 max-lg:text-ui-base max-lg:after:bottom-3 pointer-coarse:h-11 max-lg:pointer-coarse:h-14";
const circleClassName =
  "grid size-7 place-items-center rounded-full transition-all duration-150 ease-standard group-hover/cell:bg-hover group-hover/cell:text-ink group-active/cell:bg-accent-weak group-focus-visible/cell:outline-2 group-focus-visible/cell:outline-offset-1 group-focus-visible/cell:outline-accent group-data-current/cell:font-semibold group-data-current/cell:text-accent group-data-current/cell:shadow-current-ring max-lg:size-12";

export function ChapterGrid({ bookId, bookName, base, count, currentChapter, labelTemplate }: ChapterGridProps) {
  const read = useSyncExternalStore(subscribeReadChapters, getReadChapters, () => noReadChapters);
  return Array.from({ length: count }, (_, index) => {
    const chapter = index + 1;
    const isCurrent = chapter === currentChapter;
    return (
      <li key={chapter} className="grid">
        <Link
          href={`${base}/${chapter}`}
          prefetch={false}
          aria-label={labelTemplate.replace("{book}", bookName).replace("{chapter}", String(chapter))}
          aria-current={isCurrent ? "page" : undefined}
          data-chapter={chapter}
          data-current={isCurrent || undefined}
          data-read={read.has(readChapterKey(bookId, chapter)) || undefined}
          className={cellClassName}
        >
          <span className={circleClassName}>{chapter}</span>
        </Link>
      </li>
    );
  });
}
