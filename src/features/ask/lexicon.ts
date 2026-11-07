const VERDICT_ES = [
  "la verdad es",
  "claramente",
  "evidentemente",
  "es evidente",
  "demuestra",
  "prueba que",
  "de hecho",
  "correctamente",
  "erróneamente",
  "equivocad[oa]s?",
  "acertad[oa]",
  "es bíblic[oa]",
  "no es bíblic[oa]",
  "la (?:posición|lectura) correcta",
  "creemos",
  "nuestra fe",
  "debemos creer",
  "debés creer",
  "herej[ií]a",
];

const VERDICT_EN = [
  "the truth is",
  "clearly",
  "evidently",
  "it is evident",
  "proves",
  "demonstrates",
  "in fact",
  "correctly",
  "wrongly",
  "mistaken",
  "is (?:un)?biblical",
  "the correct (?:view|reading)",
  "we believe",
  "our faith",
  "you should believe",
  "heresy",
];

const TRADITION_ADJECTIVES =
  /^(?:católic[oa]s?|ortodox[oa]s?|protestantes?|evangélic[oa]s?|luteran[oa]s?|reformad[oa]s?|bautistas?|pentecostal(?:es)?|catholics?|orthodox|protestants?|evangelicals?|lutherans?|reformed|baptists?|pentecostals?)$/iu;

const CITING_VERB =
  /^(?:cita|citan|citó|citaba|citando|cites|cite|cited|quotes|quote|quoted|quoting|menciona|mentions|nombra|names)$/iu;

const BIBLICAL_FIRST_NAMES = new Set(
  [
    "juan",
    "john",
    "pedro",
    "peter",
    "pablo",
    "paul",
    "santiago",
    "james",
    "marcos",
    "mark",
    "lucas",
    "luke",
    "mateo",
    "matthew",
    "felipe",
    "philip",
    "andrés",
    "andrew",
    "tomás",
    "thomas",
    "timoteo",
    "timothy",
    "san",
    "saint",
    "santo",
  ].map((name) => name.normalize("NFC")),
);

const QUOTED = /«[^»]*»|“[^”]*”|"[^"]*"|‘[^’]*’/g;
const WORD = /[\p{L}\p{M}'’-]+/gu;

const boundary = (body: string) => new RegExp(`(?<![\\p{L}\\p{M}])(?:${body})(?![\\p{L}\\p{M}])`, "iu");
const verdictPatterns = [...VERDICT_ES, ...VERDICT_EN].map(boundary);

export function stripQuoted(sentence: string): string {
  return sentence.replace(QUOTED, " ");
}

export function verdictHit(sentence: string): string | null {
  const text = stripQuoted(sentence.normalize("NFC"));
  for (const pattern of verdictPatterns) {
    const found = pattern.exec(text);
    if (found) return found[0];
  }
  return null;
}

const words = (text: string) => (text.normalize("NFC").match(WORD) ?? []).map((word) => word.toLowerCase());

export function fatherNameForms(names: string[]): string[][] {
  const forms = new Map<string, string[]>();
  for (const name of names) {
    const tokens = words(name);
    if (tokens.length === 0) continue;
    forms.set(tokens.join(" "), tokens);
    const first = tokens[0] ?? "";
    if (tokens.length > 1 && first.length >= 4 && !BIBLICAL_FIRST_NAMES.has(first)) forms.set(first, [first]);
  }
  return [...forms.values()];
}

export function fatherAssignmentHit(sentence: string, nameForms: string[][]): string | null {
  const tokens = words(stripQuoted(sentence));
  const adjectives = tokens.flatMap((token, index) => (TRADITION_ADJECTIVES.test(token) ? [index] : []));
  if (adjectives.length === 0) return null;
  for (const form of nameForms) {
    for (let start = 0; start + form.length <= tokens.length; start += 1) {
      if (!form.every((token, offset) => tokens[start + offset] === token)) continue;
      const end = start + form.length - 1;
      for (const at of adjectives) {
        const distance = at < start ? start - at : at - end;
        if (distance < 1 || distance > 6) continue;
        const between = at < start ? tokens.slice(at + 1, start) : [];
        if (between.some((token) => CITING_VERB.test(token))) continue;
        return `${form.join(" ")} … ${tokens[at]}`;
      }
    }
  }
  return null;
}
