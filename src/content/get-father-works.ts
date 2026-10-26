import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

export type FatherDivision = { locator: string; ordinal: number; heading?: string | null; text: string };

export type FatherWork = {
  id: string;
  title: string;
  author: string;
  edition: {
    id: string;
    lang: "es" | "en";
    translator: string;
    year: number;
    bibliography: string;
    licence: string;
  };
  divisions: FatherDivision[];
};

type FatherFile = {
  work: { id: string; title: string; author: string };
  edition: FatherWork["edition"];
  divisions: FatherDivision[];
};

const root = join(process.cwd(), "data", "corpus", "fathers");

let loaded: Promise<FatherWork[]> | null = null;

async function readWork(folder: string): Promise<FatherWork[]> {
  const files = (await readdir(join(root, folder))).filter((name) => name.endsWith(".json")).sort();
  const [first] = files;
  if (!first) return [];
  const parsed = JSON.parse(await readFile(join(root, folder, first), "utf8")) as FatherFile;
  return [{ ...parsed.work, edition: parsed.edition, divisions: parsed.divisions }];
}

async function readAll(): Promise<FatherWork[]> {
  try {
    const folders = (await readdir(root, { withFileTypes: true })).filter((entry) => entry.isDirectory());
    return (await Promise.all(folders.map((folder) => readWork(folder.name)))).flat();
  } catch {
    return [];
  }
}

export function getFatherWorks(): Promise<FatherWork[]> {
  loaded ??= readAll();
  return loaded;
}

export async function getFatherWork(id: string): Promise<FatherWork | null> {
  return (await getFatherWorks()).find((work) => work.id === id) ?? null;
}
