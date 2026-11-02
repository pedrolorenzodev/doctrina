import sys
sys.path.insert(0,"/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad/verify4")
import re
from lib import *
pat=re.compile(sys.argv[1],re.I)
vids=sys.argv[2:] or allvids()
tot=0
for v in vids:
    cues=load(v)
    big="";pos=[]
    for i,(t,x) in enumerate(cues):
        pos.append((len(big),i)); big+=x+" "
    for m in pat.finditer(big):
        ci=max(p[1] for p in pos if p[0]<=m.start())
        print(f"{v} {cues[ci][0]} | {big[max(0,m.start()-70):m.end()+70]!r}")
        tot+=1
print("hits",tot)
