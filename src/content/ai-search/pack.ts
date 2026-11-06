import { WINDOW_CHARS, type AskRequest, type SearchPlan } from "@/lib/ai/contracts";
import { traditionIds } from "@/content/model/ids";
import type { CorpusSearch, EvidencePack } from "@/content/ai-search/types";

// TODO(RET): replace this stub with the real evidence pack.
export async function buildPack(plan: SearchPlan, request: AskRequest, search: CorpusSearch): Promise<EvidencePack> {
  const found = await search.searchPassages({
    termsEn: plan.termsEn,
    phrasesEn: plan.phrasesEn,
    termsEs: plan.termsEs,
    phrasesEs: plan.phrasesEs,
    collections: [],
    doctrines: null,
    speakers: null,
    authors: null,
    works: null,
    limit: 6,
    perGroup: 3,
  });
  const passages = found.slice(0, 6).map((passage, index) => ({
    ...passage,
    id: `P${index + 1}`,
    window: passage.text.slice(0, WINDOW_CHARS),
    windowStart: 0,
  }));
  const counts = new Map<string, number>();
  for (const passage of passages) counts.set(passage.collection, (counts.get(passage.collection) ?? 0) + 1);
  return {
    passages,
    extra: [],
    coverage: {
      collections: [...counts].map(([collection, count]) => ({
        collection: collection as EvidencePack["coverage"]["collections"][number]["collection"],
        count,
      })),
      traditions: traditionIds.map((tradition) => ({
        tradition,
        status: tradition === "pentecostal" ? ("no-page" as const) : ("found" as const),
      })),
      doctrines: plan.doctrines,
      missingAuthors: [],
      bibleEdition: request.here.kind === "bible" ? request.here.translation : "rv1909",
      fatherWorks: new Set(passages.flatMap((passage) => (passage.father ? [passage.father.workId] : []))).size,
    },
  };
}
