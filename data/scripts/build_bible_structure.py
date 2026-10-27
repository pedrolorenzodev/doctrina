import hashlib
import io
import json
import re
import zipfile
from datetime import date
from pathlib import Path

from build_bibles import EDITIONS, OSIS, RAW, OUT, clean_usfm

SOURCES = {"bsb": "engbsb_usfm.zip", "web-c": "eng-web-c_usfm.zip"}
STRUCTURE_MANIFEST = OUT.parent.parent / "sources" / "bible-structure.json"

MARKER = re.compile(r"^\\([a-z0-9]+)\*?\s*(.*)$")
VERSE = re.compile(r"\\v (\d+)")
HEADINGS = {"s", "s1"}
BREAKS = {"p", "m", "pi", "pi1", "pi2", "mi", "nb", "b", "pmo", "pm", "pmc", "pmr", "cls", "d", "ms", "ms1", "li", "li1", "li2"}
POETRY = {"q", "q1", "q2", "q3", "q4", "qr", "qc", "qm", "qm1", "qm2"}


def book_structure(source):
    chapters = {}
    chapter = None
    pending_break = True
    pending_heading = None
    in_poetry = False
    for line in source.splitlines():
        match = MARKER.match(line.strip())
        if not match:
            continue
        marker, rest = match.groups()
        if marker == "c":
            chapter = int(rest.split()[0])
            chapters.setdefault(chapter, {"s": [], "p": []})
            pending_break = True
            in_poetry = False
            continue
        if chapter is None:
            continue
        if marker in HEADINGS:
            pending_heading = clean_usfm(rest)
            pending_break = True
            in_poetry = False
            continue
        if marker in BREAKS:
            pending_break = True
            in_poetry = False
        elif marker in POETRY:
            if not in_poetry:
                pending_break = True
            in_poetry = True
        for verse in VERSE.findall(line):
            number = int(verse)
            entry = chapters[chapter]
            if pending_break and number not in entry["p"]:
                entry["p"].append(number)
            pending_break = False
            if pending_heading:
                entry["s"].append([number, pending_heading])
                pending_heading = None
    return chapters


def edition_structure(archive, verses):
    result = {}
    for name in sorted(archive.namelist()):
        if not name.lower().endswith((".usfm", ".sfm")):
            continue
        source = archive.read(name).decode("utf-8-sig")
        book_match = re.search(r"^\\id ([1-4A-Z]{3})", source, re.M)
        if not book_match or book_match.group(1) not in OSIS:
            continue
        book = OSIS[book_match.group(1)]
        for chapter, entry in book_structure(source).items():
            present = {int(key.split(".")[2]) for key in verses if key.startswith(f"{book}.{chapter}.") and key.split(".")[2].isdigit()}
            if not present:
                continue
            paragraphs = sorted(number for number in entry["p"] if number in present)
            sections = [[number, title] for number, title in entry["s"] if number in present and title]
            if paragraphs or sections:
                result[f"{book}.{chapter}"] = {"s": sections, "p": paragraphs}
    return result


def main():
    manifest = []
    for edition in EDITIONS:
        if edition["id"] not in SOURCES:
            continue
        target = RAW / SOURCES[edition["id"]]
        data = target.read_bytes()
        verses = json.loads((OUT / f"{edition['id']}.json").read_text("utf-8"))
        structure = edition_structure(zipfile.ZipFile(io.BytesIO(data)), verses)
        (OUT / f"{edition['id']}.structure.json").write_text(json.dumps(structure, ensure_ascii=False, separators=(",", ":")), "utf-8")
        headings = sum(len(entry["s"]) for entry in structure.values())
        manifest.append({"id": edition["id"], "file": target.name, "sha256": hashlib.sha256(data).hexdigest(),
                         "downloaded": date.fromtimestamp(target.stat().st_mtime).isoformat(),
                         "chapters": len(structure), "headings": headings})
        print(f"{edition['id']}: {len(structure)} chapters, {headings} headings")
    STRUCTURE_MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", "utf-8")


if __name__ == "__main__":
    main()
