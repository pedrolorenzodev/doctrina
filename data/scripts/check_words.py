"""Checks for data/site/words/: regression against data/site/john6.json, coverage against data/corpus/bibles, Spanish gloss coverage.

Usage: python3 -I data/scripts/check_words.py [--words data/site/words] [--john6 data/site/john6.json] [--bible kjv]
"""
import argparse
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
ap = argparse.ArgumentParser()
ap.add_argument("--words", default=str(ROOT / "data" / "site" / "words"))
ap.add_argument("--john6", default=str(ROOT / "data" / "site" / "john6.json"))
ap.add_argument("--bible", default=str(ROOT / "data" / "corpus" / "bibles" / "kjv.json"))
args = ap.parse_args()
W = Path(args.words)


def load(p):
    return json.loads(Path(p).read_text(encoding="utf-8"))


def shard(d):
    m = re.match(r"^([GH])0*(\d+)", d)
    return f"{m.group(1)}{int(m.group(2)) // 100:03d}"


lex_cache, occ_cache = {}, {}


def lex(d):
    s = shard(d)
    if s not in lex_cache:
        lex_cache[s] = load(W / "lexicon" / f"{s}.json")
    return lex_cache[s].get(d)


def occ(d):
    s = shard(d)
    if s not in occ_cache:
        occ_cache[s] = load(W / "occurrences" / f"{s}.json")
    return occ_cache[s].get(d)


morph = load(W / "morph.json")["greek"]
old = load(args.john6)
new = load(W / "verses" / "John" / "6.json")

print("== Regression: John 6 against", args.john6)
diff_fields = Counter()
examples = defaultdict(list)
words_total = 0
for v, ov in old["verses"].items():
    nv = new["verses"].get(v)
    if nv is None:
        print("verse missing in new:", v)
        continue
    if len(ov["words"]) != len(nv["words"]):
        print(f"verse {v}: word count old {len(ov['words'])} new {len(nv['words'])}")
    for i, (a, b) in enumerate(zip(ov["words"], nv["words"])):
        words_total += 1
        s = b["s"]
        lx = lex(s) if " + " not in s else None
        rec = {
            "g": b["g"], "p": b.get("p", ""), "t": b["t"],
            "l": b.get("l", lx["lemma"] if lx else None), "lt": b.get("lt", lx["tr"] if lx else None),
            "s": s, "m": b["m"], "parse": morph.get(b["m"]), "en": b["en"], "es": b.get("es", ""),
        }
        if "var" in b:
            rec["var"] = b["var"]
        for k in set(a) | set(rec):
            if a.get(k, "") != rec.get(k, ""):
                diff_fields[k] += 1
                if len(examples[k]) < 4:
                    examples[k].append((v, i, a.get(k), rec.get(k)))
    oo, no = ov.get("omitted", []), nv.get("omitted", [])
    if len(oo) != len(no):
        diff_fields["omitted-count"] += 1
    for a, b in zip(oo, no):
        for k in ("g", "t", "en", "eds", "after"):
            if a.get(k) != b.get(k):
                diff_fields["omitted." + k] += 1
    if bool(ov.get("para")) != bool(nv.get("para")):
        diff_fields["para"] += 1
print("words compared:", words_total, "| differing fields (count):", dict(diff_fields))
for k, ex in examples.items():
    print(" ", k, ex[:3])

print("\n== Regression: lexicon entries of John 6")
lex_diff = Counter()
lex_ex = defaultdict(list)
for d, oe in old["lexicon"].items():
    ne = lex(d)
    if ne is None:
        lex_diff["missing"] += 1
        continue
    for ok, nk in (("lemma", "lemma"), ("tr", "tr"), ("strong", "strong"), ("pos", "pos"), ("gloss", "gloss"),
                   ("as", "as"), ("formOf", "formOf"), ("n", "n"), ("nAny", "nAny")):
        if oe[ok] != ne[nk]:
            lex_diff[ok] += 1
            if len(lex_ex[ok]) < 3:
                lex_ex[ok].append((d, oe[ok], ne[nk]))
    od, nd = oe["def"], ne["def"]
    if od != nd:
        if oe.get("cut") and nd.startswith(od.rstrip()[:200]):
            lex_diff["def (old cut at 1400 chars; new full)"] += 1
        else:
            lex_diff["def"] += 1
            if len(lex_ex["def"]) < 3:
                lex_ex["def"].append((d, od[:80], nd[:80]))
    oc = occ(d)
    if oc is None:
        lex_diff["occurrences-missing"] += 1
        continue
    if oc["v"] != oe["verses"]:
        lex_diff["verses"] += 1
        if len(lex_ex["verses"]) < 3:
            lex_ex["verses"].append((d, oe["verses"], oc["v"]))
    if oe["refs"] is not None:
        flat = []
        for b, lst in oc["b"].items():
            flat += [f"{b}.{x}" for x in lst]
        if flat != oe["refs"]:
            lex_diff["refs"] += 1
            if len(lex_ex["refs"]) < 3:
                lex_ex["refs"].append((d, len(oe["refs"]), len(flat)))
print("entries compared:", len(old["lexicon"]), "| differing:", dict(lex_diff))
for k, ex in lex_ex.items():
    print(" ", k, ex[:3])

print("\n== Coverage against", args.bible)
bible = load(args.bible)
corpus = defaultdict(set)
for key in bible:
    b, c, v = key.split(".")
    corpus[b].add((int(c), int(v)))
have = defaultdict(set)
for f in sorted((W / "verses").glob("*/*.json")):
    d = load(f)
    for v in d["verses"]:
        have[d["book"]].add((d["chapter"], int(v)))
rows = []
tot_c = tot_h = tot_missing = tot_extra = 0
for b, vs in corpus.items():
    h = have.get(b, set())
    miss = sorted(vs - h)
    extra = sorted(x for x in h - vs)
    tot_c += len(vs)
    tot_h += len(vs & h)
    tot_missing += len(miss)
    tot_extra += len(extra)
    if miss or extra:
        rows.append((b, len(vs), len(vs & h), len(miss), miss[:6], len(extra), extra[:6]))
print(f"verses in corpus {tot_c}, with words {tot_h}, without words {tot_missing}, words without a corpus verse {tot_extra}")
for r in rows:
    print("  ", r)

print("\n== Spanish glosses")
for L in "GH":
    tot = cov = 0
    for f in (W / "lexicon").glob(f"{L}*.json"):
        for e in load(f).values():
            tot += 1
            cov += e["glossEs"] is not None
    print(f"lexicon {L}: glossEs {cov}/{tot}")
tw = Counter()
cw = Counter()
for f in (W / "verses").glob("*/*.json"):
    d = load(f)
    for v in d["verses"].values():
        for w in v["words"]:
            tw[d["lang"]] += 1
            cw[d["lang"]] += "es" in w
print("words with es:", {k: f"{cw[k]}/{tw[k]}" for k in tw})
