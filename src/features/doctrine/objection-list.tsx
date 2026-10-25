import { RevealList } from "@/components/reveal-list";
import { RichText } from "@/components/rich-text";
import { PageLink } from "@/components/ui/page-link";
import type { Objection } from "@/content/model/page";
import { plainRich, verseLink } from "@/content/page-views";
import type { Locale } from "@/lib/locale";

type ObjectionListProps = {
  objections: Objection[];
  locale: Locale;
};

export function ObjectionList({ objections, locale }: ObjectionListProps) {
  const verse = (segments: string[]) => verseLink(segments, locale);
  // TODO: titles go to the objection page (04)
  return (
    <RevealList as="ul" className="list-none border-b border-rule">
      {objections.map((objection) => (
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
  );
}
