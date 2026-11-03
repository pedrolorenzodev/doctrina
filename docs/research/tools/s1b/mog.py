import re,sys
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from scrlib import *
t=open('/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/txt/mogila.txt').read()
heads=[(m.start(),int(m.group(1))) for m in re.finditer(r'(?m)^\s*Question\s+(\d{1,3})\.',t)]
parts=[(m.start(),m.group(0)) for m in re.finditer(r'(?m)^\s*(?:THE\s+)?(?:FIRST|SECOND|THIRD)\s+PART|PART\s+THE\s+\w+|PART\s+[IVX]+',t)]
def segs():
    out=[]
    for i,(p,n) in enumerate(heads):
        e=heads[i+1][0] if i+1<len(heads) else len(t)
        out.append((n,p,t[p:e]))
    return out
