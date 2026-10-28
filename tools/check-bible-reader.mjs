import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { bibleBooks } from "@/content/bible-books";
import { bibleChapterHref, bookFromSlug, bookRouteOf, bookSlug } from "@/content/bible-routes";
import { createSupabaseBibleSource } from "@/content/bible/supabase-source";
import { getBibleChapter, getBibleChapterIndex, getBibleTranslations, getBibleVerse } from "@/content/get-bible";

const failures = [];

function checkRoutes() {
  for (const locale of ["es", "en"]) {
    const slugs = new Set(bibleBooks.map((book) => bookSlug(locale, book)));
    check(`${locale} book slugs are unique`, slugs.size === bibleBooks.length, `${slugs.size} of ${bibleBooks.length}`);
    check(
      `${locale} slugs resolve to their book`,
      bibleBooks.every((book) => bookFromSlug(locale, bookSlug(locale, book))?.id === book.id),
    );
  }
  const john = bibleBooks.find((book) => book.id === "John");
  check("a chapter link uses the Spanish segment and slug", bibleChapterHref("es", john, 6) === "/es/biblia/juan/6");
  const corinthians = bibleBooks.find((book) => book.id === "1Cor");
  check("a numbered book keeps its number in the slug", bookSlug("es", corinthians) === "1-corintios");
  check("the book route of a chapter path", bookRouteOf("/es/bible/juan/6") === "/es/bible/juan");
  check("the public path gives the same book route", bookRouteOf("/es/biblia/juan/6") === "/es/bible/juan");
  check("no book route for the book itself", bookRouteOf("/es/bible/juan") === null);
}
const check = (name, ok, detail = "") => {
  if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
};

const root = process.cwd();
const manifestPath = resolve(root, "data", "sources", "bibles.json");

async function checkLocalCorpus() {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const translations = await getBibleTranslations();
  check("translations", translations.length === manifest.length, `${translations.length} of ${manifest.length}`);

  for (const entry of manifest) {
    const index = await getBibleChapterIndex(entry.id);
    const total = index.reduce((sum, chapter) => sum + chapter.verseCount, 0);
    check(`${entry.id} verse total`, total === entry.verses, `${total} vs manifest ${entry.verses}`);
    check(`${entry.id} first chapter`, index[0]?.book === "Gen" && index[0]?.chapter === 1);
    check(`${entry.id} last chapter`, index.at(-1)?.book === "Rev");
    const first = await getBibleChapter(entry.id, "Gen", 1);
    check(`${entry.id} Gen 1 has no previous`, first?.previous === null && first?.next?.chapter === 2);
    const last = index.at(-1);
    const end = await getBibleChapter(entry.id, last.book, last.chapter);
    check(`${entry.id} last chapter has no next`, end?.next === null && end?.previous !== null);
    check(`${entry.id} unknown chapter`, (await getBibleChapter(entry.id, "Gen", 999)) === null);
    check(`${entry.id} unknown book`, (await getBibleChapter(entry.id, "Nope", 1)) === null);
    const john = await getBibleVerse(entry.id, "John", 3, 16);
    check(`${entry.id} John 3:16`, Boolean(john?.text));
    const chapter = await getBibleChapter(entry.id, "Ps", 119);
    const summary = index.find((item) => item.book === "Ps" && item.chapter === 119);
    check(`${entry.id} Ps 119 matches its index`, chapter?.verses.length === summary?.verseCount);
    const ordered = chapter?.verses.every((verse, at) => at === 0 || verse.verse > chapter.verses[at - 1].verse);
    check(`${entry.id} Ps 119 verses ordered`, ordered === true);
  }

  for (const id of ["bsb", "web-c"]) {
    if (!existsSync(resolve(root, "data", "corpus", "bibles", `${id}.structure.json`))) continue;
    let bad = 0;
    let withStructure = 0;
    for (const { book, chapter } of await getBibleChapterIndex(id)) {
      const structure = (await getBibleChapter(id, book, chapter))?.structure;
      if (!structure) continue;
      withStructure += 1;
      const verses = new Set((await getBibleChapter(id, book, chapter)).verses.map((verse) => verse.verse));
      const starts = structure.paragraphs;
      const sorted = starts.every((number, at) => at === 0 || number > starts[at - 1]);
      const known = [...starts, ...structure.sections.map((section) => section.from)].every((number) =>
        verses.has(number),
      );
      if (!sorted || !known) bad += 1;
    }
    check(`${id} structure points at real verses, in order`, bad === 0, `${bad} chapters`);
    check(`${id} structure covers most chapters`, withStructure > 1000, `${withStructure} chapters`);
  }
  const johnSix = await getBibleChapter("bsb", "John", 6);
  if (johnSix?.structure) {
    check(
      "bsb John 6 headings",
      johnSix.structure.sections.map((section) => section.from).join() === "1,16,22,59,67",
      johnSix.structure.sections.map((section) => section.from).join(),
    );
  }

  const dra = await getBibleChapter("dra", "Mal", 4);
  check("dra Malachi 4 leads to Tobit", dra?.next?.book === "Tob" && dra.next.chapter === 1);
  const kjv = await getBibleChapter("kjv", "Mal", 4);
  check("kjv Malachi 4 leads to Matthew", kjv?.next?.book === "Matt" && kjv.next.chapter === 1);
  const sirach = await getBibleChapter("web-c", "Sir", 51);
  check("web-c Sirach 51", (sirach?.verses.length ?? 0) > 0);
  const esther = await getBibleChapterIndex("web-c");
  check(
    "web-c Esther and Daniel are mapped",
    esther.some((c) => c.book === "Esth") && esther.some((c) => c.book === "Dan"),
  );
}

async function checkSupabaseSource() {
  const calls = [];
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    calls.push({ url: String(url), init });
    const offset = Number(new URL(String(url)).searchParams.get("offset"));
    const rows = Array.from({ length: Math.min(500, 1189 - offset) }, (_, at) => ({
      book: "Gen",
      chapter: offset + at + 1,
      verse_count: 2,
    }));
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "content-range": `${offset}-${offset + rows.length - 1}/1189` },
    });
  };
  try {
    const source = createSupabaseBibleSource("https://example.supabase.co", "sb_publishable_test");
    const index = await source.chapterIndex("kjv");
    check(
      "supabase pages by the reported total, whatever the server cap",
      index.length === 1189 && calls.length === 3,
      `${index.length} rows, ${calls.length} calls`,
    );
    check(
      "supabase sends the key as apikey",
      calls.every((call) => call.init.headers.apikey === "sb_publishable_test"),
    );
    check("supabase encodes the translation", calls[0].url.includes("translation_id=eq.kjv"));
    globalThis.fetch = async (url) => {
      const text = String(url);
      const body = text.includes("chapter_structure")
        ? [
            {
              sections: [
                [1, "The Feeding of the Five Thousand"],
                [16, "Jesus Walks on Water"],
              ],
              paragraphs: [1, 4, 16],
            },
          ]
        : [
            {
              verse: 35,
              text: "Jesus said to them, “I am the bread of life.” He went on.",
              red: ["“I am the bread of life.”"],
            },
            { verse: 36, text: "But I said to you that you have seen me.", red: null },
          ];
      return new Response(JSON.stringify(body), {
        status: 200,
        headers: { "content-range": `0-${body.length - 1}/${body.length}` },
      });
    };
    const verses = await source.chapterVerses("web-c", "John", 6);
    check(
      "supabase turns red phrases into spans",
      verses[0].red?.length === 1 && verses[0].text.slice(...verses[0].red[0]).startsWith("“I am"),
    );
    check("supabase leaves a verse with no red plain", verses[1].red === undefined);
    const structure = await source.chapterStructure("web-c", "John", 6);
    check(
      "supabase returns sections and paragraphs",
      structure?.sections[1]?.title === "Jesus Walks on Water" && structure.paragraphs.join() === "1,4,16",
    );
  } finally {
    globalThis.fetch = realFetch;
  }
}

if (existsSync(resolve(root, "data", "corpus", "bibles", "rv1909.json"))) await checkLocalCorpus();
else console.log("check-bible-reader: no local corpus in data/corpus/bibles, local checks skipped");
await checkSupabaseSource();
checkRoutes();

if (failures.length > 0) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}
console.log("check-bible-reader: ok");
