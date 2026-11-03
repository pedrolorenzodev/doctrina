import sys,re,json; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from scrlib import *
T=open('/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/txt/hc1889.txt').read().split('\n')
heads=[(i,int(m.group(1))) for i,l in enumerate(T) for m in [re.match(r'\s*(?:Qaes|Ques|Qnes|Quea|Qees|Qoes|Qaes|Qiies)\.?\s+(\d{1,3})\.',l)] if m]
def seg(q):
    for k,(i,n) in enumerate(heads):
        if n==q:
            e=heads[k+1][0] if k+1<len(heads) else len(T); return re.sub(r'\s+',' ','\n'.join(T[i:e]))
def refs(t):
    out=[]
    for m in re.finditer(r'((?:[123]\s)?[A-Z][a-z]{1,9})\.?,?\s+([ivxl]{1,6})\.?,?\s+(\d+[a-z]?(?:\s*[-–,]\s*\d+)*)',t):
        b=m.group(1); 
        if re.match(r'^[123]\s',b): b=b.replace(' ','')
        bk=norm_book(b) or norm_book(b+'.')
        ch=rom(m.group(2))
        if bk and ch:
            for a,bb in vlist(m.group(3)): out.append((bk,ch,a,bb,m.group(0)))
    return out
