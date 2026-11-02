import re,sys,json
sys.path.insert(0,'.')
from lb import *
from cccdoc import *
from trent import *
from papal import *
L=List('eucharist/catholic.es.ts','eucharist','catholic')
s=open(REPO+'src/content/pages/eucharist/catholic.es.ts').read()
ids=sorted(set(int(x) for x in re.findall(r'CEC(\d+)',s)))
add_ccc(L,ids)
from trentlib import trent_add
trent_add(L,SEG['XIII'][0],801800,'Session XIII (the Eucharist; page cites ch. 1, 2, 4–6 and can. 1, 2, 4, 6)')
trent_add(L,SEG['XXI'][0],942400,'Session XXI (communion; page cites ch. 1–3 and can. 2)')
trent_add(L,SEG['XXII'][0],981400,'Session XXII (the Mass; page cites ch. 1, 2, 6 and the canons)')
# papal docs
SCa='Sacramentum caritatis (22 Feb 2007), official English text on vatican.va (hf_ben-xvi_exh_20070222_sacramentum-caritatis.html); retrieved 2026-11-01'
papal(L,'sca.txt',[13,48,66],'Sacramentum caritatis',SCa,'https://www.vatican.va/content/benedict-xvi/en/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html','')
MF='Mysterium fidei (3 Sep 1965), official English text on vatican.va (hf_p-vi_enc_03091965_mysterium.html); retrieved 2026-11-01'
papal(L,'mf.txt',[11,24,32,46,56],'Mysterium fidei',MF,'https://www.vatican.va/content/paul-vi/en/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html','')
EDE='Ecclesia de Eucharistia (17 Apr 2003), official English text on vatican.va (hf_jp-ii_enc_20030417_eccl-de-euch.html); retrieved 2026-11-01'
papal(L,'ede.txt',[12,13,16,25,35,45],'Ecclesia de Eucharistia',EDE,'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html','')
L.notes.append('Papal documents: the cited paragraphs were split from the official page text and every «Book N:N» form searched inline. Result: Ecclesia de Eucharistia §12, 13, 16, 25 carry inline references; §35, §45, Sacramentum caritatis §13, §48, §66 and Mysterium fidei §11, §24, §32, §46, §56 carry none in the paragraph text. The numbered footnotes of these documents were not mapped to their paragraphs (the notes_map found none for EdE and SCa markers in the text), so footnote references there are not collected.')
L.notreached+=['Florence (Exsultate Deo, Laetentur caeli), Lateran IV, Roman Catechism (Donovan 1829) cited by the page: not read for references.','Sacrosanctum concilium 55, Orientalium ecclesiarum 5–6, GIRM, CIC canons, John Paul II audiences, Pontifical Council notes: not searched (no Scripture reference expected in the clause cited; not checked).','Trent: Waterworth OCR; windows are the 90 words of OCR text before the printed reference, not a verified decree sentence. Only the doctrinal decrees of Sessions XIII, XXI, XXII were scanned (not the reform decrees), not only the chapters the page cites. After V4 the parser still misses some printed references (e.g. Mal 1:11, 1 Cor 10:21 and about 15 more on the same pages): treat the Trent rows as incomplete.']
print(L.write(REPO+'docs/research/doctrines/scripture-lists','Scripture lists: Eucharist · Catholic','Official documents used by the page `eucharist/catholic`: the CCC paragraphs it cites (footnotes and inline), Council of Trent sessions XIII, XXI, XXII (Waterworth 1848), Ecclesia de Eucharistia, Sacramentum caritatis, Mysterium fidei. Collected 2026-11-01 by session A5.'))
