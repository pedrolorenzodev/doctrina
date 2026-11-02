exec(open('luth.py').read().split("d=json.load")[0])
import re
def hits(name,a,b,terms):
    t=N[a:b]
    print('##',name,a,b)
    for term in terms:
        hs=[m.start() for m in re.finditer(term,t)]
        print(' ',term,len(hs))
        for h in hs: print('     ',repr(t[max(0,h-70):h+90]))
terms=[r'\bPaul\b',r'\bPeter\b',r'\bJohn\b',r'\bActs\b',r'\bGen\b',r'\bRom\b',r'Romans',r'\bEph',r'Ephes',r'\bGal',r'Galat',r'Corinth',r'\bCol\b',r'Colos',r'Hebrews',r'Isa',r'\bPs\.',r'Psalm',r'Matt',r'Mark',r'Luke',r'Titus',r'Apostle',r'Scripture',r'chapter',r'Chap\.',r'\bv\. ?\d']
hits('LC IV',4802300,4888380,terms)
