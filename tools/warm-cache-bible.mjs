import { writeFileSync } from "node:fs";
import { bibleBooks } from "@/content/bible-books";
import { bibleChapterBase } from "@/content/bible-routes";
import { getBibleChapterCounts, getReadableChapters } from "@/content/get-bible";

export const manifestPath = new URL("./warm-cache-bible.json", import.meta.url);

export async function buildBibleManifest() {
  const manifest = {};
  for (const locale of ["es", "en"]) {
    const counts = await getBibleChapterCounts(locale);
    const readable = await getReadableChapters(locale);
    const books = [];
    for (const book of bibleBooks) {
      const chapters = counts.get(book.id) ?? 0;
      const present = readable.filter((entry) => entry.book === book.id).length;
      if (present !== chapters)
        throw new Error(`${locale} ${book.id}: ${present} chapters but the last is ${chapters}`);
      if (chapters > 0) books.push({ base: bibleChapterBase(locale, book), chapters });
    }
    manifest[locale] = books;
  }
  return manifest;
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const manifest = await buildBibleManifest();
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const total = Object.values(manifest).flatMap((books) => books.map((book) => book.chapters));
  console.log(`warm-cache-bible.json: ${total.reduce((sum, count) => sum + count, 0)} chapters`);
}
