import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { getFatherWork, type FatherWork } from "@/content/get-father-works";

export type SpanishFatherWork = FatherWork & { partial: boolean; translatedFrom: string };

type SpanishFile = {
  work: { id: string; title: string; author: string };
  edition: FatherWork["edition"] & { translatedFrom: { editionId: string } };
  divisions: FatherWork["divisions"];
};

const root = join(process.cwd(), "data", "corpus", "fathers-es");

const cache = new Map<string, Promise<SpanishFatherWork | null>>();

async function read(id: string): Promise<SpanishFatherWork | null> {
  const english = await getFatherWork(id);
  if (!english) return null;
  try {
    const [name] = (await readdir(join(root, id))).filter((entry) => entry.endsWith(".json")).sort();
    if (!name) return null;
    const file = JSON.parse(await readFile(join(root, id, name), "utf8")) as SpanishFile;
    const ordinalOf = new Map(english.divisions.map((division) => [division.locator, division.ordinal]));
    const aligned = file.divisions.flatMap((division) => {
      const ordinal = ordinalOf.get(division.locator);
      return ordinal === undefined ? [] : [{ ...division, ordinal }];
    });
    if (aligned.length !== file.divisions.length || file.edition.translatedFrom.editionId !== english.edition.id)
      return null;
    return {
      ...file.work,
      edition: file.edition,
      divisions: aligned,
      partial: aligned.length < english.divisions.length,
      translatedFrom: english.edition.id,
    };
  } catch {
    return null;
  }
}

export function getSpanishFatherWork(id: string): Promise<SpanishFatherWork | null> {
  let loaded = cache.get(id);
  if (!loaded) {
    loaded = read(id);
    cache.set(id, loaded);
  }
  return loaded;
}
