const ED = {
  mcglothlin: `Inglés: W. J. McGlothlin, Baptist Confessions of Faith, Filadelfia, American Baptist Publication Society, 1911, p. 306 (Confesión de New Hampshire de 1853, con sus adiciones entre corchetes). Dominio público.`,
  bfm: `Inglés: The Baptist Faith and Message (2000), edición oficial imprimible, p. 8, bfm.sbc.net. © Convención Bautista del Sur: cita breve y enlace.`
};

const LINKS = {
  mcglothlin: {href:`https://archive.org/details/baptistconfessio00mcgl`, label:`Ver el escaneo de McGlothlin en archive.org`},
  bfm: {href:`https://bfm.sbc.net/bfm2000/`, label:`Leer el artículo oficial`}
};

const WORK = {
  NH: {title: (loc) => `Confesión de New Hampshire (1853), art. ${loc}`, short: (loc) => `New Hampshire ${loc}`, date: `1853`, ed: `mcglothlin`},
  BFM: {title: (loc) => `Fe y Mensaje Bautistas (2000), art. ${loc}`, short: (loc) => `Fe y Mensaje ${loc}`, date: `2000`, ed: `bfm`}
};

const SRC = {};

function cite(work, loc, excerpt) {
  const id = `B${work}${loc.replace(/[^\w]/g, "_")}`;
  if (!SRC[id]) SRC[id] = {kind:`Fuente`, title: WORK[work].title(loc), date: WORK[work].date, ed: ED[WORK[work].ed], url: LINKS[WORK[work].ed], ex: []};
  if (excerpt && !SRC[id].ex.some((e) => JSON.stringify(e) === JSON.stringify(excerpt))) SRC[id].ex.push(excerpt);
  return [id, WORK[work].short(loc)];
}

function entriesOf(text, fallback) {
  return dossier.quoteEntries(text).map((entry) => {
    const work = entry.work ?? fallback.work;
    const loc = entry.loc ?? fallback.loc;
    const excerpt = entry.original === null
      ? {es: entry.spanish}
      : entry.spanish === null
        ? {en: entry.original}
        : {en: entry.original, es: entry.spanish, esLv: `ia`, esFrom: `desde el inglés`};
    const [id, label] = cite(work, loc, excerpt);
    return {id, label, spanish: entry.spanish ?? entry.original};
  });
}

const blockOf = (id) => dossier.block(id);
const between = (from, to) => dossier.text.split(from)[1].split(to)[0];
const say = (lead, entry) => `${lead} «${entry.spanish}»`;
const token = (entry) => `{c:${entry.id}|${entry.label}}`;
const sources = (entries) => [...new Map(entries.map((e) => [e.id, [e.id, e.label]])).values()];
const DRAFTS = [...dossier.text.matchAll(/Site draft \(attributed paraphrase\): \*\*([^*]+)\*\*/g)].map((m) => m[1].trim());

const E = {
  BFM: entriesOf(between(`### Respuesta breve`, `### New Hampshire`), {work: `BFM`, loc: `VII`}),
  NH: entriesOf(between(`### New Hampshire — common commemoration and examination`, `### Historical convention witnesses`), {work: `NH`, loc: `XIV`})
};

const CONF = (basis) => [{cat:`confession`, basis}];
const SHORT_ANSWER = between(`### Respuesta breve`, `### New Hampshire`).split("\n").find((line) => line.startsWith(`Según BF&M VII`)).replace(/\s*\[verified[^\]]*\]\s*$/, "").replace(`Según BF&M VII`, `Según Fe y Mensaje Bautistas (art. VII)`);

const DEFINITION = {
  text: SHORT_ANSWER,
  grades: CONF(`Fe y Mensaje Bautistas (2000), art. VII`),
  sources: sources(E.BFM)
};

const QE = [
  {id: `QE-1`, text: `${say(`Fe y Mensaje Bautistas llama a la Cena un`, E.BFM[0])}, en el que los miembros de la iglesia participan del pan y del fruto de la vid para recordar la muerte del Redentor y anticipar su segunda venida.`, grades: CONF(`Fe y Mensaje Bautistas (2000), art. VII`), sources: sources(E.BFM)},
  {id: `QE-2`, text: `${say(`La Confesión de New Hampshire enseña:`, E.NH[0])}.`, grades: CONF(`Confesión de New Hampshire (1853), art. XIV`), sources: sources(E.NH)}
];

const PORQUE = {
  intro: [
    `Para Fe y Mensaje Bautistas, la Cena une una acción de obediencia con el recuerdo de la muerte del Redentor y la espera de su retorno (art. VII) ${token(E.BFM[0])}.`,
    `Para la Confesión de New Hampshire, es una conmemoración conjunta del amor de Cristo en su muerte, en la participación de los miembros de la iglesia y precedida del examen solemne de uno mismo (art. XIV) ${token(E.NH[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Los artículos seleccionados ofrecen estos fines y sus textos de apoyo; no ofrecen una argumentación extensa sobre la sustancia, el alimento espiritual ni otras posiciones eucarísticas.`
};

const BOOKS = {Mt: `Mateo`, Mr: `Marcos`, Lc: `Lucas`, Jn: `Juan`, Hch: `Hechos`, Ro: `Romanos`, "1 Co": `1 Corintios`, Col: `Colosenses`};
const REF = (text) => text.replace(/\b(1 Co|Mt|Mr|Lc|Jn|Hch|Ro|Col)\b/g, (m) => BOOKS[m]);
const APPARATUS = dossier.table(between(`## La Escritura que usa`, `## Objeciones`))[0][1];

const ESCRITURA = [
  {ref: REF(APPARATUS), d: `Fe y Mensaje Bautistas imprime estos textos junto al artículo sobre el bautismo y la Cena; su ubicación no asigna cada versículo a la Cena (art. VII).`}
];

const VIVE = {
  intro: [
    `Para Fe y Mensaje Bautistas y la Confesión de New Hampshire, participan de la Cena los miembros de la iglesia, y el bautismo la precede (New Hampshire XIV; Fe y Mensaje VII).`,
    `Estas son prescripciones de los documentos, no estadísticas sobre congregaciones observadas.`
  ],
  items: [
    {id: `CV-1`, l: `Participantes y bautismo`, d: `La participación corresponde a los miembros de la iglesia y el bautismo precede a la Cena; no se deduce una restricción adicional a los miembros de una sola congregación local.`, s: [cite(`NH`, `XIV`), cite(`BFM`, `VII`)]},
    {id: `CV-2`, l: `Los elementos`, d: `La Confesión de New Hampshire nombra pan y vino; Fe y Mensaje Bautistas, en 1963 y 2000, nombra pan y fruto de la vid.`, s: [cite(`NH`, `XIV`), cite(`BFM`, `VII`)]},
    {id: `CV-3`, l: `La acción y su fin`, d: `Los miembros comen y beben en un acto simbólico de obediencia, memoria y anticipación (Fe y Mensaje VII).`, s: [cite(`BFM`, `VII`)]},
    {id: `CV-4`, l: `La preparación`, d: `La Confesión de New Hampshire requiere el examen solemne de uno mismo (art. XIV).`, s: [cite(`NH`, `XIV`)]},
    {id: `CV-5`, l: `La frecuencia`, d: `Ninguno de los cuatro artículos completos seleccionados fija una frecuencia numérica.`, s: [cite(`NH`, `XIV`), cite(`BFM`, `VII`)]},
    {id: `CV-6`, l: `Quién preside y cómo se distribuye`, d: `Estos artículos no dan una rúbrica detallada sobre quién preside, cómo se distribuye ni la reserva.`, s: [cite(`NH`, `XIV`), cite(`BFM`, `VII`)]}
  ]
};

const GRADES = {
  scripture: {label: `Escritura: autoridad única`, def: `La Escritura es la autoridad para la fe y la práctica, según el preámbulo de Fe y Mensaje Bautistas.`, src: cite(`BFM`, `VII`)[0], srcLabel: `Fe y Mensaje VII`},
  confession: {label: `Confesiones de la convención`, def: `Según su preámbulo, una confesión expresa el consenso de un cuerpo bautista para orientar; puede revisarse, no es infalible y no añade condiciones de salvación. La Confesión de New Hampshire de 1853 es una confesión histórica, sin que cada cuerpo bautista actual la suscriba.`, src: cite(`NH`, `XIV`)[0], srcLabel: `New Hampshire XIV`}
};

const OBJ = {};

const META = {
  lede: `Cómo la línea de las convenciones bautistas entiende la Cena del Señor, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Cena del Señor, con el lugar que cada texto ocupa entre ellos.`
};
