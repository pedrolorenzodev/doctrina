"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { PageLink } from "@/components/ui/page-link";
import { MoreButton } from "@/components/ui/more-button";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import { flipList, revealList } from "@/lib/list-motion";

type VideoItem = {
  id: string;
  title: string;
  meta: string;
  lang: string;
};

type VideoListProps = {
  videos: VideoItem[];
  step: number;
  filterLabel: string;
  filters: { id: string; label: string }[];
  moreLabel: string;
  seenLabel: string;
};

const everyLanguage = "all";

export function VideoList({ videos, step, filterLabel, filters, moreLabel, seenLabel }: VideoListProps) {
  const [language, setLanguage] = useState(everyLanguage);
  const [count, setCount] = useState(step);
  const list = useRef<HTMLUListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const focusFrom = useRef<number | null>(null);

  useEffect(() => (list.current ? revealList(list.current) : undefined), []);

  useEffect(() => {
    if (focusFrom.current === null) return;
    const links = list.current?.querySelectorAll("a");
    links?.[focusFrom.current]?.focus({ preventScroll: true });
    focusFrom.current = null;
  }, [count]);

  const pool = videos.filter((video) => language === everyLanguage || video.lang === language);
  const shown = pool.slice(0, count);
  const left = pool.length - shown.length;

  function change(mutate: () => void) {
    if (list.current && ghosts.current) flipList(list.current, ghosts.current, () => flushSync(mutate));
    else mutate();
  }

  return (
    <>
      <SegmentedFilter
        label={filterLabel}
        value={language}
        onChange={(id) =>
          change(() => {
            setLanguage(id);
            setCount(step);
          })
        }
        options={filters.map((filter) => ({
          ...filter,
          count: videos.filter((video) => filter.id === everyLanguage || video.lang === filter.id).length,
        }))}
      />
      <div className="relative">
        <ul ref={list} className="list-none border-b border-rule">
          {shown.map((video) => (
            <li key={video.id} data-id={video.id} className="border-t border-rule py-3.75">
              <p className="font-body text-video-mobile font-medium opsz-18 sm:text-video">
                <PageLink href={`https://www.youtube.com/watch?v=${video.id}`} external lang={video.lang}>
                  {video.title}
                </PageLink>
              </p>
              <p className="mt-1 text-btn text-ink-3">{video.meta}</p>
            </li>
          ))}
        </ul>
        <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
      {left > 0 ? (
        <div className="mt-3 flex items-center gap-3.5">
          <MoreButton
            expanded={false}
            onClick={() => {
              focusFrom.current = shown.length;
              change(() => setCount(count + step));
            }}
          >
            {moreLabel.replace("{n}", String(Math.min(step, left)))}
          </MoreButton>
          <span className="text-ui-xs text-ink-3 tabular-nums">
            {seenLabel.replace("{shown}", String(shown.length)).replace("{total}", String(pool.length))}
          </span>
        </div>
      ) : null}
    </>
  );
}
