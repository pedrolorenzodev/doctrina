exec(open('ccc.py').read())
d=json.load(open('/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/baptism-catholic.json'))
cache={}
def norm(s): return re.sub(r'\s+',' ',html.unescape(s)).strip()
res=[]
for ri,r in enumerate(d,1):
  for c in r['citedBy']:
    if c['work']!='CCC': continue
    m=re.match(r'§(\d+), fn (\d+)',c['loc']); para=int(m.group(1)); fn=int(m.group(2))
    code=c['url'].split('__P')[1].split('.')[0]
    if code not in cache: cache[code]=parse(load(code))
    paras,fns=cache[code]
    # find the paragraph with this marker
    found=None
    for p in paras:
        if '@@FN%d@@'%fn in p and re.match(r'%d\b'%para,p): found=p
    if not found:
        for p in paras:
            if '@@FN%d@@'%fn in p: found=p
    status=''
    if not found: status='NOPARA'
    else:
        if not re.match(r'%d\b'%para,found) : status+='PARA?'+found[:10]
        i=found.find('@@FN%d@@'%fn)
        before=found[:i]
        before=re.sub(r'@@FN\d+@@','',before)
        before=re.sub(r'^\d+\s*','',before).strip()
        # sentence before marker: last sentence ending
        sents=re.split(r'(?<=[.!?”"])\s+(?=[A-Z"“&])',before)
        lastsent=sents[-1] if sents else before
        s=c['sentence']
        s_core=norm(s.replace('[…]','').strip())
        b=norm(before)
        exact_tail = b.endswith(s_core)
        clipped = s.startswith('[…]')
        status+=' tailmatch=%s clipped=%s'%(exact_tail,clipped)
        if not exact_tail: status+=' DIFF\n   file: %s\n   mine: %s'%(s_core, b[-len(s_core)-60:])
    print(ri,'+'.join(r['refs']),c['loc'],'| fn:',fns.get(fn),'| printed:',c.get('printed'),'|',status)
