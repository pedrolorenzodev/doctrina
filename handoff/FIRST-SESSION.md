DOCTRINA

Hola, arrancamos un proyecto nuevo: **Doctrina**. Es un reinicio limpio de un proyecto que ya exploramos en dos prototipos (v1 y v2). Todo el contexto, las decisiones, la investigación y los datos están reunidos en `handoff/`.

## Tu tarea en esta sesión

1. **Leé todo `handoff/` antes de escribir nada.** Empezá por `handoff/CONTEXT.md` completo, sin saltear secciones; es la fuente de verdad. Después revisá `handoff/history/`, `handoff/research/`, y la estructura de `handoff/data/` y `handoff/screens/`.
2. **Creá la estructura base del proyecto** siguiendo exactamente la estructura de abajo.
3. **Armá el sistema de documentación para agentes** según el sistema de abajo, y volcá en él toda la información pertinente de `handoff/`.
4. **Aplicá las reglas globales** de abajo en el lugar que corresponda según el sistema de documentación.

## Estructura del proyecto

Esta es la estructura de código y las decisiones de codebase que debe seguir el proyecto. Incluye
el porqué de cada decisión, para que puedas tomar criterio donde el caso concreto lo pida.

### 1. Stack base y configuración

- Next.js 16 (App Router) + React 19 + TypeScript estricto + Tailwind CSS 4 (CSS-first, sin
  `tailwind.config`, con PostCSS vía `@tailwindcss/postcss`) + ESLint 9 + npm.
- **El código vive en `src/`**, y el alias de imports es `@/*` → `./src/*` (en `tsconfig.json`:
  `"paths": { "@/*": ["./src/*"] }`).
- **Quedan en la raíz** (por indicación de la documentación de Next): `public/`, los `.env.*` y las
  configs (`package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`,
  `postcss.config.mjs`), además de los docs y los scripts de herramientas.
- Scripts de `package.json`:
  - `typecheck`: `next typegen && tsc --noEmit`. Va con `typegen` porque tipos globales como
    `LayoutProps` y los de las rutas los genera Next; con un `tsc` pelado, un clon limpio o un
    `.next` borrado falla con `Cannot find name 'LayoutProps'`.
  - `verify`: `npm run typecheck && npm run lint && npm run build`. Es lo que se corre antes de dar
    algo por terminado.
  - `dev`, `build`, `start`, `lint` estándar.

### 2. Árbol de carpetas

```
src/
  app/                solo routing: layouts, pages, metadata, estilos globales (globals.css)
  features/           una carpeta por dominio; lo que usa una sola feature vive adentro
    <feature>/
      components/
      ...             hooks, types, data, etc., solo cuando hacen falta
  components/
    ui/               primitivas reutilizables sin lógica de dominio
  lib/                utilidades puras y helpers
```

**Se arranca con lo mínimo.** `app/`, `features/`, `components/ui/` y `lib/` son el punto de partida.
Cualquier otra carpeta (`hooks/`, `types/`, `components/layout/`, `config/`, `services/`, `store/`…)
se crea **cuando una pieza concreta la necesita**, no por anticipado. Crear estructura de más es un
error documentado en la bibliografía sobre este tema, junto con los componentes globales
gigantes y la lógica de negocio dentro de las páginas.

### 3. Qué va en cada carpeta

- **`app/`**: solo lo que Next necesita para rutear (`layout.tsx`, `page.tsx`, `not-found.tsx`,
  `loading.tsx`, metadata, íconos, `globals.css`). **Las páginas son finas**: importan un componente
  de feature y le pasan props; nada de lógica de negocio, estado, ni UI compleja dentro de un
  `page.tsx`. Las rutas se organizan con route groups `(grupo)` cuando se necesitan layouts distintos.
- **`features/<nombre>/`**: todo lo de un dominio junto (componentes, hooks, tipos, datos). El criterio
  es que un cambio o un bug de ese dominio se resuelve en una sola carpeta, y que borrar la feature es
  borrar la carpeta.
- **`components/ui/`**: primitivas genéricas y reutilizables (botón, tag, tarjeta…), sin conocer el
  dominio. Si un componente solo lo usa una feature, **no** va acá: vive en la feature.
- **`lib/`**: funciones y constantes puras, sin React ni dominio.

### 4. Reglas de dependencia

- **Dirección única: `app → features → components/ui → lib`.** Nunca al revés. Las capas de la
  izquierda pueden importar de las de la derecha, jamás a la inversa.
- **Una feature no importa de otra feature.** Si dos features necesitan lo mismo, ese código **sube**
  a `components/` o `lib/`.
- Lo que usa una sola feature vive dentro de esa feature.
- **Server Components por defecto.** Los Client Components (`"use client"`) solo donde la
  interactividad lo exige, y lo más abajo posible en el árbol.

### 5. Convenciones de archivos

- Nombres de archivo en **kebab-case** (`project-card.tsx`), que digan lo que hacen. Nada de
  `card2.tsx` ni `utils.tsx` genéricos.
- **Exports nombrados**, y **un componente principal por archivo**.
- Imports con el alias `@/…`, no con rutas relativas largas (`../../../`).

### 6. Principios del codebase

- Componentizar y reutilizar antes de escribir código nuevo.
- No sobre-ingeniería: gana lo más simple que siga siendo limpio.
- Ninguna abstracción para un segundo caso de uso que todavía no existe.
- Los tokens, componentes y abstracciones se crean solo cuando una pieza concreta los necesita.
- Comentarios en el código: solo `TODO` o para callar una herramienta (`eslint-disable`,
  `@ts-expect-error`); el código se explica con nombres. Excepción: una «guarda» de una línea donde una
  edición local inocente rompe algo no local y en silencio.
- Antes de escribir código Next, leer la guía correspondiente en `node_modules/next/dist/docs/` (Next 16
  cambió APIs: `params`/`searchParams` son `Promise`, los layouts usan el tipo global
  `LayoutProps<"/ruta">`, Turbopack es el bundler por defecto, `middleware` pasó a llamarse `proxy`).

### 7. Por qué esta estructura (y qué se descartó)

- **`src/` no es una mejor práctica oficial, es una preferencia.** La documentación de Next dice que es
  «unopinionated» y que `src/` solo separa el código de aplicación de los archivos de configuración de
  la raíz. Se eligió porque, en un proyecto mediano, deja la raíz solo para configuración y los docs, y
  concentra todo el código en un único lugar, lo que también ayuda a un agente a ubicarse.
- **`app/` solo para rutas + estructura por features** es el consenso de la bibliografía para proyectos
  medianos: las rutas finas y el código agrupado por dominio, no por tipo de archivo. Agrupar por tipo
  (`components/`, `hooks/`, `utils/` globales) funciona en proyectos chicos, pero dispersa el código
  relacionado al crecer.
- **Se descartó:** (a) el código en la raíz sin `src/`; (b) repartir el código por ruta dentro de
  `app/` con carpetas privadas `_carpeta`: es una estrategia válida de la doc oficial, pero la
  estructura por features es más clara cuando una misma pieza se reutiliza en varias páginas; (c) una
  separación por rol cliente/servidor en directorios, que evita importar código de servidor desde el
  cliente pero agrega carpetas que no hacen falta.
- **Sin evidencia suficiente:** no se fijó ninguna regla sobre archivos barrel (`index.ts` que
  reexportan); no hay una fuente sólida que la respalde.
- Fuentes: la documentación oficial incluida en el paquete
  (`node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md` y
  `.../03-api-reference/03-file-conventions/src-folder.md`), la discusión
  [github.com/orgs/community/discussions/190342](https://github.com/orgs/community/discussions/190342)
  y [dev.to/pipipi-dev/app-router-directory-design-nextjs-project-structure-patterns-31eo](https://dev.to/pipipi-dev/app-router-directory-design-nextjs-project-structure-patterns-31eo).

### 8. Trampas conocidas de esta configuración

- **Si existe `app/` en la raíz, Next ignora `src/app`.** Con `src/`, toda la carpeta `app/` se mueve
  adentro; no deben quedar las dos.
- Si hay `proxy` (antes `middleware`), tiene que estar **dentro de `src/`**.
- Al mover a `src/`, hay que actualizar `paths` en `tsconfig.json` y revisar cualquier ruta de
  `include`, de ESLint o de herramientas que apunte a `app/`, `components/` o `lib/` en la raíz.
- Tailwind 4 no necesita configurar `content`, pero si el proyecto usa una configuración antigua con
  `content`, hay que anteponer `src/`.
- `typecheck` sin `next typegen` falla en un entorno limpio (ver §1).

### 9. Cómo aplicar esto a un proyecto existente

- Es una **estructura objetivo, no una receta ciega**. Si el proyecto ya tiene una organización clara y
  funcional, **respetala y documentá las diferencias en vez de reorganizar por reorganizar**; el
  criterio es que el código sea fácil de navegar para una persona y para un agente.
- Las reglas de dependencia (§4) y las convenciones (§5) se adaptan al dominio real: si el proyecto es
  de contenido más que de interfaz, puede que el agrupamiento «por feature» tenga otro nombre o forma;
  lo que importa es **dominio agrupado, rutas finas, compartido separado y dependencias en un sentido**.
- Si migrás código existente: hacelo por pasos, moviendo y actualizando imports, y corré `npm run verify`
  después de cada paso para comprobar que nada se rompió. No mezcles la migración con cambios de
  comportamiento.

## Reglas globales del proyecto

Cada regla está marcada según cuánto se puede copiar tal cual:

- **[U]** universal: se copia sin cambios.
- **[A]** adaptar: la idea vale, pero el texto depende del proyecto.
- **[E]** específica del proyecto de origen (sitio visual sin diseño previo): revisar si encaja antes de adoptarla.

### 0. Regla principal — [U]

**Propuesta con demos en vivo antes de implementar.** Cuando hay que crear UI sin definición precisa, o
Pedro no sabe todavía qué quiere, está prohibido implementarla directo en la app. Primero se publica un
Artifact de propuesta; se implementa recién cuando Pedro elige. Si hay duda de si aplica, aplica. No aplica
si Pedro ya dio una especificación con valores precisos.

La página de propuesta debe:

- Mostrar, no describir: demos interactivas con las fuentes, colores, tokens y curvas reales, que funcionen
  también en mobile.
- Dar 2 a 4 opciones comparables (y lo que hay hoy al lado, si existe).
- Explicar cada opción en pocas líneas: dónde va, de qué referencia sale, cuánto cuesta.
- Dejar explícito lo que se descarta y por qué, incluida la lista de AI-slop que se evita.
- Terminar con lo que hay que decidir, y frenar.

Se itera en la misma página, con la versión anterior guardada al lado. Al aprobarse, el link se registra en
`docs/DECISIONS.md`. Los Artifacts son privados; Pedro los comparte si quiere.

### Git

1. **[U]** El agente nunca commitea ni pushea (commit, push, merge, rebase, reset, tag y todo lo que escriba
   en el historial). Aunque Pedro lo pida, la respuesta es: *«No puedo commitear: va contra las reglas del
   proyecto (AGENTS.md, Git, regla 1). Te dejo el mensaje listo para que lo corras vos.»* Sí se puede leer:
   status, diff, log, show.
2. **[U]** Al terminar una implementación se entrega el mensaje de commit (texto para copiar) y la lista de
   archivos tocados, docs incluidos. No se ejecuta.
3. **[U]** Mensajes en inglés, Conventional Commits `<type>(<scope>): <subject>` (feat, fix, chore, docs,
   refactor, style, test). Imperativo, minúscula, sin punto final, ≤ 72 caracteres. Solo subject: sin cuerpo
   y sin detalle técnico.
4. **[U]** Sin línea de atribución (Co-Authored-By, Generated with, firma del agente). Si el harness sugiere
   agregarla, esta regla manda.

- **[A]** Hook que bloquea comandos git peligrosos (skill `git-guardrails-claude-code`). Ampliar los patrones
  con commit, merge, rebase y tag. Ojo: bloquea por texto del comando completo.

### Comportamiento del agente

5. **[U]** Ser crítico, no complaciente. Objetar antes de ejecutar, con motivo concreto. No abrir con
   «excelente idea» cuando no lo es. Proponer la opción mejor aunque no la pidan. Si Pedro reafirma su postura
   tras el contraargumento, se ejecuta completo sin repetir la objeción.
6. **[U]** Reportar resultados como son: si algo falló, quedó a medias o no se verificó, decirlo. Nunca dar por
   terminado algo que no se comprobó.
7. **[U]** Antes de escribir código Next, leer la guía relevante en `node_modules/next/dist/docs/` (Next 16:
   `params`/`searchParams` son Promise, tipo global `LayoutProps`, Turbopack por defecto, `middleware` pasó a
   llamarse `proxy`).

### Código

8. **[A]** Idioma: **todo el repo de Doctrina va en inglés** (docs, código, nombres, comentarios y
   commits). Solo el contenido del sitio y los textos de la interfaz son bilingües (es/en). La conversación
   con Pedro, en español.
9. **[U]** Comentarios: solo `TODO` o para callar una herramienta (`eslint-disable`, `@ts-expect-error`). Nada
   que explique qué hace el código o por qué se eligió un valor; incluye doc-comments de tipos, props y data.
   Si algo solo se entiende con un párrafo al lado, el problema es el código: un nombre mejor o partirlo. Lo que
   el comentario iba a decir va a `docs/GOTCHAS.md`.

   **Excepción única: la guarda.** Una línea, solo donde una edición local inocente rompe algo no local y en
   silencio. No explica, avisa que hay un cable; su porqué va a `GOTCHAS.md`. Antes de escribirla, intentar que
   la restricción no se pueda romper (un nombre que la diga). Rige hacia adelante; no se limpian los comentarios
   existentes sin que se pida.

### Proceso de trabajo

10. **[U]** Se trabaja por bloques (componente o sección), no por página entera: uno a la vez, verificado antes
    de pasar al siguiente. Si es grande, se parte; ante la duda, más chico. Nunca avanzar con el anterior a
    medias.
11. **[U]** Una página o sección se termina y se aprueba antes de abrir las que dependen de ella.
12. **[U]** Aprobación visual de Pedro antes de entregar el mensaje de commit.

### Verificación

13. **[A]** Antes de dar algo por terminado: typecheck + lint + build, y screenshots de los tamaños relevantes
    comparados contra la propuesta aprobada o la referencia dada; después, la aprobación de Pedro. En el
    proyecto de origen: `npm run verify` y `npm run shot -- /` (typecheck = `next typegen && tsc --noEmit`,
    porque `LayoutProps` lo genera Next).

### Documentación

- **[U]** `CLAUDE.md` importa solo `AGENTS.md`. Los docs se leen a demanda, nunca se importan enteros.
- **[U]** `AGENTS.md` < 200 líneas, y todo lo que no se necesita siempre va a reglas por ruta
  (`.claude/rules/*.md` con `paths:`) o a docs.
- **[U]** Índice «leer cuando»: ROADMAP al empezar toda sesión · PROJECT al crear archivos o ante dudas de
  alcance, stack o arquitectura · DESIGN antes de tocar UI · DECISIONS antes de proponer o cambiar algo ya
  decidido · GOTCHAS antes de tocar código con trampas · `features/<x>` durante esa feature.
- **[U]** Antes de una feature: leer Estado actual y el bloque en ROADMAP. Si es UI sin definición, aplica la
  regla principal. Si es no trivial, escribir `docs/features/<nombre>.md` (intención, criterios de aceptación,
  fuera de alcance, link a la propuesta, cómo se verifica).
- **[U]** Durante: registrar cada decisión en DECISIONS.md en el momento en que se toma (fecha, qué, por qué,
  qué se descartó), incluidas las que el agente tomó sin consultar. Trampas y porqué de cada guarda, a
  GOTCHAS.md.
- **[U]** Al terminar: verificar; actualizar DESIGN.md si cambió un token o patrón; sobrescribir Estado actual y
  tildar el bloque en ROADMAP; cerrar la feature (lo importante pasa a DECISIONS, el archivo se borra);
  entregar el mensaje de commit.
- **[U]** Higiene: los docs no repiten lo que el código dice; si un doc contradice al código se corrige o se
  borra en el acto; Estado actual ≤ 15 líneas y se sobrescribe; ninguna carpeta o archivo de docs «por si
  acaso».
- **[U]** Decisión revertida: no se borra de DECISIONS, se marca «Reemplazada por».

### Reglas de UI (`.claude/rules/ui.md`, se cargan solas al tocar archivos de UI) — [E]

- Cero valores de estilo hardcodeados: todo sale de los tokens de `@theme` en `globals.css`. Si falta un token,
  primero se agrega y se documenta en DESIGN.md.
- Tailwind en el `className` del elemento, siempre. Prohibido `style={{}}`, CSS Modules, `<style>` y `@apply`
  en archivos aparte. Única excepción: valor calculado en runtime pasado como CSS custom property.
- Responsive excelente en todos los tamaños: mobile-first, breakpoints por defecto de Tailwind, verificado en
  mobile, tablet y desktop. Reparto de trabajo entre tamaños según el caso: UI parecida → todos juntos · UI
  radicalmente distinta → componentes separados · mismo markup con layout muy distinto → pases en orden
  creciente, mobile primero.
- Primitives con shadcn cuando exista uno adecuado; se instala con su CLI cuando hace falta.
- No extender preventivamente: tokens, componentes y abstracciones solo cuando una pieza concreta los necesita.
- El movimiento es parte central del sitio; toda animación o interacción no trivial pasa por la regla
  principal. Respetar `prefers-reduced-motion`. Una librería de motion se decide en una propuesta.

### Estructura de código — [E]

`src/app` (solo routing) → `src/features` (un dominio por carpeta) → `src/components/ui` → `src/lib`.
Dirección de dependencias en un solo sentido, sin imports entre features. Server Components por defecto.
Kebab-case, exports nombrados, un componente principal por archivo.

## Sistema de documentación

Este es el sistema de documentación y de notas con el que se trabaja en el proyecto, desde el primer
día. Está pensado para un desarrollo individual hecho en conjunto con un agente de código: el agente
no recuerda nada entre sesiones, así que todo lo que necesita saber tiene que estar escrito, corto,
actualizado y fácil de encontrar. Se crea desde cero siguiendo lo que sigue.

### 1. Principios (el porqué)

Salen de la documentación oficial de Anthropic sobre Claude Code y de practicantes reconocidos.
Entendelos, porque vas a tener que decidir con ellos cuando algo no esté cubierto:

- **El contexto es el recurso escaso.** `CLAUDE.md` y `AGENTS.md` se cargan en cada pedido y se pagan en
  cada sesión. Anthropic recomienda **menos de 200 líneas**; más largo reduce la adherencia. Test para
  cada línea: *«si la saco, ¿el agente se equivoca?»*. Si no, se va.
- **`@import` no ahorra contexto**: lo importado se carga al arrancar igual. Por eso los documentos
  largos **no se importan**: se leen **a demanda**, cuando una tabla de «leer cuando…» lo indica.
- **Lo que no siempre hace falta se carga solo cuando hace falta**: con reglas por ruta
  (`.claude/rules/*.md` con `paths:` en el frontmatter), que se leen únicamente al tocar archivos que
  coinciden, o con skills.
- **Se documenta solo lo que el agente no puede deducir del código.** Un estudio (arXiv 2602.11988)
  midió que los archivos de contexto con resúmenes del repositorio no mejoran los resultados y suben el
  costo más de un 20%. No se listan archivos uno por uno, no se repite lo que el código ya dice, y no se
  escriben reglas que un linter ya impone.
- **Los docs se pudren.** Un doc desactualizado o que contradice al código es peor que no tener doc. Por
  eso hay un solo lugar para cada cosa y una higiene explícita (§5).
- **Lo determinístico va en hooks, no en prosa.** Los archivos de reglas son consultivos; un hook no
  cuesta contexto y no se puede ignorar.
- **Hay un traspaso corto entre sesiones** (el «Estado actual», §3), derivado del patrón de «progress
  file» que Anthropic usa para agentes de larga duración. No existe guía oficial específica para uso
  individual interactivo; es una práctica razonable, no un estándar.
- **Matices honestos:** el estudio citado mide arreglo de bugs, no trabajo desde cero, así que su
  alcance es incierto; y el formato de `DESIGN.md` de Google (§3) es alfa.

### 2. Los archivos, sus roles y sus tamaños

| Archivo | Cuándo se carga | Tamaño | Rol |
|---|---|---|---|
| `CLAUDE.md` | siempre | 1 línea: `@AGENTS.md` | Solo importa `AGENTS.md`. |
| `AGENTS.md` | siempre | **< 200 líneas** | **El proceso**: reglas duras, comportamiento, git, comentarios, flujo de trabajo, verificación, índice de docs y protocolo. |
| `.claude/rules/*.md` | por ruta | 20–60 líneas c/u | Reglas que solo importan al tocar cierto tipo de archivo (UI, contenido, tests…). |
| `docs/PROJECT.md` | a demanda | ~100 líneas | Qué es el proyecto, alcance y no-alcance, stack, arquitectura y sus reglas de dependencia. |
| `docs/ROADMAP.md` | **al empezar toda sesión** | ~1 página | Arriba, «Estado actual» (traspaso). Debajo: Ahora / Próximo / Después / Hecho. |
| `docs/DECISIONS.md` | a demanda | crece, solo se agrega | Registro de decisiones, la más nueva arriba. |
| `docs/GOTCHAS.md` | a demanda | corto | Trampas conocidas y el porqué de cada «guarda» del código. |
| `docs/DESIGN.md` | antes de tocar UI | 150–300 líneas | Fuente de verdad visual (solo si el proyecto tiene interfaz). |
| `docs/features/<nombre>.md` | durante esa feature | 30–100 líneas | Uno por feature no trivial. |

**Un solo lugar para cada cosa.** No hay un `STATE.md` aparte (el traspaso es la sección «Estado actual»
de `ROADMAP.md`), no hay un archivo por decisión tipo ADR (para un proyecto individual es demasiada
ceremonia) y no hay un PRD gigante que se importe en cada sesión.

**Qué se crea el día uno y qué no.** El día uno se crean `CLAUDE.md`, `AGENTS.md`, `docs/PROJECT.md`,
`docs/ROADMAP.md`, `docs/DECISIONS.md` y `docs/GOTCHAS.md`. `docs/DESIGN.md` se crea **después de
aprobar la dirección de diseño**, no antes. `docs/features/` se crea con la primera feature no trivial.
Las reglas por ruta se crean cuando hay una regla que solo aplica a cierto tipo de archivo. No se crea
ningún archivo ni carpeta «por si acaso».

### 3. Qué lleva cada archivo

#### `AGENTS.md`

Reglas duras del proyecto, comportamiento del agente, git, política de comentarios, flujo de trabajo,
verificación, el **índice «leer cuando»** (tabla) y el **protocolo** de §4. Si el proyecto usa Next.js,
conserva intacto el bloque que `next dev` regenera automáticamente (entre
`<!-- BEGIN:nextjs-agent-rules -->` y `<!-- END:nextjs-agent-rules -->`); las reglas propias van debajo.
Tiene que mantenerse bajo 200 líneas: lo que solo aplica a un tipo de archivo va a una regla por ruta.

`CLAUDE.md` contiene únicamente `@AGENTS.md`. (Claude Code lee `AGENTS.md` por sí solo solo si no existe
`CLAUDE.md`; con los dos archivos, se importa.)

Tabla del índice (adaptá los nombres al proyecto):

```
| Archivo                     | Leer cuando                                                          |
| docs/ROADMAP.md             | Al empezar toda sesión: «Estado actual» y qué sigue                  |
| docs/PROJECT.md             | Al crear archivos o carpetas, o ante dudas de alcance o arquitectura |
| docs/DESIGN.md              | Antes de tocar UI                                                    |
| docs/DECISIONS.md           | Antes de proponer o cambiar algo que ya se decidió                   |
| docs/GOTCHAS.md             | Antes de tocar código con guardas o trampas conocidas                |
| docs/features/<nombre>.md   | Durante esa feature                                                  |
```

#### `.claude/rules/<nombre>.md`

Reglas por ruta. El frontmatter define cuándo se cargan:

```
---
paths:
  - "src/**/*.tsx"
  - "src/**/*.css"
---
```

#### `docs/PROJECT.md`

Qué es el proyecto y para quién; alcance y **no-alcance** (lo que explícitamente no se hace);
stack con versiones; arquitectura (árbol de carpetas, qué va en cada una y reglas de dependencia);
principios de trabajo del código. Sin historia ni estado: eso va en `ROADMAP.md`.

#### `docs/ROADMAP.md`

```
# Roadmap

## Estado actual
> Se sobrescribe al terminar cada sesión. Máximo 15 líneas.
**<fecha>.** Qué hay hecho, cuál fue el último paso, qué falta y dudas abiertas.
**Siguiente paso:** ...

## Ahora        (lo que se está haciendo, numerado)
## Próximo      (tentativo; se ajusta a medida que se decide)
## Después
## Hecho        (una línea por ítem: fecha · qué; se poda)
```

«Estado actual» es **el traspaso entre sesiones**: es lo primero que se lee y lo último que se escribe.
Máximo 15 líneas y **se sobrescribe**, no se acumula.

#### `docs/DECISIONS.md`

Registro, **la entrada más nueva arriba**. Se agrega **en el momento en que se toma la decisión**,
incluidas las que el agente tomó sin consultar. Formato de cada entrada:

```
## <fecha> · <título corto>
**Se eligió:** ...
**Por qué:** ...
**Se descartó:** ...
```

Si hay una propuesta o diseño aprobado, se agrega su link. Una decisión revertida **no se borra**: se
marca `Reemplazada por <entrada>` y se agrega la nueva.

#### `docs/GOTCHAS.md`

Trampas que muerden y el porqué de cada «guarda» (el comentario de una línea que avisa que hay un cable
en el código). Formato de cada entrada: **qué** muerde · **por qué** · **dónde** (archivo o script). Es
adonde va todo lo que habría sido un comentario explicativo en el código. Si la trampa se elimina del
código, se elimina del doc. Solo se registran trampas **verificadas**, no deducciones.

#### `docs/DESIGN.md` (si hay interfaz)

Fuente de verdad visual: concepto, tipografía, color, espaciado, movimiento, componentes y qué no hacer.
Se crea después de aprobar la dirección de diseño y se actualiza cuando cambia un token o un patrón.
Hay un formato de Google Labs
([github.com/google-labs-code/design.md](https://github.com/google-labs-code/design.md): tokens en YAML en
el frontmatter + el razonamiento en prosa; CLI `npx @google/design.md lint|diff|export`, con lint de
contraste y exportación a Tailwind). Es alfa (abril de 2026); si se adopta, se asume ese riesgo, y si
molesta se vuelve a markdown libre.

#### `docs/features/<nombre>.md`

Uno por feature no trivial, escrito **antes** de implementarla:

```
# <Feature>
Intención: qué problema resuelve y para quién.
Criterios de aceptación: lista verificable.
Fuera de alcance: lo que no se hace en esta feature.
Referencia: link al diseño o propuesta aprobada.
Verificación: cómo se comprueba que está lista.
```

Al terminar se **cierra**: lo importante pasa a `DECISIONS.md` y el archivo se borra.

### 4. Protocolo de trabajo (se escribe en `AGENTS.md`)

- **Antes de una feature:** leer el «Estado actual» y el bloque correspondiente en `ROADMAP.md`. Si es
  UI, leer `DESIGN.md`. Si algo ya se decidió, se consulta `DECISIONS.md` antes de proponer otra cosa. Si
  la feature es no trivial, escribir `docs/features/<nombre>.md`.
- **Durante:** registrar en `DECISIONS.md` cada decisión **en el momento en que se toma**. Las trampas
  y el porqué de cada guarda van a `GOTCHAS.md`.
- **Al terminar:** verificar; actualizar `DESIGN.md` si cambió un token o un patrón; **sobrescribir**
  «Estado actual» y tildar el bloque en `ROADMAP.md`; cerrar el doc de la feature; y al entregar el
  resultado, listar los archivos tocados **incluyendo los docs**, para que viajen en el mismo commit.

### 5. Higiene (para que no se pudra)

- Los docs no repiten lo que el código ya dice.
- Si un doc contradice al código, se corrige o se borra **en el acto**.
- «Estado actual» tiene como máximo 15 líneas y se sobrescribe.
- Cada hecho vive en un solo archivo; los demás apuntan a él en vez de copiarlo.
- No se agrega una carpeta o un archivo de documentación «por si acaso».
- Los hechos y las fechas que se registran son los reales; no se inventan «porqués» ni fechas.
- Cuando el agente repite un error o el usuario lo corrige dos veces por lo mismo, esa corrección se
  promueve a una regla (en `AGENTS.md`, o en una regla por ruta si solo aplica a ciertos archivos).

### 6. Fuentes

Documentación oficial de Anthropic: [memoria y CLAUDE.md](https://code.claude.com/docs/en/memory),
[mejores prácticas](https://code.claude.com/docs/en/best-practices),
[harness para agentes de larga duración](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
y [context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents);
el estándar [agents.md](https://agents.md); el estudio [arXiv 2602.11988](https://arxiv.org/abs/2602.11988);
y [DESIGN.md de Google Labs](https://github.com/google-labs-code/design.md).

## Criterios para volcar `handoff/` en la documentación

- **Sin perder nada relevante.** Decisiones, veredictos sobre features (confirmadas, posibles, archivadas, sin revisar), qué funcionó y qué no en el diseño, licencias, riesgos, decisiones abiertas, el plan de Supabase + IA y los links a los lienzos. Podés reorganizar y resumir, pero no omitir.
- **Distinguí lo decidido de lo abierto y de lo histórico.** Que ningún agente futuro tome una idea descartada o pendiente como si fuera una decisión.
- **Si algo de `handoff/` contradice mis reglas o mi sistema de documentación, ganan mis reglas.** Avisame de cada conflicto.
- **Datos e investigación:** movelos o copialos a donde indique la estructura. Las rutas internas de los scripts todavía apuntan a `~/Desktop/dev/doctrina-v2`; marcalo como pendiente, no los ejecutes.
- **No toques `handoff/`:** lo archivo yo cuando confirme que todo quedó volcado.

## Límites

- **Todavía no programes interfaz.** El diseño UI/UX no está decidido. Lo próximo es elegir entre las propuestas P1–P4 de la ronda 2 (ver `CONTEXT.md` §6).
- **No instales Supabase todavía.** Sí podés dejar preparado lo que pide `CONTEXT.md` §8 si la estructura lo contempla.
- **Nunca hagas `git commit`.** Git lo manejo yo.
- **Todo lo que escribas en el repo va en inglés.** Hablame en español, breve.
- **Si algo de la estructura, las reglas o el sistema es ambiguo, preguntame antes de inventar.**

## Al terminar, respondeme breve con

1. El árbol de lo que creaste.
2. Una tabla de dónde quedó cada sección de `handoff/CONTEXT.md` (sección → archivo).
3. Los conflictos o ambigüedades que encontraste y cómo los resolviste.
4. Lo que quedó pendiente.
