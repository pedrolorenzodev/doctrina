import { CitationLink } from "@/components/citation-window/citation-link";
import { MiniTimeline } from "@/components/mini-timeline";
import { RevealList } from "@/components/reveal-list";
import type { SourceRow } from "@/lib/source-row";
import type { TimelineSpan } from "@/lib/timeline-span";

type DatedSourceListProps = {
  rows: SourceRow[];
  span: TimelineSpan | null;
};

export function DatedSourceList({ rows, span }: DatedSourceListProps) {
  return (
    <RevealList as="ul" className="list-none border-b border-rule">
      {rows.map((row) => (
        <li key={row.id} className="source-row group/source border-t border-rule py-4">
          <p className="m-0 text-source-name">
            <span className="font-medium">
              <CitationLink id={row.citationId}>{row.name}</CitationLink>
            </span>
            {row.work ? <span className="block text-ink-3">{row.work}</span> : null}
          </p>
          {row.date ? (
            <>
              <p className="m-0 pt-px text-ui-base font-medium text-ink tabular-nums">{row.date.label}</p>
              <MiniTimeline
                start={row.date.start}
                end={row.date.end}
                label={row.date.end ? `${row.date.start}–${row.date.end}` : String(row.date.start)}
                {...(span ? { span } : {})}
                className="max-sm:col-span-full max-sm:mt-1 sm:col-start-3 sm:row-span-2 sm:row-start-1"
              />
            </>
          ) : null}
        </li>
      ))}
    </RevealList>
  );
}
