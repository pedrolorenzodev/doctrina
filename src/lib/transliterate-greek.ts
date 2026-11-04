const letters: Record<string, string> = {
  α: "a",
  β: "b",
  γ: "g",
  δ: "d",
  ε: "e",
  ζ: "z",
  η: "ē",
  θ: "th",
  ι: "i",
  κ: "k",
  λ: "l",
  μ: "m",
  ν: "n",
  ξ: "x",
  ο: "o",
  π: "p",
  ρ: "r",
  σ: "s",
  ς: "s",
  τ: "t",
  υ: "u",
  φ: "ph",
  χ: "ch",
  ψ: "ps",
  ω: "ō",
};

const roughBreathing = "̔";
const iotaSubscript = "ͅ";
const vowels = "αεοηυω";
const markPattern = /[̀-ͯ]/;

type Group = { base: string; marks: string[] };

function groupsOf(source: string): Group[] {
  const chars = Array.from(source.normalize("NFD"));
  const groups: Group[] = [];
  let index = 0;
  while (index < chars.length) {
    const base = chars[index] ?? "";
    index += 1;
    const marks: string[] = [];
    while (index < chars.length && markPattern.test(chars[index] ?? "")) {
      marks.push(chars[index] ?? "");
      index += 1;
    }
    groups.push({ base, marks });
  }
  for (let k = 1; k < groups.length; k += 1) {
    const current = groups[k];
    const previous = groups[k - 1];
    if (!current || !previous || !current.marks.includes(roughBreathing)) continue;
    const before = previous.base.toLowerCase();
    const here = current.base.toLowerCase();
    if (vowels.includes(before) && (here === "ι" || (here === "υ" && "αεοη".includes(before)))) {
      current.marks = current.marks.filter((mark) => mark !== roughBreathing);
      previous.marks.push(roughBreathing);
    }
  }
  return groups;
}

export function transliterateGreek(source: string): string {
  const groups = groupsOf(source);
  return groups
    .map((group, k) => {
      const lower = group.base.toLowerCase();
      let sound = letters[lower];
      if (sound === undefined) return group.base;
      const next = groups[k + 1]?.base.toLowerCase() ?? "";
      const rough = group.marks.includes(roughBreathing);
      if (lower === "γ" && next !== "" && "γκξχ".includes(next)) sound = "n";
      if (lower === "ρ" && rough) sound = "rh";
      let piece = sound;
      if ("αεηιουω".includes(lower) && rough) piece = `h${sound}`;
      if (lower === "υ" && rough) piece = "hu";
      if (group.marks.includes(iotaSubscript)) piece += "i";
      return lower === group.base ? piece : piece.charAt(0).toUpperCase() + piece.slice(1);
    })
    .join("");
}
