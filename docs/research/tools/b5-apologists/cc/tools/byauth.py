import sys,re,os,glob
C=os.environ['SCR']+'/corpus'
pat=re.compile(sys.argv[1],re.I)
w=int(sys.argv[2]) if len(sys.argv)>2 else 320
WANT=('Joe Heschmeyer','Karlo Broussard','Jimmy Akin','Trent Horn')
best={}
for f in glob.glob(C+'/*.txt'):
    sec=os.path.basename(f).split('__')[0]
    t=open(f,errors='ignore').read()
    ms=list(pat.finditer(t))
    if not ms: continue
    by=re.search(r'\n([A-Z][A-Za-z.\' -]{3,40}) • (\d{1,2}/\d{1,2}/\d{4})',t) or re.search(r'\n([A-Z][A-Za-z.\' -]{3,40})\n•\n(\d{1,2}/\d{1,2}/\d{4})',t)
    a={'sp':'Joe Heschmeyer','drk':'Karlo Broussard','tjap':'Jimmy Akin'}.get(sec) or (by.group(1) if by else '?')
    if a not in WANT: continue
    key=a
    sc=len(ms)
    if key not in best or sc>best[key][0]: best[key]=(sc,f,ms[0],t)
for a,(sc,f,m,t) in sorted(best.items()):
    url=t.split('\n',1)[0][5:]
    print('##',a,sc,url)
    print('  ',re.sub(r'\s+',' ',t[max(0,m.start()-w//3):m.start()+w]))
