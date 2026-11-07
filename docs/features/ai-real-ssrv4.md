# AI block S-SRV, ronda 4 · Páginas de tradición generadas con juez, Padres en vivo (clon `doctrina-ai-ssrv4`)

## State

- **Fase «solo Más claro» en tradición, 02 y glosario: HECHA** (Pedro lo aprobó, 2026-11-08).
  - **Piloto 4:** 10 de 10 pasaron al juez (8 al primer intento), $0.054.
  - **Tanda grande:** **98 de 105 párrafos guardados y servibles** (68 al primer intento, 30 después de reparar, 7 sin poder simplificarse), **$0.576**.
  - El manifiesto lista los 98 y la página de muestra de 10 está lista.
  - **El glosario no se corrió:** su getter no carga en las herramientas de Node (llamada 2 de la ronda 1). Queda para cuando se resuelva ese import.
- **Plata de la ronda 4, con esta fase:** **$1.085** de $2.50 (pilotos 1–3 $0.455, piloto 4 $0.054, tanda $0.576).
- **Verificación:** `npm run verify` (con `NEXT_PUBLIC_SIMPLIFIER=on`) exit 0, con las 4 advertencias de siempre; `check-simplify.mjs` ok 99 checks. E2E `ai-simplify` + `simplifier-real` + `simplifier`: 38 de 39.
  - **Falla 1:** `simplifier.spec.ts` › «switching the level cross-fades the text…», 2 de 2 veces.
  - **No la causa mi código, aunque no lo pude demostrar contra el repo real.** La API devuelve para esos párrafos el mismo `clear` y `very` que antes (lo comprobé con el servidor falso), más `levels`, que ningún componente de la UI lee.
  - Ese test y la UI del simplificador cambiaron en el repo real después de mi clon (llegaron con el refresco de la ronda 5): `storeSimplifyOn` y un anillo en cada párrafo.
  - **Para S-UI / el coordinador:** correrlo en el repo real.
- **Uso:** 17:55 → 31 %; 18:45 → 34 %; 19:05 → 34% semanal. Tope 45 %.

## Fase «solo Más claro»

**Qué cambió en el código:**

- **Pipeline** (`--stage tradition|common|sections`):
  - genera y juzga solo «Más claro» (la línea `only "clear" is used…` en el mensaje; el juez recibe solo «clear»);
  - guarda `very = clear` y `checks.levels = ["clear"]`, sin migración;
  - `--redo` rehace párrafos aunque ya tengan una fila servible.
- **Checks:** opción `onlyClear`; el gate de niveles se aplica solo a «Más claro».
- **Citas:** **todo texto entre comillas de una salida tiene que estar dentro de una cita del original.** Antes alcanzaba con que las palabras existieran en el original, y el modelo ponía entre comillas términos como «verdadero cuerpo».
- **Términos:** la lista de términos va sin comillas y con la instrucción de no ponerlos entre comillas.
- `SIMPLIFY_PROMPT_VERSION = simplify-2026-11-07.4` y `FIDELITY_PROMPT_VERSION = fidelity-2026-11-07.2` (el juez acepta uno o dos niveles).
- **Contrato** (implementado en `src/lib/ai/contracts.ts`, solo el tipo; el texto de `contracts.md` lo integra el coordinador): `SimplifyResponse.levels?: ["clear"]`.
  - Presente en todo tipo que no sea Padre (tradición, 02, glosario), aunque la fila vieja tenga dos niveles.
  - Ausente para los Padres, que siguen con «Más claro – Muy simple».
  - `very` sigue en la respuesta tal como está guardado, para no romper la UI actual. **S-ENTRY tiene que mostrar un solo nivel sin selector cuando venga `levels`, y poner los anillos según el manifiesto** (`isSimplificationServed`).

**Resultados de la tanda grande** (Haiku 5.5 @low genera, juez Sonnet 5.5 @low por Batch, hasta 3 rondas):

| Etapa | Párrafos | Al primer intento | Después de reparar | No se pudieron | Costo |
|---|---|---|---|---|---|
| Tradición (definición + 3 afirmaciones × 20 páginas) | 77 | 47 | 24 | 6 | $0.440 |
| 02 «Lo que todas comparten» | 4 | 3 | 1 | 0 | $0.021 |
| Resto de 02 (respuestas y conexiones) | 24 | 18 | 5 | 1 | $0.115 |
| **Total** | **105** | **68 (65 %)** | **30** | **7** | **$0.576** |

**Los 7 que no se pudieron simplificar fielmente** (quedan sin anillo):

| Párrafo | Por qué |
|---|---|
| eucaristía católica QE-3 | El juez: «memorial de la Pascua» → «recuerda la Pascua». |
| bautismo ortodoxo definición | El juez: «muere a la vida carnal del pecado» reformulado. En el piloto 4 había pasado: es varianza. |
| sola-scriptura ortodoxa QE-3 | El juez: «entiende la doctrina» → «incluye la enseñanza». |
| bautismo luterano (02 respuestas) | El juez: «obra el perdón» → «se obtiene el perdón» (quién obra). |
| eucaristía ortodoxa QE-1 | Gate de niveles: «Más claro» no queda 2 grados más fácil. |
| papado luterano QE-3 | Gate de niveles: ídem. |
| papado reformado QE-1 | La cita del texto fuente tiene un hueco raro («Jesu-Cristo   la casa»), que no se puede copiar literal. |

**El juez es estricto pero no perfecto.** Leí la muestra de 10 y encontré tres desplazamientos sutiles que dejó pasar:

- papado católico: «por la **asistencia** del Espíritu Santo» → «la **ayuda**» («asistencia» es el término técnico de la infalibilidad);
- bautismo bautista QE-2: «**Simboliza** su fe» → «**muestra** la fe» (para los bautistas, que simbolice es central);
- eucaristía luterana QE-3+4: «se **distribuyen** con el pan y el vino» → «**llegan** junto con el pan y el vino».

Para eso es la muestra de Pedro.

**Para Pedro (diez minutos):**

1. Abrí `tmp/ai-review/muestra.html` en el clon (o regenerala con el comando de abajo): 10 párrafos, 2 por tradición, original | «Más claro», el veredicto del juez y los comandos.
2. Para los tres que marqué arriba (papado católico definición, bautismo bautista QE-2, eucaristía luterana QE-3+4): si te parece que cambian el sentido, `--reject <id>`. La pipeline los rehace en la próxima corrida.
3. Después de aprobar o rechazar: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-write-simplified-manifest.mjs` para actualizar el manifiesto.

- **Rondas 4 y 5, antes de esta fase:**
- **Hecho:**
  - **Regla de servicio:** se marca «controlado por IA» sin migración.
  - **Rol `fidelity`:** juez Sonnet propio, ya no comparte modelo con el juez del chat.
  - **Pipeline de pregeneración:** Haiku genera, después los checks, después el juez Sonnet por Batch, y hasta 2 reparaciones con los problemas que encontró el juez.
  - **Página de muestra** `--sample`, **manifiesto** y accesor.
  - **Corrida real de punta a punta**, verify y e2e.
- **Corrida grande NO hecha, por la regla de Pedro.** En el **piloto 3** (los mismos 10 párrafos, 2 por tradición, con protección de términos) **ningún brazo llegó al 60 %**: Haiku 3/10 (30 %), Sonnet 4/10 (40 %). Paré sin gastar el resto. Antes, el piloto 2 había dado 2 de 6 (33 %).
- **Hallazgo principal:** en los dos brazos **≈ 80 % de los cambios de sentido que marca el juez están en «Muy simple»** (Haiku 9 de 11, Sonnet 10 de 12); «Más claro» casi siempre pasa. Propuesta: en las páginas de tradición, ofrecer **solo «Más claro»** (ver «Qué ofrecer en las páginas de tradición»).
- **Plata de la API:** **$0.455** de $2.50:
  - pilotos 1 y 2: $0.111;
  - piloto 3: Haiku $0.073 + Sonnet $0.270;
  - un Padre en vivo: ≈ $0.001.
- **Verificación:** `npm run verify` (con `NEXT_PUBLIC_SIMPLIFIER=on`) exit 0, con las 4 advertencias de ESLint que ya existían; `check-simplify.mjs` ok 87 checks; `e2e/ai-simplify.spec.ts` 5/5 (puerto 3135); la corrida real de punta a punta, más abajo. Sin secretos en archivos ni salidas.
- **Uso (semanal / sesión):** 15:38 → 26 % / 16 %; 15:44 → 26 % / 19 %; 16:19 → 28 % / 27 %; 16:45 → 28 % / 31 %; 17:02 → 29 % / 36 %. Tope 35 %.

## Piloto 3: protección de términos, Haiku contra Sonnet

**Qué cambió:**

- A cada párrafo se le pasa la lista de sus términos doctrinales: nombres del glosario más una lista doctrinal en español en `tools/ai-pregenerate-simplifications.mjs` («el cuerpo y la sangre», «instituido», «hacer presente», «sustancia», «fruto de la vid», «sucesión»…). El mensaje al modelo dice «doctrinal terms to keep exactly, with their articles and qualifiers».
- El gate de niveles no cuenta los pares de palabras que contienen esos términos, y para el grado de lectura cada término vale como una palabra corta (`levelSeparation(…, terms)`).
- `SIMPLIFY_PROMPT_VERSION = simplify-2026-11-07.3`.

**Los 10 párrafos:**

- católica: eucaristía definición y QE-2;
- ortodoxa: bautismo definición y papado QE-2;
- luterana: eucaristía definición y sola-scriptura QE-2;
- reformada: bautismo QE-2 y sola-scriptura QE-1;
- bautista: eucaristía definición y papado definición.

| Brazo | Pasaron al juez | 1.ª ronda | Después de reparar | Costo | Costo por párrafo |
|---|---|---|---|---|---|
| A · Haiku 5.5 @low genera | **3/10 (30 %)** | 1 | 2 | $0.073 | ≈ $0.007 |
| B · Sonnet 5.5 @low genera | **4/10 (40 %)**, con 2 rondas: el tope cortó la tercera | 2 | 2 | $0.270 | ≈ $0.027 |

- **Dónde caen los cambios de sentido:**
  - Haiku: 9 en «Muy simple», 2 en «Más claro»;
  - Sonnet: 10 en «Muy simple», 2 en «Más claro».
  - Tipos: afirmación cambiada, término reemplazado, atribución, propósito, algo quitado.
- **Razones típicas del juez** (las leí y son correctas):
  - «toda la sustancia del vino en la de su sangre» → «se vuelve su sangre» (pierde «toda»);
  - «Para las confesiones luteranas» → «Los luteranos creen» (cambia quién habla);
  - «presenta el bautismo como requisito previo» → «Sin bautismo no se llega a la Cena» (más fuerte);
  - «en el nombre de» → «con el nombre de»;
  - «se recibe a Cristo» → «los fieles reciben a Cristo» (restringe);
  - «Para el Catecismo extenso de Filareto» → «Filareto escribió un Catecismo…» (agrega un dato).
- **El resto de las fallas son de los controles:**
  - el gate de niveles en párrafos ya cortos (bautismo reformado QE-2, sola-scriptura luterana QE-2);
  - una cita larga de Westminster que Sonnet acortó (reformada QE-1).
- **Los brazos aciertan en párrafos distintos.** Juntos (Haiku primero y Sonnet para los que fallan) serían 6 distintos de 10. No lo probé como brazo, así que no cuenta para la regla.
- **Sonnet no sería viable ni pasando:** ≈ $0.027–0.04 por párrafo × 77 ≈ $2.1–3.0 solo para las páginas de tradición, más que lo que queda del presupuesto.
- **Las filas de Sonnet no se pueden servir hoy.** La clave de caché incluye el modelo del simplificador (`src/lib/ai/cache-keys.ts`) y el endpoint usa Haiku, así que nunca las encuentra; el manifiesto tampoco las lista. Para servir filas pregeneradas con otro modelo, la clave de los tipos pregenerados no debería depender del modelo en vivo. Es una propuesta de contrato: no la toqué.

## Qué ofrecer en las páginas de tradición (propuesta, decide Pedro)

1. **Recomendado: solo «Más claro» en tradición, 02 y glosario,** generado y controlado por el juez. «Muy simple» queda para los Padres, en vivo.
   - Evidencia: el juez marcó «Más claro» en solo 2 de 11–12 cambios por brazo.
   - Antes de una corrida grande hace falta un piloto 4 sobre los mismos 10 (pipeline y gate sobre «clear» solamente): ≈ $0.04 con Haiku. No lo corrí: la regla decía parar.
   - En la UI, el selector «Más claro – Muy simple» mostraría un solo nivel en esas páginas: es trabajo de S-UI y S-ENTRY.
2. **Sin simplificador en las páginas de tradición:** se mantiene para los Padres y, si pasa un piloto, para el glosario.
3. **Lo que ya existe:** 3 párrafos controlados con los dos niveles (bautista papado definición, luterana sola-scriptura QE-2, reformada sola-scriptura QE-1). Se pueden servir hoy y están en el manifiesto y en la página de muestra.
- **Cómo retomar:** los informes por párrafo de los pilotos están en `tmp/ai-pregen/report-tradition-*.json`. Comandos más abajo.

## Resultado de los pilotos (páginas de tradición)

| | Piloto 1 (prompt `simplify-2026-11-07.1`) | Piloto 2 (prompt corregido `-07.2`) |
|---|---|---|
| Párrafos | 3 (eucaristía católica: definición, QE-1, QE-2) | 6 (los 4 católicos de eucaristía + luterana definición y QE-1) |
| Pasaron al primer intento | 0 | 1 |
| Pasaron después de reparar | 0 | 1 (en el intento 2) |
| No se pudieron simplificar fielmente | 3 | 4 |
| Costo | $0.035 | $0.076 (≈ $0.0126 por párrafo) |
| Tiempo de cada Batch del juez | 2–6 min | ≈ 6 min |

**Qué dice el juez** (leí todas sus razones y me parecen correctas):

- «Muy simple» cambia términos doctrinales:
  - «toda la sustancia del pan se convierte» → «el pan cambia por dentro»;
  - «memorial de la Pascua» → «recuerda la Pascua»;
  - «sacrificio verdadero y propio» → «sacrificio de verdad»;
  - «el sacrificio del cuerpo y la sangre» → «un sacrificio con el cuerpo y la sangre»;
  - «instituido» → «empezó».
- Cambia causa por tiempo: «Por la consagración» → «Tras» o «Durante la consagración».
- Cambia lo que se da: «Cristo dio [el cuerpo y la sangre]» → «entregó ese pan y ese vino».
- Agrega agentes: «Cristo / Jesús la estableció».
- Cuando el modelo sí conserva los términos, falla el gate de niveles de la ronda 2: «Muy simple» copia 56–65 % de los pares de palabras contra el tope de 55 %. **Las dos exigencias chocan en textos de catecismo:** el gate empuja a reformular justo las palabras que el juez exige conservar.
- El prompt corregido (lista explícita de palabras doctrinales, «el sacrificio no es un sacrificio», «sin agentes nuevos», conservar «para» y «por eso») mejoró algo (0/3 → 2/6), pero Haiku sigue cambiando términos en «Muy simple».
- El juez tampoco es perfecto: aprobó el luterano QE-1 aunque «confiesa» pasa a «afirma/dice» y «Muy simple» pierde «verdadero» en «el verdadero cuerpo» (la oración siguiente dice «Están de verdad»).
- Sesgo de la muestra: el piloto es el principio de la lista, o sea catecismo católico de la Eucaristía, de lo más técnico del sitio. Otras páginas probablemente pasen más, pero no lo medí.

## Lo que se construyó

- **Marca «controlado por IA» sin migración:**
  - `status` sigue en `generated` y `checks.fidelity = { model, promptVersion, passed: true, at, issues: [], rounds, batches }`.
  - `reviewed` sigue siendo solo humano (`--approve`; test).
  - Un test exige que únicamente `tools/ai-pregenerate-simplifications.mjs` escriba `checks.fidelity.passed: true`.
  - El booleano del juez en vivo se renombró a `checks.meaning` para que no se confunda con ese objeto.
- **Regla de servicio** (`isServable` en `src/content/ai-simplify/cache.ts`), igual en POST y en GET de solo-caché:
  - Padres: como antes (en vivo, «Generado por IA», sin juez).
  - Tradición, 02 y glosario: se sirve solo si la fila es `reviewed`, o `generated` con `checks.fidelity.passed === true`, y además su `text_sha256` coincide con el texto actual. Nunca se genera en vivo.
  - El estado de la respuesta sigue siendo `generated` (pie «Generado por IA»).
- **Rol `fidelity`:** `AI_MODEL_FIDELITY`, por defecto `claude-sonnet-5-5@low` (`src/lib/ai/models.ts`, `.env.example`). Para que compile hubo que agregar `"fidelity"` al tipo `AiRole` (`src/lib/ai/provider.ts`, una línea) y su respuesta falsa (`src/lib/ai/fake-provider.ts`, una línea): dos archivos fuera de la lista, imprescindibles para el rol.
- **Pipeline** `tools/ai-pregenerate-simplifications.mjs --stage tradition|common|sections [--limit n] [--max-usd x] --run`:
  - generación en tiempo real con Haiku (párrafo entero, con los checks y su reparación);
  - juez Sonnet por Batch (−50 %);
  - si falla, otra ronda con los problemas del juez y la respuesta anterior, hasta 3 rondas;
  - se guarda solo lo que pasa, y lo que nunca pasa queda listado como «could not be simplified faithfully»;
  - estimado antes de cada ronda, tope de gasto, informe JSON por párrafo.
  - Los Padres salieron de la lista (se generan en vivo). La etapa `sections` cubre 02 answers y connected.
  - El glosario no está: su getter no carga en las herramientas de Node (llamada 2 de la ronda 1).
- **Muestra para Pedro:** `tools/ai-review-simplifications.mjs --sample 10` escribe `tmp/ai-review/muestra.html`, en español:
  - 2 párrafos por tradición cuando se puede;
  - original | Más claro | Muy simple;
  - el veredicto del juez;
  - los comandos exactos `--approve` y `--reject`.
  - `--reject` deja la fila `rejected`: no se sirve y la pipeline la vuelve a generar. Hoy la página tiene 2 párrafos, los únicos que pasaron.
- **Manifiesto:** `tools/ai-write-simplified-manifest.mjs` escribe `src/content/simplified-manifest.ts` (id → hash de cada fila servible). El accesor es `isSimplificationServed(address)` en `src/content/ai-simplify/served.ts`: Padres siempre; el resto, solo si está en el manifiesto y el hash coincide con el texto actual. Hoy lista 2 párrafos. No construí UI: el cableado de los anillos es de S-ENTRY.
- **Corrida real de punta a punta** (`AI_PROVIDER=anthropic AI_STORE=supabase`, presupuesto alto solo en ese proceso):
  - luterana QE-1, controlada por IA: 200 `generated`, `cached: true`;
  - católica definición, sin fila controlada: 400 `ai_not_simplifiable`;
  - 02 papado common: 400 `ai_not_simplifiable`;
  - Didaché 11 (Padre): se generó en vivo y el segundo pedido salió de caché.

## Propuesta de contrato (para el coordinador; `contracts.md` no se tocó)

```
AiRole: "plan" | "answer" | "simplify" | "judge" | "fidelity"
models: fidelity → env AI_MODEL_FIDELITY, default claude-sonnet-5-5@low (precio ya existe)
ai_simplifications.checks.fidelity: { model, promptVersion, passed: true, at, issues: [], rounds, batches } — lo escribe solo la pregeneración
regla de servicio (no-Padres): status = reviewed, o status = generated ∧ checks.fidelity.passed = true; siempre text_sha256 = hash del texto actual
SIMPLIFY_PROMPT_VERSION = simplify-2026-11-07.3
clave de caché de los tipos pregenerados: que no dependa del modelo en vivo (hoy usa modelFor("simplify")), o las filas de otro modelo no se sirven
```

## Decisiones del agente (sin preguntar)

1. **Prompt corregido y versión subida** a `simplify-2026-11-07.2` y después a `-07.3` (línea de términos); el coordinador lo autorizó.
2. **Generación en tiempo real y juez por Batch:** Haiku es barato y rápido, y Sonnet por Batch cuesta la mitad.
3. **El hash del texto también se exige a las filas `reviewed`,** no solo a las controladas por IA (una revisión vieja no vale para un texto editado).
4. **Paré la corrida grande** por la regla del 50 % (piloto 2) y por la del 60 % (piloto 3).
5. **La lista doctrinal de términos es mía** (en la herramienta); amplía los nombres del glosario. Si es muy larga, el gate se vuelve laxo; si es muy corta, el modelo cambia términos.

## Needs Pedro

1. **Elegir qué ofrecen las páginas de tradición** (sección «Qué ofrecer…»). Recomiendo **solo «Más claro»**, con un piloto 4 de ≈ $0.04 antes de la corrida grande.
2. **Si querés ver lo que hay:** la muestra (`tmp/ai-review/muestra.html` en el clon) tiene los 3 párrafos controlados. Son 3, no 10, porque no se corrió la tanda grande.
3. **Cambio de contrato si alguna vez se pregenera con Sonnet:** la clave de caché no debe depender del modelo en vivo.

## Comandos

```
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-pregenerate-simplifications.mjs --stage tradition
AI_PROVIDER=anthropic node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-pregenerate-simplifications.mjs --stage tradition --max-usd 1.20 --run
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-review-simplifications.mjs --sample 10
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-write-simplified-manifest.mjs
```

El primero es un dry run gratis: lista y estima. El segundo es la corrida real.

## Archivos editados fuera de mi lista original

- `src/lib/ai/provider.ts`: una línea, `"fidelity"` en el tipo `AiRole`. Sin eso el rol no compila.
- `src/lib/ai/fake-provider.ts`: una línea, la respuesta falsa del rol `fidelity` (`{ changes: [] }`), porque el mapa de respuestas es `Record<AiRole, …>`.
- `src/lib/ai/contracts.ts`: solo `SIMPLIFY_PROMPT_VERSION`, que pasó de `-07.1` a `-07.3`. El coordinador lo autorizó después del piloto 2.
- `src/features/simplify/prompt.ts`: el prompt corregido y la línea de términos del mensaje. Está dentro de `src/features/simplify/*`; lo aclaro porque cambia la versión.

## Archivos (para el coordinador)

```
src/features/simplify/fidelity.ts
src/features/simplify/simplify.ts
src/features/simplify/checks.ts
src/features/simplify/prompt.ts
src/content/ai-simplify/cache.ts
src/content/ai-simplify/served.ts              (nuevo)
src/content/simplified-manifest.ts             (generado)
src/lib/ai/models.ts
src/lib/ai/provider.ts                         (fuera de la lista: una línea, AiRole)
src/lib/ai/fake-provider.ts                    (fuera de la lista: una línea, respuesta falsa del rol)
src/lib/ai/contracts.ts                        (solo SIMPLIFY_PROMPT_VERSION)
tools/ai-pregenerate-simplifications.mjs
tools/ai-review-simplifications.mjs
tools/ai-write-simplified-manifest.mjs         (nuevo)
tools/ai-checks/check-simplify.mjs
.env.example
docs/features/ai-real-ssrv4.md                 (nuevo)
```

## Commit commands (repo real, después de copiar los archivos)

```
cd ~/Desktop/dev/doctrina && git add src/features/simplify/fidelity.ts src/features/simplify/simplify.ts src/features/simplify/checks.ts src/features/simplify/prompt.ts src/content/ai-simplify/cache.ts src/content/ai-simplify/served.ts src/content/simplified-manifest.ts src/lib/ai/models.ts src/lib/ai/provider.ts src/lib/ai/fake-provider.ts src/lib/ai/contracts.ts tools/ai-pregenerate-simplifications.mjs tools/ai-review-simplifications.mjs tools/ai-write-simplified-manifest.mjs tools/ai-checks/check-simplify.mjs .env.example && git commit -m "feat(ai): pregenerate tradition texts behind a sonnet fidelity judge"
```

```
cd ~/Desktop/dev/doctrina && git add docs/features/ai-real-ssrv4.md && git commit -m "docs(ai): record simplifier round 4 pilots"
```
