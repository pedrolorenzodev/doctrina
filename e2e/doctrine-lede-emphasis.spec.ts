import { expect, test } from "@playwright/test";

const expected: Record<string, Record<string, string>> = {
  eucaristia: {
    catolica: "Eucaristía",
    ortodoxa: "Eucaristía",
    luterana: "Santa Cena",
    reformada: "Cena del Señor",
    bautista: "Cena del Señor",
  },
  bautismo: {
    catolica: "bautismo",
    ortodoxa: "bautismo",
    luterana: "bautismo",
    reformada: "bautismo",
    bautista: "bautismo",
  },
  papado: {
    catolica: "papa",
    ortodoxa: "cabeza de la Iglesia",
    luterana: "papado",
    reformada: "papado",
    bautista: "gobierno",
  },
  "sola-scriptura": {
    catolica: "solo la Escritura",
    ortodoxa: "Escritura",
    luterana: "Escritura",
    reformada: "Escritura",
    bautista: "Escritura",
  },
};

for (const [doctrine, traditions] of Object.entries(expected)) {
  for (const [tradition, word] of Object.entries(traditions)) {
    test(`/es/doctrinas/${doctrine}/${tradition} marks «${word}» in the subtitle, the only emphasised words`, async ({
      page,
    }) => {
      await page.goto(`/es/doctrinas/${doctrine}/${tradition}`);
      const marked = page.locator("header h1 + p span");
      await expect(marked).toHaveCount(1);
      await expect(marked).toHaveText(word);
      await expect(marked).toHaveClass(/font-normal/);
      await expect(marked).toHaveClass(/text-cite/);
    });
  }
}
