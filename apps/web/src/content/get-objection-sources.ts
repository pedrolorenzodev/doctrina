import { formatDate } from "@/content/format-date";
import type { Objection } from "@/content/model/page";
import type { ObjectorText } from "@/content/get-objector-texts";
import type { SourceRow } from "@/lib/source-row";
import { splitSourceName } from "@/content/split-source-name";
import { timelineSpan, type TimelineSpan } from "@/lib/timeline-span";
import type { Locale } from "@/lib/locale";

export type ObjectionSources = {
  answer: SourceRow[];
  objector: SourceRow[];
  span: TimelineSpan | null;
};

export function getObjectionSources(objection: Objection, texts: ObjectorText[], locale: Locale): ObjectionSources {
  const answer = objection.sourcesCited.map((group, index): SourceRow => {
    const { name, work } = splitSourceName(group.name);
    const date = group.dates[0];
    return {
      id: `answer-${index}`,
      citationId: group.citations[0] ?? "",
      name,
      work,
      date: date ? { label: formatDate(date, locale), start: date.year, end: date.yearEnd ?? null } : null,
    };
  });
  const objector = texts.map((text) => text.source);
  const years = [...answer, ...objector].flatMap((row) =>
    row.date ? [row.date.start, row.date.end ?? row.date.start] : [],
  );
  return { answer, objector, span: years.length > 0 ? timelineSpan(years) : null };
}
