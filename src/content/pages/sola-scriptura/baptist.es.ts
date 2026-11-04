import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaBaptist = {
  doctrine: "sola-scriptura",
  tradition: "baptist",
  status: "draft",
  title: "La posición bautista",
  lede: "Cómo la línea de las convenciones bautistas entiende la Escritura, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Escritura, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de New Hampshire dice de la Biblia: «la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Confesión de New Hampshire (1853), art. I",
        },
      ],
      sources: [
        {
          citations: ["BNHI"],
          label: "New Hampshire I",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la norma suprema",
        text: "La Confesión de New Hampshire dice de la Biblia: «la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. I",
          },
        ],
        sources: [
          {
            citations: ["BNHI"],
            label: "New Hampshire I",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la revelación y Cristo",
        text: "Para Fe y Mensaje Bautistas, la Biblia fue escrita por personas inspiradas por Dios y es su revelación al ser humano. Dios es su autor, la salvación su fin y la verdad sin mezcla de error su contenido. La Escritura es la norma que examina la conducta, los credos y las opiniones religiosas; toda ella testimonia a Cristo, centro de la revelación divina.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. I",
          },
        ],
        sources: [
          {
            citations: ["BBFMI"],
            label: "Fe y Mensaje I",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para la Confesión de New Hampshire: «la Santa Biblia fue escrita por personas divinamente inspiradas y es un tesoro perfecto de instrucción celestial» {c:BNHI|New Hampshire I}.",
      "Fe y Mensaje Bautistas da su propia razón, centrada en la revelación divina y en Cristo (art. I) {c:BBFMI|Fe y Mensaje I}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para Fe y Mensaje Bautistas, Dios es el autor de la Biblia, la salvación su fin y la verdad, sin mezcla de error, su contenido (art. I).",
  },
  scriptureSubtitle: "Los pasajes que los textos bautistas citan sobre la Escritura, y cómo los leen.",
  scripture: [
    {
      refs: ["Exod.24.4"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Deut.4.1-Deut.4.2"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Deut.12.32"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Deut.17.19"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Josh.1.7"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Josh.8.34"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.19.7-Ps.19.10"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.19.7"],
      text: "Segunda Confesión de Londres (1689), 1.7 nota (n) (1719 p. 30): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.7 nota (n) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] those things which are necessary to be known, believed, and observed for Salvation, are so clearly propounded, and opened in some place of Scripture or other, that not onely the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["Ps.119.1-Ps.119.8"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
    },
    {
      refs: ["Ps.119.11"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.119.89"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.119.105"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.119.130"],
      text: "Segunda Confesión de Londres (1689), 1.7 nota (n) (1719 p. 30): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.7 nota (n) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] those things which are necessary to be known, believed, and observed for Salvation, are so clearly propounded, and opened in some place of Scripture or other, that not onely the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["Ps.119.140"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Prov.30.5-Prov.30.6"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Isa.8.20"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (p) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] being immediately inspired by God, and by his singular Care and Providence kept pure in all Ages, are therefore authentical; so as in all Controversies of Religion, the Church is finally to […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Isa.34.16"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Isa.40.8"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Jer.15.16"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Jer.36"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
    },
    {
      refs: ["Jer.36.1-Jer.36.32"],
      text: "Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Matt.5.17-Matt.5.18"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Matt.15.9"],
      text: "Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Matt.18.17-Matt.18.19"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Matt.18.20"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Matt.22.29"],
      text: "Segunda Confesión de Londres (1689), 1.10 nota (x) (1688 p. 9): este versículo figura como nota al margen junto a la cláusula, en inglés, «The supream Judge by which all Controversies of Religion are to be determined, and all Decrees of Councels, Opinions of ancient Writers, Doctrines of Men, and private Spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our Faith is finally resolved.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Matt.22.29-Matt.22.30"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Matt.22.29-Matt.22.31"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
    },
    {
      refs: ["Matt.22.31"],
      text: "Segunda Confesión de Londres (1689), 1.10 nota (x) (1688 p. 9): este versículo figura como nota al margen junto a la cláusula, en inglés, «The supream Judge by which all Controversies of Religion are to be determined, and all Decrees of Councels, Opinions of ancient Writers, Doctrines of Men, and private Spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our Faith is finally resolved.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Matt.24.23"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Luke.16.29-Luke.16.31"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
    },
    {
      refs: ["Luke.21.33"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Luke.24.44-Luke.24.46"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["John.5.39"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (r) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and are commanded in the fear of God to read and search them […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["John.5.46-John.5.47"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.6.45"],
      text: "Segunda Confesión de Londres (1689), 1.6 notas (i), (k) (1719 pp. 29–30; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Mans Salvation, Faith and Life, is either expressely set down or necessarily contained in the Holy Scripture […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (k) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «Nevertheless we acknowledge the inward Illumination of the Spirit of God, to be necessary for the saving understanding of such things as are revealed in the Word […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["John.10.35"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.16.13-John.16.15"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["John.16.13-John.16.14"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.17.12"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.17.17"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["John.20.30-John.20.31"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.21.25"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.2.16"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Acts.3.22-Acts.3.23"],
      text: "Primera Confesión de Londres (1646), VIII, p. 176: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.15.1"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.15.11"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.15.15-Acts.15.16"],
      text: "Segunda Confesión de Londres (1689), 1.9 nota (u) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Infallible Rule of interpretation of Scripture is the Scripture itself: And therefore when there is a question about the true and full sence of any Scripture, (which is not manifold but one) it must be searched by other places, that speak more clearly.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.15.15"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (q) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] the Church is finally to appeal unto them.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.15.30-Acts.15.31"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.17.10"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.17.11"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Acts.18.28"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.28.23"],
      text: "Segunda Confesión de Londres (1689), 1.10 nota (x) (1688 p. 9): este versículo figura como nota al margen junto a la cláusula, en inglés, «The supream Judge by which all Controversies of Religion are to be determined, and all Decrees of Councels, Opinions of ancient Writers, Doctrines of Men, and private Spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our Faith is finally resolved.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.1.16"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.3.2"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (o) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Old Testament in Hebrew, (which was the Native Language of the People of God of old) and the New Testament in Greek […] are therefore authentical […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.10.13"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.11.31-Rom.11.32"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.15.4"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Rom.15.4-Rom.15.5"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.16.25-Rom.16.26"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["1Cor.1.20"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.2.6-1Cor.2.7"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.2.9-1Cor.2.12"],
      text: "Segunda Confesión de Londres (1689), 1.6 notas (i), (k) (1719 pp. 29–30; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Mans Salvation, Faith and Life, is either expressely set down or necessarily contained in the Holy Scripture […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (k) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «Nevertheless we acknowledge the inward Illumination of the Spirit of God, to be necessary for the saving understanding of such things as are revealed in the Word […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["1Cor.2.10-1Cor.2.12"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.5.4-1Cor.5.6"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.11.13-1Cor.11.14"],
      text: "Segunda Confesión de Londres (1689), 1.6 nota (l) (1719 p. 30; McGlothlin p. 230): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (l) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and that there are some circumstances concerning the Worship of God, and Government of the Church, common to Humane Actions and Societies; which are to be ordered by the Light of Nature, and Christian Prudence, according to the general Rules of the Word, which are always to be observed.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["1Cor.14.4"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.6"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.9"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.11-1Cor.14.12"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.24"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.26"],
      text: "Segunda Confesión de Londres (1689), 1.6 nota (l) (1719 p. 30; McGlothlin p. 230): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (l) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and that there are some circumstances concerning the Worship of God, and Government of the Church, common to Humane Actions and Societies; which are to be ordered by the Light of Nature, and Christian Prudence, according to the general Rules of the Word, which are always to be observed.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["1Cor.14.28"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.40"],
      text: "Segunda Confesión de Londres (1689), 1.6 nota (l) (1719 p. 30; McGlothlin p. 230): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (l) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and that there are some circumstances concerning the Worship of God, and Government of the Church, common to Humane Actions and Societies; which are to be ordered by the Light of Nature, and Christian Prudence, according to the general Rules of the Word, which are always to be observed.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["2Cor.1.20"],
      text: "Primera Confesión de Londres (1646), VIII, p. 176: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Gal.1.8-Gal.1.9"],
      text: "Segunda Confesión de Londres (1689), 1.6 notas (i), (k) (1719 pp. 29–30; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Mans Salvation, Faith and Life, is either expressely set down or necessarily contained in the Holy Scripture […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (i) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Man's Salvation, Faith and Life, is either expresly set down or necessarily contained in the Holy Scripture; unto which nothing at any time is to be added, whether by new Revelation of the Spirit, or Traditions of Men.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["Gal.5.22"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Eph.2.20"],
      text: "Segunda Confesión de Londres (1689), 1.10 nota (x) (1688 p. 9): este versículo figura como nota al margen junto a la cláusula, en inglés, «The supream Judge by which all Controversies of Religion are to be determined, and all Decrees of Councels, Opinions of ancient Writers, Doctrines of Men, and private Spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our Faith is finally resolved.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
    },
    {
      refs: ["Col.2.18"],
      text: "Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Col.2.23"],
      text: "Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Col.3.16"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (t) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] that the Word of God dwelling plentifully in all, they may worship him in an acceptable manner, and through patience and comfort of the Scriptures may have hope.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2Thess.2.7"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2Thess.2.13"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota (g) (1719 p. 28; 1688 p. 4): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth it self) the Author thereof; therefore it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2Tim.3.15-2Tim.3.17"],
      text: "Segunda Confesión de Londres (1689), 1.6 notas (i), (k) (1719 pp. 29–30; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Mans Salvation, Faith and Life, is either expressely set down or necessarily contained in the Holy Scripture […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (i) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Man's Salvation, Faith and Life, is either expresly set down or necessarily contained in the Holy Scripture; unto which nothing at any time is to be added, whether by new Revelation of the Spirit, or Traditions of Men.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7. Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Primera Confesión de Londres (1646), VIII, p. 176: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Tim.3.16"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota (g) (1719 p. 28; 1688 p. 4): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth it self) the Author thereof; therefore it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.1.1-Heb.1.2"],
      text: "Primera Confesión de Londres (1646), VIII, p. 176: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Heb.1.1"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
    },
    {
      refs: ["Heb.4.12"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["1Pet.1.25"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["2Pet.1.19-2Pet.1.21"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota (g) (1719 p. 28; 1688 p. 4): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth it self) the Author thereof; therefore it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Pet.1.19"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2Pet.1.20-2Pet.1.21"],
      text: "Segunda Confesión de Londres (1689), 1.9 nota (u) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Infallible Rule of interpretation of Scripture is the Scripture itself: And therefore when there is a question about the true and full sence of any Scripture, (which is not manifold but one) it must be searched by other places, that speak more clearly.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Pet.3.16"],
      text: "Segunda Confesión de Londres (1689), 1.7 nota (m) (1719 p. 30; McGlothlin p. 230): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] those things which are necessary to be known, believed, and observed for Salvation, are so clearly propounded, and opened in some place of Scripture or other, that not only the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.7 nota (m) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «All things in Scripture are not alike plain in themselves, nor alike clear unto all […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["1John.1.2"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1719 p. 29): este versículo figura como nota al margen (variante) junto a la cláusula, en inglés, «[…] the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: A Confession of Faith, cuarta edición (Londres, 1719).",
    },
    {
      refs: ["1John.2.2"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1John.2.20"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1John.2.27"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1John.5.9"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota (g) (1719 p. 28; 1688 p. 4): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth it self) the Author thereof; therefore it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1John.5.19"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota 7 (McGlothlin p. 229; 1677): este versículo figura como nota al margen (variante) junto a la cláusula, en inglés, «[…] it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2John.1.7-2John.1.10"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rev.22.18"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición bautista",
    lede: "Los versículos que la tradición bautista cita sobre la Escritura, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición bautista.",
    apologistsLabel: "Cómo lo defienden los apologistas bautistas.",
  },
  videos: {
    subtitle: "Creadores bautistas explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura bautista. Abre cada una para leer en profundidad la respuesta de los textos bautistas.",
    videosSubtitle: "Creadores bautistas que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Fe y Mensaje Bautistas dice en su preámbulo: «Las confesiones son sólo guías para la interpretación» {c:BBFMpre_mbulo|Fe y Mensaje preámbulo}.",
      "Para ese preámbulo, la Escritura tiene autoridad única para la fe y la práctica; las confesiones guían la interpretación sin autoridad sobre la conciencia, sirven como instrumentos de rendición de cuentas doctrinal y admiten revisión.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Las confesiones como guías",
        text: "El preámbulo de Fe y Mensaje Bautistas dice: «Las confesiones son sólo guías para la interpretación».",
        sources: [
          {
            citations: ["BBFMpre_mbulo"],
            label: "Fe y Mensaje preámbulo",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Leer sin iglesia ni confesión",
        text: "No se afirma una regla de lectura solo privada: el preámbulo une la guía de interpretación, la autoridad de la Escritura y la rendición de cuentas doctrinal.",
        sources: [
          {
            citations: ["BBFMpre_mbulo"],
            label: "Fe y Mensaje preámbulo",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Plan de lectura o versión bíblica universal",
        text: "Los artículos seleccionados no dicen nada sobre un plan de lectura fijo ni sobre una versión bíblica universal.",
        sources: [
          {
            citations: ["BNHI"],
            label: "New Hampshire I",
          },
          {
            citations: ["BBFMI"],
            label: "Fe y Mensaje I",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios textos bautistas se aplican, con su definición en palabras de los textos.",
    grades: {
      scripture: {
        label: "Escritura: autoridad única",
        definition:
          "Autoridad única para la fe y la práctica en el preámbulo de la convención; norma suprema de examen en la Confesión de New Hampshire I y en Fe y Mensaje Bautistas I.",
        source: {
          citations: ["BBFMI"],
          label: "Fe y Mensaje I",
        },
      },
      confession: {
        label: "Confesiones de la convención",
        definition:
          "La Confesión de New Hampshire de 1853 es una confesión histórica, sin jurisdicción bautista universal. Fe y Mensaje Bautistas 2000, enmendada en 2023, es la declaración de la convención nombrada: guía y rendición de cuentas doctrinal bajo la Escritura, revisable, no infalible ni una norma que obligue la conciencia como la Escritura.",
        source: {
          citations: ["BNHI"],
          label: "New Hampshire I",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
