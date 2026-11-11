import { bibleBooks } from "@/content/bible-books";

export type NameLanguage = "es" | "en";

export type BookId = string;

type Extra = { en?: string[]; es?: string[] };

const extraNames: Record<BookId, Extra> = {
  Gen: { en: ["Ge", "Gen"], es: ["Gn"] },
  Exod: { en: ["Ex", "Exo", "Exod"], es: ["Ex"] },
  Lev: { en: ["Lev"], es: ["Lv"] },
  Num: { en: ["Nu", "Num"], es: ["Nm"] },
  Deut: { en: ["Deu", "Deut"], es: ["Dt"] },
  Josh: { en: ["Jos", "Josh"], es: ["Jos"] },
  Judg: { en: ["Judg", "Jdg"], es: ["Jue"] },
  Ruth: { en: ["Ru", "Rt"], es: ["Rt"] },
  "1Sam": { en: ["I Sa", "I Sam", "1 Sa", "1 Sam"], es: ["1 S"] },
  "2Sam": { en: ["II Sa", "II Sam", "2 Sa", "2 Sam"], es: ["2 S"] },
  "1Kgs": { en: ["I Ki", "I Kin", "1 Ki", "1 Kin"], es: ["1 R"] },
  "2Kgs": { en: ["II Ki", "II Kin", "2 Ki", "2 Kin"], es: ["2 R"] },
  "1Chr": { en: ["I Ch", "I Chr", "1 Ch", "1 Chr"], es: ["1 Cr"] },
  "2Chr": { en: ["II Ch", "II Chr", "2 Ch", "2 Chr"], es: ["2 Cr"] },
  Ezra: { en: ["Ezr"], es: ["Esd"] },
  Neh: { en: ["Ne", "Neh"], es: ["Neh"] },
  Esth: { en: ["Est", "Esth"], es: ["Est"] },
  Job: { en: ["Jo"], es: ["Job"] },
  Ps: { en: ["Ps", "Psa", "Psalms"], es: ["Sal", "Salmos"] },
  Prov: { en: ["Pr", "Pro", "Prov"], es: ["Pr"] },
  Eccl: { en: ["Ec", "Ecc", "Eccl"], es: ["Ecl"] },
  Song: {
    en: ["SS", "Song", "Song of Songs", "Song of Solomon"],
    es: ["Cnt", "Cantar de los Cantares", "Cantar de Cantares"],
  },
  Isa: { en: ["Is", "Isa"], es: ["Is"] },
  Jer: { en: ["Jer", "Jere"], es: ["Jr"] },
  Lam: { en: ["La", "Lam"], es: ["Lm"] },
  Ezek: { en: ["Ez", "Eze", "Ezk"], es: ["Ez"] },
  Dan: { en: ["Da", "Dan"], es: ["Dn"] },
  Hos: { en: ["Ho", "Hos"], es: ["Os"] },
  Joel: { en: ["Joe"], es: ["Jl"] },
  Amos: { en: ["Am", "Amo"], es: ["Am"] },
  Obad: { en: ["Ob", "Oba"], es: ["Abd"] },
  Jonah: { en: ["Jon", "Jona"], es: ["Jon"] },
  Mic: { en: ["Mi", "Mic", "Mica"], es: ["Miq"] },
  Nah: { en: ["Na", "Nah"], es: ["Nah"] },
  Hab: { en: ["Hab"], es: ["Hab"] },
  Zeph: { en: ["Zep", "Zph", "Zeph"], es: ["Sof"] },
  Hag: { en: ["Hag"], es: ["Ag"] },
  Zech: { en: ["Zch", "Zech"], es: ["Zac"] },
  Mal: { en: ["Mal"], es: ["Mal"] },
  Matt: { en: ["Mat", "Matt"], es: ["Mt"] },
  Mark: { en: ["Mar", "Mark"], es: ["Mr", "Mc"] },
  Luke: { en: ["Lu", "Luk"], es: ["Lc"] },
  John: { en: ["Jn"], es: ["Jn"] },
  Acts: { en: ["Ac", "Act"], es: ["Hch"] },
  Rom: { en: ["Ro", "Rom", "Roma"], es: ["Ro"] },
  "1Cor": { en: ["I Co", "I Cor", "1 Co", "1 Cor"], es: ["1 Co"] },
  "2Cor": { en: ["II Co", "II Cor", "2 Co", "2 Cor"], es: ["2 Co"] },
  Gal: { en: ["Ga", "Gal"], es: ["Gl", "Gál"] },
  Eph: { en: ["Ep", "Eph"], es: ["Ef"] },
  Phil: { en: ["Phil", "Phili", "Php"], es: ["Flp"] },
  Col: { en: ["Col"], es: ["Col"] },
  "1Thess": { en: ["I Th", "I The", "1 Th", "1 The", "I Thess", "1 Thess"], es: ["1 Ts"] },
  "2Thess": { en: ["II Th", "II The", "2 Th", "2 The", "II Thess", "2 Thess"], es: ["2 Ts"] },
  "1Tim": { en: ["I Ti", "I Tim", "1 Ti", "1 Tim"], es: ["1 Ti"] },
  "2Tim": { en: ["II Ti", "II Tim", "2 Ti", "2 Tim"], es: ["2 Ti"] },
  Titus: { en: ["Ti", "Tit"], es: ["Tit"] },
  Phlm: { en: ["Phm", "Phile", "Philem"], es: ["Flm"] },
  Heb: { en: ["He", "Heb"], es: ["Heb"] },
  Jas: { en: ["Jam", "Jas"], es: ["Stg"] },
  "1Pet": { en: ["I Pe", "I Pet", "1 Pe", "1 Pet"], es: ["1 P"] },
  "2Pet": { en: ["II Pe", "II Pet", "2 Pe", "2 Pet"], es: ["2 P"] },
  "1John": { en: ["I Jo", "I Joh", "1 Jo", "1 Joh", "I John"], es: ["1 Jn"] },
  "2John": { en: ["II Jo", "II Joh", "2 Jo", "2 Joh", "II John"], es: ["2 Jn"] },
  "3John": { en: ["III Jo", "III Joh", "3 Jo", "3 Joh", "III John"], es: ["3 Jn"] },
  Jude: { en: ["Jud", "Jude"], es: ["Jud"] },
  Rev: { en: ["Re", "Rev"], es: ["Ap"] },
  Tob: { en: ["Tob"], es: ["Tob"] },
  Jdt: { en: ["Jdt"], es: ["Jdt"] },
  Wis: { en: ["Wis"], es: ["Sab"] },
  Sir: { en: ["Sir"], es: ["Eclo"] },
  Bar: { en: ["Bar"], es: ["Bar"] },
  "1Macc": { en: ["1 Macc"], es: ["1 Mac"] },
  "2Macc": { en: ["2 Macc"], es: ["2 Mac"] },
};

const spanishOrdinals: [string, string][] = [
  ["primera", "1"],
  ["primero", "1"],
  ["segunda", "2"],
  ["segundo", "2"],
  ["tercera", "3"],
  ["tercero", "3"],
];

const romanOrdinals: [string, string][] = [
  ["iii", "3"],
  ["ii", "2"],
  ["i", "1"],
];

export function ordinalsToDigits(lowerText: string): string {
  let text = lowerText;
  for (const [word, digit] of spanishOrdinals) {
    text = text.replace(new RegExp(`^${word}\\s+(?:carta\\s+)?(?:de\\s+)?`), `${digit} `);
  }
  for (const [roman, digit] of romanOrdinals) {
    text = text.replace(new RegExp(`^${roman}\\s+(?=\\p{L})`, "u"), `${digit} `);
  }
  return text;
}

export function nameKey(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

export type NameEntry = { id: BookId; language: NameLanguage | "both" };

const entries = new Map<string, NameEntry>();

function add(text: string, id: BookId, language: NameLanguage) {
  const key = nameKey(ordinalsToDigits(text.toLowerCase()));
  if (!key) return;
  const current = entries.get(key);
  if (!current || current.id === id) {
    entries.set(key, { id, language: current && current.language !== language ? "both" : language });
    return;
  }
  throw new Error(`name ${text} belongs to ${current.id} and ${id}`);
}

for (const book of bibleBooks) {
  const extra = extraNames[book.id] ?? {};
  for (const language of ["es", "en"] as const) {
    add(book.names[language], book.id, language);
    for (const name of extra[language] ?? []) add(name, book.id, language);
  }
}

export function lookupBookName(key: string): NameEntry | undefined {
  return entries.get(key);
}

export function bookNameEntries(): [string, NameEntry][] {
  return [...entries.entries()];
}
