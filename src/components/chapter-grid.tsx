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
  roomy?: boolean;
};

const cellClassName =
  "group/cell relative grid h-8.5 w-full place-items-center text-sidebar text-ink-3 no-underline tabular-nums outline-none after:absolute after:bottom-1.5 after:left-1/2 after:-ml-0.5 after:hidden after:size-1 after:rounded-full after:bg-accent-mid after-empty data-read:after:block data-read:read-dot-in tree-compact:h-14 tree-compact:text-ui-base tree-compact:after:bottom-3 pointer-coarse:h-11 tree-compact:pointer-coarse:h-14";
const circleClassName =
  "grid size-7 place-items-center rounded-full transition-all duration-150 ease-standard group-hover/cell:bg-hover group-hover/cell:text-ink group-active/cell:bg-accent-weak group-focus-visible/cell:outline-2 group-focus-visible/cell:outline-offset-1 group-focus-visible/cell:outline-accent group-data-current/cell:font-semibold group-data-current/cell:text-accent group-data-current/cell:shadow-current-ring tree-compact:size-12";

const roomyCellClassName = "lg:h-9.5 lg:text-ui-sm";
const roomyCircleClassName = "lg:size-8";

export function ChapterGrid({
  bookId,
  bookName,
  base,
  count,
  currentChapter,
  labelTemplate,
  roomy = false,
}: ChapterGridProps) {
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
          className={roomy ? `${cellClassName} ${roomyCellClassName}` : cellClassName}
        >
          <span className={roomy ? `${circleClassName} ${roomyCircleClassName}` : circleClassName}>{chapter}</span>
        </Link>
      </li>
    );
  });
}
