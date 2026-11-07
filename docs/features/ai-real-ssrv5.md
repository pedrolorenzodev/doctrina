# AI block S-SRV, ronda 5 · El simplificador de los Padres acierta al primer pedido (clon `doctrina-ai-ssrv4`)

## State

- **Hecho:** 12 párrafos de Padres × 5 pedidos cada uno.
  - Antes: **39 de 60 salían al primer pedido (65 %)**, y Justino *1 Apol.* 66 fallaba 5 de 5.
  - Ahora: **58 de 60 (97 %)**, y Justino 66 sale 4 de 5.
  - p95 de latencia: 17,5 s antes, 15,5 s ahora. Costo: $0.0016 por pedido antes, $0.0020 ahora.
- **Arreglos:**
  - un bug de Unicode en los checks (la causa de Justino 66);
  - dos generaciones en paralelo por ronda;
  - realineado cuando el modelo devuelve más entradas que oraciones;
  - dos falsos positivos de checks;
  - un margen chico del gate de niveles, solo como última salida.
  - Ningún invariante se aflojó: afirmaciones, números, nombres, citas literales, nada agregado.
- **Verificación:** `npm run verify` (con `NEXT_PUBLIC_SIMPLIFIER=on`) exit 0, con las 4 advertencias de ESLint que ya existían; `check-simplify.mjs` ok 94 checks; `e2e/ai-simplify.spec.ts` + `e2e/simplifier-real.spec.ts` 29/29 en chromium (puerto 3135). Sin secretos.
- **Plata de la API en esta ronda:** **$0.487** de $1.00 (4 tandas de 60 pedidos; ledger `tmp/ai-ssrv5/ledger.json`).
- **Incidente (mío), resuelto:**
  - Al refrescar el clon desde el repo real, un `rsync` con exclusiones mal pasadas pisó mis archivos de `src` de la ronda 4, que todavía no están integrados en el repo real.
  - Los reapliqué desde los parches de esta sesión sobre la misma base. Pasan los 87 checks de entonces, que cubren todo lo de la ronda 4.
  - El manifiesto regenerado desde el store salió idéntico byte a byte.
  - Las herramientas (`tools/`) no se tocaron.
- **Uso (semanal / sesión):** 17:23 → 30 % / 42 %; 17:26 → 30 % / 43 %; 17:33 → 31 % / 46 %; 17:37 → 31 % / 46 %. Tope 35 %.
- **Cómo retomar:** `tmp/ai-ssrv5/reliability.mjs <salida.json> [--runs=5] [--only=id,id] --go`, con `AI_PROVIDER=anthropic AI_STORE=memory` y `--env-file=.env.local`.

## Qué fallaba (evidencia)

**`ai_requests` del servidor real** (prompt `simplify-2026-11-07.1`, 33 filas del simplificador):

- 16 `ai_simplify_failed` y 2 `ai_timeout`.
- **11 de los 16 son Justino 66**, siempre por `names` y `scripts` sobre «Εὐχαριστία»: el check la daba por faltante **y** por agregada a la vez.

**Causa de Justino 66:**

- En el texto de Justino 66 la palabra usa `U+1F77` (ί con oxia); el modelo la devuelve en NFC (`U+03AF`).
- Es la misma letra canónicamente, pero `names` y `scripts` comparaban sin normalizar. **No era el modelo ni las citas: era el check.**

**Las otras fallas** (12 párrafos × 5, con el código de este clon antes de los arreglos):

| Causa | Fallos de 60 | Dónde |
|---|---|---|
| Unicode del griego (`names` + `scripts`) | 5 | Justino 66 |
| Gate de niveles («Más claro» o «Muy simple» no bastante distintos), casi siempre por pocos puntos | 12 | Ignacio 8.1, Didaché 7, 9, 10, Justino 6, Atanasio 21, Didaché 11 |
| `shape`: más entradas que oraciones (el modelo parte una oración en dos; en las oraciones litúrgicas de la Didaché, varias) | 2 | Didaché 7, Atanasio 21 |
| `names`, falsos positivos: «O» vocativo («O our Father»), títulos | 3 | Ignacio 6.2, Atanasio 21 |
| `claims`, falso positivo: «we believe» cuando el original dice «and do believe» | 2 | Didaché 11, Justino 10 |
| `ai_timeout` (25 s) | 2 | Atanasio 21 |

## Qué cambió

1. **NFC antes de los checks.** El original y las dos salidas se normalizan a NFC antes de controlar. Es la misma letra, no se afloja nada.
2. **(a) Dos candidatos en paralelo por ronda.**
   - Ronda 1: dos generaciones nuevas.
   - Ronda 2, si ninguna pasó: la reparación de la mejor (con sus fallas y su respuesta) y otra generación nueva, en paralelo.
   - Gana el primer candidato que pasa todos los checks.
   - Se descartó (b), una tercera ronda: subiría el p95 por encima de 20 s.
   - La reserva del guard pasa a `ESTIMATE_MICROS.simplify × 2 × partes` y la liquidación usa el costo real de todas las llamadas.
3. **Realineado de entradas de más.** Si un nivel trae más entradas que oraciones (hasta el triple), se agrupan entradas contiguas con programación dinámica, eligiendo la partición que más se parece oración por oración al original. Después se corren todos los checks igual.
4. **Falsos positivos:**
   - «O» vocativo fuera del proxy de nombres;
   - un juicio del léxico («we believe») no cuenta como agregado si todas sus palabras ya están en la oración original.
5. **Margen del gate de niveles, solo como última salida.**
   - Si las dos rondas fallaron *únicamente* por el gate de niveles, se acepta el mejor candidato que pase el gate con margen (`SEPARATION_WITH_MARGIN`): «Más claro» con hasta 78 % de pares copiados, «Muy simple» con hasta 65 % y hasta 75 % respecto de «Más claro», grado 1 y 3 más fácil.
   - Queda anotado en `checks.notes` («levels: passed with the margin»).
   - Afirmaciones, números, nombres, citas, largo, idioma y nada agregado siguen siendo estrictos.
6. **Motivo registrado:**
   - `ai_requests.checks.failedChecks`: los nombres de los checks que fallaron.
   - Una línea en el log del servidor (`[ai] simplify ai_simplify_failed: levels,shape`), sin texto.
   - El mensaje «No se pudo simplificar este párrafo sin cambiar su sentido. El original está arriba.» queda solo para cuando fallaron todas las rondas.
7. **Plazo del cliente: 20 s → 25 s** (`src/components/simplifier/use-simplification.ts` y su test en `e2e/simplifier-real.spec.ts`). Antes el servidor podía terminar bien entre los 20 y los 25 s y el lector ya veía el error. En las tandas de 60 pedidos del medio hubo un pedido de 25 s cada vez (Atanasio). En la última el máximo fue 16,7 s.

## Primer pedido, antes y después (5 pedidos por párrafo, Haiku 5.5 @low)

| Párrafo | Palabras | Antes | Después |
|---|---|---|---|
| Ignacio *Smyrn.* 6.2 | 93 | 4/5 | 5/5 |
| Ignacio *Smyrn.* 7.1 | 28 | 5/5 | 5/5 |
| Ignacio *Smyrn.* 8.1 | 72 | 3/5 | 4/5 |
| Didaché 7 | 119 | 2/5 | 5/5 |
| Didaché 9 | 171 | 4/5 | 5/5 |
| Didaché 10 | 214 | 3/5 | 5/5 |
| Justino *1 Apol.* 6 | 108 | 4/5 | 5/5 |
| **Justino *1 Apol.* 66** | 254 | **0/5** | **4/5** |
| Justino *1 Apol.* 67 | 341 | 5/5 | 5/5 |
| Atanasio *De inc.* 21 | 638 | 1/5 | 5/5 |
| Didaché 11 | 330 | 3/5 | 5/5 |
| Justino *1 Apol.* 10 | 305 | 5/5 | 5/5 |
| **Total** | | **39/60 (65 %)** | **58/60 (97 %)** |
| Latencia p50 / p95 | | 7,3 s / 17,5 s | 6,7 s / 15,5 s |
| Costo por pedido | | ≈ $0.0016 | ≈ $0.0020 |

- **Las dos fallas de la última tanda:**
  - Ignacio 8.1: «Muy simple» repite el 78 % de los pares de «Más claro», fuera incluso del margen.
  - Justino 66: un «Muy simple» sin «Eucharist».
  - Ninguno de los dos es un párrafo imposible; son fallos de muestreo, ≈ 1 de 5.
- **Tandas intermedias** (para no esconder la varianza): con solo la normalización y los dos candidatos, 52/60. Con el realineado de una entrada y el margen, otra vez 52/60, porque la Didaché 9 cayó a 1/5 por varias entradas de más y el «O». La versión final las cubre.
- **Qué no se puede hacer todavía:** ningún párrafo de los 12 quedó por debajo de 4/5. Con 5 pedidos por párrafo, 4/5 no distingue un 80 % de un 95 %: el ≥ 90 % por párrafo no está demostrado para Ignacio 8.1 ni Justino 66, solo el 97 % global.

## Archivos (para el coordinador)

Los de la ronda 4 siguen sin integrar, y esta ronda los modifica: hay que copiar todo junto.

**Ronda 4** (detalle en `ai-real-ssrv4.md`):

```
src/features/simplify/fidelity.ts
src/features/simplify/prompt.ts
src/content/ai-simplify/cache.ts
src/content/ai-simplify/served.ts
src/content/simplified-manifest.ts
src/lib/ai/models.ts
src/lib/ai/provider.ts
src/lib/ai/fake-provider.ts
src/lib/ai/contracts.ts
tools/ai-pregenerate-simplifications.mjs
tools/ai-review-simplifications.mjs
tools/ai-write-simplified-manifest.mjs
.env.example
docs/features/ai-real-ssrv4.md
```

**Ronda 4 + ronda 5:**

```
src/features/simplify/simplify.ts
src/features/simplify/checks.ts
tools/ai-checks/check-simplify.mjs
```

**Ronda 5:**

```
src/components/simplifier/use-simplification.ts   (solo el plazo: 20 s → 25 s)
e2e/simplifier-real.spec.ts                        (solo el test del plazo)
docs/features/ai-real-ssrv5.md
```

## Commit commands (repo real, después de copiar los archivos)

```
cd ~/Desktop/dev/doctrina && git add src/features/simplify/fidelity.ts src/features/simplify/prompt.ts src/features/simplify/simplify.ts src/features/simplify/checks.ts src/content/ai-simplify/cache.ts src/content/ai-simplify/served.ts src/content/simplified-manifest.ts src/lib/ai/models.ts src/lib/ai/provider.ts src/lib/ai/fake-provider.ts src/lib/ai/contracts.ts tools/ai-pregenerate-simplifications.mjs tools/ai-review-simplifications.mjs tools/ai-write-simplified-manifest.mjs tools/ai-checks/check-simplify.mjs .env.example && git commit -m "feat(ai): pregenerate tradition texts behind a sonnet fidelity judge"
```

```
cd ~/Desktop/dev/doctrina && git add src/components/simplifier/use-simplification.ts e2e/simplifier-real.spec.ts && git commit -m "fix(simplifier): wait 25 s for a long simplification"
```

```
cd ~/Desktop/dev/doctrina && git add docs/features/ai-real-ssrv4.md docs/features/ai-real-ssrv5.md && git commit -m "docs(ai): record simplifier rounds 4 and 5"
```

Los cambios de fiabilidad de la ronda 5 en `simplify.ts` y `checks.ts` van en el primer commit, porque esos archivos también traen la ronda 4. Si el coordinador prefiere separarlos, los diffs de la ronda 5 son: en `simplify.ts`, `attemptOnce`, `realign`, `generateUnit`, la reserva, `failedCheckNames` y `checksOf`; en `checks.ts`, NFC, «O», `saidAlready` y `SEPARATION_WITH_MARGIN`.
