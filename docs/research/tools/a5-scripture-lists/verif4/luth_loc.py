import re,json,bisect
S='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad/'
lines=open(S+'txt/concordiatriglot00unse.txt',errors='replace').read().split('\n')
def nl(s):
    s=s.replace('’',"'").replace('‘',"'").replace('“','"').replace('”','"')
    s=re.sub(r'(\w)-\s+(\w)',r'\1\2',s)
    return s
parts=[];offs=[];cur=0
for i,l in enumerate(lines):
    l=nl(l.strip())
    if l.endswith('-') and not l.endswith(' -') : seg=l[:-1]
    else: seg=l+' '
    offs.append(cur); parts.append(seg); cur+=len(seg)
N=''.join(parts)
def ncore(s):
    s=re.sub(r'^\[…\]\s*','',s); s=re.sub(r'\s*\[…\]$','',s)
    s=nl(s); return re.sub(r'\s+',' ',s)
N=re.sub(r'\s+',' ',N) if False else N
d=json.load(open('/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/eucharist-lutheran.json'))
out=[]
for i,r in enumerate(d,1):
    for c in r['citedBy']:
        n=ncore(c['sentence'])
        # N may have multiple spaces; compare via regex with flexible whitespace
        pat=re.escape(n).replace('\\ ',r'\s+')
        m=re.search(pat,N)
        if not m: out.append((i,'NOTFOUND')); continue
        ln=bisect.bisect_right(offs,m.start())-1
        out.append((i,r['refs'][0],c['work'],c['loc'],ln+1))
for o in out: print(o)
