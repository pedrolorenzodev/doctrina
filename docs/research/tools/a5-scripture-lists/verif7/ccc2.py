import re,glob,html,json
paras={}  # n -> list of (noteid, before_text)
notes={}
for f in sorted(glob.glob('ccc/__P*.HTM')):
    s=open(f,encoding='latin-1').read()
    for m in re.finditer(r'<a name=\$([0-9A-Z]+) href=#-[0-9A-Z]+>(\d+)</a></b></font><font[^>]*>(.*?)(?=<font size=3><b><a name=\$|<center>|$)',s,re.S):
        t=re.sub(r'<[^>]+>',' ',m.group(3)); t=html.unescape(t); t=re.sub(r'\s+',' ',t).strip()
        notes[m.group(1)]=(m.group(2),t,f)
    cur=None
    for pm in re.finditer(r'<p class=MsoNormal[^>]*>(.*?)</p>',s,re.S):
        inner=pm.group(1)
        nm=re.match(r'(?:<[a-z][^>]*>)*\s*(\d{1,4})\s(.*)',inner,re.S)
        if nm: cur=int(nm.group(1)); raw=nm.group(2)
        else: raw=inner
        if cur is None: continue
        for mm in re.finditer(r'<sup><a name=-([0-9A-Z]+) href=#\$',raw):
            before=raw[:mm.start()]
            before=re.sub(r'<font[^>]*><sup>.*?</sup></font>','',before,flags=re.S)
            before=html.unescape(re.sub(r'<[^>]+>','',before)); before=re.sub(r'\s+',' ',before).strip()
            paras.setdefault(cur,[]).append((mm.group(1),before,f))
json.dump({'paras':{k:v for k,v in paras.items()},'notes':notes},open('verif7/ccc2.json','w'))
print(len(paras),len(notes))
