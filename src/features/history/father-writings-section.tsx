import { MiniTimeline } from "@/components/mini-timeline";
import { RevealList } from "@/components/reveal-list";
import { Section } from "@/components/section";
import { PageLink } from "@/components/ui/page-link";
import type { FatherWritingView } from "@/content/father-view";

type FatherWritingsSectionProps = {
  id: string;
  title: string;
  axisLabel: string;
  span: { start: number; end: number | null; label: string } | null;
  writings: FatherWritingView[];
};

export function FatherWritingsSection({ id, title, axisLabel, span, writings }: FatherWritingsSectionProps) {
  if (writings.length === 0) return null;
  return (
    <Section id={id} title={title} wide>
      {span ? (
        <div className="writings-axis mb-5">
          <p className="m-0 pt-0.5 text-btn text-ink-3">{axisLabel}</p>
          <MiniTimeline start={span.start} end={span.end} label={span.label} className="mt-0" />
        </div>
      ) : null}
      <RevealList as="ul" className="list-none border-b border-rule">
        {writings.map((writing) => (
          <li key={writing.id} className="writing-row border-t border-rule py-4">
            {/* TODO: writings without a corpus work open their full text once the work is loaded */}
            <p className="m-0 text-source-name font-medium">
              <PageLink {...(writing.href ? { href: writing.href } : {})}>{writing.title}</PageLink>
            </p>
            {writing.dateLabel ? (
              <p className="m-0 pt-px text-ui-base font-medium text-ink tabular-nums">{writing.dateLabel}</p>
            ) : null}
          </li>
        ))}
      </RevealList>
    </Section>
  );
}
