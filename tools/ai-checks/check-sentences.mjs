import { splitSentences } from "@/lib/ai/sentences";
import { canSimplify } from "@/lib/ai/simplify-limits";

const cases = [
  [
    "two plain sentences",
    "La Eucaristía es un sacramento. Los católicos la reciben cada domingo.",
    ["La Eucaristía es un sacramento.", "Los católicos la reciben cada domingo."],
  ],
  [
    "question and exclamation",
    "¿Qué es esto? ¡Es el cuerpo de Cristo! Nadie lo duda.",
    ["¿Qué es esto?", "¡Es el cuerpo de Cristo!", "Nadie lo duda."],
  ],
  ["english", "He took bread. He gave thanks. He broke it.", ["He took bread.", "He gave thanks.", "He broke it."]],
  ["semicolon before capital", "Tomó el pan; Dio gracias y lo partió.", ["Tomó el pan;", "Dio gracias y lo partió."]],
  ["semicolon before lowercase", "Tomó el pan; dio gracias y lo partió.", ["Tomó el pan; dio gracias y lo partió."]],
  [
    "article abbreviation",
    "Así lo dice Fe y Mensaje (art. VII), sobre la Cena. Otros no coinciden.",
    ["Así lo dice Fe y Mensaje (art. VII), sobre la Cena.", "Otros no coinciden."],
  ],
  [
    "locator number",
    "Ignatius, Smyrn. 6.2 says they abstain from the eucharist. Then he warns the church.",
    ["Ignatius, Smyrn. 6.2 says they abstain from the eucharist.", "Then he warns the church."],
  ],
  [
    "decimal inside",
    "El capítulo 6.2 trata del pan. El 6.3 trata del vino.",
    ["El capítulo 6.2 trata del pan.", "El 6.3 trata del vino."],
  ],
  [
    "p. ej.",
    "Hay figuras, p. ej. Isaac, que prefiguran a Cristo. Otras no lo hacen.",
    ["Hay figuras, p. ej. Isaac, que prefiguran a Cristo.", "Otras no lo hacen."],
  ],
  [
    "etc.",
    "Pan, vino, agua, etc. Los Padres los mencionan. Todos coinciden en el uso.",
    ["Pan, vino, agua, etc. Los Padres los mencionan.", "Todos coinciden en el uso."],
  ],
  [
    "cf.",
    "Así lo enseña Agustín (cf. Sermón 272). La Iglesia lo repite.",
    ["Así lo enseña Agustín (cf. Sermón 272).", "La Iglesia lo repite."],
  ],
  [
    "St.",
    "St. Augustine wrote of the sign. He called it a figure.",
    ["St. Augustine wrote of the sign.", "He called it a figure."],
  ],
  [
    "ch. and vol.",
    "See ch. 4 of vol. 2 for the argument. The point is made twice.",
    ["See ch. 4 of vol. 2 for the argument.", "The point is made twice."],
  ],
  [
    "Mr.",
    "Mr. Smith translated the work. The edition is from 1887.",
    ["Mr. Smith translated the work.", "The edition is from 1887."],
  ],
  [
    "i.e. and e.g.",
    "Some texts, e.g. the Didache, are early. Others, i.e. the later ones, are not.",
    ["Some texts, e.g. the Didache, are early.", "Others, i.e. the later ones, are not."],
  ],
  [
    "quote ending a sentence (angle)",
    "La Iglesia la llama presencia «real». No lo dice para negar otras presencias.",
    ["La Iglesia la llama presencia «real».", "No lo dice para negar otras presencias."],
  ],
  [
    "quote ending a sentence (period inside)",
    "Dijo: «Esto es mi cuerpo.» Luego tomó la copa.",
    ["Dijo: «Esto es mi cuerpo.»", "Luego tomó la copa."],
  ],
  [
    "curly quote ending",
    "He said, “This is my body.” Then he took the cup.",
    ["He said, “This is my body.”", "Then he took the cup."],
  ],
  [
    "straight quote closing",
    'He said "This is my body." Then he took the cup.',
    ['He said "This is my body."', "Then he took the cup."],
  ],
  [
    "sentence inside quotes continues",
    "«No está solo como en un signo», dice el texto. Eso basta.",
    ["«No está solo como en un signo», dice el texto.", "Eso basta."],
  ],
  ["no terminal punctuation", "Un texto sin punto final", ["Un texto sin punto final"]],
  ["empty", "   ", []],
  ["initial", "J. Smith wrote it. It is old.", ["J. Smith wrote it.", "It is old."]],
  [
    "digit after period without capital",
    "Ver Jn 6. 53 en el texto. Luego seguir.",
    ["Ver Jn 6. 53 en el texto.", "Luego seguir."],
  ],
];

const failures = [];
for (const [name, input, expected] of cases) {
  const got = splitSentences(input);
  if (JSON.stringify(got) !== JSON.stringify(expected))
    failures.push(`${name}\n  expected ${JSON.stringify(expected)}\n  got      ${JSON.stringify(got)}`);
}
const paragraph = "Las  oraciones   se unen.\nCon espacios raros. Y siguen.";
if (splitSentences(paragraph).join(" ").replace(/\s+/g, " ") !== paragraph.replace(/\s+/g, " "))
  failures.push("join does not rebuild the text");

if (!canSimplify("ab ".repeat(1500))) failures.push("1500 words should be allowed");
if (canSimplify("ab ".repeat(1501))) failures.push("1501 words should be refused");
if (canSimplify("a".repeat(9001))) failures.push("over 9000 characters should be refused");

if (failures.length) throw new Error(failures.join("\n"));
console.log(`ok ${cases.length + 4} checks`);
