import re,sys,json
sys.path.insert(0,'.')
from cccp import load
P=load()
D='/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/'
d=json.load(open(D+'eucharist-catholic.json'))
seen=set()
for i,r in enumerate(d,1):
    for c in r['citedBy']:
        if c['work']!='CCC': continue
        m=re.match(r'§(\d+)(?:, fn (\d+))?',c['loc']); par=int(m.group(1)); fn=m.group(2)
        key=(par,fn,c['sentence'])
        p=P[par]; full=' '.join(p['blocks'])
        s=c['sentence']; core=re.sub(r'^\[…\]\s*','',s); core=re.sub(r'\s*\[…\]$','',core)
        plain=re.sub(r'\{\{\d+\}\}','',full)
        plain=re.sub(r'\s+',' ',plain)
        ok=core in plain
        pos=''
        if fn:
            mk=full.find('{{%s}}'%fn)
            before=re.sub(r'\{\{\d+\}\}','',full[:mk])
            immediately=before.rstrip().endswith(core.rstrip())
            pos='ends-at-marker=%s'%immediately
            note=p['notes'].get(int(fn))
        else: pos='inline'; note=''
        clipL=s.startswith('[…]'); clipR=s.endswith('[…]')
        if key in seen and fn: continue
        seen.add(key)
        print(f"#{i} §{par} fn{fn} verbatim={ok} {pos} clipL={clipL} clipR={clipR} note={note!r} refs={r['refs']} url={c['url'][-10:]} file={p['file']}")
