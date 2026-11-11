import type { AiCallInput, AiCallResult, AiProvider, AiRole } from "@/lib/ai/provider";

const PASTORAL =
  /confesi[oó]n|confesar|absoluci[oó]n|bendici[oó]n|bend[ií]ceme|confess|absolution|bless me|blessing for me|suicid|self-harm|me quiero morir|want to die|rez[aá] por m[ií]|pray for me/i;
const VERDICT = /qui[eé]n tiene raz[oó]n|who is right|herej|heresy|qu[eé] debo creer|what should i believe/i;
const INJECTION = /ignora|ignore (all|previous)|system prompt|eres ahora|you are now/i;
const OUT_OF_SCOPE = /receta|recipe|c[oó]digo|\bcode\b|chiste|joke/i;
const BRIEF = /resumid|en una l[ií]nea|solo el texto principal|una sola cita|short answer|in one line|briefly/i;

const DOCTRINE_KEYWORDS: [RegExp, string][] = [
  [/eucarist|eucharist|cena|supper/i, "eucharist"],
  [/bautism|baptism/i, "baptism"],
  [/papa|pope|papacy|pedro|peter/i, "papacy"],
  [/escritura|scripture|sola/i, "sola-scriptura"],
  [/justific/i, "justification"],
];

const SPANISH_WORDS =
  /\b(el|la|los|las|de|del|que|qué|en|y|un|una|es|por|con|para|sobre|quién|cómo|cuál|dice|según)\b/i;

function questionOf(user: string): string {
  const match = /^question:\s*(.+)$/im.exec(user);
  return (match?.[1] ?? user).trim();
}

function languageHint(user: string): "es" | "en" | null {
  const match = /^(?:answerLanguage|locale):\s*(es|en)\b/im.exec(user);
  return match ? (match[1] as "es" | "en") : null;
}

function fakePlan(user: string): unknown {
  const question = questionOf(user);
  const intent = PASTORAL.test(question)
    ? "pastoral"
    : VERDICT.test(question)
      ? "verdict_request"
      : INJECTION.test(question)
        ? "injection"
        : OUT_OF_SCOPE.test(question)
          ? "out_of_scope"
          : "evidence";
  const words = [...new Set((question.toLowerCase().match(/\p{L}{5,}/gu) ?? []).slice(0, 8))];
  return {
    intent,
    answerLanguage: question.includes("¿") || SPANISH_WORDS.test(question) ? "es" : "en",
    doctrines: DOCTRINE_KEYWORDS.filter(([pattern]) => pattern.test(question)).map(([, id]) => id),
    traditions: [],
    termsEn: words,
    phrasesEn: [],
    termsEs: words,
    phrasesEs: [],
    bibleRefs: [],
    authors: [],
    works: [],
    followsPrevious: false,
    depth: BRIEF.test(question) ? "brief" : "rich",
  };
}

type FakePassage = { id: string; attributes: Record<string, string>; text: string };

function decode(value: string): string {
  return value.replaceAll("&quot;", '"').replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&");
}

function passagesOf(user: string): FakePassage[] {
  const passages: FakePassage[] = [];
  for (const match of user.matchAll(/<passage\s+id="(P\d+)"([^>]*)>([\s\S]*?)<\/passage>/g)) {
    const attributes: Record<string, string> = {};
    for (const attribute of (match[2] ?? "").matchAll(/([\w-]+)="([^"]*)"/g))
      attributes[attribute[1] ?? ""] = decode(attribute[2] ?? "");
    passages.push({ id: match[1] ?? "", attributes, text: (match[3] ?? "").trim() });
  }
  return passages;
}

function aboutOf(passage: FakePassage): string {
  const collection = passage.attributes.collection ?? "doctrine";
  return collection === "tradition" ? `tradition:${passage.attributes.speaker ?? "shared"}` : collection;
}

function firstWords(text: string, count: number): string {
  return text.split(/\s+/).slice(0, count).join(" ");
}

function fakeAnswer(user: string): unknown {
  const language = languageHint(user) ?? "es";
  const passages = passagesOf(user)
    .filter((passage) => passage.attributes.collection !== "mine")
    .slice(0, 6);
  if (passages.length === 0) return { kind: "not_found", sections: [], words: [], prose: "", followups: [] };
  const disputed = /intent:\s*verdict_request/i.test(user);
  const sections = passages.map((passage) => ({
    about: aboutOf(passage),
    quotes: [{ passage: passage.id, quote: firstWords(passage.text, 12) }],
  }));
  const prose = passages
    .map((passage) => {
      const who = passage.attributes.who ?? passage.id;
      return language === "es"
        ? `${who} cita este pasaje {${passage.id}}.`
        : `${who} quotes this passage {${passage.id}}.`;
    })
    .join(" ");
  const words = disputed
    ? passages
        .filter((passage) => aboutOf(passage).startsWith("tradition:"))
        .map((passage) => ({
          tradition: passage.attributes.speaker ?? "",
          passage: passage.id,
          words: firstWords(passage.text, 3),
          quote: firstWords(passage.text, 12),
        }))
    : [];
  return { kind: disputed ? "disputed" : "evidence", sections, words, prose, followups: [] };
}

function fakeSimplify(user: string): unknown {
  const sentences = [...user.matchAll(/^\s*\[?(\d+)[\].):]?\s+(\S.*)$/gm)].map((match) => (match[2] ?? "").trim());
  return { clear: sentences, very: sentences };
}

function fakeJudge(): unknown {
  return { neutral: true, attributed: true, fathersUnassigned: true, usefulness: "3", notes: "" };
}

const BUILDERS: Record<AiRole, (user: string) => unknown> = {
  plan: fakePlan,
  answer: fakeAnswer,
  simplify: fakeSimplify,
  judge: fakeJudge,
  fidelity: () => ({ changes: [] }),
};

export class FakeProvider implements AiProvider {
  readonly id = "fake" as const;

  async call(input: AiCallInput): Promise<AiCallResult> {
    return {
      json: BUILDERS[input.role](input.user),
      usage: {
        inputTokens: Math.ceil((input.system.length + input.user.length) / 4),
        cachedInputTokens: 0,
        cacheWriteTokens: 0,
        outputTokens: 200,
      },
      provider: "fake",
      model: "fake",
      costMicros: 0,
      latencyMs: 0,
      stopReason: "end",
    };
  }
}
