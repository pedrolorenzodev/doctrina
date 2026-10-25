import { Section } from "@/components/section";
import type { TimelineView } from "@/content/father-timeline";
import type { UiText } from "@/content/ui-text/types";
import { FatherTimeline } from "@/features/history/father-timeline";

type FatherTimelineSectionProps = {
  id: string;
  view: TimelineView;
  text: UiText["timeline"];
};

export function FatherTimelineSection({ id, view, text }: FatherTimelineSectionProps) {
  return (
    <Section
      id={id}
      title={text.title}
      subtitle={text.subtitle.replace("{from}", String(view.from)).replace("{to}", String(view.to))}
      wide
    >
      <FatherTimeline from={view.from} to={view.to} marks={view.marks} entries={view.items} text={text} />
    </Section>
  );
}
