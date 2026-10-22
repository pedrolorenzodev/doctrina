(() => {
const {$, $$, esc, store} = D;
const DT = window.DATA;
const html = document.documentElement;
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE_REVEAL = 'cubic-bezier(0.22, 1, 0.36, 1)';
const NB = 'Esta página no forma parte de la propuesta de hoy.';
const PAGE = document.body.classList.contains('s05') ? 'reader' : document.body.classList.contains('s06') ? 'detail' : 'other';
const SCREEN = PAGE === 'reader' ? '05' : PAGE === 'detail' ? '06' : '03';

/* proposal options (html[data-pp-<key>]); the first value is what exists today or the plain choice */
const OPTS = {rdsel: ['directo', 'tarjeta', 'costado'], dtend: ['final', 'arriba', 'costado'], wbw: ['fichas', 'filas', 'lado'], back: ['capa', 'pagina']};
const DEF = {rdsel: 'directo', dtend: 'final', wbw: 'fichas', back: 'capa'};
Object.keys(OPTS).forEach(k => { const v = store.get('pp-' + k, DEF[k]); html.setAttribute('data-pp-' + k, OPTS[k].includes(v) ? v : DEF[k]); });
const opt = k => html.getAttribute('data-pp-' + k) || DEF[k];
addEventListener('pp', e => { if (OPTS[e.detail.key] && D.inFrame) parent.postMessage({dz: 'ppset', key: e.detail.key, value: e.detail.value}, '*'); });
const PPBOX = {
  rdsel: '<div class="pp" data-pp="rdsel" data-label="Probar: al tocar una frase" data-opts="directo=Directo|tarjeta=Tarjeta debajo|costado=Panel al costado" data-default="directo"><b>Directo:</b> la frase abre su detalle, que es otra página. <b>Tarjeta debajo:</b> la frase se marca y abre una tarjeta bajo su párrafo con lo que tiene el detalle. <b>Panel al costado:</b> el detalle se abre a la derecha, sin dejar el texto (en el celular, media hoja abajo).</div>',
  back: '<div class="pp" data-pp="back" data-label="Probar: el lector es" data-opts="capa=Una capa|pagina=Una página" data-default="capa"><b>Una capa</b> (lo aprobado en v2): cubre la página de donde venís y «Volver a donde estabas» la cierra. <b>Una página</b> del sitio, con la barra lateral y la ruta; «Volver a donde estabas» te devuelve al mismo lugar.</div>',
  dtend: '<div class="pp" data-pp="dtend" data-label="Probar: dónde van «Dónde se usa» y «Citar»" data-opts="final=Al final|arriba=Citar bajo el pasaje|costado=Columna al costado" data-default="final"><b>Al final:</b> las dos secciones, en ese orden, antes de anterior y siguiente. <b>Citar bajo el pasaje:</b> una fila de acciones justo debajo del texto; «Dónde se usa» al final. <b>Columna al costado:</b> desde 1100 px, las dos en una columna fija a la derecha; más angosto, van al final.</div>',
  wbw: '<div class="pp" data-pp="wbw" data-label="Probar: palabra por palabra" data-opts="fichas=Fichas|filas=Filas|lado=Ficha al lado" data-default="fichas"><b>Fichas</b> (P1·06): cada palabra con transliteración, griego y sentido; al tocarla, su ficha se abre en la ventana de siempre. <b>Filas:</b> una palabra por fila, como el acordeón de Catena; la ficha se despliega en la fila. <b>Ficha al lado:</b> la ficha queda fija a la derecha y cambia al pasar o tocar, como el análisis de STEP.</div>'
};

/* the way back: a small stack of «where you were» kept for this tab */
const NAV = {get: () => store.get('nav', []), set: v => store.set('nav', v)};
{ const keep = store.get('fwd', null) || store.get('ret', null); store.set('fwd', null); if (!keep) NAV.set([]); }
D.forward = (screen, hash, from) => { const st = NAV.get(); st.push(from); NAV.set(st.slice(-8)); store.set('fwd', 1); D.go(screen, hash); };
D.lateral = (screen, hash) => { store.set('fwd', 1); D.go(screen, hash); };
D.goBack = () => { const st = NAV.get(); const f = st.pop(); NAV.set(st); if (!f) return; store.set('ret', f); D.go(f.screen, f.hash || ''); };
const topOfStack = () => { const st = NAV.get(); return st[st.length - 1] || null; };
const scrollTopOf = root => root && root.classList && root.classList.contains('rd') ? root.scrollTop : scrollY;
const jumpTo = (y, root) => { if (root && root.classList && root.classList.contains('rd')) { root.scrollTop = y; return; } if (D.lenis) D.lenis.scrollTo(y, {immediate: true}); else scrollTo(0, y); };
const flash = el => { if (!el) return; el.classList.add('hl'); setTimeout(() => { el.classList.add('fade'); el.classList.remove('hl'); setTimeout(() => el.classList.remove('fade'), 1300); }, 1800); };

/* sources */
const unitWord = n => n.replace(/^cap\. /, 'capítulo ').replace(/^can\. /, 'canon ');
const TR13 = {
  key: 'tr13', kind: 'doc', kicker: 'Concilio de Trento', title: 'Decreto sobre el santísimo sacramento de la Eucaristía', meta: 'Sesión XIII, 11 de octubre de 1551', where: 'Concilio de Trento, sesión XIII',
  hint: 'Cada frase abre su detalle: el texto latino, otras traducciones y dónde se cita en Doctrina.',
  crumbs: [['Fuentes'], ['Concilio de Trento'], ['Sesión XIII', '05', 'tr13']],
  units: DT.TR.map(u => Object.assign({id: u.n.replace('. ', '-')}, u)),
  eds: {ayala: {name: 'López de Ayala (1785)', lang: 'español'}, waterworth: {name: 'Waterworth (1848)', lang: 'inglés'}},
  unitTitle: u => 'Sesión XIII, ' + unitWord(u.n),
  short: u => 'Trento, ses. XIII, ' + u.n
};
const EDORDER = ['rv1909', 'scio', 'blm', 'bsb', 'kjv', 'web', 'dra', 'ylt'];
const EDSHORT = {rv1909: 'Reina-Valera 1909', scio: 'Scío (1797)', blm: 'Biblia libre para el mundo', bsb: 'Berean Standard Bible', kjv: 'King James', web: 'World English Bible', dra: 'Douay-Rheims', ylt: 'Young (literal)'};
const EDFULL = {rv1909: 'Reina-Valera 1909', scio: 'Felipe Scío de San Miguel, Nuevo Testamento (2.ª ed., 1797)', blm: 'Santa Biblia libre para el mundo', bsb: 'Berean Standard Bible (2023)', kjv: 'King James Version (texto de 1769)', web: 'World English Bible', dra: 'Douay-Rheims (revisión de Challoner, edición estadounidense de 1899)', ylt: 'Young\'s Literal Translation (1898)'};
const JN6 = {
  key: 'jn6', kind: 'bible', kicker: 'Evangelio según san Juan', title: 'Juan 6', where: 'Juan 6',
  hint: 'Cada versículo abre su detalle: el griego palabra por palabra, otras traducciones y dónde se cita en Doctrina.',
  crumbs: [['Biblia'], ['Nuevo Testamento'], ['Juan'], ['Capítulo 6', '05', 'jn6']],
  units: Object.keys(DT.JN).map(n => ({id: n, n, v: DT.JN[n]})),
  unitTitle: u => 'Juan 6:' + u.n,
  short: u => 'Juan 6:' + u.n
};
const SRC = {tr13: TR13, jn6: JN6};
D.SRC = SRC;
const unitOf = (src, id) => src.units.find(u => u.id === id);
const edOf = src => { const e = store.get('ed-' + src.key, src.kind === 'bible' ? 'rv1909' : 'ayala'); return e; };
const edsFor = (src, u) => src.kind === 'bible' ? EDORDER.filter(e => u.v.t[e]) : ['ayala'].concat(u.en ? ['waterworth'] : []);
const edName = (src, e) => src.kind === 'bible' ? (EDFULL[e] || e) : src.eds[e].name;

/* where each passage is used in Doctrina (from the approved 03 and the dossiers) */
const CAT = 'La posición católica, ';
const QEU = {
  'qe-1': 'Fuente de la afirmación «La presencia real».', 'qe-2': 'Fuente de la afirmación «La transubstanciación».', 'qe-4': 'Fuente de la afirmación «Cristo entero en cada especie».',
  'qe-5': 'Fuente de la afirmación «La adoración».', 'qe-8': 'Fuente de la afirmación «Los frutos de la comunión».'
};
const qe = id => [CAT + 'Qué enseña', '03', 'que-ensena', QEU[id]];
const USES_TR = {
  'cap-1': [qe('qe-1'), [CAT + 'Por qué', '03', 'por-que', 'En la introducción: las palabras de la última Cena, «Esto es mi cuerpo», tomadas en su sentido propio.'], [CAT + 'La Escritura que usa', '03', 'escritura', 'Junto a Mateo 26:26-28 y los demás relatos de la última Cena.']],
  'cap-2': [qe('qe-8')], 'cap-3': [qe('qe-4')],
  'cap-4': [qe('qe-2'), [CAT + 'Por qué', '03', 'por-que', 'En la introducción: que la Iglesia siempre lo creyó así.']],
  'cap-5': [qe('qe-5')], 'can-1': [qe('qe-1')], 'can-2': [qe('qe-2')], 'can-5': [qe('qe-8')], 'can-6': [qe('qe-5')], 'can-11': [qe('qe-8')]
};
const usesOf = (src, u) => {
  if (src.kind === 'doc') { const l = USES_TR[u.id] || []; return l.length ? [['La Eucaristía', l]] : []; }
  const n = +u.n, l = [], h = [];
  if (n >= 51 && n <= 58) l.push([CAT + 'La Escritura que usa', '03', 'escritura', 'En el pasaje Juan 6:51-58, con su lectura católica.']);
  if (n === 55) l.push([CAT + 'Por qué', '03', 'por-que', 'En la frase de cierre, como lo cita Ecclesia de Eucharistia 16.']);
  if (n >= 51 && n <= 56) l.push(['La posición ortodoxa, La Escritura que usa', null, null, 'En el pasaje Juan 6:51-56.']);
  if (n >= 53 && n <= 58) l.push(['La posición reformada, La Escritura que usa', null, null, 'En el pasaje Juan 6:53-58, 63.']);
  if (n >= 53 && n <= 56) l.push(['La posición bautista, La Escritura que usa', null, null, 'En el pasaje Juan 6:35, 47, 53-56, 63.']);
  if (n === 53) h.push(['Lo que escribieron los primeros cristianos', null, null, 'Agustín de Hipona lo cita en Sobre la doctrina cristiana III.16.24.']);
  const g = [];
  if (l.length) g.push(['La Eucaristía', l]);
  if (h.length) g.push(['En la historia', h]);
  return g;
};
const usesCount = g => g.reduce((a, x) => a + x[1].length, 0);

/* citations */
const AYALA_T = '<i>El sacrosanto y ecuménico concilio de Trento</i>, trad. de Ignacio López de Ayala, 2.ª ed. (Madrid: Imprenta Real, 1785)';
const WATER_T = '<i>The Canons and Decrees of the Sacred and Oecumenical Council of Trent</i>, trad. de J. Waterworth (Londres: Burns and Oates, s. f.)';
const citeHTML = (src, u, e) => {
  if (src.kind === 'bible') return 'Juan 6:' + u.n + ', ' + esc(edName(src, e)) + '.';
  const base = 'Concilio de Trento, sesión XIII (11 de octubre de 1551), <i>Decreto sobre el santísimo sacramento de la Eucaristía</i>, ' + u.n + '. En: ';
  return e === 'waterworth' ? base + WATER_T + (u.pw ? ', ' + u.pw : '') + '.' : base + AYALA_T + (u.pa ? ', ' + u.pa : '') + '.';
};
const plain = s => { const d = document.createElement('div'); d.innerHTML = s; return d.textContent; };
const textOf = (src, u, e) => src.kind === 'bible' ? (u.v.t[e] || u.v.t.rv1909) : e === 'waterworth' ? u.en : u.es.filter(x => x !== '[…]').join(' ');
const copyBtn = (label, text, done) => '<button class="cpy" type="button" data-copy="' + esc(text) + '" data-done="' + esc(done || 'Cita copiada') + '">' + label + '</button>';
document.addEventListener('click', e => {
  const b = e.target.closest('.cpy[data-copy]');
  if (!b) return;
  const label = b.textContent, txt = b.dataset.copy === '@url' ? location.href : b.dataset.copy;
  const done = () => { b.textContent = b.dataset.done; b.classList.add('copied'); setTimeout(() => { b.textContent = label; b.classList.remove('copied'); }, 1600); };
  try { navigator.clipboard.writeText(txt).then(done, done); } catch (err) { done(); }
});

/* text of one unit, with every sentence (or the verse) tappable */
let sentN = 0;
const sentences = (src, u, on, tap) => {
  if (src.kind === 'bible') return '';
  let k = 0;
  return u.es.map(s => {
    if (s === '[…]') return '<span class="el">[…]</span>';
    k++;
    const id = u.id + '~' + k;
    return tap ? '<span class="u' + (on === k ? ' on' : '') + '" data-u="' + id + '" tabindex="0" role="button">' + esc(s) + '</span>' : '<span' + (on === k ? ' class="u on"' : '') + '>' + esc(s) + '</span>';
  }).join(' ');
};

/* 05 · the reader */
const readerHTML = (src, inLayer) => {
  let h = '<div class="col hd rw"><p class="kicker">' + esc(src.kicker) + '</p><h1 class="rd-t">' + esc(src.title) + '</h1>' + (src.meta ? '<p class="rd-m">' + esc(src.meta) + '</p>' : '') + '<p class="rd-hint">' + esc(src.hint) + '</p></div>';
  h += '<div class="col rw rd-tools">' + (src.kind === 'bible' ? edSelect(src, src.units[0], 'ed-r') : '') + '</div>';
  h += '<div class="col rw" style="margin-top:18px">' + PPBOX.rdsel + (inLayer ? '' : PPBOX.back) + '</div>';
  h += '<div class="col rw rd-body' + (src.kind === 'bible' ? ' rd-bible' : '') + '" id="rd-body">' + readerText(src) + '</div>';
  h += '<div class="col rw rd-foot" data-label="Edición y licencia">' + readerFoot(src) + '</div>';
  return h;
};
const readerText = src => {
  if (src.kind === 'doc') {
    const groups = [];
    src.units.forEach(u => { if (u.h || !groups.length) groups.push({h: u.h, units: []}); groups[groups.length - 1].units.push(u); });
    return groups.map(g => '<section class="rd-sec" data-label="' + esc(g.h) + '"><p class="rd-ch">' + esc(g.h) + '</p>' + g.units.map(u => '<p class="rd-p" id="p-' + u.id + '" data-n="' + esc(u.n) + '"><span class="dn">' + esc(u.n) + '</span>' + sentences(src, u, 0, true) + '</p>').join('') + '</section>').join('');
  }
  const e = edOf(src);
  let out = '', cur = [];
  src.units.forEach((u, i) => {
    cur.push('<span class="u" data-u="' + u.id + '" id="v-' + u.id + '" tabindex="0" role="button"><sup class="vn">' + u.n + '</sup>' + esc(u.v.t[e] || '') + '</span>');
    if (u.v.p || i === src.units.length - 1) { out += '<p class="rd-p" id="p-' + src.units[i - cur.length + 1].id + '">' + cur.join(' ') + '</p>'; cur = []; }
  });
  return out;
};
const readerFoot = src => {
  if (src.kind === 'doc') return '<h2>Fecha</h2><p>Sesión XIII del Concilio de Trento, celebrada el 11 de octubre de 1551.</p><h2>Edición y licencia</h2><p>' + AYALA_T.replace('trad. de', 'traducido al castellano por') + ', con el texto latino corregido según la edición de Roma de 1564. Dominio público. Se conserva la ortografía de la edición. «Sea excomulgado» traduce el latín «anathema sit».</p><p>La traducción inglesa que se compara en cada detalle es la de J. Waterworth, <i>The Canons and Decrees of the Sacred and Oecumenical Council of Trent</i> (Londres: Burns and Oates; Nueva York: Catholic Publication Society, sin fecha; la primera edición es de 1848). Dominio público.</p>';
  const e = edOf(src);
  return '<h2>Edición y licencia</h2><p>' + esc(EDFULL[e]) + '. Texto de eBible.org. Dominio público.</p><p>Las otras traducciones que puedes elegir arriba: ' + EDORDER.filter(x => x !== e).map(x => esc(EDFULL[x])).join(', ') + '. Todas de dominio público.</p>';
};
const edSelect = (src, u, id, cur) => {
  const eds = edsFor(src, u);
  cur = cur || edOf(src);
  if (eds.length < 2) return '';
  return '<label class="sel-ed" for="' + id + '"><span class="sl-t">Traducción</span><select id="' + id + '" data-src="' + src.key + '">' + eds.map(e => '<option value="' + e + '"' + (e === cur ? ' selected' : '') + '>' + esc(src.kind === 'bible' ? EDSHORT[e] : src.eds[e].name) + '</option>').join('') + '</select></label>';
};

const parseTarget = (src, t) => {
  if (!t) return null;
  if (src.kind === 'doc') { const m = t.match(/^(ca[pn]-\d+)(?:~(\d+))?$/); return m ? {from: m[1], to: m[1], s: m[2] ? +m[2] : 0} : null; }
  const m = t.match(/^(\d+)(?:-(\d+))?$/); return m ? {from: m[1], to: m[2] || m[1]} : null;
};

function wireReader(root, src, ctx) {
  const scroller = ctx.scroller;
  root.addEventListener('click', e => {
    const u = e.target.closest('.u[data-u]');
    if (u && root.contains(u)) { act(u); return; }
    const x = e.target.closest('[data-act]');
    if (x) { const a = x.dataset.act; if (a === 'open') goDetail(x.dataset.u); if (a === 'close-card') closeCard(); if (a === 'close-panel') closePanel(); }
  });
  root.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.u[data-u]')) { e.preventDefault(); act(e.target); }
  });
  root.addEventListener('change', e => {
    if (e.target.id === 'ed-r') { store.set('ed-' + src.key, e.target.value); $('#rd-body', root).innerHTML = readerText(src); $('.rd-foot', root).innerHTML = readerFoot(src); }
  });
  const fromHere = uid => ({screen: '05', hash: src.key + '/' + uid, y: Math.round(scrollTopOf(scroller)), label: src.where, u: uid});
  const goDetail = uid => { closePanel(true); D.forward('06', src.key + '/' + uid, fromHere(uid)); };
  const act = el => {
    const m = opt('rdsel'), uid = el.dataset.u;
    if (m === 'directo') { goDetail(uid); return; }
    if (m === 'tarjeta') { if (el.classList.contains('on') && $('.rcard', root)) closeCard(); else openCard(el); return; }
    openPanel(el);
  };
  const mark = el => { $$('.u.on', root).forEach(x => { if (x !== el) x.classList.remove('on'); }); if (el) el.classList.add('on'); };
  const pick = uid => { const [id, k] = uid.split('~'); return {u: unitOf(src, id), k: k ? +k : 0, uid}; };
  const sentText = p => p.k ? p.u.es.filter(x => x !== '[…]')[p.k - 1] : textOf(src, p.u, edOf(src));

  function closeCard() {
    const c = $('.rcard', root);
    mark(null);
    if (!c) return;
    if (reduce()) { c.remove(); return; }
    const h = c.offsetHeight;
    c.animate([{opacity: 1}, {opacity: 0}], {duration: 180, easing: 'ease-in', fill: 'forwards'});
    c.animate([{height: h + 'px'}, {height: '0px', marginTop: '0px', marginBottom: '0px'}], {duration: 380, delay: 180, easing: EASE_REVEAL, fill: 'forwards'}).finished.then(() => c.remove(), () => {});
  }
  function openCard(el) {
    const old = $('.rcard', root);
    if (old) old.remove();
    mark(el);
    const p = pick(el.dataset.u), u = p.u, uses = usesOf(src, u), n = usesCount(uses);
    const has = [];
    if (src.kind === 'bible') { if (u.v.w) has.push('El griego, palabra por palabra'); has.push(edsFor(src, u).length + ' traducciones'); }
    else { if (u.la) has.push('El texto latino'); if (u.en) has.push('La traducción inglesa'); }
    if (n) has.push(n === 1 ? 'Se cita en 1 lugar de Doctrina' : 'Se cita en ' + n + ' lugares de Doctrina');
    const c = document.createElement('div');
    c.className = 'rcard';
    c.setAttribute('role', 'region'); c.setAttribute('aria-label', 'Detalle de ' + src.short(u));
    c.innerHTML = '<div class="rcard-in"><p class="rcard-k">' + esc(src.unitTitle(u)) + (p.k ? ', frase ' + p.k : '') + '<button class="cw-x" type="button" data-act="close-card" aria-label="Cerrar">' + D.ic.x + '</button></p><p class="rcard-q">' + esc(sentText(p)) + '</p><ul class="rcard-has">' + has.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul><div class="rcard-acts"><button class="btn-go" type="button" data-act="open" data-u="' + esc(p.uid) + '">Ver el detalle</button>' + copyBtn('Copiar cita', plain(citeHTML(src, u, edOf(src)))) + '</div></div>';
    el.closest('.rd-p').after(c);
    if (!reduce()) {
      const h = c.offsetHeight;
      c.animate([{height: '0px', opacity: 0}, {height: h + 'px', opacity: 1}], {duration: 380, easing: EASE_REVEAL});
    }
    const r = c.getBoundingClientRect();
    const over = r.bottom - innerHeight + 48;
    if (over > 0) { if (ctx.layer) ctx.layer.scrollTop += over; else D.scrollToY(scrollY + over); }
  }

  let rp = null, rpOpener = null;
  function closePanel(silent) {
    if (!rp) return;
    rp.classList.remove('open');
    html.classList.remove('rp-open');
    if (ctx.layer) ctx.layer.classList.remove('rp-on');
    mark(null);
    if (!silent && rpOpener && rpOpener.focus) rpOpener.focus({preventScroll: true});
  }
  function openPanel(el) {
    if (!rp) {
      rp = document.createElement('aside');
      rp.className = 'rp'; rp.setAttribute('aria-label', 'Detalle del pasaje');
      rp.innerHTML = '<span class="rp-grip" aria-hidden="true"></span><div class="rp-h"><span>Detalle del pasaje</span><button class="cw-x" type="button" data-act="close-panel" aria-label="Cerrar el detalle">' + D.ic.x + '</button></div><div class="rp-b"></div>';
      (ctx.layer || document.body).appendChild(rp);
      rp.addEventListener('click', e => { const x = e.target.closest('[data-act]'); if (!x) return; if (x.dataset.act === 'close-panel') closePanel(); if (x.dataset.act === 'open') goDetail(x.dataset.u); });
    }
    rpOpener = el;
    mark(el);
    const p = pick(el.dataset.u);
    $('.rp-b', rp).innerHTML = compactHTML(src, p.u, p.k, p.uid);
    $('.rp-b', rp).scrollTop = 0;
    rp.classList.add('open');
    html.classList.add('rp-open');
    if (ctx.layer) ctx.layer.classList.add('rp-on');
    requestAnimationFrame(() => {
      const r = el.getBoundingClientRect(), pr = rp.getBoundingClientRect();
      if (pr.top > innerHeight / 2 && r.bottom > pr.top - 24) {
        const by = r.top - Math.max(D.offset(), pr.top - r.height - 80) ;
        if (by > 0) { if (scroller && scroller.classList && scroller.classList.contains('rd')) scroller.scrollTop += by; else D.scrollToY(scrollY + by); }
      }
    });
  }
  addEventListener('keydown', e => { if (e.key === 'Escape') { if (rp && rp.classList.contains('open')) closePanel(); else if ($('.rcard', root)) closeCard(); } });
  let seenSel = opt('rdsel');
  addEventListener('pp', e => { if (e.detail.key === 'rdsel' && e.detail.value !== seenSel) { seenSel = e.detail.value; closePanel(true); const c = $('.rcard', root); if (c) c.remove(); mark(null); } });

  /* arrival: the cited division, or the place you came back to */
  const ret = ctx.ret;
  requestAnimationFrame(() => {
    if (ret) {
      const el = ret.u ? root.querySelector('.u[data-u="' + CSS.escape(ret.u) + '"]') : null;
      if (ret.y == null && el) jumpTo(Math.max(0, el.getBoundingClientRect().top + scrollTopOf(scroller) - 160), scroller); else jumpTo(ret.y || 0, scroller);
      flash(el);
      return;
    }
    const t = parseTarget(src, ctx.target);
    if (!t) return;
    let first;
    if (src.kind === 'doc') {
      first = $('#p-' + t.from, root);
      if (!first) return;
      const s = t.s ? first.querySelector('.u[data-u="' + t.from + '~' + t.s + '"]') : null;
      const at = first.getBoundingClientRect().top + scrollTopOf(scroller) - (scroller && scroller.classList && scroller.classList.contains('rd') ? 0 : 0) - 140;
      jumpTo(Math.max(0, at), scroller);
      if (s) flash(s); else { first.classList.add('hl', 'was'); setTimeout(() => first.classList.remove('hl'), 1800); }
    } else {
      const vs = $$('.u[data-u]', root).filter(v => +v.dataset.u >= +t.from && +v.dataset.u <= +t.to);
      if (!vs.length) return;
      first = vs[0];
      jumpTo(Math.max(0, first.getBoundingClientRect().top + scrollTopOf(scroller) - 140), scroller);
      vs.forEach(flash);
      const ps = new Set(vs.map(v => v.closest('.rd-p'))); ps.forEach(p => p.classList.add('was'));
    }
  });
}

/* the shared detail, compact (in the side panel) */
const compactHTML = (src, u, k, uid) => {
  const e = src.kind === 'bible' ? edOf(src) : 'ayala';
  let h = '<h3 class="cd-t">' + esc(src.unitTitle(u)) + '</h3>';
  if (src.kind === 'bible') h += '<p class="cd-p">' + esc(u.v.t[e]) + '</p><p class="cd-src">' + esc(EDFULL[e]) + '</p>';
  else h += '<p class="cd-p">' + sentences(src, u, k, false) + '</p><p class="cd-src">Traducción de López de Ayala (1785)</p>';
  if (src.kind === 'bible' && u.v.w) h += '<div class="cd-sec"><p class="cd-l">En griego, palabra por palabra</p><div class="cd-words">' + u.v.w.map(w => '<span><b lang="grc">' + esc(w.g) + '</b><i>' + esc(gl(w.es)) + '</i></span>').join('') + '</div></div>';
  if (src.kind === 'doc' && u.la) h += '<div class="cd-sec"><p class="cd-l">En latín</p><p class="cd-x" lang="la">' + esc(u.la) + '</p></div>';
  const others = src.kind === 'bible' ? ['scio', 'bsb'].filter(x => x !== e && u.v.t[x]) : (u.en ? ['waterworth'] : []);
  if (others.length) h += '<div class="cd-sec"><p class="cd-l">Otras traducciones</p>' + others.map(x => '<p class="cd-x"' + (src.kind === 'bible' ? (DT.EDS[x].lang === 'en' ? ' lang="en"' : '') : ' lang="en"') + '><span class="cd-n">' + esc(src.kind === 'bible' ? EDSHORT[x] : src.eds[x].name) + '</span>' + esc(src.kind === 'bible' ? u.v.t[x] : u.en) + '</p>').join('') + '</div>';
  const uses = usesOf(src, u);
  if (uses.length) h += '<div class="cd-sec"><p class="cd-l">Dónde se usa en Doctrina</p><ul class="cd-du">' + uses.flatMap(g => g[1]).map(x => '<li>' + placeLink(x) + '<span>' + esc(x[3]) + '</span></li>').join('') + '</ul></div>';
  h += '<div class="cd-acts"><button class="btn-go" type="button" data-act="open" data-u="' + esc(uid) + '">Abrir el detalle completo</button>' + copyBtn('Copiar cita', plain(citeHTML(src, u, e))) + '</div>';
  return h;
};
const placeLink = x => x[1] ? '<a class="ln-go du-t" href="s03.html' + (x[2] ? '#' + x[2] : '') + '" data-go="' + x[1] + '"' + (x[2] ? ' data-hash="' + x[2] + '"' : '') + '>' + esc(x[0]) + '</a>' : '<a class="ln-go du-t" href="#" data-nb>' + esc(x[0]) + '</a>';

/* word by word */
const gl = s => String(s || '').replace(/[<>]/g, '');
const PH = [[/definite article/g, 'artículo definido'], [/(personal|demonstrative|relative|reflexive|reciprocal|interrogative|indefinite) pronoun/g, (m, a) => 'pronombre ' + a], [/negative particle/g, 'partícula negativa'], [/2nd (aorist|future|perfect)/g, (m, a) => a + ' segundo'], [/(\d)(st|nd|rd) person/g, (m, n) => n + '.ª persona']];
const PW = {verb: 'verbo', noun: 'sustantivo', adjective: 'adjetivo', adverb: 'adverbio', preposition: 'preposición', conjunction: 'conjunción', particle: 'partícula', interjection: 'interjección', article: 'artículo', pronoun: 'pronombre', personal: 'personal', demonstrative: 'demostrativo', relative: 'relativo', reflexive: 'reflexivo', reciprocal: 'recíproco', interrogative: 'interrogativo', indefinite: 'indefinido', present: 'presente', imperfect: 'imperfecto', future: 'futuro', aorist: 'aoristo', perfect: 'perfecto', pluperfect: 'pluscuamperfecto', active: 'activo', middle: 'medio', passive: 'pasivo', deponent: 'deponente', indicative: 'indicativo', subjunctive: 'subjuntivo', imperative: 'imperativo', infinitive: 'infinitivo', participle: 'participio', optative: 'optativo', nominative: 'nominativo', genitive: 'genitivo', dative: 'dativo', accusative: 'acusativo', vocative: 'vocativo', masculine: 'masculino', feminine: 'femenino', neuter: 'neutro', singular: 'singular', plural: 'plural', or: 'o', and: 'y', person: 'persona', segundo: 'segundo'};
const parseEs = p => {
  let s = String(p || '').replace(/\([^)]*\)/g, '').replace(/\s+\+\s+/g, ' + ').trim();
  PH.forEach(([re, to]) => { s = s.replace(re, to); });
  s = s.replace(/[A-Za-z]+/g, w => PW[w.toLowerCase()] || w);
  s = s.replace(/\s+,/g, ',').replace(/\s{2,}/g, ' ').trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const strongOf = s => String(s).split(' + ').map(x => x.replace(/^G0*/, 'G').replace(/[A-Z]$/, '')).join(' + ');
const countOf = w => {
  const parts = String(w.s).split(' + ');
  if (parts.length > 1) return null;
  const e = DT.LEX[w.s];
  if (!e) return null;
  return (e.n === 1 ? '1 vez' : e.n.toLocaleString('es') + ' veces') + (e.nJohn ? ', ' + e.nJohn.toLocaleString('es') + ' en Juan' : '');
};
const lemmaOf = w => { const e = DT.LEX[String(w.s).split(' + ')[0]]; return e ? e.lemma : w.l; };
const cardHTML = w => {
  const c = countOf(w);
  return '<div class="wc"><p class="wc-g" lang="grc">' + esc(w.g) + '</p><p class="wc-t">' + esc(w.t) + '</p><dl>' +
    '<dt>Significa</dt><dd>' + esc(gl(w.es)) + '</dd>' +
    '<dt>Forma</dt><dd>' + esc(parseEs(w.parse)) + '</dd>' +
    '<dt>Palabra base</dt><dd><span class="gk" lang="grc">' + esc(w.l) + '</span> (' + esc(w.lt) + '), Strong ' + esc(strongOf(w.s)) + '</dd>' +
    (c ? '<dt>En el Nuevo Testamento</dt><dd>' + esc(c) + '</dd>' : '') +
    '</dl><button class="btn-go" type="button" data-nb>Abrir el estudio de <span class="gk" lang="grc">' + esc(lemmaOf(w)) + '</span></button></div>';
};
const wordsHTML = (u, mode) => {
  const W = u.v.w;
  W.forEach((w, i) => { D.CITES['wd:' + u.n + ':' + i] = {forceKicker: true, kicker: 'Palabra griega', def: cardHTML(w)}; });
  if (mode === 'filas') return '<ul class="wr-l">' + W.map((w, i) => '<li data-fk="w' + i + '"><button class="wr" type="button" aria-expanded="false" data-wi="' + i + '"><span class="gk" lang="grc">' + esc(w.g) + '</span><span class="gl">' + esc(gl(w.es)) + '<small>' + esc(w.t) + '</small></span>' + D.ic.chev + '</button><div class="wr-d" hidden></div></li>').join('') + '</ul>';
  const tiles = '<ul class="wt-l">' + W.map((w, i) => '<li><button class="wt" type="button"' + (mode === 'fichas' ? ' data-cite="wd:' + u.n + ':' + i + '"' : ' data-wi="' + i + '" aria-pressed="' + (i === LADO0(W) ? 'true' : 'false') + '"') + '><span class="tr">' + esc(w.t) + '</span><span class="gk" lang="grc">' + esc(w.g) + '</span><span class="gl">' + esc(gl(w.es)) + '</span></button></li>').join('') + '</ul>';
  if (mode === 'fichas') return tiles;
  return '<div class="wl2">' + tiles + '<div class="wl2-c" aria-live="polite">' + cardHTML(W[LADO0(W)]) + '</div></div>';
};
const LADO0 = W => { for (const re of [/G4561/, /G5176/, /G5315/]) { const i = W.findIndex(w => re.test(w.s)); if (i >= 0) return i; } return 0; };
const wireWords = (box, u) => {
  box.addEventListener('click', e => {
    const r = e.target.closest('.wr[data-wi]');
    if (r) {
      const d = r.nextElementSibling, op = r.getAttribute('aria-expanded') !== 'true';
      r.setAttribute('aria-expanded', String(op));
      if (op) { d.innerHTML = cardHTML(u.v.w[+r.dataset.wi]); d.hidden = false; if (!reduce()) { const h = d.scrollHeight; d.animate([{height: '0px', opacity: 0}, {height: h + 'px', opacity: 1}], {duration: 380, easing: EASE_REVEAL}); } }
      else if (reduce()) d.hidden = true;
      else { const h = d.offsetHeight; d.animate([{opacity: 1}, {opacity: 0}], {duration: 180, easing: 'ease-in', fill: 'forwards'}); d.animate([{height: h + 'px'}, {height: '0px'}], {duration: 380, delay: 180, easing: EASE_REVEAL, fill: 'forwards'}).finished.then(() => { d.hidden = true; d.getAnimations().forEach(a => a.cancel()); }, () => {}); }
      return;
    }
    const t = e.target.closest('.wl2 .wt[data-wi]');
    if (t) pickLado(box, u, t);
  });
  box.addEventListener('pointerover', e => { const t = e.target.closest('.wl2 .wt[data-wi]'); if (t && e.pointerType === 'mouse') pickLado(box, u, t); });
  box.addEventListener('focusin', e => { const t = e.target.closest('.wl2 .wt[data-wi]'); if (t) pickLado(box, u, t); });
};
const pickLado = (box, u, t) => {
  if (t.getAttribute('aria-pressed') === 'true') return;
  $$('.wl2 .wt', box).forEach(x => x.setAttribute('aria-pressed', String(x === t)));
  const c = $('.wl2-c', box);
  c.innerHTML = cardHTML(u.v.w[+t.dataset.wi]);
  if (!reduce()) c.firstChild.animate([{opacity: .4}, {opacity: 1}], {duration: 160, easing: 'ease-out'});
};

/* 06 · the detail page */
function renderDetail(main, src, uid) {
  const [id, kk] = uid.split('~');
  const u = unitOf(src, id) || src.units[0], k = kk ? +kk : 0;
  const i = src.units.indexOf(u), prev = src.units[i - 1], next = src.units[i + 1];
  document.title = src.unitTitle(u) + ', Doctrina';
  const back = topOfStack();
  let h = '<div class="col hd-crumbs"><nav class="crumbs" aria-label="Ruta">' + src.crumbs.map(c => c[1] ? '<a href="s05.html#' + c[2] + '" data-go="' + c[1] + '" data-hash="' + c[2] + '">' + esc(c[0]) + '</a>' : '<a href="#" data-nb>' + esc(c[0]) + '</a>').join('<span class="sl" aria-hidden="true">/</span>') + '<span class="sl" aria-hidden="true">/</span><span aria-current="page">' + esc(src.kind === 'bible' ? '6:' + u.n : u.n) + '</span></nav></div>';
  h += '<div class="bk"' + (back ? '' : ' hidden') + '><button class="rd-back" type="button" data-back>' + D.ic.back + 'Volver a donde estabas</button><span class="rd-where">' + esc(back ? back.label : '') + '</span></div>';
  h += '<div class="col hd dt-head"><p class="kicker">' + esc(src.kicker + (src.kind === 'doc' ? ', sesión XIII' : '')) + '</p><h1>' + esc(src.kind === 'bible' ? 'Juan 6:' + u.n : unitWord(u.n).replace(/^./, c => c.toUpperCase())) + '</h1>' + (src.kind === 'doc' ? '<p class="lede">' + esc(src.title) + ', 11 de octubre de 1551.</p>' : '') + '</div>';
  h += '<div class="col" style="margin-top:36px">' + PPBOX.dtend + '</div>';
  h += '<div class="dt-grid" id="dt-grid"></div>';
  main.innerHTML = h;
  const grid = $('#dt-grid', main);
  const paint = () => {
    const side = opt('dtend') === 'costado' && innerWidth >= 1100;
    grid.innerHTML = detailSections(src, u, k, prev, next, side);
    D.buildPP && D.buildPP();
    const ww = $('#ww-box', grid);
    if (ww) wireWords(ww, u);
    fitClamps(grid);
    D.glue && D.glue(grid);
    if (D.revealLists) D.revealLists(main);
    if (D.rebuildRuler) D.rebuildRuler();
  };
  paint();
  main.addEventListener('click', e => {
    if (e.target.closest('[data-back]')) { D.goBack(); return; }
    const lat = e.target.closest('[data-lat]');
    if (lat) { e.preventDefault(); e.stopPropagation(); D.lateral('06', lat.dataset.lat); return; }
    const rd = e.target.closest('[data-toreader]');
    if (rd) { e.preventDefault(); e.stopPropagation(); D.forward('05', rd.dataset.toreader, {screen: '06', hash: src.key + '/' + uid, y: Math.round(scrollY), label: src.unitTitle(u)}); return; }
    const s = e.target.closest('.dt-cur .u[data-u]');
    if (s) { const on = s.classList.contains('on'); $$('.dt-cur .u.on', main).forEach(x => x.classList.remove('on')); if (!on) s.classList.add('on'); const nk = on ? '' : '~' + s.dataset.u.split('~')[1]; try { history.replaceState(null, '', '#' + src.key + '/' + u.id + nk); } catch (err) {} return; }
    const ch = e.target.closest('.chip[data-ed]');
    if (ch) { const list = $('#ct-l', main); ch.setAttribute('aria-pressed', String(ch.getAttribute('aria-pressed') !== 'true')); const on = $$('.chip[data-ed]', main).filter(c => c.getAttribute('aria-pressed') === 'true').map(c => c.dataset.ed); D.flip(list, () => { list.innerHTML = compareRows(src, u, on); }); return; }
    const more = e.target.closest('.nb-more');
    if (more) { const t = more.previousElementSibling; t.classList.remove('clamp'); more.remove(); }
  }, true);
  main.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.dt-cur .u[data-u]')) { e.preventDefault(); e.target.click(); } });
  main.addEventListener('change', e => { if (e.target.id === 'ed-d') { store.set('ed-' + src.key, e.target.value); paint(); } });
  const seen = {dtend: opt('dtend'), wbw: opt('wbw')};
  addEventListener('pp', e => { const k = e.detail.key; if ((k === 'dtend' || k === 'wbw') && seen[k] !== e.detail.value) { seen[k] = e.detail.value; const y = scrollY; paint(); jumpTo(y); } });
  let wasSide = innerWidth >= 1100;
  addEventListener('resize', () => { const s = innerWidth >= 1100; if (s !== wasSide) { wasSide = s; if (opt('dtend') === 'costado') paint(); } });
  const bk = $('.bk', main);
  if (bk) { const st = () => bk.classList.toggle('stuck', scrollY > 0 && bk.getBoundingClientRect().top <= parseFloat(getComputedStyle(bk).top) + .5); addEventListener('scroll', st, {passive: true}); st(); }
  const ret = store.get('ret', null);
  if (ret && ret.screen === '06') { store.set('ret', null); requestAnimationFrame(() => jumpTo(ret.y || 0)); }
}
const fitClamps = root => $$('.nb-t.clamp', root).forEach(t => { if (t.scrollHeight - t.clientHeight > 4) { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn-more nb-more'; b.innerHTML = D.ic.plus + 'Ver completo'; t.after(b); } else t.classList.remove('clamp'); });

const passageHTML = (src, u, k, prev, next, e) => {
  const nb = (x, where) => {
    if (!x) return '';
    const txt = src.kind === 'bible' ? esc(x.v.t[e] || x.v.t.rv1909) : sentences(src, x, 0, false);
    return '<li><a class="pn-n" href="s06.html#' + src.key + '/' + x.id + '" data-lat="' + src.key + '/' + x.id + '" aria-label="' + esc(where + ': ' + src.unitTitle(x)) + '">' + esc(x.n) + '</a><div><p class="nb-t clamp">' + txt + '</p></div></li>';
  };
  const cur = src.kind === 'bible' ? '<p class="dt-cur bible">' + esc(u.v.t[e] || u.v.t.rv1909) + '</p>' : '<p class="dt-cur">' + (e === 'waterworth' ? '<span lang="en">' + esc(u.en) + '</span>' : sentencesDetail(src, u, k)) + '</p>';
  return '<ol class="dt-pass">' + nb(prev, 'Anterior') + '<li class="cur"><span class="pn-n">' + esc(u.n) + '</span><div>' + cur + '</div></li>' + nb(next, 'Siguiente') + '</ol>';
};
const sentencesDetail = (src, u, k) => {
  let n = 0;
  return u.es.map(s => { if (s === '[…]') return '<span class="el">[…]</span>'; n++; return '<span class="u' + (n === k ? ' on' : '') + '" data-u="' + u.id + '~' + n + '" tabindex="0" role="button" aria-pressed="' + (n === k) + '">' + esc(s) + '</span>'; }).join(' ');
};
const compareRows = (src, u, on) => {
  const eds = src.kind === 'bible' ? EDORDER.filter(e => u.v.t[e]) : ['ayala', 'waterworth'].filter(e => e === 'ayala' || u.en);
  return eds.filter(e => on.includes(e)).map(e => {
    const name = src.kind === 'bible' ? EDFULL[e] : src.eds[e].name;
    const lang = src.kind === 'bible' ? (DT.EDS[e].lang === 'es' ? 'español' : 'inglés') : src.eds[e].lang;
    const t = src.kind === 'bible' ? u.v.t[e] : textOf(src, u, e);
    const isEn = lang === 'inglés';
    return '<li data-fk="' + e + '"><p class="ct-n">' + esc(name) + '<span>' + lang + '</span></p><p class="ct-x"' + (isEn ? ' lang="en"' : '') + '>' + esc(t) + '</p></li>';
  }).join('');
};
const donde = (src, u) => {
  const g = usesOf(src, u);
  return g.map(([h, l]) => '<div class="du-g"><p class="du-h">' + esc(h) + '</p><ul class="du-l">' + l.map(x => '<li>' + placeLink(x) + '<p class="du-r">' + esc(x[3]) + '</p></li>').join('') + '</ul></div>').join('');
};
function detailSections(src, u, k, prev, next, side) {
  const e = src.kind === 'bible' ? edOf(src) : (edOf(src) === 'waterworth' && u.en ? 'waterworth' : 'ayala');
  const where = opt('dtend');
  const citeTxt = plain(citeHTML(src, u, e));
  const withText = (src.kind === 'bible' ? '«' + (u.v.t[e] || '') + '» (' + citeTxt.replace(/\.$/, '') + ').' : '«' + textOf(src, u, e) + '» ' + citeTxt);
  const acts = copyBtn('Copiar cita', citeTxt) + copyBtn('Copiar con el texto', withText) + copyBtn('Copiar enlace', '@url', 'Enlace copiado');
  let m = '<div class="dt-main">';
  m += '<section class="sec col dt-first" id="traduccion" data-label="Traducción"><div class="sh"><h2>Traducción</h2>' + edSelect(src, u, 'ed-d', e) + '</div>';
  m += passageHTML(src, u, k, prev, next, e);
  m += '<p class="dt-src"><span>' + (src.kind === 'bible' ? esc(EDFULL[e]) + '. Dominio público.' : (e === 'waterworth' ? 'Traducción inglesa de J. Waterworth (1848). Dominio público.' : 'Traducción de Ignacio López de Ayala (1785). Dominio público.')) + '</span><a class="ln-go" href="s05.html" data-toreader="' + src.key + '/' + u.id + (k ? '~' + k : '') + '">' + (src.kind === 'bible' ? 'Leer el capítulo completo' : 'Leer el decreto completo') + '</a></p>';
  if (where === 'arriba') m += '<div class="ac-row" role="group" aria-label="Citar"><span class="ac-l">Citar</span>' + acts + '</div>';
  m += '</section>';
  if (src.kind === 'bible' && u.v.w) {
    m += '<section class="sec col" id="griego" data-label="En griego"><h2>En griego, palabra por palabra</h2><p class="sub">Cada palabra con su transliteración y su sentido literal. Toca una para ver su ficha.</p>' + PPBOX.wbw + '<div id="ww-box">' + wordsHTML(u, opt('wbw')) + '</div><p class="ww-src">Texto griego: STEP Bible (Tyndale House, Cambridge), CC BY 4.0. Glosas en español: Open Greek New Testament, CC BY-SA 4.0. Las glosas son literales, no interpretativas.</p></section>';
  }
  if (src.kind === 'doc' && u.la) m += '<section class="sec col" id="latin" data-label="En latín"><h2>En latín</h2><p class="sub">El texto original del decreto, tal como lo trae la edición de 1785' + (u.pa ? ' (' + u.pa + ')' : '') + '.</p><p class="p" lang="la">' + esc(u.la) + '</p></section>';
  const eds = src.kind === 'bible' ? EDORDER.filter(x => u.v.t[x]) : ['ayala'].concat(u.en ? ['waterworth'] : []);
  if (eds.length > 1) {
    m += '<section class="sec col" id="comparar" data-label="Comparar traducciones"><h2>Comparar traducciones</h2><p class="sub">' + (src.kind === 'bible' ? 'Las ocho traducciones de dominio público, una debajo de la otra. Elige cuáles mostrar.' : 'La traducción española y la inglesa, una debajo de la otra.') + '</p>';
    m += '<div class="chips" role="group" aria-label="Traducciones que se muestran">' + eds.map(x => '<button class="chip" type="button" data-ed="' + x + '" aria-pressed="true">' + esc(src.kind === 'bible' ? EDSHORT[x] : src.eds[x].name) + '</button>').join('') + '</div><ul class="ct-l" id="ct-l">' + compareRows(src, u, eds) + '</ul></section>';
  }
  const du = donde(src, u);
  const duSec = du ? '<section class="sec col" id="donde" data-label="Dónde se usa en Doctrina"><h2>Dónde se usa en Doctrina</h2><p class="sub">Las páginas que citan ' + (src.kind === 'bible' ? 'este versículo' : 'este pasaje') + ', agrupadas por lugar.</p>' + du + '</section>' : '';
  const ciSec = '<section class="sec col" id="citar" data-label="Citar"><h2>Citar</h2><p class="ci-t">' + citeHTML(src, u, e) + '</p><div class="ci-acts">' + acts + '</div></section>';
  if (!side) { m += duSec; if (where !== 'arriba') m += ciSec; }
  m += '<nav class="pn col" aria-label="' + (src.kind === 'bible' ? 'Versículo anterior y siguiente' : 'División anterior y siguiente') + '">' + (prev ? '<a href="s06.html#' + src.key + '/' + prev.id + '" data-lat="' + src.key + '/' + prev.id + '"><small>Anterior</small><span>' + esc(src.unitTitle(prev)) + '</span></a>' : '') + (next ? '<a class="nx" href="s06.html#' + src.key + '/' + next.id + '" data-lat="' + src.key + '/' + next.id + '"><small>Siguiente</small><span>' + esc(src.unitTitle(next)) + '</span></a>' : '') + '</nav>';
  m += '</div>';
  if (side) {
    m += '<aside class="dt-side" aria-label="Citar y dónde se usa"><div class="ds-blk"><h2>Citar</h2><p class="ci-t">' + citeHTML(src, u, e) + '</p><div class="ci-acts">' + acts + '</div></div>' + (du ? '<div class="ds-blk"><h2>Dónde se usa en Doctrina</h2>' + du + '</div>' : '') + '</aside>';
  }
  return m;
}

/* 03 · the arrival: «Abrir la fuente completa» from a citation, and the way back */
let lastCite = null;
document.addEventListener('click', e => { const c = e.target.closest('[data-cite], [data-reader]'); if (c && !c.closest('.cw')) lastCite = c; }, true);
const secLabel = el => { const s = el && el.closest('[data-label]'); return s ? s.dataset.label : ''; };
const origOpen = D.openReader;
let layer = null;
D.openReader = (key, target) => {
  const src = SRC[key];
  if (!src) return origOpen(key, target);
  const tslug = target ? String(target).replace(/^(ca[pn])\. (\d+)$/, '$1-$2') : '';
  const opener = lastCite;
  const list = opener && opener.dataset.cite ? $$('[data-cite="' + CSS.escape(opener.dataset.cite) + '"]') : opener ? $$('[data-reader="' + CSS.escape(opener.dataset.reader) + '"]') : [];
  const from = {screen: SCREEN, hash: SCREEN === '03' ? '' : (location.hash || '').slice(1), y: Math.round(scrollY), label: 'La posición católica, ' + secLabel(opener), cite: opener ? (opener.dataset.cite || null) : null, rdr: opener && !opener.dataset.cite ? opener.dataset.reader : null, ci: Math.max(0, list.indexOf(opener))};
  D.closeCite();
  if (opt('back') === 'capa' && PAGE === 'other') { openLayer(src, tslug, from); return; }
  D.forward('05', key + (tslug ? '/' + tslug : ''), from);
};
function openLayer(src, target, from) {
  const st = NAV.get(); st.push(from); NAV.set(st);
  if (!layer) {
    layer = document.createElement('div');
    layer.className = 'rd'; layer.setAttribute('role', 'dialog'); layer.setAttribute('aria-modal', 'true'); layer.setAttribute('aria-label', 'Lector');
    document.body.appendChild(layer);
  }
  layer.innerHTML = '<div class="rd-bar"><button class="rd-back" type="button" data-close-layer>' + D.ic.back + 'Volver a donde estabas</button><span class="rd-where">' + esc(from.label) + '</span></div><div class="rd-in rdr">' + readerHTML(src, true) + '</div>';
  D.buildPP && D.buildPP();
  layer.classList.add('open');
  html.style.overflow = 'hidden';
  layer.scrollTop = 0;
  const inner = $('.rd-in', layer);
  wireReader(inner, src, {target, scroller: layer, layer});
  $('[data-close-layer]', layer).addEventListener('click', closeLayer);
  requestAnimationFrame(() => $('.rd-back', layer).focus({preventScroll: true}));
}
function closeLayer() {
  if (!layer) return;
  const st = NAV.get(); const f = st.pop(); NAV.set(st);
  layer.classList.remove('open');
  html.style.overflow = '';
  html.classList.remove('rp-open');
  $$('.rp', layer).forEach(p => p.remove());
  if (f) restoreOrigin(f);
}
addEventListener('keydown', e => { if (e.key === 'Escape' && layer && layer.classList.contains('open') && !html.classList.contains('rp-open') && !$('.rcard', layer)) closeLayer(); });
function restoreOrigin(f) {
  let el = null;
  if (f.cite) el = $$('[data-cite="' + CSS.escape(f.cite) + '"]')[f.ci || 0];
  else if (f.rdr) el = $$('[data-reader="' + CSS.escape(f.rdr) + '"]')[f.ci || 0];
  if (el) { el.classList.add('ret-flash'); setTimeout(() => el.classList.remove('ret-flash'), 2400); el.focus({preventScroll: true}); }
}

/* boot per page */
const parseHash = () => { const h = decodeURIComponent((location.hash || '').slice(1)); const [key, rest] = h.split('/'); return {key: SRC[key] ? key : null, rest: rest || ''}; };
if (PAGE === 'reader') {
  const {key, rest} = parseHash();
  const src = SRC[key || 'tr13'];
  document.title = src.title + ', Doctrina';
  const main = $('main.main');
  const back = topOfStack();
  const bar = document.createElement('div');
  bar.className = 'rd-bar2';
  bar.innerHTML = '<button class="rd-back" type="button" data-back>' + D.ic.back + 'Volver a donde estabas</button><span class="rd-where">' + esc(back ? back.label : '') + '</span>';
  document.body.prepend(bar);
  main.innerHTML = '<div class="col hd-crumbs rw"><nav class="crumbs" aria-label="Ruta">' + src.crumbs.map((c, i) => i === src.crumbs.length - 1 ? '<span aria-current="page">' + esc(c[0]) + '</span>' : '<a href="#" data-nb>' + esc(c[0]) + '</a>').join('<span class="sl" aria-hidden="true">/</span>') + '</nav></div>' +
    '<div class="bk"' + (back ? '' : ' hidden') + '><button class="rd-back" type="button" data-back>' + D.ic.back + 'Volver a donde estabas</button><span class="rd-where">' + esc(back ? back.label : '') + '</span></div>' + readerHTML(src, false);
  if (!back) bar.querySelector('.rd-back').hidden = true;
  document.addEventListener('click', e => { if (e.target.closest('[data-back]')) D.goBack(); });
  const ret = store.get('ret', null);
  if (ret) store.set('ret', null);
  wireReader(main, src, {target: rest, scroller: null, ret: ret && ret.screen === '05' ? ret : null});
  const bk = $('.bk', main);
  if (bk) { const st = () => bk.classList.toggle('stuck', scrollY > 0 && bk.getBoundingClientRect().top <= parseFloat(getComputedStyle(bk).top) + .5); addEventListener('scroll', st, {passive: true}); st(); }
}
if (PAGE === 'detail') {
  const {key, rest} = parseHash();
  const src = SRC[key || 'jn6'];
  renderDetail($('main.main'), src, rest || (src.kind === 'bible' ? '53' : 'cap-1'));
}
if (PAGE === 'other') {
  const esc2 = $$('.esc-t').find(a => /^Juan 6:51-58/.test(a.textContent));
  if (esc2) { esc2.removeAttribute('data-nb'); esc2.dataset.reader = 'jn6'; esc2.dataset.target = '51-58'; esc2.setAttribute('href', 's05.html#jn6/51-58'); }
  if (D.CITES.jn655) Object.assign(D.CITES.jn655, {reader: 'jn6', target: '55'});
  if (D.CITES.t13c1) D.CITES.t13c1.target = 'cap. 1';
  const ret = store.get('ret', null);
  if (ret && ret.screen === '03') {
    store.set('ret', null);
    html.dataset.ent = 'none';
    requestAnimationFrame(() => {
      const a = ret.y == null && ret.anchor ? document.getElementById(ret.anchor) : null;
      if (a) jumpTo(Math.max(0, a.getBoundingClientRect().top + scrollY - D.offset())); else jumpTo(ret.y || 0);
      restoreOrigin(ret);
    });
  }
}

D.SEARCH.push(
  {t: 'Juan 6:53', path: 'Biblia / Juan / Capítulo 6', why: '«Si no comiereis la carne del Hijo del hombre, y bebiereis su sangre, no tendréis vida en vosotros.»', go: '06', hash: 'jn6/53', recent: true},
  {t: 'Concilio de Trento, sesión XIII', path: 'Fuentes / Concilio de Trento', date: '1551', why: 'Decreto sobre el santísimo sacramento de la Eucaristía', go: '05', hash: 'tr13', recent: true}
);
})();
