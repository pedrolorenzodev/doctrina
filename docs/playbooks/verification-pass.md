# Verification pass

Check the claims of a research or content file against their sources before anything depends on them. Read `agent-ops.md` first. Last validated: 2026-10-17.

## Setup

- Sonnet, one agent per file (or per pair of small files). It writes only `verification-<name>.md` next to the file it checks.
- Copy the format of an existing verification file (e.g. `docs/research/traditions/verification-catholic.md`): Progress block, legend, items referencing the checked file's sections, consolidated lists at the end.

## Method

- Fetch pages with curl, convert to text, confirm with exact-string matching; quote the matched string and the URL. Never trust a model summary of a page.
- Legend: CONFIRMED / WRONG / UNCONFIRMABLE. For WRONG: the correct claim, its source and the tag it should get.
- Priority: (1) claims tagged `[verified]` that carry a quote, number, date or locator; (2) editions and licensing; (3) names and sites; (4) a sample of `[memory]` / `[snippet]` claims that could be upgraded.
- Legitimate sources only. A number or text read in an unlicensed copy stays unconfirmed (e.g. Denzinger–Hünermann numbers are confirmed only where a Holy See text or a public-domain edition prints them).
- End with "Wrong items" and "Unconfirmable" lists.

## After

`apply-corrections.md`. The verifier can be wrong too (a page number, a cross-reference): the apply step may keep a claim with evidence.

## Done when

- [ ] Every priority-1 claim has a verdict.
- [ ] Every WRONG item gives the correction with a source.
- [ ] The two consolidated lists exist.

## Results so far

| Date | File | Checked | Wrong |
|---|---|---|---|
| 2026-10-14 | Lutheran + Reformed | ~71 items | 9 |
| 2026-10-14 | Catholic | ~78 items | 5 (plus many unconfirmable) |
| 2026-10-15 | Orthodox | 51 items | 11 claims |
| 2026-10-17 | Eucharist, Catholic dossier | 129 items | 8 (10 unconfirmable) |
| 2026-10-17 | Justification, Catholic dossier | 83 items | 18 (8 unconfirmable) |
| 2026-10-17 | Baptism, Catholic dossier | 36 items | 5 (+6 minor; 8 unconfirmable) |
| 2026-10-17 | Papacy, Catholic dossier | 73 items | 12 (6 unconfirmable) |
| 2026-10-18 | Sola Scriptura, Catholic dossier | 53 items | 12 (8 unconfirmable) |
| 2026-10-20 | Neutral universe (four reports) | see `docs/research/neutral/verification.md` | applied in `verification.apply.md` |

## Lessons

- 2026-10-17 · The five Catholic dossier verifications found the same kinds of error: OCR guesses, clipped or paraphrased quotes inside quotation marks, a silent errata fix, a translation unlabelled as such, an e-text under copyright → check these first.
- 2026-10-15 · Verifiers made small errors of their own (a page number, a wrong part reference, inconsistent counts) → the apply step may disagree with evidence.
