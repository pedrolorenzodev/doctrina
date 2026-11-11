import { PageLink } from "@/components/ui/page-link";

type HistoryLink = { id: string; label: string; href?: string; detail?: string };

export function HistoryLinkList({ items }: { items: HistoryLink[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-2 p-0 text-ui-sm">
      {items.map((item) => (
        <li key={item.id}>
          {item.href ? (
            <PageLink href={item.href}>{item.label}</PageLink>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
          {item.detail ? <span className="ml-2 text-ink-3 tabular-nums">{item.detail}</span> : null}
        </li>
      ))}
    </ul>
  );
}
