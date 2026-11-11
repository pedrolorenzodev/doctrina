import type { Locale } from "@doctrina/core/locale";

const spanishWords: Record<string, string> = {
  absolute: "absoluto",
  accusative: "acusativo",
  action: "acción",
  active: "activo",
  adjective: "adjetivo",
  adverb: "adverbio",
  and: "y",
  aorist: "aoristo",
  aphel: "afel",
  aramaic: "arameo",
  article: "artículo",
  attic: "ático",
  causative: "causativo",
  combined: "combinado",
  common: "común",
  comparative: "comparativo",
  conditional: "condicional",
  conjunction: "conjunción",
  consecutive: "consecutivo",
  construct: "constructo",
  contracted: "contracto",
  correlative: "correlativo",
  dative: "dativo",
  declarative: "declarativo",
  definite: "definido",
  demonstrative: "demostrativo",
  deponent: "deponente",
  directional: "direccional",
  disjunctive: "disyuntivo",
  dual: "dual",
  either: "cualquiera",
  feminine: "femenino",
  form: "forma",
  from: "de",
  future: "futuro",
  gender: "género",
  genitive: "genitivo",
  gentilic: "gentilicio",
  greek: "griego",
  haphel: "hafel",
  hebrew: "hebreo",
  hiphil: "hifil",
  hishtaphel: "hishtafel",
  hithpael: "hitpael",
  hitpaal: "hitpaal",
  hitpael: "hitpael",
  hitpeel: "hitpeel",
  hophal: "hofal",
  hothpaal: "hotpaal",
  imperative: "imperativo",
  imperfect: "imperfecto",
  indeclinable: "indeclinable",
  indefinite: "indefinido",
  indicative: "indicativo",
  indicator: "indicador",
  individual: "individual",
  infinitive: "infinitivo",
  intensive: "intensivo",
  interjection: "interjección",
  interrogative: "interrogativo",
  ishtaphel: "ishtafel",
  letter: "letra",
  location: "lugar",
  masculine: "masculino",
  middle: "medio",
  negative: "negativo",
  neuter: "neutro",
  niphal: "nifal",
  nithpael: "nitpael",
  nominative: "nominativo",
  noun: "sustantivo",
  numerical: "numeral",
  nun: "nun",
  object: "objeto",
  optative: "optativo",
  or: "o",
  pael: "pael",
  paragogic: "paragógico",
  participle: "participio",
  particle: "partícula",
  passive: "pasivo",
  past: "pasado",
  peal: "peal",
  peil: "peil",
  perfect: "perfecto",
  person: "persona",
  personal: "personal",
  piel: "piel",
  pluperfect: "pluscuamperfecto",
  plural: "plural",
  position: "posición",
  possessive: "posesivo",
  preposition: "preposición",
  present: "presente",
  pronoun: "pronombre",
  proper: "propio",
  pual: "pual",
  qal: "qal",
  reciprocal: "recíproco",
  reflexive: "reflexivo",
  relative: "relativo",
  resultive: "resultativo",
  shaphel: "safel",
  simple: "simple",
  singular: "singular",
  subjunctive: "subjuntivo",
  suffix: "sufijo",
  superlative: "superlativo",
  tense: "tiempo",
  tiphil: "tifil",
  title: "título",
  transcribed: "transcrito",
  transtive: "transitivo",
  type: "tipo",
  verb: "verbo",
  vocative: "vocativo",
};

const ordinals: Record<string, string> = { first: "1.ª persona", second: "2.ª persona", third: "3.ª persona" };

function cleaned(english: string): string {
  return english
    .replace(/\(hence [a-z]+=/g, "")
    .replace(/[()]/g, "")
    .replace(/\s+\+\s+/g, " + ")
    .replace(/\s+,/g, ",")
    .replace(/\s{2,}/g, " ")
    .trim();
}

const capitalised = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export function parseLabel(english: string, locale: Locale): string {
  const base = cleaned(english);
  if (locale === "en") return capitalised(base);
  const withPatterns = base
    .replace(/definite article/g, "artículo definido")
    .replace(
      /(personal|demonstrative|relative|reflexive|reciprocal|interrogative|indefinite|possessive) pronoun/g,
      (_, kind: string) => `pronombre ${spanishWords[kind] ?? kind}`,
    );
  const withPersons = withPatterns.replace(/(\d)(?:st|nd|rd) person/g, (_, number: string) => `${number}.ª persona`);
  const translated = withPersons.replace(/[A-Za-z]+/g, (word) => {
    const key = word.toLowerCase();
    return ordinals[key] ?? spanishWords[key] ?? word;
  });
  return capitalised(translated);
}
