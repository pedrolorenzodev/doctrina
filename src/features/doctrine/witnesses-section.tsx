import { Section } from "@/components/section";
import { PageLink } from "@/components/ui/page-link";
import { formatDate } from "@/content/format-date";
import type { DoctrinePage } from "@/content/model/doctrine-page";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { witnessReference, witnessViewId } from "@/content/witness-view";
import { WitnessExplorer } from "@/features/doctrine/witness-explorer";
import type { Locale } from "@/lib/locale";

type WitnessesSectionProps = {
  id: string;
  page: DoctrinePage;
  locale: Locale;
};

export function WitnessesSection({ id, page, locale }: WitnessesSectionProps) {
  const text = getUiText(locale).doctrinePage.witnesses;
  const witnesses = page.witnesses.items.map((witness) => ({
    id: witness.id,
    author: witness.author,
    dateLabel: formatDate(witness.date, locale),
    start: witness.date.year,
    end: witness.date.yearEnd ?? witness.date.year,
    viewId: witnessViewId(witness.id),
    quote: witness.quote,
    reference: witnessReference(witness),
  }));
  // TODO: the link opens the doctrine's full history once that page exists
  return (
    <Section id={id} title={text.title} subtitle={page.witnesses.subtitle}>
      <WitnessExplorer witnesses={witnesses} text={text} />
      <p className="mt-8.5 text-ui-base">
        <PageLink>{page.witnesses.historyLink.label}</PageLink>
        <span className="mt-1 block text-btn text-ink-3">{page.witnesses.historyLink.note}</span>
      </p>
    </Section>
  );
}
