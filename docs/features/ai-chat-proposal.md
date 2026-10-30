# AI chat in the reader: second research round and proposal on the real design system

Intent: find the clearest, most intuitive chat UI/UX for Doctrina's reader, from what users of AI chats like, dislike and miss, and from the patterns of the most popular products; then a proposal Artifact built with the site's real pieces so it ports to the web with no restyling. Pedro's brief, 2026-10-29 (this session works only on proposals; shared docs untouched).

Out of scope: any code in `src/`, `e2e/`, `data/`, `tools/`; the paragraph simplifier (out, DECISIONS 2026-10-28); real model calls (DECISIONS 2026-10-05 «no generated chat answers» still stands).

## Plan (/plan-run, 2026-10-29)
- Type: design-proposal (last validated 2026-10-29) + research (agent-ops «Tools agents have»: Playwright).
- Goal and done-criterion: (1) `docs/research/ai-chat-ux-round2.md`: user opinions (likes / dislikes / wishes) and the UI patterns of the popular products, every claim tagged `[verified]` / `[search]` / `[screenshot]` / `[inference]`, with screenshots in `docs/research/ai-chat-ux-round2/`; (2) a proposal Artifact, 2-4 comparable options plus the current drawer beside them, on the site's real tokens (wall texture, DESIGN §2 roles, §7 Don'ts), archived in `docs/research/proposals/ai-chat/` (index.html + source/). Done = Pedro picks or iterates.
- Bounded by: DECISIONS 2026-10-28 «AI chat in the reader: Pedro chose variant 3» (the drawer is the base, UI only); 2026-10-05 «no generated chat answers»; 2026-10-05 design principles and AI-slop list; `docs/research/ai-chat-and-simplifier.md` (round 1, not repeated: Kindle, Readwise, Logos, NotebookLM, Perplexity audits, Bible Society, etc.).
- Out of scope: see above.
- Setup:
  | Role | Model · effort | Writes | Starts after |
  |---|---|---|---|
  | Main session, alone (no subagents) | Sonnet 5.5 | `docs/research/ai-chat-ux-round2*`, `docs/research/proposals/ai-chat/`, this file | now |
- Expected cost: ~20 searches, ~10 Playwright captures (ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok, Notion AI, Cursor, Dia/Arc; logged-out views only), one page build. Estimate 5-8 weekly points; stop and ask at the cap (13 %).
- Risks and open questions for Pedro:
  - Logged-in UIs (ChatGPT, Claude) are behind login: I capture only public/logged-out states and marketing pages, and use docs/changelogs for the rest; tell me if you want to log me in.
  - Reviews on Reddit and App Store were not reachable in round 1; I will try again and say what could not be read.
  - Scope: the proposal evolves the existing drawer (variant 3) and adds functions found in the research; it does not reopen «drawer vs panel vs sheet».
- Checks during the run: weekly usage before each heavy step; no ports 3000/3100; no `npm run build`; no git writes.

## Retro
(filled by /retro)

## Pedro's notes on the drawer (2026-10-29, verbatim; saved before discussing, nothing decided)

Base unchanged: the drawer stays; only the UI/UX INSIDE the drawer improves.

> La UI actual va por un buen camino, pero actualmente, no se me hace algo util para usar, o no me atrae como usuario a usar el cajón de AI, tampoco me parece descatable la UI, pero debemos razonar y entender CUAL es la función por la cual queremos esta feature. La idea es que el usuario, luego de leer un versículo/s, pueda consultarle a la IA preguntas acerca del versículo/s que desee, y la IA teniendo contexto preciso de todas las fuentes del proyecto, incluyendo los comentarios y escritos de los padres, le pueda responder al usuario.
>
> Es util tener "preguntas prefabricadas", pero es aun mas util el chat libre con la AI. Las preguntas prefabricadas deben poder ser aplicables a cualquier versículo/s, y deben cambiar dependiendo si el usuario abrió el chat con el botón directo del header, o si lo abrió al chat referenciando a un versículo/s especifico. Si es a versículos específicos, entonces preguntas prefabricadas del estilo de "What did the Church Fathers believe related to this", "En que otro lugar de la biblia se habla de este tema" o cosas así pueden ser utiles.
>
> Una cosa muy importante es, considerando que el usuario abre esto y lo usa para esto, los elementos de la parte superior del chat se interponen en mi camino para usar este chat de forma seguida y recurrente, y de que agregan MUCHO ruido visual, lo cual arruina la experiencia. Ojo, no digo que los removamos directamente, son un poco utiles para verlos la primera vez, o una vez cada tanto, pero no son el core de la feature, y actualmente el quitan el protagonismo al chat y a el contexto de la AI. Necesito que creemos muchas variantes para poder entender como manejar TODA la UI/UX y los espacios, dentro del chat.
>
> Otra cosa muy importante, es que el input y el botón "ASK", así como se diseñan en todas las apps famosas de chats AI, deben SIEMPRE ser visibles, tipo flotando, en la parte inferior del contenido del chat. Actualmente si es una respuesta larga, todo el contenido empuja a el input y botón hacia abajo, sacándolo de la vista.
>
> Otra cosa, es que el "streaming" del texto actual es muy rápido. Entiendo que todavia es puro mockup, pero hay que establecer desde ya que el streaming es muy rápido. También relacionado a esto, en los chats AI famosos, es muy util que el contenido de chat vaya tipo "scrolleando" de forma que siga a el contenido nuevo que va entrando en streaming, de manera smooth. Y si en medio de ese scroll automático, que sigue al contenido que se muestra, el usuario scrollea por si mismo, ese scroll automático ya se "apaga" por asi decirlo y ya no intenta scrollear automaticamente, para no interrumpir el scroll consciente del usuario.

How the agent reads them (to confirm with Pedro): (1) purpose = after reading verse(s), ask anything, answered from the whole corpus incl. Fathers' commentary; (2) free chat is the core, prefabricated questions secondary and generic (valid for any verse), with two sets: opened from the header button vs opened from a verse selection; (3) the top block («Lo que puede ver», scope, switch) is noise: keep it but demote it (first-time / occasional), chat and context get the protagonism; many variants of how the space inside the drawer is managed; (4) input and «Preguntar» always visible, pinned at the bottom; (5) streaming slower; (6) smooth follow-scroll that switches off when the user scrolls by hand.

## Round 2 result (2026-10-29)

- Research: `docs/research/ai-chat-ux-round2.md` (captures in `docs/research/ai-chat-ux-round2/`).
- Proposal: https://claude.ai/artifact/VFUUmDrxwrzSHEBsKACVG8 (version 1), archived with its generator in `docs/research/proposals/ai-chat/` (`source/template.html` + `build.py`; run `python3 build.py` inside `source/`).
- What it is: one live drawer (380 px, real texture and type roles) with 12 groups of options (opening mode, context, composer, suggestions, selected text, speed, scroll, status, answer shape, length, follow-ups, new functions) plus two presets («Cajón actual», «Mi combinación»). Nothing here is decided; Pedro picks.
- Agent's calls (to confirm): the scroll demo has two modes (follow and release on manual scroll, or question pinned at the top); the speeds (55 / 100 / 160 ms per word) are a proposal with no preference study behind them; sample «Preguntas anteriores» are example data; the answers reuse the scripted ones of `reader-ai/script.ts` plus a «Biblia» answer built from RV1909 verses (Mt 26:26-28, 1 Co 11:24-26, Jn 6:63).
- Tokens the build would need: a fade strip above the pinned composer (28 px), the floating «↓» button (36 px, `shadow-float`), the context line (36 px). No new colours.
- Not verified in a browser other than headless Chromium on the local file; mobile checked at 360/390/768 for overflow and one screenshot at 390.
