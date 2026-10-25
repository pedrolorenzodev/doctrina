import { Section } from "@/components/section";
import { ActionLink } from "@/components/ui/action";
import { shownObjections } from "@/content/doctrine-rules";
import type { TraditionPage } from "@/content/model/page";
import { officialObjections } from "@/content/official-objections";
import { objectionsHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ObjectionList } from "@/features/doctrine/objection-list";
import type { Locale } from "@/lib/locale";

type ObjectionsSectionProps = {
  page: TraditionPage;
  locale: Locale;
};

export function ObjectionsSection({ page, locale }: ObjectionsSectionProps) {
  const text = getUiText(locale);
  const official = officialObjections(page);
  return (
    <Section id="objections" title={text.doctrine.objections} subtitle={page.objections.subtitle}>
      <ObjectionList objections={official.slice(0, shownObjections)} locale={locale} />
      <div className="mt-5.5">
        <ActionLink href={objectionsHref(locale, page.doctrine, page.tradition)}>
          {text.doctrine.allObjections.replace("{n}", String(official.length))}
        </ActionLink>
      </div>
    </Section>
  );
}
