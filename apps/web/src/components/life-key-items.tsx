import type { TimelineEntry } from "@/lib/timeline-entry";

type LifeKeyText = { knownAlive: string; active: string; composed: string };

export function LifeKeyItems({ entries, text }: { entries: TimelineEntry[]; text: LifeKeyText }) {
  return (
    <>
      {entries.some((entry) => entry.tailKind === "dots") ? (
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="flex w-7 items-center gap-1">
            <span className="h-1.5 w-2.5 rounded-3 bg-rule-2" />
            <span className="size-0.75 rounded-full bg-ink-3 opacity-70" />
            <span className="size-0.75 rounded-full bg-ink-3 opacity-45" />
            <span className="size-0.75 rounded-full bg-ink-3 opacity-25" />
          </span>
          {text.knownAlive}
        </li>
      ) : null}
      {entries.some((entry) => entry.band === "soft") ? (
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-7 rounded-3 bg-rule-2 opacity-45" />
          {text.active}
        </li>
      ) : null}
      {entries.some((entry) => entry.band === "hollow") ? (
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="h-2.5 w-7 rounded-3 border border-ink-3" />
          {text.composed}
        </li>
      ) : null}
    </>
  );
}
