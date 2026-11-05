import { currentFatherSource, getFatherWork, type FatherWork } from "@/content/get-father-works";

export type SpanishFatherWork = FatherWork & { partial: boolean; translatedFrom: string };

const cache = new Map<string, Promise<SpanishFatherWork | null>>();

async function read(id: string): Promise<SpanishFatherWork | null> {
  const english = await getFatherWork(id);
  if (!english) return null;
  try {
    const file = await currentFatherSource().spanishFile(id);
    if (!file) return null;
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
