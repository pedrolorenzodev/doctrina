import { z } from "zod";
import type { SimplifiedLevels } from "@/features/simplify/checks";
import { toProviderSchema } from "@/lib/ai/contracts";
import type { AiCallResult, AiProvider } from "@/lib/ai/provider";

export const FIDELITY_PROMPT_VERSION = "fidelity-2026-11-07.2";

const CHANGE_KINDS = [
  "claim",
  "qualification",
  "condition",
  "purpose",
  "negation",
  "number",
  "name",
  "attribution",
  "speaker",
  "term",
  "mood",
  "strength",
  "agent",
  "dropped",
  "added",
] as const;

export const fidelitySchema = z.object({
  changes: z.array(
    z.object({
      level: z.enum(["clear", "very"]),
      kind: z.enum(CHANGE_KINDS),
      original: z.string(),
      rewrite: z.string(),
      reader: z.string(),
      verdict: z.enum(["same meaning", "different meaning"]),
    }),
  ),
});

export type FidelityVerdict = z.infer<typeof fidelitySchema>;

const providerSchema = toProviderSchema(fidelitySchema);

const SYSTEM = `You check simplified rewrites of a paragraph from a study site on Christian doctrine for changes of meaning. You receive the original paragraph and its rewrites: "clear", and "very" when present. Simplification is expected and is not a change: shorter sentences, everyday words that mean the same, reordering, splitting one sentence into several, an archaic form made modern ("thou hast" to "you have").

Report every place where a rewrite changes what the original says:
- a claim, qualification, condition, purpose ("in order that", "so that"), cause or negation changed, added or dropped;
- an item of a list, a number, a name or a title dropped, added or changed;
- who says it changed: an attribution added or dropped, a first person turned into a third, the speaker or source replaced;
- a technical, doctrinal or liturgical term replaced by another word or by an explanation ("propitiatory", "transubstantiation", "in the name of", "worship"), or its sense narrowed or widened;
- a statement turned into a question, a command into a statement, or the reverse;
- a position made stronger or weaker ("cannot appeal to" becoming "cannot review", "may" becoming "must", "rejects" becoming "does not mention");
- an agent or subject added that the original does not name ("God gave it" for "it was given");
- an evaluation, a judgement or an explanation added.

Work in two steps. First list every candidate difference you notice. Then, for each one, write in "reader" what a careful reader of the rewrite would now understand, and decide the verdict: "different meaning" only if that reader would understand something different about what is claimed, by whom, under which condition or for what purpose, or would lose a term, a list item, a qualification or the force of a statement; otherwise "same meaning". These are the same meaning: plain synonyms ("offerings" and "the things people offer"), modern grammar for archaic grammar, a condition rewritten as two sentences ("If you have no water, use other water" and "Maybe you have no water. Then use other water."), a connective like "therefore" or "for" dropped when the order still shows the link, a quoted phrase repeated, a short gloss added beside a term that is kept. Quote the exact words of the original and of the rewrite. Return JSON {"changes": [...]} with every candidate and its verdict.`;

function userMessage(original: string[], levels: SimplifiedLevels, onlyClear: boolean): string {
  const block = (units: string[]) => units.map((unit, index) => `${index + 1}. ${unit}`).join("\n");
  return [
    "original:",
    block(original),
    "",
    "clear:",
    block(levels.clear),
    ...(onlyClear ? [] : ["", "very:", block(levels.very)]),
  ].join("\n");
}

export type FidelityReading = { verdict: FidelityVerdict | null; failures: string[] };

export type FidelityReport = FidelityReading & { result: AiCallResult };

export function fidelityRequest(original: string[], levels: SimplifiedLevels, onlyClear = false) {
  return {
    system: SYSTEM,
    user: userMessage(original, levels, onlyClear),
    schemaName: "fidelity",
    schema: providerSchema,
    maxTokens: 4000,
  };
}

export function readFidelity(json: unknown): FidelityReading {
  const parsed = fidelitySchema.safeParse(json);
  if (!parsed.success)
    return {
      verdict: null,
      failures: ["fidelity: the meaning check could not be read; rewrite closer to the original"],
    };
  const failures = parsed.data.changes
    .filter((change) => change.verdict === "different meaning")
    .map(
      (change) =>
        `fidelity: "${change.level}" changes the meaning (${change.kind}): the original says «${change.original}», the rewrite says «${change.rewrite}» (${change.reader}); keep the original's meaning`,
    );
  return { verdict: parsed.data, failures };
}

export async function judgeFidelity(
  provider: AiProvider,
  original: string[],
  levels: SimplifiedLevels,
  signal?: AbortSignal,
  onlyClear = false,
): Promise<FidelityReport> {
  const result = await provider.call({
    role: "fidelity",
    ...fidelityRequest(original, levels, onlyClear),
    cacheSystem: true,
    ...(signal ? { signal } : {}),
  });
  return { ...readFidelity(result.json), result };
}
