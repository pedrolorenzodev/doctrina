"""Build data/raw/john6.translations.json from eBible.org VPL files + CrossWire SpaScioNT.

All verse keys use English (KJV/NRSV) versification. Douay-Rheims follows the Vulgate in
John 6 (72 verses: Vulgate 6:51-52 = English 6:51), so it is remapped; nativeRefs records the
original numbering.
"""
import json
import re
from collections import OrderedDict
from pathlib import Path

from sword_ztext import read_testament, nt_index

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "raw" / "src"
CH = 6
NVERSES = 71

EDITIONS = [
    {"id": "bsb", "ebible": "engbsb", "name": "Berean Standard Bible", "language": "en", "year": 2023,
     "tradition": "Evangelical (interdenominational)", "basis": "Greek (critical text, NA/UBS-type)",
     "license": "Public domain (dedicated to the public domain by BSB Publishing on 30 April 2023)",
     "url": "https://ebible.org/engbsb/", "sourceFile": "https://ebible.org/Scriptures/engbsb_vpl.zip"},
    {"id": "kjv", "ebible": "eng-kjv2006", "name": "King James Version (1769 standard text)", "language": "en", "year": 1611,
     "tradition": "Anglican / Protestant", "basis": "Greek Textus Receptus",
     "license": "Public domain (outside the UK; in the UK the KJV is under perpetual Crown patent, administered by Cambridge University Press)",
     "url": "https://ebible.org/eng-kjv2006/", "sourceFile": "https://ebible.org/Scriptures/eng-kjv2006_vpl.zip"},
    {"id": "web", "ebible": "engwebp", "name": "World English Bible", "language": "en", "year": 2020,
     "tradition": "Ecumenical (Protestant canon edition)", "basis": "Greek Majority Text",
     "license": "Public domain. \"World English Bible\" is a trademark of eBible.org: if the text is changed, it must not be called WEB.",
     "url": "https://ebible.org/engwebp/", "sourceFile": "https://ebible.org/Scriptures/engwebp_vpl.zip"},
    {"id": "dra", "ebible": "engDRA", "name": "Douay-Rheims (Challoner revision, American edition 1899)", "language": "en", "year": 1899,
     "tradition": "Catholic", "basis": "Latin Vulgate",
     "license": "Public domain", "url": "https://ebible.org/engDRA/",
     "sourceFile": "https://ebible.org/Scriptures/engDRA_vpl.zip", "versification": "Vulgate"},
    {"id": "ylt", "ebible": "engylt", "name": "Young's Literal Translation", "language": "en", "year": 1898,
     "tradition": "Protestant (literal)", "basis": "Greek Textus Receptus",
     "license": "Public domain", "url": "https://ebible.org/engylt/", "sourceFile": "https://ebible.org/Scriptures/engylt_vpl.zip"},
    {"id": "rv1909", "ebible": "spaRV1909", "name": "Reina-Valera 1909", "language": "es", "year": 1909,
     "tradition": "Protestant", "basis": "Greek Textus Receptus",
     "license": "Public domain", "url": "https://ebible.org/spaRV1909/", "sourceFile": "https://ebible.org/Scriptures/spaRV1909_vpl.zip"},
    {"id": "scio", "name": "Felipe Scío de San Miguel, Nuevo Testamento (2nd ed. 1797)", "language": "es", "year": 1797,
     "tradition": "Catholic", "basis": "Latin Vulgate",
     "license": "Public domain (CrossWire SWORD module SpaScioNT, DistributionLicense=Public Domain)",
     "url": "https://www.crosswire.org/sword/modules/ModInfo.jsp?modName=SpaScioNT",
     "sourceFile": "https://www.crosswire.org/ftpmirror/pub/sword/packages/rawzip/SpaScioNT.zip",
     "note": "Historical 18th-century spelling (dixo, quanto, Jesu-Christo) kept as in source. Module already uses KJV versification."},
    {"id": "blm", "ebible": "spablm", "name": "Santa Biblia libre para el mundo", "language": "es", "year": 2024,
     "tradition": "Ecumenical (modern, open)", "basis": "Greek (translated by D. Williams & M. P. Johnson)",
     "license": "Public domain", "url": "https://ebible.org/spablm/", "sourceFile": "https://ebible.org/Scriptures/spablm_vpl.zip",
     "note": "Publisher describes it as a draft under revision (\"borrador de traducción\")."},
]


def read_vpl(eid):
    path = SRC / "ebible" / eid / f"{eid}_vpl.txt"
    out = {}
    for line in path.read_text(encoding="utf-8-sig").splitlines():
        m = re.match(rf"^JOH {CH}:(\d+) (.*)$", line)
        if m:
            out[int(m.group(1))] = m.group(2).strip()
    return out


def dra_to_english(v):
    """Vulgate John 6 -> English. Vulg 51+52 = Eng 51; Vulg n (n>=53) = Eng n-1."""
    eng, native = {}, {}
    for n, t in v.items():
        e = n if n <= 51 else (51 if n == 52 else n - 1)
        eng[e] = (eng[e] + " " + t) if e in eng else t
        native.setdefault(e, []).append(f"John.6.{n}")
    return eng, native


verses = OrderedDict((str(n), OrderedDict()) for n in range(1, NVERSES + 1))
editions_out = []
native_refs = {}
for ed in EDITIONS:
    if ed["id"] == "scio":
        nt = read_testament(str(SRC / "sword" / "SpaScioNT" / "modules" / "texts" / "ztext" / "spasciont" / "nt"))
        text = {n: re.sub(r"\s+", " ", nt[nt_index("John", CH, n)]).strip() for n in range(1, NVERSES + 1)}
    else:
        text = read_vpl(ed["ebible"])
        if ed.get("versification") == "Vulgate":
            text, nat = dra_to_english(text)
            native_refs[ed["id"]] = {str(k): v for k, v in nat.items() if v != [f"John.6.{k}"]}
    missing = [n for n in range(1, NVERSES + 1) if not text.get(n)]
    for n in range(1, NVERSES + 1):
        verses[str(n)][ed["id"]] = text.get(n) or None
    meta = OrderedDict((k, v) for k, v in ed.items() if k not in ("ebible",))
    meta["versesPresent"] = NVERSES - len(missing)
    editions_out.append(meta)

out = OrderedDict([
    ("book", "John"), ("chapter", CH), ("versification", "English (KJV/NRSV); 71 verses"),
    ("editions", editions_out),
    ("nativeRefs", native_refs),
    ("excludedForLicense", [
        {"name": "Biblia Platense (Juan Straubinger, 1948-51)", "reason": "CrossWire lists it as public domain, but Straubinger died in 1956: protected in Argentina until 1 Jan 2027 (life + 70) and in Spain until 2037; not used until cleared."},
        {"name": "Torres Amat (1825)", "reason": "Public domain, but no verse-structured digital text found (only Internet Archive scans/OCR). Could be built from OCR later."},
        {"name": "NVI, RVR1960, Biblia de Jerusalén, Nácar-Colunga, Biblia de América, LBLA, NBLA, ESV, NIV, NABRE, RSV-CE", "reason": "Copyrighted; require a licence from the publisher."},
    ]),
    ("verses", verses),
])
(ROOT / "raw" / f"john{CH}.translations.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print({e["id"]: e["versesPresent"] for e in editions_out})
print(json.dumps(verses["53"], ensure_ascii=False, indent=1))
