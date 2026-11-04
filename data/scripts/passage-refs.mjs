const BOOKS = {
  Gen: "Gen", Genesis: "Gen", Exod: "Exod", Exodus: "Exod", Lev: "Lev", Deut: "Deut", Josh: "Josh", Ps: "Ps", Psalm: "Ps", Psalms: "Ps",
  Isa: "Isa", Isaiah: "Isa", Jer: "Jer", Ezek: "Ezek", Mal: "Mal", Matt: "Matt", Matthew: "Matt", Mark: "Mark", Luke: "Luke", John: "John",
  Acts: "Acts", Rom: "Rom", Romans: "Rom", Gal: "Gal", Eph: "Eph", Phil: "Phil", Col: "Col", Titus: "Titus", Heb: "Heb", Jas: "Jas",
  James: "Jas", Jude: "Jude", Rev: "Rev", "1 Cor": "1Cor", "2 Cor": "2Cor", "1 Thess": "1Thess", "2 Thess": "2Thess", "1 Tim": "1Tim",
  "2 Tim": "2Tim", "1 Pet": "1Pet", "2 Pet": "2Pet", "1 John": "1John", "2 John": "2John", "3 John": "3John", "1 Corinthians": "1Cor",
  "2 Corinthians": "2Cor", "1 Timothy": "1Tim", "2 Timothy": "2Tim", "1 Peter": "1Pet", "2 Peter": "2Pet", "1 Thessalonians": "1Thess",
  "2 Thessalonians": "2Thess", Hebrews: "Heb", Galatians: "Gal", Ephesians: "Eph", Colossians: "Col", Revelation: "Rev", Deuteronomy: "Deut",
};

const bookPattern = Object.keys(BOOKS)
  .sort((a, b) => b.length - a.length)
  .map((name) => name.replace(" ", "\\s?"))
  .join("|");
const bookSpelling = (raw) => {
  const squashed = raw.replace(/\s+/g, " ");
  return BOOKS[squashed] ?? BOOKS[Object.keys(BOOKS).find((name) => name.replace(" ", "") === squashed.replace(" ", ""))];
};

const WHOLE = 999;

export function versesOfHeading(text) {
  const out = [];
  const first = new RegExp(`\\b(${bookPattern})\\.?\\s*(\\d+)(?::(\\d+)(?:[–-](\\d+))?)?`, "gi");
  const carry = /^\s*[;,]\s*(?:and\s+|with\s+)?(\d+):(\d+)(?:[–-](\d+))?/;
  let m;
  while ((m = first.exec(text))) {
    const book = bookSpelling(m[1]);
    if (!book) continue;
    const chapter = Number(m[2]);
    out.push(m[3] ? { book, chapter, from: Number(m[3]), to: Number(m[4] ?? m[3]) } : { book, chapter, from: 1, to: WHOLE });
    let end = first.lastIndex;
    let next;
    while ((next = carry.exec(text.slice(end)))) {
      out.push({ book, chapter: Number(next[1]), from: Number(next[2]), to: Number(next[3] ?? next[2]) });
      end += next[0].length;
    }
    first.lastIndex = end;
  }
  return out;
}

export function versesOfOsis(refs) {
  const out = [];
  for (const segment of refs) {
    const [from, to = from] = segment.split("-");
    const [book, chapter, verse] = from.split(".");
    const [, toChapter, toVerse] = to.split(".");
    if (verse === undefined) out.push({ book, chapter: Number(chapter), from: 1, to: WHOLE });
    else if (!toChapter || Number(toChapter) === Number(chapter)) out.push({ book, chapter: Number(chapter), from: Number(verse), to: Number(toVerse ?? verse) });
    else {
      out.push({ book, chapter: Number(chapter), from: Number(verse), to: WHOLE });
      for (let c = Number(chapter) + 1; c < Number(toChapter); c += 1) out.push({ book, chapter: c, from: 1, to: WHOLE });
      out.push({ book, chapter: Number(toChapter), from: 1, to: Number(toVerse) });
    }
  }
  return out;
}

export function overlaps(a, b) {
  return a.some((x) => b.some((y) => x.book === y.book && x.chapter === y.chapter && x.from <= y.to && y.from <= x.to));
}
