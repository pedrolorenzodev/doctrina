import { RevealList } from "@/components/reveal-list";
import { RichText } from "@/components/rich-text";
import { PageLink } from "@/components/ui/page-link";
import type { DoctrineId, TraditionId } from "@/content/model/ids";
import type { Objection } from "@/content/model/page";
import { plainRich, verseLink } from "@/content/page-views";
import { objectionHref } from "@/content/routes";
import type { Locale } from "@/lib/locale";

type ObjectionListProps = {
  objections: Objection[];
  doctrine: DoctrineId;
  tradition: TraditionId;
  locale: Locale;
  compact?: boolean;
  themeOf?: Record<string, string>;
  hiddenFrom?: number;
};

export function ObjectionList({
  objections,
  doctrine,
  tradition,
  locale,
  compact = false,
  themeOf,
  hiddenFrom,
}: ObjectionListProps) {
  const verse = (segments: string[]) => verseLink(segments, locale);
  return (
    <RevealList as="ul" className="list-none border-b border-rule">
      {objections.map((objection, index) => (
        <li
          key={objection.id}
          data-id={objection.id}
          data-theme={themeOf?.[objection.id]}
          hidden={hiddenFrom !== undefined && index >= hiddenFrom}
          className={`border-t border-rule ${compact ? "pt-3.5 pb-4" : "pt-5 pb-5.5"}`}
        >
          <p className={`font-body font-medium text-ink opsz-18 ${compact ? "text-passage-compact" : "text-passage"}`}>
            <PageLink href={objectionHref(locale, doctrine, tradition, objection.id)}>
              {plainRich(objection.title, locale)}
            </PageLink>
          </p>
          <p
            className={`mt-2 max-w-synthesis font-body font-light text-ink-prose ${compact ? "text-synthesis-compact" : "text-synthesis"}`}
          >
            <RichText text={objection.synthesis} verse={verse} />
          </p>
        </li>
      ))}
    </RevealList>
  );
}
