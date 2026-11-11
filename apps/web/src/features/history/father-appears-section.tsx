import { RevealList } from "@/components/reveal-list";
import { Section } from "@/components/section";
import { PageLink } from "@/components/ui/page-link";
import type { FatherAppearance } from "@/content/get-father-appearances";

type FatherAppearsSectionProps = {
  id: string;
  title: string;
  subtitle: string;
  groupTitle: string;
  appearances: FatherAppearance[];
};

export function FatherAppearsSection({ id, title, subtitle, groupTitle, appearances }: FatherAppearsSectionProps) {
  if (appearances.length === 0) return null;
  return (
    <Section id={id} title={title} subtitle={subtitle}>
      <div className="appear-group">
        <h3 className="m-0 pt-3.5 text-btn font-medium text-ink-3 sm:pt-4">{groupTitle}</h3>
        <RevealList as="ul" className="m-0 list-none p-0">
          {appearances.map((appearance) => (
            <li key={appearance.id} className="border-t border-rule py-3.25 first:border-t-0 max-sm:first:pt-1.5">
              <p className="m-0 font-body text-entity">
                <PageLink href={appearance.href}>{appearance.title}</PageLink>
              </p>
              <p className="mt-1 mb-0 font-body text-appear-note font-light text-ink-prose">{appearance.note}</p>
            </li>
          ))}
        </RevealList>
      </div>
    </Section>
  );
}
