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

  const TRIGLOT_WORK = /^(AC|Ap|SA|Tr|SC|LC|FC Ep|FC SD|SD|WCF|WLC|WSC)\s+(RN \d+(?:[–-]\d+)?|[IVX]+(?:\.\d+(?:[–-]\d+)?)*|\d+(?:\.\d+)?(?:[–-]\d+)?)/;
  const ENGLISH_ORIGINAL = ["WCF", "WLC", "WSC"];
  const FROM = { German: "from German", Latin: "from Latin", English: "from English" };

  function quoteEntries(blockText) {
    const lines = blockText.split("\n");
    const groups = [];
    for (let i = 0; i < lines.length; i++) {
      if (!lines[i].startsWith(">")) continue;
      const paragraphs = [[]];
      while (i < lines.length && lines[i].startsWith(">")) {
        const body = lines[i].replace(/^>\s?/, "");
        const current = paragraphs[paragraphs.length - 1];
        if (body.trim() === "") paragraphs.push([]);
        else if (current.length && /^[«“"]/.test(body) && /[»”"]\.?$/.test(current[current.length - 1].trim())) paragraphs.push([body]);
        else current.push(body);
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
      const work = head ? (head[1] === "SD" ? "FC SD" : head[1]) : null;
      const lang =
        parsedAttribution.match(/\b(German|Latin|English)\b/)?.[1] ??
        (work && ["SC", "LC", "SA", "FC Ep", "FC SD"].includes(work) ? "German" : null);
      const page = parsedAttribution.match(/\bp\. (\d+)/)?.[1];
      const lastIndexOfClose = (text) => Math.max(text.lastIndexOf("»"), text.lastIndexOf("”"), text.lastIndexOf('"'));
      for (const text of group.paragraphs) {
        const open = text[0];
        const inner = text.slice(1, lastIndexOfClose(text));
        const base = { work, loc: triglot ?? head?.[2] ?? null, page: page ?? null };
        if (open === "“" || open === '"') {
          const originalLang = work && ENGLISH_ORIGINAL.includes(work) ? "en" : lang ? LANG[lang] : null;
          entries.push({ ...base, lang: originalLang, original: inner, spanish: null, from: null });
        } else if (open === "«") {
          const last = entries.find((entry) => entry.original !== null && entry.spanish === null);
          if (last) {
            last.spanish = inner;
            last.from = parsedAttribution.match(/from (?:the preceding )?(German|Latin|English)/)?.[1] ? FROM[parsedAttribution.match(/from (?:the preceding )?(German|Latin|English)/)[1]] : null;
          } else {
            entries.push({ ...base, lang: "es", original: null, spanish: inner, from: null });
          }
        }
      }
    }
    return entries;
  }

  function boldEntries(blockText) {
    const entries = [];
    let header = null;
    for (const line of blockText.split("\n")) {
      const h = line.match(/^\*\*(Dositheus|Philaret|Mogila)\s+([^*]+)\*\*(.*)$/);
      const other = line.match(/^\*\*(Constantinople I|Chalcedon|Trullo|1895 encyclical),\s*([^*]+)\*\*(.*)$/);
      if (other) {
        const lang = other[3].match(/\b(Greek|English|Latin)\b/)?.[1] ?? "English";
        header = { work: other[1], loc: other[2].trim().replace(/^canon /, "").replace(/^§/, ""), lang, page: other[3].match(/\bp\. (\d+)/)?.[1] ?? null };
        continue;
      }
      if (h) {
        const lang = h[3].match(/\b(Greek|English|Latin|Russian)\b/)?.[1] ?? (h[1] === "Dositheus" ? "Greek" : "English");
        header = { work: h[1], loc: h[2].trim().replace(/^Q\./, ""), lang, page: h[3].match(/\bp\. (\d+)/)?.[1] ?? null };
        continue;
      }
      if (!header || !line.startsWith(">")) continue;
      const body = line.replace(/^>\s?/, "").trim();
      if (body.startsWith("«")) {
        const pending = entries.find((entry) => entry.original !== null && entry.spanish === null);
        const text = body.slice(1, body.lastIndexOf("»"));
        if (pending) {
          pending.spanish = text;
          pending.from = `from ${pending.lang}`;
        } else entries.push({ ...header, original: null, spanish: text, from: null });
      } else {
        const original = body.replace(/(?:\s*\[(?:verified|unverified)[^\]]*\])+\s*$/, "").trim();
        entries.push({ ...header, original, spanish: null, from: null });
      }
    }
    return entries;
  }

  const quotedParagraphs = (sectionText) => [...sectionText.matchAll(/^> (.*)$/gm)].map((m) => m[1]);

  return { text: md, section, block, quote, siteText, table, quotedParagraphs, citationsOf, languageQuotes, lineQuote, quoteEntries, boldEntries };
}
