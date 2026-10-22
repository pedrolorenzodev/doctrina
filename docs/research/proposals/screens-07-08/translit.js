function trGreek(src, scheme) {
  const simple = scheme === 'simple';
  const s = src.normalize('NFD');
  const L = {α:'a',β:'b',γ:'g',δ:'d',ε:'e',ζ:'z',η:simple?'e':'ē',θ:'th',ι:'i',κ:'k',λ:'l',μ:'m',ν:'n',ξ:'x',ο:'o',π:'p',ρ:'r',σ:'s',ς:'s',τ:'t',υ:'u',φ:simple?'f':'ph',χ:simple?'kh':'ch',ψ:'ps',ω:simple?'o':'ō'};
  const out = [];
  const chars = Array.from(s);
  let i = 0;
  const isMark = c => /[̀-ͯ]/.test(c);
  const groups = [];
  while (i < chars.length) {
    const base = chars[i]; i++;
    const marks = [];
    while (i < chars.length && isMark(chars[i])) { marks.push(chars[i]); i++; }
    groups.push({base, marks});
  }
  const lower = c => c.toLowerCase();
  for (let k = 1; k < groups.length; k++) {
    const a = lower(groups[k - 1].base), b = lower(groups[k].base);
    if (groups[k].marks.includes('\u0314') && 'αεοηυω'.includes(a) && (b === 'ι' || (b === 'υ' && 'αεοη'.includes(a)))) {
      groups[k].marks = groups[k].marks.filter(m => m !== '\u0314');
      groups[k - 1].marks.push('\u0314');
    }
  }
  for (let k = 0; k < groups.length; k++) {
    const g = groups[k];
    const lc = lower(g.base);
    const up = lc !== g.base;
    let t = L[lc];
    if (t === undefined) { out.push(g.base); continue; }
    const rough = g.marks.includes('̔');
    const sub = g.marks.includes('ͅ');
    const next = groups[k + 1] && lower(groups[k + 1].base);
    if (lc === 'γ' && next && 'γκξχ'.includes(next)) t = 'n';
    if (lc === 'ρ' && rough) t = 'rh';
    let piece = t;
    if ('αεηιουω'.includes(lc) && rough) piece = 'h' + t;
    if (lc === 'υ' && rough) piece = 'hu';
    if (sub) piece += 'i';
    if (up) piece = piece.charAt(0).toUpperCase() + piece.slice(1);
    out.push(piece);
  }
  return out.join('');
}
if (typeof module !== 'undefined') module.exports = {trGreek};
