Status: draft, NOT verified by Pedro

# Eucharist · Lutheran · objections of the official layer (A1): already done in the dossier

## Progress
- Status: index written 2026-11-01 (research night, session 2). **No new research was needed:** `docs/research/doctrines/eucharist/lutheran.md` §4 «Objeciones» (lines 322 to about 750) already holds 11 objections in the full format (objector texts with edition and locator, synthesis, answer from the Book of Concord, status lines ST-SA, ST-FC, ST-WCF, ST-DOS, ST-T), verified and applied (`verification-lutheran.md`, `lutheran.apply.md`). The inventory of 2026-11-01 (item A1: «every non-Catholic dossier has §Objeciones Deferred») is wrong for this one dossier.
- The page `src/content/pages/eucharist/lutheran.es.ts` still has `objections.items: []` (checked 2026-11-01): the import is the only step missing.
- Not touched: the dossier. Nothing here repeats its text.

## The 11 objections

| Id | Objection (title in the dossier) | Raised by | Theme | Dossier line |
|---|---|---|---|---|
| OB-1 | Lo que queda en el altar no es pan: toda la sustancia del pan se convierte en el cuerpo de Cristo | católicos y ortodoxos | Presencia y sustancia | 346 |
| OB-2 | Cristo sigue presente en las hostias consagradas que se guardan, también fuera de la comunión | católicos y ortodoxos | Reserva y adoración | 384 |
| OB-3 | A Cristo en el sacramento se le debe adoración, también exterior: fiestas, procesiones, exposición | católicos y ortodoxos | Reserva y adoración | 422 |
| OB-4 | El fruto principal de la Eucaristía no es el perdón de los pecados | católicos | Fruto y preparación | 457 |
| OB-5 | La sola fe no basta para comulgar: quien tiene pecado mortal debe confesarse antes | católicos | Fruto y preparación | 488 |
| OB-6 | La Misa es un sacrificio verdadero y propiciatorio, que se ofrece por vivos y difuntos | católicos y ortodoxos | Sacrificio | 520 |
| OB-7 | No es mandato divino que todos beban del cáliz; la Iglesia tuvo razones justas para dar solo el pan | católicos | Cáliz y orden | 561 |
| OB-8 | El cuerpo de Cristo no está corporalmente «en, con ni bajo» el pan: está presente espiritualmente a la fe | reformados | Presencia y sustancia | 595 |
| OB-9 | Los incrédulos y los impíos reciben los elementos, pero no a Cristo | reformados | Quién recibe | 637 |
| OB-10 | La Cena no es una «empanación»: la divinidad del Verbo no se une al pan, «como suponen los seguidores de Lutero» | ortodoxos | Presencia y sustancia | 669 |
| OB-11 | Sin el sacramento del orden no se conserva la plena realidad de la Eucaristía | católicos | Cáliz y orden | 700 |

## What remains (from the dossier's own record, `lutheran.md` Coverage and `lutheran.apply.md`)
- Gaps with no Book of Concord answer, stated on the page since 2026-10-25: communion of the sick (Trent XIII can. 7) and leftovers (can. 4), in OB-2.
- Jeremias II's *Answers* not read (no public-domain text).
- Baptist and Assemblies of God: no text rejects the Lutheran line in words; exclusive definitions go to the debate layer (paused).
- Unconfirmed in `verification-lutheran.md`: Kolb–Wengert numbering (A1), Ap XXIV.19 Greek and Dositheus «ἐναρτισμόν» (A7), Trent Spanish OCR repairs (C1), Leuenberg signatories (C4–C5), ST-WCF and ST-DOS wording (C5), WLC 170 page.


## Verification

Verifier pass, 2026-11-01 (Sonnet, research night). Method: `docs/playbooks/verification-pass.md`. Legend: CONFIRMED / WRONG / UNCONFIRMABLE. Checked by script against `docs/research/doctrines/eucharist/lutheran.md` and by eye against `src/content/pages/eucharist/lutheran.es.ts`.

### Table against `lutheran.md` §4

- CONFIRMED, lines: for each of OB-1 to OB-11 the line number in the table is the line of the `### OB-n · …` heading in `lutheran.md` (346, 384, 422, 457, 488, 520, 561, 595, 637, 669, 700). 11 of 11.
- CONFIRMED, titles: each title in the table equals the heading text after `OB-n · `, character for character. 11 of 11. `lutheran.md` has 11 `### OB-` headings and no more.
- CONFIRMED, «Raised by»: each entry is contained in the `**Quién la plantea:**` line under the heading (OB-1 «católicos y ortodoxos»; OB-2 and OB-3 «católicos y ortodoxos»; OB-4, OB-5, OB-7, OB-11 «católicos»; OB-6 «católicos y ortodoxos»; OB-8, OB-9 «reformados»; OB-10 «ortodoxos»). 11 of 11. The tally in the dossier's «Asymmetry» bullet (Catholics 8, Reformed 2) agrees with the table.
- NOTE, not an error of this file: that same bullet says «Orthodox 4 (OB-1, OB-2, OB-3, OB-6 as supporting texts; OB-10 alone)», which lists five objections. The table (OB-1, OB-2, OB-3, OB-6, OB-10) is the count that matches the per-objection lines. The dossier's «4» should read «5».
- NOTE, the «Theme» column: `lutheran.md` has no theme line under its objections (no `Tema` label anywhere in the file). The themes in the table are this file's own grouping (the Reformed, Orthodox and Baptist files use the same labels, so they are consistent among themselves). They are not a verified copy of anything.
- CONFIRMED, header claims: «lines 322 to about 750» is right (`## 4. Objeciones` at 322, `## 5.` at 748); «11 objections in the full format» and the status lines ST-SA, ST-FC, ST-WCF, ST-DOS, ST-T are present in §4 (read).
- NOT CHECKED here: the claim «verified and applied (`verification-lutheran.md`, `lutheran.apply.md`)». Both files exist in the folder; their content was not re-read for this pass.

### Page `src/content/pages/eucharist/lutheran.es.ts`

- CONFIRMED: the `objections` block (line 439 onwards) has `order: []` and `items: []`; the subtitle and `videosSubtitle` are present. The import of the 11 objections has not been done, as the file says.

### Wrong items

None in the table. One inconsistency inside `lutheran.md`: «Orthodox 4» should be «5» in its «Asymmetry» bullet (no change to this file).

### Unconfirmable

- The themes column (no source in the dossier).
- That `verification-lutheran.md` and `lutheran.apply.md` record these objections as verified and applied.
