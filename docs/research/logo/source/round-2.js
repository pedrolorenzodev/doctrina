const V2 = __VARIANTS2__;
const GROUPS2 = [
  ['control', 'Controles', 'Para medir contra algo: lo que ya viste y la diple tal como está en el manuscrito.'],
  ['sign', 'El signo', 'Cambia el dibujo. Casi todas van sobre el mismo cuadrado de esquinas rectas, así que se compara el signo y no el envase (C0, V3 y V11 conservan el cuadrado redondeado de D3 para aislar el signo).'],
  ['container', 'El contenedor', 'Cambia el envase. El signo es el mismo (las cuñas; en V15 la diple).']
];
const CW2 = { ink: { n: 'Tinta', T: '#1c1713', F: '#e8e5de', H: '#e8e5de' }, paper: { n: 'Papel', T: '#e8e5de', F: '#1c1713', H: '#1c1713' } };
const st2 = { cw: 'ink', sel: 'V3' };
const by2 = Object.fromEntries(V2.map(v => [v.id, v]));
const bbCache = {};

function svg2(v, px, o = {}) {
  const c = v.fixed || CW2[st2.cw];
  const body = v.body.replace(/\{([TFH])\}/g, (_, k) => c[k]);
  let tile = '';
  if (!v.selfTile) {
    if (o.full) tile = `<rect width="32" height="32" fill="${c.T}"/>`;
    else if (v.cont === 'circle') tile = `<circle cx="16" cy="16" r="16" fill="${c.T}"/>`;
    else tile = `<rect width="32" height="32" rx="${{ ios: 7, sharp: 0, soft: 1.5 }[v.cont]}" fill="${c.T}"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${px}" height="${px}" aria-hidden="true">${tile}${body}</svg>`;
}
const mk2 = (id, px, o) => `<span class="mk">${svg2(by2[id], px, o)}</span>`;

function bbox(v) {
  if (bbCache[v.id]) return bbCache[v.id];
  const body = v.selfTile ? v.body.replace(/\{T\}/g, '#000').replace(/\{[FH]\}/g, '#fff') : v.body.replace(/\{[FH]\}/g, '#000');
  const holder = document.createElement('div');
  holder.style.cssText = 'position:absolute;visibility:hidden;width:0;height:0;overflow:hidden';
  holder.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g>${body}</g></svg>`;
  document.body.appendChild(holder);
  const b = holder.querySelector('g').getBBox();
  holder.remove();
  const pad = v.selfTile ? 0 : 1.2;
  return (bbCache[v.id] = [b.x - pad, b.y - pad, b.width + 2 * pad, b.height + 2 * pad].map(n => +n.toFixed(2)));
}
function bare(v, th, h) {
  const bg = th === 'dark' ? '#1d1d1c' : '#e8e5de';
  const body = v.selfTile ? v.body.replace(/\{T\}/g, 'currentColor').replace(/\{[FH]\}/g, bg) : v.body.replace(/\{[FH]\}/g, 'currentColor');
  const bb = bbox(v);
  const w = (h * bb[2] / bb[3]).toFixed(1);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${bb.join(' ')}" width="${w}" height="${h}" aria-hidden="true">${body}</svg>`;
}

function render2() {
  document.querySelectorAll('[data-v2]').forEach(el => { el.innerHTML = svg2(by2[el.dataset.v2], +el.dataset.px, { full: el.dataset.full === '1' }); });
  renderStage2();
  document.querySelectorAll('#r2-cw-group .opt').forEach(b => b.setAttribute('aria-pressed', b.dataset.r2cw === st2.cw));
  document.querySelectorAll('.pick2').forEach(b => b.setAttribute('aria-pressed', b.dataset.id === st2.sel));
}

function strip2(theme) {
  const t = [
    ['act', mk2(st2.sel, 16), 'Eucaristía — Doctrina'],
    ['', mk2(st2.sel, 16), 'Juan 6 — Doctrina'],
    ['', nb[0], 'Receta de pan'],
    ['', nb[1], 'Mapa del barrio'],
    ['', nb[2], 'Vuelos a Madrid']
  ];
  return `<div class="tabstrip ${theme}">${t.map(([a, i, n]) => `<div class="tab ${a}">${i}<span class="t">${n}</span>${a ? '<span class="x">×</span>' : ''}</div>`).join('')}</div><div class="tabbody ${theme}"></div>`;
}

function drawZooms() {
  document.querySelectorAll('canvas[data-zoom]').forEach(cv => {
    const v = by2[cv.dataset.zoom], px = +cv.dataset.px, bg = cv.dataset.bg;
    const img = new Image();
    img.onload = () => { const x = cv.getContext('2d'); x.fillStyle = bg; x.fillRect(0, 0, px, px); x.drawImage(img, 0, 0, px, px); };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg2(v, px));
  });
}

function renderStage2() {
  const v = by2[st2.sel];
  $('#r2-picked-name').textContent = v.name;
  $('#r2-picked-id').textContent = v.id + (v.fixed ? ' · fuera de la paleta' : '');
  const menu = `<span class="menu"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></span>`;
  const hdrCol = th => `<div class="hdr-col th-${th}"><p class="tag">Tema ${th === 'light' ? 'claro' : 'oscuro'}</p>
      <div class="hdr">${menu}<span class="lg">Doctrina</span></div><p class="cap">Hoy</p>
      <div class="hdr">${menu}<span class="lock" style="gap:9px">${bare(v, th, 15.5)}<span class="lg">Doctrina</span></span></div><p class="cap">a · Marca a la altura de la mayúscula, suelta</p>
      <div class="hdr">${menu}<span class="lg">${bare(v, th, 9.8).replace('<svg ', '<svg style="vertical-align:baseline;margin-right:5px" ')}Doctrina</span></div><p class="cap">b · Como puntuación, a la altura de la x</p>
      <div class="hdr">${menu}${bare(v, th, 26)}</div><p class="cap">c · Solo la marca, para teléfonos angostos</p></div>`;
  const sizes = [16, 32, 48, 64];
  const tabs = th => `<div class="sz"><div class="pad" style="background:${th === 'light' ? '#dee1e6' : '#35363a'};display:flex;gap:18px;align-items:flex-end">${sizes.map(s => mk2(st2.sel, s)).join('')}</div><span>16, 32, 48 y 64 px, pestaña ${th === 'light' ? 'clara' : 'oscura'}</span></div>`;
  const z = (px, scale, bg, label) => `<div class="zc"><canvas data-zoom="${v.id}" data-px="${px}" data-bg="${bg}" width="${px}" height="${px}" style="width:${px * scale}px;height:${px * scale}px"></canvas><span>${label}</span></div>`;
  $('#r2-stage').innerHTML = `
    <div class="st"><h3>Pestañas</h3><p class="sub">Entre otras pestañas abiertas, 16 px, sin fondo agregado por el navegador.</p>
      <div class="cols"><div>${strip2('light')}<p class="cap">Chrome, claro</p></div><div>${strip2('dark')}<p class="cap">Chrome, oscuro</p></div></div></div>
    <div class="st"><h3>Como lo dibuja la pantalla</h3><p class="sub">Los píxeles reales, ampliados. Tu Mac (2×) dibuja la pestaña a 32 px: ahí se ve la mano del dibujo. A 1× son 16 px y todo es un chevrón.</p>
      <div class="zooms">${z(32, 5, '#dee1e6', '32 px (2×), pestaña clara, ampliado 5×')}${z(32, 5, '#35363a', '32 px (2×), pestaña oscura')}${z(16, 8, '#dee1e6', '16 px (1×), pestaña clara, ampliado 8×')}${z(16, 8, '#35363a', '16 px (1×), pestaña oscura')}</div></div>
    <div class="st"><h3>Tamaños reales</h3><div class="sizes">${tabs('light')}${tabs('dark')}<div class="sz"><div class="pad" style="background:var(--panel)">${mk2(st2.sel, 180, { full: true })}</div><span>180 px, opaco (iOS rellena la transparencia con negro)</span></div></div></div>
    <div class="st"><h3>Recortes</h3><p class="sub">Google muestra el favicon en un círculo; Android e iOS recortan el ícono de la pantalla de inicio. El círculo punteado es la zona segura de un ícono adaptable.</p>
      <div class="crops">
        <div class="crop"><div class="circle" style="width:32px;height:32px">${mk2(st2.sel, 32, { full: true })}</div><span>Resultados de Google, 32 px</span></div>
        <div class="crop"><div class="circle safe" style="width:112px;height:112px">${mk2(st2.sel, 112, { full: true })}</div><span>Android, círculo y zona segura</span></div>
        <div class="crop"><div class="squircle" style="width:112px;height:112px">${mk2(st2.sel, 112, { full: true })}</div><span>iPhone, pantalla de inicio</span></div></div></div>
    <div class="st"><h3>Dentro del sitio: la marca suelta</h3><p class="sub">La barra superior en los dos temas a la vez. La marca toma el color del texto (<span style="font-weight:500">ink</span>), así que se invierte sola. Tres maneras de ponerla junto al nombre.</p>
      <div class="hdr-demo">${hdrCol('light')}${hdrCol('dark')}</div></div>
    <div class="st"><h3>Al compartir el enlace</h3><p class="sub">Una sola imagen para todo el sitio: la marca con baldosa y el nombre, a 1200×630. La dirección la agrega la propia aplicación debajo de la tarjeta.</p>
      <div class="wa">
        <div class="bubble"><div class="wa-card"><div class="wa-img">${mk2(st2.sel, 64)}<span class="lg">Doctrina</span></div><div class="wa-t"><b>Doctrina</b><span>Cada tradición, con sus propias palabras.</span><span class="wa-dom">doctrina.elpepo.dev</span></div></div></div>
        <div class="bubble small"><div class="wa-card wa-small"><div class="th">${mk2(st2.sel, 48)}</div><div class="wa-t"><b>Doctrina</b><span>Cada tradición, con sus propias palabras.</span><span class="wa-dom">doctrina.elpepo.dev</span></div></div></div>
      </div></div>`;
  drawZooms();
}

(function () {
  let html = '';
  for (const [ax, title, sub] of GROUPS2) {
    html += `<div class="fam"><h3>${title}</h3><p class="sub">${sub}</p><div class="rows">`;
    for (const v of V2.filter(x => x.axis === ax)) {
      html += `<article class="row row2" id="r2-${v.id}">
        <div class="row-mark"><span class="stg"><span class="mk" data-v2="${v.id}" data-px="88"></span></span></div>
        <div><div class="row-title"><span class="vid">${v.id}</span><h4>${v.name}</h4>${v.fixed ? '<span class="dep">fuera de la paleta</span>' : ''}</div>
          <p class="idea">${v.idea}</p>
          <p class="why"><b>Por qué</b>${v.why}</p>
          <p class="why"><b>Riesgo</b>${v.risk}</p>
          <p class="look"><b>Se parece a</b>${v.look}</p></div>
        <div class="row-side">
          <div class="mini light"><span class="mk" data-v2="${v.id}" data-px="16"></span><span class="mk" data-v2="${v.id}" data-px="32"></span></div>
          <div class="mini dark"><span class="mk" data-v2="${v.id}" data-px="16"></span><span class="mk" data-v2="${v.id}" data-px="32"></span></div>
          <button class="go2" data-go2="${v.id}">Ver en contexto</button>
        </div></article>`;
    }
    html += '</div></div>';
  }
  $('#r2-ledger').innerHTML = html;
  $('#r2-cw-group').insertAdjacentHTML('beforeend', Object.entries(CW2).map(([k, c]) => `<button class="opt" data-r2cw="${k}" aria-pressed="false"><span class="sw" style="background:${c.T}"></span>${c.n}</button>`).join(''));
  $('#r2-picker').innerHTML = V2.map(v => `<button class="pick2" data-id="${v.id}" aria-label="${v.id} ${v.name}" title="${v.id} ${v.name}" aria-pressed="false"><span class="mk" data-v2="${v.id}" data-px="36"></span></button>`).join('');
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-r2cw],[data-go2],.pick2');
    if (!a) return;
    if (a.dataset.r2cw) st2.cw = a.dataset.r2cw;
    else if (a.dataset.go2) { st2.sel = a.dataset.go2; render2(); $('#r2-picker').scrollIntoView(); return; }
    else st2.sel = a.dataset.id;
    render2();
  });
  render2();
})();
