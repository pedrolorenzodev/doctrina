"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChapterGrid } from "@/components/chapter-grid";
import { HangingMenu } from "@/components/hanging-menu";

export type PickerBook = {
  id: string;
  name: string;
  title: string;
  section: "old" | "deuterocanon" | "new";
  base: string;
  chapters: number;
};

type BookPickerText = {
  label: string;
  books: string;
  chapters: string;
  oneChapter: string;
  chapterOf: string;
  sections: { old: string; deuterocanon: string; new: string };
};

type BookPickerProps = {
  text: BookPickerText;
  books: PickerBook[];
  currentBook: string;
  currentChapter: number;
  title: string;
};

const currentTopGap = 80;
const sectionOrder = ["old", "deuterocanon", "new"] as const;

const bookClassName =
  "block min-h-9 w-full cursor-pointer truncate rounded-6 px-2.5 py-2 text-left text-sidebar text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent aria-current:bg-accent-weak aria-current:font-medium aria-current:text-ink aria-current:shadow-current pointer-coarse:min-h-11";

export function BookPicker({ text, books, currentBook, currentChapter, title }: BookPickerProps) {
  const id = useId();
  const button = useRef<HTMLButtonElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [openBook, setOpenBook] = useState<string | null>(null);
  const picked = books.find((book) => book.id === openBook) ?? null;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const scroller = body.current?.parentElement;
    const current = body.current?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!scroller || !current) return;
    const above = current.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
    scroller.scrollTop += above - currentTopGap;
  }, [open, openBook]);

  const toggle = () => {
    if (open) {
      setOpen(false);
      return;
    }
    setOpenBook(null);
    setOpen(true);
  };

  return (
    <div className="inline-block">
      <button
        ref={button}
        type="button"
        aria-haspopup="dialog"
        data-book-picker=""
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        onClick={toggle}
        className="group/book inline-flex min-h-8 cursor-pointer items-center justify-center gap-1.5 rounded-7 px-3 py-1 text-btn leading-label font-medium text-ink transition-colors duration-150 ease-standard hover:bg-hover pointer-coarse:min-h-11"
      >
        <span className="sr-only">{text.label}</span>
        <span>{title}</span>
        <svg
          className="rotate-90 text-ink-3 transition-transform duration-200 ease-standard group-aria-expanded/book:-rotate-90"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M3.5 1.5 7 5l-3.5 3.5" />
        </svg>
      </button>
      <HangingMenu
        id={`${id}-menu`}
        role="dialog"
        aria-label={text.label}
        open={open}
        onClose={close}
        anchor={button}
        align="center"
        className="w-140 max-sm:right-2 max-sm:left-2 max-sm:w-auto"
      >
        <div ref={body}>
          {picked ? (
            <>
              <div
                data-menu-item=""
                className="flex min-h-11.5 items-center gap-2 border-b border-rule py-2 pr-2.5 pl-2"
              >
                <button
                  type="button"
                  onClick={() => setOpenBook(null)}
                  className="inline-flex min-h-8.5 cursor-pointer items-center gap-1 rounded-6 pr-2.5 pl-1.5 text-btn font-medium text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink pointer-coarse:min-h-11"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M10 3.5 5.5 8 10 12.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {text.books}
                </button>
                <span className="font-head text-panel-reference text-ink">{picked.name}</span>
                <span className="ml-auto text-ui-2xs text-ink-3 tabular-nums">
                  {picked.chapters === 1 ? text.oneChapter : text.chapters.replace("{count}", String(picked.chapters))}
                </span>
              </div>
              <ul className="grid grid-cols-7 gap-y-0.5 px-4.5 pt-5 pb-5 max-lg:grid-cols-5 max-lg:gap-y-1">
                <ChapterGrid
                  bookId={picked.id}
                  bookName={picked.title}
                  base={picked.base}
                  count={picked.chapters}
                  currentChapter={picked.id === currentBook ? currentChapter : null}
                  labelTemplate={text.chapterOf}
                  roomy
                />
              </ul>
            </>
          ) : (
            <div className="px-4 pt-3.5 pb-2">
              {sectionOrder.map((section) => (
                <div key={section} className="mb-3.5">
                  <p data-menu-item="" className="mb-1 ml-1 text-label font-medium text-ink-3">
                    {text.sections[section]}
                  </p>
                  <div className="grid grid-cols-3 gap-x-1.5 max-sm:grid-cols-2">
                    {books
                      .filter((book) => book.section === section)
                      .map((book) => (
                        <button
                          key={book.id}
                          type="button"
                          data-menu-item=""
                          aria-current={book.id === currentBook ? "true" : undefined}
                          onClick={() => setOpenBook(book.id)}
                          className={bookClassName}
                        >
                          {book.name}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </HangingMenu>
    </div>
  );
}
