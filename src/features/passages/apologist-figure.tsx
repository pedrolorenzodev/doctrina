"use client";

import { useId, useState } from "react";
import { MoreButton } from "@/components/ui/more-button";
import type { ApologistQuote } from "@/content/model/page";

type ApologistFigureProps = {
  quote: ApologistQuote;
  aiNote: string;
  readOriginal: string;
  hideOriginal: string;
  viewSource: string;
};

export function ApologistFigure({ quote, aiNote, readOriginal, hideOriginal, viewSource }: ApologistFigureProps) {
  const [open, setOpen] = useState(false);
  const originalId = useId();
  return (
    <figure className="mt-7 quote-figure-grid">
      <div>
        <blockquote className="m-0 font-head text-quote font-light text-ink italic opsz-24 guillemets">
          {quote.text}
        </blockquote>
        {quote.translation ? <p className="mt-2 text-btn leading-normal text-ink-3">{aiNote}</p> : null}
        {quote.original ? (
          <>
            <MoreButton expanded={open} controls={originalId} onClick={() => setOpen((value) => !value)}>
              {open ? hideOriginal : readOriginal}
            </MoreButton>
            <div id={originalId} inert={!open} data-open={open ? "" : undefined} className="fold-grid">
              <div className="min-h-0 overflow-hidden">
                <p lang="en" className="my-1 font-body text-passage-body font-light text-ink-3 italic guillemets">
                  {quote.original}
                </p>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <figcaption className="border-t border-rule pt-2 text-meta text-ink-3">
        <b className="block font-medium text-ink">{quote.speaker}</b>
        {quote.work ? <span className="block">{quote.work}</span> : null}
        <span className="block">{quote.outlet}</span>
        <span className="mt-2 block font-medium text-ink tabular-nums date-mark">{quote.date}</span>
        <span className="block">{quote.locator}</span>
        <a
          href={quote.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-btn leading-normal text-ink-2 underline decoration-rule-2 underline-offset-4 transition-colors duration-150 ease-standard mark-external hover:text-ink hover:decoration-current"
        >
          {viewSource}
        </a>
      </figcaption>
    </figure>
  );
}
