# Permission request drafts (not sent)

_Collected from the 2026-10-09 source research (`sources.md`). Nothing was sent: Pedro decides what to send, when, and who signs. Before sending: a public demo URL (several drafts reference one), the operating entity and signatory (`sources.md` §6, decision 4), and an honest statement of the paid plans (every draft already says the site may become paid). Suggested order is in `sources.md` §6, decision 5. The drafts below are copied from the area reports; edit placeholders in brackets._

## 1. Rights-holder directory and generic templates

### 1.1 What to ask for (learned from how others did it)
- **Sefaria (closest analogue: a free library of a religious corpus with original texts + translations):** accepts PD, CC0, CC BY, CC BY-SA, CC BY-NC (case by case). Two models that worked: (a) a **platform-only grant** — JPS: "The JPS Tanakh translations are only free for use on Sefaria" (JPS announcement, fetched https://jps.org/resources/jps-bible-translation-enters-digital-era-with-sefaria/; partnership by June 2016); (b) a **funded open release** — Koren/Steinsaltz Talmud under "Creative Commons Non-Commercial license ... CC BY-NC 4.0", keeping explanatory notes and the vocalised Koren-font text proprietary (Koren blog, fetched https://korenpub.com/blogs/blog/technology-partnership-with-sefaria). Lesson: **ask for a display licence scoped to Doctrina** (no redistribution, no download, attribution + buy-link), not for an open licence — it is what publishers say yes to. A CC BY-NC grant would not work for us if Doctrina is paid, so ask explicitly for "commercial use on doctrina.app/... including behind a subscription".
- **Catholic precedents** (detailed in catholic-modern report): USCCB refused a daily-CCC site three times and sent a cease-and-desist to FlockNote, later licensing the **Compendium** instead; the Picayune parish got Vatican permission by mail (1999); papalencyclicals.net states LEV permission to reprint electronically. App developers (CCCSeries quiz apps) avoid hosting the CCC and **link to vatican.va** (search snippet of App Store descriptions; not opened).
- **Litigation precedent (why we never "just post" a modern religious translation):** *Society of the Holy Transfiguration Monastery v. Gregory*, 689 F.3d 29 (1st Cir. 2012): the monastery's English translations of liturgical/patristic Greek texts are copyrightable; an archbishop who posted ~1,000 pages lost (summaries: Justia https://law.justia.com/cases/federal/appellate-courts/ca1/11-1262/11-1262-2012-08-02.html, US Copyright Office fair-use index https://www.copyright.gov/fair-use/summaries/soc%E2%80%99yhtm-gregory-1stcir2012.pdf — search snippets; opinion not read in full tonight). Fair use failed even for a religious, non-profit use.
- CPH (verified on https://www.cph.org/copyrights-permissions, rendered): for *Concordia: The Lutheran Confessions* (2005/2006): quoting "up to and inclusive of **200 sentences** without express written permission ... providing that the words quoted do not amount to a complete work, nor account for 25 percent or more of the total text of the work in which they are quoted", **but** "Publication of any work intended for commercial sale that uses Concordia ... is strictly prohibited without the express written permission". Contact copyrights@cph.org, 800-325-0191; web form. CPH Small Catechism (1986): "Other than reproduction ... for noncommercial personal, congregational, or classroom use ... without prior written permission". → For the site use the PD Triglot (Bente/Dau 1921) and ask CPH only if we want the modern text.
- CRC/Faith Alive (verified): free "for study, education, review, or worship use up to 100 copies ... distributed free of charge" → a paid site needs permission: Permissions@crcna.org (decoded from the page), Faith Alive Christian Resources, 1700 28th Street SE, Grand Rapids, MI 49508.
- USCCB Permissions Policy page (rendered, https://www.usccb.org/media/permissions-policy): per-text rules (Lectionary one-time print use free with notice); Bible permissions: https://www.usccb.org/offices/new-american-bible/permissions (search snippet: NABRE >5,000 words or >40 % of a book needs permission; nabperm@usccb.org — verify before writing).

### 1.2 Rights-holder directory (who we will likely need)
| Rights holder | What we'd need from them | Contact (verified = I or another agent loaded it tonight) |
|---|---|---|
| **Libreria Editrice Vaticana – Ufficio Diritti** (Holy See) | Papal/curial texts after ~1939 (CCC typica, Compendium, encyclicals, CIC 1983 Latin), EN/ES official translations or referral | diritti.lev@spc.va, +39 06 6984 5766 (catholic-modern, verified); Foreign Rights page https://www.libreriaeditricevaticana.va/it/content/16-foreign-rights |
| **Dicastery for Communication** | deep-link permission to vatican.va (ToS) | spc@spc.va (catholic-modern, verified) |
| **USCCB** | CCC English (1994/1997), NABRE, Lectionary | https://www.usccb.org/media/permissions-policy (verified); NAB: nabperm@usccb.org (snippet) |
| **Conferencia Episcopal Española / Asociación de Editores del Catecismo / BAC** | CCC Spanish, Biblia CEE, BAC volumes (Nácar-Colunga, Padres) | CEE info@conferenciaepiscopal.es (catholic-modern, verified); BAC secretariadireccion@bac-editorial.es, https://bac-editorial.es/es/contactanos (search snippet) |
| **Editorial Ciudad Nueva** (Madrid; *Biblioteca de Patrística*, Spanish Fathers) | Spanish translations of Fathers | info@ciudadnueva.com; https://www.ciudadnueva.com/contacto (home page, fetched) |
| **Concordia Publishing House / Editorial Concordia** | *Concordia* (EN BoC), *Libro de Concordia* (Meléndez, ES), Luther's Works vols 1–30, 56+ | copyrights@cph.org; https://www.cph.org/copyrights-permissions (verified) |
| **1517 Media (Fortress/Augsburg Fortress)** | Tappert BoC 1959 (**renewed 1987**, verified in NYPL data), Kolb–Wengert BoC 2000, Luther's Works vols 31–55 | no permissions page found at /permissions (404); use the publisher contact (to find) |
| **Faith Alive / CRCNA** | Belgic, Heidelberg, Dort (2011 translations) | Permissions@crcna.org (verified) |
| **Canadian Reformed Churches – Standing Committee for the Book of Praise** | Heidelberg/Belgic CanRC translation (if chosen) | (protestant-magisterial report; not verified by me) |
| **Southern Baptist Convention / Lifeway** | BF&M 2000 (+ official Spanish "Fe y Mensaje Bautistas 2000") | bfm.sbc.net footer "© 2026 Southern Baptist Convention" (fetched); no reuse statement; Lifeway Press is named as permissions addressee in Lifeway BF&M publications (search snippet) |
| **Banner of Truth** | modern Puritan/Reformed editions, Spanish via Estandarte de la Verdad | permissions page URL moved (404 tonight); find contact |
| **Crossway** | ESV text, modern creeds hymns (as in Creeds.json) | https://www.crossway.org/permissions/ (verified; per-product pages) |
| **Canon Law Society of America** | CIC English | (catholic-modern: CLSA enforces) |
| **Holy Transfiguration Monastery (Brookline)**, **St Vladimir's Seminary Press**, **Antiochian Archdiocese**, Orthodox dioceses (Guatemala, Buenos Aires) | modern English/Spanish Orthodox liturgical & patristic translations | HTM litigates (1st Cir. 2012) → ask, never copy; others see orthodox report |
| **Christian Classics Ethereal Library** (Harry Plantinga) | ThML files (only if we want them) | web form https://www.ccel.org/info/email.html |
| **Kevin Knight / New Advent LLC** | not needed (rebuild from PD) | feedback732 at newadvent.org (changes) |
| **BnF Gallica** | commercial reuse licence for a Gallica-only scan | utilisation.commerciale@bnf.fr (verified) |
| **Biblioteca Virtual Miguel de Cervantes** | a specific transcription | "Solicitud de contenidos" form (spanish-pd report) |
| Bible publishers (SBU/RVR1960, Biblica/NVI, Lockman, Desclée/BJ, Verbo Divino, San Pablo) | modern Spanish/English Bibles | see bible-66 report |

### 1.3 Template email — English (for a publisher / church body)
Subject: Permission request — display of [TITLE, EDITION] on Doctrina (study website)

Dear [Rights and Permissions team],

I run Doctrina (https://[domain]), a bilingual (English/Spanish) study website on Christian doctrine. For each doctrine it presents what the Catholic, Orthodox, Lutheran, Reformed and Baptist traditions teach, each in its own words, with every source cited by edition. We never paraphrase a tradition: we quote its primary texts.

We would like permission to display **[the full text / sections X–Y] of [TITLE], [translator/editor], [publisher, year, ISBN]** in our online reader, where readers can open a numbered paragraph and see it next to the related sources.

Scope we are asking for:
- Use: display on doctrina.[…] and its apps only; no downloads, no export, no API access to the text; copying limited by the reader UI.
- Languages/territory: [English / Spanish], worldwide (the site is hosted in the United States and read mostly in Spain, Argentina and the rest of Latin America).
- Commercial context: the site is free during validation and may later include a paid subscription; we ask that the permission cover both.
- Credit: the copyright line exactly as you specify, on every page that shows the text, with a link to buy your edition.
- Integrity: verbatim text, no alteration; corrections only with your approval.
- Term: [3 years, renewable] — revocable on [90] days' notice, after which we remove the text.

If a full-text licence is not possible, would you allow [N] quotations of up to [N] words each, used inside our commentary with the copyright line and a link?

We are glad to discuss a fee or a royalty, to send you usage figures, and to show you the pages before publication. I attach a screenshot of how the text would appear.

Thank you for considering this.
[Name], Doctrina — [email] — [postal address]

### 1.4 Plantilla — español (editorial / conferencia episcopal / sociedad bíblica)
Asunto: Solicitud de autorización — [TÍTULO, EDICIÓN] en Doctrina (sitio de estudio)

Estimados señores del departamento de derechos:

Dirijo Doctrina (https://[dominio]), un sitio bilingüe (español/inglés) de estudio de la doctrina cristiana. Para cada doctrina muestra lo que enseñan las tradiciones católica, ortodoxa, luterana, reformada y bautista, cada una con sus propias palabras y con cada fuente citada por edición. No parafraseamos a ninguna tradición: citamos sus textos.

Quisiéramos su autorización para mostrar **[el texto completo / los apartados X–Y] de [TÍTULO], [traductor/editor], [editorial, año, ISBN]** en nuestro lector en línea, donde el lector abre un número o párrafo y lo ve junto a las fuentes relacionadas.

Alcance que solicitamos:
- Uso: solo visualización en doctrina.[…] y sus aplicaciones; sin descarga, sin exportación y sin acceso al texto por API.
- Idioma y territorio: [español], en todo el mundo (el sitio se aloja en Estados Unidos y se lee sobre todo en España, Argentina y el resto de América Latina).
- Contexto comercial: el sitio es gratuito durante la fase de validación y podría incluir más adelante una suscripción de pago; pedimos que la autorización cubra ambos casos.
- Mención: la línea de copyright exactamente como ustedes indiquen, en cada página que muestre el texto, con enlace para comprar su edición.
- Integridad: texto literal, sin alteraciones; correcciones solo con su visto bueno.
- Plazo: [3 años, renovables], revocable con [90] días de preaviso, tras lo cual retiramos el texto.

Si no fuera posible una licencia del texto completo, ¿nos permitirían [N] citas de hasta [N] palabras cada una, dentro de nuestro comentario, con la línea de copyright y el enlace?

Con gusto conversamos una tarifa o regalía, les enviamos datos de uso y les mostramos las páginas antes de publicarlas. Adjunto una captura de cómo se vería el texto.

Les agradezco su atención.
[Nombre], Doctrina — [correo] — [dirección postal]

### 1.5 Short variant for CCEL (only if we want their ThML)
Subject: Commercial-use request for CCEL ThML of public-domain texts
"Dear Dr. Plantinga, … we would like to use CCEL's ThML encodings of [NPNF2-14; Schaff, Creeds III; …] (public-domain print bases) as a starting point for our own edition on a bilingual study site that may become subscription-based. We would remove CCEL's introductions/summaries and cover art, credit 'Digital text: Christian Classics Ethereal Library (ccel.org)' with a link on every page, and can make a donation or pay a licence fee. May we?" (send via https://www.ccel.org/info/email.html).

## 2. Holy See and Catholic bodies (from `sources/catholic-modern.md` §7)

Priority and sequencing (nothing is sent by the agent; Pedro decides):
1. **LEV — Ufficio Diritti (worldwide; Dr. Francesca Angeletti, diritti.lev@spc.va, +39 06 698 45363)**. One request covering: (a) CCC (Latin typica + permission to use the existing national translations, or referral to the national holders), (b) Compendium, (c) papal documents from Pius XII to Leo XIV used in doctrine pages (full text in the reader), (d) Ecclesia de Eucharistia specifically for the Eucharist pilot, (e) CIC 1983 Latin. Ask for: non-exclusive, worldwide, web-only licence; read-only display; unaltered text with © LEV notice; fee structure for a subscription site; and whether a free/non-commercial tier would be treated differently.
2. **Dicastery for Communication (DPC), spc@spc.va** — short note asking written permission to deep-link to vatican.va document URLs (ToS §5). Could be folded into the LEV email (same Dicastery) — recommended to fold.
3. **USCCB (Subcommittee on the Catechism / USCCB Publishing)** — only for US English and US Spanish CCC/Compendium text if LEV refers us there. Expect: review of the work, 3 copies, 10% royalty basis. Lower chance of yes; ask for the Compendium first.
4. **CEE / Asociación de Editores del Catecismo (Spain), info@conferenciaepiscopal.es** — Spanish CCC & Compendium text for Spain/LatAm, if LEV refers us.
5. **CLSA** (canon law English) — not worth asking now; quote single canons.
6. **ICEL / national liturgical commissions** — not now; use PD Tridentine texts + quotes.
Order: send #1 (+#2) first; wait for LEV's answer (they hold worldwide rights and may route us); only then #3/#4.

### Draft A — LEV (English; Italian version can be prepared)
Subject: Permission request — magisterial texts in a bilingual (es/en) online study resource ("Doctrina")

Dear Dr. Angeletti,

I am Pedro Lorenzo, founder of Doctrina, a bilingual (Spanish/English) website for the in-depth study of Christian doctrine, currently in an early validation stage. For each doctrine (beginning with the Eucharist), Doctrina presents what each Christian tradition teaches, in its own words, with exact citations and editions. The Catholic position is presented exclusively through the Church's own texts; the site does not paraphrase or comment on them as its own teaching.

We would like to request a non-exclusive licence to display, without any alteration and with the notice "© Libreria Editrice Vaticana", the following texts in our online reader (read-only, no download), worldwide:
1. The Catechism of the Catholic Church and its Compendium, in Spanish and English (or guidance on which national translations we should use and whom to contact);
2. Papal documents from Pius XII to the present that are relevant to the doctrines covered, starting with the encyclical Ecclesia de Eucharistia (2003);
3. Selected canons of the Code of Canon Law (1983) in Latin.
We would also like written permission to link directly to the corresponding pages on www.vatican.va, as required by its Terms of Use.

Doctrina is intended to become a paid subscription product in the future. Could you please tell us the conditions and fees that would apply, and whether a different arrangement exists for free, non-commercial access to these texts? We are happy to send a demonstration of how the texts are displayed and credited.

Thank you for your time and attention.
Yours sincerely,
Pedro Lorenzo — Doctrina — [email] — [URL of demo]

### Draft B — USCCB (only if LEV refers us)
Subject: Request — Compendium / CCC excerpts in an online study resource
Dear Subcommittee on the Catechism / USCCB Publishing,
Doctrina (bilingual es/en, online) presents the teaching of the Catholic Church on specific doctrines in the Church's own words. Following your "Revised Statement of Principles and Guidelines for Use of the CCC" (April 2015), we will keep quotations below 5,000 words with the required notice. We would like to ask permission to display the full text of the Compendium of the CCC (English, and Spanish for the US) in our reader, unaltered and with the required notice, and to know the applicable conditions for a future paid subscription (Guideline IV). We can submit the work for review as the guidelines require. [signature]

### Draft C — CEE (Spanish)
Asunto: Solicitud de autorización — textos del Catecismo de la Iglesia Católica y su Compendio (edición española)
Estimados señores: Doctrina es un sitio web bilingüe (español/inglés) de estudio de la doctrina cristiana que presenta la enseñanza católica exclusivamente con los textos de la Iglesia, citados con edición y sin alteraciones. Quisiéramos solicitar autorización para reproducir íntegramente, con la nota de copyright correspondiente, el texto español del Catecismo de la Iglesia Católica y de su Compendio, o bien que nos indiquen el titular de los derechos de la edición española (Asociación de Editores del Catecismo) y las condiciones aplicables a un futuro servicio de suscripción. Quedamos a disposición para enviar una demostración. Atentamente, Pedro Lorenzo — Doctrina.

### Interim policy until licences arrive (recommendation)
- CCC/Compendium/post-1939 papal texts/CIC 1983/current Missal: show only what the study page comments on, each quote ≤ ~300 words and the strictly needed part (AR art. 10 caps at 1,000 words per quote; ES art. 32 "en la medida justificada"; US fair use favours short, commented quotations), with full citation + © notice + link to the official text. Keep a site-wide counter of US English CCC words (USCCB 5,000-word threshold).
- Everything else in this area goes into the full reader from PD sources listed in §2.

### Italian variant for LEV, Vatican II only (from `sources/councils-creeds.md` §7)

To: diritti.lev@spc.va (Foreign Rights Office, Dr. Francesca Angeletti)
Subject: Richiesta di autorizzazione – testi del Concilio Vaticano II su sito di studio (Doctrina)

Gentile Dott.ssa Angeletti,
scrivo a nome di Doctrina, un sito bilingue (spagnolo/inglese) di studio della dottrina cristiana che presenta, per ogni dottrina, i testi delle diverse tradizioni citati integralmente e con la fonte. Chiediamo l'autorizzazione a riprodurre online, in forma integrale e immutata, le versioni spagnola e inglese (e il testo latino) delle costituzioni, decreti e dichiarazioni del Concilio Vaticano II come pubblicate su vatican.va, con la dicitura "© Libreria Editrice Vaticana. Riprodotto con autorizzazione" e il link alla pagina ufficiale. Il sito è in fase iniziale, ospitato negli Stati Uniti e letto in Argentina, Spagna, America Latina e paesi anglofoni; in futuro potrebbe prevedere un abbonamento. Non modificheremo i testi. Potrebbe indicarci le condizioni (eventuali diritti, durata, menzioni richieste)? 
Cordiali saluti, Pedro [cognome], Doctrina — [email]
(Spanish/English version can be prepared; send only after Pedro decides.)

## 3. Free-church and evangelical bodies (from `sources/free-church.md` §3)


**A. SBC Executive Committee — BF&M 2000 (EN + official ES)** — to: Executive Committee of the SBC, 901 Commerce St., Nashville, TN 37203 (contact form on sbc.net; address from memory, unverified).
> Subject: Permission to display the Baptist Faith and Message 2000 (English and Spanish) in full
> We are building Doctrina, a bilingual (Spanish/English) study site that presents what each Christian tradition teaches in its own words, quoting primary documents exactly, with source and edition. For the Southern Baptist position we would like to display the full text of the Baptist Faith and Message 2000 and its official Spanish translation "Fe y Mensaje Bautistas 2000", unaltered, with the credit line "© Southern Baptist Convention. Used by permission." and a link to bfm.sbc.net. The site is free to read now and may later offer paid features. May we have your written permission? We are happy to follow any wording or conditions you require.

**B. Lausanne Movement — Lausanne Covenant, Manila Manifesto (EN + ES)** — to: communications@lausanne.org (address given on their Cape Town Commitment page). Same body, citing "El Pacto de Lausana" and "Manifiesto de Manila" from lausanne.org/es, unaltered, credit "© Lausanne Movement".

**C. Alliance of Confessing Evangelicals — Chicago Statements** — to: alliance@alliancenet.org. Ask: (1) confirm the "may be reproduced without permission" notice covers use on a site that may become paid; (2) permission for the **Exposition** of the 1978 Statement and the 1982 Hermeneutics statement; (3) permission to publish **our own Spanish translation**, labelled as such.

**D. General Council of the Assemblies of God — Statement of Fundamental Truths (EN + "Declaración de Verdades Fundamentales")** — to: info@ag.org (address from their Terms of Use). Same body.

**E. Wesley Heritage Foundation / Instituto de Estudios Wesleyanos — *Obras de Wesley* (sermons, NT Notes, Treatise on Baptism)** — via https://www.estudioswesleyanos.org contact. Ask for a commercial-use licence for named sermons, keeping their credit line.

**F. Dionisio Byler (menonitas.org) — Spanish Schleitheim + Dordrecht (© 1995)** — via menonitas.org. Ask permission to reproduce his Spanish edition with credit.

**G. Editorial Peregrino (Spain) / Cristianismo Histórico (NJ) — Spanish 1689** — Peregrino: La Almazara 19, 13350 Moral de Calatrava (Ciudad Real), as printed in their PDF. Their notice only forbids reproduction "para la venta"; ask explicitly for web display on a site with paid features.

**H. Heirs of Allan Román / spurgeon.com.mx — Spanish Spurgeon sermons** — only if Doctrina needs more than a handful of Spurgeon sermons in Spanish.


## 4. Others mentioned in the reports (drafts not written; use the templates in §1)
- **Jünemann's Spanish Septuagint (1992 ed.)**: rights holder probably the Arzobispado de Concepción or the "Centro de ex alumnos del Seminario Conciliar de Concepción" (editors G. Leiva Carrasco, A. Naranjo Urrutia). Ask for a non-exclusive worldwide licence to display the translation text (not the 1992 notes). Argument: PD in Chile/Argentina/Spain; only the US §303 term (to 2047) remains (`sources/deutero-orthodox.md` §7).
- **Beta maṣāḥǝft / Ran HaCohen**: one-line confirmation that the CC BY-SA files of 1 Enoch and Jubilees allow commercial reuse.
- **Dicastery for Promoting Christian Unity, LWF, WCC, Anglican Communion Office, CPCE, BWA, Ecumenical Patriarchate**: one letter per holder for the modern ecumenical texts (JDDJ, BEM, ARCIC, Leuenberg, Ravenna/Chieti, Catholic–Baptist 2010, Crete 2016) (`sources/overlooked-era.md` §5).
- **Spanish holders that fill tradition gaps**: Misión Luterana de Puerto Rico (Book of Concord in Spanish: ask for an explicit CC BY on the confession texts), Editorial ATR (Westminster Larger Catechism), Cantauque monastery / OCMC Guatemala (Orthodox liturgy), Ediciones Monte Casino (Philokalia), Editorial Concordia / CPH (Libro de Concordia, Meléndez 1989), Faith Alive / CRCNA (Belgic, Heidelberg, Dort in Spanish).
- **A Catholic Spanish Bible publisher** (BAC, Desclée, Verbo Divino, San Pablo, CEA): see `sources/legal-gaps.md`.
- **CCEL**: only if we want their ThML (§1.5 above).
