import type { Objection, TraditionPage } from "@doctrina/core/model/page";

export function officialObjections(page: TraditionPage): Objection[] {
  return page.objections.order.flatMap((id) => {
    const item = page.objections.items.find((candidate) => candidate.id === id);
    return item && item.layer === "official" ? [item] : [];
  });
}
