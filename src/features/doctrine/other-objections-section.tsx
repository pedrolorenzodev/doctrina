import { Section } from "@/components/section";
import type { Objection, TraditionPage } from "@/content/model/page";
import { officialObjections } from "@/content/official-objections";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { ThemedObjectionList } from "@/features/doctrine/themed-objection-list";
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
      <ThemedObjectionList page={page} locale={locale} objections={others} compact />
    </Section>
  );
}
