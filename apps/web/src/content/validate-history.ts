import type { Father } from "@/content/model/history";

export function validateFathers(fathers: Father[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const father of fathers) {
    const where = `fathers.${father.id}`;
    if (ids.has(father.id)) errors.push(`${where}: duplicate id`);
    ids.add(father.id);
    if (!/^[a-z0-9-]+$/.test(father.id))
      errors.push(`${where}: the id is the URL slug, lowercase letters and hyphens only`);
    for (const field of [father.name, father.role, father.region, father.summary]) {
      if (field.es.trim() === "" || field.en.trim() === "") errors.push(`${where}: an empty text`);
    }
    if (!Number.isInteger(father.died)) errors.push(`${where}: died is not a year`);
    if (father.born !== null && father.born >= father.died) errors.push(`${where}: born must precede died`);
    if (father.works.length === 0) errors.push(`${where}: no writings`);
    for (const work of father.works) {
      if (!/\d/.test(work.date)) errors.push(`${where}: the date «${work.date}» has no year`);
    }
  }
  return errors;
}
