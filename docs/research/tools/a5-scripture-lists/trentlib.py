import re,sys
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad')
from lb import *
from trent import T,SEG
WW='J. Waterworth, The Canons and Decrees of the Sacred and Oecumenical Council of Trent (London: Burns and Oates; New York: Catholic Publication Society; preface dated 22 May 1848), archive.org cu31924029369760, OCR djvu text'
TAGT='[unverified: OCR; the reference is read from the OCR text of the scan and its place is not checked on the page image; the «sentence» is a window of OCR text before the reference, not a verified decree sentence]'
def trent_add(L,a,b,locname,ext=3200):
    seg=T[a:b+ext]; seen=set()
    for m in ROMBOOK.finditer(seg):
        in_main=m.start()<(b-a)
        pre=seg[max(0,m.start()-8):m.start()]
        # accept refs in the main slice; in the extension only footnote-style lines (preceded by a footnote symbol)
        if not in_main and not re.search(r'[\*†‡§\|¶]\s*$',pre): continue
        for r in find_refs_roman(m.group(0)):
            if r[2]==0: continue
            o=osis(*r[:4])
            win=re.sub(r'\s+',' ',seg[max(0,m.start()-700):m.end()+60]); ws=win.split(); win=' '.join(ws[-90:])
            L.add(o,'Council of Trent (Waterworth 1848)',locname,'printed reference (footnote/inline)','[…] '+win+' […]',WW,TAGT,printed=re.sub(r'\s+',' ',m.group(0)))
