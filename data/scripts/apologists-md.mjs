import crypto from "node:crypto";
import fs from "node:fs";
import { versesOfHeading } from "./passage-refs.mjs";

const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
const DOCTRINE_WORDS = { Baptism: "baptism", Eucharist: "eucharist", Papacy: "papacy", "Sola Scriptura": "sola-scriptura" };
const MONTHS_ES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const DATE_FORMS = [
  [/\b(\d{4})-(\d{2})-(\d{2})\b/, (m) => ({ year: +m[1], month: +m[2], day: +m[3] })],
  [/\b(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* (\d{4})\b/, (m) => ({ year: +m[3], month: MONTHS[m[2].toLowerCase()], day: +m[1] })],
  [/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* (\d{1,2}), (\d{4})\b/, (m) => ({ year: +m[3], month: MONTHS[m[1].toLowerCase()], day: +m[2] })],
  [/\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/, (m) => ({ year: +m[3], month: +m[1], day: +m[2] })],
  [/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* (\d{4})\b/, (m) => ({ year: +m[2], month: MONTHS[m[1].toLowerCase()] })],
  [/(?:^|[ ,(])((?:19|20)\d{2})(?=[ ,).]|$)/, (m) => ({ year: +m[1] })],
];

const ARGUMENT_LEAD_TEXT = /^(?:Argument(?: [A-Z](?: \([^)]*\))?)?|C5 (?:further argument|addition)(?: \([^)]*\))?)\s*·\s*/;
const ARGUMENT_LEAD = new RegExp(`^\\*\\*${ARGUMENT_LEAD_TEXT.source.slice(1)}`);

export function spanishDate(d) {
  if (!d) return undefined;
  if (d.undated) return "Sin fecha indicada";
  if (d.undated) return "Sin fecha indicada";
  if (d.day) return `${d.day} de ${MONTHS_ES[d.month - 1]} de ${d.year}`;
  if (d.month) return `${MONTHS_ES[d.month - 1]} de ${d.year}`;
  return String(d.year);
}

const RETRIEVAL = /\b(?:retrieved|reopened|accessed)\b[^;]*/gi;

function datable(text) {
  return text.replace(/`[^`]*`/g, (m) => " ".repeat(m.length)).replace(RETRIEVAL, (m) => " ".repeat(m.length));
}

function findDate(text) {
  for (const [re, build] of DATE_FORMS) {
    const m = re.exec(text);
    if (m) return { date: build(m), index: m.index, length: m[0].length };
  }
  return null;
}

const strip = (s) =>
  s
    .replace(/\*\*/g, "")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1$2")
    .replace(/`[^`]*`/g, "")
    .replace(/\s+/g, " ")
    .trim();

function dropNotes(s) {
  let prev;
  do {
    prev = s;
    s = s.replace(/\s*\([^()]*\)/g, "");
  } while (s !== prev);
  return s;
}

function cleanOutlet(raw) {
  let s = raw.replace(/^[\s,]+|[\s,]+$/g, "");
  s = s.replace(/^channel\s+/i, "");
  s = dropNotes(s).replace(/\s*\([^)]*$/, "");
  s = s.replace(/,?\s*(undated reprint on the page|page undated in the text read|live of .*)$/i, "");
  s = s.replace(/,?\s*transcript on [\w.]+\.\w+/gi, "").replace(/,?\s*transcript on$/i, "");
  s = s.replace(/,\s*(14:42|\d+:\d{2})\s*$/, "");
  return strip(s).replace(/^[\s,]+|[\s,]+$/g, "");
}

const SPEAKER_ALIASES = { "Carlos Andres Murr": "Carlos Andrés Murr", "Stephen Wellum": "Stephen J. Wellum", "Brant Pitre": "Dr. Brant Pitre" };

function audioHeader(line) {
  const at = line.indexOf(" Work: «");
  if (at < 0) return null;
  const tail = line.slice(at + 1);
  const work = /^Work: «([^»]+)»/.exec(tail)?.[1];
  const url = /https?:\/\/[^\s;,)`»]+/.exec(tail)?.[0].replace(/[.;:]+$/, "");
  const channel = /(?:show\/channel|outlet):\s*([^;]*)/.exec(tail);
  if (!work || !url || !channel) return null;
  const between = tail.slice(channel.index + channel[0].length, tail.indexOf("http"));
  const found = findDate(datable(between));
  return { work, url, outlet: cleanOutlet(channel[1]), date: found ? found.date : { undated: true } };
}

function plural(n, one, many) {
  return n === 1 ? one : many;
}

function locatorOf(header, longHead) {
  const minutes = /minutes?(?:\s+range)?:?\s+(\d+:\d+(?::\d+)?)\s*(?:to|[–-])\s*(\d+:\d+(?::\d+)?)/i.exec(header);
  if (minutes) return `Minutos ${minutes[1]} a ${minutes[2]}`;
  const span = /(\d+)\s+paragraph\(s\)[^«]*from the (paragraph|sentence) beginning\s+«([^»]+)»\s+to the one ending\s+«([^»]+)»/;
  for (const text of [header, longHead ?? ""]) {
    const m = span.exec(text);
    if (m) {
      const n = Number(m[1]);
      if (m[2] === "sentence") return `Fragmento: de la frase que empieza «${m[3]}» a la que termina «${m[4]}»`;
      return `${n} ${plural(n, "párrafo", "párrafos")}: del párrafo que empieza «${m[3]}» al que termina «${m[4]}»`;
    }
  }
  const begins = /(?:(?:the|whole) )?(?:(?:first|second|third|fourth|fifth|last)\s+)?(paragraphs?|segment)(?:\(s\))?(?: that| which)?(?: begins| beginning)\s+[«“]([^»”]+)[»”]/.exec(header);
  if (begins) {
    const lead = begins[1] === "segment" ? "Fragmento que empieza" : begins[1] === "paragraphs" ? "Párrafos que empiezan" : "Párrafo que empieza";
    return `${lead} «${begins[2]}»`;
  }
  return null;
}

function inlineQuote(line) {
  const tag = /`\[verified: [^\]]+\]`/.exec(line);
  if (!tag) return null;
  const after = line.slice(tag.index + tag[0].length);
  const start = after.search(/:\s*«/);
  if (start < 0) return null;
  const body = after.slice(start).replace(/^:\s*«/, "");
  for (let i = body.indexOf("»"); i >= 0; i = body.indexOf("»", i + 1)) {
    if (/^\s*(\(.*\))?\.?\s*$/.test(body.slice(i + 1))) return body.slice(0, i);
  }
  return null;
}

const SPANISH_WORDS = new Set(["que", "el", "la", "los", "las", "de", "en", "y", "un", "una", "es", "por", "con", "para", "se", "del", "no", "lo", "su", "como", "pero"]);
const ENGLISH_WORDS = new Set(["the", "and", "of", "to", "in", "is", "that", "for", "with", "as", "this", "it", "was", "not", "he", "his", "are", "be"]);

export function languageOf(text) {
  const words = text.toLowerCase().match(/[a-záéíóúñü]+/g) ?? [];
  const es = words.filter((w) => SPANISH_WORDS.has(w)).length;
  const en = words.filter((w) => ENGLISH_WORDS.has(w)).length;
  return es > 2 * en ? "es" : "en";
}

export function quoteKey(text) {
  return crypto.createHash("sha1").update(text).digest("hex").slice(0, 12);
}

function headingOf(raw) {
  const text = strip(raw.replace(/^##\s*/, ""));
  const dotted = text.indexOf(" · ");
  const afterDot = dotted >= 0 ? text.slice(dotted + 3) : text;
  const doctrineWord = dotted >= 0 ? Object.keys(DOCTRINE_WORDS).find((w) => text.slice(0, dotted).endsWith(w)) : undefined;
  const cut = afterDot.indexOf("(");
  const primary = cut >= 0 ? afterDot.slice(0, cut) : afterDot;
  const entries = [];
  for (const m of text.matchAll(/(?:page |baptism |eucharist |papacy |sola[- ]scriptura )?entr(?:y|ies)\s+([\d, and]+?)(?=[;)\s]*(?:\(|;|\)|·|$| of | and core|[a-z]))/gi))
    for (const n of m[1].match(/\d+/g) ?? []) entries.push(Number(n));
  let verses = versesOfHeading(primary);
  if (!verses.length) {
    const quoted = /\(([^()]*\d+:\d+[^()]*)\)/.exec(afterDot);
    if (quoted) verses = versesOfHeading(quoted[1]);
  }
  return { text, primary, entries: [...new Set(entries)], doctrine: doctrineWord ? DOCTRINE_WORDS[doctrineWord] : undefined, verses };
}

export function parseApologists(file) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  const sections = [];
  const issues = [];
  let section = null;
  let argument = null;
  let quote = null;
  let longMode = false;
  let previous = null;
  let lineNo = 0;

  const finishQuote = () => {
    if (!quote) return;
    const paragraphs = quote.long.length ? quote.long : quote.block.length ? quote.block : quote.short ? [quote.short] : [];
    if (!paragraphs.length) {
      issues.push({ file, line: quote.line, issue: "bullet without quote text", speaker: quote.speaker });
    } else if (!quote.url || !quote.date || !quote.work) {
      issues.push({ file, line: quote.line, issue: `missing ${["url", "date", "work"].filter((f) => !quote[f]).join("/")}`, speaker: quote.speaker });
    } else {
      const text = paragraphs.map((p) => p.trim()).join("\n\n");
      argument.quotes.push({
        key: quoteKey(text),
        speaker: quote.speaker,
        work: quote.work,
        outlet: quote.outlet,
        date: spanishDate(quote.date),
        dateParts: quote.date,
        locator: quote.locator,
        locatorFallback: quote.locatorFallback,
        url: quote.url,
        text,
        language: languageOf(text),
        long: quote.long.length > 0,
        tags: quote.tags,
        line: quote.line,
      });
      previous = quote;
    }
    quote = null;
    longMode = false;
  };

  for (const raw of lines) {
    lineNo += 1;
    const line = raw.replace(/\s+$/, "");
    if (/^## /.test(line)) {
      finishQuote();
      section = { ...headingOf(line), line: lineNo, arguments: [] };
      argument = null;
      sections.push(section);
      continue;
    }
    if (!section) continue;
    if (ARGUMENT_LEAD.test(line)) {
      finishQuote();
      argument = { title: strip(line).replace(ARGUMENT_LEAD_TEXT, "").replace(/\.$/, ""), quotes: [] };
      section.arguments.push(argument);
      continue;
    }
    if (/^\*\*(Count|Contested|C5 count)/.test(line)) {
      finishQuote();
      argument = null;
      continue;
    }
    if (!argument) continue;
    if (/^- \*\*[^*]+\*\*(?:,|\s*\()/.test(line) && !/^- \*\*Long-form/.test(line)) {
      finishQuote();
      const m = /^- \*\*(.+?)\*\*,?\s*(.*)$/.exec(line);
      const named = strip(dropNotes(m[1]));
      const speaker = SPEAKER_ALIASES[named] ?? named;
      let rest = m[2];
      const inherits = /^same (?:short )?(?:video|article|page|post|lecture|podcast|episode|answer|reprint|paper)/i.test(rest);
      let work = inherits ? previous?.work : undefined;
      let outlet = inherits ? previous?.outlet : undefined;
      let date = inherits ? previous?.date : undefined;
      const audio = inherits ? null : audioHeader(line);
      if (audio) {
        ({ work, outlet, date } = audio);
      } else if (!inherits) {
        const w = /^(?:«([^»]+)»|\*([^*]+)\*)\s*,?\s*/.exec(rest);
        if (w) {
          work = w[1] ?? w[2];
          rest = rest.slice(w[0].length);
        } else {
          const inner = /^(.*?)«([^»]+)»\s*,?\s*/.exec(rest.split(/https?:/)[0]);
          if (inner) {
            work = inner[2];
            rest = rest.slice(inner[0].length);
          }
        }
        const d = findDate(datable(rest.replace(/https?:\/\/\S+/g, (u) => " ".repeat(u.length))));
        if (!d) {
          date = { undated: true };
          outlet = cleanOutlet(dropNotes(rest.split(/https?:/)[0]).split(";")[0].replace(/,?\s*(?:publication |upload )?date not established.*$/i, ""));
        } else {
          date = d.date;
          const before = rest.replace(/https?:\/\/\S+/g, (u) => " ".repeat(u.length)).slice(0, d.index);
          outlet = cleanOutlet(before);
        }
      }
      const url = audio?.url ?? /https?:\/\/[^\s,)`»]+/.exec(line)?.[0].replace(/[.;:]+$/, "") ?? (inherits ? previous?.url : undefined);
      const tags = [...line.matchAll(/`\[([^\]]+)\]`/g)].map((t) => t[1]);
      quote = {
        line: lineNo, speaker, work, outlet, date, url, tags,
        header: line, short: inlineQuote(line), block: [], long: [], longHead: undefined,
      };
      continue;
    }
    if (!quote) continue;
    if (/^\s+- \*\*Long-form\*\*/.test(line)) {
      longMode = true;
      quote.longHead = line;
      continue;
    }
    if (/^\s*> ?/.test(line)) {
      const text = line.replace(/^\s*> ?/, "");
      (longMode ? quote.long : quote.block).push(text);
      continue;
    }
    if (/^\s*$/.test(line)) continue;
    if (/^- /.test(line)) {
      finishQuote();
    }
  }
  finishQuote();

  for (const s of sections)
    for (const a of s.arguments)
      for (const q of a.quotes) {
        const raw = lines[q.line - 1];
        let head;
        for (let i = q.line; i < Math.min(lines.length, q.line + 40); i += 1) if (/^\s+- \*\*Long-form\*\*/.test(lines[i])) { head = lines[i]; break; } else if (/^- |^\*\*|^## /.test(lines[i])) break;
        q.locator = locatorOf(raw, head);
        q.locatorFallback = q.locator === null;
        if (q.locator === null) q.locator = "Ver la página enlazada";
      }
  return { sections, issues };
}

export function doctrineOfSection(section, fileDoctrine) {
  return section.doctrine ?? fileDoctrine;
}
