import sys,re; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
T=open(SP+'txt/hc1889.txt').read().split('\n')
def find(pat,a,b):
    for i in range(a,b):
        if re.search(pat,T[i]): return i
starts={69:5799,71:5910,72:5988,73:6038,74:6113,76:6352,77:6457,78:6525,79:6582,80:6690,81:6901,82:6976}
starts[70]=find(r'^[A-Za-z]{3,5}\.? +70\b',5799,5910); starts[75]=find(r'7\s?5\.|Q\.? ?75',6240,6352)
starts[83]=find(r'^[A-Za-z]{3,5}\.?,? +83',6976,7300)
qs=sorted(starts)
RE=re.compile(r'((?:[123I]\s)?[A-Z][a-z]{1,9})\.?,?\s+([ivxl]{1,6})\.?,?\s*(\d+[a-z]?(?:\s*[-–—,]\s*\d+)*)')
ED='The Heidelberg Catechism, with proof-texts and explanations as used in the Palatinate, translated from the German by Rev. H. Harbaugh, D.D. (Reading, Pa.: Daniel Miller, 1889), archive.org heidelbergcatech00harb, OCR djvu text'
URL='https://archive.org/details/heidelbergcatech00harb'
TO='[unverified: OCR; scan page image not read]'
WORK='Heidelberg Catechism'
def build():
    recs=[]
    for k,q in enumerate(qs[:-1]):
        t=re.sub(r'\s+',' ','\n'.join(T[starts[q]:starts[qs[k+1]]]))
        t=re.sub(r'\bQ\. ?\d+\. ?(?:OF [A-Z\' ]+\.?)? ?\d* ?','',t) if False else t
        for m in RE.finditer(t):
            b=m.group(1)
            b=re.sub(r'^I\s','1 ',b)
            b=b.replace(' ','') if re.match(r'^[123]\s',b) else b
            bk=norm_book(b) or norm_book(b+'.')
            if b.startswith('1 ') or b.startswith('2 '): bk=norm_book(b) or bk
            ch=rom(m.group(2))
            if not (bk and ch): continue
            vs=m.group(3).replace('—','-')
            ctx=t[max(0,m.start()-420):m.start()]
            cands=[(ctx.rfind('A. '),3),(ctx.rfind('Again :'),7),(ctx.rfind('Again:'),6)]
            j,ln=max(cands)
            sent=ctx[j+ln:] if j>=0 else '[…] '+' '.join(ctx.split()[-35:])
            if sent.startswith('[…]') and '-4. ' in sent: sent=sent.split('-4. ',1)[1].replace('aud to','and to')
            sent=re.sub(r'Q\. ?\d+\. OF [A-Z\' ]+\. ?\d*','',sent); sent=re.sub(r'\s+',' ',sent).strip()
            for a,bb in vlist(vs): recs.append((q,osis(bk,ch,a,bb),m.group(0),sent))
    return recs
recs=build()
# manual repairs
recs=[r for r in recs if not (r[0]==69 and r[2].startswith('Matt, xxviii. 1') )]
recs.append((69,'Matt.28.19','Matt. xxviii. 19','Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.'))
recs.append((70,'Eph.4.22-Eph.4.24','Eph. iv. 22 — 24','[…] that ye put on the new man, which after God is created in righteousness and true holiness.'))
recs=[r for r in recs if not (r[0]==70 and r[1]=='Eph.4.22')]
recs=[r for r in recs if not (r[0]==82 and r[2].split()[0] in ('Matt,','Tit.','2') or (r[0]==82 and r[2].startswith('Matt. xvi')))]
FL_ALL='the Palatinate edition prints the quoted verse words after the question in «Explanation and Proof»; the reference is printed after them; edition date taken from the Internet Archive record (not read on the title page)'
def put(L,qrange,extra=None):
    n=0
    for r in L.data:
        r['citedBy']=[x for x in r['citedBy'] if '(Explanation and Proof)' not in x['loc']]
    L.data=[r for r in L.data if r['citedBy']]
    for q,ref,pr,sent in recs:
        if q not in qrange: continue
        flag=FL_ALL
        if extra and ref in extra: flag+='; '+extra[ref]
        words=sent.split()
        s=sent if len(words)<=60 else '[…] '+' '.join(words[-60:])
        pr2=pr.replace('I John','1 John')
        L.add(ref,WORK,f'Q. {q} (Explanation and Proof)','proof-text reference (Palatinate edition)',s,ED,TO,URL,pr,flag); n+=1
    return n
B=Lst('baptism-reformed')
put(B,range(69,75),{'John.5.6':'the OCR reads «I John v. 6»; read as 1 John 5:6 by Doctrina [unverified]','Isa.4.4':'as printed «Isa. iv. 4»'})
B.nr_replace=[x.replace('Scripture proofs of Heidelberg Q. 69–74 and Belgic Art. 34 in a printed Reformed edition other than Schaff 1877: none read.','Heidelberg Q. 69–74 proofs: read in the Palatinate edition (Harbaugh, Reading 1889, OCR) in S1b; Belgic Art. 34 notes: unchanged.') for x in ['Scripture proofs of Heidelberg Q. 69–74 and Belgic Art. 34 in a printed Reformed edition other than Schaff 1877: none read.','Westminster 1894 page images: not read; every record is `[unverified: OCR]`.','Q. 166–167 clause attribution of the proofs (interleaved columns).']]
B.save(); print('BR',B.before,len(B.data),B.newcites)
E=Lst('eucharist-reformed')
put(E,range(75,83),{'John.6.63':'the OCR reads «1 John vi. 63» in Q. 76 and «John vi. 63» in Q. 80; the wording is John 6:63','1Cor.11.23':'Q. 77 prints «1 Cor. xi. 23» for the institution words (the whole Q. 77 block carries this single reference in the OCR)'})
E.extra_notes=(E.extra_notes or [])+['Heidelberg Q. 75–82: the proof texts of the Palatinate edition (Harbaugh, Reading 1889, OCR; the same quoted-words-then-reference structure in every question); the four references that follow the running head «Q. 83. Of the Keys» (Matt 18:15–17, Titus 3:10, 2 Cor 2:6–7, Matt 16:19) are not collected here because their question is not certain.']
E.save(); print('ER2',E.before,len(E.data),E.newcites)
