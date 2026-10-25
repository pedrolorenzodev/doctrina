# Page 03 (tradition page) independent critique

Page: `/es/doctrinas/eucaristia/catolica`, running on `localhost:3100`. Date: 2026-10-24. Read-only review: nothing under `src/`, `e2e/` or `docs/` was edited except this file.

Method: Playwright, light and dark, viewports 1440x900, 1024x768, 768x1024, 390x844 and 360x780 (the page is 9,001 px tall at 1440 and 13,366 px at 360). Every viewport was scrolled in steps before the screenshots were taken. Also checked with a mouse, with the keyboard (Tab, Esc), by touch emulation at 390, and by a script that clicked every visible citation. No console errors and no horizontal overflow at any size (`scrollWidth == clientWidth` everywhere).

All screenshots are in `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/1d1a1f16-4327-4786-bcdd-e57599ec46a8/scratchpad/critique/`. Names below are relative to that folder. Slices are `s_<width>_<theme>_<NN>.png`. Contact sheets are `c*.png`. Interaction shots are `i_*.png` and `f_*.png`.

Not verified (so not reported): print stylesheet, `/en`, reduced motion, the title entrance animation, and the `lang` attribute on the English quote inside the citation window.

---

## Defects (ranked)

### 1. Major: 8 of 71 citations open a window with no source text, and one shows English in a Spanish window
- Where: all sections, desktop and phone. Verified by opening every visible citation (71 unique labels) at 1440.
- Seen:
  - These open a window that holds only the title («Catecismo de la Iglesia Católica»), the paragraph number and the date «1992/1997», with no quote at all: Catecismo 1382, 1376, 1341 and 1363, 1338, 1385 and 1415, 1387, and Trento ses. XXII cap. 7. The window then offers «Abrir la fuente completa» (inert) and «Copiar cita». Catecismo 1382 is the third citation of the page's first sentence, so a reader meets this almost at once.
  - «Trento, ses. XIII, cap. 7» (cited under «En gracia de Dios» in «Cómo se vive») shows an English quote in a Spanish window: «ecclesiastical usage declares that necessary proof to be, that no one, conscious to himself of mortal sin…». Nothing says it is English or a different edition. I did not check whether `lang="en"` is set.
  - «Trento, ses. XIII, can. 9» quotes only «en Pasqua florida». It is a real, tiny fragment, but as the only support for «una vez al año, en tiempo pascual» it looks like a placeholder.
- Why it matters: the invariants are «no claim without a citation» and «no visible internal states». A window that says «Cita» and shows no text reads as unfinished and breaks the promise made by the underlined link. The English quote looks like a mistake.
- Evidence: `i_cite_second.png` (Catecismo 1382, empty window), `i_cite_english.png` (English quote). The dump of all 71 windows came from `int3.mjs` (console output only).
- Suggestion: for citations without a verified quote, show «Sin texto disponible aquí» plus a working link to the source, or a clearly labelled `Texto en inglés` row. Do not leave a bare title. Better still, fill the 8 quotes. Mark the English one as English.

### 2. Major: a long citation breaks the paragraph on phones
- Where: «Cómo se vive», first paragraph, 390 and 360, light and dark (also seen at 360 dark).
- Seen: `(Código de Derecho Canónico, cann. 1247 y 920)` is rendered as an inline-block, centred `<button>` (computed `display: inline-block; text-align: center`, height 60 px). When it does not fit on the line it becomes a two-line centred block. The «(» stays on the previous line and «). Pero la Iglesia…» starts on a new line. It looks broken. The script found exactly one case at 390 and 360, none at 768 and up, but any citation longer than the free space in a line will do the same.
- Why it matters: this is the first thing a phone reader sees in that section, and it breaks the text rhythm. The cause is the component, so other pages will hit it too.
- Evidence: `c390l_c.png` (third panel). The computed style came from `probe1.mjs`.
- Suggestion: make citation links `display: inline` with `text-align: left` and `box-decoration-break: clone`. Put the 44 px hit area on a pseudo-element, as the design already does, instead of on the box.

### 3. Major: at 1024 and 768 the tradition switcher shows only 3 of 6 traditions, because the hint takes the room
- Where: 1024 and 768, sticky bar and top of page, light (dark is the same).
- Seen: «Tradición», Católica, Ortodoxa, «Luterana» (faded) and then the hint «Al cambiar, sigues en la misma sección.» in full. Reformada, Bautista and Pentecostal are hidden behind a sideways scroll with a small fade. At 1440 all six tabs and the hint fit. Under 640 the hint disappears and the strip behaves well, so it is only the 640–1100 range that is wrong. The hint is also more visible than three of the tabs.
- Why it matters: the switcher is the page's main navigation to the other traditions. Giving screen width to a sentence about it, instead of to the options, is a priority mistake. A tablet reader in portrait cannot see that there are six.
- Evidence: `c1024l_a.png`, `c768l_a.png`.
- Suggestion: hide the hint whenever the tabs do not all fit (not by a fixed breakpoint). Or put it under the tabs, or in a tooltip. Hide it by measuring `scrollWidth > clientWidth`.

### 4. Major: keyboard users go through 41 sidebar stops before the content; there is no skip link
- Where: all sizes with the sidebar (≥ 1024).
- Seen: Tab order starts with the logo, ES/EN, theme, then the sidebar. The first stop in `main` is Tab number 42 («Doctrinas» in the crumbs). The whole page has 181 stops before focus wraps. There is no «Saltar al contenido». Esc closes the citation window and returns focus to the right citation, which is good.
- Why it matters: 41 presses for every page load is a real barrier for keyboard and screen-reader users, and WCAG 2.4.1 asks for a bypass mechanism.
- Evidence: Tab dump from `int1.mjs` and `int9.mjs` (console only).
- Suggestion: add a visually hidden skip link that shows on focus, pointing to `main`. Optionally also «Saltar a la navegación de tradición».

### 5. Major: in-text citations in two hidden statements are plain text, while all others are links
- Where: «Qué enseña», after «Mostrar 4 afirmaciones más» (statement ending «(Catecismo 1390)» and the last one: «(Catecismo 1396)», «(Ecclesia de Eucharistia 35)», «(Catecismo 1401; Ecclesia de Eucharistia 45)»).
- Seen: these parentheses are ink-coloured, with no underline and no hover. They are not links, and look different from the brown dotted citations everywhere else on the page. They repeat the source list under the statement, which is clickable.
- Why it matters: «decided patterns applied everywhere» (item 3 of the checklist) and the two-kinds-of-link principle. A reader sees a citation that looks like a citation and does nothing.
- Evidence: `i_hash_arrival.png` (after clicking the in-page link «los frutos de la comunión»). Counted by `int8.mjs`.
- Suggestion: render them with the citation component, or drop them, since the sources already appear in the label row.

### 6. Minor: a book number is separated from its book name at a line end
- Where: «La Escritura que usa», first passage title, 1024 (probably other widths): «Mateo 26:26–28; Marcos 14:22–24; Lucas 22:19–20; 1⏎Corintios 11:23–26».
- Why it matters: DESIGN §5 says locators never break before their number, and «1 Corintios» is one name. It is also the longest title of the list and is bold, so the break is conspicuous.
- Evidence: `c1024l_b.png` (right panel, bottom).
- Suggestion: non-breaking space between the number and the book name for every ordinal book name (1/2 Corintios, 1/2 Pedro, 1/2/3 Juan, etc.).

### 7. Minor: default video list is English-only on a Spanish page
- Where: «Videos», all sizes.
- Seen: on «Todos 15», the first five videos are all English (Catholic Productions, Shameless Popery, Catholic Answers Live). The three Spanish ones only appear after pressing «Mostrar 5 más» twice, or the «Español» filter. The Spanish reader gets no hint that Spanish videos exist except the small «Español 5» count. (Note: during testing «Español» showed 5 videos at 1440 as the count says; I first thought it showed 3, but it was only the viewport cutting the list.)
- Why it matters: it is a Spanish-first product (`ui.md`: «Spanish-first»). The first impression of the section is a wall of English titles.
- Evidence: `s_1440_light_10.png`, `i_videos_end.png`.
- Suggestion: sort the active-language videos first in `/es` (and English first in `/en`), or start the filter on «Español» when there are at least 3. Needs Pedro's decision.

### 8. Minor: the sidebar and top bar focus ring colours differ from the content's
- Where: keyboard focus, 1440, light.
- Seen: content controls use the accent ring (2px `rgb(44,74,158)`, offset 2), as DESIGN says. Sidebar rows, the theme button and the logo's neighbours use an ink-colour ring (`rgb(28,23,19)`, `rgb(42,38,32)`, `rgb(97,92,84)`). The sidebar twisty buttons use accent. The visibility is fine in all of them; only the consistency is broken.
- Evidence: Tab dump, `focus_light.png` and `focus_dark.png` (content, all accent).
- Suggestion: a single ring token for all focusable elements, as DESIGN §3 says.

### 9. Minor: the page `<title>` has no site name
- Where: browser tab. It is «Eucaristía · Católica», with no «Doctrina».
- Why it matters: a shared link, a bookmark or a history entry gives no hint of what the site is.
- Suggestion: «Eucaristía · Católica · Doctrina».

---

## Inert controls: do they look and behave like the real thing?

Verified at 1440 with computed styles before and after hover, and with the keyboard. Result: yes, they are convincing, which is the intent, but the cost is visible.

- Hover works on everything inert that I tested: tabs (fill and ink), «Ver los 14 pasajes» and «Ver las 7 objeciones» (border to ink, fill), objection titles (underline goes from 1 px to 2 px ink), sidebar rows, the in-text note link «Lo que escribieron los primeros cristianos». The cursor is `pointer` and they are in the tab order with the accent ring. The current tab correctly has no hover change.
- Clicking does nothing, with no feedback at all (no state, no URL change; I clicked an objection title to check). A reader will click «Ver las 7 objeciones» or an objection title («Abre cada una para leer en profundidad la respuesta católica», says the section's own text) and think the site is broken. The hint «Al cambiar, sigues en la misma sección.» promises behaviour that does not exist yet. This is the accepted trade-off (DECISIONS «Unbuilt destinations»), recorded here only so it is weighed again before launch.
- For screen-reader users these are buttons that do nothing, with no `aria-disabled`. That is a real cost worth knowing, not a defect against the decision.

## What works well

- Typography and rhythm are strong. The serif body at about 70 characters per line, the large Newsreader headings and the quiet ui labels make the page read like a book, not like a template. No gradients, no cards, no emoji, no all-caps eyebrows. It avoids the AI-slop list.
- Hairline lists, the single accent and the brown citation colour are consistent. The two link kinds are distinguishable at a glance in light and in dark. Dark mode is as good as light (`s_1440_dark_00.png`, `d360.png`).
- The citation window works: desktop floating window with date mini-timeline, phone bottom sheet with grip and scrim, focus moves in, Esc closes and returns focus to the exact citation, and opening a second citation closes the first (`i_cite_open.png`, `i_cite_second.png`, `i_sheet_390.png`).
- «Dogma» is a glossary term that opens an explanation with the canon, so the jargon is explained where it appears.
- The right-edge ruler works: label on hover, focus does the same, the active tick is accent (`i_ruler_hover.png`, `i_tick_focus.png`).
- In-page links to hidden statements expand the list and scroll to it; «Mostrar menos» appears afterwards. Videos: «Mostrar 5 más» disappears when nothing is left (no «Mostrar 0 más»), the filter counts match, and focus lands on the first new link.
- Tap targets are 44 px effective on phones for every button and citation tested; text in buttons, chips and tabs is centred on both axes (checked in all screenshots).
- The copy respects neutrality where it matters: «Para la Iglesia católica, Juan 6 no admite…», «El Catecismo cita a san Juan Crisóstomo:», and the neutral-section note. Fathers are not assigned to the tradition.

## Taste (opinions, not defects)

- **Citation density.** The first-time reader meets 3–6 brown underlined citations per statement in «Qué enseña», plus the label row. The page is trustworthy, but it is heavy to read. Collapsing the source row behind the grade label, or showing the first two sources and «+3», would calm the first screen. Since sources are the product, this is Pedro's call.
- **Seven sections look alike.** Sections 2–6 are all «h2 + subtitle + hairline list», separated by the same 140 px gap. This is calm and consistent, but there is no visual anchor between «Por qué» and «Cómo se vive». A first-time reader has no sense of where they are except the ruler (which is thin and only on desktop; on phones nothing tells position in a 13,000 px page). Not a defect; consider a very short intro line per section on phones, or keep as is.
- **Objection previews are in the site's voice.** «Pablo lo sigue llamando «pan»: lo consagrado sigue siendo pan» and «Hebreos dice que Cristo no se ofreció «muchas veces»…» read as the site asserting the Protestant claim, with attribution only inside the text («Los reformados añaden que…»). The section subtitle («Objeciones a la postura católica») frames it, and DESIGN decided «no attribution» in previews (to keep them short), so this is deliberate. But it brushes against «each tradition speaks in its own words». A neutral stem such as «Se objeta que…» or naming the tradition in the label would solve it without adding length. Needs Pedro's decision.
- **The citation window opens over the text being read.** On desktop its first position (right side, 400 px) covers the right half of the paragraph just clicked (`i_cite_open.png`: «sacrifici…» is cut). It is draggable and non-blocking by design, so only a small nuisance; opening beside the clicked text, on the free right margin, would be calmer.
- **Page end.** The page stops at the last video with only the section padding below, and nothing says «that is all» or leads to the next place (another tradition, objections). DESIGN has no footer for this screen. Worth a decision before launch.
- **Phone chrome.** The top bar (about 52 px) plus the sticky switcher (about 56 px) take 108 px, about 13% of a 844 px screen, during the whole scroll. It works, and the strip's fade is clear, but on 360x780 it is noticeable.
- **Rule of «Dogma» in bold plus a vertical bar.** Good hierarchy, but the dotted underline on a bold black word looks slightly different from every other term link. Fine.

---

## Overall verdict

This is a calm, confident, well-typeset reading page that is clearly its own design, not a template, and the quality floor is largely met: focus is visible, tap targets are 44 px, nothing overflows at 360, dark mode is as good as light, and the citation window and the ruler behave as designed. What stops it from being launch-ready is not the visual system but a handful of trust and robustness gaps: eight citation windows that open with no source text (and one in English with no label), one citation that breaks the paragraph on phones, a tablet switcher that hides half the traditions behind a hint, two statements with plain-text citations, and a keyboard path that costs 41 Tab presses with no skip link. The inert controls convincingly look real, which is the intent, and also means a reader will press them and get nothing. I would fix findings 1 to 5 before showing this page to anyone outside the project; the rest is polish or Pedro's taste calls.
