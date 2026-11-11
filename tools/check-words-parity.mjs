import { isDeepStrictEqual } from "node:util";
import { resolve } from "node:path";
import { createLocalWordsSource } from "@/content/words/local-words-source";
import { createSupabaseWordsSource } from "@/content/words/supabase-words-source";

try {
  process.loadEnvFile(resolve(import.meta.dirname, "..", "apps/web/.env.local"));
} catch {}

const local = createLocalWordsSource();
const remote = createSupabaseWordsSource(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SECRET_KEY);

const different = [];
const orderOnly = [];
let compared = 0;

function same(label, a, b) {
  compared += 1;
  if (!isDeepStrictEqual(a, b)) {
    different.push(label);
    if (different.length <= 10)
      console.error(
        `DIFF ${label}\n  local ${JSON.stringify(a)?.slice(0, 250)}\n  remote ${JSON.stringify(b)?.slice(0, 250)}`,
      );
  } else if (JSON.stringify(a) !== JSON.stringify(b)) orderOnly.push(label);
}

async function pool(items, size, work) {
  let next = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (next < items.length) await work(items[next++]);
    }),
  );
}

same("has data", await local.hasData(), await remote.hasData());
same("parse names grc", await local.parseNames("grc"), await remote.parseNames("grc"));
same("parse names hbo", await local.parseNames("hbo"), await remote.parseNames("hbo"));

const chapters = (await local.chapters()).toSorted((a, b) =>
  (a.book + String(a.chapter).padStart(3, "0")).localeCompare(b.book + String(b.chapter).padStart(3, "0")),
);
const remoteChapters = await remote.chapters();
same(
  "chapter list",
  new Set(chapters.map((c) => `${c.book}.${c.chapter}`)),
  new Set(remoteChapters.map((c) => `${c.book}.${c.chapter}`)),
);
same("chapter list size", chapters.length, remoteChapters.length);
await pool(chapters, 12, async ({ book, chapter }) => {
  same(`chapter ${book}.${chapter}`, await local.chapter(book, chapter), await remote.chapter(book, chapter));
});
console.log(`${chapters.length} chapters compared`);

const ids = new Map();
for (let g = 0; g <= 9; g += 1) ids.set(`G${String(g).padStart(3, "0")}`, true);
const shards = [];
for (const letter of ["G", "H"])
  for (let index = 0; index < 100; index += 1) shards.push(`${letter}${String(index).padStart(3, "0")}`);
const all = [];
for (const shard of shards) {
  const localIds = await local.shardIds(shard);
  if (localIds.length === 0) continue;
  same(`shard ${shard} ids`, localIds.toSorted(), (await remote.shardIds(shard)).toSorted());
  all.push(...localIds.map((id) => ({ shard, id })));
}
console.log(`${all.length} lexicon entries to compare`);
await pool(all, 16, async ({ shard, id }) => {
  same(`lexicon ${id}`, await local.lexiconEntry(shard, id), await remote.lexiconEntry(shard, id));
  same(`occurrence ${id}`, await local.occurrence(shard, id), await remote.occurrence(shard, id));
});

console.log(
  `${compared} comparisons, ${different.length} differences, ${orderOnly.length} equal but with another key order`,
);
if (orderOnly.length > 0) console.log(`key order examples: ${orderOnly.slice(0, 5).join(", ")}`);
if (different.length > 0) process.exit(1);
