import type { FatherDivision, FatherSource, FatherWork, SpanishFatherFile } from "@/content/father-text/father-types";
import { createSupabaseSelect } from "@/content/supabase-rest";

const DIVISIONS_PAGE = 40;

type EditionRow = {
  work_id: string;
  id: string;
  title: string;
  language: "es" | "en";
  translator: string | null;
  year: number | null;
  bibliography: string;
  source_url: string;
  scan_url: string | null;
  licence: string;
  retrieved_on: string;
  source_sha256: string;
  locator_notes: string | null;
  status: string | null;
  translated_from: string | null;
  extra: Record<string, unknown> & { translatedFrom?: { file: string; sha256: string } };
};

type WorkRow = { id: string; title: string; author: string };

type DivisionRow = { locator: string; ordinal: number; heading: string | null; text: string };

function present<Value extends Record<string, unknown>>(value: Value): Value {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== null && entry !== undefined),
  ) as Value;
}

function editionOf(row: EditionRow) {
  const { translatedFrom, ...extra } = row.extra;
  return present({
    id: row.id,
    lang: row.language,
    translator: row.translator,
    year: row.year,
    bibliography: row.bibliography,
    source: row.source_url,
    scan: row.scan_url,
    licence: row.licence,
    retrievedAt: row.retrieved_on,
    sha256: row.source_sha256,
    locatorNotes: row.locator_notes,
    status: row.status,
    ...extra,
    ...(row.translated_from ? { translatedFrom: { editionId: row.translated_from, ...translatedFrom } } : {}),
  }) as unknown as FatherWork["edition"];
}

const divisionOf = (row: DivisionRow): FatherDivision =>
  present({ locator: row.locator, ordinal: row.ordinal, heading: row.heading, text: row.text }) as FatherDivision;

export function createSupabaseFatherSource(url: string, publishableKey: string): FatherSource {
  const select = createSupabaseSelect(url, publishableKey, "corpus-fathers");
  const key = (value: string) => encodeURIComponent(value);

  async function divisionsOf(workId: string, editionId: string) {
    const rows = await select<DivisionRow>(
      `divisions?work_id=eq.${key(workId)}&edition_id=eq.${key(editionId)}&select=locator,ordinal,heading,text&order=ordinal`,
      DIVISIONS_PAGE,
    );
    return rows.map(divisionOf);
  }

  async function edition(workId: string, language: "en" | "es") {
    const [row] = await select<EditionRow>(
      `editions?work_id=eq.${key(workId)}&language=eq.${language}&select=*&order=id`,
    );
    return row ?? null;
  }

  return {
    async works() {
      const [works, editions] = await Promise.all([
        select<WorkRow>("works?select=id,title,author&order=id"),
        select<EditionRow>("editions?language=eq.en&select=*&order=work_id,id"),
      ]);
      const first = new Map<string, EditionRow>();
      for (const row of editions) if (!first.has(row.work_id)) first.set(row.work_id, row);
      return works
        .flatMap((work) => {
          const row = first.get(work.id);
          return row ? [{ ...work, edition: editionOf(row) }] : [];
        })
        .sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
    },
    async work(id) {
      const [work] = await select<WorkRow>(`works?id=eq.${key(id)}&select=id,title,author`);
      const row = work ? await edition(id, "en") : null;
      if (!work || !row) return null;
      return { ...work, edition: editionOf(row), divisions: await divisionsOf(id, row.id) };
    },
    async spanishFile(id): Promise<SpanishFatherFile | null> {
      const [work] = await select<WorkRow>(`works?id=eq.${key(id)}&select=id,title,author`);
      const row = work ? await edition(id, "es") : null;
      if (!work || !row) return null;
      return {
        work: { id: work.id, title: row.title, author: work.author },
        edition: editionOf(row) as SpanishFatherFile["edition"],
        divisions: await divisionsOf(id, row.id),
      };
    },
  };
}
