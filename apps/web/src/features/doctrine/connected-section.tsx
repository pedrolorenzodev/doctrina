import Link from "next/link";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { getConnected } from "@/content/get-connected";
import type { DoctrinePage } from "@/content/model/doctrine-page";
import { verseLink } from "@/content/page-views";
import { doctrineHref } from "@/content/routes";
import { doctrineName } from "@/content/site-tree";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

type ConnectedSectionProps = {
  id: string;
  page: DoctrinePage;
  locale: Locale;
};

const cardClassName =
  "group/card flex w-full flex-col rounded-8 border border-rule bg-card px-5 pt-5 pb-4.5 text-left text-ink no-underline transition-colors duration-150 ease-standard hover:border-rule-2 hover:bg-hover";

export function ConnectedSection({ id, page, locale }: ConnectedSectionProps) {
  const text = getUiText(locale).doctrinePage.connected;
  const verse = (segments: string[]) => verseLink(segments, locale);
  const { items, withPage } = getConnected(page, locale);
  if (items.length === 0) return null;
  const columns = items.length >= 3 ? "sm:grid-cols-2 xl:grid-cols-3" : "max-w-col";
  // TODO: a card of a doctrine without its own page leads there once it exists, with that doctrine's fingerprint under the text
  return (
    <Section id={id} title={text.title} subtitle={page.connected.subtitle} wide>
      <div className={`grid grid-cols-1 gap-4 ${columns}`}>
        {items.map((item) => {
          const body = (
            <>
              <h3 className="m-0 font-head text-answer-name font-normal underline decoration-transparent decoration-1 underline-offset-5 opsz-24 transition-colors duration-150 ease-standard group-hover/card:decoration-current group-focus-visible/card:decoration-current">
                {doctrineName(locale, item.doctrine)}
              </h3>
              <p className="mt-3.5 font-body text-card font-light text-ink-2 transition-colors duration-150 ease-standard group-hover/card:text-ink group-focus-visible/card:text-ink">
                <RichText text={item.text} verse={verse} />
              </p>
            </>
          );
          return withPage.has(item.doctrine) ? (
            <Link key={item.doctrine} href={doctrineHref(locale, item.doctrine)} className={cardClassName}>
              {body}
            </Link>
          ) : (
            <button key={item.doctrine} type="button" className={`${cardClassName} cursor-pointer`}>
              {body}
            </button>
          );
        })}
      </div>
    </Section>
  );
}
