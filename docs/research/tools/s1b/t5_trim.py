import sys,re; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
HOLY=re.compile(r'Catechism of the Catholic|^CCC|Lumen gentium|Dei verbum|Unitatis|Ecclesia de Eucharistia|Sacrosanctum|Orientalium|Mysterium fidei|Ut unum sint|Primacy of the Successor|Sacramentum caritatis|Redemptor|Gaudium')
log=[]
for name in ['baptism-catholic','eucharist-lutheran','sola-scriptura-reformed','sola-scriptura-catholic']:
    L=Lst(name); ch=0
    for r in L.data:
        for x in r['citedBy']:
            w=x['sentence'].split()
            lim=100 if HOLY.search(x['work']) else 120
            if len(w)>lim:
                x['sentence']=' '.join(w[:lim])+(' …' if lim==100 else ' […]'); ch+=1
                x['flag']=(x.get('flag','')+'; ' if x.get('flag') else '')+f'sentence trimmed to {lim} words in S1b (rule: {"Holy See, 100 words" if lim==100 else "public domain, about 120 words"})'
            if name=='sola-scriptura-catholic' and x['work'].startswith('Dei verbum') and 'footnote marker' not in x.get('flag',''):
                x['flag']=(x.get('flag','')+'; ' if x.get('flag') else '')+'the footnote markers of the official text, printed as «(3)» etc., are dropped from the fragment without a mark (verifier V7); this row was not re-collated in S1b'
    L.changed=ch; L.save(); log.append((name,ch))
print(log)
