import re,sys,json
sys.path.insert(0,'.')
from lb import *
from cccdoc import *
from trent import *
from vat2 import *
L=List('baptism/catholic.es.ts','baptism','catholic')
s=open(REPO+'src/content/pages/baptism/catholic.es.ts').read()
ids=sorted(set(int(x) for x in re.findall(r'CEC(\d+)',s)))
add_ccc(L,ids)
# Trent
from trentlib import trent_add
trent_add(L,659394,665900,'Session V (decree on original sin; page cites can. 4, 5)')
trent_add(L,684390,685185,'Session VI, ch. 4')
trent_add(L,686679,688625,'Session VI, ch. 6')
trent_add(L,SEG['VII'][0],SEG['VII'][1],'Session VII (canons on baptism and on the sacraments; page cites Del bautismo can. 2,4,5,7,10 and sacraments can. 6–12)')
trent_add(L,824113,826353,'Session XIV, ch. 2')
# Vatican II
def vat_notes(fn,start,end=None):
    t=open(D+fn).read(); n=re.sub(r'\s+',' ',t[start:end]); return t,n
# UR
t=open(D+'vat-ii_decree_19641121_unitatis-redintegratio_en.txt').read()
nn=re.sub(r'\s+',' ',t[t.find('NOTES'):])
def seq_notes(nn,upto):
    d={}; pos=0
    for k in range(1,upto+1):
        m=re.search(r'(?<![0-9])'+str(k)+r'\. ',nn[pos:])
        if not m: break
        d[k]=pos+m.end(); pos=pos+m.end()
    ks=sorted(d)
    out={}
    for i,k in enumerate(ks):
        e=d[ks[i+1]]-len(str(ks[i+1]))-2 if i+1<len(ks) else len(nn)
        out[k]=nn[d[k]:e].strip()
    return out
URN=seq_notes(nn,42)
UR_ED='Unitatis redintegratio (21 Nov 1964), official English text on vatican.va (vat-ii_decree_19641121_unitatis-redintegratio_en.html); retrieved 2026-11-01'
URL_UR='https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_en.html'
ur_sent={ '3':[('6','[…] the Apostle teaches us: "There is one body and one Spirit, just as you were called to the one hope of your calling; one Lord, one faith, one Baptism". […]'),('7','[…] "all you who have been baptized into Christ have put on Christ ... for you are all one in Christ Jesus". […]')],
          '22':[('40','[…] as the Apostle says: "You were buried together with Him in Baptism, and in Him also rose again - through faith in the working of God, who raised Him from the dead". […]')]}
for sec_,items in ur_sent.items():
    for nnum,sent in items:
        note=URN[int(nnum)]
        refs=find_refs(fix_commas(note))
        for r in refs:
            L.add(osis(*r[:4]),'Unitatis redintegratio',f'§{sec_}, fn {nnum}','footnote',sent,UR_ED,'[verified: official vatican.va page, note read from the NOTES section, 2026-11-01]',URL_UR,printed=note)
# LG 16 notes 125-130
lg=open(D+'vat-ii_const_19641121_lumen-gentium_en.txt').read()
LGn=re.sub(r'\s+',' ',lg[155647:])
LG_ED='Lumen gentium (21 Nov 1964), official English text on vatican.va (vat-ii_const_19641121_lumen-gentium_en.html); retrieved 2026-11-01'
LG_URL='https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html'
body=re.sub(r'\s+',' ',lg[:155647])
i16=body.find('16. Finally, those who have not yet received'); e16=body.find(' 17. As the Son was sent',i16)
p16=body[i16:e16]
sents=re.split(r'(?<=[.!?])\s+(?=[A-Z])',p16)
for mk in range(125,131):
    sent=[x for x in sents if re.search(r'\('+str(mk)+r'\)',x)]
    if not sent: L.notreached.append(f'LG §16 fn {mk}: marker not found in the paragraph text'); continue
    sent=re.sub(r'\s*\(\d{1,3}\*?\)','',sent[0])
    m=re.search(r'(?<![0-9])'+str(mk)+r' (.*?)(?= \d{3} |$)',LGn); note=m.group(1).strip()
    nf=note.replace('1 l:28-29','11:28-29')
    for r in find_refs(nf):
        L.add(osis(*r[:4]),'Lumen gentium','§16, fn '+str(mk),'footnote',sent,LG_ED,'[verified: official vatican.va page, note read from the NOTES section, 2026-11-01]'+(' [the reading «11:28-29» of the printed «1 l:28-29» is unverified]' if '1 l:' in note else ''),LG_URL,printed=note,flag=('printed «Rom. 1 l:28-29» (typo on the Holy See page); read as 11:28-29 by Doctrina [unverified]' if '1 l:' in note else None))
L.notreached+=['Florence, *Exsultate Deo* (FLOexs) and Lateran IV constitution 1 (LAT1): cited by the page, no Scripture reference collected in this pass (not read for references).',
 'Roman Catechism and CIC canons cited by the page (CIC 842, 849, 854, 861, 867, 869): canons carry no Scripture references.',
 'Trent: Waterworth OCR only. Known gaps after the V1 verification: the OCR parser does not catch every form («Actsii.», roman «X», «John i.\' 29», «viii. i»), so some printed references of Sessions V, VI and VII (e.g. Session V John 1:29, Rom 8:1, Rom 6:4, Eph 4:22-24, 2 Tim 2:5; Session VI ch. 6 Heb 11:6) may be missing; the «sentence» is a window of OCR text, not the decree sentence; `Acts 4:2` is probably Acts 4:12 and Gal 3:23 (Session XIV) probably Gal 3:27 (unconfirmed, page image not read).',
 'CCC: every paragraph the page cites (including the ones listed only in `citations:` arrays) was parsed from the official English pages, footnotes AND inline references; 2 readings are flagged where the page prints a non-existent verse or a missing colon.']
n,new=L.write(REPO+'docs/research/doctrines/scripture-lists','Scripture lists: Baptism · Catholic','Official documents used by the page `baptism/catholic`: the CCC paragraphs it cites (footnotes and inline), Unitatis redintegratio 3 and 22, Lumen gentium 16, Council of Trent sessions V (original sin), VI (ch. 4, 6), VII, XIV (ch. 2) in Waterworth 1848. Collected 2026-11-01 by session A5; corrected after verifier V1 (`verification-baptism-1.md`).')
print(n,new)
