# Tests audit before the deploy (2026-11-09)

Pedro: «verify the tests that were failing, to see whether there is any bug or error with the AI Simplifier, so that we do not deploy or keep a bug». Clone `doctrina-tests-audit`, chromium, `AI_PROVIDER=fake`, port 3380, 4 workers.

## Result

| Run | Passed | Failed | Skipped |
|---|---:|---:|---:|
| Before, build with `NEXT_PUBLIC_AI_CHAT=real NEXT_PUBLIC_SIMPLIFIER=on` (1545 tests) | 1495 | 42 | 8 |
| After the fixes, same build | 1539 | 1 (flaky, see below) | 5 |
| After, build with `NEXT_PUBLIC_SIMPLIFIER=off`, the 19 touched or simplifier spec files (393 tests) | 326 | 0 (1 before the last guard, now skipped) | 66 |

The Simplifier has no defect that blocks the deploy. One layout regression caused by its switch row was found and fixed with one class; three of its specs had been skipping silently.

## Flag off

`.env.local` sets `NEXT_PUBLIC_SIMPLIFIER=on`, so a plain build is flag-on; the flag-off run needed `NEXT_PUBLIC_SIMPLIFIER=off` in the environment (first attempt without it was flag-on and proved nothing). With the flag off every simplifier spec skips (66) and everything else passes: no touched test depends on the flag being on, except that `touch-targets.spec.ts:31` had no skip guard (added). The 17 `doctrine-answers` failures and the `#common` selector exist only with the flag on, as the coordinator suspected.

## Classification of the 42 failures

(a) stale or flag-dependent test, (b) real bug in the Simplifier, (c) real bug elsewhere, (d) flaky, (e) unknown.

| Spec | Tests | Class | Root cause | Fix |
|---|---:|---|---|---|
| `doctrine-answers.spec.ts` | 17 | a | `button[aria-expanded]` also matches the simplifier ring (`data-simplifier-mark`) inside the same row: strict-mode violation. | `:not([data-simplifier-mark])`, as the other specs already do. |
| `doctrine-header.spec.ts:349` | 1 | a (flag) | A served paragraph adds `div[data-simplifier] > div` around the `p`; the selector counted depth. | `#common p`. |
| `doctrine-header.spec.ts:138` | 1 | a (data) | Ignatius' witness date is `c. 107–108` since the ledger of 2026-11-08. | Expectation. |
| `touch-targets.spec.ts:31` | 1 | a | With the switch off the ring's wrapper is `display: none` at every width (the ring only appears once the switch is on); the test never turned it on. The 44 px hit area itself is fine. | `localStorage["doctrina-simplify"] = "on"` before the page. |
| `entrance.spec.ts:6` | 1 | a, with a product side effect | `Breadcrumbs` with `aside` (the switch) puts `title-part-0` on the wrapper, not on the `nav`: the `nav` has no animation. Visually the crumbs still fade at delay 0. | `main .title-part-0`. |
| `home.spec.ts:106` | 1 | **c (real, caused by the Simplifier row)** | The 36 px switch row centres the 15 px crumbs: crumbs at y 100.5, sidebar label at y 90 (10.5 px off) on every doctrine and tradition page. | `lg:-my-2.5` on the wrapper in `src/components/breadcrumbs.tsx`; crumbs and label now at y 90. Desktop only; **needs Pedro's eye**. |
| `scripture.spec.ts:19` | 1 | a | Titles and «Ver los 12 pasajes» are links since `ec631b1`. | Rewritten as a link test (hrefs). |
| `objection-sources.spec.ts:107` | 1 | a | Same: the passage reference is a link. | Rewritten as a link test. |
| `why.spec.ts:146` | 1 | a | «A doctrine with no 02 page» no longer exists: baptism has its page and the note links to `/es/doctrinas/bautismo#witnesses`. | Now asserts that link. |
| `father.spec.ts` | 3 | a | «Dónde aparece» now lists two doctrines for Ignatius (eucharist, papacy), Justin (eucharist, baptism) and Tertullian. | Both rows asserted; `p` filtered by «Testigo». |
| `general-timeline.spec.ts:34` | 1 | a | The side panel also lists the Father's works; the test took the only `a`. | Selector by `href$=/polycarp-of-smyrna`. |
| `early-christians.spec.ts` | 5 | a (data) | Dates and notes changed with the ledger (Didaché 50–150, Ignatius 107–108, Justin 148–161, Tertullian 207–212, notes on Ignatius, Justin and Tertullian); baptism's early-Christians link is live. | Expectations updated to the render. The dates themselves were not judged. |
| `search.spec.ts` | 2 | a (data) | «107» also finds Ignatius' Romans; «Padres Justino» also finds Apology 61; «primeros cristianos» finds three pages. | Expectations. |
| `home-sections.spec.ts:4` | 1 | a | The questions of baptism, papacy and Sola Scriptura changed. | Regexes. |
| `quality.spec.ts:163` | 1 | a | «1 Corintios» is in the second title now. | `titles[1]`. |
| `home-years.spec.ts` | 2 | a (data) | Track height 271 to 266 px and Augustine no longer in the first lane (both follow the Fathers' dates). | 266; the hover test picks the first-lane bar nearest to the window. |
| `reader-parallel.spec.ts:127` | 1 | d | Passes alone and 12/12 with 6 workers, fails in the full run: the head click is lost under load. | `toPass` that clicks only while the list is not visible (no double toggle). |
| `reader-stream.spec.ts:31` | 1 | d | Passes alone (not reproduced in the second full run). | Not changed. |

## Simplifier findings

1. **Route-row misalignment** (c, fixed): above.
2. **Three Fathers' specs skipped silently with the flag on** (a): `simplifier.spec.ts` «the Fathers' reader offers the simplifier…», «pointing at a sentence number…» and «…ignatius-smyrnaeans: the content below moves in one motion…». The Father's simplifier only shows in the English edition (`doctrina-father-edition`), the specs never chose it, so `test.skip("no ring")` fired. With the edition set they showed stale fixtures: the whole of Smyrnaeans is served now (29 rings over 30 divisions, the first is the Prologue, not 6.2) and the first expectations said one ring. Fixed: `preferEnglishFatherEdition`, `containerOf(page, "6.2")`, counts 29 and 30. All three pass.
3. Driven in the browser (flag-on build, `AI_PROVIDER=fake`, 1440 and 390): switch on, ring, open, stream, Esc; no console error or warning, no hydration message, no horizontal overflow, focus returns to the ring, `aria-expanded`, `aria-controls` and `aria-label` right, panel is a labelled region. axe (wcag2a, 2aa, 21aa, best-practice) clean with the panel open, light 1440 and dark 390, on a tradition page and a 02 page.
4. Not covered by this audit: the real provider (only `fake`), the 25 s timeout on long paragraphs (GOTCHAS), the Father address edition id (`fixme`).

## Still failing or fragile

- `reader-parallel.spec.ts:127` and `reader-stream.spec.ts:31`: pass alone, can fail in a full loaded run; the first has a retry guard now, the second does not (its failure was one URL not yet at Mark 1 after scroll).
- Intermittent ones named in `ROADMAP.md` (`reader-keep-position` «A+», the drawer's «the view follows the text») and `passages.spec` «every apologist quote…» (race with `aria-disabled` after a hash change) did not fail in the two full runs here; left alone.
- 5 skipped tests are intentional (`father-ask` x2, `reader-ai-drawer` x2, `reader-keep-position` x1).

## Changed

Tests: `e2e/{doctrine-answers,doctrine-header,early-christians,entrance,father,general-timeline,home-sections,home-years,objection-sources,quality,reader-parallel,scripture,search,simplifier,touch-targets,why}.spec.ts`. Product: `src/components/breadcrumbs.tsx` (one class). Docs: this file, `docs/GOTCHAS.md`, `docs/DECISIONS.md`.
