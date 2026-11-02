exec(open('luth.py').read().split("d=json.load")[0])
import re
t=N[4802300:4888400]
for m in re.finditer(r'[A-Za-z]{2,}\.? \d{1,3}(?:[,:] ?\d{1,3})?',t):
    s=m.group(0)
    print(m.start()+4802300, repr(t[max(0,m.start()-60):m.end()+40]))
