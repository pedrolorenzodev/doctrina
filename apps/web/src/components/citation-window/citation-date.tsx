import { MiniTimeline } from "@/components/mini-timeline";
import type { CitationView } from "@/lib/citation-view";

type CitationDateProps = {
  date: NonNullable<CitationView["date"]>;
  label: string;
  className?: string;
};

export function CitationDate({ date, label, className = "mt-3.5" }: CitationDateProps) {
  return (
    <>
      <p className={`flex items-baseline gap-2.5 text-ui-xs text-ink-3 ${className}`}>
        {date.heading ?? label}
        <b className="text-ui-base font-medium text-ink tabular-nums">{date.label}</b>
      </p>
      <MiniTimeline
        start={date.start}
        end={date.end}
        label={date.markerLabel ?? date.label}
        {...(date.span ? { span: date.span } : {})}
      />
    </>
  );
}
