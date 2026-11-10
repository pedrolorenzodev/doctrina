# One name per work, Father and source (names coherence)

Pedro, 2026-11-09: the same item had different names on different pages (the Shepherd of Hermas was «El Pastor de Hermas» on Padres and «El Pastor» on Fuentes). Agent calls below are marked «to confirm».

## Audit (read-only pass)

Name stores found, all keyed by different ids: `registry/works.ts` (Spanish title + a `short` nobody read), Fuentes catalogue (`data/raw/v1.json`, `data/site/sources.extra.json`: bilingual titles), `source-labels.ts` (`englishTitles`, English for registry works), `father-work-links.ts` (names of 119 Father works), `history/fathers.ts` (Father entities, key writings), `history.json` (councils), `reader-ai/quotes.ts` (scripted AI answers), 150 corpus works (English raw title).

51 items had more than one name (Spanish forms, with where each came from; English differs in the same items):

| Item | Names found | Canonical now |
|---|---|---|
| `small-catechism` | Catecismo Menor (Lutero) (doctrine pages / citation window); Catecismo Menor (Fuentes catalogue) | Catecismo Menor (Lutero) |
| `large-catechism` | Catecismo Mayor (Lutero) (doctrine pages / citation window); Catecismo Mayor (Fuentes catalogue) | Catecismo Mayor (Lutero) |
| `wcf` | Confesión de Westminster (doctrine pages / citation window); Confesión de Fe de Westminster (Fuentes catalogue) | Confesión de Westminster |
| `philaret` | Filareto, Catecismo extenso (doctrine pages / citation window); Catecismo extenso de la Iglesia ortodoxa, católica y oriental (Fuentes catalogue) | Filareto, Catecismo extenso de la Iglesia ortodoxa, católica y oriental |
| `dositheus` | Dositeo, Confesión (Jerusalén, 1672) (doctrine pages / citation window); Confesión de Dositeo (Sínodo de Jerusalén) (Fuentes catalogue) | Confesión de Dositeo (Sínodo de Jerusalén, 1672) |
| `mogila` | Pedro Mogila, Confesión ortodoxa (doctrine pages / citation window); Confesión ortodoxa de la Iglesia católica y apostólica oriental (Fuentes catalogue) | Pedro Mogila, Confesión ortodoxa de la Iglesia católica y apostólica oriental |
| `chalcedon` | Concilio de Calcedonia (doctrine pages / citation window); Definición de fe del Concilio de Calcedonia (Fuentes catalogue) | Concilio de Calcedonia, Definición de fe |
| `new-hampshire` | Confesión de New Hampshire (1853) (doctrine pages / citation window); Confesión de Fe de New Hampshire (Fuentes catalogue) | Confesión de Fe de New Hampshire (1853) |
| `bfm-2000` | Fe y Mensaje Bautistas (2000) (doctrine pages / citation window); Fe y Mensaje Bautistas (Fuentes catalogue) | Fe y Mensaje Bautistas (2000) |
| `ede` | Juan Pablo II, Ecclesia de Eucharistia (doctrine pages / citation window); Ecclesia de Eucharistia (encíclica) (Fuentes catalogue) | Juan Pablo II, Ecclesia de Eucharistia |
| `florence-cantate` | Concilio de Florencia, Cantate Domino (doctrine pages / citation window); Concilio de Florencia, Bula de unión con los coptos (Cantate Domino) (Fuentes catalogue) | Concilio de Florencia, Cantate Domino |
| `ignatius-smyrnaeans` | Carta a los Esmirniotas (Fuentes catalogue); A los Esmirniotas (Fuentes, tree and Father works list) | Carta a los Esmirniotas |
| `didache` | Didaché (Doctrina de los Doce Apóstoles) (Fuentes catalogue); Didajé (Enseñanza de los Doce Apóstoles) (Father page title); Didajé (Padres page, writings list); Didajé (Fuentes, tree and Father works list) | Didajé (Enseñanza de los Doce Apóstoles) |
| `irenaeus-against-heresies` | Contra las herejías (Fuentes catalogue); Contra las herejías (Adversus haereses) (Padres page, writings list); Contra las herejías (Fuentes, tree and Father works list) | Contra las herejías (Adversus haereses) |
| `ambrose-de-mysteriis` | Sobre los misterios (Fuentes catalogue); Sobre los misterios / Sobre los sacramentos (Padres page, writings list); Sobre los misterios (Fuentes, tree and Father works list) | Sobre los misterios / Sobre los sacramentos |
| `theodoret-eranistes` | Eranistes (Diálogos) (Fuentes catalogue); Eranistes (Padres page, writings list); Eranistes (Dialogues and Syllogisms) (Fuentes, tree and Father works list) | Eranistes (Diálogos) |
| `chrysostom-homilies-john` | Homilías sobre el Evangelio de Juan (Fuentes catalogue); Homilies on the Gospel of John (Fuentes, tree and Father works list) | Homilías sobre el Evangelio de Juan |
| `cyprian-de-lapsis` | Sobre los caídos (Fuentes catalogue); Sobre los caídos (De lapsis) (Padres page, writings list); Sobre los caídos (Fuentes, tree and Father works list) | Sobre los caídos (De lapsis) |
| `athanasius-de-incarnatione` | Sobre la Encarnación del Verbo (Fuentes catalogue); Sobre la Encarnación del Verbo (Padres page, writings list); Sobre la encarnación del Verbo (Fuentes, tree and Father works list) | Sobre la Encarnación del Verbo |
| `1-clement` | Primera Carta de Clemente a los Corintios (Padres page, writings list); 1 Clemente (Fuentes, tree and Father works list) | Primera Carta de Clemente a los Corintios (1 Clemente) |
| `ignatius-ephesians` | Siete cartas (a los Efesios, Magnesios, Tralianos, Romanos, Filadelfios, Esmirniotas y a Policarpo) (Padres page, writings list); A los Efesios (Fuentes, tree and Father works list) | Carta a los Efesios |
| `papias-fragments` | Exposición de los oráculos del Señor (fragmentos) (Padres page, writings list); Fragmentos (Fuentes, tree and Father works list) | Exposición de los oráculos del Señor (fragmentos) |
| `barnabas` | Epístola de Bernabé (Father page title); Epístola de Bernabé (Padres page, writings list); Carta de Bernabé (Fuentes, tree and Father works list) | Epístola de Bernabé |
| `shepherd-hermas` | El Pastor de Hermas (Father page title); El Pastor (Visiones, Mandatos y Semejanzas) (Padres page, writings list); El Pastor (Fuentes, tree and Father works list) | El Pastor de Hermas |
| `polycarp-philippians` | Carta a los Filipenses (Padres page, writings list); A los Filipenses (Fuentes, tree and Father works list) | Carta a los Filipenses |
| `theophilus-to-autolycus` | A Autólico (Padres page, writings list); To Autolycus (Fuentes, tree and Father works list) | A Autólico |
| `irenaeus-demonstration` | Demostración de la predicación apostólica (Padres page, writings list); Demostración de la predicación apostólica (Fuentes, tree and Father works list) | Demostración de la predicación apostólica |
| `clement-alexandria-protrepticus` | Protréptico (Exhortación a los griegos) (Padres page, writings list); Exhortación a los paganos (Fuentes, tree and Father works list) | Protréptico (Exhortación a los griegos) |
| `clement-alexandria-paedagogus` | El Pedagogo (Padres page, writings list); El Pedagogo (Fuentes, tree and Father works list) | El Pedagogo |
| `clement-alexandria-stromata` | Stromata (Misceláneas) (Padres page, writings list); Stromata (Fuentes, tree and Father works list) | Stromata (Misceláneas) |
| `tertullian-apologeticus` | Apologético (Padres page, writings list); Apologético (Fuentes, tree and Father works list) | Apologético |
| `tertullian-de-praescriptione` | Sobre la prescripción de los herejes (Padres page, writings list); Prescripción contra los herejes (Fuentes, tree and Father works list) | Sobre la prescripción de los herejes |
| `tertullian-against-praxeas` | Contra Práxeas (Padres page, writings list); Contra Praxeas (Fuentes, tree and Father works list) | Contra Práxeas |
| `hippolytus-refutation` | Refutación de todas las herejías (atribución debatida) (Padres page, writings list); Refutación de todas las herejías (Fuentes, tree and Father works list) | Refutación de todas las herejías (atribución debatida) |
| `origen-de-principiis` | Sobre los principios (De principiis) (Padres page, writings list); Sobre los principios (Fuentes, tree and Father works list) | Sobre los principios (De principiis) |
| `cyprian-de-unitate` | Sobre la unidad de la Iglesia católica (Padres page, writings list); Sobre la unidad de la Iglesia (Fuentes, tree and Father works list) | Sobre la unidad de la Iglesia católica |
| `cyprian-correspondence` | Cartas (Padres page, writings list); Cartas (Fuentes, tree and Father works list) | Cartas |
| `eusebius-church-history` | Historia eclesiástica (Padres page, writings list); Historia eclesiástica (Fuentes, tree and Father works list) | Historia eclesiástica |
| `athanasius-against-arians` | Discursos contra los arrianos (Padres page, writings list); Discursos contra los arrianos (Fuentes, tree and Father works list) | Discursos contra los arrianos |
| `cyril-jerusalem-catechetical-lectures` | Catequesis prebautismales (Padres page, writings list); Catequesis (Fuentes, tree and Father works list) | Catequesis prebautismales |
| `gregory-nyssa-great-catechism` | Gran discurso catequético (Padres page, writings list); Gran catequesis (Fuentes, tree and Father works list) | Gran discurso catequético |
| `ambrose-de-fide` | Sobre la fe (Padres page, writings list); Exposición de la fe cristiana (Fuentes, tree and Father works list) | Exposición de la fe cristiana (De fide) |
| `ambrose-de-officiis` | Sobre los deberes de los ministros (Padres page, writings list); Sobre los deberes del clero (Fuentes, tree and Father works list) | Sobre los deberes de los ministros |
| `chrysostom-homilies-romans` | Homilías sobre las cartas de Pablo (Padres page, writings list); Homilías sobre Romanos (Fuentes, tree and Father works list) | Homilías sobre Romanos |
| `cyril-alexandria-commentary-john` | Comentario al Evangelio de Juan (Padres page, writings list); Commentary on John (Pusey Volume I) (Fuentes, tree and Father works list) | Comentario al Evangelio de Juan |
| `theodoret-church-history` | Historia eclesiástica (Padres page, writings list); Ecclesiastical History (Fuentes, tree and Father works list) | Historia eclesiástica |
| `leo-great-selected-sermons` | Sermones (Padres page, writings list); Selected Sermons (Fuentes, tree and Father works list) | Sermones |
| `gregory-great-pastoral-rule` | Regla pastoral (Padres page, writings list); The Book of Pastoral Rule (Fuentes, tree and Father works list) | Regla pastoral |
| `lateran-4` | IV Concilio de Letrán (registry); Cuarto Concilio de Letrán (council page) | Cuarto Concilio de Letrán |
| `trullo` | Concilio Quinisexto (Trulo) (registry); Concilio Quinisexto o de Trullo (council page) | Concilio Quinisexto o de Trullo |
| `philaret` (scripted AI quote) | Filareto de Moscú, Catecismo extenso | Filareto, Catecismo extenso de la Iglesia ortodoxa, católica y oriental |

Also found: 24 corpus works exist in English only (no Spanish name anywhere in the repo), the citation window showed Spanish work names on the English site (no English name existed for registry works), and 10 Father works had a short form identical to their full name in one language.

## Model chosen

- **One canonical record per item**, `data/site/names.json`: `id -> { name: {es, en}, short?: {es?, en?}, onlyIn?, entity? }`. Read through `src/content/item-names.ts` (`itemName`, `itemShortName`). Ids are the ones the rest of the code already uses (registry work ids, corpus work ids, catalogue ids resolved through the existing aliases).
- Every reader of a work or source name now goes through it: Fuentes rows, the sidebar tree children, the Father works list, the citation window (`who` and the copied reference), the objector texts, the work page heading and locators, AI search results.
- A `short` exists only on Father works (their author is always beside it: tree under the Father, Father's works list) and is never the title shown on Fuentes or in a citation. «El Pastor» alone is gone: Hermas has no short form.
- `onlyIn: "en"` marks the 24 corpus works whose only name is English; `onlyIn: "es"` the 14 registry status lines (Spanish only today).
- `entity` ties a record to a council page in `history.json`, so the document and the council page cannot drift.
- Discarded: (1) a new «registry of everything» merging history, registry and corpus ids (a rewrite of three generated pipelines for no gain; ids stay as they are); (2) deriving the registry and `fathers.ts` strings at build time (both are generated or hand-curated TS data: they stay as seeds and the check forces them to equal the canonical record); (3) leaving each page its own string and only linting the output (that is what failed); (4) deleting the registry `short` field (dead data that nothing reads, but the converter emits it: separate cleanup).

## The check (`tools/check-names.mjs`, in `npm run lint`)

Fails when: an item (registry work, corpus work, catalogue source) has no record, or a record has no item; a name is empty in a language; two items share a name (per author for Father works; status lines excluded); a short exists on a non-Father work, equals its full name, or equals another item's full name; the registry title, a Father page name, a writing title in `fathers.ts`, a council page name or a scripted AI quote name differs from the canonical record; a canonical name (12+ characters) is written as a string literal in `src` outside the seed files. 11 fixtures prove each rule fails.

## Limits (honest)

- Names written inside prose (doctrine page text, locators such as «Catequesis 22, 4») are not checked: only whole-string literals.
- The registry titles, `fathers.ts` and `dossier-works.mjs` still hold a copy of the Spanish name as seed; the check keeps them equal. A converter rerun that writes another title fails lint until names.json is updated.
- `data/raw/v1.json` and `sources.extra.json` titles are no longer displayed; they stay as raw import data.

## Agent calls to confirm

- Hermas: «El Pastor de Hermas» everywhere; the writing row lost «(Visiones, Mandatos y Semejanzas)».
- Spanish and English forms written by the agent by pattern (not found verbatim in the repo): Small/Large Catechism (Luther) in English, «Pedro Mogila / Peter Mogila», the long Philaret title in both languages, «Carta a los Efesios/Magnesios/Tralianos/Romanos/Filadelfios/Policarpo» (only Smyrnaeans existed), «Concilio de Calcedonia, Definición de fe».
- Florence Cantate Domino: pattern-consistent short form kept; the descriptive «Bula de unión con los coptos» is dropped from the name.
- Ambrose De fide: «Exposición de la fe cristiana (De fide)» joins both existing forms.
- Epistles: Ignatius «Epistle to the …» but Polycarp «Letter to the Philippians» (both were already so).

## Questions for Pedro

1. 24 corpus works have only an English name (Chrysostom's homilies on Pauline letters, Origen's commentaries, Tatian, etc.). Do you want Spanish names? (the repo has none; I did not invent them).
2. New Hampshire: the catalogue id says 1833, the registry title 1853. I kept «(1853)». Which one does the site cite?
3. Generic Father works repeat across Fathers («Sobre el Espíritu Santo» by Basil, Gregory of Nyssa and Ambrose; «Cartas»). Fuentes shows the author in its own column. Is that enough, or do you want the author inside the name?
4. Fathers' key-writing titles keep parentheses like «(Adversus haereses)» or «(atribución debatida)» because the Padres page showed them; they are now part of the name on Fuentes as well. Fine?
