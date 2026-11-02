import sys,re,os,glob
C=os.environ['SCR']+'/corpus'
pat=re.compile(sys.argv[1],re.I)
secs=sys.argv[2].split(',') if len(sys.argv)>2 and sys.argv[2] else None
width=int(sys.argv[3]) if len(sys.argv)>3 else 500
hits=[]
for f in sorted(glob.glob(C+'/*.txt')):
    sec=os.path.basename(f).split('__')[0]
    if secs and sec not in secs: continue
    t=open(f,errors='ignore').read()
    ms=list(pat.finditer(t))
    if ms:
        url=t.split('\n',1)[0][5:]
        hits.append((len(ms),url,f,t,ms))
hits.sort(key=lambda x:-x[0])
for n,url,f,t,ms in hits[:int(os.environ.get('TOP','12'))]:
    by=re.search(r'\n([A-Z][A-Za-z.\' -]{3,40}) • (\d{1,2}/\d{1,2}/\d{4})',t) or re.search(r'\n([A-Z][A-Za-z.\' -]{3,40})\n•\n(\d{1,2}/\d{1,2}/\d{4})',t)
    print('###',n,url,'| by',by.group(1) if by else '?', by.group(2) if by else '')
    m=ms[0]
    print(re.sub(r'\s+',' ',t[max(0,m.start()-width//3):m.start()+width]))
print(len(hits),'files')
