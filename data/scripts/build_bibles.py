import hashlib
import io
import json
import re
import sys
import urllib.request
import zipfile
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "raw" / "src" / "bibles"
OUT = ROOT / "corpus" / "bibles"
MANIFEST = ROOT / "sources" / "bibles.json"

EDITIONS = [
    {"id": "rv1909", "ebible": "spaRV1909", "format": "vpl", "lang": "es", "canon": 66,
     "name": "Reina-Valera 1909", "licence": "Public domain",
     "printWitness": "https://archive.org/details/lasantabibliaque00unse"},
    {"id": "kjv", "ebible": "eng-kjv2006", "format": "vpl", "lang": "en", "canon": 66,
     "name": "King James Version (1769 standard text)", "licence": "Public domain outside the UK",
     "printWitness": "https://archive.org/details/bim_eighteenth-century_the-holy-bible-containi_bible-english-authori_1769"},
    {"id": "bsb", "ebible": "engbsb", "format": "vpl", "lang": "en", "canon": 66,
     "name": "Berean Standard Bible", "licence": "Public domain (since 2023-04-30)", "printWitness": None},
    {"id": "dra", "ebible": "engDRA", "format": "vpl", "lang": "en", "canon": 73,
     "name": "Douay-Rheims, Challoner revision, American edition 1899", "licence": "Public domain",
     "printWitness": "https://archive.org/details/holybibletransla00denv"},
    {"id": "web-c", "ebible": "eng-web-c", "format": "usfm", "lang": "en", "canon": 73,
     "name": "World English Bible, Catholic edition", "licence": "Public domain; altered text must not be called World English Bible",
     "printWitness": None},
]

OSIS = dict(zip(
    "GEN EXO LEV NUM DEU JOS JDG RUT 1SA 2SA 1KI 2KI 1CH 2CH EZR NEH EST JOB PSA PRO ECC SNG ISA JER LAM EZK DAN HOS JOL AMO OBA JON MIC NAM HAB ZEP HAG ZEC MAL "
    "MAT MRK LUK JHN ACT ROM 1CO 2CO GAL EPH PHP COL 1TH 2TH 1TI 2TI TIT PHM HEB JAS 1PE 2PE 1JN 2JN 3JN JUD REV "
    "TOB JDT ESG WIS SIR BAR LJE S3Y SUS BEL 1MA 2MA 3MA 4MA 1ES 2ES MAN PS2 DAG".split(),
    "Gen Exod Lev Num Deut Josh Judg Ruth 1Sam 2Sam 1Kgs 2Kgs 1Chr 2Chr Ezra Neh Esth Job Ps Prov Eccl Song Isa Jer Lam Ezek Dan Hos Joel Amos Obad Jonah Mic Nah Hab Zeph Hag Zech Mal "
    "Matt Mark Luke John Acts Rom 1Cor 2Cor Gal Eph Phil Col 1Thess 2Thess 1Tim 2Tim Titus Phlm Heb Jas 1Pet 2Pet 1John 2John 3John Jude Rev "
    "Tob Jdt EsthGr Wis Sir Bar EpJer PrAzar Sus Bel 1Macc 2Macc 3Macc 4Macc 1Esd 2Esd PrMan AddPs DanGr".split(),
))

VPL_CODES = {"EZE": "EZK", "NAH": "NAM", "JOE": "JOL", "JOH": "JHN", "JAM": "JAS", "MAR": "MRK", "PHI": "PHP", "SOL": "SNG", "1JO": "1JN", "2JO": "2JN", "3JO": "3JN"}

VPL_LINE = re.compile(r"^([1-4A-Z]{3}) (\d+):(\d+) (.*)$")


def download(edition):
    suffix = "_vpl.zip" if edition["format"] == "vpl" else "_usfm.zip"
    url = f"https://ebible.org/Scriptures/{edition['ebible']}{suffix}"
    target = RAW / f"{edition['ebible']}{suffix}"
    if not target.exists():
        RAW.mkdir(parents=True, exist_ok=True)
        request = urllib.request.Request(url, headers={"User-Agent": "doctrina-data/1.0 (curl compatible)"})
        with urllib.request.urlopen(request, timeout=120) as response:
            target.write_bytes(response.read())
    data = target.read_bytes()
    return url, target, hashlib.sha256(data).hexdigest(), zipfile.ZipFile(io.BytesIO(data))


def from_vpl(archive):
    name = next(n for n in archive.namelist() if n.endswith("_vpl.txt"))
    verses = {}
    for line in archive.read(name).decode("utf-8-sig").splitlines():
        match = VPL_LINE.match(line.strip())
        if not match:
            continue
        book, chapter, verse, text = match.groups()
        book = VPL_CODES.get(book, book)
        if book not in OSIS:
            raise ValueError(f"Unknown VPL book code {book} in {name}")
        text = text.strip()
        if text:
            verses[f"{OSIS[book]}.{chapter}.{verse}"] = text
    return verses


NOTE = re.compile(r"\\(f|fe|x)\s.*?\\\1\*", re.S)
WORD_ATTRS = re.compile(r"\|[^\\]*")
CLOSING_MARKER = re.compile(r"\\\+?[a-z0-9]+\*")
OPENING_MARKER = re.compile(r"\\\+?[a-z0-9]+\s?")


def clean_usfm(text):
    text = NOTE.sub("", text)
    text = WORD_ATTRS.sub("", text)
    text = CLOSING_MARKER.sub("", text)
    text = OPENING_MARKER.sub("", text)
    return re.sub(r"\s+", " ", text).strip()


def from_usfm(archive):
    verses = {}
    for name in sorted(archive.namelist()):
        if not name.lower().endswith((".usfm", ".sfm")):
            continue
        source = archive.read(name).decode("utf-8-sig")
        book_match = re.search(r"^\\id ([1-4A-Z]{3})", source, re.M)
        if not book_match or book_match.group(1) not in OSIS:
            continue
        book = OSIS[book_match.group(1)]
        chapter = None
        current = None
        for part in re.split(r"(\\c \d+|\\v \d+[a-z]?(?:-\d+)?)", source):
            if part.startswith("\\c "):
                chapter = part[3:].strip()
                current = None
            elif part.startswith("\\v "):
                current = f"{book}.{chapter}.{part[3:].strip()}"
                verses[current] = ""
            elif current:
                verses[current] += part
    return {key: clean_usfm(text) for key, text in verses.items() if clean_usfm(text)}


def main():
    only = set(sys.argv[1:])
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = []
    for edition in EDITIONS:
        if only and edition["id"] not in only:
            continue
        url, target, sha256, archive = download(edition)
        verses = from_vpl(archive) if edition["format"] == "vpl" else from_usfm(archive)
        books = sorted({key.split(".")[0] for key in verses})
        (OUT / f"{edition['id']}.json").write_text(json.dumps(verses, ensure_ascii=False, indent=0), "utf-8")
        manifest.append({**edition, "url": url, "file": target.name, "sha256": sha256,
                         "downloaded": date.fromtimestamp(target.stat().st_mtime).isoformat(),
                         "books": len(books), "verses": len(verses)})
        print(f"{edition['id']}: {len(books)} books, {len(verses)} verses")
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", "utf-8")


if __name__ == "__main__":
    main()
