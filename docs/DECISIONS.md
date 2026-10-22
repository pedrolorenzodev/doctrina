# Decisions

Newest first. Entries dated before the 2026-10-05 restart come from the v1 and v2 prototypes (consolidated from `handoff/`); they hold unless marked "Replaced by". Things not yet decided live in `ROADMAP.md` as "Decide:", never here. An "owner verdict" on a prototype is feedback, not an adopted design.

## 2026-10-21 · Structure proposal v2 approved, with the corrections agreed (Pedro chose)
**Chosen:** v2 of the structure proposal (https://claude.ai/artifact/EDPtLnLWu2fHscbBgmu7rM, republished) is approved «to move on, with all corrections agreed now and before applied» (Pedro, final note). Next: `docs/DESIGN.md`. Where marked "revisit on feedback", Pedro reopens it only if he gets feedback.
- Light-mode contrast: «Prosa más oscura». «Trazo más firme» rejected for now (too big a change); revisit only on positive feedback.
- Theme change: «Arco botón» (revisit on feedback). Neither the diagonal nor the vertical sweep convinced him.
- Section spacing: «Mucho aire» (revisit on feedback).
- Smooth scroll: «Apenas» (revisit on feedback).
- Sidebar children: «Despliegue» is the best opening; it also needs a closing animation, not as abrupt as today.
- Sidebar tree current-position mark: «Viaja» (great for now; revisit on feedback). Pedro disliked the previous one (off on the old item, on at the new one: abrupt).
- Tradition switch (03): «Deslizar», with a travelling indicator that moves continuously between tabs, no cut («great»). The content animation depends on the order in the switcher: a tradition to the right moves the content one way, to the left the reverse, both the exit of the old and the entrance of the new. A concept, not literal; smooth, subtle, not AI-slop.
- 09 «Tiempo contemporáneo»: «Avance fijo», with two fixes: (a) the «Leer el detalle» button is useless (the detail holds no more than the strip), so replace it with an element equivalent to the link «Ir a la página de Clemente de Roma», in the site's style; (b) the transition between the fixed strip and the item's detail must be very smooth and coherent (it stuttered, with a glitch when scrolling close to the detail).
- 09 «Fechas y autenticidad»: items in chronological order by the estimated date, earliest first; a range such as 110–140 sorts by its earliest year (110).
- 09: the Harnack reign span looks very good (yes).
- 09: the short letter descriptions replace the manuscript notes (Pedro: «excelente»; the old note's function was hard to understand and not useful in that spot).
- 04 footer: «Anterior» / «Siguiente» with the label «Siguiente objeción» is approved.
- Lists: the cascade applies to every list of similar items, including the objection rows of 02 «Las cinco respuestas» (opened by «Ver las objeciones que recibe») and the first entrance of each item as it scrolls into view in 02 «Lo que escribieron los primeros cristianos»; filtering or «Mostrar todos» already worked. Extends the 2026-10-21 entry on entrances.
- Links that open a modal keep their hover style while the modal is open; the style goes when it closes, so the reader can find which source was opened after scrolling (to try).
- 03 «Por qué» (and the similar component in 02 «Lo que todas comparten»): the mini author/source/death-date component must not have a fixed width (on «Juan Crisóstomo» the source wrapped and the «6» dropped alone to a new line); use the room on the right without clashing with the right-edge ruler.
- «Objeciones» page: title-only rows for the other traditions are fine for judging structure; its structure is very good for now.
- Earlier notes (2026-10-20) confirmed in v2: «transubstanciación» is not a glossary term in the proposal; «Con las preguntas» stays in 02 «Lo que todas comparten»; text centred in every button and chip (e.g. 03 «Videos» filters); 04 «Fuentes citadas» shows the year on each mini-timeline marker and the full date (abbreviated month) as text, else the year; 02 «La práctica» sources keep their faint style, add a hover state and open the citation window; 04 «Pasajes» (the short quoted selection) liked; Ignatius letter descriptions written from the facts and readings apologists of different traditions share (`docs/research/neutral/ignatius-letters-descriptions.md`), with no Greek name under each letter's title.
**Why:** Pedro reviewed v2 in four rounds on 2026-10-21 and found nothing else to fix.
**Discarded:** «Trazo más firme»; the diagonal and vertical theme sweeps; the sidebar mark that cut between items; the «Leer el detalle» button.
**Open, not decided** (ROADMAP "Now"): the date-title format in 09 «Fechas y autenticidad»; whether the page-change fade stays; a fast drag on the ruler breaks the filter animation (a trap to handle in the implementation, not now).

## 2026-10-22 · Apologetic answers: Pedro's four calls (Pedro chose)
**Chosen:** the *Catholic Encyclopedia* (1907–1912) stays where relevant and faithful to its sources, labelled as what it is (Catholic history of that date, not current apologetics); Catholic authors conceding historical facts are quoted openly, never caricaturing any tradition; the two debaters whose lines pull against official teaching stay out for now; Baptism OB-4's marked note is removed. Recorded in `docs/research/doctrines/apologetic-answers.md` («Pedro's answers»).
**Why:** Pedro's answers to the apologetic-answers research, 2026-10-22.
**Discarded:** excluding the *Catholic Encyclopedia*; softening the conceded facts.

## 2026-10-22 · Screens 07 (word study) and 08 (timeline): Pedro's picks (Pedro chose)
**Chosen:** 07: section order title block → «Dónde aparece» → «Qué significa» → «Los lugares, uno por uno» → «En los Padres que cita Doctrina»; «Dónde aparece» as rows with bars; «Los lugares» grouped by book, folded, with a filter styled like 03's Videos filter; «Padres» Spanish first, with the word's card; transliteration behind a «Transliteración» toggle, academic scheme (ē, ō, ph, ch); header facts in a row; a quiet «Viniste desde …» line only when the reader arrived from a verse or place; «Qué significa» redesigned so each sense has a plain-language title, an example verse and its origin as a small tag (variants pending). 08: «La regla arriba» to move across the years (span 190 years unless there's a reason for 188); selection «Banda de su época»; dates in the detail «Con rótulo»; detail in a «Panel fijo» (the side panel, Pedro confirmed); clicking the selected item again deselects it; ecumenical councils marked with the least visual noise (variants pending); for a Father or early writer, the detail says whether he has writings and which (the agent's design, kept unless Pedro objects). Proposal: https://claude.ai/artifact/N3z7ZePYG8wgBJGHgiJGHP (v2).
**Why:** Pedro's review of the 07/08 proposal, 2026-10-22; «Qué significa» showed the lexicon's a/b structure without explaining it.
**Discarded:** the other 07/08 options of the proposal.

## 2026-10-22 · Greek is always offered with its transliteration; word pages are not tied to one passage (Pedro chose)
**Chosen:** every place the site shows Greek (word study, Fathers' quotes, word by word, previous/next buttons…) shows its transliteration or offers to turn it on, with a clear, low-noise UI. Screen 07 (word study) is reachable from anywhere, so it carries no passage-specific labels or filters (no «En Juan 6», «Sus formas en Juan 6», a «Juan» filter option) unless the reader arrived from that passage. 07's counts are a quiet source link opening the citation window («Texto griego NA28 · datos de STEPBible (Tyndale House), CC BY 4.0») instead of a technical line in the body, plus the site's attribution page (CC BY placement to confirm with Codex). «En el Nuevo Testamento griego (27 libros)» → «En el Nuevo Testamento».
**Why:** Pedro: most readers can read or at least follow transliterated Greek; the John 6 bits were artefacts of the proposal's data; the technical line adds nothing the reader needs on the page.
**Discarded:** Greek without transliteration; removing the data credit entirely (CC BY requires it; the trust rule needs the edition reachable).

## 2026-10-22 · Code foundation before B1, and pixel-perfect block verification (Pedro chose)
**Chosen:** (1) the ten "decide before B1" items of `docs/research/code-foundation.md` (Prioritised checklist): Node 24 LTS pinned, lockfile, `npm ci` + `npm run verify` locally and in GitHub Actions CI (remote `git@github.com:pedrolorenzodev/doctrina.git`); stricter TS flags (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`; drop one only if a library forces it, recorded); the four layers enforced by ESLint with one fixture per forbidden edge; locale contract (typed `Locale`, `[lang]`, invalid-locale handling, server-only dictionaries with exact es/en key parity, one locale-preserving link helper) plus a lint against literal UI text in JSX (the agent's addition, against mixed languages); tokens only, arbitrary values forbidden by lint, shadcn adapted one primitive at a time; theme first paint without flash, tested; Prettier checked in `verify`, no mutating pre-commit hook; one searchable component inventory with a "search before create" gate; locale-aware not-found and error boundaries; B1 baseline measurements. Before B2: the content validator with the spike's model changes (`docs/research/data-model-spike.md`) and the test split (Vitest for logic, Playwright for behaviour). Deferred until a measured need: Storybook, graph tools, an i18n framework, ISR, PostHog/Sentry. (2) UI is built in small blocks; before a block is called done, its agent launches a Sonnet 5.5 verifier that uses Playwright to compare the block pixel by pixel against the approved design (the archived artifact code in `docs/research/proposals/site-clean/`, same viewport, theme, fonts and state), checks its behaviour for bugs, and compares its animation frame by frame. Method in `.claude/rules/ui.md`.
**Why:** Pedro: «van todas»; a base strong and scalable enough not to change structure later; the design is set with exact values, so the work is replicating it pixel-perfect, cautiously, block by block.
**Discarded:** deciding the foundation block by block; visual review by eye only.

## 2026-10-22 · Screen 09 settled; 03–06 approved as built (Pedro chose)
**Chosen:** 09 «Tiempo contemporáneo»: «Avance fijo» definitively, plus a subtle shadow or blur over the fixed strip so it reads as fixed above the timeline content. «Fechas y autenticidad»: the two-line title «Fecha y, debajo, qué se fecha» (closes the open date-title format question). «Dónde aparece en Doctrina»: «Lugar al margen» (the Doctrina / Biblia / Historia split is much clearer). The new letter descriptions and their translations: approved («GENIALES»). Screens 03, 04, 05 and 06 approved as in the clean site https://claude.ai/artifact/2vNESx39NbVWC79eyVDPg2, pending outside feedback; open: a redesign of the citation window («se siente como la v1… no pega con el resto»), variants to come.
**Why:** Pedro: in some cases the description under the date makes the dating easier to understand; the margin split by area is clearer.
**Discarded:** the other 09 detail options; Codex's one-line date format.

## 2026-10-22 · Holy See quotation rule: option B, with A for sensitive texts (Pedro chose)
**Chosen:** option B of `docs/research/sources/holy-see-quotation.md` §7: at most 100 words or one short paragraph (whichever is shorter) per Holy See document per page, and 250 words from that document across one lesson; at least as much of our own analysis as quoted text; no serial excerpts; full source record. Option A (50 words or one sentence per page, 100 per lesson) for short documents, the Joint Declaration (1999) and any source available only under restrictive site terms.
**Why:** the research's recommendation; most useful while keeping risk moderate. These are internal product limits, not legal thresholds; counsel questions (§8) stay for before monetization.
**Discarded:** A everywhere (too tight for doctrinal propositions); C (too close to substituting the document).

## 2026-10-22 · Implementation start: the six open calls (Pedro chose)
**Chosen (all the recommended options, `docs/features/implementation-start.md`):** (D3) English at launch: shell and UI strings only; English content pages appear when their copy is drafted and reviewed, in one batch once the Spanish content is stable; (D8) after import, `src/content` is the source of truth for site copy and the dossiers stay the research record; (D7) psalm and verse numbering: RV1909's in site text, each document's own inside its quotes; (D9) links to pages that don't exist yet render as plain text, no dead links or disabled tabs; (D12) every size, colour and duration is a named token in one place, one-off values included; (spike) a throwaway script outside `src/` converts the five reviewed dossiers and type-checks them against the model before building on it.
**Why:** Pedro: «todas a». English: translating now would mean translating again as the dossiers keep changing; review rules for English are still undecided.
**Discarded:** AI-drafted English content marked draft; no `/en`; dossiers as source of truth; Vulgate numbering on Catholic pages; disabled tabs; arbitrary values for one-offs; skipping the spike.

## 2026-10-22 · Screen 03 «Qué enseña»: five statements, more when an objection's target would be hidden (Pedro chose)
**Chosen:** five statements visible by default, then «Mostrar N afirmaciones más»; exception: if a statement the objections answer would land in «ver más», it stays visible (Baptism shows six: QE-1, QE-2, QE-11, QE-3, QE-4, QE-5). Justification shows five.
**Why:** Baptism's objections target QE-3 to QE-5; hiding one would hide what is being discussed. Pedro asked whether Baptism's six clashed with Justification's five; option (b) keeps one simple rule.
**Discarded:** always five (QE-4 or QE-5 of Baptism into «ver más»); a free count per doctrine.

## 2026-10-22 · Verse wording in titles and short quotes; harsh titles keep their status on 03 (Pedro chose)
**Chosen:** (1) A verse quoted in an objection title or a short quote uses RVR1960 wording when the publisher's quotation allowance permits it (Codex is checking the terms), otherwise RV1909; the full reader stays RV1909. Standing rule: don't ask Pedro again. (2) An objection title with harsh words (Papacy OB-7 «…: es el Anticristo») is shown whole on screen 03, with a status line under it in the 03 objection list; to try in the proposal, since 03's list has no slot for it today. (3) Papacy QE-7 shows its basis line with no «Dogma» label, because the Church's classification names the primacy and infallibility, not the proem's principle of unity.
**Why:** Pedro: «si se puede la RVR1960 genial, sino la que tenemos actualmente RV1909»; he prefers the whole title on 03 «siempre que el espacio lo permita»; «Dogma» only if technically correct.
**Discarded:** OB-7 with a title without the identification; a «Dogma» label on QE-7.

## 2026-10-22 · Research order: content first, debate layer paused (Pedro chose)
**Chosen:** Codex's research runs in this order: each tradition's doctrine dossiers (official layer, objections included); the Bibles in Spanish and English, Protestant and Catholic (66 and 73 books); the Church Fathers with verified dates and works; complete, verified historical sources; small checks. The YouTube debate layer (deep passes, audio checks, debate layer for other traditions) is paused; Papacy's deep pass closes now as a sparse corpus. A deep pass that can't reach 20 exchanges after a bounded extra search (~1 h) closes with what exists.
**Why:** Pedro: the debate layer was taking too long (Papacy took a whole night) while the base content, Bibles and Fathers matter first.
**Discarded:** finishing the Sola Scriptura deep pass and the audio check before the rest.

## 2026-10-22 · Reader notes: «Notas al costado», filters «Campo y menú» (Pedro chose)
**Chosen:** notes per source (general, and anchored to ≥ 1 word) shown as «Notas al costado» on wide screens, switching to «Marca en el margen» with its animation when the right panel opens, kept exactly as built (proposal https://claude.ai/artifact/NYBF1wY8WNz2rpDAPPKutn). A note on a selection that spans verses takes the whole range (Juan 6:53 into part of 6:58 → «Juan 6:53-58»). «Borrar nota» asks for a deliberate confirmation (hold ~3 s, subtle red details). In the panel, verse labels such as «Juan 6:53:» use the yellow `#d6a865`. Filters in «Tus notas»: «Campo y menú» (search field + «Mostrar» / «Ordenar» pickers; text search shows the matching excerpt; highlights by colour). Research: `docs/research/reader-notes.md`. Saving per user decided later.
**Why:** Pedro: «Notas al costado» is «increíblemente pensado»; «Campo y menú» convinced him by its simplicity («si recibo feedback estoy dispuesto a modificarlo»).
**Discarded:** «Solo en tu cuaderno»; filters «Campo a la vista» and «Filtrar» plegado.

## 2026-10-21 · Screens 05 (source) and 06 (verse): the reader's structure (Pedro chose)
**Chosen:** proposal https://claude.ai/artifact/NYBF1wY8WNz2rpDAPPKutn (rounds of 2026-10-21, 17:50 to 22:20).
- **Way in and back:** the reader is a layer over the page. Tapping a sentence or verse opens a side panel, with the tabs «Pestañas» («Términos», «Usos», «Traducciones»); the tab selector uses «Deslizar», the same motion as the tradition switcher on the Objeciones page (rule: if a similar component already has an approved animation, offer reusing it).
- **«Citar» and «Dónde se usa en Doctrina»:** in a side column, «Dónde se usa» about 55 px below «Citar»; at the end of «Citar», the buttons «Citar» and «Citar con texto» side by side, «Copiar enlace» below (what «Citar» copies: entry above).
- **Latin:** «Leer en latín» adds only the tapped paragraph's Latin under that paragraph (not the whole chapter), look «Con raya», so the difference from the translation is obvious at a glance. Seeing the whole text in the original language: the «Selector en el texto» component with No / Debajo / Al lado, placed exactly where «Idioma en la barra» sits, in the reader bar.
- **Reader bar (05):** text size 17–29 px (the maximum goes further up than the proposal's first version); the same translation picker as 06 at the far right, apart from the text-size control, replacing the «Traducción RV1909» button above the text.
- **06 translation picker:** one element that expands into the list; collapsed it shows only the abbreviation (the list says «Revised Standard Version (RSV)», the element «RSV»); two groups, «Español» and «Inglés», no «Todas» (as Bible Gateway).
- **06 «Dónde se usa en Doctrina»:** shows 1 item plus «Ver N más», which can be hidden again (on Juan 6:53 the long list reached almost the end of the word-by-word section).
- **06 «En griego, palabra por palabra»:** full width of the container, variant «Ficha al lado»: hovering, tapping or focusing a word shows its card (Strong's and NT count first), no click.
- **06 «Comparar traducciones»:** filter «Español con español» (default) / «Inglés con inglés» / «Todas»; the current list stays.
- **Screen header:** the hairline under «Volver a donde estabas» sits at the same distance from the title as 03's title-to-line distance (the proposal had it almost glued; same on 06 Trento).
- Research behind the choices: `docs/research/reader-side-panel.md`, `reader-highlighting-and-features.md`, `reader-notes.md`. Highlighting and notes: the two entries above.
**Why:** Pedro: the layer keeps the reader on the page; he «LOVES» the side-panel orientation, but its content in the first proposal repeated the selected text verbatim and smaller, and the Latin in the same type as the translation was «very bad»; «Pestañas» is the cleanest. Every tool the reader uses to study sits in one place without leaving the text.
**Discarded:** a site page with a «Volver» strip; the detail page and the card under the paragraph as ways to open a verse; the panel repeating the selected text; Latin for every paragraph at once, looking like the translation; a fixed card or tiles for word by word; «Todas» as a translation group.
**Open** (ROADMAP "Now" 4): the OpenGNT licence (CC BY-SA against DECISIONS 2026-10-09's CC BY-only rule for word data); whether «Fecha» and «Edición y licencia» stay at the reader's foot; the notes questions (browser storage at launch, word notes across translations, a site-wide «Tus notas» page, links in notes). Pedro also asked for a bug fix: the right panel's header and hairlines must line up with the reader bar (A−/A+, RV1909).

## 2026-10-21 · Justification: objection titles in informal-debate language (Pedro chose)
**Chosen:** only the titles change, not the syntheses. OB-2 «Dios no me hace justo por dentro: me declara justo por Cristo»; OB-3 «Después del bautismo, lo que queda adentro sigue siendo pecado»; OB-4 «El cielo es un regalo: no se gana con obras»; OB-6 «La salvación es obra de Dios solo: uno no pone nada». OB-1, OB-5 and OB-7 keep theirs. Applied in `docs/research/doctrines/justification/catholic.md`; log in `decisions-2026-10-20.apply.md`.
**Why:** Pedro: titles should sound like the debate, in plain words (OB-2: «much better»).
**Discarded:** OB-3's draft «Aunque esté salvado, sigo siendo pecador»: it says every saved person is still a sinner, while the point is what remains inside the person after baptism.

## 2026-10-21 · Reader: highlighting by sentence and by dragged words (Pedro chose)
**Chosen:** option C of `docs/research/reader-highlighting-and-features.md`: «Subrayar» in the side panel marks the whole sentence or verse, and dragging over words opens a small toolbar («Subrayar», «Copiar cita», «Copiar enlace», «Buscar»), below the selection on desktop, docked at the bottom on touch. A soft fill, never an underline (underline means link); colours chosen before highlighting (Pedro, 2026-10-21, later the same night: «diferentes colores», in tones that fit the design system, with the least visual noise). The drag toolbar has no «Copiar enlace». Five tones (amarillo, verde, celeste, rosa, naranja, each with a dark variant) and «Colores en la barra»: the five dots always visible, tapping one highlights in that colour (Pedro, 2026-10-21, replacing his earlier pick «Muestra junto a Subrayar» the same night). Reader text size 17–29 px in seven steps; the 06 translation picker also at the far right of 05's reader bar (Pedro, 2026-10-21). How highlights are saved per user is decided later. Proposal: https://claude.ai/artifact/NYBF1wY8WNz2rpDAPPKutn.
**Why:** Pedro: «Me interesa el C, eso es lo que quiero». Readers' top complaint in reviews is losing highlights (research, 437 mentions).
**Discarded:** A (whole sentence only). Replaces the 2026-10-06 agreement of no free text selection in the reader.

## 2026-10-21 · «Citar» copies the short citation (Pedro chose)
**Chosen:** «Citar» copies the short form, e.g. «Concilio de Trento, ses. XIII, cap. 4 (1551)»; «Citar con texto» copies the quoted text + the short form + the Doctrina link; the full form with edition and page lives only on the source page (reached by the link), not in any button. On screen the citation is also short.
**Why:** Pedro: in YouTube debates the citation shown under a quote of a Father or source is always the short form; the target readers cite in debates, videos and social posts. The short form is unambiguous (session/chapter/canon numbering is the same across serious editions), and the edition stays one click away.
**Discarded:** a «Cita académica» button with the full form; copying the full form by default.

## 2026-10-21 · DESIGN.md gaps: first-visit theme, folded objections, and the agent's calls (Pedro chose two)
**Chosen:** (1) first visit follows the device's light/dark setting (Pedro); (2) 02 «Objeciones que recibe» starts folded (Pedro). Agent's calls, open to Pedro's veto: touch hit areas ≥ 44 px without changing visible size (`ui.md` wins over the proposal); Tailwind's default breakpoints, 1099 → 1024, 899 → 768, 720 → 640; «Con las preguntas» on, as decided; the travelling tradition indicator also on 03's switcher; prev/next footer hides the missing side.
**Why:** gaps and contradictions found while drafting `docs/DESIGN.md` from the approved v2.
**Discarded:** always light or always dark on first visit; objections open by default; the proposal's own breakpoints.

## 2026-10-21 · Coding starts once the five Catholic dossiers are reviewed (Pedro chose)
**Chosen:** option C of the docs audit (2026-10-21): coding starts when Pedro has reviewed the five Catholic dossiers (Eucharist, Justification, Baptism, Papacy, Sola Scriptura), and we push to get there fast. UI code still also waits for `docs/DESIGN.md` (`AGENTS.md`).
**Why:** a data model tested on five doctrines is stable before code depends on it.
**Discarded:** A, start after the Catholic Eucharist alone (soonest, but the schema is tested on one doctrine; the agent's recommendation); B, the Eucharist across all traditions (those dossiers don't exist, and it goes against the 2026-10-17 «Catholic dossiers first»).

## 2026-10-21 · Entrances: titles by lines, lists in cascade like sura-clon (Pedro chose, provisional)
**Chosen:** for now, open to change after outside feedback. (1) Page titles: «Título» on every page (Pedro, 2026-10-21, after a second look; replaces «Título por líneas», chosen earlier the same morning): only the page header block (crumbs, kicker, h1, lede, fingerprint, caption, facts) fades from 0 to 1 in 700 ms, `cubic-bezier(0.33, 1, 0.68, 1)`, 80 ms apart, no movement. (2) Lists of equal items (witnesses filtered by the living ruler, objections, sources, passages, videos, connected doctrines) enter and change with the cascade of sura-clon's «Participantes» on `/tournaments/[id]`, replacing the proposal's «Listas» values. Exact source in `~/Desktop/dev/sura-clon`: `components/sections/reveal-list.tsx` (`RevealList`), `lib/use-reveal-on-view.ts` (IntersectionObserver, rootMargin `0px 0px -15% 0px`, states armed → shown, once), `lib/use-flip-list.ts` (FLIP on change: items that stay slide to their new place in 380 ms; items that leave fade out and scale to 0.96 in 180 ms as ghost copies; new items rise 8 px and fade in 420 ms after 120 ms, 40 ms apart, at most 8 steps; the list height animates), `app/globals.css` (`@utility row-reveal`: from opacity 0 and `translateY(8px)`, 420 ms, `--ease-reveal: cubic-bezier(0.22, 1, 0.36, 1)`, delay `index × 60 ms`; tokens `--row-reveal-*`, `--flip-*`); used in `components/sections/tournament-tabs.tsx`. (3) Page change: «Fundido» on, to review later whether it stays (Pedro: «por ahora un sí»): only the main content fades in 220 ms ease-out when moving to another screen; header and sidebar stay solid. Nothing animates under `prefers-reduced-motion`.
**Why:** Pedro first liked «Título por líneas» with the subtler title on 04 and 09, then preferred «Título» everywhere («por ahora»); the list cascade is the one he picked in sura-clon on 2026-10-20.
**Discarded (for now):** «Sin», «Título por líneas», «Asentarse», the proposal's «Listas» values, «Dreamorphics».

## 2026-10-20 · Structure proposal: the design direction holds (Pedro's verdict)
**Chosen:** everything in the structure proposal (https://claude.ai/artifact/EDPtLnLWu2fHscbBgmu7rM, screens 02, 03, 04, 09 in the new direction) that Pedro did not correct counts as approved for now: styles, colours, fonts, spacing, animations, components, hovers. His notes are listed under ROADMAP "Now" item 1 ("Pedro's notes on the structure proposal"); anything approved by silence is reopened only if he gives feedback on it later.
**Why:** Pedro: «tené en cuenta todo lo que no te corrijo… como que me encantó»; «está MUY bien la orientación del diseño y el resultado».
**Discarded:** nothing.

## 2026-10-20 · Videos show their cover image (Pedro chose)
**Chosen:** every video in a «Videos» section shows its cover image as a preview that opens the video, besides the link. The structure proposal shows none, most likely because proposal pages can't load outside images (the Artifact page blocks them; covers would have to be embedded); its builder recorded no reason. Not a design choice.
**Why:** Pedro wants the cover in the design.
**Terms researched 2026-10-21:** `docs/research/youtube-covers.md` (official YouTube pages only; recheck the revision history right before implementation). The lowest-risk pattern: unmodified YouTube thumbnail, exact title and channel, an official YouTube attribution icon, one card action opening the exact watch URL (with the cited `t=` offset); a custom play button over it must start playback.

## 2026-10-20 · «Objeciones» is its own page in the sidebar (Pedro chose)
**Chosen:** option 1 of https://claude.ai/artifact/Ba4iz7c78D8wXr4p8MEr3Y. Under each tradition, «Objeciones» opens its own page, an index of the objections to that tradition's position («Objeciones a la posición católica»); it takes the normal selected state and stays marked as ancestor while an objection page (04) is open. In the tradition page (03) the «Objeciones» section shows a few objections plus «Ver las N objeciones», like «Ver los N pasajes». The page has the tradition switcher (Pedro, 2026-10-20), keeping the reader on the objections page of the tradition picked. Replaces in part 2026-10-14 ("no separate objections page"); the breadcrumb's «Objeciones» now leads to this page.
**Why:** the anchor sat at the same level as the page «Pasajes» and read as a page but never showed as selected. Research (`docs/research/sidebar-sections.md`, 12 sites): 7 make a group its own overview page (Docusaurus, Next.js, Stripe, GitBook, Vercel, Mintlify, Sefaria); no site mixes page and section links at one level and highlights the sections. Making «Objeciones» a page puts it on the same footing as «Pasajes».
**Discarded:** a grey caption over the objection pages (Apple Developer); an expand-only group (Tailwind, Mintlify, MDN); highlighting sections in the left tree (only Wikipedia, whose sidebar has no pages).

## 2026-10-20 · Opening a doctrine a tradition rejects: the reader's question, the tradition's answer (Pedro chose)
**Chosen:** option C of https://claude.ai/artifact/CjA4GXmm8tNgWjiz9rhQt8. When a tradition's page covers a doctrine it rejects (e.g. the Catholic page on Sola Scriptura), "Qué enseña" opens with the question as readers ask it («¿Solo la Escritura?»), answered by the tradition's own text (Dei Verbum 9: «no deriva solamente de la Sagrada Escritura…»), then its positive teaching; the definition only affirms. The question is the reader's, the answer is the tradition's: the site never says «no acepta». Applies to every such case (e.g. a Baptist page on the Papacy). Pedro also praised the page's distribution of content, colours and text styles («MUY buena»): a reference for the structure proposal.
**Why:** Pedro's preference after seeing the three options on real text.
**Discarded:** A (affirm first, then DV 9's rejection); B (the dossier's draft, «La Iglesia católica no acepta la sola Scriptura…»: the site's voice states the rejection).

## 2026-10-20 · Baptism: the debate objections that stay (Pedro chose)
**Chosen:** Pedro approved every objection that passed the Baptism pilot's Spanish pass («todas… son geniales, quiero que queden»), worded as heard: «Muéstreme en la Biblia un solo bebé bautizado» and «Un bebé no puede creer ni arrepentirse: primero se cree, después se bautiza» (two separate objections); «El bautismo no salva: lo que salva es la sangre de Cristo»; «Los niños no tienen pecado: de ellos es el reino de los cielos»; «Los versículos que citan los católicos no enseñan que el bautismo salve» (grouped); «Bautizar es sumergir: un poquito de agua en la cabeza no es bautismo»; «El ladrón en la cruz no se bautizó». Sources, counts and anchors: `docs/research/doctrines/baptism/debate-objections/spanish-debates.md`, verified 2026-10-20 (`spanish-debates.verify.md`: all seven still pass; corrected counts 7, 10, 8–11, 9, 6, 5, 6). Each answer follows the official-texts-first rule (for the thief, the Catechism doesn't name him; the answer comes from its teaching that God is not bound by the sacraments and on baptism of desire, CCC 1257–1261).
**Why:** they are the objections Pedro hears in real debate; the two infant-baptism halves are different arguments (a biblical example vs the infant's faith) and each passes alone.
**Discarded:** merging the two infant-baptism objections; dropping the thief on the cross because the Catechism's principle (CCC 1257–1261) already answers it.

## 2026-10-20 · Answers from apologetics where official texts are silent (Pedro chose)
**Chosen:** when an objection gets no explicit answer in the answering tradition's official texts, the answer comes from that tradition's apologetics, by the same process as debate objections: official texts first; only if they are silent, an apologetic answer that applies what the tradition officially teaches (never new doctrine), raised by several independent apologists, preferring answers no other member of that tradition is found contesting; on the page a quiet mark (e.g. «Respuesta frecuente en la apologética»), names and dates in the source window. Replaces the line «Los documentos citados no comentan…» (six-decisions page, question 4) and the on-page "apologistas católicos (Catholic Answers)" label of the popular-objections entry below. Visual form to be reviewed later.
**Why:** Pedro: leaving the answer empty when apologists give a strong biblical defence would be unfair to the tradition.
**Discarded:** «Los documentos católicos citados no comentan…» at the end of the answer; recording the gap only in the dossier.

## 2026-10-20 · Justification: the Joint Declaration line after the canon (Pedro chose)
**Chosen:** in Justification, Catholic answers to Lutheran objections end with Trent's canon and then the Joint Declaration's line on the scope of those condemnations (JDDJ 41–42), as the Church's own signed qualification. Six-decisions page, sub-question of "¿Cómo termina cada respuesta católica?".
**Why:** the recommended option: it is the Church itself, with its signature, qualifying the reach of those condemnations.
**Discarded:** the canon only, with the Declaration only in its own "Qué enseña" statement.

## 2026-10-20 · Objections from debates: a "frequent in debate" layer, anchored in official texts (Pedro chose)
**Chosen:** besides the objections found in official texts (rule for those still open: six-decisions page, question 1), screen 04 gets objections taken from the most famous debates and apologetics between traditions. Selection: frequency (raised across several independent debates or books, not one) and the other side takes it seriously (its apologists answer it). Each one is anchored in what the objecting tradition affirms officially, shown in its own words («Para los bautistas, el bautismo es un acto simbólico (Fe y Mensaje Bautista VII); de ahí la objeción de que…»); with no official text to anchor it, it doesn't go in. On the page, no debater's name: it reads «Desde la tradición X se objeta que…» with a quiet mark «Frecuente en el debate»; where it is raised (debates, books, with names and dates) goes in the source window like any citation. The mark's look is decided in the visual proposal. Each objection is worded the way it is heard in popular debate (Pedro: «la objeción con las palabras y formulada de la forma en que se escucha popularmente, es la mejor forma»): an official-layer objection that debate also raises keeps its official sources and takes the popular wording. Pilot on one doctrine (Baptism) before extending. Both layers form one list of objections, never separate sections; the mark sits inside each debate-layer objection (Pedro). Who raises it does not have to belong to the line the site uses for that tradition (Pedro chose, after the Baptism pilot found that no popular debater was Southern Baptist or Assemblies of God): what ties the objection to the tradition is the anchor in its official text; each debater's affiliation goes in the source window. Re-readings of the same proof texts form one objection (Pedro chose): e.g. «Los versículos que citan los católicos no enseñan que el bautismo salve», with each verse inside it (Acts 2:38, 1 Pet 3:21, Mark 16:16, John 3:5, plus 1 Cor 1:17), its re-reading and the answer to each; frequency is counted for the group. In the official layer, an objection is only what a tradition rejects or denies in words (six-decisions page, question 1, option 1); exclusive definitions such as BF&M VII enter through the debate layer.
**Why:** Pedro: a reader doesn't care whether an objection is verbatim in an official text, and "this objection is made by Rodrigo Gómez" reads oddly; the official-only rule left Baptists and Assemblies of God with no objections where they object most in real debate. Agent objections, accepted: a popular argument must not read as a confession's teaching (hence the anchor and the mark); audience reactions are partisan (hence frequency and the other side's answer as criteria).
**Discarded:** the three options of six-decisions question 1 as the only source of objections; naming the debater on the page; "doesn't contradict its sources" as the only filter; ranking by comments or reactions. Extends the 2026-10-15 "who speaks for each tradition" for this layer only; the popular-objections tier of today's entry below is the same layer.

## 2026-10-20 · Catholic Eucharist review: Pedro's answers (Pedro chose)
**Chosen:** on the review page https://claude.ai/artifact/M9eoQq4bpGawrihps2U3rh (questions and recommendations in `docs/research/doctrines/eucharist/review-page.data.js`, `QUESTIONS`), Pedro accepted the recommendation of questions 1–3 and 7–17 as written. Questions 4, 5 and 6 are the three entries below. These answers hold for all five Catholic dossiers (Eucharist, Justification, Baptism, Papacy, Sola Scriptura), and so answer the six-decisions page's questions on Bible wording, harsh language, how answers end and insider terms (Pedro, 2026-10-20). In the dossier's synthesis QE-1, «signo o figura» stays (Trent's words, *in signo vel figura*); «símbolo» is used where Baptists speak (BF&M 2000: "symbolic act") and in objection titles. Every quote modal labels which text is the original («Latín · original»); translations keep only the language name.
**Why:** Pedro read the old review page (built 2026-10-18, before the new visual direction); its design notes are checked against the structure proposal first (`ROADMAP.md`, "Now" item 1).
**Discarded:** see each question's options in the data file.

## 2026-10-20 · Popular objections: a labelled tier, official texts first (Pedro chose)
**Chosen:** very popular objections with no official text behind them (John 6:63; the ban on drinking blood, Lev 17:10-14, Acts 15:20, 29) are kept. First search official texts for an answer (the Catechism cites John 6:60-67). Only where none answers, a separate tier "objeciones populares", labelled the same on both sides: the objection from a named popular apologist of the objecting tradition, the answer from named Catholic apologists (Catholic Answers, which Pedro calls the most influential), shown as "apologistas católicos (Catholic Answers)", never as "la Iglesia enseña". Short quotations only (copyrighted). Prefer claims no Catholic source is found contesting, stated as "no critique found", never as proof there is none.
**Why:** Pedro: «es una objeción sumamente popular que sería MUY ÚTIL proporcionar la respuesta católica». Extends 2026-10-15 "Which texts each column quotes" for this tier only.
**Discarded:** dropping them (the review's recommendation, question 4); popular apologists as the voice of a tradition outside this tier.

## 2026-10-20 · Objections: four objector texts, a deep answer (Pedro chose)
**Chosen:** per objection, at most four texts from the objecting tradition(s), the four that best state and support it: one shown, three behind «ver más». The answer to the objection is broad and deep, as detailed as the sources allow; today's answers are too summarised. Depth comes from more cited texts of the answering tradition, never from the site's own voice. Objection titles built on a verse quote its wording in the form debaters use; in Spanish this may be the Reina-Valera 1960 as a short quotation (Hebrews 10:10, «una vez para siempre»; RV1909 says «una sola vez»), in English the BSB ("once for all").
**Why:** Pedro: «no me va tantos textos de parte de los objetores»; «en todos los debates… siempre lo escuché "once for all"».
**Discarded:** the full set of objector texts; short answers; RV1909 wording in such titles.

## 2026-10-20 · Harsh language: shown whole, with each body's current status (Pedro chose)
**Chosen:** the 2026-10-15 rule (Heidelberg Q80 and anti-papal passages: original plus each body's current status) applies to every harsh passage, including Smalcald II.2.1 and the 1895 Encyclical. Harsh wording is quoted whole, never softened; the status line is a fact next to it (e.g. the Church of Scotland's 1986 Declaratory Act). Texts are chosen because they best make the point, never because they are harsh; if the best text is harsh, it goes in whole.
**Why:** Pedro: «prefiero dejar a la tradición hablar por sí misma en temas que considera tan importantes como para usar palabras fuertes». Agent objection, accepted: without the status line the site would present as current what a body withdrew; choosing texts for harshness would set traditions against each other.
**Discarded:** reformulating the rule as Westminster-only; choosing texts for their force.

## 2026-10-20 · Living ruler markers: "Ola" hover effect (Pedro chose)
**Chosen:** in the living time ruler, markers stay small; the pointer snaps to the nearest witness (a tap without dragging picks it and scrolls to its quote; dragging still filters years). Hover effect "Ola", from Stripe Press: witnesses near the pointer rise on a thin accent stem, more the closer they are; the hovered one rises highest with a label "Name, date"; the selected one stays raised. Requirements for the build: the stem grows from the axis upward and never shows below it; every marker returns to the axis smoothly at the same speed (a fixed 200 ms `ease` tween from wherever it is); the wave is centred on the snapped witness and its targets change only when that witness changes, never on every pointer move (as Stripe does); labels of markers near either end anchor inward so they never overflow the page (seen at 390 px on 2026-10-20). Proposal: https://claude.ai/artifact/MnpAjinbUzH3vaRLduyXqc (version 3).
**Why:** Pedro: the dots are too small to pick when several are close, and he didn't want them bigger; the hovered and selected one had to stand out. The two requirements fix bugs he saw in version 2: the stem hung from the moving dot and could peek below the axis; CSS transitions shorten when reversed mid-way, so fast sweeps made markers drop at uneven speeds. Version 3 still followed the exact pointer position, so a slow horizontal sweep restarted every tween dozens of times a second and stuttered (version 4 fixes it).
**Discarded:** "Halo" (scale with overshoot, ring, one-off ping, neighbours dimmed); "Lupa" (fisheye spreading of crowded markers); the previous effect (colour and slight scale only, no snapping); larger dots.

## 2026-10-19 · Asterisk reference discarded entirely (Pedro chose)
**Chosen:** nothing from reference 8 (`docs/research/visual-references.md`, Asterisk magazine): no left-margin section ruler, no large accent-colored title, no accent citation numerals, no warmer paper with pure black text.
**Why:** Pedro: the right-edge Stripe Press ruler already shows the page's sections ahead and where the reader is, so the margin ruler adds nothing; «descartemos la referencia entera».
**Discarded:** keeping the accent title, accent numerals or warm paper while dropping only the ruler (agent's question).

## 2026-10-19 · The Met "museum object" page set aside, for now (Pedro chose)
**Chosen:** reference 6's direction (a person page laid out like The Met's object page) is not pursued for now, nor its image treatments (painting as the object, full-width with text over it, lapis monotone). Demo: https://claude.ai/artifact/Qt9MmFmXnZdSyLDpaf6dqG
**Why:** Pedro: «no me gustaron los diseños y propuestas de artifact», «por ahora ignoramos».
**Discarded:** the four versions of the demo. Whether person pages carry historical images at all stays unanswered.

## 2026-10-19 · No Craig Mod typographic devices (Pedro chose)
**Chosen:** none of reference 7's devices (`docs/research/visual-references.md`): heavy drop cap opening sections, italic standfirst, tight title tracking, short centered rule between sections, hyphenation. Guide: https://claude.ai/artifact/Jrbb9kDqqQBkPco141bHLP
**Why:** Pedro: «no lo banco para nada, lo descartamos».
**Discarded:** the guide's "Estilo Craig Mod" preset and each switch on its own.

## 2026-10-19 · Doctrine fingerprint, with Stripe Press motion (Pedro chose)
**Chosen:** each doctrine gets a "fingerprint": a strip from year 1 to 2026 with one thin tick per text or event the site cites, at its year (ranges as a faint band); hovering shows what each tick is. Motion is version 2 of the proposal, Stripe Press's ruler copied from the frame-by-frame analysis (`docs/research/stripe-press-ruler.md`): short ticks at rest, a wide cosine bulge (2.5 + 2·cos, up to ×4.5) that follows the pointer at 200 ms `ease`, the label fading in while rising 5 px, and ticks drawing in one after another on load. It appears everywhere the component is shown: doctrine header, doctrine cards (including comparison lists such as "Doctrinas conectadas") and, as a still image, the share preview. The entry animation is not repeated across the site; it may be tried on the right-edge page ruler. Proposal: https://claude.ai/artifact/LfBS993NPdDeVmDug3gyhq
**Why:** Pedro: «le da una muy buena estética»; the entry animation is «sumamente smooth, aunque sutil, y es MUY gustosa de ver». Motion approach to keep for the future: subtle, smooth, driven by the reader, few signature animations rather than the same one everywhere.
**Discarded:** highlight only, no motion (version 1); a narrow "lens" bulge with overshoot (version 3); keeping the fingerprint out of comparison cards (agent's proposal: next to each other they can read as "this doctrine is new", e.g. Sola Scriptura).

## 2026-10-19 · Living time ruler in "Lo que escribieron los primeros cristianos" (Pedro chose)
**Chosen:** option C of the proposal: a horizontal ruler from year 1 to 800 for every doctrine, sticky at the top of the section while reading, with a lapis block marking the witness being read; dragging over it filters the witnesses to those years; a name and its marker light up together on hover. Tapping a marker scrolls down to that quote. Each witness block's work and locator ("Carta a los Esmirniotas, 7.1") open the citation window, whose "Abrir la fuente completa" leads to the reader at that paragraph, highlighted (pattern agreed for screen 03; not yet shown in the demo). Proposal: https://claude.ai/artifact/MnpAjinbUzH3vaRLduyXqc
**Why:** the ruler stops being decoration and becomes a reading and filtering tool (Ciechanowski, Asterisk, Stripe Press in `docs/research/visual-references.md`).
**Discarded:** the v2 static ruler from 1 to 2026 (witnesses crowd the first third); filter only (A); follow only (B); a span fitted to each doctrine; opening the citation window from a marker.

## 2026-10-17 · Catholic dossiers first, across doctrines; "Sola Scriptura" keeps its name (Pedro chose)
**Chosen:** content is written for the Catholic tradition only, doctrine after doctrine (Eucharist, Justification, then Baptism, Sola Scriptura, Papacy), until Pedro is fully happy with the format, the data, the viewpoints and the arguments; then the Catholic dossiers are the model of format for the other five traditions (a model of format, not a frame: each tradition keeps its own categories). A doctrine may be named by one tradition's own term when that is how the debate is known: "Sola Scriptura" is a doctrine page under that name, and the Catholic column states the Church's own position on it (what it teaches instead and why it rejects Scripture alone, in its documents' words), with the evangelical arguments as its objections.
**Why:** Pedro knows the Catholic material best, so he reviews it fastest and most critically; sola Scriptura is one of evangelicalism's central doctrines and one of the most debated between Catholics and evangelicals (Pedro: «es más "políticamente correcto" tu forma, pero la verdad es que la SOLA SCRIPTURA es uno de las doctrinas más importantes del evangelicalismo»).
**Discarded:** running the other five traditions per doctrine before the format is settled; renaming the doctrine to the neutral locus "La Escritura y la Tradición" (agent's proposal).

## 2026-10-17 · How tasks are run: playbooks, /plan-run and /retro (Pedro chose)
**Chosen:** how to do each type of task lives only in `docs/playbooks/<type>.md` (first set: `agent-ops` as the base, `research-fanout`, `verification-pass`, `apply-corrections` with its consistency variant, `content-dossier`, `design-proposal`, `decisions-page`). Two project skills open and close the loop: `/plan-run <type>` reads the playbook and the decisions that bound the task, writes the plan into the feature doc and asks Pedro's ok; `/retro` compares plan with outcome (numbers first) and proposes 1–5 concrete changes to the playbook, which the agent applies after Pedro's one-line ok. Plan and retro are required for any task that launches subagents or repeats a known type; small tasks skip them. `AGENTS.md` only points to the playbooks. Process lessons move out of the agent's private memory into the playbooks. The git hook also blocks `add`, `rm`, `mv` and `stash`; staging is Pedro's. Playbooks for other types (OCR pipeline, handoffs…) are written the first time that type runs. Proposal: https://claude.ai/artifact/VcXgkZVt6kyToMmM69Sbje
**Why:** every run was planned from scratch and its lessons were lost: deleted with feature docs or kept in private memory that subagents and the other session don't see; written rules were skipped because nothing triggered them (the 2026-10-15 recommendations contradicted DECISIONS 2026-10-09). Research: method text in always-loaded files costs more and gets ignored; a doc the agent must remember to open is skipped about half the time; a retro without changes to the system is worthless (`docs/research/process/practices.md`, `retrospective.md`).
**Discarded:** playbooks read on demand with nothing to trigger them; project skills plus custom agents with their own memories (knowledge split across three places); method text in `AGENTS.md`; a heavy spec-per-change workflow; hooks that block closing a session without a retro (risk of burning the usage cap); a separate log of runs (their numbers go to each playbook's sizing table).

## 2026-10-17 · Content dossiers: sparse sections are reported, not filled; Pedro reviews on the screen design (Pedro chose)
**Chosen:** a doctrine's content is written per tradition as Markdown dossiers in `docs/research/doctrines/<doctrine>/` from the source universe only, before anything enters `data/`. Each section has a minimum and each dossier a coverage table with where it searched. A section below its minimum is reported by cause: the tradition is silent (the site says so, with where it was searched; no filling from other sources or the agent's words); the map has a gap (the missing official text is added to the map after checking it by the tradition's own authority categories, then used); asymmetry across traditions (not padded or trimmed; flagged to Pedro as a design and neutrality question). Pedro reviews the dossiers in an Artifact that pours the content into the latest proposed design of screens 02, 03 and 04 (not necessarily final), reading it as a user would. Method: `docs/playbooks/content-dossier.md`.
**Why:** the universe lists which documents speak, not what they say; a sparse section must be told apart from a gap in the research, and silence is information about the tradition. Pedro: "yo mismo en el paso 6 te puedo verificar visualmente si un contenido me parece escaso".
**Discarded:** filling sparse sections from sources outside the universe or from the agent's own summary; equalizing the number of objections across traditions; reviewing the dossiers as plain Markdown.

## 2026-10-15 · Who speaks for each tradition (Pedro chose)
**Chosen:** Reformed = the Westminster family (Confession, Larger and Shorter Catechisms); mainline bodies such as PC(USA) are only mentioned on the tradition page. Baptist = the convention line (Baptist Faith and Message, New Hampshire). Pentecostal = the Assemblies of God only, labelled "Asambleas de Dios", never "los pentecostales"; Oneness Pentecostals are out and the site says so; neo-Pentecostals appear only as context. Heidelberg, the Belgic Confession and the 1689 leave the Eucharist pilot.
**Why:** applies the 2026-10-14 no-sub-families rule; each is the family with the most institutional reach in the Spanish-speaking world and a citable official text (`docs/research/traditions/*.md` §1, §10). Proposal: https://claude.ai/artifact/SkTKoTePNQZqQnJUMyrzNH
**Discarded:** Three Forms of Unity, both Reformed families side by side, INPM's mixed canon; the 1689 line, both Baptist lines, adding Free Will Baptists; AG with variants in notes, Trinitarian classical Pentecostalism as one column, "the movement" with shared points only.

## 2026-10-15 · Which texts each column quotes (Pedro chose)
**Chosen:** Catholic: universal magisterium only (no episcopal conferences or CELAM); Eastern Catholic liturgies mentioned on the tradition page, not quoted. Orthodox: councils, Crete 2016's list of councils with its reception note, and the 17th-century confessions with their approval act and their Orthodox critique; the Council of Crete itself only on the tradition page, saying who attended and who did not; Philaret's catechism, with the ROC 2020 text only mentioned. Lutheran: the whole Book of Concord; of body statements only the Joint Declaration, attributed; Luther in "voices", not the column. The Joint Declaration on Justification (1999) goes in both the Catholic and Lutheran columns, labelled "acuerdo ecuménico". AG position papers are quoted with their adoption date, below the Statement of Fundamental Truths. Calvin goes in "voices" for all, not as normative for INPM. No Church Father appears in a tradition's "voices" table: Fathers live in the shared universe, and a tradition quotes them only inside its own documents.
**Why:** same proposal. Joint Declaration: both sides signed it, so placing it in one column only would rank it. Fathers: the neutrality invariant (never assigned to a modern tradition).
**Discarded:** CELAM as a Catholic voice; councils-only for the Orthodox column; Crete 2016 as a doctrine-page voice; the LWF minimum (AC + SC); body statements and Luther in the Lutheran column; Fathers in tradition "voices" tables.

## 2026-10-15 · Labels, editions and numbering (Pedro chose)
**Chosen:** Catholic grades: only the Church's four (de fe divina y católica, doctrina definitiva, magisterio auténtico, disciplina); no manual notes (Ott's grades are unconfirmed, read only in unlicensed scans). Vatican II passages default to "magisterio auténtico (concilio ecuménico)" unless they restate a definition. 21 councils, noting the number is traditional. 1854 and 1950 are both "definición dogmática", noting "ex cathedra" applies to 1854 retrospectively. Westminster: the 1647 text, with the American numbering in parentheses where it differs. Heidelberg Q80 and anti-papal passages, if ever quoted: original plus each body's current status. Apology: Triglot numbering, Kolb–Wengert in parentheses. New Hampshire is the 1853 text; the pilot's "1833" label is fixed. AG: the current Statement of Fundamental Truths in English, the AG USA Declaración in Spanish. Where Greek and Russian Orthodox usage differ: both, labelled, in diptych order.
**Why:** each is the source's own rule or the text the body uses today; details in each map's §10.
**Discarded:** manual notes as grades; "ex cathedra" on both definitions; the American Westminster text as base; Kolb–Wengert only; the 1916 AG text as the AG's voice (changed in 1917, 1918, 1927, 1961 and later, including the "initial physical evidence" wording; `pentecostal.md` §4.A1); UAD's Doctrinas Fundamentales (an undated credential form).

## 2026-10-15 · Copyrighted statements of faith: full text only on a verbatim match (Pedro chose)
**Chosen:** a copyrighted current statement (BF&M 2000, AG Statement of Fundamental Truths, LEV texts…) is quoted briefly with a link to its official page; no permission is requested (2026-10-09 rule). Exception: where an article of the current text is word-for-word identical to an older text that is free in the US, Spain and all of Latin America (2026-10-09 rule), the article is shown in full from the older text, labelled with both dates (e.g. "1963; mismo texto en la vigente (2000)"). Where it differs in any word, the older text appears only as a dated historical document, never as the body's current voice. Spanish follows the 2026-10-09 three-level policy.
**Why:** Pedro wants the reader to have whole texts where possible; deciding which differences are "relevant" would be a theological judgement the site must not make, a word-for-word comparison is not. Applied today: BF&M 1963 is free only in the US (not renewed; `docs/research/sources/free-church.md`), so it does not qualify, even though its Lord's Supper sentence is identical to 2000's (checked 2026-10-15 on Wikisource and bfm.sbc.net); the AG 1916 text was rewritten in 1961, so few or no articles will match (to check per article).
**Discarded:** using an older text wherever it teaches "the same" (needs a judgement); asking permissions; a licence for long LEV passages (link out instead).

## 2026-10-15 · Smaller scope calls on the tradition maps (Pedro chose)
**Chosen:** IERP stays out of the Lutheran presentation. Spain is covered through Latin American and international Reformed bodies. Spanish-speaking Orthodox jurisdictions are named only when they have a verifiable site, in diptych order. Palamite doctrine is out of the launch (Pedro: "por ahora esta doctrina me parece muy muy nicho, y hay muchas otras más relevantes e interesantes para el usuario. Puedo estar equivocado, cualquier cosa insistímelo en el futuro"). Greek, Serbian and Bulgarian catechisms: later. The SBC's 1925 "five points on confessions" go on the Baptist tradition page, attributed to the SBC, with 1644 and 1677 beside them. Spanish Baptist voices: later. A neutral universe for the shared sections (Fathers, councils, heresies: works, dates, authenticity, editions): after the Eucharist rebuild. A prototype of the scan → OCR → numbered divisions → collation pipeline on one real work: approved.
**Why:** same proposal.
**Discarded:** mapping more Orthodox catechisms now; the neutral universe before the Eucharist.

## 2026-10-15 · On every timeline, people are spans and events are points (Pedro chose)
**Chosen:** on every timeline (08, 09's "Tiempo contemporáneo", the small ones in 04 and 09, any future one) a person is drawn as a span from birth to death, never as a single point, whenever birth and death dates exist, approximate or conventional ones included. Estimated ends follow the 2026-10-06 rule (an estimated start begins faint or dashed). Events, writings and other non-person items are points; an item that lasts (a council over several years, a heresy, a work dated to a range) is drawn as its range. Exact form to test in the proposal.
**Why:** Pedro: in P1·09 Ignatius appears as a dot at his death, which hides when he lived; a span shows his lifetime against his contemporaries at a glance.
**Discarded:** people drawn only at their death year (P1·08, P1·09).

## 2026-10-14 · Six traditions: Pentecostal joins; "Orthodox" means Eastern Orthodox only (Pedro chose)
**Chosen:** the launch has six traditions: Catholic, Orthodox, Lutheran, Reformed, Baptist, Pentecostal. "Orthodox" is the Eastern (Chalcedonian, Byzantine) Orthodox Church; the Oriental (non-Chalcedonian) churches are not presented or mentioned anywhere, and the same rule holds for other traditions: no sub-families mixed into a tradition's presentation.
**Why:** for the primary user (Spanish-speaking) the typical evangelical is Pentecostal: Pentecostals are the largest group of Latin American Protestants: in Pew's 2024 survey, 54% of Protestants in Argentina and Chile, 65% in Brazil, 40–48% in Peru and Colombia (Pew, 21 Jan 2026, "Religious affiliation in Latin America"; down from two-thirds to eight in ten in 2014; details in `docs/research/traditions/pentecostal.md` §1). Pedro: mentioning the Oriental churches would add confusion to each doctrine's presentation.
**Discarded:** five traditions with Baptist standing for all evangelicals; Oriental Orthodox shown in neutral sections where they differ.

## 2026-10-14 · Every highlighted point on a timeline states its exact date (Pedro chose)
**Chosen:** any timeline that highlights an element (the small ones in the citation modal and in "Fuentes citadas", screen 08, any future one) marks that element's exact date on the axis, not just round years (0, 500, 1000…). On desktop the small timelines in a source list use the available width, all on one shared axis so they compare at a glance.
**Why:** Pedro: in P1·04 the blue dot can't be read as a date, and "c. 391" in grey blends into the surrounding grey note.
**Discarded:** axis labels only at round years; the date only in the caption text.

## 2026-10-14 · Edition, translation and licence leave the citation modal (Pedro chose)
**Chosen:** the citation modal shows the quote, who said it and its date, clearly. Edition, translation and licence move to the source's own page (the full-text reader, reached with "Abrir la fuente completa"), placed so they never come first nor get in the way of the text; the footer and a method page explain the general policy. Copy around citations no longer announces what the modal contains (e.g. P1's "Toda cita se abre aquí mismo con su texto, fecha, edición y licencia" goes).
**Why:** Pedro: most readers care about the quote, not its edition, and the note distracts from it. Keeping the edition one click away still honours "no citation without an edition"; a footer or FAQ alone would not.
**Discarded:** edition and licence inside the modal (P1); only in the footer or a FAQ.

## 2026-10-14 · No tradition switcher on objection pages; every breadcrumb step leads somewhere real (Pedro chose)
**Chosen:** the objection page (04) has no tradition switcher: switching from a detail page lands on a different objection, which is confusing. The tradition is given by the breadcrumb and the sidebar. In the breadcrumb, "Objeciones" leads to the "Objeciones" section of the tradition page (03); there is no separate objections page. Rule for the whole site: each breadcrumb step leads to a real place (a page or a section of a page); a step with nowhere to go is not shown.
**Why:** Pedro: a switcher fits a page listing all objections of a tradition, not a detail page; and a breadcrumb step that isn't a real destination misleads.
**Discarded:** the switcher on 04 landing on the other tradition's "Objeciones" (2026-10-08 decision, that part); a standalone "Objeciones" page.
**Replaced in part by** 2026-10-20 («Objeciones» is its own page): the standalone objections page now exists, and the breadcrumb's «Objeciones» leads to it. The rest holds (no switcher on 04).

## 2026-10-09 · Spanish translations in three levels, no paid reviewers (Pedro chose)
**Chosen:**
1. Where a public-domain Spanish translation exists (Cyprian 1807, López de Ayala's Trent 1785, Zorita's Roman Catechism 1819…), it is used as printed; no review needed.
2. Otherwise Doctrina translates from the original with AI, always labelled as such (e.g. "Traducción de Doctrina asistida por IA, desde [edición]"), with the original and the public-domain English translation one tap away.
3. Passages quoted on doctrine pages get a second, independent AI check against the original and the English translation, and Pedro reads them in Spanish against the English, as far as he can. A quote he hasn't read yet is marked as unreviewed (trust invariant).
**Why:** Pedro: no paid reviewers (money and time), same spirit as "no permissions for now". A mistranslated Father quoted on a doctrine page is the largest trust risk, so review effort goes there; those quotes are tens per doctrine, not thousands.
**Discarded:** recruiting reviewers and a "serious review" mechanism before launch (was in `ROADMAP.md`); publishing unlabelled AI translations; human review of every translated text.

## 2026-10-09 · No permissions for now: only what is legal without asking (Pedro chose)
**Chosen:** no permission letters, lawyers or licence negotiations for now. Doctrina offers as many sources as it can get legally without asking anyone. When we don't hold a source in full, its citation offers to go to a legal page with the full text (the publisher's or the official site), never an unofficial copy.
**Why:** Pedro: permissions can take months, money and legal work he didn't plan for; the goal is the most sources possible without them. Research on likely answers and timelines: `docs/research/sources.md` §6.5 and `docs/research/sources/critic.md` D5 (drafts kept there for later).
**Discarded:** sending the permission letters now (LEV, Christian Unity, SBC…); a legal consult before launch (moved to "Later" in `ROADMAP.md`).

## 2026-10-09 · Full text only if free in the US, Spain and all of Latin America (Pedro chose)
**Chosen:** a text is published in full only if it is free in the US (hosting), Spain and every Latin American country. Main audiences are Argentina and the US. A text that fails shows that it isn't available for now and links to a legal page with the full text; no "se libera en [año]" calendar in the UI.
**Why:** a reader in any of those countries exposes us to that country's law. In 2026 the binding line is the same for all of them (a translator who died in 1945 or earlier); Mexico only becomes stricter from 2033 (`docs/research/sources/legal-gaps.md`, 2.2). Pedro: the goal is to offer as many sources as possible.
**Discarded:** only the US and Argentina (frees a handful more texts, by translators who died 1946–1955, at the cost of risk in Spain, Colombia, Panama and Mexico); geo-split serving per country; a public "free on" calendar.

## 2026-10-09 · Reina-Valera 1909 stays the Spanish default; PDDPT selectable (Pedro chose)
**Chosen:** the 2026-10-06 default holds (RV1909). *Palabra de Dios para ti – Biblia Latinoamericana Textual* (PDDPT, CC BY 4.0, eBible `spapddpt`) is added as a selectable modern Spanish translation.
**Why:** Pedro wants a traditional text for deep study. PDDPT is literal, not a simplified Bible, but on the agent's comparison of real verses it renders Rom 3:28 as "declarado justo", which takes a side on justification, and transliterates divine names ("el Espíritu de ʼElohim", Gen 1:2). It does read in today's Spanish and is more precise in places ("puertas del Hades", Mt 16:18).
**Discarded:** PDDPT as the default.

## 2026-10-09 · Every text is rebuilt from a dated print scan (Pedro chose)
**Chosen:** every source text comes from a dated print scan (archive.org, HathiTrust, BNE, Google Books) with our own OCR, and keeps its provenance per paragraph (scan id + page). Wikisource and Project Gutenberg are only aids or collation witnesses, usable as text only where scan-backed or proofread. The registry's current sources are re-sourced this way (21 of 44 entries cite New Advent; others come from Hanover, Tanner and CCEL; findings in `docs/research/sources/registry-audit.md`). A licence badge on Hugging Face or GitHub is evidence of nothing: every text is traced to a dated print.
**Why:** the agent's recommendation in `docs/research/sources.md` §6.1, accepted. Aggregators' terms are contract, not copyright, and several forbid commercial use or claim rights on their edited text; "no citation without an edition" needs a real printed edition behind each one.
**Discarded:** accepting Wikisource or Gutenberg text as-is; asking CCEL for a licence to skip the OCR work.

## 2026-10-09 · Our own translations are proprietary, for now (Pedro chose)
**Chosen:** Doctrina's translations are made from the underlying public-domain print (Migne, pre-1931 editions…), never from a CC BY-SA file; BY-SA files are used only as witnesses. Word data comes only from CC BY sources (TAGNT, MACULA without the UBS fields, TFLSJ). Opening the translations later stays possible.
**Why:** the agent's recommendation in `docs/research/sources.md` §6.2, accepted: translating from a BY-SA file would make our translation BY-SA too; opening later is easy, closing something already open is impossible.
**Discarded:** publishing our translations under CC BY-SA (the Sefaria model); a mixed licence.

## 2026-10-09 · Anglican tradition after launch (Pedro chose)
**Chosen:** the launch has five traditions; Anglican is added later. (Six since 2026-10-14: Pentecostal added; Anglican still after launch.)
**Why:** it adds the Crown copyright question for UK readers, and the only Spanish Books of Common Prayer available are from the 18th–19th centuries (`docs/research/sources/critic.md`, D10).
**Discarded:** Anglican as a sixth tradition at launch.

## 2026-10-08 · Tradition switcher that keeps your section (Pedro chose)
**Chosen:** on every page inside a tradition (03 and the pages under it), a switcher with the traditions at the top of the content column, sticky so it can be used from any section. Picking another tradition marks it as selected, changes the content and moves the sidebar's current page to the new tradition. Each tradition is its own page with its own URL (shared links, Back and search engines keep working); switching lands on the same section ("Cómo se vive" → "Cómo se vive"); from an objection page (04), which has no equivalent, it lands on the other tradition's "Objeciones". The sidebar follows the navigation decision: the new branch is current and the previous one stays expanded. The traditions keep one fixed order across the whole site, so none reads as a ranking.
**Why:** Pedro first thought the sidebar alone was enough; the research recommended a Stripe Docs-style switcher (`docs/research/analogs.md`; verified 2026-10-07 that Stripe's "Accept a payment" has page variants carried in the URL). Keeping the section is our addition on top of that pattern, and it is what the sidebar can't do.
**Replaced in part by** 2026-10-14 (no switcher on objection pages).
**Discarded:** switching traditions only through the sidebar; a switcher that swaps content in place without a URL per tradition; `position: fixed` (sticky gives the same reach without covering the sidebar or content).

## 2026-10-08 · No "Citar esta página" (Pedro chose)
**Chosen:** no "cite this page" control for Doctrina's own pages. Citing a source stays in the passage detail ("Citar").
**Why:** Pedro saw no reason for it, and none of the four 03 screens had it (it was only in P2's 02 header; the agent had moved it to 03 by mistake). If readers ask to cite Doctrina, it can be added.
**Discarded:** "Citar esta página" in 02 or 03.

## 2026-10-08 · Authority categories are glossary terms (Pedro chose)
**Chosen:** the categories of authority ("Dogma", "Doctrina", "Disciplina"…) enter the glossary, defined per tradition from that tradition's own documents. Where a statement shows its category, the label opens its definition. How tradition pages present them: `ROADMAP.md`, screen 03.
**Why:** the label alone was unclear to Pedro ("Dogma: Trento…" in 02), and each tradition has different categories; showing one a tradition doesn't have would suggest it does.
**Discarded:** category labels without an explanation.

## 2026-10-07 · Launch with many doctrines, number not set (Pedro chose)
**Chosen:** launch with many doctrines, the most important ones; how many isn't decided. Candidates and current state in `PROJECT.md`, "Content model".
**Why:** Pedro's plan for the launch changed.
**Discarded:** 5 doctrines at launch plus a 10-doctrine stretch list (from the v1 plan).

## 2026-10-07 · Proposals never show internal states (Pedro chose)
**Chosen:** proposal Artifacts show the product as the user would see it at launch: no "en preparación", "draft" or placeholders for unbuilt content. Rule in `AGENTS.md`, under the main rule.
**Why:** the user will never see those states; they distort how a screen reads.
**Discarded:** marking unbuilt items as "en preparación" in proposals (UX round 2 did).

## 2026-10-07 · Connected doctrines link only to published doctrines (Pedro chose)
**Chosen:** a doctrine page shows connections only to doctrines already published; a newly published doctrine appears by itself in the others' connections. The user never sees "en preparación".
**Why:** the Eucharist connects to 8 doctrines in the data and some (sacrifice of the Mass, priesthood, sacraments and ordinances) may not exist at launch even with many doctrines; a card that invites a visit and leads nowhere is a dead affordance.
**Discarded:** showing unpublished connections as disabled or "en preparación".

## 2026-10-07 · Navigation: P1's tree sidebar, documentation style (Pedro chose; validated 2026-10-20, v2 approved 2026-10-21)
**Validated** in the polished proposal: see 2026-10-20 «the design direction holds» and 2026-10-21 «Structure proposal v2 approved».
**Chosen:** the navigation of UX round 2's P1: a tree sidebar always present on desktop, in the style of code documentation. Collapsible and expandable, open by default. It marks the current page and shows what surrounds it; jumping between distant branches ("Doctrinas / Eucaristía / Católica / Objeciones / x" → "Doctrinas / Sacerdocio / Católica / Objeciones / x", or to the Bible) keeps the visited branches expanded, so the tree doubles as a visual history the reader can collapse. Expanded branches reset on each visit (not remembered between visits). The content of each screen is still being decided.
- Agent proposals to test in the polished proposal, not yet confirmed by Pedro: a "collapse all but where I am" control; the sidebar scrolls itself to the current branch; the Bible tree goes down to book → chapter only (verses are picked on the chapter page); a small filter inside the sidebar for long lists (56 Fathers, 41 councils); on mobile the sidebar becomes a menu that opens on demand (review P1's mobile screens 12–14); around 1024px the sidebar starts collapsed.
**Why:** compared with the headers of P2–P4, the sidebar wins by far for Pedro: at any moment it shows which page you're on and what surrounds it, moving between distant pages is easy, and the expanded branches remind you where you've been so you can go back.
**Discarded:** P2, P3 and P4's header navigation. Remembering expanded branches between visits.

## 2026-10-06 · Who raises an objection: out of previews, quiet on the objection page (Pedro chose)
**Chosen:** objection previews (doctrine pages, screen 02 in every proposal; also the objection list on tradition pages, 03, Pedro 2026-10-08) show only the objection and the position it targets, not who raises it. The objection's own page keeps the attribution once, quietly ("Suelen plantearla reformados y bautistas"), not as a highlighted fact.
**Why:** Pedro cares about the objection, not who raises it; in a preview it is noise. On the objection page the attribution protects neutrality: an objection with no owner reads as the site making it, while an attributed one shows the site reports rather than attacks; it also helps a reader place an argument met in real life. `raisedBy` is editorial judgment flagged for review (`docs/research/content-notes.md`), so showing it less lowers the risk of misattribution.
**Discarded:** removing the attribution everywhere; keeping it in previews. If P2 is chosen, its "Quién objeta a quién" grid needs rethinking under this decision.

## 2026-10-06 · Search: P1's component, with results that explain themselves (Pedro chose)
**Chosen:** after comparing the four search screens (UX round 2, screen 11), P1's is the base: the cleanest, and its breadcrumb path ("La Eucaristía / Católica / Objeción") gives the key information simply. Changes, each result having at most two lines under its title:
- Line 1: the breadcrumb path and, on the same line but clearly apart, the date when the item has one (verses, objections and words have none). How to separate them is tried visually in a proposal: date at the far right with no symbol (agent's recommendation), a thin vertical rule, or a small symbol (Pedro's idea; note the design principles ban "·"-joined strings).
- Line 2: why the item matched, with the query highlighted in yellow as in P3: an explanatory phrase (Docetismo: "Negaba la realidad de la carne de Cristo", as in P4) or, for Fathers and sources, a verbatim fragment of the quote, visibly marked as a quote (Spanish guillemets «…», "…" when cut; never rewritten to fit).
- Line 2 always comes from the result's real text, never from hidden keywords. If the match came another way ("carne" → σάρξ; later, semantic search by meaning), the line says so ("sarx, «carne» en griego").
- The yellow highlight is the functional mark for a match, not a second decorative accent; it needs a dark-mode variant that stays readable.
**Why:** in P1, searching "carne" returned Ignacio de Antioquía and Docetismo through hidden keywords, with nothing on screen explaining why; a reader new to the subject couldn't tell.
**Discarded:** P2–P4 search layouts as the base; showing results matched only by invisible keywords.

## 2026-10-06 · Unknown birth dates are shown as unknown, with sourced estimates (Pedro chose)
**Chosen:** when no ancient source gives a person's birth date, the UI says so instead of omitting it: "Nacimiento: desconocido; suele estimarse c. 35 (algunos, hasta c. 50)", with the estimate's source. On the timeline, a life span whose start is estimated begins with a faint or dashed stroke. Applies to every such person, not only Ignatius; anonymous works show their composition range instead.
**Why:** Pedro couldn't find Ignatius' birth on P1·09. Our data leaves it empty because it is unattested: "c. 35" is a modern estimate (English Wikipedia says c. 33 with no citation; other sources give c. 35 to 50), while his death has ancient support (Eusebius). Showing both in the same format would make the estimate look as solid as the attested date.
**Discarded:** omitting unknown births; filling them with an estimate formatted like an attested date.

## 2026-10-06 · Death dates: words, and † where space is tight (Pedro chose)
**Chosen:** no "m." abbreviation (Pedro didn't read it as "murió"). Where there is room, words: "Nació c. 69", "Murió 155" (en: "Born", "Died"). In compact places (timeline labels, lists, compact cards), "†" before the date, with a tooltip saying "murió" and visually hidden text for screen readers ("murió en 155"). The † is used only for death, never as a footnote mark or anything else.
**Why:** † is a known convention for death; screen readers read it as "dagger"; a young reader may not know it, so it only replaces words where space forces it. It is a meaningful typographic sign, not a cross as decoration (allowed by the design principles).
**Discarded:** "m." / "d."; † everywhere.

## 2026-10-06 · Read the whole Bible in the site (Pedro chose)
**Chosen:** a feature of its own, independent of the page-structure choice: any book and chapter, read continuously, with the same reader as the other sources; every verse opens its detail.
- Canon: the 66 books plus the deuterocanonical books in a separate section that says Catholics and Orthodox receive them as Scripture and Protestants don't; its heading gives both names (deuterocanonical / apocrypha).
- Deuterocanonical books in Spanish: shown in English (Douay-Rheims) with a notice that Spanish isn't available yet; an OCR and correction project for Torres Amat (1825, public domain) comes later. Straubinger is not used until its legal status is checked (public domain in Argentina from 2027-01-01, protected in Spain until 2037, and the site is read in both).
- Default translations: Reina-Valera 1909 in Spanish (the only complete public-domain one; old spelling), BSB in English; the others are selectable.
- Two phases: first text-only reading as static pages (1,189 chapters, no database needed); then word by word for the whole Bible (STEPBible TAGNT + TAHOT) with the Supabase reference corpus.
**Why:** the full 66-book text and the tagged Greek NT and Hebrew Bible are openly available (`docs/research/data.md`); a separate section is the most neutral way to show a contested canon; text-only reading doesn't need the database.
**Discarded:** a canon selector (more complexity); Spanish only with the 66 books (Catholic and Orthodox readers would miss books); waiting for Straubinger.

## 2026-10-06 · Discuss Pedro's notes before recording them (Pedro chose)
**Chosen:** a note, idea or fix from Pedro is not written to the repo right away. The agent first states how it understood it, corrects or objects where needed, and both discuss until they agree; only then is it recorded (decided items here, open ones in `ROADMAP.md`). If a session may end mid-discussion, the pending point goes to `ROADMAP.md` marked "under discussion, not agreed". Rule in `AGENTS.md`, Work process.
**Why:** Pedro wants to be sure the agent understood and to settle corrections before anything is recorded. The "under discussion" fallback is the agent's addition, accepted by Pedro: the agent remembers nothing between sessions.
**Discarded:** recording notes immediately, before agreement.

## 2026-10-05 · Motion rule adapted to Doctrina (Pedro chose)
**Chosen:** the origin project's UI rule "motion is a central part of the site" is dropped; kept: every non-trivial animation goes through the main rule, `prefers-reduced-motion` is mandatory, a motion library is chosen only in a proposal. How much motion Doctrina has is part of the design direction.
**Why:** the rule came from a visual site; Doctrina's principles so far are calm, with motion only in response to the reader (v2: nothing animates on load).
**Discarded:** copying the rule as is.

## 2026-10-05 · No raw notes log (Pedro chose)
**Chosen:** Pedro's loose notes are recorded in the same session, in Pedro's words: decided items here, open items in `ROADMAP.md`. The old `UX-NOTES.md` (append-only log, in `~/Desktop/dev/doctrina-v2/docs/`) was distilled into this file and the roadmap.
**Why:** one place per fact; the doc system has no notes file.
**Discarded:** a `docs/NOTES.md` inbox.
**Replaced in part by:** 2026-10-06 · Discuss Pedro's notes before recording them (when to record; there is still no notes log).

## 2026-10-05 · Where the handoff material went (Pedro chose)
**Chosen:** `data/raw`, `data/site`, `data/scripts` at the root; research reports in `docs/research/`; the 14 v2 screenshots in `docs/research/v2-screens/`. The v1/v2 plans and design systems were distilled into the docs instead of copied; the originals are identical to `docs/PLAN.md` and `docs/DESIGN.md` in `~/Desktop/dev/doctrina-v1-archivo` and `~/Desktop/dev/doctrina-v2`.
**Why:** the root holds configs, docs and tool scripts; keeping `data/scripts/` next to `data/raw/` preserves most of the scripts' relative paths.
**Discarded:** everything under `docs/` (mixes data with docs); leaving the screenshots out of git.

## 2026-10-05 · Git guard as a local hook (agent)
**Chosen:** `.claude/hooks/block-git-writes.mjs`, a PreToolUse hook on Bash registered in `.claude/settings.json`. Blocks commit, push, merge, rebase, reset, tag, cherry-pick, revert, am, commit-tree, update-ref, filter-branch/repo, replace, and work-discarding commands (clean -f, branch -D, checkout ., restore, stash drop/clear).
**Why:** the rule asks for the `git-guardrails-claude-code` skill's hook extended with commit, merge, rebase and tag; that skill isn't installed here, so the same idea was written directly. Deterministic rules go in hooks.
**Discarded:** installing the skill (not available in this environment).

## 2026-10-05 · shadcn for primitives (rules win over v1)
**Chosen:** UI primitives come from shadcn when a suitable one exists, installed with its CLI when needed (`.claude/rules/ui.md`).
**Why:** Pedro's project rules. Replaces v1's "no component library, avoid the shadcn look".
**Discarded:** v1's no-library stance.

## 2026-10-05 · Scaffold choices (agent)
**Chosen:** `create-next-app --empty` with `src/`, `@/*`, Tailwind 4, ESLint 9, npm; Next 16.3.8, React 19.2.8. No `page.tsx` yet: `/` is a 404 until the first route is approved. `README.md`, demo fonts and demo assets dropped. `.env.example` lists the Supabase variable names with no values. Default exports only where Next requires them (named-export rule otherwise). The screenshot tool (`tools/shot.mjs` in v2) is ported when the first UI block needs it.
**Why:** no UI before the design direction is approved; nothing created "just in case"; CONTEXT §8 asks for `.env.example` from the start.
**Discarded:** keeping the scaffold's demo page and Geist fonts.

## 2026-10-05 · Documentation system
**Chosen:** `CLAUDE.md` imports only `AGENTS.md` (< 200 lines: process and hard rules). On-demand docs: `PROJECT`, `ROADMAP` (with the "Current state" handoff), `DECISIONS`, `GOTCHAS`; `DESIGN.md` after the design direction is approved; `docs/features/<name>.md` per non-trivial feature; path rules in `.claude/rules/`.
**Why:** context is the scarce resource and long files lower adherence (Anthropic recommends < 200 lines); `@import` doesn't save context; context files that summarize the repo don't improve results and raise cost > 20% (arXiv 2602.11988, measured on bug fixing); deterministic rules belong in hooks. Sources: [memory](https://code.claude.com/docs/en/memory), [best practices](https://code.claude.com/docs/en/best-practices), [long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), [agents.md](https://agents.md), [DESIGN.md](https://github.com/google-labs-code/design.md) (alpha, April 2026).
**Discarded:** a separate `STATE.md`; one file per decision (ADR); a big PRD imported every session.

## 2026-10-05 · Code structure: `src/` with feature folders
**Chosen:** `src/app` (routing only) → `src/features` → `src/components/ui` → `src/lib`, one-way dependencies. Details and rationale: `PROJECT.md`, "Architecture".
**Why / Discarded:** see `PROJECT.md` (the reasoning lives there).

## 2026-10-05 · Clean restart as `doctrina`
**Chosen:** a new repo built from Pedro's first-session brief; `doctrina-v1-archivo` and `doctrina-v2` become read-only references; `handoff/` is archived by Pedro after confirming everything was carried over.
**Why:** Pedro's decision: restart cleanly what the two prototypes explored.
**Discarded:** continuing development in `doctrina-v2`.

## 2026-10-05 · Supabase + AI, after the UI/UX is settled
**Chosen:** editorial content stays in git; reference corpus and user data go to Supabase; AI = user-visible semantic search (pgvector) plus internal tooling with human review; no generated chat answers. Full plan: `PROJECT.md`, "Data architecture".
**Why:** a CTO (a friend of Pedro's brother) may hire Pedro on shipping a product with AI + databases + Supabase; the AI feature must be demoable. Chat answers would break neutrality and trust and cost per query with no revenue.
**Discarded:** generated chat answers; moving editorial content to the DB now.

## 2026-10-05 · UX round 2 requested: four complete proposals
**Chosen:** a [second canvas](https://claude.ai/artifact/CiD9tLWApMVoskyJG2KwDV) with four proposals, 14 screens each (home, doctrine, tradition, objection, source, verse, word study, timeline, history entity, witnesses, search, 3 mobile): **P1** documentation-style sidebar tree; **P2** editorial landing (B evolved: objections grouped by target tradition plus a who-objects-to-whom grid, rich witnesses strip); **P3** text + "Conexiones" rail (Sefaria model, grouped connections with counts); **P4** v2 polished (all critique fixes). Pedro's feedback is pending; it is the first item in `ROADMAP.md`.
**Why:** Pedro was still undecided between the v2 structure and B, and asked to see how all current features would look in each.
**Discarded:** building another full version to explore structure (too costly in v2).

## 2026-10-05 · Owner verdicts on UX round 1
Canvas: [UX round 1](https://claude.ai/artifact/1emZWrzgH7utqFHpri1R3C) (structures A guided chapters, B hub + section pages "portada y fichas", C stacked panes trail, D questions with a tradition lens; timelines T1 horizontal, T2 vertical by century, T3 lanes per tradition; ⌘K search).
**Chosen:**
- **T1 horizontal timeline, kept** ("loved"). No zoom tabs ("Dos mil años", "Primeros siglos", "Siglos IV y V"): one density close to the "Siglos IV y V" view, with readable names. The whole span is explored by scrolling the timeline component horizontally; the page never scrolls sideways. The timeline page's header, footer and layout adapt to it (e.g. full-bleed, full-height).
- **Search ⌘K with "Recientes" and "Seguir donde dejaste": try it.** Concept and UI liked.
**Why:** Pedro's feedback on the canvas, recorded in the v2 `UX-NOTES.md` log.
**Discarded:** A, C and D ("no me gustan para nada"). B was the least disliked but not convincing: its "most discussed objections" mixed objections to different traditions, so it was unclear whose objection it was (and the reader may not care about, say, objections to the Lutheran position there); its "earliest witnesses" felt too basic and thin; its section page ("ficha") and the overall structure didn't convince either.

## 2026-10-05 · Design principles carried into the restart
**Chosen:** calm, clean, intuitive, "pleasant to use" despite the depth. One accent. Hairlines instead of cards. Real reading typography (serif for reading, a distinct sans for UI, a dedicated font for Greek). Two clearly distinct link types (opens beside vs goes to a page). Breadcrumbs. Every item has one stable URL. Timelines large, with written labels. Spanish-first copy, sentence case. Depth hidden by default and one click away.
**AI slop to avoid (list in every proposal):** cream + terracotta (#F4F1EA), gold on navy, parchment textures, stock cathedrals / Bibles / hands, crosses as decoration, identical rounded shadow cards, gradients, ALL-CAPS tracked eyebrows, "·"-joined meta strings, "→" glued to links, emoji, icons in colored squares, giant decorative quotes, Inter + centered bold hero, monospace locators, one color per tradition (rainbow), squeezed parallel columns on mobile, dead affordances (a search box that does nothing).
**Research conclusions behind them** (`docs/research/niche.md`, `analogs.md`): Sefaria is the closest analog (text + connections panel with counts, panel state in the URL); Catena Bible for patristic commentary per verse (master–detail, sorted by date, not relevance); The Faith Received is the closest concept (Read / Compare / Trace / Scripture); OWID topic pages for depth without weight; a Stripe-docs-style switcher that keeps your section; word popovers with transliteration and literal meaning first, no raw parsing codes; never translation columns on mobile; curate videos, don't aggregate. Calm is the differentiator: deep sites are cluttered, calm ones are thin.
**Why:** these held across v1, round 1, v2 and both UX rounds, and Pedro's feedback kept confirming them.
**Discarded:** see the v1 and v2 entries below.

## 2026-10-03 · v2 "study desk" prototype and Pedro's verdict
**Chosen:** a full prototype built in `~/Desktop/dev/doctrina-v2` (screenshots in `docs/research/v2-screens/`): Brygada 1918 for reading, Commissioner for UI, Gentium Book Plus for Greek; a single lapis accent `#2C4A9E` on `#FAFAF8` (dark `#9EB3EE` on `#16181C`); hairlines, no cards; the signature **2,000-year time ruler** on every dated source; light / dark / auto theme. A **study panel** beside the text (bottom sheet on mobile) where citations, words, terms and Fathers open, with back and "open full page". IA: doctrine header with neutral tabs (Overview, History & witnesses) | tradition tabs; per-tradition study page; objection pages; verse pages; general history with 290 entity pages. Full token tables: `docs/DESIGN.md` in the v2 repo.
**Why:** test the deep-study vision of 2026-10-02 with real content, replacing the thin v1 MVP.
**Owner verdict:** information and resources "muchísimo mejor" than v1, and the visual design "a great improvement". **But** page structure and section order confused: unclear where links lead, how to get back to a place, timelines too small to read and understand (though "extremely valuable"). The core problem left to solve: **how to offer this much information**.
**Critique worth keeping** (`docs/research/critique.md`): the typography system, the time ruler, the history index's sticky overview with brush, the verse reader's core (chapter expands in place, transliteration first) and the honesty notes. Main failures: the Fathers wall on the verse page, invisible traditions on mobile, tiny tap targets, `--ink-3` contrast, underused study panel.

## 2026-10-02 · Vision correction: deep study, one tradition at a time
**Chosen:** a deep-study resource (beginners secondary). One tradition at a time is the core model; side-by-side only in specific features. Neutral sections (common ground, history of the doctrine focused on the early Church as literal evidence, patristic commentary on verses) never assigned to a modern tradition. Scripture dossier per tradition. Owner feature verdicts (key / yes / maybe / parked) recorded in `PROJECT.md`, "Scope".
**Why:** [design round 1](https://claude.ai/artifact/TsniPE1LdXxgLh2SX47HTA) (four visual directions, one screen per doctrine with a summary and a few sources) was judged "far too thin — the same as asking ChatGPT".
**Discarded:** the thin one-screen-per-doctrine MVP; compare-all-columns as the default view; internal diversity within a tradition (parked).

## Before 2026-10-02 · v1 "glossed page" (historical)
**Chosen:** a thin MVP built in `~/Desktop/dev/doctrina-v1-archivo`: Literata + Public Sans, paper / iron-gall ink / rubric red, sources in a sticky margin, one screen per doctrine with a tradition switcher.
**Why:** the MVP existed to measure interest (validation hooks, fake door).
**Owner verdict:** too thin. Replaced by the 2026-10-02 vision correction and the v2 design.

## Before 2026-10-03 · Technical defaults (carried, not re-confirmed)
**Chosen:** Next.js App Router with static generation (SSG / ISR); Tailwind `@theme` tokens; `next/font` self-hosted; content as typed modules / JSON in git, no CMS; bilingual routing under `/{es|en}` with English route segments for now (v2); Vercel; PostHog free tier (needs return visits and scroll depth, which Plausible can't do); Gumroad or Polar + Mercado Pago (no Stripe in Argentina).
**Why:** SEO and i18n routing, Pedro knows React, diffable reviewable content, zero-config hosting.
**Discarded:** a CMS; Plausible; Stripe.
