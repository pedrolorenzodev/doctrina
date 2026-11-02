import re,html,json,glob
def load(code):
    t=open(f'ccc/P{code}.htm',encoding='latin-1').read()
    return t
def parse(t):
    # footnotes
    fns={}
    for m in re.finditer(r"<font size=3><b><a name=\$1(\w+) href=#-1\w+>(\d+)</a></b></font>(.*?)(?=<font size=3><b><a name=\$1|\Z)",t,re.S):
        txt=re.sub(r'<[^>]+>',' ',m.group(3)); txt=html.unescape(txt); txt=re.sub(r'\s+',' ',txt).strip()
        fns[int(m.group(2))]=txt
    # paragraphs: split on <p
    paras=[]
    body=t.split('<hr size=1 width=30%')[0]
    for pm in re.finditer(r'<p class=MsoNormal[^>]*>(.*?)</p>',body,re.S):
        h=pm.group(1)
        h=re.sub(r"<font face=Verdana size=2><sup><a name=-1\w+ href=#\$1\w+>(\d+)</a></sup></font>",lambda m:' @@FN%s@@ '%m.group(1),h)
        txt=re.sub(r'<br\s*/?>',' ',h)
        txt=re.sub(r'<[^>]+>',' ',txt); txt=html.unescape(txt); txt=re.sub(r'\s+',' ',txt).strip()
        paras.append(txt)
    return paras,fns
