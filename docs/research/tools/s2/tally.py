import re, subprocess, sys, glob, os, json
R = "/Users/pedrolorenzo/Desktop/dev/doctrina"
D = "docs/research/passages/"
TR = ["catholic", "lutheran", "reformed", "orthodox", "baptist"]
DOC = ["baptism", "eucharist", "papacy", "sola-scriptura"]

def read(fn, rev):
    if rev == "HEAD":
        r = subprocess.run(["git", "-C", R, "show", f"HEAD:{D}{fn}"], capture_output=True, text=True)
        return r.stdout if r.returncode == 0 else None
    p = f"{R}/{D}{fn}"
    return open(p).read() if os.path.exists(p) else None

def sections(t):
    out = []
    parts = re.split(r"\n## ", t)
    for p in parts[1:]:
        head = p.split("\n", 1)[0]
        if head.startswith(("Progress", "Tags", "Not covered", "S2 additions")): continue
        nums = [int(x) for x in re.findall(r"\*\*(\d+) persons?(?:\(s\))?\*\*", p)]
        n = nums[-1] if nums else (1 if re.search(r"hosts jointly", p) else 0)
        out.append((head[:70], n))
    return out

def tally(rev):
    res = {}
    for d in DOC:
        for tr in TR:
            fn = f"apologists-{tr}-{d}.md"
            t = read(fn, rev)
            if t is None: res[(tr, d)] = None; continue
            res[(tr, d)] = sections(t)
    return res

if __name__ == "__main__":
    rev = sys.argv[1] if len(sys.argv) > 1 else "work"
    res = tally(rev)
    tot = {}
    for (tr, d), s in res.items():
        if s is None: print(tr, d, "NO FILE"); continue
        c = [sum(1 for _, n in s if n == k) for k in (0, 1, 2)] + [sum(1 for _, n in s if n >= 3)]
        print(f"{tr:9} {d:15} sections={len(s):3} 0:{c[0]} 1:{c[1]} 2:{c[2]} >=3:{c[3]}")
        a = tot.setdefault(tr, [0, 0, 0, 0, 0]); a[0] += len(s)
        for i in range(4): a[i + 1] += c[i]
    for tr, a in tot.items(): print("TOTAL", tr, "sections", a[0], "0:", a[1], "1:", a[2], "2:", a[3], ">=3:", a[4], " >=2:", a[3] + a[4])
