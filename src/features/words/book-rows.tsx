"use client";

import type { BookRow, WordGroup } from "@/content/get-word-page";
import { useWordFilters } from "@/features/words/word-filters";

type BookRowsProps = {
  columns: { id: WordGroup; label: string }[][];
  books: BookRow[];
};

export function BookRows({ columns, books }: BookRowsProps) {
  const { book, setBook } = useWordFilters();
  const max = Math.max(1, ...books.map((entry) => entry.count));
  return (
    <div className="word-books-grid mt-6.5">
      {columns.map((groups, index) => (
        <ul key={index} className="m-0 list-none p-0">
          {groups.map((group, position) => (
            <li key={group.id}>
              <p
                className={`m-0 pb-1.5 text-label font-medium text-ink-3 ${position === 0 && index === 0 ? "pt-0" : index === 1 && position === 0 ? "pt-0 max-[720px]:pt-4" : "pt-4"}`}
              >
                {group.label}
              </p>
              {books
                .filter((entry) => entry.group === group.id)
                .map((entry) =>
                  entry.count > 0 ? (
                    <button
                      key={entry.id}
                      type="button"
                      aria-pressed={book === entry.id}
                      onClick={() => (book === entry.id ? setBook(null) : setBook(entry.id, true))}
                      className="group/book word-book-row min-h-9 w-full cursor-pointer border-0 border-t border-rule bg-transparent px-1.5 py-1 text-left text-sub text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:selected-lift aria-pressed:font-medium aria-pressed:text-ink pointer-coarse:min-h-11"
                    >
                      <span>{entry.name}</span>
                      <span
                        aria-hidden="true"
                        style={{ "--bar": `${Math.max(3, (entry.count / max) * 100)}%` } as React.CSSProperties}
                        className="h-1.5 w-(--bar) min-w-0.75 rounded-3 bg-ink-3 opacity-50 transition-all duration-150 ease-standard group-hover/book:opacity-80 group-aria-pressed/book:bg-ink group-aria-pressed/book:opacity-100"
                      />
                      <span className="text-right font-medium text-ink tabular-nums">{entry.count}</span>
                    </button>
                  ) : (
                    <div
                      key={entry.id}
                      className="word-book-row min-h-9 w-full border-t border-rule px-1.5 py-1 text-sub text-ink-3 pointer-coarse:min-h-11"
                    >
                      <span>{entry.name}</span>
                      <span />
                      <span className="text-right tabular-nums">{entry.count}</span>
                    </div>
                  ),
                )}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
