import re
import sys
import urllib.request
import html as htmlmod


def fetch(url, timeout=60):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (research script)"})
    raw = urllib.request.urlopen(req, timeout=timeout).read()
    for enc in ("utf-8", "latin-1"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue


def strip(markup):
    markup = re.sub(r"(?is)<(script|style).*?</\1>", " ", markup)
    markup = re.sub(r"(?i)<br\s*/?>|</p>|</div>|</tr>|</li>", "\n", markup)
    markup = re.sub(r"(?s)<[^>]+>", " ", markup)
    markup = htmlmod.unescape(markup)
    markup = re.sub(r"[ \t\xa0]+", " ", markup)
    markup = re.sub(r"\n\s*\n+", "\n", markup)
    return markup


def around(text, needle, before=200, after=1200, nth=0):
    hits = [m.start() for m in re.finditer(needle, text)]
    if len(hits) <= nth:
        return "NOT FOUND: %s (hits: %d)" % (needle, len(hits))
    i = hits[nth]
    return text[max(0, i - before): i + after]


if __name__ == "__main__":
    url, needle = sys.argv[1], sys.argv[2]
    before = int(sys.argv[3]) if len(sys.argv) > 3 else 100
    after = int(sys.argv[4]) if len(sys.argv) > 4 else 1500
    nth = int(sys.argv[5]) if len(sys.argv) > 5 else 0
    text = strip(fetch(url))
    print(around(text, needle, before, after, nth))
