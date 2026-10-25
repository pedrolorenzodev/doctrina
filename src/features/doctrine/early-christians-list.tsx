import { Fragment } from "react";
import { RevealList } from "@/components/reveal-list";
import { PageLink } from "@/components/ui/page-link";
import { formatDate } from "@/content/format-date";
import type { Witness } from "@/content/model/doctrine-page";
import { highlightParagraph } from "@/content/witness-paragraph";
import { witnessReference } from "@/content/witness-view";
import type { Locale } from "@/lib/locale";
import { nbspBeforeDigits } from "@/lib/locator";

type EarlyChristiansListProps = {
  witnesses: Witness[];
  locale: Locale;
  readLabel: string;
};

export function EarlyChristiansList({ witnesses, locale, readLabel }: EarlyChristiansListProps) {
  return (
    <RevealList as="ol" className="m-0 mt-11 list-none border-b border-rule p-0">
      {witnesses.map((witness) => {
        const reference = witnessReference(witness);
        const parts = (witness.paragraph ? highlightParagraph(witness.paragraph, witness.quote) : null) ?? [
          { text: witness.quote, highlighted: true },
        ];
        const heading = witness.anonymous
          ? { link: witness.work, tail: ` ${witness.locator}` }
          : { link: witness.author, tail: `, ${reference}` };
        return (
          <li
            key={witness.id}
            id={`early-${witness.id}`}
            className="entry-row scroll-mt-offset border-t border-rule pt-6.5 pb-7.5 sm:pt-8.5 sm:pb-9.5"
          >
            <div className="pt-0.75 text-ui-base leading-normal font-medium text-ink tabular-nums">
              {formatDate(witness.date, locale)}
              {witness.note ? (
                <small className="mt-0.75 block text-date-note font-normal text-ink-3">{witness.note}</small>
              ) : null}
            </div>
            <div>
              {/* TODO: the author's name leads to his 09 page once it exists; an anonymous work's name leads to its own */}
              <h2 className="m-0 font-ui text-source-name font-normal text-ink-3">
                <PageLink>{heading.link}</PageLink>
                {nbspBeforeDigits(heading.tail)}
              </h2>
              {witness.authorLine ? <p className="mt-0.5 text-meta text-ink-3">{witness.authorLine}</p> : null}
              <p className="mt-4.5 mb-0 max-w-170 font-body text-prose-mobile font-light text-ink-3 opsz-18 sm:text-prose">
                {parts.map((part, index) =>
                  part.highlighted ? (
                    <mark key={index} className="bg-transparent text-ink">
                      {part.text}
                    </mark>
                  ) : (
                    <Fragment key={index}>{part.text}</Fragment>
                  ),
                )}
              </p>
              {/* TODO: opens the reader at this division once screen 05 exists */}
              <p className="mt-4 mb-0 flex min-h-10 items-center text-go leading-normal">
                <PageLink>{readLabel.replace("{reference}", reference)}</PageLink>
              </p>
            </div>
          </li>
        );
      })}
    </RevealList>
  );
}
