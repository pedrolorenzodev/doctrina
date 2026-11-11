import { CitationLink } from "@/components/citation-window/citation-link";
import { RevealList } from "@/components/reveal-list";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { formatDate } from "@/content/format-date";
import { getPublishedDoctrines } from "@/content/get-doctrine-page";
import type { Father, TraditionPage } from "@/content/model/page";
import { verseLink } from "@/content/page-views";
import { doctrineHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";
import { closeParenthesis, openParenthesis } from "@/lib/punctuation";

type WhySectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function WhySection({ page, locale }: WhySectionProps) {
  const text = getUiText(locale);
  const verse = (segments: string[]) => verseLink(segments, locale);
  const { intro, fathers, note, closing } = page.why;
  const earlyWitnesses = getPublishedDoctrines(locale).includes(page.doctrine)
    ? `${doctrineHref(locale, page.doctrine)}#witnesses`
    : undefined;
  const section = (id: string) => (id === "early-witnesses" ? earlyWitnesses : undefined);

  const figure = (father: Father, index: number) => (
    <figure key={index} className="figure-row m-0">
      <p className="col-span-full -mb-0.5 text-ui-sm text-ink-3">{father.lead}</p>
      <div className="col-start-1 ml-7.5 space-y-3">
        {father.quote.map((paragraph, position) => (
          <blockquote key={position} className="m-0 font-head text-quote font-light text-ink italic guillemets opsz-24">
            {paragraph}
          </blockquote>
        ))}
      </div>
      <figcaption className="row-auto ml-7.5 border-t border-rule pt-1.5 text-meta xl:col-start-2 xl:row-start-2 xl:ml-0">
        <span className="block font-medium text-ink">{father.author}</span>
        <span className="block text-ink-3">{father.work}</span>
        <span className="mt-1.5 block font-medium text-ink tabular-nums">
          {formatDate(father.date, locale)}
          {father.date.attribution ? (
            <span className="font-normal text-ink-3">
              {" "}
              {openParenthesis}
              {father.date.attribution}
              {closeParenthesis}
            </span>
          ) : null}
        </span>
        <div className="mt-2 text-btn">
          <CitationLink id={father.citedIn.citations[0] ?? ""}>
            {text.doctrine.citedIn.replace("{source}", father.citedIn.label)}
          </CitationLink>
        </div>
      </figcaption>
    </figure>
  );

  return (
    <Section id="why" title={text.doctrine.why} wide>
      <div className="max-w-col">
        {intro.map((paragraph, index) => (
          <p
            key={index}
            className="mb-3.5 font-body text-prose-mobile font-light text-ink-2 opsz-18 last:mb-11 sm:text-prose"
          >
            <RichText text={paragraph} verse={verse} />
          </p>
        ))}
      </div>
      {fathers.length > 0 ? <RevealList className="figure-grid mb-16">{fathers.map(figure)}</RevealList> : null}
      <div className="max-w-col">
        <p className="mb-4.5 font-head text-punch-mobile font-normal text-ink opsz-24 sm:text-punch">
          <RichText text={closing} verse={verse} />
        </p>
        <p className="text-note text-ink-3 quiet-links">
          <RichText text={note} verse={verse} section={section} />
        </p>
      </div>
    </Section>
  );
}
