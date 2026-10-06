// Builds src/content/data/eucharist.v2.json (v2 schema) and src/content/data/sources.extra.json
// from the research draft data/raw/eucharist.content.json. Re-run after editing the draft.
import { readFileSync, writeFileSync } from "fs";
const d = JSON.parse(readFileSync("data/raw/eucharist.content.json", "utf8"));
const headlines = JSON.parse(readFileSync("src/content/data/objection-headlines.json", "utf8"));
const tid = (id) => (id === "baptist-evangelical" ? "baptist" : id);

const books = {
  "1 Corinthians": ["1 Corintios", "1Cor"], "2 Corinthians": ["2 Corintios", "2Cor"], John: ["Juan", "John"], Hebrews: ["Hebreos", "Heb"],
  Malachi: ["Malaquías", "Mal"], Leviticus: ["Levítico", "Lev"], Matthew: ["Mateo", "Matt"], Luke: ["Lucas", "Luke"], Mark: ["Marcos", "Mark"],
  Genesis: ["Génesis", "Gen"], Psalm: ["Salmo", "Ps"], Psalms: ["Salmos", "Ps"], Exodus: ["Éxodo", "Exod"], Isaiah: ["Isaías", "Isa"],
  Ephesians: ["Efesios", "Eph"], Acts: ["Hechos", "Acts"], Colossians: ["Colosenses", "Col"], Romans: ["Romanos", "Rom"],
  Revelation: ["Apocalipsis", "Rev"], Deuteronomy: ["Deuteronomio", "Deut"], Numbers: ["Números", "Num"], Galatians: ["Gálatas", "Gal"],
  "1 Peter": ["1 Pedro", "1Pet"], Philippians: ["Filipenses", "Phil"], Ezekiel: ["Ezequiel", "Ezek"], Jeremiah: ["Jeremías", "Jer"],
};
const bookRe = new RegExp(`^(${Object.keys(books).sort((a, b) => b.length - a.length).join("|")})\\s+(.*)$`);
function bibleLabel(ref) {
  const m = ref.match(bookRe);
  return m ? { es: `${books[m[1]][0]} ${m[2]}`, en: ref } : { es: ref, en: ref };
}
function osis(ref) {
  const m = ref.match(bookRe);
  if (!m) return null;
  const code = books[m[1]][1];
  const r = m[2].match(/^(\d+):(\d+)(?:\s*[-–]\s*(\d+))?/);
  if (!r) return null;
  return r[3] ? `${code}.${r[1]}.${r[2]}-${code}.${r[1]}.${r[3]}` : `${code}.${r[1]}.${r[2]}`;
}
const locEs = (s) =>
  s.replace(/Session/g, "Sesión").replace(/\bch\./g, "cap.").replace(/\bchs\./g, "caps.").replace(/Question/g, "Pregunta")
    .replace(/Article/g, "Artículo").replace(/Decree/g, "Decreto").replace(/\bcanon/g, "canon").replace(/\bBook\b/g, "Libro")
    .replace(/Lecture/g, "Catequesis").replace(/Homily/g, "Homilía").replace(/Tractate/g, "Tratado").replace(/Letter/g, "Carta")
    .replace(/\bpart\b/g, "parte").replace(/Part\b/g, "Parte").replace(/Epitome/g, "Epítome").replace(/Solid Declaration/g, "Declaración Sólida");
function citation(c) {
  const isBible = c.sourceRef === "bible";
  return {
    sourceId: c.sourceRef,
    locator: isBible ? bibleLabel(c.locator) : { es: locEs(c.locator), en: c.locator },
    text: c.quote,
    ...(c.esIsOurs ? { ourTranslation: ["es"] } : {}),
    ...(c.verbatim === false ? { paraphrase: true } : {}),
    ...(c.url ? { url: c.url } : {}),
  };
}
const paras = (l) => {
  const es = (l.es ?? "").split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
  const en = (l.en ?? "").split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
  return Array.from({ length: Math.max(es.length, en.length) }, (_, i) => ({ es: es[i] ?? "", en: en[i] ?? "" }));
};
const firstSentence = (s) => {
  const m = s.match(/^(.{60,320}?[.;:])(\s|$)/);
  return m ? m[1] : s.slice(0, 240) + "…";
};
const ytId = (url) => (url.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/) || [])[1];
const video = (v) => ({ id: ytId(v.url), title: v.title, channel: v.channel, language: v.language === "es" ? "es" : "en", ...(v.tradition ? { tradition: tid(v.tradition) } : {}) });
const parseYear = (s) => {
  const m = String(s).match(/(\d{2,4})(?:\s*[–-]\s*(\d{2,4}))?/);
  if (!m) return { year: 0 };
  const y = +m[1];
  let end = m[2] ? +m[2] : undefined;
  if (end && end < 100) end = Math.floor(y / 100) * 100 + end;
  return { year: y, ...(end ? { yearEnd: end } : {}), ...(/c\.|\?|disputed/.test(s) ? { approx: true } : {}) };
};

const studies = {};
for (const [k, t] of Object.entries(d.traditions)) {
  const id = tid(k);
  studies[id] = {
    dossier: t.scriptureDossier.map((s) => ({ osis: osis(s.ref) ?? s.ref, label: { es: s.refEs ?? bibleLabel(s.ref).es, en: s.ref }, role: s.role, howRead: s.howRead })),
    objections: t.objections.map((o) => {
      const response = paras(o.response);
      return {
        id: o.id,
        title: headlines[o.id] ?? o.objection,
        statement: o.objection,
        raisedBy: o.raisedBy.map(tid),
        short: { es: response[0]?.es ?? "", en: response[0]?.en ?? "" },
        response,
        citations: o.citations.map(citation),
        passages: o.citations
          .filter((c) => c.sourceRef === "bible")
          .map((c) => ({ osis: osis(c.locator) ?? c.locator, label: bibleLabel(c.locator) }))
          .filter((p, i, a) => a.findIndex((x) => x.osis === p.osis) === i),
        videos: o.videos.map(video).filter((v) => v.id),
      };
    }),
    howLived: { body: paras(t.howLived), facts: t.practiceFacts.map((f) => ({ label: f.key, value: f.value })) },
    authority: t.authorityLevels.map((a) => ({ claim: a.claim, level: a.level, source: a.source })),
    videos: t.videos.map(video).filter((v) => v.id),
  };
}

const glossary = d.glossary.map((g) => {
  const base = (s) => s.toLowerCase().split(/\s*\/\s*|\s*\(/)[0].trim();
  const extra = {
    transubstantiation: { es: ["transubstanciación"], en: ["transubstantiation"] },
    "real-presence": { es: ["presencia real"], en: ["real presence"] },
    consecration: { es: ["consagración"], en: ["consecration"] },
    epiclesis: { es: ["epíclesis"], en: ["epiclesis"] },
    anamnesis: { es: ["anámnesis", "anamnesis"], en: ["anamnesis"] },
    "sacramental-union": { es: ["unión sacramental"], en: ["sacramental union"] },
    "spiritual-presence": { es: ["presencia espiritual"], en: ["spiritual presence"] },
    memorial: { es: ["memorial"], en: ["memorial"] },
    "ex-opere-operato": { es: ["ex opere operato"], en: ["ex opere operato"] },
    "sacrament-ordinance": { es: ["sacramento", "ordenanza"], en: ["sacrament", "ordinance"] },
    "species-accidents": { es: ["especies", "accidentes"], en: ["species", "accidents"] },
    mystery: { es: ["misterio"], en: ["mystery"] },
    metousiosis: { es: ["metousíōsis", "metousiosis"], en: ["metousiosis", "metousíōsis"] },
    consubstantiation: { es: ["consubstanciación"], en: ["consubstantiation"] },
    "manducatio-indignorum": { es: ["manducatio indignorum"], en: ["manducatio indignorum"] },
  }[g.id] ?? { es: [base(g.term.es)], en: [base(g.term.en)] };
  return {
    id: g.id,
    term: g.term,
    definitions: g.definitions.map((x) => ({ by: x.traditionId === "neutral" ? "neutral" : tid(x.traditionId), text: x.text, ...(x.source ? { source: x.source } : {}) })),
    matches: extra,
  };
});

const v1 = JSON.parse(readFileSync("data/raw/v1.json", "utf8"));
const srcById = new Map([...v1.sources, ...d.sources].map((s) => [s.id, s]));
const witnesses = d.earliestWitnesses.map((w) => {
  const s = srcById.get(w.sourceRef);
  const y = parseYear(w.date);
  return {
    id: w.id,
    claim: w.claim,
    author: s?.author ?? { es: w.witness, en: w.witness },
    work: s?.title ?? { es: w.work, en: w.work },
    locator: w.locator,
    year: y.year,
    approx: true,
    dateNote: w.date,
    quote: w.quote,
    ...(w.note ? { note: w.note } : {}),
    ...(w.url ? { url: w.url } : {}),
    ...(w.esIsOurs ? { ourTranslation: ["es"] } : {}),
  };
});

const timeline = d.timeline.map((e) => {
  const y = parseYear(e.year);
  return { year: y.year, ...(y.yearEnd ? { yearEnd: y.yearEnd } : {}), ...(y.approx ? { approx: true } : {}), display: e.year, label: e.label, detail: e.detail, kind: e.kind, ...(e.source ? { source: e.source } : {}) };
});

const titles = {
  eucharist: { es: "La Eucaristía", en: "The Eucharist" },
  "sacrifice-of-the-mass": { es: "El sacrificio de la Misa", en: "The sacrifice of the Mass" },
  priesthood: { es: "El sacerdocio", en: "The priesthood" },
  "apostolic-succession": { es: "La sucesión apostólica", en: "Apostolic succession" },
  papacy: { es: "El papado", en: "The papacy" },
  "church-authority": { es: "La autoridad de la Iglesia", en: "Church authority" },
  "sacraments-ordinances": { es: "Sacramentos u ordenanzas", en: "Sacraments or ordinances" },
  justification: { es: "La justificación", en: "Justification" },
  baptism: { es: "El bautismo", en: "Baptism" },
};
const connected = d.connectedDoctrines.map((e) => ({ from: e.from, to: e.to, fromTitle: titles[e.from], toTitle: titles[e.to], why: e.why }));

const sources = d.sources
  .filter((s) => s.id !== "bible")
  .map((s) => {
    const y = parseYear(s.date);
    return { ...s, year: y.year, ...(y.yearEnd ? { yearEnd: y.yearEnd } : {}), ...(y.approx || /^c\./.test(s.date) ? { approx: true } : {}), recognizedBy: s.kind === "church-father" ? [] : s.recognizedBy.map(tid) };
  });
sources.push({
  id: "bible", kind: "scripture", title: { es: "Sagrada Escritura", en: "Holy Scripture" }, author: { es: "Biblia", en: "Bible" }, date: "", year: 0,
  recognizedBy: ["catholic", "orthodox", "lutheran", "reformed", "baptist"],
  edition: { name: "Reina-Valera 1909 (es), Berean Standard Bible (en)", license: "public-domain", url: "https://ebible.org/spaRV1909/" },
});

writeFileSync("src/content/data/eucharist.v2.json", JSON.stringify({ studies, glossary, witnesses, timeline, connected }, null, 1));
writeFileSync("src/content/data/sources.extra.json", JSON.stringify(sources, null, 1));
console.log("studies", Object.keys(studies).length, "glossary", glossary.length, "witnesses", witnesses.length, "timeline", timeline.length, "sources", sources.length,
  "videos", Object.values(studies).reduce((n, s) => n + s.videos.length + s.objections.reduce((m, o) => m + o.videos.length, 0), 0),
  "unparsed osis", Object.values(studies).flatMap((s) => s.dossier).filter((x) => !x.osis.includes(".")).map((x) => x.osis));
