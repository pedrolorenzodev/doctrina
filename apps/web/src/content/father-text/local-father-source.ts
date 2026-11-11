import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { localDataDir } from "@/content/local-data-dir";
import type { FatherSource, FatherWork, SpanishFatherFile } from "@/content/father-text/father-types";

type FatherFile = {
  work: { id: string; title: string; author: string };
  edition: FatherWork["edition"];
  divisions: FatherWork["divisions"];
};

const root = join(localDataDir, "corpus", "fathers");
const rootEs = join(localDataDir, "corpus", "fathers-es");

async function firstFile<File>(base: string, folder: string): Promise<File | null> {
  const [first] = (await readdir(join(base, folder))).filter((name) => name.endsWith(".json")).sort();
  if (!first) return null;
  return JSON.parse(await readFile(join(base, folder, first), "utf8")) as File;
}

async function readWork(folder: string): Promise<FatherWork[]> {
  const parsed = await firstFile<FatherFile>(root, folder);
  return parsed ? [{ ...parsed.work, edition: parsed.edition, divisions: parsed.divisions }] : [];
}

export function createLocalFatherSource(): FatherSource {
  let loaded: Promise<FatherWork[]> | null = null;
  const all = () =>
    (loaded ??= readdir(root, { withFileTypes: true }).then(
      async (entries) =>
        (await Promise.all(entries.filter((entry) => entry.isDirectory()).map((entry) => readWork(entry.name)))).flat(),
      () => [],
    ));
  return {
    works: all,
    async work(id) {
      return (await all()).find((work) => work.id === id) ?? null;
    },
    async spanishFile(id) {
      try {
        return await firstFile<SpanishFatherFile>(rootEs, id);
      } catch {
        return null;
      }
    },
  };
}
