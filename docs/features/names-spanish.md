# Spanish names of the 24 English-only works, and the New Hampshire year

Pedro, 2026-11-09: «Yes, research the names used in Spanish (do not invent: look at how they are used).» Method: for each work, find how Spanish editions, series and catalogues name it; take the name from a verifiable page; never translate a title myself. Confidence: high = two independent sources agree, medium = one, none = not found (the English name stays). Done 2026-11-09 by a Sonnet session in the clone `doctrina-names2`; every source below was opened (fetched) unless marked «search only».

Result: 10 applied (2 high, 8 medium), 14 left in English (none). Applied names are in `data/site/names.json` (the only place; `onlyIn: "en"` removed from those 10). No seed copy needed changes: none of the 24 is a registry work, a Father page entity, a Father writing in `fathers.ts` or a scripted AI quote. `npm run lint` (the names check) passes.

## The 24 works

| Work id | Name before | Spanish name now | Sources and edition | Other forms seen | Confidence | Applied |
|---|---|---|---|---|---|---|
| `aristides-apology` | Apology | Apología | es.catholic.net/op/articulos/7359 «La Apología de Arístides» (cites BAC 116); catalogue record «Padres apologistas griegos (s. II)», ed. Daniel Ruiz Bueno, BAC 116, Madrid 1964 (colectivo.uloyola.es/Record/T247871, search only: the page did not load) | none | medium | yes |
| `athenagoras-plea-christians` | A Plea for the Christians | Súplica en favor de los cristianos | es.catholic.net/op/articulos/7362 (BAC 116); es.wikipedia.org/wiki/Atenágoras_de_Atenas (cites Ruiz Bueno, *Padres apologistas griegos*, BAC) | «Legación en favor de los cristianos» (catholic.net text heading), «Embajada por los cristianos» (Wikipedia), «Súplica a favor de los cristianos» | high | yes |
| `athenagoras-resurrection-dead` | On the Resurrection of the Dead (Traditionally Attributed) | Sobre la resurrección de los muertos (atribución tradicional) | same two pages | «Tratado sobre la Resurrección», «Sobre la resurrección» | high (title); the parenthesis is the site's own qualifier, as in «(atribución debatida)» | yes |
| `chrysostom-homilies-colossians` | Homilies on Colossians | Homilías sobre la Carta a los Colosenses | Juan Crisóstomo, *Homilías sobre la Carta a los Colosenses*, intro., trad. y notas de Marcelo Merino Rodríguez, Madrid: Ciudad Nueva, 2023, ISBN 978-84-9715-552-6, in the review in *Scripta Theologica* 55 (2023): revistas.unav.edu/index.php/scripta-theologica/article/download/44937/37396/138076 (search only) | none | medium | yes |
| `clement-alexandria-prophetic-eclogues` | Prophetic Eclogues — sections 1–63 | Églogas proféticas — secciones 1–63 | Clemente de Alejandría, *Extractos de Teodoto – Églogas proféticas – ¿Qué rico se salva? – Fragmentos*, Ciudad Nueva, «Fuentes Patrísticas», 2010, ISBN 9788497152174: libreriacoletti.it/libros-espanol/estractos-de-teodoto---eclogas-profeticas--que-rico-se-salva-fragmentos/9788497152174 | none | medium | yes |
| `gregory-nazianzus-selected-orations` | Selected Orations | Discursos | Gregorio Nacianceno, *Discursos I-XV*, trad. Marcelo Merino Rodríguez, Ciudad Nueva, «Fuentes Patrísticas» 28, 2015: libreriacoletti.it/libros-espanol/discursos-i-xv/9788497153324; also *Los cinco discursos teológicos*, Ciudad Nueva, «Biblioteca de Patrística» 30, 1995 (search only) | none | medium | yes |
| `origen-commentary-john` | Commentary on John — ANF partial translation | Comentario al Evangelio de Juan — traducción parcial de ANF | Orígenes, *Comentario al Evangelio de Juan*, 2 vols., trad. Patricia A. Ciner, Ciudad Nueva, «Biblioteca de Patrística» 115 and 116, 2020: casadellibro.com.co/libro-comentario-al-evangelio-de-juan1/9788497154598/11544847; reviews in *Patristica et Mediaevalia* and *Sapientia* (search only) | none | medium | yes |
| `tatian-address-greeks` | Address to the Greeks | Discurso contra los griegos | Article in *Daimon* 83 (2021), revistas.um.es/daimon/article/view/372371: title and its bibliography entry for Ruiz Bueno's BAC edition read «Discurso contra los Griegos» | «Discurso a los griegos» (biografiasyvidas.com/biografia/t/taciano.htm); Latin *Oratio ad Graecos* | medium | yes |
| `tatian-diatessaron-arabic` | Diatessaron — Arabic version | Diatessaron — versión árabe | es.wikipedia.org/wiki/Diatessaron: the Spanish title is «Diatessaron» (the name is not translated); «versión árabe» is only the site's qualifier for the Arabic text, kept from the English | none | medium | yes |
| `tertullian-adversus-iudaeos` | An Answer to the Jews | La respuesta a los judíos | tertullian.org/works/adversus_judaeos.htm lists the Spanish edition: Alfonso Ropero (comp.), *Lo mejor de Tertuliano*, Terrassa: CLIE, 2001, «Grandes autores de la fe, Patrística» 4, section «La respuesta a los judíos» | «Contra los judíos» is not confirmed by any Spanish source I opened; the work's authenticity is doubtful (tertullian.org) | medium | yes |
| `chrysostom-homilies-1-thessalonians` | Homilies on First Thessalonians | (unchanged) | no Spanish edition found | | none | no |
| `chrysostom-homilies-1-timothy` | Homilies on First Timothy | (unchanged) | no Spanish edition found (only an Italian Città Nuova one) | | none | no |
| `chrysostom-homilies-2-corinthians` | Homilies on Second Corinthians | (unchanged) | none found | | none | no |
| `chrysostom-homilies-2-thessalonians` | Homilies on Second Thessalonians | (unchanged) | none found | | none | no |
| `chrysostom-homilies-2-timothy` | Homilies on Second Timothy | (unchanged) | none found | | none | no |
| `chrysostom-homilies-ephesians` | Homilies on Ephesians | (unchanged) | only Homily XX in Ciudad Nueva, «Biblioteca de Patrística» 39 (with «Sobre la vanagloria…», search only), a selection with no title for the whole series | | none | no |
| `chrysostom-homilies-philemon` | Homilies on Philemon | (unchanged) | none found | | none | no |
| `chrysostom-homilies-philippians` | Homilies on Philippians | (unchanged) | none found | | none | no |
| `chrysostom-homilies-titus` | Homilies on Titus | (unchanged) | none found | | none | no |
| `gregory-great-selected-letters` | Selected Epistles | (unchanged) | no Spanish edition of the letters found (the *Regla pastoral*, Ciudad Nueva «Biblioteca de Patrística» 22, 1993, is a different work) | | none | no |
| `gregory-nazianzus-selected-letters` | Selected Letters | (unchanged) | no Spanish edition of the letters found | | none | no |
| `leo-great-selected-letters` | Selected Letters | (unchanged) | no Spanish edition found (the sermons exist in BAC 1969, trad. Bonaño; not the letters) | | none | no |
| `origen-commentary-matthew` | Commentary on Matthew — ANF partial translation | (unchanged) | no Spanish edition found | | none | no |
| `theodoret-selected-correspondence` | Selected Letters and Correspondence | (unchanged) | no Spanish edition of the letters found | | none | no |

## What stays flagged

- The 9 Chrysostom homilies, 4 letters collections and Origen on Matthew: the repo already writes Spanish names for the other Chrysostom Pauline homilies by pattern («Homilías sobre Romanos», «Homilías sobre 1 Corintios»); the sourced Colosenses form («Homilías sobre la Carta a los Colosenses») does not follow that pattern. Pedro decides: keep the sourced form, or align all by one pattern.
- «Selected»: the English names are NPNF/ANF selections. The sourced Spanish forms drop it (as «Sermones» and «Regla pastoral» already do for Leo and Gregory), because Spanish editions are not selections.
- The qualifiers «traducción parcial de ANF», «versión árabe», «(atribución tradicional)», «secciones 1–63» are the English qualifiers carried over, not titles; their wording is the agent's.
- «La respuesta a los judíos» is kept exactly as printed in the CLIE contents (with the article).
- The search tool returned summaries; the titles above were checked by opening the pages listed. Marked «search only» means the page itself was not opened.

## New Hampshire: which year

**What the site's text is.** The site quotes the 1853 text: the English edition it records is W. J. McGlothlin, *Baptist Confessions of Faith* (Philadelphia: American Baptist Publication Society, 1911), p. 306, «Confesión de New Hampshire de 1853, con sus adiciones entre corchetes» (`mcglothlin.en`, `src/content/registry/editions.ts`); the Fuentes record `new-hampshire-1833` carries `date: "1853"`, `year: 1853` and a gracegems.org transcription of the 1853 text (`data/site/sources.extra.json`); every doctrine page writes «Confesión de New Hampshire (1853)» (`basis: ...`); the registry title and the dossier script say 1853 (`src/content/registry/works.ts`, `data/scripts/dossier-works.mjs`). The `1833` appears only in the catalogue id `new-hampshire-1833`, which no reader sees.

**What the confession is (sources opened).**
- Drafted 1830–1833: the New Hampshire Baptist Convention appointed a committee in 1830; the text «was finally presented in 1833 by the board of the convention and recommended to the churches» (Tom Nettles, essay at effectualgrace.com/?p=21701); written by John Newton Brown (Schaff, *Creeds of Christendom* III, ccel.org/ccel/schaff/creeds3.v.ii.ii.html: «about 1833», heading «A.D. 1833»).
- Brown published it in *The Baptist Church Manual* (American Baptist Publication Society, Philadelphia) in 1853 «and added two articles, "Repentance and Faith" and "Sanctification"» (same Nettles essay). Schaff prints the text from that manual and does not mention the revision (the Church Manual he cites is the same ABPS publication; the exact edition he used I could not confirm).
- Not confirmed: the exact adoption date by the Convention (the sources say recommended to the churches in 1833).

**Recommendation.** Keep «(1853)»: it is the year of the text the site quotes. Do not write «1833» (that is the first, shorter form). «1833, rev. 1853» would be accurate but longer than every other title; the site's own prose already says «confesión histórica revisada». If Pedro wants the history visible, say it in the work's description, not in the name. The catalogue id `new-hampshire-1833` could become `new-hampshire`, but ids are invisible: not worth a change. Nothing changed in the repo.

**Question for Pedro:** keep «(1853)» as it is (recommended), or show «1833, rev. 1853»?
