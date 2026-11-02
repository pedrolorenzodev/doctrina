"""Fill `def` of the Hebrew lexicon entries of data/site/words/lexicon/H*.json from the Open Scriptures Hebrew Lexicon (BDB, 1906).

Usage (after build_words.py, which sets every Hebrew def to null; TBESH's abridged BDB is never used):
  python3 -I data/scripts/build_hebrew_defs.py --src <dir with BrownDriverBriggs.xml and LexicalIndex.xml> [--words data/site/words] [--sample 10]

Source: https://github.com/openscriptures/HebrewLexicon (readme: CC BY 4.0 for the files, the text of BDB and Strong remains public domain;
credit the Open Scriptures Hebrew Bible Project). Mapping: the prefix particles H9001-H9006 and H9009 are mapped by hand to the index's letter entries (b, c, d, k, l, m); STEPBible extended Strong id -> Strong number (digits) -> LexicalIndex entries with that
strong number; the id letter is matched to the index's `aug` letter, otherwise the consonants of the lemma must match exactly and be unambiguous.
Added fields: def (plain text of the BDB entry), defId (BDB entry id), defMatch (how it was matched), defSource (key of manifest.lexiconHebrewDefs).
"""
import argparse
import json
import re
import unicodedata
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

ap = argparse.ArgumentParser()
ap.add_argument("--src", required=True)
ap.add_argument("--words", default=str(Path(__file__).resolve().parent.parent / "site" / "words"))
ap.add_argument("--sample", type=int, default=10)
ap.add_argument("--commit", default="21c9add13bc727d3a951361778e97e3ff7afd1ce")
ap.add_argument("--commit-date", default="2019-09-02")
ap.add_argument("--downloaded", default="2026-11-02")
args = ap.parse_args()
SRC = Path(args.src)
W = Path(args.words)
NS = "{http://openscriptures.github.com/morphhb/namespace}"
SOURCE_KEY = "bdb-oshb"
FINAL = str.maketrans("ךםןףץ", "כמנפצ")


def consonants(s):
    s = unicodedata.normalize("NFD", s or "")
    return "".join(c for c in s if "א" <= c <= "ת").translate(FINAL)


def plain(el):
    parts = []

    def walk(e):
        tag = e.tag.replace(NS, "")
        if tag == "status":
            if e.tail:
                parts.append(e.tail)
            return
        if e.text:
            parts.append(e.text)
        for c in e:
            walk(c)
        if e.tail and e is not el:
            parts.append(e.tail)

    walk(el)
    t = "".join(parts)
    t = re.sub(r"[ \t\r\f\v\xa0]+", " ", t)
    t = re.sub(r"\s*\n\s*", " ", t)
    return t.strip()


bdb = {}
for ent in ET.parse(SRC / "BrownDriverBriggs.xml").getroot().iter(NS + "entry"):
    refs = [r.get("r") for r in ent.iter(NS + "ref") if r.get("r")]
    w = ent.find(NS + "w")
    bdb[ent.get("id")] = {"text": plain(ent), "refs": refs, "w": consonants(w.text if w is not None else "")}

PARTICLES = {9001: "c", 9002: "c", 9003: "b", 9004: "k", 9005: "l", 9006: "m", 9009: "d"}
by_strong = {}
by_letter = {}
for ent in ET.parse(SRC / "LexicalIndex.xml").getroot().iter(NS + "entry"):
    x = ent.find(NS + "xref")
    if x is None or x.get("bdb") is None:
        continue
    st = x.get("strong")
    if not st:
        continue
    w = ent.find(NS + "w")
    if not re.match(r"\d+", st):
        by_letter[st] = {"li": ent.get("id"), "bdb": x.get("bdb"), "aug": None, "w": consonants(w.text if w is not None else "")}
        continue
    by_strong.setdefault(int(re.match(r"\d+", st).group(0)), []).append(
        {"li": ent.get("id"), "bdb": x.get("bdb"), "aug": x.get("aug"), "w": consonants(w.text if w is not None else "")}
    )

stats = Counter()
unmatched = []
samples = []
shards = sorted((W / "lexicon").glob("H*.json"))
for f in shards:
    d = json.loads(f.read_text(encoding="utf-8"))
    for k, e in d.items():
        stats["entries"] += 1
        for key in ("defId", "defMatch", "defSource"):
            e.pop(key, None)
        m = re.match(r"^H0*(\d+)([A-Za-z]?)$", k)
        base, letter = int(m.group(1)), m.group(2).lower()
        cands = by_strong.get(base, [])
        if base in PARTICLES:
            cands = [by_letter[PARTICLES[base]]]
        lem = consonants(e["lemma"])
        pick, how = None, None
        if len(cands) == 1 and cands[0]["w"] == lem:
            pick, how = cands[0], ("particle+lemma" if base in PARTICLES else "strong+lemma")
        elif cands:
            lettered = [c for c in cands if c["aug"] == letter and letter]
            if len(lettered) == 1 and lettered[0]["w"] == lem:
                pick, how = lettered[0], "strong+aug-letter+lemma"
            else:
                same = [c for c in cands if c["w"] == lem]
                if len(same) == 1:
                    pick, how = same[0], "strong+unique-lemma"
                elif len(same) > 1:
                    stats["ambiguous (several candidates share the lemma consonants)"] += 1
        if pick and pick["bdb"] in bdb and bdb[pick["bdb"]]["text"]:
            b = bdb[pick["bdb"]]
            e["def"] = b["text"]
            e["defId"] = pick["bdb"]
            e["defMatch"] = how
            e["defSource"] = SOURCE_KEY
            stats["with a definition"] += 1
            stats["match " + how] += 1
            if len(samples) < 4000:
                samples.append(k)
        else:
            e["def"] = None
            stats["without a definition"] += 1
            if not cands:
                stats["no index entry with this Strong number"] += 1
            unmatched.append(k)
    f.write_text(json.dumps(d, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

man_path = W / "manifest.json"
man = json.loads(man_path.read_text(encoding="utf-8"))
man["lexiconHebrewDefs"] = {
    "generator": "data/scripts/build_hebrew_defs.py",
    "key": SOURCE_KEY,
    "work": "Brown, Driver, Briggs, A Hebrew and English Lexicon of the Old Testament (1906), as transcribed in the Open Scriptures Hebrew Lexicon (BrownDriverBriggs.xml, LexicalIndex.xml)",
    "repository": "https://github.com/openscriptures/HebrewLexicon",
    "commit": args.commit,
    "commitDate": args.commit_date,
    "downloaded": args.downloaded,
    "licence": "Creative Commons Attribution 4.0 International for the files; the actual text of Brown, Driver, Briggs and Strong's Hebrew dictionary remain in the public domain (readme of the repository, updated 8/27/2019)",
    "attribution": "Hebrew definitions: Brown-Driver-Briggs lexicon (1906, public domain), transcribed by the Open Scriptures Hebrew Bible Project (CC BY 4.0, github.com/openscriptures/HebrewLexicon). Lexical ids from STEPBible (CC BY 4.0).",
    "notes": "TBESH's abridged BDB text is not used. The BDB entry is given as plain text; Hebrew words and references are printed as in the source. defMatch says how the STEPBible id was matched to the BDB entry.",
    "counts": dict(stats),
}
man_path.write_text(json.dumps(man, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

print(json.dumps(dict(stats), indent=1))
print("unmatched sample:", unmatched[:20])
if args.sample:
    lex = {}
    for f in shards:
        lex.update(json.loads(f.read_text(encoding="utf-8")))
    step = max(1, len(samples) // args.sample)
    for k in samples[::step][: args.sample]:
        e = lex[k]
        print("\n==", k, e["lemma"], "|", e["gloss"], "|", e["defMatch"], e["defId"])
        print("  ", e["def"][:260])
