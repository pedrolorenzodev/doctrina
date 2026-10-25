import { CitationLink } from "@/components/citation-window/citation-link";
import { RichText } from "@/components/rich-text";
import type { Objection } from "@/content/model/page";
import type { ObjectorQuote } from "@/content/get-objector-quotes";
import { verseLink } from "@/content/page-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ExpandableList } from "@/features/doctrine/expandable-list";
import type { Locale } from "@/lib/locale";

const shownObjectorTexts = 2;

type ObjectionBoxProps = {
  objection: Objection;
  quotes: ObjectorQuote[];
  locale: Locale;
};

export function ObjectionBox({ objection, quotes, locale }: ObjectionBoxProps) {
  const text = getUiText(locale);
  const verse = (segments: string[]) => verseLink(segments, locale);
  const hidden = Math.max(0, quotes.length - shownObjectorTexts);
  return (
    <>
      <div className="rounded-6 border border-rule-2 px-4.5 pt-5 pb-4.5 sm:px-7.5 sm:pt-6.5 sm:pb-6">
        <p className="font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose">
          <RichText text={objection.synthesis} verse={verse} />
        </p>
        {quotes.length > 0 ? (
          <div className="mt-6 border-t border-rule pt-5">
            <p className="mb-1 text-ui-xs text-ink-3">{text.doctrine.objection.ownWords}</p>
            <ExpandableList
              as="ul"
              listClassName="list-none"
              moreClassName="mt-2.5"
              itemClassName="mt-4"
              items={quotes.map((quote) => ({
                id: `own-${quote.id}`,
                content: (
                  <figure className="m-0">
                    {quote.languageNote ? <p className="mb-1.5 text-ui-xs text-ink-3">{quote.languageNote}</p> : null}
                    <blockquote
                      lang={quote.lang}
                      className="m-0 font-head text-box-quote font-light text-ink-2 italic guillemets opsz-24"
                    >
                      {quote.text}
                    </blockquote>
                    <figcaption className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 text-ui-sm text-ink-3">
                      <CitationLink id={quote.id}>{quote.label}</CitationLink>
                      {quote.year ? <span className="whitespace-nowrap">{quote.year}</span> : null}
                    </figcaption>
                  </figure>
                ),
              }))}
              shown={shownObjectorTexts}
              moreLabel={(hidden === 1
                ? text.doctrine.objection.showOneMoreText
                : text.doctrine.objection.showMoreTexts
              ).replace("{n}", String(hidden))}
              lessLabel={text.doctrine.showLess}
            />
          </div>
        ) : null}
      </div>
      <p className="mx-0.5 mt-3.5 text-meta text-ink-3">{objection.raisedBy.line}</p>
    </>
  );
}
