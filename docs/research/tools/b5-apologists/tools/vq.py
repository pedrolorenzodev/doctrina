import json, sys, os, pickle, collections, re, argparse
SC = os.environ["SCR"]
ap = argparse.ArgumentParser()
ap.add_argument("refs", nargs="+")
ap.add_argument("-s", "--src", default="")
ap.add_argument("-n", type=int, default=8)
ap.add_argument("-c", "--ctx", type=int, default=300)
ap.add_argument("--chapter", action="store_true", help="also count chapter-only mentions")
ap.add_argument("--full", type=int, default=-1, help="print the whole window of hit number N (0-based) with 1500 chars each side")
a = ap.parse_args()
docs = json.load(open(SC + "/idx/docs.json"))
idx = json.load(open(SC + "/idx/index.json"))
texts = None
hits = collections.defaultdict(list)
for r in a.refs:
    for di, pos in idx.get(r, []):
        hits[di].append(pos)
    if a.chapter:
        bk, ch, v = r.split(".")
        for di, pos in idx.get(f"{bk}.{ch}.*", []):
            hits[di].append(pos)
rows = []
for di, ps in hits.items():
    d = docs[di]
    if a.src and a.src not in d["src"]: continue
    rows.append((len(set(ps)), di, sorted(set(ps))))
rows.sort(key=lambda x: -x[0])
print(f"{len(rows)} documents mention {a.refs}")
texts = pickle.load(open(SC + "/idx/texts.pkl", "rb"))
for k, (n, di, ps) in enumerate(rows[: a.n]):
    d = docs[di]
    t = texts[di]
    p = ps[0]
    print(f"[{k}] hits={n} {d['src']} | {d['date']} | {d['author']} | {d['title'][:90]}\n    {d['url']}")
    if a.full == k:
        print("    >>>>", re.sub(r"\s+", " ", t[max(0, p - 1500): p + 2500]))
    else:
        print("    ", re.sub(r"\s+", " ", t[max(0, p - a.ctx): p + a.ctx]))
