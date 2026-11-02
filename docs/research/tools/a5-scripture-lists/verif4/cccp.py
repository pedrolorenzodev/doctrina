import re,glob,html,json
SP='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad/'
def clean(s):
    s=re.sub(r'<[^>]+>','',s); s=html.unescape(s); return re.sub(r'\s+',' ',s).strip()
def load():
    paras={}   # num -> dict(text_html parts, markers [(n,pos in cleaned text)], file)
    for f in glob.glob(SP+'ccc/__P*.HTM'):
        t=open(f,encoding='cp1252',errors='replace').read()
        # footnotes
        notes={}
        for m in re.finditer(r'<a name=\$(\w+) href=#-\w+>(\d+)</a></b></font><font[^>]*>(.*?)<br>',t,re.S):
            notes[int(m.group(2))]=clean(m.group(3))
        # body = before first footnote
        first=re.search(r'<font size=3><b><a name=\$',t)
        body=t[:first.start()] if first else t
        # split into <p> blocks
        blocks=re.findall(r'<p class=MsoNormal[^>]*>(.*?)</p>',body,re.S)
        cur=None
        for b in blocks:
            mk=[(int(m.group(1)),m.start()) for m in re.finditer(r'<sup><a name=-\w+ href=#\$\w+>(\d+)</a></sup>',b)]
            txt=re.sub(r'<sup><a name=-\w+ href=#\$\w+>(\d+)</a></sup>',lambda m:'{{%s}}'%m.group(1),b)
            txt=clean(txt)
            m=re.match(r'^(\d{1,4})\s',txt)
            if m and 1<=int(m.group(1))<=2865:
                cur=int(m.group(1)); paras[cur]={'file':f.split('/')[-1],'blocks':[txt[m.end():]],'notes':notes}
            elif cur is not None and paras[cur]['file']==f.split('/')[-1]:
                paras[cur]['blocks'].append(txt)
    return paras
if __name__=='__main__':
    P=load(); print(len(P))
    p=P[1365]; print(p['file'],p['blocks'])
