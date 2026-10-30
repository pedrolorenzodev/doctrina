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
  NH: entriesOf(between(`### Believers' immersion in the trinitarian name`, `### Obedience, new life and resurrection`), {work: `NH`, loc: `XIV`}),
  BFM: entriesOf(between(`### Obedience, new life and resurrection`, `### Relation to church membership and the Lord's Supper`), {work: `BFM`, loc: `VII`}),
  WHY: entriesOf(between(`### The confession's own emblem-language`, `## La Escritura que usa`), {work: `NH`, loc: `XIV`})
};

const CONF = (basis) => [{cat:`confession`, basis}];

const DEFINITION = {
  text: `${say(`La Confesión de New Hampshire dice:`, E.NH[0])}.`,
  grades: CONF(`Confesión de New Hampshire (1853), art. XIV`),
  sources: sources(E.NH)
};

const QE = [
  {id: `QE-1`, text: `${say(`La Confesión de New Hampshire enseña:`, E.NH[0])}.`, grades: CONF(`Confesión de New Hampshire (1853), art. XIV`), sources: sources(E.NH)},
  {id: `QE-2`, text: DRAFTS[0], grades: CONF(`Fe y Mensaje Bautistas (2000), art. VII`), sources: sources(E.BFM)},
  {id: `QE-3`, text: DRAFTS[1], grades: [...CONF(`Fe y Mensaje Bautistas (2000), art. VII`), ...CONF(`Confesión de New Hampshire (1853), art. XIV`)], sources: [cite(`BFM`, `VII`), cite(`NH`, `XIV`)]}
];

const PORQUE = {
  intro: [
    `${say(`Para la Confesión de New Hampshire, el bautismo sirve`, E.WHY[0])} ${token(E.WHY[0])}.`,
    `${say(`Y lo hace`, E.WHY[1])} ${token(E.WHY[1])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Para Fe y Mensaje Bautistas, el bautismo simboliza la fe en Cristo crucificado, sepultado y resucitado, la muerte al pecado, la vida nueva y el testimonio de la resurrección final (art. VII).`
};

const ESCRITURA = [
  {ref: `Mateo 3:13-17; 26:26-30; 28:19-20; Marcos 1:9-11; 14:22-26; Lucas 3:21-22; 22:19-20; Juan 3:23; Hechos 2:41-42; 8:35-39; 16:30-33; 20:7; Romanos 6:3-5; 1 Corintios 10:16, 21; 11:23-29; Colosenses 2:12`, d: `Fe y Mensaje Bautistas imprime estos textos junto al artículo sobre el bautismo y la Cena, sin asignar versículos a cada cláusula (art. VII).`}
];

const VIVE = {
  intro: [
    `Para la Confesión de New Hampshire y Fe y Mensaje Bautistas, el bautismo es para un creyente, por inmersión en agua, en el nombre del Padre, del Hijo y del Espíritu Santo (New Hampshire XIV; Fe y Mensaje VII).`,
    `Los artículos seleccionados no fijan una edad numérica, la duración de una preparación, un lugar ni un calendario: la palabra «creyente» no establece una edad numérica.`
  ],
  items: [
    {id: `CV-1`, l: `Quién lo recibe`, d: `Un creyente.`, s: [cite(`NH`, `XIV`), cite(`BFM`, `VII`)]},
    {id: `CV-2`, l: `Materia, modo y nombre`, d: `Inmersión en agua, en el nombre del Padre, del Hijo y del Espíritu Santo.`, s: [cite(`NH`, `XIV`), cite(`BFM`, `VII`)]},
    {id: `CV-3`, l: `Qué expresa`, d: `La fe y el simbolismo de la vida nueva; el artículo vigente nombra además el testimonio de la resurrección final.`, s: [cite(`NH`, `XIV`), cite(`BFM`, `VII`)]},
    {id: `CV-4`, l: `La iglesia y la Cena`, d: `El bautismo es requisito previo para la relación con la iglesia y para la Cena.`, s: [cite(`NH`, `XIV`), cite(`BFM`, `VII`)]},
    {id: `CV-5`, l: `Quién bautiza`, d: `Los artículos seleccionados sobre el bautismo no dicen nada acerca de quién lo administra.`, s: [cite(`NH`, `XIV`), cite(`BFM`, `VII`)]}
  ]
};

const GRADES = {
  scripture: {label: `Escritura: autoridad única`, def: `En la formulación del preámbulo de Fe y Mensaje Bautistas, la Escritura es la única autoridad para la fe y la práctica.`, src: cite(`BFM`, `VII`)[0], srcLabel: `Fe y Mensaje VII`},
  confession: {label: `Confesiones de la convención`, def: `La Confesión de New Hampshire de 1853 es una confesión histórica revisada, sin jurisdicción bautista universal ni adopción regional actual inferida. Fe y Mensaje Bautistas 2000, enmendada en 2023, es la declaración adoptada por la convención nombrada: guía y rendición de cuentas doctrinal bajo la Escritura, revisable, sin reclamar finalidad, infalibilidad ni autoridad sobre la conciencia; no es un magisterio bautista mundial.`, src: cite(`NH`, `XIV`)[0], srcLabel: `New Hampshire XIV`}
};

const OBJ = {};

const META = {
  lede: `Cómo la línea de las convenciones bautistas entiende el bautismo, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre el bautismo, con el lugar que cada texto ocupa entre ellos.`
};
