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
  BFM: {title: (loc) => (loc === `preámbulo` ? `Fe y Mensaje Bautistas (2000), preámbulo` : `Fe y Mensaje Bautistas (2000), art. ${loc}`), short: (loc) => `Fe y Mensaje ${loc}`, date: `2000`, ed: `bfm`}
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
  NH: entriesOf(between(`### Scripture as the standard for conduct, creeds and opinions`, `### Current BF&M: revelation, truth and Christ`), {work: `NH`, loc: `I`}),
  BFM: entriesOf(between(`### Current BF&M: revelation, truth and Christ`, `### Historical formulations remain dated`), {work: `BFM`, loc: `I`}),
  WHY: entriesOf(between(`### Divine inspiration, author and purpose`, `## La Escritura que usa`), {work: `NH`, loc: `I`}),
  PREAMBLE: entriesOf(between(`### Confessions as interpretive guides and doctrinal accountability`, `| Practice question`), {work: `BFM`, loc: `preámbulo`})
};

const CONF = (basis) => [{cat:`confession`, basis}];

const DEFINITION = {
  text: `${say(`La Confesión de New Hampshire dice de la Biblia:`, E.NH[0])}.`,
  grades: CONF(`Confesión de New Hampshire (1853), art. I`),
  sources: sources(E.NH)
};

const QE = [
  {id: `QE-1`, text: `${say(`La Confesión de New Hampshire dice de la Biblia:`, E.NH[0])}.`, grades: CONF(`Confesión de New Hampshire (1853), art. I`), sources: sources(E.NH)},
  {id: `QE-2`, text: DRAFTS[0], grades: CONF(`Fe y Mensaje Bautistas (2000), art. I`), sources: sources(E.BFM)}
];

const PORQUE = {
  intro: [
    `${say(`Para la Confesión de New Hampshire:`, E.WHY[0])} ${token(E.WHY[0])}.`,
    `Fe y Mensaje Bautistas da su propia razón, centrada en la revelación divina y en Cristo (art. I) ${token(E.BFM[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Para Fe y Mensaje Bautistas, Dios es el autor de la Biblia, la salvación su fin y la verdad, sin mezcla de error, su contenido (art. I).`
};

const ESCRITURA = [
  {ref: `Éxodo 24:4; Deuteronomio 4:1-2; 17:19; Josué 8:34; Salmos 19:7-10; 119:11, 89, 105, 140; Isaías 34:16; 40:8; Jeremías 15:16; 36:1-32; Mateo 5:17-18; 22:29; Lucas 21:33; 24:44-46; Juan 5:39; 16:13-15; 17:17; Hechos 2:16; 17:11; Romanos 15:4; 16:25-26; 2 Timoteo 3:15-17; Hebreos 1:1-2; 4:12; 1 Pedro 1:25; 2 Pedro 1:19-21`, d: `Fe y Mensaje Bautistas imprime estos textos junto al artículo sobre la Escritura, sin asignar cada referencia a un argumento no impreso (art. I).`}
];

const VIVE = {
  intro: [
    `${say(`Fe y Mensaje Bautistas dice en su preámbulo:`, E.PREAMBLE[0])} ${token(E.PREAMBLE[0])}.`,
    `Para ese preámbulo, la Escritura tiene autoridad única para la fe y la práctica; las confesiones guían la interpretación sin autoridad sobre la conciencia, sirven como instrumentos de rendición de cuentas doctrinal y admiten revisión.`
  ],
  items: [
    {id: `CV-1`, l: `Las confesiones como guías`, d: `${say(`El preámbulo de Fe y Mensaje Bautistas dice:`, E.PREAMBLE[0])}.`, s: sources(E.PREAMBLE)},
    {id: `CV-2`, l: `Leer sin iglesia ni confesión`, d: `No se afirma una regla de lectura solo privada: el preámbulo une la guía de interpretación, la autoridad de la Escritura y la rendición de cuentas doctrinal.`, s: sources(E.PREAMBLE)},
    {id: `CV-3`, l: `Plan de lectura o versión bíblica universal`, d: `Los artículos seleccionados no dicen nada sobre un plan de lectura fijo ni sobre una versión bíblica universal.`, s: [cite(`NH`, `I`), cite(`BFM`, `I`)]}
  ]
};

const GRADES = {
  scripture: {label: `Escritura: autoridad única`, def: `Autoridad única para la fe y la práctica en el preámbulo de la convención; norma suprema de examen en la Confesión de New Hampshire I y en Fe y Mensaje Bautistas I.`, src: cite(`BFM`, `I`)[0], srcLabel: `Fe y Mensaje I`},
  confession: {label: `Confesiones de la convención`, def: `La Confesión de New Hampshire de 1853 es una confesión histórica, sin jurisdicción bautista universal. Fe y Mensaje Bautistas 2000, enmendada en 2023, es la declaración de la convención nombrada: guía y rendición de cuentas doctrinal bajo la Escritura, revisable, no infalible ni una norma que obligue la conciencia como la Escritura.`, src: cite(`NH`, `I`)[0], srcLabel: `New Hampshire I`}
};

const OBJ = {};

const META = {
  lede: `Cómo la línea de las convenciones bautistas entiende la Escritura, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Escritura, con el lugar que cada texto ocupa entre ellos.`
};
