import re, sys, os, html, subprocess, json, time, hashlib

SC = os.environ["SCR"]
REPO = "/Users/pedrolorenzo/Desktop/dev/doctrina"
CACHE = SC + "/html"
os.makedirs(CACHE, exist_ok=True)

def fetch(url):
    fn = CACHE + "/" + hashlib.md5(url.encode()).hexdigest() + ".html"
    if os.path.exists(fn) and os.path.getsize(fn) > 3000:
        return open(fn, errors="ignore").read()
    for i in range(3):
        r = subprocess.run(["curl", "-sL", "-m", "45", "-A", "Mozilla/5.0 (research; doctrina)", url], capture_output=True, text=True)
        if len(r.stdout) > 3000:
            open(fn, "w").write(r.stdout)
            time.sleep(1.0)
            return r.stdout
        time.sleep(4)
    return ""

def clean(s):
    s = re.sub(r"(?s)<(script|style|noscript)[^>]*>.*?</\1>", " ", s)
    s = re.sub(r"<br\s*/?>", "\n", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s)
    return re.sub(r"[ \t\r\f\v]+", " ", s).strip()

def paragraphs(h):
    out = []
    for m in re.finditer(r"(?s)<(p|h[1-6]|blockquote)(?:\s[^>]*)?>(.*?)</\1>", h):
        t = clean(m.group(2))
        t = re.sub(r"\s*\n\s*", " ", t).strip()
        if t:
            out.append((m.group(1), t))
    return out

def norm(s):
    s = s.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"').replace("—", "-").replace("–", "-")
    s = s.replace(" ", " ")
    s = re.sub(r"\s+", " ", s)
    return s.strip().lower()

def pieces(q):
    ps = re.split(r"\[…\]|…|\.\.\.|\[\.\.\.\]", q)
    ps = [p.strip(" .,;:") for p in ps]
    ps = [p for p in ps if len(p) >= 25]
    ps.sort(key=lambda x: -len(x))
    return ps

def words(s): return len(s.split())

def locate(paras, q):
    nps = [norm(t) for _, t in paras]
    for p in pieces(q):
        pn = norm(p)
        for i, n in enumerate(nps):
            if pn in n: return i
        # across two paragraphs
        for i in range(len(nps) - 1):
            if pn in (nps[i] + " " + nps[i + 1]): return i
        # drop bracketed editorial insertions
        pn2 = re.sub(r"\[[^\]]*\]", "", pn)
        pn2 = re.sub(r"\s+", " ", pn2).strip()
        for i, n in enumerate(nps):
            n2 = re.sub(r"\[[^\]]*\]", "", n)
            n2 = re.sub(r"\s+", " ", n2)
            if pn2 and pn2 in n2: return i
    return None

SPK = re.compile(r"^([A-Z][A-Za-z’' .]{1,28}):\s")
def segment(paras, i, url, cap=650):
    kind = "article"
    if "/audio/ddp/" in url:
        kind = "ddp"
        a = i
        while a > 0 and not paras[a - 1][1].rstrip().endswith("DEFENSE"): a -= 1
        b = i
        while b + 1 < len(paras) and not paras[b + 1][0].startswith("h") and not paras[b + 1][1].lower().startswith(("did you like", "donate", "please help")): b += 1
        return kind, a, b
    if "/audio/" in url: kind = "transcript"
    LAB = re.compile(r"^([A-Z][A-Za-z\u2019' .]{1,28}):$")
    def is_head(k, t): return k.startswith("h") and words(t) < 18
    stop = ("did you like", "share", "subscribe", "please help", "donate", "if you like", "if you enjoyed", "become a premium", "support our mission")
    spk = [None] * len(paras)
    cur = None
    for j, (k, t) in enumerate(paras):
        m = LAB.match(t) or SPK.match(t)
        if m: cur = m.group(1)
        spk[j] = cur
    def label_only(t): return bool(LAB.match(t))
    a = b = i
    total = words(paras[i][1])
    grow = True
    while grow and total < cap:
        grow = False
        j = a - 1
        while j >= 0 and label_only(paras[j][1]) and spk[j] == spk[i]: j -= 1
        if j >= 0:
            k, t = paras[j]
            if not is_head(k, t) and not label_only(t) and spk[j] == spk[i] and not t.lower().startswith(stop) and total + words(t) <= cap * 1.4:
                a = j; total += words(t); grow = True
        j = b + 1
        while j < len(paras) and label_only(paras[j][1]) and spk[j] == spk[i]: j += 1
        if total < cap and j < len(paras):
            k, t = paras[j]
            if not is_head(k, t) and not label_only(t) and spk[j] == spk[i] and not t.lower().startswith(stop) and total + words(t) <= cap * 1.4:
                b = j; total += words(t); grow = True
    return kind, a, b

BUL = re.compile(r"^(\s*)- (?:\*\*[^*]+\*\*)")
def process(path, dry=False):
    L0 = open(path).read().split("\n")
    L = []
    skip = False
    for l in L0:
        if re.match(r"^\s+- \*\*Long-form\*\*", l): skip = True; continue
        if skip and re.match(r"^\s+> ", l): continue
        skip = False
        L.append(l)
    out = []
    stats = {"quotes": 0, "longform": 0, "nomatch": [], "nopage": []}
    for line in L:
        out.append(line)
        if not BUL.match(line) or "catholic.com/" not in line: continue
        um = re.search(r"https://www\.catholic\.com/[^\s,)`»]+", line)
        qm = re.search(r": «(.*)»", line)
        if not um or not qm: continue
        stats["quotes"] += 1
        url = um.group(0).rstrip(".")
        q = qm.group(1)
        h = fetch(url)
        if not h:
            stats["nopage"].append(url); continue
        paras = paragraphs(h)
        i = locate(paras, q)
        if i is None:
            stats["nomatch"].append((url, q[:60])); continue
        kind, a, b = segment(paras, i, url)
        seg = [t for _, t in paras[a: b + 1] if not re.match(r"^[A-Z][A-Za-z\u2019' .]{1,28}:$", t)]
        text = "\n\n".join(seg)
        nw = words(text)
        ind = BUL.match(line).group(1)
        first = seg[0]; last = seg[-1]
        def head(s, n=9): return " ".join(s.split()[:n])
        def tail(s, n=9): return " ".join(s.split()[-n:])
        blk = [f"{ind}  - **Long-form** `[long-form: trim before public release]` `[verified: page]` ({kind}, {len(seg)} paragraph(s), {nw} words, from the paragraph beginning «{head(first)}…» to the one ending «…{tail(last)}»; the old quote above lies inside it):"]
        for s in seg:
            blk.append(f"{ind}    > {s}")
        out.extend(blk)
        stats["longform"] += 1
    if not dry:
        open(path, "w").write("\n".join(out))
    return stats

if __name__ == "__main__":
    dry = "--dry" in sys.argv
    for f in [a for a in sys.argv[1:] if not a.startswith("--")]:
        st = process(f, dry)
        print(os.path.basename(f), st["quotes"], "quotes;", st["longform"], "long-form;", len(st["nomatch"]), "no match;", len(st["nopage"]), "no page")
        for x in st["nomatch"]: print("   NOMATCH", x)
        for x in st["nopage"]: print("   NOPAGE", x)
