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

const NONE = {work: `WCF`, loc: `28.1`};

const E = {
  DEF: entriesOf(between(`### Definition`, `### QE-1`), {work: `WSC`, loc: `94`}),
  QE1: entriesOf(blockOf(`QE-1`), NONE),
  QE2: entriesOf(blockOf(`QE-2`), NONE),
  QE3: entriesOf(blockOf(`QE-3`), NONE),
  QE4: entriesOf(blockOf(`QE-4`), NONE),
  QE5: entriesOf(blockOf(`QE-5`), NONE),
  QE6: entriesOf(blockOf(`QE-6`), NONE),
  QE7: entriesOf(blockOf(`QE-7`), NONE),
  PQ1: entriesOf(blockOf(`PQ-1`), NONE),
  PQ2: entriesOf(blockOf(`PQ-2`), {work: `WLC`, loc: `166`}),
  PQ4: entriesOf(blockOf(`PQ-4`), {work: `WLC`, loc: `167`})
};

const STD = (basis) => [{cat:`standards`, basis}];

const DEFINITION = {
  text: `${say(`El Catecismo Menor de Westminster define el bautismo así:`, E.DEF[0])}.`,
  grades: STD(`Catecismo Menor de Westminster 94`),
  sources: sources(E.DEF)
};

const QE = [
  {id: `QE-1`, text: `${say(`La Confesión de Westminster enseña:`, E.QE1[0])}. ${say(`Y nombra lo que el bautismo significa y sella:`, E.QE1[1])}.`, grades: STD(`Confesión de Westminster 28.1`), sources: sources(E.QE1)},
  {id: `QE-2`, text: `${say(`La Confesión de Westminster enseña:`, E.QE2[0])}.`, grades: STD(`Confesión de Westminster 28.2`), sources: sources(E.QE2)},
  {id: `QE-3`, text: `${say(`La Confesión de Westminster enseña:`, E.QE3[0])}. ${say(`El Catecismo Menor da su propia formulación:`, E.QE3[1])}.`, grades: STD(`Confesión de Westminster 28.4 y Catecismo Menor 95`), sources: sources(E.QE3)},
  {id: `QE-4`, text: `${say(`La Confesión de Westminster enseña:`, E.QE4[0])}.`, grades: STD(`Confesión de Westminster 28.3`), sources: sources(E.QE4)},
  {id: `QE-5`, text: `${say(`La Confesión de Westminster enseña:`, E.QE5[1])}. ${say(`Y añade:`, E.QE5[0])}.`, grades: STD(`Confesión de Westminster 28.6`), sources: sources(E.QE5)},
  {id: `QE-6`, text: `${say(`La Confesión de Westminster enseña:`, E.QE6[0])}.`, grades: STD(`Confesión de Westminster 28.5`), sources: sources(E.QE6)},
  {id: `QE-7`, text: `${say(`La Confesión de Westminster enseña:`, E.QE7[0])}. ${say(`El Catecismo Mayor añade:`, E.QE7[1])}.`, grades: STD(`Confesión de Westminster 28.7 y Catecismo Mayor 167`), sources: sources(E.QE7)}
];

const PORQUE = {
  intro: [
    `Para los Estándares de Westminster, el bautismo se funda en el mandato de Cristo: «${E.PQ1[0].spanish}» ${token(E.PQ1[0])}.`,
    `Y en el pacto, que incluye a los hijos de quienes profesan la fe: «${E.PQ2[1] ? E.PQ2[1].spanish : E.PQ2[0].spanish}» ${token(E.PQ2[0])}.`
  ],
  fathers: [],
  note: `Los mismos textos los leen de otro modo otras tradiciones: lo verás en {g:Lo que escribieron los primeros cristianos}, que es una sección neutral.`,
  closing: `Para el Catecismo Mayor de Westminster, el bautismo sirve toda la vida: «${E.PQ4[0].spanish}» ${token(E.PQ4[0])}.`
};

const ESCRITURA = [
  {ref: `Mateo 28:19-20`, d: `La Confesión de Westminster y el Catecismo Menor lo citan para la institución, el nombre trino y la continuación del bautismo (Confesión 28.1–2; Catecismo Menor 94).`},
  {ref: `1 Corintios 12:13`, d: `Se cita para la admisión en el cuerpo y el amor fraterno (Confesión 28.1; Catecismo Mayor 167).`},
  {ref: `Romanos 4:11`, d: `Se cita para el signo y el sello, el pacto y los beneficios sellados (Confesión 28.1 y 28.4; Catecismo Mayor 166–167).`},
  {ref: `Colosenses 2:11-12`, d: `Se cita junto a la circuncisión y el bautismo en el pacto (Confesión 28.1 y 28.4; Catecismo Mayor 166–167).`},
  {ref: `Gálatas 3:27`, d: `Se cita para la unión con Cristo (Confesión 28.1 y 28.6; Catecismo Menor 94).`},
  {ref: `Romanos 6:3-5`, d: `Se cita para la vida nueva y la muerte y resurrección de Cristo (Confesión 28.1; Catecismo Mayor 167).`},
  {ref: `Tito 3:5`, d: `Se cita para la regeneración, y en la edición española para administrar el bautismo una sola vez (Confesión 28.1 y 28.7).`},
  {ref: `Marcos 1:4`, d: `Se cita para la remisión de los pecados (Confesión 28.1).`},
  {ref: `Hechos 22:16`, d: `Se cita para el lavamiento de los pecados (Confesión 28.1, edición española).`},
  {ref: `Hebreos 9:10, 19-22`, d: `Se cita para administrar el bautismo derramando o rociando el agua (Confesión 28.3).`},
  {ref: `Hechos 2:41; 16:33`, d: `Se cita para la administración con agua (Confesión 28.3).`},
  {ref: `Marcos 7:4`, d: `Se cita para los lavamientos (Confesión 28.3).`},
  {ref: `Marcos 16:15-16; Hechos 8:37-38`, d: `Se cita para la profesión de fe antes del bautismo (Confesión 28.4).`},
  {ref: `Génesis 17:7, 9`, d: `Se cita para el pacto y la descendencia (Confesión 28.4; Catecismo Mayor 166).`},
  {ref: `Gálatas 3:9, 14`, d: `Se cita para la bendición de Abraham y la promesa (Confesión 28.4; Catecismo Mayor 166).`},
  {ref: `Hechos 2:38-39`, d: `Se cita para la promesa a los oyentes y a sus hijos (Confesión 28.4; Catecismo Mayor 166).`},
  {ref: `1 Corintios 7:14`, d: `Se cita para los hijos llamados santos (Confesión 28.4; Catecismo Mayor 166; Catecismo Menor 95).`},
  {ref: `Lucas 18:15-16; Romanos 11:16`, d: `Se citan para los niños y para la raíz y las ramas (Catecismo Mayor 166).`},
  {ref: `Juan 3:5, 8`, d: `Se cita para la obra del Espíritu (Confesión 28.6).`},
  {ref: `Efesios 5:25-26; Hechos 2:38, 41`, d: `Se citan para la gracia prometida conferida (Confesión 28.6).`},
  {ref: `1 Pedro 3:21`, d: `Se cita para los beneficios y la buena conciencia (Catecismo Mayor 167; Catecismo Menor 95).`},
  {ref: `Romanos 6:22`, d: `Se cita para la santidad y la justicia de vida (Catecismo Mayor 167).`}
];

const VIVE = {
  intro: [
    `Para los Estándares de Westminster, el bautizado debe aprovechar su bautismo durante toda la vida: «${E.QE7[1].spanish}» ${token(E.QE7[1])}.`,
    `Y el bautismo no se repite: «${E.QE7[0].spanish}» ${token(E.QE7[0])}.`
  ],
  items: [
    {id: `CV-1`, l: `El agua`, d: `El elemento exterior del bautismo es el agua.`, s: [cite(`WCF`, `28.2`)]},
    {id: `CV-2`, l: `La fórmula`, d: `Se bautiza en el nombre del Padre, del Hijo y del Espíritu Santo.`, s: [cite(`WCF`, `28.2`), cite(`WSC`, `94`)]},
    {id: `CV-3`, l: `Quién bautiza`, d: `Un ministro del evangelio debidamente autorizado.`, s: [cite(`WCF`, `28.2`)]},
    {id: `CV-4`, l: `El modo`, d: `Se administra rectamente derramando o rociando el agua; la inmersión no es necesaria.`, s: [cite(`WCF`, `28.3`)]},
    {id: `CV-5`, l: `Quienes profesan la fe`, d: `Se bautiza a quienes profesan su fe en Cristo y su obediencia a él.`, s: [cite(`WCF`, `28.4`), cite(`WSC`, `95`)]},
    {id: `CV-6`, l: `Los niños`, d: `Se bautiza a los hijos de padres de los que al menos uno es creyente.`, s: [cite(`WCF`, `28.4`)]},
    {id: `CV-7`, l: `Una sola vez`, d: `El bautismo no se administra más de una vez a la misma persona.`, s: [cite(`WCF`, `28.7`)]},
    {id: `CV-8`, l: `Aprovechar el bautismo`, d: `Se cumple durante toda la vida, sobre todo ante la tentación y al ver bautizar a otro.`, s: [cite(`WLC`, `167`)]}
  ]
};

const GRADES = {
  scripture: {label: `Escritura: juez supremo`, def: `La Confesión de Westminster distingue la Escritura, juez supremo de toda controversia, de los escritos humanos (capítulo 1.10).`, src: cite(`WCF`, `1.10`)[0], srcLabel: `Westminster 1.10`},
  standards: {label: `Estándares de Westminster`, def: `La Confesión y los Catecismos de Westminster son normas subordinadas a la Escritura: los concilios pueden errar y ayudan a la fe sin constituir su regla (Confesión 31.4); sus determinaciones, si concuerdan con la Escritura, se reciben con reverencia y sumisión (Confesión 31.3).`, src: cite(`WCF`, `31.3–4`)[0], srcLabel: `Westminster 31.3–4`}
};

const OBJ = {};

const META = {
  lede: `Cómo los Estándares de Westminster entienden el bautismo, con sus propias fuentes.`,
  ensenaSub: `Lo que enseñan los Estándares de Westminster sobre el bautismo, con el lugar que cada texto ocupa entre ellos.`
};
