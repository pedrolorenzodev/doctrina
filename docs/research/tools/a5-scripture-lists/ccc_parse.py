import re,glob,json,html
out={}
for f in sorted(glob.glob('__P*.HTM')):
    s=open(f,encoding='latin-1').read()
    # footnote bodies: <b><a name=$ID href=#-ID>N</a></b></font><font ...> TEXT<br>
    notes={}
    for m in re.finditer(r'<a name=\$([0-9A-Z]+) href=#-[0-9A-Z]+>(\d+)</a></b></font><font[^>]*>(.*?)(?=<font size=3><b><a name=\$|<center>|$)',s,re.S):
        t=re.sub(r'<[^>]+>',' ',m.group(3)); t=html.unescape(t); t=re.sub(r'\s+',' ',t).strip()
        notes[m.group(1)]=(m.group(2),t)
    # paragraphs
    body=s
    cur=None
    for pm in re.finditer(r'<p class=MsoNormal[^>]*>(.*?)</p>',body,re.S):
        inner=pm.group(1)
        nm=re.match(r'(?:<[a-z][^>]*>)*(\d{1,4})\s(.*)',inner,re.S)
        if nm and not re.match(r'\s*<p',inner): n=int(nm.group(1)); raw=nm.group(2); cont=False; cur=n
        elif cur is not None and '<sup>' in inner: n=cur; raw=inner; cont=True
        else: continue
        ids=re.findall(r'<a name=-([0-9A-Z]+) href=#\$',raw)
        txt=re.sub(r'<sup>.*?</sup>','',raw,flags=re.S)
        txt=html.unescape(re.sub(r'<[^>]+>','',txt)); txt=re.sub(r'\s+',' ',txt).strip()
        # sentence before each marker
        ctxs={}
        for mm in re.finditer(r'<font[^>]*><sup><a name=-([0-9A-Z]+) href=#\$',raw):
            before=raw[:mm.start()]
            before=re.sub(r'<font[^>]*><sup>.*?</sup></font>','',before,flags=re.S)
            before=html.unescape(re.sub(r'<[^>]+>','',before)); before=re.sub(r'\s+',' ',before).strip()
            after=raw[mm.end():]
            after=after.split('</font>',1)[1] if '</font>' in after else after
            after=re.sub(r'<font[^>]*><sup>.*?</sup></font>','',after,flags=re.S)
            after=html.unescape(re.sub(r'<[^>]+>','',after)); after=re.sub(r'\s+',' ',after).strip()
            after=re.sub(r'^[0-9A-Z$#=\- ]*?\d+\s*','',after,count=1) if re.match(r'^[0-9A-Z$#=\- ]*?\d+\s',after) else after
            prot=re.sub(r'\b(St|Mt|Mk|Lk|Jn|Cf|cf|No|Nos|Ps|Rom|Cor|Gal|Eph|Col|Heb|Pet|Tim|Thess|Acts|Gen|Ex|Lev|Num|Deut|Isa|Jer|Dan|Hos|Mic|Zech|Mal|Wis|Sir|Rev|Ch|ch|Art|art|vv|v|p|pp|Ibid|ibid|e\.g|i\.e|etc|Dr|Mr|Fr|DS|Ep|Serm|Hom|Tract)\.',lambda m:m.group(1)+'\u2024',before)
            ends=[m.end() for m in re.finditer(r'[.!?]["\u201d\u2019]?\s+(?=[A-Z"\u201c\u2018])',prot)]
            start=ends[-1] if ends else 0
            sent=prot[start:].replace('\u2024','.').strip()
            mid=bool(after) and (after[0] in ',;:' or after[0].islower() or after[0] in ')') 
            if mid: sent=sent+' [\u2026]'
            ctxs[mm.group(1)]=sent
        fn=[ {'n':notes[i][0],'text':notes[i][1],'ctx':ctxs.get(i,'')} for i in ids if i in notes]
        if cont and n in out and out[n]['page']==f:
            out[n]['notes']+=fn; out[n]['text']+=' '+txt
        else: out[n]={'page':f,'text':txt,'notes':fn}
json.dump(out,open('ccc.json','w'))
print(len(out), min(out), max(out))
print(out[1257]['notes'], out[1253]['notes'])
