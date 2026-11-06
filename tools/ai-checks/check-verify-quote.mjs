import { verifyQuote } from "@/lib/ai/verify-quote";
import { normalize } from "@/lib/ai/normalize";

const justin = `And this food is called among us Εὐχαριστία [the Eucharist], of which no one is allowed to partake but the man who believes that the things which we teach are true, and who has been washed with the washing that is for the remission of sins, and unto regeneration, and who is so living as Christ has enjoined. For not as common bread and common drink do we receive these; but in like manner as Jesus Christ our Saviour, having been made flesh by the Word of God, had both flesh and blood for our salvation, so likewise have we been taught that the food which is blessed by the prayer of His word, and from which our blood and flesh by transmutation are nourished, is the flesh and blood of that Jesus who was made flesh. For the apostles, in the memoirs composed by them, which are called Gospels, have thus delivered unto us what was enjoined upon them; that Jesus took bread, and when He had given thanks, said, “This do ye in remembrance of Me, this is My body;”`;
const spanish = "dijo: «Haced esto en memoria de Mí, esto es mi cuerpo»; y que";
const ignatius =
  "But mark ye those who hold strange doctrine touching the grace of Jesus Christ which came to us, how that they are contrary to the mind of God. They have no care for love, none for the widow, none for the orphan, none for the afflicted, none for the prisoner, none for the hungry or thirsty. They abstain from eucharist (thanksgiving) and prayer, because they allow not that the eucharist is the flesh of our Saviour Jesus Christ, which flesh suffered for our sins, and which the Father of His goodness raised up.";
const hyphenated =
  "the doctrine of the real presence was taught by the apos-\n  tles and their succes-\nsors in every church";
const ligature = "The Æon of the Word and the Œconomy of salvation were proclaimed to all";
const gapPassage = `Alpha beta gamma delta epsilon ${"filler ".repeat(120)}zeta eta theta iota kappa`;
const spacedLong = "First segment of the quote here and " + "padding ".repeat(30) + "second segment of the quote ends";

const cases = [
  ["literal", justin, "For not as common bread and common drink do we receive these", { ok: true }],
  ["lower case", justin, "for not as common bread and common drink do we receive these", { ok: true }],
  ["brackets dropped", justin, "called among us Εὐχαριστία the Eucharist, of which no one", { ok: true }],
  ["Greek kept", justin, "called among us Εὐχαριστία", { ok: true }],
  ["Greek changed", justin, "called among us Ευχαριστια the Eucharist", { ok: false, reason: "not-found" }],
  [
    "ellipsis two segments",
    justin,
    "the food which is blessed by the prayer of His word ... is the flesh and blood of that Jesus who was made flesh",
    { ok: true, spans: 2 },
  ],
  [
    "bracket ellipsis",
    justin,
    "the food which is blessed by the prayer of His word […] is the flesh and blood of that Jesus",
    { ok: true, spans: 2 },
  ],
  ["angle quote around", justin, "«This do ye in remembrance of Me, this is My body»", { ok: true }],
  ["curly quotes in passage", justin, '"This do ye in remembrance of Me, this is My body"', { ok: true }],
  ["Spanish angle quotes", spanish, '"Haced esto en memoria de Mí, esto es mi cuerpo"', { ok: true }],
  [
    "Spanish accent differs",
    spanish,
    "Haced esto en memoria de Mi, esto es mi cuerpo",
    { ok: false, reason: "not-found" },
  ],
  [
    "paraphrase rejected",
    justin,
    "the food which is blessed is the flesh and blood of Jesus",
    { ok: false, reason: "not-found" },
  ],
  ["inserted word rejected", justin, "is the real flesh and blood of that Jesus", { ok: false, reason: "not-found" }],
  ["three words too short", justin, "of that Jesus", { ok: false, reason: "too-short" }],
  ["empty", justin, "   ", { ok: false, reason: "too-short" }],
  [
    "short segment too short",
    justin,
    "the food which ... flesh and blood of that Jesus who",
    { ok: false, reason: "too-short" },
  ],
  [
    "three segments",
    justin,
    "the food which is blessed ... is the flesh and blood ... of that Jesus who was made flesh",
    { ok: false, reason: "too-many-segments" },
  ],
  [
    "gap over 400",
    gapPassage,
    "Alpha beta gamma delta epsilon ... zeta eta theta iota kappa",
    { ok: false, reason: "gap-too-long" },
  ],
  [
    "gap under 400",
    spacedLong,
    "First segment of the quote here and ... second segment of the quote ends",
    { ok: true, spans: 2 },
  ],
  [
    "segments out of order",
    justin,
    "is the flesh and blood of that Jesus ... For not as common bread and common drink",
    { ok: false, reason: "not-found" },
  ],
  ["ligature folded", ligature, "The Aeon of the Word and the Oeconomy of salvation", { ok: true }],
  ["hyphenation joined", hyphenated, "taught by the apostles and their successors in every church", { ok: true }],
  [
    "Ignatius Smyrn 6.2",
    ignatius,
    "because they allow not that the eucharist is the flesh of our Saviour Jesus Christ",
    { ok: true },
  ],
  [
    "dash folded",
    "He said — and meant it — that the bread is the body of Christ",
    "He said - and meant it - that the bread",
    { ok: true },
  ],
];

const failures = [];
for (const [name, passage, quote, expected] of cases) {
  const result = verifyQuote(passage, quote);
  if (result.ok !== expected.ok) failures.push(`${name}: expected ok=${expected.ok}, got ${JSON.stringify(result)}`);
  else if (!result.ok && result.reason !== expected.reason)
    failures.push(`${name}: expected ${expected.reason}, got ${result.reason}`);
  else if (result.ok && expected.spans && result.spans.length !== expected.spans)
    failures.push(`${name}: expected ${expected.spans} spans`);
}

const shown = verifyQuote(justin, "“This do ye in remembrance of Me, this is My body;”");
if (!shown.ok || !shown.display.startsWith("This do ye in remembrance of Me, this is My body"))
  failures.push("display is not the original slice");
const joined = verifyQuote(
  justin,
  "the food which is blessed by the prayer of His word … is the flesh and blood of that Jesus",
);
if (!joined.ok || !joined.display.includes(" […] ") || !justin.includes(joined.display.split(" […] ")[0]))
  failures.push("display of an ellipsis quote is wrong");
if (normalize("Æ").text !== "ae") failures.push("ligature not folded");
if (normalize("a  \n b").text !== "a b") failures.push("whitespace not collapsed");
const big = justin.repeat(40);
const started = performance.now();
for (let i = 0; i < 50; i += 1) verifyQuote(big, "is the flesh and blood of that Jesus who was made flesh");
const perCall = (performance.now() - started) / 50;
if (perCall > 50) failures.push(`verify took ${perCall.toFixed(1)} ms on ${big.length} chars`);

if (failures.length) throw new Error(failures.join("\n"));
console.log(`ok ${cases.length + 5} checks`);
