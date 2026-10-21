# Applying `ignatius-dating-scholars.verify.md` (2026-10-21)

Files edited: `docs/research/neutral/ignatius-dating-scholars.md`, `docs/research/neutral/births-and-ignatius.md` (RSR fix only). Method: `docs/playbooks/apply-corrections.md`. The books were not opened (ROADMAP queue item 15, second part, Codex). No git writes.

Independent checks in this step: Crossref API (RSR 82/3, pp. 389–399; Vinzent monograph published online 2023-11-07, ISBN 9781003378303, no print date; Barnes 120/3, 119–130); ISBN-13 check digits (978-0-8006-6016-2 fails, -1 passes; 978-0-8006-9659-7 and 978-90-04-11505-7 pass); lobid GND 114699768X (Lechner, 1962, Theologe). All agree with the verifier.

## births-and-ignatius.md

- §2 table, Decrept row, and Sources list: «82, no. 4 (2008)» → «82, no. 3 (2008)» (two places). Source: Crossref / OpenEdition, verify "Wrong items" 1.

## ignatius-dating-scholars.md (section, before → after, source)

Progress: «Two facts are not published… Decrept's nationality and Lechner's birth year and nationality» → only Decrept's nationality; added the "Verification applied" bullet (wrong items, imprecise, not-found items, what was not applied). Scholar records:

1. **Decrept**: «born 1928» → birth year `[unsure]` (Persée record also lists a 1910 work; verify "Imprecise"); «no. 4» → «no. 3» (wrong 1); «2001 Paris IV thesis» → «2001 thesis under Monique Alexandre»; «Paris IV» unsupported (not shown on the page).
2. **Pervo**: heading «Richard Ivan Pervo» → «Richard I. Pervo» («Ivan» unconfirmed); biographical source (Rothschild memorial in *Ancient Education and Early Christianity*) removed: the cited PDF is *Reading and Teaching Ancient Fiction* (SBL 2018) with no such memorial (wrong 2); replaced by Wikipedia (11 May 1942, Lakewood – 19 May 2017, Saint Paul) and the TUM catalogue, tagged secondary; one-day disagreement kept (SBL 2018 acknowledgements: 20 May); the dating «c. 135–140 for Ignatius/the corpus» with Eusebius/Pauline grounds → «Wikipedia, citing Pervo 2010 pp. 134–135: Ignatius' death, 135–140; book not opened; grounds unconfirmed».
3. **Barnes**: «in part because he sees knowledge of Valentinian/Ptolemaean terminology; rejects both…» → the abstract's words (Eusebius' Trajan date not authoritative; "probably the 140s"; knew the writings of the Gnostic Ptolemaeus; "transcend the terms of the traditional debate"); «British» → England-born (GND); IAS profile claims marked unconfirmed (HTTP 403); Göttingen profile added (Toronto 1976–2007, Edinburgh since 2008).
4. **Vinzent**: «historian of religion» → theologian/university professor (GND), fields «Patristic and Medieval Studies» (KCL); «after 170 and no later than c. 170–177» → «after 170, at the latest c. 177», pp. 28–31 unconfirmed; «2024» → published online 7 Nov 2023 (Crossref), print year unconfirmed; «living» → no death record.
5. **Lightfoot**: dating object martyrdom (title «martirio y cartas» → «martirio»); vol. 2 pp. 448–471 marked not located; Durham and Trinity pages marked not reopened; the quote of p. 30 and the «commonest date about 107» sentence added.
6. **Zahn**: added the verified p. 61 quote and place of birth and death; Niedersächsische record marked not reopened (HTTP 502).
7. **Harnack**: «in 1878 he argued that the letters could not be earlier» → he took it as the view of most historians, declined to prove it there, and reported Zahn's proof of authenticity (imprecise); 1897 pp. 400–404 → 400–406 (wrong 5); late value «a little later» → 117–125; heading text updated.
8. **Lake**: Trajan range attributed to Lake's own judgment → Lake's report of a general tendency among critics (p. 166 quoted; imprecise); life dates added; pp. 165–171 range end not checked; open question (survey card or drop) noted.
9. **Schoedel**: «1930–2024» → died 1 April 2024 aged 94, birth year not found (blog only); obituary URL added; ISBN …-2 → …-1 (wrong 3); Wipf and Stock claim and «c. 110 working setting» marked unconfirmed.
10. **Joly**: c. 165/Smyrna and pseudepigraphy tagged secondary (Wikipedia only); «imaginary character» remark added with its tag; editions and life dates unchanged.
11. **Hübner**: «German» → born in Oppeln (GND states no nationality); 160–180 is Schreiber's grouping of Hübner, Lechner and Theobald, not each author's own range; «living» = no death record, last dated evidence 2017.
12. **Lechner**: «birth year and nationality not published» → born 1962 (GND 114699768X), LoC associated country Germany, caveat (wrong 4); 2018 «Oberstudienrat in Munich» → not found; pp. 75–120 → 75–115 (Schreiber n. 30); Schreiber n. 36 clarified (Polycarp).
13. **Titles table and rules**: every example now carries the work's year (rule 6); Lake's row relabelled «resumen de la crítica» (title-format 1); Pervo's object «muerte de Ignacio» per the secondary source (2); Vinzent's two bounds as «después de 170, a más tardar c. 177» (3); life-span rule rewritten to «Nació/Murió», «†», «Nacimiento: desconocido», no «n.», «m.», «vive» (4, DECISIONS 2026-10-06); Lightfoot's object «martirio» (7). Harnack 1897 title gets 117–125.
14. **Product recommendation**: the claim that the four primary proposals' «objects and dates were reopened directly» corrected (only Decrept and Barnes abstracts); note that Lake is a survey and that Pervo, Vinzent, Schoedel, Joly rows stay hidden in 09 until the book check.

## Not applied, and why

- Title-format item 5 («década de 140»): a style choice, left to Pedro (noted in the table).
- Book verifications (Pervo pp. 134–135, Vinzent pp. 28–31 and print year, Schoedel's c. 110, Joly's c. 165 and authenticity, Lightfoot vol. 2 pp. 448–471, traditional c. 107–110): out of scope, Codex.
- Lake's survey-or-drop question is Pedro's.
- Outside my files: `births-and-ignatius.md` §2 still states Pervo's, Barnes' and Vinzent's grounds, and the Pervo/Vinzent datings, as read (unconfirmed per the verifier), and `births-and-ignatius.md` §1 cites Lake and Schoedel without those caveats; not edited because the brief limited it to the RSR fix. Any data or proposal page built from the dating rows should take the tags from `ignatius-dating-scholars.md`.
