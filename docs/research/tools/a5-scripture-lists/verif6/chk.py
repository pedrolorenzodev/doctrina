import json,re,sys
which,srcf=sys.argv[1],sys.argv[2]
R='/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/papacy-%s.json'%which
src=open(srcf,errors='replace').read()
def norm(s):
    s=s.replace('’',"'").replace('‘',"'").replace('“','"').replace('”','"')
    s=re.sub(r'-\s*\n\s*','',s)
    s=re.sub(r'\s+',' ',s)
    return s
def alnum(s): return re.sub(r'[^a-z0-9]','',norm(s).lower())
# build alnum source with index map
S=norm(src)
A=[];M=[]
for i,c in enumerate(S):
    cl=c.lower()
    if cl.isalnum() and cl.isascii():
        A.append(cl);M.append(i)
A=''.join(A)
d=json.load(open(R))
n=0
for ri,r in enumerate(d):
    for ci,c in enumerate(r['citedBy']):
        n+=1
        s=c['sentence']
        frs=[f for f in re.split(r'\[…\]|\[…\]',s) if alnum(f)]
        res=[]
        for f in frs:
            a=alnum(f)
            k=A.find(a)
            res.append(k)
        status='OK' if all(k>=0 for k in res) else 'MISS'
        pos=[M[k] for k in res if k>=0]
        print(ri,ci,r['refs'],c['work'][:12],c['loc'][:40],status,'ctx=%s'%(norm(src)[pos[0]-0:pos[0]+0] if pos else ''), 'frags',len(frs),'miss',[i for i,k in enumerate(res) if k<0])
print('----POS')
rows=[]
for ri,r in enumerate(d):
    for ci,c in enumerate(r['citedBy']):
        frs=[f for f in re.split(r'\[…\]',c['sentence']) if alnum(f)]
        k=A.find(alnum(frs[0]))
        multi=A.count(alnum(frs[0]))
        rows.append((c['work'][:6],M[k] if k>=0 else -1,multi,c['loc'].split(';')[0],re.search(r'printed p\. (\d+)',c['loc']).group(1) if re.search(r'printed p\. (\d+)',c['loc']) else '?',r['refs'][0]))
for w in sorted(set(x[0] for x in rows)):
    print('==',w)
    for x in sorted([x for x in rows if x[0]==w],key=lambda x:x[1]): print(x)
