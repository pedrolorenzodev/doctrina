# Reader stream: continuous Bible scroll (Pedro, 2026-10-27)

## Intent
Reading never stops at a chapter's end: scrolling on moves into the next chapter, and from the last chapter of a book into the first of the next, as in https://simplymybible.com/read/web/john/9 (John 1 → Luke 24 with no visible loading). The header arrows and the tree follow the scroll. No chapter footer («Edición y licencia», «Capítulo anterior/siguiente»): it would break the illusion.

## What the reference does (measured 2026-10-27 with Chromium, not from memory)
- Loads the whole translation once (`translations/web.bbl` read with WebAssembly), then **no request at all while scrolling** 14 screens.
- An inner scroll container (`div.scroller`, the body does not scroll) holds `section.chapter[data-chapter]`, each with a header (book label, big numeral) and `p.blk.prose` blocks whose verses are inline `span[data-v]` with a small number.
- Keeps 2–4 chapters in the DOM (it drops the ones far behind); the URL and the `<title>` change per chapter while scrolling (`John 10 WEB – …`).

## Pedro's decisions (2026-10-27, in his words)
- Arrows in the first or last chapter of a book: «no se muestra el control si cambiaría al libro (izquierdo en Mateo 1, derecho en Mateo 28)». **Agent's reading, to confirm:** this was written before the continuous scroll; with a scroll that crosses books the arrows cross them too, and hidden only at Genesis 1 / Revelation 22 (Pedro to confirm).
- The current arrows keep their look but «scroll» to the start of the previous or next chapter, with nothing that looks like loading or a page change; optimise so it never stalls.
- The tree shows the exact book and chapter being read and moves by itself, driven by the scroll and by the arrows.
- Per-chapter footer (edition, licence, previous/next) is dropped.
- «En párrafo» gets the improved format (running paragraphs, inline verse numbers, section headings): P2 in `reader-05.md`.

## Agent's objections and calls (to confirm)
1. **Licences must stay reachable.** The footer is where each edition's licence and attribution live today (CC BY needs attribution; the site's trust rule). Proposal: the licence line goes into the translation picker's rows and a link to an «Ediciones y licencias» page; nothing in the reading flow. Check the current picker before building.
2. **Notes, highlights, «Tus notas», note cards and the verse panel are per chapter today** (`useChapterNotes({book, chapter})`). In a stream each chapter section owns its notes and highlights; the panels are single and point at a (chapter, verse). «Tus notas» lists the chapter in view (the active one), with a plain label saying which.
3. **Data:** the corpus files are 4.4–5.2 MB each (≈1 MB gzipped). Not the whole file up front: one static JSON per edition and book (`generateStaticParams` route handlers, CDN-cacheable), prefetched when the reader is within two chapters of a book's end; chapters inside the loaded book are in memory. The second translation's edition streams the same way.
4. **DOM window:** keep about 5 chapters mounted (active ±2), drop the farthest with the reading position kept by `useKeepTopVerse` (built 2026-10-27) so removing or adding a chapter above never moves the text.
5. **URL:** the chapter's own URL stays canonical and server-rendered for the first load and for search engines (`rel=prev/next` in the head instead of the footer links); while scrolling the URL and title follow with `history.replaceState` (no history entries).
6. **Numbering:** editions with different verse counts per chapter (Douay-Rheims) keep working: a chapter section is built from that edition's own verses.

## Plan (blocks; each verified and frozen)
1. **Data layer:** per-book static JSON route, client loader with an in-memory cache and prefetch, a spec that no request happens while scrolling a book.
2. **Chapter section:** extract the per-chapter part of `ReaderBody` (text, notes, highlights, cards) into a component that can be mounted several times; single panels.
3. **Stream:** the list of chapters, appending at the end and prepending at the start, with the window and `useKeepTopVerse`; no footer.
4. **Active chapter:** one store updated by an observer; URL, title, the strip's picker, «Tus notas» and the tree follow it; the tree scrolls its list to the book and marks the chapter.
5. **Arrows:** smooth scroll to the start of the neighbouring chapter (Lenis/`scrollToY`), hidden at the ends of the Bible.
6. **Licence relocation** (objection 1), then **P2 «En párrafo»** in the new layout.

## Verification
Frame specs for the arrows and the boundary crossing (no jump of the text when a chapter is added or dropped); a spec that scrolls John 1 → Luke 24 programmatically and checks the active chapter, the URL and the tree at every boundary; no network request inside a loaded book; memory: the number of mounted chapters stays ≤ 5.

## Built 2026-10-27 (blocks 1–5 in one run; specs: `reader-stream.spec.ts`, `reader-stream-data.spec.ts`, plus adapted `reader-chapter`, `reader-header`, `reader-translation`, `reader-tree`)
- **Data:** `GET /api/bible/[book]/[chapter]` (static, one per chapter, every edition and the neighbours); `chapter-data.ts` caches and prefetches. Measured against the reference: it loads the whole translation once; here chapters arrive one by one, two ahead of the reader, and the first chapter's neighbours are prefetched at load.
- **Stream:** `reader-stream.tsx` mounts chapters as `section[data-stream-chapter]`, five at most (active ±2, the rest dropped; `useKeepTopVerse` keeps the text still), appends as the end comes within two screens, and **prepends the previous chapter only when the reader tries to go up from the very top** (wheel, touch, ArrowUp/PageUp), or when they are already scrolled and the head is close. Mounting it at load moved the page to the end of the previous chapter and broke ~100 specs; the lazy prepend keeps the page at scroll 0 on arrival.
- **`ReaderBody` per chapter:** `idPrefix` (`John-7-v-3`; the route's own chapter keeps `v-N`), `href` for permalinks, `active`; the panels (verse, «Tus notas», undo, selection toolbar) exist only in the live instance (the active one, or any with a verse open), so there is one `aside` per kind; pressing in a chapter makes it active.
- **Active chapter:** `src/lib/active-chapter.ts` (store: book, chapter, href, neighbours); the last section whose top has passed 40 % of the viewport is active; the URL and `<title>` follow with `history.replaceState`; the strip's picker title, «Tus notas» count and arrows follow; **the tree follows through the same store** (`usePathname` does not update on `replaceState`).
- **Arrows:** keep their look and `href` (no-JS and fallback), but `onClick` scrolls to the neighbouring chapter's start (mounting it first if it is the next unmounted neighbour); at Genesis 1 and Revelation 22 the missing side is invisible. `scrollToY` now drives the motion per frame and hands each position to Lenis immediately (Lenis' own animator stopped itself on the second upward call, `running=false`), after `smooth.resize()` (its limit was stale).
- **No chapter footer;** the head carries `rel=prev/next` (`metadata.pagination`).

## Open
- **Licence relocation (objection 1):** the footer's «Licencia: …» lines are gone with it. Pedro to choose where the licence and attribution live (picker rows, a link to an «Ediciones y licencias» page); needs a proposal. `chapter-foot.tsx` is now unused.
- Not specified yet: the phone layout of the stream (button «Tus notas» per chapter, sheets), the Fathers' reader (unchanged, single work), a spec for a very fast scroll that outruns the prefetch, the arrow pressed while a chapter is still loading.
- A race seen once under load: A+ pressed while a prepend is in flight overshot for one frame (`reader-keep-position` A+); not reproduced at normal load.
- **Tree crossing a book: built 2026-10-27 (ninth session; spec `e2e/reader-tree-crossing.spec.ts`).** The cause: when the current book changed, the left book's `ChapterGrid` unmounted at once (the numbers vanished) while its `ul[data-branch]` kept `data-open="true"` and its chevron `aria-expanded`, so it stayed «open» as an empty list with its padding (16 px). Now the left book is added to `openedBooks` during the render that drops it (so it stays mounted), then closes through `setBranch` (fade 120 ms + height 160 ms), and the entering book opens animated (cascade + height 220 ms) when the change comes from another book; the tree's scroll correction and the mark's landing account for the height the closing book gives back (`closingHeightAbove`, `travelMark`'s `settlingShift`). Measured per frame in both directions: heights fall to 0 and rise without a jump, the chevrons go 90 → 0 and 0 → 90 through intermediate angles; the same spec fails on the old code (the left list ends at 16 px).
- **Licence home:** decided later, ROADMAP «Later».

