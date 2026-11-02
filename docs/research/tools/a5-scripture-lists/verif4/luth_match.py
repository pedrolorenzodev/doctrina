import re,json,sys
S='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad/'
t=open(S+'txt/concordiatriglot00unse.txt',errors='replace').read()
def norm(s):
    s=s.replace('’',"'").replace('‘',"'").replace('“','"').replace('”','"')
    s=re.sub(r'-\s*\n\s*','',s)
    s=re.sub(r'(\w)-\s+(\w)',r'\1\2',s)
    s=re.sub(r'\s+',' ',s)
    return s
# keep map from normalized pos to raw pos is hard; build normalized text and keep raw too
N=norm(t)
d=json.load(open('/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/eucharist-lutheran.json'))
res=[]
for i,r in enumerate(d,1):
    for c in r['citedBy']:
        s=c['sentence']; core=re.sub(r'^\[…\]\s*','',s); core=re.sub(r'\s*\[…\]$','',core)
        n=norm(core)
        pos=N.find(n)
        res.append((i,r['refs'][0],c['work'],c['loc'],pos>=0,pos,len(n)))
bad=[x for x in res if not x[4]]
print(len(res),'records; not found verbatim after normalisation:',len(bad))
for b in bad: print(b)
json.dump(res,open(S+'verif4/luth_res.json','w'))
