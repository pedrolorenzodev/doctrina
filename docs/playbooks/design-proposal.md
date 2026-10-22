# Design proposal

Any UI without a precise definition goes through a proposal Artifact first. The rule itself and what the page must contain are in `AGENTS.md` ("Main rule"); this playbook is how to run it. Last validated: 2026-10-21 (retro of the structure proposal).

## Before

1. Read `docs/DESIGN.md` if it exists, `DECISIONS.md` (design principles, the AI-slop list, everything decided about this screen) and the screen's notes under "Now" in `ROADMAP.md`.
2. Use real Doctrina content (e.g. the Eucharist pilot), never placeholders or internal states such as "en preparación".
3. Inputs as needed: `docs/research/analogs.md`, `docs/research/critique.md`.

## The page

- 2–4 comparable options, plus what exists today; interactive, real fonts, colors and curves, working on mobile.
- Each option: where it goes, which reference it comes from, what it costs.
- What is discarded and why, including the AI-slop list.
- A reference idea is explained with a small demo on real Doctrina content, never with values in words (sizes, hex, "levers"). For "copy it exactly", an agent first measures the original (source code plus per-frame DOM measurements with Playwright).
- Before showing a reference agent's description, check each visual claim against its screenshot.
- When a component resembles one whose animation or interaction Pedro already approved (`DESIGN.md`), one option is always reusing that approved pattern (Pedro, 2026-10-21: the reader's tabs should move like the Objeciones tradition switcher).
- Ends with what has to be decided, and stops.

## Multi-screen proposal (the structure proposal, overnight 2026-10-20)

- The coordinator builds a shared base in the scratchpad (`base.css`, `base.js`: tokens, texture, type, components) and a brief for builders; one Opus builder per screen file, at most three at once; only the coordinator touches the base, builders ask for base changes in their Progress block.
- The brief forbids [memory]-tagged text outright and anything uncited, and lists every decided component; the page has screen, mode and width selectors.
- Verify with Playwright: each screen at 360/390/768/1440 in dark and light, console errors, `scrollWidth > innerWidth`; then one Fable critic on the screenshots (15-minute cap) against the ROADMAP notes, the AI-slop list and neutrality; triage must-fix / should-fix, fix, re-shoot.
- Anything the agent decided without Pedro goes in a "decided by the agent" list for him.
- Fingerprint dates, Ignatius facts and RV1909 verses missing from the repo were sent to Codex as questions (answered in `docs/research/`) instead of invented.

## Iterating

- Iterate on the same page, keeping the previous version beside it. A new «v[n]» label only for a substantial round of changes; small fixes and picks go into the current version (Pedro, 2026-10-21).
- Pedro's notes: restate how you understood each, object where needed, agree, and only then record (decided → `DECISIONS.md`; open → `ROADMAP.md`, "under discussion, not agreed" if the session may end).
- When Pedro sends notes over several messages, save them to a scratch file at once; compaction has lost nuances before.
- "mi canvas [n]" means Pedro's edited copy of screen n in the [UX round 2 canvas](https://claude.ai/artifact/CiD9tLWApMVoskyJG2KwDV): find it in `project/canvas.json` by title ("… copy" or "(MODIFICACIONES MIAS)", placed to the left/bottom) and diff it against the original P-board; it shows the approach he prefers, not a final design.
- When approved, record the link in `DECISIONS.md`.

## Lessons

- 2026-10-20 · A coordinator-owned base plus one file per builder gave four screens in ~15 min each with no conflicts → "Multi-screen proposal".
- 2026-10-20 · The Fable critic caught real trust problems the builders had marked "decided by agent" ([memory] text shown as final, uncited practice cells) → forbid [memory]-tagged text in the builder brief.
- v2 (before 2026-10-05) · A full build was the costly way to learn the structure was wrong → proposal canvases with real content.
- 2026-10-07 · Notes over several messages lost nuance after compaction → scratch file.
- 2026-10-19 · Pedro couldn't judge references described with numbers and "levers" (Maggie Appleton, Ciechanowski, Linear, The Met, Craig Mod); a small demo on real content settled each in one look → demo rule in "The page".
- 2026-10-19 · The reference agent called Craig Mod's drop cap «I» "a solid black bar" → check visual claims against the screenshot.
- 2026-10-19 · A frame-by-frame agent rebuilt Stripe Press's ruler to two decimals in 11 min (`docs/research/stripe-press-ruler.md`) → measure before copying.
