# Citation excerpts and work languages

## Progress

- Status: done
- Done: all 25 empty registry citations now have Spanish excerpt candidates, plus repairs for T13c7 and T13can9 (27 records); official strings checked against cached official sources, Trent checked against Ayala’s dated 1785 printed pages, and the Roman Canon checked against the dated 2026 Vatican booklet. All 43 registry works have sourced language records, preserving co-original texts, recensions and missing model codes. Coverage/required-field audit passed: 27 records, 43 unique work ids, no omitted empty citation or work. Registry and application code were not edited.
- In progress: none within this research brief. Application remains separate: allocate the Holy See quotation budget against existing page excerpts; add or resolve fr/it/ru model codes; preserve Augsburg de/la and Florence la/el; correct edition attribution traps stated below.
- Next: owner/application agent applies the sourced candidates with the stated quotation-budget and language-model gates. Research resumes at Task 3, docs/research/neutral/witness-paragraphs.md. Do not repeat the completed 27 excerpts or 43 work-language records.

Started 2026-10-27; resumed 2026-10-28 under the owner’s quota exception.

## Empty-excerpt inventory

The 25 registry records with `excerpts: []`, confirmed directly in `src/content/registry/citations.ts`, are:

1. `T7sacr12` — Trent
2. `CEC1223` — Catechism of the Catholic Church
3. `CEC1232` — Catechism of the Catholic Church
4. `CEC1234` — Catechism of the Catholic Church
5. `CEC1243` — Catechism of the Catholic Church
6. `CEC1244` — Catechism of the Catholic Church
7. `CEC1247` — Catechism of the Catholic Church
8. `CEC1251` — Catechism of the Catholic Church
9. `CEC1255` — Catechism of the Catholic Church
10. `CEC1283` — Catechism of the Catholic Church
11. `CEC1284` — Catechism of the Catholic Church
12. `SC64` — _Sacrosanctum Concilium_
13. `T22c7` — Trent
14. `MISAL` — Roman Missal, Eucharistic Prayer I
15. `CEC1338` — Catechism of the Catholic Church
16. `CEC1340` — Catechism of the Catholic Church
17. `CEC1341` — Catechism of the Catholic Church
18. `CEC1342` — Catechism of the Catholic Church
19. `CEC1376` — Catechism of the Catholic Church
20. `CEC1382` — Catechism of the Catholic Church
21. `CEC1385` — Catechism of the Catholic Church
22. `CEC1387` — Catechism of the Catholic Church
23. `CEC1415` — Catechism of the Catholic Church
24. `CEC1417` — Catechism of the Catholic Church
25. `CIC921` — Code of Canon Law

`[CONFIRMED: registry source, 2026-10-27]`

## Work-language inventory

`src/content/registry/works.ts` contains 43 works and no `originalLang` property. The model defines `originalLang?: DocLang` as a property of the work, not of an edition or translation. No language value will be inferred from the language of an existing excerpt; each will be checked against the work's promulgated or first authoritative text.

`[CONFIRMED: registry model and works source, 2026-10-27]`

## Required output fields

Each completed citation record will include:

- citation id
- work
- locator
- excerpt text and language
- edition
- page
- source URL
- date checked
- verification tag

## Quotation-budget checkpoint

The twenty new Catechism candidates below contain **81 words for Baptism** and **92 for Eucharist**, including the two parts of CEC1341. Each new set is under the chosen 100-word page cap considered on its own. These are short fragments with official source links, not permission to reproduce whole paragraphs serially. `[CONFIRMED: saved candidate JSON word count, 2026-10-28]`

The existing registry already supplies much larger **potential citation-window pools** for the same pages: Eucharist references 48 distinct CEC ids, of which 36 already have Spanish excerpts totalling **1,686 words**; Baptism references 59, of which 49 already have Spanish excerpts totalling **2,186 words**. Counts come from the current page source and every `es.text` in each unique referenced registry record. This is not a measurement of simultaneously visible text or a census of the article's inline quotations. `[CONFIRMED: current TypeScript sources, 2026-10-28]`

Consequently, do not label a mechanical append of these candidates as compliance with option B. Before applying, allocate the document's excerpt budget across inline text and citation-window behavior, taking the existing material into account; the 2026-10-22 decision also requires at least equal analysis and forbids serial substitution. This report provides the verified strings and provenance without editing the registry or silently changing that policy. `[INFERENCE: application gate from DECISIONS.md, 2026-10-22, Holy See quotation rule]`

## Verified excerpt candidates

The records below are research candidates, not registry edits. Page fields identify numbered official HTML paragraphs, not invented print pages. The Vatican pages have no numeric paragraph anchors: `#:~:text=` links are browser text-fragment locators generated from verified source text, not Vatican-provided HTML ids; the base official URL remains the fallback. Common edition is the named official Spanish web witness, downloaded 2026-10-27 and string-checked on the stated date. Registry work dates 1992/1997 are not represented as an independently verified print imprint. Budget figures apply to this new candidate set only; existing page quotations must also be counted before application.

### CEC1382

```json
{
  "id": "CEC1382",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1382",
  "excerpts": [
    {
      "es": {
        "text": "Comulgar es recibir a Cristo mismo que se ofrece por nosotros.",
        "edition": "cec.es",
        "page": "n. 1382 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1382",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1382%20La%20misa%20es%2C%20a%20la%20vez%20e%20inseparablemente%2C%20el%20memorial%20sacrificial%20en",
      "sourceLocator": "Catechism paragraph 1382",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1376

```json
{
  "id": "CEC1376",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1376",
  "excerpts": [
    {
      "es": {
        "text": "la Iglesia católica ha llamado justa y apropiadamente a este cambio transubstanciación",
        "edition": "cec.es",
        "page": "n. 1376 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1376",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1376%20El%20Concilio%20de%20Trento%20resume%20la%20fe%20cat%C3%B3lica%20cuando%20afirma%3A%20%22Porque%20Cristo%2C",
      "sourceLocator": "Catechism paragraph 1376",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1341

```json
{
  "id": "CEC1341",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1341 and 1363",
  "excerpts": [
    {
      "es": {
        "text": "Requiere la celebración litúrgica",
        "edition": "cec.es",
        "page": "n. 1341 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1341",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1341%20El%20mandamiento%20de%20Jes%C3%BAs%20de%20repetir%20sus%20gestos%20y%20sus%20palabras%20%22hasta",
      "sourceLocator": "Catechism paragraph 1341",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    },
    {
      "es": {
        "text": "el memorial no es solamente el recuerdo",
        "edition": "cec.es",
        "page": "n. 1363 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1363",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1363%20En%20el%20sentido%20empleado%20por%20la%20Sagrada%20Escritura%2C%20el%20memorial%20no%20es",
      "sourceLocator": "Catechism paragraph 1363",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1338

```json
{
  "id": "CEC1338",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1338",
  "excerpts": [
    {
      "es": {
        "text": "el pan de vida, bajado del cielo",
        "edition": "cec.es",
        "page": "n. 1338 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1338",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1338%20Los%20tres%20evangelios%20sin%C3%B3pticos%20y%20san%20Pablo%20nos%20han%20transmitido%20el%20relato",
      "sourceLocator": "Catechism paragraph 1338",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1385

```json
{
  "id": "CEC1385",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1385",
  "excerpts": [
    {
      "es": {
        "text": "debe recibir el sacramento de la Reconciliación antes de acercarse a comulgar",
        "edition": "cec.es",
        "page": "n. 1385 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1385",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1385%20Para%20responder%20a%20esta%20invitaci%C3%B3n%2C%20debemos%20prepararnos%20para%20este%20momento%20tan%20grande",
      "sourceLocator": "Catechism paragraph 1385",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1415

```json
{
  "id": "CEC1415",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1415",
  "excerpts": [
    {
      "es": {
        "text": "debe hallarse en estado de gracia",
        "edition": "cec.es",
        "page": "n. 1415 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1415",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1415%20El%20que%20quiere%20recibir%20a%20Cristo%20en%20la%20Comuni%C3%B3n%20eucar%C3%ADstica%20debe%20hallarse",
      "sourceLocator": "Catechism paragraph 1415",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1387

```json
{
  "id": "CEC1387",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1387",
  "excerpts": [
    {
      "es": {
        "text": "los fieles deben observar el ayuno prescrito por la Iglesia",
        "edition": "cec.es",
        "page": "n. 1387 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1387",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1387%20Para%20prepararse%20convenientemente%20a%20recibir%20este%20sacramento%2C%20los%20fieles%20deben%20observar%20el",
      "sourceLocator": "Catechism paragraph 1387",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1340

```json
{
  "id": "CEC1340",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1340",
  "excerpts": [
    {
      "es": {
        "text": "la Pascua nueva, es anticipada en la Cena",
        "edition": "cec.es",
        "page": "n. 1340 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1340",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1340%20Al%20celebrar%20la%20%C3%BAltima%20Cena%20con%20sus%20Ap%C3%B3stoles%20en%20el%20transcurso%20del",
      "sourceLocator": "Catechism paragraph 1340",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1342

```json
{
  "id": "CEC1342",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1342",
  "excerpts": [
    {
      "es": {
        "text": "la Iglesia fue fiel a la orden del Señor",
        "edition": "cec.es",
        "page": "n. 1342 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1342",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1342%20Desde%20el%20comienzo%20la%20Iglesia%20fue%20fiel%20a%20la%20orden%20del%20Se%C3%B1or.",
      "sourceLocator": "Catechism paragraph 1342",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1417

```json
{
  "id": "CEC1417",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1417",
  "excerpts": [
    {
      "es": {
        "text": "al menos una vez al año",
        "edition": "cec.es",
        "page": "n. 1417 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1417",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a3_sp.html#:~:text=1417%20La%20Iglesia%20recomienda%20vivamente%20a%20los%20fieles%20que%20reciban%20la%20sagrada%20comuni%C3%B3n",
      "sourceLocator": "Catechism paragraph 1417",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "276b605c53b840341fd25e85dd468d0c66998093accd66a5b80d8daf60fe0de9"
}
```

### CEC1223

```json
{
  "id": "CEC1223",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1223",
  "excerpts": [
    {
      "es": {
        "text": "Todas las prefiguraciones de la Antigua Alianza culminan en Cristo Jesús.",
        "edition": "cec.es",
        "page": "n. 1223 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1223",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1223%20Todas%20las%20prefiguraciones%20de%20la%20Antigua%20Alianza%20culminan%20en%20Cristo%20Jes%C3%BAs.%20Comienza",
      "sourceLocator": "Catechism paragraph 1223",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### CEC1232

```json
{
  "id": "CEC1232",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1232",
  "excerpts": [
    {
      "es": {
        "text": "el catecumenado de adultos, dividido en diversos grados",
        "edition": "cec.es",
        "page": "n. 1232 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1232",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1232%20El%20Concilio%20Vaticano%20II%20ha%20restaurado%20para%20la%20Iglesia%20latina%2C%20%22el%20catecumenado",
      "sourceLocator": "Catechism paragraph 1232",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### CEC1234

```json
{
  "id": "CEC1234",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1234",
  "excerpts": [
    {
      "es": {
        "text": "la gracia del sacramento del Bautismo",
        "edition": "cec.es",
        "page": "n. 1234 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1234",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1234%20El%20sentido%20y%20la%20gracia%20del%20sacramento%20del%20Bautismo%20aparece%20claramente%20en",
      "sourceLocator": "Catechism paragraph 1234",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### CEC1243

```json
{
  "id": "CEC1243",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1243",
  "excerpts": [
    {
      "es": {
        "text": "ha resucitado con Cristo",
        "edition": "cec.es",
        "page": "n. 1243 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1243",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1243%20La%20vestidura%20blanca%20simboliza%20que%20el%20bautizado%20se%20ha%20%22revestido%20de%20Cristo%22",
      "sourceLocator": "Catechism paragraph 1243",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### CEC1244

```json
{
  "id": "CEC1244",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1244",
  "excerpts": [
    {
      "es": {
        "text": "Las Iglesias orientales conservan una conciencia viva de la unidad de la iniciación cristiana",
        "edition": "cec.es",
        "page": "n. 1244 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1244",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1244%20La%20primera%20comuni%C3%B3n%20eucar%C3%ADstica.%20Hecho%20hijo%20de%20Dios%2C%20revestido%20de%20la%20t%C3%BAnica",
      "sourceLocator": "Catechism paragraph 1244",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### CEC1247

```json
{
  "id": "CEC1247",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1247",
  "excerpts": [
    {
      "es": {
        "text": "el Bautismo de adultos es la práctica más común",
        "edition": "cec.es",
        "page": "n. 1247 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1247",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1247%20En%20los%20or%C3%ADgenes%20de%20la%20Iglesia%2C%20cuando%20el%20anuncio%20del%20Evangelio%20est%C3%A1",
      "sourceLocator": "Catechism paragraph 1247",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### CEC1251

```json
{
  "id": "CEC1251",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1251",
  "excerpts": [
    {
      "es": {
        "text": "alimentar la vida que Dios les ha confiado",
        "edition": "cec.es",
        "page": "n. 1251 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1251",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1251%20Los%20padres%20cristianos%20deben%20reconocer%20que%20esta%20pr%C3%A1ctica%20corresponde%20tambi%C3%A9n%20a%20su",
      "sourceLocator": "Catechism paragraph 1251",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### CEC1255

```json
{
  "id": "CEC1255",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1255",
  "excerpts": [
    {
      "es": {
        "text": "es importante la ayuda de los padres",
        "edition": "cec.es",
        "page": "n. 1255 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1255",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1255%20Para%20que%20la%20gracia%20bautismal%20pueda%20desarrollarse%20es%20importante%20la%20ayuda%20de",
      "sourceLocator": "Catechism paragraph 1255",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### CEC1283

```json
{
  "id": "CEC1283",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1283",
  "excerpts": [
    {
      "es": {
        "text": "tener confianza en la misericordia divina",
        "edition": "cec.es",
        "page": "n. 1283 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1283",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1283%20En%20cuanto%20a%20los%20ni%C3%B1os%20muertos%20sin%20bautismo%2C%20la%20liturgia%20de%20la",
      "sourceLocator": "Catechism paragraph 1283",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### CEC1284

```json
{
  "id": "CEC1284",
  "work": "cec",
  "workTitle": "Catechism of the Catholic Church",
  "locator": "1284",
  "excerpts": [
    {
      "es": {
        "text": "En caso de necesidad, toda persona puede bautizar",
        "edition": "cec.es",
        "page": "n. 1284 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      },
      "at": "1284",
      "sourceURL": "https://www.vatican.va/archive/catechism_sp/p2s2c1a1_sp.html#:~:text=1284%20En%20caso%20de%20necesidad%2C%20toda%20persona%20puede%20bautizar%2C%20con%20tal%20que%20tenga",
      "sourceLocator": "Catechism paragraph 1284",
      "sourceEdition": "Catecismo de la Iglesia Católica, official Spanish Vatican HTML; local snapshot retrieved 2026-10-27",
      "checkedAt": "2026-10-28",
      "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
    }
  ],
  "sourceSHA256": "07b574b80957ab530aa703e5125a4af773dd9436d548a4e9cfeafaa0808b5c6f"
}
```

### SC64

```json
{
  "id": "SC64",
  "work": "sc",
  "locator": "64",
  "excerpts": [
    {
      "es": {
        "text": "Restáurese el catecumenado de adultos dividido en distintas etapas",
        "edition": "sc.es",
        "page": "n. 64 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      }
    }
  ],
  "sourceEdition": "Sacrosanctum Concilium, constitution promulgated 4 December 1963; official Spanish Vatican web witness, local snapshot 2026-10-27",
  "sourceURL": "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_sp.html#:~:text=Rest%C3%A1urese%20el%20catecumenado%20de%20adultos%20dividido%20en%20distintas%20etapas",
  "sourceLocator": "paragraph 64",
  "sourceSHA256": "bf93beb3d9ee5f40e89109fd14eb1bda8985a52af31ea0127fcad382e68fdf47",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot"
}
```

### CIC921

```json
{
  "id": "CIC921",
  "work": "cic",
  "locator": "921 §1",
  "excerpts": [
    {
      "es": {
        "text": "Se debe administrar el Viático a los fieles que, por cualquier motivo, se hallen en peligro de muerte.",
        "edition": "cic.es",
        "page": "can. 921 §1 (official HTML, unpaginated)",
        "verified": "page",
        "translation": "official"
      }
    }
  ],
  "sourceEdition": "Código de Derecho Canónico (1983), official Spanish Vatican web text, canons 912–923; downloaded 2026-10-28 through the official Spanish index",
  "sourceURL": "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann912-923_sp.html#:~:text=Se%20debe%20administrar%20el%20Vi%C3%A1tico%20a%20los%20fieles%20que%2C%20por%20cualquier%20motivo%2C%20se%20hallen%20en%20peligro%20de%20muerte.",
  "sourceLocator": "canon 921 §1",
  "sourceSHA256": "f4a4c973e6d97e9b43bb20113ed7479aa10c5de7cd1ac1392885030edef10bd7",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: exact decoded/whitespace-normalized string in the official HTML snapshot",
  "officialIndex": "https://www.vatican.va/archive/cod-iuris-canonici/cic_index_sp.html"
}
```

### T7sacr12

```json
{
  "id": "T7sacr12",
  "work": "trent",
  "locator": "Session VII, Sacraments in General, canon XII",
  "excerpts": [
    {
      "es": {
        "text": "Si alguno dixere , que el ministro que está en pecado mortal no efectua sacramento , ó no lo confiere , aunque observe quantas cosas esenciales pertenecen á efectuarlo , ó conferirlo , sea excomulgado.",
        "edition": "trent.es",
        "page": "113",
        "verified": "scan",
        "translation": "printed-original"
      },
      "note": "The Latin prints anathema sit; the 1785 Spanish translation prints sea excomulgado. This is the general-sacraments canon XII, not the separately numbered baptism canon XII."
    }
  ],
  "sourceEdition": "Ignacio López de Ayala, El sacrosanto y ecuménico concilio de Trento, second edition (Madrid: Imprenta Real, 1785), Spanish with Latin",
  "sourceURL": "https://archive.org/details/elsacrosantoyec00madgoog/page/n135/mode/1up",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: visually checked dated print-page images; excerpt exact against saved diplomatic transcription, line-wrap hyphens removed",
  "verification": {
    "pdfPages": [135],
    "pdfSHA256": "a64ca90245d51e9cfc19f520d81a174037b907a1a173c5426948236fce9e1dd1",
    "matchedOcrAnchor": "si alguno dixere que el ministro que está en pecado mortal no",
    "transcriptionSHA256": "ca13c85be1376cf3d1e4f07f90052473563db76ac17ebc364a64dc6e677bf18b",
    "notes": "Source OCR is defective; no full exact match to uncorrected OCR is claimed. Printed words and punctuation retained; physical line wraps removed. PDF page numbers are one-based, independent of the printed pagination."
  }
}
```

### T13c7

```json
{
  "id": "T13c7",
  "work": "trent",
  "locator": "Session XIII, chapter VII",
  "excerpts": [
    {
      "es": {
        "text": "ninguno sabedor de que está en pecado mortal , se puede acercar , por muy contrito que le parezca hallarse , á recibir la sagrada Eucaristía , sin disponerse antes con la confesion sacramental",
        "edition": "trent.es",
        "page": "167–168 (excerpt on 168)",
        "verified": "scan",
        "translation": "printed-original"
      },
      "note": "The chapter continues on p.168 with the priest/confessor exception, urgent celebration and subsequent prompt confession. Keep that context; do not make the excerpt an exceptionless paraphrase. Add this Spanish witness alongside the existing English excerpt, not as a replacement for it."
    }
  ],
  "sourceEdition": "Ignacio López de Ayala, El sacrosanto y ecuménico concilio de Trento, second edition (Madrid: Imprenta Real, 1785), Spanish with Latin",
  "sourceURL": "https://archive.org/details/elsacrosantoyec00madgoog/page/n190/mode/1up",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: visually checked dated print-page images; excerpt exact against saved diplomatic transcription, line-wrap hyphens removed",
  "verification": {
    "pdfPages": [189, 190],
    "pdfSHA256": "a64ca90245d51e9cfc19f520d81a174037b907a1a173c5426948236fce9e1dd1",
    "matchedOcrAnchor": "ninguno sabedor de que está en pecado mortal",
    "transcriptionSHA256": "25531f3329cd863501a2a04ec6ef474b29d7b8496d02c9bce5b0d14740faef1f",
    "notes": "Source OCR is defective; no full exact match to uncorrected OCR is claimed. Printed words and punctuation retained; physical line wraps removed. PDF page numbers are one-based, independent of the printed pagination."
  }
}
```

### T13can9

```json
{
  "id": "T13can9",
  "work": "trent",
  "locator": "Session XIII, canon IX",
  "excerpts": [
    {
      "es": {
        "text": "están obligados á comulgar todos los años , á lo menos en Pasqua florida, segun el precepto de nuestra santa madre Iglesia",
        "edition": "trent.es",
        "page": "173",
        "verified": "scan",
        "translation": "printed-original"
      },
      "note": "Replace the present isolated en Pasqua florida fragment with this obligation clause. The canon condemns denial of the obligation; its preceding scope is the faithful of both sexes who have reached the use of reason. The Latin prints anathema sit and the 1785 Spanish sea excomulgado."
    }
  ],
  "sourceEdition": "Ignacio López de Ayala, El sacrosanto y ecuménico concilio de Trento, second edition (Madrid: Imprenta Real, 1785), Spanish with Latin",
  "sourceURL": "https://archive.org/details/elsacrosantoyec00madgoog/page/n195/mode/1up",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: visually checked dated print-page images; excerpt exact against saved diplomatic transcription, line-wrap hyphens removed",
  "verification": {
    "pdfPages": [195],
    "pdfSHA256": "a64ca90245d51e9cfc19f520d81a174037b907a1a173c5426948236fce9e1dd1",
    "matchedOcrAnchor": "comulgar todos los años á lo menos en",
    "transcriptionSHA256": "a1cb84cd752f4f6f6330233e2ca809065f99406276c7debf5a9ba8cb39e0e163",
    "notes": "Source OCR is defective; no full exact match to uncorrected OCR is claimed. Printed words and punctuation retained; physical line wraps removed. PDF page numbers are one-based, independent of the printed pagination."
  }
}
```

### T22c7

```json
{
  "id": "T22c7",
  "work": "trent",
  "locator": "Session XXII, chapter VII",
  "excerpts": [
    {
      "es": {
        "text": "es precepto de la Iglesia que los sacerdotes mezclen agua con el vino que han de ofrecer en el caliz",
        "edition": "trent.es",
        "page": "322",
        "verified": "scan",
        "translation": "printed-original"
      },
      "note": "This is chapter VII on water mixed with the wine; do not confuse it with chapter VI on Masses where the priest alone communicates. Retain the 1785 spelling caliz."
    }
  ],
  "sourceEdition": "Ignacio López de Ayala, El sacrosanto y ecuménico concilio de Trento, second edition (Madrid: Imprenta Real, 1785), Spanish with Latin",
  "sourceURL": "https://archive.org/details/elsacrosantoyec00madgoog/page/n344/mode/1up",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: visually checked dated print-page images; excerpt exact against saved diplomatic transcription, line-wrap hyphens removed",
  "verification": {
    "pdfPages": [344],
    "pdfSHA256": "a64ca90245d51e9cfc19f520d81a174037b907a1a173c5426948236fce9e1dd1",
    "matchedOcrAnchor": "es precepto de la iglesia que los sacerdotes mezclen agua con el",
    "transcriptionSHA256": "448cb28bc871a76d29fbf729687cff2e99b402cff9fefa0b0ac75bf0e81f19ef",
    "notes": "Source OCR is defective; no full exact match to uncorrected OCR is claimed. Printed words and punctuation retained; physical line wraps removed. PDF page numbers are one-based, independent of the printed pagination."
  }
}
```

### MISAL

```json
{
  "id": "MISAL",
  "work": "misal",
  "locator": "Eucharistic Prayer I (Roman Canon), Quam oblationem, before the institution narrative",
  "excerpts": [
    {
      "es": {
        "text": "Bendice y santifica esta ofrenda, Padre, haciéndola perfecta, espiritual y digna de ti",
        "edition": "misal.es",
        "page": "162",
        "verified": "page",
        "translation": "official"
      },
      "note": "Short clause from a dated official liturgical use. This is not a licence for the full Roman Missal and is not a claim that the booklet prints the Missal section number 90. The source uses this 2026 Spanish wording; do not replace it silently with an older wording."
    }
  ],
  "sourceEdition": "Viaggio apostolico di Sua Santità Leone XIV in Spagna, 6–12 giugno 2026, official Vatican liturgical booklet, Santa Cruz de Tenerife Mass, 12 June 2026, p.162, Spanish Quam oblationem of the Roman Canon.",
  "sourceURL": "https://www.vatican.va/content/dam/liturgy/pdf/2026/20260606-12-messale-spagna.pdf#page=162",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: exact PDF text string and visual check of printed p.162",
  "sourceSHA256": "09e3874e507b021c608bbf068a32c9b05a0faeb80ed2e1b36eb8e47f08997b39",
  "verification": {
    "pdfPage": 162,
    "printedPage": "162",
    "context": "Santa Cruz de Tenerife – 12 giugno 2026; prayer immediately before the institution narrative",
    "identitySource": "Official Spanish General Instruction of the Roman Missal, 219–222: https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_sp.html"
  },
  "proposedEditionUpdate": {
    "id": "misal.es",
    "works": ["misal"],
    "lang": "es",
    "bibliography": "Viaggio apostolico di Sua Santità Leone XIV in Spagna, 6–12 giugno 2026, official Vatican liturgical booklet, Santa Cruz de Tenerife Mass, 12 June 2026, p.162, Spanish Quam oblationem of the Roman Canon.",
    "licence": "short-quote",
    "access": "https://www.vatican.va/content/dam/liturgy/pdf/2026/20260606-12-messale-spagna.pdf#page=162"
  }
}
```

Trent edition checkpoint: the title page was also read visually at PDF p.9: Ignacio López de Ayala, second edition, Madrid, Imprenta Real, MDCCLXXXV (1785). BookReader scandata labels are not used as a substitute for reading the printed page numbers; the latter were checked on all four target passages.

## Original-language records

These records identify the first published or specified authoritative form of each registered work; they do not infer a work language from a translated quotation. Earlier drafts, later typical recensions and co-original texts are stated separately. The current model permits only `la`, `es`, `en`, `de`, `el`; missing language codes are application gates, not reasons to relabel a text Latin.

### Language: cec

```json
{
  "work": "cec",
  "originalLang": "fr",
  "scope": "Historical first published text: French (1992). The definitive typical edition is Latin (1997). Do not infer historical originalLang from a Spanish excerpt or silently force Latin because fr is absent from DocLang. If the work id is deliberately redefined as the 1997 Latin typical recension, that is a different stated scope; retain the French-publication fact.",
  "sourceEdition": "John Paul II, Laetamur magnopere, 15 August 1997, official Vatican English web text",
  "sourceLocator": "opening paragraphs on the first French text and Latin typical edition",
  "sourceURL": "https://www.vatican.va/content/john-paul-ii/en/apost_letters/1997/documents/hf_jp-ii_apl_15081997_laetamur.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "DocLang lacks fr; distinguish first published work from later typical edition.",
  "sourceSHA256": "096637511e2bd7770ef102ef816640ede5ab61e4c5748908d3a1dd727174229b"
}
```

### Language: gestis-verbisque

```json
{
  "work": "gestis-verbisque",
  "originalLang": "it",
  "scope": "Italian is the language of the issued primary text checked here; the Latin incipit is not proof that its body was issued in Latin. This identifies the registered issued note, not an undocumented private drafting history. A generic .la edition slot is not source evidence.",
  "sourceEdition": "Holy See Press Office bulletin no.0115, 3 February 2024, issuing the note dated 2 February 2024",
  "sourceLocator": "issued Italian note and presentation",
  "sourceURL": "https://press.vatican.va/content/salastampa/it/bollettino/pubblico/2024/02/03/0115/00224.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "DocLang lacks it.",
  "sourceSHA256": "6b9b0ce8281a36d56f3e1ab494a9e86cd5c860ffa23de24e6e629cc33dadbb38"
}
```

### Language: donum-veritatis

```json
{
  "work": "donum-veritatis",
  "originalLang": "la",
  "scope": "The authoritative journal text was inspected in Latin, including the instruction heading and opening paragraph. This is evidence from the promulgated work itself, not from an existing translated excerpt or its Latin incipit alone.",
  "sourceEdition": "Acta Apostolicae Sedis 82 (1990), pp.1550–1570, Vatican official journal",
  "sourceLocator": "p.1550, Instructio de ecclesiali theologi vocatione, introduction paragraph 1; PDF p.1550",
  "sourceURL": "https://www.vatican.va/archive/aas/documents/AAS-82-1990-ocr.pdf#page=1550",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang."
}
```

### Language: cdf-note-1998

```json
{
  "work": "cdf-note-1998",
  "originalLang": "la",
  "scope": "Latin authoritative commentary text inspected at its doctrinal examples, with Congregatio pro Doctrina Fidei running header. The earlier Latin papal motu proprio is a separate work and was not mistaken for this note.",
  "sourceEdition": "Acta Apostolicae Sedis 90 (1998), pp.544–551, Vatican official journal",
  "sourceLocator": "doctrinal commentary on Professio fidei, especially p.549 paragraph 11; distinguish the earlier Ad tuendam fidem on pp.457ff.",
  "sourceURL": "https://www.vatican.va/archive/aas/documents/AAS-90-1998-ocr.pdf#page=544",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang."
}
```

### Language: augsburg

```json
{
  "work": "augsburg",
  "originalLang": "de",
  "scope": "German AND Latin co-original texts: a scalar de value must not erase la. Both versions are historically original; expose both or retain a co-original note. This is not a German translation of a Latin-only confession.",
  "sourceEdition": "F. Bente, Historical Introductions to the Symbolical Books of the Evangelical Lutheran Church, Concordia Triglotta (1921), Gutenberg transcription no.26909",
  "sourceLocator": "section 27, Manuscripts and Editions of Augustana",
  "sourceURL": "https://www.gutenberg.org/ebooks/26909",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Scalar language cannot represent both co-original de and la.",
  "sourceSHA256": "d2bf48d827a176e51167d58a5516ab8e6b2723f5acbd5b67d70ceb8e41e4a763"
}
```

### Language: apology

```json
{
  "work": "apology",
  "originalLang": "la",
  "scope": "Latin original; the German text by Justus Jonas is a translation, not a co-original.",
  "sourceEdition": "F. Bente, Historical Introductions to the Symbolical Books of the Evangelical Lutheran Church, Concordia Triglotta (1921), Gutenberg transcription no.26909",
  "sourceLocator": "section 56, Latin Editions of the Apology",
  "sourceURL": "https://www.gutenberg.org/ebooks/26909",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "d2bf48d827a176e51167d58a5516ab8e6b2723f5acbd5b67d70ceb8e41e4a763"
}
```

### Language: large-catechism

```json
{
  "work": "large-catechism",
  "originalLang": "de",
  "scope": "German first edition of 1529; the same historical account distinguishes the Latin translations of 1529.",
  "sourceEdition": "F. Bente, Historical Introductions to the Symbolical Books of the Evangelical Lutheran Church, Concordia Triglotta (1921), Gutenberg transcription no.26909",
  "sourceLocator": "section 108, Editions of Large Catechism",
  "sourceURL": "https://www.gutenberg.org/ebooks/26909",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "d2bf48d827a176e51167d58a5516ab8e6b2723f5acbd5b67d70ceb8e41e4a763"
}
```

### Language: smalcald

```json
{
  "work": "smalcald",
  "originalLang": "de",
  "scope": "German text printed in 1538. Do not confuse this work with the Latin Tractatus discussed separately in section 79.",
  "sourceEdition": "F. Bente, Historical Introductions to the Symbolical Books of the Evangelical Lutheran Church, Concordia Triglotta (1921), Gutenberg transcription no.26909",
  "sourceLocator": "section 77, Editions of Smalcald Articles",
  "sourceURL": "https://www.gutenberg.org/ebooks/26909",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "d2bf48d827a176e51167d58a5516ab8e6b2723f5acbd5b67d70ceb8e41e4a763"
}
```

### Language: fc-epitome

```json
{
  "work": "fc-epitome",
  "originalLang": "de",
  "scope": "German Formula of Concord (1577), incorporated into German Book of Concord 1580. Section 3 explicitly describes the Latin Formula as a translation, with the authorized Latin Book of Concord following in 1584.",
  "sourceEdition": "F. Bente, Historical Introductions to the Symbolical Books of the Evangelical Lutheran Church, Concordia Triglotta (1921), Gutenberg transcription no.26909",
  "sourceLocator": "sections 2–3, German and Latin Books of Concord",
  "sourceURL": "https://www.gutenberg.org/ebooks/26909",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "d2bf48d827a176e51167d58a5516ab8e6b2723f5acbd5b67d70ceb8e41e4a763"
}
```

### Language: fc-sd

```json
{
  "work": "fc-sd",
  "originalLang": "de",
  "scope": "German Solid Declaration, the fuller part of the Formula of Concord (1577). Same German/Latin publication distinction as Epitome; Latin 1584 is not evidence for a Latin original.",
  "sourceEdition": "F. Bente, Historical Introductions to the Symbolical Books of the Evangelical Lutheran Church, Concordia Triglotta (1921), Gutenberg transcription no.26909",
  "sourceLocator": "sections 2–3, German and Latin Books of Concord",
  "sourceURL": "https://www.gutenberg.org/ebooks/26909",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "d2bf48d827a176e51167d58a5516ab8e6b2723f5acbd5b67d70ceb8e41e4a763"
}
```

### Language: jp-audience-1989

```json
{
  "work": "jp-audience-1989",
  "originalLang": "it",
  "scope": "Italian published catechesis; foreign-language greetings in the audience do not turn the numbered discourse into a Latin work. This identifies the issued transcript, not private drafting history.",
  "sourceEdition": "John Paul II, official Vatican Italian general-audience transcript, 13 settembre 1989",
  "sourceLocator": "dated header and numbered catechesis body",
  "sourceURL": "https://www.vatican.va/content/john-paul-ii/it/audiences/1989/documents/hf_jp-ii_aud_19890913.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "DocLang lacks it.",
  "sourceSHA256": "7ae8b264e3a450e75f2c8b34beb6140e0f8e8acddf15b57f6eb85643402386e4"
}
```

### Language: jp-audience-1991

```json
{
  "work": "jp-audience-1991",
  "originalLang": "it",
  "scope": "Italian published catechesis; foreign-language greetings in the audience do not turn the numbered discourse into a Latin work. This identifies the issued transcript, not private drafting history.",
  "sourceEdition": "John Paul II, official Vatican Italian general-audience transcript, 30 gennaio 1991",
  "sourceLocator": "dated header and numbered catechesis body",
  "sourceURL": "https://www.vatican.va/content/john-paul-ii/it/audiences/1991/documents/hf_jp-ii_aud_19910130.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "DocLang lacks it.",
  "sourceSHA256": "1cf354c2ef0d0dc5173444dc33add4995c10b4d7edb39ffed9e17e62a1571b1f"
}
```

### Language: dositheus

```json
{
  "work": "dositheus",
  "originalLang": "el",
  "scope": "The edition explicitly calls the text Greek original and distinguishes its Latin version. Its parallel original text, rather than an English quotation, establishes el.",
  "sourceEdition": "Philip Schaff, Creeds of Christendom, vol.II, sixth edition, CCEL text (copyright notices 1877,1905,1919)",
  "sourceLocator": "The Confession of Dositheus, or the Eighteen Decrees of the Synod of Jerusalem, editorial headnote",
  "sourceURL": "https://ccel.org/ccel/s/schaff/creeds2.xml",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "579aa40c4ab8cf44173ccc077c20c694eea18e2a1a6dc72d954382ff6c5dda18"
}
```

### Language: philaret

```json
{
  "work": "philaret",
  "originalLang": "ru",
  "scope": "Russian registered catechism. Schaff calls its composition Slavono-Russian and distinguishes the Russian Moscow edition from Greek and German translations. The earlier project verification of the Synodal Russian text supports ru; this is not an inference from Blackmore’s composite book title.",
  "sourceEdition": "Philip Schaff, Creeds of Christendom, vol.II, sixth edition, CCEL text (copyright notices 1877,1905,1919)",
  "sourceLocator": "III. The Longer Catechism, editorial headnote; compare prior verification in docs/research/traditions/orthodox.md, F3",
  "sourceURL": "https://ccel.org/ccel/s/schaff/creeds2.xml",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "DocLang lacks ru; preserve the historical Slavono-Russian terminology in the note.",
  "sourceSHA256": "579aa40c4ab8cf44173ccc077c20c694eea18e2a1a6dc72d954382ff6c5dda18"
}
```

### Language: status-stwcf

```json
{
  "work": "status-stwcf",
  "originalLang": "es",
  "scope": "Spanish site-authored current-status statement. This work id is not the historical confession named in its title; do not copy the language of Westminster, Smalcald or the 1895 encyclical onto a site statement.",
  "sourceEdition": "Doctrina repository snapshot, 2026-10-28, src/content/registry/works.ts and src/content/registry/citations.ts",
  "sourceLocator": "work status-stwcf (kind status-line, speaker site) and its Spanish site-authored statement",
  "sourceURL": "src/content/registry/works.ts",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang."
}
```

### Language: status-stsa

```json
{
  "work": "status-stsa",
  "originalLang": "es",
  "scope": "Spanish site-authored current-status statement. This work id is not the historical confession named in its title; do not copy the language of Westminster, Smalcald or the 1895 encyclical onto a site statement.",
  "sourceEdition": "Doctrina repository snapshot, 2026-10-28, src/content/registry/works.ts and src/content/registry/citations.ts",
  "sourceLocator": "work status-stsa (kind status-line, speaker site) and its Spanish site-authored statement",
  "sourceURL": "src/content/registry/works.ts",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang."
}
```

### Language: status-st1895

```json
{
  "work": "status-st1895",
  "originalLang": "es",
  "scope": "Spanish site-authored current-status statement. This work id is not the historical confession named in its title; do not copy the language of Westminster, Smalcald or the 1895 encyclical onto a site statement.",
  "sourceEdition": "Doctrina repository snapshot, 2026-10-28, src/content/registry/works.ts and src/content/registry/citations.ts",
  "sourceLocator": "work status-st1895 (kind status-line, speaker site) and its Spanish site-authored statement",
  "sourceURL": "src/content/registry/works.ts",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang."
}
```

### Language: lg

```json
{
  "work": "lg",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "Vatican II, Lumen gentium, 21 November 1964, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "prooemium, paragraph 1",
  "sourceURL": "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_lt.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "0a828abb4be1de13b600bbc9bbae32832ed5ce4dad940629f57aae54c679fe23"
}
```

### Language: ur

```json
{
  "work": "ur",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "Vatican II, Unitatis redintegratio, 21 November 1964, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "paragraph 1",
  "sourceURL": "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_lt.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "62752308923afb3f549ff0dbbf14f6337dd02552df85b880ba95682dd80e468e"
}
```

### Language: oe

```json
{
  "work": "oe",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "Vatican II, Orientalium ecclesiarum, 21 November 1964, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "prooemium, paragraph 1",
  "sourceURL": "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_orientalium-ecclesiarum_lt.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "63f68901d6346de7cb9a748b5b6bfb029168fac4fb943ea9d447573c4b2b6a1e"
}
```

### Language: sc

```json
{
  "work": "sc",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "Vatican II, Sacrosanctum Concilium, 4 December 1963, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "prooemium, paragraph 1",
  "sourceURL": "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_lt.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "a0e7f540d4e55a04840b799386049542906675b0e505a6959e516ecd34568fb3"
}
```

### Language: cic

```json
{
  "work": "cic",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "Code of Canon Law, 1983, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "Book IV, canon 834 section 1",
  "sourceURL": "https://www.vatican.va/archive/cod-iuris-canonici/latin/documents/cic_liberIV_la.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "853b93dd0ad7417575ef9048ef67061543edc5a5799a3f46530049fb9b4e4b27"
}
```

### Language: fidei-depositum

```json
{
  "work": "fidei-depositum",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "John Paul II, Fidei depositum, 11 October 1992, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "opening body paragraph and dated subscription",
  "sourceURL": "https://www.vatican.va/content/john-paul-ii/la/apost_constitutions/documents/hf_jp-ii_apc_19921011_fidei-depositum.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "5dddcad77b4e961d26be619ece6e2b4d521739923db3aab37bc31177fccfc6b6"
}
```

### Language: mysterium-fidei

```json
{
  "work": "mysterium-fidei",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "Paul VI, Mysterium fidei, 3 September 1965, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "opening body paragraph",
  "sourceURL": "https://www.vatican.va/content/paul-vi/la/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "cfadae811abf7fb29b934d4fffe3f19197183922190395dd9fe448d9ca8afb6f"
}
```

### Language: ede

```json
{
  "work": "ede",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "John Paul II, Ecclesia de Eucharistia, 17 April 2003, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "paragraph 1",
  "sourceURL": "https://www.vatican.va/content/john-paul-ii/la/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "fa01aefcc0c2ec2c4ab7ab3529c4f795f0cecdd9897a301c928b9b8ec3a8e5b2"
}
```

### Language: sacramentum-caritatis

```json
{
  "work": "sacramentum-caritatis",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "Benedict XVI, Sacramentum caritatis, 22 February 2007, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "paragraph 1",
  "sourceURL": "https://www.vatican.va/content/benedict-xvi/la/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "b6b38d181e080a7d1b0beb12d3149efff7c1e628596382c7830977886d0b3362"
}
```

### Language: florence-cantate

```json
{
  "work": "florence-cantate",
  "originalLang": "la",
  "scope": "Latin promulgated/authoritative work text checked in its body, not inferred from a Latin title or an excerpt-language slot. This records the registered authoritative form; it makes no claim about undocumented private drafting languages.",
  "sourceEdition": "Eugenius IV, Cantate Domino, 4 February 1442, authoritative Latin text on official Vatican site, checked 2026-10-28",
  "sourceLocator": "opening and union decree body",
  "sourceURL": "https://www.vatican.va/content/eugenius-iv/la/documents/bulla-cantate-domino-4-febr-1442.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "00d0f57cdce8e12847edd187425eb3ab995f4c646dec3088aae7aad3235b4678"
}
```

### Language: roman-catechism

```json
{
  "work": "roman-catechism",
  "originalLang": "la",
  "scope": "Latin work composed and stylistically revised before its 1566 publication; the source distinguishes subsequent translations into European languages. Zorita’s Spanish text is a translation, not the original language.",
  "sourceEdition": "Philip Schaff, Creeds of Christendom, vol.I, sixth edition, CCEL text (copyright notices 1877,1905,1919)",
  "sourceLocator": "Roman Catechism section: composition, Latin stylistic revision in 1565 and publication September 1566",
  "sourceURL": "https://ccel.org/ccel/s/schaff/creeds1.xml",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "552dc4cf824534224037d359bcaf10c3da0eb7c37f85a8bf7f49d5bd6585c5fa"
}
```

### Language: trent

```json
{
  "work": "trent",
  "originalLang": "la",
  "scope": "Latin authentic decree text and Spanish translation distinguished on the visually checked title page and parallel text pages. Spanish is Ayala’s translation; registered conciliar decrees are Latin.",
  "sourceEdition": "Ignacio López de Ayala, El sacrosanto y ecuménico concilio de Trento, second edition, Madrid: Imprenta Real, 1785",
  "sourceLocator": "title page PDF p.9; bilingual session VII canon XII p.113, session XIII pp.168/173 and session XXII p.322",
  "sourceURL": "https://archive.org/details/elsacrosantoyec00madgoog",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang."
}
```

### Language: wcf

```json
{
  "work": "wcf",
  "originalLang": "en",
  "scope": "English Westminster Assembly work. Reuses the completed dated-edition audit rather than treating a Spanish translation as original. Schaff, Creeds III, Westminster Confession headnote explicitly distinguishes the later Latin translation of the Confession and Catechisms (Cambridge 1656). Schaff III omits the Larger Catechism itself: do not claim its body was read in that volume.",
  "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, Edinburgh: Johnstone, Hunter & Co., 1894; Church of Scotland acts reproduced there",
  "sourceLocator": "Acts approving Confession (27 August 1647) and Larger Catechism (2 July 1648); original English documents; prior exact-text verification in docs/research/traditions/reformed.md section 4A and Scottish acts audit",
  "sourceURL": "https://archive.org/details/confessionoffaith00chur",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang."
}
```

### Language: wlc

```json
{
  "work": "wlc",
  "originalLang": "en",
  "scope": "English Westminster Assembly work. Reuses the completed dated-edition audit rather than treating a Spanish translation as original. Schaff, Creeds III, Westminster Confession headnote explicitly distinguishes the later Latin translation of the Confession and Catechisms (Cambridge 1656). Schaff III omits the Larger Catechism itself: do not claim its body was read in that volume.",
  "sourceEdition": "The Confession of Faith; the Larger and Shorter Catechisms, Edinburgh: Johnstone, Hunter & Co., 1894; Church of Scotland acts reproduced there",
  "sourceLocator": "Acts approving Confession (27 August 1647) and Larger Catechism (2 July 1648); original English documents; prior exact-text verification in docs/research/traditions/reformed.md section 4A and Scottish acts audit",
  "sourceURL": "https://archive.org/details/confessionoffaith00chur",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang."
}
```

### Language: misal

```json
{
  "work": "misal",
  "originalLang": "la",
  "scope": "Latin typical Missale Romanum is the registered work; Spanish liturgical passages are translations. USCCB explicitly distinguishes first Latin publication from subsequent approved vernacular translations. The 2026 Spanish booklet proposed for the MISAL excerpt is an excerpt witness, not a Spanish original Roman Missal.",
  "sourceEdition": "USCCB, Roman Missal, official explanatory page, web snapshot 2026-10-28, identifying Missale Romanum and third typical edition 2002",
  "sourceLocator": "opening description and 2002 typical-edition paragraph",
  "sourceURL": "https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal/roman-missal",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "d715a42949528306b09c391a99a97ca6f84127295a590ae79e4272c4b4b35c4a"
}
```

### Language: bfm-2000

```json
{
  "work": "bfm-2000",
  "originalLang": "en",
  "scope": "English issued convention statement, not the later Spanish translation. The live page incorporates a 2023 amendment to article VI; do not silently call its entire body an unchanged 2000 witness. Also fix the registry metadata trap: bfm-2000.en is the primary-language text, not a translation made for this site.",
  "sourceEdition": "Southern Baptist Convention, Baptist Faith and Message 2000, official English web text; web snapshot 2026-10-28",
  "sourceLocator": "English statement, especially article VII; amendment note distinguishes June 2023 change to article VI",
  "sourceURL": "https://bfm.sbc.net/bfm2000/",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang; existing English edition attribution needs correction.",
  "sourceSHA256": "ee0ed0b5279aec53530a92dc30a92d3ed1735574b8aa61834ceef204d51baf60"
}
```

### Language: pcpcu-2001

```json
{
  "work": "pcpcu-2001",
  "originalLang": "en",
  "scope": "English official issued form identified here in its full body. This is not an inference from the English URL alone and does not assert an undocumented private drafting language. No Latin original body was established by the checked source; a generic .la excerpt slot is insufficient evidence for one.",
  "sourceEdition": "Pontifical Council for Promoting Christian Unity, Guidelines for Admission to the Eucharist between the Chaldean Church and the Assyrian Church of the East, 20 July 2001; official published English text",
  "sourceLocator": "dated heading, introduction and four numbered sections",
  "sourceURL": "https://www.christianunity.va/content/unitacristiani/en/dialoghi/sezione-orientale/chiesa-assira-dell-oriente/altri-documenti/testo-in-inglese.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang; retain scope qualification about issued form.",
  "sourceSHA256": "a3ee99be180131dfc4f6c69a367d488a82c50e4047bd3c0d32c3670d9b0c8f66"
}
```

### Language: lateran-4

```json
{
  "work": "lateran-4",
  "originalLang": "la",
  "scope": "The primary decree body in the dated edition was checked in Latin, separately from Schroeder’s English translation and commentary. This confirms the registered council text language without republishing an unlicensed modern critical edition.",
  "sourceEdition": "H. J. Schroeder, Disciplinary Decrees of the General Councils, St. Louis: B. Herder, 1937, Latin appendix",
  "sourceLocator": "Canones Concilii Lateranensis IV, canon 1, pp.560–561",
  "sourceURL": "https://archive.org/details/DisciplinaryCouncils",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "987f676e6524fbb9eae5b0f7967d937a78c7e6677c8577eb27bef880bb074e68"
}
```

### Language: vienne

```json
{
  "work": "vienne",
  "originalLang": "la",
  "scope": "The primary decree body in the dated edition was checked in Latin, separately from Schroeder’s English translation and commentary. This confirms the registered council text language without republishing an unlicensed modern critical edition.",
  "sourceEdition": "H. J. Schroeder, Disciplinary Decrees of the General Councils, St. Louis: B. Herder, 1937, Latin appendix",
  "sourceLocator": "Canones Concilii Viennensis, canon 1, pp.608–609",
  "sourceURL": "https://archive.org/details/DisciplinaryCouncils",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "987f676e6524fbb9eae5b0f7967d937a78c7e6677c8577eb27bef880bb074e68"
}
```

### Language: florence-exsultate

```json
{
  "work": "florence-exsultate",
  "originalLang": "la",
  "scope": "Latin conciliar decree body checked in the dated Mansi witness; this is not an inference from a Spanish excerpt.",
  "sourceEdition": "G. D. Mansi, Sacrorum conciliorum nova et amplissima collectio, vol.31, Venice, 1798",
  "sourceLocator": "Decretum Eugenii Papae IV, union with Armenians, Exsultate Deo; decree body and sacraments section",
  "sourceURL": "https://archive.org/details/sacrorumconcilio0031jonn",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "bee6c1e73ff15598e33487d8f04f1f3481dbbce1e260af1fea5b672e50ec8549"
}
```

### Language: florence-laetentur

```json
{
  "work": "florence-laetentur",
  "originalLang": "la",
  "scope": "Latin AND Greek authoritative parallel forms of the union decree. The dated Mansi witness prints both bodies; a scalar la is not a claim that Greek is merely a later unofficial translation. Preserve the el form alongside la or retain this explicit qualification.",
  "sourceEdition": "G. D. Mansi, Sacrorum conciliorum nova et amplissima collectio, vol.31, Venice, 1798",
  "sourceLocator": "union with Greeks, Laetentur caeli; parallel Greek and Latin decree body",
  "sourceURL": "https://archive.org/details/sacrorumconcilio0031jonn",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Scalar originalLang cannot represent both authoritative la and el forms.",
  "sourceSHA256": "bee6c1e73ff15598e33487d8f04f1f3481dbbce1e260af1fea5b672e50ec8549"
}
```

### Language: enc-1895

```json
{
  "work": "enc-1895",
  "originalLang": "el",
  "scope": "The edition expressly identifies Greek as original, separately from Metallinos’s English translation. The 1895 document and its 1896 bilingual edition have distinct dates.",
  "sourceEdition": "Answer of the Great Church of Constantinople to the Papal Encyclical on Union: in the Original Greek with an English Translation, edited by Eustathius Metallinos, Manchester: Orthodox Greek Community, 1896",
  "sourceLocator": "bilingual title page; original Greek body and distinct English translation",
  "sourceURL": "https://archive.org/details/answerofgreatchu0000eust",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "6c0767a4da23ad39348f53fa1792bec3c6a8e3bd3425a5f470f7453701206ec2"
}
```

### Language: ogmr

```json
{
  "work": "ogmr",
  "originalLang": "la",
  "scope": "Latin Institutio Generalis belongs to the Latin typical Missale Romanum. The confirmation explicitly calls the English text a translation; USCCB source recorded under misal identifies Latin first publication. The Spanish acronym OGMR does not make the registered work a Spanish original. A guessed _lt.html URL returned no source and was not cited as evidence.",
  "sourceEdition": "Congregation for Divine Worship, decree confirming English GIRM, 17 March 2003, official Vatican text; Institutio Generalis from Missale Romanum third typical edition (2002)",
  "sourceLocator": "opening confirmation decree and USCCB publication decree; compare USCCB Roman Missal page explicitly identifying Latin typical publication",
  "sourceURL": "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_en.html",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "ff4037f174112ff21f95172d5559e828da02ecab852e45e9bd8da50a5ab16cfd"
}
```

### Language: mogila

```json
{
  "work": "mogila",
  "originalLang": "el",
  "scope": "Greek approved recension, matching the registry work dated 1643. The earlier 1640 Latin draft and Syrigos’s revision are separate stages, explicitly distinguished by the completed Orthodox dossier audit. Schaff’s old footnote says initial drafting language was uncertain; this record does not use that footnote to settle the 1640 draft. It identifies the endorsed 1643 Greek text, not every form under Mogila’s name.",
  "sourceEdition": "Philip Schaff, Creeds of Christendom, vol.I, sixth edition (copyright notices 1877,1905,1919), section 16; corroborating completed Overbeck edition audit in docs/research/traditions/orthodox.md, verification F2",
  "sourceLocator": "section 16, Orthodox Confession of Mogilas: Parthenius’s letter endorsing the Greek text dated 11 March 1643; first Greek print Amsterdam 1662",
  "sourceURL": "https://ccel.org/ccel/s/schaff/creeds1.xml",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang; retain recension scope, not an unqualified claim that the earlier draft was Greek.",
  "sourceSHA256": "552dc4cf824534224037d359bcaf10c3da0eb7c37f85a8bf7f49d5bd6585c5fa"
}
```

### Language: oros-1755

```json
{
  "work": "oros-1755",
  "originalLang": "el",
  "scope": "Greek decree body was read separately from the modern editor’s introduction. Only language identification is taken here; the editor’s confessional judgments and claim about continuing binding status are not adopted. The supplied PDF names its dated 1986 journal source and earlier Greek edition; no full modern copyrighted translation is imported. Its Mansi 38 reference remains a bibliographic reference, not a claim that this run read Mansi 38.",
  "sourceEdition": "Orthodoxos Enstasis kai Martyria, no.3, April–June 1986, pp.81–83, Greek Oros reprinted from G. D. Metallinos, Homologo hen Baptisma (Athens,1983), pp.79–81; publisher PDF on imoph.org",
  "sourceLocator": "publisher PDF pp.2–5, To keimenon tou Horou; source footnote on PDF p.5; Greek body opening visually checked p.2",
  "sourceURL": "https://www.imoph.org/Theology_el/3b2a003LatinPs.pdf#page=2",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "1643d671795c039e50f38ce3328debcc49cab9f3c7fb97aeab9c6d0f2eab1e7c"
}
```

### Language: ag-sft

```json
{
  "work": "ag-sft",
  "originalLang": "en",
  "scope": "English 1916 statement, distinguished from subsequent revisions and Spanish translation. The publisher’s historical facsimile page was checked visually, including the October 2–7,1916 approval heading and English body. It is a graphic collage, not a claim that the entire original statement is recoverable from that page alone. The current AG endpoint failed direct curl; this primary denominational historical publication supplies evidence instead.",
  "sourceEdition": "Glenn W. Gohr, The Historical Development of the Statement of Fundamental Truths, Assemblies of God Heritage, vol.32 (2012), pp.61ff.; historical English statement facsimiles on preceding illustrated p.60",
  "sourceLocator": "PDF p.62 (illustrated printed p.60), 1916 heading and English statement body; PDF p.63 begins Gohr article on adoption",
  "sourceURL": "https://ifphc.org/-/media/FPHC/Heritage-Magazine/2012.pdf#page=62",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: identified primary published/authoritative text, with scope qualification",
  "modelGate": "Fits existing DocLang.",
  "sourceSHA256": "ca6df47a3979a2cba776c3beb6f6873681e27eb7a86f25f0bdbc2c3a16aec582"
}
```

## Completion audit

Checked 2026-10-28 against the current registry: all 25 citations with empty excerpts plus the two requested repairs are represented exactly once; all 43 work ids are represented exactly once. Every excerpt provides Spanish text, edition id, page or official numbered locator, source URL, edition description, check date and verification tag. Every language record provides source edition, locator and scope. `originalLang` counts: Latin 21; German 5; English 5; Greek 4; Italian 3; Spanish 3; French 1; Russian 1. These scalar counts retain the explicit co-original and recension qualifications in their individual records.

This is a research handoff, not a claim that the unchanged registry already implements these results or meets the Holy See quotation budget. The full project verification passed earlier in this acquisition session (Node 24.22.1; scratch log fathers-corpus/verify-2026-10-28.log). Subsequent changes here affect research Markdown only; the final checks cover formatting, record coverage and required provenance fields.
