# `originalLang` for the works the earlier research did not cover (F2, session A3, 2026-11-01 night)

Status: draft, NOT verified by Pedro

Research only. `Work.originalLang` is optional and empty for all 76 works in `src/content/registry/works.ts` (TODO in `src/content/model/registry.ts`). The earlier research (`sources/citation-excerpts.md`, «Original-language records», 43 records) already settled 40 non-site works and 3 site statements. This file covers **the 22 non-site works that have no record there** (the «newer works») and lists the gaps in the type.

## Progress

- 2026-11-01 18:4x: the 22 works found by diffing `works.ts` ids against the records of `citation-excerpts.md`; one availability check of Latin pages on vatican.va; the rest proposed and marked. No verifier yet.

## The rule the earlier records followed (kept)

From their `scope` lines: the value is the language of the **promulgated or first issued authoritative text of the registered work**, checked in the work itself, not inferred from a translated excerpt, a Latin incipit or an edition slot (`.la` slots exist for almost every work); it makes no claim about undocumented drafting languages. A work with co-original texts keeps a note (Augsburg: German and Latin).

## Gap in the type (decision for the implementation session)

`docLangs` in `src/content/model/ids.ts` is `["la","es","en","de","el"]`. The earlier records use values **outside it**: `fr` (CEC, historical first published text 1992), `it` (Gestis verbisque, the two John Paul II audiences), `ru` (Philaret). The type must be widened (or those works left blank) before `originalLang` can be filled; no value was forced into the existing list. Site statements (`status-*`, 14 works): the earlier records give `es` for three of them; the other eleven are Doctrina's own Spanish and take `es` by the same logic `[agent's call, no source needed beyond the registry's own «site» speaker]`.

## The 22 works

Evidence levels: **A** = a page of the work read and its language seen; **B** = a Latin page exists on the Holy See site (HTTP 200, body not read), so Latin is the likely authoritative text, not shown to be the first; **C** = proposal from the nature of the work, not checked (`[unverified]`).

| Work id | Title (registry) | Proposed `originalLang` | Basis | Level |
|---|---|---|---|---|
| `small-catechism` | Catecismo Menor (Lutero) | `de` | Luther's Catechism; the Triglot prints German and Latin (`triglot.de`, `triglot.la`); which is first not read here | C |
| `treatise` | Tratado sobre el poder y la primacía del papa | `la` (co-original with German? not checked) | Melanchthon's Latin text is the one the Triglot gives first for the Treatise; not read | C |
| `wsc` | Catecismo Menor de Westminster | `en` | same as `wcf`, `wlc` (earlier records, `en`); the Edinburgh 1894 English print is what the registry uses | C (inherited) |
| `constantinople-1` | Primer Concilio de Constantinopla | `el` | the canons and creed are Greek acts; NPNF2 14 prints Greek and Latin versions in places | C |
| `trullo` | Concilio Quinisexto | `el` | same | C |
| `chalcedon` | Concilio de Calcedonia | `el` | NPNF2 14 prints Greek words inside canon 28 (A2 read it) | C |
| `new-hampshire` | Confesión de New Hampshire (1853) | `en` | McGlothlin 1911 prints it in English (A2 read it) | A (the printed English) |
| `pastor-aeternus` | Vatican I, *Pastor aeternus* | `la` | `pa.la` edition exists; Latin page `https://www.vatican.va/content/pius-ix/la/documents/constitutio-dogmatica-pastor-aeternus-18-iulii-1870.html` (HTTP 200, 48 kB, Latin body, found by V7) | B |
| `dei-filius` | Vatican I, *Dei Filius* | `la` | `df.la` edition; Latin page `…/pius-ix/la/documents/constitutio-dogmatica-dei-filius-24-aprilis-1870.html` (HTTP 200, 56 kB; the URL is already in `citations.ts`) | B |
| `dei-verbum` | Vatican II, *Dei Verbum* | `la` | Latin page on vatican.va, HTTP 200, 46 kB (`…vat-ii_const_19651118_dei-verbum_lt.html`); same rule as `lg`, `ur`, `oe`, `sc` | B |
| `dh` | Vatican II, *Dignitatis humanae* | `la` | Latin page, HTTP 200, 44 kB | B |
| `gs` | Vatican II, *Gaudium et spes* | `la` | Latin page, HTTP 200, 232 kB | B |
| `providentissimus` | Leo XIII, *Providentissimus Deus* | `la` | Latin page `…/la/encyclicals/…providentissimus-deus.html`, HTTP 200, 90 kB | B |
| `divino-afflante` | Pius XII, *Divino afflante Spiritu* | `la` | Latin page `https://www.vatican.va/content/pius-xii/la/encyclicals/documents/hf_p-xii_enc_19430930_divino-afflante-spiritu.html` (HTTP 200, 93 kB, Latin body, V7) | B |
| `sempiternus-rex` | Pius XII, *Sempiternus Rex Christus* | `la` | Latin page `…/pius-xii/la/encyclicals/documents/hf_p-xii_enc_19510908_sempiternus-rex-christus.html` (HTTP 200, 71 kB, V7) | B |
| `mysterium-ecclesiae` | CDF, *Mysterium Ecclesiae* | `la` | Latin page `…rc_con_cfaith_doc_19730705_mysterium-ecclesiae_lt.html`, HTTP 200, 30 kB | B |
| `verbum-domini` | Benedict XVI, *Verbum Domini* | `la` | the Latin page on vatican.va is a title stub (HTTP 200, 35 kB, no body); the Latin text is the PDF `…/hf_ben-xvi_exh_20100930_verbum-domini_lt.pdf` (HTTP 200, 685 kB, 150 pp., per V7); the earlier records took `la` for `sacramentum-caritatis` and `ede` on the same kind of evidence | B |
| `uus` | John Paul II, *Ut unum sint* | `la` | Latin page, HTTP 200, 193 kB | B |
| `cdf-primado` | CDF, *El primado del Sucesor de Pedro…* | open | the 1998 text was issued by the CDF; its issued language was not checked (cf. `cdf-note-1998` = `la`, `gestis-verbisque` = `it`: the CDF does not use one language) | needs a read |
| `pf-1989` | *Professio fidei* (1989) | open | issued by the CDF in 1989; language not checked | needs a read |
| `pft` | *Professio fidei Tridentina* | `la` | the bull *Iniunctum nobis* is a Latin document; the registry has `pft.la`; the English page used by the fingerprint row is a translation | C |
| `enc-1848` | Encíclica de los patriarcas orientales de 1848 | `el` | the registry has no `.el` slot for it (`enc1848.la/es/en/de`); the Fordham text is an English translation (`sources/enc-1848-english-print.md`); the Greek original was not found | C |

Counts: A 1, B 11, C 8, open 2 (22).

## What a verifier should do

For levels B and C, read the first paragraph of the authoritative text (the Latin page, the AAS pages for the 20th-century documents, the Greek acts for the councils) and replace «C»/«B» by A. `cdf-primado`, `pf-1989` and `enc-1848` need a source for the issued language before any value.
