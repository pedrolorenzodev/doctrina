"""Add `senses` to the Greek lexicon entries of data/site/words/lexicon/G*.json (Abbott-Smith text, split; `def` is untouched).

Usage (run after build_words.py, which regenerates the shards and the manifest):
  python3 -I data/scripts/build_greek_senses.py [--words data/site/words] [--sample 10]

Per entry: senses = [{n, level, text, refs, i}] (i = position; n can repeat when the lexicon restarts its numbering; flat; level 1 = Roman group, 2 = numbered, 3 = lettered; n like "I", "I.1", "1", "1(a)"),
sensesLead = text before the first marker (LXX note and short definition) or null, sensesLeadRefs = OSIS ids parsed from it, sensesSyn = the SYN. paragraph or null.
refs = OSIS ids of the New Testament references printed in the sense text; everything else stays in `text` only.
Entries without markers get senses = [] (one undivided definition).
"""
import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path

ap = argparse.ArgumentParser()
ap.add_argument("--words", default=str(Path(__file__).resolve().parent.parent / "site" / "words"))
ap.add_argument("--sample", type=int, default=10)
args = ap.parse_args()
W = Path(args.words)

NT = {
    "Mat": "Matt", "Mrk": "Mark", "Luk": "Luke", "Jhn": "John", "Act": "Acts", "Rom": "Rom",
    "1Co": "1Cor", "2Co": "2Cor", "Gal": "Gal", "Eph": "Eph", "Php": "Phil", "Col": "Col",
    "1Th": "1Thess", "2Th": "2Thess", "1Ti": "1Tim", "2Ti": "2Tim", "Tit": "Titus", "Phm": "Phlm",
    "Heb": "Heb", "Jas": "Jas", "1Pe": "1Pet", "2Pe": "2Pet", "1Jn": "1John", "2Jn": "2John",
    "3Jn": "3John", "Jud": "Jude", "Rev": "Rev",
}
CODE = "|".join(sorted(NT, key=len, reverse=True))
REF = re.compile(
    r"(?<![A-Za-z0-9])(" + CODE + r")\.(\d+):(\d+)(?![A-Za-z0-9])(?:-(\d+))?"
    r"((?:,\s*\d+(?!:)(?:-\d+)?(?![A-Za-z0-9\[:.]))*)"
    r"((?:\s+\d+:\d+(?:-\d+)?(?:,\s*\d+(?!:)(?:-\d+)?(?![A-Za-z0-9\[:.]))*)*)"
)
CONT_VERSE = re.compile(r",\s*(\d+)(?:-(\d+))?")
CH_BLOCK = re.compile(r"\s+(\d+):(\d+)(?:-(\d+))?((?:,\s*\d+(?!:)(?:-\d+)?(?![A-Za-z0-9\[:.]))*)")
CANDIDATE = re.compile(r"(?<![A-Za-z0-9])(?:" + CODE + r")\.\s?\d")


def osis(book, ch, v1, v2=None):
    if v2 and v2 != v1:
        return f"{NT[book]}.{ch}.{v1}-{NT[book]}.{ch}.{v2}"
    return f"{NT[book]}.{ch}.{v1}"


def parse_refs(text):
    out = []
    for m in REF.finditer(text):
        book, ch, v1, v2, tail, more = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5), m.group(6)
        out.append(osis(book, ch, int(v1), int(v2) if v2 else None))
        for c in CONT_VERSE.finditer(tail or ""):
            out.append(osis(book, ch, int(c.group(1)), int(c.group(2)) if c.group(2) else None))
        for b in CH_BLOCK.finditer(more or ""):
            out.append(osis(book, b.group(1), int(b.group(2)), int(b.group(3)) if b.group(3) else None))
            for c in CONT_VERSE.finditer(b.group(4) or ""):
                out.append(osis(book, b.group(1), int(c.group(1)), int(c.group(2)) if c.group(2) else None))
    seen, uniq = set(), []
    for r in out:
        if r not in seen:
            seen.add(r)
            uniq.append(r)
    return uniq


ROMAN = re.compile(r"^([IVX]+)\.\s*(.*)$")
NUM = re.compile(r"^(\d+)\.\s+(.*)$")
ALPHA = re.compile(r"^\(([a-z])\)\s*(.*)$")


def split_def(df):
    lines = df.split("\n")
    lead, syn = [], []
    senses = []
    roman = num = None
    in_syn = False
    for line in lines:
        s = line.strip()
        if not s:
            continue
        if in_syn or s.startswith("SYN."):
            in_syn = True
            syn.append(s)
            continue
        m = ROMAN.match(s)
        if m and not NUM.match(s):
            roman, num = m.group(1), None
            senses.append({"n": roman, "level": 1, "text": m.group(2).strip()})
            continue
        m = NUM.match(s)
        if m:
            num = m.group(1)
            n = f"{roman}.{num}" if roman else num
            senses.append({"n": n, "level": 2, "text": m.group(2).strip()})
            continue
        m = ALPHA.match(s)
        if m and (senses or True) and (num or roman or senses):
            base = (f"{roman}.{num}" if roman else num) if num else (roman or "")
            n = f"{base}({m.group(1)})" if base else f"({m.group(1)})"
            senses.append({"n": n, "level": 3, "text": m.group(2).strip()})
            continue
        if senses:
            senses[-1]["text"] = (senses[-1]["text"] + " " + s).strip()
        else:
            lead.append(s)
    return ("\n".join(lead) or None), senses, ("\n".join(syn) or None)


stats = Counter()
fails = []
samples = []
shards = sorted((W / "lexicon").glob("G*.json"))
for f in shards:
    d = json.loads(f.read_text(encoding="utf-8"))
    for k, e in d.items():
        df = e.get("def") or ""
        new = {}
        for key, val in e.items():
            if key in ("senses", "sensesLead", "sensesSyn", "sensesLeadRefs"):
                continue
            new[key] = val
            if key == "def":
                lead, senses, syn = split_def(df) if df else (None, [], None)
                for i, s in enumerate(senses):
                    s["i"] = i
                    s["refs"] = parse_refs(s["text"])
                new["senses"] = senses
                new["sensesLead"] = lead
                new["sensesSyn"] = syn
                new["sensesLeadRefs"] = parse_refs(lead) if lead else []
                stats["entries"] += 1
                if not df:
                    stats["no def"] += 1
                numbered = [s for s in senses if s["level"] == 2]
                if len(numbered) >= 2:
                    stats["entries with >= 2 numbered senses"] += 1
                elif senses:
                    stats["entries with 1 numbered sense or only lettered/roman"] += 1
                elif df:
                    stats["entries with one undivided definition"] += 1
                stats["senses"] += len(senses)
                parsed = sum(len(s["refs"]) for s in senses) + (len(parse_refs(lead)) if lead else 0)
                cand_text = " ".join([s["text"] for s in senses] + ([lead] if lead else []))
                cands = len(CANDIDATE.findall(cand_text))
                stats["NT reference groups parsed"] += parsed
                stats["NT reference candidates found by the loose pattern"] += cands
                if cands and not parsed:
                    fails.append(k)
                if len(numbered) >= 3 and len(samples) < 400 and e.get("as"):
                    samples.append(k)
        d[k] = new
    f.write_text(json.dumps(d, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

man_path = W / "manifest.json"
man = json.loads(man_path.read_text(encoding="utf-8"))
man["lexiconGreekSenses"] = {
    "generator": "data/scripts/build_greek_senses.py",
    "source": "Abbott-Smith, A Manual Greek Lexicon of the New Testament (1922), public domain; the brief lexicon of STEPBible TBESG (CC BY 4.0) is based on it (entries without the as flag have another definition source)",
    "refs": "OSIS ids of New Testament references only; Old Testament and Apocrypha references (LXX versification) and abbreviations the pattern does not read stay in the sense text",
    "counts": dict(stats),
}
man_path.write_text(json.dumps(man, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

print(json.dumps(dict(stats), indent=1))
print("entries with candidates but no parsed ref:", len(fails), fails[:15])
if args.sample:
    step = max(1, len(samples) // args.sample)
    chosen = samples[::step][: args.sample]
    lex = {}
    for f in shards:
        lex.update(json.loads(f.read_text(encoding="utf-8")))
    for k in chosen:
        e = lex[k]
        print("\n==", k, e["lemma"], "|", e["gloss"], "| senses", len(e["senses"]))
        for s in e["senses"][:5]:
            print("  ", s["n"], "L%d" % s["level"], s["text"][:90].replace("\n", " "), "->", s["refs"][:5])
sys.exit(0)
