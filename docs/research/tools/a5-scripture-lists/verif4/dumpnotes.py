import re,sys,json
sys.path.insert(0,'.')
from cccp import load
P=load()
ids=[582,1085,1106,1128,1323,1333,1336,1338,1340,1341,1342,1346,1348,1353,1360,1364,1365,1366,1367,1368,1371,1373,1374,1375,1376,1377,1378,1379,1381,1382,1384,1385,1387,1389,1390,1395,1396,1399,1400,1401,1411,1412,1414,1415,1416,1417,1418,1457]
for i in ids:
    p=P[i]
    # also include following unnumbered blocks (already in blocks)
    print('=== §%d (%s) blocks=%d'%(i,p['file'],len(p['blocks'])))
    for bi,b in enumerate(p['blocks']):
        ms=list(re.finditer(r'\{\{(\d+)\}\}',b))
        for m in ms:
            n=int(m.group(1))
            pre=b[max(0,m.start()-110):m.start()]
            print('  [blk%d] fn %d: %s\n        <<%s'%(bi,n,p['notes'].get(n),pre))
