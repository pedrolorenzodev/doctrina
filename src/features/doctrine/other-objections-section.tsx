import { Section } from "@/components/section";
import type { Objection, TraditionPage } from "@/content/model/page";
import { officialObjections } from "@/content/official-objections";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ObjectionList } from "@/features/doctrine/objection-list";
import type { Locale } from "@/lib/locale";

type OtherObjectionsSectionProps = {
  id: string;
  page: TraditionPage;
  current: Objection;
  locale: Locale;
};

export function OtherObjectionsSection({ id, page, current, locale }: OtherObjectionsSectionProps) {
  const others = officialObjections(page).filter((objection) => objection.id !== current.id);
  if (others.length === 0) return null;
  return (
    <Section id={id} title={getUiText(locale).doctrine.objection.otherObjections}>
      <ObjectionList objections={others} doctrine={page.doctrine} tradition={page.tradition} locale={locale} compact />
    </Section>
  );
}
