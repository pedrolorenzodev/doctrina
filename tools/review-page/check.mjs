import { pathToFileURL } from 'node:url';
const spec = process.env.PLAYWRIGHT_CORE ? pathToFileURL(process.env.PLAYWRIGHT_CORE + '/index.js').href : 'playwright-core';
const pw = await import(spec);
const chromium = pw.chromium || pw.default.chromium;
const file = 'file://' + process.argv[2];
const shots = process.argv[3];
(async () => {
  const browser = await chromium.launch();
  const report = { errors: [], overflow: [], panelFail: [], missingSrc: [], missingVerse: new Set(), clicks: 0 };
  for (const w of [360, 390, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    page.on('pageerror', e => report.errors.push(`${w}: ${e.message}`));
    page.on('console', m => { if (m.type() === 'error' && !/fonts\.g/.test(m.text())) report.errors.push(`${w} console: ${m.text()}`); });
    await page.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
    await page.goto(file + '#p03', { waitUntil: 'load' });
    const views = await page.evaluate(() => ['#p03', ...Object.keys(OBJ).map(k => '#' + k.toLowerCase()), '#preguntas']);
    for (const v of views) {
      await page.evaluate(h => { location.hash = h; }, v);
      await page.waitForTimeout(60);
      await page.evaluate(() => document.querySelectorAll('[data-more]').forEach(b => { if (b.getAttribute('aria-expanded') !== 'true') b.click(); }));
      const ov = await page.evaluate(() => {
        const W = document.documentElement.clientWidth;
        const bad = [];
        document.querySelectorAll('#main *').forEach(el => { const r = el.getBoundingClientRect(); if (r.width && r.right > W + 1 && !el.closest('.rbar-tabs')) bad.push(el.tagName + '.' + el.className + ':' + Math.round(r.right)); });
        return { sw: document.documentElement.scrollWidth, W, bad: bad.slice(0, 5) };
      });
      if (ov.sw > ov.W || ov.bad.length) report.overflow.push(`${w} ${v}: scrollWidth ${ov.sw} > ${ov.W} ${ov.bad.join(' | ')}`);
      if (shots && (w === 390 || w === 1440) && (v === '#p03' || v === views[1] || v === '#preguntas')) await page.screenshot({ path: `${shots}/${w}${v.replace('#','_')}.png`, fullPage: false });
      if (w === 1440 || w === 390) {
        const st = await page.evaluate(() => {
          const out = { missingSrc: [], missingVerse: [] };
          document.querySelectorAll('[data-src]').forEach(b => b.getAttribute('data-src').split(',').map(s => s.trim()).forEach(id => { if (!SRC[id]) out.missingSrc.push(id); }));
          document.querySelectorAll('[data-verse]').forEach(b => { if (!VERSES[b.getAttribute('data-verse')]) out.missingVerse.push(b.getAttribute('data-verse')); });
          document.querySelectorAll('[data-grade]').forEach(b => { if (!GRADES[b.getAttribute('data-grade')]) out.missingSrc.push('GRADE:' + b.getAttribute('data-grade')); });
          return out;
        });
        st.missingSrc.forEach(x => report.missingSrc.push(`${v}: ${x}`));
        st.missingVerse.forEach(x => report.missingVerse.add(x));
        const n = await page.evaluate(() => document.querySelectorAll('#main [data-src], #main [data-verse], #main [data-grade]').length);
        for (let i = 0; i < n; i++) {
          const res = await page.evaluate(i => {
            const b = document.querySelectorAll('#main [data-src], #main [data-verse], #main [data-grade]')[i];
            if (b.closest('[hidden]')) return 'hidden';
            b.click();
            const p = document.getElementById('panel');
            const ok = !p.hidden && document.getElementById('panel-body').textContent.trim().length > 0 && !/no encontrada/.test(p.textContent);
            const r = p.getBoundingClientRect();
            const inView = r.left >= 0 && r.right <= window.innerWidth + 1;
            document.getElementById('panel-close').click();
            return ok && inView ? 'ok' : 'FAIL ' + (b.getAttribute('data-src') || b.getAttribute('data-verse') || b.getAttribute('data-grade'));
          }, i);
          if (res.startsWith('FAIL')) report.panelFail.push(`${w} ${v}: ${res}`);
          else if (res === 'ok') report.clicks++;
        }
      }
    }
    await page.close();
  }
  await browser.close();
  report.missingVerse = [...report.missingVerse];
  console.log(JSON.stringify(report, null, 1));
})();
