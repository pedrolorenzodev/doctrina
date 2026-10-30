import fs from "node:fs";

const LANG = { German: "de", Latin: "la", English: "en", Español: "es" };

const LANG_WORD = /(German|Latin|English|Español)\b/g;

function closeOf(line, open) {
  if (line[open] === "«") {
    let depth = 0;
    for (let i = open; i < line.length; i++) {
      if (line[i] === "«") depth++;
      else if (line[i] === "»" && --depth === 0) return i;
    }
    return -1;
  }
  for (let i = open + 1; i < line.length; i++) {
    if (line[i] !== '"') continue;
    if (/^\s*(?:$|[`(\[*—.,;]|English|Español|German|Latin|Note)/.test(line.slice(i + 1))) return i;
  }
  return -1;
}

function quotesIn(line) {
  const masked = line.replace(/`[^`]*`/g, (m) => "x".repeat(m.length));
  const out = [];
  let previousEnd = 0;
  for (const m of masked.matchAll(/: ([«"])/g)) {
    const open = m.index + 2;
    if (open < previousEnd) continue;
    const close = closeOf(line, open);
    if (close < 0) continue;
    const head = line.slice(previousEnd, m.index);
    const words = [...head.matchAll(LANG_WORD)];
    out.push({ lang: words.length ? words[words.length - 1][1] : null, head, text: line.slice(open + 1, close) });
    previousEnd = close + 1;
  }
  return out;
}

export function readDossier(file) {
  const md = fs.readFileSync(file, "utf8");
  const sections = md.split(/^## /m).slice(1);
  const section = (n) => {
    const found = sections.find((s) => s.startsWith(`${n}. `));
    if (!found) throw new Error(`dossier ${file}: no section ${n}`);
    return found;
  };
  const block = (id) => {
    const at = md.search(new RegExp(`^#{3,4} ${id.replace(/[+.]/g, "\\$&")} · `, "m"));
    if (at < 0) throw new Error(`dossier ${file}: no block ${id}`);
    const rest = md.slice(at + 4);
    const next = rest.search(/^#{2,4} /m);
    return next < 0 ? rest : rest.slice(0, next);
  };
  const bullets = (text) => text.split("\n").filter((l) => /^( {2})?- /.test(l));

  function collect(excerpt, line) {
    for (const found of quotesIn(line)) {
      if (!found.lang) continue;
      const key = LANG[found.lang];
      if (excerpt[key] !== undefined) continue;
      excerpt[key] = found.text;
      if (found.lang === "Español") {
        if (/\bIA\b/.test(found.head)) excerpt.esLv = "ia";
        const from = found.head.match(/desde el (alemán|latín|inglés)/)?.[0];
        if (from) excerpt.esFrom = from;
      }
    }
  }

  function quote(blockText, label) {
    const lines = bullets(blockText);
    const start = lines.findIndex((l) => /^- /.test(l) && l.slice(2).startsWith(label));
    if (start < 0) throw new Error(`dossier ${file}: no source bullet starting «${label}»`);
    const excerpt = {};
    collect(excerpt, lines[start].slice(2));
    for (const line of lines.slice(start + 1)) {
      if (/^- /.test(line)) break;
      collect(excerpt, line.slice(4));
    }
    if (!Object.keys(excerpt).length) throw new Error(`dossier ${file}: no quote under «${label}»`);
    return excerpt;
  }

  function siteText(blockText, pattern) {
    const m = blockText.match(new RegExp(`\\*\\*${pattern}[^*]*:\\*\\* ([«"].*)`));
    if (!m) throw new Error(`dossier ${file}: no «${pattern}» text`);
    const t = m[1].trim();
    const close = closeOf(t, 0);
    if (close < 0) throw new Error(`dossier ${file}: unclosed «${pattern}» text`);
    return t.slice(1, close);
  }

  function table(sectionText, afterMarker = "") {
    const from = afterMarker ? sectionText.indexOf(afterMarker) : 0;
    const rows = sectionText.slice(from).split("\n").filter((l) => /^\|/.test(l));
    return rows.slice(2).map((row) => row.replace(/^\||\|\s*$/g, "").split(/(?<!\\)\|/).map((c) => c.trim()));
  }

  const WORKS = /^(AC|Ap|SA|Tr|SC|LC|FC Ep|FC SD|SD)\s+([IVX]+(?:\.\d+(?:[–-]\d+)?)*(?:\.\d+)?)/;
  const WORK_ID = { SD: "FC SD" };

  function citationsOf(blockText) {
    const lines = bullets(blockText);
    const out = [];
    lines.forEach((line, i) => {
      if (!/^- /.test(line)) return;
      const m = line.slice(2).match(WORKS);
      if (!m) return;
      let excerpt;
      try {
        excerpt = quote(blockText, m[0]);
      } catch {
        return;
      }
      out.push({ work: WORK_ID[m[1]] ?? m[1], loc: m[2], excerpt, order: i });
    });
    return out;
  }

  function languageQuotes(blockText) {
    const excerpt = {};
    for (const line of bullets(blockText)) if (/^- (German|Latin|English|Español)/.test(line)) collect(excerpt, line.slice(2));
    return excerpt;
  }

  function lineQuote(blockText, phrase) {
    const line = blockText.split("\n").find((l) => l.includes(phrase));
    if (!line) throw new Error(`dossier ${file}: no line with «${phrase}»`);
    const found = quotesIn(line)[0];
    if (!found) throw new Error(`dossier ${file}: no quote in the line with «${phrase}»`);
    return found.text;
  }

  const TRIGLOT_WORK = /^(AC|Ap|SA|Tr|SC|LC|FC Ep|FC SD|SD)\s+(RN \d+(?:[–-]\d+)?|[IVX]+(?:\.\d+(?:[–-]\d+)?)*)/;

  function quoteEntries(blockText) {
    const lines = blockText.split("\n");
    const groups = [];
    for (let i = 0; i < lines.length; i++) {
      if (!lines[i].startsWith(">")) continue;
      const paragraphs = [[]];
      while (i < lines.length && lines[i].startsWith(">")) {
        const body = lines[i].replace(/^>\s?/, "");
        if (body.trim() === "") paragraphs.push([]);
        else paragraphs[paragraphs.length - 1].push(body);
        i++;
      }
      let j = i;
      while (j < lines.length && lines[j].trim() === "") j++;
      const attribution = lines[j]?.startsWith("— ") ? lines[j] : "";
      groups.push({ paragraphs: paragraphs.filter((p) => p.length).map((p) => p.join(" ").trim()), attribution });
    }
    const entries = [];
    for (const group of groups) {
      const parsedAttribution = group.attribution.replace(/\*\*/g, "");
      const triglot = parsedAttribution.match(/\((?:Triglot )?([IVX]+\.\d+(?:[–-]\d+)?)\)/)?.[1];
      const head = parsedAttribution.slice(2).match(TRIGLOT_WORK);
      const lang = parsedAttribution.match(/\b(German|Latin|English)\b/)?.[1] ?? (head && ["SC", "LC", "SA", "FC Ep", "FC SD", "SD"].includes(head[1]) ? "German" : null);
      const page = parsedAttribution.match(/\bp\. (\d+)/)?.[1];
      for (const text of group.paragraphs) {
        const open = text[0];
        const inner = text.slice(1, Math.max(text.lastIndexOf("»"), text.lastIndexOf("”"), text.lastIndexOf('"')));
        if (open === "“" || open === '"') {
          entries.push({ work: head ? (head[1] === "SD" ? "FC SD" : head[1]) : null, loc: triglot ?? head?.[2] ?? null, lang: lang ? LANG[lang] : null, page: page ?? null, original: inner, spanish: null, from: null });
        } else if (open === "«" && entries.length) {
          const last = entries[entries.length - 1];
          if (last.spanish === null) {
            last.spanish = inner;
            last.from = parsedAttribution.match(/from (German|Latin)/)?.[0] ?? null;
          }
        }
      }
    }
    return entries;
  }

  const quotedParagraphs = (sectionText) => [...sectionText.matchAll(/^> (.*)$/gm)].map((m) => m[1]);

  return { text: md, section, block, quote, siteText, table, quotedParagraphs, citationsOf, languageQuotes, lineQuote, quoteEntries };
}
