import fs from "node:fs";

const LISTS = new URL("../../docs/research/doctrines/scripture-lists/", import.meta.url).pathname;
const BOOK_ORDER = "Gen Exod Lev Num Deut Josh Judg Ruth 1Sam 2Sam 1Kgs 2Kgs 1Chr 2Chr Ezra Neh Esth Job Ps Prov Eccl Song Isa Jer Lam Ezek Dan Hos Joel Amos Obad Jonah Mic Nah Hab Zeph Hag Zech Mal Matt Mark Luke John Acts Rom 1Cor 2Cor Gal Eph Phil Col 1Thess 2Thess 1Tim 2Tim Titus Phlm Heb Jas 1Pet 2Pet 1John 2John 3John Jude Rev".split(" ");

const WORKS = {
  "Second London Confession (1689)": "Segunda Confesión de Londres (1689)",
  "First London Confession (1646)": "Primera Confesión de Londres (1646)",
  "NAFWB Treatise (2026) XVIII.1": "Tratado de la NAFWB (2026), art. XVIII.1",
  "Baptist Catechism (e-text, Q. 97–101)": "Catecismo Bautista (texto electrónico)",
  "Baptist Faith and Message 1925": "Fe y Mensaje Bautistas (1925)",
  "Baptist Faith and Message 1963": "Fe y Mensaje Bautistas (1963)",
  "Baptist Faith and Message 2000": "Fe y Mensaje Bautistas (2000)",
  "Baptist Faith and Message (1963 and 2000)": "Fe y Mensaje Bautistas (1963 y 2000)",
  "Baptist Faith and Message 1963 and 2000": "Fe y Mensaje Bautistas (1963 y 2000)",
  "Orthodox Creed (1678)": "Credo Ortodoxo (1678)",
  "Standard Confession (1660)": "Confesión Estándar (1660)",
  "Baptist Union of Great Britain Declaration of Principle": "Declaración de Principios de la Unión Bautista de Gran Bretaña",
};

const HOW = {
  "margin note": "nota al margen",
  "margin notes 15–21": "notas al margen 15–21",
  "margin note (selection)": "nota al margen (selección)",
  "margin note (variant)": "nota al margen (variante)",
  "margin note (variant of the 1688 reading)": "nota al margen (variante de la lectura de 1688)",
  "margin note (beside «that Antichrist, that Man of Sin»)": "nota al margen (junto a «that Antichrist, that Man of Sin»)",
  "proof-text list": "lista de textos de prueba",
  "proof-text list (not assigned to a clause)": "lista de textos de prueba, sin asignar a una cláusula",
  "proof-text list (shared baptism/Lord's Supper list, not clause by clause)": "lista de textos de prueba compartida por el bautismo y la Cena, sin asignar cláusula por cláusula",
  "proof-text list (combined baptism/Supper; not all verses are assigned to the Supper)": "lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena",
  "proof-text list (as in the 1963 list; not re-checked)": "lista de textos de prueba como en la de 1963, sin volver a comprobar",
  "proof-text list (combined baptism/Supper)": "lista de textos de prueba conjunta del bautismo y la Cena",
  "footnote apparatus": "aparato de notas al pie",
  answers: "respuestas del catecismo",
  "framing reference": "referencia de encuadre",
};

const LOCATOR_WORDS = [
  [/\bnotes\b/g, "notas"], [/\bnote\b/g, "nota"], [/\bAnnual p\./g, "Annual, p."], [/left column/g, "columna izquierda"],
  [/right column/g, "columna derecha"], [/official text/g, "texto oficial"], [/further margin entries/g, "otras entradas del margen"],
  [/all three clauses/g, "las tres cláusulas"], [/proof-text list printed with the article/g, "lista de textos de prueba impresa con el artículo"],
  [/\(the Church\)/g, "(la Iglesia)"], [/\(the church; headship paragraph\)/g, "(la iglesia; párrafo sobre la cabeza)"],
  [/printed «b» in the 1688; \(h\) in the 1677 and 1719/g, "impresa «b» en 1688; (h) en 1677 y 1719"], [/full printed margin/g, "margen impreso completo"],
  [/official page; the 29 references of the article/g, "página oficial; las 29 referencias del artículo"], [/1963 Annual p\./g, "Annual de 1963, p."],
  [/\bright column/g, "columna derecha"], [/\bprint\b/g, "impresión"], [/\bmargin\b/g, "margen"], [/\bQ\./g, "P."], [/full references/g, "referencias completas"], [/printed pp\./g, "págs. impresas"],
];

const EDITIONS = [
  [/^A Confession of Faith, put forth by the Elders and Brethren/, "A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688)"],
  [/^W\. J\. McGlothlin/, "W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911)"],
  [/^McGlothlin 1911 p\. (\d+)/, (m) => `W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia, 1911), p. ${m[1]}`],
  [/^A Confession of Faith … \(London: John Harris, 1688\)(?:.*printed pp\. ([\d–]+))?/, (m) => `A Confession of Faith (Londres: John Harris, 1688)${m[1] ? `, págs. ${m[1]}` : ""}`],
  [/^A Confession of Faith … fourth edition \(London, 1719\)/, "A Confession of Faith, cuarta edición (Londres, 1719)"],
  [/^Annual of the SBC (\d{4}) pp?\. ([\d–]+)/, (m) => `Annual of the Southern Baptist Convention ${m[1]}, p. ${m[2]}`],
  [/^BF&M 1963 Annual p\. (\d+); BF&M 2000 official page/, (m) => `Annual of the Southern Baptist Convention 1963, p. ${m[1]}; texto oficial de 2000`],
  [/^NAFWB Treatise, print p\. (\d+) \/ PDF p\. (\d+)/, (m) => `Tratado de la NAFWB (2026), p. ${m[1]} impresa, p. ${m[2]} del PDF`],
  [/^e-text/, "texto electrónico (la numeración pertenece solo a esa transcripción)"],
  [/^official page/, "texto oficial en línea"],
  [/^as recorded in papacy\/baptist\.apply\.md and the page's own scripture list/, "lista impresa con el artículo, tal como la recoge la página"],
];

const translateLocator = (loc) => LOCATOR_WORDS.reduce((s, [re, to]) => s.replace(re, to), loc);
const editionOf = (raw) => {
  for (const [re, to] of EDITIONS) {
    const m = re.exec(raw);
    if (m) return typeof to === "function" ? to(m) : to;
  }
  return null;
};

const orderOf = (ref) => {
  const [book, chapter, verse] = ref.split("-")[0].split(".");
  return [BOOK_ORDER.indexOf(book), Number(chapter), Number(verse ?? 0)];
};

function line(c) {
  const work = WORKS[c.work];
  const edition = editionOf(c.edition);
  const how = HOW[c.how];
  if (!work || !edition || !how) throw new Error(`unmapped list entry: ${c.work} | ${c.how} | ${c.edition.slice(0, 60)}`);
  const unverified = /^\[unverified/.test(c.tagCite) ? " Lectura todavía sin verificar." : "";
  const clause = c.sentence && !/not quoted|copyright|^\(.*\)$/.test(c.sentence) ? ` junto a la cláusula, en inglés, «${c.sentence}»` : "";
  return `${work}, ${translateLocator(c.loc)}: este versículo figura como ${how}${clause}. Edición: ${edition}.${unverified}`;
}

export function baptistPassages(doctrine) {
  const records = JSON.parse(fs.readFileSync(`${LISTS}${doctrine}-baptist.json`, "utf8"));
  const sorted = [...records].sort((a, b) => {
    const [x, y] = [orderOf(a.refs[0]), orderOf(b.refs[0])];
    return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
  });
  return sorted.map((record) => ({ refs: record.refs, text: record.citedBy.map(line).join(" ") }));
}
