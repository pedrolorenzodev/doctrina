import json,re,sys
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad')
from lb import *
c=json.load(open(SPD+'ccc/ccc.json'))
CCC_ED='Catechism of the Catholic Church, English text, official page on vatican.va (archive/ENG0015; the page states no edition year); retrieved 2026-11-01'
SIC={ 'Rom 6:34':('Rom.6.3-Rom.6.4',"printed «Rom 6:34» on the Holy See page (chapter 6 has no verse 34); read as 6:3-4 by Doctrina [unverified]"),
      'Mk 10 14':('Mark.10.14','printed «Mk 10 14» (colon missing) on the Holy See page; read as Mk 10:14 by Doctrina [unverified]')}
def add_ccc(L,pars):
    for p in pars:
        d=c.get(str(p))
        if not d: L.notreached.append(f'CCC {p}: paragraph not found by the page parser'); continue
        url='https://www.vatican.va/archive/ENG0015/'+d['page']
        for f in d['notes']:
            txt=f['text']
            for m in re.finditer(r'Mk 10 14',txt): pass
            refs=find_refs(txt)
            if 'Mk 10 14' in txt:
                refs=[r for r in refs if not (r[0]=='Mark' and r[1]==10 and r[2] is None)]
                refs.append(('Mark',10,14,14,'Mk 10 14'))
            sent=f.get('ctx','')
            sent=clip_tail_words(sent,40)
            refs=[r for r in refs if not (r[0]=='Lev' and 'Hom. in Lev' in txt)]
            for r in refs:
                o=osis(*r[:4]); flag=None; printed=None
                if r[0]=='Rom' and r[1]==6 and r[2]==34: o='Rom.6.3-Rom.6.4'; printed='Rom 6:34'; flag=SIC['Rom 6:34'][1]
                if r[0]=='Mark' and r[1]==10 and r[2]==14: printed='Mk 10 14'; flag=SIC['Mk 10 14'][1]
                L.add(o,'CCC',f'§{p}, fn {f["n"]}','footnote',sent,CCC_ED,('[unverified: the printed form is read by Doctrina; the footnote text itself: verified, official vatican.va page, 2026-11-01]' if flag else '[verified: official vatican.va page, machine-extracted footnote, 2026-11-01]'),url,printed,flag)
        for r in find_refs(d['text']):
            o=osis(*r[:4])
            L.add(o,'CCC',f'§{p}','inline',clip_tail_words(d['text'],40),CCC_ED,'[verified: official vatican.va page, machine-extracted inline reference, 2026-11-01]',url)
