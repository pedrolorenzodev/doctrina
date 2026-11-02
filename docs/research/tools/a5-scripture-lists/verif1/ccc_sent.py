exec(open('ccc.py').read())
d=json.load(open('/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/baptism-catholic.json'))
cache={}
def norm(s): return re.sub(r'\s+',' ',s).strip()
n=0
for ri,r in enumerate(d,1):
  for c in r['citedBy']:
    if c['work']!='CCC': continue
    m=re.match(r'§(\d+), fn (\d+)',c['loc']); para=int(m.group(1)); fn=int(m.group(2))
    code=c['url'].split('__P')[1].split('.')[0]
    if code not in cache: cache[code]=parse(load(code))
    paras,fns=cache[code]
    found=[p for p in paras if '@@FN%d@@'%fn in p][0]
    i=found.find('@@FN%d@@'%fn)
    before=norm(re.sub(r'@@FN\d+@@','',found[:i]))
    before=re.sub(r'^\d+\s+','',before)
    # previous markers positions: sentence = after last .?! followed by space+Capital/quote, but only terminal
    s=c['sentence']; core=norm(s.replace('[…]','')); 
    pos=before.rfind(core)
    startsAtBoundary = pos==0 or (pos>0 and re.search(r'[.!?:;]["”]?\s*$',before[:pos]) is not None)
    clipped=s.startswith('[…]') or s.endswith('[…]')
    tail=before[pos+len(core):]
    n+=1
    flag=''
    if not clipped and not startsAtBoundary: flag+=' UNCLIPPED-BUT-NOT-AT-SENTENCE-START(prev: ...%s)'%before[max(0,pos-40):pos]
    if clipped and startsAtBoundary: flag+=' CLIPPED-BUT-FULL'
    if s.endswith('[…]'): flag+=' ENDCLIP'
    if tail.strip(): flag+=' TAIL:'+tail[:50]
    if len(core)>350: flag+=' LONG%d'%len(core)
    if flag: print(ri,c['loc'],flag)
print(n)
print('=====')
cache={}
for ri,r in enumerate(d,1):
  for c in r['citedBy']:
    if c['work']!='CCC': continue
    m=re.match(r'§(\d+), fn (\d+)',c['loc']); para=int(m.group(1)); fn=int(m.group(2))
    code=c['url'].split('__P')[1].split('.')[0]
    if code not in cache: cache[code]=parse(load(code))
    paras,fns=cache[code]
    found=[p for p in paras if '@@FN%d@@'%fn in p][0]
    i=found.find('@@FN%d@@'%fn)
    before=norm(re.sub(r'@@FN\d+@@','',found[:i])); before=re.sub(r'^\d+\s+','',before)
    s=c['sentence']; core=norm(s.replace('[…]','')); pos=before.rfind(core)
    prev=before[:pos].rstrip()[-25:]
    if s.startswith('[…]') or (pos>0 and not prev.endswith(('.','"','”','?','!'))) or (pos>0 and prev.endswith(':')):
        print(ri,c['loc'],'| clipped' if s.startswith('[…]') else '| unclipped','| prev:',repr(prev),'| file:',s[:70],'| len',len(core), '| tailtext', repr(before[pos+len(core):][:20]))
