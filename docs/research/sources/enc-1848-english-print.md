# K4: the 1848 Encyclical of the Eastern Patriarchs, English: is the e-text used, and is there a print? (session A2, 2026-11-01)

Status: draft, NOT verified by Pedro

## Progress

- Done 2026-11-01 evening: where the e-text is used in the repo; one library record of a printed English edition found; no free scan of it found. Not done: a scan of the 1867 print, a comparison of its text with the e-text.

## Is the e-text used?

Yes. `src/content/registry/editions.ts` l. 706, 714, 722 and 730 (four edition rows) describe the English as «Encíclica de los patriarcas orientales (mayo de 1848), leída en el Internet History Sourcebook de Fordham (copia de orthodoxinfo.com); traductor e impresión desconocidos, «© Paul Halsall», sin uso comercial. Licencia no determinada». The works registry has `enc-1848` (`src/content/registry/works.ts` l. 331) and a status-line work `status-st1848-p`. In the research files: `doctrines/papacy/catholic.md` l. 315 (the row Enc-1848, read at `https://sourcebooks.web.fordham.edu/mod/1848orthodoxencyclical.asp`), l. 734 (decision 20, licences before `data/`), `doctrines/papacy/verification-catholic.md` l. 87 and l. 280 (A14, A23: the Fordham page's own notice says the electronic form is © Halsall 1998, no commercial use; translation and print edition unknown). Outside `docs/research/`, report only: those four registry rows rest on a text whose licence is not determined.

## A printed English edition exists (library record, not a scan)

University of Pennsylvania catalogue record 9962070133503681 (read 2026-11-01, `https://find.library.upenn.edu/catalog/9962070133503681`): *Encyclical epistle of the one Holy Catholic and Apostolic Church to the faithful everywhere: being a reply to the epistle of Pius IX to the Easterns, dated January 6, 1848*, by the Orthodox Eastern Church; New York: J. F. Trow, Printers, 1867; 48 pages; series «Papers of the Russo-Greek Committee, 2nd ser., no. 1»; «Pamphlet no. 2415», «Halifax no. 7961»; OCLC 830943364; the translator is not named on the record; the access offered is Gale's *Nineteenth Century Collections Online* (restricted by site licence), a reproduction of the copy at the Pusey House Library; the record notes the scan's title page is largely unreadable. `[verified: library record; the print itself not seen]`.

A print of 1867 is public domain in the United States by age. What is **not** established: that the e-text on Fordham is a transcription of this print (the Fordham page names no translator or print), and the print's text itself.

## What was searched and not found

- archive.org advanced search for the title, for «Russo-Greek Committee» and for «Encyclical … Eastern Patriarchs»: the only hit, `paperrussogreek00eastrich` (*Papers of the Russo-Greek Committee and of Eastern Church Association*, 1863 as the item's date), was read in OCR and does **not** contain the 1848 encyclical (no occurrence of «encyclical»).
- One web search for an 1850s English printing (Palmer, Denton, Blackmore): none found. Cornell's eCommons holds a PDF «Encyclical of the Eastern Patriarchs, 1848» that the record says was previously published at orthodoxinfo.com (that is the same e-text family, not a print).
- HathiTrust: one catalogue search by title answered nothing usable from the command line; not tried with a browser.

## Open and recommendation

- To settle the licence of the English text the project uses, the 1867 print would have to be collated against the e-text: a free scan (HathiTrust full view, Google Books, the Pusey House or another library's own digitisation) has to be found first. Agent's call: keep the e-text **research-only** (as `papacy/catholic.md` decision 20 already says), and add the 1867 print as the target edition for F4 («registry re-sourcing to dated scans»), which waits on Pedro.
- The Greek text of the encyclical was not looked for; no other English version was searched for beyond the one web search above.
