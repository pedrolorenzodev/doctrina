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
const SCREENS = {'02': 's02.html', '03': 's03.html', '04': 's04.html', '09': 's09.html'};

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

/* theme and texture */
const tex = (freq, scale, elev) => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420"><filter id="n" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + freq + '" numOctaves="4" seed="7" stitchTiles="stitch" result="t"/><feDiffuseLighting in="t" lighting-color="#ffffff" surfaceScale="' + scale + '" diffuseConstant="1"><feDistantLight azimuth="235" elevation="' + elev + '"/></feDiffuseLighting></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>';
  return 'url("data:image/svg+xml;utf8,' + encodeURIComponent(svg) + '")';
};
const TEX = {light: tex(0.85, 1.6, 62), dark: tex(0.7, 2.6, 52)};
D.setTheme = (m, fromUi) => {
  if (m !== 'light' && m !== 'dark') return;
  document.documentElement.dataset.theme = m;
  document.documentElement.style.setProperty('--tex', TEX[m]);
  const b = $('#theme-b');
  if (b) { b.innerHTML = m === 'dark' ? ic.sun : ic.moon; b.setAttribute('aria-label', m === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'); }
  store.set('theme', m);
  if (fromUi && inFrame) parent.postMessage({dz: 'theme', theme: m}, '*');
};
const qs = new URLSearchParams(location.search);
D.setTheme(qs.get('theme') || store.get('theme', 'dark'));
addEventListener('message', e => {
  const d = e.data || {};
  if (d.dz === 'theme') D.setTheme(d.theme);
  if (d.dz === 'pp') D.setPP(d.key, d.value);
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
D.scrollToY = (y, onDone) => {
  cancelAnimationFrame(scrollRaf);
  const max = document.documentElement.scrollHeight - innerHeight;
  y = Math.max(0, Math.min(max, y));
  const y0 = scrollY, dy = y - y0;
  if (reduce() || Math.abs(dy) < 2) { scrollTo(0, y); onDone && onDone(); return; }
  const dur = Math.min(720, 380 + Math.abs(dy) * 0.08);
  const t0 = performance.now();
  const stop = () => { cancelAnimationFrame(scrollRaf); removeEventListener('wheel', stop); removeEventListener('touchstart', stop); };
  addEventListener('wheel', stop, {passive: true, once: true});
  addEventListener('touchstart', stop, {passive: true, once: true});
  const step = now => {
    const p = Math.min(1, (now - t0) / dur);
    scrollTo(0, y0 + dy * easeIO(p));
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
const OBJ = [
  ['ob1', 'Un solo sacrificio, una sola vez', '04'],
  ['ob2', 'Lo consagrado sigue siendo pan'],
  ['ob3', 'Guardar y adorar la hostia'],
  ['ob4', 'El cáliz y los laicos'],
  ['ob5', 'Misas privadas y por los difuntos'],
  ['ob6', 'La invocación del Espíritu Santo'],
  ['ob7', 'El pan ázimo']
];
const FATHERS = [["clement-of-rome", "Clemente de Roma"], ["didache", "Didajé (Enseñanza de los Doce Apóstoles)"], ["ignatius-of-antioch", "Ignacio de Antioquía"], ["papias-of-hierapolis", "Papías de Hierápolis"], ["epistle-of-barnabas", "Epístola de Bernabé"], ["shepherd-of-hermas", "El Pastor de Hermas"], ["epistle-to-diognetus", "Carta a Diogneto"], ["polycarp-of-smyrna", "Policarpo de Esmirna"], ["justin-martyr", "Justino Mártir"], ["melito-of-sardis", "Melitón de Sardes"], ["theophilus-of-antioch", "Teófilo de Antioquía"], ["irenaeus-of-lyon", "Ireneo de Lyon"], ["clement-of-alexandria", "Clemente de Alejandría"], ["tertullian", "Tertuliano"], ["hippolytus-of-rome", "Hipólito de Roma"], ["origen", "Orígenes"], ["cyprian-of-carthage", "Cipriano de Cartago"], ["novatian", "Novaciano"], ["dionysius-of-alexandria", "Dionisio de Alejandría"], ["methodius-of-olympus", "Metodio de Olimpo"], ["lactantius", "Lactancio"], ["eusebius-of-caesarea", "Eusebio de Cesarea"], ["aphrahat", "Afraates, el Sabio Persa"], ["hilary-of-poitiers", "Hilario de Poitiers"], ["athanasius-of-alexandria", "Atanasio de Alejandría"], ["ephrem-the-syrian", "Efrén de Siria"], ["basil-of-caesarea", "Basilio de Cesarea (Basilio Magno)"], ["cyril-of-jerusalem", "Cirilo de Jerusalén"], ["gregory-of-nazianzus", "Gregorio Nacianceno"], ["gregory-of-nyssa", "Gregorio de Nisa"], ["ambrose-of-milan", "Ambrosio de Milán"], ["optatus-of-milevis", "Optato de Milevi"], ["didymus-the-blind", "Dídimo el Ciego"], ["epiphanius-of-salamis", "Epifanio de Salamina"], ["john-chrysostom", "Juan Crisóstomo"], ["rufinus-of-aquileia", "Rufino de Aquilea"], ["jerome", "Jerónimo de Estridón"], ["augustine-of-hippo", "Agustín de Hipona"], ["john-cassian", "Juan Casiano"], ["cyril-of-alexandria", "Cirilo de Alejandría"], ["vincent-of-lerins", "Vicente de Lérins"], ["peter-chrysologus", "Pedro Crisólogo"], ["prosper-of-aquitaine", "Próspero de Aquitania"], ["theodoret-of-cyrrhus", "Teodoreto de Ciro"], ["leo-the-great", "León Magno"], ["pseudo-dionysius", "Pseudo-Dionisio Areopagita (Corpus Areopagiticum)"], ["caesarius-of-arles", "Cesáreo de Arlés"], ["gregory-the-great", "Gregorio Magno"], ["isidore-of-seville", "Isidoro de Sevilla"], ["sophronius-of-jerusalem", "Sofronio de Jerusalén"], ["maximus-the-confessor", "Máximo el Confesor"], ["isaac-of-nineveh", "Isaac de Nínive (Isaac el Sirio)"], ["bede", "Beda el Venerable"], ["andrew-of-crete", "Andrés de Creta"], ["germanus-of-constantinople", "Germán I de Constantinopla"], ["john-of-damascus", "Juan Damasceno"]];
const TREE = [
  {h: 'Doctrinas', kids: [
    {id: 'eu', label: 'La Eucaristía', go: '02', kids: [
      {id: 'eu-cat', label: 'Católica', go: '03', kids: [
        {id: 'eu-cat-pas', label: 'Pasajes'},
        {id: 'eu-cat-obs', label: 'Objeciones', go: '03', hash: 'objeciones', kids: OBJ.map(o => ({id: 'eu-cat-' + o[0], label: o[1], go: o[2]}))}
      ]},
      {id: 'eu-ort', label: 'Ortodoxa'}, {id: 'eu-lut', label: 'Luterana'}, {id: 'eu-ref', label: 'Reformada'}, {id: 'eu-bau', label: 'Bautista'}
    ]},
    {id: 'ba', label: 'El bautismo'}, {id: 'ju', label: 'La justificación'}, {id: 'pa', label: 'El papado'}, {id: 'ss', label: 'Sola Scriptura'}
  ]},
  {h: 'Biblia', kids: [
    {id: 'at', label: 'Antiguo Testamento'}, {id: 'dc', label: 'Libros deuterocanónicos'}, {id: 'nt', label: 'Nuevo Testamento'}
  ]},
  {h: 'Historia', kids: [
    {id: 'tl', label: 'Línea de tiempo'},
    {id: 'fa', label: 'Padres', n: FATHERS.length, kids: FATHERS.map(f => ({id: f[0] === 'ignatius-of-antioch' ? 'ig' : 'fa-' + f[0], label: f[1], go: f[0] === 'ignatius-of-antioch' ? '09' : null}))},
    {id: 'co', label: 'Concilios', n: 41}, {id: 'he', label: 'Herejías', n: 18}, {id: 'di', label: 'Divisiones', n: 10}, {id: 're', label: 'Reforma y ramas', n: 20}
  ]},
  {h: 'Consulta', kids: [{id: 'gl', label: 'Glosario'}, {id: 'fu', label: 'Fuentes'}]}
];
const parentOf = {};
(function walk(nodes, p) { nodes.forEach(n => { if (n.id) parentOf[n.id] = p; if (n.kids) walk(n.kids, n.id || p); }); })(TREE, null);
const trailOf = id => { const t = []; let c = parentOf[id]; while (c) { t.push(c); c = parentOf[c]; } return t; };

function buildTree(cur) {
  const visited = store.get('visited', []);
  if (!visited.includes(cur)) { visited.push(cur); store.set('visited', visited); }
  const open = new Set();
  visited.forEach(v => { trailOf(v).forEach(t => open.add(t)); open.add(v); });
  const trail = new Set(trailOf(cur));
  const node = n => {
    const has = !!(n.kids && n.kids.length);
    const isOpen = has && open.has(n.id);
    const href = n.go ? SCREENS[n.go] + (n.hash ? '#' + n.hash : '') : '#';
    return '<li data-id="' + n.id + '"><div class="sb-row' + (n.id === cur ? ' cur' : '') + (trail.has(n.id) ? ' trail' : '') + '">' +
      (has ? '<button class="sb-tw" type="button" aria-expanded="' + isOpen + '" aria-label="' + (isOpen ? 'Contraer ' : 'Expandir ') + esc(n.label) + '">' + ic.chev + '</button>' : '<span class="sb-tw nil"></span>') +
      '<a class="sb-a" href="' + href + '"' + (n.go ? ' data-go="' + n.go + '"' + (n.hash ? ' data-hash="' + n.hash + '"' : '') : ' data-nb') + (n.id === cur ? ' aria-current="page"' : '') + '><span>' + esc(n.label) + '</span>' + (n.n ? '<span class="n">' + n.n + '</span>' : '') + '</a></div>' +
      (has ? '<ul' + (isOpen ? '' : ' hidden') + '>' + n.kids.map(node).join('') + '</ul>' : '') + '</li>';
  };
  return '<div class="sb-tools"><button class="sb-collapse" type="button">Contraer todo menos dónde estoy</button></div>' +
    TREE.map(g => '<div class="sb-g"><p class="sb-h">' + g.h + '</p><ul>' + g.kids.map(node).join('') + '</ul></div>').join('');
}
function wireTree(sb, cur) {
  sb.addEventListener('click', e => {
    const tw = e.target.closest('.sb-tw:not(.nil)');
    if (tw) {
      const ul = tw.closest('li').querySelector(':scope > ul');
      const op = tw.getAttribute('aria-expanded') !== 'true';
      tw.setAttribute('aria-expanded', String(op));
      tw.setAttribute('aria-label', (op ? 'Contraer ' : 'Expandir ') + tw.closest('li').querySelector('.sb-a span').textContent);
      ul.hidden = !op;
      return;
    }
    if (e.target.closest('.sb-collapse')) {
      const keep = new Set(trailOf(cur));
      $$('.sb-tw:not(.nil)', sb).forEach(b => { const id = b.closest('li').dataset.id; const op = keep.has(id); b.setAttribute('aria-expanded', String(op)); b.closest('li').querySelector(':scope > ul').hidden = !op; });
      store.set('visited', [cur]);
    }
  });
  requestAnimationFrame(() => { const c = $('.sb-row.cur', sb); if (c) sb.scrollTop = Math.max(0, c.offsetTop - sb.clientHeight * .35); });
}

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
  sb.className = 'sb'; sb.id = 'sb'; sb.setAttribute('aria-label', 'Índice del sitio');
  sb.innerHTML = buildTree(cur);
  const scrim = document.createElement('div');
  scrim.className = 'sb-scrim';
  main.before(top);
  main.before(frame);
  frame.append(sb, main);
  document.body.append(scrim);
  wireTree(sb, cur);
  D.setTheme(document.documentElement.dataset.theme);
  const mb = $('.menu-b', top);
  const setSb = op => { sb.classList.toggle('open', op); scrim.classList.toggle('open', op); mb.setAttribute('aria-expanded', String(op)); if (op) { const c = $('.sb-row.cur', sb); if (c) sb.scrollTop = Math.max(0, c.offsetTop - sb.clientHeight * .35); } };
  mb.addEventListener('click', () => setSb(!sb.classList.contains('open')));
  scrim.addEventListener('click', () => setSb(false));
  $('#theme-b').addEventListener('click', () => D.setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true));
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
  function drawList() {
    const shown = W.filter(inWin);
    list.innerHTML = shown.length ? shown.map(w => '<li class="wi" data-id="' + w.id + '" id="w-' + w.id + '"><div class="wd">' + esc(w.d) + '</div><div><p class="quote">' + esc(w.q) + '</p><p class="wa"><span class="who">' + esc(w.a) + '</span><br><button class="ln-side" type="button" data-cite="w:' + w.id + '">' + esc(w.w + ', ' + w.l) + '</button></p></div></li>').join('') : '<li class="lr-empty">Ningún testigo de estos años en esta doctrina.</li>';
    status.innerHTML = win ? (shown.length + ' de ' + W.length + ' testigos, años ' + win[0] + ' a ' + win[1] + ' <button class="lr-reset" type="button">Mostrar todos</button>') : W.length + ' testigos. Arrastra sobre la regla para elegir años.';
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
    $$('.wi', list).forEach(li => li.classList.add('in'));
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
  cwOpener = opener || document.activeElement;
  $('#cw-k').textContent = ['Glosario', 'Grado de autoridad', 'Escritura'].includes(c.kicker) ? c.kicker : (c.def && !c.quote ? 'Glosario' : 'Cita');
  let b = '';
  if (c.title) b += '<h3 class="h3" style="margin:0 0 10px">' + esc(c.title) + '</h3>';
  if (c.quote) b += '<p class="cw-q">' + esc(c.quote) + '</p>';
  if (c.def) b += '<p class="cw-def">' + c.def + '</p>';
  if (c.who || c.work) b += '<p class="cw-who">' + (c.who ? '<b>' + esc(c.who) + '</b>' : '') + (c.work ? '<span>' + esc(c.work + (c.loc ? ', ' + c.loc : '')) + '</span>' : '') + '</p>';
  if (c.date) b += '<p class="cw-date"><span>Fecha</span><b>' + esc(c.date) + '</b></p>' + (c.y ? mini(c.y, c.y2, [1, 2026, [1, 500, 1000, 1500, 2026]], c.date) : '');
  if (c.note) b += '<p class="pp-note" style="margin-top:12px">' + c.note + '</p>';
  let acts = '';
  if (c.reader) acts += '<button class="btn-go" type="button" data-reader="' + esc(c.reader) + '"' + (c.target ? ' data-target="' + esc(c.target) + '"' : '') + '>Abrir la fuente completa</button>';
  if (c.ext) acts += '<a class="btn-go ext" href="' + esc(c.ext.url) + '" target="_blank" rel="noopener">' + esc(c.ext.label) + '</a>';
  if (c.quote) acts += '<button class="cw-copy" type="button" data-copy="' + esc('«' + c.quote + '» ' + [c.who, c.work && (c.work + (c.loc ? ' ' + c.loc : '')), c.date].filter(Boolean).join(', ')) + '">Copiar cita</button>';
  if (acts) b += '<div class="cw-acts">' + acts + '</div>';
  $('.cw-b', cw).innerHTML = b;
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
D.closeCite = () => {
  if (!cw) return;
  cw.classList.remove('open'); cwScrim.classList.remove('open');
  if (cwOpener && cwOpener.focus) cwOpener.focus({preventScroll: true});
};

/* dated source list: items {name, work, date, y, y2, desc, cite}; span [lo, hi, marks] shared by all rows */
D.sourceList = (el, items, span) => {
  el.classList.add('srcl');
  el.innerHTML = items.map(it => '<li><p class="srcl-n" style="margin:0">' + (it.cite ? '<button class="ln-side" type="button" data-cite="' + esc(it.cite) + '" style="font-weight:500">' + esc(it.name) + '</button>' : '<b>' + esc(it.name) + '</b>') + (it.work ? '<span>' + esc(it.work) + '</span>' : '') + '</p><p class="srcl-d" style="margin:0">' + esc(it.date) + '</p>' + (it.y ? mini(it.y, it.y2, span, it.date) : '<span></span>') + (it.desc ? '<p class="srcl-desc">' + it.desc + '</p>' : '') + '</li>').join('');
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
function closeSearch() { if (sx) sx.classList.remove('open'); }
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
  list.innerHTML = (q ? '' : '<li class="sx-none" style="padding-bottom:4px">Recientes</li>') + (sxRes.length ? sxRes.map((r, i) => '<li><button class="sx-r" type="button" data-i="' + i + '"><span class="sx-t">' + hl(r.t, q) + '</span><span class="sx-p"><span>' + esc(r.path) + '</span>' + (r.date ? '<span class="num">' + esc(r.date) + '</span>' : '') + '</span>' + (r.why ? '<span class="sx-w">' + hl(r.why, q) + '</span>' : '') + '</button></li>').join('') : '<li class="sx-none">Nada coincide con «' + esc(q) + '» en esta propuesta.</li>');
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

/* boot */
buildChrome();
document.addEventListener('DOMContentLoaded', () => {
  buildPP();
  $$('[data-fp]').forEach(el => { const d = D.FP[el.dataset.fp]; if (d) D.fingerprint(el, d, {onPick: D.FPPICK[el.dataset.fp], label: el.dataset.fpLabel}); });
  buildPageRuler();
  if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => D.scrollToEl(t), 60); }
  if (inFrame) parent.postMessage({dz: 'ready', page: document.body.dataset.page}, '*');
});
})();
