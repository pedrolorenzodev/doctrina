import re, sys, os
S = "/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad"
TR = S + "/yt/tr/"
P = "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"
meta = {}
for l in open(S + "/yt/meta_all.txt", encoding="utf-8"):
    p = l.rstrip("\n").split("|")
    if len(p) >= 5:
        meta[p[0]] = p

def tsec(t):
    parts = [int(x) for x in t.split(":")]
    s = 0
    for x in parts:
        s = s * 60 + x
    return s

def label(sec):
    h,r=divmod(sec,3600); m,sc=divmod(r,60)
    parts=[]
    if h: parts.append(f"{h} hour"+("s" if h!=1 else ""))
    if m: parts.append(f"{m} minute"+("s" if m!=1 else ""))
    if sc or not parts: parts.append(f"{sc} second"+("s" if sc!=1 else ""))
    return ", ".join(parts)

def load(vid):
    cues = []
    for i, l in enumerate(open(TR + vid + ".tr.txt", encoding="utf-8")):
        if i == 0:
            continue
        l = l.rstrip("\n")
        m = re.match(r"^(\d+(?::\d+)+) (.*)$", l)
        if not m:
            print("PARSE?", vid, l[:80]); continue
        t, rest = m.group(1), m.group(2)
        lab = label(tsec(t))
        if rest == lab:
            txt = ""
        elif rest.startswith(lab + " "):
            txt = rest[len(lab)+1:]
        else:
            print("LABEL?", vid, l[:80]); txt = rest
        cues.append((t, txt))
    return cues

cache = {}
def getcues(v):
    if v not in cache:
        cache[v] = load(v)
    return cache[v]

def rebuild(vid, a, b):
    cues = getcues(vid)
    idx = [i for i, (t, _) in enumerate(cues) if t == a]
    jdx = [i for i, (t, _) in enumerate(cues) if t == b]
    if not idx or not jdx:
        return None, None, None
    i, j = idx[0], jdx[-1]
    txt = " ".join(c[1] for c in cues[i:j + 1])
    txt = re.sub(r"\[[^\]]*\]", "", txt)
    txt = re.sub(r"\s+", " ", txt).strip()
    return txt, j - i + 1, (i, j)

def norm(s):
    return re.sub(r"\s+", " ", s).strip()

def run(fn):
    lines = open(P + fn, encoding="utf-8").read().split("\n")
    n = 0
    for k, l in enumerate(lines):
        m = re.search(r"https://www\.youtube\.com/watch\?v=([A-Za-z0-9_-]{11})&t=(\d+)s, minutes ([\d:]+) to ([\d:]+) \(first cue to last cue read\), (\d+) cues, (\d+) words", l)
        if not m:
            continue
        n += 1
        vid, t, a, b, nc, nw = m.groups()
        q = None
        for kk in range(k + 1, min(k + 4, len(lines))):
            if lines[kk].startswith("  > "):
                q = lines[kk][4:]
                break
        txt, cn, ij = rebuild(vid, a, b)
        mt = meta.get(vid)
        # header facts
        title = re.search(r"«([^»]+)»", l)
        date = re.search(r"YouTube, (\d{4}-\d\d-\d\d)", l)
        chan = re.search(r"channel ([^()]+?) \(", l)
        out = [f"[{fn} line {k+1}] vid={vid} {a}-{b}"]
        if txt is None:
            out.append("  CUE TIME NOT FOUND")
            print("\n".join(out)); continue
        words = len(txt.split())
        out.append(f"  t: file {t} vs first cue {tsec(a)}: {'OK' if int(t)==tsec(a) else 'BAD'}")
        out.append(f"  cues: file {nc} vs {cn}: {'OK' if int(nc)==cn else 'BAD'}")
        out.append(f"  words: file {nw} vs rebuilt {words} vs quote {len(q.split()) if q else None}: {'OK' if int(nw)==words else 'BAD'}")
        out.append(f"  text equal: {norm(q)==txt if q else None}")
        if q and norm(q) != txt:
            # find first diff
            qa, ta = norm(q).split(" "), txt.split(" ")
            for d in range(min(len(qa), len(ta))):
                if qa[d] != ta[d]:
                    out.append(f"  first diff at word {d}: file ...{' '.join(qa[max(0,d-5):d+5])} | cap ...{' '.join(ta[max(0,d-5):d+5])}")
                    break
            else:
                out.append(f"  length differs {len(qa)} vs {len(ta)}")
        if mt:
            out.append(f"  meta: {mt[1:]}")
            ok_title = title and (title.group(1) == mt[4] or title.group(1).replace("—", "-") == mt[4])
            out.append(f"  title {'OK' if ok_title else 'DIFF: '+(title.group(1) if title else '?')}; channel {'OK' if chan and chan.group(1).strip()==mt[2] else 'DIFF: '+(chan.group(1) if chan else '?')}; date {'OK' if date and date.group(1).replace('-','')==mt[1] else 'DIFF: '+(date.group(1) if date else '?')}")
        # boundary
        cues = getcues(vid)
        i, j = ij
        prev = cues[i - 1] if i > 0 else None
        nxt = cues[j + 1] if j + 1 < len(cues) else None
        out.append(f"  START: «{txt[:90]}» prevcue({prev[0] if prev else None}): «...{prev[1][-70:] if prev else ''}»")
        out.append(f"  END: «...{txt[-90:]}» nextcue({nxt[0] if nxt else None}): «{nxt[1][:70] if nxt else ''}...»")
        print("\n".join(out))
        print()
    print(fn, "blocks:", n)

for fn in sys.argv[1:]:
    run(fn)
