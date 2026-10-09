_Report from the overnight source research of 2026-10-09 (agent-written; synthesis in `../sources.md`). Paths like `samples/…` refer to `~/Desktop/dev/doctrina-research-2026-10-09/samples/`, outside the repo._

# legal-gaps — round 3: other jurisdictions, FNA levy, Vatican terms, lexicon licences, Catholic Spanish Bibles

Agent: legal-gaps · 2026-10-09 · Research, not legal advice. Primary legal texts are cited where fetched; anything else is marked.
Samples: samples/legal-gaps/

## 1. Scope and method
- **Five tasks:**
  1. Copyright terms for 17 Spanish-speaking jurisdictions plus Puerto Rico;
  2. the Argentine FNA levy;
  3. Vatican/Holy See terms and US URAA;
  4. Latin, Syriac and Coptic lexicon licences;
  5. Catholic Spanish Bible rights.
- **Primary sources:**
  - WIPO Lex PDFs (national laws, the 1960 Vatican law, Holy See treaty data);
  - IMPO (Uruguay), Infoleg and the **Boletín Oficial advanced search** (Argentina, driven with Playwright);
  - Normattiva point-in-time view (Italian L. 633/1941 as of 12‑01‑1960; DLL 440/1945);
  - the FNA's own pages and consolidated *Cuerpo Legal*;
  - GitHub, Hugging Face and project licence files;
  - archive.org metadata;
  - NYPL CCE renewal TSVs;
  - YouVersion and API.Bible catalogues.
- WebSearch quota was exhausted. Discovery was through DuckDuckGo pages rendered in the shared Chrome. Snippets are marked as such.
- Samples: `samples/legal-gaps/` (law_*.txt, mx_lfda.txt, bo_*.txt, fna662.txt, fna15850.txt, va_1960.txt, it633_*.txt, lex/*, cce/*, yv_*.txt).

## 2. Task 1 — Copyright terms in the rest of the Spanish-speaking audience

**Method.** Each national copyright law was downloaded as the Spanish PDF from WIPO Lex (wipolex-res.wipo.int; detail pages `https://www.wipo.int/wipolex/en/legislation/details/<id>`), converted with pdftotext and grepped. The files are in `samples/legal-gaps/law_<cc>.txt` and `mx_lfda.txt`. Uruguay's 2019 extension came from IMPO, the official consolidated database (`uy19857.txt`, `uy9739.txt`). The texts are primary, but some WIPO copies are not the latest consolidation; the date of each is noted. Historical terms (pre-current law) are **not** from primary texts unless stated.

### 2.1 Table (all "PD in 2026" assume the term runs to 31 Dec of the last year, the usual rule)

| Country | Current general term (article, source) | Anonymous / corporate | Rule of the shorter term for foreign works? | Quotation exception | Paying PD levy? | Translator PD in 2026 if died… |
|---|---|---|---|---|---|---|
| **Mexico** | Life + **100** (LFDA art. 29.I, as amended by DOF 23‑07‑2003; WIPO id 23966, consolidated to DOF 14‑05‑2026, `mx_lfda.txt`) | 100 years from disclosure (art. 29.II). **Anonymous works: free to use while the author is unknown** (art. 153: "Es libre el uso de la obra de un autor anónimo mientras el mismo no se dé a conocer") | **None in the statute.** Art. 7 gives foreigners national treatment "en los términos de la presente Ley y de los tratados". Wikimedia Commons lists "RST: No" (secondary). ⚖ Whether Berne art. 7(8) applies directly through Constitution art. 133 is a lawyer question. | Art. 148.I: "Cita de textos, siempre que la cantidad tomada no pueda considerarse como una reproducción simulada y sustancial"; art. 148.III: parts of a work for criticism and research | No | **≤ 1951** (see 2.2). Died 1952 or later: life + 100 |
| **Colombia** | Life + **80** (Ley 23/1982 art. 21; art. 11 repeats the 1886 Constitution formula "vida del autor y ochenta años más"; WIPO id 21317, amended to Ley 1915/2018, `law_co.txt`) | Anonymous: 80 years from publication (art. 25). Legal-person owner: 70 years from publication (art. 27 as amended by Ley 1915/2018) | Reciprocity, not an explicit shorter-term rule (art. 11: foreigners abroad are protected "en la medida que las convenciones internacionales… o … reciprocidad efectiva") | Art. 31: quoting "los pasajes necesarios" if not "tantos y seguidos" as to be a "reproducción simulada y sustancial"; courts may set compensation when quotations are "la parte principal de la nueva obra" | No | **≤ 1945** (same as Spain) |
| **Chile** | Life + **70** (Ley 17.336 art. 10, text from Ley 20.435 of 2010; WIPO id 18880, amended to 2017, `law_cl.txt`) | Employer that is a legal person: 70 years from publication; pseudonymous: 70 from publication | Not found in the text | Art. 71 B: "fragmentos breves… a título de cita o con fines de crítica, ilustración, enseñanza e investigación" | No | ≤ 1955 |
| **Peru** | Life + **70** "**cualquiera que sea el país de origen de la obra**" (DLeg 822 art. 52; WIPO id 23888, amended to DLeg 1724, `law_pe.txt`) | Anonymous/pseudonymous 70 from disclosure (art. 53); collective works 70 from publication (art. 54) | **Expressly excluded** by art. 52 | Art. 44: quotations "conforme a los usos honrados y en la medida justificada por el fin que se persiga" | No | ≤ 1955 |
| **Venezuela** | Life + **60** (Ley sobre el Derecho de Autor 1993, art. 25 as reformed; WIPO id 3989, scanned text, OCR poor, `law_ve.txt`) | Anonymous/pseudonymous 60 from publication (art. 27) | Not checked (OCR) | Not extracted (OCR) | No | ≤ 1965 |
| **Uruguay** | Life + **70** (Ley 9.739 arts. 14, 40, extended by **Ley 19.857 of 23‑12‑2019**, IMPO `uy19857.txt`) | — | **Excluded**: art. 6 says rights "son independientes de la existencia de protección en el país de origen de la obra" | Art. 45.4: "Las transcripciones hechas con propósitos de comentarios, críticas o polémicas" | **Yes, on the books**: art. 42.A: anyone may exploit a PD work subject to "las tarifas que fije el Consejo de los Derechos de Autor" (no repeal note in the IMPO consolidation). Current tariffs and collection practice not found | ≤ 1955. **Note:** Ley 19.857 is retroactive: works that had fallen into the PD before 70 years elapsed "volverán automáticamente al dominio privado" |
| **Paraguay** | Life + **70** (Ley 1328/1998 art. 47; WIPO id 21437, `law_py.txt`) | — | Not found | Art. 40: citas "con la obligación de indicar el nombre del autor" | No | ≤ 1955 |
| **Bolivia** | Life + **50** (Ley 1322/1992 art. 18 ff.; WIPO id 494, `law_bo.txt`) | Anonymous/pseudonymous 50 from publication | Art. 58: foreign works whose term is exhausted are PD ("Pertenecen al dominio público las obras extranjeras cuyo período de protección esté agotado") | Art. 24: quotation "con fines docentes o de investigación" | **Yes, on the books**: art. 60: commercial use of PD works pays the State 10–50 % of what is paid for comparable protected works, "de acuerdo con lo establecido en los reglamentos" (regulation and practice not checked) | ≤ 1975 |
| **Ecuador** | Life + **70** (Código Orgánico de la Economía Social de los Conocimientos 2016, art. 201; WIPO id 16990, `law_ec.txt`) | Arts. 202–208, 70 years | Not found | Art. 211 (open fair-use-style test) and quotation "a título de cita o para su análisis" | Not found | ≤ 1955 |
| **Guatemala** | Life + **75** (Decreto 33‑98 art. 43; WIPO id 16159, as amended by Decreto 11‑2006, `law_gt.txt`) | Collective 75 from publication | **Yes**: for foreign authors first published abroad, "el plazo de protección no excederá del reconocido por la ley del país donde se haya publicado la obra" (art. 43) | Quotation "con fines docentes o de investigación" | No | ≤ 1950 (foreign works: shorter of 75 and the country-of-publication term) |
| **Honduras** | Life + **75** (Decreto 4‑99‑E art. 44, as amended for CAFTA; WIPO id 10172, `law_hn.txt`) | Anonymous 75 from publication | **Yes**, same wording as Guatemala (art. 44) | — | No | ≤ 1950 (foreign works: shorter term) |
| **El Salvador** | Life + **70** (Ley de Propiedad Intelectual art. 90; WIPO id 22675, `law_sv.txt`) | 70 from publication | Not found | Art. 46: inclusion of short fragments "a título de cita" | No | ≤ 1955 |
| **Nicaragua** | Life + **70** (Ley 312 art. 27, consolidated 2020; WIPO id 21425, `law_ni.txt`) | Anonymous 70 from disclosure | Not found | Quotation "a título de cita o para su análisis, comentario o juicio crítico" | No | ≤ 1955 |
| **Costa Rica** | Life + **70** (Ley 6683 art. 58; WIPO id 21963, `law_cr.txt`) | 70 from publication | Not found | Art. 70: "citar a un autor, transcribiendo los pasajes pertinentes" | No | ≤ 1955 |
| **Panama** | Life + **70** (Ley 64/2012 art. 59; WIPO id 15426, `law_pa.txt`) **but art. 194**: authors who died before Ley 15 of 8 Aug 1994 keep "la duración de **ochenta** años prevista en el Código Administrativo de 1917" | Anonymous 70 from disclosure (art. 60) | Not found | — | No | **≤ 1945** (deaths before Aug 1994 get life + 80) |
| **Cuba** | Life + **50** (Ley 154 of 2022, art. 72; Gaceta Oficial 5‑12‑2022, `law_cu.txt`) | Anonymous 50 from disclosure (art. 73) | Not found | Art. 86.2 a): "La cita tomada de una creación que haya sido lícitamente divulgada" | No | ≤ 1975 |
| **Dominican Republic** | Life + **70** (Ley 65‑00 art. 21 as amended by **Ley 424‑06** (CAFTA implementation); WIPO ids 1191 and 10145, `law_do.txt`, `do_42406.txt`) | Anonymous 70 from publication | Not found | Art. 31: "citar a un autor transcribiendo los pasajes necesarios" | No | ≤ 1955 |
| **Puerto Rico** | US federal law (17 U.S.C.) applies in full (memory, standard; PR is a US territory). PR also has a moral-rights statute (Ley 55‑2012, memory, unverified) | as US | as US | US fair use | No | as US |

The Andean Community countries (Colombia, Peru, Ecuador, Bolivia) are also bound by Andean Decision 351 (1993), which sets a floor of life + 50 (memory, unverified; not fetched). Every national term above is equal to or longer than that floor.

### 2.2 Mexico in detail (the outlier)
- The current term is primary (LFDA art. 29, reformed DOF 23‑07‑2003). The 2003 decree's transitory articles say nothing about works already in the public domain. They only provide for entry into force, repeal and regulations (`mx_lfda.txt` ll. 3590–3610).
- **Earlier terms are from Wikimedia Commons, "Copyright rules by territory/Mexico" (secondary; it cites DOF scans, which I did not open):**
  - 1928 Civil Code: 30 years for literary works;
  - 1948: life + 20;
  - 1956: life + 25;
  - 1963: life + 30;
  - **12 Jan 1982: life + 50**;
  - 1994: life + 75;
  - 2003: life + 100.
- Commons states each extension was "not retroactive": works already in the PD stayed there. Its conclusion: "works created by someone who had died before 1952 are in the public domain".
- The Mexican Constitution art. 14 bars giving a law retroactive effect "en perjuicio de persona alguna" (memory, standard). That supports, but does not prove, non-revival.
- Consequences for Doctrina:
  1. **A translator who died ≤ 1951 is PD in Mexico.** One who died in 1952 or later is protected for life + 100 (e.g. died 1960 → PD 1 Jan 2061).
  2. **There is no rule of the shorter term in the Mexican statute.** A US translation that is PD in the US for non-renewal (1931–63) may still be protected in Mexico if the translator died after 1951. Spain and Argentina release it through art. 199.4 / art. 15; Mexico apparently does not.
  3. **Anonymous translations** ("traducida por un sacerdote", Bible-society versions without a translator) are freely usable in Mexico while the translator stays unidentified (art. 153). This is more permissive than Spain.
- ⚖ Question for a Mexican lawyer: confirm the "died before 1952" cut-off and non-revival in 1982/1994/2003; and whether Berne art. 7(8) applies through art. 133 of the Constitution for foreign works.

### 2.3 What "safe in all target countries" means (translator died in year X; date checked = 2026)
- **Binding set today:** Spain (life + 80 for deaths before 7 Dec 1987), Colombia (life + 80), Panama (life + 80 for deaths before Aug 1994), Mexico (frozen at "died ≤ 1951", then life + 100). The life + 70 countries (Argentina, Chile, Peru, Uruguay, Paraguay, Ecuador, Central America, DR) and the US pre‑1931 rule are looser.
- **In 2026 the common line is "translator died ≤ 1945"** (Spain/Colombia/Panama). Mexico does not bind yet, because it already frees deaths up to 1951.
- **From 1 Jan 2033 Mexico becomes the binding country.** Spain/Colombia/Panama free deaths of 1952 on that date, but Mexico keeps deaths of 1952+ until 2053+.
- So: **died ≤ 1945 → safe everywhere now; died 1946–1951 → safe everywhere once Spain/Colombia/Panama release them (1 Jan of death year + 81); died ≥ 1952 → not safe everywhere until death year + 101 (Mexico).**
- **US-unrenewed 1931–63 translations:**
  - Safe in Spain and Argentina via the shorter-term rule (⚖ Falcon caveat, aggregators-legal §3.4).
  - Probably **not** safe in Mexico, Peru or Uruguay if the translator died after 1951/1955: Peru art. 52 and Uruguay art. 6 exclude the comparison of terms, and Mexico has none.
  - Honduras and Guatemala apply it.
- **Practical rule for the registry:** add a `jurisdictionGate` field with the translator's death year. The site can then compute the earliest year the text is free in each country. For any text whose translator died ≥ 1946, add a geo-notice or geo-block list (MX, CO, PA, ES) rather than calling it "READY everywhere".
- **Our own new translations** of PD originals are ours in every country checked. Each statute has an equivalent of Argentina art. 24: Colombia art. 14 "El traductor de la obra del dominio público, es autor de su propia versión"; Mexico art. 78 (second paragraph); Chile art. 9; Peru art. 20.

### 2.4 Other "dominio público pagante" regimes found
- **Uruguay**, Ley 9.739 art. 42.A: exploiting a PD work is "subject to the tariffs set by the Consejo de los Derechos de Autor". Still in the IMPO consolidated text with no repeal note. The current tariff resolution and any collection were not found tonight.
- **Bolivia**, Ley 1322 art. 60: commercial use of PD works pays the State 10–50 % of the comparable royalty, under regulations. The DS 23907/1994 regulation was not read.
- Both are like Argentina's FNA levy. Whether they reach a foreign-hosted website is a lawyer question for each country. No other Spanish-speaking country in the table has one.

## 3. Task 2 — Argentina FNA "dominio público pagante" (follow-up)

### 3.1 Correction: Res. 625/2022 was revoked; the operative text is **Res. FNA 662/2022**
- **FNA Res. 661/2022** (BO 01‑09‑2022, https://www.boletinoficial.gob.ar/detalleAviso/primera/270742/20220901, saved `bo_270742.txt`) says Res. 625/2022 "contiene errores materiales". Its art. 1: "Déjese sin efecto la Resolución RESFC-2022-625-APN-PD#FNA".
- **FNA Res. 662/2022** was published the same day (https://www.boletinoficial.gob.ar/detalleAviso/primera/270743/20220901, extracted to `fna662.txt`). It re-enacts the digital regime and is in force from the day after publication (art. 17). Its art. 12.5 adds:
  - **Rubro 12.3 "Derechos de edición – Entorno digital"**, point 1: "De obras literarias **originarias o derivadas** que se pongan a disposición … en el entorno digital … Arancel: tres (3) MÓDULOS. El arancel aquí dispuesto deberá ser abonado anualmente y por cada obra puesta a disposición del público".
  - Point 2 covers images: 1–3 modules by number of images.
- spanish-pd's wording was right; only the resolution number changes. Cite **662/2022**, not 625/2022.
- The FNA's own consolidated *Cuerpo Legal* PDF (generated Nov 2022, `fna15850.txt`, from https://archivos.fnartes.gob.ar/reglamentos/) shows Rubro 12.3 "sustituido por Artículo 12° 5.- de la Resolución F.N.A. 662/2022". It lists no later amendment.
- Other relevant pieces of Res. 662/2022:
  - **Art. 9** (new art. 28 b): payment is due **before** "la puesta a disposición … en el entorno digital, sitios de internet, plataformas", together with a sworn declaration.
  - **Art. 7 and art. 8** (art. 23 bis): "sitios de internet, plataformas y cualquier otra persona humana o jurídica" must file **monthly** sworn statements of gross income. These two provisions are tied to the audiovisual and music items (inclusion and execution rubros). I read them as not aimed at Rubro 12.3 text sites, but the wording is broad.
  - **Art. 14**: credit, debit and purchase card issuers are designated withholding/information agents under art. 100 of Ley 27.591, "respecto de aquellas operaciones que realicen en el mercado interno". This is the practical lever on a foreign site that charges Argentine cards.
  - **Art. 11** (new art. 31): the exemption covers only primary/secondary school texts.

### 3.2 Later changes (searched the Boletín Oficial advanced search, 1st section, 02‑09‑2022 → 09‑10‑2026)
- Searches: "dominio público pagante", "15.850", and every notice with "FONDO NACIONAL DE LAS ARTES". Saved: `bo_dpp.txt`, `bo_fna23.txt`, `bo_fna24.txt`.
- **No FNA resolution after 662/2022 changing Rubro 12.3 or the tariffs was found.** The FNA items in that period are appointments, salaries, structure and staff (e.g. Res. 1372/2025, which puts staff on availability).
- **Decreto 1029/2024** (BO 22‑11‑2024, `bo_317232.txt`) rewrote parts of the FNA's regulatory decree 6255/58: credits in UVA; grants only from rents and income. It does **not** touch the levy.
- **A bill to abolish the levy**, HCDN expediente 0448‑D‑2024 ("ELIMINACIÓN DEL DOMINIO PÚBLICO PAGANTE"), was seen only as a search snippet. The snippet says the abolition had been in art. 589 of the original "Ley Bases" bill of 27‑12‑2023.
  - I found no law enacting it. The FNA's official trámite page (fetched 2026‑10‑09, `fna_tramite.txt`) still says users of works by authors dead 70+ years are "obligado a declarar ese uso … y a pagar un arancel".
  - So the levy is **in force** as of today. That the bill failed is an inference.

### 3.3 Module value
- Res. 662/2022 art. 13: MÓDULO = the value in **art. 28 of Decreto 1030/2016** "y/o la norma que en un futuro la reemplace".
- Infoleg consolidated text (fetched 2026‑10‑09, `d1030.txt`): "el valor del módulo (M) será de PESOS CUARENTA MIL ($40.000)", set by **Decreto 666/2024** (BO 25‑07‑2024).
- Art. 29 lets the Chief of Cabinet change it by *decisión administrativa*.
- A BO search for "valor del módulo" from 26‑07‑2024 to 09‑10‑2026 found no change to art. 28 of Decreto 1030/2016. Hits were other regimes, e.g. Decreto 592/2025 sets ARS 40,000 for the Defence purchasing regime.
- → **3 modules = ARS 120,000 per literary work per year** (verified chain, as of 2026‑10‑09). Infoleg can lag behind the BO, so re-check before any filing.

### 3.4 Scope questions — what the primary texts say
1. **Territorial hook.** Cuerpo Legal art. 2 (`fna15850.txt`):
   - The levy applies to works "puestas en el comercio, en todo el territorio de la República".
   - Works made "en el extranjero, pagarán los correspondientes derechos cuando sean puestas en el comercio dentro del territorio de la República".
   - Editions made in Argentina for sale abroad are exempt.
   - Art. 3 makes liable any person "domiciliada o no en el país". So the text is drafted to reach foreign providers who commercialise **in Argentina**. Whether a US-hosted site sold to Argentine readers is "puesta en el comercio dentro del territorio" is ⚖.
   - The trámite page also frames it as works "a ser comercializadas en la Argentina".
2. **Our own translations are probably NOT exempt** (this corrects spanish-pd's reading (e)).
   - Rubro 12.3 says "obras literarias originarias **o derivadas**".
   - Rubro 12.1 defines derivative works as "traducciones, adaptaciones … y/o cualquier obra preparada por autores de dominio privado basada y/o recreada en una obra primigenia caída en dominio público". Print rate: 0.80 % instead of 1 %.
   - The FNA "Nuestros contribuyentes" page (`fna_contribuyentes.txt`) says "Se deben declarar tanto obras originarias como derivadas … adaptaciones, traducciones".
   - So an AI-assisted Spanish translation of Augustine, put online in Argentina, is on the FNA's reading a "derivada" of a PD work, liable at 3 modules per work per year.
   - The art. 24 Ley 11.723 argument (translator owns his version) concerns copyright ownership, not this levy.
3. **What is "una obra"?** Not defined in Res. 662/2022 or the Cuerpo Legal. ⚖
4. **Free vs paid.**
   - Rubro 12.3 is a flat per-work fee. It is not tied to sales, unlike the 1 % print rate on retail price.
   - Art. 2 speaks of "puestas en el comercio". A free, non-commercial site has an argument that it is outside, but the digital rubro itself has no commercial qualifier. ⚖
5. **Enforcement.** The FNA has tax-collection powers: "se rige por las disposiciones de la Ley de Procedimiento Fiscal Nº 11.683 … el FNA ejerce las facultades y poderes que la Ley Nº 11.683 le acuerda a la Dirección General Impositiva" (`fna_fin.txt`). Interest on late payment: 3 % per month (`fna_guia.txt`). Its contributor list names "empresas informáticas y del entorno digitales".
   - **I found no public case of enforcement against a website or digital library.** One query found nothing; searches are weak tonight. Absence of evidence only.
6. **Doctrine on foreign-hosted sites:** none found. Only a practitioner overview turned up (Funes, palabrasdelderecho.com.ar, art. 4104, not read). Gap.

### 3.5 Practical reading (not legal advice)
- The levy is real and current, and it covers digital publication of PD **and derivative** literary works at ARS 120,000 per work per year.
- Exposure is highest if Doctrina is operated **from Argentina** (Argentine entity or person, Argentine card payments) and lowest for a foreign entity with no Argentine presence. Even then, Argentine card issuers are designated agents.
- With ~hundreds of works the fee is material (e.g. 200 works ≈ ARS 24 M per year at today's module).
- Mitigations to ask a lawyer about:
  - (a) operate through a non-Argentine entity;
  - (b) count "obra" at the level of a whole book or corpus;
  - (c) keep any free tier non-commercial;
  - (d) budget the fee for a small launch set.
- The fee is a business cost, not a copyright block: it does not stop publication.

## 4. Task 3 — Holy See / Vatican terms and US URAA

### 4.1 Primary texts read
- **Law CXCVII of 1 Sep 2017** (in force 1 Oct 2017; saved by councils-creeds as `samples/councils-creeds/vat_law_cxcvii.txt`, re-read in full):
  - Art. 1 §1–2: the Italian law in force is applied, and future Italian changes are "recepite" automatically, within limits (dynamic reception).
  - Art. 2: copyright applies "anche ai testi delle leggi e degli atti ufficiali pubblicati … dalla Santa Sede". Italy's art. 5 exclusion for official acts does not apply.
  - Art. 3 §1: the Pope's writings and speeches are protected. §7 extends the personality rights to "Pontefici emeriti e defunti".
  - **Art. 5 §1**: the Holy See holds copyright in works "create o pubblicate sotto il loro nome o realizzate per loro conto". **§4**: "settanta anni a partire dall'anno di prima pubblicazione dell'opera … ovvero dall'anno di morte dell'autore ove questi sia indicato nell'opera".
  - Art. 8 repeals all earlier copyright provisions (the 2011 law CXXXII). **There is no transitional rule**, so nothing says whether works already in the public domain revive.
- **Law XII of 12 Jan 1960** (John XXIII), WIPO Lex id 9256, `samples/legal-gaps/va_1960.txt` (OCR of the AAS supplement):
  - Art. 1: in Vatican City "si osserva … la legislazione dello Stato italiano, compresi i regolamenti vigenti all'entrata in vigore della presente". This is **static reception** of Italian law as of 12 Jan 1960. Spadaro (L'Osservatore Romano summary, 2011, `sdb2011.doc`, secondary) confirms it: the 1960 law "aveva recepito la legge italiana n. 633 del 1941, con le modificazioni intervenute fino a quel momento". The 2011 law switched to automatic reception.
  - Art. 2: protection applies to official acts of the Holy See. Same as 2017.
  - Art. 3 repeals "il n. 2) lettera c) dell'articolo 20 della legge sulle fonti del diritto, 7 giugno 1929, n. II". Not read: that provision probably excluded Italian copyright law from the 1929 reception. If so, **between 1929 and 1960 Vatican City may have had no copyright law at all** (⚖, unverified).
- **Italian L. 633/1941 as in force on 12 Jan 1960** (Normattiva, point-in-time view `!vig=1960-01-12`; saved `it633_art*_1960.txt`):
  - **Art. 25**: life of the author "sino al termine del cinquantesimo anno solare dopo la sua morte" (text in force 18‑12‑1942 → 24‑2‑1996).
  - **Art. 11 + art. 29**: works "create e pubblicate sotto il loro nome ed a loro conto" by the "Amministrazioni dello Stato" and public bodies last "**vent'anni** a partire dalla prima pubblicazione".
  - Art. 27: anonymous works, 50 years from publication.
  - Art. 5: official acts of the State are excluded from protection. The Vatican's 1960 art. 2 overrides that.
- **Italian D.Lgs.Lgt. 20 Jul 1945 n. 440, art. 1** (Normattiva, `it_dll440_art1.txt`): terms "prorogata di sei anni per tutte le opere pubblicate e non ancora cadute in pubblico dominio" on 17‑08‑1945.
- **Holy See and Berne** (WIPO Lex, `wipo_va_berne.txt`): accession to the Rome Act 19 Jul 1935, **in force 12 Sep 1935**; Brussels 1951; Paris 1975. So the Holy See is an "eligible country" for URAA restoration (17 U.S.C. §104A(h)(3), memory of the definition; restoration date 1 Jan 1996 for countries already in Berne).

### 4.2 Three readings of the 1960–2011 regime
The answer depends on which term governed papal documents while the 1960 law applied:
- **R1, the Holy See treated like a State administration** (art. 11/29 by analogy, adapted "in relazione allo stato di fatto"): **20 years from publication**, plus 6 years for works published before Aug 1945.
- **R2, the Pope as named personal author** (art. 25): life + 50, plus 6 years for pre‑1945 works.
- **R3, the 2017 law applied retroactively** (art. 5 §4): 70 years from the death of the named author, otherwise from publication.

R2 is the most defensible reading for encyclicals: the Pope is named as author, and the 2017 law itself keys the term to the named author. R1 is a real argument that a lawyer could make, but I would not plan on it.

### 4.3 PD dates (R2 = planning basis; R1/R3 shown for range)

| Document(s) | At source (Vatican) | United States | Basis |
|---|---|---|---|
| **Pius XI encyclicals 1931–39** (Pius XI d. 10 Feb 1939), e.g. *Lux veritatis* 1931 (Ephesus), *Casti connubii* 1930, *Quadragesimo anno* 1931, *Mortalium animos* 1928 | **PD.** R2: life+50 ends 31 Dec 1989, +6 (war decree) = 31 Dec 1995. R1: 20 y + 6 → PD by 1966. R3: death+70 → PD 1 Jan 2010 | **PD** (not restored): on 1 Jan 1996 they were already PD at source on R1 and R2. **The R2 margin is zero days**: the term ended 31 Dec 1995 only if the 1945 decree applies. Without it, they were PD from 1990 | Static 1960 reception: Italy's 1996 extension to life+70 never reached the Vatican before 2011. Worst case (a court finds them protected on 1 Jan 1996): PD 1 Jan of publication year + 96 (2027–2035) |
| **Pius XII** (d. 9 Oct 1958): *Mystici Corporis* (29 Jun 1943), *Mediator Dei* (20 Nov 1947), *Munificentissimus Deus* (1 Nov 1950) | R2: life+50 to 31 Dec 2008 (MC +6 → 2014). The 2011 law then extended works still protected → **R3: PD 1 Jan 2029**. MD and MuD were already PD on R2 by 2011; whether the 2011 law revived them is unknown. R1: PD by 1968–1971 | R2: protected on 1 Jan 1996 → **restored → 95 years from publication: MC PD 1 Jan 2039, MD 1 Jan 2043, MuD 1 Jan 2046.** R1: never restored → US PD now | catholic-modern's "2029 at source / 2039–45 US" holds on R2. The US dates are the binding ones |
| **Vatican II** (1962–65: SC 4 Dec 1963, LG 21 Nov 1964, DV 18 Nov 1965, GS 7 Dec 1965), promulgated by Paul VI (d. 6 Aug 1978) | R2: Paul VI life+50 to 2028 under the 1960 regime, then extended by the 2011/2017 law → **death+70 → PD 1 Jan 2049**. If a court read the acts as not naming an "autore" (a conciliar act), publication+70 → PD 1 Jan 2034–2036. R1: PD by 1986 | **R2/R3: restored → PD 1 Jan 2059–2061** (publication year + 96). R1: not restored → US PD now | ⚖ The R1 argument is the only route to US PD for Vatican II. It is worth one question to a lawyer, but plan for 2059+ |

### 4.4 Practical consequences
- **Pius XI documents (Latin originals) are usable now** at source and, on the better reading, in the US. Spain and Argentina follow through the shorter-term rule; Mexico: Pius XI died before 1952 → PD. **Translations are a separate question:**
  - The NCWC English translations published in the US 1931–50: I grepped the NYPL CCE renewal files for renewal years 1958–1977 (`samples/legal-gaps/cce/`) for "encyclical", "N.C.W.C.", "National Catholic Welfare" and the titles. **No renewals for NCWC encyclical translations were found** (only unrelated books about the popes). That is strong evidence the US translations are PD in the US. Confirm by hand in the Stanford database for the specific titles we use.
  - Vatican-published English or Spanish translations of the same years share the Latin original's status.
- **Pius XII** (Mary page: *Munificentissimus Deus*; Eucharist: *Mediator Dei*; Church: *Mystici Corporis*):
  - For now: short commented quotations plus links, or the Latin original with our own translation. On R2 the Latin is protected in the US until 2039–2046, so our translation would be a derivative of a protected work. Quote briefly.
  - Or ask LEV (diritti.lev@spc.va).
  - A US NCWC translation (e.g. *Munificentissimus Deus*, NCWC 1950/51) that was not renewed is PD as a translation in the US, **but it is a derivative of a Latin text that is restored**. Displaying it would still reproduce the protected original's expression. Treat as PERMISSION. ⚖
- **Vatican II:** PERMISSION (LEV) until 2049 at source and 2059–61 in the US. The R1 theory is not a basis for publishing in full.

## 5. Task 4 — Lexicon and morphology licences for word-by-word study (Latin, Syriac, Coptic)

| Resource | What it is | Licence / status (evidence) | Commercial use? | Verdict |
|---|---|---|---|---|
| **Lewis & Short**, *A Latin Dictionary* (1879) | Standard Latin–English lexicon | Print 1879: PD everywhere (pre‑1931; Lewis d. 1900? Short d. 1886, memory). **Perseus TEI XML: CC BY‑SA 4.0**. GitHub `PerseusDL/lexica` reports CC‑BY‑SA‑4.0; `license.md` and README say: "Unless otherwise indicated, all contents of this repository are licensed under a Creative Commons Attribution‑ShareAlike 4.0 International License" (saved `lex/perseus_lexica_license.md`). The same README also says Perseus materials are "provided for the personal use of students, scholars, and the public". That is boilerplate; the explicit CC licence governs | Yes, with attribution and share-alike | **READY**: keep it as a separate CC BY‑SA layer and publish our corrections under BY‑SA |
| **Whitaker's WORDS** (DICTLINE, INFLECTS, parser) | Latin parser plus ~39k-entry lexicon | `mk270/whitakers-words/LICENCE.txt`: "Permission is hereby freely given for any and all use of program and data. You can sell it as your own, but at least tell me." and "made freely available to anyone who wishes to use them, for whatever purpose" (saved `lex/ww_LICENCE.txt`). Whitaker d. 2010 | Yes (permissive) | **READY** for morphology and short glosses (English only) |
| **LatinCy** spaCy pipelines (`latincy/la_core_web_{md,lg,trf}`) | Lemmatiser, POS tagger and parser | Hugging Face API: `license: mit` for all three (fetched 2026‑10‑09). **Caveat:** trained on UD Latin treebanks, several of them NC (UD READMEs fetched: Perseus CC BY‑NC‑SA 2.5; PROIEL, ITTB, UDante CC BY‑NC‑SA 3.0; LLCT and CIRCSE CC BY‑SA 4.0) | Model MIT. Whether NC training data taints the weights is unsettled (⚖, low risk). Our outputs (lemmas of PD texts) are facts | **READY** as a tool. Don't redistribute the treebanks |
| **Latin WordNet 2.0** (Exeter, latinwordnet.exeter.ac.uk) | Synsets, semantic links | Export repo `ThomasK81/latinwordnet2` README: "freely available under a … (CC BY‑SA 4.0) license … even commercially" | Yes (SA) | Optional |
| CIRCSE Latin WordNet revision; **LEMLAT 3** | Revised LWN; morphological lemmatiser | Both READMEs: **CC BY‑NC‑SA 4.0** | **No** | Avoid (or ask CIRCSE) |
| **Gaffiot** 1934 (Hachette), Latin–French | — | Gaffiot d. 1937 (memory): PD in Spain, Argentina and Mexico; France PD since 2008 (memory). **US: likely URAA-restored** (French 1934 work, protected in France on 1 Jan 1996) → **PD 1 Jan 2030** (inference, not checked). **Gaffiot 2016 digital edition (Gréco): "Creative Commons Attribution‑NonCommercial‑NoDerivatives 4.0"** (gaffiot.org/license, saved `lex/gaffiot_license.txt`) | Digital edition: **No**. Print: only after 2030 in the US | Skip for launch (French glosses are low value for us anyway) |
| **Spanish Latin dictionaries (PD)** | Latin→Spanish glosses | **Raimundo de Miguel & Marqués de Morante, *Nuevo diccionario latino‑español etimológico*** (1867; IA `de-miguel-diccionario-latino-espanol-1867-nometa`, PD Mark; 1878 ed. `de-miguel-nuevo-diccionario-latino-espanol-etimologico-1878`; de Miguel 1816–1878). **Valbuena**, *Diccionario universal latino‑español* (1808, 1826, 1833; Valbuena d. 1821; IA `bub_gb_RLNGBdXasv4C`, `ACarriazo0123`, `A065100`). ***Nuevo Valbuena*** revised by Salvá (Paris, Garnier 1868; IA `BRes142167`, PD Mark). Salvá, *Novísimo diccionario latino‑español* (1895, IA `salva-y-perez-novisimo-diccionario-latino-espanol-1895`; revisers unnamed) | Yes: authors died ≤ 1878, PD in every jurisdiction in §2 | **WORK (L)**: OCR of two-column small type, then entry segmentation. **de Miguel 1867 is the best base** (etymological, ~1,000 pp.). Valbuena/Salvá as a cross-check |
| **Payne Smith, *Compendious Syriac Dictionary*** (Oxford 1903; ed. J. Payne Smith = Jessie Payne Margoliouth, d. 1933, memory) | Syriac→English | PD everywhere (pre‑1931 US; editor died ≤ 1945). Open scan: IA `compendioussyria00payn` (not access-restricted) | Yes | **WORK (L)**: Syriac OCR is poor, so plan for keying or alignment with SEDRA lemma ids |
| **SEDRA IV** (Beth Mardutho) | Syriac lexemes, roots, word forms; Peshitta NT morphology; API | Site footer: "Copyright © 2011‑2026 by Beth Mardutho The Syriac Institute **All Rights Reserved**". Only the OpenAPI *spec* is "License: Apache 2.0". The "About" history says SEDRA III (1993) was published "as a non-commercial open source database" (saved `lex/sedra_sedra.txt`, `lex/sedra_openapi.txt`) | **No** without permission | **PERMISSION**: email sedra@bethmardutho.org. Meanwhile, link out to SEDRA entries |
| Brockelmann, *Lexicon Syriacum* (2nd ed. 1928) | Syriac→Latin | US PD (pre‑1931). Brockelmann d. 1956 (memory) → Spain protected to end of 2036, Argentina to end of 2026, Mexico life+100 | Not everywhere | Skip (Latin glosses; Spain blocks) |
| **Coptic Dictionary Online** (BBAW lexicon + Coptic SCRIPTORIUM / KELLIA) | Sahidic/Bohairic lemmas, TLA ids, Crum references | coptic-dictionary.org footer: "Lexicon data released under the CC BY‑SA 4.0 license. Search interface code … Apache 2.0". The KELLIA/dictionary README says the same, with TEI XML at DOI 10.17169/refubium-2333 | Yes (SA) | **READY**: the Coptic base layer |
| **Crum, *A Coptic Dictionary*** (Oxford 1939) | Standard Coptic lexicon | Crum 1865–1944 (IA authority string): PD in Spain from 1 Jan 2025, Argentina, Mexico (died before 1952); UK PD since 2015. **US: probably URAA-restored** (UK work, 1939). That gives **PD 1 Jan 2035**, unless PD in the UK on 1 Jan 1996 or published in the US within 30 days (⚖ the UK revived life + 70 on 1 Jan 1996, the same day as URAA restoration). IA copy `copticdictionary0000crum` is **access-restricted (lending only)**, consistent with treating it as in copyright in the US | Not in the US until 2035 | Use CDO; cite Crum page numbers (facts) and link. No full Crum text before 2035 |

**Recommended stack**
- **Latin:** Whitaker's WORDS (parsing) + LatinCy (lemmatising our texts) + Lewis & Short via Perseus (English definitions, separate CC BY‑SA layer) + de Miguel 1867 (Spanish definitions, OCR, our own PD edition). Optional: Latin WordNet 2.0 (BY‑SA). Avoid LEMLAT and the CIRCSE LWN revision (NC) and Gaffiot 2016 (NC‑ND).
- **Syriac:** Digital Syriac Corpus texts (CC BY 4.0, already found) + our own morphology + Payne Smith 1903 glosses (PD, keyed). Ask Beth Mardutho for a SEDRA licence: it is the only lemma/morphology database, and the right fit if granted.
- **Coptic:** CDO lexicon (CC BY‑SA) + Crum page references only.
- **Licence hygiene:** BY‑SA layers (Lewis & Short, CDO, LWN, OpenGNT) stay in separate files with attribution. Our own Spanish glosses can stay under our licence if they are written fresh rather than adapted from a BY‑SA entry.

## 6. Task 5 — Modern Catholic Spanish Bible: rights holders and permission path

### 6.1 Rights holders

| Bible | Rights holder (evidence) | Contact (status) | Notes |
|---|---|---|---|
| **El Libro del Pueblo de Dios** (Levoratti & Trusso; 1981/1990; revised 2015 as *La Biblia. Libro del Pueblo de Dios*) | BibleGet I/O page (fetched, `bibleget_blpd.txt`): Trusso ceded his rights to the **Fundación Palabra de Vida**; Levoratti ceded his to **Editorial Verbo Divino**. The 2015 revised edition is "© Fundación Palabra de Vida y Editorial Verbo Divino. Todos los derechos reservados". The 1990 text is on vatican.va (IntraText, `lpd_vat.txt`), with credits "Copyright © Libreria Editrice Vaticana" (for the IntraText edition) and "Puede imprimirse de la Conferencia Episcopal Argentina". The San Pablo (Argentina) edition is still in print (BibleGet; UNLP OPAC snippet: "Editorial San Pablo; CLARIN; Fundación Palabra de Vida", 2004) | Fundación Palabra de Vida, Leiva 4219, Chacarita, Buenos Aires (AICA snippet). Editorial Verbo Divino: evd@verbodivino.es, +34 948 55 65 11, Avda. Pamplona 41, 31200 Estella (verified on verbodivino.es/contacto) | Official text of the CEA. BibleGet adds that the bishops of Chile, Paraguay and Uruguay also recognised it (BibleGet's claim). **No free or CC licence found.** CEA does not appear to hold the rights, so it can endorse but not license. **Precedent:** BibleGet I/O, a free Catholic API, serves BLPD, so the rights holders have licensed digital use at least once |
| **Biblia de la Conferencia Episcopal Española** (2010/2011) | CEE site: "Sagrada Biblia. Versión oficial de la Conferencia Episcopal Española. Editorial BAC" (`cee_gen.txt`). The full text is readable free at conferenciaepiscopal.es/biblia/. No reuse licence is shown | CEE: info@conferenciaepiscopal.es, +34 913 439 604 (verified). BAC: secretariadireccion@bac-editorial.es (search snippet only; the BAC site timed out twice tonight) | Ask the CEE first (owner of the version). BAC is the publisher |
| **Nácar‑Colunga** (BAC, 1944; many revisions) | BAC (memory, standard). Eloíno Nácar d. 1960s, Alberto Colunga d. 1962 (memory, unverified) → protected in Spain until about 2043; US: URAA → 1944 + 95 = 2039 | BAC (as above) | Lower priority: older, and the CEE version is BAC's current one |
| **Biblia de Jerusalén** (Spanish ed. 1967; nueva ed. 1998, 2009 "revisada") | **Desclée De Brouwer**, Bilbao (memory; the publisher's 404 page shows "Copyright © 2024 Desclée De Brouwer") | info@edesclee.com, +34 944 246 843 (from the edesclee.com page footer) | Translation of the French BJ (Éditions du Cerf), so there may be two layers of rights (⚖) |
| **Biblia de América** (1994) | **La Casa de la Biblia** (Madrid), co-published by PPC, Sígueme, Verbo Divino (memory) | info@lacasadelabiblia.es (from lacasadelabiblia.es HTML) | Latin-American register |
| **Biblia Traducción Interconfesional (BTI / BHTI)** | Sociedad Bíblica de España (YouVersion page "Bible Society of Spain"). Made "según las normas de cooperación para las traducciones bíblicas suscritas por las Sociedades Bíblicas Unidas y la Iglesia Católica", with deuterocanon (YouVersion BHTI page, `yv_222.txt`) | Through SBE / United Bible Societies licensing | **A strong candidate**: Catholic-acceptable, with deuterocanon, already distributed digitally by a Bible society used to licensing |
| **Dios Habla Hoy con Deuterocanónicos** (DHHDK) | "© Sociedades Bíblicas Unidas, 1966…1994"; labelled **"Imprimátur"** on YouVersion (`yv_1845.txt`) | UBS / the national Bible society | Dynamic-equivalence; Catholic edition approved |

### 6.2 YouVersion and API.Bible
- **YouVersion** (bible.com Spanish list, fetched 2026‑10‑09, `yv_spa.txt`): **none of BJ, LPD, Nácar‑Colunga, Biblia de América or CEE is listed**. The only Catholic-approved Spanish texts there are UBS/SBE: DHHDK (Imprimátur) and BHTI/TLAI (interconfessional). YouVersion is a reading app, not a licensor for third parties.
- **API.Bible** (American Bible Society, api.bible/bibles, fetched with the site's own search):
  - It has a "Catholic Imprimatur" filter and three licence tiers: Open Access, "Standard License" (paid plan), and "Unique License" (separate agreement with the IP holder).
  - Searches for "Biblia", "Dios", "Spanish", "Católica", "Jerusal", "Pueblo", "Interconfesional", "Palabra" returned only: spabes, PdDpt, VBL (open); ONBV (open); NVI 2015 (Unique); LBLA and NBLA (Standard).
  - **No Catholic Spanish Bible is in its public catalogue.** I saw no "Express Licensing" product on the site; the terms are "Standard" vs "Unique" licence.
  - So neither aggregator offers a licensed Catholic Spanish Bible today.

### 6.3 Recommended permission order
1. **Fundación Palabra de Vida + Editorial Verbo Divino (LPD).** It is the official text of the Argentine episcopate, the owner is in Buenos Aires, and BibleGet shows a digital licence has been granted before. Ask for the 1990/2015 text without the notes; the notes are a separate, larger layer.
2. **CEE (Biblia CEE)** for Spain, in parallel.
3. **SBE/UBS for BTI/BHTI or DHHDK** as the institutional fallback. Bible societies have standard digital licences.

Until then, the Bible reader uses Torres Amat 1894 (OCR, PD) for Catholic Spanish, with short LPD/CEE quotations plus links in commentary.

### 6.4 Draft request (Spanish, NOT sent)

> **Para:** Fundación Palabra de Vida (Buenos Aires) · **CC:** Editorial Verbo Divino, departamento de derechos (evd@verbodivino.es)
> **Asunto:** Solicitud de licencia — texto bíblico de *El Libro del Pueblo de Dios* en Doctrina (sitio de estudio)
>
> Estimados señores:
>
> Me llamo [Nombre] y desarrollo desde [ciudad] **Doctrina**, un sitio bilingüe (español/inglés) para estudiar la doctrina cristiana en sus fuentes. Para cada tema muestra qué enseña cada tradición (católica, ortodoxa, luterana, reformada, bautista) con sus propias palabras, y cita cada texto con su edición. El sitio no concluye ni opina: presenta las fuentes.
>
> Necesitamos una Biblia católica en español para el lector bíblico del sitio. Nos gustaría que fuera ***El Libro del Pueblo de Dios***, la traducción de los padres Levoratti y Trusso que es el texto oficial de la Conferencia Episcopal Argentina. Por eso les pido una licencia para mostrar en línea **el texto bíblico completo (sin introducciones ni notas)**, en la edición que ustedes indiquen (1990 o revisada 2015), con estas condiciones:
>
> - **Uso:** solo lectura dentro de doctrina.[…]. Sin descarga, sin exportación del texto completo y sin acceso por API a terceros.
> - **Mención:** la línea de copyright que ustedes indiquen, en cada página que muestre el texto, con enlace a su edición impresa.
> - **Integridad:** texto literal; cualquier corrección, solo con su visto bueno.
> - **Contexto comercial:** el sitio es gratuito durante su etapa inicial y podría tener más adelante una suscripción paga. Pedimos que la licencia contemple ambos casos.
> - **Territorio:** mundial. El sitio está alojado en Estados Unidos y se lee sobre todo en Argentina, España y el resto de América Latina.
> - **Plazo:** [3] años renovables, revocable con [90] días de aviso.
>
> Si prefieren otro alcance, también nos sirve, por ejemplo una licencia solo para el Nuevo Testamento al principio, o citas de hasta [N] versículos dentro de nuestros comentarios. Estamos dispuestos a acordar un canon o regalía y a enviarles estadísticas de uso. Puedo mostrarles una página de prueba antes de publicar.
>
> Sabemos que BibleGet I/O ofrece esta traducción en formato digital. Si existe un modelo de licencia vigente para usos de ese tipo, nos sería muy útil conocerlo.
>
> Muchas gracias por su atención.
>
> [Nombre] — Doctrina — [correo] — [teléfono] — [domicilio]

(The aggregators-legal §4.4 general template also applies to CEE/BAC, Desclée and La Casa de la Biblia.)

## 7. Creative alternatives found
- **Anonymous translations in Mexico** are free while the translator is unknown (LFDA art. 153). Use this for Mexican readers of anonymous 20th‑c. versions.
- **Our own translations of Pius XI** (Latin PD at source, and in the US on the better reading) are a clean route for the Mary and Church pages from the 1930s. Examples: *Lux veritatis* 1931 on Ephesus; *Mortalium animos* 1928 (pre‑1931, so US PD regardless).
- **Interconfessional Catholic-approved Bibles** (BTI/BHTI, DHHDK) are licensable through Bible societies that already run digital licensing. This is a practical fallback if the LPD/CEE owners say no.
- **BibleGet I/O** is a free Catholic API serving BLPD. It is a precedent to cite in the permission request; it is not a source for us to copy.
- **FNA exposure can be sized:** 3 modules (ARS 120,000) per work per year. Grouping texts as "works" and the operating entity are the levers (⚖).

## 8. Blockers that remain (and what was tried)
- **Mexico's pre‑2003 terms and non-revival:** only Wikimedia Commons (secondary). The DOF 1982 scan was not opened, and the WIPO 1948 PDF link is dead (404).
- **Vatican 1929–1960 gap:** the 1929 *Legge sulle fonti* art. 20 n. 2 lett. c (repealed in 1960) was not found. So it is unknown whether Vatican City had any copyright law before 1960. The 2011 law CXXXII text was not found either, so revival of works PD under the 1960 regime is unknown.
- **FNA:** no doctrine and no enforcement case against websites found. HCDN bill 0448‑D‑2024 status page returned 404.
- **Uruguay and Bolivia** paying-PD tariff regulations not read.
- **BAC** website unreachable (timeouts); BAC email only from a snippet.
- **Desclée:** the contact URL returned 404; the email comes from that page's footer.

## 9. Verified vs. not verified
- **Verified on primary texts tonight:**
  - every current term and article cited in §2.1 (except Puerto Rico and Andean Decision 351, which are memory);
  - Res. FNA 661/2022 and 662/2022 texts;
  - Cuerpo Legal arts. 2–3 and Rubro 12.1/12.3;
  - Decreto 1030/2016 art. 28 (Infoleg) and the absence in BO searches of later module changes or FNA tariff changes;
  - Vatican laws 1960 and 2017;
  - Italian L. 633/1941 arts. 5, 11, 25, 27, 29 as of 1960;
  - DLL 440/1945 art. 1;
  - Holy See Berne dates;
  - lexicon licences (Perseus, Whitaker, LatinCy, UD treebanks, LWN, LEMLAT, CDO, Gaffiot 2016, SEDRA footer);
  - archive.org access flags;
  - YouVersion and API.Bible listings;
  - BibleGet's LPD rights statement (BibleGet's own claim);
  - CEE Bible attribution;
  - Verbo Divino contact.
- **Secondary or snippet:** Mexico term history (Commons); the 2011 Vatican-law summary (Spadaro); the HCDN bill; the BAC email; Fundación Palabra de Vida address (AICA snippet).
- **Memory, unverified:**
  - Puerto Rico Ley 55‑2012;
  - Andean Decision 351 floor;
  - 17 U.S.C. §104A(h)(3) wording (not re-read);
  - death dates of Gaffiot (1937), Brockelmann (1956), Nácar and Colunga, J. Payne Smith (1933), Lewis and Short;
  - French and UK URAA reasoning for Gaffiot and Crum;
  - BJ Spanish/French layering;
  - Biblia de América co-publishers;
  - Mexican Constitution art. 14.

## 10. Items for a mechanical verification pass
1. Wikimedia Commons Mexico page → open the DOF 11‑01‑1982 scan it cites (http://dof.gob.mx/nota_to_imagen_fs.php?cod_diario=202954&pagina=22&seccion=1): confirm life + 50 and that it is not retroactive.
2. https://www.boletinoficial.gob.ar/detalleAviso/primera/270743/20220901: re-read Rubro 12.3 and art. 14 before any business decision. Re-run the BO search "Fondo Nacional de las Artes" from 01‑10‑2026 forward.
3. Infoleg Decreto 1030/2016 art. 28: check for a *decisión administrativa* changing the module after 25‑07‑2024. The BO search found none.
4. IMPO Uruguay: search for Consejo de Derechos de Autor tariff resolutions under Ley 9.739 art. 42.
5. Vatican: find the AAS Supplement 1929 *Legge sulle fonti del diritto* art. 20 n. 2 lett. c, and the 2011 Law CXXXII (AAS Suppl. 2011) for any transitional clause.
6. Stanford Copyright Renewals DB, by hand: "Mystici corporis", "Mediator Dei", "Munificentissimus Deus", "Lux veritatis", NCWC. Confirms the NYPL negatives in `samples/legal-gaps/cce/`.
7. Crum *Coptic Dictionary* 1939 title-page verso (any US co-publication). Gaffiot 1934: confirm French status on 1 Jan 1996.
8. Email sedra@bethmardutho.org (when Pedro decides) asking for SEDRA IV commercial-licence terms.

## 11. ⚖ Questions for lawyers (add to aggregators-legal §3.8)
- **Mexico (IP lawyer):**
  - (a) Is "author died before 1952" the correct PD cut-off (non-revival under the 1982, 1994 and 2003 extensions)?
  - (b) Does Berne art. 7(8) (comparison of terms) apply to foreign works in Mexico despite LFDA art. 7? Specifically: is a US translation that is PD in the US for non-renewal protected in Mexico for life + 100?
  - (c) How far does art. 153 (free use of anonymous works) reach?
- **Argentina (IP or tax lawyer):**
  - (a) Does Res. FNA 662/2022 Rubro 12.3 apply to a site hosted abroad and run by a foreign entity, sold to Argentine readers? Does the art. 2 "puestas en el comercio dentro del territorio" hook apply?
  - (b) Are our own new translations of PD works "obras derivadas" liable under 12.3?
  - (c) What is one "obra" (a book, a treatise, a corpus)?
  - (d) Is a free, non-commercial tier exempt?
  - (e) What risk does art. 14 create (card issuers as information or withholding agents)?
- **Uruguay and Bolivia:** are the paying-PD regimes (art. 42 and art. 60) actually collected, and do they reach foreign websites?
- **Vatican/US (Italian or canon lawyer plus US counsel):**
  - (a) Under the 1960 static reception, did papal and conciliar acts carry the art. 25 term (life + 50) or the art. 11/29 term (20 years from publication)?
  - (b) Did the 1945 six-year extension apply in Vatican City?
  - (c) Did the 2011 and 2017 laws revive works already PD?
  - (d) For URAA: were Pius XI works "in the public domain in [the] source country" on 1 Jan 1996? Were Vatican II acts?
- **US/UK/France (URAA):** Crum 1939 and Gaffiot 1934: restored or not, given the UK and French revivals on or around 1 Jan 1996?
- **LatinCy:** does model training on CC BY‑NC‑SA treebanks restrict commercial use of an MIT-licensed model? (Low priority.)
