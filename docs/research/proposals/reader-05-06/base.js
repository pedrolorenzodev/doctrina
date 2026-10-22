(() => {
const D = window.D = {FP: {}, FPPICK: {}, CITES: {}, READERS: {}, SEARCH: []};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = {
  get(k, d) { try { const v = sessionStorage.getItem('dz-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { sessionStorage.setItem('dz-' + k, JSON.stringify(v)); } catch (e) {} }
};
D.$ = $; D.$$ = $$; D.esc = esc; D.store = store;
const inFrame = (() => { try { return window.parent !== window; } catch (e) { return true; } })();
const SCREENS = {'03': 's03.html', '05': 's05.html', '06': 's06.html'};
D.SCREENS = SCREENS;
D.inFrame = inFrame;

const ic = {
  chev: '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3.5 1.5 7 5l-3.5 3.5"/></svg>',
  menu: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14"/></svg>',
  search: '<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="7" cy="7" r="5"/><path d="m11 11 3.5 3.5"/></svg>',
  sun: '<svg width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="9" cy="9" r="3.4"/><path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M3.7 14.3l1.4-1.4M12.9 5.1l1.4-1.4"/></svg>',
  moon: '<svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M14.5 11.2A6.5 6.5 0 0 1 6.8 3.5a6.5 6.5 0 1 0 7.7 7.7z"/></svg>',
  x: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m3 3 8 8M11 3l-8 8"/></svg>',
  back: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8.5 3 4.5 7l4 4"/></svg>',
  plus: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 1.5v9M1.5 6h9"/></svg>'
};
D.ic = ic;

/* proposal test options from the shell: html[data-x-<key>] */
const XKEYS = ['tree', 'mark', 'theme', 'trad', 'contrast', 'gap', 'scroll'];
const XDEF = {tree: 'unfold', mark: 'travel', theme: 'button', trad: 'slide', contrast: 'b', gap: 'c', scroll: 'apenas'};
D.setX = (key, value) => {
  if (!XKEYS.includes(key)) return;
  document.documentElement.setAttribute('data-x-' + key, value);
  dispatchEvent(new CustomEvent('x', {detail: {key, value}}));
};
D.x = key => document.documentElement.getAttribute('data-x-' + key) || '';
{ const q0 = new URLSearchParams(location.search); XKEYS.forEach(k => document.documentElement.setAttribute('data-x-' + k, q0.get('x' + k) || XDEF[k])); }

/* theme and texture */
const tex = (freq, scale, elev) => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420"><filter id="n" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + freq + '" numOctaves="4" seed="7" stitchTiles="stitch" result="t"/><feDiffuseLighting in="t" lighting-color="#ffffff" surfaceScale="' + scale + '" diffuseConstant="1"><feDistantLight azimuth="235" elevation="' + elev + '"/></feDiffuseLighting></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>';
  return 'url("data:image/svg+xml;utf8,' + encodeURIComponent(svg) + '")';
};
const TEX = {light: tex(0.85, 1.6, 62), dark: tex(0.7, 2.6, 52)};
const applyTheme = m => {
  document.documentElement.dataset.theme = m;
  document.documentElement.style.setProperty('--tex', TEX[m]);
  const b = $('#theme-b');
  if (b) { b.innerHTML = m === 'dark' ? ic.sun : ic.moon; b.setAttribute('aria-label', m === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'); }
};
const SWEEP_EASE = 'cubic-bezier(0.65, 0, 0.35, 1)';
const wavePoly = (p, dark) => {
  const A = 4, N = 24, pts = [];
  const edge = p * (100 + 2 * A) - A;
  for (let i = N; i >= 0; i--) {
    const x = i / N * 100;
    const y = edge + A * Math.sin(2 * Math.PI * 1.25 * x / 100 + p * Math.PI);
    pts.push(x.toFixed(2) + '% ' + (dark ? 100 - y : y).toFixed(2) + '%');
  }
  return 'polygon(' + (dark ? '0% 100%, 100% 100%, ' : '0% 0%, 100% 0%, ') + pts.join(', ') + ')';
};
const SWEEP = {
  arc: m => { const W = innerWidth, H = innerHeight, R = Math.hypot(W, H), at = m === 'light' ? '0px 0px' : W + 'px ' + H + 'px'; return {kf: {clipPath: ['circle(0px at ' + at + ')', 'circle(' + R + 'px at ' + at + ')']}, ms: 750}; },
  button: () => { const b = $('#theme-b'), r = b ? b.getBoundingClientRect() : {left: innerWidth - 40, top: 10, width: 20, height: 20}; const cx = r.left + r.width / 2, cy = r.top + r.height / 2; const R = Math.max(Math.hypot(cx, cy), Math.hypot(innerWidth - cx, cy), Math.hypot(cx, innerHeight - cy), Math.hypot(innerWidth - cx, innerHeight - cy)); return {kf: {clipPath: ['circle(0px at ' + cx + 'px ' + cy + 'px)', 'circle(' + R + 'px at ' + cx + 'px ' + cy + 'px)']}, ms: 650}; },
  wave: m => { const f = []; for (let k = 0; k <= 16; k++) f.push(wavePoly(k / 16, m === 'dark')); return {kf: {clipPath: f}, ms: 750}; },
  feather: m => ({kf: {maskPosition: m === 'light' ? ['100% 100%', '0% 0%'] : ['0% 0%', '100% 100%']}, ms: 850, feather: m})
};
D.setTheme = (m, fromUi, animate) => {
  if (m !== 'light' && m !== 'dark') return;
  const html = document.documentElement;
  const sw = SWEEP[D.x('theme')];
  if (animate && sw && html.dataset.theme && html.dataset.theme !== m && document.startViewTransition && !reduce()) {
    const a = sw(m);
    html.classList.add('vt-on');
    if (a.feather) html.dataset.vtFeather = a.feather;
    const vt = document.startViewTransition(() => applyTheme(m));
    vt.ready.then(() => html.animate(a.kf, {duration: a.ms, easing: SWEEP_EASE, pseudoElement: '::view-transition-new(root)'}), () => {});
    vt.finished.finally(() => { html.classList.remove('vt-on'); delete html.dataset.vtFeather; });
  } else applyTheme(m);
  store.set('theme', m);
  if (fromUi && inFrame) parent.postMessage({dz: 'theme', theme: m}, '*');
};
const qs = new URLSearchParams(location.search);
D.setTheme(qs.get('theme') || store.get('theme', 'dark'));
addEventListener('message', e => {
  const d = e.data || {};
  if (d.dz === 'theme') D.setTheme(d.theme, false, true);
  if (d.dz === 'pp') D.setPP(d.key, d.value);
  if (d.dz === 'x') D.setX(d.key, d.value);
  if (d.dz === 'clean') { if (d.on) document.documentElement.dataset.clean = '1'; else delete document.documentElement.dataset.clean; if (D.rebuildRuler) D.rebuildRuler(); }
});
if (qs.get('clean') === '1') document.documentElement.dataset.clean = '1';

/* proposal switches: html[data-pp-<key>] */
D.setPP = (key, value) => {
  document.documentElement.setAttribute('data-pp-' + key, value);
  $$('.pp[data-pp="' + key + '"] button[data-v]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.v === value)));
  store.set('pp-' + key, value);
  dispatchEvent(new CustomEvent('pp', {detail: {key, value}}));
};
D.buildPP = () => buildPP();
function buildPP() {
  $$('.pp[data-pp]').forEach(el => {
    if (el.dataset.built) return;
    el.dataset.built = '1';
    const key = el.dataset.pp;
    const opts = el.dataset.opts.split('|').map(o => { const i = o.indexOf('='); return [o.slice(0, i), o.slice(i + 1)]; });
    const note = el.innerHTML.trim();
    el.innerHTML = '<span class="pp-l">' + esc(el.dataset.label || 'Para decidir') + '</span><span class="pp-o" role="group" aria-label="' + esc(el.dataset.label || 'Opciones') + '">' + opts.map(([v, l]) => '<button type="button" data-v="' + esc(v) + '">' + esc(l) + '</button>').join('') + '</span>' + (note ? '<button class="pp-why" type="button" aria-expanded="false">Por qué</button><p class="pp-note">' + note + '</p>' : '');
    el.addEventListener('click', e => { const b = e.target.closest('button[data-v]'); if (b) D.setPP(key, b.dataset.v); const w = e.target.closest('.pp-why'); if (w) { const op = !el.classList.contains('open'); el.classList.toggle('open', op); w.setAttribute('aria-expanded', String(op)); } });
    const cur = store.get('pp-' + key, el.dataset.default || opts[0][0]);
    D.setPP(key, opts.some(o => o[0] === cur) ? cur : opts[0][0]);
  });
}

/* toast */
let toastT = 0;
D.toast = msg => {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200);
};
const NB = 'Esta página no forma parte de la propuesta de hoy.';

/* navigation between the proposal's screens */
D.go = (screen, hash) => {
  if (!SCREENS[screen]) { D.toast(NB); return; }
  if (inFrame) parent.postMessage({dz: 'go', screen, hash: hash || ''}, '*');
  else location.href = SCREENS[screen] + location.search + (hash ? '#' + hash : '');
};

/* smooth in-page scroll: «no tan smooth, pero sí notorio suave» */
let scrollRaf = 0;
const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
D.bez = (x1, y1, x2, y2) => t => { let u = t; for (let i = 0; i < 8; i++) { const x = 3 * (1 - u) * (1 - u) * u * x1 + 3 * (1 - u) * u * u * x2 + u * u * u - t; const dx = 3 * (1 - u) * (1 - u) * x1 + 6 * (1 - u) * u * (x2 - x1) + 3 * u * u * (1 - x2); if (Math.abs(x) < 1e-5 || dx === 0) break; u = Math.min(1, Math.max(0, u - x / dx)); } return 3 * (1 - u) * (1 - u) * u * y1 + 3 * (1 - u) * u * u * y2 + u * u * u; };
D.scrollToY = (y, onDone, opts) => {
  opts = opts || {};
  cancelAnimationFrame(scrollRaf);
  const max = document.documentElement.scrollHeight - innerHeight;
  y = Math.max(0, Math.min(max, y));
  const y0 = scrollY, dy = y - y0;
  if (reduce() || Math.abs(dy) < 2) { scrollTo(0, y); onDone && onDone(); return; }
  const dur = opts.ms || Math.min(720, 380 + Math.abs(dy) * 0.08), ease = opts.ease || easeIO;
  if (D.lenis) {
    const lk = e => { if (['PageUp', 'PageDown', 'ArrowUp', 'ArrowDown', 'Home', 'End', ' '].includes(e.key)) { removeEventListener('keydown', lk); D.lenis.scrollTo(scrollY, {immediate: true, force: true}); } };
    addEventListener('keydown', lk);
    D.lenis.scrollTo(y, {duration: dur / 1000, easing: ease, force: true, onComplete: () => { removeEventListener('keydown', lk); onDone && onDone(); }});
    return;
  }
  const t0 = performance.now();
  const keyStop = e => { if (['PageUp', 'PageDown', 'ArrowUp', 'ArrowDown', 'Home', 'End', ' '].includes(e.key)) stop(); };
  const stop = () => { cancelAnimationFrame(scrollRaf); removeEventListener('wheel', stop); removeEventListener('touchstart', stop); removeEventListener('keydown', keyStop); };
  addEventListener('wheel', stop, {passive: true, once: true});
  addEventListener('touchstart', stop, {passive: true, once: true});
  addEventListener('keydown', keyStop);
  const step = now => {
    const p = Math.min(1, (now - t0) / dur);
    scrollTo(0, y0 + dy * ease(p));
    if (p < 1) scrollRaf = requestAnimationFrame(step); else { stop(); onDone && onDone(); }
  };
  scrollRaf = requestAnimationFrame(step);
};
D.offset = () => {
  const cs = getComputedStyle(document.documentElement);
  return (parseFloat(cs.getPropertyValue('--top-h')) || 56) + (parseFloat(cs.getPropertyValue('--scroll-offset')) || 24);
};
D.scrollToEl = (el, extra) => { if (el) D.scrollToY(el.getBoundingClientRect().top + scrollY - D.offset() - (extra || 0)); };

/* the site tree (P1, DECISIONS 2026-10-07) */
const TRADS = [['cat', 'Católica', 'católica'], ['ort', 'Ortodoxa', 'ortodoxa'], ['lut', 'Luterana', 'luterana'], ['ref', 'Reformada', 'reformada'], ['bau', 'Bautista', 'bautista']];
const OBJS = {
  cat: [
    {k: 'ob1', l: 'Un solo sacrificio, una sola vez', go: '04', t: 'Si Cristo se ofreció una sola vez, la Misa no puede ser un sacrificio', s: 'Hebreos dice que Cristo se ofreció una sola vez y que «no hay más ofrenda por pecado» (Hebreos 9:25-26; 10:18). Si la Misa es un sacrificio propiciatorio, o repite la cruz o le añade algo que la cruz no hizo.'},
    {k: 'ob2', l: 'Lo consagrado sigue siendo pan', t: 'Lo consagrado sigue siendo pan, como lo llama la Escritura', s: 'Después de la consagración, Pablo lo sigue llamando «pan» (1 Corintios 10:16; 11:26-28). Enseñar que su sustancia desaparece y solo quedan sus apariencias no concuerda con la Escritura.'},
    {k: 'ob3', l: 'Guardar y adorar la hostia', t: 'Guardar, exponer y adorar la hostia es usar el sacramento fuera de lo que Cristo mandó', s: 'Cristo dio el pan para que se tome y se coma («tomad, comed»). Guardarlo, exponerlo y llevarlo en procesión para adorarlo es usarlo para algo que Cristo no mandó.'},
    {k: 'ob4', l: 'El cáliz y los laicos', t: 'Cristo dijo «Bebed de ella todos»: negar el cáliz a los laicos cambia lo que él instituyó', s: 'Jesús dijo de la copa «Bebed de ella todos» (Mateo 26:27), y la Iglesia antigua la dio a todos durante siglos. Dar a los laicos solo el pan cambia lo que Cristo instituyó.'},
    {k: 'ob5', l: 'Misas privadas y por los difuntos', t: 'Misas privadas y misas por los difuntos: la Cena convertida en una obra que vale por sí sola', s: 'Cristo instituyó la Cena para que la comunidad comulgue con fe. Misas sin comulgantes, aplicadas a cambio de dinero por vivos y difuntos, la vuelven una obra que valdría por sí sola.'},
    {k: 'ob6', l: 'La invocación del Espíritu Santo', t: 'Los dones se consagran por la invocación del Espíritu Santo, no solo por las palabras de Cristo', s: 'En las liturgias antiguas, también las de Roma y las Galias, los dones se consagran con la epíclesis, que invoca al Espíritu Santo. Atribuir la consagración solo a «Esto es mi cuerpo» fue una innovación latina posterior.'},
    {k: 'ob7', l: 'El pan ázimo', t: 'Durante mil años se consagró con pan fermentado: el ázimo es una innovación latina', s: 'Durante más de mil años, en Oriente y en Occidente, la Iglesia celebró la Eucaristía con pan fermentado, a ejemplo del Salvador. El pan ázimo de la Iglesia latina es una innovación del siglo XI.'}
  ],
  ort: [
    {k: 'ob1', l: 'La epíclesis sobra', t: 'Las palabras de Cristo ya consagran: la epíclesis sobra'},
    {k: 'ob2', l: '«Transubstanciación» en 1672', t: 'Dicen que es un misterio, pero en 1672 usaron «transubstanciación»'},
    {k: 'ob3', l: 'La comunión de los bebés', t: 'Un bebé no puede examinarse a sí mismo antes de comulgar'}
  ],
  lut: [
    {k: 'ob1', l: '«Es» significa «representa»', t: '«Es» significa «representa», como en «yo soy la puerta»'},
    {k: 'ob2', l: 'Un cuerpo en un solo lugar', t: 'Un cuerpo verdadero está en un solo lugar: el de Cristo está en el cielo'},
    {k: 'ob3', l: 'El pan ya no puede ser pan', t: 'Si «es» se toma al pie de la letra, el pan ya no puede ser pan'}
  ],
  ref: [
    {k: 'ob1', l: 'Una ausencia con otro nombre', t: 'La presencia «espiritual» es una ausencia real con otro nombre'},
    {k: 'ob2', l: 'Comer indignamente', t: 'Pablo dice que quien come indignamente peca contra el cuerpo'},
    {k: 'ob3', l: 'Dividir la persona de Cristo', t: 'Encerrar el cuerpo en el cielo divide la persona de Cristo'}
  ],
  bau: [
    {k: 'ob1', l: '«Esto es mi cuerpo»', t: 'Jesús dijo «esto es mi cuerpo», no «esto representa»'},
    {k: 'ob2', l: 'Lo que creía la Iglesia antigua', t: 'La Iglesia antigua creía que el pan es la carne de Cristo'},
    {k: 'ob3', l: 'No es solo un recuerdo', t: '«Comunión del cuerpo» y juicio por comer indignamente: no es solo un recuerdo'}
  ]
};
D.TRADS = TRADS; D.OBJS = OBJS;
const FATHERS = [["clement-of-rome", "Clemente de Roma"], ["didache", "Didajé (Enseñanza de los Doce Apóstoles)"], ["ignatius-of-antioch", "Ignacio de Antioquía"], ["papias-of-hierapolis", "Papías de Hierápolis"], ["epistle-of-barnabas", "Epístola de Bernabé"], ["shepherd-of-hermas", "El Pastor de Hermas"], ["epistle-to-diognetus", "Carta a Diogneto"], ["polycarp-of-smyrna", "Policarpo de Esmirna"], ["justin-martyr", "Justino Mártir"], ["melito-of-sardis", "Melitón de Sardes"], ["theophilus-of-antioch", "Teófilo de Antioquía"], ["irenaeus-of-lyon", "Ireneo de Lyon"], ["clement-of-alexandria", "Clemente de Alejandría"], ["tertullian", "Tertuliano"], ["hippolytus-of-rome", "Hipólito de Roma"], ["origen", "Orígenes"], ["cyprian-of-carthage", "Cipriano de Cartago"], ["novatian", "Novaciano"], ["dionysius-of-alexandria", "Dionisio de Alejandría"], ["methodius-of-olympus", "Metodio de Olimpo"], ["lactantius", "Lactancio"], ["eusebius-of-caesarea", "Eusebio de Cesarea"], ["aphrahat", "Afraates, el Sabio Persa"], ["hilary-of-poitiers", "Hilario de Poitiers"], ["athanasius-of-alexandria", "Atanasio de Alejandría"], ["ephrem-the-syrian", "Efrén de Siria"], ["basil-of-caesarea", "Basilio de Cesarea (Basilio Magno)"], ["cyril-of-jerusalem", "Cirilo de Jerusalén"], ["gregory-of-nazianzus", "Gregorio Nacianceno"], ["gregory-of-nyssa", "Gregorio de Nisa"], ["ambrose-of-milan", "Ambrosio de Milán"], ["optatus-of-milevis", "Optato de Milevi"], ["didymus-the-blind", "Dídimo el Ciego"], ["epiphanius-of-salamis", "Epifanio de Salamina"], ["john-chrysostom", "Juan Crisóstomo"], ["rufinus-of-aquileia", "Rufino de Aquilea"], ["jerome", "Jerónimo de Estridón"], ["augustine-of-hippo", "Agustín de Hipona"], ["john-cassian", "Juan Casiano"], ["cyril-of-alexandria", "Cirilo de Alejandría"], ["vincent-of-lerins", "Vicente de Lérins"], ["peter-chrysologus", "Pedro Crisólogo"], ["prosper-of-aquitaine", "Próspero de Aquitania"], ["theodoret-of-cyrrhus", "Teodoreto de Ciro"], ["leo-the-great", "León Magno"], ["pseudo-dionysius", "Pseudo-Dionisio Areopagita (Corpus Areopagiticum)"], ["caesarius-of-arles", "Cesáreo de Arlés"], ["gregory-the-great", "Gregorio Magno"], ["isidore-of-seville", "Isidoro de Sevilla"], ["sophronius-of-jerusalem", "Sofronio de Jerusalén"], ["maximus-the-confessor", "Máximo el Confesor"], ["isaac-of-nineveh", "Isaac de Nínive (Isaac el Sirio)"], ["bede", "Beda el Venerable"], ["andrew-of-crete", "Andrés de Creta"], ["germanus-of-constantinople", "Germán I de Constantinopla"], ["john-of-damascus", "Juan Damasceno"]];
const tradNode = ([t, label]) => ({id: 'eu-' + t, label, go: t === 'cat' ? '03' : null, kids: [
  ...(t === 'cat' ? [{id: 'eu-cat-pas', label: 'Pasajes'}] : []),
  {id: 'eu-' + t + '-obs', label: 'Objeciones', go: 'ob', hash: t === 'cat' ? '' : t, kids: OBJS[t].map(o => ({id: 'eu-' + t + '-' + o.k, label: o.l, go: o.go || null}))}
]});
const TREE = [
  {h: 'Doctrinas', kids: [
    {id: 'eu', label: 'La Eucaristía', go: '02', kids: TRADS.map(tradNode)},
    {id: 'ba', label: 'El bautismo'}, {id: 'ju', label: 'La justificación'}, {id: 'pa', label: 'El papado'}, {id: 'ss', label: 'Sola Scriptura'}
  ]},
  {h: 'Biblia', kids: [
    {id: 'at', label: 'Antiguo Testamento'}, {id: 'dc', label: 'Libros deuterocanónicos'}, {id: 'nt', label: 'Nuevo Testamento', kids: [{id: 'nt-mt', label: 'Mateo'}, {id: 'nt-mc', label: 'Marcos'}, {id: 'nt-lc', label: 'Lucas'}, {id: 'nt-jn', label: 'Juan', kids: [{id: 'jn6', label: 'Capítulo 6', go: '05', hash: 'jn6'}]}]}
  ]},
  {h: 'Historia', kids: [
    {id: 'tl', label: 'Línea de tiempo'},
    {id: 'fa', label: 'Padres', n: FATHERS.length, kids: FATHERS.map(f => ({id: f[0] === 'ignatius-of-antioch' ? 'ig' : 'fa-' + f[0], label: f[1], go: f[0] === 'ignatius-of-antioch' ? '09' : null}))},
    {id: 'co', label: 'Concilios', n: 41}, {id: 'he', label: 'Herejías', n: 18}, {id: 'di', label: 'Divisiones', n: 10}, {id: 're', label: 'Reforma y ramas', n: 20}
  ]},
  {h: 'Consulta', kids: [{id: 'gl', label: 'Glosario'}, {id: 'fu', label: 'Fuentes', kids: [{id: 'fu-ccc', label: 'Catecismo de la Iglesia Católica'}, {id: 'fu-tr', label: 'Concilio de Trento', kids: [{id: 'tr13', label: 'Sesión XIII', go: '05', hash: 'tr13'}, {id: 'tr21', label: 'Sesión XXI'}, {id: 'tr22', label: 'Sesión XXII'}]}, {id: 'fu-ig', label: 'Ignacio de Antioquía'}]}]}
];
const parentOf = {};
(function walk(nodes, p) { nodes.forEach(n => { if (n.id) parentOf[n.id] = p; if (n.kids) walk(n.kids, n.id || p); }); })(TREE, null);
const trailOf = id => { const t = []; let c = parentOf[id]; while (c) { t.push(c); c = parentOf[c]; } return t; };

let treeCur = '';
function buildTree(cur) {
  treeCur = cur;
  const visited = store.get('visited', []);
  if (!visited.includes(cur)) { visited.push(cur); store.set('visited', visited); }
  const open = new Set();
  visited.forEach(v => { trailOf(v).forEach(t => open.add(t)); open.add(v); });
  const trail = new Set(trailOf(cur));
  const node = n => {
    const has = !!(n.kids && n.kids.length);
    const isOpen = has && open.has(n.id);
    const live = !!(n.go && SCREENS[n.go]);
    const href = live ? SCREENS[n.go] + (n.hash ? '#' + n.hash : '') : '#';
    return '<li data-id="' + n.id + '"><div class="sb-row' + (n.id === cur ? ' cur' : '') + (trail.has(n.id) ? ' trail' : '') + '">' +
      (has ? '<button class="sb-tw" type="button" aria-expanded="' + isOpen + '" aria-label="' + (isOpen ? 'Contraer ' : 'Expandir ') + esc(n.label) + '">' + ic.chev + '</button>' : '<span class="sb-tw nil"></span>') +
      '<a class="sb-a" href="' + href + '"' + (live ? ' data-go="' + n.go + '"' + (n.hash ? ' data-hash="' + n.hash + '"' : '') : ' data-nb') + (n.id === cur ? ' aria-current="page"' : '') + '><span>' + esc(n.label) + '</span>' + (n.n ? '<span class="n">' + n.n + '</span>' : '') + '</a></div>' +
      (has ? '<ul' + (isOpen ? '' : ' hidden') + '>' + n.kids.map(node).join('') + '</ul>' : '') + '</li>';
  };
  return '<div class="sb-tools"><button class="sb-collapse" type="button">Contraer todo menos dónde estoy</button></div>' +
    TREE.map(g => '<div class="sb-g"><p class="sb-h">' + g.h + '</p><ul>' + g.kids.map(node).join('') + '</ul></div>').join('');
}
const EASE_REVEAL = 'cubic-bezier(0.22, 1, 0.36, 1)';
const TREE_IN = {
  cascade: {ms: 240, step: 30, rise: 4},
  sura: {ms: 420, step: 60, rise: 8},
  unfold: {ms: 200, step: 20, rise: 0, height: 220}
};
const TREE_OUT = {ms: 160, fade: 120, easing: 'cubic-bezier(0.4, 0, 0.2, 1)'};
function setBranch(ul, op) {
  const o = TREE_IN[D.x('tree') || 'unfold'];
  const wasHidden = ul.hidden;
  const from = wasHidden ? 0 : ul.getBoundingClientRect().height;
  ul.getAnimations({subtree: true}).forEach(a => { if (a.id === 'tree') a.cancel(); });
  if (!o || reduce()) { ul.hidden = !op; ul.style.overflow = ''; return; }
  if (op) {
    ul.hidden = false;
    if (wasHidden) [...ul.children].forEach((li, i) => li.animate([{opacity: 0, transform: 'translateY(' + o.rise + 'px)'}, {opacity: 1, transform: 'none'}], {duration: o.ms, delay: Math.min(i, 8) * o.step, easing: o.rise ? EASE_REVEAL : 'ease-out', fill: 'backwards', id: 'tree'}));
    if (o.height) {
      ul.style.overflow = 'hidden';
      ul.animate([{height: from + 'px'}, {height: ul.scrollHeight + 'px'}], {duration: o.height, easing: EASE_REVEAL, id: 'tree'}).finished.then(() => { ul.style.overflow = ''; }, () => {});
    }
    return;
  }
  if (wasHidden) return;
  ul.style.overflow = 'hidden';
  [...ul.children].forEach(li => li.animate([{opacity: 1}, {opacity: 0}], {duration: TREE_OUT.fade, easing: 'ease-in', fill: 'forwards', id: 'tree'}));
  ul.animate([{height: from + 'px'}, {height: '0px'}], {duration: TREE_OUT.ms, easing: TREE_OUT.easing, fill: 'forwards', id: 'tree'}).finished.then(() => {
    ul.hidden = true; ul.style.overflow = '';
    ul.getAnimations({subtree: true}).forEach(a => { if (a.id === 'tree') a.cancel(); });
  }, () => {});
}
function wireTree(sb) {
  sb.addEventListener('click', e => {
    const tw = e.target.closest('.sb-tw:not(.nil)');
    if (tw) {
      const ul = tw.closest('li').querySelector(':scope > ul');
      const op = tw.getAttribute('aria-expanded') !== 'true';
      tw.setAttribute('aria-expanded', String(op));
      tw.setAttribute('aria-label', (op ? 'Contraer ' : 'Expandir ') + tw.closest('li').querySelector('.sb-a span').textContent);
      setBranch(ul, op);
      return;
    }
    if (e.target.closest('.sb-collapse')) {
      const keep = new Set(trailOf(treeCur));
      $$('.sb-tw:not(.nil)', sb).forEach(b => { const id = b.closest('li').dataset.id; const op = keep.has(id); const was = b.getAttribute('aria-expanded') === 'true'; b.setAttribute('aria-expanded', String(op)); if (was !== op) setBranch(b.closest('li').querySelector(':scope > ul'), op); });
      store.set('visited', [treeCur]);
    }
  });
  requestAnimationFrame(() => { const c = $('.sb-row.cur', sb); if (c) sb.scrollTop = Math.max(0, c.offsetTop - sb.clientHeight * .35); });
}
const rowOf = (sb, id) => {
  for (let c = id; c; c = parentOf[c]) { const r = sb.querySelector('li[data-id="' + c + '"] > .sb-row'); if (r && r.offsetParent) return r; }
  return null;
};
const MARK_MS = 360;
let markEnd = 0;
const willMark = (fromId, toId) => !!fromId && fromId !== toId && !!D.x('mark') && D.x('mark') !== 'now' && !reduce();
D.markMove = (fromId, toId) => {
  const sb = $('#sb');
  if (!sb) return;
  const mode = D.x('mark');
  const a = willMark(fromId, toId) ? rowOf(sb, fromId) : null, b = a ? rowOf(sb, toId) : null;
  if (!a || !b || a === b) { sb.classList.remove('marking'); return; }
  $$('.sb-mark', sb).forEach(m => m.remove());
  clearTimeout(markEnd);
  sb.classList.add('marking');
  const end = () => { sb.classList.add('settle'); sb.classList.remove('marking'); $$('.sb-mark', sb).forEach(m => m.remove()); requestAnimationFrame(() => requestAnimationFrame(() => sb.classList.remove('settle'))); };
  if (mode === 'fade') {
    a.classList.add('was-cur');
    requestAnimationFrame(() => requestAnimationFrame(() => a.classList.remove('was-cur')));
    markEnd = setTimeout(end, 400);
    return;
  }
  const sr = sb.getBoundingClientRect();
  const box = r => { const q = r.getBoundingClientRect(); return {x: q.left - sr.left + sb.scrollLeft, y: q.top - sr.top + sb.scrollTop, w: q.width, h: q.height}; };
  const f = box(a), t = box(b);
  const m = document.createElement('span');
  m.className = 'sb-mark' + (mode === 'rail' ? ' rail' : '');
  m.setAttribute('aria-hidden', 'true');
  Object.assign(m.style, {left: t.x + 'px', top: t.y + 'px', width: (mode === 'rail' ? 2 : t.w) + 'px', height: t.h + 'px'});
  sb.appendChild(m);
  m.animate([{transform: 'translate(' + (f.x - t.x) + 'px,' + (f.y - t.y) + 'px)', width: (mode === 'rail' ? 2 : f.w) + 'px', height: f.h + 'px'}, {transform: 'none'}], {duration: MARK_MS, easing: EASE_REVEAL}).finished.then(end, () => {});
};
D.setPage = id => {
  const sb = $('#sb'); if (!sb) return;
  const st = sb.scrollTop, from = treeCur;
  if (willMark(from, id)) sb.classList.add('marking');
  sb.innerHTML = buildTree(id);
  sb.scrollTop = st;
  document.body.dataset.page = id;
  D.markMove(from, id);
  store.set('markFrom', id);
};

/* top bar, sidebar, frame */
function buildChrome() {
  const main = $('main.main');
  if (!main || $('.top')) return;
  const cur = document.body.dataset.page || '';
  const top = document.createElement('header');
  top.className = 'top';
  top.innerHTML = '<button class="menu-b" type="button" aria-label="Abrir el índice" aria-expanded="false">' + ic.menu + '</button>' +
    '<a class="logo" href="s02.html" data-go="02">Doctrina</a>' +
    '<button class="search-b" type="button" aria-label="Buscar">' + ic.search + '<span class="t">Buscar doctrinas, versículos, Padres, palabras</span><span class="kbd">⌘K</span></button>' +
    '<span class="sp"></span>' +
    '<div class="lang" role="group" aria-label="Idioma"><button type="button" aria-pressed="true">ES</button><button type="button" aria-pressed="false" data-nb>EN</button></div>' +
    '<button class="icon-b" id="theme-b" type="button"></button>';
  const frame = document.createElement('div');
  frame.className = 'frame';
  const sb = document.createElement('nav');
  sb.className = 'sb' + (willMark(store.get('markFrom', null), cur) ? ' marking' : ''); sb.id = 'sb'; sb.setAttribute('aria-label', 'Índice del sitio');
  sb.innerHTML = buildTree(cur);
  const scrim = document.createElement('div');
  scrim.className = 'sb-scrim';
  main.before(top);
  main.before(frame);
  frame.append(sb, main);
  document.body.append(scrim);
  wireTree(sb, cur);
  { const from = store.get('markFrom', null); store.set('markFrom', cur); requestAnimationFrame(() => requestAnimationFrame(() => D.markMove(from, cur))); }
  D.setTheme(document.documentElement.dataset.theme);
  const mb = $('.menu-b', top);
  const setSb = op => { sb.classList.toggle('open', op); scrim.classList.toggle('open', op); mb.setAttribute('aria-expanded', String(op)); if (op) { const c = $('.sb-row.cur', sb); if (c) sb.scrollTop = Math.max(0, c.offsetTop - sb.clientHeight * .35); } };
  mb.addEventListener('click', () => setSb(!sb.classList.contains('open')));
  scrim.addEventListener('click', () => setSb(false));
  $('#theme-b').addEventListener('click', () => D.setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true, true));
  $('.search-b', top).addEventListener('click', openSearch);
  addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') { if ($('.sx.open')) closeSearch(); else if ($('.rd.open')) D.closeReader(); else if ($('.cw.open')) D.closeCite(); else setSb(false); }
  });
}

/* delegated clicks: screens, not-built pages, in-page anchors, citations, readers */
document.addEventListener('click', e => {
  const go = e.target.closest('[data-go]');
  if (go) { e.preventDefault(); D.go(go.dataset.go, go.dataset.hash); return; }
  const nb = e.target.closest('[data-nb]');
  if (nb) { e.preventDefault(); D.toast(NB); return; }
  const ct = e.target.closest('[data-cite]');
  if (ct) { e.preventDefault(); D.openCite(ct.dataset.cite, ct); return; }
  const rd = e.target.closest('[data-reader]');
  if (rd) { e.preventDefault(); D.openReader(rd.dataset.reader, rd.dataset.target); return; }
  const a = e.target.closest('a[href^="#"]');
  if (a && a.getAttribute('href').length > 1) {
    const t = document.getElementById(a.getAttribute('href').slice(1));
    if (t) { e.preventDefault(); D.scrollToEl(t); history.replaceState(null, '', a.getAttribute('href')); }
  }
});

/* fingerprint (DECISIONS 2026-10-19 v2; pointer cursor per Pedro 2026-10-20) */
const FY0 = 1, FY1 = 2026;
const fpct = y => (y - FY0) / (FY1 - FY0) * 100;
D.fingerprint = (el, data, opts) => {
  opts = opts || {};
  const h = opts.h || +el.dataset.h || 40;
  const animate = opts.animate !== false && el.dataset.still == null;
  let s = '<div class="fp-strip" style="height:' + h + 'px"><div class="fp-base"></div>';
  for (let c = 100; c < 2026; c += 100) s += '<div class="fp-cent" style="left:' + fpct(c) + '%"></div>';
  data.forEach((d, i) => {
    if (d.e && d.e > d.y) s += '<div class="r" data-i="' + i + '" style="left:' + fpct(d.y) + '%;width:' + (fpct(d.e) - fpct(d.y)) + '%"></div>';
    s += '<div class="t' + (animate ? ' in' : '') + '" data-i="' + i + '" style="left:' + fpct(d.t || d.y) + '%;--dl:' + ((opts.delay || 300) + i * 30) + 'ms"></div>';
  });
  s += '<div class="fp-tip" aria-hidden="true"></div></div><div class="fp-axis" aria-hidden="true"><span>1</span><span>500</span><span>1000</span><span>1500</span><span>2026</span></div>';
  el.innerHTML = s;
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', (opts.label || 'Textos y hechos citados, por fecha') + ': ' + data.length + ', del año ' + data[0].y + ' al ' + data[data.length - 1].y);
  const strip = $('.fp-strip', el), tip = $('.fp-tip', el);
  const ticks = $$('.t', el), ranges = $$('.r', el);
  ticks.forEach(t => t.addEventListener('animationend', () => t.classList.remove('in')));
  let cur = -1;
  const k = (i, hv) => {
    const w = strip.clientWidth, span = Math.min(286, w * 0.35);
    const dd = Math.abs((data[i].t || data[i].y) - (data[hv].t || data[hv].y)) / (FY1 - FY0) * w / span;
    return Math.max(1, 2.5 + 2 * Math.cos(Math.PI * Math.min(dd, 1))) / 4.5;
  };
  const paint = hv => {
    ticks.forEach(t => { const i = +t.dataset.i; t.style.setProperty('--k', hv < 0 ? 1 / 4.5 : k(i, hv)); t.classList.toggle('on', i === hv); });
    ranges.forEach(r => { const i = +r.dataset.i; r.style.setProperty('--k', hv < 0 ? 1 / 4.5 : k(i, hv)); r.classList.toggle('on', i === hv); });
  };
  const near = cx => { const r = strip.getBoundingClientRect(); const yr = (cx - r.left) / r.width * (FY1 - FY0) + FY0; let b = 0; data.forEach((d, i) => { if (Math.abs((d.t || d.y) - yr) < Math.abs((data[b].t || data[b].y) - yr)) b = i; }); return b; };
  const enter = hv => {
    if (hv === cur) return;
    cur = hv; paint(hv);
    const d = data[hv];
    tip.textContent = d.l + ', ' + (d.e && d.e > d.y ? 'c. ' + d.y + '–' + d.e : (d.c ? 'c. ' : '') + d.y);
    tip.style.left = Math.min(Math.max(fpct(d.t || d.y), 14), 86) + '%';
    tip.classList.remove('show'); void tip.offsetWidth; tip.classList.add('show');
  };
  const leave = () => { cur = -1; paint(-1); tip.classList.remove('show'); };
  let downX = null;
  strip.addEventListener('pointermove', e => enter(near(e.clientX)));
  strip.addEventListener('pointerdown', e => { downX = e.clientX; enter(near(e.clientX)); });
  strip.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') leave(); });
  strip.addEventListener('pointerup', e => {
    if (e.pointerType !== 'mouse') setTimeout(leave, 1400);
    if (downX != null && Math.abs(e.clientX - downX) < 6 && opts.onPick && e.pointerType === 'mouse') opts.onPick(data[near(e.clientX)]);
    downX = null;
  });
  return {leave};
};

/* living ruler (option C + "Ola"; build requirements in DECISIONS 2026-10-20) */
D.livingRuler = (root, W, opts) => {
  opts = opts || {};
  const SPAN = [1, 800];
  root.innerHTML = '<div class="lr-wrap"><div class="track"></div><div class="lr-status" aria-live="polite"></div></div><ol class="wl"></ol>';
  const rwrap = $('.lr-wrap', root), track = $('.track', root), status = $('.lr-status', root), list = $('.wl', root);
  const section = opts.section || root;
  W.forEach(w => {
    D.CITES['w:' + w.id] = {kicker: 'Cita', quote: w.q, who: w.a, work: w.w, loc: w.l, date: w.d, y: w.s, y2: w.e, reader: w.reader, ext: w.ext};
  });
  let win = null, hot = null, active = null, drag = null;
  const yr = y => (y - SPAN[0]) / (SPAN[1] - SPAN[0]) * 100;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const inWin = w => !win || (w.e >= win[0] && w.s <= win[1]);
  const LIFT = new Map();
  const bez = (x1, y1, x2, y2) => t => { let u = t; for (let i = 0; i < 8; i++) { const x = 3 * (1 - u) * (1 - u) * u * x1 + 3 * (1 - u) * u * u * x2 + u * u * u - t; const dx = 3 * (1 - u) * (1 - u) * x1 + 6 * (1 - u) * u * (x2 - x1) + 3 * u * u * (1 - x2); if (Math.abs(x) < 1e-5 || dx === 0) break; u = Math.min(1, Math.max(0, u - x / dx)); } return 3 * (1 - u) * (1 - u) * u * y1 + 3 * (1 - u) * u * u * y2 + u * u * u; };
  const EASE = bez(.25, .1, .25, 1);
  const DUR = () => reduce() ? 0 : 200;
  let raf = 0;
  function tween(id, to) {
    const st = LIFT.get(id) || {cur: 0, to: 0};
    if (st.to === to) { LIFT.set(id, st); return; }
    st.from = st.cur; st.to = to; st.t0 = performance.now();
    LIFT.set(id, st);
    if (!raf) raf = requestAnimationFrame(step);
  }
  function applyLift(id, v) {
    const m = track.querySelector('.mk[data-id="' + id + '"]');
    if (!m) return;
    m.style.setProperty('--ly', v + 'px');
    m.style.setProperty('--sh', Math.max(0, -v) + 'px');
  }
  function step(now) {
    raf = 0;
    let busy = false;
    LIFT.forEach((st, id) => {
      if (st.t0 == null) { applyLift(id, st.cur); return; }
      const d = DUR();
      const p = d ? Math.min(1, (now - st.t0) / d) : 1;
      st.cur = st.from + (st.to - st.from) * EASE(p);
      if (p >= 1) { st.cur = st.to; st.t0 = null; } else busy = true;
      applyLift(id, st.cur);
    });
    if (busy) raf = requestAnimationFrame(step);
  }
  function drawTrack() {
    let h = '<div class="axis"></div>';
    for (let y = 0; y <= 800; y += 50) {
      const major = y % 100 === 0;
      h += '<div class="tick' + (major ? '' : ' minor') + '" style="left:' + yr(Math.max(1, y)) + '%"></div>';
      if (major) h += '<div class="tlab' + ((y / 100) % 2 ? ' odd' : '') + '" style="left:' + yr(Math.max(1, y)) + '%">' + (y === 0 ? 1 : y) + '</div>';
    }
    h += '<div class="pos" hidden></div>';
    if (win) h += '<div class="win" style="left:' + yr(win[0]) + '%;width:' + (yr(win[1]) - yr(win[0])) + '%"><button class="hdl l" type="button" data-h="l" aria-label="Inicio del rango, año ' + win[0] + '"></button><button class="hdl r" type="button" data-h="r" aria-label="Fin del rango, año ' + win[1] + '"></button></div>';
    W.forEach(w => {
      const segW = Math.max(0, yr(w.e) - yr(w.s));
      const edge = yr(w.s) > 75 ? ' edge-r' : yr(w.s) < 15 ? ' edge-l' : '';
      h += '<button class="mk' + edge + (inWin(w) ? '' : ' dim') + '" type="button" data-id="' + w.id + '" style="left:' + yr(w.s) + '%" aria-label="' + esc(w.a + ', ' + w.d) + '"><span class="segm" style="width:calc(' + segW + '/100 * var(--tw))"></span><span class="stem"></span><span class="lift"><span class="dot"></span><span class="lab"><b>' + esc(w.a) + '</b>, ' + esc(w.d) + '</span></span></button>';
    });
    track.innerHTML = h;
    track.style.setProperty('--tw', track.clientWidth + 'px');
    LIFT.forEach((st, id) => applyLift(id, st.cur));
    paint(); placePos();
  }
  const baseX = w => yr(w.s) / 100 * track.clientWidth;
  function paint() {
    track.classList.toggle('has-hot', !!hot);
    const hw = hot ? W.find(x => x.id === hot) : null;
    $$('.mk', track).forEach(m => {
      const w = W.find(x => x.id === m.dataset.id);
      m.classList.toggle('hot', m.dataset.id === hot);
      m.classList.toggle('on', m.dataset.id === active);
      let ly = 0;
      if (hw) { const d = Math.abs(baseX(w) - baseX(hw)) / 140; ly = d < 1 ? Math.round(-14 * (0.5 + 0.5 * Math.cos(Math.PI * d))) : 0; }
      if (m.dataset.id === hot) ly = -22;
      else if (m.dataset.id === active && !hot) ly = -14;
      tween(m.dataset.id, ly);
    });
  }
  function nearest(cx) {
    const x = cx - track.getBoundingClientRect().left;
    let best = null, bd = 1e9;
    W.forEach(w => { if (!inWin(w)) return; const d = Math.abs(baseX(w) - x); if (d < bd) { bd = d; best = w; } });
    return bd < 40 ? best : null;
  }
  function setHot(id) {
    if (id === hot) return;
    hot = id;
    $$('.wi', list).forEach(li => li.classList.toggle('hot', li.dataset.id === id));
    paint();
  }
  let listSig = null;
  function drawList() {
    const shown = W.filter(inWin);
    status.innerHTML = win ? (shown.length + ' de ' + W.length + ' testigos, años ' + win[0] + ' a ' + win[1] + ' <button class="lr-reset" type="button">Mostrar todos</button>') : W.length + ' testigos. Arrastra sobre la regla para elegir años.';
    const sig = shown.map(w => w.id).join('|');
    if (sig === listSig) return;
    const first = listSig === null;
    listSig = sig;
    const render = () => { list.innerHTML = shown.length ? shown.map(w => '<li class="wi" data-id="' + w.id + '" id="w-' + w.id + '"><div class="wd">' + esc(w.d) + '</div><div><p class="quote">' + esc(w.q) + '</p><p class="wa"><span class="who">' + esc(w.a) + '</span><br><button class="ln-side" type="button" data-cite="w:' + w.id + '">' + esc(w.w + ', ' + w.l) + '</button></p></div></li>').join('') : '<li class="lr-empty" data-fk="empty">Ningún testigo de estos años en esta doctrina.</li>'; if (D.glue) D.glue(list); };
    if (first) render(); else D.flip(list, render);
  }
  function draw() { drawTrack(); drawList(); updateActive(true); }
  function placePos() {
    const pos = $('.pos', track); if (!pos) return;
    const w = W.find(x => x.id === active);
    if (!w) { pos.hidden = true; return; }
    pos.hidden = false;
    const l = yr(w.s), r = yr(w.e);
    pos.style.left = 'calc(' + l + '% - 7px)'; pos.style.width = 'calc(' + (r - l) + '% + 14px)';
  }
  function updateActive(force) {
    const sec = section.getBoundingClientRect();
    const inSec = sec.top < innerHeight * .5 && sec.bottom > rwrap.offsetHeight + D.offset() + 40;
    rwrap.classList.toggle('stuck', rwrap.getBoundingClientRect().top <= D.offset() - 23 && inSec);
    const top = rwrap.getBoundingClientRect().bottom + 8;
    const items = $$('.wi', list);
    let cur = inSec ? items[0] : null;
    if (inSec) for (const li of items) { if (li.getBoundingClientRect().top <= top + 40) cur = li; else break; }
    const id = cur ? cur.dataset.id : null;
    if (id === active && !force) return;
    active = id;
    paint(); placePos();
  }
  const yearAt = cx => { const r = track.getBoundingClientRect(); const y = clamp((cx - r.left) / r.width, 0, 1) * (SPAN[1] - SPAN[0]) + SPAN[0]; return Math.max(SPAN[0], Math.round(y / 10) * 10); };
  function jumpTo(id) {
    const li = document.getElementById('w-' + id); if (!li) return;
    D.scrollToY(li.getBoundingClientRect().top + scrollY - rwrap.offsetHeight - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--top-h')) || 56) - 6);
  }
  track.addEventListener('pointerdown', e => {
    const h = e.target.closest('.hdl'), inside = e.target.closest('.win'), mk = e.target.closest('.mk');
    const y = yearAt(e.clientX);
    const near = nearest(e.clientX);
    if (h) drag = {mode: h.dataset.h};
    else if (inside && !mk && !near) drag = {mode: 'move', off: y - win[0], len: win[1] - win[0]};
    else drag = {mode: 'new', from: y, x0: e.clientX, pending: true, near: near ? near.id : null, prev: win};
    track.setPointerCapture(e.pointerId); e.preventDefault();
  });
  track.addEventListener('pointermove', e => {
    if (!drag) { const n = nearest(e.clientX); setHot(n ? n.id : null); return; }
    if (drag.pending) { if (Math.abs(e.clientX - drag.x0) < 5) return; drag.pending = false; setHot(null); }
    const y = yearAt(e.clientX);
    if (drag.mode === 'new') win = [Math.min(drag.from, y), Math.max(drag.from, y)];
    else if (drag.mode === 'l') win = [Math.min(y, win[1] - 10), win[1]];
    else if (drag.mode === 'r') win = [win[0], Math.max(y, win[0] + 10)];
    else { const st = clamp(y - drag.off, SPAN[0], SPAN[1] - drag.len); win = [st, st + drag.len]; }
    drawTrack(); drawList(); updateActive(true);
  });
  const endDrag = () => {
    if (!drag) return;
    if (drag.pending) { const id = drag.near; drag = null; if (id) { setHot(id); jumpTo(id); } return; }
    if (drag.mode === 'new' && win && win[1] - win[0] < 10) win = drag.prev;
    drag = null; draw();
  };
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);
  track.addEventListener('pointerleave', () => { if (!drag) setHot(null); });
  track.addEventListener('keydown', e => {
    const h = e.target.closest('.hdl');
    if (h && win) {
      const d = e.key === 'ArrowLeft' ? -10 : e.key === 'ArrowRight' ? 10 : 0; if (!d) return;
      e.preventDefault();
      if (h.dataset.h === 'l') win = [clamp(win[0] + d, SPAN[0], win[1] - 10), win[1]]; else win = [win[0], clamp(win[1] + d, win[0] + 10, SPAN[1])];
      draw(); track.querySelector('.hdl.' + h.dataset.h)?.focus(); return;
    }
    const mk = e.target.closest('.mk');
    if (mk && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); jumpTo(mk.dataset.id); }
  });
  track.addEventListener('focusin', e => { const mk = e.target.closest('.mk'); if (mk) setHot(mk.dataset.id); });
  track.addEventListener('focusout', () => setHot(null));
  list.addEventListener('pointerover', e => { const li = e.target.closest('.wi'); setHot(li ? li.dataset.id : null); });
  list.addEventListener('pointerleave', () => setHot(null));
  status.addEventListener('click', e => { if (e.target.closest('.lr-reset')) { win = null; draw(); } });
  new ResizeObserver(() => { track.style.setProperty('--tw', track.clientWidth + 'px'); paint(); placePos(); }).observe(track);
  addEventListener('scroll', () => updateActive(false), {passive: true});
  draw();
};

/* right-edge page ruler (Stripe Press; smooth active change and click scroll per Pedro 2026-10-20) */
let prScroll = null;
function buildPageRuler() {
  const old = $('.pr'); if (old) old.remove();
  if (prScroll) removeEventListener('scroll', prScroll);
  const secs = $$('main.main [data-label]:not(.pp)').filter(s => s.offsetParent !== null);
  if (secs.length < 2) return;
  const pr = document.createElement('nav');
  pr.className = 'pr'; pr.setAttribute('aria-label', 'Secciones de la página');
  pr.innerHTML = secs.map((s, i) => '<button class="pt in" type="button" data-i="' + i + '" style="--dl:' + (900 + i * 100) + 'ms" aria-label="' + esc(s.dataset.label) + '"><span class="pl">' + esc(s.dataset.label) + '</span><span class="pb"></span></button>').join('') + '<span class="pr-glide" aria-hidden="true"></span>';
  document.body.appendChild(pr);
  const pts = $$('.pt', pr), glide = $('.pr-glide', pr);
  pts.forEach(p => p.addEventListener('animationend', () => p.classList.remove('in')));
  const N = Math.max(pts.length, 16);
  let pcur = -1, act = -1, lock = -1;
  const penter = hv => {
    if (hv === pcur) return; pcur = hv;
    pts.forEach((p, i) => { $('.pb', p).style.transform = 'scaleX(' + Math.max(1, 2.5 + 2 * Math.cos(Math.PI * Math.abs(i - hv) / N)) + ')'; p.classList.toggle('hov', i === hv); });
  };
  const pleave = () => { pcur = -1; pts.forEach(p => { $('.pb', p).style.transform = 'scaleX(1)'; p.classList.remove('hov'); }); };
  pr.addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; let b = 0, bd = 1e9; pts.forEach((p, i) => { const r = p.getBoundingClientRect(); const d = Math.abs(r.top + r.height / 2 - e.clientY); if (d < bd) { bd = d; b = i; } }); penter(b); });
  pr.addEventListener('pointerleave', pleave);
  const setAct = a => {
    if (a === act) return; act = a;
    pts.forEach((p, i) => { p.classList.toggle('on', i === a); if (i === a) p.setAttribute('aria-current', 'true'); else p.removeAttribute('aria-current'); });
    const p = pts[a];
    if (p) { glide.style.transform = 'translateY(' + (p.offsetTop + p.offsetHeight / 2 - 1.5) + 'px)'; requestAnimationFrame(() => glide.classList.add('ready')); }
  };
  pts.forEach((p, i) => {
    p.addEventListener('focus', () => penter(i));
    p.addEventListener('blur', pleave);
    p.addEventListener('click', () => { lock = i; setAct(i); D.scrollToEl(secs[i]); setTimeout(() => { lock = -1; }, 800); });
  });
  const pactive = () => {
    if (lock >= 0) return;
    let a = 0;
    secs.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * .35) a = i; });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) a = secs.length - 1;
    setAct(a);
  };
  prScroll = pactive;
  addEventListener('scroll', pactive, {passive: true});
  pactive();
}
D.rebuildRuler = buildPageRuler;

/* citation window */
D.mini = (y, y2, span, lab) => mini(y, y2, span, lab);
let cw, cwScrim, cwOpener = null, cwPos = null;
const mini = (y, y2, span, lab) => {
  const lo = span ? span[0] : 1, hi = span ? span[1] : (y2 || y) <= 800 ? 800 : 2026;
  const x = v => (v - lo) / (hi - lo) * 100;
  const marks = span ? (span[2] || [lo, hi]) : hi === 800 ? [1, 200, 400, 600, 800] : [1, 500, 1000, 1500, 2026];
  let s = '<div class="mini" aria-hidden="true"><div class="ax"></div>';
  marks.forEach((m, i) => { s += '<div class="tk" style="left:' + x(m) + '%"></div><div class="tl' + (i === 0 ? ' e0' : i === marks.length - 1 ? ' e1' : '') + '" style="left:' + x(m) + '%">' + m + '</div>'; });
  if (y2 && y2 > y) s += '<div class="band" style="left:' + x(y) + '%;width:' + Math.max(.6, x(y2) - x(y)) + '%"></div>';
  const mid = y2 && y2 > y ? (y + y2) / 2 : y;
  s += '<div class="pt0" style="left:' + x(mid) + '%"></div><div class="pl0" style="left:' + Math.min(Math.max(x(mid), 8), 92) + '%">' + esc(lab && lab.length <= 16 ? lab : (y2 && y2 > y ? y + '–' + y2 : y)) + '</div></div>';
  return s;
};
function ensureCw() {
  if (cw) return;
  cw = document.createElement('div');
  cw.className = 'cw'; cw.setAttribute('role', 'dialog'); cw.setAttribute('aria-modal', 'false'); cw.setAttribute('aria-labelledby', 'cw-k'); cw.tabIndex = -1;
  cw.innerHTML = '<div class="cw-h"><span class="cw-grip"></span><span class="cw-k" id="cw-k"></span><button class="cw-x" type="button" aria-label="Cerrar">' + ic.x + '</button></div><div class="cw-b"></div>';
  cwScrim = document.createElement('div'); cwScrim.className = 'cw-scrim';
  document.body.append(cwScrim, cw);
  $('.cw-x', cw).addEventListener('click', () => D.closeCite());
  cwScrim.addEventListener('click', () => D.closeCite());
  const hd = $('.cw-h', cw);
  let dr = null;
  hd.addEventListener('pointerdown', e => {
    if (innerWidth <= 720 || e.target.closest('button')) return;
    const r = cw.getBoundingClientRect();
    dr = {dx: e.clientX - r.left, dy: e.clientY - r.top};
    hd.setPointerCapture(e.pointerId);
  });
  hd.addEventListener('pointermove', e => { if (!dr) return; placeCw(e.clientX - dr.dx, e.clientY - dr.dy); });
  const end = () => { if (dr) { dr = null; const r = cw.getBoundingClientRect(); cwPos = {x: r.left, y: r.top}; } };
  hd.addEventListener('pointerup', end); hd.addEventListener('pointercancel', end);
  addEventListener('resize', () => { if (cw.classList.contains('open') && innerWidth > 720) { const r = cw.getBoundingClientRect(); placeCw(r.left, r.top); } });
  cw.addEventListener('click', e => {
    const cp = e.target.closest('.cw-copy');
    if (cp) {
      const txt = cp.dataset.copy;
      const done = () => { cp.textContent = 'Cita copiada'; setTimeout(() => { cp.textContent = 'Copiar cita'; }, 1600); };
      try { navigator.clipboard.writeText(txt).then(done, done); } catch (err) { done(); }
    }
  });
}
function placeCw(x, y) {
  const w = cw.offsetWidth, h = cw.offsetHeight;
  x = Math.max(8, Math.min(innerWidth - w - 8, x));
  y = Math.max(8, Math.min(innerHeight - Math.min(h, 120) - 8, y));
  cw.style.left = x + 'px'; cw.style.top = y + 'px';
}
D.openCite = (key, opener) => {
  const c = typeof key === 'string' ? D.CITES[key] : key;
  if (!c) { D.toast(NB); return; }
  ensureCw();
  markOpener(null);
  cwOpener = opener || document.activeElement;
  markOpener(opener);
  $('#cw-k').textContent = c.forceKicker ? c.kicker : ['Glosario', 'Grado de autoridad', 'Escritura'].includes(c.kicker) ? c.kicker : (c.def && !c.quote ? 'Glosario' : 'Cita');
  let b = '';
  if (c.title) b += '<h3 class="h3" style="margin:0 0 10px">' + esc(c.title) + '</h3>';
  if (c.quote) b += '<p class="cw-q">' + esc(c.quote) + '</p>';
  if (c.def) b += '<p class="cw-def">' + c.def + '</p>';
  if (c.who || c.work) b += '<p class="cw-who">' + (c.who ? '<b>' + esc(c.who) + '</b>' : '') + (c.work ? '<span>' + esc(c.work + (c.loc ? ', ' + c.loc : '')) + '</span>' : '') + '</p>';
  if (c.date) b += '<p class="cw-date"><span>' + esc(c.dateLabel || 'Fecha') + '</span><b>' + esc(c.date) + '</b></p>' + (c.y ? mini(c.y, c.y2, c.span || [1, 2026, [1, 500, 1000, 1500, 2026]], c.mlab || c.date) : '');
  if (c.note) b += '<p class="pp-note" style="margin-top:12px">' + c.note + '</p>';
  let acts = '';
  if (c.reader) acts += '<button class="btn-go" type="button" data-reader="' + esc(c.reader) + '"' + (c.target ? ' data-target="' + esc(c.target) + '"' : '') + '>Abrir la fuente completa</button>';
  if (c.ext) acts += '<a class="btn-go ext" href="' + esc(c.ext.url) + '" target="_blank" rel="noopener">' + esc(c.ext.label) + '</a>';
  if (c.quote) acts += '<button class="cw-copy" type="button" data-copy="' + esc('«' + c.quote + '» ' + [c.who, c.work && (c.work + (c.loc ? ' ' + c.loc : '')), c.date].filter(Boolean).join(', ')) + '">Copiar cita</button>';
  if (acts) b += '<div class="cw-acts">' + acts + '</div>';
  $('.cw-b', cw).innerHTML = b;
  D.glue(cw);
  $('.cw-b', cw).scrollTop = 0;
  if (innerWidth > 720) {
    const remember = document.documentElement.getAttribute('data-pp-cwmem') !== 'no';
    if (!(remember && cwPos)) cwPos = {x: innerWidth - 400 - (innerWidth >= 900 ? 112 : 24), y: D.offset() + 40};
    cw.style.visibility = 'hidden'; cw.classList.add('open');
    placeCw(cwPos.x, cwPos.y);
    cw.style.visibility = '';
  } else { cw.classList.add('open'); cwScrim.classList.add('open'); }
  requestAnimationFrame(() => cw.focus({preventScroll: true}));
};
let openTrigger = null;
function markOpener(el) {
  if (openTrigger) { openTrigger.classList.remove('is-open'); openTrigger.removeAttribute('aria-expanded'); openTrigger = null; }
  if (el && el.matches && el.matches('[data-cite]')) { openTrigger = el; el.classList.add('is-open'); el.setAttribute('aria-expanded', 'true'); el.setAttribute('aria-haspopup', 'dialog'); }
}
D.closeCite = () => {
  if (!cw) return;
  markOpener(null);
  cw.classList.remove('open'); cwScrim.classList.remove('open');
  if (cwOpener && cwOpener.focus) cwOpener.focus({preventScroll: true});
};

/* dated source list: items {name, work, date, y, y2, desc, cite}; span [lo, hi, marks] shared by all rows */
D.sourceList = (el, items, span) => {
  el.classList.add('srcl');
  el.innerHTML = items.map(it => '<li data-fk="' + esc(it.name + ' ' + (it.work || '')) + '"><p class="srcl-n" style="margin:0">' + (it.cite ? '<button class="ln-side" type="button" data-cite="' + esc(it.cite) + '" style="font-weight:500">' + esc(it.name) + '</button>' : '<b>' + esc(it.name) + '</b>') + (it.work ? '<span>' + esc(it.work) + '</span>' : '') + '</p><p class="srcl-d" style="margin:0">' + esc(it.date) + '</p>' + (it.y ? mini(it.y, it.y2, span, it.y2 && it.y2 > it.y ? it.y + '–' + it.y2 : String(it.y)) : '<span></span>') + (it.desc ? '<p class="srcl-desc">' + it.desc + '</p>' : '') + '</li>').join('');
};

/* simulated full-text reader */
let rd, rdOpener = null;
D.openReader = (key, target) => {
  const r = D.READERS[key];
  if (!r) { D.toast(NB); return; }
  if (!rd) {
    rd = document.createElement('div');
    rd.className = 'rd'; rd.setAttribute('role', 'dialog'); rd.setAttribute('aria-modal', 'true'); rd.setAttribute('aria-label', 'Lector');
    document.body.appendChild(rd);
    rd.addEventListener('click', e => { if (e.target.closest('.rd-back')) D.closeReader(); });
  }
  rdOpener = document.activeElement;
  const tg = target || r.target;
  let h = '<div class="rd-bar"><button class="rd-back" type="button">' + ic.back + 'Volver a donde estabas</button></div><div class="rd-in">';
  h += '<p class="kicker">' + esc(r.kicker || 'Fuente') + '</p><h1 class="rd-t">' + esc(r.title) + '</h1><p class="rd-m">' + esc(r.meta || '') + '</p>';
  (r.sections || []).forEach(s => {
    if (s.h) h += '<p class="rd-ch">' + esc(s.h) + '</p>';
    s.paras.forEach(p => { h += '<p class="rd-p" data-n="' + esc(p.n) + '"><span class="dn">' + esc(p.n) + '</span>' + esc(p.t) + '</p>'; });
  });
  if (r.foot && r.foot.length) h += '<div class="rd-foot">' + r.foot.map(f => '<h2>' + esc(f.h) + '</h2><p>' + f.p + '</p>').join('') + '</div>';
  h += '</div>';
  rd.innerHTML = h;
  D.closeCite();
  rd.classList.add('open');
  document.documentElement.style.overflow = 'hidden';
  const el = tg ? rd.querySelector('.rd-p[data-n="' + CSS.escape(tg) + '"]') : null;
  requestAnimationFrame(() => {
    rd.scrollTop = el ? Math.max(0, el.offsetTop - 140) : 0;
    $('.rd-back', rd).focus({preventScroll: true});
    if (el) { el.classList.add('hl', 'was'); setTimeout(() => el.classList.remove('hl'), 1800); }
  });
};
D.closeReader = () => {
  if (!rd) return;
  rd.classList.remove('open');
  document.documentElement.style.overflow = '';
  if (rdOpener && rdOpener.focus) rdOpener.focus({preventScroll: true});
};

/* search (P1 component, DECISIONS 2026-10-06) */
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
let sx, sxSel = 0, sxRes = [];
function openSearch() {
  if (!sx) {
    sx = document.createElement('div');
    sx.className = 'sx'; sx.setAttribute('role', 'dialog'); sx.setAttribute('aria-modal', 'true'); sx.setAttribute('aria-label', 'Buscar');
    sx.innerHTML = '<div class="sx-box"><label class="sx-in">' + ic.search + '<span class="sr">Buscar</span><input type="search" placeholder="Buscar doctrinas, versículos, Padres, palabras" autocomplete="off"><span class="kbd">Esc</span></label><ul class="sx-list" role="listbox"></ul></div>';
    document.body.appendChild(sx);
    const inp = $('input', sx);
    inp.addEventListener('input', () => runSearch(inp.value));
    inp.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); sxSel = Math.max(0, Math.min(sxRes.length - 1, sxSel + (e.key === 'ArrowDown' ? 1 : -1))); paintSel(); }
      if (e.key === 'Enter' && sxRes[sxSel]) pick(sxRes[sxSel]);
    });
    sx.addEventListener('click', e => { if (e.target === sx) closeSearch(); const r = e.target.closest('.sx-r'); if (r) pick(sxRes[+r.dataset.i]); });
  }
  sx.classList.add('open');
  const inp = $('input', sx); inp.value = ''; runSearch('');
  setTimeout(() => inp.focus(), 0);
}
function closeSearch() { if (sx) { sx.classList.remove('open'); delete $('.sx-list', sx).dataset.opened; } }
function pick(r) { closeSearch(); if (r.go) D.go(r.go, r.hash); else D.toast(NB); }
function paintSel() { $$('.sx-r', sx).forEach((b, i) => b.classList.toggle('sel', i === sxSel)); }
function hl(text, q) {
  if (!q) return esc(text);
  const n = norm(text), i = n.indexOf(norm(q));
  if (i < 0) return esc(text);
  return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
}
function runSearch(q) {
  const list = $('.sx-list', sx);
  q = q.trim();
  const nq = norm(q);
  sxRes = (q ? D.SEARCH.filter(r => norm(r.t + ' ' + r.why).includes(nq)) : D.SEARCH.filter(r => r.recent)).slice(0, 8);
  sxSel = 0;
  const render = () => {list.innerHTML = (q ? '' : '<li class="sx-none" style="padding-bottom:4px">Recientes</li>') + (sxRes.length ? sxRes.map((r, i) => '<li><button class="sx-r" type="button" data-i="' + i + '"><span class="sx-t">' + hl(r.t, q) + '</span><span class="sx-p"><span>' + esc(r.path) + '</span>' + (r.date ? '<span class="num">' + esc(r.date) + '</span>' : '') + '</span>' + (r.why ? '<span class="sx-w">' + hl(r.why, q) + '</span>' : '') + '</button></li>').join('') : '<li class="sx-none">Nada coincide con «' + esc(q) + '» en esta propuesta.</li>'); };
  if (!q && !list.dataset.opened) { list.dataset.opened = '1'; render(); D.enter([...list.children], 0); } else D.flip(list, render);
  paintSel();
}
D.SEARCH.push(
  {t: 'La Eucaristía', path: 'Doctrinas', why: '¿Qué pasa con el pan y el vino en la Cena del Señor?', go: '02', recent: true},
  {t: 'Católica', path: 'Doctrinas / La Eucaristía', why: 'Cómo la Iglesia católica entiende la Eucaristía, con sus propias fuentes.', go: '03', recent: true},
  {t: 'Un solo sacrificio, una sola vez', path: 'La Eucaristía / Católica / Objeción', why: 'Si Cristo se ofreció una sola vez, la Misa no puede ser un sacrificio', go: '04', recent: true},
  {t: 'Ignacio de Antioquía', path: 'Historia / Padres', date: '† c. 108', why: '«la Eucaristía es la carne de nuestro Salvador Jesucristo»', go: '09', recent: true},
  {t: 'Lo que escribieron los primeros cristianos', path: 'Doctrinas / La Eucaristía', why: 'Testigos de los primeros siglos, en orden de fecha', go: '02', hash: 's-prim'},
  {t: 'Justino Mártir', path: 'Historia / Padres', date: '† c. 165', why: '«no tomamos estas cosas como pan común ni bebida común»'},
  {t: 'Ireneo de Lyon', path: 'Historia / Padres', date: '† c. 202', why: '«compuesta de dos realidades, terrena y celestial»'},
  {t: 'Docetismo', path: 'Historia / Herejías', why: 'Negaba la realidad de la carne de Cristo'},
  {t: 'Transubstanciación', path: 'Glosario', why: 'El cambio de toda la sustancia del pan y del vino'}
);

D.CITES['g-transub'] = {kicker: 'Glosario', title: 'Transubstanciación', def: 'El nombre que la Iglesia católica da al cambio de toda la sustancia del pan en el cuerpo de Cristo y de toda la sustancia del vino en su sangre; del pan y del vino quedan solo las especies, lo que se ve, se toca y se gusta.<br><br>«…por la consagracion del pan y del vino, se convierte toda la substancia del pan en la substancia del cuerpo de nuestro señor Jesu-Cristo, y toda la substancia del vino en la substancia de su sangre, cuya conversion ha llamado oportuna, y propiamente Transubstanciacion la santa Iglesia Católica.»', who: 'Concilio de Trento', work: 'ses. XIII, cap. 4', date: '11 de octubre de 1551', y: 1551};

/* locators never break before their number: «homilía 1, 6», «nn. 1085, 1364» */
const GLUE = '.dch-l, .fq figcaption, .srcl-n > span, .wa .ln-side, .ob-src .ln-side, .pas-r a, .pas-n, .cw-who, .esc-t, .obj-s, .qe-line';
D.glue = root => (root || document).querySelectorAll(GLUE).forEach(el => {
  const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  for (let n = w.nextNode(); n; n = w.nextNode()) if (/ (?=\d)/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/ (?=\d)/g, '\u00a0');
});

/* boot */
buildChrome();
document.addEventListener('DOMContentLoaded', () => {
  buildPP();
  $$('[data-fp]').forEach(el => { const d = D.FP[el.dataset.fp]; if (d) D.fingerprint(el, d, {onPick: D.FPPICK[el.dataset.fp], label: el.dataset.fpLabel}); });
  buildPageRuler();
  D.glue();
  if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => D.scrollToEl(t), 60); }
  if (inFrame) parent.postMessage({dz: 'ready', page: document.body.dataset.page}, '*');
});
})();

/* entrances (DECISIONS 2026-10-21): «Título» on every page, page fade on, lists like sura-clon's RevealList */
(() => {
  const html = document.documentElement;
  const still = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const HEAD = ':scope > :is(#top, .hd-crumbs, .hd, .ob-head, .ig-head, .obx-head)';
  const LISTS = '.ct-l, .du-l, .wr-l, .ob-l, .wl, #cn, #esc-list, .obj-list, .vl, .srcl, .pas, .dch, .rec, .qe-list, .cv-list, .ans-l, .cg-side, .pt-t tbody, .pm-a, .fq, .gr tbody, .qf-d, .ob-own';
  const EASE_OUT = 'cubic-bezier(0.33, 1, 0.68, 1)';
  const REVEAL = {ease: 'cubic-bezier(0.22, 1, 0.36, 1)', ms: 420, step: 60, shift: '8px'};
  const FLIP = {move: 380, exit: 180, delay: 120, stagger: 40, steps: 8};
  const shown = el => el.getClientRects().length > 0;
  const play = (el, from, ms, easing, delay) => {
    el.classList.remove('ent-h');
    return el.animate([Object.assign({offset: 0}, from)], {duration: ms, easing, delay, fill: 'backwards'});
  };
  D.titleFade = (els, base) => els.forEach((el, i) => play(el, {opacity: .001}, 700, EASE_OUT, (base || 0) + i * 80));
  D.pageFade = el => { if (!still()) el.animate([{opacity: .001, offset: 0}], {duration: 220, easing: 'ease-out'}); };
  D.headOf = main => [...main.querySelectorAll(HEAD)].flatMap(c => [...c.children]).filter(shown);

  const keyOf = el => el.dataset.fk || el.dataset.id || el.id || ((el.querySelector('a[href^="http"]') || {}).href) || el.textContent.trim().slice(0, 80);
  const measure = list => {
    const o = list.getBoundingClientRect();
    const nodes = new Map(), boxes = new Map();
    [...list.children].forEach(c => {
      if (!(c instanceof HTMLElement) || !shown(c)) return;
      const b = c.getBoundingClientRect(), k = keyOf(c);
      nodes.set(k, c); boxes.set(k, {x: b.left - o.left, y: b.top - o.top, w: b.width, h: b.height});
    });
    return {nodes, boxes, height: o.height};
  };
  const cancelFlips = el => el.getAnimations({subtree: true}).forEach(a => { if (a.id === 'flip') a.cancel(); });
  const ghostsOf = list => {
    if (list.parentElement && list.parentElement.classList.contains('flip-wrap')) return list.parentElement.querySelector(':scope > .flip-ghosts');
    const wrap = document.createElement('div'); wrap.className = 'flip-wrap';
    list.before(wrap); wrap.append(list);
    const g = document.createElement('div'); g.className = 'flip-ghosts'; g.setAttribute('aria-hidden', 'true');
    wrap.append(g);
    return g;
  };
  D.enter = (els, base) => {
    els.forEach(el => { if (el.dataset && el.dataset.rv) delete el.dataset.rv; });
    if (still()) return;
    els.filter(shown).forEach((el, i) => el.animate([{opacity: 0, transform: 'translateY(' + REVEAL.shift + ')'}, {opacity: 1, transform: 'none'}], {duration: REVEAL.ms, delay: (base == null ? FLIP.delay : base) + Math.min(i, FLIP.steps) * FLIP.stagger, easing: REVEAL.ease, fill: 'backwards', id: 'flip'}));
  };
  D.flip = (list, mutate) => {
    if (!list || still()) { mutate(); return; }
    cancelFlips(list);
    [...list.children].forEach(c => { if (c.dataset && c.dataset.rv === 'shown') delete c.dataset.rv; });
    const before = measure(list);
    const armed = new Set([...before.nodes].filter(([, n]) => n.dataset.rv === 'armed').map(([k]) => k));
    mutate();
    const after = measure(list);
    const ghosts = ghostsOf(list);
    const lo = list.getBoundingClientRect(), go = ghosts.getBoundingClientRect();
    for (const [k, node] of before.nodes) {
      if (after.nodes.has(k)) continue;
      const b = before.boxes.get(k);
      const g = node.cloneNode(true);
      g.removeAttribute('id'); g.querySelectorAll('[id]').forEach(n => n.removeAttribute('id'));
      Object.assign(g.style, {position: 'absolute', left: (b.x + lo.left - go.left) + 'px', top: (b.y + lo.top - go.top) + 'px', width: b.w + 'px', height: b.h + 'px', margin: '0'});
      ghosts.append(g);
      g.animate([{opacity: 1}, {opacity: 0, transform: 'scale(0.96)'}], {duration: FLIP.exit, easing: 'ease-out', fill: 'forwards'}).finished.then(() => g.remove(), () => g.remove());
    }
    let n = 0;
    for (const [k, node] of after.nodes) {
      const from = before.boxes.get(k);
      if (!from) {
        if (list._arm && node.getBoundingClientRect().top > innerHeight * .85) { list._arm(node); continue; }
        node.animate([{opacity: 0, transform: 'translateY(' + REVEAL.shift + ')'}, {opacity: 1, transform: 'none'}], {duration: REVEAL.ms, delay: FLIP.delay + Math.min(n++, FLIP.steps) * FLIP.stagger, easing: REVEAL.ease, fill: 'backwards', id: 'flip'});
        continue;
      }
      if (armed.has(k) && list._arm && node.dataset.rv !== 'armed' && node.getBoundingClientRect().top > innerHeight * .85) { list._arm(node); continue; }
      const to = after.boxes.get(k), dx = from.x - to.x, dy = from.y - to.y;
      if (Math.abs(dx) > .5 || Math.abs(dy) > .5) node.animate([{transform: 'translate(' + dx + 'px, ' + dy + 'px)'}, {transform: 'none'}], {duration: FLIP.move, easing: REVEAL.ease, id: 'flip'});
    }
    if (Math.abs(after.height - before.height) > 1) {
      const shrinking = after.height < before.height;
      list.animate([{height: before.height + 'px'}, {height: after.height + 'px'}], {duration: FLIP.move, easing: REVEAL.ease, delay: shrinking ? FLIP.exit : 0, fill: 'backwards', id: 'flip'});
    }
  };
  const reveal = list => {
    if (!('IntersectionObserver' in window) || still()) return;
    const items = [...list.children].filter(shown);
    if (!items.length) return;
    list.dataset.reveal = 'on';
    const io = new IntersectionObserver(entries => {
      const hits = [];
      entries.forEach(e => {
        const el = e.target;
        if (!el.dataset.rvSeen) {
          el.dataset.rvSeen = '1';
          if (e.isIntersecting) io.unobserve(el); else el.dataset.rv = 'armed';
          return;
        }
        if (e.isIntersecting && el.dataset.rv === 'armed') { io.unobserve(el); hits.push(el); }
      });
      hits.sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1).forEach((el, i) => {
        el.style.setProperty('--reveal-index', i);
        el.dataset.rv = 'shown';
        setTimeout(() => { if (el.dataset.rv === 'shown') delete el.dataset.rv; }, REVEAL.ms + i * REVEAL.step + 60);
      });
    }, {rootMargin: '0px 0px -15% 0px'});
    items.forEach(el => io.observe(el));
    list._arm = el => { el.dataset.rvSeen = '1'; el.dataset.rv = 'armed'; io.observe(el); };
  };
  D.revealLists = root => (root || document).querySelectorAll('.main ' + LISTS.split(', ').join(', .main ')).forEach(l => { if (!l.closest('.pp-after, .pp, [hidden]') && shown(l) && !l.dataset.reveal) reveal(l); });

  const run = () => {
    const main = document.querySelector('.main');
    if (!main) return;
    if (still() || html.dataset.ent === 'none') { main.classList.add('ent-ready'); return; }
    D.pageFade(main);
    const head = D.headOf(main);
    head.forEach(el => el.classList.add('ent-h'));
    main.classList.add('ent-ready');
    D.revealLists(main);
    const fontsIn = !document.fonts || !document.fonts.load ? Promise.resolve() : Promise.race([Promise.all(['300 1em Newsreader', 'italic 300 1em Newsreader', '300 1em "Source Serif 4"', '400 1em "Work Sans"'].map(f => document.fonts.load(f))).catch(() => {}), new Promise(r => setTimeout(r, 800))]);
    fontsIn.then(() => requestAnimationFrame(() => D.titleFade(head, 0)));
  };
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', run); else run();
})();

/* smooth scroll for the reader's wheel (docs/research/smooth-scroll.md): Lenis, lerp per preset, touch stays native */
(() => {
  const SRC = 'https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js';
  const LERP = {apenas: .3, sutil: .18, notable: .1};
  let loading = null;
  const load = () => loading || (loading = new Promise((res, rej) => { const s = document.createElement('script'); s.src = SRC; s.onload = res; s.onerror = rej; document.head.appendChild(s); }));
  const apply = () => {
    const v = D.x('scroll'), lerp = LERP[v];
    if (D.lenis) { D.lenis.destroy(); D.lenis = null; }
    if (!lerp || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    load().then(() => {
      if (D.x('scroll') !== v || D.lenis || !window.Lenis) return;
      D.lenis = new window.Lenis({autoRaf: true, smoothWheel: true, syncTouch: false, wheelMultiplier: 1, lerp, anchors: false, stopInertiaOnNavigate: true, allowNestedScroll: false, prevent: n => !!(n.closest && n.closest('.sb, .cw, .rd, .sx, .tsw ul, .edp-p, .rp'))});
    }, () => {});
  };
  addEventListener('x', e => { if (e.detail.key === 'scroll') apply(); });
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', apply); else apply();
})();
