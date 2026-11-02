import re,json
S='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad/'
L=open(S+'txt/concordiatriglot00unse.txt',errors='replace').read().split('\n')
d=json.load(open('/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/eucharist-lutheran.json'))
BK=r'(?:[123] ?)?(?:Gen|Ex|Exod|Lev|Num|Deut|Josh|Judg|Ruth|Sam|Kings|Job|Ps|Psalm|Prov|Eccl|Is|Isa|Jer|Lam|Ezek|Dan|Hos|Joel|Amos|Mic|Mal|Malachi|Matt|Matthew|Mark|Luke|John|Acts|Rom|Cor|Gal|Eph|Phil|Col|Thess|Tim|Tit|Titus|Heb|James|Pet|Jude|Rev|Zech)\.?'
rx=re.compile(r'(?<![A-Za-z])('+BK+r')\s*(\d{1,3})\s*,\s*(\d{1,3})[^\n]{0,18}')
regs={'AC X':(51007,51017),'AC XXIV':(53277,53805),'Ap X':(76491,76563),'Ap XXIV':(94114,98808),'SA II II':(104173,105254),'SA III VI':(108159,108199),'LC V':(140669,143197),'Ep VII':(147325,148443),'SD VII':(167836,173700)}
byw={}
for r in d:
    for c in r['citedBy']:
        byw.setdefault(c['work']+'|'+c['loc'],set()).add(r['refs'][0])
for k,(a,b) in regs.items():
    print('==',k)
    seg=L[a-1:b]
    # keep only English pages: chunks starting at header lines 'The Formula of Concord.' / 'The Large Catechism' ; skip chunks with 'Formula Concordiae' (German/Latin)
    txt=[]; eng=True
    for l in seg:
        if re.search(r'Formula Concordiae|Catechismus Maior|Apologia|Confessio Augustana|Articuli Smalcaldici',l) and ('De ' in l or 'Maior' in l): eng=False
        if re.search(r'The Formula of Concord\.|The Large Catechism|Apology\.|Augsburg Confession\.|Smalcald',l): eng=True
        if eng: txt.append(l)
    T='\n'.join(txt)
    T=re.sub(r'\s+',' ',T)
    for m in rx.finditer(T):
        print('  ',m.group(0)[:60],'|',T[max(0,m.start()-40):m.start()].strip()[-30:])
