import json,re,sys
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad')
from scrlib import *
SP='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad'
c=json.load(open(SP+'/ccc/ccc.json'))
def ccc_refs(pars):
    out=[]  # (paragraph, note n, ref tuple, how, notetext)
    for p in pars:
        d=c.get(str(p))
        if not d: out.append((p,None,None,'MISSING',None)); continue
        for f in d['notes']:
            for r in find_refs(f['text']): out.append((p,f['n'],r,'footnote',f['text']))
        for r in find_refs(d['text']): out.append((p,None,r,'inline',d['text']))
    return out
if __name__=='__main__':
    page=sys.argv[1]
    s=open(f'src/content/pages/{page}.es.ts').read()
    ids=sorted(set(int(x) for x in re.findall(r'\{c:CEC(\d+)',s)))
    for p,n,r,how,t in ccc_refs(ids):
        if how=='MISSING': print(p,'MISSING'); continue
        print(p,how,n,osis(*r[:4]),'|',(t or '')[:90] if how=='footnote' else r[4])
