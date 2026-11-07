import { parseSse, pickNotes, keywords } from "@/features/reader-ai/use-ask-stream";
import {
  liveAsAnswer,
  liveChipId,
  moreOffset,
  parseLiveChip,
  rootOf,
  scopeAnswer,
} from "@/features/reader-ai/live-answers";

let checks = 0;
const same = (name, actual, expected) => {
  checks += 1;
  if (JSON.stringify(actual) !== JSON.stringify(expected))
    throw new Error(`${name}\n  actual:   ${JSON.stringify(actual)}\n  expected: ${JSON.stringify(expected)}`);
};

const wholeStream = 'event: phase\ndata: {"phase":"plan"}\n\nevent: answer\ndata: {"answerId":"a"}\n\n';
const whole = parseSse(wholeStream);
same("two events", whole.events, [
  { event: "phase", data: { phase: "plan" } },
  { event: "answer", data: { answerId: "a" } },
]);
same("no rest", whole.rest, "");
const cut = parseSse('event: phase\ndata: {"phase":"se');
same("a cut event waits", [cut.events.length, cut.rest], [0, 'event: phase\ndata: {"phase":"se']);
same("broken json is skipped", parseSse("event: x\ndata: {nope\n\n").events, []);

const wire = {
  answerId: "ans1",
  kind: "evidence",
  question: "q",
  scope: "coverage",
  blocks: [{ quote: "q1" }],
  prose: "Dice esto {q:q1}. Y esto {q:q2}.",
  quotes: {
    q1: {
      id: "q1",
      key: "k",
      who: "Juan",
      work: "Juan 6:53",
      text: "t",
      edition: "e",
      translatedByAi: false,
      speaker: "shared",
      bible: { book: "John", chapter: 6, verse: 53 },
    },
    q2: {
      id: "q2",
      key: "k",
      who: "X",
      work: "Y 1",
      text: "t",
      edition: "e",
      translatedByAi: false,
      speaker: "shared",
    },
  },
  consulted: ["q1", "q2"],
  followups: ["a", "b"],
  more: true,
  cached: false,
  promptVersion: "p",
};
const scoped = scopeAnswer(wire);
same("quote ids are scoped", Object.keys(scoped.quotes), ["ans1~q1", "ans1~q2"]);
same("prose tokens follow", scoped.prose, "Dice esto {q:ans1~q1}. Y esto {q:ans1~q2}.");
same("blocks and consulted follow", [scoped.blocks[0].quote, scoped.consulted], ["ans1~q1", ["ans1~q1", "ans1~q2"]]);
same("the original is untouched", wire.quotes.q1.id, "q1");

const labels = { more: "Más", retry: "Reintentar", metaCoverage: "IA. {scope}", metaMore: "Más pasajes" };
const answer = liveAsAnswer(scoped, labels);
same("chips: follow-ups then more", answer.follow, ["live:ans1:f0", "live:ans1:f1", "live:ans1:more"]);
same("meta carries the coverage line", answer.meta, "IA. coverage");
same("consulted passes through", answer.consulted, ["ans1~q1", "ans1~q2"]);
same(
  "no more chip when the pack is done",
  liveAsAnswer({ ...scoped, more: false }, labels).follow.includes("live:ans1:more"),
  false,
);

same("parse follow-up", parseLiveChip("live:ans1:f2"), { answerId: "ans1", action: "followup", index: 2 });
same("parse more of a more", parseLiveChip(liveChipId("ans1:more:8", "more")), {
  answerId: "ans1:more:8",
  action: "more",
  index: 0,
});
same("parse retry", parseLiveChip("live:error:x-1:retry"), { answerId: "error:x-1", action: "retry", index: 0 });
same("a scripted chip is not live", parseLiveChip("fathers"), null);
same("root of a more answer", rootOf("ans1:more:8"), "ans1");

const live = {
  version: 1,
  quotes: {},
  wire: {},
  answers: {
    ans1: scoped,
    "ans1:more:0": { ...scoped, answerId: "ans1:more:0", kind: "more", blocks: [{ quote: "a" }, { quote: "b" }] },
    "other:more:0": { ...scoped, answerId: "other:more:0", kind: "more", blocks: [{ quote: "a" }] },
  },
};
same("more offset counts only its own chain", moreOffset(live, "ans1"), 2);

same("keywords drop stop words and short words", [...keywords("¿Qué dijo la Iglesia sobre la Eucaristía?")].sort(), [
  "dijo",
  "eucaristia",
  "iglesia",
]);

const note = (id, book, chapter, verse, text, updatedAt = 1) => ({
  id,
  scope: "unit",
  translationId: "rv",
  book,
  chapter,
  verse,
  verseTo: verse,
  from: null,
  to: null,
  quote: null,
  text,
  createdAt: 1,
  updatedAt,
});
const sources = (extra) => ({
  notes: [],
  highlights: [],
  active: { book: "John", chapter: 6 },
  question: "¿Qué dice la Iglesia sobre el bautismo?",
  refOf: (book, chapter, verse) => `${book} ${chapter}:${verse}`,
  highlightText: () => null,
  ...extra,
});
const here = [note("a", "John", 6, 53, "nota aqui dos"), note("b", "John", 6, 51, "nota aqui uno")];
const far = [
  note("c", "John", 3, 5, "nacer del agua es el bautismo"),
  note("d", "Rom", 1, 1, "nada que ver con esto"),
  note("e", "Acts", 2, 38, "la iglesia y el bautismo"),
];
const picked = pickNotes(sources({ notes: [...here, ...far] }));
same(
  "chapter notes by verse, then related ones",
  picked.map((item) => item.ref),
  ["John 6:51", "John 6:53", "Acts 2:38", "John 3:5"],
);
same(
  "unrelated notes stay home",
  picked.some((item) => item.text.includes("nada que ver")),
  false,
);

const many = Array.from({ length: 30 }, (_, index) => note(`m${index}`, "John", 6, index + 1, `nota ${index}`));
const capped = pickNotes(sources({ notes: [...many, ...far] }));
same(
  "at most 20 items, related ones kept",
  [capped.length, capped.slice(-2).map((item) => item.ref)],
  [20, ["Acts 2:38", "John 3:5"]],
);

const long = Array.from({ length: 8 }, (_, index) => note(`l${index}`, "John", 6, index + 1, "x".repeat(900)));
const chars = pickNotes(sources({ notes: long })).reduce((total, item) => total + item.text.length, 0);
same("at most 4000 characters", chars <= 4000, true);

const marks = pickNotes(
  sources({
    highlights: [
      { id: "h", translationId: "rv", book: "John", chapter: 6, verse: 56, from: 0, to: 5, color: "green", at: 1 },
      { id: "i", translationId: "rv", book: "John", chapter: 7, verse: 1, from: 0, to: 5, color: "green", at: 1 },
    ],
    highlightText: (highlight) => `texto ${highlight.verse}`,
  }),
);
same("highlights of the chapter only", marks, [{ text: "texto 56", ref: "John 6:56" }]);

console.log(`ok ${checks} checks`);
