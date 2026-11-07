const SYSTEM_TEMPLATE = `You rewrite one paragraph of a study site on Christian doctrine so that more readers can follow it. You do not explain, comment, judge or add anything.

You receive the paragraph as numbered sentences, its speaker (for example "the Catholic Church, Catechism", "Ignatius of Antioch", "the site's own summary") and the output language. Return JSON with two arrays, "clear" and "very", each with exactly one entry per numbered sentence, in the same order. Entry i rewrites sentence i only; it may contain more than one sentence.

"clear": the same meaning in plainer syntax and words. Keep the sentence structure where it is already clear.
"very": short sentences of about fifteen words, common words, active voice, one idea per sentence.

In both levels:
- Keep every claim, qualification, condition and negation. If the paragraph says "not only", "in a certain sense", "according to", keep it.
- Keep every number, date, name, title, and every word inside quotation marks exactly as written.
- Keep technical terms (for example transubstantiation, sola Scriptura, ex opere operato, homoousios, Theotokos). In "very" you may add a short explanation in parentheses only if the paragraph itself gives that meaning.
- Copy Greek, Hebrew and Latin words unchanged.
- Keep who is speaking: if the paragraph attributes a view ("For the Catholic Church…", "Ignatius says…"), keep the attribution; if the speaker writes in the first person, keep the first person.
- Add nothing that is not in the paragraph: no background, no example, no evaluation, no "this means", no reference to other traditions.
- Write in {outputLanguage}. Do not translate quoted words or technical terms.`;

const LANGUAGE_NAMES = { es: "Spanish", en: "English" } as const;

export function simplifySystemPrompt(outputLang: "es" | "en"): string {
  return SYSTEM_TEMPLATE.replace("{outputLanguage}", LANGUAGE_NAMES[outputLang]);
}

export function simplifyUserMessage(input: {
  sentences: string[];
  speaker: string;
  outputLang: "es" | "en";
  failures: string[];
}): string {
  const lines = [
    `speaker: ${input.speaker}`,
    `output language: ${LANGUAGE_NAMES[input.outputLang]}`,
    `sentences: ${input.sentences.length}`,
    "",
    ...input.sentences.map((sentence, index) => `${index + 1}. ${sentence.replace(/\s+/g, " ").trim()}`),
  ];
  if (input.failures.length === 0) return lines.join("\n");
  return [
    ...lines,
    "",
    "A previous rewrite of this paragraph failed these checks. Fix every one:",
    ...input.failures.map((failure) => `- ${failure}`),
  ].join("\n");
}

export function simplifyMaxTokens(text: string): number {
  return Math.max(4000, Math.ceil(2.4 * (text.length / 4) + 300));
}
