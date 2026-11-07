# AI block S-SRV, ronda 3 · Solo revisados en páginas de tradición, juez de fidelidad, párrafos largos (duplicado `doctrina-ai-ssrv`)

## State

- **Hecho:**
  - **Regla de servidor (decisión de Pedro, 2026-11-08):** solo los Padres se generan en vivo. Para las páginas de tradición se sirve solo una fila `reviewed`; si no hay fila, o es `generated`, responde `400 ai_not_simplifiable` en POST y 204 en el GET de solo-caché.
  - **Juez de fidelidad:** medido con 3 variantes de modelo y conectado detrás de `AI_SIMPLIFY_FIDELITY=on`, **apagado por defecto: ninguno llegó al listón**.
  - **Párrafos largos:** se parten en ≈ 160 palabras y se simplifican en paralelo. Atanasio *De incarnatione* 21 (638 palabras) pasa de `ai_timeout` a 11–15 s.
  - **Nota de diseño para la UI:** cómo sabe qué párrafos tienen versión revisada. No construí UI.
- **Verificación:** `npm run verify` (con `NEXT_PUBLIC_SIMPLIFIER=on`) exit 0, con las 4 advertencias de ESLint que ya existían; `check-simplify.mjs` ok 74 checks; `e2e/ai-simplify.spec.ts` 5/5 en chromium (puerto 3130). Archivos tocados = la lista de abajo; sin secretos.
- **Plata de la API en esta ronda:** **$0.334** de los $0.40 (ledger `tmp/ai-ssrv3/ledger.json`). Paré a propósito con $0.066 de margen.
- **Uso (semanal / sesión):**
  - Lecturas: 14:03 → 24 % / 3 %; 14:17 → 24 % / 6 %; 14:28 → 24 % / 8 %; 14:30 (final) → 25 % / 9 %.
  - Tope: 28 %.
- **En curso:** nada. **Siguiente:** las decisiones de «Needs Pedro»; después, el coordinador copia los archivos.
- **Cómo retomar:**
  - Tests: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-checks/check-simplify.mjs`.
  - Experimentos en `tmp/ai-ssrv3/`:
    - `fidelity-set.json`: el set del juez.
    - `eval-fidelity.mjs` y `judge.sh <modelo@esfuerzo> <salida> --go [--cap=µ$]`: corren el juez sobre el set.
    - `long.mjs --go --runs=n`: mide los párrafos largos.

## 1. Regla de servidor: solo revisados fuera de los Padres

- `generatesLive(address)` vive en `src/content/ai-simplify/cache.ts` y es verdadero solo para `kind: "father"`.
- `readSimplification(cacheKey, address)` devuelve la fila solo si se puede servir:
  - nunca si es `rejected`;
  - cualquier otra para un Padre;
  - solo `reviewed` para las demás.
- `simplifyParagraph`: si no hay fila servible y el párrafo no es de un Padre, responde `ai_not_simplifiable`. No se llama al guard ni al modelo, y no hay gasto. Los Padres funcionan como antes.
- **Error reutilizado:** `ai_not_simplifiable`, con el mensaje «Este párrafo no se puede simplificar.». No hace falta un código nuevo ni tocar `contracts.md`. Con el manifiesto de §4, el anillo ni se dibuja donde no hay revisado, así que el lector casi nunca ve ese mensaje.
- **`--approve` es la única vía a `reviewed`:** un test recorre `src/` y `tools/` y exige que solo dos archivos escriban `status: "reviewed"`:
  - `tools/ai-review-simplifications.mjs` (`--approve`);
  - el seed de prueba (`seed-fixtures.ts`), que se niega con un proveedor real y solo corre con el proveedor falso y el store en memoria (también con test).
- **Pregeneración:** `tools/ai-pregenerate-simplifications.mjs` ahora toma como «ya generada» cualquier fila guardada que no esté rechazada (`hasStoredSimplification`). Así una fila `generated` que espera revisión no se regenera en cada corrida.
- **Llamada del agente, a confirmar por Pedro:** la misma regla conservadora se aplica a las **páginas 02** (common, answers, connected) y al **glosario**. Son palabras del propio sitio sobre las tradiciones, y la evidencia es la misma:
  - luterana: «rechazan la transubstanciación» → «no hablan de cambiar el pan»;
  - bautista: «fruto de la vid» → «vino»;
  - 02 papado: «argumentan los textos» → «los católicos… discuten».

## 2. Juez de fidelidad: medido, no alcanza el listón

**Qué hace** (`src/features/simplify/fidelity.ts`):

- Una llamada con el original y los dos niveles.
- El juez primero lista cada diferencia candidata y después decide, para cada una, «same meaning» o «different meaning», escribiendo qué entendería un lector atento.
- Solo «different meaning» falla. Esa falla entra al loop de reparación existente y, si se repite, termina en `ai_simplify_failed`.
- Un veredicto ilegible falla cerrado (no deja pasar).

**El set de prueba** (`tmp/ai-ssrv3/fidelity-set.json`):

- **19 pares con un cambio de sentido conocido**, sacados de `ai-real-ssrv2.md` y de `../doctrina-ai-pregen/docs/features/pregen-review.md`:
  - Justino: «worship and adore» → «honor», afirmación → pregunta, propósito caído, condición caída, liberación de los demonios caída, culpa agregada;
  - Ignacio: «hold» → «teach», ítems de la lista caídos, conveniencia → causa, primera persona perdida, agente «God» agregado;
  - Didaché: «in the name of» → «Say the name of», «proud» agregado;
  - españoles: transubstanciación, fruto de la vid, negación del sacramento-signo, apelación al concilio, propiciatorio.
- **12 pares fieles escritos por mí.**

| Variante (mismo set) | Cambios atrapados | Falsas alarmas | Costo por chequeo | Latencia media / máx. |
|---|---|---|---|---|
| Haiku 5.5 @low, prompt de un paso (solo lista) | 19/19 | **11/12** | 300 µ$ | 3,2 s / 6,4 s |
| Haiku 5.5 @low, prompt final de dos pasos | 17/19 (89 %) | 5/12 (42 %) | 742 µ$ | 6,5 s / 9,4 s |
| Haiku 5.5 @medium, prompt final | 17/19 (89 %) | 7/12 (58 %) | 992 µ$ | 8,7 s / 13,0 s |
| **Sonnet 5.5 @low**, prompt final | **19/19 (100 %)** | 4/12 (33 %) | 6.332 µ$ | 4,8 s / 6,4 s |

- **Ninguno cumple el listón** (≥ 90 % atrapados con ≤ 15 % de falsas alarmas). Lo conecté detrás del switch y lo dejé **apagado por defecto**: no se envía un juez débil como si fuera una garantía.
- **Lo más cerca: Sonnet.** Atrapa todo, pero rechaza 1 de cada 3 simplificaciones buenas.
  - Dos de sus 4 alarmas son pérdidas reales que se me pasaron al escribir los pares «fieles»: G05 pierde «material» en «material offerings» y G08 cambia «judgment» por «trial». Corrigiendo esas etiquetas: 2/10 = 20 %, todavía arriba del 15 %.
  - Las otras dos son pedantes: «just» → «right», y «they» → «some people».
- **Haiku** marca hasta textos casi idénticos (G10 y G11: cambios de orden de palabras) y se le escapan la afirmación convertida en pregunta (S03) y la primera persona perdida (S11, en low).
- **Costo si se prende con Sonnet:** el juez corre una vez por intento que pasa los checks (1 a 2 veces). Cada simplificación nueva de un Padre pasaría de ≈ $0.0007 a **≈ $0.007–0.014**: ≈ 350–700 por 5 USD en vez de ≈ 7.000. Suma ≈ 5 s por intento.
- **Límite de la medición:** el prompt de dos pasos lo ajusté mirando este mismo set. No hay set de validación aparte, así que los números son optimistas.
- **Propuesta de contrato (para INT, no toqué `contracts.md` ni `models.ts`):** el juez usa el rol `judge`, que lee `AI_MODEL_JUDGE`, la misma variable que el juez del chat. Para usar Sonnet acá sin cambiar el juez del chat haría falta un rol nuevo, `fidelity`, con `AI_MODEL_FIDELITY`, en una versión nueva de los contratos.

## 3. Párrafos largos

- **Qué cambió** (`src/features/simplify/simplify.ts`):
  - Un párrafo de más de 160 palabras se parte en límites de oración, en partes parejas de ≈ 160 palabras (`chunkSentences`).
  - Cada parte se simplifica en paralelo, con sus propios checks y su reparación, y las salidas se concatenan en orden: la alineación oración por oración se mantiene.
  - Si una parte falla solo el gate de niveles después de su reparación, se acepta cuando el párrafo entero pasa el gate (no con el juez de fidelidad prendido). Cualquier otra falla de una parte hace fallar el párrafo.
- **Medido** (Haiku 5.5 @low, llamadas reales):

| Configuración | Atanasio *De incarnatione* 21 (638 palabras) | Justino *1 Apol.* 32 (632 palabras) |
|---|---|---|
| Antes: una sola llamada | `ai_timeout` 2 de 2 a los 25 s (reporte del coordinador) | 7 s en la ronda 1, con el prompt viejo |
| 3 partes de ≈ 200 palabras | 1/3 ok; 17,6–23,0 s | 1/3 ok; 8,7–13,8 s |
| 4 partes de ≈ 160 palabras + tolerancia del gate | 1/3 ok; 14,1–18,6 s | 1/3 ok; 12,9 s–**25 s (un timeout)** |
| **Lo mismo + pronombres arcaicos fuera del proxy de nombres** | **1/2 ok; 11,4–13,8 s** | **2/2 ok; 12,4–13,1 s** |

- **Costo:** ≈ $0.0035–0.0055 por párrafo largo (4 partes, casi todas con una reparación).
- Las fallas restantes son de los checks de siempre, no de tiempo: una parte con más entradas que oraciones, una cita bíblica larga, títulos como «Lord» o «Life».
- **Plazo:** dejé el de 25 s del servidor (ruta `maxDuration` 30 s) y no lo bajé a 20 s como el cliente. Lo que termina entre los 20 y los 25 s igual queda en caché, así que el segundo intento del lector es un hit. Con partes de 160 palabras todo terminó en ≤ 14 s en la última tanda. Recomendación para S-UI: que el cliente espere 25 s en párrafos de más de 160 palabras.

## 4. Nota de diseño: cómo sabe la UI qué párrafos de tradición tienen versión revisada

Pedido: anillo solo donde existe una simplificación. Para páginas de tradición, 02 y glosario eso es «hay fila `reviewed`»; para los Padres, «cualquier división simplificable» (como hoy).

- **Opción recomendada: un manifiesto generado por `--approve`.**
  - Al aprobar, la herramienta de revisión reescribe un archivo de datos del repo (por ejemplo `data/site/simplified-reviewed.json`) con `{ addressId: textSha256 }` de todas las filas `reviewed`.
  - La página, en build, dibuja el anillo solo si el id está y el hash del texto actual coincide. Si alguien edita el párrafo, el anillo desaparece hasta revisar de nuevo.
  - Costo: cero en runtime, las páginas siguen estáticas, sin pedidos extra. Cada tanda de aprobaciones necesita un commit y un deploy, cosa razonable para un paso humano y deliberado.
  - Trabajo: ≈ 30 líneas en la herramienta de revisión, un getter en `src/content` y el chequeo en los call sites. No lo construí.
- **Alternativa: un GET de solo-caché por párrafo al cargar la página.**
  - Una página de tradición tiene 10–20 párrafos: serían 10–20 pedidos con guard y lectura de Supabase por visita.
  - Los anillos aparecen tarde (salto de layout) y el costo crece con el tráfico. No la recomiendo.
- **Alternativa: un endpoint en lote por página.** Un pedido por página, pero es un contrato nuevo y sigue siendo trabajo en runtime para un dato que solo cambia cuando Pedro aprueba.

## Decisiones del agente (sin preguntar)

1. **La regla conservadora se extiende a 02 y glosario** (ver §1). Si Pedro no la confirma, es una línea en `generatesLive`.
2. **Se reutiliza `ai_not_simplifiable`** con su mensaje existente; no hay código nuevo.
3. **El juez queda apagado por defecto.** Además:
   - nunca corre con el proveedor falso (su respuesta de juez es la del chat);
   - un veredicto ilegible falla cerrado;
   - juzga los dos niveles en una sola llamada (una llamada por intento, no dos).
4. **Los dos pares «fieles» imperfectos (G05, G08) quedaron etiquetados como los escribí;** reporto los dos conteos.
5. **El proxy de nombres ya no exige pronombres** (He, Him, His, Thee, Thou, Thy, Thine, Who, Whom, Whose, Él, Su, Sus). Era el falso positivo principal del inglés arcaico, según la revisión de la pregeneración y mis corridas largas. Los títulos («Lord», «Divine») se siguen exigiendo. Si alguno de esos pronombres se pierde con cambio de sentido, ese es trabajo del juez o de la revisión, no del proxy.
6. **Partes de 160 palabras, tolerancia del gate por partes** (solo sin juez) y **plazo de 25 s:** razones en §3.
7. **El prompt del simplificador no cambió esta ronda**, así que `SIMPLIFY_PROMPT_VERSION` sigue en `simplify-2026-11-07.1`. Los checks sí cambiaron (pronombres), pero eso no invalida filas ya guardadas.
8. **No arreglé el divisor de oraciones que corta en «(art. VII)»** (lo encontró la revisión de la pregeneración): está en `src/lib/ai/sentences.ts`, fuera de mis archivos. Queda para INT.
9. **El e2e del glosario ahora prueba la resolución por diferencia:** «magisterio» responde 400 `ai_not_simplifiable` (resolvió) y un término inexistente responde 404.

## Needs Pedro

1. **¿Confirmás «solo revisados» también para 02 y glosario?** Es mi llamada, no la tuya todavía.
2. **Padres sin garantía.** Ningún juez llegó al listón. Opciones:
   - (a) seguir generando en vivo con la etiqueta «Generado por IA, sin revisar», sin juez, como hoy;
   - (b) prender el juez con Sonnet como filtro extra (`AI_SIMPLIFY_FIDELITY=on` + `AI_MODEL_JUDGE=claude-sonnet-5-5@low`, lo que también cambia el juez del chat; ver la propuesta de contrato). Atrapó 19/19, pero rechaza ≈ 1 de cada 3 buenas y cuesta ≈ 10× más;
   - (c) revisión humana también para los Padres: pregenerar las divisiones más leídas y aprobarlas.

   Recomiendo **(c) para las divisiones que la gente ve primero** (las 30 de la lista de pregeneración), y para el resto (a) con la etiqueta, o (b) si preferís menos texto servido a cambio de más costo y más errores.
3. **Plazo del cliente:** 20 s hoy contra 25 s del servidor; propongo 25 s para párrafos largos (S-UI).
4. **Manifiesto de revisados** (§4): ¿lo construimos así?

## Archivos (para el coordinador)

```
src/features/simplify/fidelity.ts            (nuevo)
src/features/simplify/simplify.ts
src/features/simplify/checks.ts
src/content/ai-simplify/cache.ts
tools/ai-pregenerate-simplifications.mjs
tools/ai-checks/check-simplify.mjs
e2e/ai-simplify.spec.ts
docs/research/ai/simplifier-design.md         (§6 párrafos largos, §8 regla y juez)
docs/features/ai-real-ssrv3.md               (nuevo)
```

Sin cambios esta ronda: `src/app/api/ai/simplify/route.ts` (la regla vive en la capa de caché y en `simplify.ts`), `tools/ai-review-simplifications.mjs` (ya era la vía de `--approve`), `src/lib/ai/contracts.ts`. `tmp/ai-ssrv3/` es descartable. Esto va encima de los archivos de la ronda 2 (`ai-real-ssrv2.md`).

## Commit commands (repo real, después de copiar los archivos)

```
cd ~/Desktop/dev/doctrina && git add src/features/simplify/fidelity.ts src/features/simplify/simplify.ts src/features/simplify/checks.ts src/content/ai-simplify/cache.ts tools/ai-pregenerate-simplifications.mjs tools/ai-checks/check-simplify.mjs e2e/ai-simplify.spec.ts && git commit -m "feat(ai): reviewed-only tradition texts, fidelity switch, long splits"
```

```
cd ~/Desktop/dev/doctrina && git add docs/research/ai/simplifier-design.md docs/features/ai-real-ssrv3.md && git commit -m "docs(ai): record simplifier round 3"
```

(El código va en un solo commit porque `simplify.ts` importa `fidelity.ts` y los tests cubren las tres piezas juntas.)
