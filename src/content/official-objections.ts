import type { Objection, TraditionPage } from "@/content/model/page";

export function officialObjections(page: TraditionPage): Objection[] {
  return page.objections.order.flatMap((id) => {
    const item = page.objections.items.find((candidate) => candidate.id === id);
    return item && item.layer === "official" ? [item] : [];
  });
}
