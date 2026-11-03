import sys,json,subprocess,re,glob,os; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
REPO='/Users/pedrolorenzo/Desktop/dev/doctrina/'
def head_json(name):
    p='docs/research/doctrines/scripture-lists/'+name+'.json'
    out=subprocess.run(['git','-C',REPO,'show','HEAD:'+p],capture_output=True,text=True).stdout
    return json.loads(out)
READ={
 'baptism-lutheran':'Apology IX (whole), Smalcald III V, Large Catechism IV (English, by script), Epitome XII, Solid Declaration XII (Anabaptist errors); Augsburg IX and Small Catechism IV (already read)',
 'sola-scriptura-lutheran':'Augsburg Confession XXVIII (English column: eight references), Apology XXVIII.17 (Gal 5:1)',
 'eucharist-lutheran':'Augsburg Confession XXIV, Apology XXIV, Large Catechism V, Solid Declaration VII (the seven references of V4 and Heb 10:14)',
 'papacy-lutheran':'Augsburg Confession XXVIII closing paragraphs (Acts 5:29, 1 Pet 5:3)',
 'baptism-orthodox':'Philaret Q. 285–306 (whole), Dositheus Decree XV (OCR), Confession Chapters XV and XVI (page images pp. 201–202)',
 'eucharist-orthodox':'Philaret Q. 315–350 (whole), Dositheus Decree XV (OCR), Confession Chapters XV and XVII (page images pp. 201, 205)',
 'sola-scriptura-orthodox':'Philaret Q. 1–62 (OCR), Mogila Part I Q. 1–12 (the rest of Q. 4), Dositheus Decrees II–III and appended Questions I–III of the Decrees (OCR) and of the Confession (page images pp. 209–212)',
 'baptism-reformed':'Heidelberg Q. 69–74 (Palatinate edition, Harbaugh, OCR)',
 'eucharist-reformed':'Westminster Larger Catechism Q. 168–177 proof blocks (page images pp. 203–210, read by an extraction subagent: 70 blocks), Belgic Art. 35 notes (Schaff III, OCR), Heidelberg Q. 75–82 (Palatinate edition, OCR)',
 'sola-scriptura-reformed':'Belgic Art. 2, 3 and 7 notes (Schaff III, page images)',
 'eucharist-baptist':'2LCF 30.7–30.8 (1688 print p. 102, page image)',
 'baptism-catholic':'Donovan 1829 Roman Catechism on baptism (OCR footnotes), Trent Session V canons 3 and 5 (page images pp. 23–24) and Session VI (OCR), Florence Exsultate Deo (baptism passage), Lateran IV c. 1 (whole; no Scripture); Lumen gentium rows trimmed',
 'eucharist-catholic':'Donovan 1829 Roman Catechism on the Eucharist (OCR footnotes), Florence (form of the Eucharist)',
 'papacy-catholic':'Donovan 1829 ninth article (footnotes, Peter), Pastor aeternus (editors\' footnotes 37–60 of the online English)',
 'sola-scriptura-catholic':'Dei filius (editors\' footnotes 3–35 of the online English), CCC §§91–93',
}
LC='Westminster Larger Catechism Q. 168–177 and Q. 2–4, 157–159 and Shorter Catechism Q. 2–3 from page images (read by one Sonnet extraction subagent; see the closure notes)'
NOTREAD={
 'baptism-lutheran':'Solid Declaration II/VII on baptism; Large Catechism IV in the German column; Treatise',
 'sola-scriptura-lutheran':'Epitome VII and Solid Declaration VII–VIII named references without numbers; Triglot page images (AC pp. 85–93, Ap pp. 443–451, SA pp. 471–475) not collated',
 'eucharist-lutheran':'Epitome VII/Solid Declaration VII–VIII named references; Ap XXIV Latin «Ex. 29, 39 sq.; Dan. 8, 11 sq.; 12, 11»; page images',
 'papacy-lutheran':'Page images AC pp. 85–93, Ap pp. 443–451, SA pp. 471–475',
 'baptism-orthodox':'1895 Encyclical (no print cached), Jeremiah Answers, Mogila Q. 102–103 re-read, Philaret page images',
 'eucharist-orthodox':'1895 Encyclical, Jeremiah Answers, Mogila Q. 108 onward; page images of Philaret and Mogila',
 'sola-scriptura-orthodox':'Mogila Part I Q. 13–126 for Scripture answers; Jeremiah Answers; 1848 Encyclical; Philaret page images',
 'baptism-reformed':'Westminster LC Q. 165–167 clause matching; Belgic Art. 34 notes; 1894 page images',
 'eucharist-reformed':'Belgic Art. 35 page images; WLC/WSC clause-to-letter matching outside Q. 168–177; Shorter Catechism Q. 96–97 already read',
 'sola-scriptura-reformed':'Westminster Larger Catechism Q. 2–4 and 157–159 and Shorter Catechism Q. 2–3 proofs (extraction cut for budget); Belgic Art. 4–6 (no notes seen); Heidelberg Q. 98; Westminster Confession proofs already read',
 'eucharist-baptist':'1688 pp. 103+; chapter 30 in the 1719 print; First London, Standard, Somerset (no Supper chapter in the dossier)',
 'baptism-baptist':'1688 margins of 29.1–29.2 collation of clauses; BF&M official-page re-read; Standard Confession XIII, Somerset',
 'papacy-baptist':'2LCF 26.7 onward in the 1688 print (not read: image work not done in S1b); First London and Somerset church chapters',
 'sola-scriptura-baptist':'2LCF 1.1–1.3 pp. 1–2 (leaves n24–n25) not re-read; 1688 margins',
 'baptism-catholic':'Roman Catechism pages and footnote markers; Trent Sessions V (other canons), VI, VII page images; Florence Laetentur caeli; CIC (no Scripture)',
 'eucharist-catholic':'Sacrosanctum concilium 55, Orientalium ecclesiarum 5–6, GIRM, JP II audiences; Trent XIII/XXI/XXII page images; Laetentur caeli',
 'papacy-catholic':'Roman Catechism Peter section markers; Trent Sessions',
 'sola-scriptura-catholic':'Roman Catechism on Scripture and tradition; Trent Session IV; DV footnote markers (flagged only)',
 'papacy-orthodox':'not touched in S1b (md regenerated)',
 'papacy-reformed':'not touched in S1b (md regenerated)',
}
names=sorted(os.path.basename(f)[:-5] for f in glob.glob(OUT+'*-*.json'))
rows=[]
for n in names:
    a=head_json(n); b=json.load(open(OUT+n+'.json'))
    ca=sum(len(r['citedBy']) for r in a); cb=sum(len(r['citedBy']) for r in b)
    na=sum(1 for r in a if not r.get('inPage')); nb=sum(1 for r in b if not r.get('inPage'))
    trimmed=sum(1 for r in b for x in r['citedBy'] if 'trimmed to' in x.get('flag','') and 'S1b' in x.get('flag',''))
    docs=sum(1 for r in a for x in r['citedBy'])
    ocr=sum(1 for r in b for x in r['citedBy'] if 'unverified: OCR' in x.get('tagCite','') or 'OCR' in (r.get('tag') or ''))
    rows.append((n,len(a),len(b),na,nb,ca,cb,trimmed))
L=['# S1b closure, 2026-11-02: what was added to each Scripture list','','Status: draft, NOT verified by Pedro','',
 'Counts are recounted by script (`docs/research/tools/s1b/t5_closure.py`) from the current `.json` files and from the `.json` committed at HEAD (the state at the start of the session). «Citations» = entries of `citedBy` (one per document locator); «new» = records no verse of the page\'s `scripture` list covers. «Rows changed» = rows trimmed by the quotation rules in S1b. The four Papacy lists of Codex (Catholic, Orthodox, Lutheran, Reformed) keep their schema; their `.md` was regenerated from the `.json` with the same table. Nothing in this session was checked by a verifier (parameter of the day): every addition carries its own tag.','',
 '| List | Records before → after | New against the page before → after | Citations before → after | Rows changed | Read in S1b | Still not read |','|---|---|---|---|---|---|---|']
for n,ra,rb,na,nb,ca,cb,tr in rows:
    rd=READ.get(n,'—'); nr=NOTREAD.get(n,'—')
    L.append(f'| {n} | {ra} → {rb} | {na} → {nb} | {ca} → {cb} | {tr} | {rd} | {nr} |')
tot=[sum(r[i] for r in rows) for i in range(1,7)]
L+=['',f'Totals: records {tot[0]} → {tot[1]}; new against the pages {tot[2]} → {tot[3]}; citations {tot[4]} → {tot[5]}.','']
open(OUT+'s1b-closure-2026-11-02.md','w').write('\n'.join(L)+'\n')
print(tot)
