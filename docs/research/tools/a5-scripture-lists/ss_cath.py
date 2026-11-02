import re,sys
sys.path.insert(0,'.')
from lb import *
from cccdoc import *
from trent import *
from dv import dv_collect
SEG['IV']=(649151,659394)
L=List('sola-scriptura/catholic.es.ts','sola-scriptura','catholic')
s=open(REPO+'src/content/pages/sola-scriptura/catholic.es.ts').read()
ids=sorted(set(int(x) for x in re.findall(r'\{c:CEC(\d+)',s)))
add_ccc(L,ids)
dv_collect(L,[4,5,7,8,9,10,11,12,21,22,24,25])
L.notes.append('Dei verbum: paragraphs 4, 5, 7–12, 21, 22, 24, 25 split from the official page; inline references and the numbered notes of the NOTES section (grouped «Article N») were mapped to the marker in the paragraph. Footnote forms such as «Eph. 1, 3-14» were normalised (comma to colon) by Doctrina in the extraction; the printed note is in the `printed` field of the JSON.')
L.notes.append('Trent Session IV (the decree on the canonical Scriptures and on the edition of the sacred books): V7 found no Scripture reference printed in its OCR text; the earlier `Eph 4:14` row came from Session V (original sin) and was removed.')
L.notreached+=['Footnote markers «(3)» of Dei verbum are dropped from the quoted fragments without a mark (V7).','Dei Filius (First Vatican Council): the Holy See page is Latin only in this pass; not read for references.','Vatican II LG 12, 25; UR 21; SC 7, 24, 51; DH 10; UUS 79; VD 46, 87; Trent VI ch. 8, 20; CIC canons; CDF commentary: cited by the page, not read for references.','CCC paragraphs: the footnotes of every cited paragraph and the inline references were parsed (including DV and Trent cross-references, which are not Scripture and not counted).']
print(L.write(REPO+'docs/research/doctrines/scripture-lists','Scripture lists: Sola Scriptura · Catholic','Official documents used by the page `sola-scriptura/catholic`: the CCC paragraphs it cites, Dei verbum 4, 5, 7–12, 21, 22, 24, 25, Council of Trent Session IV (Waterworth 1848). Collected 2026-11-01 by session A5.'))
