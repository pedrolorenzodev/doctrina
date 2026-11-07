# Finish the Spanish word glosses

## State

- Done (2026-11-07): translated all absent atoms, added scoped inflected forms, rebuilt into this clone, reviewed the 230-slot sample, and compared all 1,502 JSON files. Hebrew 99.6761%, Greek 99.6984%; zero preexisting Spanish changes and zero unrelated data-field changes.
- Done: both word checks, six generator safeguard checks, `LEAN_BUILD=1` project verification, and all 12 affected panel e2e tests passed. No `src/`, Supabase, other repository, git index or git history was changed.
- In progress: none. Limitation: the normal 9,120-page export failed with `ENOSPC`; a full export still needs verification on a machine with enough disk space. The lean production build is available locally.
- Next: coordinator reviews and copies the listed source files and generated data, preserving concurrent shared-document edits. Service reload needs its separate authorization; no loader was run here.
- How to resume: inspect `~/codex-scratch/words/verify.log` (full-export failure), `verify-lean.log` (passed), `e2e.log` (12 passed), and the comparison/sample inventories. Retry the normal full build after making sufficient space; do not redo the translations. Untouched baseline: `~/codex-scratch/words/before`.
- Usage: start window 5%, week 2%; end window 10%, week 5%, with a window reset during the run (highest observed pre-reset window: 18%). Daily baseline 2% (`~/codex-baseline-2026-11-07.txt`), weekly daily ceiling 27%. No cap was approached.

## Scope and acceptance

Work only in `doctrina-codex-words`; no `src/`, other repository, git writes, service writes or loaders. Translate locally without a translation API. New TSV sources use the next Greek/Hebrew batch numbers. Rebuild with the existing pipeline; preserve non-Spanish data and enrichments; run both word checks and `npm run verify`. Review 150 seeded random new entries, 50 most frequent and 30 longest against lemma and morphology. Target at least 99.5% Spanish token coverage in both languages; explicitly report any unmet criterion.

## Initial inventory

Measured from this copy's `data/site/words/verses/*/*.json`, not from the work order's date (the client date is 2026-11-07).

| Language | Tokens | Without Spanish | Distinct English strings | Without Spanish despite exact map entry |
| --- | ---: | ---: | ---: | ---: |
| Hebrew | 305,648 | 9,107 | 3,894 | 5,067 |
| Greek | 137,919 | 3,957 | 2,115 | 3,307 |

The map has 51,076 entries. “Missing Spanish” is not equivalent to “English key absent”: the builder explicitly rejects Greek second-person-plural verbs, many third-person-plural phrases, and several Hebrew verbal forms. The previous handoff already identifies this limitation (`words-session-fixes.md`, “Code changes this night would need”). New mappings alone cannot remove these rejections. A question requesting scope confirmation for generator conjugation changes was sent to Pedro; dependent changes wait for his answer.

## Plan and verification

1. Inventory exact missing strings with frequency, first verse, Strong ID, morphology and existing mapping (scratch only).
2. Distinguish absent atoms, compound assembly, and grammatical safeguards before translating; retain existing cross-language mappings.
3. Translate new pieces in TSV batches; merge through `merge_glosses_es.py`.
4. Acquire only pinned upstream source files into scratch and verify their hashes against the manifest; regenerate into scratch first so lexicon enrichments and occurrence morphology are preserved.
5. Review the specified reproducible sample, fix errors, rebuild and compare every JSON field against a baseline.
6. Run data checks and project verification. Record every changed generated file in a scratch manifest for the coordinator; leave service reload to the coordinator.

No new design or doctrinal decision is made here. The existing AI-draft labels remain required.

## Confirmed constraints (Pedro, 2026-11-07)

Pedro authorized a generator correction, constrained to words currently lacking Spanish. All existing nonempty `es` and `glossEs` values must remain byte-for-byte equal. Compare every generated file against the baseline and report added/changed entry counts; both word checks must pass. No `src/` or Supabase changes. Explain the exact generator correction with a before/after second-person-plural example. Baseline copied to `~/codex-scratch/words/before` before any mapping or generator change.

## Milestone: translation and scoped inflections

- Added Greek batch 21 (623 previously absent atoms) and Hebrew batch 31 (499 atoms); `<to the>` is shared and occurs only in Hebrew batch 31 to avoid duplicate keys. No existing map value is replaced.
- Added two-column contextual batches (Greek 22, Hebrew 32). Their keys are `grc:<morph>:<English>` / `hbo:<morph>:<English>`; lookup is limited to that exact language, morphology and gloss. A baseline scan found zero contextual keys matching already translated tokens.
- Added `build_words.py --fill-spanish`: it traverses the existing dataset, fills only falsey `es`/`glossEs`, rejects changed word identity/counts, and retains existing translations, definitions, senses, occurrence morphology and all other fields. The manifest retains its provenance and receives the regeneration date. No runtime conjugator or dependency is added.
- Scratch-only inflection drafting used the Spanish XML forms from the downloaded `verbecc` 2.0.3 wheel to change the already translated Spanish forms. No translation API, model endpoint or service write was used; its imperfect forms and ambiguous reverse matches were checked against the local STEPBible lemma and morphology. No package code or XML is copied into the repository. Manual corrections include subjunctives, passive agreement, accents and lexical senses; the results remain AI drafts, not Pedro-approved translations.
- All ten pinned STEPBible source hashes match the existing manifest at upstream commit `be4191f0`. Downloads stay under `~/codex-scratch/words/stepsrc`.
- The fallback test's former fixture φάγητε now has `comáis`; a regression assertion covers it and the fallback assertion moves to πίητε (still untranslated).
- Next: finish recording the quality sample, run final comparisons, both word checks, `npm run verify`, and the affected panel tests on port 3420.

## Final data comparison (before application verification)

| Language | Before | After | Coverage | Newly translated tokens | Remaining |
| --- | ---: | ---: | ---: | ---: | ---: |
| Hebrew | 296,541 / 305,648 | 304,658 / 305,648 | 99.6761% | 8,117 | 990 |
| Greek | 133,962 / 137,919 | 137,503 / 137,919 | 99.6984% | 3,541 | 416 |

- 1,086 of 1,502 JSON files changed: 1,075 chapter files, 9 lexicon shards, the gloss map and manifest.
- Added 11,686 `es` fields (11,658 main-text tokens plus 28 omitted/variant tokens) and 12 `glossEs` fields. **Zero existing Spanish values changed. Zero other data fields changed**, apart from the manifest's `generated` date, now `2026-11-07`.
- All 51,076 original map entries retain their values; 6,896 keys were added, for 57,972 total. The merge reported 0 conflicts and 0 malformed rows.
- The complete changed-file list, with before/after SHA-256, is `/Users/pedrolorenzo/codex-scratch/words/changed-generated-files.tsv`; plain list: `changed-generated-files.txt` in that directory. The generated folder remains git-ignored.
- Data was rebuilt into scratch from the untouched baseline on every correction pass, so `--fill-spanish` could not freeze a mistake from an earlier pass; only the final generated folder was copied into this clone.

## Quality review

`docs/research/tools/s1a/glosses-finish-review.tsv` records the 150 seeded random new entries, representatives of the 50 most frequent new English strings (frequency aggregated across their forms), and the 30 longest new strings. Each row includes group, English, final Spanish, code, Strong ID, original form, example verse, frequency and local lexicon lemma. Random selection seed: `20261107`; sampling code and earlier review are in the scratch directory. The review covers all 230 sample slots; repeated strings across groups are retained. It is an AI self-review against the local STEPBible lemma and morphology, not an independent specialist review or Pedro's approval.

Errors found and corrected during the two drafting/review passes:

| Issue | Example and correction |
| --- | --- |
| Plural passive agreement | `you will be delivered`, `HVNi2mp`: `seréis librado` → `seréis librados`; likewise `golpeados` and capitalized `Seréis entregados` |
| Predicate agreement | `you will be pure`, Lev 16:30: `seréis puro` → `seréis puros`; also `sobrios`, `llenos`, `niños`, `quietos` |
| Subjunctive versus English “shall” | `you shall answer`, `V-AOS-2P`: `responderéis` → `respondáis`; `they shall desire`, `V-AAS-3P`: `desearán` → `deseen` |
| Imperfect | `were you able`, 1 Cor 3:2: `pudisteis` → `podíais`; `they were willing`: `quisieron` → `querían`; imperfect `se asombraban` in Acts 2:7 and Luke 4:32 |
| Indicative versus imperative | `do say`, John 10:36, `V-PAI-2P`: `decid` → `decís` |
| Lexical sense | `did bear`, Luke 23:29: `dieron fruto` → `dieron a luz` |
| Lexical sense | `they will deliver`, Matt 10:17, παραδίδωμι: `librarán` → `entregarán`; Hebrew נצל / פלט deliverance uses `libra` / `librad` |
| Noun versus verb sense | Aramaic `rest/ the`, Dan 7:7: `descanso/el` → `resto/el` |
| Petition versus question | `ask`, 1 Kgs 3:5, שאל: `pregunta` → `pide` |
| Accent | `sustain`, 1 Kgs 13:7: `sosten` → `sostén` |
| Infinitive construct | `sported`, Judg 16:27: `divirtió` → `divertir` |
| Locative versus temporal | `before` as פנים in new compounds: `antes` → `delante de` |

The interlinear retains source morpheme order and `/` separators, including Aramaic postfixed articles (`king/ the` → `rey/el`) rather than silently rearranging the underlying parts. Brackets, angle brackets, grammatical markers, uncertainty and source fragments are retained. Existing translations, including existing weaknesses outside the empty fields, are deliberately unchanged.

## What remains

There are 990 Hebrew and 416 Greek tokens without Spanish, represented by 935 distinct language/gloss/morph combinations. Full inventory with frequency and an example verse: `/Users/pedrolorenzo/codex-scratch/words/remaining.tsv`.

Every one of the 1,123 initially absent atom/language worklist items is covered by the 1,122 shared new atom keys (the shared `<to the>` needs only one entry). Remaining gaps are not a missing translation batch: they are cases where the original grammatical safeguard still rejects the shared rendering and no safe scoped form was retained, ambiguous reverse inflections, phrasal/reflexive/first-person cohortative constructions, or source alignment/bracket fragments. Examples: Hebrew `take heed` (14), `let us go` (12), `go out` (11), `I will sing` (10); Greek `they were` / `V-IAI-3P` (19), `sent` / `V-AAI-3P` (9), `you were` / `V-IAI-2P` (8). They keep the labelled English fallback rather than a guessed conjugation. Both requested coverage thresholds are met; this is not 100% coverage.

## Generator example and safeguard tests

Before: φάγητε, John 6:53, `V-AAS-2P`, English `you shall have eaten`, no `es` because the generic second-person-plural rule rejects the shared singular rendering. After: the exact scoped key yields **`comáis`**. Existing singular forms continue to use the old lookup; the original map entry `you shall have eaten` is unchanged. Another example: ἐστε / `V-PAI-2P`, `you are` → `sois`.

Six scratch unit checks passed: preserve nonempty Spanish; fill absent/null/empty Spanish; retain definitions, senses and non-Spanish fields; reject changed word identity; reject changed word counts; scope the Greek override to the exact morphology. Script: `~/codex-scratch/words/test-generator.py`. The exhaustive field comparison is stronger than the examples and covers all generated JSON files.

## Verification and handoff

Both word checks passed. `npm run verify` passed typecheck, lint and formatting but its full 9,120-page build failed with `ENOSPC` while writing prerendered pages. Only this clone’s failed `.next` output was removed, freeing enough space for the repository’s existing lean mode. `LEAN_BUILD=1 CORPUS_SOURCE=local AI_PROVIDER=fake AI_STORE=memory npm run verify` then passed completely (exit 0). The normal full export remains unverified because of disk capacity. The affected panel e2e suite passed all 12 Chromium tests on port 3420 with the lean production build (`--workers=1`); the runner stopped its own server afterward. `git diff --check` also passed. There were no screenshots or independent visual critique: no application UI, styling or interaction code changed. The Python check's historical John 6 lexicon/count/reference discrepancies and corpus numbering gaps also appear in the baseline check; no new non-Spanish discrepancy was introduced. Logs live outside the repo under `~/codex-scratch/words/`.

Coordinator source files:

- `data/scripts/build_words.py`
- `e2e/reader-panel-words.spec.ts`
- `docs/research/tools/s1a/glosses-greek-batch21.tsv` (623 rows)
- `docs/research/tools/s1a/glosses-greek-batch22.tsv` (1,986 rows)
- `docs/research/tools/s1a/glosses-hebrew-batch31.tsv` (499 rows)
- `docs/research/tools/s1a/glosses-hebrew-batch32.tsv` (3,788 rows)
- `docs/research/tools/s1a/glosses-finish-review.tsv` (230 samples plus header)
- `docs/features/words-glosses-finish.md`
- `docs/DECISIONS.md`: apply only the new “Finish Spanish glosses without replacing existing Spanish” section, preserving concurrent coordinator edits.

Generated output: this clone's `data/site/words/`; copy only after backing up the coordinator's target. The unchanged definitions, senses and `fm` are retained, so the enrichment builders do not need to be rerun for this incremental fill. No loader has been run; Supabase reload remains the coordinator's separately authorized step.

To rebuild this clone from a baseline with the same existing data:

```sh
python3 -I data/scripts/merge_glosses_es.py data/site/words/glosses-es.json docs/research/tools/s1a/glosses-greek-batch21.tsv docs/research/tools/s1a/glosses-hebrew-batch31.tsv docs/research/tools/s1a/glosses-greek-batch22.tsv docs/research/tools/s1a/glosses-hebrew-batch32.tsv
python3 -I data/scripts/build_words.py --src ~/codex-scratch/words/stepsrc --fill-spanish
```

Do not use a plain full rebuild for this incremental handoff: it rewrites the lexicon without its separately built enrichments. The flag requires an existing dataset. Normal fresh builds continue to use the original full-build pipeline followed by the enrichment builders.


## Preview and commit command (Pedro only)

From this clone with Node 24 active:

```sh
CORPUS_SOURCE=local npm run start -- -p 3420
```

Open `http://localhost:3420/es/biblia/juan/6` and the “Palabras” panel of verse 53: φάγητε shows `comáis`; πίητε still demonstrates the labelled English fallback. The word page remains unchanged except for newly available Spanish data.

After the coordinator copies/reconciles the files into the real repository, Pedro can run:

```sh
cd ~/Desktop/dev/doctrina && git add data/scripts/build_words.py e2e/reader-panel-words.spec.ts docs/DECISIONS.md docs/features/words-glosses-finish.md docs/research/tools/s1a/glosses-{greek-batch21,greek-batch22,hebrew-batch31,hebrew-batch32,finish-review}.tsv && git commit -m "fix(words): finish spanish glosses without replacing translations"
```

Generated data is not staged. Preexisting untracked `.playwright-mcp/`, the proposal Python cache and `tmp/` were left untouched. No git write command was executed.
