import sys,re
sys.path.insert(0,'.')
from trig import *
L=List('eucharist/lutheran.es.ts','eucharist','lutheran')
TG='Concordia Triglotta (St. Louis: Concordia Publishing House, 1921), English column, archive.org concordiatriglot00unse, OCR djvu text'
TAG='[unverified: OCR; Triglot page image not read]'
U='https://archive.org/details/concordiatriglot00unse'
secs=[('Augsburg Confession','Art. X',1801663,1801905),('Augsburg Confession','Art. XXIV (Of the Mass)',1877727,1897157),('Apology','Art. X',2796622,2799453),('Apology','Art. XXIV (XII) (Of the Mass)',3462286,3637981),('Smalcald Articles','Part II, Art. II (Of the Mass)',3833940,3855000),('Smalcald Articles','Part III, Art. VI',3971558,3972984),('Large Catechism','Part V (Sacrament of the Altar)',5068723,5159066),('Epitome of the Formula of Concord','Art. VII',5299000,5333250),('Solid Declaration','Art. VII',6028754,6233261)]
for work,loc,a,b in secs:
    for o,raw,win,pos,er in tri_refs(a,b):
        fl=None
        pm=parse_osis(o)
        if pm and pm[1][1]>=60 and pm[0] not in ('Ps','Isa'): fl='verse number looks like an OCR error (read «'+re.sub(r'\s+',' ',raw)+'»); not corrected [unverified]'
        FIX={'Rom.9.2':('Rom.8.2','OCR reads «Rom. 9, 2»; the page image reads 8, 2 (V4)'),'Gal.6.92':('Gal.6.2','OCR reads «Gal. 6, 92»; the page image reads 6, 2 (V4)'),'Gen.1.98':('Gen.1.28','OCR reads «Gen. 1, 98»; the page image reads 1, 28 (V4)')}
        if o in FIX: o,fl=FIX[o][0],FIX[o][1]
        L.add(o,work,loc,'inline reference (Book N, N)',win,TG,TAG,U,re.sub(r'\s+',' ',raw),fl)
IDF='the print names the evangelists and St. Paul only; the passages are identified from the quoted words by Doctrina [unverified]'
sc='The holy Evangelists, Matthew, Mark, Luke, and St. Paul, write thus: Our Lord Jesus Christ, the same night in which He was betrayed, took bread: and when He had given thanks, He brake it, and gave it to His disciples, and said, Take, eat; this is My body, which is given for you. This do in remembrance of Me.'
for o in ['Matt.26.26-Matt.26.28','Mark.14.22-Mark.14.24','Luke.22.19-Luke.22.20','1Cor.11.23-1Cor.11.25']:
    L.add(o,'Small Catechism','Part VI (Sacrament of the Altar)','names of the Evangelists (no chapter or verse)',sc,TG,TAG,U,'The holy Evangelists, Matthew, Mark, Luke, and St. Paul',IDF)
L.notes.append('Method: the English windows of each section were scanned for «Book N, N» and «Book N:N» forms; windows with a low English-word ratio (Latin or German columns) were dropped. The Triglot prints references in the comma form; some verse numbers are OCR errors and are flagged, not corrected. Small Catechism VI names the evangelists without chapters; AC X and the Small Catechism print no numbered reference.')
L.notes.append('The Large Catechism range runs to the start of the Epitome (it includes the Short Exhortation to Communion); the Epitome VII range is the pages headed «Epitome. VII. Of the Lord\'s Supper».')
L.notreached+=['Verifier V4 reports seven references printed in the English columns that this list lacks (Heb 10:10, 1 Pet 2:5, Heb 13:15, 1 Pet 1:2, Heb 5:1, Gal 5:19, Col 3:4): the regex patterns of this pass did not locate them in the OCR; the Epitome VII range was corrected (ten rows from Epitome VI removed); Matt 9:12 / 11:5 and similar «N; N» continuations were read from the print as the print gives them.','Triglot page images not read: every record is `[unverified: OCR]`.','The Apology and Solid Declaration windows were matched by regex; named references without numbers («as St. Paul says»), and the Smalcald Articles III VI («as Paul says»), were not searched exhaustively.','Formula of Concord Epitome/SD VII German and Latin columns were not used.']
print(L.write(REPO+'docs/research/doctrines/scripture-lists','Scripture lists: Eucharist · Lutheran','Official documents used by the page `eucharist/lutheran`: Augsburg Confession X and XXIV, Apology X and XXIV, Smalcald Articles II II and III VI, Small and Large Catechism, Formula of Concord Epitome VII and Solid Declaration VII (Concordia Triglotta 1921, English column). Collected 2026-11-01 by session A5.'))
