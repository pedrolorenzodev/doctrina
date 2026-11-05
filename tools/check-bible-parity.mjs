import { isDeepStrictEqual } from "node:util";
import { resolve } from "node:path";
import { createLocalBibleSource } from "@/content/bible/local-source";
import { createSupabaseBibleSource } from "@/content/bible/supabase-source";

try {
  process.loadEnvFile(resolve(import.meta.dirname, "..", ".env.local"));
} catch {}

const all = process.argv.includes("--all");
const local = createLocalBibleSource();
const remote = createSupabaseBibleSource(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
);

const failures = [];
let compared = 0;
let verses = 0;

function same(label, a, b) {
  compared += 1;
  if (!isDeepStrictEqual(a, b)) {
    failures.push(label);
    if (failures.length <= 15)
      console.error(
        `DIFF ${label}\n  local ${JSON.stringify(a)?.slice(0, 200)}\n  remote ${JSON.stringify(b)?.slice(0, 200)}`,
      );
  }
}

const translations = await local.translations();
same("translations", translations, await remote.translations());

async function pool(items, size, work) {
  let next = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (next < items.length) await work(items[next++]);
    }),
  );
}

for (const { id } of translations) {
  const index = await local.chapterIndex(id);
  same(`${id} chapterIndex`, index, await remote.chapterIndex(id));
  const byBook = new Map();
  for (const entry of index) byBook.set(entry.book, [...(byBook.get(entry.book) ?? []), entry]);
  const picked = all ? index : [...byBook.values()].flatMap((chapters) => [chapters[0], chapters[chapters.length - 1]]);
  await pool(picked, 8, async ({ book, chapter }) => {
    const [a, b] = await Promise.all([local.chapterVerses(id, book, chapter), remote.chapterVerses(id, book, chapter)]);
    verses += a.length;
    same(`${id} ${book}.${chapter} verses`, a, b);
    same(
      `${id} ${book}.${chapter} structure`,
      await local.chapterStructure(id, book, chapter),
      await remote.chapterStructure(id, book, chapter),
    );
    same(
      `${id} ${book}.${chapter}.1 verse`,
      await local.verse(id, book, chapter, 1),
      await remote.verse(id, book, chapter, 1),
    );
  });
  console.log(`${id}: ${picked.length} chapters compared`);
}

console.log(`${compared} comparisons, ${verses} verses, ${failures.length} differences`);
if (failures.length > 0) process.exit(1);
