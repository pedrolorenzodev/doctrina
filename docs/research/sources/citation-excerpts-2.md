# Citation excerpts, set 2 (A2)
Status: draft, NOT verified by Pedro

> **Review note (session 1, 2026-11-01):** independently checked in `docs/research/night-2026-11-01/verification-codex-a2-d1.md`. 28 excerpts end without terminal punctuation: 8 must be corrected before use (LSAII_4_7_9, RWLC173, RWCF29_4, LACXXV_1, LACXXIV_1_3, LFCEpRN_1_y_7, LFCSDVII_83_84__87, CEC892) and 20 need an ellipsis or a short extension; the corrected wording of each is in that file. Do not import the clipped records as they stand. The Triglot Lutheran text is the BookOfConcord.org transcription, not a print page.

> **Corrections applied (session A, 2026-11-01, afternoon):** the 28 clipped excerpts listed above were extended or closed with `[…]` using the verifier's wordings, each re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, Schaff's page text, the official vatican.va pages); every corrected record keeps the earlier wording in `correction.textBeforeCorrection`. RWLC173's locator is now pp. 206–207 (leaves n209–n210). ODositheusXV and OPhilaret18 move from `[unverified]` to verified on the verifier's page-image readings. The duplicates RWCF31_3 / RWCF31_3_4 and RWLC171 / RWLC171_172 keep both ids (same text). Still true: the Lutheran text is the web transcription, not a print page. **Spanish (session A, same day):** 11 records now carry the 1880 Monterrey Spanish edition (a published public-domain Spanish text; read in page-level OCR, accents and obvious glyph errors restored, tag `[unverified]`, page image not read) and 8 Larger Catechism records carry an AI Spanish from the English original (labelled; the 1880 volume has no Larger Catechism). **45 excerpts stay `pending`:** the 40 Lutheran ones (the originals are German and Latin; the German of the Triglot OCR is Fraktur and unusable, and the Latin differs from the German the English follows, so a Spanish from the original needs page images) and the 5 Orthodox ones (Greek, Latin and Russian originals, not acquired).

> **AI Spanish added (session A2, 2026-11-01, evening):** the 45 excerpts left `pending` (40 Lutheran, 5 Orthodox) now carry a Spanish translation made by the AI assistant from the dated English text of each record, labelled «Traducción de Doctrina asistida por IA, desde [edition]» in `es.edition`, tagged `[unverified: AI Spanish from the English, unreviewed by Pedro]`, never inside marks without that label (DECISIONS 2026-11-01, decision 3). The 8 Larger Catechism records got the same label wording. The Lutheran English is still the BookOfConcord.org web transcription of the Triglot, not the print page; the German/Latin originals and the Greek/Latin/Russian originals were **not** read (Fraktur OCR unusable, no Orthodox originals acquired), so none of these Spanish texts is from the original. Known English defects carried into the Spanish, not hidden: `LSCIV_4` ends with the stray word «Secondly.» (the start of the next sentence) and has a leading space; `LFCSDVII_79_82` has an unclosed `[` (the clipped bracketed clause); `LFCEpX_3` and `LFCEpX_3_5` are the same sentence; the Bible quotations inside the confessions are translated with the rest, not taken from a Spanish Bible. Not yet verified by a second pass.

## Progress

- Status: done
- Done: LACXXIV_1_3, LACXXIV_13__34, LACXIV, LACXXV_1, LACXXIV_6_7, LACXXII_1_2__12, LACXXVIII_5, LApXXIV_1, LApXXIV_49, LSCVI_9_10, LSCIV_4, LLCV_37, LLCV_42, LLCV_39_47, LLCV_58__61__70_72, LLCV_86_87, LLCV, LLCIV_57, LLCIV_77_79, LFCEpVII_9, LFCEpX_3_5, LFCEpRN_1_y_7, LFCEpRN_4, LFCEpRN_5, LFCEpVII, LFCEpX_3, LFCEpRN_3, LFCSDVII_79_82, LFCSDVII_83_84__87, LFCSDVII_69_71, LSAII_4_1, LSAII_4_7_9, LTr7, LTr56, RWCF31_3_4, RWCF1_3, RWCF31_3, RWCF31_4, RWCF31_5, RWCF29_1, RWCF29_5, RWCF29_8, RWCF29_3, RWCF29_4, RWLC160, RWLC171, RWLC171_172, RWLC169, RWLC174, RWLC175, RWLC173, RWLC177, RWSC97, CEC892, CEC80, CEC104, CEC114, CIC336, CIC337, CIC341, CIC349, VD87, OMogila106, OMogila107, OPhilaret20
- Left: none
- Unverified: none (ODositheusXV and OPhilaret18 upgraded 2026-11-01 on page-image readings)
- Skipped: CEC1223, CEC1232, CEC1234, CEC1243, CEC1244, CEC1247, CEC1251, CEC1255, CEC1283, CEC1284, CEC1338, CEC1340, CEC1341, CEC1342, CEC1376, CEC1382, CEC1385, CEC1387, CEC1415, CEC1417, CIC921, SC64, T7sacr12, T22c7
- Agent's calls:
  - Agent's call: obey the explicit two-file boundary; do not change ROADMAP, DECISIONS, registry, or other agents' files.
  - Agent's call: use structured JSONL rate-limit events because the supplied grep assumes compact JSON and returns no reading.
  - Agent's call: skip input ids already covered by citation-excerpts.md rather than repeat the completed Catholic set.
  - Agent's call: leave Spanish pending when only an English witness is acquired; no back-translation from English.
  - Agent's call: use the task's explicit permission for BookOfConcord.org Triglot text; preserve its web locator and disclose that a print page was not checked.
  - Agent's call: A2 done counts the acquired edition-language excerpt. Spanish remains pending for 58 new records (34 Lutheran, 19 Reformed, 5 Orthodox); no Spanish translation is inferred from an English witness.
  - Agent's call: scan-backed OCR checks are explicitly weaker than visual page-image collation; the quotation tags disclose this. These are draft research candidates, not final import approval.
  - Agent's call: D1 supplies a matched fragment, not a complete bilingual replacement where a registry id combines several passages. Corrected source locators are retained beside unchanged registry ids.
  - Agent's call: final scan-string audit demotes four candidates with uncollated OCR glyph corrections to unverified. Their source and locator were found, but exact printed wording is not claimed.
  - Agent's call: application build verification was not run for research-only Markdown; it would generate application artifacts outside the two-file write boundary. Local checks cover JSON parsing, unique ids, input coverage, required provenance, quote word limits, cached web strings and Markdown formatting.

Research candidates only; no registry edits. Done means the quoted witness and locator were checked as stated, not approval by Pedro. Numbered HTML locators are not printed pages. Partial fragments do not claim to reproduce every paragraph in a range. Source snapshots and acquisition scripts are outside the repository in `~/codex-night1101-scratch/`.

### LACXXIV_1_3

```json
{
  "id": "LACXXIV_1_3",
  "work": "augsburg",
  "locator": "XXIV.1–3",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Falsely are our churches accused of abolishing the Mass; for the Mass is retained among us, and celebrated with the highest reverence.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXIV.1–3; sentence/fragment at web anchor ac-xxiv-0001 (unpaginated)"
      },
      "at": "XXIV.1–3",
      "sourceURL": "https://bookofconcord.org/augsburg-confession/of-the-mass/#ac-xxiv-0001",
      "sourceLocator": "XXIV.1–3; sentence/fragment at web anchor ac-xxiv-0001 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Se acusa falsamente a nuestras iglesias de abolir la Misa; pues la Misa se conserva entre nosotros y se celebra con la mayor reverencia.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "MUST FIX: extended to the end of the sentence",
        "textBeforeCorrection": "Falsely are our churches accused of abolishing the Mass; for the Mass is retained among",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LACXXIV_13__34

```json
{
  "id": "LACXXIV_13__34",
  "work": "augsburg",
  "locator": "XXIV.13, 34",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "When, therefore our priests were admonished concerning this sin, Private Masses were discontinued among us, as scarcely any Private Masses were celebrated except for lucre’s sake.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXIV.13, 34; sentence/fragment at web anchor ac-xxiv-0013 (unpaginated)"
      },
      "at": "XXIV.13, 34",
      "sourceURL": "https://bookofconcord.org/augsburg-confession/of-the-mass/#ac-xxiv-0013",
      "sourceLocator": "XXIV.13, 34; sentence/fragment at web anchor ac-xxiv-0013 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Cuando, pues, se amonestó a nuestros sacerdotes acerca de este pecado, se suprimieron entre nosotros las Misas privadas, ya que apenas se celebraban Misas privadas sino por afán de lucro.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    },
    {
      "en": {
        "text": "Now, forasmuch as the Mass is such a giving of the Sacrament, we hold one communion every holy-day, and, if any desire the Sacrament, also on other days, when it is given to such as ask for it.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXIV.13, 34; sentence/fragment at web anchor ac-xxiv-0034 (unpaginated)"
      },
      "at": "XXIV.13, 34",
      "sourceURL": "https://bookofconcord.org/augsburg-confession/of-the-mass/#ac-xxiv-0034",
      "sourceLocator": "XXIV.13, 34; sentence/fragment at web anchor ac-xxiv-0034 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Ahora bien, como la Misa es una administración tal del Sacramento, tenemos una comunión cada día de fiesta y, si alguno desea el Sacramento, también otros días, cuando se da a quienes lo piden.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LACXIV

```json
{
  "id": "LACXIV",
  "work": "augsburg",
  "locator": "XIV",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Of Ecclesiastical Order they teach that no one should publicly\nteach in the Church or administer the Sacraments unless he be\nregularly called.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XIV; sentence/fragment at web anchor  (unpaginated)"
      },
      "at": "XIV",
      "sourceURL": "https://bookofconcord.org/augsburg-confession/of-ecclesiastical-order/#",
      "sourceLocator": "XIV; sentence/fragment at web anchor  (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Acerca del Orden eclesiástico enseñan que nadie debe enseñar públicamente en la Iglesia ni administrar los Sacramentos si no ha sido regularmente llamado.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LACXXV_1

```json
{
  "id": "LACXXV_1",
  "work": "augsburg",
  "locator": "XXV.1",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Confession in the churches is not abolished among us; for it is not usual to give the body of the Lord, except to them that have been previously examined and absolved.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXV.1; sentence/fragment at web anchor ac-xxv-0001 (unpaginated)"
      },
      "at": "XXV.1",
      "sourceURL": "https://bookofconcord.org/augsburg-confession/of-confession-xxv/#ac-xxv-0001",
      "sourceLocator": "XXV.1; sentence/fragment at web anchor ac-xxv-0001 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "La confesión no ha sido abolida en las iglesias entre nosotros; pues no es costumbre dar el cuerpo del Señor sino a quienes han sido examinados y absueltos previamente.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "MUST FIX: dangling «And» removed",
        "textBeforeCorrection": "Confession in the churches is not abolished among us; for it is not usual to give the body of the Lord, except to them that have been previously examined and absolved. And",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LACXXIV_6_7

```json
{
  "id": "LACXXIV_6_7",
  "work": "augsburg",
  "locator": "XXIV.6–7",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "For none are admitted except they be first examined.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXIV.6–7; sentence/fragment at web anchor ac-xxiv-0006 (unpaginated)"
      },
      "at": "XXIV.6–7",
      "sourceURL": "https://bookofconcord.org/augsburg-confession/of-the-mass/#ac-xxiv-0006",
      "sourceLocator": "XXIV.6–7; sentence/fragment at web anchor ac-xxiv-0006 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Pues nadie es admitido sino después de haber sido examinado.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LACXXII_1_2__12

```json
{
  "id": "LACXXII_1_2__12",
  "work": "augsburg",
  "locator": "XXII.1–2, 12",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "To the laity are given Both Kinds in the Sacrament of the Lord’s Supper, because this usage has the commandment of the Lord in Matt. 26:27: Drink ye all of it, where Christ has manifestly commanded concerning the cup that all should drink.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXII.1–2, 12; sentence/fragment at web anchor ac-xxii-0001 (unpaginated)"
      },
      "at": "XXII.1–2, 12",
      "sourceURL": "https://bookofconcord.org/augsburg-confession/of-both-kinds-in-the-sacrament/#ac-xxii-0001",
      "sourceLocator": "XXII.1–2, 12; sentence/fragment at web anchor ac-xxii-0001 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "A los laicos se les dan Ambas Especies en el Sacramento de la Cena del Señor, porque este uso tiene el mandamiento del Señor en Mateo 26:27: Bebed todos de ella, donde Cristo manifiestamente ha mandado acerca de la copa que todos beban.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence",
        "textBeforeCorrection": "To the laity are given Both Kinds in the Sacrament of the Lord’s Supper, because this usage has the commandment of the Lord in Matt. 26:27: Drink ye all of it,",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    },
    {
      "en": {
        "text": "of the Sacrament does not agree with the ordinance of Christ, we are accustomed to omit the procession, which hitherto has been in use.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXII.1–2, 12; sentence/fragment at web anchor ac-xxii-0012 (unpaginated)"
      },
      "at": "XXII.1–2, 12",
      "sourceURL": "https://bookofconcord.org/augsburg-confession/of-both-kinds-in-the-sacrament/#ac-xxii-0012",
      "sourceLocator": "XXII.1–2, 12; sentence/fragment at web anchor ac-xxii-0012 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "del Sacramento no concuerda con la ordenanza de Cristo, solemos omitir la procesión, que hasta ahora ha estado en uso.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LACXXVIII_5

```json
{
  "id": "LACXXVIII_5",
  "work": "augsburg",
  "locator": "XXVIII.5",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "But this is their opinion, that the power of the Keys, or the power of the bishops, according to the Gospel, is a power or commandment of God, to preach the Gospel, to remit and retain sins, and to administer Sacraments.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXVIII.5; sentence/fragment at web anchor ac-xxviii-0005 (unpaginated)"
      },
      "at": "XXVIII.5",
      "sourceURL": "https://bookofconcord.org/augsburg-confession/of-ecclesiastical-power/#ac-xxviii-0005",
      "sourceLocator": "XXVIII.5; sentence/fragment at web anchor ac-xxviii-0005 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Pero esta es la opinión de ellos: que el poder de las Llaves, o el poder de los obispos, según el Evangelio, es un poder o mandato de Dios para predicar el Evangelio, remitir y retener pecados y administrar los Sacramentos.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LApXXIV_1

```json
{
  "id": "LApXXIV_1",
  "work": "apology",
  "locator": "XXIV.1",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "For among us masses are celebrated every Lord’s Day and on the other festivals, in which the Sacrament is offered to those who wish to use it, after they have been examined and absolved.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXIV.1; sentence/fragment at web anchor ap-xxiv-0001 (unpaginated)"
      },
      "at": "XXIV.1",
      "sourceURL": "https://bookofconcord.org/defense/of-the-mass/#ap-xxiv-0001",
      "sourceLocator": "XXIV.1; sentence/fragment at web anchor ap-xxiv-0001 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Pues entre nosotros se celebran misas cada día del Señor y en las demás fiestas, en las cuales se ofrece el Sacramento a quienes desean usarlo, después de haber sido examinados y absueltos.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LApXXIV_49

```json
{
  "id": "LApXXIV_49",
  "work": "apology",
  "locator": "XXIV.49",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "But if the use of the Sacrament would be the daily sacrifice, nevertheless we would retain it rather than the adversaries, because with them priests hired for pay use the Sacrament. With us there is a more frequent and more conscientious use. For the people use it, but after having first been instructed and examined. For men are taught concerning the true use of the Sacrament that it was instituted for the purpose of being a seal and testimony of the free remission of sins, and that, accordingly, it ought to admonish alarmed consciences to be truly confident and believe that their sins are freely remitted.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "XXIV.49; sentence/fragment at web anchor ap-xxiv-0049 (unpaginated)"
      },
      "at": "XXIV.49",
      "sourceURL": "https://bookofconcord.org/defense/of-the-mass/#ap-xxiv-0049",
      "sourceLocator": "XXIV.49; sentence/fragment at web anchor ap-xxiv-0049 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Pero aunque el uso del Sacramento fuera el sacrificio diario, sin embargo nosotros lo conservaríamos antes que los adversarios, porque entre ellos usan el Sacramento sacerdotes pagados a sueldo. Entre nosotros hay un uso más frecuente y más concienzudo. Pues el pueblo lo usa, pero habiendo sido antes instruido y examinado. Pues a los hombres se les enseña acerca del verdadero uso del Sacramento que fue instituido para ser sello y testimonio de la libre remisión de los pecados, y que, por tanto, debe amonestar a las conciencias alarmadas a confiar verdaderamente y a creer que sus pecados les son libremente remitidos.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LSCVI_9_10

```json
{
  "id": "LSCVI_9_10",
  "work": "small-catechism",
  "locator": "VI.9–10 (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Fasting and bodily preparation is, indeed, a fine outward training; but he is truly worthy and well prepared who has faith in these words: _Given_, _and shed for you_, _for the remission of sins_. But he that does not believe these words, or doubts, is unworthy and unfit; for the words _For you_ require altogether believing hearts.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "VI.9–10 (Lutero); sc-sacrament-altar-0005 (question and answer; unpaginated)"
      },
      "at": "VI.9–10 (Lutero)",
      "sourceURL": "https://bookofconcord.org/small-catechism/the-sacrament-of-the-altar/#sc-sacrament-altar-0005",
      "sourceLocator": "VI.9–10 (Lutero); sc-sacrament-altar-0005 (question and answer; unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot question/answer text matched 2026-11-01; traditional locator crosswalk by question content]",
      "es": {
        "text": "El ayuno y la preparación corporal son, en verdad, un buen ejercicio exterior; pero verdaderamente digno y bien preparado es quien tiene fe en estas palabras: _Dado_, _y derramado por vosotros_, _para remisión de los pecados_. Pero el que no cree estas palabras, o duda, es indigno e inepto; pues las palabras _Por vosotros_ exigen corazones enteramente creyentes.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "numbering": "Web numbers question/answer units; traditional locator counts question and answer separately."
}
```

### LSCIV_4

```json
{
  "id": "LSCIV_4",
  "work": "small-catechism",
  "locator": "IV.4 (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": " Christ, our Lord, says in the last chapter of Matthew : Go ye into all the world and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost. Secondly.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "IV.4 (Lutero); sc-baptism-0002 (question and answer; unpaginated)"
      },
      "at": "IV.4 (Lutero)",
      "sourceURL": "https://bookofconcord.org/small-catechism/the-sacrament-of-holy-baptism/#sc-baptism-0002",
      "sourceLocator": "IV.4 (Lutero); sc-baptism-0002 (question and answer; unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot question/answer text matched 2026-11-01; traditional locator crosswalk by question content]",
      "es": {
        "text": "Cristo, nuestro Señor, dice en el último capítulo de Mateo: Id por todo el mundo y enseñad a todas las naciones, bautizándolas en el nombre del Padre, y del Hijo, y del Espíritu Santo. Segundo.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "numbering": "Web numbers question/answer units; traditional locator counts question and answer separately."
}
```

### LLCV_37

```json
{
  "id": "LLCV_37",
  "work": "large-catechism",
  "locator": "V.37 (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Fasting and prayer, etc., may indeed be an external preparation and discipline for children, that the body may keep and bear itself modestly and reverently towards the body and blood of Christ; yet what is given in and with it the body cannot seize and appropriate. But this is done by the faith of the heart, which discerns this treasure and desires it.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "V.37 (Lutero); sentence/fragment at web anchor lc-v-0037 (unpaginated)"
      },
      "at": "V.37 (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/sacrament-of-the-altar/#lc-v-0037",
      "sourceLocator": "V.37 (Lutero); sentence/fragment at web anchor lc-v-0037 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "El ayuno y la oración, etc., pueden ser, ciertamente, una preparación y disciplina exterior para los niños, a fin de que el cuerpo se mantenga y se comporte con modestia y reverencia hacia el cuerpo y la sangre de Cristo; pero lo que se da en él y con él, el cuerpo no puede captarlo ni apropiárselo. Esto lo hace la fe del corazón, que discierne este tesoro y lo desea.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LLCV_42

```json
{
  "id": "LLCV_42",
  "work": "large-catechism",
  "locator": "V.42 (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Now, it is true, as we have said, that no one should by any means be coerced or compelled, lest we institute a new murdering of souls. Nevertheless, it must be known that such people as deprive themselves of, and withdraw from, the Sacrament so long a time are not to be considered Christians. For Christ has not instituted it to be treated as a show, but has commanded His Christians to eat and drink it, and thereby remember Him.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "V.42 (Lutero); sentence/fragment at web anchor lc-v-0042 (unpaginated)"
      },
      "at": "V.42 (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/sacrament-of-the-altar/#lc-v-0042",
      "sourceLocator": "V.42 (Lutero); sentence/fragment at web anchor lc-v-0042 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Ahora bien, es verdad, como hemos dicho, que a nadie se debe coaccionar ni obligar de ningún modo, para no instituir un nuevo asesinato de almas. Sin embargo, debe saberse que quienes se privan del Sacramento y se apartan de él durante tanto tiempo no han de ser considerados cristianos. Porque Cristo no lo instituyó para tratarlo como un espectáculo, sino que mandó a sus cristianos comerlo y beberlo, y recordarle así a Él.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LLCV_39_47

```json
{
  "id": "LLCV_39_47",
  "work": "large-catechism",
  "locator": "V.39–47 (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "In conclusion, since we have now the true understanding and doctrine of the Sacrament, there is indeed need of some admonition and exhortation, that men may not let so great a treasure which is daily administered and distributed among Christians pass by unheeded, that is, that those who would be Christians make ready to receive this venerable Sacrament often.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "V.39–47 (Lutero); sentence/fragment at web anchor lc-v-0039 (unpaginated)"
      },
      "at": "V.39–47 (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/sacrament-of-the-altar/#lc-v-0039",
      "sourceLocator": "V.39–47 (Lutero); sentence/fragment at web anchor lc-v-0039 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "En conclusión, puesto que ya tenemos la verdadera inteligencia y doctrina del Sacramento, hace falta, en verdad, alguna amonestación y exhortación, para que los hombres no dejen pasar inadvertido un tesoro tan grande, que se administra y reparte cada día entre los cristianos; es decir, que quienes quieran ser cristianos se dispongan a recibir con frecuencia este venerable Sacramento.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LLCV_58__61__70_72

```json
{
  "id": "LLCV_58__61__70_72",
  "work": "large-catechism",
  "locator": "V.58, 61, 70–72 (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "We must, therefore, make a distinction here among men.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "V.58, 61, 70–72 (Lutero); sentence/fragment at web anchor lc-v-0058 (unpaginated)"
      },
      "at": "V.58, 61, 70–72 (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/sacrament-of-the-altar/#lc-v-0058",
      "sourceLocator": "V.58, 61, 70–72 (Lutero); sentence/fragment at web anchor lc-v-0058 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Por tanto, debemos hacer aquí una distinción entre los hombres.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    },
    {
      "en": {
        "text": "Therefore such people must learn that it is the highest art to know that our Sacrament does not depend upon our worthiness.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "V.58, 61, 70–72 (Lutero); sentence/fragment at web anchor lc-v-0061 (unpaginated)"
      },
      "at": "V.58, 61, 70–72 (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/sacrament-of-the-altar/#lc-v-0061",
      "sourceLocator": "V.58, 61, 70–72 (Lutero); sentence/fragment at web anchor lc-v-0061 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Por tanto, tales personas deben aprender que el arte supremo es saber que nuestro Sacramento no depende de nuestra dignidad.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    },
    {
      "en": {
        "text": "But those who are sensible of their weakness, desire to be rid of it and long for help, should regard and use it only as a precious antidote against the poison which they have in them.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "V.58, 61, 70–72 (Lutero); sentence/fragment at web anchor lc-v-0070 (unpaginated)"
      },
      "at": "V.58, 61, 70–72 (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/sacrament-of-the-altar/#lc-v-0070",
      "sourceLocator": "V.58, 61, 70–72 (Lutero); sentence/fragment at web anchor lc-v-0070 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Pero quienes sienten su debilidad, desean librarse de ella y anhelan ayuda, deben considerarlo y usarlo solo como un precioso antídoto contra el veneno que llevan dentro.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LLCV_86_87

```json
{
  "id": "LLCV_86_87",
  "work": "large-catechism",
  "locator": "V.86–87 (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "For the old are now well-nigh done for, so that these and other things cannot be attained, unless we train the people who are to come after us and succeed us in our office and work, in order that they also may bring up their children successfully, that the Word of God and the Christian Church may be preserved.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "V.86–87 (Lutero); sentence/fragment at web anchor lc-v-0086 (unpaginated)"
      },
      "at": "V.86–87 (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/sacrament-of-the-altar/#lc-v-0086",
      "sourceLocator": "V.86–87 (Lutero); sentence/fragment at web anchor lc-v-0086 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Pues los viejos están ya casi acabados, de modo que estas y otras cosas no pueden lograrse si no formamos a las personas que han de venir después de nosotros y sucedernos en nuestro oficio y obra, para que también ellas críen bien a sus hijos, a fin de que se conserven la Palabra de Dios y la Iglesia cristiana.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LLCV

```json
{
  "id": "LLCV",
  "work": "large-catechism",
  "locator": "V (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "In the same manner as we have heard regarding Holy Baptism, we must speak also concerning the other Sacrament, namely, these three points: What is it? What are its benefits? and, Who is to receive it? And all these are established by the words by which Christ has instituted it, and which every one who desires to be a Christian and go to the Sacrament should know.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "V (Lutero); sentence/fragment at web anchor lc-v-0001 (unpaginated)"
      },
      "at": "V (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/sacrament-of-the-altar/#lc-v-0001",
      "sourceLocator": "V (Lutero); sentence/fragment at web anchor lc-v-0001 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Del mismo modo que hemos oído acerca del santo Bautismo, debemos hablar también del otro Sacramento, a saber, sobre estos tres puntos: ¿Qué es? ¿Cuáles son sus beneficios? y ¿Quién debe recibirlo? Y todo ello se funda en las palabras con las que Cristo lo instituyó, y que debe saber todo el que desee ser cristiano e ir al Sacramento.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence",
        "textBeforeCorrection": "In the same manner as we have heard regarding Holy Baptism, we must speak also concerning the other Sacrament, namely, these three points: What is it? What are its benefits? and, Who is to receive it? And all these are established by the words by which Christ has instituted it,",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LLCIV_57

```json
{
  "id": "LLCIV_57",
  "work": "large-catechism",
  "locator": "IV.57 (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Thus we do also in infant baptism. We bring the child in the conviction and hope that it believes, and we pray that God may grant it faith; but we do not baptize it upon that, but solely upon the command of God. Why so? Because we know that God does not lie. I and my neighbor and, in short, all men, may err and deceive, but the Word of God cannot err.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "IV.57 (Lutero); sentence/fragment at web anchor lc-iv-0057 (unpaginated)"
      },
      "at": "IV.57 (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/holy-baptism/#lc-iv-0057",
      "sourceLocator": "IV.57 (Lutero); sentence/fragment at web anchor lc-iv-0057 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Así hacemos también en el bautismo de los niños. Llevamos al niño con la convicción y la esperanza de que cree, y rogamos que Dios le conceda la fe; pero no lo bautizamos sobre esa base, sino únicamente sobre el mandato de Dios. ¿Por qué? Porque sabemos que Dios no miente. Yo, mi prójimo y, en suma, todos los hombres podemos errar y engañar, pero la Palabra de Dios no puede errar.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LLCIV_77_79

```json
{
  "id": "LLCIV_77_79",
  "work": "large-catechism",
  "locator": "IV.77–79 (Lutero)",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Therefore our Baptism abides forever; and even though some one should fall from it and sin, nevertheless we always have access thereto, that we may again subdue the old man.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "IV.77–79 (Lutero); sentence/fragment at web anchor lc-iv-0077 (unpaginated)"
      },
      "at": "IV.77–79 (Lutero)",
      "sourceURL": "https://bookofconcord.org/large-catechism/holy-baptism/#lc-iv-0077",
      "sourceLocator": "IV.77–79 (Lutero); sentence/fragment at web anchor lc-iv-0077 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Por tanto, nuestro Bautismo permanece para siempre; y aunque alguien cayera de él y pecara, sin embargo siempre tenemos acceso a él, para someter de nuevo al viejo hombre.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCEpVII_9

```json
{
  "id": "LFCEpVII_9",
  "work": "fc-epitome",
  "locator": "VII.9",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "But at the same time we also believe, teach, and confess unanimously that in the use of the Holy Supper the words of the institution of Christ should in no way be omitted, but should be publicly recited, as it is written 1 Cor. 10:16: The cup of blessing which we bless, etc. This blessing occurs through the recitation of the words of Christ.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "VII.9; sentence/fragment at web anchor ep-vii-0009 (unpaginated)"
      },
      "at": "VII.9",
      "sourceURL": "https://bookofconcord.org/epitome/the-lords-supper/#ep-vii-0009",
      "sourceLocator": "VII.9; sentence/fragment at web anchor ep-vii-0009 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Pero al mismo tiempo creemos, enseñamos y confesamos unánimemente que en el uso de la Santa Cena las palabras de la institución de Cristo no deben omitirse en modo alguno, sino que deben recitarse públicamente, como está escrito en 1 Cor. 10:16: La copa de bendición que bendecimos, etc. Esta bendición se produce mediante la recitación de las palabras de Cristo.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCEpX_3_5

```json
{
  "id": "LFCEpX_3_5",
  "work": "fc-epitome",
  "locator": "X.3–5",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "For settling also this controversy we unanimously believe, teach, and confess that the ceremonies or church rites which are neither commanded nor forbidden in God’s Word, but have been instituted alone for the sake of propriety and good order, are in and of themselves no divine worship, nor even a part of it. Matt. 15:9:In vain they do worship Me, teaching for doctrines the commandments of men.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "X.3–5; sentence/fragment at web anchor ep-x-0003 (unpaginated)"
      },
      "at": "X.3–5",
      "sourceURL": "https://bookofconcord.org/epitome/church-rites/#ep-x-0003",
      "sourceLocator": "X.3–5; sentence/fragment at web anchor ep-x-0003 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Para zanjar también esta controversia creemos, enseñamos y confesamos unánimemente que las ceremonias o ritos eclesiásticos que ni están mandados ni prohibidos en la Palabra de Dios, sino que han sido instituidos solo por razón de decoro y buen orden, no son en sí mismos culto divino, ni siquiera parte de él. Mat. 15:9: En vano me honran, enseñando como doctrinas mandamientos de hombres.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCEpRN_1_y_7

```json
{
  "id": "LFCEpRN_1_y_7",
  "work": "fc-epitome",
  "locator": "RN 1 y 7",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "We believe, teach, and confess that the sole rule and standard according to which all dogmas together with [all] teachers should be estimated and judged are the prophetic and apostolic Scriptures of the Old and of the New Testament alone, as it is written Ps. 119:105: Thy Word is a lamp unto my feet and a light unto my path.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "RN 1 y 7; sentence/fragment at web anchor ep-rule-and-norm-0001 (unpaginated)"
      },
      "at": "RN 1 y 7",
      "sourceURL": "https://bookofconcord.org/epitome/rule-and-norm/#ep-rule-and-norm-0001",
      "sourceLocator": "RN 1 y 7; sentence/fragment at web anchor ep-rule-and-norm-0001 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Creemos, enseñamos y confesamos que la única regla y norma según la cual todos los dogmas junto con [todos] los maestros deben ser estimados y juzgados son las Escrituras proféticas y apostólicas del Antiguo y del Nuevo Testamento solamente, como está escrito en Sal. 119:105: Lámpara es a mis pies tu Palabra, y lumbrera a mi camino.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    },
    {
      "en": {
        "text": "In this way the distinction between the Holy Scriptures of the Old and of the New Testament and all other writings is preserved, and the Holy Scriptures alone remain the only judge, rule, and standard, according to which, as the only test-stone, all dogmas shall and must be discerned and judged, as to whether they are good or evil, right or wrong.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "RN 1 y 7; sentence/fragment at web anchor ep-rule-and-norm-0007 (unpaginated)"
      },
      "at": "RN 1 y 7",
      "sourceURL": "https://bookofconcord.org/epitome/rule-and-norm/#ep-rule-and-norm-0007",
      "sourceLocator": "RN 1 y 7; sentence/fragment at web anchor ep-rule-and-norm-0007 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "De este modo se preserva la distinción entre las Sagradas Escrituras del Antiguo y del Nuevo Testamento y todos los demás escritos, y las Sagradas Escrituras solas siguen siendo el único juez, regla y norma, según las cuales, como única piedra de toque, todos los dogmas deben y han de ser discernidos y juzgados, a fin de ver si son buenos o malos, rectos o erróneos.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "MUST FIX: «right» completed with «or wrong»",
        "textBeforeCorrection": "In this way the distinction between the Holy Scriptures of the Old and of the New Testament and all other writings is preserved, and the Holy Scriptures alone remain the only judge, rule, and standard, according to which, as the only test-stone, all dogmas shall and must be discerned and judged, as to whether they are good or evil, right",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCEpRN_4

```json
{
  "id": "LFCEpRN_4",
  "work": "fc-epitome",
  "locator": "RN 4",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "As to the schisms in matters of faith, however, which have occurred in our time, we regard as the unanimous consensus and declaration of our Christian faith and confession, especially against the Papacy and its false worship, idolatry, superstition, and against other sects, as the symbol of our time, the First, Unaltered Augsburg Confession, delivered to the Emperor Charles V at Augsburg in the year 1530, in the great Diet, together with its Apology, and the Articles composed at Smalcald in the year 1537, and subscribed at that time by the chief theologians.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "RN 4; sentence/fragment at web anchor ep-rule-and-norm-0004 (unpaginated)"
      },
      "at": "RN 4",
      "sourceURL": "https://bookofconcord.org/epitome/rule-and-norm/#ep-rule-and-norm-0004",
      "sourceLocator": "RN 4; sentence/fragment at web anchor ep-rule-and-norm-0004 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "En cuanto a los cismas en materia de fe que han ocurrido en nuestro tiempo, tenemos por consenso y declaración unánime de nuestra fe y confesión cristianas, especialmente contra el Papado y su falso culto, idolatría, superstición, y contra otras sectas, como símbolo de nuestro tiempo, la Primera Confesión de Augsburgo, Inalterada, entregada al emperador Carlos V en Augsburgo en el año 1530, en la gran Dieta, junto con su Apología y los Artículos redactados en Esmalcalda en el año 1537, y suscritos entonces por los principales teólogos.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCEpRN_5

```json
{
  "id": "LFCEpRN_5",
  "work": "fc-epitome",
  "locator": "RN 5",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "And because such matters concern also the laity and the salvation of their souls, we also confess the Small and Large Catechisms of Dr. Luther, as they are included in Luther’s works, as the Bible of the laity, wherein everything is comprised which is treated at greater length in Holy Scripture, and is necessary for a Christian man to know for his salvation.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "RN 5; sentence/fragment at web anchor ep-rule-and-norm-0005 (unpaginated)"
      },
      "at": "RN 5",
      "sourceURL": "https://bookofconcord.org/epitome/rule-and-norm/#ep-rule-and-norm-0005",
      "sourceLocator": "RN 5; sentence/fragment at web anchor ep-rule-and-norm-0005 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Y porque tales asuntos conciernen también a los laicos y a la salvación de sus almas, confesamos también los Catecismos Menor y Mayor del Dr. Lutero, tal como están incluidos en las obras de Lutero, como la Biblia de los laicos, en los cuales está comprendido todo lo que se trata con más amplitud en la Sagrada Escritura y que es necesario que un hombre cristiano sepa para su salvación.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCEpVII

```json
{
  "id": "LFCEpVII",
  "work": "fc-epitome",
  "locator": "VII",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Whether in the Holy Supper the true body and blood of our Lord Jesus Christ are truly and essentially present, are distributed with the bread and wine, and received with the mouth by all those who use this Sacrament, whether they be worthy or unworthy, godly or ungodly, believing or unbelieving; by the believing for consolation and life, by the unbelieving for judgment? The Sacramentarians say, No; we say, Yes.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "VII; sentence/fragment at web anchor ep-vii-0002 (unpaginated)"
      },
      "at": "VII",
      "sourceURL": "https://bookofconcord.org/epitome/the-lords-supper/#ep-vii-0002",
      "sourceLocator": "VII; sentence/fragment at web anchor ep-vii-0002 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "¿Están en la Santa Cena el verdadero cuerpo y la verdadera sangre de nuestro Señor Jesucristo verdadera y esencialmente presentes, se distribuyen con el pan y el vino y son recibidos con la boca por todos los que usan este Sacramento, sean dignos o indignos, piadosos o impíos, creyentes o incrédulos; por los creyentes para consuelo y vida, por los incrédulos para juicio? Los sacramentarios dicen: No; nosotros decimos: Sí.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCEpX_3

```json
{
  "id": "LFCEpX_3",
  "work": "fc-epitome",
  "locator": "X.3",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "For settling also this controversy we unanimously believe, teach, and confess that the ceremonies or church rites which are neither commanded nor forbidden in God’s Word, but have been instituted alone for the sake of propriety and good order, are in and of themselves no divine worship, nor even a part of it. Matt. 15:9:In vain they do worship Me, teaching for doctrines the commandments of men.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "X.3; sentence/fragment at web anchor ep-x-0003 (unpaginated)"
      },
      "at": "X.3",
      "sourceURL": "https://bookofconcord.org/epitome/church-rites/#ep-x-0003",
      "sourceLocator": "X.3; sentence/fragment at web anchor ep-x-0003 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Para zanjar también esta controversia creemos, enseñamos y confesamos unánimemente que las ceremonias o ritos eclesiásticos que ni están mandados ni prohibidos en la Palabra de Dios, sino que han sido instituidos solo por razón de decoro y buen orden, no son en sí mismos culto divino, ni siquiera parte de él. Mat. 15:9: En vano me honran, enseñando como doctrinas mandamientos de hombres.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCEpRN_3

```json
{
  "id": "LFCEpRN_3",
  "work": "fc-epitome",
  "locator": "RN 3",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "And because directly after the times of the apostles, and even while they were still living, false teachers and heretics arose, and symbols, i. e., brief, succinct [categorical] confessions, were composed against them in the early Church, which were regarded as the unanimous, universal Christian faith and confession of the orthodox and true Church, namely, the Apostles' Creed, the Nicene Creed, and the Athanasian Creed, we pledge ourselves to them, and hereby reject all heresies and dogmas which, contrary to them, have been introduced into the Church of God.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "RN 3; sentence/fragment at web anchor ep-rule-and-norm-0003 (unpaginated)"
      },
      "at": "RN 3",
      "sourceURL": "https://bookofconcord.org/epitome/rule-and-norm/#ep-rule-and-norm-0003",
      "sourceLocator": "RN 3; sentence/fragment at web anchor ep-rule-and-norm-0003 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Y porque inmediatamente después de los tiempos de los apóstoles, e incluso cuando ellos aún vivían, surgieron falsos maestros y herejes, y se compusieron contra ellos en la Iglesia primitiva símbolos, es decir, confesiones breves y concisas [categóricas], que fueron tenidas por la fe y confesión cristiana unánime y universal de la Iglesia ortodoxa y verdadera, a saber, el Credo de los Apóstoles, el Credo de Nicea y el Credo de Atanasio, nos obligamos a ellos y por la presente rechazamos todas las herejías y dogmas que, contrarios a ellos, se han introducido en la Iglesia de Dios.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCSDVII_79_82

```json
{
  "id": "LFCSDVII_79_82",
  "work": "fc-sd",
  "locator": "VII.79–82",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Now, in the administration of the Holy Supper the words of institution are to be publicly spoken or sung before the congregation distinctly and clearly, and should in no way be omitted [and this for very many and the most important reasons.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "VII.79–82; sentence/fragment at web anchor sd-vii-0079 (unpaginated)"
      },
      "at": "VII.79–82",
      "sourceURL": "https://bookofconcord.org/solid-declaration/the-holy-supper/#sd-vii-0079",
      "sourceLocator": "VII.79–82; sentence/fragment at web anchor sd-vii-0079 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Ahora bien, en la administración de la Santa Cena las palabras de la institución han de pronunciarse o cantarse públicamente ante la congregación, de manera distinta y clara, y no deben omitirse en modo alguno [y esto por muchísimas y gravísimas razones.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCSDVII_83_84__87

```json
{
  "id": "LFCSDVII_83_84__87",
  "work": "fc-sd",
  "locator": "VII.83–84, 87",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "However, this blessing, or the recitation of the words of institution of Christ alone does not make a sacrament if the entire action of the Supper, as it was instituted by Christ, is not observed (as when the consecrated bread is not distributed, received, and partaken of, but is enclosed, sacrificed, or carried about), but the command of Christ, This do (which embraces the entire action or administration in this Sacrament, that in an assembly of Christians bread and wine are taken, consecrated, distributed, received, eaten, drunk, and the Lord’s death is shown forth at the same time) must be observed unseparated and inviolate […]",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "VII.83–84, 87; sentence/fragment at web anchor sd-vii-0083 (unpaginated)"
      },
      "at": "VII.83–84, 87",
      "sourceURL": "https://bookofconcord.org/solid-declaration/the-holy-supper/#sd-vii-0083",
      "sourceLocator": "VII.83–84, 87; sentence/fragment at web anchor sd-vii-0083 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Sin embargo, esta bendición, o la recitación de las palabras de la institución de Cristo solas, no hace un sacramento si no se observa toda la acción de la Cena, tal como fue instituida por Cristo (como cuando el pan consagrado no se distribuye, ni se recibe, ni se participa de él, sino que se encierra, se sacrifica o se lleva en procesión), sino que el mandato de Cristo, Haced esto (que abarca toda la acción o administración en este Sacramento: que en una asamblea de cristianos se toman pan y vino, se consagran, se distribuyen, se reciben, se comen, se beben, y al mismo tiempo se anuncia la muerte del Señor), debe observarse sin separación e inviolado […]",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "MUST FIX: «This» completed; ends with […] because the sentence goes on",
        "textBeforeCorrection": "However, this blessing, or the recitation of the words of institution of Christ alone does not make a sacrament if the entire action of the Supper, as it was instituted by Christ, is not observed (as when the consecrated bread is not distributed, received, and partaken of, but is enclosed, sacrificed, or carried about), but the command of Christ, This",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    },
    {
      "en": {
        "text": "And apart from this use, when in the papistic mass the bread is not distributed, but offered up or enclosed, borne about, and exhibited for adoration, it is to be regarded as no sacrament; just as the water of baptism, when used to consecrate bells or to cure leprosy, or otherwise exhibited for worship, is no sacrament or baptism.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "VII.83–84, 87; sentence/fragment at web anchor sd-vii-0087 (unpaginated)"
      },
      "at": "VII.83–84, 87",
      "sourceURL": "https://bookofconcord.org/solid-declaration/the-holy-supper/#sd-vii-0087",
      "sourceLocator": "VII.83–84, 87; sentence/fragment at web anchor sd-vii-0087 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Y fuera de este uso, cuando en la misa papista el pan no se distribuye, sino que se ofrece o se encierra, se lleva en procesión y se expone para adoración, ha de considerarse que no es sacramento; como el agua del bautismo, cuando se usa para consagrar campanas o para curar la lepra, o se exhibe de otro modo para culto, no es sacramento ni bautismo.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LFCSDVII_69_71

```json
{
  "id": "LFCSDVII_69_71",
  "work": "fc-sd",
  "locator": "VII.69–71",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "For Christians who are of weak faith, diffident, troubled, and heartily terrified because of the greatness and number of their sins, and think that in this their great impurity they are not worthy of this precious treasure and the benefits of Christ, and who feel and lament their weakness of faith, and from their hearts desire that they may serve God with stronger, more joyful faith and pure obedience, they are the truly worthy guests for whom this highly venerable Sacrament [and sacred feast] has been especially instituted and appointed;",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "VII.69–71; sentence/fragment at web anchor sd-vii-0069 (unpaginated)"
      },
      "at": "VII.69–71",
      "sourceURL": "https://bookofconcord.org/solid-declaration/the-holy-supper/#sd-vii-0069",
      "sourceLocator": "VII.69–71; sentence/fragment at web anchor sd-vii-0069 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Pues los cristianos de fe débil, inseguros, angustiados y de corazón aterrados por la grandeza y el número de sus pecados, que piensan que en esta su gran impureza no son dignos de este precioso tesoro y de los beneficios de Cristo, y que sienten y lamentan su debilidad de fe, y desean de corazón servir a Dios con una fe más fuerte y gozosa y con pura obediencia, son los huéspedes verdaderamente dignos para quienes este venerabilísimo Sacramento [y sagrado banquete] ha sido especialmente instituido y dispuesto;",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LSAII_4_1

```json
{
  "id": "LSAII_4_1",
  "work": "smalcald",
  "locator": "II.4.1",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "That the Pope is not, according to divine law or according to the Word of God the head of all Christendom (for this [name] belongs to One only, whose name is Jesus Christ), but is only the bishop and pastor of the Church at Rome, and of those who voluntarily or through a human creature (that is, a political magistrate) have attached themselves to him, to be Christians, not under him as a lord, but with him as brethren [colleagues] and comrades, as the ancient councils and the age of St. Cyprian show.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "II.4.1; sentence/fragment at web anchor sa-ii-iv-0001 (unpaginated)"
      },
      "at": "II.4.1",
      "sourceURL": "https://bookofconcord.org/smalcald-articles/ii/of-the-papacy/#sa-ii-iv-0001",
      "sourceLocator": "II.4.1; sentence/fragment at web anchor sa-ii-iv-0001 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Que el Papa no es, según el derecho divino ni según la Palabra de Dios, la cabeza de toda la cristiandad (pues este [nombre] pertenece a Uno solo, cuyo nombre es Jesucristo), sino solamente el obispo y pastor de la Iglesia de Roma, y de aquellos que voluntariamente, o por una criatura humana (es decir, un magistrado político), se han unido a él, para ser cristianos, no bajo él como bajo un señor, sino con él como hermanos [colegas] y compañeros, como muestran los antiguos concilios y la época de san Cipriano.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LSAII_4_7_9

```json
{
  "id": "LSAII_4_7_9",
  "work": "smalcald",
  "locator": "II.4.7–9",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "And supposing that the Pope would yield this point, so as not to be supreme by divine right or from God’s command, but that we must have [there must be elected] a [certain] head, to whom all the rest adhere [as their support] in order that the [concord and] unity of Christians may be preserved against sects and heretics, and that such a head were chosen by men, and that it were placed within the choice and power of men to change or remove this head, just as the Council of Constance adopted nearly this course with reference to the Popes, deposing three and electing a fourth; supposing, I say, that the Pope and See at Rome would yield and accept this (which, nevertheless, is impossible; […]), nevertheless, even in this way Christianity would not be helped, but many more sects would arise than before.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "II.4.7–9; sentence/fragment at web anchor sa-ii-iv-0007 (unpaginated)"
      },
      "at": "II.4.7–9",
      "sourceURL": "https://bookofconcord.org/smalcald-articles/ii/of-the-papacy/#sa-ii-iv-0007",
      "sourceLocator": "II.4.7–9; sentence/fragment at web anchor sa-ii-iv-0007 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Y suponiendo que el Papa cediera en este punto, de modo que no fuera supremo por derecho divino ni por mandato de Dios, sino que hubiera que tener [que elegir] una [cierta] cabeza, a la cual se adhirieran todos los demás [como su apoyo] para que se conserve la [concordia y] unidad de los cristianos frente a sectas y herejes, y que tal cabeza fuera elegida por los hombres, y que estuviera dentro de la elección y el poder de los hombres cambiar o remover esta cabeza, tal como el Concilio de Constanza siguió casi este camino con respecto a los Papas, deponiendo a tres y eligiendo a un cuarto; suponiendo, digo, que el Papa y la Sede de Roma cedieran y aceptaran esto (lo cual, sin embargo, es imposible; […]), sin embargo, aun así no se ayudaría a la cristiandad, sino que surgirían muchas más sectas que antes.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "MUST FIX: the quote was only the supposition; the Articles' answer added, the parenthesis shortened with […]",
        "textBeforeCorrection": "And supposing that the Pope would yield this point, so as not to be supreme by divine right or from God’s command, but that we must have [there must be elected] a [certain] head, to whom all the rest adhere [as their support] in order that the [concord and] unity of Christians may be preserved against sects and heretics, and that such a head were chosen by men, and that it were placed within the choice and power of men to change or remove this head, just as the Council of Constance adopted nearly this course with reference to the Popes, deposing three and electing a fourth; supposing, I say, that the Pope and See at Rome would yield and",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LTr7

```json
{
  "id": "LTr7",
  "work": "treatise",
  "locator": "7",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "In the first place, therefore, let us show from the [holy] Gospel that the Roman bishop is not by divine right above [cannot arrogate to himself any supremacy whatever over] other bishops and pastors.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "7; sentence/fragment at web anchor tr-i-0007 (unpaginated)"
      },
      "at": "7",
      "sourceURL": "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/#tr-i-0007",
      "sourceLocator": "7; sentence/fragment at web anchor tr-i-0007 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "En primer lugar, pues, mostremos por el [santo] Evangelio que el obispo romano no está por derecho divino por encima de [no puede arrogarse supremacía alguna sobre] los demás obispos y pastores.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### LTr56

```json
{
  "id": "LTr56",
  "work": "treatise",
  "locator": "56",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "But since the decisions of Synods are the decisions of the Church, and not of the Popes, it is especially incumbent on kings to check the license of the Popes [not allow such wantonness], and to act so that the power of judging and decreeing from the Word of God is not wrested from the Church. And as the rest of the Christians must censure all other errors of the Pope, so they must also rebuke the Pope when he evades and impedes the true investigation and true decision of the Church.",
        "lang": "en",
        "edition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "page": "56; sentence/fragment at web anchor tr-i-0056 (unpaginated)"
      },
      "at": "56",
      "sourceURL": "https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/#tr-i-0056",
      "sourceLocator": "56; sentence/fragment at web anchor tr-i-0056 (unpaginated)",
      "sourceEdition": "F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: BookOfConcord.org Triglot transcription; numbered anchor inspected and quoted string matched 2026-11-01]",
      "es": {
        "text": "Pero puesto que las decisiones de los Sínodos son las decisiones de la Iglesia, y no de los Papas, corresponde especialmente a los reyes refrenar la licencia de los Papas [no consentir tal desenfreno] y procurar que no se arrebate a la Iglesia el poder de juzgar y decretar según la Palabra de Dios. Y así como el resto de los cristianos debe censurar todos los demás errores del Papa, así debe también reprender al Papa cuando este elude y estorba la verdadera investigación y la verdadera decisión de la Iglesia.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: The Symbolical Books of the Evangelical Lutheran Church, German-Latin-English, St. Louis: Concordia Publishing House, 1921; English web transcription, BookOfConcord.org.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). English text read in the BookOfConcord.org web transcription of the Triglot, not the print page; the German and Latin originals were not read.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "selection": "Selected sentence(s) within or overlapping the cited range; Spanish is an AI translation from the English, labelled (session A2, 2026-11-01); no original-language witness was read."
}
```

### RWCF31_3_4

```json
{
  "id": "RWCF31_3_4",
  "work": "wcf",
  "locator": "31.3–4",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "It belongeth to synods and councils ministerially to determine controversies of faith, and cases of conscience; to set down rules and directions for the better ordering of the publick worship of God, and government of his church; to receive complaints in cases of maladministration, and authoritatively to determine the same: which decrees and determinations, if consonant to the word of God, are to be received with reverence and submission, not only for their agreement with the word, but also for the power whereby they are made, as being an ordinance of God, appointed thereunto in his word.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 97; 31.3–4; archive leaf n100"
      },
      "at": "31.3–4",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n100/mode/1up",
      "sourceLocator": "p. 97; 31.3–4; archive leaf n100",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Pertenece á los sínodos y á los concílios el decidir ministerialmente cuestiones con respecto de la fé, el resolver casos de conciencia, el asentar reglas é instrucciones para el mejor gobierno en el culto público, y la disciplina de la iglesia de Dios, el oir y el determinar autoritativamente quejas respecto de los casos de mala administracion y sus decretos y decisiones cuando concuerden con la palabra de Dios, deben recibirse con reverencia y sumision, no solo por ser conformes á esta palabra, sino tambien porque la autoridad de dichos sínodos y concílios viene de Dios, pues así lo ordena en su palabra.",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 154; XXXI.II (the 1894 English numbers it III); archive leaf n155",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence; this id and the other (RWCF31_3 / RWCF31_3_4) carry the same text: ids kept, the repo's id list is not edited here",
        "textBeforeCorrection": "It belongeth to synods and councils ministerially to determine controversies of faith, and cases of conscience; to set down rules and directions for the better ordering of the publick worship of God, and government of his church",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWCF1_3

```json
{
  "id": "RWCF1_3",
  "work": "wcf",
  "locator": "1.3",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "The Books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the scripture; and therefore are of no authority in the Church of God, nor to be any otherwise approved, or made use of, than other human writings.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 18; 1.3; archive leaf n21"
      },
      "at": "1.3",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n21/mode/1up",
      "sourceLocator": "p. 18; 1.3; archive leaf n21",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Los libros que comunmente se titulan Apócrifos, por no ser de inspiracion divina, no son parte del Canon de las Sagradas Escrituras; y por lo mismo, no son de autoridad para la Iglesia de Dios; ni deben ser aprobados ni usados, sino de la misma manera de la que son otros escritos humanos.",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 7; I.III; archive leaf n8",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence",
        "textBeforeCorrection": "The Books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the scripture",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      },
      "correctionV2": [
        {
          "date": "2026-11-01 (session A2, after verifier V4)",
          "source": "docs/research/sources/verification-corrections-session-A2.md",
          "what": "capital C: the 1894 page image (p. 18) prints «Church of God»",
          "textBefore": "The Books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the scripture; and therefore are of no authority in the church of God, nor to be any otherwise approved, or made use of, than other human writings."
        }
      ]
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWCF31_3

```json
{
  "id": "RWCF31_3",
  "work": "wcf",
  "locator": "31.3",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "It belongeth to synods and councils ministerially to determine controversies of faith, and cases of conscience; to set down rules and directions for the better ordering of the publick worship of God, and government of his church; to receive complaints in cases of maladministration, and authoritatively to determine the same: which decrees and determinations, if consonant to the word of God, are to be received with reverence and submission, not only for their agreement with the word, but also for the power whereby they are made, as being an ordinance of God, appointed thereunto in his word.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 97; 31.3; archive leaf n100"
      },
      "at": "31.3",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n100/mode/1up",
      "sourceLocator": "p. 97; 31.3; archive leaf n100",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Pertenece á los sínodos y á los concílios el decidir ministerialmente cuestiones con respecto de la fé, el resolver casos de conciencia, el asentar reglas é instrucciones para el mejor gobierno en el culto público, y la disciplina de la iglesia de Dios, el oir y el determinar autoritativamente quejas respecto de los casos de mala administracion y sus decretos y decisiones cuando concuerden con la palabra de Dios, deben recibirse con reverencia y sumision, no solo por ser conformes á esta palabra, sino tambien porque la autoridad de dichos sínodos y concílios viene de Dios, pues así lo ordena en su palabra.",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 154; XXXI.II (the 1894 English numbers it III); archive leaf n155",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence; this id and the other (RWCF31_3 / RWCF31_3_4) carry the same text: ids kept, the repo's id list is not edited here",
        "textBeforeCorrection": "It belongeth to synods and councils ministerially to determine controversies of faith, and cases of conscience; to set down rules and directions for the better ordering of the publick worship of God, and government of his church",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWCF31_4

```json
{
  "id": "RWCF31_4",
  "work": "wcf",
  "locator": "31.4",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "All synods or councils since the apostles’ times, whether general or particular, may err, and many have erred; therefore they are not to be made the rule of faith or practice, but to be used as an help in both.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 97; 31.4; archive leaf n100"
      },
      "at": "31.4",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n100/mode/1up",
      "sourceLocator": "p. 97; 31.4; archive leaf n100",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Todos los sínodos ó concílios despues de los tiempos de los apostoles, sean generales o particulares, están expuestos á errar, y muchos de ellos han errado; por esto sus decisiones no deben tenerse como reglas de fé o de práctica, sino como una ayuda en todo lo que pertenece á estos.",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 155; XXXI.III (the 1894 English numbers it IV); archive leaf n156",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      }
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWCF31_5

```json
{
  "id": "RWCF31_5",
  "work": "wcf",
  "locator": "31.5",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Synods and councils are to handle or conclude nothing but that which is ecclesiastical; and are not to intermeddle with civil affairs, which concern the commonwealth, unless by way of humble petition, in cases extraordinary; or by way of advice for satisfaction of conscience, if they be thereunto required by the civil magistrate.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 97; 31.5; archive leaf n100"
      },
      "at": "31.5",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n100/mode/1up",
      "sourceLocator": "p. 97; 31.5; archive leaf n100",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Los sínodos y los concílios no deben ocuparse sino en lo que sea puramente eclesiástico; y no deben entrometerse en las cosas políticas que conciernen al gobierno civil, sino solamente por via de peticiones respetuosas en casos extraordinários; ó por via de consejos para satisfacer la conciencia; si á eso son excitados por el magistrado civil.",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 155; XXXI.IV (the 1894 English numbers it V); archive leaf n156",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence",
        "textBeforeCorrection": "Synods and councils are to handle or conclude nothing but that which is ecclesiastical",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWCF29_1

```json
{
  "id": "RWCF29_1",
  "work": "wcf",
  "locator": "29.1",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "to be observed in his church unto the end of the world, for the perpetual remembrance of the sacrifice of himself in his death, the sealing all benefits thereof unto true believers, their spiritual nourishment and growth in him, their further engagement in and to all duties which they owe unto him, and to be a bond and pledge of their communion with him, and with each other, as members of his mystical body.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 93; 29.1; archive leaf n96"
      },
      "at": "29.1",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n96/mode/1up",
      "sourceLocator": "p. 93; 29.1; archive leaf n96",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "para que fuese observado en su iglesia, hasta el fin del mundo; para ser un recuerdo perpetuo del sacrifício de sí mismo por su muerte, para sellar á los verdaderos creyentes los benefícios de ella, para su alimentacion espiritual y crecimiento en El, y para hacerles mas devotos en el cumplimiento de todos sus deberes para con El; y para que fuese un lazo y una prenda de su comunion con Él y de la de los unos con los otros, como miembros de su cuerpo místico.",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 145; XXIX.I; archive leaf n146",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence",
        "textBeforeCorrection": "to be observed in his church unto the end of the world, for the perpetual remembrance of the sacrifice of himself in his death",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWCF29_5

```json
{
  "id": "RWCF29_5",
  "work": "wcf",
  "locator": "29.5",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "albeit, in substance and nature, they still remain truly and only bread and wine, as they were before.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 94; 29.5; archive leaf n97"
      },
      "at": "29.5",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n97/mode/1up",
      "sourceLocator": "p. 94; 29.5; archive leaf n97",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "pero con todo, permanecen todavia en sustancia y naturaleza, verdadera y solamente, pan y vino, tales como fueron antes",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 148; XXIX.V; archive leaf n149",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      }
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWCF29_8

```json
{
  "id": "RWCF29_8",
  "work": "wcf",
  "locator": "29.8",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Although ignorant and wicked men receive the outward elements in this sacrament, yet they receive not the thing signified thereby; but by their unworthy coming thereunto are guilty of the body and blood of the Lord, to their own damnation.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 95; 29.8; archive leaf n98"
      },
      "at": "29.8",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n98/mode/1up",
      "sourceLocator": "p. 95; 29.8; archive leaf n98",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Aunque los ignorantes y malvados reciban los elementos materiales en este sacramento, sin embargo, no reciben la cosa significada por ellos; sino acercándose indignamente á ellos se hacen culpables del cuerpo y sangre del Señor, para condenacion.",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 150; XXIX.VIII; archive leaf n151",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence",
        "textBeforeCorrection": "Although ignorant and wicked men receive the outward elements in this sacrament, yet they receive not the thing signified thereby",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWCF29_3

```json
{
  "id": "RWCF29_3",
  "work": "wcf",
  "locator": "29.3",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "The Lord Jesus hath, in this ordinance, appointed his ministers to declare his word of institution to the people, to pray, and bless the elements of bread and wine, and thereby to set them apart from a common to a holy use; […]",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 93; 29.3; archive leaf n96"
      },
      "at": "29.3",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n96/mode/1up",
      "sourceLocator": "p. 93; 29.3; archive leaf n96",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "El Señor Jesus ha determinado con respecto á esta ordenanza, que sus ministros declarasen las palabras de institucion al pueblo, que orasen y bendijesen los elementos del pan y del vino, y que los apartasen así de los usos ordinários á los servicios sagrados […]",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 147; XXIX.III; archive leaf n148",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: […] added",
        "textBeforeCorrection": "The Lord Jesus hath, in this ordinance, appointed his ministers to declare his word of institution to the people, to pray, and bless the elements of bread and wine, and thereby to set them apart from a common to a holy use",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWCF29_4

```json
{
  "id": "RWCF29_4",
  "work": "wcf",
  "locator": "29.4",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Private masses, or receiving this sacrament by a priest, or any other, alone; as likewise the denial of the cup to the people; worshipping the elements, the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 94; 29.4; archive leaf n97"
      },
      "at": "29.4",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n97/mode/1up",
      "sourceLocator": "p. 94; 29.4; archive leaf n97",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Las misas privadas, ó la recepcion de este sacramento por un sacerdote, ó por cualquiera otra persona cuando esté sola; como tambien la negacion del cáliz al pueblo; la adoracion de los elementos, el elevarlos, ó llevarlos en procesion ó de otra manera cualquiera para recibir adoracion, y la conservacion de ellos para supuestos usos religiosos, son todas costumbres y prácticas contrarias á la naturaleza de este sacramento, y á la institucion de Cristo.",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 148; XXIX.IV; archive leaf n149",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read.",
        "tag": "[unverified: page-level OCR of the 1880 Spanish scan; the words were read in the OCR and normalised as stated, no page image collated; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31 (II, III, IV there = 3, 4, 5 here)]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "MUST FIX: the verdict clause was missing; the full sentence from its start",
        "textBeforeCorrection": "the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      },
      "correctionV1": [
        {
          "date": "2026-11-01 (session A, after verifier V1)",
          "source": "docs/research/sources/verification-english-quotes-session-A.md §5.2",
          "what": "punctuation as printed on the 1894 page (no comma after «likewise»; a semicolon after «people»); page field «p. 94»",
          "textBefore": "Private masses, or receiving this sacrament by a priest, or any other, alone; as likewise, the denial of the cup to the people, worshipping the elements, the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ."
        }
      ]
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### RWLC160

```json
{
  "id": "RWLC160",
  "work": "wlc",
  "locator": "160",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "It is required of those that hear the word preached, that they attend upon it with diligence, preparation and prayer; […]",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 199; 160; archive leaf n202"
      },
      "at": "160",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n202/mode/1up",
      "sourceLocator": "p. 199; 160; archive leaf n202",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Se requiere de los que oyen predicar la palabra, que le presten atención con diligencia, preparación y oración; […]",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894. (the 1880 Spanish volume does not contain the Larger Catechism)",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3).",
        "tag": "[unverified: AI Spanish, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: next clause added, then […]",
        "textBeforeCorrection": "It is required of those that hear the word preached, that they attend upon it",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A 2026-11-01, labelled to decision 3 on 2026-11-01 evening); the 1880 Spanish volume has no Larger Catechism."
}
```

### RWLC171

```json
{
  "id": "RWLC171",
  "work": "wlc",
  "locator": "171",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "They that receive the sacrament of the Lord’s supper are, before they come, to prepare themselves thereunto, by examining themselves […]",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 204; 171; archive leaf n207"
      },
      "at": "171",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n207/mode/1up",
      "sourceLocator": "p. 204; 171; archive leaf n207",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Quienes reciben el sacramento de la cena del Señor deben, antes de acercarse, prepararse para ello examinándose a sí mismos […]",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894. (the 1880 Spanish volume does not contain the Larger Catechism)",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3).",
        "tag": "[unverified: AI Spanish, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: […] added; this id and RWLC171 / RWLC171_172 carry the same text: ids kept",
        "textBeforeCorrection": "They that receive the sacrament of the Lord’s supper are, before they come, to prepare themselves thereunto, by examining themselves",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A 2026-11-01, labelled to decision 3 on 2026-11-01 evening); the 1880 Spanish volume has no Larger Catechism."
}
```

### RWLC171_172

```json
{
  "id": "RWLC171_172",
  "work": "wlc",
  "locator": "171–172",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "They that receive the sacrament of the Lord’s supper are, before they come, to prepare themselves thereunto, by examining themselves […]",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 204; 171–172; archive leaf n207"
      },
      "at": "171–172",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n207/mode/1up",
      "sourceLocator": "p. 204; 171–172; archive leaf n207",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Quienes reciben el sacramento de la cena del Señor deben, antes de acercarse, prepararse para ello examinándose a sí mismos […]",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894. (the 1880 Spanish volume does not contain the Larger Catechism)",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3).",
        "tag": "[unverified: AI Spanish, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: […] added; this id and RWLC171 / RWLC171_172 carry the same text: ids kept",
        "textBeforeCorrection": "They that receive the sacrament of the Lord’s supper are, before they come, to prepare themselves thereunto, by examining themselves",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A 2026-11-01, labelled to decision 3 on 2026-11-01 evening); the 1880 Spanish volume has no Larger Catechism."
}
```

### RWLC169

```json
{
  "id": "RWLC169",
  "work": "wlc",
  "locator": "169",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Christ hath appointed the ministers of his word, in the administration of this sacrament of the Lord’s supper, to set apart the bread and wine from common use, by the word of institution, thanksgiving, and prayer; […]",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 203; 169; archive leaf n206"
      },
      "at": "169",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n206/mode/1up",
      "sourceLocator": "p. 203; 169; archive leaf n206",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Cristo ha designado a los ministros de su palabra, en la administración de este sacramento de la cena del Señor, para apartar el pan y el vino del uso común, por la palabra de institución, la acción de gracias y la oración; […]",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894. (the 1880 Spanish volume does not contain the Larger Catechism)",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3).",
        "tag": "[unverified: AI Spanish, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: […] added",
        "textBeforeCorrection": "Christ hath appointed the ministers of his word, in the administration of this sacrament of the Lord’s supper, to set apart the bread and wine from common use, by the word of institution, thanksgiving, and prayer",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A 2026-11-01, labelled to decision 3 on 2026-11-01 evening); the 1880 Spanish volume has no Larger Catechism."
}
```

### RWLC174

```json
{
  "id": "RWLC174",
  "work": "wlc",
  "locator": "174",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "It is required of them that receive the sacrament of the Lord’s supper, that, during the time of the administration of it, with all holy reverence and attention they wait upon God in that ordinance […]",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 207; 174; archive leaf n210"
      },
      "at": "174",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n210/mode/1up",
      "sourceLocator": "p. 207; 174; archive leaf n210",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Se requiere de quienes reciben el sacramento de la cena del Señor que, durante el tiempo de su administración, con toda santa reverencia y atención esperen en Dios en esa ordenanza […]",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894. (the 1880 Spanish volume does not contain the Larger Catechism)",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3).",
        "tag": "[unverified: AI Spanish, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: […] added",
        "textBeforeCorrection": "It is required of them that receive the sacrament of the Lord’s supper, that, during the time of the administration of it, with all holy reverence and attention they wait upon God in that ordinance",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A 2026-11-01, labelled to decision 3 on 2026-11-01 evening); the 1880 Spanish volume has no Larger Catechism."
}
```

### RWLC175

```json
{
  "id": "RWLC175",
  "work": "wlc",
  "locator": "175",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "The duty of Christians, after they have received the sacrament of the Lord’s supper, is seriously to consider how they have behaved themselves therein, and with what success […]",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 208; 175; archive leaf n211"
      },
      "at": "175",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n211/mode/1up",
      "sourceLocator": "p. 208; 175; archive leaf n211",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "El deber de los cristianos, después de haber recibido el sacramento de la cena del Señor, es considerar seriamente cómo se han comportado en él, y con qué resultado […]",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894. (the 1880 Spanish volume does not contain the Larger Catechism)",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3).",
        "tag": "[unverified: AI Spanish, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: […] added",
        "textBeforeCorrection": "The duty of Christians, after they have received the sacrament of the Lord’s supper, is seriously to consider how they have behaved themselves therein, and with what success",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A 2026-11-01, labelled to decision 3 on 2026-11-01 evening); the 1880 Spanish volume has no Larger Catechism."
}
```

### RWLC173

```json
{
  "id": "RWLC173",
  "work": "wlc",
  "locator": "173",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "Such as are found to be ignorant or scandalous, notwithstanding their profession of the faith, and desire to come to the Lord’s supper, may and ought to be kept from that sacrament, by the power which Christ hath left in his church, until they receive instruction, and manifest their reformation.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "pp. 206–207; 173; archive leaves n209–n210"
      },
      "at": "173",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n209/mode/1up",
      "sourceLocator": "pp. 206–207; 173; archive leaves n209–n210",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Quienes resulten ignorantes o escandalosos, no obstante su profesión de fe, y deseen acercarse a la cena del Señor, pueden y deben ser apartados de ese sacramento, por el poder que Cristo ha dejado en su iglesia, hasta que reciban instrucción y manifiesten su enmienda.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894. (the 1880 Spanish volume does not contain the Larger Catechism)",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3).",
        "tag": "[unverified: AI Spanish, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "MUST FIX: subject without predicate; predicate is on the next leaf",
        "textBeforeCorrection": "Such as are found to be ignorant or scandalous, notwithstanding their profession of the faith",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A 2026-11-01, labelled to decision 3 on 2026-11-01 evening); the 1880 Spanish volume has no Larger Catechism."
}
```

### RWLC177

```json
{
  "id": "RWLC177",
  "work": "wlc",
  "locator": "177",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "The sacraments of baptism and the Lord’s supper differ, in that baptism is to be administered but once, with water, to be a sign and seal of our regeneration and ingrafting into Christ, and that even to infants […]",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 210; 177; archive leaf n213"
      },
      "at": "177",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n213/mode/1up",
      "sourceLocator": "p. 210; 177; archive leaf n213",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "Los sacramentos del bautismo y de la cena del Señor difieren en que el bautismo ha de administrarse una sola vez, con agua, como señal y sello de nuestra regeneración e injerto en Cristo, y esto aun a los niños […]",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894. (the 1880 Spanish volume does not contain the Larger Catechism)",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3).",
        "tag": "[unverified: AI Spanish, unreviewed by Pedro]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the clause end, then […]",
        "textBeforeCorrection": "The sacraments of baptism and the Lord’s supper differ, in that baptism is to be administered but once, with water, to be a sign and seal of our regeneration and ingrafting into Christ",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A 2026-11-01, labelled to decision 3 on 2026-11-01 evening); the 1880 Spanish volume has no Larger Catechism."
}
```

### RWSC97

```json
{
  "id": "RWSC97",
  "work": "wsc",
  "locator": "97",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "that they examine themselves of their knowledge to discern the Lord’s body, of their faith to feed upon him, of their repentance, love, and new obedience; lest, coming unworthily, they eat and drink judgment to themselves.",
        "lang": "en",
        "edition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
        "page": "p. 246; 97; archive leaf n249"
      },
      "at": "97",
      "sourceURL": "https://archive.org/details/confessionoffaith00chur/page/n249/mode/1up",
      "sourceLocator": "p. 246; 97; archive leaf n249",
      "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large, Edinburgh: Johnstone, Hunter & Co., 1894.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org 1894 scan-backed OCR; numbered passage located, whitespace, line-end hyphens and proof-text markers normalized; title-page image checked 2026-11-01]",
      "es": {
        "text": "es necesario que hagan un exámen, del conocimiento que tienen para distinguir al cuerpo del Señor: de su fé para alimentarse en él; de su arrepentimiento, amor y nueva obediencia, para que no sea, que recibiendo indignamente el sacramento, coman y beban su propia condenacon [sic].",
        "lang": "es",
        "edition": "Doctrinas y reglamentos de la Iglesia Presbiteriana, formulados por la Asamblea de Westminster, traducido del inglés, Monterrey, Tipografía del Comercio, 1880 (dominio público); scan archive.org doctrinasyreglam00west.",
        "page": "p. 205; Catecismo menor, P. 97; archive leaf n206",
        "translation": "published Spanish edition (1880), not AI",
        "normalisation": "OCR glyphs normalised by session A (e.g. «dei»→«del», «Senor»/«Seiíor»→«Señor», «liaber»→«haber», stray symbols removed); the page image was not read. RWSC97 only (verifier V1 read the page image): the page prints «obediencia» (no accent), a comma after «sea» and the misprint «condenacon», kept here as [sic].",
        "tag": "[verified: page image of the 1880 Monterrey volume (archive.org doctrinasyreglam00west, leaf n206, p. 205) read by verifier V4 on 2026-11-01: the Spanish is the page's, with the misprint «condenacon» kept and marked [sic]; chapter section numbers of the 1880 volume differ from the 1894 English for WCF 31]"
      },
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence",
        "textBeforeCorrection": "that they examine themselves of their knowledge to discern the Lord’s body",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      },
      "correctionV1": [
        {
          "date": "2026-11-01 (session A, after verifier V1)",
          "source": "docs/research/sources/verification-english-quotes-session-A.md §5.3",
          "what": "Spanish text brought to the page image's reading",
          "textBefore": "es necesario que hagan un exámen, del conocimiento que tienen para distinguir al cuerpo del Señor: de su fé para alimentarse en él; de su arrepentimiento, amor y nueva obediência, para que no sea que recibiendo indignamente el sacramento, coman y beban su propia condenacion."
        }
      ]
    }
  ],
  "spanishStatus": "Level 1: published Spanish edition (Monterrey 1880), read in page-level OCR, tagged unverified (session A, 2026-11-01); page image not read."
}
```

### CEC892

```json
{
  "id": "CEC892",
  "work": "cec",
  "locator": "892",
  "status": "done",
  "excerpts": [
    {
      "es": {
        "text": "A esta enseñanza ordinaria, los fieles deben \"adherirse con espíritu de obediencia religiosa\" (LG 25) que, aunque distinto del asentimiento de la fe, es una prolongación de él.",
        "lang": "es",
        "edition": "Catecismo de la Iglesia Católica (1992; Latin editio typica 1997), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01; no printed Spanish imprint collated.",
        "page": "892 (official HTML, unpaginated)",
        "translation": "official"
      },
      "at": "892",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html",
      "sourceLocator": "892 (official HTML, unpaginated)",
      "sourceEdition": "Catecismo de la Iglesia Católica (1992; Latin editio typica 1997), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01; no printed Spanish imprint collated.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: vatican.va official Spanish HTML, exact whitespace-normalized string matched 2026-11-01]",
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "MUST FIX: the relative clause was omitted",
        "textBeforeCorrection": "A esta enseñanza ordinaria, los fieles deben \"adherirse con espíritu de obediencia religiosa\"",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ]
}
```

### CEC80

```json
{
  "id": "CEC80",
  "work": "cec",
  "locator": "80",
  "status": "done",
  "excerpts": [
    {
      "es": {
        "text": "están íntimamente unidas y compenetradas.",
        "lang": "es",
        "edition": "Catecismo de la Iglesia Católica (1992; Latin editio typica 1997), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01; no printed Spanish imprint collated.",
        "page": "80 (official HTML, unpaginated)",
        "translation": "official"
      },
      "at": "80",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p1s1c2a2_sp.html",
      "sourceLocator": "80 (official HTML, unpaginated)",
      "sourceEdition": "Catecismo de la Iglesia Católica (1992; Latin editio typica 1997), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01; no printed Spanish imprint collated.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: vatican.va official Spanish HTML, exact whitespace-normalized string matched 2026-11-01]"
    }
  ]
}
```

### CEC104

```json
{
  "id": "CEC104",
  "work": "cec",
  "locator": "104",
  "status": "done",
  "excerpts": [
    {
      "es": {
        "text": "En la sagrada Escritura, la Iglesia encuentra sin cesar su alimento y su fuerza (cf. DV 24), porque, en ella, no recibe solamente una palabra humana, sino lo que es realmente: la Palabra de Dios (cf. 1 Ts 2,13).",
        "lang": "es",
        "edition": "Catecismo de la Iglesia Católica (1992; Latin editio typica 1997), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01; no printed Spanish imprint collated.",
        "page": "104 (official HTML, unpaginated)",
        "translation": "official"
      },
      "at": "104",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      "sourceLocator": "104 (official HTML, unpaginated)",
      "sourceEdition": "Catecismo de la Iglesia Católica (1992; Latin editio typica 1997), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01; no printed Spanish imprint collated.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: vatican.va official Spanish HTML, exact whitespace-normalized string matched 2026-11-01]",
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence",
        "textBeforeCorrection": "En la sagrada Escritura, la Iglesia encuentra sin cesar su alimento y su fuerza",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ]
}
```

### CEC114

```json
{
  "id": "CEC114",
  "work": "cec",
  "locator": "114",
  "status": "done",
  "excerpts": [
    {
      "es": {
        "text": "Por «analogía de la fe» entendemos la cohesión de las verdades de la fe entre sí y en el proyecto total de la Revelación.",
        "lang": "es",
        "edition": "Catecismo de la Iglesia Católica (1992; Latin editio typica 1997), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01; no printed Spanish imprint collated.",
        "page": "114 (official HTML, unpaginated)",
        "translation": "official"
      },
      "at": "114",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p1s1c2a3_sp.html",
      "sourceLocator": "114 (official HTML, unpaginated)",
      "sourceEdition": "Catecismo de la Iglesia Católica (1992; Latin editio typica 1997), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01; no printed Spanish imprint collated.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: vatican.va official Spanish HTML, exact whitespace-normalized string matched 2026-11-01]"
    }
  ]
}
```

### CEC1223

```json
{
  "id": "CEC1223",
  "work": "cec",
  "locator": "1223–1224",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1223",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1232

```json
{
  "id": "CEC1232",
  "work": "cec",
  "locator": "1232–1233",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1232",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1234

```json
{
  "id": "CEC1234",
  "work": "cec",
  "locator": "1234–1245",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1234",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1243

```json
{
  "id": "CEC1243",
  "work": "cec",
  "locator": "1243",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1243",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1244

```json
{
  "id": "CEC1244",
  "work": "cec",
  "locator": "1244",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1244",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1247

```json
{
  "id": "CEC1247",
  "work": "cec",
  "locator": "1247–1249",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1247",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1251

```json
{
  "id": "CEC1251",
  "work": "cec",
  "locator": "1251",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1251",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1255

```json
{
  "id": "CEC1255",
  "work": "cec",
  "locator": "1255",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1255",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1283

```json
{
  "id": "CEC1283",
  "work": "cec",
  "locator": "1283",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1283",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1284

```json
{
  "id": "CEC1284",
  "work": "cec",
  "locator": "1284",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1284",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1338

```json
{
  "id": "CEC1338",
  "work": "cec",
  "locator": "1338",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1338",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1340

```json
{
  "id": "CEC1340",
  "work": "cec",
  "locator": "1340",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1340",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1341

```json
{
  "id": "CEC1341",
  "work": "cec",
  "locator": "1341 y 1363",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1341",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1342

```json
{
  "id": "CEC1342",
  "work": "cec",
  "locator": "1342–1343",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1342",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1376

```json
{
  "id": "CEC1376",
  "work": "cec",
  "locator": "1376",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1376",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1382

```json
{
  "id": "CEC1382",
  "work": "cec",
  "locator": "1382",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1382",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1385

```json
{
  "id": "CEC1385",
  "work": "cec",
  "locator": "1385",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1385",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1387

```json
{
  "id": "CEC1387",
  "work": "cec",
  "locator": "1387",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1387",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1415

```json
{
  "id": "CEC1415",
  "work": "cec",
  "locator": "1415",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1415",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CEC1417

```json
{
  "id": "CEC1417",
  "work": "cec",
  "locator": "1417",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cec1417",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### CIC336

```json
{
  "id": "CIC336",
  "work": "cic",
  "locator": "336",
  "status": "done",
  "excerpts": [
    {
      "es": {
        "text": "es también, en unión con su cabeza y nunca sin esa cabeza, sujeto de la potestad suprema y plena sobre toda la Iglesia.",
        "lang": "es",
        "edition": "Código de Derecho Canónico (1983), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
        "page": "336 (official HTML, unpaginated)",
        "translation": "official"
      },
      "at": "336",
      "sourceURL": "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann336-341_sp.html",
      "sourceLocator": "336 (official HTML, unpaginated)",
      "sourceEdition": "Código de Derecho Canónico (1983), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: vatican.va official Spanish HTML, exact whitespace-normalized string matched 2026-11-01]"
    }
  ]
}
```

### CIC337

```json
{
  "id": "CIC337",
  "work": "cic",
  "locator": "337 1",
  "status": "done",
  "excerpts": [
    {
      "es": {
        "text": "La potestad del Colegio de los Obispos sobre toda la Iglesia se ejerce de modo solemne en el Concilio Ecuménico.",
        "lang": "es",
        "edition": "Código de Derecho Canónico (1983), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
        "page": "337 1 (official HTML, unpaginated)",
        "translation": "official"
      },
      "at": "337 1",
      "sourceURL": "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann336-341_sp.html",
      "sourceLocator": "337 1 (official HTML, unpaginated)",
      "sourceEdition": "Código de Derecho Canónico (1983), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: vatican.va official Spanish HTML, exact whitespace-normalized string matched 2026-11-01]"
    }
  ]
}
```

### CIC341

```json
{
  "id": "CIC341",
  "work": "cic",
  "locator": "341 1",
  "status": "done",
  "excerpts": [
    {
      "es": {
        "text": "son confirmados por el Papa y promulgados por mandato suyo.",
        "lang": "es",
        "edition": "Código de Derecho Canónico (1983), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
        "page": "341 1 (official HTML, unpaginated)",
        "translation": "official"
      },
      "at": "341 1",
      "sourceURL": "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann336-341_sp.html",
      "sourceLocator": "341 1 (official HTML, unpaginated)",
      "sourceEdition": "Código de Derecho Canónico (1983), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: vatican.va official Spanish HTML, exact whitespace-normalized string matched 2026-11-01]"
    }
  ]
}
```

### CIC349

```json
{
  "id": "CIC349",
  "work": "cic",
  "locator": "349",
  "status": "done",
  "excerpts": [
    {
      "es": {
        "text": "Los Cardenales de la Santa Iglesia Romana constituyen un Colegio peculiar, al que compete proveer a la elección del Romano Pontífice, según la norma del derecho peculiar […]",
        "lang": "es",
        "edition": "Código de Derecho Canónico (1983), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
        "page": "349 (official HTML, unpaginated)",
        "translation": "official"
      },
      "at": "349",
      "sourceURL": "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann349-359_sp.html",
      "sourceLocator": "349 (official HTML, unpaginated)",
      "sourceEdition": "Código de Derecho Canónico (1983), Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: vatican.va official Spanish HTML, exact whitespace-normalized string matched 2026-11-01]",
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: […] added",
        "textBeforeCorrection": "Los Cardenales de la Santa Iglesia Romana constituyen un Colegio peculiar, al que compete proveer a la elección del Romano Pontífice, según la norma del derecho peculiar",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ]
}
```

### CIC921

```json
{
  "id": "CIC921",
  "work": "cic",
  "locator": "921",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#cic921",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### SC64

```json
{
  "id": "SC64",
  "work": "sc",
  "locator": "64",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#sc64",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### VD87

```json
{
  "id": "VD87",
  "work": "verbum-domini",
  "locator": "87",
  "status": "done",
  "excerpts": [
    {
      "es": {
        "text": "se comienza con la lectura (lectio) del texto, que suscita la cuestión sobre el conocimiento de su contenido auténtico: ¿Qué dice el texto bíblico en sí mismo?",
        "lang": "es",
        "edition": "Benedict XVI, Verbum Domini, 30 September 2010, Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
        "page": "87 (official HTML, unpaginated)",
        "translation": "official"
      },
      "at": "87",
      "sourceURL": "https://www.vatican.va/content/benedict-xvi/es/apost_exhortations/documents/hf_ben-xvi_exh_20100930_verbum-domini.html",
      "sourceLocator": "87 (official HTML, unpaginated)",
      "sourceEdition": "Benedict XVI, Verbum Domini, 30 September 2010, Vatican City: Holy See, official Spanish Vatican HTML, retrieved 2026-11-01.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: vatican.va official Spanish HTML, exact whitespace-normalized string matched 2026-11-01]"
    }
  ]
}
```

### T7sacr12

```json
{
  "id": "T7sacr12",
  "work": "trent",
  "locator": "VII De los sacramentos en general 12",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#t7sacr12",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### T22c7

```json
{
  "id": "T22c7",
  "work": "trent",
  "locator": "XXII 7",
  "status": "skipped",
  "reason": "Already covered by citation-excerpts.md; completed set not repeated.",
  "existingRecord": "docs/research/sources/citation-excerpts.md#t22c7",
  "checkedAt": "2026-11-01",
  "tag": "[verified: existing research record id matched; source not re-fetched in this session]"
}
```

### ODositheusXV

```json
{
  "id": "ODositheusXV",
  "work": "dositheus",
  "locator": "XV",
  "status": "unverified",
  "excerpts": [
    {
      "en": {
        "text": "We believe that there are in the Church Evangelical Mysteries [i.e., Sacraments of the Gospel Dispensation], and that they are seven.",
        "lang": "en",
        "edition": "J. N. W. B. Robertson (trans.), The Acts and Decrees of the Synod of Jerusalem, London: Thomas Baker, 1899.",
        "page": "p. 135; Decree XV"
      },
      "at": "XV",
      "sourceURL": "https://archive.org/details/actsdecreesofsyn00orth",
      "sourceLocator": "p. 135; Decree XV",
      "sourceEdition": "J. N. W. B. Robertson (trans.), The Acts and Decrees of the Synod of Jerusalem, London: Thomas Baker, 1899.",
      "checkedAt": "2026-11-01",
      "tag": "[verified: page image of archive.org leaf n146 (Robertson 1899, Decree XV, page header 135) read by the 2026-11-01 verifier; the OCR reads «[z.e.,» and the image «[i.e.,»; upgraded 2026-11-01 by session A on the strength of verification-codex-a2-d1.md §2]",
      "es": {
        "text": "Creemos que hay en la Iglesia Misterios evangélicos [es decir, Sacramentos de la dispensación del Evangelio], y que son siete.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde J. N. W. B. Robertson (trans.), The Acts and Decrees of the Synod of Jerusalem, London: Thomas Baker, 1899.",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). The Greek, Latin and Russian originals were not acquired.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      },
      "verificationAttempt": "Robertson 1899 scan-backed OCR reads [z.e.] where candidate normalizes [i.e.]; bracket glyph has not been visually collated. Metadata and the full OCR were fetched from actsdecreesofsyn00orth."
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A2, 2026-11-01, decision 3 of the DECISIONS entry «Independence of apologists and the 1689…»); no Greek or Russian witness acquired.",
  "reason": "Robertson 1899 scan-backed OCR reads [z.e.] where candidate normalizes [i.e.]; bracket glyph has not been visually collated. Metadata and the full OCR were fetched from actsdecreesofsyn00orth.",
  "tag": "[unverified]"
}
```

### OMogila106

```json
{
  "id": "OMogila106",
  "work": "mogila",
  "locator": "106",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "The holy Eucharist, or the Body and Blood of our Lord Jesus Christ, under the visible Species of Bread and Wine: Wherein, really and properly, and according to the Thing itself, Jesus Christ is present.",
        "lang": "en",
        "edition": "Peter Mogila, The Orthodox Confession of the Catholic and Apostolic Eastern Church, J. J. Overbeck (ed.), introduction by J. N. W. B. Robertson, London: Thomas Baker, 1898; the scan’s own introductory notice says the old English translation was «originally published in 1772» and gives its translator’s death as 1767 (internally inconsistent; no date for the first printing is claimed here).",
        "page": "p. 79; Part I, question 106"
      },
      "at": "106",
      "sourceURL": "https://archive.org/details/cu31924029363094",
      "sourceLocator": "p. 79; Part I, question 106",
      "sourceEdition": "Peter Mogila, The Orthodox Confession of the Catholic and Apostolic Eastern Church, J. J. Overbeck (ed.), introduction by J. N. W. B. Robertson, London: Thomas Baker, 1898; the scan’s own introductory notice says the old English translation was «originally published in 1772» and gives its translator’s death as 1767 (internally inconsistent; no date for the first printing is claimed here).",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org dated scan-backed OCR; question/decree located, line-end hyphens, whitespace and obvious OCR glyph errors normalized 2026-11-01; not a full visual collation]",
      "es": {
        "text": "La santa Eucaristía, o el Cuerpo y la Sangre de nuestro Señor Jesucristo, bajo las Especies visibles de Pan y Vino: en la cual, real y propiamente, y según la Cosa misma, Jesucristo está presente.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde Peter Mogila, The Orthodox Confession of the Catholic and Apostolic Eastern Church, J. J. Overbeck (ed.), introduction by J. N. W. B. Robertson, London: Thomas Baker, 1898; the scan’s own introductory notice says the old English translation was «originally published in 1772» and gives its translator’s death as 1767 (internally inconsistent; no date for the first printing is claimed here).",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). The Greek, Latin and Russian originals were not acquired.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A2, 2026-11-01, decision 3 of the DECISIONS entry «Independence of apologists and the 1689…»); no Greek or Russian witness acquired."
}
```

### OMogila107

```json
{
  "id": "OMogila107",
  "work": "mogila",
  "locator": "107",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "First, That no man do presume to administer this Mystery, on any Occasion whatsoever, although ever so urgent; but only a Priest lawfully ordained.",
        "lang": "en",
        "edition": "Peter Mogila, The Orthodox Confession of the Catholic and Apostolic Eastern Church, J. J. Overbeck (ed.), introduction by J. N. W. B. Robertson, London: Thomas Baker, 1898; the scan’s own introductory notice says the old English translation was «originally published in 1772» and gives its translator’s death as 1767 (internally inconsistent; no date for the first printing is claimed here).",
        "page": "p. 79; Part I, question 107"
      },
      "at": "107",
      "sourceURL": "https://archive.org/details/cu31924029363094",
      "sourceLocator": "p. 79; Part I, question 107",
      "sourceEdition": "Peter Mogila, The Orthodox Confession of the Catholic and Apostolic Eastern Church, J. J. Overbeck (ed.), introduction by J. N. W. B. Robertson, London: Thomas Baker, 1898; the scan’s own introductory notice says the old English translation was «originally published in 1772» and gives its translator’s death as 1767 (internally inconsistent; no date for the first printing is claimed here).",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org dated scan-backed OCR; question/decree located, line-end hyphens, whitespace and obvious OCR glyph errors normalized 2026-11-01; not a full visual collation]",
      "es": {
        "text": "Primero, que ningún hombre presuma administrar este Misterio, en ocasión alguna, por urgente que sea; sino solo un Sacerdote legítimamente ordenado.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde Peter Mogila, The Orthodox Confession of the Catholic and Apostolic Eastern Church, J. J. Overbeck (ed.), introduction by J. N. W. B. Robertson, London: Thomas Baker, 1898; the scan’s own introductory notice says the old English translation was «originally published in 1772» and gives its translator’s death as 1767 (internally inconsistent; no date for the first printing is claimed here).",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). The Greek, Latin and Russian originals were not acquired.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A2, 2026-11-01, decision 3 of the DECISIONS entry «Independence of apologists and the 1689…»); no Greek or Russian witness acquired."
}
```

### OPhilaret18

```json
{
  "id": "OPhilaret18",
  "work": "philaret",
  "locator": "18",
  "status": "unverified",
  "excerpts": [
    {
      "en": {
        "text": "All true believers united by the holy tradition of the faith, collectively and successively, by the will of God, compose the Church; and she is the sure repository of holy tradition, or, as St. Paul expresses it, The Church of the living God, the pillar and ground of the truth.",
        "lang": "en",
        "edition": "Philaret, The Longer Catechism of the Orthodox, Catholic, Eastern Church, English translation in Philip Schaff, The Creeds of Christendom, vol. II, New York: Harper & Brothers, 1896 (copyright 1877).",
        "page": "p. 448; question 18"
      },
      "at": "18",
      "sourceURL": "https://archive.org/details/creedschristendo02scha",
      "sourceLocator": "p. 448; question 18",
      "sourceEdition": "Philaret, The Longer Catechism of the Orthodox, Catholic, Eastern Church, English translation in Philip Schaff, The Creeds of Christendom, vol. II, New York: Harper & Brothers, 1896 (copyright 1877).",
      "checkedAt": "2026-11-01",
      "tag": "[verified: page image of archive.org leaf n462 (Schaff, Creeds II, p. 448) read by the 2026-11-01 verifier; OCR glyph «lioly» is «holy»; upgraded 2026-11-01 by session A on the strength of verification-codex-a2-d1.md §2]",
      "es": {
        "text": "Todos los verdaderos creyentes, unidos por la santa tradición de la fe, colectiva y sucesivamente, por voluntad de Dios, componen la Iglesia; y ella es la depositaria segura de la santa tradición, o, como la llama san Pablo, La Iglesia del Dios viviente, columna y fundamento de la verdad.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde Philaret, The Longer Catechism of the Orthodox, Catholic, Eastern Church, English translation in Philip Schaff, The Creeds of Christendom, vol. II, New York: Harper & Brothers, 1896 (copyright 1877).",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). The Greek, Latin and Russian originals were not acquired.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      },
      "verificationAttempt": "Schaff 1896 scan-backed OCR reads lioly where candidate reads holy. Metadata, title-page OCR and question 18 were fetched from creedschristendo02scha; passage image not collated.",
      "correction": {
        "date": "2026-11-01 (session A)",
        "source": "docs/research/night-2026-11-01/verification-codex-a2-d1.md §1",
        "what": "clipped: extended to the end of the sentence",
        "textBeforeCorrection": "All true believers united by the holy tradition of the faith, collectively and successively, by the will of God, compose the Church; and she is the sure repository of holy tradition",
        "check": "new wording re-matched against the cached source (BookOfConcord.org transcription, page-level OCR of the 1894 Westminster scan, the Schaff page text, or the official vatican.va page)"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A2, 2026-11-01, decision 3 of the DECISIONS entry «Independence of apologists and the 1689…»); no Greek or Russian witness acquired.",
  "reason": "Schaff 1896 scan-backed OCR reads lioly where candidate reads holy. Metadata, title-page OCR and question 18 were fetched from creedschristendo02scha; passage image not collated.",
  "tag": "[unverified]"
}
```

### OPhilaret20

```json
{
  "id": "OPhilaret20",
  "work": "philaret",
  "locator": "20",
  "status": "done",
  "excerpts": [
    {
      "en": {
        "text": "It is Greek, and means the books. The name signifies that the sacred books deserve attention before all others.",
        "lang": "en",
        "edition": "Philaret, The Longer Catechism of the Orthodox, Catholic, Eastern Church, English translation in Philip Schaff, The Creeds of Christendom, vol. II, New York: Harper & Brothers, 1896 (copyright 1877).",
        "page": "p. 449; question 20"
      },
      "at": "20",
      "sourceURL": "https://archive.org/details/creedschristendo02scha",
      "sourceLocator": "p. 449; question 20",
      "sourceEdition": "Philaret, The Longer Catechism of the Orthodox, Catholic, Eastern Church, English translation in Philip Schaff, The Creeds of Christendom, vol. II, New York: Harper & Brothers, 1896 (copyright 1877).",
      "checkedAt": "2026-11-01",
      "tag": "[verified: archive.org dated scan-backed OCR; question/decree located, line-end hyphens, whitespace and obvious OCR glyph errors normalized 2026-11-01; not a full visual collation]",
      "es": {
        "text": "Es griego, y significa los libros. El nombre significa que los libros sagrados merecen atención antes que todos los demás.",
        "lang": "es",
        "edition": "Traducción de Doctrina asistida por IA, desde Philaret, The Longer Catechism of the Orthodox, Catholic, Eastern Church, English translation in Philip Schaff, The Creeds of Christendom, vol. II, New York: Harper & Brothers, 1896 (copyright 1877).",
        "translation": "[traducción de Doctrina asistida por IA] from the English text of the edition above; unreviewed by Pedro (DECISIONS 2026-11-01, decision 3). The Greek, Latin and Russian originals were not acquired.",
        "tag": "[unverified: AI Spanish from the English, unreviewed by Pedro]"
      }
    }
  ],
  "spanishStatus": "AI Spanish from the English, labelled (session A2, 2026-11-01, decision 3 of the DECISIONS entry «Independence of apologists and the 1689…»); no Greek or Russian witness acquired."
}
```

## Coverage

| Family | Citations | Done | Unverified | Skipped and why | Left |
| --- | ---: | ---: | ---: | --- | ---: |
| Lutheran | 34 | 34 | 0 | 0 | 0 |
| Reformed | 19 | 19 | 0 | 0 | 0 |
| Catholic | 33 | 9 | 0 | 24 — 24: Already covered by citation-excerpts.md; completed set not repeated. | 0 |
| Orthodox | 5 | 3 | 2 | 0 | 0 |

## Traps

- A2 input contains 24 ids already in the completed Catholic set; that set has 27 records, including two repairs and MISAL not present in this input.
- Registry edition triglot.es is not a Spanish text printed in the trilingual 1921 edition; no Spanish witness is inferred from that id.
- Official Holy See web witnesses are cited as dated document + retrieved HTML, without claiming independent collation of a printed edition.
- Westminster 1894 title page reads Edinburgh: Johnstone, Hunter & Co., MDCCCXCIV; not Offices of the Church of Scotland.
- The 1880 Spanish title-page image names H. C. Thomson, Monterey, Tipografía del Comercio, A. Lagrange y Hno.; Archive metadata incorrectly labels its language por.
- The 1880 Spanish chapter XXXI has ministerial synod decisions at II and fallible councils at III, versus III and IV in the 1894 Scottish English. Do not transfer section numbers mechanically.
- The 1880 volume title lists the Shorter Catechism, not the Larger. No Spanish Larger Catechism excerpt is attributed to that volume.
- Small Catechism web anchors count question/answer units; traditional paragraph numbering counts questions and answers separately.
- Schaff archive identifier creedschristendo02scha is catalogued 1877, but its title page reads 1896 and its copyright page reads 1877; records name the actual 1896 witness.
- Mogila scan is Overbeck 1898 (Cornell copy, T. Baker, London). Its introductory notice says the old English translation was «originally published in 1772» and, in the same paragraph, that its translator died in 1767; the notice is internally inconsistent, the earlier «first printed 1762» is in no text read, so no date for the first printing is claimed (verification-codex-a2-d1.md §4; verification-english-quotes-session-A.md §5.5).
- Philaret question 20 in the scanned Schaff witness explains the word Bible; it does not state the rule for following tradition (question 23).
- Waterworth 1848 Dolman scan TheCanonsAndDecrees has the dated title-page imprint; the Burns and Oates scan cu31924029369760 is undated on its title page despite catalogue date 1848. The latter was not used for quotes.
- T6c20 Spanish is Session VI canon 20; there is no chapter 20 in the justification decree. The record retains the registry id but corrects sourceLocator.
- Trent Session VII has distinct canon series for sacraments in general and baptism. Searching canon numbers alone selects the wrong passage.
- CIC846 Spanish baptism by immersion/pouring belongs to canon 854, not 846; candidate sourceLocator identifies 854.
- CIC856 Spanish church or oratory belongs to canon 857 §1, not 856; candidate sourceLocator identifies 857.
- CIC845 composite Spanish includes non-Catholic conditional baptism wording from canon 869 §2; only its canon 845 §1 character fragment was matched.
- CIC913 composite Spanish mentions prior sacramental confession (canon 914); the supplied English covers only faith and devotion in canon 913 §1.
- CIC938 composite Spanish includes the sanctuary lamp from canon 940; the supplied English covers only the tabernacle in canon 938 §1.
- CIC947 official English HTML reads tracking or trading; the apparent typo is preserved and flagged.

## Usage

- Start: primary 0%, secondary 85%. The requested grep returned no result because the current JSONL uses spaces; structured JSON parsing recovered the actual rate-limit event.
- Latest save: primary 39%, secondary 91%.

## Verification

- Local self-audit, 2026-11-01: JSON blocks parse; input ids are unique and covered by completed, unverified, skipped or explicitly left lists; required provenance fields and quotation word caps checked.
- All supplied English web fragments were compared with the locally fetched official Vatican or BookOfConcord HTML. The scan-backed English fragments were compared with acquired OCR; the four unresolved glyph cases across the two files are explicitly unverified. OCR agreement is not visual page-image collation.
- Westminster 1894 and Spanish 1880 title-page images were inspected. Other edition dates are supported by the fetched title-page OCR or official dated document/web witness as described in each record.
- No independent agent verification or approval by Pedro took place. Remaining Spanish candidates and full page-image collation are separate work.
- Prettier check passed for both research files before final status and audit annotations; final check repeated below in the session handoff.
