import re,sys
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad')
from scrlib import *
T=open('/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad/txt/cu31924029369760.txt',errors='replace').read()
SEG={'V':(659394,679554),'VI':(679554,734534),'VII':(734534,763919),'XIII':(787056,819586),'XIV':(819586,888819),'XXI':(933336,959396),'XXII':(959396,998724)}
SYM=r'[\*†‡§\|¶]+'
def trent_refs(sess):
    a,b=SEG[sess]; seg=T[a:b]; out=[]
    for m in ROMBOOK.finditer(seg):
        refs=find_refs_roman(m.group(0))
        if not refs: continue
        # is this a footnote line? preceded by a marker symbol within 6 chars
        pre=seg[max(0,m.start()-8):m.start()]
        sym=re.search(SYM+r'\s*$',pre)
        pos=m.start()
        # sentence: search backwards up to 3500 chars for symbol marker (surrounded by space/punct)
        win=seg[max(0,pos-4000):pos]
        mm=list(re.finditer(r'(?<=[\s,;:.\)])('+SYM+r')(?=[\s,;:.\)])',win))
        # choose last marker that is NOT directly a footnote line start (those are at the end); take the marker whose symbol equals this footnote's symbol
        s=sym.group(0).strip() if sym else None
        cand=[x for x in mm if s and x.group(1)==s]
        sent=None
        if cand:
            x=cand[-2] if len(cand)>=2 else cand[-1]
            # if the last candidate is the footnote line itself, take previous
            before=win[:x.start()]
            before=re.sub(r'\s+',' ',before).strip()
            parts=re.split(r'(?<=[.;:])\s+',before)
            sent=' '.join(parts[-2:]) if len(parts)>1 else before
        for r in refs: out.append((osis(*r[:4]),m.group(0),s,sent,pos+a))
    return out
if __name__=='__main__':
    for s in sys.argv[1:]:
        for o,raw,sym,sent,pos in trent_refs(s): print(s,o,'|',raw,'|',sym,'|',(sent or '')[-200:])
