const ED = {
  wcf: `Inglés: The Confession of Faith (texto de 1647), Edimburgo, Johnstone, Hunter & Co., 1894. Español: Doctrinas y reglamentos de la Iglesia Presbiteriana, Monterrey, Tipografía del Comercio, 1880 (numeración americana). Dominio público.`
};

const LINKS = {
  wcf: {href:`https://archive.org/details/confessionoffaith00chur`, label:`Ver el escaneo de 1894 en archive.org`},
  wcf1880: {href:`https://archive.org/details/doctrinasyreglam00west`, label:`Ver el escaneo de 1880 en archive.org`}
};

const WORK = {
  WCF: {title:`Confesión de Westminster`, short:`Westminster`, date:`1647`},
  WLC: {title:`Catecismo Mayor de Westminster`, short:`Catecismo Mayor de Westminster`, date:`1647`},
  WSC: {title:`Catecismo Menor de Westminster`, short:`Catecismo Menor de Westminster`, date:`1647`}
};

const SRC = {};

function cite(work, loc, excerpt) {
  const id = `R${work}${loc.replace(/[^\w]/g, "_")}`;
  if (!SRC[id]) SRC[id] = {kind:`Fuente`, title:`${WORK[work].title} ${loc}`, date:WORK[work].date, ed:ED.wcf, url:LINKS.wcf1880, ex:[]};
  if (excerpt && !SRC[id].ex.some((e) => JSON.stringify(e) === JSON.stringify(excerpt))) SRC[id].ex.push(excerpt);
  return [id, `${WORK[work].short} ${loc}`];
}

const FROM = {"from German": `desde el alemán`, "from Latin": `desde el latín`, "from English": `desde el inglés`};

function entriesOf(text, fallback) {
  return dossier.quoteEntries(text).map((entry) => {
    const work = entry.work ?? fallback.work;
    const loc = entry.loc ?? fallback.loc;
    const excerpt = entry.original === null
      ? {es: entry.spanish}
      : entry.spanish === null
        ? {[entry.lang ?? `en`]: entry.original}
        : {[entry.lang ?? `en`]: entry.original, es: entry.spanish, esLv: `ia`, esFrom: FROM[entry.from] ?? `desde el inglés`};
    const [id, label] = cite(work, loc, excerpt);
    return {id, label, spanish: entry.spanish ?? entry.original};
  });
}

const blockOf = (id) => dossier.block(id);
const between = (from, to) => dossier.text.split(from)[1].split(to)[0];
const say = (lead, entry) => `${lead} «${entry.spanish}»`;
const token = (entry) => `{c:${entry.id}|${entry.label}}`;
const sources = (entries) => [...new Map(entries.map((e) => [e.id, [e.id, e.label]])).values()];

const NONE = {work: `WCF`, loc: `1.1`};

const E = {
  DEF: entriesOf(between(`### Definition`, `### QE-1`), {work: `WCF`, loc: `1.2`}),
  QE1: entriesOf(blockOf(`QE-1`), {work: `WCF`, loc: `1.4`}),
  QE2: entriesOf(blockOf(`QE-2`), {work: `WCF`, loc: `1.6`}),
  QE3: entriesOf(blockOf(`QE-3`), {work: `WCF`, loc: `1.7`}),
  QE4: entriesOf(blockOf(`QE-4`), {work: `WCF`, loc: `1.9`}),
  QE5: entriesOf(blockOf(`QE-5`), {work: `WCF`, loc: `1.10`}),
  QE6: entriesOf(blockOf(`QE-6`), {work: `WCF`, loc: `1.8`}),
  QE7: entriesOf(blockOf(`QE-7`), {work: `WCF`, loc: `1.8`}),
  PQ1: entriesOf(blockOf(`PQ-1`), NONE),
  PQ3: entriesOf(blockOf(`PQ-3`), {work: `WCF`, loc: `1.5`}),
  PQ4: entriesOf(blockOf(`PQ-4`), {work: `WSC`, loc: `2`}),
  READ: entriesOf(between(`### Reading, worship and translation`, `### How WLC says to read`), {work: `WLC`, loc: `156`}),
  HOW: entriesOf(between(`### How WLC says to read`, `### Preaching remains a called office`), {work: `WLC`, loc: `157`}),
  PREACH: entriesOf(between(`### Preaching remains a called office`, `### Reception and application`), {work: `WLC`, loc: `158`})
};

const STD = (basis) => [{cat:`standards`, basis}];

const DEFINITION = {
  text: `${say(`La Confesión de Westminster dice, al enumerar los libros de ambos Testamentos:`, E.DEF[0])}.`,
  grades: STD(`Confesión de Westminster 1.2`),
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `${say(`La Confesión de Westminster enseña:`, E.QE1[0])}.`, grades: STD(`Confesión de Westminster 1.4`), sources: sources(E.QE1)},
  {id: `QE-2`, text: `${say(`La Confesión de Westminster enseña:`, E.QE2[0])}. ${say(`Y conserva la iluminación interna del Espíritu:`, E.QE2[1])}. ${say(`Y las circunstancias del culto y del gobierno:`, E.QE2[2])}.`, grades: STD(`Confesión de Westminster 1.6`), sources: sources(E.QE2)},
  {id: `QE-3`, text: `${say(`La Confesión de Westminster enseña:`, E.QE3[0])}. ${say(`Y añade su cualificación afirmativa:`, E.QE3[1])}.`, grades: STD(`Confesión de Westminster 1.7`), sources: sources(E.QE3)},
  {id: `QE-4`, text: `${say(`La Confesión de Westminster enseña:`, E.QE4[0])}.`, grades: STD(`Confesión de Westminster 1.9`), sources: sources(E.QE4)},
  {id: `QE-5`, text: `${say(`La Confesión de Westminster enseña:`, E.QE5[0])}.`, grades: STD(`Confesión de Westminster 1.10`), sources: sources(E.QE5)},
  {id: `QE-6`, text: `La Confesión de Westminster enumera los libros del Antiguo y del Nuevo Testamento (1.2) y llama a los libros comúnmente titulados Apócrifos escritos humanos y no parte del canon (1.3). ${say(`Y dice:`, E.QE6[0])}.`, grades: STD(`Confesión de Westminster 1.2, 1.3 y 1.8`), sources: [cite(`WCF`, `1.2`), cite(`WCF`, `1.3`), ...sources(E.QE6)]},
  {id: `QE-7`, text: `${say(`La Confesión de Westminster enseña:`, E.QE7[0])}.`, grades: STD(`Confesión de Westminster 1.8`), sources: sources(E.QE7)}
];

const PORQUE = {
  intro: [
    `Para la Confesión de Westminster, Dios quiso ponerlo todo por escrito: «${E.PQ1[0].spanish}» ${token(E.PQ1[0])}.`,
    `Y reconoce el testimonio de la iglesia, pero la persuasión viene de otra parte: «${E.PQ3[0].spanish}» ${token(E.PQ3[0])}. ${say(`La Confesión la ubica en`, E.PQ3[1])} ${token(E.PQ3[1])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Para el Catecismo Menor de Westminster, la Escritura es la única regla: «${E.PQ4[0].spanish}» ${token(E.PQ4[0])}.`
};

const ESCRITURA = [
  {ref: `Romanos 1:19-20, 32; 2:1, 14-15`, d: `La Confesión de Westminster lo cita para los límites de la revelación natural (Confesión 1.1).`},
  {ref: `1 Corintios 1:21; 2:13-14`, d: `La Confesión de Westminster lo cita para el conocimiento salvador (Confesión 1.1).`},
  {ref: `Hebreos 1:1-2`, d: `La Confesión de Westminster lo cita para los modos antiguos de hablar Dios y el Hijo (Confesión 1.1).`},
  {ref: `Lucas 1:3-4; Romanos 15:4`, d: `La Confesión de Westminster lo cita para la escritura, la certeza y el consuelo (Confesión 1.1).`},
  {ref: `Isaías 8:20; Apocalipsis 22:18`, d: `La Confesión de Westminster lo cita para el testimonio escrito (Confesión 1.1).`},
  {ref: `2 Timoteo 3:15; 2 Pedro 1:19`, d: `La Confesión de Westminster lo cita para la necesidad de la Escritura (Confesión 1.1).`},
  {ref: `Efesios 2:20; Apocalipsis 22:18-19; 2 Timoteo 3:16`, d: `La Confesión de Westminster lo cita para la regla escrita inspirada (Confesión 1.2).`},
  {ref: `Lucas 24:27, 44; 2 Pedro 1:21`, d: `La Confesión de Westminster lo cita para el límite del canon (Confesión 1.3).`},
  {ref: `2 Timoteo 3:16; 1 Juan 5:9; 1 Tesalonicenses 2:13`, d: `La Confesión de Westminster lo cita para la autoridad divina (Confesión 1.4).`},
  {ref: `1 Timoteo 3:15`, d: `La Confesión de Westminster lo cita para el testimonio de la iglesia (Confesión 1.5).`},
  {ref: `1 Juan 2:20, 27; Juan 16:13-14; 1 Corintios 2:10-11`, d: `La Confesión de Westminster lo cita para el testimonio del Espíritu (Confesión 1.5).`},
  {ref: `2 Timoteo 3:16-17; Gálatas 1:8; 2 Tesalonicenses 2:2`, d: `La Confesión de Westminster lo cita para la suficiencia y las adiciones (Confesión 1.6).`},
  {ref: `Juan 6:45; 1 Corintios 2:9-10, 12`, d: `La Confesión de Westminster lo cita para la iluminación salvadora (Confesión 1.6).`},
  {ref: `1 Corintios 11:13-14; 14:26, 40`, d: `La Confesión de Westminster lo cita para las circunstancias y el orden (Confesión 1.6).`},
  {ref: `2 Pedro 3:15-16; Salmo 119:105, 130`, d: `La Confesión de Westminster lo cita para la dificultad y la claridad (Confesión 1.7).`},
  {ref: `Salmo 19:7-8, 11`, d: `La Confesión de Westminster lo cita para la sabiduría y el entendimiento (Confesión 1.7).`},
  {ref: `Mateo 5:18`, d: `La Confesión de Westminster lo cita para el texto original (Confesión 1.8).`},
  {ref: `Isaías 8:20; Hechos 15:15; Juan 5:46`, d: `La Confesión de Westminster lo cita para la apelación en las controversias (Confesión 1.8).`},
  {ref: `Juan 5:39`, d: `La Confesión de Westminster lo cita para leer y escudriñar (Confesión 1.8).`},
  {ref: `1 Corintios 14:6, 9, 11-12, 24, 27-28`, d: `La Confesión de Westminster lo cita para la lengua inteligible (Confesión 1.8).`},
  {ref: `Colosenses 3:16; Romanos 15:4`, d: `La Confesión de Westminster lo cita para el culto y la esperanza (Confesión 1.8).`},
  {ref: `Hechos 15:15; Juan 5:46`, d: `La Confesión de Westminster lo cita para la Escritura que interpreta la Escritura (Confesión 1.9).`},
  {ref: `Mateo 22:29, 31; Efesios 2:20`, d: `La Confesión de Westminster lo cita para el juez supremo (Confesión 1.10).`},
  {ref: `Hechos 28:25`, d: `La Confesión de Westminster lo cita para el Espíritu que habla por la Escritura (Confesión 1.10).`},
  {ref: `Efesios 2:20; Hechos 17:11; 1 Corintios 2:5; 2 Corintios 1:24`, d: `La Confesión de Westminster lo cita para los concilios como ayuda (Confesión 31.4, numeración histórica).`},
  {ref: `Hechos 17:11`, d: `El Catecismo Mayor lo cita para la lectura diligente (Catecismo Mayor 157).`}
];

const VIVE = {
  intro: [
    `Para los Estándares de Westminster, las Escrituras se leen «${E.HOW[1] ? E.HOW[1].spanish.split(`;`)[0] : E.HOW[0].spanish}» ${token(E.HOW[1] ?? E.HOW[0])}.`,
    `La palabra de Dios se predica solo por quienes están dotados y llamados a ese oficio: «${E.PREACH[0].spanish}» ${token(E.PREACH[0])}.`
  ],
  items: [
    {id: `CV-1`, l: `Leer la Escritura`, d: `El pueblo tiene derecho y parte en las Escrituras y debe leerlas y escudriñarlas con temor de Dios (Confesión 1.8); y ${E.READ[0].spanish.charAt(0).toLowerCase()}${E.READ[0].spanish.slice(1)} (Catecismo Mayor 156).`, s: [cite(`WCF`, `1.8`), ...sources(E.READ)]},
    {id: `CV-2`, l: `Cómo leerla`, d: `${say(`El Catecismo Mayor dice:`, E.HOW[0])}.`, s: sources(E.HOW)},
    {id: `CV-3`, l: `La predicación`, d: `${say(`El Catecismo Mayor dice:`, E.PREACH[0])}.`, s: sources(E.PREACH)},
    {id: `CV-4`, l: `Oír y recibir`, d: `El Catecismo Mayor prescribe oír con diligencia, preparación y oración, examinar lo oído por la Escritura, recibirlo con fe y amor, meditarlo y dar fruto en la vida.`, s: [cite(`WLC`, `160`)]}
  ]
};

const GRADES = {
  scripture: {label: `Escritura: juez supremo`, def: `El Espíritu Santo, que habla en las Escrituras, es el Juez supremo por quien toda controversia religiosa tiene que decidirse (Confesión 1.10); la Escritura es la única regla (Catecismo Menor 2).`, src: cite(`WCF`, `1.10`)[0], srcLabel: `Westminster 1.10`},
  standards: {label: `Estándares de Westminster`, def: `La Confesión y los Catecismos de Westminster son normas subordinadas a la Escritura: los concilios pueden errar y ayudan a la fe sin constituir su regla (Confesión 31.4); sus determinaciones, si concuerdan con la Escritura, se reciben con reverencia y sumisión (Confesión 31.3).`, src: cite(`WCF`, `31.3–4`)[0], srcLabel: `Westminster 31.3–4`}
};

const OBJ = {};

const META = {
  lede: `Cómo los Estándares de Westminster entienden la Escritura como regla, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan los Estándares de Westminster sobre la Escritura como regla, con el lugar que cada texto ocupa entre ellos.`
};
