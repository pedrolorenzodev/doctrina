const FOLD = new Map(Object.entries({
  "“": '"', "”": '"', "„": '"', "«": '"', "»": '"', "‹": "'", "›": "'",
  "‘": "'", "’": "'", "—": "-", "–": "-", "‐": "-", "‑": "-",
  "Æ": "AE", "æ": "ae", "Œ": "OE", "œ": "oe", " ": " ",
}));
const DROP = new Set(["[", "]", "_", "*"]);

export function normalize(source) {
  const chars = [];
  const map = [];
  const text = source.normalize("NFC").replace(/(\w)-\s*\n\s*(\w)/g, "$1$2");
  let lastSpace = true;
  for (let i = 0; i < text.length; i += 1) {
    const raw = text[i];
    if (DROP.has(raw)) continue;
    if (/\s/.test(raw)) {
      if (!lastSpace) { chars.push(" "); map.push(i); lastSpace = true; }
      continue;
    }
    const folded = (FOLD.get(raw) ?? raw).toLowerCase();
    for (const c of folded) { chars.push(c); map.push(i); }
    lastSpace = false;
  }
  return { text: chars.join(""), map };
}

const trimEdges = (s) => s.replace(/^[\s"'.,;:\-]+|[\s"'.,;:\-]+$/g, "");

export function verifyQuote(passage, quote, { maxGap = 400, minWords = 3 } = {}) {
  const segments = quote.split(/\s*(?:…|\.\.\.|\[…\]|\[\.\.\.\])\s*/).map((s) => s.trim()).filter(Boolean);
  if (segments.join(" ").split(/\s+/).length < minWords) return { ok: false, reason: "too-short" };
  const hay = normalize(passage);
  let from = 0;
  const spans = [];
  for (const segment of segments) {
    const needle = trimEdges(normalize(segment).text);
    if (!needle) continue;
    const at = hay.text.indexOf(needle, from);
    if (at < 0) return { ok: false, reason: "not-found", segment };
    if (spans.length && at - from > maxGap) return { ok: false, reason: "gap-too-long", segment };
    const start = hay.map[at];
    const end = hay.map[at + needle.length - 1] + 1;
    spans.push([start, end]);
    from = at + needle.length;
  }
  return { ok: true, spans, display: spans.map(([s, e]) => passage.slice(s, e)).join(" […] ") };
}
