import json, os, re, sys, pickle, collections
SC = os.environ["SCR"]; R = "/Users/pedrolorenzo/Desktop/dev/doctrina"
docs = json.load(open(SC + "/idx/docs.json")); idx = json.load(open(SC + "/idx/index.json"))
bible = json.load(open(R + "/data/corpus/bibles/bsb.json"))
SRC = {
 "reformed": ["aomin", "reformation21", "yt/Ligonier", "tabletalk"],
 "lutheran": ["steadfast", "lutheranreformation", "yt/Dr. Jordan"],
 "orthodox": ["jaysanalysis", "yt/Patristic", "yt/Ancient Faith", "yt/Jay Dyer", "yt/R&T"],
 "baptist": ["9marks", "credomag", "truthunites", "mohler", "yt/Gavin"],
 "catholic": ["catholic.com"],
}
def expand(ref):
    a, _, b = ref.partition("-")
    bk, ch, *v = a.split(".")
    if not v: return [k for k in bible if k.startswith(f"{bk}.{ch}.")]
    v1 = int(v[0])
    if b:
        bk2, ch2, v2 = b.split(".")
        lo = int(ch) * 1000 + v1; hi = int(ch2) * 1000 + int(v2)
        return [k for k in bible if k.split(".")[0] == bk and lo <= int(k.split(".")[1]) * 1000 + int(k.split(".")[2]) <= hi]
    return [a]
def core(doctrine, trad):
    t = open(R + "/docs/research/doctrines/scripture-lists/core-sets.md").read()
    m = re.search(r"## %s · %s\n(.*?)(?=\n## |\Z)" % (doctrine, trad), t, re.S)
    if not m: return []
    out = []
    for l in m.group(1).split("\n"):
        mm = re.match(r"\| (\d+) \| ([^|]+) \|", l)
        if mm: out.append(re.findall(r"`([^`]+)`", mm.group(2)))
    return out
def run(doctrine, trad, srcs, snip=200, per=3, passages=None):
    texts = pickle.load(open(SC + "/idx/texts.pkl", "rb")) if snip else None
    sets = passages or core(doctrine, trad)
    for refs in sets:
        keys = set(); chap = set()
        for r in refs:
            keys |= set(expand(r))
            bk, ch = r.split(".")[0], r.split(".")[1]
            chap.add(f"{bk}.{ch}.*")
        hits = collections.defaultdict(set)
        for k in keys:
            for di, pos in idx.get(k, []): hits[di].add(pos)
        for k in chap:
            for di, pos in idx.get(k, []):
                if docs[di]["src"].startswith("yt/"): hits[di].add(pos)
        rows = []
        for di, ps in hits.items():
            d = docs[di]
            if not any(d["src"].startswith(s) for s in srcs): continue
            rows.append((len(ps), di))
        rows.sort(reverse=True)
        print(f"## {doctrine}/{trad} {refs}: {len(rows)} docs")
        for n, di in rows[:per]:
            d = docs[di]; p = min(hits[di])
            print(f"  {n:3d} | {d['src'][:22]:22s} | {d['date']} | {d['title'][:70]} | {d['url']}")
            if snip: print("       >>", re.sub(r"\s+", " ", texts[di][max(0, p - snip): p + snip]))
if __name__ == "__main__":
    doctrine, trad = sys.argv[1], sys.argv[2]
    snip = int(sys.argv[3]) if len(sys.argv) > 3 else 200
    per = int(sys.argv[4]) if len(sys.argv) > 4 else 3
    run(doctrine, trad, SRC[trad], snip, per)
