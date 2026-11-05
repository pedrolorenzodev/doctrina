import { isDeepStrictEqual } from "node:util";
import { resolve } from "node:path";
import { createLocalFatherSource } from "@/content/father-text/local-father-source";
import { createSupabaseFatherSource } from "@/content/father-text/supabase-father-source";

try {
  process.loadEnvFile(resolve(import.meta.dirname, "..", ".env.local"));
} catch {}

const local = createLocalFatherSource();
const remote = createSupabaseFatherSource(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
);

const normal = (value) =>
  value === null ? null : JSON.parse(JSON.stringify(value, (_key, entry) => (entry === null ? undefined : entry)));
const failures = [];
let compared = 0;
let divisions = 0;

function same(label, a, b) {
  compared += 1;
  if (isDeepStrictEqual(normal(a), normal(b))) return;
  failures.push(label);
  if (failures.length <= 10)
    console.error(
      `DIFF ${label}\n  local ${JSON.stringify(a)?.slice(0, 300)}\n  remote ${JSON.stringify(b)?.slice(0, 300)}`,
    );
}

const byId = (a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
const stripped = (work) => Object.fromEntries(Object.entries(work).filter(([key]) => key !== "divisions"));

const localWorks = (await local.works()).toSorted(byId);
const remoteWorks = await remote.works();
same("works list", localWorks.map(stripped), remoteWorks.map(stripped));

let next = 0;
const ids = localWorks.map((work) => work.id);
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (next < ids.length) {
      const id = ids[next++];
      const [a, b] = await Promise.all([local.work(id), remote.work(id)]);
      divisions += a?.divisions.length ?? 0;
      same(`${id} english`, a, b);
      const [spanishLocal, spanishRemote] = await Promise.all([local.spanishFile(id), remote.spanishFile(id)]);
      divisions += spanishLocal?.divisions.length ?? 0;
      same(`${id} spanish`, spanishLocal, spanishRemote);
    }
  }),
);

console.log(`${ids.length} works, ${compared} comparisons, ${divisions} divisions, ${failures.length} differences`);
if (failures.length > 0) process.exit(1);
