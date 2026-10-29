"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { bibleChapterHref } from "@/content/bible-routes";
import type { ReaderChapter } from "@/content/get-reader-chapter";
import { PageHeader } from "@/components/page-header";
import { registerChapterScroller, setActiveChapter } from "@/lib/active-chapter";
import { describePlaceWith } from "@/lib/last-place";
import { ReaderBody } from "@/features/reader/reader-body";
import { foldBox } from "@/lib/fold-box";
import { setYourNotesOpen } from "@/features/reader/your-notes-store";
import { useKeepTopVerse } from "@/features/reader/use-keep-top-verse";
import { loadChapter, seedChapter } from "@/features/reader/chapter-data";
import { isSmoothScrolling, scrollOffset, scrollToY, shiftScroll } from "@/lib/scroll";

type Panel = ComponentProps<typeof ReaderBody>["panel"];

type ReaderStreamProps = {
  initial: ReaderChapter;
  firstCrumbs: ReactNode;
  firstHeader: ReactNode;
  chapterTitle: string;
  deuteroNotice: string;
  numberingNote: string;
  panel: Panel;
};

const windowSize = 5;
const reachScreens = 2;
const prefetchAhead = 2;
const activeLine = 0.4;
const topZonePx = 2;
const unitsSelector = "[data-chapter-text] > [id]";

const keyOf = (book: string, chapter: number) => `${book}/${chapter}`;
const idPrefixOf = (book: string, chapter: number, first: boolean) => (first ? "" : `${book}-${chapter}-`);

export function ReaderStream({
  initial,
  firstCrumbs,
  firstHeader,
  chapterTitle,
  deuteroNotice,
  numberingNote,
  panel,
}: ReaderStreamProps) {
  const [chapters, setChapters] = useState<ReaderChapter[]>([initial]);
  const [firstKey] = useState(() => keyOf(initial.book.id, initial.chapter));
  const [activeKey, setActiveKey] = useState(firstKey);
  const stream = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const tail = useRef<HTMLDivElement>(null);
  const crumbsBox = useRef<HTMLDivElement>(null);
  const boundaryBox = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const latest = useRef(chapters);
  const holding = useRef<{ key: string; docTop: number } | null>(null);
  const mounted = useRef(new Set<string>());
  useEffect(() => {
    latest.current = chapters;
  });
  const previousMounted = chapters[0] !== undefined && keyOf(chapters[0].book.id, chapters[0].chapter) !== firstKey;
  const [foldStarted, setFoldStarted] = useState(false);
  const folding = previousMounted && foldStarted;
  const foldRan = useRef(false);
  useEffect(() => {
    const box = crumbsBox.current;
    if (!previousMounted || foldStarted || !box) return;
    const watcher = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) setFoldStarted(true);
    });
    watcher.observe(box);
    return () => watcher.disconnect();
  }, [previousMounted, foldStarted]);
  useLayoutEffect(() => {
    if (!folding || foldRan.current) return;
    foldRan.current = true;
    if (boundaryBox.current) void foldBox(boundaryBox.current, true);
    if (crumbsBox.current) void foldBox(crumbsBox.current, false);
  }, [folding]);
  useLayoutEffect(() => {
    const box = crumbsBox.current;
    if (box && box.getAnimations().length === 0) box.hidden = folding;
  });

  useLayoutEffect(() => {
    mounted.current = new Set(chapters.map((entry) => keyOf(entry.book.id, entry.chapter)));
  }, [chapters]);
  useLayoutEffect(() => {
    const held = holding.current;
    if (!held) return;
    holding.current = null;
    const section = stream.current?.querySelector<HTMLElement>(`[data-stream-chapter="${held.key}"]`);
    if (!section) return;
    const shift = section.getBoundingClientRect().top + scrollY - held.docTop;
    if (Math.abs(shift) >= 0.5) shiftScroll(shift);
  }, [chapters]);
  useKeepTopVerse(stream, unitsSelector);

  useEffect(
    () =>
      describePlaceWith(() => {
        const line = scrollOffset();
        const units = stream.current?.querySelectorAll<HTMLElement>(unitsSelector) ?? [];
        const unit = [...units].find((candidate) => candidate.getBoundingClientRect().bottom > line);
        const edition = unit?.closest<HTMLElement>("[data-edition-name]")?.dataset.editionName;
        const verse = Number(unit?.id.match(/v-(\d+)$/)?.[1]);
        return edition && verse ? { edition, verse } : null;
      }),
    [],
  );

  const titleOf = useCallback(
    (data: ReaderChapter) =>
      chapterTitle.replace("{book}", data.book.names[panel.locale]).replace("{chapter}", String(data.chapter)),
    [chapterTitle, panel.locale],
  );

  useEffect(() => {
    seedChapter(panel.locale, initial);
    return () => {
      setYourNotesOpen(false);
      setActiveChapter(null);
    };
  }, [initial, panel.locale]);

  const extend = useCallback(
    async (direction: "next" | "previous") => {
      if (busy.current) return;
      const list = latest.current;
      const edge = direction === "next" ? list[list.length - 1] : list[0];
      const target = edge?.[direction];
      if (!edge || !target) return;
      busy.current = true;
      const data = await loadChapter(panel.locale, target.book, target.chapter);
      busy.current = false;
      if (!data) return;
      const loadedKey = keyOf(data.book.id, data.chapter);
      if (mounted.current.has(loadedKey)) return;
      mounted.current.add(loadedKey);
      if (direction === "previous") {
        const line = scrollOffset();
        const sections = [...(stream.current?.querySelectorAll<HTMLElement>("[data-stream-chapter]") ?? [])];
        const section = sections.find((candidate) => candidate.getBoundingClientRect().bottom > line) ?? sections[0];
        if (section?.dataset.streamChapter) {
          holding.current = {
            key: section.dataset.streamChapter,
            docTop: section.getBoundingClientRect().top + scrollY,
          };
        }
      }
      setChapters((current) => {
        const present = current.some((entry) => entry.book.id === data.book.id && entry.chapter === data.chapter);
        if (present) return current;
        return direction === "next" ? [...current, data] : [data, ...current];
      });
      let ahead: ReaderChapter | null = data;
      for (let step = 0; step < prefetchAhead && ahead?.[direction]; step += 1) {
        const nextRef: { book: string; chapter: number } = ahead[direction]!;
        ahead = await loadChapter(panel.locale, nextRef.book, nextRef.chapter);
      }
    },
    [panel.locale],
  );

  useEffect(() => {
    const toSection = (target: { book: string; chapter: number }) => {
      const section = stream.current?.querySelector<HTMLElement>(
        `[data-stream-chapter="${keyOf(target.book, target.chapter)}"]`,
      );
      if (!section) return false;
      scrollToY(section.getBoundingClientRect().top + scrollY - scrollOffset());
      return true;
    };
    registerChapterScroller((target) => {
      if (toSection(target)) return true;
      const list = latest.current;
      const sides = [
        ["previous", list[0]?.previous],
        ["next", list[list.length - 1]?.next],
      ] as const;
      const side = sides.find(([, edge]) => edge?.book === target.book && edge.chapter === target.chapter);
      if (!side) return false;
      void extend(side[0]).then(() => requestAnimationFrame(() => toSection(target)));
      return true;
    });
    return () => registerChapterScroller(null);
  }, [extend]);

  useEffect(() => {
    for (const side of ["previous", "next"] as const) {
      const target = initial[side];
      if (target) void loadChapter(panel.locale, target.book, target.chapter);
    }
  }, [initial, panel.locale]);

  useEffect(() => {
    const reachUp = () => {
      if (scrollY <= topZonePx) void extend("previous");
    };
    let touchY = 0;
    const onWheel = (event: WheelEvent) => {
      if (event.deltaY < 0) reachUp();
    };
    const onTouchStart = (event: TouchEvent) => {
      touchY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (event: TouchEvent) => {
      if ((event.touches[0]?.clientY ?? 0) > touchY) reachUp();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" || event.key === "PageUp") reachUp();
    };
    addEventListener("wheel", onWheel, { passive: true });
    addEventListener("touchstart", onTouchStart, { passive: true });
    addEventListener("touchmove", onTouchMove, { passive: true });
    addEventListener("keydown", onKeyDown);
    return () => {
      removeEventListener("wheel", onWheel);
      removeEventListener("touchstart", onTouchStart);
      removeEventListener("touchmove", onTouchMove);
      removeEventListener("keydown", onKeyDown);
    };
  }, [extend]);

  useEffect(() => {
    if (chapters.length <= windowSize) return;
    const sections = [...(stream.current?.querySelectorAll<HTMLElement>("[data-stream-chapter]") ?? [])];
    const activeIndex = sections.findIndex((section) => section.dataset.streamChapter === activeKey);
    if (activeIndex < 0) return;
    const keep = Math.floor(windowSize / 2);
    setChapters((current) => {
      if (current.length <= windowSize) return current;
      const start = Math.min(Math.max(0, activeIndex - keep), current.length - windowSize);
      return current.slice(start, start + windowSize);
    });
  }, [chapters.length, activeKey]);

  useEffect(() => {
    let frame = 0;
    const reach = () => {
      if (isSmoothScrolling()) return;
      const list = stream.current?.querySelectorAll<HTMLElement>("[data-stream-chapter]");
      const first = list?.[0];
      const last = list?.[list.length - 1];
      if (!first || !last) return;
      if (scrollY > topZonePx && first.getBoundingClientRect().top > -reachScreens * innerHeight) {
        void extend("previous");
      }
      if (last.getBoundingClientRect().bottom < (1 + reachScreens) * innerHeight) void extend("next");
    };
    const update = () => {
      frame = 0;
      reach();
      const sections = [...(stream.current?.querySelectorAll<HTMLElement>("[data-stream-chapter]") ?? [])];
      const reached = sections.filter((candidate) => candidate.getBoundingClientRect().top <= innerHeight * activeLine);
      const section = reached[reached.length - 1] ?? sections[0];
      if (section?.dataset.streamChapter) setActiveKey(section.dataset.streamChapter);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", onScroll);
    };
  }, [extend, chapters]);

  useEffect(() => {
    const data = chapters.find((entry) => keyOf(entry.book.id, entry.chapter) === activeKey);
    if (!data) return;
    const href = bibleChapterHref(panel.locale, data.book, data.chapter);
    setActiveChapter({ book: data.book.id, chapter: data.chapter, href, previous: data.previous, next: data.next });
    if (location.pathname !== href) history.replaceState(history.state, "", href);
    const base = document.title.split(" · ").slice(1);
    document.title = [titleOf(data), ...base].join(" · ");
  }, [activeKey, chapters, titleOf, panel.locale]);

  return (
    <div ref={stream}>
      <div ref={head} aria-hidden="true" />
      {chapters.map((data) => {
        const key = keyOf(data.book.id, data.chapter);
        const first = key === firstKey;
        return (
          <section
            key={key}
            data-stream-chapter={key}
            onPointerDownCapture={() => setActiveKey(key)}
            className={`not-has-data-[second=side]:mx-auto not-has-data-[second=side]:max-w-reader ${first ? "" : "mt-24 border-t border-rule pt-16"}`}
          >
            {first ? (
              <>
                {folding ? (
                  <div ref={boundaryBox} data-stream-fold="boundary" className="pt-24">
                    <div className="border-t border-rule pt-16" />
                  </div>
                ) : null}
                <div ref={crumbsBox} data-stream-fold="crumbs" className="pb-9">
                  {firstCrumbs}
                </div>
                {firstHeader}
              </>
            ) : (
              <PageHeader size="reader" title={titleOf(data)} />
            )}
            <ReaderBody
              views={data.views}
              defaultId={data.defaultId}
              bookId={data.book.id}
              deuteroNotice={data.book.section === "deuterocanon" ? deuteroNotice : null}
              numberingNote={numberingNote}
              idPrefix={idPrefixOf(data.book.id, data.chapter, first)}
              href={bibleChapterHref(panel.locale, data.book, data.chapter)}
              active={key === activeKey}
              panel={{ ...panel, bookName: data.book.names[panel.locale], chapter: data.chapter }}
            />
          </section>
        );
      })}
      <div ref={tail} aria-hidden="true" />
    </div>
  );
}
