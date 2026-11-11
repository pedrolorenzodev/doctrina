import { isSimplificationServed } from "@/content/ai-simplify/served";
import type { DoctrinePage } from "@doctrina/core/model/doctrine-page";
import type { TraditionPage } from "@doctrina/core/model/page";
import { addressId, type SimplifyAddress } from "@/lib/ai/contracts";
import { simplifierEnabled } from "@/lib/simplifier-enabled";

export const traditionAddresses = (page: TraditionPage): SimplifyAddress[] =>
  ["definition", ...page.teach.statements.map((statement) => statement.id)].map((id) => ({
    kind: "statement",
    doctrine: page.doctrine,
    tradition: page.tradition,
    id,
  }));

export const doctrineAddresses = (page: DoctrinePage): SimplifyAddress[] => [
  { kind: "doctrine", doctrine: page.doctrine, section: "common", id: "text" },
  ...page.answers.items.map((answer): SimplifyAddress => ({
    kind: "doctrine",
    doctrine: page.doctrine,
    section: "answers",
    id: answer.tradition,
  })),
];

export async function servedIdsOf(addresses: SimplifyAddress[]): Promise<ReadonlySet<string>> {
  if (!simplifierEnabled) return new Set();
  const flags = await Promise.all(addresses.map((address) => isSimplificationServed(address)));
  return new Set(addresses.filter((_, at) => flags[at]).map(addressId));
}
