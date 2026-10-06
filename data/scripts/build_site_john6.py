"""Build the compact site data for the John 6 verse pages: src/content/data/john6.json.

Reads the research outputs in data/raw (john6.greek.json, lexicon.john6.json,
john6.translations.json) and re-scans STEPBible TAGNT for NT reference lists of every
lemma in the chapter (the raw lexicon only has them for John 6:47-58).

Keeps only what the pages render. Keys are short because word payloads travel to the
client inside study-panel entries.

Usage: python3 data/scripts/build_site_john6.py
"""
import json
import re
from collections import defaultdict
from pathlib import Path

from greek_common import iter_tagnt, split_strong_grammar, in_na28, NT_OSIS

ROOT = Path(__file__).resolve().parent.parent.parent
RAW = ROOT / "data" / "raw"
OUT = ROOT / "src" / "content" / "data" / "john6.json"

REFS_CAP = 300   # list every NT verse for lemmas up to this many occurrences
DEF_CAP = 1400   # characters of the lexicon entry kept (cut at a line boundary)

greek = json.loads((RAW / "john6.greek.json").read_text(encoding="utf-8"))
lexicon = json.loads((RAW / "lexicon.john6.json").read_text(encoding="utf-8"))
trans = json.loads((RAW / "john6.translations.json").read_text(encoding="utf-8"))

wanted = set()
for w in greek["words"]:
    for d in w["dStrong"].split(" + "):
        wanted.add(d.strip())

# ------------------------------------------------------------ NT refs and counts in John
nt_refs = defaultdict(list)
john_count = defaultdict(int)
for w in iter_tagnt():
    if not in_na28(w):
        continue
    ref = f"{NT_OSIS[w['book']]}.{w['chapter']}.{w['verse']}"
    for d, _ in split_strong_grammar(w["strongGrammar"]):
        if d not in wanted:
            continue
        lst = nt_refs[d]
        if not lst or lst[-1] != ref:
            lst.append(ref)
        if w["book"] == "Jhn":
            john_count[d] += 1


def trim_definition(full):
    """Drop the headword line; keep whole lines up to DEF_CAP characters."""
    lines = [l.strip() for l in full.split("\n") if l.strip()]
    if len(lines) > 1:
        lines = lines[1:]
    out, n, cut = [], 0, False
    for l in lines:
        if l == "(AS)":
            continue
        if n + len(l) > DEF_CAP and out:
            cut = True
            break
        out.append(l)
        n += len(l)
    return "\n".join(out), cut


lex = {}
for e in lexicon["entries"]:
    if e.get("missing"):
        continue
    d = e["dStrong"]
    definition, cut = trim_definition(e.get("definitionFull") or e.get("definition") or "")
    n = e["occurrencesNT"]
    lex[d] = {
        "lemma": e["lemma"],
        "tr": e["transliteration"],
        "strong": e["strong"],
        "pos": e["partOfSpeech"],
        "gloss": e["shortGloss"],
        "def": definition,
        "cut": cut,
        "as": "Abbott-Smith" in e["definitionSource"],
        "formOf": e.get("formOf"),
        "n": n,
        "nAny": e["occurrencesNTAnyEdition"],
        "nJohn": john_count.get(d, 0),
        "verses": e["versesNT"],
        "refs": nt_refs.get(d, []) if n <= REFS_CAP else None,
    }


def clean_gloss(s):
    return (s or "").strip()


# ------------------------------------------------------------ verses
verses = {}
for v in range(1, 72):
    ref = f"John.6.{v}"
    ws = [w for w in greek["words"] if w["ref"] == ref]
    words, variants = [], []
    for w in ws:
        if w["inNA28"]:
            item = {
                "g": w["greek"],
                "p": w["punctuation"] or "",
                "t": w["transliteration"],
                "l": w["lemma"],
                "lt": w["lemmaTransliteration"],
                "s": w["dStrong"],
                "m": w["morph"],
                "parse": w["parse"],
                "en": clean_gloss(w["englishGloss"]),
                "es": clean_gloss(w["spanishGloss"]),
            }
            if w["meaningVariant"]:
                item["var"] = w["meaningVariant"]
            words.append(item)
        else:
            variants.append({
                "g": w["greek"],
                "t": w["transliteration"],
                "en": clean_gloss(w["englishGloss"]),
                "es": clean_gloss(w["spanishGloss"]),
                "eds": w["editions"],
                "after": words[-1]["g"] if words else None,
            })
    verses[str(v)] = {
        "words": words,
        "omitted": variants,
        "text": trans["verses"][str(v)],
        "para": any(w["paragraphAfter"] for w in ws),
    }

editions = []
for e in trans["editions"]:
    editions.append({
        "id": e["id"],
        "name": e["name"],
        "lang": e["language"],
        "year": e["year"],
        "basis": e["basis"],
        "license": e["license"],
        "url": e["url"],
        "note": e.get("note"),
        "versification": e.get("versification"),
    })

# Douay-Rheims follows Vulgate numbering from 6:51 on: map KJV verse -> native label.
native = {}
for nat, kjv_refs in trans.get("nativeRefs", {}).get("dra", {}).items():
    for r in kjv_refs:
        native[r.split(".")[-1]] = nat

# ------------------------------------------------------------ patristic commentary
# Only entries whose English translation is public domain (see licenseWarning in the raw file).
fathers = []
fathers_withheld = defaultdict(int)
fpath = RAW / "john6.fathers.json"
if fpath.exists():
    fraw = json.loads(fpath.read_text(encoding="utf-8"))
    for e in fraw["entries"]:
        if e.get("translationLicense") != "public-domain":
            for v in range(e["verseStart"], (e.get("verseEnd") or e["verseStart"]) + 1):
                fathers_withheld[str(v)] += 1
            continue
        fathers.append({
            "id": e["id"],
            "from": e["verseStart"],
            "to": e.get("verseEnd") or e["verseStart"],
            "father": e["father"],
            "via": e.get("transmittedVia"),
            "work": e["work"],
            "year": e["year"],
            "text": e["text"],
            "url": e.get("originalSourceUrl") or e.get("sourceUrl"),
            "indexUrl": e.get("sourceUrl"),
            "translation": e.get("translationLicenseNote"),
        })
    fathers_source = fraw["sources"][0]["attribution"]
    fathers_known = fraw.get("countsPerVerseSermonIndex", {})
else:
    fathers_source = None
    fathers_known = {}

out = {
    "book": "John",
    "chapter": 6,
    "sources": {
        "greek": greek["source"]["attribution"],
        "greekUrl": greek["source"]["url"],
        "lexicon": lexicon["source"]["attribution"],
    },
    "editions": editions,
    "draNative": native,
    "verses": verses,
    "lexicon": lex,
    "fathers": fathers,
    "fathersWithheld": fathers_withheld,
    "fathersSource": fathers_source,
    "fathersKnown": fathers_known,
}
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
print("wrote", OUT, OUT.stat().st_size, "bytes;", len(lex), "lemmas;",
      sum(1 for x in lex.values() if x["refs"] is not None), "with refs")
