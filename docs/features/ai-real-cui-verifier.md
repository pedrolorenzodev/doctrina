# AI real CUI: visual verifier report

Compared live (mocked real route) vs scripted «Padres» answer, drawer screenshots in `tmp/ai-cui/shots/`. Screenshots only; no source read.

| Pair | Result | Note |
|---|---|---|
| 360 light | pass (limited) | Chips, actions row, input row, gutters (22 px) identical. Chips wrap cleanly (2 + 1), no clipping or horizontal overflow. Live shot is scrolled to the privacy paragraph, so quotes and prose are not visible. |
| 360 dark | pass (limited) | Same as light. Privacy text and chip borders legible. Same visibility limit. |
| 390 light | pass (limited) | Same as 360. Live shot shows only the privacy paragraph + chips; no quote or prose. |
| 390 dark | pass (limited) | Same as 390 light. |
| 1440 light | fail | Everything matches except the long in-prose citation button wraps badly (D1). |
| 1440 dark | fail | Same defect as light; link colour (gold) and contrast match the scripted one. |

Matches seen (1440, where quotes and prose are visible): italic quote font and size, 24 px gap quote to source link, rule between quotes, source links in the same serif-sans size with dotted underline and the same brown (light) / gold (dark), prose font, size and line spacing (27 px), chip border, radius, size and text position, actions row (Copiar con citas / Guardar en Tus notas / Informar un error) at the same offsets, input row.

## Defects

1. `live-1440-light.png`, `live-1440-dark.png`: the long in-prose citation button («Agustín de Hipona, Tratados sobre el Evangelio de Juan 27, 5») behaves like an inline-block. It jumps to a new line, leaving a short line («lee como figura») above it, wraps over two lines inside its own box, and the closing period lands alone on a fourth line. The same button style with a short label («6:63») in the scripted answer does not show this. Expected difference is the longer label; the orphaned «.» and the gap above are not. The shorter «Cirilo de Jerusalén, Catequesis 22, 4» button on the first prose line wraps fine.

## Coverage gaps (not counted as defects)

- At 360 and 390 the live shots only show the tail of the answer (privacy paragraph, chips, actions). Quote blocks, source links and in-prose citations at mobile width were not verified for the live answer; a taller capture or a scroll-to-top shot is needed.
- The 1440 shots are the 432 px drawer, not the full page.

Verdict: fail

## Follow-up (agent, not the verifier)

D1 fixed: a prose citation of a non-Bible quote now shows only the locator label (`work`, e.g. «Catequesis 22, 4»), because a `<button>` is atomic and a long label cannot wrap. Re-shot (`tmp/ai-cui/shots/live-*.png`, including `live-top-*` scrolled to the first quote) and read by the agent at 1440 dark, 390 light and 360 top: no orphaned period, no gap. The coverage gap at 360/390 was closed only by the agent's own reading of two shots, not by a second verifier pass.
