# Logo round 2: refining D3 «Comillas»

Research for the second round of the Doctrina mark, after Pedro picked D3 (one heavy « on an ink rounded tile) as the closest to the site's goal but «muy AI-SLOP por ahora». Run 2026-11-04 by one research agent; the coordinator draws the variants from `10-d3-variant-brief.md`. Round 1: `../README.md`, `../05-variant-brief.md`. Feature doc: `docs/features/logo-favicon.md`.

## Progress

- [x] F. Quotation sign history and the diple → `06-quotation-sign-history-and-diple.md` (~18 sources: Isidore Latin text, Lanier 2026, Payne/ETC, Finnegan 2011, TLFi, RAE DPD, Unicode NamesList 18.0, BAV IIIF images of Vaticanus looked at, Commons, Catholic Encyclopedia, Wikipedia ×5; Newsreader measured with fontTools)
- [x] G. Quote and chevron marks in brands → `07-quote-and-chevron-marks-in-brands.md` (82 sites fetched, 74 rasterised + 24 UI icons; sheets in `refs/_sheets/brands-*.png`, `resemblance-d3.png`; Flavorwire 2009)
- [x] H. AI-slop and containers → `08-ai-slop-and-containers.md` (~16 sources: HN ×5 threads via API, Reddit r/logodesign ×2 via Playwright, Mantia, Gruber, Jim Nielsen ×2, Velvetshark, Fountain Institute, Esque, Haviv/D&AD, Impeccable, Next docs; 57 container refs fetched, 55 rasterised)
- [x] I. Two-form system and share card → `09-two-form-system-and-share-card.md` (16 headers shot light/dark, 32 og cards looked at; WhatsApp, Apple TN3156, Slack, LinkedIn, Telegram re-verified, X via 2024 archive; Next 16.3.8 local docs, Satori README, MDN, Vercel brand, Flarup)
- [x] J. Synthesis → `10-d3-variant-brief.md` (16 directions on 3 axes + control, 19 construction probes × 4 containers rasterised, discard list, shortlist of 5, 8 questions)

Done. Nothing outside `docs/research/logo/round-2/` was written (scripts and downloads live in the session scratchpad).

## Files

| File | What |
|---|---|
| `06-quotation-sign-history-and-diple.md` | the diple (Isidore, Vaticanus/Sinaiticus, Irenaeus papyrus, Latin scribes), diple → guillemet, 1527, RAE/French/German usage, Unicode, Newsreader's « measured, neutrality |
| `07-quote-and-chevron-marks-in-brands.md` | what « » ‹ › > “ read as in UI, media, code, speech, press; resemblance map |
| `08-ai-slop-and-containers.md` | practitioner commentary on generic/AI-looking marks; container types with real examples; round-1 advice re-tested |
| `09-two-form-system-and-share-card.md` | tile favicon + bare header in real brands; `currentColor`; Next 16 wiring; one share card |
| `10-d3-variant-brief.md` | the brief for drawing round-2 variants |
| `refs/manuscripts/` | Vaticanus crops (BAV), 1527 Priscian and 1934 Imprimerie nationale (Commons, public domain), diple periestigmene drawing (Commons, CC BY-SA 3.0), glyph comparison |
| `refs/brands/<slug>/`, `refs/containers/<slug>/` | downloaded icon files + `meta.json` (URLs, rels, og:image, fetch time) |
| `refs/ui-icons/` | Lucide 0.460.0, Material Symbols 0.23.0, Phosphor 2.1.1 SVGs (open licences) |
| `refs/og/<slug>/og.bin` | 32 site-wide og:images |
| `refs/headers/` | header crops at 1280 px, light and dark |
| `refs/probes/` | my own construction probes (not proposals) |
| `refs/_sheets/` | contact sheets: `brands-*.png`, `containers-*.png`, `resemblance-d3.png`, `headers-light-dark.png`, `og-cards.png`, `probes-1.png`, `probes-2.png`, `*-picks.json` |

**`refs/` holds third-party marks, images and manuscript photographs kept only for internal study. They are trademarks or copyrighted images of their owners (the Vaticanus crops are © Biblioteca Apostolica Vaticana, «all rights reserved») and must not be reused, published or copied into any deliverable.**

## Tag legend

- **[verified]** — primary or authoritative page read this run; «[verified, visual]» I looked at the image; «[verified, computed]» measured or calculated (fontTools, WCAG formula); «[verified via HN API]» read through hn.algolia.com.
- **[snippet]** — seen only in search-result summaries; a lead, not a fact.
- **[memory]** — the agent's own knowledge; never used for numbers, dates, quotes, who-uses-what or manuscript facts.
- **[inference]** — the agent's conclusion from cited facts.

All accesses on 2026-11-04.

## Sources that could not be opened

- Charles E. Hill, *TC* 29 (2024) PDF at jbtc.org: HTTP 522 twice; Wayback 429. Only the bibliographic record and search summaries.
- M. B. Parkes, *Pause and Effect*; McGurk; Lowe *CLA*: only through Finnegan.
- RAE *Ortografía* 2010 itself (the DPD entry was read via Playwright; rae.es blocks plain fetches with a JS challenge).
- X developer docs live (402 / 404); used the 2024-11-25 Wayback copy.
- Telegram: no official image-size rule exists or was found.
- Brand New (UnderConsideration) reviews: paywall. Creative Bloq «Why do all AI company logos look the same?»: body not returned.
- plex.tv/about (403); Wikipedia's Accenture article has no logo text; Accenture's own brand note not fetched.
- Reddit: **old.reddit.com** shows a login wall and the JSON API returns 403, but **www.reddit.com pages loaded in headless Playwright without login** (two r/logodesign threads read). No mirrors used.
- No usable favicon captured for: Cairn, elDiario.es (touch icon only), Glasp, Lapham's Quarterly, QuillBot, Reverso, Rewind/Limitless, Siruela, Faber, MIT Press.
- Not attempted: WIPO/EUIPO/OEPM trademark searches for quote-mark or diple emblems; Bluesky/Mastodon/X threads.

## Notes for the coordinator

- Pedro's Mac draws the tab icon at 32 device px (2×). Judge the authored details at 32; at 16 every chevron collapses to a chevron (`probes-*.png`).
- Corrections to round-1 files (not edited here; for whoever owns them): `03-symbol-neutrality.md` §6 says the first guillemets were «printed by Josse Bade» — TLFi says «chez Alde et J. Bade» (two presses), 06 §2.4. `05-variant-brief.md` D3 says heavy serif guillemets «look less like UI arrows» — Newsreader's « is straight-only and matches UI icons at 16 px, 06 §4, 07 §2. `05` §0.2 lists `#6b7fd6` as working bare on both tabs — it was measured against white; against Chrome's light strip `#dee1e6` it is 2.84, 08 §3.
- None of the site's fonts contains U+2E16 (dotted diple); draw it by hand.
- The share card needs `metadataBase` (none set in `src/app/[lang]/layout.tsx` today), 09 §4.
