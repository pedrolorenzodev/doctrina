import type { AskRequest, ModelAnswer, WireNoteFollowup } from "@/lib/ai/contracts";
import type { Locale } from "@/lib/locale";
import type { PackPassage } from "@/content/ai-search/types";
import { en } from "@/content/ui-text/en";
import { es } from "@/content/ui-text/es";
import type { Verified } from "@/features/ask/verify-answer";

const excerptChars = 80;

export function noteExcerpt(text: string): string {
  const flat = text.replace(/\s+/g, " ").trim();
  return flat.length > excerptChars ? `${flat.slice(0, excerptChars - 1).trimEnd()}…` : flat;
}

const lowerAfterOpening = (text: string) => text.replace(/^¿(.)/u, (_, first: string) => `¿${first.toLowerCase()}`);

export function noteFollowup(
  model: ModelAnswer,
  verified: Verified,
  passages: PackPassage[],
  notes: AskRequest["notes"],
  locale: Locale,
): WireNoteFollowup | null {
  const choice = model.noteFollowup;
  if (!choice || choice.kind === "none") return null;
  if (verified.kind === "not_found" || verified.sections.length === 0) return null;
  const passage = passages.find((item) => item.id === choice.passage && item.collection === "mine");
  if (!passage) return null;
  const note = notes[Number(passage.key.split(":")[1]) - 1];
  if (!note?.ref || note.text.trim() === "") return null;
  const text = (locale === "en" ? en : es).noteFollowup;
  const excerpt = noteExcerpt(note.text);
  const [before = "", rest = ""] = text.sentence.split("{ref}");
  const ask = choice.kind === "question" ? text.askQuestion : text.askClaim;
  const asked = choice.kind === "question" ? lowerAfterOpening(excerpt) : text.claimQuestion;
  return {
    kind: choice.kind,
    before,
    ref: note.ref,
    after: `${rest.replace("{excerpt}", excerpt)}${ask}`,
    suggestion: text.suggestion.replace("{ref}", note.ref).replace("{question}", asked),
    question: text.sent.replace("{ref}", note.ref).replace("{question}", asked),
    noteText: note.text,
  };
}
