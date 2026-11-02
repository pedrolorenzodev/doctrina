import sys,re
# usage: capseg.py <file.tr.txt> <start mm:ss> <end mm:ss>  -> prints the cue lines inside the interval, joined
def sec(s):
    p=[int(x) for x in s.split(":")]
    return p[0]*3600+p[1]*60+p[2] if len(p)==3 else p[0]*60+p[1]
f,a,b=sys.argv[1],sec(sys.argv[2]),sec(sys.argv[3])
out=[]
for l in open(f).read().split("\n")[1:]:
    m=re.match(r"^(\d+(?::\d+)+) (?:\d+ (?:hours?|minutes?|seconds?)(?:, )?)+ ?(.*)$",l)
    if not m: continue
    t=sec(m.group(1))
    if a<=t<=b: out.append((m.group(1),m.group(2)))
print(f"[{out[0][0]} to {out[-1][0]}] {len(out)} cues")
print(" ".join(x[1] for x in out))
