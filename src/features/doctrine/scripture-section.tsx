import { RevealList } from "@/components/reveal-list";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { ActionLink } from "@/components/ui/action";
import { PageLink } from "@/components/ui/page-link";
import { shownPassages } from "@/content/doctrine-rules";
import { formatVerseRef } from "@/content/format-verse";
import type { TraditionPage } from "@/content/model/page";
import { verseLink } from "@/content/page-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

type ScriptureSectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function ScriptureSection({ page, locale }: ScriptureSectionProps) {
  const text = getUiText(locale);
  // TODO: passage titles go to the passage detail and the button to the page of all passages
  const verse = (segments: string[]) => verseLink(segments, locale);

  return (
    <Section id="scripture" title={text.doctrine.scripture} subtitle={page.scriptureSubtitle}>
      <RevealList as="ul" className="list-none border-b border-rule">
        {page.scripture.slice(0, shownPassages).map((passage) => (
          <li key={passage.refs.join(",")} className="border-t border-rule py-6.25">
            <p className="font-body text-passage font-medium text-ink opsz-18">
              <PageLink>{formatVerseRef(passage.refs, locale)}</PageLink>
            </p>
            <p className="mt-2 font-body text-passage-body font-light text-ink-prose">
              <RichText text={passage.text} verse={verse} />
            </p>
          </li>
        ))}
      </RevealList>
      <div className="mt-5.5">
        <ActionLink>{text.doctrine.allPassages.replace("{n}", String(page.scripture.length))}</ActionLink>
      </div>
    </Section>
  );
}
