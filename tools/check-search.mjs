import { fold, fragmentAround, markSegments, searchEntries, searchWords } from "@/lib/search-match";

const entry = (id, title, path, texts, extra = {}) => ({
  id,
  title,
  path,
  date: null,
  texts,
  quote: false,
  href: "/",
  ...extra,
});

const entries = [
  entry("page", "La Eucaristía", "Doctrinas", ["¿Qué pasa con el pan y el vino?"]),
  entry(
    "ign",
    "Carta a los Esmirniotas 7.1",
    "Padres / Ignacio de Antioquía",
    [
      "Se abstienen de la Eucaristía y de la oración, porque no confiesan que la Eucaristía es la carne de nuestro Salvador Jesucristo.",
    ],
    { date: "c. 107–110", quote: true },
  ),
  entry("ob", "Un solo sacrificio", "La Eucaristía / Católica / Objeción", [
    "Si Cristo se ofreció «una vez para siempre», la Misa no puede ser un sacrificio",
    "Hebreos dice que una vez, y la carne no aprovecha.",
  ]),
];

const text = (segments) => segments.map((s) => s.text).join("");
const markedText = (segments) => segments.filter((s) => s.marked).map((s) => s.text);
let failures = 0;
const check = (label, actual, expected) => {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    failures += 1;
    console.error(`FAIL ${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
};

check("fold strips accents and case", fold("ÁMBITO Eucaristía ñ"), "ambito eucaristia n");
check("fold keeps the length", fold("Esmirniotas ÚÑ").length, "Esmirniotas ÚÑ".length);
check("words are folded and split", searchWords("  Carne  EUCARISTÍA "), ["carne", "eucaristia"]);
check("an empty query finds nothing", searchEntries(entries, "   "), []);
check(
  "accent-insensitive match, title before path before body",
  searchEntries(entries, "eucaristia").map((r) => r.entry.id),
  ["page", "ob", "ign"],
);
check(
  "every word must match",
  searchEntries(entries, "carne salvador").map((r) => r.entry.id),
  ["ign"],
);
check("a word found nowhere", searchEntries(entries, "zzz"), []);
check(
  "body hits keep the index order",
  searchEntries(entries, "carne").map((r) => r.entry.id),
  ["ign", "ob"],
);
check(
  "a title hit outranks an earlier body hit",
  searchEntries([entry("a", "x", "y", ["carne"]), entry("b", "carne", "y", ["x"])], "carne").map((r) => r.entry.id),
  ["b", "a"],
);
check(
  "the date is searchable",
  searchEntries(entries, "107").map((r) => r.entry.id),
  ["ign"],
);
check(
  "the path is searchable",
  searchEntries(entries, "padres").map((r) => r.entry.id),
  ["ign"],
);
check(
  "the line shows the text that holds the match",
  text(searchEntries(entries, "aprovecha")[0].line.segments),
  "Hebreos dice que una vez, y la carne no aprovecha.",
);
check("marks are accent-insensitive", markedText(markSegments("La Eucaristía y la eucaristia", ["eucaristia"])), [
  "Eucaristía",
  "eucaristia",
]);
check("overlapping words merge into one mark", markedText(markSegments("carnecita", ["carne", "necita"])), [
  "carnecita",
]);
const long = "a ".repeat(60) + "carne" + " b".repeat(60);
const cut = fragmentAround(long, ["carne"]);
check(
  "a long text is cut around the match",
  [cut.cutStart, cut.cutEnd, markedText(cut.segments)],
  [true, true, ["carne"]],
);
check(
  "a cut starts and ends on a word",
  [text(cut.segments).startsWith(" "), text(cut.segments).endsWith(" ")],
  [false, false],
);
const short = fragmentAround("carne viva", ["carne"]);
check("a short text is not cut", [short.cutStart, short.cutEnd], [false, false]);
const none = fragmentAround("sin coincidencia", ["zzz"]);
check("no hit shows the start unmarked", [text(none.segments), markedText(none.segments)], ["sin coincidencia", []]);
check(
  "at most eight results",
  searchEntries(
    Array.from({ length: 20 }, (_, i) => entry(String(i), "carne", "x", ["y"])),
    "carne",
  ).length,
  8,
);

check(
  "marking stays aligned after a character outside the basic plane",
  markedText(markSegments("𝔄 carne 𝔅", ["carne"])),
  ["carne"],
);
const esmirniotas = searchEntries(entries, "esmirniotas 107")[0];
check(
  "title, path and date are marked where they match",
  [markedText(esmirniotas.title), markedText(esmirniotas.path), markedText(esmirniotas.date)],
  [["Esmirniotas"], [], ["107"]],
);
check("a result with no date has no date segments", searchEntries(entries, "pan")[0].date, null);

if (failures > 0) process.exit(1);
console.log("Search: 22 cases passed.");
