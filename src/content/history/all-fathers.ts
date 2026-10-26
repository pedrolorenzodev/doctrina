import { fatherLives } from "@/content/history/father-lives";
import { fathers } from "@/content/history/fathers";
import type { Father, FatherLife } from "@/content/model/history";

function withLife(father: Father, life: FatherLife): Father {
  const spanned = life.active ?? life.composed;
  return {
    ...father,
    born: spanned ? null : life.birth ? life.birth.year : father.born,
    died: life.death?.year ?? spanned?.end ?? father.died,
    life,
  };
}

export const allFathers: Father[] = fathers.map((father) => {
  const life = fatherLives[father.id];
  return life ? withLife(father, life) : father;
});
