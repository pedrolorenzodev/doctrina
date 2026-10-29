import Link from "next/link";
import { RevealList } from "@/components/reveal-list";
import { Tooltip } from "@/components/ui/tooltip";
import { RowChevron } from "@/features/home/row-chevron";

export type HomeEdition = { id: string; abbreviation: string; name: string };
export type HomeBibleRow = { id: string; title: string; count: string; href: string };

export function BibleRows({ editions, rows }: { editions: HomeEdition[]; rows: HomeBibleRow[] }) {
  return (
    <>
      <div className="mt-4.5 flex flex-wrap gap-x-2 gap-y-1.5">
        {editions.map((edition) => (
          <Tooltip key={edition.id} label={edition.name}>
            <span
              tabIndex={0}
              className="inline-flex min-h-8 cursor-default items-center rounded-6 border border-rule px-2.5 text-ui-xs font-medium text-ink-2"
            >
              {edition.abbreviation}
            </span>
          </Tooltip>
        ))}
      </div>
      <RevealList as="ul" className="m-0 mt-5.5 list-none p-0">
        {rows.map((row) => (
          <li key={row.id} className="border-t border-rule last:border-b">
            <Link
              href={row.href}
              className="group/row quiet-row px-2 py-4 text-ink no-underline transition-colors duration-150 ease-standard hover:bg-hover"
            >
              <span className="min-w-0 font-body text-row font-normal">{row.title}</span>
              <span className="text-right text-ui-xs text-ink-3 tabular-nums">{row.count}</span>
              <RowChevron />
            </Link>
          </li>
        ))}
      </RevealList>
    </>
  );
}
