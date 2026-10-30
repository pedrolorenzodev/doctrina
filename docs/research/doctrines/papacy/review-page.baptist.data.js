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
  NH: entriesOf(between(`### Positive church account: NH XIII`, `### Current convention statement: BF&M VI`), {work: `NH`, loc: `XIII`}),
  PREAMBLE: entriesOf(between(`## Grado de autoridad`, `## Fuentes`), {work: `BFM`, loc: `preámbulo`})
};

const LORDSHIP = {en: dossier.text.match(/> “(Lordship of Christ)”/)[1], es: dossier.text.match(/«(señorío de Cristo)»/)[1], esLv: `ia`, esFrom: `desde el inglés`};
const LORDSHIP_CITE = cite(`BFM`, `VI`, LORDSHIP);

const CONF = (basis) => [{cat:`confession`, basis}];

const DEFINITION = {
  text: `${say(`La Confesión de New Hampshire dice de la Iglesia:`, E.NH[0])}.`,
  grades: CONF(`Confesión de New Hampshire (1853), art. XIII`),
  sources: sources(E.NH)
};

const QE = [
  {id: `QE-1`, text: `${say(`La Confesión de New Hampshire enseña:`, E.NH[0])}.`, grades: CONF(`Confesión de New Hampshire (1853), art. XIII`), sources: sources(E.NH)},
  {id: `QE-2`, text: `Fe y Mensaje Bautistas habla del «${LORDSHIP.es}». Su artículo VI describe una congregación local autónoma de creyentes bautizados, con comunión de pacto, las ordenanzas y las leyes de Cristo, misión del Evangelio y procesos democráticos bajo Cristo; cada miembro responde ante Cristo, y sus dos oficios bíblicos son pastor, anciano u obispo, y diácono. Nombra también el Cuerpo de Cristo, que incluye a los redimidos de toda edad y pueblo.`, grades: CONF(`Fe y Mensaje Bautistas (2000), art. VI`), sources: [LORDSHIP_CITE]},
  {id: `QE-3`, text: `Los pasajes inspeccionados de la Confesión de New Hampshire (art. XIII) y de Fe y Mensaje Bautistas (art. VI y preámbulo) no nombran al papa ni ofrecen una exposición papal desarrollada. Eso no establece el silencio de todos los documentos bautistas ni de toda convención.`, grades: [...CONF(`Confesión de New Hampshire (1853), art. XIII`), ...CONF(`Fe y Mensaje Bautistas (2000), art. VI`)], sources: [cite(`NH`, `XIII`), cite(`BFM`, `VI`)]}
];

const PORQUE = {
  intro: [
    `Para estos artículos, los fundamentos positivos son el señorío de Cristo y el gobierno por sus leyes y su Palabra (Confesión de New Hampshire XIII; Fe y Mensaje VI) ${token({id: LORDSHIP_CITE[0], label: LORDSHIP_CITE[1]})}.`,
    `No explican la relación de Pedro con la jurisdicción papal ni con la infalibilidad.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `No se aporta ningún argumento de otras familias bautistas ni compuesto por el sitio.`
};

const ESCRITURA = [
  {ref: `Mateo 16:15-19; 18:15-20`, d: `Se imprime con todo el artículo sobre la Iglesia, sin una exposición petrina o papal aparte (Fe y Mensaje VI).`},
  {ref: `Hechos 2:41-42, 47; 5:11-14; 6:3-6; 13:1-3; 14:23, 27; 15:1-30; 16:5; 20:28`, d: `Es parte del aparato del mismo artículo sobre la Iglesia (Fe y Mensaje VI).`},
  {ref: `Romanos 1:7; 1 Corintios 1:2; 3:16; 5:4-5; 7:17; 9:13-14; 12`, d: `Es parte del aparato del mismo artículo; 1 Corintios 12 se imprime como capítulo (Fe y Mensaje VI).`},
  {ref: `Efesios 1:22-23; 2:19-22; 3:8-11, 21; 5:22-32; Filipenses 1:1; Colosenses 1:18`, d: `Es parte del mismo artículo, sin versículos asignados por el sitio a cada cláusula (Fe y Mensaje VI).`},
  {ref: `1 Timoteo 2:9-14; 3:1-15; 4:14; Hebreos 11:39-40; 1 Pedro 5:1-4; Apocalipsis 2; 3; 21:2-3`, d: `Es el resto del aparato del mismo artículo (Fe y Mensaje VI).`}
];

const VIVE = {
  intro: [
    `Los pasajes inspeccionados de la Confesión de New Hampshire (art. XIII) y de Fe y Mensaje Bautistas (art. VI) prescriben la comunión de la iglesia, las ordenanzas, las leyes de Cristo y el ministerio.`,
    `No prescriben una observancia específicamente papal.`
  ],
  items: [
    {id: `CV-1`, l: `Comunión y ordenanzas`, d: `La comunión de la iglesia, las ordenanzas, las leyes de Cristo y el ministerio (Confesión de New Hampshire XIII; Fe y Mensaje VI).`, s: [cite(`NH`, `XIII`), cite(`BFM`, `VI`)]},
    {id: `CV-2`, l: `Misión y rendición de cuentas`, d: `Fe y Mensaje Bautistas describe la misión, los procesos congregacionales y la rendición de cuentas de cada miembro ante Cristo (art. VI).`, s: [cite(`BFM`, `VI`)]},
    {id: `CV-3`, l: `Una observancia específicamente papal`, d: `Estos pasajes no prescriben ninguna observancia específicamente papal.`, s: [cite(`NH`, `XIII`), cite(`BFM`, `VI`)]}
  ]
};

const GRADES = {
  scripture: {label: `Escritura: autoridad única`, def: `Según el preámbulo de Fe y Mensaje Bautistas, la autoridad única para la fe y la práctica está en la Escritura; las confesiones no tienen finalidad ni infalibilidad.`, src: cite(`BFM`, `preámbulo`, {en: dossier.text.match(/> “(Confessions are only guides in interpretation)”/)[1], es: E.PREAMBLE[0].spanish, esLv: `ia`, esFrom: `desde el inglés`})[0], srcLabel: `Fe y Mensaje, preámbulo`},
  confession: {label: `Confesiones de la convención`, def: `La Confesión de New Hampshire es una confesión histórica de la línea de la convención; Fe y Mensaje Bautistas es una declaración de la convención, con versiones fechadas. No se establece que cada cuerpo hispanohablante adopte una versión determinada.`, src: cite(`NH`, `XIII`)[0], srcLabel: `New Hampshire XIII`}
};

const OBJ = {};

const META = {
  lede: `Cómo la línea de las convenciones bautistas entiende la Iglesia y su gobierno, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Iglesia, con el lugar que cada texto ocupa entre ellos.`
};
