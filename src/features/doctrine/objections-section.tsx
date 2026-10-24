import { RevealList } from "@/components/reveal-list";
import { RichText } from "@/components/rich-text";
import { Section } from "@/components/section";
import { ActionLink } from "@/components/ui/action";
import { PageLink } from "@/components/ui/page-link";
import { shownObjections } from "@/content/doctrine-rules";
import type { TraditionPage } from "@/content/model/page";
import { plainRich, verseLink } from "@/content/page-views";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

type ObjectionsSectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function ObjectionsSection({ page, locale }: ObjectionsSectionProps) {
  const text = getUiText(locale);
  const verse = (segments: string[]) => verseLink(segments, locale);
  const official = page.objections.order.flatMap((id) => {
    const item = page.objections.items.find((candidate) => candidate.id === id);
    return item && item.layer === "official" ? [item] : [];
  });

  // TODO: objection titles go to the objection page (04) and the button to the Objeciones page of this tradition
  return (
    <Section id="objections" title={text.doctrine.objections} subtitle={page.objections.subtitle}>
      <RevealList as="ul" className="list-none border-b border-rule">
        {official.slice(0, shownObjections).map((objection) => (
          <li key={objection.id} className="border-t border-rule pt-5 pb-5.5">
            <p className="font-body text-passage font-medium text-ink opsz-18">
              <PageLink>{plainRich(objection.title, locale)}</PageLink>
            </p>
            <p className="mt-2 max-w-synthesis font-body text-synthesis font-light text-ink-prose">
              <RichText text={objection.synthesis} verse={verse} />
            </p>
          </li>
        ))}
      </RevealList>
      <div className="mt-5.5">
        <ActionLink>{text.doctrine.allObjections.replace("{n}", String(official.length))}</ActionLink>
      </div>
    </Section>
  );
}
