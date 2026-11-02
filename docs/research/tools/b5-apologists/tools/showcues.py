import re,sys
f,a,b=sys.argv[1],sys.argv[2],sys.argv[3]
def sec(s):
    p=[int(x) for x in s.split(":")]
    return p[0]*3600+p[1]*60+p[2] if len(p)==3 else p[0]*60+p[1]
w=int(sys.argv[4]) if len(sys.argv)>4 else 160
for l in open(f).read().split("\n")[1:]:
    m=re.match(r"^(\d+(?::\d+)+) (?:\d+ (?:hours?|minutes?|seconds?)(?:, )?)+ ?(.*)$",l)
    if m and sec(a)<=sec(m.group(1))<=sec(b): print(m.group(1), m.group(2)[:w])
