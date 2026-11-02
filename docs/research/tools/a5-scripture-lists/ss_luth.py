import sys,re
sys.path.insert(0,'.')
from trig import *
L=List('sola-scriptura/lutheran.es.ts','sola-scriptura','lutheran')
TG='Concordia Triglotta (St. Louis: Concordia Publishing House, 1921), English column, archive.org concordiatriglot00unse, OCR djvu text'
TAG='[unverified: OCR; Triglot page image not read]'; U='https://archive.org/details/concordiatriglot00unse'
def add_range(work,loc,a,b):
    for o,raw,win,pos,er in tri_refs(a,b):
        fl=None; pm=parse_osis(o)
        if pm and pm[1][1]>=60 and pm[0] not in ('Ps','Isa'): fl='verse number looks like an OCR error [unverified]'
        L.add(o,work,loc,'inline reference (Book N, N)',win,TG,TAG,U,re.sub(r'\s+',' ',raw),fl)
add_range('Formula of Concord, Epitome','Rule and Norm, §§1–2',5162000,5170123)
add_range('Formula of Concord, Solid Declaration','Rule and Norm, §14',5489000,5502000)
add_range('Augsburg Confession','Art. XXVIII (Of Ecclesiastical Power)',1962119,1962119+30000)
L.add('Gal.1.8','Formula of Concord, Epitome','Rule and Norm, §1','inline reference','And St. Paul: Though an angel from heaven preach any other gospel unto you, let him be accursed, Gal. 1, 8.',TG,TAG,U,'Gal. 1, 8')
for o,pr in [('1Tim.3','1 Timothy 3'),('2Tim.3.16','2 Timothy 3:16 (bracketed in the Latin)')]:
    L.add(o,'Formula of Concord, Solid Declaration','Rule and Norm, §14 (German p. 854, Latin p. 856)','chapter named (German/Latin columns)','(English column not matched in this pass; read from the dossier)', 'Concordia Triglotta 1921, German and Latin columns, as recorded in sola-scriptura/lutheran.md','[verified earlier: scan, per sola-scriptura/lutheran.md (L-05); not re-read by A5]',U,pr,'the dossier records the chapter only («the odd 1 Timothy chapter») and the bracketed 2 Timothy reference of the Latin; not collated against the English column')

# --- corrections after verifier V7 ---
WIDE={'John.20.21':'John.20.21-John.20.23','John.16.12':'John.16.12-John.16.13','Matt.15.14':'Matt.15.13-Matt.15.14','Col.2.16':'Col.2.16-Col.2.23'}
SUBS=[('Whenee','Whence'),('à yoke','a yoke'),('Let mo man judge yow','Let no man judge you'),('am holy-day','an holy-day'),('mew moon','new moon'),('from.the rudiments','from the rudiments'),('Jewish - fables','Jewish fables'),('amy other','any other'),(' yow ',' you '),('Recewe','Receive'),(' ete.',' etc.'),('sueh','such'),('eomp.','comp.'),('publie','public'),('Seripture','Scripture')]
import re as _re
for k in list(L.recs):
    r=L.recs[k]
    for x in r['citedBy']:
        t=x['sentence']
        for a,b in SUBS: t=t.replace(a,b)
        t=_re.sub(r'(\w)- (?=[a-z])',r'\1',t).replace(' _ ',' ')
        x['sentence']=t
        if x['loc']=='Rule and Norm, §§1–2' and k=='Ps.119.105': x['loc']='Rule and Norm, §1'
        if x['work']=='Formula of Concord, Epitome' and 'Rule and Norm, §§1–2' in x['loc']: x['loc']=x['loc'].replace('§§1–2','§1')
    if k in WIDE:
        L.recs[k]['refs']=[WIDE[k]]
        for x in r['citedBy']: x['flag']=((x.get('flag') or '')+' range widened to what the print gives (V7: «John 20, 21 sqq.», «16, 12. 13», «15, 14. 13», «16—23»)').strip()
for _k,_v in WIDE.items():
    if _k in L.recs: L.recs[_v]=L.recs.pop(_k)
# sentences from the printed English p. 855 / 856 (page image n1140 read by verifier V7)
PR='[…] Moreover, since for the preservation of pure doctrine and for thorough, permanent, godly unity in the Church it is necessary, not only that the pure, wholesome doctrine be rightly presented, but also that the opponents who teach otherwise be reproved, 1 Tim. 3 (2 Tim. 3, 16); Titus 1, 9, — for faithful shepherds, as Luther says, should do both, namely, feed or nourish the lambs and resist the wolves, so that the sheep may flee from strange voices, […]'
for k in ('Titus.1.9','1Tim.3','2Tim.3.16'):
    if k in L.recs:
        for x in L.recs[k]['citedBy']:
            if 'Solid Declaration' in x['work']:
                x['sentence']=PR; x['loc']='Rule and Norm, §14 (English p. 855; German p. 854, Latin p. 856)'; x['tagCite']='[verified: page image n1140 (English p. 855) read by verifier V7 2026-11-02; the German/Latin evidence is the dossier\'s]'; x['flag']='1 Tim. 3 and 2 Tim. 3:16 are printed together in the English «1 Tim. 3 (2 Tim. 3, 16)»'
JC='[…] John 10, 12, and may separate the precious from the vile, Jer. 15, 19, — Therefore we have thoroughly and clearly declared ourselves to one another, also regarding these matters, as follows: that a distinction should and must by all means be observed between unnecessary and useless wrangling […]'
for k in ('John.10.12','Jer.15.19'):
    if k in L.recs:
        for x in L.recs[k]['citedBy']:
            if 'Solid Declaration' in x['work']: x['sentence']=JC; x['flag']='sentence recut from the print by V7 (the earlier window began with the running head of p. 857 and crossed a page break)'

L.notes.append('Scope: the Lutheran page cites FC Ep RN 7–8 and SD RN 10 (the Rule and Norm). References were scanned in the English columns of Ep RN 1–2, SD RN 14 and the whole of AC XXVIII (30,000 characters from the article heading, which may run past the article\'s end into the Conclusion). The numbered references found in AC XXVIII are partly beyond §§5–17 the dossier records; they are all printed in the article.')
L.notes.append('Not reached by the Triglot English scan: Epitome RN 3–8 and SD RN 1–13 and 15 print no «Book N, N» reference in the windows scanned (not exhaustively checked); the Smalcald Articles preface and the Apology (Scripture and tradition passages) were not searched.')
L.notreached+=['AC XXVIII English refs V7 reports as missing: Acts 15:20, Acts 5:29, 1 Pet 5:3, 1 Tim 4:1, Gal 5:1, 1 Cor 11:5, 14:30, 14:40, Phil 2:14 (the patterns of this pass did not locate them); corrected after V7: ranges widened, Ps 119:105 locator, OCR slips, hyphen joins (the page images of pp. 85, 87, 89, 855–857 were read by V7).','Triglot page images not read: every record is `[unverified: OCR]` except the two rows taken from the dossier.','The Apology (Art. IV, VII, XV on traditions) and the Smalcald Articles (II, II/III): not searched for references.']
print(L.write(REPO+'docs/research/doctrines/scripture-lists','Scripture lists: Sola Scriptura · Lutheran','Official documents used by the page `sola-scriptura/lutheran`: Formula of Concord Epitome and Solid Declaration (Rule and Norm), Augsburg Confession XXVIII (Concordia Triglotta 1921, English column). Collected 2026-11-01 by session A5.'))
