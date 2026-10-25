import { Fragment } from "react";
import { DatedSourceList } from "@/components/dated-source-list";
import { Section } from "@/components/section";
import { GroupHeading } from "@/features/doctrine/group-heading";
import type { ObjectionSources } from "@/content/get-objection-sources";
import { getUiText } from "@/content/ui-text/get-ui-text";
import type { Locale } from "@/lib/locale";

type SourcesSectionProps = {
  id: string;
  sources: ObjectionSources;
  locale: Locale;
};

export function SourcesSection({ id, sources, locale }: SourcesSectionProps) {
  const text = getUiText(locale).doctrine.objection;
  const groups = [
    { key: "answer", title: text.groupAnswer, rows: sources.answer },
    { key: "objector", title: text.groupObjection, rows: sources.objector },
  ].filter((group) => group.rows.length > 0);
  if (groups.length === 0) return null;
  return (
    <Section id={id} title={text.sources} wide>
      {groups.map((group) => (
        <Fragment key={group.key}>
          <GroupHeading>{group.title}</GroupHeading>
          <DatedSourceList rows={group.rows} span={sources.span} />
        </Fragment>
      ))}
    </Section>
  );
}
