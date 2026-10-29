# Bible section headings and paragraph structure

## Progress

- Status: done
- Done: checked the five held editions against the dated local packages; checked the official current USFM for KJV, DRA and RV1909; checked the official BSB XLSX and USFM; checked the 1914 RV1909 print witness; screened four openly usable Spanish USFM editions; defined the extraction and data model.
- In progress: none.
- Next: apply the extraction changes and create the reviewed Spanish editorial heading layer when implementation resumes.

Checked 2026-10-27. Scratch downloads and inspection files are in `~/doctrina-scratch/section-headings/`, outside the repository.

## Tags

- `CONFIRMED`: matched in the named local archive, official download or dated scan.
- `INFERENCE`: a product or legal conclusion drawn from confirmed evidence.
- `REJECT`: inspected, but unsuitable for the stated use.

## 1. What each held edition contains

| Edition | Section headings | Paragraph breaks | Evidence and exact local source |
|---|---|---|---|
| Berean Standard Bible (`bsb`) | Yes. The official USFM contains 3,016 `\s1` headings and 80 `\s2` subheadings. John 6 has headings at vv. 1, 16, 22, 59 and 67. | Yes. The official USFM uses `\p` and `\pmo`; poetry uses `\q*`. | The held source is `data/raw/src/bibles/engbsb_usfm.zip`, with one dated USFM file per book. It also contains `\s1`, `\s2`, `\m`, `\pmo`, `\b` and `\q*`. The held VPL `data/raw/src/bibles/engbsb_vpl.zip` explicitly says that formatting, paragraph breaks and noncanonical section titles were removed. The official BSB XLSX is not a structure source: its only data columns are verse locator and verse text. [Official downloads](https://berean.bible/downloads.htm). `[CONFIRMED: official USFM, official XLSX, local archives]` |
| World English Bible Catholic (`web-c`) | Not for ordinary pericopes. The package has only five `\s1` headings, all structural titles in the deuterocanonical additions: Letter of Jeremiah and additions to Daniel. | Yes. It contains 8,715 `\p`, 80 `\m`, 39 `\pi1` and poetry markers across 1,328 chapters. John 6 has paragraph starts but no headings. | `data/raw/src/bibles/eng-web-c_usfm.zip`; 73 book files plus `copr.htm`, dated 2026-10-22. The same-date VPL was already rejected because it omits Genesis. [Official USFM](https://ebible.org/Scriptures/eng-web-c_usfm.zip). `[CONFIRMED: local archive]` |
| King James Version, standardized 1769 text (`kjv`) | No modern topical headings. The official USFM's 36 `\s1` records are the 22 Hebrew-letter labels in Psalm 119 and traditional New Testament colophons, not pericope titles. | Yes. The official USFM contains 4,635 `\p` markers: 1,039 before verse 1 and 3,596 internal paragraph starts. The text also prints the traditional pilcrow at many of those starts. | The held `data/raw/src/bibles/eng-kjv2006_vpl.zip` has no structure because its own `eng-kjv2006_about.htm` says all formatting and paragraph breaks were removed. The structure is in the official `eng-kjv2006_usfm.zip`, checked in scratch; it is not yet held under `data/raw/src/`. [Official USFM](https://ebible.org/Scriptures/eng-kjv2006_usfm.zip). `[CONFIRMED: official USFM and local VPL]` |
| Douay-Rheims 1899 American Edition (`dra`) | No `\s*` headings in the official USFM. | No usable internal paragraph structure. Its 1,184 `\p` markers all precede verse 1; none precedes a later verse. | The held `data/raw/src/bibles/engDRA_vpl.zip` removed formatting. The official `engDRA_usfm.zip`, checked in scratch, has 73 book files but is not yet held under `data/raw/src/`. [Official USFM](https://ebible.org/Scriptures/engDRA_usfm.zip). `[CONFIRMED: official USFM and local VPL]` |
| Reina-Valera 1909 (`rv1909`) | No `\s*` headings in the official USFM. | No internal paragraph structure. It has exactly one `\p` at the beginning of each of its 1,189 chapters. | The held `data/raw/src/bibles/spaRV1909_vpl.zip` removed formatting. The official `spaRV1909_usfm.zip`, checked in scratch, has the same one-paragraph-per-chapter structure but is not yet held under `data/raw/src/`. The [Madrid 1914 printing](https://archive.org/details/lasantabibliaque00unse) has running page headers such as “Jesús, el pan de vida” and “Jesús anda sobre la mar” over John 6, but they are page headers rather than inline headings with stable verse boundaries. `[CONFIRMED: official USFM, local VPL and 1914 scan OCR]` |

### Existing generated data

`data/corpus/bibles/bsb.structure.json` and `data/corpus/bibles/web-c.structure.json` are generated from `data/scripts/build_bible_structure.py`. The manifest in `data/sources/bible-structure.json` records 1,189 BSB chapters and 3,016 headings, and 1,328 WEB Catholic chapters and five headings. `[CONFIRMED: repository files]`

The current extractor recognizes only `\s` and `\s1`. It therefore omits all 80 BSB `\s2` headings, including “The First Day” and the following creation-day subheadings in Genesis 1. If the reader promises the edition's own headings, `\s2` must be included or the omission must be an explicit editorial rule. `[CONFIRMED: local source and extraction script]`

## 2. Rights in headings and paragraph marks

| Edition | Rights result |
|---|---|
| BSB | The publisher's terms, dated 2023-04-30, dedicate the Berean Bible texts to the public domain, permit all uses and adaptations, and make the official USFM and USX available beside the XLSX and print files. The headings and paragraph markup are embedded in those official files and the terms state no carve-out for them. Treat the embedded structure as public domain; retain the source record. [Terms](https://berean.bible/terms.htm), [downloads](https://berean.bible/downloads.htm). `[CONFIRMED: official terms and downloads; INFERENCE: the undifferentiated dedication covers embedded editorial structure]` |
| WEB Catholic | `copr.htm` dedicates the World English Bible to the public domain and permits copying, adaptation and redistribution. The name remains a trademark and must not label an altered text. The paragraph metadata and the five structural headings are embedded in the official package with no separate restriction. [Official USFM](https://ebible.org/Scriptures/eng-web-c_usfm.zip), [public-domain explanation](https://ebible.org/publicdomain.htm). `[CONFIRMED: official package and policy; INFERENCE: embedded structure follows the package's grant]` |
| KJV | The official package labels the standardized 1769 text public domain outside the United Kingdom and permits free copying. The non-expiring UK letters patent concern printing or importing printed KJV copies in the UK, not Doctrina's web reader. The paragraph structure is embedded in that package and no separate right is claimed. [Official USFM](https://ebible.org/Scriptures/eng-kjv2006_usfm.zip), [eBible public-domain policy](https://ebible.org/publicdomain.htm). `[CONFIRMED: official package and policy; INFERENCE: embedded paragraph metadata is reusable for the web reader]` |
| DRA and RV1909 | Both official packages label their text public domain, but neither supplies reusable internal paragraph structure or section headings. Their chapter-opening `\p` markers add no protectable editorial layer. [DRA USFM](https://ebible.org/Scriptures/engDRA_usfm.zip), [RV1909 USFM](https://ebible.org/Scriptures/spaRV1909_usfm.zip). `[CONFIRMED: official packages]` |

No source checked makes a separate copyright claim over paragraph markers. That absence is not a general rule for Bible editions: it is the result for these named packages only. `[CONFIRMED: named source records; INFERENCE]`

## 3. Spanish headings and paragraphs for RV1909

### Sources tried

| Candidate | Result |
|---|---|
| RV1909, Madrid 1914 | Public domain and a dated print witness. It has chapter titles and running page headers, but no stable inline pericope headings and no running-paragraph structure that can be extracted by verse. `REJECT` for section data. [Scan](https://archive.org/details/lasantabibliaque00unse). `[CONFIRMED: scan OCR]` |
| Bible Aquifer RV1909, release `v2026-09-18` | CC0. Its 66 USFM files have exactly one `\p` per chapter and no `\s*` markers, matching the eBible limitation. `REJECT`. [Release](https://github.com/BibleAquifer/ReinaValera1909/releases). `[CONFIRMED: official release archive]` |
| *La Biblia en Español Sencillo* (`spabes`), revision 2, 2026-07-01 | Public domain/CC0. It has paragraph markers, mostly one per verse, but no section headings. Its paragraphing is unsuitable for the requested running-paragraph view. `REJECT`. [Official record](https://open.bible/bibles/la-biblia-en-espa%C3%B1ol-sencillo). `[CONFIRMED: official USFM and licence record]` |
| *Santa Biblia libre para el mundo* (`spablm`) and *Santa Biblia libre Latinoamericano* (`spabll`), source files dated 2026-10-20 | Public domain. Both have useful paragraph groupings but only five deuterocanonical structural headings, inherited from the WEB family. Both identify themselves as drafts under revision. `REJECT` as the launch source for RV1909 structure. [SBLM](https://ebible.org/spablm/), [BLL record](https://www.ebible.org/find/details.php?id=spabll). `[CONFIRMED: official USFM and source records]` |
| *Versión Biblia Libre* (`spavbl`), source files dated 2026-10-20 | CC BY-SA 4.0. It has paragraphs but no `\s*` headings. It adds a share-alike layer without solving the heading problem. `REJECT`. [Official record](https://open.bible/bibles/versi%C3%B3n-biblia-libre). `[CONFIRMED: official USFM and licence record]` |

### Recommendation

No checked Spanish public-domain or openly licensed source supplies a complete, stable set of Spanish section headings suitable for RV1909. `[CONFIRMED: bounded source screen above]`

Use the BSB's public-domain section boundaries as a collation witness, then write concise Spanish headings as Doctrina editorial content. Translate or adapt from the BSB heading only after checking that the boundary fits RV1909's verse numbering and content. Give every heading a source record (`boundaryWitness: bsb`, BSB release date, original English title) and a review status. Do not label the result “RV1909 headings”: label it as Doctrina's editorial outline. `[INFERENCE]`

For paragraphing, use a separate Doctrina editorial layer rather than silently borrowing another translation's paragraph decisions. Seed it from BSB and WEB Catholic where their boundaries agree, inspect disagreements, and review the result chapter by chapter against RV1909. This avoids publishing a draft Spanish edition's editorial decisions as if they belonged to the 1909 text. `[INFERENCE]`

## 4. Data model and extraction

### Canonical research shape

```ts
type ChapterStructure = {
  sections: { from: number; to: number; title: string; level?: 1 | 2 }[];
  paragraphs: number[][];
};
```

- `from` and `to` are inclusive verse numbers in that edition.
- `paragraphs` groups verse numbers in reading order.
- A heading before verse 1 starts at 1. A section ends immediately before the next section or at the chapter's last verse.
- A paragraph marker inside an already-started verse cannot be represented by this verse-level shape and must be logged rather than silently moved.

### Compact production shape

The implementation already stores the equivalent compact form:

```ts
type ChapterStructure = {
  sections: { from: number; title: string }[];
  paragraphs: number[];
};
```

Here `paragraphs` contains paragraph-start verses; `to` and the verse arrays are derived from the next start and the chapter's last verse. This avoids duplicated boundaries drifting apart. Add `level` only if the UI will preserve BSB `\s2`; otherwise flatten `\s1` and `\s2` into the same displayed heading level. `[INFERENCE]`

### Extraction by edition

1. **BSB:** use `data/raw/src/bibles/engbsb_usfm.zip`. Parse `\c`, `\v`, `\s1`, `\s2`, `\p`, `\m`, `\pmo`, `\pm*`, `\pi*`, `\nb`, `\b` and the first line of each `\q*` block. Strip character, note and cross-reference markup only after locating markers. Preserve heading level. Validate John 6 starts at 1, 16, 22, 59 and 67. Do not use the XLSX for structure.
2. **WEB Catholic:** use `data/raw/src/bibles/eng-web-c_usfm.zip`. Extract paragraph starts from `\p`, `\m`, `\pi*`, `\nb`, `\b` and poetry-block starts. Keep the five `\s1` records only where they are true structural titles; ordinary chapters have no headings.
3. **KJV:** archive the checked official `eng-kjv2006_usfm.zip` under `data/raw/src/bibles/` with its hash and download date. Extract `\p` starts. Do not expose Psalm 119 acrostic labels or NT colophons as topical section headings; model them separately if the reader later needs them.
4. **DRA:** archive the official `engDRA_usfm.zip`, but emit no ordinary structure until a dated-edition paragraph source is found. Its current `\p` records are chapter starts only.
5. **RV1909:** archive the official `spaRV1909_usfm.zip`, but keep edition structure empty. Generate a separate Spanish editorial structure from the reviewed Doctrina layer, never inside the RV1909 source record.
6. **Validation:** reject a heading without a following verse, a paragraph start absent from the chapter, overlaps, gaps in derived section ranges, or a structure whose verse numbering does not match that edition. Record source archive, SHA-256, source date and checked date in the manifest. Spot-check Genesis 1, Psalm 119, John 6 and each deuterocanonical addition before publishing.

## Wrong or unsafe assumptions found

- “The five held texts have no paragraph breaks because the corpus JSON has none” is wrong. The BSB, WEB Catholic and KJV USFM sources do carry them; the VPL exports intentionally removed them.
- Treating every KJV `\s1` as a section heading is wrong: they are acrostic labels and colophons.
- Treating the 1914 RV1909 running page heads as verse-anchored section titles is unsafe.
- Calling translated BSB headings “RV1909 headings” would falsely assign a modern editorial outline to the 1909 edition.
