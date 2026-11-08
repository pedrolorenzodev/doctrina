import assert from "node:assert/strict";
import { verifyAnswer } from "@/features/ask/verify-answer";
import { anchoredSpan, bestSpan, withCommentary } from "@/features/ask/excerpt";
import { leadSlice, mapAnswer, wireQuote } from "@/features/ask/map-answer";
import { noteExcerpt, noteFollowup } from "@/features/ask/note-followup";
import { coverageLine } from "@/features/ask/coverage-line";
import { clampPlan } from "@/features/ask/plan";
import { fatherNameForms, verdictHit, fatherAssignmentHit } from "@/features/ask/lexicon";
import { isPastoral } from "@/features/ask/fixed-texts";
import { answerUser } from "@/features/ask/answer";
import { askMore } from "@/features/ask/more";
import { getAiStore } from "@/content/ai-store/get-ai-store";

const ignatius =
  "But mark ye those who hold strange doctrine touching the grace of Jesus Christ which came to us, how that they are contrary to the mind of God. They have no care for love, none for the widow, none for the orphan, none for the afflicted, none for the prisoner, none for the hungry or thirsty. They abstain from eucharist (thanksgiving) and prayer, because they allow not that the eucharist is the flesh of our Saviour Jesus Christ, which flesh suffered for our sins, and which the Father of His goodness raised up.";
const justin = `For not as common bread and common drink do we receive these; but in like manner as Jesus Christ our Saviour, having been made flesh by the Word of God, had both flesh and blood for our salvation, so likewise have we been taught that the food which is blessed by the prayer of His word, and from which our blood and flesh by transmutation are nourished, is the flesh and blood of that Jesus who was made flesh. For the apostles, in the memoirs composed by them, which are called Gospels, have thus delivered unto us what was enjoined upon them; that Jesus took bread, and when He had given thanks, said, “This do ye in remembrance of Me, this is My body.”`;
const gapText = `Alpha beta gamma delta epsilon ${"filler ".repeat(120)}zeta eta theta iota kappa`;

function passage(id, fields) {
  return {
    id,
    key: `test:${id}`,
    collection: "fathers",
    speaker: "shared",
    doctrine: null,
    lang: "en",
    title: "Work",
    who: "Someone",
    locatorLabel: "Work 1",
    editionLabel: "Edition. Public domain.",
    licence: "public-domain",
    translatedByAi: false,
    maxQuoteWords: 80,
    href: null,
    refs: [],
    author: null,
    year: null,
    father: null,
    bible: null,
    windowStart: 0,
    ...fields,
    window: fields.window ?? fields.text,
  };
}

const prefix = "Y Jesús les dijo: De cierto, de cierto os digo: ";
const verse = `${prefix}Si no comiereis la carne del Hijo del hombre, y bebiereis su sangre, no tendréis vida en vosotros.`;
const pack = [
  passage("P1", {
    collection: "bible",
    who: "Juan",
    locatorLabel: "Juan 6:53",
    lang: "es",
    text: verse,
    window: verse.slice(prefix.length - 10),
    windowStart: prefix.length - 10,
    bible: { book: "John", chapter: 6, verse: 53, verseEnd: null, translationId: "rv1909" },
  }),
  passage("P2", {
    who: "Ignacio de Antioquía",
    author: "ignatius",
    text: ignatius,
    father: { workId: "ignatius-smyrnaeans", editionId: "lightfoot-1889", locator: "6.2" },
    href: "/es/obras/ignatius-smyrnaeans#d-6.2",
  }),
  passage("P3", {
    collection: "tradition",
    speaker: "catholic",
    who: "Iglesia católica",
    lang: "es",
    text: "La Eucaristía es fuente y cima de toda la vida cristiana, y en ella Cristo está presente.",
  }),
  passage("P4", {
    collection: "tradition",
    speaker: "baptist",
    who: "Tradición bautista",
    lang: "es",
    text: "La Cena del Señor es un acto simbólico de obediencia por el cual los miembros de la iglesia recuerdan la muerte del Redentor.",
  }),
  passage("P5", { who: "Justino Mártir", author: "justin", maxQuoteWords: 40, text: justin }),
  passage("P6", { who: "Someone", text: gapText }),
  passage("P7", {
    collection: "mine",
    speaker: "reader",
    who: "Tu nota",
    locatorLabel: "Juan 3:5",
    licence: "reader",
    maxQuoteWords: 200,
    text: "Nacer del agua es el bautismo, y por eso la iglesia bautista es la verdadera.",
  }),
];

const names = fatherNameForms(["Ignatius of Antioch", "Ignacio de Antioquía", "Justin Martyr", "Justino Mártir"]);
const options = { depth: "rich", fatherNames: names };
const quotedForProse = [
  { about: "bible", quotes: ["P1", "P2", "P3", "P4", "P5"].map((passage) => ({ passage, quote: "" })) },
];
const model = (fields) => ({
  kind: "evidence",
  sections: fields.prose ? quotedForProse : [],
  words: [],
  prose: "",
  followups: [],
  ...fields,
});
const section = (about, ...quotes) => ({ about, quotes: quotes.map(([passage, quote]) => ({ passage, quote })) });
const run = (fields, opts = options) => verifyAnswer(model(fields), pack, opts);
const shown = (verified) => verified.sections.flatMap((s) => s.quotes);

let checks = 0;
function check(name, fn) {
  try {
    fn();
    checks += 1;
  } catch (error) {
    throw new Error(`check-answer: ${name}: ${error.message}`);
  }
}

check("wire quotes carry the site's date for Fathers and cited sources, never for verses", () => {
  const wire = (p) => wireQuote(p, leadSlice(p), "es");
  const [bible, father, , , undatedFather] = [pack[0], pack[1], pack[2], pack[3], pack[4]];
  assert.equal(wire(bible).date, undefined);
  assert.deepEqual(wire(father).date, { label: "c. 107–110", start: 107, end: 110 });
  assert.equal(wire(undatedFather).date, undefined);
  const cited = passage("P8", {
    collection: "tradition",
    speaker: "catholic",
    key: "tradition:eucharist:catholic:cite:CEC1336:0:es",
    father: null,
    text: "El primer anuncio de la Eucaristía dividió a los discípulos.",
  });
  assert.deepEqual(wire(cited).date, { label: "1992/1997", start: 1992, end: null });
  assert.equal(wire(pack[2]).date, undefined);
});

check("literal quote accepted", () => {
  const v = run({ sections: [section("fathers", ["P2", "They abstain from eucharist (thanksgiving) and prayer"])] });
  assert.equal(shown(v).length, 1);
  assert.equal(v.failed.length, 0);
});
check("case differs, display keeps the edition and ends the sentence", () => {
  const v = run({ sections: [section("fathers", ["P2", "they abstain from EUCHARIST (thanksgiving) and prayer"])] });
  assert.ok(shown(v)[0].text.startsWith("They abstain from eucharist (thanksgiving) and prayer"));
  assert.ok(shown(v)[0].text.endsWith("raised up."), shown(v)[0].text);
});
check("curly quotes accepted", () => {
  const v = run({ sections: [section("fathers", ["P5", '"This do ye in remembrance of Me, this is My body."'])] });
  assert.equal(shown(v).length, 1);
});
check("anchors: first and last words give one continuous literal span", () => {
  const v = run({
    sections: [section("fathers", ["P2", "They abstain from eucharist … the flesh of our Saviour"])],
  });
  const text = shown(v)[0].text;
  assert.ok(!text.includes("[…]"));
  assert.ok(text.startsWith("They abstain") && text.includes("flesh of our Saviour Jesus Christ"), text);
  assert.ok(ignatius.includes(text));
});
check("anchor starting mid-sentence snaps back to the sentence start", () => {
  const span = anchoredSpan(ignatius, "none for the orphan, none", 80);
  assert.ok(ignatius.slice(span[0], span[1]).startsWith("They have no care for love"));
  assert.ok(ignatius.slice(span[0], span[1]).endsWith("thirsty."));
});
check("an anchor that is not in the passage falls back to the server's excerpt", () => {
  const v = run({ sections: [section("fathers", ["P2", "invented words for this test only"])] });
  assert.equal(shown(v).length, 1);
  assert.equal(v.anchorMisses, 1);
  assert.ok(ignatius.includes(shown(v)[0].text));
});
check("empty anchor: the server picks whole sentences with the terms", () => {
  const span = bestSpan(ignatius, ["eucharist", "flesh"], [], 80);
  assert.ok(ignatius.slice(span[0], span[1]).includes("They abstain from eucharist"));
  const short = bestSpan(justin, ["bread"], [], 40);
  assert.ok(justin.slice(short[0], short[1]).split(/\s+/).length <= 40);
});
check("wrong passage id", () => {
  const v = run({ sections: [section("fathers", ["P99", "They abstain from eucharist (thanksgiving) and prayer"])] });
  assert.equal(v.failed[0]?.reason, "unknown-passage");
});
check("quote over maxQuoteWords cut at a sentence", () => {
  const v = run({ sections: [section("fathers", ["P5", justin.slice(0, 600)])] });
  const words = shown(v)[0].text.split(/\s+/).length;
  assert.ok(words <= 40, `got ${words} words`);
  assert.ok(shown(v)[0].text.endsWith(";"), shown(v)[0].text);
});
check("window offset maps to the full passage", () => {
  const v = run({ sections: [section("bible", ["P1", "Si no comiereis la carne del Hijo del hombre"])] });
  const q = shown(v)[0];
  assert.equal(verse.slice(q.start, q.end), q.text);
  assert.ok(q.text.includes("Si no comiereis la carne del Hijo del hombre"));
});
check("verdict sentence removed (es)", () => {
  const v = run({
    sections: [section("fathers", ["P2", "They abstain from eucharist (thanksgiving) and prayer"], ["P3", ""])],
    prose: "Ignacio habla de la eucaristía {P2}. Claramente tiene razón la Iglesia {P3}.",
  });
  assert.equal(v.prose, "Ignacio habla de la eucaristía {P2}.");
  assert.equal(v.removed[0]?.reason, "verdict");
});
check("verdict sentence removed (en)", () => {
  const v = run({ prose: "This proves the real presence {P2}. Justin speaks of bread {P5}." });
  assert.equal(v.prose, "Justin speaks of bread {P5}.");
});
check("heresy inside a quote is not a verdict", () => {
  assert.equal(verdictHit("Trento usa la palabra «herejía» en el canon {P3}."), null);
  assert.ok(verdictHit("Eso es herejía {P3}."));
});
check("Father assigned to a tradition removed", () => {
  const v = run({ prose: "Ignacio, obispo católico, escribe sobre la carne {P2}. Justino describe el pan {P5}." });
  assert.equal(v.prose, "Justino describe el pan {P5}.");
  assert.equal(v.removed[0]?.reason, "father-assigned");
});
check("a tradition's document quoting a Father is kept", () => {
  assert.equal(fatherAssignmentHit("El Catecismo católico cita a Ignacio de Antioquía {P3}.", names), null);
});
check("section moved to the speaker's tradition", () => {
  const v = run({ sections: [section("fathers", ["P3", "La Eucaristía es fuente y cima de toda la vida cristiana"])] });
  assert.equal(v.sections[0].about, "tradition:catholic");
});
check("note outside mine dropped, not moved", () => {
  const v = run({ sections: [section("tradition:baptist", ["P7", "Nacer del agua es el bautismo"])] });
  assert.equal(shown(v).length, 0);
  assert.equal(v.failed[0]?.reason, "note-outside-mine");
});
check("note in mine accepted and last", () => {
  const v = run({
    sections: [
      section("mine", ["P7", "Nacer del agua es el bautismo"]),
      section("fathers", ["P2", "They abstain from eucharist (thanksgiving) and prayer"]),
    ],
  });
  assert.deepEqual(
    v.sections.map((s) => s.about),
    ["fathers", "mine"],
  );
});
check("prose citing a note with a source removed", () => {
  const v = run({
    sections: [section("mine", ["P7", "Nacer del agua es el bautismo"])],
    prose: "Tu nota y la Iglesia bautista dicen lo mismo {P7}{P4}.",
  });
  assert.equal(v.prose, "");
  assert.equal(v.removed[0]?.reason, "note-as-source");
});
check("prose citing only a note as the reader's note kept", () => {
  const v = run({
    sections: [section("mine", ["P7", "Nacer del agua es el bautismo"])],
    prose: "En tu nota de Juan 3:5 planteaste el nacimiento del agua {P7}.",
  });
  assert.equal(v.prose, "En tu nota de Juan 3:5 planteaste el nacimiento del agua {P7}.");
});
check("a prose citation of a passage that is not shown is dropped", () => {
  const v = run({
    sections: [section("fathers", ["P2", "They abstain from eucharist (thanksgiving) and prayer"])],
    prose: "Ignacio habla de la eucaristía {P2}. Justino describe el pan {P5}.",
  });
  assert.equal(v.prose, "Ignacio habla de la eucaristía {P2}.");
});
check("sentence without a citation removed", () => {
  const v = run({ prose: "Ignacio escribe a Esmirna. Justino describe el pan {P5}." });
  assert.equal(v.prose, "Justino describe el pan {P5}.");
});
check("unknown token dropped with its sentence", () => {
  const v = run({ prose: "Alguien lo dice {P42}. Justino describe el pan {P5}." });
  assert.equal(v.prose, "Justino describe el pan {P5}.");
});
check("token after the period kept with its sentence", () => {
  const v = run({ prose: "Justino describe el pan. {P5} Ignacio habla de la carne. {P2}" });
  assert.equal(v.prose, "Justino describe el pan {P5}. Ignacio habla de la carne {P2}.");
});
check("prose over 150 words cut at a sentence", () => {
  const long = Array.from(
    { length: 12 },
    (_, i) => `Justino describe el pan y el vino en la frase número ${i} {P5}.`,
  ).join(" ");
  const v = run({ prose: long });
  const words = v.prose
    .replace(/\{P\d+\}/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  assert.ok(words <= 150 && words > 100, `got ${words}`);
});
check("brief caps quotes at 6 and prose at 60 words", () => {
  const quotes = [
    ["P1", "Si no comiereis la carne del Hijo"],
    ["P2", "They abstain from eucharist (thanksgiving) and prayer"],
    ["P3", "La Eucaristía es fuente y cima"],
    ["P4", "La Cena del Señor es un acto simbólico"],
    ["P5", "For not as common bread and common drink"],
    ["P6", "Alpha beta gamma delta epsilon"],
    ["P2", "none for the widow, none for the orphan"],
  ];
  const v = run({ sections: quotes.map((q) => section("fathers", q)) }, { ...options, depth: "brief" });
  assert.equal(shown(v).length, 6);
});
check("duplicate passage quoted once", () => {
  const v = run({
    sections: [
      section(
        "fathers",
        ["P2", "They abstain from eucharist (thanksgiving) and prayer"],
        ["P2", "none for the widow, none for the orphan"],
      ),
    ],
  });
  assert.equal(shown(v).length, 1);
});
const topUpOptions = { ...options, terms: ["eucharist", "Eucaristía", "Cena", "carne"], phrases: [] };
check("top-up: once the answer shows a tradition, every tradition in the pack gets two passages", () => {
  const extra = [
    passage("P8", {
      collection: "tradition",
      speaker: "catholic",
      lang: "es",
      text: "Cristo está presente en la Eucaristía de modo verdadero, real y sustancial.",
    }),
    passage("P9", {
      collection: "tradition",
      speaker: "baptist",
      lang: "es",
      text: "La Cena del Señor recuerda la muerte de Cristo hasta que él venga.",
    }),
  ];
  const v = verifyAnswer(
    model({
      sections: [section("fathers", ["P2", "They abstain from eucharist"]), section("tradition:catholic", ["P3", ""])],
    }),
    [...pack, ...extra],
    {
      ...topUpOptions,
      topUp: { namedAuthors: false, namedTraditions: false },
    },
  );
  const abouts = shown(v).map((q) => (q.passage.collection === "tradition" ? q.passage.speaker : q.passage.collection));
  assert.equal(abouts.filter((a) => a === "catholic").length, 2);
  assert.equal(abouts.filter((a) => a === "baptist").length, 2);
  assert.ok(!abouts.includes("mine"));
  assert.ok(v.toppedUp >= 3);
  for (const q of shown(v)) assert.ok(q.passage.window.includes(q.text));
});
check("top-up: never adds a tradition section the model left out", () => {
  const v = run(
    { sections: [section("fathers", ["P2", "They abstain from eucharist"])] },
    { ...topUpOptions, topUp: { namedAuthors: false, namedTraditions: false } },
  );
  assert.ok(shown(v).every((q) => q.passage.collection === "fathers"));
});
check("top-up: a named author keeps traditions out", () => {
  const v = run(
    { sections: [section("fathers", ["P2", "They abstain from eucharist"])] },
    { ...topUpOptions, topUp: { namedAuthors: true, namedTraditions: false } },
  );
  assert.ok(shown(v).every((q) => q.passage.collection !== "tradition"));
});
check("top-up: never for brief or not found, never without the option", () => {
  const thin = { sections: [section("fathers", ["P2", "They abstain from eucharist"])] };
  const focus = { namedAuthors: false, namedTraditions: false };
  assert.equal(run(thin, { ...topUpOptions, depth: "brief", topUp: focus }).toppedUp, 0);
  assert.equal(run({ kind: "not_found" }, { ...topUpOptions, topUp: focus }).toppedUp, 0);
  assert.equal(run(thin).toppedUp, 0);
});
check("a reference abbreviation does not split a prose sentence", () => {
  const v = run({
    prose: "Fe y Mensaje Bautistas (art. VII) llama a la Cena un acto simbólico {P4}. Justino describe el pan {P5}.",
  });
  assert.equal(
    v.prose,
    "Fe y Mensaje Bautistas (art. VII) llama a la Cena un acto simbólico {P4}. Justino describe el pan {P5}.",
  );
});
check("the server's excerpt does not start or end inside a reference like «art. VII»", () => {
  const text =
    "Según Fe y Mensaje Bautistas (art. VII), los miembros participan del pan y del fruto de la vid. La misma sección presenta el bautismo como requisito.";
  const span = bestSpan(text, ["pan", "vid"], [], 80);
  assert.ok(text.slice(span[0], span[1]).startsWith("Según Fe y Mensaje Bautistas (art. VII)"));
});
check("disputed: blocks and words together stay within 24", () => {
  const many = Array.from({ length: 30 }, (_, i) =>
    passage(`P${i + 10}`, { text: `Common words of passage number ${i} for the cap test here` }),
  );
  const v = verifyAnswer(
    model({
      kind: "disputed",
      sections: [section("fathers", ...many.map((p, i) => [p.id, `Common words of passage number ${i}`]))],
      words: [{ tradition: "catholic", passage: "P3", words: "fuente y cima", quote: "" }],
    }),
    [...pack, ...many],
    options,
  );
  assert.equal(shown(v).length + v.words.length, 24);
});
check("a word ending in an accented letter plus «n.» still ends its sentence", () => {
  const v = run({
    prose: "No corresponde decidir quién tiene razón; solo se muestra cada tradición. Justino describe el pan {P5}.",
  });
  assert.equal(v.prose, "Justino describe el pan {P5}.");
});
check("a Father's quotation of a verse is cut together with the comment that follows it", () => {
  const text =
    "And we ask that this bread should be given to us daily. “I am the bread of life which came down from heaven. If any man eat of my bread, he shall live for ever.” When, therefore, He says, that whoever shall eat of His bread shall live for ever; as it is manifest that those who partake of His body and receive the Eucharist are living, so we must fear lest any one should remain at a distance from salvation.";
  const span = bestSpan(text, ["bread", "eat", "eucharist"], [], 80);
  assert.ok(text.slice(span[0], span[1]).includes("receive the Eucharist are living"), text.slice(span[0], span[1]));
});
check("an excerpt that is only a quotation grows until it reaches the comment", () => {
  const text =
    "And then it is written: “All we who were baptized into Christ were baptized into His death.” So he shows that the font is a grave.";
  const end = text.indexOf("” So") + 1;
  const span = withCommentary(text, [0, end], 80);
  assert.ok(text.slice(span[0], span[1]).includes("the font is a grave"));
});
check("prose in the wrong language is removed", () => {
  const v = run(
    { prose: "Los textos católicos citan la definición del Catecismo sobre la Eucaristía y también la carne {P3}." },
    { ...options, language: "en" },
  );
  assert.equal(v.prose, "");
  assert.equal(v.removed[0]?.reason, "language");
});
check("disputed words verified, bad ones dropped", () => {
  const v = run({
    kind: "disputed",
    sections: [section("tradition:catholic", ["P3", "La Eucaristía es fuente y cima"])],
    words: [
      {
        tradition: "catholic",
        passage: "P3",
        words: "fuente y cima",
        quote: "La Eucaristía es fuente y cima de toda la vida cristiana",
      },
      {
        tradition: "baptist",
        passage: "P4",
        words: "un acto simbólico de obediencia por el cual los miembros",
        quote: "La Cena del Señor es un acto simbólico de obediencia",
      },
      { tradition: "baptist", passage: "P3", words: "fuente y cima", quote: "La Eucaristía es fuente y cima" },
    ],
  });
  assert.equal(v.words.length, 1);
  assert.equal(v.words[0].tradition, "catholic");
});
check("mapping: a words quote is the id of a quote in quotes, with the verified words inside", () => {
  const v = run({
    kind: "disputed",
    sections: [section("tradition:catholic", ["P3", "La Eucaristía es fuente y cima"])],
    words: [
      {
        tradition: "catholic",
        passage: "P3",
        words: "fuente y cima",
        quote: "La Eucaristía es fuente y cima de toda la vida cristiana",
      },
    ],
  });
  const wire = mapAnswer({ verified: v, passages: pack, question: "q", scope: "s", locale: "es", more: false });
  assert.equal(wire.kind, "disputed");
  assert.equal(wire.words.length, 1);
  const quote = wire.quotes[wire.words[0].quote];
  assert.ok(quote);
  assert.equal(quote.id, wire.words[0].quote);
  assert.ok(quote.text.includes(wire.words[0].words));
});
check("words accept a prefixed tradition id", () => {
  const v = run({
    kind: "disputed",
    sections: [section("tradition:catholic", ["P3", "La Eucaristía es fuente y cima"])],
    words: [
      {
        tradition: "tradition:catholic",
        passage: "P3",
        words: "fuente y cima",
        quote: "La Eucaristía es fuente y cima",
      },
    ],
  });
  assert.equal(v.words[0]?.tradition, "catholic");
});
check("a sentence about the pack is removed", () => {
  const v = run({ prose: "Justino describe el pan {P5}. El pack no indica qué textos cita cada tradición {P2}." });
  assert.equal(v.prose, "Justino describe el pan {P5}.");
  assert.equal(v.removed[0]?.reason, "meta");
});
check("fair cap keeps every tradition", () => {
  const many = Array.from({ length: 30 }, (_, i) =>
    passage(`P${i + 10}`, { text: `Common words of passage number ${i} for the fair cap test here` }),
  );
  const v = verifyAnswer(
    model({
      sections: [
        section("fathers", ...many.map((p, i) => [p.id, `Common words of passage number ${i}`])),
        section("tradition:catholic", ["P3", "La Eucaristía es fuente y cima"]),
        section("tradition:baptist", ["P4", "La Cena del Señor es un acto simbólico"]),
      ],
    }),
    [...pack, ...many],
    options,
  );
  assert.equal(shown(v).length, 24);
  assert.ok(v.sections.some((s) => s.about === "tradition:baptist"));
});
check("mapping: tokens, heads, consulted, context", () => {
  const v = run({
    sections: [
      section(
        "fathers",
        ["P2", "They abstain from eucharist (thanksgiving) and prayer"],
        ["P5", "For not as common bread and common drink"],
      ),
      section("mine", ["P7", "Nacer del agua es el bautismo"]),
    ],
    prose: "Ignacio habla de la eucaristía {P2}.",
  });
  const wire = mapAnswer({ verified: v, passages: pack, question: "q", scope: "s", locale: "es", more: false });
  assert.equal(wire.prose, "Ignacio habla de la eucaristía {q:q2}.");
  assert.deepEqual(wire.blocks, [
    { quote: "q2", head: "Padres de la Iglesia" },
    { quote: "q5" },
    { quote: "q7", head: "Tus notas" },
  ]);
  assert.ok(!wire.consulted.includes("q7"));
  assert.equal(wire.consulted.length, 6);
  assert.equal(wire.quotes.q2.father.workId, "ignatius-smyrnaeans");
  assert.ok(wire.quotes.q2.context.before.length <= 200 && wire.quotes.q2.context.before.endsWith("thirsty. "));
  assert.equal(wire.quotes.q1.bible.verse, 53);
  assert.match(wire.quotes.q1.href, /^\/es\/biblia\/juan\/6#v-53$/);
  assert.ok(wire.quotes.q3.text.length > 0);
});
check("mapping: not found gives the plain text", () => {
  const v = run({ kind: "not_found" });
  const wire = mapAnswer({ verified: v, passages: pack, question: "q", scope: "s", locale: "es", more: true });
  assert.equal(wire.kind, "not_found");
  assert.match(wire.plain, /No encontré pasajes/);
  assert.equal(wire.blocks.length, 0);
});
check("mapping: disputed carries the fixed text and words", () => {
  const v = run({
    kind: "disputed",
    sections: [section("tradition:catholic", ["P3", "La Eucaristía es fuente y cima"])],
    words: [{ tradition: "catholic", passage: "P3", words: "fuente y cima", quote: "La Eucaristía es fuente y cima" }],
    prose: "La Iglesia católica cita su definición {P3}.",
  });
  const wire = mapAnswer({ verified: v, passages: pack, question: "q", scope: "s", locale: "es", more: false });
  assert.match(wire.disputed, /no decide quién tiene razón/);
  assert.equal(wire.words[0].tradition, "Iglesia católica");
});
check("coverage line names gaps and missing authors", () => {
  const line = coverageLine(
    {
      collections: [],
      traditions: [
        { tradition: "catholic", status: "found" },
        { tradition: "baptist", status: "none" },
        { tradition: "pentecostal", status: "no-page" },
      ],
      doctrines: ["eucharist"],
      missingAuthors: ["Juan Damasceno"],
      bibleEdition: "rv1909",
      fatherWorks: 172,
    },
    { scope: "all" },
    "es",
  );
  assert.match(
    line,
    /^Buscó en la Biblia \(.+\), 172 obras de los Padres y los documentos de 2 tradiciones sobre la Eucaristía\./,
  );
  assert.match(line, /Sin textos de: bautista, pentecostal \(no hay página todavía\)\./);
  assert.match(line, /Doctrina no tiene obras de Juan Damasceno todavía\./);
});
const planBase = {
  intent: "evidence",
  answerLanguage: "es",
  doctrines: [],
  traditions: [],
  termsEn: [],
  phrasesEn: [],
  termsEs: [],
  phrasesEs: [],
  bibleRefs: [],
  authors: [],
  works: [],
  followsPrevious: false,
  depth: "rich",
  sources: [],
  traditionGroups: [],
  era: "any",
};
check("plan scope: a tradition group expands and implies the traditions source", () => {
  const { plan } = clampPlan({ ...planBase, traditionGroups: ["protestant"] }, [], "y los protestantes?");
  assert.deepEqual(plan.traditions, ["lutheran", "reformed", "baptist", "pentecostal"]);
  assert.deepEqual(plan.sources, ["traditions"]);
});
check("plan scope: authors the question does not name are dropped", () => {
  const authors = [
    {
      id: "augustine-of-hippo",
      name: "Agustín de Hipona",
      names: { es: "Agustín de Hipona", en: "Augustine of Hippo" },
      works: [],
    },
  ];
  assert.deepEqual(
    clampPlan({ ...planBase, authors: ["augustine-of-hippo"] }, authors, "¿Qué dicen los Padres?").plan.authors,
    [],
  );
  assert.deepEqual(
    clampPlan({ ...planBase, authors: ["augustine-of-hippo"] }, authors, "¿Qué dice Agustín?").plan.authors,
    ["augustine-of-hippo"],
  );
});
check("plan clamp drops unknown authors and long lists", () => {
  const { plan, unknownAuthors } = clampPlan(
    {
      intent: "evidence",
      answerLanguage: "es",
      doctrines: ["eucharist", "eucharist"],
      traditions: [],
      termsEn: Array.from({ length: 12 }, (_, i) => `term${i}`),
      phrasesEn: [],
      termsEs: ["x".repeat(120)],
      phrasesEs: [],
      bibleRefs: [],
      authors: ["ignatius", "Juan Damasceno"],
      works: ["nonexistent-work"],
      followsPrevious: false,
      depth: "rich",
    },
    [
      {
        id: "ignatius",
        name: "Ignatius of Antioch",
        works: [{ id: "ignatius-smyrnaeans", title: "To the Smyrnaeans" }],
      },
    ],
  );
  assert.deepEqual(plan.authors, ["ignatius"]);
  assert.deepEqual(unknownAuthors, ["Juan Damasceno"]);
  assert.equal(plan.termsEn.length, 8);
  assert.equal(plan.termsEs[0].length, 80);
  assert.deepEqual(plan.works, []);
  assert.deepEqual(plan.doctrines, ["eucharist"]);
});
check("pastoral pre-filter", () => {
  assert.equal(isPastoral("Quiero confesarme, ¿me das la absolución de mis pecados?"), true);
  assert.equal(isPastoral("Please pray for me"), true);
  assert.equal(isPastoral("¿Qué dice Ignacio sobre la Eucaristía?"), false);
  assert.equal(isPastoral("¿Qué dicen los Padres sobre la bendición del pan?"), false);
  assert.equal(isPastoral("Is baptism absolutely necessary for salvation?"), false);
});
check("answer user text carries the passage blocks", () => {
  const user = answerUser(
    { question: "¿Qué dice Ignacio?", history: [] },
    { intent: "verdict_request", depth: "rich", answerLanguage: "es" },
    pack.slice(1, 2),
  );
  assert.match(user, /^intent: verdict_request$/m);
  assert.match(user, /<passage id="P2" collection="fathers" who="Ignacio de Antioquía"/);
});

const extra = Array.from({ length: 11 }, (_, i) =>
  passage(`P${i + 40}`, { text: `Extra passage ${i} opens with this sentence. Then it goes on for a while longer.` }),
);
const storedId = await getAiStore().putAnswer({
  cacheKey: null,
  locale: "es",
  promptVersion: "x",
  models: {},
  corpusVersion: "fixture",
  answer: mapAnswer({ verified: run({}), passages: pack, question: "q", scope: "s", locale: "es", more: true }),
  pack: { extra },
});
const firstPage = await askMore(storedId, 0);
const secondPage = await askMore(storedId, 8);
check("more returns 8 literal blocks, then the rest", () => {
  assert.equal(firstPage.blocks.length, 8);
  assert.equal(firstPage.more, true);
  for (const block of firstPage.blocks) {
    const source = extra.find((p) => `q${p.id.slice(1)}` === block.quote);
    assert.ok(source.text.startsWith(firstPage.quotes[block.quote].text));
  }
  assert.equal(firstPage.blocks[0].head, "Padres de la Iglesia");
  assert.equal(secondPage.blocks.length, 3);
  assert.equal(secondPage.more, false);
});
let missing = null;
await askMore("unknown", 0).catch((error) => (missing = error.code));
check("more on an expired answer is ai_not_found", () => assert.equal(missing, "ai_not_found"));
check("pastoral in English", () => assert.equal(isPastoral("Can you pray for my mother? She is very ill."), true));

const notePack = [
  ...pack,
  passage("P20", {
    key: "mine:1",
    collection: "mine",
    speaker: "reader",
    text: "¿Qué significan “carne” y “sangre” acá?",
  }),
  passage("P21", {
    key: "mine:2",
    collection: "mine",
    speaker: "reader",
    text: "Para mí esto es simbólico: Jesús no habla de comer su cuerpo de verdad.",
  }),
];
const sentNotes = [
  { text: "¿Qué significan “carne” y “sangre” acá?", ref: "Juan 6:53" },
  { text: "Para mí esto es simbólico: Jesús no habla de comer su cuerpo de verdad.", ref: "Juan 6:63" },
];
const answered = verifyAnswer(model({ sections: [section("fathers", ["P2", ""])] }), notePack, options);
const follow = (passage, kind, verified = answered, locale = "es") =>
  noteFollowup(model({ noteFollowup: { passage, kind } }), verified, notePack, sentNotes, locale);
check(
  "note follow-up: a question note gets option A's sentence and option B's suggestion, with the note's own words",
  () => {
    const note = follow("P20", "question");
    assert.equal(
      `${note.before}${note.ref}${note.after}`,
      "Vi tu nota de Juan 6:53, «¿Qué significan “carne” y “sangre” acá?». ¿Querés que lo analicemos?",
    );
    assert.equal(note.suggestion, "Tu nota de Juan 6:53: ¿qué significan “carne” y “sangre” acá?");
    assert.equal(note.question, "Juan 6:53, tu nota: ¿qué significan “carne” y “sangre” acá?");
  },
);
check("note follow-up: a doctrinal claim gets the invitation to see the traditions, never a correction", () => {
  const note = follow("P21", "claim");
  assert.ok(note.after.endsWith("¿Querés ver qué dicen las tradiciones sobre lo que escribiste?"));
  assert.equal(note.suggestion, "Tu nota de Juan 6:63: ¿qué dicen las tradiciones sobre lo que escribiste?");
});
check("note follow-up: none, a source id, an unknown id or a not found answer show nothing", () => {
  assert.equal(follow("", "none"), null);
  assert.equal(follow("P2", "question"), null);
  assert.equal(follow("P99", "claim"), null);
  assert.equal(follow("P20", "question", verifyAnswer(model({ kind: "not_found" }), notePack, options)), null);
});
check("note follow-up: long notes are cut at 80 characters with an ellipsis, English copy", () => {
  assert.equal(noteExcerpt("a".repeat(100)), `${"a".repeat(79)}…`);
  const note = follow("P20", "question", answered, "en");
  assert.ok(note.before.startsWith("I saw your note on") && note.suggestion.startsWith("Your note on Juan 6:53:"));
});

console.log(`ok ${checks} checks`);
