# The AI simplifier: how any non-Bible paragraph is simplified (design)

Written 2026-11-06 («AI plan» session). Inputs: Pedro's decisions (`real-ai-plan-notes-2026-11-05.md` §1.4, §5), the approved UI (`docs/features/simplifier-ui.md`, DECISIONS 2026-11-03 night), the code (`src/components/simplifier/`, `src/content/simplified-texts.ts`, `src/lib/simplifier-types.ts`). Frozen names and types: `contracts.md`.

## 1. The endpoint takes an address, never text

**Threat.** An endpoint that accepts `{ text }` and returns a rewrite is a free, anonymous proxy to a paid model: anyone can send any text (homework, spam, translations of whole books, jailbreak prompts) and Pedro pays. Rate limits slow it, they do not stop it, and the output would be cached and served under Doctrina's name.

**Design.** `POST /api/simplify` takes an **address** of a paragraph the site itself publishes; the server resolves it to the text through the same loaders the pages use, refuses anything it cannot resolve, and the cache key starts from the resolved text's hash. The model therefore only ever rewrites Doctrina's own non-Bible paragraphs; the worst an attacker can do is make the server simplify the site's paragraphs, which are finite (and get cached).

Address kinds (`contracts.md` §5):
| Kind | Fields | Resolved by | Simplifiable when |
|---|---|---|---|
| `father` | `work`, `edition`, `locator` | `getFatherWork` / the Supabase divisions (the reader's loader) | the edition is not an AI translation (DECISIONS 2026-11-04 item 5 keeps the simplifier off on it; Pedro may change this, §6) and the text is ≤ 1,500 words |
| `statement` | `doctrine`, `tradition`, `id` (`definition` or a statement id) | `getTraditionPage` (the generated pages) | always (these are the paragraphs the test build already uses) |
| `doctrine` | `doctrine`, `section`, `id` | the 02 page getter | the section is prose (not a list or a quote) |
| `glossary` | `term`, `tradition` | `getGlossaryTerms` | the entry's definition |
| `bible` | — | — | **never**: `400 not_simplifiable` (Pedro: a generated simplification of a verse would be another Bible without an editor) |

Rich markup (`{v:…}` inline references, emphasis) is stripped to plain text by the resolver with the same parser the pages use; the simplification is plain text, as the test build's entries are.

## 2. Request lifecycle and the one-push rule

1. The reader presses the ring (or another entry point, §7). The client already holds the result if this paragraph was simplified in this page view → opens at once (the approved second-open behaviour).
2. Otherwise the client calls `POST /api/simplify { address, locale }`. The server: guard (bot check, per-IP and global limits, kill switch) → resolve address → cache lookup by key (§3) → hit: return in ~50–150 ms; miss: one model call (both levels in one call), verify (§5), store, return. The wait for a miss is **≈ 2–5 s** [estimate: ~1,100 output tokens on a small fast model].
3. **While pending, nothing moves.** The ring takes its pending state: the approved circle with the dashed border that the panel uses «while writing» (`simplifier-ring-line` + `border-dashed`, an existing pattern of the approved simplifier), `aria-busy="true"`, its tooltip and a polite live region say «Simplificando…». No box opens, no placeholder, no layout shift. (Reason: any placeholder that is later replaced by the text is a second push; Pedro's rule is one motion to the final height.)
4. When the verified result arrives, the box opens **once**, to its final height, with the approved animation: the first open of the paragraph plays the approved word reveal over a text laid out at its final size from the first frame (as the test build does today: `useStream`, final layout, words revealed with `visibility`); a later open plays the approved wipe. The content below moves in step with the box (the test build's measured behaviour, unchanged).
5. Switching «Más claro / Muy simple» is instant: both levels come in the same response.
6. **Error, limit, switched off, bot check failed:** the box opens once with the message as its text (`ink-3`), the approved header, and the approved footer carrying «Reintentar» (when retrying can help) and «Ocultar». These are the approved panel's own elements; the messages are in `contracts.md` §7. A paragraph whose request is still pending when the reader presses the ring again cancels the request (AbortController) and returns the ring to rest.
7. **Optional, free latency win:** on pointer hover or keyboard focus of a ring (fine pointers only), the client calls `GET /api/simplify?…&cacheOnly=1`, which answers only from the cache (no model call, no limit spent except the anti-scraping counter). A hit makes the press instant.

Timeout: the client gives up at 20 s (error state); the route's `maxDuration` is 30 s.

## 3. The cache table and its key
Table `ai_simplifications` (`schema-and-api.md`, migration `20261106100300_ai_simplifications.sql`):
- **Key** `cache_key = sha256( text_sha256 | address_kind | edition_id | source_lang | output_lang | model_id | SIMPLIFY_PROMPT_VERSION )`. The text hash comes first so an edited paragraph (a reloaded corpus, a regenerated page) never serves an old simplification; the address is stored for reporting but is not what makes the key unique.
- Value: `original` (the server's sentence split, `text[]`), `clear` (`text[]`), `very` (`text[]`), `status` (`generated` | `reviewed` | `rejected`), `checks` (`jsonb`, §5 results), `tokens_in`, `tokens_out`, `cost_micros`, `created_at`, `reviewed_at`.
- The response shape is exactly the test build's `SimplifiedEntry` (`lang`, `original`, `clear`, `very`) plus `status` and `cached`: the approved component renders it unchanged.
- A `rejected` row (Pedro marked it wrong through «Informar un error» review) is never served; the next request regenerates it once, and a second rejection stops the paragraph from being simplified (`not_simplifiable`, logged).

## 4. The simplification contract and prompt

**Contract** (what a simplification may and may not do): same content, shorter words and sentences; nothing added (no explanation, example, background or opinion that is not in the paragraph); nothing removed that changes the meaning: every qualification («no solo», «por excelencia», «según…»), every negation, every number, every name, every quoted word stays; terms of art stay (transubstanciación, sola Scriptura, ex opere operato, homoousios…), at «Muy simple» followed by a short gloss in parentheses **only when the paragraph itself defines it**; attribution is kept («Para la Iglesia católica…», «Ignacio dice…»); the speaker stays the speaker (a Father's first person stays first person). Greek, Latin and Hebrew words are copied unchanged.

**Levels.** «Más claro» (`clear`): the same sentences, plainer syntax; long sentences may become two inside the same unit; vocabulary of a good secondary-school reader. «Muy simple» (`very`): short sentences (≈ 15 words), common words, active voice, one idea per sentence; still complete.

**Sentence alignment** (the approved pair highlight needs it): the server splits the original into N sentences with a deterministic splitter (`src/lib/ai/sentences.ts`: «.», «?», «!», «;» only when followed by a capital, never inside numbers like «6.2», abbreviations list es/en, closing quotes kept with their sentence); the model receives them numbered and must return exactly N units per level, unit *i* simplifying sentence *i* (a unit may hold more than one sentence). The schema cannot enforce N (array constraints are not supported, `provider-and-models.md` §2), so the server checks it.

**System prompt (English, canonical; `SIMPLIFY_PROMPT_VERSION = "simplify-2026-11-06.1"`):**

```
You rewrite one paragraph of a study site on Christian doctrine so that more readers can follow it. You do not explain, comment, judge or add anything.

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
- Write in {outputLanguage}. Do not translate quoted words or technical terms.
```

**Spanish version (reference):**

```
Reescribís un párrafo de un sitio de estudio de la doctrina cristiana para que más lectores puedan seguirlo. No explicás, no comentás, no juzgás ni agregás nada.

Recibís el párrafo como oraciones numeradas, quién habla (por ejemplo «la Iglesia católica, Catecismo», «Ignacio de Antioquía», «el resumen propio del sitio») y el idioma de salida. Devolvé JSON con dos listas, "clear" y "very", cada una con exactamente una entrada por oración numerada, en el mismo orden. La entrada i reescribe solo la oración i; puede tener más de una oración.

"clear": el mismo sentido con sintaxis y palabras más simples. Mantené la estructura donde ya es clara.
"very": oraciones cortas de unas quince palabras, palabras comunes, voz activa, una idea por oración.

En los dos niveles:
- Mantené cada afirmación, matiz, condición y negación. Si el párrafo dice «no solo», «en cierto sentido», «según», mantenelo.
- Mantené cada número, fecha, nombre, título y cada palabra entre comillas exactamente como está.
- Mantené los términos técnicos (por ejemplo transubstanciación, sola Scriptura, ex opere operato, homoousios, Theotokos). En "very" podés agregar una explicación breve entre paréntesis solo si el mismo párrafo da ese significado.
- Copiá sin cambios las palabras en griego, hebreo y latín.
- Mantené quién habla: si el párrafo atribuye una postura («Para la Iglesia católica…», «Ignacio dice…»), mantené la atribución; si el autor escribe en primera persona, mantené la primera persona.
- No agregues nada que no esté en el párrafo: ni contexto, ni ejemplos, ni valoraciones, ni «esto significa», ni referencias a otras tradiciones.
- Escribí en {outputLanguage}. No traduzcas palabras citadas ni términos técnicos.
```

Output language = the page's language (`locale`). An English Father paragraph on the Spanish site: the reader is reading the English edition (they chose it, or the work has no Spanish), so the simplification follows the edition's language, not the site's (the test build's Ignatius paragraph is English); a cross-language simplification is a translation, which is out of scope.

## 5. Verification (cheap checks, no second model call)
Run on both levels; results stored in `checks`:
1. **Shape:** both arrays have exactly N non-empty entries.
2. **Length ratio** (words): `clear` 0.6–1.4 × the original; `very` 0.5–1.6 ×; and `very`'s mean sentence length < the original's (or the original is already ≤ 16 words per sentence).
3. **Numbers:** every digit group of the original appears in both levels; no new digit group appears.
4. **Quoted words:** every string inside «», “”, "" in the original appears verbatim in both levels (normalised quotes, `chat-design.md` §8.1); a quoted string in the output must be a substring of the original.
5. **Names:** every capitalised token of the original that is not sentence-initial (a cheap proper-name proxy, plus the doctrine and tradition names from `ids.ts`) appears in both levels; a capitalised non-initial token in the output that is not in the original is flagged (catches «Cristo» → «Jesús», or an added «Lutero»).
6. **Scripts:** every Greek or Hebrew token (Unicode script) of the original appears unchanged.
7. **Added-claim lexicon:** es/en regexes for «esto significa», «en otras palabras, la Iglesia…», «this means», «in other words», «es decir que» at the start of a unit that has no counterpart in the original → flag.
On any failed check: **one regeneration** with the failures listed; failing again → `500 simplify_failed` with the error state («No se pudo simplificar este párrafo sin cambiar su sentido. El original está arriba.»), logged with the checks. The original is always on the page above the box, so the reader is never left without the source.

## 6. Hard cases
- **Long paragraphs.** ≤ 600 words: one call. 600–1,500 words: one call, `max_tokens` scaled (2.4 × the paragraph's tokens + 300). Over 1,500 words (or 9,000 characters): **not simplifiable**, the ring is not rendered (`canSimplify()` in `src/lib/ai/simplify-limits.ts`, used by the call sites). Measured: Father divisions have p95 8,894 characters and 43 divisions over 50,000 [measured, `chat-design.md` §2.1]; those giant divisions need the reader's planned «load by division» work, not the simplifier.
- **Greek, Latin and Hebrew inside a paragraph:** copied unchanged (prompt rule + check 6); the `lang` attributes of the page are not reproduced inside the simplified text (it is plain text) — accepted: the original above keeps them.
- **AI-translated Spanish editions of the Fathers:** off in v1, as decided on 2026-11-04 (it would be an AI rewrite of an AI translation, two generated layers over the source). Decision for Pedro (README): turn it on with the label «Simplificado por IA de una traducción hecha con IA», or keep it off.
- **Copyrighted short quotes inside tradition pages** (CCC, BF&M): the simplification of the site's own paragraph may keep the quoted words (check 4 requires it) but never extends a quotation.
- **The second column** («Segunda traducción»): never simplified (DECISIONS 2026-11-04), unchanged.

## 7. «Any paragraph»: the entry points (new UI, waits for Pedro's choice)

### 7.1 Options analysed
| Option | At rest | Touch | Keyboard / screen reader | Discoverability | Cost exposure | Notes |
|---|---|---|---|---|---|---|
| **A. Reading-aids switch** («Simplificar párrafos», off by default) in the reader's existing «Aa» menu; when on, the approved ring appears as today | nothing | rings visible on every paragraph while on (the approved touch behaviour) | the switch is a standard `role="switch"`; rings are buttons | low (inside a menu) | low: only readers who opt in | needs an «Aa»-like place on pages that have none (tradition pages, glossary): a second question for the proposal |
| **B. «Simplificar» in the selection toolbar** (next to «Preguntar») | nothing | needs a long-press selection, then the toolbar (the readers already dock it at the bottom on phones) | toolbar buttons are focusable; selecting text by keyboard is hard → needs D | low–medium | low | only where a selection toolbar exists (Bible and Fathers' readers); the Bible is excluded, so in practice the Fathers' reader only |
| **C. Hover ring on every paragraph, always** (today's test build, extended) | rings on hover (desktop), **always visible on touch** | noisy: a ring on every paragraph | good | high | medium | Pedro does not want it |
| **D. Keyboard shortcut / long-press** as complement | nothing | long-press conflicts with the system's text selection on iOS and Android | a key (for example «S» on the focused paragraph) needs focusable paragraphs | none without a hint | low | only a complement |
| **E. Per-section affordance**: one quiet «Simplificar» text button at the start of a long reading block (a Father's work section, a long statement), which turns on the rings for that block | one small button per block | good (44 px target) | good | medium–high | medium | new element; must avoid the AI-slop list (no sparkle, no pill) |

### 7.2 Recommendation (agent's)
**A as the base, plus B in the Fathers' reader**, and the rings exactly as approved when the switch is on. Reasons: zero UI at rest everywhere (Pedro's «clean and seamless»); the people who read this way turn it on once (remembered in `localStorage`, like the other reading choices); B costs nothing new in the reader (the toolbar exists) and is the natural gesture there; C is rejected by Pedro; D's long-press fights the OS; E adds a new visible element to every reading block. Cost exposure is lowest with A. The open sub-question for the proposal: where the switch lives on pages without an «Aa» menu (tradition pages 03, 02 pages, glossary). The test build's rings on the Catholic and Baptist 03 paragraphs stay as they are until Pedro chooses.

### 7.3 The seam (so the rest of the plan does not wait)
The wiring block (S-UI) changes `SimplifiedParagraph` to take an `address` instead of a mock `entry`, and adds a tiny registry `src/components/simplifier/simplifier-openers.ts` (`registerOpener(id, open)`, `openSimplifier(id)`) and a visibility store `src/lib/simplifier-visibility.ts` (`"ring-on-hover" | "hidden"`, default `ring-on-hover` = today's behaviour). Every future entry point (the switch, the toolbar button, a section button) only calls `openSimplifier(id)` or sets the visibility store: **it never edits the component**. The entry-points block (S-ENTRY) waits for the proposal; nothing else does.

### 7.4 Proposal brief (AGENTS main rule; to publish as an Artifact before S-ENTRY)
- **Goal:** let any non-Bible paragraph be simplified, with nothing visible at rest, on desktop and phone.
- **Show, with real content and the real tokens, fonts and the approved ring and panel:** (1) today (rings on the Catholic and Baptist 03 paragraphs, always visible on touch); (2) A: the switch in the «Aa» menu of the Fathers' reader, and two candidate places for it on a tradition page (the page's header tools, or the footer of the «Qué enseña» section); (3) B: «Simplificar» in the selection toolbar of the Fathers' reader, desktop and phone (docked toolbar); (4) E: one section button at the start of a Father's work section. Each at 1440 and 390, light and dark, with the real pending state (dashed ring), the open panel, and the error state.
- **Explain each** in a few lines: where it goes, the reference (Readwise Ghostreader, Kindle, the site's own toolbar), what it costs (requests per reader), accessibility.
- **Discarded and why:** C (Pedro), D alone (OS conflict), a floating «AI» button, sparkle icons, gradients, a pill with a glowing border (AI-slop list, DECISIONS «Design principles» and `ai-chat-and-simplifier.md` §7).
- **To decide:** which option(s); where the switch lives on pages without «Aa»; whether the switch is per site or per page type.

## 8. Pre-generation and the «reviewed» label
- **What:** the paragraphs readers will meet first: the 20 tradition pages' definition and first three statements (≈ 80 paragraphs), the 02 pages' «Lo que todas comparten» paragraphs (≈ 10), and the first ten divisions of the three most-read early works (Didache, Ignatius *Smyrn.*, Justin *1 Apol.*, ≈ 30): ≈ 120 paragraphs × 2 languages where both exist.
- **How:** `tools/ai-pregenerate-simplifications.mjs` resolves the addresses, skips cache hits, sends the rest through the **Batch API** (−50 %), verifies like the endpoint, writes `status = generated`. Cost [estimate]: 120 × $0.0007 × 0.5 ≈ **$0.04** on Haiku 5.5; ≈ **$0.60** on Sonnet 5.5 (the better choice for texts that will be reviewed and kept).
- **Review:** `tools/ai-review-simplifications.mjs` writes a local HTML page (original, both levels, checks) for Pedro, and a `--approve <ids>` / `--reject <ids>` command updates `status`. The panel's footer status shows «Revisado» for `reviewed` and «Generado por IA, sin revisar» otherwise (the approved footer status slot; wording for Pedro).

## 9. Costs
One miss ≈ $0.0007 (≈ $0.001 pessimistic) on Haiku 5.5; hits are free; 5 USD ≈ 5,000–7,400 misses (`provider-and-models.md` §4). Limits: `abuse-and-cost-control.md` §2.
