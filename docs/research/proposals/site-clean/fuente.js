(() => {
const {$, $$, esc, store} = D;
const DT = window.DATA;
const html = document.documentElement, html_ = html;
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE_REVEAL = 'cubic-bezier(0.22, 1, 0.36, 1)';
const PAGE = document.body.classList.contains('s05') ? 'reader' : document.body.classList.contains('s06') ? 'detail' : 'other';
const SCREEN = PAGE === 'reader' ? '05' : PAGE === 'detail' ? '06' : '03';

const OPTS = {rdsel: ['directo', 'tarjeta', 'costado'], dtend: ['final', 'arriba', 'costado'], wbw: ['fichas', 'filas', 'lado'], back: ['capa', 'pagina'], cite: ['corta', 'completa'], pnl: ['indice', 'clave', 'pestanas'], tabmo: ['deslizar', 'instante'], lat: ['raya', 'letra', 'caja'], todo: ['barsel', 'actual', 'barra', 'enfrentado'], hl: ['frase', 'rango'], hlc: ['muestra', 'barra', 'uno'], notas: ['margen', 'costado', 'cuaderno'], filt: ['campo', 'plegado', 'menu']};
const DEF = {rdsel: 'costado', dtend: 'costado', wbw: 'lado', back: 'capa', cite: 'corta', pnl: 'pestanas', tabmo: 'deslizar', lat: 'raya', todo: 'barsel', hl: 'rango', hlc: 'barra', notas: 'costado', filt: 'menu'};
Object.keys(OPTS).forEach(k => html.setAttribute('data-pp-' + k, DEF[k]));
const opt = k => html.getAttribute('data-pp-' + k) || DEF[k];
const NAV = {get: () => store.get('nav', []), set: v => store.set('nav', v)};
{ const keep = store.get('fwd', null) || store.get('ret', null); store.set('fwd', null); if (!keep) NAV.set([]); }
D.forward = (screen, hash, from) => { const st = NAV.get(); st.push(from); NAV.set(st.slice(-8)); store.set('fwd', 1); D.go(screen, hash); };
D.lateral = (screen, hash) => { store.set('fwd', 1); D.go(screen, hash); };
D.goBack = () => { const st = NAV.get(); const f = st.pop(); NAV.set(st); if (!f) { if (history.length > 1) history.back(); else D.go('02'); return; } store.set('ret', f); D.go(f.screen, f.hash || ''); };
const topOfStack = () => { const st = NAV.get(); return st[st.length - 1] || null; };
const scrollTopOf = root => root && root.classList && root.classList.contains('rd') ? root.scrollTop : scrollY;
const jumpTo = (y, root) => { if (root && root.classList && root.classList.contains('rd')) { root.scrollTop = y; return; } if (D.lenis) D.lenis.scrollTo(y, {immediate: true}); else scrollTo(0, y); };
const flash = el => { if (!el) return; el.classList.add('hl'); setTimeout(() => { el.classList.add('fade'); el.classList.remove('hl'); setTimeout(() => el.classList.remove('fade'), 1300); }, 1800); };

const unitWord = n => n.replace(/^cap\. /, 'capítulo ').replace(/^can\. /, 'canon ');
const TR13 = {
  key: 'tr13', kind: 'doc', kicker: 'Concilio de Trento', title: 'Decreto sobre el santísimo sacramento de la Eucaristía', meta: 'Sesión XIII, 11 de octubre de 1551', where: 'Concilio de Trento, sesión XIII',
  hint: 'Toca una frase para abrir su panel: dónde se cita en Doctrina, sus términos y otras traducciones.',
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
  hint: 'Toca un versículo para abrir su panel: el griego palabra por palabra, otras traducciones y dónde se cita en Doctrina.',
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

const AYALA_T = '<i>El sacrosanto y ecuménico concilio de Trento</i>, trad. de Ignacio López de Ayala, 2.ª ed. (Madrid: Imprenta Real, 1785)';
const WATER_T = '<i>The Canons and Decrees of the Sacred and Oecumenical Council of Trent</i>, trad. de J. Waterworth (Londres: Burns and Oates, s. f.)';
const citeHTML = (src, u, e) => {
  if (src.kind === 'bible') return 'Juan 6:' + u.n + ', ' + esc(edName(src, e)) + '.';
  const base = 'Concilio de Trento, sesión XIII (11 de octubre de 1551), <i>Decreto sobre el santísimo sacramento de la Eucaristía</i>, ' + u.n + '. En: ';
  return e === 'waterworth' ? base + WATER_T + (u.pw ? ', ' + u.pw : '') + '.' : base + AYALA_T + (u.pa ? ', ' + u.pa : '') + '.';
};
const citeShort = (src, u, e) => src.kind === 'bible' ? 'Juan 6:' + u.n + ' (' + esc(edName(src, e)) + ')' : 'Concilio de Trento, ses. XIII, ' + esc(u.n) + ' (1551)';
const shortTxt = (src, u, e) => plain(citeShort(src, u, e));
const withTextTxt = (src, u, e) => '«' + (src.kind === 'bible' ? (u.v.t[e] || '') : textOf(src, u, e)) + '» ' + shortTxt(src, u, e) + '. {url}';
const citeActs = (src, u, e) => copyBtn('Citar', shortTxt(src, u, e)) + copyBtn('Citar con texto', withTextTxt(src, u, e));
const citeBlock = (src, u, e) => '<p class="ci-t">' + citeShort(src, u, e) + '</p><div class="ci-acts"><div class="ci-r">' + citeActs(src, u, e) + '</div>' + copyBtn('Copiar enlace', '@url', 'Enlace copiado') + '</div>';
const plain = s => { const d = document.createElement('div'); d.innerHTML = s; return d.textContent; };
const textOf = (src, u, e) => src.kind === 'bible' ? (u.v.t[e] || u.v.t.rv1909) : e === 'waterworth' ? u.en : u.es.filter(x => x !== '[…]').join(' ');
const copyBtn = (label, text, done) => '<button class="cpy" type="button" data-copy="' + esc(text) + '" data-done="' + esc(done || 'Cita copiada') + '">' + label + '</button>';
document.addEventListener('click', e => {
  const b = e.target.closest('.cpy[data-copy]');
  if (!b) return;
  const label = b.textContent, txt = b.dataset.copy === '@url' ? location.href : b.dataset.copy.replace('{url}', location.href);
  const done = () => { b.textContent = b.dataset.done; b.classList.add('copied'); setTimeout(() => { b.textContent = label; b.classList.remove('copied'); }, 1600); };
  try { navigator.clipboard.writeText(txt).then(done, done); } catch (err) { done(); }
});

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

const readerHTML = (src, inLayer) => {
  let h = '<div class="col hd rw"><p class="kicker">' + esc(src.kicker) + '</p><h1 class="rd-t">' + esc(src.title) + '</h1>' + (src.meta ? '<p class="rd-m">' + esc(src.meta) + '</p>' : '') + '<p class="rd-hint">' + esc(src.hint) + '</p><div class="gn-slot"></div></div>';
  h += '<div class="col rw rd-tools">' + (src.kind === 'bible' ? '' : toolsHTML(src)) + '</div>';
  h += '<div class="col rw rd-tools2-m"><span class="rd-tools2"></span></div>';
  h += '<div class="col rw" style="margin-top:18px">' + '' + '</div>';
  h += '<div class="col rw rd-body' + (src.kind === 'bible' ? ' rd-bible' : '') + ogClass(src) + '" id="rd-body">' + readerText(src) + '</div>';
  h += '<div class="col rw rd-foot" data-label="Edición y licencia">' + readerFoot(src) + '</div>';
  return h;
};
const HLC = [['amarillo', 'Amarillo'], ['verde', 'Verde'], ['celeste', 'Celeste'], ['rosa', 'Rosa'], ['naranja', 'Naranja']];
const hlcCur = () => { let v = 'amarillo'; try { v = localStorage.getItem('dz-sitio-hlc') || v; } catch (e) {} return HLC.some(c => c[0] === v) ? v : 'amarillo'; };
const hlcSet = v => { try { localStorage.setItem('dz-sitio-hlc', v); } catch (e) {} $$('.hls-cur').forEach(d => { d.dataset.c = v; }); };
const hlcNew = () => opt('hlc') === 'uno' ? 'amarillo' : hlcCur();
const hlcName = c => (HLC.find(x => x[0] === c) || HLC[0])[1].toLowerCase();
const swatchBtn = () => '<button class="hls-b" type="button" data-hlc-pick aria-haspopup="true" aria-expanded="false" aria-label="Color del subrayado: ' + hlcName(hlcCur()) + '"><span class="hls hls-cur" data-c="' + hlcCur() + '"></span></button>';
const dotsHTML = (attr) => '<span class="hls-row" role="group" aria-label="Subrayar con color">' + HLC.map(([c, l]) => '<button class="hls-b" type="button" ' + attr + ' data-c="' + c + '" aria-label="Subrayar en ' + l.toLowerCase() + '"><span class="hls" data-c="' + c + '"></span></button>').join('') + '</span>';
let hlp = null, hlpFrom = null;
const hlpClose = () => { if (!hlp || !hlp.classList.contains('show')) return; hlp.classList.remove('show'); if (hlpFrom) hlpFrom.setAttribute('aria-expanded', 'false'); };
const hlpOpen = btn => {
  if (!hlp) {
    hlp = document.createElement('div'); hlp.className = 'hlp'; hlp.setAttribute('role', 'radiogroup'); hlp.setAttribute('aria-label', 'Color del subrayado');
    document.body.appendChild(hlp);
    hlp.addEventListener('mousedown', e => e.preventDefault());
    hlp.addEventListener('click', e => { const b = e.target.closest('[data-hlc]'); if (!b) return; hlcSet(b.dataset.hlc); $$('.hls-b[data-hlc-pick]').forEach(x => x.setAttribute('aria-label', 'Color del subrayado: ' + hlcName(b.dataset.hlc))); hlpClose(); if (hlpFrom) hlpFrom.focus({preventScroll: true}); });
    hlp.addEventListener('keydown', e => { const bs = [...hlp.querySelectorAll('[data-hlc]')], i = bs.indexOf(document.activeElement); if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); bs[(i + 1) % bs.length].focus(); } if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); bs[(i - 1 + bs.length) % bs.length].focus(); } if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); hlpClose(); if (hlpFrom) hlpFrom.focus(); } });
  }
  const cur = hlcCur();
  hlp.innerHTML = HLC.map(([c, l]) => '<button class="hls-b" type="button" role="radio" data-hlc="' + c + '" aria-checked="' + (c === cur) + '" aria-label="' + l + '"><span class="hls" data-c="' + c + '"></span></button>').join('');
  hlpFrom = btn; btn.setAttribute('aria-expanded', 'true');
  hlp.style.visibility = 'hidden'; hlp.classList.add('show');
  const r = btn.getBoundingClientRect(), w = hlp.offsetWidth, h = hlp.offsetHeight;
  let x = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, innerWidth - w - 8)), y = r.bottom + 6;
  if (y + h > innerHeight - 8) y = r.top - h - 6;
  hlp.style.left = Math.round(x) + 'px'; hlp.style.top = Math.round(y) + 'px'; hlp.style.visibility = '';
  requestAnimationFrame(() => (hlp.querySelector('[aria-checked="true"]') || hlp.querySelector('button')).focus({preventScroll: true}));
};
document.addEventListener('mousedown', e => { const t = e.target.closest('[data-hlc-pick]'); if (t && t.closest('.hl-tb')) e.preventDefault(); }, true);
document.addEventListener('click', e => { const t = e.target.closest('[data-hlc-pick]'); if (t) { e.preventDefault(); if (hlp && hlp.classList.contains('show') && hlpFrom === t) hlpClose(); else hlpOpen(t); return; } if (hlp && !hlp.contains(e.target)) hlpClose(); });
addEventListener('scroll', hlpClose, {passive: true, capture: true});
const viewMode = () => {
  const t = opt('todo');
  let v = store.get('og', 'no');
  if (t === 'barra') { const b = store.get('ogb', 'es'); v = b === 'la' ? 'latin' : b === 'ambos' ? 'debajo' : 'no'; }
  if (t === 'enfrentado') v = store.get('ogf', false) ? 'lado' : 'no';
  return v === 'lado' && innerWidth < 1100 ? 'debajo' : v;
};
const ogMode = viewMode;
const segHTML = (key, label, opts, cur, cls) => '<div class="og ' + (cls || '') + '"><span class="og-l" id="og-l-' + key + '">' + label + '</span><span class="og-b" role="group" aria-labelledby="og-l-' + key + '">' + opts.map(([v, l, c]) => '<button type="button" data-' + key + '="' + v + '" aria-pressed="' + (cur === v) + '"' + (c ? ' class="' + c + '"' : '') + '>' + l + '</button>').join('') + '</span></div>';
const toolsHTML = src => {
  const t = opt('todo');
  if (t === 'actual') return ogControl(src);
  if (t === 'barsel') return src.kind === 'doc' ? '<div class="og-m">' + ogControl(src) + '</div>' : '';
  if (t === 'enfrentado') { const on = !!store.get('ogf', false); return '<button class="btn-more og-f" type="button" data-ogf="' + (on ? 'off' : 'on') + '" aria-expanded="' + on + '">' + D.ic.plus + (on ? 'Ocultar el latín' : 'Leer con el latín enfrentado') + '</button>'; }
  return src.kind === 'doc' ? '<div class="og-m">' + segHTML('ogb', 'Idioma', [['es', 'Español'], ['la', 'Latín'], ['ambos', 'Los dos']], store.get('ogb', 'es')) + '</div>' : '';
};
const barLangHTML = src => src.kind === 'doc' && opt('todo') === 'barsel' ? ogControl(src) : src.kind === 'doc' && opt('todo') === 'barra' ? segHTML('ogb', 'Idioma', [['es', 'Español'], ['la', 'Latín'], ['ambos', 'Los dos']], store.get('ogb', 'es'), 'og-bar') : '';
const ogClass = src => src.kind === 'doc' && ogMode() !== 'no' ? ' og-' + ogMode() : '';
let ogN = 0;
const ogControl = src => { const id = 'og-l' + (++ogN); return '<div class="og"><span class="og-l" id="' + id + '">Latín · original</span><span class="og-b" role="group" aria-labelledby="' + id + '">' + [['no', 'No'], ['debajo', 'Debajo'], ['lado', 'Al lado']].map(([v, l]) => '<button type="button" data-og="' + v + '" aria-pressed="' + (store.get('og', 'no') === v) + '"' + (v === 'lado' ? ' class="og-wide"' : '') + '>' + l + '</button>').join('') + '</span></div>' };
const readerText = src => {
  if (src.kind === 'doc') {
    const groups = [], og = ogMode();
    src.units.forEach(u => { if (u.h || !groups.length) groups.push({h: u.h, units: []}); groups[groups.length - 1].units.push(u); });
    const para = u => '<p class="rd-p" id="p-' + u.id + '" data-n="' + esc(u.n) + '"><span class="dn">' + esc(u.n) + '</span>' + sentences(src, u, 0, true) + '</p>';
    const latin = u => u.la ? '<p class="rd-p rd-la" id="la-' + u.id + '" lang="la"><span class="og-tag">Latín · original</span>' + esc(u.la) + '</p>' : '<div class="rd-la-x" aria-hidden="true"></div>';
    const only = u => u.la ? '<p class="rd-p rd-la rd-la-only" id="la-' + u.id + '" lang="la"><span class="dn">' + esc(u.n) + '</span>' + esc(u.la) + '</p>' : para(u);
    const loeb = opt('todo') === 'enfrentado';
    const unit = u => og === 'no' ? para(u) : og === 'latin' ? only(u) : og === 'lado' ? '<div class="rd-pair">' + (loeb ? latin(u) + para(u) : para(u) + latin(u)) + '</div>' : para(u) + (u.la ? latin(u) : '');
    return groups.map(g => '<section class="rd-sec" data-label="' + esc(g.h) + '"><p class="rd-ch">' + esc(g.h) + '</p>' + g.units.map(unit).join('') + '</section>').join('');
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
  if (src.kind === 'doc') return '<h2>Fecha</h2><p>Sesión XIII del Concilio de Trento, celebrada el 11 de octubre de 1551.</p><h2>Edición y licencia</h2><p>' + AYALA_T.replace('trad. de', 'traducido al castellano por') + ', con el texto latino corregido según la edición de Roma de 1564. Dominio público. Se conserva la ortografía de la edición. «Sea excomulgado» traduce el latín «anathema sit».</p><h2>Cita completa</h2><p>Concilio de Trento, sesión XIII (11 de octubre de 1551), <i>Decreto sobre el santísimo sacramento de la Eucaristía</i>. En: ' + AYALA_T + ', pp. 157–174 (capítulos 1 a 6 y cánones 1 a 11).</p><p>La traducción inglesa que se compara en cada detalle es la de J. Waterworth, <i>The Canons and Decrees of the Sacred and Oecumenical Council of Trent</i> (Londres: Burns and Oates; Nueva York: Catholic Publication Society, sin fecha; la primera edición es de 1848). Dominio público.</p>';
  const e = edOf(src);
  return '<h2>Edición y licencia</h2><p>' + esc(EDFULL[e]) + '. Texto de eBible.org. Dominio público.</p><h2>Cita completa</h2><p>Juan 6, ' + esc(EDFULL[e]) + ' (texto de eBible.org).</p><p>Las otras traducciones que puedes elegir arriba: ' + EDORDER.filter(x => x !== e).map(x => esc(EDFULL[x])).join(', ') + '. Todas de dominio público.</p>';
};
const EDABBR = {rv1909: 'RV1909', scio: 'Scío', blm: 'BLM', bsb: 'BSB', kjv: 'KJV', web: 'WEB', dra: 'DRA', ylt: 'YLT', ayala: 'Ayala 1785', waterworth: 'Waterworth 1848'};
const edLang = (src, e) => src.kind === 'bible' ? DT.EDS[e].lang : (e === 'ayala' ? 'es' : 'en');
const edLong = (src, e) => src.kind === 'bible' ? EDFULL[e] : (e === 'ayala' ? 'Ignacio López de Ayala (1785)' : 'J. Waterworth (1848)');
const edSelect = (src, u, id, cur) => {
  const eds = edsFor(src, u);
  cur = cur || edOf(src);
  if (!eds.includes(cur)) cur = eds[0];
  if (eds.length < 2) return '';
  const groups = [['es', 'Español'], ['en', 'Inglés']].map(([l, t]) => ({t, eds: eds.filter(e => edLang(src, e) === l)})).filter(g => g.eds.length);
  return '<div class="edp" id="' + id + '" data-src="' + src.key + '"><button class="edp-b" type="button" aria-haspopup="listbox" aria-expanded="false" aria-controls="' + id + '-l"><span class="edp-l">Traducción</span><span class="edp-v">' + esc(EDABBR[cur] || cur) + '</span><span class="sr">, ' + esc(edLong(src, cur)) + '</span>' + D.ic.chev + '</button><div class="edp-p" hidden><div class="edp-in" role="listbox" id="' + id + '-l" aria-label="Traducción" tabindex="-1">' + groups.map(g => '<div class="edp-g" role="group" aria-label="' + g.t + '"><p class="edp-gh" aria-hidden="true">' + g.t + '</p>' + g.eds.map(e => '<div class="edp-o" role="option" tabindex="-1" data-v="' + e + '" aria-selected="' + (e === cur) + '">' + esc(edLong(src, e)) + ' <span>(' + esc(EDABBR[e] || e) + ')</span></div>').join('') + '</div>').join('') + '</div></div></div>';
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
    const sel = getSelection();
    if (u && root.contains(u) && sel && !sel.isCollapsed && root.contains(sel.anchorNode)) return;
    if (u && root.contains(u)) { act(u); return; }
    const og = e.target.closest('[data-og]');
    if (og) { setOg(og.dataset.og); return; }
    const of = e.target.closest('[data-ogf]');
    if (of) { store.set('ogf', of.dataset.ogf === 'on'); refreshView(); return; }
    const lh = e.target.closest('[data-la-hide]');
    if (lh) { closeLatin(lh.dataset.laHide); return; }
    const x = e.target.closest('[data-act]');
    if (x) { const a = x.dataset.act; if (a === 'open') goDetail(x.dataset.u); if (a === 'close-card') closeCard(); if (a === 'close-panel') closePanel(); }
  });
  const setOg = (v, keepY) => { store.set('og', v); refreshView(keepY); };
  const refreshView = keepY => {
    const tools = $('.rd-tools', root);
    if (tools && src.kind === 'doc') tools.innerHTML = toolsHTML(src);
    $$('.rd-lang').forEach(x => { x.innerHTML = barLangHTML(src); });
    const on = $('.u.on', root), onId = on ? on.dataset.u : null;
    const anchor = on || $$('.rd-p', root).find(p => p.getBoundingClientRect().bottom > D.offset() + 40);
    const before = anchor ? anchor.getBoundingClientRect().top : 0;
    const body = $('#rd-body', root);
    body.className = body.className.replace(/ og-\w+/g, '') + ogClass(src);
    body.innerHTML = readerText(src);
    if (D.paintHL) D.paintHL();
    if (ctx.layer) ctx.layer.classList.toggle('og-wide-on', ogMode() === 'lado');
    if (onId) mark(root.querySelector('.u[data-u="' + CSS.escape(onId) + '"]'));
    const again = onId ? root.querySelector('.u[data-u="' + CSS.escape(onId) + '"]') : anchor && anchor.id ? root.querySelector('#' + CSS.escape(anchor.id)) : null;
    if (again && !keepY) { const d = again.getBoundingClientRect().top - before; if (Math.abs(d) > 1) jumpTo(scrollTopOf(scroller) + d, scroller); }
    if (D.rebuildRuler && !ctx.layer) D.rebuildRuler();
  };
  D.readerSetOg = setOg;
  D.curReader = {refreshView, setOgb: v => { store.set('ogb', v); refreshView(); }, setOg: v => setOg(v)};
  $$('.rd-lang').forEach(x => { x.innerHTML = barLangHTML(src); });
  let seenTodo = opt('todo');
  addEventListener('pp', e => { if (e.detail.key === 'todo' && e.detail.value !== seenTodo) { seenTodo = e.detail.value; refreshView(); } });
  addEventListener('resize', () => { const b = $('#rd-body', root); if (!b || src.kind !== 'doc') return; const want = ogMode(); const has = b.classList.contains('og-lado') ? 'lado' : b.classList.contains('og-debajo') ? 'debajo' : b.classList.contains('og-latin') ? 'latin' : 'no'; if (want !== has) refreshView(true); });
  root.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.u[data-u]')) { e.preventDefault(); act(e.target); }
  });
  document.addEventListener('change', e => {
    if (e.target.id === 'ed-r') { store.set('ed-' + src.key, e.target.value); $('#rd-body', root).innerHTML = readerText(src); $('.rd-foot', root).innerHTML = readerFoot(src); if (D.paintHL) D.paintHL(); }
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
    c.innerHTML = '<div class="rcard-in"><p class="rcard-k">' + esc(src.unitTitle(u)) + (p.k ? ', frase ' + p.k : '') + '<button class="cw-x" type="button" data-act="close-card" aria-label="Cerrar">' + D.ic.x + '</button></p><p class="rcard-q">' + esc(sentText(p)) + '</p><ul class="rcard-has">' + has.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul><div class="rcard-acts"><button class="btn-go" type="button" data-act="open" data-u="' + esc(p.uid) + '">Ver el detalle</button>' + copyBtn('Citar', shortTxt(src, u, edOf(src))) + '</div></div>';
    el.closest('.rd-p').after(c);
    if (!reduce()) {
      const h = c.offsetHeight;
      c.animate([{height: '0px', opacity: 0}, {height: h + 'px', opacity: 1}], {duration: 380, easing: EASE_REVEAL});
    }
    const r = c.getBoundingClientRect();
    const over = r.bottom - innerHeight + 48;
    if (over > 0) { if (ctx.layer) ctx.layer.scrollTop += over; else D.scrollToY(scrollY + over); }
  }

  const latOpen = id => !!root.querySelector('#lx-' + CSS.escape(id));
  function openLatin(u) {
    const p = root.querySelector('#p-' + CSS.escape(u.id));
    if (!p || !u.la || latOpen(u.id)) return root.querySelector('#lx-' + CSS.escape(u.id));
    const x = document.createElement('div');
    x.className = 'la-x'; x.id = 'lx-' + u.id;
    x.innerHTML = '<div class="la-in"><p class="la-h"><span class="og-tag">Latín · original</span><button class="la-hide" type="button" data-la-hide="' + u.id + '">Ocultar</button></p><p class="la-t" lang="la">' + esc(u.la) + '</p></div>';
    p.after(x);
    if (!reduce()) {
      const h = x.scrollHeight;
      x.style.overflow = 'hidden';
      x.animate([{height: '0px'}, {height: h + 'px'}], {duration: 220, easing: EASE_REVEAL}).finished.then(() => { x.style.overflow = ''; }, () => {});
      [...x.querySelectorAll('.la-h, .la-t')].forEach((c, i) => c.animate([{opacity: 0}, {opacity: 1}], {duration: 200, delay: i * 20, easing: 'ease-out', fill: 'backwards'}));
    }
    return x;
  }
  function closeLatin(id) {
    const x = root.querySelector('#lx-' + CSS.escape(id));
    if (!x) return;
    const done = () => { x.remove(); if (rpCur && rp && rp.classList.contains('open') && rpCur.u.id === id) paintLatinRow(); };
    if (reduce()) { done(); return; }
    const h = x.offsetHeight;
    x.style.overflow = 'hidden';
    [...x.querySelectorAll('.la-h, .la-t')].forEach(c => c.animate([{opacity: 1}, {opacity: 0}], {duration: 120, easing: 'ease-in', fill: 'forwards'}));
    x.animate([{height: h + 'px'}, {height: '0px'}], {duration: 160, delay: 120, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards'}).finished.then(done, () => {});
  }
  const paintLatinRow = () => { const r = rp && rp.querySelector('[data-act="latin"]'); if (!r) return; const open = latOpen(rpCur.u.id); r.querySelector('.pr-t').textContent = open ? 'Ocultar el latín' : 'Leer en latín'; r.setAttribute('aria-expanded', String(open)); };
  let rp = null, rpOpener = null, rpCur = null;
  function closePanel(silent) {
    if (!rp) return;
    rp.classList.remove('open');
    html.classList.remove('rp-open');
    if (ctx.layer) ctx.layer.classList.remove('rp-on');
    mark(null);
    rpCur = null;
    if (!silent && rpOpener && rpOpener.focus) rpOpener.focus({preventScroll: true});
  }
  let edNote = null;
  const flushEditor = () => { const e = rp && rp.querySelector('.ne'); if (e && e._save) e._save(); };
  const paintEditor = n => {
    flushEditor();
    edNote = n;
    const b = $('.rp-b', rp);
    $('.rp-ref', rp).textContent = n.scope === 'fuente' ? 'Nota sobre esta fuente' : n.divEnd ? ntLoc(src, n) : src.unitTitle(unitOf(src, n.div));
    b.innerHTML = (rpCur ? '<button class="rd-back pv-back" type="button" data-view="notes-back">' + D.ic.back + esc(src.unitTitle(rpCur.u)) + '</button>' : '<button class="rd-back pv-back" type="button" data-act="nt-list">' + D.ic.back + 'Tus notas</button>') + editorHTML(src, n);
    b.scrollTop = 0;
    wireEditor(b.querySelector('.ne'), src, n, () => { ntChanged(); }, () => { if (rpCur) paintPanel(''); else D.ntOpenList('notas'); });
  };
  const paintPanel = (view, tab) => {
    if (view !== 'notes-back') flushEditor();
    if (view === 'notes-back') { flushEditor(); view = ''; tab = ntDiv(src.key, rpCur.u.id).length ? 'notes' : tab; }
    edNote = null;
    const p = rpCur;
    $('.rp-ref', rp).textContent = src.unitTitle(p.u);
    const b = $('.rp-b', rp);
    b.innerHTML = panelHTML(src, p, view || '', tab);
    const ww = $('.ww-p', b);
    if (ww) wireWords(ww, p.u);
    b.scrollTop = 0;
    if (!reduce()) b.animate([{opacity: .3}, {opacity: 1}], {duration: 160, easing: 'ease-out'});
    const sel = b.querySelector('.pt-tabs [aria-selected="true"]');
    tabShown = sel ? sel.dataset.tab : null; tabExit = null;
    if (sel) requestAnimationFrame(() => placeInd(sel, false));
    paintLatinRow();
  };
  let tabExit = null, tabShown = null;
  const tabInd = () => rp.querySelector('.pt-ind');
  const tabBox = (strip, el) => { const sr = strip.getBoundingClientRect(), r = el.getBoundingClientRect(); return {x: r.left - sr.left, w: r.width, h: r.height, y: r.top - sr.top}; };
  const placeInd = (to, animate) => {
    const strip = rp.querySelector('.pt-tabs'), ind = tabInd();
    if (!strip || !ind || !to) return;
    const from = ind.offsetWidth ? tabBox(strip, ind) : null;
    ind.getAnimations().forEach(a => a.cancel());
    const b = tabBox(strip, to);
    Object.assign(ind.style, {width: b.w + 'px', height: b.h + 'px', transform: 'translate(' + b.x + 'px,' + b.y + 'px)'});
    if (!animate || reduce() || !from || !from.w) return;
    ind.animate([{transform: 'translate(' + from.x + 'px,' + from.y + 'px)', width: from.w + 'px'}, {transform: 'translate(' + b.x + 'px,' + b.y + 'px)', width: b.w + 'px'}], {duration: 340, easing: EASE_REVEAL});
  };
  function switchTab(id) {
    const strip = rp.querySelector('.pt-tabs'), body = rp.querySelector('.pt-body');
    if (!strip || !body) return;
    const tabs = [...strip.querySelectorAll('[data-tab]')], to = tabs.find(t => t.dataset.tab === id);
    if (!to || to.getAttribute('aria-selected') === 'true') return;
    tabs.forEach(t => t.setAttribute('aria-selected', String(t === to)));
    const slide = opt('tabmo') === 'deslizar' && !reduce();
    placeInd(to, slide);
    const order = tabs.map(t => t.dataset.tab);
    const render = tid => { const rows = panelRows(src, rpCur); body.innerHTML = panelView(src, rpCur, tid, rows); const ww = body.querySelector('.ww-p'); if (ww) wireWords(ww, rpCur.u); tabShown = tid; };
    if (!slide) { render(id); return; }
    if (tabExit) return;
    const dir = order.indexOf(id) > order.indexOf(tabShown) ? 1 : -1;
    const op = parseFloat(getComputedStyle(body).opacity);
    body.getAnimations().forEach(a => a.cancel());
    tabExit = body.animate([{opacity: op, transform: 'none'}, {opacity: 0, transform: 'translateX(' + (-dir * 16) + 'px)'}], {duration: 140, easing: 'cubic-bezier(0.4, 0, 1, 1)', fill: 'forwards'}).finished.then(() => {
      tabExit = null;
      const target = tabs.find(t => t.getAttribute('aria-selected') === 'true').dataset.tab;
      const d2 = order.indexOf(target) > order.indexOf(tabShown) ? 1 : -1;
      body.getAnimations().forEach(a => a.cancel());
      render(target);
      body.animate([{opacity: .001, transform: 'translateX(' + (d2 * 16) + 'px)'}, {opacity: 1, transform: 'none'}], {duration: 260, easing: EASE_REVEAL, fill: 'backwards'});
    }, () => { tabExit = null; });
  }
  function ensureRp() {
    if (!rp) {
      rp = document.createElement('aside');
      rp.className = 'rp'; rp.setAttribute('aria-label', 'Panel del pasaje');
      rp.innerHTML = '<span class="rp-grip" aria-hidden="true"></span><div class="rp-h"><span class="rp-ref"></span><button class="cw-x" type="button" data-act="close-panel" aria-label="Cerrar el panel">' + D.ic.x + '</button></div><div class="rp-b"></div>';
      (ctx.layer || document.body).appendChild(rp);
      rp.addEventListener('click', e => {
        const lt = e.target.closest('[data-ltab]');
        if (lt) { listTab(lt); return; }
        const x = e.target.closest('[data-act], [data-view], [data-tab]');
        if (!x) return;
        if (x.dataset.view != null) { paintPanel(x.dataset.view); return; }
        if (x.dataset.tab) { switchTab(x.dataset.tab); return; }
        const a = x.dataset.act;
        if (a === 'close-panel') closePanel();
        if (a === 'open') goDetail(x.dataset.u);
        if (a === 'note-new') { openNoteFor(rpCur ? {scope: 'division', div: rpCur.u.id, sent: rpCur.k || null, sent0: rpCur.k || null} : {scope: 'fuente'}); return; }
        if (a === 'nt-edit') { const n = ntAll().find(z => z.id === x.dataset.nid); if (n) { if (n.scope !== 'fuente' && !rpCur) { rpCur = null; } paintEditor(n); } return; }
        if (a === 'nt-list') { D.ntOpenList('notas'); return; }
        if (a === 'nt-general') { openNoteFor({scope: 'fuente'}); return; }
        if (a === 'nt-copy') { copyText(x, ntExport(src, false), 'Copiadas'); return; }
        if (a === 'nt-md') { copyText(x, ntExport(src, true), 'Copiado en Markdown'); return; }
        if (a === 'hl-unit') { D.hlToggleUnit(rpCur.uid, x.dataset.c); const row = x.closest('.hl-acts'); if (row) row.outerHTML = hlActs(D.hlUnitOn(rpCur.uid), 'data-act="hl-unit"'); return; }
        if (a === 'hl-go') { D.hlGo(x.dataset.h); return; }
        if (a === 'hl-copyall') { D.hlCopyAll(x); return; }
        if (a === 'latin') {
          const u = rpCur.u;
          if (ogMode() !== 'no') { const la = root.querySelector('#la-' + CSS.escape(u.id)); if (la) { const y = la.getBoundingClientRect().top + scrollTopOf(scroller) - D.offset() - 24; if (scroller && scroller.classList && scroller.classList.contains('rd')) scroller.scrollTo({top: y, behavior: reduce() ? 'auto' : 'smooth'}); else D.scrollToY(y); } return; }
          if (latOpen(u.id)) { closeLatin(u.id); paintLatinRow(); return; }
          const x = openLatin(u); paintLatinRow();
          setTimeout(() => { if (!x) return; const r = x.getBoundingClientRect(), lim = innerWidth < 1100 ? rp.getBoundingClientRect().top - 16 : innerHeight - 24; if (r.bottom > lim) { const by = Math.min(r.bottom - lim, r.top - D.offset() - 12); if (by > 0) { if (scroller && scroller.classList && scroller.classList.contains('rd')) scroller.scrollBy({top: by, behavior: reduce() ? 'auto' : 'smooth'}); else D.scrollToY(scrollY + by); } } }, reduce() ? 0 : 240);
        }
      });
    }
  }
  function openPanel(el) {
    ensureRp();
    rpOpener = el;
    mark(el);
    rpCur = pick(el.dataset.u);
    paintPanel('');
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
  D.panelList = (title, html) => { ensureRp(); rpCur = null; mark(null); $('.rp-ref', rp).textContent = title; $('.rp-b', rp).innerHTML = html; $('.rp-b', rp).scrollTop = 0; rp.classList.add('open'); html_.classList.add('rp-open'); if (ctx.layer) ctx.layer.classList.add('rp-on'); };
  let seenPnl = opt('pnl');
  addEventListener('pp', e => { if (e.detail.key === 'pnl' && e.detail.value !== seenPnl) { seenPnl = e.detail.value; if (rpCur && rp.classList.contains('open')) paintPanel(''); } });
  addEventListener('keydown', e => { if (e.key === 'Escape') { if (rp && rp.classList.contains('open')) closePanel(); else if ($('.rcard', root)) closeCard(); } });
  let seenSel = opt('rdsel');
  addEventListener('pp', e => { if (e.detail.key === 'rdsel' && e.detail.value !== seenSel) { seenSel = e.detail.value; closePanel(true); const c = $('.rcard', root); if (c) c.remove(); mark(null); } });


  const HLK = 'dz-sitio-hl-v1';
  const hlAll = () => { try { return JSON.parse(localStorage.getItem(HLK) || '[]'); } catch (e) { return []; } };
  const hlSave = l => { try { localStorage.setItem(HLK, JSON.stringify(l)); } catch (e) {} };
  const edKey = () => src.kind === 'bible' ? edOf(src) : 'ayala';
  const anchorOf = div => src.kind === 'bible' ? root.querySelector('.u[data-u="' + CSS.escape(div) + '"]') : root.querySelector('#p-' + CSS.escape(div));
  const SKIP = '.dn, .vn, .og-tag, .la-x, .rcard';
  const textNodes = el => { const out = []; const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {acceptNode: n => n.parentElement.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT}); let n; while ((n = w.nextNode())) out.push(n); return out; };
  const textOfEl = el => textNodes(el).map(n => n.data).join('');
  const offsetIn = (el, node, off) => { let t = 0; for (const n of textNodes(el)) { if (n === node) return t + off; t += n.data.length; } return null; };
  const divOfNode = node => { const e = node.nodeType === 1 ? node : node.parentElement; if (!e) return null; if (src.kind === 'bible') { const v = e.closest('.u[data-u]'); return v && root.contains(v) ? v.dataset.u : null; } const p = e.closest('.rd-p[id^="p-"]'); return p && root.contains(p) ? p.id.slice(2) : null; };
  const unwrap = () => $$('mark.hl-u', root).forEach(m => { const p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); p.removeChild(m); p.normalize(); });
  const wrapRange = (el, a, b, id, fresh, c) => {
    let t = 0;
    textNodes(el).forEach(n => {
      const s = t, e = t + n.data.length; t = e;
      const x = Math.max(a, s), y = Math.min(b, e);
      if (y <= x) return;
      let node = n;
      if (y - s < node.data.length) node.splitText(y - s);
      if (x - s > 0) node = node.splitText(x - s);
      const m = document.createElement('mark');
      m.className = 'hl-u'; m.dataset.h = id; m.dataset.c = c || 'amarillo';
      node.parentNode.insertBefore(m, node); m.appendChild(node);
      if (fresh && !reduce()) m.animate([{backgroundColor: 'transparent'}, {}], {duration: 200, easing: 'ease-out'});
    });
  };
  let lastFresh = null;
  const paintHL = () => {
    unwrap();
    hlAll().filter(h => h.src === src.key && h.ed === edKey()).forEach(h => { const el = anchorOf(h.div); if (el) wrapRange(el, h.a, h.b, h.id, h.id === lastFresh, h.c || 'amarillo'); });
    lastFresh = null;
    paintTools2();
    try { paintMarks(); paintCards(); paintGeneral(); } catch (e) {}
  };
  D.paintHL = paintHL;
  const addRanges = (ranges, c) => {
    c = c || hlcNew();
    let l = hlAll(); const before = JSON.stringify(l); const ed = edKey(); let idNew = null;
    const here = (h, div) => h.src === src.key && h.ed === ed && h.div === div;
    const col = h => h.c || 'amarillo';
    ranges.forEach(r => {
      const el = anchorOf(r.div), txt = el ? textOfEl(el) : '';
      const same = l.filter(h => here(h, r.div) && col(h) === c && h.a <= r.b && h.b >= r.a);
      const a = Math.min(r.a, ...same.map(h => h.a)), b = Math.max(r.b, ...same.map(h => h.b));
      l = l.filter(h => !same.includes(h));
      const out = [];
      l.forEach(h => {
        if (!here(h, r.div) || h.b <= a || h.a >= b) { out.push(h); return; }
        if (h.a < a) out.push(Object.assign({}, h, {id: h.id + 'x', b: a, q: txt.slice(h.a, a)}));
        if (h.b > b) out.push(Object.assign({}, h, {id: h.id + 'y', a: b, q: txt.slice(b, h.b)}));
      });
      l = out;
      idNew = 'h' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
      l.push({id: idNew, src: src.key, ed, div: r.div, a, b, c, q: txt.slice(a, b), t: Date.now()});
    });
    hlSave(l); lastFresh = idNew; paintHL(); undoBar('Subrayado.', before);
  };
  const removeRanges = ranges => {
    let l = hlAll(); const before = JSON.stringify(l); const ed = edKey();
    ranges.forEach(r => {
      const out = [];
      l.forEach(h => {
        if (h.src !== src.key || h.ed !== ed || h.div !== r.div || h.b <= r.a || h.a >= r.b) { out.push(h); return; }
        const el = anchorOf(h.div), txt = el ? textOfEl(el) : '';
        if (h.a < r.a) out.push(Object.assign({}, h, {id: h.id + 'a', b: r.a, q: txt.slice(h.a, r.a)}));
        if (h.b > r.b) out.push(Object.assign({}, h, {id: h.id + 'b', a: r.b, q: txt.slice(r.b, h.b)}));
      });
      l = out;
    });
    hlSave(l); paintHL(); undoBar('Subrayado quitado.', before);
  };
  const covered = r => hlAll().some(h => h.src === src.key && h.ed === edKey() && h.div === r.div && h.a <= r.a && h.b >= r.b);
  const unitRange = uid => {
    if (src.kind === 'bible') { const el = anchorOf(uid); return el ? {div: uid, a: 0, b: textOfEl(el).length} : null; }
    const [div] = uid.split('~'), p = anchorOf(div), s = root.querySelector('.u[data-u="' + CSS.escape(uid) + '"]');
    if (!p || !s) return null;
    const ns = textNodes(s); if (!ns.length) return null;
    const a = offsetIn(p, ns[0], 0); return {div, a, b: a + ns.map(n => n.data).join('').length};
  };
  D.hlUnitOn = uid => { const r = unitRange(uid); return !!r && covered(r); };
  D.hlToggleUnit = (uid, c) => { const r = unitRange(uid); if (!r) return; if (c) addRanges([r], c); else if (covered(r)) removeRanges([r]); else addRanges([r]); };
  let undoT = 0;
  const undoBar = (msg, before) => {
    let u = $('.hl-undo');
    if (!u) { u = document.createElement('div'); u.className = 'hl-undo'; u.setAttribute('role', 'status'); document.body.appendChild(u); }
    u.innerHTML = '<span>' + esc(msg) + '</span><button type="button" class="cpy">Deshacer</button>';
    u.querySelector('button').onclick = () => { try { localStorage.setItem(HLK, before); } catch (e) {} paintHL(); refreshPanelHL(); u.classList.remove('show'); };
    u.classList.add('show'); clearTimeout(undoT); undoT = setTimeout(() => u.classList.remove('show'), 5000);
  };
  const refreshPanelHL = () => { const b = rp && rp.querySelector('.hl-acts'); if (b && rpCur) b.outerHTML = hlActs(D.hlUnitOn(rpCur.uid), 'data-act="hl-unit"'); if (rp && rp.classList.contains('open') && !rpCur) D.hlOpenList(); };
  const FS = [17, 19, 21, 23, 25, 27, 29];
  const fsNow = () => { const v = +store.get('fs', 19); return FS.includes(v) ? v : 19; };
  const applyFs = () => html.style.setProperty('--rd-fs', fsNow() + 'px');
  applyFs();
  const mine = () => hlAll().filter(h => h.src === src.key);
  const paintTools2 = () => {
    const n = mine().length + ntOf(src.key).length, i = FS.indexOf(fsNow());
    const list = n ? '<button class="cpy hl-list-b" type="button" data-hl-list>Tus notas <span class="n">' + n + '</span></button>' : '<button class="cpy hl-list-b nt-gen-b" type="button" data-act-gn aria-keyshortcuts="Shift+N">Nota</button>';
    const fs = '<span class="og-b fs-b" role="group" aria-label="Tamaño del texto"><button type="button" data-fs="-1" aria-label="Achicar el texto"' + (i === 0 ? ' disabled' : '') + '>A−</button><button type="button" data-fs="1" aria-label="Agrandar el texto"' + (i === FS.length - 1 ? ' disabled' : '') + '>A+</button></span>';
    $$('.rd-tools2').forEach(x => {
      if (!x.querySelector('.t2-list')) x.innerHTML = '<span class="t2-list"></span><span class="t2-fs"></span>' + (src.kind === 'bible' && !x.closest('.rd-tools2-m') ? '<span class="t2-ed">' + edSelect(src, src.units[0], 'ed-r') + '</span>' : '');
      x.querySelector('.t2-list').innerHTML = list; x.querySelector('.t2-fs').innerHTML = x.closest('.rd-tools2-m') ? '' : fs;
    });
  };
  document.addEventListener('click', e => {
    const f = e.target.closest('[data-fs]');
    if (f && !f.disabled) { const i = FS.indexOf(fsNow()) + (+f.dataset.fs); const anchor = $$('.rd-p', root).find(p => p.getBoundingClientRect().bottom > D.offset() + 40); const before = anchor ? anchor.getBoundingClientRect().top : 0; store.set('fs', FS[Math.max(0, Math.min(FS.length - 1, i))]); applyFs(); paintTools2(); if (anchor) { const d = anchor.getBoundingClientRect().top - before; if (Math.abs(d) > 1) jumpTo(scrollTopOf(scroller) + d, scroller); } return; }
    if (e.target.closest('[data-hl-list]')) D.ntOpenList();
    if (e.target.closest('[data-act-gn]')) openNoteFor({scope: 'fuente'});
  });
  const fmtDate = t => new Date(t).toLocaleDateString('es', {day: 'numeric', month: 'short', year: 'numeric'});
  D.hlOpenList = () => {
    const l = mine().sort((x, y) => src.units.findIndex(u => u.id === x.div.split('~')[0]) - src.units.findIndex(u => u.id === y.div.split('~')[0]) || x.a - y.a);
    const unitFor = h => unitOf(src, h.div);
    const body = hlListHTML(l);
    D.panelList('Subrayados', body);
  };
  const hlListHTML = l0 => {
    const l = l0 || mine().sort((x, y) => src.units.findIndex(u => u.id === x.div.split('~')[0]) - src.units.findIndex(u => u.id === y.div.split('~')[0]) || x.a - y.a);
    const unitFor = h => unitOf(src, h.div);
    return l.length ? '<ul class="hl-l">' + l.map(h => { const u = unitFor(h); return '<li><button class="hl-li" type="button" data-act="hl-go" data-h="' + h.id + '"><span class="hl-q"><span class="hls hls-i" data-c="' + (h.c || 'amarillo') + '" aria-label="' + hlcName(h.c || 'amarillo') + '"></span>«' + esc(h.q.trim()) + '»</span><span class="hl-m">' + esc(u ? src.short(u) : h.div) + (h.ed !== edKey() && src.kind === 'bible' ? ', ' + esc(EDSHORT[h.ed] || h.ed) : '') + '<span>' + esc(fmtDate(h.t)) + '</span></span></button></li>'; }).join('') + '</ul><div class="cd-acts"><button class="cpy" type="button" data-act="hl-copyall">Copiar todos con sus citas</button></div><p class="hl-note">Se guardan en este navegador.</p>' : '<p class="hl-note">Todavía no subrayaste nada en este texto.</p>';
  };
  D.hlGo = id => {
    const m = root.querySelector('mark.hl-u[data-h="' + CSS.escape(id) + '"]');
    if (!m) return;
    const y = m.getBoundingClientRect().top + scrollTopOf(scroller) - D.offset() - 60;
    if (scroller && scroller.classList && scroller.classList.contains('rd')) scroller.scrollTo({top: y, behavior: reduce() ? 'auto' : 'smooth'}); else D.scrollToY(y);
    const ms = $$('mark.hl-u[data-h="' + CSS.escape(id) + '"]', root);
    ms.forEach(x => x.classList.add('hl-arr')); setTimeout(() => ms.forEach(x => x.classList.remove('hl-arr')), 1800);
  };
  D.hlCopyAll = b => {
    const txt = mine().map(h => { const u = unitOf(src, h.div); return '«' + h.q.trim() + '» ' + (u ? shortTxt(src, u, h.ed) : '') + '.'; }).join('\n\n');
    const label = b.textContent; const done = () => { b.textContent = 'Copiados'; setTimeout(() => { b.textContent = label; }, 1600); };
    try { navigator.clipboard.writeText(txt).then(done, done); } catch (err) { done(); }
  };
  let tb = null, selT = 0;
  const selRanges = () => {
    const s = getSelection();
    if (!s || s.isCollapsed || !s.rangeCount) return null;
    const r = s.getRangeAt(0);
    if (!root.contains(r.commonAncestorContainer) || (rp && rp.contains(r.commonAncestorContainer))) return null;
    const divs = src.kind === 'bible' ? $$('.u[data-u]', root) : $$('.rd-p[id^="p-"]', root);
    const out = [];
    divs.forEach(el => {
      if (!r.intersectsNode(el)) return;
      const div = src.kind === 'bible' ? el.dataset.u : el.id.slice(2);
      const ns = textNodes(el); if (!ns.length) return;
      const len = ns.map(n => n.data).join('').length;
      let a = 0, b = len;
      if (el.contains(r.startContainer)) { const o = r.startContainer.nodeType === 3 ? offsetIn(el, r.startContainer, r.startOffset) : null; if (o != null) a = o; }
      if (el.contains(r.endContainer)) { const o = r.endContainer.nodeType === 3 ? offsetIn(el, r.endContainer, r.endOffset) : null; if (o != null) b = o; }
      const txt = textOfEl(el);
      while (a > 0 && /\S/.test(txt[a - 1])) a--;
      while (b < len && /\S/.test(txt[b])) b++;
      while (a < b && /\s/.test(txt[a])) a++;
      while (b > a && /\s/.test(txt[b - 1])) b--;
      if (b > a) out.push({div, a, b, q: txt.slice(a, b)});
    });
    return out.length ? out : null;
  };
  const hideTb = () => { if (!tb || !tb.classList.contains('show')) return; tb.classList.remove('show'); };
  const showTb = () => {
    if (opt('hl') !== 'rango') return;
    const rs = selRanges();
    if (!rs) { hideTb(); return; }
    if (!tb) {
      tb = document.createElement('div'); tb.className = 'hl-tb'; tb.setAttribute('role', 'toolbar'); tb.setAttribute('aria-label', 'Lo que elegiste');
      (ctx.layer || document.body).appendChild(tb);
      tb.addEventListener('mousedown', e => e.preventDefault());
      tb.addEventListener('click', e => { const b = e.target.closest('[data-tb]'); if (b) tbAct(b.dataset.tb, b); });
      tb.addEventListener('pointerup', e => e.stopPropagation());
    }
    const all = rs.every(covered);
    tb.innerHTML = hlActs(all, 'data-tb="hl"').replace(/class="cpy" /g, '') + '<button type="button" data-tb="note" aria-keyshortcuts="N">Nota</button><span class="tb-sep" aria-hidden="true"></span><button type="button" data-tb="cite">Copiar cita</button><button type="button" data-tb="find">Buscar</button>';
    tb._rs = rs;
    const phone = innerWidth <= 720 || matchMedia('(pointer: coarse)').matches;
    tb.classList.toggle('dock', phone);
    if (!phone) {
      const rects = [...getSelection().getRangeAt(0).getClientRects()].filter(q => q.width > 1);
      const first = rects[0], last = rects[rects.length - 1];
      const col = (root.querySelector('#rd-body') || root).getBoundingClientRect();
      tb.style.visibility = 'hidden'; tb.classList.add('show');
      const w = tb.offsetWidth, h = tb.offsetHeight;
      let x = Math.max(col.left, Math.min(first.left, col.right - w)), y = last.bottom + 8;
      if (y + h > innerHeight - 8) y = first.top - h - 8;
      tb.style.left = Math.round(x) + 'px'; tb.style.top = Math.round(y) + 'px'; tb.style.visibility = '';
    } else { tb.style.left = ''; tb.style.top = ''; tb.classList.add('show'); }
  };
  const tbAct = (a, b) => {
    const rs = tb._rs || [];
    if (!rs.length) return;
    const u = unitOf(src, rs[0].div), q = rs.map(r => r.q).join(' ');
    if (a === 'note') { noteFromSelection(); return; }
    if (a === 'hl') { if (b.dataset.c) addRanges(rs, b.dataset.c); else if (rs.every(covered)) removeRanges(rs); else addRanges(rs); getSelection().removeAllRanges(); hideTb(); hlpClose(); return; }
    const copy = (txt, done) => { const label = b.textContent; const ok = () => { b.textContent = done; setTimeout(() => { b.textContent = label; }, 1600); }; try { navigator.clipboard.writeText(txt).then(ok, ok); } catch (err) { ok(); } };
    const link = location.href.split('#')[0] + '#' + src.key + '/' + (src.kind === 'bible' ? rs[0].div : rs[0].div);
    if (a === 'cite') copy('«' + q + '» ' + shortTxt(src, u, edKey()) + '. ' + link, 'Cita copiada');
    if (a === 'link') copy(link, 'Enlace copiado');
    if (a === 'find') { getSelection().removeAllRanges(); hideTb(); const sb = $('.search-b'); if (sb) { sb.click(); requestAnimationFrame(() => { const inp = $('.sx input'); if (inp) { inp.value = q.slice(0, 80); inp.dispatchEvent(new Event('input', {bubbles: true})); inp.focus(); } }); } }
  };
  document.addEventListener('pointerup', e => { if (tb && tb.contains(e.target)) return; setTimeout(showTb, 10); });
  document.addEventListener('selectionchange', () => { clearTimeout(selT); const s = getSelection(); if (!s || s.isCollapsed) { hideTb(); return; } if (innerWidth <= 720) selT = setTimeout(showTb, 400); });
  document.addEventListener('keydown', e => {
    if (!tb || !tb.classList.contains('show')) { if (e.shiftKey && /^Arrow/.test(e.key)) { clearTimeout(selT); selT = setTimeout(showTb, 300); } return; }
    if (e.key === 'Escape') { getSelection().removeAllRanges(); hideTb(); }
    if (!e.metaKey && !e.ctrlKey && (e.key === 's' || e.key === 'S')) { e.preventDefault(); const hb = tb.querySelector('[data-tb="hl"]:not([data-c])') || tb.querySelector('[data-tb="hl"][data-c="' + hlcCur() + '"]'); tbAct('hl', hb); }
    if (!e.metaKey && !e.ctrlKey && (e.key === 'c' || e.key === 'C') && !e.shiftKey) { e.preventDefault(); tbAct('cite', tb.querySelector('[data-tb="cite"]')); }
  });
  (scroller || window).addEventListener('scroll', () => { if (tb && tb.classList.contains('show') && !tb.classList.contains('dock')) hideTb(); }, {passive: true});
  addEventListener('pp', e => { if (e.detail.key === 'hl' || e.detail.key === 'hlc') { hideTb(); hlpClose(); } if (e.detail.key === 'hlc') refreshPanelHL(); });
  paintHL();

  const ntChanged = () => { paintMarks(); paintCards(); paintTools2(); paintGeneral(); const b = rp && rp.querySelector('.rp-b'); if (b && rp.classList.contains('open') && !b.querySelector('.ne') && !rpCur && b.querySelector('.lt-tabs')) D.ntOpenList(b.querySelector('.lt-tabs [aria-pressed="true"]').dataset.ltab, true); };
  D.ntChanged = ntChanged;
  const openNoteFor = o => {
    ensureRp();
    let n = null;
    if (o.scope === 'fuente') n = ntOf(src.key).find(z => z.scope === 'fuente');
    n = n || ntNew(Object.assign({src: src.key}, o));
    if (o.scope === 'fuente') { rpCur = null; mark(null); }
    else if (!rpCur || rpCur.u.id !== o.div) { rpCur = pick(o.div); }
    rp.classList.add('open'); html.classList.add('rp-open'); if (ctx.layer) ctx.layer.classList.add('rp-on');
    paintEditor(n);
  };
  const noteFromSelection = () => {
    const rs = selRanges(); if (!rs) return;
    const r = rs[0], el = anchorOf(r.div), txt = el ? textOfEl(el) : '';
    const n = rs.length > 1 ? ntNew({src: src.key, scope: 'division', div: r.div, divEnd: rs[rs.length - 1].div, ed: edKey()}) : ntNew({src: src.key, scope: 'palabras', div: r.div, ed: edKey(), a: r.a, b: r.b, q: r.q, pre: txt.slice(Math.max(0, r.a - 32), r.a), suf: txt.slice(r.b, r.b + 32)});
    getSelection().removeAllRanges(); hideTb();
    ensureRp(); rpCur = pick(r.div);
    rp.classList.add('open'); html.classList.add('rp-open'); if (ctx.layer) ctx.layer.classList.add('rp-on');
    paintEditor(n);
  };
  D.noteFromSelection = noteFromSelection;
  const resolveWord = n => {
    if (n.scope !== 'palabras' || n.ed !== edKey()) return null;
    const el = anchorOf(n.div); if (!el) return {lost: true};
    const t = textOfEl(el);
    if (t.slice(n.a, n.b) === n.q) return {a: n.a, b: n.b};
    let i = t.indexOf((n.pre || '') + n.q + (n.suf || '')); if (i >= 0) return {a: i + (n.pre || '').length, b: i + (n.pre || '').length + n.q.length};
    i = t.indexOf(n.q); if (i >= 0) return {a: i, b: i + n.q.length};
    return {lost: true};
  };
  const isLost = n => n.scope !== 'fuente' && (!unitOf(src, n.div) || !!(resolveWord(n) || {}).lost);
  const unNote = () => $$('mark.nt-a', root).forEach(m => { const p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); p.removeChild(m); p.normalize(); });
  const showAnchors = div => {
    unNote(); $$('.nt-on', root).forEach(x => x.classList.remove('nt-on'));
    if (!div) return;
    ntDiv(src.key, div).forEach(n => {
      if (n.scope === 'division') { const el = n.sent ? root.querySelector('.u[data-u="' + CSS.escape(n.div + '~' + n.sent) + '"]') : anchorOf(n.div); if (el) el.classList.add('nt-on'); return; }
      const r = resolveWord(n), el = anchorOf(n.div);
      if (!r || r.lost || !el) { if (el) el.classList.add('nt-on'); return; }
      let t = 0;
      textNodes(el).forEach(tn => { const s0 = t, e0 = t + tn.data.length; t = e0; const x = Math.max(r.a, s0), y = Math.min(r.b, e0); if (y <= x) return; let node = tn; if (y - s0 < node.data.length) node.splitText(y - s0); if (x - s0 > 0) node = node.splitText(x - s0); const m = document.createElement('mark'); m.className = 'nt-a'; node.parentNode.insertBefore(m, node); m.appendChild(node); });
    });
  };
  const paintMarks = () => {
    $$('.nm', root).forEach(m => m.remove());
    if (opt('notas') === 'cuaderno' || (opt('notas') === 'costado' && innerWidth >= 1280 && !html.classList.contains('rp-open'))) return;
    const counts = {};
    ntOf(src.key).forEach(n => { if (n.scope !== 'fuente') counts[n.div] = (counts[n.div] || 0) + 1; });
    Object.keys(counts).forEach(div => {
      const el = anchorOf(div); if (!el) return;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'nm'; b.dataset.nm = div; b.textContent = counts[div] === 1 ? '1 nota' : counts[div] + ' notas';
      b.setAttribute('aria-label', b.textContent + ' en ' + src.unitTitle(unitOf(src, div)));
      if (src.kind === 'doc') el.appendChild(b);
      else { b.classList.add('nm-v'); const vn = el.querySelector('.vn'); if (vn) vn.after(b); else el.prepend(b); }
      if (!reduce()) b.animate([{opacity: 0}, {opacity: 1}], {duration: 200, easing: 'ease-out'});
    });
  };
  const paintCards = () => {
    $$('.nt-cards', root).forEach(c => c.remove());
    if (opt('notas') !== 'costado' || innerWidth < 1280 || html.classList.contains('rp-open')) return;
    const body = $('#rd-body', root); if (!body) return;
    const box = document.createElement('div'); box.className = 'nt-cards'; body.appendChild(box);
    const br = body.getBoundingClientRect();
    let last = -1e9;
    ntSorted(src).filter(n => n.scope !== 'fuente').forEach(n => {
      const el = anchorOf(n.div); if (!el) return;
      const c = document.createElement('button'); c.type = 'button'; c.className = 'ntc'; c.dataset.nid = n.id; c.dataset.div = n.div;
      c.innerHTML = '<span class="ntc-l">' + esc(ntLoc(src, n)) + '</span><span class="ntc-x">' + esc(n.text.trim()) + '</span><span class="ntc-d">' + esc(fmtD(n.updated)) + '</span>';
      box.appendChild(c);
      let top = el.getBoundingClientRect().top - br.top;
      if (top < last + 8) top = last + 8;
      c.style.top = Math.round(top) + 'px'; last = top + c.offsetHeight;
    });
  };
  const paintGeneral = () => {
    const slot = $('.gn-slot', root); if (!slot) return;
    const g = ntOf(src.key).find(n => n.scope === 'fuente');
    if (!g) { slot.innerHTML = ''; return; }
    const open = slot.dataset.open === '1';
    slot.innerHTML = '<button class="btn-more gn-b" type="button" aria-expanded="' + open + '" data-gn>' + D.ic.plus + 'Tu nota sobre esta fuente</button><div class="gn-x"' + (open ? '' : ' hidden') + '><p>' + esc(g.text.trim()).replace(/\n/g, '<br>') + '</p><button class="cpy" type="button" data-gn-edit>Editar</button></div>';
  };
  root.addEventListener('click', e => {
    const gn = e.target.closest('[data-gn]');
    if (gn) {
      const slot = gn.closest('.gn-slot'), x = slot.querySelector('.gn-x'), op = gn.getAttribute('aria-expanded') !== 'true';
      slot.dataset.open = op ? '1' : ''; gn.setAttribute('aria-expanded', String(op));
      if (op) { x.hidden = false; if (!reduce()) { const h = x.scrollHeight; x.style.overflow = 'hidden'; x.animate([{height: '0px', opacity: 0}, {height: h + 'px', opacity: 1}], {duration: 220, easing: EASE_REVEAL}).finished.then(() => { x.style.overflow = ''; }, () => {}); } }
      else if (reduce()) x.hidden = true;
      else { const h = x.offsetHeight; x.style.overflow = 'hidden'; x.animate([{opacity: 1}, {opacity: 0}], {duration: 120, easing: 'ease-in', fill: 'forwards'}); x.animate([{height: h + 'px'}, {height: '0px'}], {duration: 160, delay: 120, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards'}).finished.then(() => { x.hidden = true; x.style.overflow = ''; x.getAnimations().forEach(a => a.cancel()); }, () => {}); }
      return;
    }
    if (e.target.closest('[data-gn-edit]')) { openNoteFor({scope: 'fuente'}); return; }
    const nm = e.target.closest('.nm');
    if (nm) { e.stopPropagation(); e.preventDefault(); const div = nm.dataset.nm; const el = src.kind === 'bible' ? root.querySelector('.u[data-u="' + CSS.escape(div) + '"]') : root.querySelector('.u[data-u^="' + CSS.escape(div) + '~"]'); if (el) { openPanel(el); rpCur = pick(div); paintPanel('', 'notes'); } return; }
    const card = e.target.closest('.ntc');
    if (card) { e.stopPropagation(); const n = ntAll().find(z => z.id === card.dataset.nid); if (n) { ensureRp(); rpCur = pick(n.div); rp.classList.add('open'); html.classList.add('rp-open'); if (ctx.layer) ctx.layer.classList.add('rp-on'); paintEditor(n); } }
  }, true);
  root.addEventListener('pointerover', e => { const m = e.target.closest('.nm, .ntc'); if (m) showAnchors(m.dataset.nm || m.dataset.div); });
  root.addEventListener('pointerout', e => { const m = e.target.closest('.nm, .ntc'); if (m && !m.contains(e.relatedTarget)) showAnchors(null); });
  root.addEventListener('focusin', e => { const m = e.target.closest('.nm, .ntc'); showAnchors(m ? (m.dataset.nm || m.dataset.div) : null); });
  const FT = {notas: {q: '', kind: 'todas', sort: 'texto', open: false}, subrayados: {q: '', cols: [], sort: 'texto', open: false}};
  const ftActive = (tab) => { const f = FT[tab]; return !!(f.q.trim() || (f.cols && f.cols.length) || (f.kind && f.kind !== 'todas')); };
  const ntItemF = (n, lost, q) => { if (!q) return ntItemHTML(src, n, lost); const ex = excerpt(n.text, q); return '<li data-fk="' + n.id + '"><button class="nt-li" type="button" data-act="nt-edit" data-nid="' + n.id + '"><span class="nt-q' + (lost ? ' lost' : '') + '">' + ntLabel(src, n, 70) + '</span><span class="nt-x">' + ex + '</span><span class="nt-m">' + esc(fmtD(n.updated)) + '</span></button></li>'; };
  const notesTab = () => {
    const f = FT.notas, all = ntSorted(src), q = f.q.trim();
    let l = all.filter(n => (f.kind === 'todas' || (f.kind === 'fuente' ? n.scope === 'fuente' : n.scope !== 'fuente')) && (!q || nfind(n.text, q) >= 0));
    if (f.sort === 'recientes') l = l.slice().sort((a, b) => b.updated - a.updated);
    let body;
    if (!all.length) body = '<button class="btn-more nt-more" type="button" data-act="nt-general" aria-keyshortcuts="Shift+N">' + D.ic.plus + 'Escribir una nota sobre toda la fuente</button>';
    else if (!l.length) body = '<div class="ft-empty"><p>' + (q ? 'Ninguna nota dice «' + esc(q) + '».' : 'Ninguna nota con estos filtros.') + '</p><button class="cpy" type="button" data-ft-clear>Quitar filtros</button></div>';
    else if (f.sort === 'recientes' || ftActive('notas')) body = '<ul class="nt-l">' + l.map(n => ntItemF(n, isLost(n), q)).join('') + '</ul>';
    else {
      const lost = l.filter(isLost), ok = l.filter(n => !isLost(n)), gen = ok.find(n => n.scope === 'fuente'), rest = ok.filter(n => n !== gen);
      body = (gen ? '<p class="lt-h">Sobre toda la fuente</p><ul class="nt-l">' + ntItemF(gen) + '</ul>' : '<button class="btn-more nt-more" type="button" data-act="nt-general" aria-keyshortcuts="Shift+N">' + D.ic.plus + 'Escribir una nota sobre toda la fuente</button>') +
        (rest.length ? '<p class="lt-h">En el texto</p><ul class="nt-l">' + rest.map(n => ntItemF(n)).join('') + '</ul>' : '') +
        (lost.length ? '<p class="lt-h">Sin ubicar</p><ul class="nt-l">' + lost.map(n => ntItemF(n, true)).join('') + '</ul>' : '');
    }
    const status = ftActive('notas') && all.length ? '<p class="ft-st" aria-live="polite">' + l.length + ' de ' + all.length + (all.length === 1 ? ' nota' : ' notas') + '</p>' : '<p class="ft-st" aria-live="polite"></p>';
    return status + body + (all.length ? '<div class="cd-acts nt-acts"><button class="cpy" type="button" data-act="nt-copy">Copiar todas con sus citas</button><button class="cpy" type="button" data-act="nt-md">Copiar en Markdown (.md)</button></div>' : '') + '<p class="hl-note">Se guardan en este navegador.</p>';
  };
  const hlTab = () => {
    const f = FT.subrayados, all = mine().sort((x, y) => src.units.findIndex(u => u.id === x.div) - src.units.findIndex(u => u.id === y.div) || x.a - y.a), q = f.q.trim();
    let l = all.filter(h => (!f.cols.length || f.cols.includes(h.c || 'amarillo')) && (!q || nfind(h.q, q) >= 0));
    if (f.sort === 'recientes') l = l.slice().sort((a, b) => b.t - a.t);
    if (!all.length) return '<p class="hl-note">Todavía no subrayaste nada en este texto.</p>';
    const status = ftActive('subrayados') ? '<p class="ft-st" aria-live="polite">' + l.length + ' de ' + all.length + (all.length === 1 ? ' subrayado' : ' subrayados') + '</p>' : '<p class="ft-st" aria-live="polite"></p>';
    if (!l.length) return status + '<div class="ft-empty"><p>' + (q ? 'Ningún subrayado dice «' + esc(q) + '»' + (f.cols.length ? ' en esos colores' : '') + '.' : 'Ningún subrayado en esos colores.') + '</p><button class="cpy" type="button" data-ft-clear>Quitar filtros</button></div>';
    return status + '<ul class="hl-l">' + l.map(h => { const u = unitOf(src, h.div); return '<li data-fk="' + h.id + '"><button class="hl-li" type="button" data-act="hl-go" data-h="' + h.id + '"><span class="hl-q"><span class="hls hls-i" data-c="' + (h.c || 'amarillo') + '" aria-label="' + hlcName(h.c || 'amarillo') + '"></span>' + (q ? excerpt(h.q, q, true) : '«' + esc(h.q.trim()) + '»') + '</span><span class="hl-m">' + esc(u ? src.short(u) : h.div) + (h.ed !== edKey() && src.kind === 'bible' ? ', ' + esc(EDSHORT[h.ed] || h.ed) : '') + '<span>' + esc(fmtDate(h.t)) + '</span></span></button></li>'; }).join('') + '</ul><div class="cd-acts"><button class="cpy" type="button" data-act="hl-copyall">Copiar todos con sus citas</button></div><p class="hl-note">Se guardan en este navegador.</p>';
  };
  const ftPicker = (id, label, opts, cur) => '<div class="edp ft-p" id="' + id + '"><button class="edp-b" type="button" aria-haspopup="listbox" aria-expanded="false" aria-controls="' + id + '-l"><span class="edp-l">' + label + '</span><span class="edp-v">' + esc(opts.find(o => o[0] === cur)[1]) + '</span>' + D.ic.chev + '</button><div class="edp-p" hidden><div class="edp-in" role="listbox" id="' + id + '-l" aria-label="' + label + '" tabindex="-1"><div class="edp-g" role="group">' + opts.map(([v, l]) => '<div class="edp-o" role="option" tabindex="-1" data-v="' + v + '" aria-selected="' + (v === cur) + '">' + esc(l) + '<span hidden>' + esc(l) + '</span></div>').join('') + '</div></div></div></div>';
  const ftSeg = (key, opts, cur) => '<div class="cf ft-seg" role="group" aria-label="' + (key === 'sort' ? 'Ordenar' : 'Mostrar') + '">' + opts.map(([v, l]) => '<button type="button" data-ft' + key + '="' + v + '" aria-pressed="' + (v === cur) + '"><span class="lb" data-l="' + l + '">' + l + '</span></button>').join('') + '</div>';
  const filterUI = tab => {
    const f = FT[tab], m = opt('filt'), ph = tab === 'notas' ? 'Buscar en tus notas' : 'Buscar en lo subrayado';
    const field = '<label class="ft-f"><span class="sr">' + ph + '</span>' + D.ic.search + '<input class="ft-q" type="search" placeholder="' + ph + '" value="' + esc(f.q) + '" aria-keyshortcuts="/" autocomplete="off"><span class="kbd">/</span></label>';
    const dots = tab === 'subrayados' ? '<span class="ft-c" role="group" aria-label="Colores">' + HLC.map(([c, l]) => '<button class="hls-b" type="button" data-ftc="' + c + '" aria-pressed="' + f.cols.includes(c) + '" aria-label="Solo ' + l.toLowerCase() + '"><span class="hls" data-c="' + c + '"></span></button>').join('') + '</span>' : '';
    const sortO = [['texto', 'En el orden del texto'], ['recientes', 'Más recientes']], kindO = [['todas', 'Todas'], ['fuente', 'Sobre la fuente'], ['texto', 'En el texto']];
    if (m === 'campo') return '<div class="ft">' + field + dots + '</div>';
    if (m === 'menu') return '<div class="ft">' + field + '<div class="ft-row">' + dots + (tab === 'notas' ? ftPicker('ft-kind', 'Mostrar', kindO, f.kind) : '') + ftPicker('ft-sort', 'Ordenar', sortO.map(o => [o[0], o[0] === 'texto' ? 'Texto' : 'Recientes']), f.sort) + '</div></div>';
    return '<div class="ft"><button class="btn-more ft-open" type="button" data-ft-open aria-expanded="' + f.open + '">' + D.ic.plus + 'Filtrar' + (ftActive(tab) ? '<span class="ft-on" aria-label="hay filtros activos"></span>' : '') + '</button><div class="ft-x"' + (f.open ? '' : ' hidden') + '>' + field + dots + (tab === 'notas' ? ftSeg('k', kindO, f.kind) : '') + ftSeg('s', [['texto', 'Orden del texto'], ['recientes', 'Recientes']], f.sort) + '</div></div>';
  };
  const tabHTML = tab => filterUI(tab) + '<div class="ft-res">' + (tab === 'notas' ? notesTab() : hlTab()) + '</div>';
  const curTab = () => { const b = rp && rp.querySelector('.lt-tabs [aria-pressed="true"]'); return b ? b.dataset.ltab : 'notas'; };
  const ftUpdate = () => {
    const res = rp.querySelector('.ft-res'); if (!res) return;
    const tab = curTab(), lists = res.querySelectorAll('.nt-l, .hl-l');
    const html2 = tab === 'notas' ? notesTab() : hlTab();
    if (lists.length === 1 && D.flip && /<ul class="(nt|hl)-l">/.test(html2) && (html2.match(/<ul /g) || []).length === 1) {
      const ul = lists[0], tmp = document.createElement('div'); tmp.innerHTML = html2;
      const nu = tmp.querySelector('.nt-l, .hl-l');
      res.querySelector('.ft-st').outerHTML = tmp.querySelector('.ft-st').outerHTML;
      D.flip(ul, () => { ul.innerHTML = nu.innerHTML; });
    } else { res.innerHTML = html2; if (!reduce()) $$('.nt-l > li, .hl-l > li, .ft-empty', res).forEach((li, i) => li.animate([{opacity: 0, transform: 'translateY(8px)'}, {opacity: 1, transform: 'none'}], {duration: 420, delay: Math.min(i, 8) * 60, easing: EASE_REVEAL, fill: 'backwards'})); }
    const fo = rp.querySelector('.ft-open'); if (fo) { const has = ftActive(tab); let d = fo.querySelector('.ft-on'); if (has && !d) fo.insertAdjacentHTML('beforeend', '<span class="ft-on" aria-label="hay filtros activos"></span>'); if (!has && d) d.remove(); }
  };
  const ftWire = () => {
    if (rp._ft) return; rp._ft = true;
    let t = 0;
    rp.addEventListener('input', e => { if (!e.target.matches('.ft-q')) return; FT[curTab()].q = e.target.value; clearTimeout(t); t = setTimeout(ftUpdate, 120); });
    rp.addEventListener('keydown', e => { if (e.target.matches('.ft-q') && e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); if (e.target.value) { e.target.value = ''; FT[curTab()].q = ''; ftUpdate(); } else e.target.blur(); } });
    rp.addEventListener('change', e => { const box = e.target.closest && e.target.closest('.ft-p'); if (!box) return; const f = FT[curTab()]; if (box.id === 'ft-kind') f.kind = box.value; if (box.id === 'ft-sort') f.sort = box.value; ftUpdate(); });
    rp.addEventListener('click', e => {
      const c = e.target.closest('[data-ftc]');
      if (c) { const f = FT[curTab()], v = c.dataset.ftc; f.cols = f.cols.includes(v) ? f.cols.filter(x => x !== v) : f.cols.concat(v); c.setAttribute('aria-pressed', String(f.cols.includes(v))); ftUpdate(); return; }
      const k = e.target.closest('[data-ftk], [data-fts]');
      if (k) { if (k.getAttribute('aria-pressed') === 'true') return; const strip = k.parentElement; strip.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === k))); D.slideInd(strip, k, true); const f = FT[curTab()]; if (k.dataset.ftk) f.kind = k.dataset.ftk; else f.sort = k.dataset.fts; ftUpdate(); return; }
      if (e.target.closest('[data-ft-clear]')) { const f = FT[curTab()]; f.q = ''; if (f.cols) f.cols = []; if (f.kind) f.kind = 'todas'; const ft = rp.querySelector('.ft'); if (ft) ft.outerHTML = filterUI(curTab()); ftAfter(); ftUpdate(); const qi = rp.querySelector('.ft-q'); if (qi && qi.offsetParent) qi.focus(); return; }
      const o = e.target.closest('[data-ft-open]');
      if (o) { const f = FT[curTab()], x = rp.querySelector('.ft-x'), op = o.getAttribute('aria-expanded') !== 'true'; f.open = op; o.setAttribute('aria-expanded', String(op));
        if (op) { x.hidden = false; ftAfter(); if (!reduce()) { const h = x.scrollHeight; x.style.overflow = 'hidden'; x.animate([{height: '0px'}, {height: h + 'px'}], {duration: 220, easing: EASE_REVEAL}).finished.then(() => { x.style.overflow = ''; }, () => {}); [...x.children].forEach((ch, i) => ch.animate([{opacity: 0}, {opacity: 1}], {duration: 200, delay: i * 20, easing: 'ease-out', fill: 'backwards'})); } requestAnimationFrame(() => { const qi = x.querySelector('.ft-q'); if (qi) qi.focus({preventScroll: true}); }); }
        else if (reduce()) x.hidden = true;
        else { const h = x.offsetHeight; x.style.overflow = 'hidden'; [...x.children].forEach(ch => ch.animate([{opacity: 1}, {opacity: 0}], {duration: 120, easing: 'ease-in', fill: 'forwards'})); x.animate([{height: h + 'px'}, {height: '0px'}], {duration: 160, delay: 120, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards'}).finished.then(() => { x.hidden = true; x.style.overflow = ''; x.getAnimations({subtree: true}).forEach(a => a.cancel()); }, () => {}); }
      }
    });
  };
  const ftAfter = () => requestAnimationFrame(() => $$('.ft-seg', rp).forEach(sg => { if (sg.offsetParent) D.slideInd(sg, sg.querySelector('[aria-pressed="true"]'), false); }));
  D.ntOpenList = (which, keep) => {
    const nl = ntSorted(src), hl = mine();
    const w = which || (nl.length || !hl.length ? 'notas' : 'subrayados');
    const tabs = '<div class="cf lt-tabs" role="group" aria-label="Qué mostrar"><button type="button" data-ltab="notas" aria-pressed="' + (w === 'notas') + '"><span class="lb" data-l="Notas ' + nl.length + '"><span>Notas <span class="n">' + nl.length + '</span></span></span></button><button type="button" data-ltab="subrayados" aria-pressed="' + (w === 'subrayados') + '"><span class="lb" data-l="Subrayados ' + hl.length + '"><span>Subrayados <span class="n">' + hl.length + '</span></span></span></button></div>';
    D.panelList('Tus notas', tabs + '<div class="lt-c">' + tabHTML(w) + '</div>');
    edNote = null; ftWire();
    const strip = rp.querySelector('.lt-tabs'); requestAnimationFrame(() => D.slideInd(strip, strip.querySelector('[aria-pressed="true"]'), false)); ftAfter();
    if (!keep && !reduce()) $$('.lt-c .nt-l > li, .lt-c .hl-l > li', rp).forEach((li, i) => li.animate([{opacity: 0, transform: 'translateY(8px)'}, {opacity: 1, transform: 'none'}], {duration: 420, delay: Math.min(i, 8) * 60, easing: EASE_REVEAL, fill: 'backwards'}));
  };
  const listTab = b => {
    if (b.getAttribute('aria-pressed') === 'true') return;
    const strip = b.parentElement, btns = [...strip.querySelectorAll('[data-ltab]')];
    const from = btns.findIndex(x => x.getAttribute('aria-pressed') === 'true'), to = btns.indexOf(b);
    btns.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    D.slideInd(strip, b, true);
    const c = rp.querySelector('.lt-c');
    if (reduce()) { c.innerHTML = tabHTML(curTab()); ftAfter(); return; }
    const dir = to > from ? 1 : -1;
    c.getAnimations().forEach(a => a.cancel());
    c.animate([{opacity: 1, transform: 'none'}, {opacity: 0, transform: 'translateX(' + (-dir * 16) + 'px)'}], {duration: 140, easing: 'cubic-bezier(0.4, 0, 1, 1)', fill: 'forwards'}).finished.then(() => { c.getAnimations().forEach(a => a.cancel()); c.innerHTML = tabHTML(curTab()); ftAfter(); c.animate([{opacity: .001, transform: 'translateX(' + (dir * 16) + 'px)'}, {opacity: 1, transform: 'none'}], {duration: 260, easing: EASE_REVEAL, fill: 'backwards'}); }, () => {});
  };
  document.addEventListener('keydown', e => {
    if (e.key !== '/' || (e.target.closest && e.target.closest('input, textarea, select'))) return;
    if (!rp || !rp.classList.contains('open') || !rp.querySelector('.lt-tabs')) return;
    e.preventDefault();
    let qi = rp.querySelector('.ft-q');
    if (qi && !qi.offsetParent) { const o = rp.querySelector('[data-ft-open]'); if (o) o.click(); qi = rp.querySelector('.ft-q'); }
    if (qi) requestAnimationFrame(() => qi.focus());
  });
  document.addEventListener('keydown', e => {
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'N' && e.shiftKey) { e.preventDefault(); openNoteFor({scope: 'fuente'}); return; }
    if ((e.key === 'n' || e.key === 'N') && !e.shiftKey) {
      if (tb && tb.classList.contains('show')) { e.preventDefault(); noteFromSelection(); return; }
      if (rp && rp.classList.contains('open') && rpCur && rp.contains(document.activeElement)) { e.preventDefault(); openNoteFor({scope: 'division', div: rpCur.u.id, sent: rpCur.k || null, sent0: rpCur.k || null}); }
    }
  });
  let seenNotas = opt('notas');
  let seenFilt = opt('filt');
  addEventListener('pp', e => { if (e.detail.key === 'notas' && e.detail.value !== seenNotas) { seenNotas = e.detail.value; paintMarks(); paintCards(); } if (e.detail.key === 'filt' && e.detail.value !== seenFilt) { seenFilt = e.detail.value; if (rp && rp.classList.contains('open') && rp.querySelector('.lt-tabs')) D.ntOpenList(curTab(), true); } });
  let rzT = 0; addEventListener('resize', () => { clearTimeout(rzT); rzT = setTimeout(() => { paintMarks(); paintCards(); }, 150); });
  let rpWas = html.classList.contains('rp-open');
  new MutationObserver(() => { const now = html.classList.contains('rp-open'); if (now !== rpWas) { rpWas = now; paintMarks(); paintCards(); } }).observe(html, {attributes: true, attributeFilter: ['class']});
  paintMarks(); paintCards(); paintGeneral();
  const vv = window.visualViewport;
  const fitSheet = () => { if (!rp || innerWidth > 1099) { if (rp) rp.style.height = ''; return; } const ta = rp.querySelector('.ne-t'); if (ta && document.activeElement === ta && vv) { rp.style.height = Math.round(Math.min(innerHeight * .78, vv.height - 16)) + 'px'; rp.style.bottom = Math.max(0, Math.round(innerHeight - vv.height - vv.offsetTop)) + 'px'; } else { rp.style.height = ''; rp.style.bottom = ''; } };
  document.addEventListener('focusin', fitSheet); document.addEventListener('focusout', () => setTimeout(fitSheet, 50));
  if (vv) vv.addEventListener('resize', fitSheet);

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

const TERMS = {transub: {t: 'Transubstanciación', re: /transubstanciaci/i, cite: 'g-transub'}};
const termsOf = (src, u) => src.kind === 'doc' ? Object.keys(TERMS).filter(k => TERMS[k].re.test(u.es.join(' '))) : [];
const WPRI = ['G5315', 'G5176', 'G4561', 'G4095', 'G0129', 'G2222', 'G0740', 'G0166', 'G2068'];
const wordPreview = u => { const W = u.v.w.map((w, i) => ({w, i, r: WPRI.findIndex(k => String(w.s).startsWith(k))})).filter(x => x.r >= 0).sort((a, b) => a.r - b.r).slice(0, 3).sort((a, b) => a.i - b.i).map(x => x.w); return W.map(w => '<span lang="grc">' + esc(w.g) + '</span> <i>' + esc(gl(w.es)) + '</i>').join(', ') + '…'; };
const panelRows = (src, p) => {
  const u = p.u, rows = [];
  const nts = ntDiv(src.key, u.id);
  if (nts.length) rows.push({id: 'notes', t: 'Tus notas', tab: 'Notas', n: nts.length, pv: esc(clip(nts[nts.length - 1].text, 80))});
  if (src.kind === 'bible' && u.v.w) rows.push({id: 'words', t: 'En griego, palabra por palabra', tab: 'Palabras', n: u.v.w.length, pv: wordPreview(u)});
  if (src.kind === 'doc' && u.la) rows.push({id: 'latin', t: 'Leer en latín', pv: 'El original de esta división, en el texto, junto a la traducción.', act: true});
  const tm = termsOf(src, u);
  if (tm.length) rows.push({id: 'terms', t: 'Términos', tab: 'Términos', n: tm.length, pv: tm.map(k => TERMS[k].t.toLowerCase()).join(', ')});
  const uses = usesOf(src, u), list = uses.flatMap(g => g[1]);
  if (list.length) rows.push({id: 'uses', t: 'Dónde se usa en Doctrina', tab: 'Usos', n: list.length, pv: esc(list[0][0]) + (list.length > 1 ? ' y ' + (list.length - 1) + (list.length === 2 ? ' lugar más' : ' lugares más') : '')});
  const e = src.kind === 'bible' ? edOf(src) : 'ayala';
  const tr = src.kind === 'bible' ? EDORDER.filter(x => x !== e && u.v.t[x]) : (u.en ? ['waterworth'] : []);
  if (tr.length) rows.push({id: 'trans', t: 'Otras traducciones', tab: 'Traducciones', n: tr.length, pv: src.kind === 'bible' ? tr.slice(0, 3).map(x => esc(EDSHORT[x])).join(', ') + (tr.length > 3 ? ' y ' + (tr.length - 3) + ' más' : '') : 'Waterworth (1848), en inglés', eds: tr});
  return rows;
};
const panelView = (src, p, id, rows) => {
  const u = p.u, r = rows.find(x => x.id === id);
  if (id === 'notes') return '<ul class="nt-l">' + ntDiv(src.key, u.id).sort((a, b) => ntOrder(src, a) - ntOrder(src, b)).map(n => ntItemHTML(src, n)).join('') + '</ul><button class="btn-more nt-more" type="button" data-act="note-new">' + D.ic.plus + 'Escribir otra nota</button>';
  if (id === 'words') return '<div class="ww-p">' + wordsHTML(u, 'filas') + '</div><p class="ww-src">Griego: STEP Bible, CC BY 4.0. Glosas: Open Greek New Testament, CC BY-SA 4.0.</p>';
  if (id === 'terms') return termsOf(src, u).map(k => { const c = D.CITES[TERMS[k].cite]; return '<div class="pv-term"><h4 class="pv-h">' + esc(c.title) + '</h4><p class="cd-x">' + c.def.split('<br>')[0] + '</p><p class="cd-src">Glosario, según la Iglesia católica</p></div>'; }).join('');
  if (id === 'uses') return '<ul class="cd-du">' + usesOf(src, u).flatMap(g => g[1]).map(x => '<li>' + placeLink(x) + '<span>' + esc(x[3]) + '</span></li>').join('') + '</ul>';
  if (id === 'trans') return '<ul class="ct-l pv-ct">' + r.eds.map(x => { const name = src.kind === 'bible' ? EDFULL[x] : src.eds[x].name, en = src.kind === 'bible' ? DT.EDS[x].lang === 'en' : true; return '<li><p class="ct-n">' + esc(name) + '<span>' + (en ? 'inglés' : 'español') + '</span></p><p class="ct-x"' + (en ? ' lang="en"' : '') + '>' + esc(src.kind === 'bible' ? u.v.t[x] : u.en) + '</p></li>'; }).join('') + '</ul>';
  return '';
};
const hlActs = (on, attr) => {
  const m = opt('hlc');
  if (m === 'barra') return '<span class="hl-acts">' + (on ? '<button class="cpy" type="button" ' + attr + ' data-rm="1">Quitar subrayado</button>' : '<span class="hl-l2">Subrayar</span>') + dotsHTML(attr) + '</span>';
  return '<span class="hl-acts"><button class="cpy" type="button" ' + attr + '>' + (on ? 'Quitar subrayado' : 'Subrayar') + '</button>' + (m === 'muestra' && !on ? swatchBtn() : '') + '</span>';
};
const rowHTML = r => r.act ? '<button class="pr-row" type="button" data-act="latin"><span class="pr-t">' + esc(r.t) + '</span><span class="pr-p">' + r.pv + '</span></button>' : '<button class="pr-row" type="button" data-view="' + r.id + '"><span class="pr-t">' + esc(r.t) + '<span class="pr-n">' + r.n + '</span></span><span class="pr-p">' + r.pv + '</span>' + D.ic.chev + '</button>';
const panelHTML = (src, p, view, tab) => {
  const u = p.u, e = src.kind === 'bible' ? edOf(src) : 'ayala', rows = panelRows(src, p), mode = opt('pnl');
  const full = plain(citeHTML(src, u, e));
  const acts = '<div class="pa-row">' + copyBtn('Citar', shortTxt(src, u, e)) + copyBtn('Copiar enlace', '@url', 'Enlace copiado') + hlActs(D.hlUnitOn && D.hlUnitOn(p.uid), 'data-act="hl-unit"') + '<button class="cpy" type="button" data-act="note-new" aria-keyshortcuts="N">Nota</button></div>';
  const det = '<div class="cd-acts"><button class="btn-go" type="button" data-act="open" data-u="' + esc(p.uid) + '">Ver el detalle completo</button></div>';
  if (view) { const r = rows.find(x => x.id === view); return '<button class="rd-back pv-back" type="button" data-view="">' + D.ic.back + esc(src.unitTitle(u)) + '</button><h3 class="pv-t">' + esc(r.t) + (r.n ? '<span class="pr-n">' + r.n + '</span>' : '') + '</h3>' + panelView(src, p, view, rows); }
  if (mode === 'pestanas') {
    const tabs = rows.filter(r => !r.act), lat = rows.find(r => r.act);
    const cur = tabs.find(r => r.id === tab) || tabs[0];
    return acts + (lat ? '<ul class="pr-l">' + '<li>' + rowHTML(lat) + '</li></ul>' : '') + (tabs.length ? '<div class="pt-tabs" role="tablist"><span class="pt-ind" aria-hidden="true"></span>' + tabs.map(r => '<button type="button" role="tab" data-tab="' + r.id + '" aria-selected="' + (r === cur) + '"><span class="lb" data-l="' + esc(r.tab) + '">' + esc(r.tab) + '</span> <span class="n">' + r.n + '</span></button>').join('') + '</div><div class="pt-body" role="tabpanel">' + panelView(src, p, cur.id, rows) + '</div>' : '') + det;
  }
  let key = null;
  if (mode === 'clave') key = rows.find(r => r.id === 'words') || rows.find(r => r.id === 'terms') || rows.find(r => r.id === 'uses');
  return acts + (key ? '<div class="pk"><h3 class="pv-t">' + esc(key.t) + '<span class="pr-n">' + key.n + '</span></h3>' + panelView(src, p, key.id, rows) + '</div>' : '') + '<ul class="pr-l">' + rows.filter(r => r !== key).map(r => '<li>' + rowHTML(r) + '</li>').join('') + '</ul>' + det;
};
const placeLink = x => x[1] ? '<a class="ln-go du-t" href="s03.html' + (x[2] ? '#' + x[2] : '') + '" data-go="' + x[1] + '"' + (x[2] ? ' data-hash="' + x[2] + '"' : '') + '>' + esc(x[0]) + '</a>' : '<a class="ln-go du-t" href="#" data-nb>' + esc(x[0]) + '</a>';

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
    '<dt>Strong</dt><dd>' + esc(strongOf(w.s)) + '</dd>' +
    (c ? '<dt>En el Nuevo Testamento</dt><dd>' + esc(c) + '</dd>' : '') +
    '<dt>Significa</dt><dd>' + esc(gl(w.es)) + '</dd>' +
    '<dt>Forma</dt><dd>' + esc(parseEs(w.parse)) + '</dd>' +
    '<dt>Palabra base</dt><dd><span class="gk" lang="grc">' + esc(w.l) + '</span> (' + esc(w.lt) + ')</dd>' +
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

function renderDetail(main, src, uid) {
  const [id, kk] = uid.split('~');
  const u = unitOf(src, id) || src.units[0], k = kk ? +kk : 0;
  const i = src.units.indexOf(u), prev = src.units[i - 1], next = src.units[i + 1];
  document.title = src.unitTitle(u) + ', Doctrina';
  const back = topOfStack();
  let h = '<div class="col hd-crumbs"><nav class="crumbs" aria-label="Ruta">' + src.crumbs.map(c => c[1] ? '<a href="s05.html#' + c[2] + '" data-go="' + c[1] + '" data-hash="' + c[2] + '">' + esc(c[0]) + '</a>' : '<a href="#" data-nb>' + esc(c[0]) + '</a>').join('<span class="sl" aria-hidden="true">/</span>') + '<span class="sl" aria-hidden="true">/</span><span aria-current="page">' + esc(src.kind === 'bible' ? '6:' + u.n : u.n) + '</span></nav></div>';
  h += '<div class="bk"' + (back ? '' : ' hidden') + '><button class="rd-back" type="button" data-back>' + D.ic.back + 'Volver<span class="bk-x"> a donde estabas</span></button><span class="rd-where">' + esc(back ? back.label : '') + '</span></div>';
  h += '<div class="col hd dt-head"><p class="kicker">' + esc(src.kicker + (src.kind === 'doc' ? ', sesión XIII' : '')) + '</p><h1>' + esc(src.kind === 'bible' ? 'Juan 6:' + u.n : unitWord(u.n).replace(/^./, c => c.toUpperCase())) + '</h1>' + (src.kind === 'doc' ? '<p class="lede">' + esc(src.title) + ', 11 de octubre de 1551.</p>' : '') + '</div>';
  h += '<div class="dt-grid" id="dt-grid"></div>';
  main.innerHTML = h;
  const grid = $('#dt-grid', main);
  const paint = () => {
    const side = opt('dtend') === 'costado' && innerWidth >= 1100;
    grid.innerHTML = detailSections(src, u, k, prev, next, side);
    
    const ww = $('#ww-box', grid);
    if (ww) wireWords(ww, u);
    fitClamps(grid);
    const cfs = $('.cf', grid); if (cfs) requestAnimationFrame(() => D.slideInd(cfs, cfs.querySelector('[aria-pressed="true"]'), false));
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
    const gn = e.target.closest('[data-go-notes]');
    if (gn) { const ns = $('#notas', main); if (ns) D.scrollToEl(ns); return; }
    const nn = e.target.closest('[data-nt-new]');
    if (nn) { e.stopPropagation(); open06(ntNew({src: src.key, scope: 'division', div: u.id, sent: k || null, sent0: k || null})); return; }
    const ne = e.target.closest('#notas [data-act="nt-edit"]');
    if (ne) { e.stopPropagation(); const n = ntAll().find(z => z.id === ne.dataset.nid); if (n) open06(n); return; }
    const cfb = e.target.closest('[data-cf]');
    if (cfb) { if (cfb.getAttribute('aria-pressed') === 'true') return; const strip = cfb.parentElement; strip.querySelectorAll('[data-cf]').forEach(b => b.setAttribute('aria-pressed', String(b === cfb))); D.slideInd(strip, cfb, true); store.set('cf-' + src.key, cfb.dataset.cf); const list = $('#ct-l', main); const on = $$('.chip[data-ed]', main).filter(c => c.getAttribute('aria-pressed') === 'true').map(c => c.dataset.ed); $$('.chip[data-ed]', main).forEach(c => { c.hidden = cfb.dataset.cf !== 'todas' && edLang(src, c.dataset.ed) !== cfb.dataset.cf; }); D.flip(list, () => { list.innerHTML = compareRows(src, u, on); }); return; }
    const dm = e.target.closest('.du-more');
    if (dm) { const list = $('#du-s', main), op = dm.getAttribute('aria-expanded') !== 'true'; dm.setAttribute('aria-expanded', String(op)); D.flip(list, () => $$(':scope > li', list).forEach((li, i) => { if (i) li.hidden = !op; })); dm.innerHTML = D.ic.plus + (op ? 'Ver menos' : 'Ver ' + dm.dataset.n + ' más'); return; }
    const more = e.target.closest('.nb-more');
    if (more) { const t = more.previousElementSibling; t.classList.remove('clamp'); more.remove(); }
  }, true);
  main.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.dt-cur .u[data-u]')) { e.preventDefault(); e.target.click(); } });
  const refresh06 = () => { const y = scrollY; const slot = $('#notas .nt-ed-slot', main), ed = slot && slot.firstChild; if (ed) slot.removeChild(ed); paint(); if (ed) { const s2 = $('#notas .nt-ed-slot', main); if (s2) s2.appendChild(ed); } jumpTo(y); };
  const open06 = n => {
    if (!$('#notas', main)) { D.nt06open = true; paint(); D.nt06open = false; }
    const slot = $('#notas .nt-ed-slot', main); if (!slot) return;
    const old = slot.querySelector('.ne'); if (old && old._save) old._save();
    slot.innerHTML = editorHTML(src, n);
    const box = slot.querySelector('.ne');
    wireEditor(box, src, n, () => { const keep = slot.querySelector('.ne'); refresh06(); }, () => { slot.innerHTML = ''; if (!ntDiv(src.key, u.id).length) { D.nt06open = false; paint(); } });
    D.scrollToEl($('#notas', main), -40);
  };
  document.addEventListener('keydown', e => { if (e.target.closest && e.target.closest('input, textarea, select')) return; if ((e.key === 'n' || e.key === 'N') && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) { e.preventDefault(); open06(ntNew({src: src.key, scope: 'division', div: u.id, sent: k || null, sent0: k || null})); } });
  let seenNt06 = opt('notas');
  addEventListener('pp', e => { if (e.detail.key === 'notas' && e.detail.value !== seenNt06) { seenNt06 = e.detail.value; refresh06(); } });
  main.addEventListener('change', e => { if (e.target.id === 'ed-d') { store.set('ed-' + src.key, e.target.value); paint(); const nb = $('#ed-d .edp-b', main); if (nb) nb.focus({preventScroll: true}); } });
  const seen = {dtend: opt('dtend'), wbw: opt('wbw'), cite: opt('cite')};
  addEventListener('pp', e => { const k = e.detail.key; if ((k === 'dtend' || k === 'wbw' || k === 'cite') && seen[k] !== e.detail.value) { seen[k] = e.detail.value; const y = scrollY; paint(); jumpTo(y); } });
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
const cfDefault = (src, u) => { const eds = src.kind === 'bible' ? EDORDER.filter(e => u.v.t[e]) : ['ayala'].concat(u.en ? ['waterworth'] : []); return eds.filter(e => edLang(src, e) === 'es').length > 1 ? 'es' : 'todas'; };
const cfNow = (src, u) => { const v = store.get('cf-' + src.key, null); return v || cfDefault(src, u); };
const compareRows = (src, u, on) => {
  const cf = cfNow(src, u);
  const eds = (src.kind === 'bible' ? EDORDER.filter(e => u.v.t[e]) : ['ayala', 'waterworth'].filter(e => e === 'ayala' || u.en)).filter(e => cf === 'todas' || edLang(src, e) === cf);
  return eds.filter(e => on.includes(e)).map(e => {
    const name = src.kind === 'bible' ? EDFULL[e] : src.eds[e].name;
    const lang = src.kind === 'bible' ? (DT.EDS[e].lang === 'es' ? 'español' : 'inglés') : src.eds[e].lang;
    const t = src.kind === 'bible' ? u.v.t[e] : textOf(src, u, e);
    const isEn = lang === 'inglés';
    return '<li data-fk="' + e + '"><p class="ct-n">' + esc(name) + '<span>' + lang + '</span></p><p class="ct-x"' + (isEn ? ' lang="en"' : '') + '>' + esc(t) + '</p></li>';
  }).join('');
};
const dondeSide = (src, u) => {
  const items = usesOf(src, u).flatMap(g => g[1]);
  if (!items.length) return '';
  return '<ul class="du-l du-s" id="du-s">' + items.map((x, i) => '<li data-fk="du' + i + '"' + (i ? ' hidden' : '') + '>' + placeLink(x) + '<p class="du-r">' + esc(x[3]) + '</p></li>').join('') + '</ul>' + (items.length > 1 ? '<button class="btn-more du-more" type="button" aria-expanded="false" aria-controls="du-s" data-n="' + (items.length - 1) + '">' + D.ic.plus + 'Ver ' + (items.length - 1) + ' más</button>' : '');
};
const donde = (src, u) => {
  const g = usesOf(src, u);
  return g.map(([h, l]) => '<div class="du-g"><p class="du-h">' + esc(h) + '</p><ul class="du-l">' + l.map(x => '<li>' + placeLink(x) + '<p class="du-r">' + esc(x[3]) + '</p></li>').join('') + '</ul></div>').join('');
};
function detailSections(src, u, k, prev, next, side) {
  const e = src.kind === 'bible' ? edOf(src) : (edOf(src) === 'waterworth' && u.en ? 'waterworth' : 'ayala');
  const where = opt('dtend');
  const acts = citeActs(src, u, e) + copyBtn('Copiar enlace', '@url', 'Enlace copiado');
  let m = side ? '' : '<div class="dt-main">';
  m += '<section class="sec col dt-first" id="traduccion" data-label="Traducción"><div class="sh"><h2>Traducción</h2>' + edSelect(src, u, 'ed-d', e) + '</div>';
  const nts06 = ntDiv(src.key, u.id), ntMode = opt('notas');
  const ntSec = (nts06.length || D.nt06open) ? '<section class="sec col" id="notas" data-label="Tus notas"><h2>Tus notas</h2><div class="nt-ed-slot"></div><ul class="nt-l">' + nts06.sort((a, b) => ntOrder(src, a) - ntOrder(src, b)).map(n => ntItemHTML(src, n)).join('') + '</ul>' + (nts06.length ? '<button class="btn-more nt-more" type="button" data-nt-new>' + D.ic.plus + 'Escribir otra nota</button>' : '') + '<p class="hl-note">Se guardan en este navegador.</p></section>' : '';
  let ph = passageHTML(src, u, k, prev, next, e);
  if (nts06.length && ntMode !== 'cuaderno') ph = ph.replace('<li class="cur"><span class="pn-n">' + esc(u.n) + '</span>', '<li class="cur"><span class="pn-w"><span class="pn-n">' + esc(u.n) + '</span><button class="nm nm-d" type="button" data-go-notes>' + (nts06.length === 1 ? '1 nota' : nts06.length + ' notas') + '</button></span>');
  m += ph;
  m += '<p class="dt-src"><span>' + (src.kind === 'bible' ? esc(EDFULL[e]) + '. Dominio público.' : (e === 'waterworth' ? 'Traducción inglesa de J. Waterworth (1848). Dominio público.' : 'Traducción de Ignacio López de Ayala (1785). Dominio público.')) + '</span><a class="ln-go" href="s05.html" data-toreader="' + src.key + '/' + u.id + (k ? '~' + k : '') + '">' + (src.kind === 'bible' ? 'Leer el capítulo completo' : 'Leer el decreto completo') + '</a><button class="cpy nt-d-new" type="button" data-nt-new>Nota</button></p>';
  if (where === 'arriba') m += '<div class="ac-row" role="group" aria-label="Citar"><span class="ac-l">Citar</span>' + acts + '</div>';
  m += '</section>';
  const du = donde(src, u);
  if (side) m += '<aside class="dt-side" aria-label="Citar y dónde se usa"><div class="ds-blk"><h2>Citar</h2>' + citeBlock(src, u, e) + '</div>' + (du ? '<div class="ds-blk"><h2>Dónde se usa en Doctrina</h2>' + dondeSide(src, u) + '</div>' : '') + (ntMode === 'costado' && ntSec ? '<div class="ds-blk ds-nt">' + ntSec.replace('<section class="sec col" id="notas" data-label="Tus notas">', '<div id="notas">').replace('</section>', '</div>') + '</div>' : '') + '</aside>';
  if (src.kind === 'bible' && u.v.w) {
    m += '<section class="sec wide dt-full" id="griego" data-label="En griego"><h2>En griego, palabra por palabra</h2><p class="sub">' + (opt('wbw') === 'lado' ? 'Cada palabra con su sentido literal. Pasa el puntero, o toca una palabra, para ver su ficha.' : 'Cada palabra con su transliteración y su sentido literal. Toca una para ver su ficha.') + '</p><div id="ww-box">' + wordsHTML(u, opt('wbw')) + '</div><p class="ww-src">Texto griego: STEP Bible (Tyndale House, Cambridge), CC BY 4.0. Glosas en español: Open Greek New Testament, CC BY-SA 4.0. Las glosas son literales, no interpretativas.</p></section>';
  }
  if (src.kind === 'doc' && u.la) m += '<section class="sec col" id="latin" data-label="En latín"><h2>En latín</h2><p class="sub">El texto original del decreto, tal como lo trae la edición de 1785' + (u.pa ? ' (' + u.pa + ')' : '') + '.</p><p class="p" lang="la">' + esc(u.la) + '</p></section>';
  const eds = src.kind === 'bible' ? EDORDER.filter(x => u.v.t[x]) : ['ayala'].concat(u.en ? ['waterworth'] : []);
  if (eds.length > 1) {
    m += '<section class="sec col" id="comparar" data-label="Comparar traducciones"><h2>Comparar traducciones</h2><p class="sub">' + (src.kind === 'bible' ? 'Las traducciones de dominio público, una debajo de la otra. Elige la lengua y cuáles mostrar.' : 'La traducción española y la inglesa, una debajo de la otra.') + '</p>';
    const cf = cfNow(src, u), langs = new Set(eds.map(x => edLang(src, x)));
    if (langs.size > 1) m += '<div class="cf" role="group" aria-label="Qué traducciones comparar">' + [['es', 'Español con español'], ['en', 'Inglés con inglés'], ['todas', 'Todas']].map(([v, l]) => '<button type="button" data-cf="' + v + '" aria-pressed="' + (cf === v) + '"><span class="lb" data-l="' + l + '">' + l + '</span></button>').join('') + '</div>';
    m += '<div class="chips" role="group" aria-label="Traducciones que se muestran">' + eds.map(x => '<button class="chip" type="button" data-ed="' + x + '" aria-pressed="true"' + (cf !== 'todas' && edLang(src, x) !== cf ? ' hidden' : '') + '>' + esc(src.kind === 'bible' ? EDSHORT[x] : src.eds[x].name) + '</button>').join('') + '</div><ul class="ct-l" id="ct-l">' + compareRows(src, u, eds) + '</ul></section>';
  }
  const duSec = du ? '<section class="sec col" id="donde" data-label="Dónde se usa en Doctrina"><h2>Dónde se usa en Doctrina</h2><p class="sub">Las páginas que citan ' + (src.kind === 'bible' ? 'este versículo' : 'este pasaje') + ', agrupadas por lugar.</p>' + du + '</section>' : '';
  const ciSec = '<section class="sec col" id="citar" data-label="Citar"><h2>Citar</h2>' + citeBlock(src, u, e) + '</section>';
  if (!(side && ntMode === 'costado')) m += ntSec;
  if (!side) { m += duSec; if (where !== 'arriba') m += ciSec; }
  m += '<nav class="pn col" aria-label="' + (src.kind === 'bible' ? 'Versículo anterior y siguiente' : 'División anterior y siguiente') + '">' + (prev ? '<a href="s06.html#' + src.key + '/' + prev.id + '" data-lat="' + src.key + '/' + prev.id + '"><small>Anterior</small><span>' + esc(src.unitTitle(prev)) + '</span></a>' : '') + (next ? '<a class="nx" href="s06.html#' + src.key + '/' + next.id + '" data-lat="' + src.key + '/' + next.id + '"><small>Siguiente</small><span>' + esc(src.unitTitle(next)) + '</span></a>' : '') + '</nav>';
  if (!side) m += '</div>';
  return m;
}

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
  layer.innerHTML = '<div class="rd-bar"><button class="rd-back" type="button" data-close-layer>' + D.ic.back + 'Volver<span class="bk-x"> a donde estabas</span></button><span class="rd-where">' + esc(from.label) + '</span><span class="rd-tools2"></span><span class="rd-lang"></span></div><div class="rd-in rdr">' + readerHTML(src, true) + '</div>';
  
  layer.classList.add('open');
  layer.classList.toggle('og-wide-on', src.kind === 'doc' && ogMode() === 'lado');
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

document.addEventListener('click', e => { const b = e.target.closest('[data-ogb]'); if (b && D.curReader) D.curReader.setOgb(b.dataset.ogb); const o = e.target.closest('.rd-lang [data-og]'); if (o && D.curReader) D.curReader.setOg(o.dataset.og); });

const edpOpen = (box, focusSel) => {
  const btn = box.querySelector('.edp-b'), pnl = box.querySelector('.edp-p');
  if (btn.getAttribute('aria-expanded') === 'true') return;
  $$('.edp').forEach(o => { if (o !== box) edpClose(o); });
  pnl.getAnimations({subtree: true}).forEach(a => a.cancel());
  btn.setAttribute('aria-expanded', 'true'); pnl.hidden = false; pnl.style.overflow = ''; pnl.style.height = '';
  const br = btn.getBoundingClientRect(), topLim = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--top-h')) || 56) + 8;
  const below = innerHeight - br.bottom - 14, above = br.top - topLim - 6, want = Math.min(420, pnl.querySelector('.edp-in').scrollHeight + 2);
  const up = below < want && above > below;
  box.classList.toggle('up', up);
  pnl.style.maxHeight = Math.max(160, Math.min(420, up ? above : below)) + 'px';
  const opts = [...pnl.querySelectorAll('.edp-o')];
  if (!reduce()) {
    const h = Math.min(pnl.scrollHeight, parseFloat(pnl.style.maxHeight));
    pnl.style.overflow = 'hidden';
    pnl.animate([{height: '0px'}, {height: h + 'px'}], {duration: 220, easing: EASE_REVEAL}).finished.then(() => { pnl.style.overflow = ''; }, () => {});
    [...pnl.querySelectorAll('.edp-gh, .edp-o')].forEach((o, i) => o.animate([{opacity: 0}, {opacity: 1}], {duration: 200, delay: Math.min(i, 8) * 20, easing: 'ease-out', fill: 'backwards'}));
  }
  if (focusSel) (opts.find(o => o.getAttribute('aria-selected') === 'true') || opts[0]).focus({preventScroll: true});
};
const edpClose = (box, refocus) => {
  const btn = box.querySelector('.edp-b'), pnl = box.querySelector('.edp-p');
  if (btn.getAttribute('aria-expanded') !== 'true') return;
  btn.setAttribute('aria-expanded', 'false');
  if (refocus) btn.focus({preventScroll: true});
  pnl.getAnimations({subtree: true}).forEach(a => a.cancel());
  if (reduce()) { pnl.hidden = true; return; }
  const h = pnl.offsetHeight;
  pnl.style.overflow = 'hidden';
  [...pnl.querySelectorAll('.edp-gh, .edp-o')].forEach(o => o.animate([{opacity: 1}, {opacity: 0}], {duration: 120, easing: 'ease-in', fill: 'forwards'}));
  pnl.animate([{height: h + 'px'}, {height: '0px'}], {duration: 160, delay: 120, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards'}).finished.then(() => { if (btn.getAttribute('aria-expanded') !== 'true') { pnl.hidden = true; pnl.style.overflow = ''; pnl.getAnimations({subtree: true}).forEach(a => a.cancel()); } }, () => {});
};
addEventListener('resize', () => $$('.edp').forEach(x => edpClose(x)));
const edpPick = (box, opt) => {
  box.querySelectorAll('.edp-o').forEach(o => o.setAttribute('aria-selected', String(o === opt)));
  box.querySelector('.edp-v').textContent = opt.querySelector('span').textContent.replace(/[()]/g, '');
  edpClose(box, true);
  box.value = opt.dataset.v;
  box.dispatchEvent(new Event('change', {bubbles: true}));
};
document.addEventListener('click', e => {
  const b = e.target.closest('.edp-b');
  if (b) { const box = b.closest('.edp'); if (b.getAttribute('aria-expanded') === 'true') edpClose(box); else edpOpen(box, false); return; }
  const o = e.target.closest('.edp-o');
  if (o) { edpPick(o.closest('.edp'), o); return; }
  $$('.edp').forEach(x => { if (!x.contains(e.target)) edpClose(x); });
});
document.addEventListener('keydown', e => {
  const box = e.target.closest && e.target.closest('.edp');
  if (!box) return;
  const opts = [...box.querySelectorAll('.edp-o')], i = opts.indexOf(e.target);
  if (e.target.classList.contains('edp-b')) { if (['ArrowDown', 'ArrowUp'].includes(e.key)) { e.preventDefault(); edpOpen(box, true); } if (e.key === 'Escape') edpClose(box); return; }
  if (i < 0) return;
  if (e.key === 'ArrowDown') { e.preventDefault(); opts[Math.min(opts.length - 1, i + 1)].focus(); }
  if (e.key === 'ArrowUp') { e.preventDefault(); opts[Math.max(0, i - 1)].focus(); }
  if (e.key === 'Home') { e.preventDefault(); opts[0].focus(); }
  if (e.key === 'End') { e.preventDefault(); opts[opts.length - 1].focus(); }
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); edpPick(box, e.target); }
  if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); edpClose(box, true); }
  if (e.key === 'Tab') edpClose(box);
});
D.slideInd = (strip, to, animate) => {
  let ind = strip.querySelector('.seg-ind');
  if (!ind) { ind = document.createElement('span'); ind.className = 'seg-ind'; ind.setAttribute('aria-hidden', 'true'); strip.prepend(ind); }
  const sr = strip.getBoundingClientRect(), box = el => { const r = el.getBoundingClientRect(); return {x: r.left - sr.left, y: r.top - sr.top, w: r.width, h: r.height}; };
  const from = ind.offsetWidth ? box(ind) : null, b = box(to);
  ind.getAnimations().forEach(a => a.cancel());
  Object.assign(ind.style, {width: b.w + 'px', height: b.h + 'px', transform: 'translate(' + b.x + 'px,' + b.y + 'px)'});
  if (animate && from && from.w && !reduce()) ind.animate([{transform: 'translate(' + from.x + 'px,' + from.y + 'px)', width: from.w + 'px'}, {transform: 'translate(' + b.x + 'px,' + b.y + 'px)', width: b.w + 'px'}], {duration: 340, easing: EASE_REVEAL});
};


const nkey = c => c.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const nmap = t => { let n = '', idx = []; for (let i = 0; i < t.length; i++) { const k = nkey(t[i]); for (let j = 0; j < k.length; j++) { n += k[j]; idx.push(i); } } return {n, idx}; };
const nfind = (t, q) => { if (!q) return 0; return nmap(String(t || '')).n.indexOf(nkey(q.trim())); };
const excerpt = (t, q, quote) => {
  t = String(t || '').replace(/\s+/g, ' ').trim();
  const m = nmap(t), nq = nkey(q.trim()), i = m.n.indexOf(nq);
  if (i < 0) return esc(clip(t, 140));
  const a = m.idx[i], b = m.idx[i + nq.length - 1] + 1;
  let s0 = Math.max(0, a - 48), e0 = Math.min(t.length, b + 48);
  if (s0 > 0) { const sp = t.indexOf(' ', s0); if (sp > -1 && sp < a) s0 = sp + 1; }
  if (e0 < t.length) { const sp = t.lastIndexOf(' ', e0); if (sp > b) e0 = sp; }
  return (quote ? '«' : '') + (s0 > 0 ? '…' : '') + esc(t.slice(s0, a)) + '<mark class="ft-m">' + esc(t.slice(a, b)) + '</mark>' + esc(t.slice(b, e0)) + (e0 < t.length ? '…' : '') + (quote ? '»' : '');
};
const NK = 'dz-sitio-notes-v1';
const ntAll = () => { try { return JSON.parse(localStorage.getItem(NK) || '[]'); } catch (e) { return []; } };
const ntSave = l => { try { localStorage.setItem(NK, JSON.stringify(l)); } catch (e) {} };
const ntUpsert = n => { const l = ntAll(); const i = l.findIndex(x => x.id === n.id); if (i >= 0) l[i] = n; else l.push(n); ntSave(l); };
const ntDelete = id => ntSave(ntAll().filter(x => x.id !== id));
const ntNew = o => Object.assign({id: 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), v: 1, text: '', created: Date.now(), updated: Date.now()}, o);
const ntOf = key => ntAll().filter(n => n.src === key && n.text && n.text.trim());
const ntDiv = (key, div) => ntOf(key).filter(n => n.scope !== 'fuente' && n.div === div);
const fmtD = t => new Date(t).toLocaleDateString('es', {day: 'numeric', month: 'short', year: 'numeric'});
const sentOf = (src, div, k) => { const u = unitOf(src, div); return u && src.kind === 'doc' ? (u.es.filter(x => x !== '[…]')[k - 1] || '') : ''; };
const ntAnchor = (src, n) => {
  if (n.scope === 'palabras') return n.q || '';
  if (n.scope === 'division' && n.divEnd) { const i = src.units.findIndex(z => z.id === n.div), j = src.units.findIndex(z => z.id === n.divEnd); if (i < 0 || j < i) return ''; return src.units.slice(i, j + 1).map(z => src.kind === 'bible' ? (z.v.t[edOf(src)] || z.v.t.rv1909) : z.es.filter(x => x !== '[…]').join(' ')).join(' '); }
  if (n.scope === 'division') { const u = unitOf(src, n.div); if (!u) return ''; if (src.kind === 'bible') return u.v.t[edOf(src)] || u.v.t.rv1909; return n.sent ? sentOf(src, n.div, n.sent) : u.es.filter(x => x !== '[…]').join(' '); }
  return '';
};
const ntLoc = (src, n) => {
  if (n.scope === 'fuente') return 'Toda la fuente';
  const u = unitOf(src, n.div); if (!u) return n.div;
  const ue = n.divEnd ? unitOf(src, n.divEnd) : null;
  const cap = t => t.replace(/^./, c => c.toUpperCase());
  const base = src.kind === 'bible' ? 'Juan 6:' + u.n + (ue ? '-' + ue.n : '') : ue ? (unitWord(u.n).split(' ')[0] === unitWord(ue.n).split(' ')[0] ? ({capítulo: 'Capítulos', canon: 'Cánones'}[unitWord(u.n).split(' ')[0]] || cap(unitWord(u.n).split(' ')[0])) + ' ' + u.n.replace(/^\D+/, '') + '-' + ue.n.replace(/^\D+/, '') : cap(unitWord(u.n)) + ' a ' + unitWord(ue.n)) : cap(unitWord(u.n));
  return base + (n.scope === 'division' && n.sent ? ', frase ' + n.sent : '') + (n.scope === 'palabras' && src.kind === 'bible' && n.ed && n.ed !== edOf(src) ? ', en ' + (EDABBR[n.ed] || n.ed) : '');
};
const ntLabel = (src, n, len) => '<span class="nt-lb">' + esc(ntLoc(src, n)) + (n.scope === 'fuente' ? '</span>' : ':</span> «' + esc(clip(ntAnchor(src, n), len)) + '»');
const ntShort = (src, n) => { const u = unitOf(src, n.div); if (n.scope === 'fuente' || !u) return src.kind === 'bible' ? 'Juan 6' : 'Concilio de Trento, ses. XIII (1551)'; const s = shortTxt(src, u, n.ed || (src.kind === 'bible' ? edOf(src) : 'ayala')); const ue = n.divEnd ? unitOf(src, n.divEnd) : null; return ue && src.kind === 'bible' ? s.replace(':' + u.n, ':' + u.n + '-' + ue.n) : s; };
const clip = (t, n) => { t = String(t || '').replace(/\s+/g, ' ').trim(); return t.length > n ? t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : t; };
const ntExport = (src, md) => {
  const l = ntSorted(src);
  if (!md) return l.map(n => (n.scope === 'fuente' ? ntShort(src, n) + ', nota general' : '«' + clip(ntAnchor(src, n), 220) + '» ' + ntShort(src, n) + '.') + '\n' + n.text.trim() + '\n' + fmtD(n.updated)).join('\n\n');
  return '# Tus notas: ' + (src.kind === 'bible' ? 'Juan 6' : 'Concilio de Trento, sesión XIII') + '\n\n' + l.map(n => '## ' + (n.scope === 'fuente' ? 'Sobre toda la fuente' : ntLoc(src, n)) + '\n\n' + (n.scope === 'fuente' ? '' : '> «' + clip(ntAnchor(src, n), 400) + '» ' + ntShort(src, n) + '.\n\n') + n.text.trim() + '\n\n*' + fmtD(n.updated) + '*').join('\n\n') + '\n';
};
const ntOrder = (src, n) => n.scope === 'fuente' ? -1 : src.units.findIndex(u => u.id === n.div) * 1000 + (n.sent || 0) + (n.a || 0) / 100000;
const ntSorted = src => ntOf(src.key).sort((a, b) => ntOrder(src, a) - ntOrder(src, b));
let snackT = 0;
const snack = (msg, undo) => {
  let u = $('.hl-undo');
  if (!u) { u = document.createElement('div'); u.className = 'hl-undo'; u.setAttribute('role', 'status'); document.body.appendChild(u); }
  u.innerHTML = '<span>' + esc(msg) + '</span>' + (undo ? '<button type="button" class="cpy">Deshacer</button>' : '');
  if (undo) u.querySelector('button').onclick = () => { undo(); u.classList.remove('show'); };
  u.classList.add('show'); clearTimeout(snackT); snackT = setTimeout(() => u.classList.remove('show'), 5000);
};
const ntItemHTML = (src, n, lost) => '<li data-fk="' + n.id + '"><button class="nt-li" type="button" data-act="nt-edit" data-nid="' + n.id + '"><span class="nt-q' + (lost ? ' lost' : '') + '">' + ntLabel(src, n, 90) + '</span><span class="nt-x">' + esc(n.text.trim()) + '</span><span class="nt-m">' + (lost ? 'Este texto ya no está en esta edición. ' : '') + esc(fmtD(n.updated)) + '</span></button></li>';
const editorHTML = (src, n) => {
  const u = n.div ? unitOf(src, n.div) : null;
  const scope = n.scope === 'division' && !n.divEnd && src.kind === 'doc' && u ? '<div class="cf ne-sc" role="group" aria-label="Sobre qué es la nota"><button type="button" data-nsc="frase" aria-pressed="' + (!!n.sent) + '"' + (n.sent0 || n.sent ? '' : ' hidden') + '><span class="lb" data-l="Esta frase">Esta frase</span></button><button type="button" data-nsc="div" aria-pressed="' + (!n.sent) + '"><span class="lb" data-l="Todo el ' + unitWord(u.n) + '">Todo el ' + esc(unitWord(u.n)) + '</span></button></div>' : '';
  return '<div class="ne" data-nid="' + n.id + '"><p class="ne-a">' + ntLabel(src, n, 120) + '</p>' + scope + '<label class="sr" for="ne-' + n.id + '">Tu nota</label><textarea class="ne-t" id="ne-' + n.id + '" rows="3" placeholder="Escribe tu nota">' + esc(n.text) + '</textarea><div class="ne-f"><span class="ne-d">' + (n.text ? esc(fmtD(n.created)) + (n.updated - n.created > 60000 ? ', editada el ' + esc(fmtD(n.updated)) : '') : '') + '</span><span class="ne-s" aria-live="polite"></span>' + (n.text ? '<button class="cpy ne-del" type="button">Borrar nota</button>' : '') + '</div></div>';
};
const HOLD_MS = 3000;
const confirmDelete = (src, n, trigger, onConfirm) => {
  const back = document.createElement('div');
  back.className = 'dd-back';
  back.innerHTML = '<div class="dd" role="alertdialog" aria-modal="true" aria-labelledby="dd-t" aria-describedby="dd-d dd-h"><h2 class="dd-t" id="dd-t"><span class="dd-w">Borrar</span> esta nota</h2><p class="dd-d" id="dd-d">' + ntLabel(src, n, 80) + '</p><p class="dd-n">' + esc(clip(n.text, 90)) + '</p><p class="sr" id="dd-h">Para borrar, mantén pulsado el botón «Mantener para borrar» durante 3 segundos; con el teclado, mantén Enter o Espacio. Si lo sueltas antes, no se borra.</p><div class="dd-acts"><button class="cpy dd-c" type="button">Cancelar</button><button class="dd-hold" type="button"><span class="dd-fill" aria-hidden="true"></span><span class="dd-l">Mantener para borrar</span></button></div><p class="sr" role="status" aria-live="polite"></p></div>';
  document.body.appendChild(back);
  const box = back.querySelector('.dd'), cancel = back.querySelector('.dd-c'), hold = back.querySelector('.dd-hold'), fill = back.querySelector('.dd-fill'), live = back.querySelector('[role="status"]');
  const others = [...document.body.children].filter(c => c !== back && !c.inert);
  others.forEach(c => { c.inert = true; });
  let t0 = 0, raf = 0, done = false, closed = false;
  const set = p => { fill.style.transform = 'scaleX(' + p + ')'; };
  const stop = early => {
    if (!t0) return;
    cancelAnimationFrame(raf); t0 = 0;
    fill.style.transition = reduce() ? 'none' : 'transform 220ms ' + EASE_REVEAL;
    set(0);
    hold.classList.remove('on');
    if (early && !done) live.textContent = 'Soltaste antes de tiempo. La nota no se borró.';
  };
  const tick = now => {
    const p = Math.min(1, (now - t0) / HOLD_MS);
    set(p);
    if (p >= 1) { done = true; t0 = 0; close(false); onConfirm(); return; }
    raf = requestAnimationFrame(tick);
  };
  const start = () => {
    if (t0 || done) return;
    fill.style.transition = 'none';
    t0 = performance.now(); hold.classList.add('on');
    live.textContent = 'Sigue manteniendo pulsado.';
    raf = requestAnimationFrame(tick);
  };
  const close = refocus => {
    if (closed) return; closed = true;
    cancelAnimationFrame(raf);
    document.removeEventListener('keydown', onKey, true);
    document.removeEventListener('keyup', onUp, true);
    others.forEach(c => { c.inert = false; });
    back.remove();
    if (refocus && trigger && trigger.isConnected) trigger.focus();
  };
  const onKey = e => {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); close(true); return; }
    if (e.key === 'Tab') {
      const f = [cancel, hold], i = f.indexOf(document.activeElement);
      if (i < 0) { e.preventDefault(); (e.shiftKey ? hold : cancel).focus(); }
      else if (e.shiftKey && i === 0) { e.preventDefault(); hold.focus(); }
      else if (!e.shiftKey && i === 1) { e.preventDefault(); cancel.focus(); }
      return;
    }
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === hold) { e.preventDefault(); if (!e.repeat) start(); }
  };
  document.addEventListener('keydown', onKey, true);
  const onUp = e => { if ((e.key === 'Enter' || e.key === ' ') && t0) stop(true); };
  document.addEventListener('keyup', onUp, true);
  hold.addEventListener('blur', () => stop(true));
  hold.addEventListener('pointerdown', e => { if (e.button !== 0 && e.pointerType === 'mouse') return; e.preventDefault(); hold.focus(); try { hold.setPointerCapture(e.pointerId); } catch (err) {} start(); });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(ev => hold.addEventListener(ev, () => stop(true)));
  hold.addEventListener('click', e => e.preventDefault());
  hold.addEventListener('contextmenu', e => e.preventDefault());
  cancel.addEventListener('click', () => close(true));
  back.addEventListener('pointerdown', e => { if (e.target === back) close(true); });
  if (!reduce()) { back.animate([{opacity: 0}, {opacity: 1}], {duration: 150, easing: 'ease-out'}); box.animate([{transform: 'translateY(6px)'}, {transform: 'none'}], {duration: 200, easing: EASE_REVEAL}); }
  cancel.focus();
};
const wireEditor = (box, src, n, onChange, onClose) => {
  const ta = box.querySelector('.ne-t'), st = box.querySelector('.ne-s');
  let t = 0, saved = ntAll().some(x => x.id === n.id && x.text);
  const fit = () => { ta.style.height = 'auto'; ta.style.height = Math.max(88, ta.scrollHeight + 2) + 'px'; };
  const save = () => {
    clearTimeout(t);
    const v = ta.value;
    if (!v.trim()) { if (saved) { ntDelete(n.id); saved = false; onChange && onChange(); } st.textContent = ''; return; }
    if (v === n.text && saved) return;
    n.text = v; n.updated = Date.now(); ntUpsert(n); saved = true;
    st.textContent = 'Guardada';
    box.querySelector('.ne-d').textContent = fmtD(n.created);
    if (!box.querySelector('.ne-del')) { const d = document.createElement('button'); d.className = 'cpy ne-del'; d.type = 'button'; d.textContent = 'Borrar nota'; box.querySelector('.ne-f').appendChild(d); }
    onChange && onChange();
  };
  fit();
  ta.addEventListener('input', () => { fit(); st.textContent = ''; clearTimeout(t); t = setTimeout(save, 400); });
  ta.addEventListener('keydown', e => { if (e.key === 'Escape' || (e.key === 'Enter' && (e.metaKey || e.ctrlKey))) { e.preventDefault(); e.stopPropagation(); save(); onClose && onClose(); } });
  box.addEventListener('pointerdown', e => { if (e.target.closest('.ne-del')) e.preventDefault(); });
  box.addEventListener('click', e => {
    const sc = e.target.closest('[data-nsc]');
    if (sc) { const strip = sc.parentElement; strip.querySelectorAll('[data-nsc]').forEach(b => b.setAttribute('aria-pressed', String(b === sc))); D.slideInd(strip, sc, true); if (sc.dataset.nsc === 'frase') n.sent = n.sent0; else { n.sent0 = n.sent0 || n.sent; n.sent = null; } box.querySelector('.ne-a').innerHTML = ntLabel(src, n, 120); if (saved) { ntUpsert(n); onChange && onChange(); } ta.focus(); return; }
    const dl = e.target.closest('.ne-del');
    if (dl) { clearTimeout(t); save(); confirmDelete(src, n, dl, () => { const before = JSON.stringify(ntAll()); ntDelete(n.id); saved = false; box._save = () => {}; onChange && onChange(); onClose && onClose(); snack('Nota borrada.', () => { try { localStorage.setItem(NK, before); } catch (err) {} onChange && onChange(); }); }); }
  });
  const sc = box.querySelector('.ne-sc'); if (sc) requestAnimationFrame(() => D.slideInd(sc, sc.querySelector('[aria-pressed="true"]'), false));
  box._save = save;
  if (!reduce()) { const h = box.scrollHeight; box.style.overflow = 'hidden'; box.animate([{height: '0px', opacity: 0}, {height: h + 'px', opacity: 1}], {duration: 220, easing: EASE_REVEAL}).finished.then(() => { box.style.overflow = ''; }, () => {}); }
  requestAnimationFrame(() => { ta.focus({preventScroll: true}); ta.setSelectionRange(ta.value.length, ta.value.length); });
};
const copyText = (b, txt, done) => { const label = b.textContent; const ok = () => { b.textContent = done; setTimeout(() => { b.textContent = label; }, 1600); }; try { navigator.clipboard.writeText(txt).then(ok, ok); } catch (err) { ok(); } };

const parseHash = () => { const h = decodeURIComponent((location.hash || '').slice(1)); const [key, rest] = h.split('/'); return {key: SRC[key] ? key : null, rest: rest || ''}; };
if (PAGE === 'reader') {
  const {key, rest} = parseHash();
  const src = SRC[key || 'tr13'];
  document.title = src.title + ', Doctrina';
  const main = $('main.main');
  const back = topOfStack();
  const bar = document.createElement('div');
  bar.className = 'rd-bar2';
  bar.innerHTML = '<button class="rd-back" type="button" data-back>' + D.ic.back + 'Volver<span class="bk-x"> a donde estabas</span></button><span class="rd-where">' + esc(back ? back.label : '') + '</span><span class="rd-tools2"></span><span class="rd-lang"></span>';
  document.body.prepend(bar);
  main.innerHTML = '<div class="col hd-crumbs rw"><nav class="crumbs" aria-label="Ruta">' + src.crumbs.map((c, i) => i === src.crumbs.length - 1 ? '<span aria-current="page">' + esc(c[0]) + '</span>' : '<a href="#" data-nb>' + esc(c[0]) + '</a>').join('<span class="sl" aria-hidden="true">/</span>') + '</nav></div>' +
    '<div class="bk">' + (back ? '<button class="rd-back" type="button" data-back>' + D.ic.back + 'Volver<span class="bk-x"> a donde estabas</span></button><span class="rd-where">' + esc(back.label) + '</span>' : '') + '<span class="rd-tools2"></span><span class="rd-lang"></span></div>' + readerHTML(src, false);
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
