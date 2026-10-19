(function(){
  const STORE_KEY = META.storeKey;
  const OB_IDS = Object.keys(OBJ);
  const QE_SHOWN = META.qeShown || 5;
  const R3 = META.rv03 || {};
  const R4 = META.rv04 || {};
  const LANGS = [[`es`,`español`],[`en`,`inglés`],[`de`,`alemán`],[`la`,`latín`],[`el`,`griego`]];
  function mainLang(ex){ for (const l of LANGS) if (ex[l[0]]) return l[0]; return null; }
  function obFromView(v){ return OB_IDS.find(function(id){ return id.toLowerCase() === v; }) || null; }
  function notes(x, margin){ if (!x) return ``; return (Array.isArray(x) ? x : [x]).map(function(t){ return rnote(t, margin); }).join(``); }
  const SYN_LIMIT = 270;
  let storageOk = true;
  let state = {answers:{}, notes:{}};
  let saveTimer = null;
  let lastTrigger = null;
  let panelPos = null;
  let toastTimer = null;

  function load(){
    try {
      const raw = window.localStorage.getItem(STORE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === `object`) {
          state.answers = parsed.answers || {};
          state.notes = parsed.notes || {};
        }
      }
    } catch { storageOk = false; }
  }
  function save(){
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function(){
      try { window.localStorage.setItem(STORE_KEY, JSON.stringify(state)); storageOk = true; }
      catch { storageOk = false; }
      [`top`,`bottom`].forEach(function(w){
        const st = document.getElementById(`save-state-${w}`);
        if (st) st.textContent = storageOk ? `Borrador guardado en este navegador.` : `No se pudo guardar en este navegador: copiá las respuestas antes de cerrar.`;
      });
    }, 300);
  }

  function esc(s){ return String(s).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`); }
  function rich(s){
    return esc(s).split(/(\{[^}]*\})/).map(function(part, i){ return i % 2 ? part : part.replace(/_([^_]+)_/g, `<em>$1</em>`); }).join(``)
      .replace(/\{c:([^|}]+)\|([^}]+)\}/g, function(_, ids, label){ return `<button type="button" class="cite" data-src="${ids}">${label}</button>`; })
      .replace(/\{v:([^}]+)\}/g, function(_, ref){ return `<button type="button" class="cite" data-verse="${ref}">${ref}</button>`; })
      .replace(/\{g:([^}]+)\}/g, function(_, label){ return `<button type="button" class="go" data-goto="${label}">${label}</button>`; });
  }
  function plain(s){
    return String(s).replace(/\{c:[^|}]+\|([^}]+)\}/g, `($1)`).replace(/\{v:([^}]+)\}/g, `($1)`).replace(/\{g:([^}]+)\}/g, `$1`).replace(/\) \(/g, `; `).replace(/_([^_]+)_/g, `$1`);
  }
  function rnote(text, margin){
    return `<aside class="rnote${margin === false ? `` : ` m`}" role="note"><b>Revisión.</b> ${esc(text)}</aside>`;
  }
  function cites(list){
    return list.map(function(p){ return `<button type="button" class="cite" data-src="${p[0]}">${esc(p[1])}</button>`; }).join(` `);
  }
  function tl(year, big){
    if (!year) return ``;
    let h = `<div class="tl${big ? ` big` : ``}" aria-hidden="true"><span class="base"></span>`;
    for (let y = 100; y <= 2000; y += 100) h += `<span class="tick" style="left:${(y/2030*100).toFixed(3)}%"></span>`;
    if (big) [1,500,1000,1500,2000].forEach(function(y){ h += `<span class="lab" style="left:${(y/2030*100).toFixed(3)}%">${y}</span>`; });
    h += `<span class="dot" style="left:${(year/2030*100).toFixed(3)}%"></span></div>`;
    return h;
  }
  const CHEVRON = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>`;
  const EXT = `<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h4v4"/><path d="M13 3L7.5 8.5"/><path d="M11 9.5V13H3V5h3.5"/></svg>`;
  const COPY = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5"/><path d="M10.5 5.5V3.5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2"/></svg>`;

  function annot(key, label){
    const v = state.notes[key] || ``;
    const open = v.trim().length > 0;
    return `<div class="annot"><button type="button" class="annot-btn" data-annot="${key}" aria-expanded="${open}">Anotar: ${esc(label)}${open ? `<span class="dotfill" aria-hidden="true"></span>` : ``}</button>` +
      `<div class="annot-box"${open ? `` : ` hidden`}><label class="sr-only" for="a-${key}">Nota: ${esc(label)}</label><textarea id="a-${key}" data-note="${key}" placeholder="Tu nota sobre esta sección">${esc(v)}</textarea></div></div>`;
  }

  function gradeLines(item){
    let h = `<div class="grade">`;
    item.grades.forEach(function(g){
      const G = GRADES[g.cat];
      h += `<p class="grade-cat"><button type="button" class="cat" data-grade="${g.cat}">${esc(G.label)}</button>${g.basis ? ` — ${rich(g.basis)}` : ``}</p>`;
    });
    h += `<p class="grade-src"><span class="lbl">Fuentes</span> ${cites(item.sources)}</p></div>`;
    return h;
  }

  function render03(){
    let h = `<div class="col">`;
    h += `<nav class="crumbs" aria-label="Ruta"><span>Doctrinas</span><span class="s" aria-hidden="true">/</span><span>${esc(META.doctrine)}</span><span class="s" aria-hidden="true">/</span><span aria-current="page">Católica</span></nav>`;
    h += notes(R3.top);
    h += `<h1 class="t">La posición católica</h1><p class="lede">${esc(META.lede)}</p>`;

    h += `<section class="s" id="ensena" aria-labelledby="h-ensena"><h2 class="h" id="h-ensena">Qué enseña</h2>`;
    h += `<p class="sub">${esc(META.ensenaSub)}</p>`;
    h += notes(R3.ensena);
    h += `<div class="def-block">` + (DEFINITION.rv || []).map(function(t){ return rnote(t); }).join(``) + `<p class="def">${rich(DEFINITION.text)}</p>${gradeLines(DEFINITION)}</div>`;
    h += `<ul class="stmts" id="stmts">`;
    QE.forEach(function(q, i){
      h += `<li class="stmt"${i >= QE_SHOWN ? ` data-extra hidden` : ``}>` + (q.rv || []).map(function(t){ return rnote(t); }).join(``) +
        `<span class="rtag">${q.id}</span><p class="stmt-text">${rich(q.text)}</p>${gradeLines(q)}</li>`;
    });
    h += `</ul>`;
    if (QE.length > QE_SHOWN) h += `<button type="button" class="more" data-more="stmts" aria-expanded="false" aria-controls="stmts">${CHEVRON}<span>Mostrar ${QE.length - QE_SHOWN} ${QE.length - QE_SHOWN === 1 ? `afirmación` : `afirmaciones`} más</span></button>`;
    if (LEFT_OUT) h += rnote(LEFT_OUT, false);
    h += annot(`n03-ensena`, `Qué enseña`) + `</section>`;

    h += `<section class="s" id="porque" aria-labelledby="h-porque"><h2 class="h" id="h-porque">Por qué</h2>`;
    h += notes(R3.porque);
    PORQUE.intro.forEach(function(p){
      const o = typeof p === `string` ? {t:p} : p;
      h += notes(o.rv) + `<p class="read">${rich(o.t)}</p>`;
    });
    if (PORQUE.fathers && PORQUE.fathers.length) {
      h += `<div class="fathers">`;
      PORQUE.fathers.forEach(function(f, i){
        if (i === 0) h += notes(R3.fathers);
        h += notes(f.rv) + `<div class="father"><p class="father-lead">${esc(f.lead)}</p><blockquote class="bq">${f.quote.map(function(p){ return `<p>${esc(p)}</p>`; }).join(``)}</blockquote>` +
          `<span class="attr">${esc(f.attr)} <button type="button" class="cite" data-src="${f.src}">${esc(f.srcLabel)}</button></span></div>`;
      });
      if (PORQUE.note) h += `<p class="fnote">${rich(PORQUE.note)}</p>`;
      h += `</div>`;
    }
    if (PORQUE.closing) {
      h += notes(R3.closing);
      h += `<p class="closing">${rich(PORQUE.closing)}</p>`;
    }
    h += annot(`n03-porque`, `Por qué`) + `</section>`;

    h += `<section class="s" id="escritura" aria-labelledby="h-escritura"><h2 class="h" id="h-escritura">La Escritura que usa</h2>`;
    h += notes(R3.escritura);
    h += `<ul class="passages">`;
    ESCRITURA.forEach(function(p){
      h += `<li class="passage">${p.rv ? rnote(p.rv) : ``}<div class="passage-in"><span class="passage-ref"><button type="button" class="go" data-goto="${esc(p.ref)}">${esc(p.ref)}</button></span><p class="passage-desc">${rich(p.d)}</p></div></li>`;
    });
    h += `</ul><p style="margin:16px 0 0;font-size:15px"><button type="button" class="go" data-goto="Ver los ${ESCRITURA.length} pasajes">Ver los ${ESCRITURA.length} pasajes</button></p>`;
    h += notes(R3.escrituraAfter, false);
    h += annot(`n03-escritura`, `La Escritura que usa`) + `</section>`;

    h += `<section class="s" id="objeciones" aria-labelledby="h-objeciones"><h2 class="h" id="h-objeciones">Objeciones</h2>`;
    h += `<p class="sub">Objeciones a la postura católica. Abre cada una para leer en profundidad la respuesta católica.</p>`;
    h += notes(R3.objeciones);
    h += `<ul class="oblist">`;
    OB_ORDER.forEach(function(id){
      const o = OBJ[id];
      const len = plain(o.syn).length;
      h += `<li class="obitem">${notes(o.listRv)}${len > SYN_LIMIT ? rnote(`Síntesis de ${len} caracteres: más larga que las 2–3 líneas acordadas.`) : ``}<span class="rtag">${id}</span><div class="obitem-t"><a class="go" href="#${id.toLowerCase()}">${esc(o.title)}</a></div><p class="obitem-s">${rich(o.syn)}</p></li>`;
    });
    h += `</ul>`;
    if (OB_LIST_NOTE) {
      h += notes(R3.silent);
      (Array.isArray(OB_LIST_NOTE) ? OB_LIST_NOTE : [OB_LIST_NOTE]).forEach(function(t){ h += `<p class="silent">${rich(t)}</p>`; });
    }
    h += annot(`n03-objeciones`, `Objeciones`) + `</section>`;

    h += `<section class="s" id="vive" aria-labelledby="h-vive"><h2 class="h" id="h-vive">Cómo se vive</h2>`;
    h += notes(R3.vive);
    h += `<div class="intro">${VIVE.intro.map(function(p){ return `<p>${rich(p)}</p>`; }).join(``)}</div>`;
    h += `<dl class="cv">`;
    VIVE.items.forEach(function(it){
      h += `<div class="cv-row">${notes(it.rv)}<div class="cv-in"><dt>${esc(it.l)}</dt><dd>${rich(it.d)} ${cites(it.s)}</dd></div></div>`;
    });
    h += `</dl>`;
    h += annot(`n03-vive`, `Cómo se vive`) + `</section>`;

    h += `<section class="s" id="autoridad" aria-labelledby="h-autoridad"><h2 class="h" id="h-autoridad">Grado de autoridad</h2>`;
    h += notes(R3.autoridad);
    h += `<dl class="grades">`;
    META.gradeOrder.forEach(function(k){
      const G = GRADES[k];
      h += `<div class="g-row">${notes((R3.gradeRow || {})[k])}<div class="g-in"><dt>${esc(G.label)}${G.sub ? `<small>${esc(G.sub)}</small>` : ``}</dt><dd>«${esc(G.def)}» <button type="button" class="cite" data-src="${G.src}">${esc(G.srcLabel)}</button></dd></div></div>`;
    });
    h += `</dl>`;
    h += notes(R3.autoridadAfter, false);
    h += annot(`n03-autoridad`, `Grado de autoridad`) + `</section>`;
    h += `<div class="flowclear"></div></div>`;
    return h;
  }

  function ownItem(id, idx){
    const s = SRC[id];
    const list = typeof idx === `number` ? [s.ex[idx]] : s.ex;
    return list.map(function(ex){
      const lang = mainLang(ex);
      const main = ex[lang];
      let lv;
      if (ex.es) {
        lv = esc(LV[ex.esLv] || ``) + (ex.esFrom ? ` ${esc(ex.esFrom)}.` : ``);
        if (ex.esLv === `ia`) lv = esc(`Traducción asistida por IA${ex.esFrom ? ` ${ex.esFrom}` : ``}.`) + ` <span class="rv-inline">sin revisar por Pedro</span>`;
      } else {
        lv = `<span class="rv-inline">Sin español en el dosier: se muestra el ${LANGS.find(function(l){ return l[0] === lang; })[1]}.</span>`;
      }
      return `<div class="own-item"><blockquote class="bq" lang="${lang}">${esc(main)}</blockquote><span class="own-attr"><button type="button" class="cite" data-src="${id}">${esc(s.title)}${ex.pg && ex.pg.length < 12 ? ` (${esc(ex.pg)})` : ``}</button><br>${lv}</span></div>`;
    }).join(``);
  }

  function render04(id){
    const o = OBJ[id];
    const pos = OB_ORDER.indexOf(id);
    let h = `<div class="col">`;
    h += `<nav class="crumbs" aria-label="Ruta"><span>Doctrinas</span><span class="s" aria-hidden="true">/</span><span>${esc(META.doctrine)}</span><span class="s" aria-hidden="true">/</span><a href="#p03">Católica</a><span class="s" aria-hidden="true">/</span><a href="#p03/objeciones">Objeciones</a></nav>`;
    h += rnote(`${id}. ${R4.top}`);
    h += `<p class="kicker">Objeción a la postura católica</p><h1 class="t ob">${esc(o.title)}</h1>`;

    h += `<section class="s" id="objecion" aria-labelledby="h-objecion"><h2 class="h" id="h-objecion">La objeción</h2>`;
    h += notes(R4.objecion);
    const moreCount = o.own.more.reduce(function(n, sid){ return n + SRC[sid].ex.length; }, 0);
    h += `<div class="obbox"><p class="syn">${rich(o.syn)}</p><div class="own"><p class="own-h">En sus propios textos</p>`;
    h += o.own.lead.map(function(sid){ return ownItem(sid, 0); }).join(``);
    if (moreCount) {
      h += `<div id="own-more" hidden>${o.own.more.map(function(sid){ return ownItem(sid); }).join(``)}</div>`;
      h += `<button type="button" class="more" data-more="own-more" aria-expanded="false" aria-controls="own-more">${CHEVRON}<span>Ver ${moreCount} ${moreCount === 1 ? `texto` : `textos`} más</span></button>`;
    }
    h += `</div></div><p class="who">${esc(o.who)}</p></section>`;

    h += `<section class="s" id="respuesta" aria-labelledby="h-respuesta"><h2 class="h" id="h-respuesta">La respuesta</h2>`;
    h += (o.rv || []).map(function(t){ return rnote(t); }).join(``);
    o.answer.forEach(function(p, i){
      if (o.answerRv && o.answerRv[i]) h += notes(o.answerRv[i]);
      if (typeof p === `object`) h += `<blockquote class="bq" style="margin:0 0 14px">${(Array.isArray(p.bq) ? p.bq : [p.bq]).map(function(x){ return `<p>${rich(x)}</p>`; }).join(``)}</blockquote>${p.attr ? `<span class="attr" style="margin:-8px 0 14px">${rich(p.attr)}</span>` : ``}`;
      else h += `<p class="read">${rich(p)}</p>`;
    });
    h += `</section>`;

    h += `<section class="s" id="fuentes" aria-labelledby="h-fuentes"><h2 class="h" id="h-fuentes">Fuentes citadas</h2><ul class="srcs">`;
    o.fuentes.forEach(function(f){
      h += `<li class="src-row"><div class="src-in"><span class="src-name"><button type="button" class="cite serif" data-src="${f.ids}">${esc(f.name)}</button>${f.date ? `<span class="src-date">${esc(f.date)}</span>` : ``}</span>${tl(f.year)}</div></li>`;
    });
    h += `</ul>`;
    const undated = o.fuentes.filter(function(f){ return !f.year; }).map(function(f){ return f.name; });
    if (undated.length) h += rnote(`Sin fecha en el dosier para ${undated.join(`; `)}: sin marca en la línea de tiempo.`, false);
    h += `</section>`;

    const P = o.pasajes;
    if (!P.resp.length && !P.obj.length && P.noneNote) h += notes(P.noneNote, false);
    if (P.resp.length || P.obj.length) {
      h += `<section class="s" id="pasajes" aria-labelledby="h-pasajes"><h2 class="h" id="h-pasajes">Pasajes</h2>`;
      h += notes(R4.pasajes);
      h += notes(o.pasajesRv);
      const group = function(label, refs, note){
        if (!refs.length) return ``;
        let g = `<p class="pgroup">${label}</p><ul class="plist">`;
        refs.forEach(function(r){
          const v = VERSES[r];
          g += `<li class="p-row"><div class="p-in"><span class="p-ref"><button type="button" class="go" data-goto="${esc(r)}">${esc(r)}</button></span>${v ? `<p class="p-txt">«${esc(v.es)}»</p>` : `<p class="p-txt none"><span class="rv-inline">sin texto en el dosier</span></p>`}</div></li>`;
        });
        g += `</ul>`;
        if (note) g += rnote(note, false);
        return g;
      };
      h += group(`Citados en la respuesta`, P.resp, P.respNote) + group(`Citados en la objeción`, P.obj, P.objNote);
      h += `</section>`;
    }

    h += `<section class="s" id="otras" aria-labelledby="h-otras"><h2 class="h" id="h-otras">Otras objeciones</h2><ul class="oblist">`;
    OB_ORDER.filter(function(x){ return x !== id; }).forEach(function(x){
      h += `<li class="obitem compact"><div class="obitem-t"><a class="go" href="#${x.toLowerCase()}">${esc(OBJ[x].title)}</a></div><p class="obitem-s">${esc(plain(OBJ[x].syn))}</p></li>`;
    });
    h += `</ul></section>`;

    const prev = pos > 0 ? OB_ORDER[pos - 1] : null;
    const next = pos < OB_ORDER.length - 1 ? OB_ORDER[pos + 1] : null;
    h += `<nav class="prevnext" aria-label="Anterior y siguiente">`;
    h += prev ? `<a class="pn" href="#${prev.toLowerCase()}"><span>Anterior</span><span>${esc(OBJ[prev].title)}</span></a>` : `<a class="pn" href="#p03/objeciones"><span>Anterior</span><span>Objeciones a la postura católica</span></a>`;
    h += next ? `<a class="pn next" href="#${next.toLowerCase()}"><span>Siguiente</span><span>${esc(OBJ[next].title)}</span></a>` : `<span></span>`;
    h += `</nav>`;
    h += annot(`n${id}`, `${id}`);
    h += `<div class="flowclear"></div></div>`;
    return h;
  }

  function renderQ(){
    let h = `<div class="qwrap">`;
    h += `<h1 class="q-h1">Preguntas para Pedro (${QUESTIONS.length})</h1>`;
    h += `<p class="q-lede">Decisiones abiertas del dosier, con sus opciones y la recomendación del agente (una recomendación, no una decisión). Respondé las que quieras y anotá cada sección; todo se guarda como borrador en este navegador. «Copiar respuestas» arma un texto numerado para pegar en la conversación.</p>`;
    h += `<details class="weak"><summary>Puntos débiles tras la verificación</summary><ul>${WEAK.map(function(w){ return `<li>${esc(w)}</li>`; }).join(``)}</ul></details>`;
    h += copyBlock(`top`);
    QUESTIONS.forEach(function(q){
      const v = state.answers[q.n] || ``;
      h += `<div class="q" id="q-${q.n}"><div class="q-n">Pregunta ${q.n}</div><h2 class="q-t">${esc(q.t)}</h2>`;
      if (q.ctx) h += `<p class="q-ctx">${esc(q.ctx)}</p>`;
      if (q.opts && q.opts.length) h += `<ul class="q-opts">${q.opts.map(function(o){ return `<li>${esc(o)}</li>`; }).join(``)}</ul>`;
      h += `<p class="q-rec"><b>Recomendación del agente:</b> ${esc(q.rec)}</p>`;
      if (q.rel && q.rel.length) h += `<p class="q-rel">Ver en la revisión: ${q.rel.map(function(r){ return `<a href="${r[0]}">${esc(r[1])}</a>`; }).join(`, `)}</p>`;
      h += `<div class="qa"><label for="qa-${q.n}">Tu respuesta</label><button type="button" class="accept" data-accept="${q.n}">Acepto la recomendación</button><textarea id="qa-${q.n}" data-answer="${q.n}" rows="2">${esc(v)}</textarea></div></div>`;
    });
    h += `<h2 class="h-q">Notas por sección</h2><div class="notes">`;
    NOTE_FIELDS.forEach(function(f){
      h += `<div class="note-f"><label for="nf-${f[0]}">${esc(f[1])}</label><textarea id="nf-${f[0]}" data-note="${f[0]}" rows="2">${esc(state.notes[f[0]] || ``)}</textarea></div>`;
    });
    h += `</div>` + copyBlock(`bottom`) + `</div>`;
    return h;
  }
  function copyBlock(where){
    return `<div class="qactions"><button type="button" class="btn primary" data-copy="${where}">${COPY}Copiar respuestas</button><span class="status" id="save-state-${where}" aria-live="polite"></span></div><div class="fallback" id="fallback-${where}" hidden><p class="status">El navegador no dejó copiar. Seleccioná el texto de abajo y copialo a mano.</p><textarea readonly aria-label="Texto de las respuestas"></textarea></div>`;
  }

  function compose(){
    const lines = [];
    const filledQ = QUESTIONS.filter(function(q){ return (state.answers[q.n] || ``).trim(); });
    const filledN = NOTE_FIELDS.filter(function(f){ return (state.notes[f[0]] || ``).trim(); });
    if (!filledQ.length && !filledN.length) return ``;
    const d = new Date();
    lines.push(META.barTitle);
    lines.push(`Respuestas de Pedro, ${String(d.getDate()).padStart(2,`0`)}/${String(d.getMonth()+1).padStart(2,`0`)}/${d.getFullYear()}`);
    if (filledQ.length) {
      lines.push(``, `PREGUNTAS`);
      filledQ.forEach(function(q){ lines.push(``, `${q.n}. ${q.t}`, `Respuesta: ${state.answers[q.n].trim()}`); });
    }
    if (filledN.length) {
      lines.push(``, `NOTAS POR SECCIÓN`);
      filledN.forEach(function(f){ lines.push(``, `${f[1]}:`, state.notes[f[0]].trim()); });
    }
    return lines.join(`\n`);
  }
  function doCopy(where){
    const text = compose();
    const status = document.getElementById(`save-state-${where}`);
    const fb = document.getElementById(`fallback-${where}`);
    if (!text) { if (status) status.textContent = `Todavía no hay respuestas ni notas.`; return; }
    const showFallback = function(){
      if (!fb) return;
      fb.hidden = false;
      const ta = fb.querySelector(`textarea`);
      ta.value = text;
      ta.focus();
      ta.select();
      if (status) status.textContent = `No se pudo copiar automáticamente.`;
    };
    const ok = function(){
      const nq = QUESTIONS.filter(function(q){ return (state.answers[q.n] || ``).trim(); }).length;
      const nn = NOTE_FIELDS.filter(function(f){ return (state.notes[f[0]] || ``).trim(); }).length;
      if (status) status.textContent = `Copiado: ${nq} ${nq === 1 ? `respuesta` : `respuestas`} y ${nn} ${nn === 1 ? `nota` : `notas`}.`;
      if (fb) fb.hidden = true;
    };
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(ok, showFallback);
      } else { showFallback(); }
    } catch { showFallback(); }
  }

  const panel = document.getElementById(`panel`);
  const pBody = document.getElementById(`panel-body`);
  const pFoot = document.getElementById(`panel-foot`);
  const pKick = document.getElementById(`panel-kicker`);
  const pHead = document.getElementById(`panel-head`);
  const mq = window.matchMedia(`(max-width: 720px)`);
  let copyText = ``;

  function exHtml(ex){
    const lang = mainLang(ex);
    if (!lang) return ``;
    const main = ex[lang];
    let h = `<div class="ex"><blockquote class="bq" lang="${lang}"><p>${esc(main)}</p></blockquote>`;
    if (ex.es) {
      if (ex.esLv === `ia`) h += `<p class="lv">${esc(`Traducción asistida por IA${ex.esFrom ? ` ${ex.esFrom}` : ``}.`)} <span class="rv-inline">sin revisar por Pedro</span></p>`;
      else h += `<p class="lv">${esc(LV[ex.esLv] || ``)}</p>`;
    } else {
      h += `<p class="lv"><span class="rv-inline">Sin español en el dosier.</span></p>`;
    }
    if (ex.pg) h += `<p class="pg">${esc(ex.pg)}</p>`;
    const others = [];
    if (ex.la && lang !== `la`) others.push([`Latín`, ex.la, `la`]);
    if (ex.de && lang !== `de`) others.push([`Alemán`, ex.de, `de`]);
    if (ex.el && lang !== `el`) others.push([`Griego`, ex.el, `el`]);
    if (ex.en && lang !== `en`) others.push([`Inglés`, ex.en, `en`]);
    if (others.length) {
      h += `<details class="orig"><summary>Original y otras versiones</summary>` + others.map(function(o){ return `<p class="orig-l">${o[0]}</p><p class="orig-t ${o[2]}" lang="${o[2]}">${esc(o[1])}</p>`; }).join(``) + `</details>`;
    }
    return h + `</div>`;
  }
  function srcHtml(id, first){
    const s = SRC[id];
    if (!s) return rnote(`Fuente «${id}» no encontrada.`, false);
    let h = `<div class="srcblock"${first ? `` : ` style="margin-top:22px;padding-top:16px;border-top:1px solid var(--line)"`}>`;
    h += `<h2 class="panel-title"${first ? ` id="panel-title"` : ``}>${esc(s.title)}</h2>`;
    if (s.date) h += `<p class="panel-date">${esc(s.date)}</p>`;
    h += (s.ex || []).map(exHtml).join(``);
    (s.rv || []).forEach(function(t){ h += rnote(t, false); });
    if (s.ed) h += `<p class="ed">${esc(s.ed)}</p>`;
    if (s.year) h += `<div style="margin-top:10px">${tl(s.year, true)}</div>`;
    return h + `</div>`;
  }
  function openPanel(kicker, body, foot, label, trigger){
    pKick.textContent = kicker;
    pBody.innerHTML = body;
    pFoot.innerHTML = foot;
    pFoot.hidden = !foot;
    panel.setAttribute(`aria-label`, label);
    panel.hidden = false;
    pBody.scrollTop = 0;
    if (!(trigger && panel.contains(trigger))) lastTrigger = trigger || null;
    placePanel();
    panel.tabIndex = -1;
    panel.focus({preventScroll:true});
  }
  function closePanel(){
    if (panel.hidden) return;
    panel.hidden = true;
    if (lastTrigger && document.body.contains(lastTrigger)) lastTrigger.focus({preventScroll:true});
    lastTrigger = null;
  }
  function barH(){ const b = document.querySelector(`.rbar`); return b ? b.getBoundingClientRect().height : 0; }
  function clampPos(x, y){
    const w = panel.offsetWidth || 410, hgt = panel.offsetHeight || 300;
    const minY = barH() + 8;
    x = Math.min(Math.max(8, x), Math.max(8, window.innerWidth - w - 8));
    y = Math.min(Math.max(minY, y), Math.max(minY, window.innerHeight - hgt - 8));
    return {x:x, y:y};
  }
  function placePanel(){
    if (panel.hidden) return;
    if (mq.matches) { panel.style.left = ``; panel.style.top = ``; return; }
    const start = panelPos || {x: window.innerWidth - (panel.offsetWidth || 410) - 24, y: barH() + 72};
    const p = clampPos(start.x, start.y);
    panel.style.left = p.x + `px`;
    panel.style.top = p.y + `px`;
  }
  function openSources(ids, trigger){
    const list = ids.split(`,`).map(function(s){ return s.trim(); }).filter(Boolean);
    const body = list.map(function(id, i){ return srcHtml(id, i === 0); }).join(``);
    const first = SRC[list[0]] || {};
    const links = list.map(function(id){ return SRC[id] && SRC[id].url; }).filter(Boolean)
      .filter(function(u, i, arr){ return arr.findIndex(function(v){ return v.href === u.href; }) === i; });
    let foot = links.map(function(u){ return `<a class="ext" href="${esc(u.href)}" target="_blank" rel="noopener noreferrer">${esc(u.label)}${EXT}</a>`; }).join(``);
    foot += `<button type="button" class="copy" data-copycite>${COPY}Copiar cita</button>`;
    copyText = list.map(function(id){
      const s = SRC[id]; if (!s) return ``;
      const ex = (s.ex || [])[0];
      const q = ex ? (ex[mainLang(ex)] || ``) : ``;
      return (q ? `«${q}» ` : ``) + `${s.title}${s.date ? ` (${s.date})` : ``}. ${s.ed || ``}`.trim();
    }).filter(Boolean).join(`\n\n`);
    openPanel(list.length > 1 ? `Fuentes` : (first.kind || `Fuente`), body, foot, `${list.length > 1 ? `Fuentes` : (first.kind || `Fuente`)}: ${first.title || ``}`, trigger);
  }
  function openVerse(ref, trigger){
    const v = VERSES[ref];
    let body = `<h2 class="panel-title" id="panel-title">${esc(ref)}</h2>`;
    if (v) {
      body += `<div class="ex"><blockquote class="bq" lang="es"><p>${esc(v.es)}</p></blockquote><p class="lv">${esc(LV[v.lv || `rv1909`])}</p></div>`;
      if (v.rv) body += rnote(v.rv, false);
    } else {
      body += rnote(R4.verseMissing || `El dosier no transcribe este versículo.`, false);
    }
    const foot = `<button type="button" class="go" data-goto="${esc(ref)}">Abrir la página del pasaje</button>`;
    copyText = v ? `«${v.es}» ${ref} (${LV[v.lv || `rv1909`].replace(/\.$/, ``)})` : ref;
    openPanel(`Pasaje`, body, foot, `Pasaje: ${ref}`, trigger);
  }
  function openGrade(key, trigger){
    const G = GRADES[key];
    let body = `<h2 class="panel-title" id="panel-title">${esc(G.label)}</h2>`;
    if (G.sub) body += `<p class="panel-date">${esc(G.sub)}</p>`;
    body += `<div class="ex"><blockquote class="bq" lang="es"><p>${esc(G.def)}</p></blockquote><p class="lv">${esc(G.srcLabel)}. ${esc(LV[G.lv || `vat`])}</p></div>`;
    if (G.rv) body += notes(G.rv, false);
    const foot = `<a class="ext" href="#p03/autoridad" data-closepanel>Ver todos los grados</a><button type="button" class="cite" data-src="${G.src}" style="font-size:13.5px">${esc(G.srcLabel)}</button>`;
    copyText = `«${G.def}» ${G.srcLabel}`;
    openPanel(`Grado de autoridad`, body, foot, `Grado de autoridad: ${G.label}`, trigger);
  }

  let drag = null;
  pHead.addEventListener(`pointerdown`, function(e){
    if (mq.matches || e.button !== 0 || e.target.closest(`button`)) return;
    const r = panel.getBoundingClientRect();
    drag = {dx: e.clientX - r.left, dy: e.clientY - r.top};
    pHead.setPointerCapture(e.pointerId);
    pHead.classList.add(`dragging`);
  });
  pHead.addEventListener(`pointermove`, function(e){
    if (!drag) return;
    const p = clampPos(e.clientX - drag.dx, e.clientY - drag.dy);
    panel.style.left = p.x + `px`;
    panel.style.top = p.y + `px`;
  });
  function endDrag(e){
    if (!drag) return;
    drag = null;
    pHead.classList.remove(`dragging`);
    try { pHead.releasePointerCapture(e.pointerId); } catch {}
    panelPos = {x: parseFloat(panel.style.left) || 0, y: parseFloat(panel.style.top) || 0};
  }
  pHead.addEventListener(`pointerup`, endDrag);
  pHead.addEventListener(`pointercancel`, endDrag);
  window.addEventListener(`resize`, placePanel);
  document.getElementById(`panel-close`).addEventListener(`click`, closePanel);

  function toast(msg){
    const t = document.getElementById(`toast`);
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.hidden = true; }, 2800);
  }

  const tabs = document.getElementById(`tabs`);
  function renderTabs(){
    let h = `<a href="#p03">Pantalla 03</a><span class="sep" aria-hidden="true"></span>`;
    OB_IDS.forEach(function(id){ h += `<a href="#${id.toLowerCase()}">04 · ${id}</a>`; });
    h += `<span class="sep" aria-hidden="true"></span><a href="#preguntas">Preguntas para Pedro (${QUESTIONS.length})</a>`;
    tabs.innerHTML = h;
  }
  function route(){
    const raw = (location.hash || `#p03`).slice(1);
    const parts = raw.split(`/`);
    let view = parts[0].toLowerCase();
    const anchor = parts[1] || null;
    const v03 = document.getElementById(`view-p03`), vob = document.getElementById(`view-ob`), vq = document.getElementById(`view-q`);
    closePanel();
    let key;
    if (obFromView(view)) {
      const id = obFromView(view);
      vob.innerHTML = render04(id);
      v03.hidden = true; vq.hidden = true; vob.hidden = false;
      key = `#${view}`;
    } else if (view === `preguntas`) {
      vq.innerHTML = renderQ();
      v03.hidden = true; vob.hidden = true; vq.hidden = false;
      key = `#preguntas`;
      const st = document.getElementById(`save-state-top`);
      if (st && !storageOk) st.textContent = `Este navegador no guarda borradores: copiá las respuestas antes de cerrar.`;
    } else {
      v03.innerHTML = render03();
      vob.hidden = true; vq.hidden = true; v03.hidden = false;
      key = `#p03`;
    }
    Array.prototype.forEach.call(tabs.querySelectorAll(`a`), function(a){
      if (a.getAttribute(`href`) === key) { a.setAttribute(`aria-current`, `page`); a.scrollIntoView({block:`nearest`, inline:`nearest`}); }
      else a.removeAttribute(`aria-current`);
    });
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) { const y = el.getBoundingClientRect().top + window.scrollY - barH() - 16; window.scrollTo(0, y); return; }
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener(`hashchange`, route);

  document.addEventListener(`click`, function(e){
    const t = e.target.closest(`[data-src],[data-verse],[data-grade],[data-goto],[data-more],[data-annot],[data-accept],[data-copy],[data-copycite],[data-closepanel]`);
    if (!t) return;
    if (t.hasAttribute(`data-src`)) { openSources(t.getAttribute(`data-src`), t); return; }
    if (t.hasAttribute(`data-verse`)) { openVerse(t.getAttribute(`data-verse`), t); return; }
    if (t.hasAttribute(`data-grade`)) { openGrade(t.getAttribute(`data-grade`), t); return; }
    if (t.hasAttribute(`data-goto`)) { toast(`Lleva a otra pantalla (${t.getAttribute(`data-goto`)}), fuera de esta revisión.`); return; }
    if (t.hasAttribute(`data-closepanel`)) { closePanel(); return; }
    if (t.hasAttribute(`data-more`)) {
      const target = document.getElementById(t.getAttribute(`data-more`));
      const open = t.getAttribute(`aria-expanded`) !== `true`;
      t.setAttribute(`aria-expanded`, String(open));
      const label = t.querySelector(`span`);
      if (target.id === `stmts`) {
        target.querySelectorAll(`[data-extra]`).forEach(function(li){ li.hidden = !open; });
        if (!label.dataset.closed) label.dataset.closed = label.textContent;
        label.textContent = open ? `Mostrar menos` : label.dataset.closed;
      } else {
        target.hidden = !open;
        if (!label.dataset.closed) label.dataset.closed = label.textContent;
        label.textContent = open ? `Ver menos` : label.dataset.closed;
      }
      return;
    }
    if (t.hasAttribute(`data-annot`)) {
      const box = t.nextElementSibling;
      const open = box.hidden;
      box.hidden = !open;
      t.setAttribute(`aria-expanded`, String(open));
      if (open) box.querySelector(`textarea`).focus();
      return;
    }
    if (t.hasAttribute(`data-accept`)) {
      const n = t.getAttribute(`data-accept`);
      const ta = document.getElementById(`qa-${n}`);
      const cur = ta.value.trim();
      ta.value = cur ? `${cur}\nAcepto la recomendación.` : `Acepto la recomendación.`;
      state.answers[n] = ta.value;
      save();
      ta.focus();
      return;
    }
    if (t.hasAttribute(`data-copy`)) { doCopy(t.getAttribute(`data-copy`)); return; }
    if (t.hasAttribute(`data-copycite`)) {
      const done = function(){ toast(`Cita copiada.`); };
      try {
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(copyText).then(done, function(){ toast(`El navegador no dejó copiar la cita.`); });
        else toast(`El navegador no dejó copiar la cita.`);
      } catch { toast(`El navegador no dejó copiar la cita.`); }
    }
  });
  document.addEventListener(`input`, function(e){
    const t = e.target;
    if (t.hasAttribute && t.hasAttribute(`data-answer`)) { state.answers[t.getAttribute(`data-answer`)] = t.value; save(); }
    else if (t.hasAttribute && t.hasAttribute(`data-note`)) {
      const k = t.getAttribute(`data-note`);
      state.notes[k] = t.value;
      save();
      const btn = document.querySelector(`[data-annot="${k}"]`);
      if (btn) {
        const dot = btn.querySelector(`.dotfill`);
        if (t.value.trim() && !dot) btn.insertAdjacentHTML(`beforeend`, `<span class="dotfill" aria-hidden="true"></span>`);
        if (!t.value.trim() && dot) dot.remove();
      }
    }
  });
  document.addEventListener(`keydown`, function(e){
    if (e.key === `Escape` && !panel.hidden) { e.preventDefault(); closePanel(); }
  });

  load();
  const bt = document.querySelector(`.rbar-title`);
  if (bt) bt.textContent = META.barTitle;
  renderTabs();
  route();
})();
