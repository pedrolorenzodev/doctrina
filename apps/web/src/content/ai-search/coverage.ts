import type { Collection, Coverage, Passage } from "@/content/ai-search/types";
import { traditionIds, type DoctrineId, type TraditionId } from "@doctrina/core/model/ids";

export type CoverageInput = {
  passages: Passage[];
  doctrines: DoctrineId[];
  traditionsWithPages: Set<TraditionId>;
  missingAuthors: string[];
  bibleEdition: string;
  fatherWorks: number;
};

const collectionOrder: Collection[] = ["bible", "fathers", "tradition", "doctrine", "glossary"];

export function buildCoverage(input: CoverageInput): Coverage {
  const counts = new Map<Collection, number>();
  for (const passage of input.passages) {
    if (passage.collection !== "mine") counts.set(passage.collection, (counts.get(passage.collection) ?? 0) + 1);
  }
  const present = new Set(
    input.passages.flatMap((passage) => (passage.collection === "tradition" ? [passage.speaker] : [])),
  );
  return {
    collections: collectionOrder.flatMap((collection) =>
      counts.has(collection) ? [{ collection, count: counts.get(collection) ?? 0 }] : [],
    ),
    traditions: traditionIds.map((tradition) => ({
      tradition,
      status: !input.traditionsWithPages.has(tradition)
        ? ("no-page" as const)
        : present.has(tradition)
          ? ("found" as const)
          : ("none" as const),
    })),
    doctrines: input.doctrines,
    missingAuthors: input.missingAuthors,
    bibleEdition: input.bibleEdition,
    fatherWorks: input.fatherWorks,
  };
}
