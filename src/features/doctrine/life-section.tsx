import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { shownLifeItems } from "@/content/doctrine-rules";
import type { TraditionPage } from "@/content/model/page";
import { verseLink } from "@/content/page-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ExpandableList } from "@/features/doctrine/expandable-list";
import { SourceLinks } from "@/features/doctrine/source-links";
import type { Locale } from "@/lib/locale";
import { finalStop, withoutFinalStop } from "@/lib/punctuation";

type LifeSectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function LifeSection({ page, locale }: LifeSectionProps) {
  const text = getUiText(locale);
  const verse = (segments: string[]) => verseLink(segments, locale);
  const { intro, items } = page.life;

  return (
    <Section id="life" title={text.doctrine.life}>
      <div className="mb-7.5">
        {intro.map((paragraph, index) => (
          <p
            key={index}
            className="paragraph-gap font-body text-prose-mobile font-light text-ink-2 opsz-18 sm:text-prose"
          >
            <RichText text={paragraph} verse={verse} />
          </p>
        ))}
      </div>
      <ExpandableList
        as="ul"
        itemClassName="label-row border-t border-rule py-4"
        items={items.map((item) => ({
          id: item.id,
          content: (
            <>
              <p className="pt-0.75 text-life-label font-medium text-ink-3 max-sm:pt-0">{item.label}</p>
              <p className="font-body text-passage-body font-light text-ink-2">
                <RichText text={withoutFinalStop(item.text)} verse={verse} />{" "}
                <SourceLinks sources={item.sources} parenthesized />
                {finalStop}
              </p>
            </>
          ),
        }))}
        shown={shownLifeItems}
        moreLabel={text.doctrine.showMore.replace("{n}", String(Math.max(0, items.length - shownLifeItems)))}
        lessLabel={text.doctrine.showLess}
      />
    </Section>
  );
}
