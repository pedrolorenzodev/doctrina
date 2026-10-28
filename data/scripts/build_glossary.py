#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "docs/research/glossary-terms.md"
TARGET = ROOT / "data/site/glossary.json"

TRADITIONS = {
    "Católica": "catholic",
    "Ortodoxa": "orthodox",
    "Luterana": "lutheran",
    "Reformada": "reformed",
    "Bautista": "baptist",
    "Pentecostal": "pentecostal",
}
GROUPS = {
    "A": {"es": "Autoridad, Iglesia y magisterio", "en": "Authority, Church and magisterium"},
    "B": {"es": "Escritura", "en": "Scripture"},
    "C": {"es": "Justificación, gracia y penitencia", "en": "Justification, grace and penance"},
    "D": {"es": "Sacramentos y liturgia", "en": "Sacraments and liturgy"},
    "E": {"es": "Nombres en los textos de las objeciones", "en": "Names in the objectors' texts"},
}
EDITIONS = {
    "CEC": "lev",
    "CCC": "lev",
    "CIC": "lev",
    "LG": "lev",
    "DV": "lev",
    "UR": "lev",
    "SC": "lev",
    "OE": "lev",
    "CDF": "lev",
    "Trento-Ayala": "public-domain",
    "Trento-Waterworth": "public-domain",
    "Schaff II": "public-domain",
    "Triglot": "public-domain",
    "WCF-1647": "public-domain",
    "WCF-1880": "public-domain",
    "BF&M": "sbc",
    "AG-SFT": "ag",
    "Robertson": "public-domain",
    "Enc-1895": "public-domain",
}
LICENCES = {
    "lev": "© Libreria Editrice Vaticana: short quote with a link",
    "sbc": "© Southern Baptist Convention: short quote with a link",
    "ag": "© General Council of the Assemblies of God: short quote with a link",
    "public-domain": "Public domain",
}
DOCTRINES = {
    "Justificación": "justification",
    "Bautismo": "baptism",
    "Eucaristía": "eucharist",
    "Papado": "papacy",
    "Sola Scriptura": "sola-scriptura",
}


def clean(text: str) -> str:
    text = re.sub(r"`[^`]*`", "", text)
    text = re.sub(r"\*\*?([^*]+)\*\*?", r"\1", text)
    text = re.sub(r"\s+([.;,])", r"\1", text)
    return re.sub(r"\s{2,}", " ", text).strip()


def first_quote(text: str) -> str | None:
    match = re.match(r"\s*(«.+?»|\".+?\")(?=\s*(?:—|$|\(|;|\.))", text)
    return match.group(1) if match else None


def bullet(line: str) -> dict:
    body = line[2:].strip()
    lang = "other"
    head = re.match(r"(es|en|Original|Latin)\b([^:]*):\s*", body)
    if head:
        lang = {"es": "es", "en": "en"}.get(head.group(1), "original")
        label = head.group(2)
        body = body[head.end():]
    else:
        label = ""
    tags = re.findall(r"`\[([^\]]+)\]`", body)
    quote = first_quote(body)
    source = None
    if quote:
        rest = body[body.index(quote) + len(quote):]
        found = re.match(r"\s*—\s*([^`\[]+?)\s*(?:`|\[|$)", rest)
        source = clean(found.group(1)).rstrip(",;") if found else None
    edition = next((name for name in EDITIONS if source and name in source), None)
    if edition is None and source:
        edition = next((name for name in EDITIONS if source.startswith(name.split("-")[0])), None)
    return {
        "lang": lang,
        "quote": quote,
        "source": source,
        "edition": edition,
        "licence": LICENCES[EDITIONS[edition]] if edition else None,
        "verified": tags,
        "text": clean(body),
        "aiTranslated": "asistida por IA" in label or "AI-assisted" in label,
        "notFound": "[not found]" in body,
    }


def parse_term(block: str) -> dict:
    lines = block.split("\n")
    head = re.match(r"([A-E])(\d+) · (.+)", lines[0])
    if not head:
        raise ValueError(f"bad heading: {lines[0]}")
    group, number, name = head.groups()
    where = next((line for line in lines if line.startswith("_Dónde:_")), "")
    used = re.match(r"_Dónde:_\s*(.*?)\.\s*Uso divergente:\s*(.*)", where)
    used_in = used.group(1) if used else ""
    divergent = bool(used and used.group(2).lstrip("*").startswith("sí"))
    doctrines = [slug for label, slug in DOCTRINES.items() if label in used_in]
    traditions: list[dict] = []
    notes: list[str] = []
    current: dict | None = None
    for line in lines[1:]:
        tradition = re.match(r"\*\*([^*]+)\*\*\s*(.*)", line)
        if tradition and tradition.group(1).strip() in TRADITIONS:
            label = tradition.group(1).strip()
            current = {
                "tradition": TRADITIONS[label],
                "context": clean(tradition.group(2)).strip("() ") or None,
                "entries": [],
            }
            traditions.append(current)
            continue
        if line.startswith("- ") and current is not None:
            current["entries"].append(bullet(line))
        elif line.startswith("- ") or (line.strip() and not line.startswith("_Dónde") and current is None):
            notes.append(clean(line.lstrip("- ")))
    return {
        "id": f"{group}{number}",
        "group": group,
        "name": name.strip(),
        "usedIn": clean(used_in),
        "doctrines": doctrines,
        "divergent": divergent,
        "traditions": traditions,
        "notes": [note for note in notes if note],
    }


def main() -> int:
    text = SOURCE.read_text(encoding="utf-8")
    body = text.split("\n## Term list", 1)[1]
    blocks = re.split(r"\n### ", body)[1:]
    terms = [parse_term(block.split("\n## ", 1)[0]) for block in blocks if re.match(r"[A-E]\d+ · ", block)]
    ids = [term["id"] for term in terms]
    if len(terms) != 100 or len(set(ids)) != 100:
        print(f"expected 100 unique terms, got {len(terms)} ({len(set(ids))} unique)", file=sys.stderr)
        return 1
    data = {
        "status": "draft",
        "source": "docs/research/glossary-terms.md",
        "groups": GROUPS,
        "terms": terms,
    }
    TARGET.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{len(terms)} terms -> {TARGET.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
