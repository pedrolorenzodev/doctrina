# Data sources for the verse page (pilot: John 6)

Status 2026-10-03. Every file below was downloaded and parsed. The build scripts are in `data/scripts/` and can be run again. The original downloads are in `data/raw/src/`, which is gitignored and can be downloaded again.

## Output files (`data/raw/`)

| File | Records | Built from |
|---|---|---|
| `john6.greek.json` | 1,289 words (1,241 in NA28), 71 verses | STEPBible TAGNT + TEGMC |
| `lexicon.john6.json` | 246 Strong's entries; NT counts for every entry; reference lists for the 65 lemmas in 6:47–58 (15 function words that occur more than 1,000 times have none) | STEPBible TBESG + TAGNT |
| `john6.translations.json` | 71 verses × 8 editions, no gaps | eBible.org, CrossWire |
| `john6.fathers.json` | 100 entries for 6:47–58; counts per verse for all of John 6 (472 entries) | SermonIndex, HistoricalChristianFaith |

The NT counts match standard NA28 figures: σάρξ 147, ἄρτος 97, ζωή 135, πίνω 73, μένω 118, τρώγω 6.

## Sources and licences

**STEPBible-Data** (github.com/STEPBible/STEPBible-Data). Licence: **CC BY 4.0**. Credit it as "STEP Bible", linked to www.STEPBible.org (Tyndale House Cambridge).
- **TAGNT** (tab-separated text, whole NT in 2 files). Every word of NA27/28, TR, Byzantine, SBLGNT, THGNT, WH and Tregelles, with:
  - extended Strong's numbers and Robinson-style morphology;
  - the lemma and an English gloss (based on BSB) plus a context gloss;
  - **a Spanish gloss per word**;
  - edition membership and variant notes.
- **TBESG**: a brief lexicon based on Abbott-Smith (1922, public domain).
- **TEGMC**: expansions of the morphology codes.
- Two caveats:
  - The file headers ask users to link to the source rather than redistribute the raw files, and to publish a note of any changes. So: link back, keep a changelog, don't mirror the raw files.
  - The **Spanish glosses come from OpenGNT (Eliran Wong), CC BY-SA 4.0**. They inherit share-alike (our derived gloss data must also be CC BY-SA) and need attribution to OpenGNT.
- Transliteration: I generated it with the SBL academic scheme. Accents and iota subscript are not marked. STEPBible's own transliteration is kept alongside it as `transliterationStep`.

**eBible.org VPL downloads** (`ebible.org/Scriptures/{id}_vpl.zip`). I checked the licence on each edition's `_about.htm`:

| id | Edition | Licence |
|---|---|---|
| `engbsb` | BSB | Public domain since 30 Apr 2023 |
| `eng-kjv2006` | KJV | Public domain (Crown patent in the UK only) |
| `engwebp` | WEB | Public domain; "WEB" is a trademark, so altered text can't use the name |
| `engDRA` | Douay-Rheims 1899 | Public domain |
| `engylt` | YLT | Public domain |
| `spaRV1909` | Reina-Valera 1909 | Public domain |
| `spablm` | Biblia libre para el mundo | Public domain (the publisher calls it a draft) |

The DRA follows **Vulgate verse numbering** (Vulgate 6:51–52 = English 6:51). I remapped it to English numbering and kept the original numbers in `nativeRefs`.

**CrossWire `SpaScioNT`**: Scío de San Miguel NT (1797), Catholic, public domain, old spelling. pysword can't read its LZSS compression, so I wrote a small reader (`sword_ztext.py`).

**SermonIndex, "Early Church Fathers – Scripture Citation Index"** (Hugging Face `sermonindex/early-church-fathers`). Not gated. JSONL, 68,240 passages from 349 Fathers, 66 books only (no deuterocanon). Licence: **CC BY 4.0** for the verse alignment. It says the underlying texts are public domain; that is **not true for every entry**.

**HistoricalChristianFaith Commentaries-Database** (the open data behind historicalchristian.faith; Catena Bible itself is a closed database). Format: TOML per Father and verse, plus a SQLite release.
- Licence: a **public-domain dedication** for the compilation, plus a **fair-use notice for copyrighted excerpts**. Fair use is not a licence we inherit.
- SermonIndex derives from it: all 100 John 6:47–58 quotes match by text. I used HCF to recover each entry's source title, URL, verse range and date.

Licence triage of the 100 entries (field `translationLicense`):

| Status | Count | What it covers |
|---|---|---|
| Public-domain translation | 86 | ANF/NPNF, Newman's *Catena Aurea*, Pusey's Cyril |
| Unverified | 9 | ACCS-style citations with no source URL |
| Likely copyrighted | 5 | Ward's *Desert Fathers*, Hill's Augustine Sermon 83, Fathers of the Church Ambrose |

**Publish only the public-domain entries.** 26 entries reach us through Aquinas's *Catena Aurea* (`transmittedVia`). 2 entries (Alcuin) fall after the c. 749 cutoff (`withinPatristicCutoff`).

## Scaling to the whole Bible

**NT Greek.** TAGNT covers all 27 books, and `build_greek.py` takes book and chapter arguments. The full NT is about 140k words, roughly 100 MB as pretty-printed JSON. So:
- store it in SQLite or Postgres, or as minified per-chapter JSON;
- precompute counts and references per lemma once for the word-study feature.

**Hebrew OT.**
- **STEPBible TAHOT** (CC BY 4.0, same format as TAGNT): Leningrad text, full morphology, prefixes and suffixes split, transliteration included. Pair it with the **TBESH** lexicon (abridged BDB, CC BY).
- Alternative: **OSHB/morphhb**. The WLC text is public domain; morphology is CC BY 4.0.
- TAHOT is the better fit because it mirrors TAGNT.

**Septuagint.** This is the weak point.
- STEPBible **TAGOT** (tagged LXX) is announced but not released.
- `CenterBLC/LXX` (MIT, Rahlfs 1935 text): the CCAT morphology it builds on has restrictive terms.
- `eliranwong/LXX-Swete-1930`: the database is GPL-3.0.
- Brenton's English LXX (eBible `eng-Brenton`) is public domain.

**Translations.**
- Every eBible edition uses the same VPL format for all books. Use STEPBible **TVTMS** (CC BY) to map Vulgate and LXX verse numbering automatically.
- Deuterocanon: DRA and `eng-web-c` have it; RV1909 does not.
- **Torres Amat 1825** (Spanish Catholic, public domain) exists only as Internet Archive scans, so it would need an OCR clean-up project.

**Fathers.**
- Re-download the SermonIndex JSONL (95 MB, deleted here after extraction).
- HCF is richer: it has the deuterocanon and the *Catena Aurea*, with source URLs.
- Run the same match and licence triage everywhere: allow-list the ANF/NPNF/Newman/LFC works, and quarantine entries with no URL.

## Risks

- **Copyrighted translations need written permission**: NVI, RVR1960, NTV, LBLA/NBLA, Biblia de Jerusalén, Nácar-Colunga, Biblia de América, Libro del Pueblo de Dios, ESV, NIV, NABRE, RSV-CE, NRSV.
- **Biblia Platense (Straubinger)**: CrossWire marks it "Public Domain", but the author died in 1956. It is protected in Argentina until 1 Jan 2027 (life + 70) and in Spain until 2037. Excluded for now.
- **Patristic translations**: the dataset's CC BY licence does not cover the translations inside it.
- **Share-alike spill-over**: the OpenGNT Spanish glosses (CC BY-SA) and the Swete LXX (GPL) force the same licence on derived data. Keep them in separate layers.
- **Data drift**: STEPBible corrects its data regularly. Record the download date and re-run the scripts instead of hand-editing the output.
- **Attribution page needed**: STEP Bible, OpenGNT, SermonIndex, plus the "WEB" trademark rule.
