# Aplicar el ledger de verificación de los Padres (clon `doctrina-ai-p1`)

## State

- **Hecho (tres tandas, 2026-11-08):**
  - **Tanda 1:** 8 registros y 4 testigos. **Tanda 2:** 10 registros más (control de 12 filas: 7 se sostienen, 3 en parte, 2 sin verificar). **Tanda 3:** 2 registros más (control de 4 filas). **Tanda 4:** 1 registro más (control de 3 obras).
  - **En total: 21 de los 56 registros cambiados**, todos con su fuente y el valor anterior en la nota.
  - El control de 10 filas `CHANGE` contra sus fuentes.
  - **8 registros aplicados** en `data/site/history.json`, cada uno con su fuente y el valor anterior en la nota («Applied 2026-11-08 … Was …»); `src/content/history/fathers.ts` regenerado.
  - **4 testigos** de la Eucaristía corregidos o calificados (Didaché, Ignacio, Justino, Tertuliano).
  - **Asserts de e2e** que tenían escritas las fechas o cargos viejos, actualizados: `doctrine-witnesses.spec.ts` (3), `father.spec.ts` («Sus escritos» de Justino, y «Arzobispo de» → «Obispo de» para Crisóstomo).
  - **16 capturas** en `tmp/fathers-ledger-shots/` (Justino, Jerónimo y Sofronio, y la línea de tiempo general; 390 y 1440; claro y oscuro). En las capturas de página completa «Sus escritos» sale vacío porque las filas entran con animación. Comprobé con el navegador que las filas están y se ven: Jerónimo «382–384; 390–407», Sofronio solo «Carta sinodal 634», Didaché «c. 50–150».
  - **Verificador Sonnet** sobre los 12 cambios (no hay 15: es todo lo que cambió):
    - 10 respaldados por fuentes que abrió; Ignacio solo en parte (no pudo abrir Lake pp. 166–167); nada más cambió en el diff.
    - **Lo que marcó y ya arreglé:**
      - la huella de la misma página de la Eucaristía tenía las fechas viejas (Didaché 50–120, Ignacio 107–110, Justino 150, Tertuliano 207): ahora coincide con los testigos;
      - Jerónimo: su fuente (*Handbook*) da 383, no 382, así que pasa a «383–384» con la nota de que el 382 del ledger viene de Houghton, que no se abrió;
      - Tertuliano: la nota en español ya no dice «tercera edición» (tertullian.org asigna I–III a la segunda).
    - **Lo que marcó y queda:**
      - las notas en inglés de Clemente, Didaché, Papías y León todavía empiezan con la frase vieja antes de «Applied …». No la borré a propósito («nunca en silencio»), y esas notas no se muestran (solo inglés).
      - copias viejas de las mismas fechas fuera de este encargo (ver «Fuera de alcance»).

## Fuera de alcance (para el coordinador)

Mismas fechas viejas en otros archivos, que no toqué:

- `src/content/history/dating.es.ts` (líneas 7 y 130: Ignacio «c. 107–110»).
- `src/content/pages/papacy/doctrine.es.ts` (líneas 11 y 159) y `src/content/pages/papacy/catholic.es.ts` (línea 420, `yearEnd: 110`).
- `data/site/sources.extra.json` («c. 50–120», «c. 207–208») y `data/site/eucharist.v2.json` («c. 50–120», «c. 107–110», «c. 207–208»). No comprobé si estos dos se muestran.
- **No hecho.** Casi todo lo que queda no se puede aplicar con el modelo actual: `died` es un marcador obligatorio de la línea de tiempo, y la fecha de una obra es un texto sin idioma que no admite «después de 180», «inacabada» ni «se discute». Hace falta el cambio de modelo de «Para DECISIONS». También quedó sin control, por el tope semanal (45 %):
  - los `CHANGE` que quedan sin controlar (Bernabé y Hermas, ya compatibles en sus rangos; Cirilo de Jerusalén, Gregorio de Nisa, Optato, Próspero, Pseudo-Dionisio, Andrés de Creta) y los cambios de obras y cargos de los 19 `QUALIFY`;
  - los resúmenes en prosa.
  - Las fechas de **vida** ya se mostraban con su estado en `src/content/history/father-lives.ts` (construido el 2026-10-25 para 51 registros). Lo pendiente son las fechas de obras, los cargos, los `born`/`died` crudos y los resúmenes.
- **Verificación:**
  - `npm run verify` exit 0, con las 4 advertencias de siempre.
  - E2E de historia y testigos (`doctrine-witnesses`, `father-lives`, `father`, `general-timeline`, `history-pages`, `timeline`, `quality-timelines`; puerto 3210): 141 pasan y fallan **3 de `father.spec.ts` («Dónde aparece en Doctrina»), que fallan desde antes:** esperan que Justino aparezca solo en la Eucaristía («Primera Apología 66; Diálogo con Trifón 41») y el commit `eb14dce` agregó testigos del Bautismo que también lo citan («Primera Apología 61»). No los toqué.
- **Uso (semanal):** 03:46 → 42 % (medidor del encargo); 03:52 → 42 %; 03:58 → 42 %; 04:03 → 43 %; 04:06 → 43 % (segunda parte); 04:16 → 43 %.
- **Cómo retomar:** el script de esta sesión aplica registro por registro con nota y «Was …»; seguir la tabla de abajo, empezando por las filas `CHANGE` sin aplicar, controlando cada una contra su fuente.

## Los 10 controles (subagente Sonnet, fuentes abiertas en la web)

| Registro | Cambio controlado | Veredicto | Evidencia |
|---|---|---|---|
| clement-of-rome | *1 Clemente* 75–110; orden episcopal y muerte 99 como tradición | Se sostiene | Lake I (1912), intro, archive.org: «must be dated between 75 and 110»; sobre la muerte, «Nothing certain is known». |
| didache | Obra, no persona; segunda mitad del s. I a primera del II | Se sostiene | Cambridge Edition of Early Christian Writings (2025), resumen de la introducción. Lake pp. 305–307 no se leyó. |
| papias-of-hierapolis | Quitar 70/130; obra c. 100–150 | En parte | Cambridge HTR (2025): «probably in the time of Trajan (97–118)». 70/130 sin testimonio; 100–150 y «cerca de 140» sin verificar (NTS n. 4 no abrió). |
| justin-martyr | *Apologías* 148–161, no 150–155 | En parte | Schaff-Herzog: «between 147 and 161»; Grant: 155–157. BiblIndex no abrió. 150–155 no es «WRONG»: 148–161 es una envolvente. |
| irenaeus-of-lyon | Nacimiento 130/140; muerte c. 202; obra 180–189 | Casi todo sin verificar | Norris (Cambridge): nacimiento «thirties or perhaps the forties». 180–189 y c. 202 sin fuente abierta. |
| tertullian | *Contra Marción* 207–213 | En parte | tertullian.org (según CCL II/Harnack): libro I 207–8, libros IV–V 208–212. El 213 no se confirma. |
| gregory-of-nazianzus | Obispo de Sásima; *Discursos* 39/40 el 6 y 7 de enero de 381 | En parte | SJT: Disc. 39 «Epiphany, 381»; NPNF: Disc. 40 el 6 de enero (contradice). Sásima: ninguna fuente abierta. |
| jerome | «Vulgata» → Evangelios 382–384 + AT desde el hebreo 390–407 | Se sostiene (nacimiento en parte) | *Handbook of the Vulgate*, cap. 10, pp. 167–168. Solo da «c. 347», no 342–347. |
| leo-the-great | Quitar nacimiento 400; sermones 3/4 en 442/443 | En parte | Vatican.va: nació en Tuscia, sin año; 29.IX.440–10.XI.461. Sermones: Oxford 442/443 contra Feltoe 443. |
| sophronius-of-jerusalem | Quitar *El prado espiritual* | Se sostiene | Brzozowska et al. (2017), p. 59: «the Spiritual Meadow, the work of John Moschus». |

## Los 56 registros

| Registro | Resultado del ledger | Qué pasó en esta sesión |
|---|---|---|
| `clement-of-rome` | `CHANGE` | **Aplicado** (control: se sostiene). Obra 75–110; cargo «según la tradición»; nota con fuente. |
| `didache` | `CHANGE` | **Aplicado** (control: se sostiene). Obra c. 50–150; nota «obra, no persona». Testigo: 50–150 y nota nueva. |
| `ignatius-of-antioch` | `QUALIFY` | **Calificado en el testigo:** 107 o 108 y nota «fecha tradicional, según Eusebio; la cronología se discute». La vida ya estaba así en `father-lives.ts`. |
| `papias-of-hierapolis` | `CHANGE` | **Aplicado en parte.** `born` 70 → vacío (sin testimonio); la fecha de la obra no cambia (el control no confirmó c. 100–150 ni «cerca de 140»). |
| `epistle-of-barnabas` | `CHANGE` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `shepherd-of-hermas` | `CHANGE` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `epistle-to-diognetus` | `CHANGE` | **Aplicado** (tanda 3; Encyclopedia.com: «middle or latter half of the 2nd century»; c. 130 viene solo de la introducción de ANF 1885). Obra c. 150–200. |
| `polycarp-of-smyrna` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `justin-martyr` | `CHANGE` | **Aplicado y suavizado.** *Apologías* c. 148–161 como rango envolvente, con la nota de que obras más antiguas dan 153–155 (el control no sostiene «WRONG»). Testigo: 148–161 y nota. |
| `melito-of-sardis` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `theophilus-of-antioch` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `irenaeus-of-lyon` | `CHANGE` | **No aplicado:** el control solo confirma el nacimiento en los años 130/140; 180–189 y c. 202 quedaron sin verificar. |
| `clement-of-alexandria` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `tertullian` | `CHANGE` | **Aplicado y corregido.** *Contra Marción* c. 207–212, no 207–213 (el 213 no se confirmó). Testigo: 207–212 y nota. |
| `hippolytus-of-rome` | `CHANGE` | **Aplicado** (tanda 2; *Catholic Encyclopedia*: «date of birth unknown»). `born` 170 → vacío. Las obras quedan. |
| `origen` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `cyprian-of-carthage` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `novatian` | `CHANGE` | **Aplicado** (tanda 2). `born` 200 → vacío (*Catholic Encyclopedia*: sin año de nacimiento). `died` 258 queda como marcador; sigue sin entrada en `father-lives.ts`. |
| `dionysius-of-alexandria` | `CHANGE` | **No aplicado:** la *Catholic Encyclopedia* da «about 190, or earlier» como estimación, así que 190 no es «sin respaldo» como dice el ledger. Discrepo del ledger. |
| `methodius-of-olympus` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `lactantius` | `CHANGE` | **Aplicado** (tanda 2; Schwarte: «end of 313 to the summer of 316»). *Sobre la muerte de los perseguidores* c. 314–316. |
| `eusebius-of-caesarea` | `QUALIFY` | **No aplicado:** *Historia* c. 300–325 se sostiene solo en el final (324/325, McGiffert); el inicio en c. 300 se discute. *Demostración* c. 315–322 **no se sostiene**: la única fuente abierta (Ferrar 1920) da 314–318. Discrepo del ledger. |
| `aphrahat` | `CHANGE` | **Aplicado** (tanda 2; *Catholic Encyclopedia*). `born` 270 → vacío; *Demostraciones* «337; 344; 345». |
| `hilary-of-poitiers` | `CHANGE` | **No aplicado:** 353–356 no se pudo verificar (BiblIndex no abrió); las fuentes sustitutas apuntan a c. 352 o «early 350s», y tampoco respaldan el 353–355 actual. Queda para revisar. |
| `athanasius-of-alexandria` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `ephrem-the-syrian` | `KEEP` | Sin cambios (`KEEP`). |
| `basil-of-caesarea` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `cyril-of-jerusalem` | `CHANGE` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `gregory-of-nazianzus` | `CHANGE` | **No aplicado:** el cambio de cargo (Sásima) no se verificó; las fechas de los *Discursos* 39/40 chocan con el encabezado de NPNF. |
| `gregory-of-nyssa` | `CHANGE` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `ambrose-of-milan` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `optatus-of-milevis` | `CHANGE` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `didymus-the-blind` | `KEEP` | Sin cambios (`KEEP`). |
| `epiphanius-of-salamis` | `QUALIFY` | **Aplicado en parte** (tanda 4; Osburn, SBL 2004, p. 8). *Panarion* 375–377; el resto del `QUALIFY` (fechas de vida) ya estaba en `father-lives.ts`. |
| `john-chrysostom` | `CHANGE` | **Aplicado** (tanda 2; *Catholic Encyclopedia*: «ordained Bishop of Constantinople… 398»). «Arzobispo» → «obispo de Constantinopla (398–404)». |
| `rufinus-of-aquileia` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `jerome` | `CHANGE` | **Aplicado** (control: se sostiene). «Vulgata» → «Traducciones latinas de la Biblia», 382–384; 390–407. |
| `augustine-of-hippo` | `CHANGE` | **Aplicado** (tanda 2; SEP «Augustine»). *Confesiones* c. 396–400 (O'Donnell da 397), *Trinidad* 399–419, *Ciudad de Dios* 412–426. |
| `john-cassian` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `cyril-of-alexandria` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `vincent-of-lerins` | `CHANGE` | **Aplicado** (tanda 2; Genadio, *De viris illustribus* 65). Cargo «monje y presbítero de Lérins». |
| `peter-chrysologus` | `CHANGE` | **Aplicado con conflicto a la vista** (tanda 2). `born` 380 → vacío: no hay fuente para 380, y la *Catholic Encyclopedia* da 406; la nota muestra las dos posturas. |
| `prosper-of-aquitaine` | `CHANGE` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `theodoret-of-cyrrhus` | `CHANGE` | **No aplicado:** *Historia religiosa* c. 440 no se pudo verificar (Rohrbacher no está en línea); *Eranistes* 447 ya estaba bien. |
| `leo-the-great` | `CHANGE` | **Aplicado en parte.** `born` 400 → vacío; los años de los sermones no cambian (Oxford y Feltoe discrepan). |
| `pseudo-dionysius` | `CHANGE` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `caesarius-of-arles` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `gregory-the-great` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `isidore-of-seville` | `CHANGE` | **Aplicado en parte** (tanda 3). *Oficios* 598–636 (Presbyters Project); *Historia de los godos* «c. 619/620; c. 624» (Kasperski; *Catholic Encyclopedia*). *Etimologías* sin cambio (no confirmado). |
| `sophronius-of-jerusalem` | `CHANGE` | **Aplicado** (control: se sostiene). Se quita *El prado espiritual* (es de Juan Mosco). |
| `maximus-the-confessor` | `QUALIFY` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `isaac-of-nineveh` | `CHANGE` | **Aplicado** (tanda 2; Syriaca y Brock 2024: solo floruit). `born` 613 → vacío. |
| `bede` | `KEEP` | Sin cambios (`KEEP`). |
| `andrew-of-crete` | `CHANGE` | Fechas de vida ya visibles con su estado en `father-lives.ts` (2026-10-25). **Obras, cargos y `born`/`died` crudos sin aplicar:** sin tiempo (tope semanal); fila no controlada. |
| `germanus-of-constantinople` | `CHANGE` | **No aplicado:** el rango 630–668 no se pudo verificar (la fuente citada no abrió; las referencias dan 634 o 610–41). |
| `john-of-damascus` | `CHANGE` | **No aplicado:** c. 655–c. 745 es la estimación de una autora (Kontouma); otras referencias dan 645–750 o 676–749. Las fechas de vida ya se muestran como inciertas en `father-lives.ts`. |

56 registros.

## Decisiones del agente

1. **Solo apliqué lo que el control respalda,** y con sus matices: Justino suavizado (envolvente 148–161, con el 153–155 de obras más antiguas al lado), Tertuliano 207–212 en vez de 207–213 (no coincido con el verificador, por tertullian.org), Papías y León solo el nacimiento. Ireneo y Gregorio Nacianceno no se aplicaron.
2. **`died` crudo como ancla de la línea de tiempo.** En obras y vidas sin fecha de muerte (Didaché, Papías…) `died` sigue con un número, porque el tipo `Father` exige `died: number` y tres líneas de tiempo (`get-general-timeline.ts`, `get-home-timeline.ts`, `father-timeline.ts`) lo usan para ubicar y para el dato «Murió». La nota del registro dice que es solo un marcador. Sacarlo es un cambio de modelo y de UI (ver «Para DECISIONS»).
3. **Nunca en silencio:** cada cambio agrega a la nota en inglés del registro la fuente y el valor anterior («Was …»). En los testigos, la nota visible en español dice el estado de la fecha.
4. **No toqué los resúmenes en prosa** (español e inglés), que pueden repetir fechas viejas: requieren leer los 56.

## Para DECISIONS (propuestas, no escritas)

- La línea de tiempo general y la de inicio muestran «Nació / Murió» desde `born`/`died` crudos, no desde `father-lives.ts`. Por eso Papías todavía muestra «Murió c. 130» en la línea general, aunque su página ya dice «c. 100–150 (la fecha de su obra)». Propuesta: que esos dos datos salgan de `father-lives.ts` cuando el registro tiene entrada, y que `died` pase a ser `number | null` para obras y vidas sin muerte conocida. Es trabajo de UI con capturas.
- Las fechas de obras (`keyWorks[].date`) son un texto sin idioma: no admiten «se discute» ni «inacabada». Hace falta un campo de estado o una nota por obra para los `QUALIFY` de obras (Isidoro, Andrés de Creta, Juan Damasceno, Isaac de Nínive).

## Para GOTCHAS

- `data/site/history.json` se escribe con `json.dumps(…, ensure_ascii=False, indent=1)` y **sin salto final**: así el diff queda solo de contenido. `fathers.ts` se regenera con `node data/scripts/convert-fathers.mjs` y después prettier.
- `died` de un registro `kind: "work"` es el año marcador de la línea de tiempo, no una muerte.

## Archivos

```
data/site/history.json
src/content/history/fathers.ts
src/content/pages/eucharist/doctrine.es.ts
e2e/doctrine-witnesses.spec.ts
e2e/father.spec.ts
docs/features/fathers-ledger-apply.md
```

## Commit commands

```
git add data/site/history.json src/content/history/fathers.ts src/content/pages/eucharist/doctrine.es.ts e2e/doctrine-witnesses.spec.ts e2e/father.spec.ts docs/features/fathers-ledger-apply.md && git commit -m "fix(history): apply the spot-checked fathers ledger rows"
```
