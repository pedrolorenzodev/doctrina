# Logo and favicon research

Research for the Doctrina mark (favicon first; link previews, home-screen icons and a header lockup as open questions). Run 2026-11-04 by one research agent; the coordinator builds the variants from `05-variant-brief.md`. Feature doc: `docs/features/logo-favicon.md`.

## Progress

- [x] A. Technical spec 2026 → `01-technical-spec.md` (~22 sources: Next.js local docs, Chromium source, caniuse, WebKit, MDN, web.dev, Google, Apple, Meta/WhatsApp, LinkedIn, Slack, bug trackers)
- [x] B. Reference survey → `02-reference-survey.md` + `refs/` (90 sites fetched, 88 with an icon, rasterised at 16 and 32 px in light and dark Chrome tab colours; 6 contact sheets, 2 large sheets, `measures.json`)
- [x] C. Symbol vocabulary and neutrality → `03-symbol-neutrality.md` (~25 sources: Hurtado, Heidelberg Catechism, ADL, Wikipedia extracts citing Metzger/Catholic Encyclopedia, Crossref/Semantic Scholar, UMC/GCFA snippets)
- [x] D. Design principles and real feedback → `04-design-principles-and-feedback.md` (~25 sources: Rand, Bierut, Haviv, Apple HIG, NN/g, Gruber, Coyier, Paco, HN threads via API, Logos forum, Dribbble, Bible Gateway, CT)
- [x] E. Synthesis → `05-variant-brief.md` (30 directions in 4 families, discard list, shortlist of 8, 8 open questions)

Done. Nothing outside `docs/research/logo/` was written (scripts live in the session scratchpad).

## Files

| File | What |
|---|---|
| `01-technical-spec.md` | file set, sizes, browser tab behaviour (light/dark, Safari), home-screen icons, link-preview rules, Next.js 16 conventions |
| `02-reference-survey.md` | 90 reference favicons described and classified; patterns, open territory, dark-tab failures |
| `03-symbol-neutrality.md` | Christograms, crosses, tradition emblems, iconoclasm, early-Church and bookish signs; verdict per symbol |
| `04-design-principles-and-feedback.md` | tiny-mark principles; what designers, users and church-marketing sources say |
| `05-variant-brief.md` | the brief for drawing the variants |
| `refs/<site>/` | downloaded icon files + `meta.json` (URLs, sizes, media, fetch time) |
| `refs/_sheets/` | `<family>-light.png`, `<family>-dark.png` (tab simulation), `large-*.png`, `picks.json`, `measures.json` |

**`refs/` holds third-party marks kept only for internal study. They are trademarks of their owners and must not be reused, published or copied into any deliverable.**

## Tag legend

- **[verified]** — the primary or authoritative page was read in this run (or the file was looked at, «verified, visual»; or computed, «verified, computed»).
- **[snippet]** — seen only in search-result summaries; treat as a lead, not a fact.
- **[memory]** — the agent's own knowledge; never used for numbers, dates, quotes or who-uses-what.
- **[inference]** — the agent's conclusion from cited facts.

All accesses on 2026-11-04.

## Sources that could not be opened

- Reddit: reddit.com and old.reddit (login wall / bot challenge / network block), the JSON API (403), Arctic Shift (timeouts), PullPush (521). **No Reddit opinions are included.**
- Brand New (UnderConsideration) review texts and comments (paywall).
- Britannica (403), Shady Characters / Keith Houston (403 / wrong URLs), Pentagram's Alabaster page (404), alabasterco.com (429), CT «ultimate Christian logo» (404), Slack's unfurling blog post on Medium (403), Logos forum «branding pivot» thread (Cloudflare), X developer docs (402/404), UMC «cross and flame» page (404), CRCNA Heidelberg page (403; read on heidelberg-catechism.com instead), Material Design product-icon page (client-rendered), Dia technical deep dive (404).
- Not attempted for lack of access: Bluesky, Mastodon, X threads.

## Notes for the coordinator

- The reference sheets simulate Chrome only; check finished variants in Dia, Safari and Firefox by hand (Pedro uses Dia and Chrome).
- PROJECT.md lists six MVP traditions (incl. Pentecostal), not five.
- DESIGN.md's slop list bans «icons in coloured squares»; a tile favicon needs Pedro's explicit OK (05 §5, question 5).
