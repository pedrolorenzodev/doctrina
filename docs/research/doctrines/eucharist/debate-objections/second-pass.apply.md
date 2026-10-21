# Apply log: corrections from `spanish-debates.second-pass.verify.md` (2026-10-21)

Evidence for every change is the verify file's finding with that number (V1–V13, plus the omission). Files touched: `spanish-debates.md` (S), `../catholic.md` (C), `../review-page.data.js` (R). Review page rebuilt and republished (see end).

## spanish-debates.md

| # | Section | Before → after | Evidence |
|---|---|---|---|
| 1 | Top "Progress", Status | "done." → first pass done; second pass done and verified (corrections applied). Second-pass Progress Status likewise. | Task: Status line confusion |
| 2 | Corpus table D10; section D10 identity | "Santi, affiliation inferred from title" → Santi is the Catholic host; the Heb 10:12 questioner is Víctor Adolfo Sánchez («Titán»), lay caller, evangelical Pentecostal per his message read by the host (about 19:50) | V1; priest 7:22, 3:13, 33:04 |
| 3 | D10 EO-1 wording | «no está sacrificado» attributed to Deíneris → the priest's own wording (about 3:00); Deíneris asks a question, «Ahí no hay un sacrificio en acto» speaker inferred; Víctor's question quoted, «una vez para siempre un solo sacrificio» is the host reading Heb 10:12 (20:50). Count effect: Víctor in as lay caller, Deíneris out | V2, V1 |
| 4 | D9 one kind | "argues a literal reading requires eating and drinking" → two asides (44:01; 1:04:55), not an argued objection, not counted | V3 |
| 5 | D15 one kind | "identifies denial … legitimate; fourth named person" → Ortlund asks a question (42:02), not counted | V4 |
| 6 | D15 adoration; D21 adoration | Ortlund counted, "PASSES at three" → Ortlund describes the Reformed concern, not counted; firm count 2 (Néstor, Tim); FAILS recurrence | V5 |
| 7 | D12 EO-4 | Cristian's own claim → his report of Ratramnus (12:31, 27:11); EO-4 for Cristian rests on D11 only. D15 EO-4: Ortlund quotes Bucer and agrees with Aquinas (16:39–16:53), no longer EO-4 support | V6 |
| 8 | D12 John 6:63 | Cristian's exegesis → Tertullian quotation read aloud (from 27:43); not counted; John 6:63 count 5 → 4 (Gustavo, Néstor, Cameron, Francisco); still passes (nested) | V7 |
| 9 | D8 EO-2 overlap | "adds one independent evangelical person" → dropped; at 27:42 «el debate no es sobre qué cree Edgar Pacheco»; his own EO-2 is in D9 | V8 |
| 10 | Corpus D17; D17 identity | "Protestant" → «no denomination» self-described (52:54, caption «nonprotestant», audio-check pending); Protestant per host framing | V9 |
| 11 | D6, D14, D8, D15 | Humberto at 9:35 and 41:16 marked inferred; «Trent Horn» marked inferred from the channel; Urbina (caption «Danbina») and Salkeld marked inferred/from title | V10 |
| 12 | First-pass EO-4 anchor; merged EO-4 anchor | FC Ep VII.32 "rejects the Reformed inference from Acts 3:21", URL `/the-holy-supper/` (404) → quotes item 11 of the rejected theses, notes Acts 3:21 is not in the text (dossier's inference), URL `/the-lords-supper/` | V11 |
| 13 | Merged table EO-2 | "Exact OB-2" → "Partial OB-2 (broader)"; anchor adds WCF 29.5 and SA III.6.5; first-pass EO-2 anchor adds 29.5 and overlap line fixed | V12; WCF 29.5 confirmed |
| 14 | Merged table John 6:63 | overlap "Proof-text detail under OB-2" → dossier DO-1; people 5 → 4 | V12, V7 |
| 15 | Merged table "Paul still calls it bread" | "At least 8" → 3 (Medardo, Néstor, Tim); anchor adds WCF 29.5; still merged into EO-2 | V13 |
| 16 | Merged table EO-1 | 9 incl. Deíneris and "Santi tenth" → 9 = eight named + Víctor (lay caller, apart); Deíneris and Santi out | V1–V2 |
| 17 | Merged table EO-2 | 17 → 16 firm; Bryce partial and outside the count; Pacheco via D9 only | verify "Counts" table |
| 18 | Merged table EO-3 | 3 → 4 (adds Francisco, D17 1:13:40); D17 section gets an EO-3 bullet | verify omission |
| 19 | Merged table EO-4 | 8 → 6 firm (Ortlund, Craig partial) | V6 |
| 20 | Merged table one kind; D12, D13 text | 5 → 3 firm (Néstor, Cristian, Eduardo), "PASSES, borderline at exactly 3"; anchor WCF 29.4 first, then 29.3; D13 Gutiérrez counted as third person, argument = inconsistency of literalism | V3, V4, verify counts |
| 21 | Merged table adoration/reservation | 3, PASSES → 2, FAILS recurrence | V5 |
| 22 | Merged table historical development | "[not found]" → "not found for the Eucharistic chronology"; Apology XXIV on the Mass noted as about the Mass only | verify "Official texts" |
| 23 | Merged count; intro to merged summary; verification-pass line | top-level passing 5 → 4; failed retained 8 → 9; Santi sentences replaced | consequence of the above |

## catholic.md (DO-1, §4 "Debate layer")

- "Dónde se plantea": "5 independent … 3 with Cristian" → "4 independent"; the Cristian Izquierdo bullet (which gave «el espíritu es el que vivifica; la carne nada aprovecha» as his words) removed, with the reason in the header (Tertullian quotation read aloud, aXJjSk1jBPk 28:14–29:58). Evidence: V7.
- Consequential: "of the five speakers" → "of the four" (one Reformed, others evangelical or Protestant without a stated body; "Baptist" dropped because Cristian was the Baptist); open question 18: "four of the five speakers are not Reformed" → "three of the four".

## review-page.data.js (DO-1 and question 18)

Same three text changes in Spanish (the `rv` notes of DO-1: 5 → 4 with reason; "cinco debatientes" → "cuatro"; question 18 "cuatro de los cinco" → "tres de los cuatro"). Question ids and the DO-1 page text unchanged. Rebuilt with `build.py`; `check.mjs` (with `PLAYWRIGHT_CORE=~/Desktop/zapatillas-research/node_modules/playwright-core`): overflow none, panel failures none, missing sources none, missing verses none, 684 clicks; the only errors are the blocked Google Fonts requests, which the script aborts on purpose. Republished to https://claude.ai/artifact/8fAQrmvQcfPConK7Bphmjf (version 3); live version differed from the build only in the lines above.

## Not applied

- Audio checks (Francisco's «nonprotestant»/«non-denominational» at 52:54; all inferred speakers) remain before publication, as the verify file states.
- «Gary Macy» as Craig's source (46:14) not added (second-hand, unverified).
- Trent XIII ch. 8 and XXI chs. 1–3 stay "checked by title only".
- First-pass tables ("Failed or nested candidates", "Recount") left as the first pass wrote them; they predate the merged counts.
