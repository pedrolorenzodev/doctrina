import { simplifierEnabled } from "@/lib/simplifier-enabled";
import type { SimplifiedEntry } from "@/lib/simplifier-types";

const texts: Record<string, SimplifiedEntry> = {
  "eucharist/catholic/definition": {
    lang: "es",
    original: [
      "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, instituido en la última Cena para hacer presente el sacrificio de la cruz hasta que él vuelva, y a la vez el banquete en el que se recibe a Cristo mismo.",
    ],
    clear: [
      "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, que él instituyó en la última Cena para hacer presente el sacrificio de la cruz hasta que vuelva; y es a la vez el banquete en el que se recibe a Cristo mismo.",
    ],
    very: [
      "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo. Él lo dejó en la última Cena para hacer presente su sacrificio en la cruz hasta que vuelva. Y es también el banquete en el que se recibe a Cristo mismo.",
    ],
  },
  "eucharist/catholic/QE-1": {
    lang: "es",
    original: [
      "En la Eucaristía, después de la consagración, está contenido verdadera, real y sustancialmente Cristo entero: su cuerpo y su sangre, con su alma y su divinidad.",
      "No está solo como en un signo o una figura.",
      "La Iglesia la llama presencia «real» por excelencia, no porque las otras presencias de Cristo (en su Palabra, en la oración de la Iglesia, en los sacramentos) no sean reales.",
    ],
    clear: [
      "En la Eucaristía, después de la consagración, Cristo está presente entero, de verdad, de modo real y en su sustancia: su cuerpo y su sangre, con su alma y su divinidad.",
      "No está solo como en un signo o una figura.",
      "La Iglesia la llama presencia «real» por excelencia, y no porque las otras presencias de Cristo (en su Palabra, en la oración de la Iglesia, en los sacramentos) no sean reales.",
    ],
    very: [
      "Después de la consagración, Cristo está presente en la Eucaristía de verdad, de modo real y en su sustancia: entero, con su cuerpo y su sangre, su alma y su divinidad.",
      "No está solo como un signo o una figura.",
      "La Iglesia llama «real» a esta presencia de manera especial. No lo hace porque las otras presencias de Cristo (en su Palabra, en la oración de la Iglesia, en los sacramentos) no sean reales.",
    ],
  },
  "eucharist/catholic/QE-2": {
    lang: "es",
    original: [
      "Por la consagración, toda la sustancia del pan se convierte en la sustancia del cuerpo de Cristo y toda la sustancia del vino en la de su sangre; del pan y del vino quedan solo las especies (lo que se ve, se toca y se gusta).",
      "La Iglesia llama a este cambio «transubstanciación».",
    ],
    clear: [
      "Por la consagración, toda la sustancia del pan pasa a ser la sustancia del cuerpo de Cristo, y toda la sustancia del vino, la de su sangre; del pan y del vino solo quedan las especies (lo que se ve, se toca y se gusta).",
      "La Iglesia llama «transubstanciación» a este cambio.",
    ],
    very: [
      "Cuando se consagra, lo que el pan es en sí mismo pasa a ser el cuerpo de Cristo, y lo que el vino es en sí mismo pasa a ser su sangre. Solo quedan las especies: lo que se ve, se toca y se gusta.",
      "La Iglesia llama «transubstanciación» a este cambio.",
    ],
  },
  "ignatius-smyrnaeans/6.2": {
    lang: "en",
    original: [
      "But mark ye those who hold strange doctrine touching the grace of Jesus Christ which came to us, how that they are contrary to the mind of God.",
      "They have no care for love, none for the widow, none for the orphan, none for the afflicted, none for the prisoner, none for the hungry or thirsty.",
      "They abstain from eucharist (thanksgiving) and prayer, because they allow not that the eucharist is the flesh of our Saviour Jesus Christ, which flesh suffered for our sins, and which the Father of His goodness raised up.",
    ],
    clear: [
      "Take note of those who hold strange teaching about the grace of Jesus Christ that came to us: they are opposed to the mind of God.",
      "They have no concern for love: none for the widow, none for the orphan, none for the afflicted, none for the prisoner, none for the hungry or thirsty.",
      "They keep away from the eucharist (thanksgiving) and from prayer, because they do not admit that the eucharist is the flesh of our Saviour Jesus Christ, the flesh that suffered for our sins and that the Father in His goodness raised up.",
    ],
    very: [
      "Some teach something different about the grace that Jesus Christ brought us. This goes against what God thinks.",
      "They do not care about love. They do not look after widows, orphans, people who suffer, prisoners, or people who are hungry or thirsty.",
      "They stay away from the eucharist (thanksgiving) and from prayer. They do not accept that the eucharist is the flesh of our Saviour Jesus Christ. That flesh suffered for our sins, and the Father, in His goodness, raised it up.",
    ],
  },
};

export function getSimplifiedText(id: string): SimplifiedEntry | undefined {
  return simplifierEnabled ? texts[id] : undefined;
}
