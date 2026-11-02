"""Build data/corpus/fathers-es/<work-id>/doctrina-ia-2026.json from the English corpus file and a Spanish translation text.

Usage: python3 -I data/scripts/build_fathers_es.py <work-id> <translation.txt> [--en data/corpus/fathers/<work-id>/<file>.json]

Translation text format (written by the AI translator, one file per work):
  @title <Spanish title of the work, optional>
  @notes <Spanish locatorNotes line, optional>
  === <locator>
  ## <Spanish heading>        (present only when the English division has a heading)
  <Spanish text lines>        (a line break in the English text is a line break here)
Every English division must appear once, in the same order, with the same locator. Nothing is merged, split or added.
"""
import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
ap = argparse.ArgumentParser()
ap.add_argument("work")
ap.add_argument("translation")
ap.add_argument("--en", default=None)
ap.add_argument("--only-prefix", default=None, help="comma-separated locator prefixes, e.g. 3. : build a partial file covering only those divisions")
args = ap.parse_args()

en_dir = ROOT / "data" / "corpus" / "fathers" / args.work
en_path = Path(args.en) if args.en else sorted(en_dir.glob("*.json"))[0]
en_bytes = en_path.read_bytes()
en = json.loads(en_bytes)
if args.only_prefix:
    items = args.only_prefix.split(",")
    exact = {i[1:] for i in items if i.startswith("=")}
    prefixes = tuple(i for i in items if not i.startswith("="))
    en["divisions"] = [d for d in en["divisions"] if d["locator"] in exact or (prefixes and d["locator"].startswith(prefixes))]

notes = None
title = None
blocks = []
cur = None
for line in Path(args.translation).read_text(encoding="utf-8").splitlines():
    if line.startswith("@notes "):
        notes = line[7:].strip()
    elif line.startswith("@title "):
        title = line[7:].strip()
    elif line.startswith("=== "):
        cur = {"locator": line[4:].strip(), "heading": None, "lines": []}
        blocks.append(cur)
    elif cur is not None:
        if line.startswith("## ") and not cur["lines"] and cur["heading"] is None:
            cur["heading"] = line[3:].strip()
        else:
            cur["lines"].append(line)

errors, warnings = [], []
if len(blocks) != len(en["divisions"]):
    errors.append(f"division count: english {len(en['divisions'])}, spanish {len(blocks)}")
divisions = []
for i, (src, blk) in enumerate(zip(en["divisions"], blocks), 1):
    if blk["locator"] != src["locator"]:
        errors.append(f"division {i}: locator {blk['locator']!r} != english {src['locator']!r}")
        break
    text = "\n".join(blk["lines"]).strip()
    if bool(src.get("heading")) != bool(blk["heading"]):
        errors.append(f"{src['locator']}: heading present in english={bool(src.get('heading'))}, spanish={bool(blk['heading'])}")
    if not text:
        errors.append(f"{src['locator']}: empty text")
        continue
    if src["text"].count("\n") != text.count("\n"):
        warnings.append(f"{src['locator']}: line breaks english {src['text'].count(chr(10))}, spanish {text.count(chr(10))}")
    ew, sw = len(src["text"].split()), len(text.split())
    if ew >= 12 and not ((0.7 if ew < 60 else 0.8) <= sw / ew <= 1.7):
        warnings.append(f"{src['locator']}: words english {ew}, spanish {sw}")
    if src["text"].count("[") != text.count("[") or src["text"].count("]") != text.count("]"):
        warnings.append(f"{src['locator']}: square brackets differ ({src['text'].count('[')} vs {text.count('[')})")
    if sorted(re.findall(r"\d+", src["text"])) != sorted(re.findall(r"\d+", text)):
        warnings.append(f"{src['locator']}: digits differ {sorted(re.findall(r'[0-9]+', src['text']))} vs {sorted(re.findall(r'[0-9]+', text))}")
    divisions.append({"locator": src["locator"], "ordinal": i if args.only_prefix else src["ordinal"], "heading": blk["heading"], "text": text})

e = en["edition"]
edition = {
    "id": "doctrina-ia-2026",
    "lang": "es",
    "translator": "Doctrina (traducción asistida por IA)",
    "year": 2026,
    "bibliography": (
        f"Traducción de Doctrina asistida por IA (Claude, Anthropic), 2026, al español desde la traducción inglesa de {e['translator']} ({e['year']}): "
        f"{e['bibliography']} Se tradujo el texto inglés del corpus de Doctrina (borrador que no había pasado una revisión independiente completa), "
        "no el original; no fue cotejada con el original ni revisada por una persona."
    ),
    "source": e["source"],
    "scan": e.get("scan"),
    "licence": "pending: translation by Doctrina (AI-assisted) of a public-domain English text; licence to be decided by Pedro",
    "retrievedAt": "2026-11-01",
    "sha256": hashlib.sha256(en_bytes).hexdigest(),
    "locatorNotes": notes if notes else e.get("locatorNotes"),
    "status": "draft",
    "coverage": f"partial: locators starting with {args.only_prefix}" if args.only_prefix else "complete",
    "translatedFrom": {"editionId": e["id"], "file": str(en_path.relative_to(ROOT)), "sha256": hashlib.sha256(en_bytes).hexdigest()},
}
for m in errors:
    print("ERROR", m)
for m in warnings:
    print("warn", m)
if errors:
    sys.exit(1)
out_dir = ROOT / "data" / "corpus" / "fathers-es" / args.work
out_dir.mkdir(parents=True, exist_ok=True)
out = out_dir / "doctrina-ia-2026.json"
out.write_text(json.dumps({"work": {**en["work"], "title": title or en["work"]["title"]}, "edition": edition, "divisions": divisions}, ensure_ascii=False, indent=1), encoding="utf-8")
print("wrote", out.relative_to(ROOT), len(divisions), "divisions;", sum(len(d["text"].split()) for d in divisions), "words;", len(warnings), "warnings")
