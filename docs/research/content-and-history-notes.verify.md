# Content and history notes verification

## Progress

- Status: in progress
- Done: output file created; Tasks A–C completed; read both source note files and the ROADMAP `Verify flagged content` item; located every mixed-language locator in the v2 JSON and the Ignatius witness record that needs its 6.2–7.2 context checked.
- In progress: verify the two concrete v2 bug groups first, then work through `content-notes.md` and `history-notes.md` by section.
- Next: read Lake 1912, *Smyrnaeans* 6.2–7.2 on the scan, transcribe the Greek attached to the round-2 claim, and compare the mockup's wording and anti-docetic context. Then verify the remaining Eucharist edition/licensing and timeline flags before the larger history inventory.
- Usage at Task D start: five-hour window 68%; weekly 52%.
- Paused: session limit (72 %). End usage: five-hour window 72%; weekly 53%. Do not start YouTube covers before D.1 is complete.

Access date for every URL below: 2026-10-21.

## ROADMAP v2 bugs

### Mixed Spanish/English locators

Status: **CONFIRMED BUG** in `data/site/eucharist.v2.json`.

| Current string | Locations | Correction |
|---|---|---|
| `Tratados on John 27.5` | 204 | `Tratados sobre el Evangelio de san Juan 27.5` |
| `Tratados on John 25.12` | 2986 | `Tratados sobre el Evangelio de san Juan 25.12` |
| `Tratados on John 26.18` | 3102 | `Tratados sobre el Evangelio de san Juan 26.18` |
| `Tratados on John 30.1` | 3281 | `Tratados sobre el Evangelio de san Juan 30.1` |
| `Sesión XIII (1551), Decreto on the Eucharist, cap. 1` | 219 | `Sesión XIII (1551), Decreto sobre la Eucaristía, cap. 1` |
| `Sesión XIII (1551), Decreto on the Eucharist, cap. 3` | 539 | `Sesión XIII (1551), Decreto sobre la Eucaristía, cap. 3` |

These are findings only; the JSON was not edited.

### Ignatius, *Smyrnaeans* 6.2–7.2 and Greek

Status: **IN PROGRESS**.

- The v2 witness is `ew-flesh`, `data/raw/eucharist.content.json` 5426–5450: it quotes 7.1 and says the opponents are docetists.
- The neutral letter pass independently confirms that real flesh and resurrection dominate chapters 1–5 and that Eucharist and communal order occur in chapters 6–8 (`ignatius-letters-descriptions.md`, “Smyrnaeans,” checked against Lake 1912, pp. 250–266).
- Still required: inspect Lake's page images for 6.2, 7.1 and 7.2; capture the Greek words used in the round-2 mockup; determine whether the mockup truncates the ethical description in 6.2 or the instruction following 7.1.

## Inventory from `content-notes.md`

The open items are grouped for verification in this order:

1. Editions/licensing: Westminster, Heidelberg/Belgic, Dositheus, Mogila, Trent Spanish, Florence, Marburg, Cabasilas, printed ANF/NPNF, Scripture wording, Hapgood/Neale.
2. Neutral Eucharist material: contested dates; Justin's *metabolēn* note; Theodoret/Gelasius; fourteen timeline clusters; four unfetched glossary clusters; Orthodox use of *ex opere operato*; origin of *metousiosis*.
3. Tradition sections: five Catholic flags; five Orthodox flags; four Lutheran text flags plus practice claims; five Reformed flags; eight Baptist/Evangelical flags.
4. Videos: seven missing objection mappings and seven channel/affiliation checks.

## Inventory from `history-notes.md`

The file contains broad historical data rather than a finite “open” checklist. This pass treats as open every bullet explicitly labelled uncertain, disputed, conventional, traditional, from memory, not fetched, or needing a citation. Order after the Eucharist flags:

1. Reformation “littleKnown” claims and Baptist immersion history.
2. Events chronology and technical labels.
3. Fathers' individual dates/authorship questions.
4. Councils' dates, canon counts and disputed status.
5. Heresy dates and rough fade-out years.
6. Division chronology and contested interpretations.
