import re,sys,json
sys.path.insert(0,'.')
from cccp import load
P=load()
ids=[582,1085,1106,1128,1323,1333,1336,1338,1340,1341,1342,1346,1348,1353,1360,1364,1365,1366,1367,1368,1371,1373,1374,1375,1376,1377,1378,1379,1381,1382,1384,1385,1387,1389,1390,1395,1396,1399,1400,1401,1411,1412,1414,1415,1416,1417,1418,1457]
BK=r'(?:[123] ?)?(?:Gen|Gn|Ex|Lev|Lv|Num|Nm|Dt|Deut|Josh|Jos|Judg|Jgs|Ruth|Sam|Kgs|Chr|Ezra|Neh|Tob|Jdt|Est|Mac|Job|Ps|Prov|Pr|Eccl|Qoh|Song|Wis|Sir|Isa|Is|Jer|Lam|Bar|Ezek|Ez|Dan|Dn|Hos|Joel|Jl|Am|Amos|Ob|Jon|Mic|Mi|Nah|Hab|Zeph|Zep|Hag|Zech|Zec|Mal|Mt|Mk|Lk|Jn|In|Acts|Rom|Cor|Gal|Eph|Phil|Col|Thess|Tim|Tit|Titus|Phlm|Heb|Jas|Pet|Jude|Rev|Matt|Mark|Luke|John|Corinthians|Hebrews|Romans|Isaiah|Genesis|Exodus)\.?'
rx=re.compile(r'\b('+BK+r')\s+(\d{1,3})(?:[:.,]\s?\d[\d,\-– ff.]*)?')
found={}
for i in ids:
    p=P[i]
    for bi,b in enumerate(p['blocks']):
        for m in re.finditer(r'\{\{(\d+)\}\}',b):
            n=int(m.group(1)); t=p['notes'].get(n,'')
            for r in rx.finditer(t):
                print(i,'fn',n,'|',r.group(0),'|',t)
    body=re.sub(r'\{\{\d+\}\}','',' '.join(p['blocks']))
    for r in rx.finditer(body):
        print(i,'INLINE',r.group(0),'|',body[max(0,r.start()-60):r.end()+30])
