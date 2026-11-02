exec(open('luth.py').read().split("d=json.load")[0])
import re
for pat in [r'The Sacrament of the Altar',r'THE SACRAMENT OF THE ALTAR',r'Of the Sacrament of the Altar',r'OF THE SACRAMENT OF THE ALTAR']:
    print(pat,[m.start() for m in re.finditer(pat,N) if 4790000<m.start()<5000000])
print(N[4802300:4802700])
