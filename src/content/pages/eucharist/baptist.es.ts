import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistBaptist = {
  doctrine: "eucharist",
  tradition: "baptist",
  status: "draft",
  title: "La posición bautista",
  lede: "Cómo la línea de las convenciones bautistas entiende la Cena del Señor, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Cena del Señor, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "Según Fe y Mensaje Bautistas (art. VII), los miembros de la iglesia participan del pan y del fruto de la vid para recordar la muerte del Redentor y anticipar su segunda venida. La misma sección presenta el bautismo como requisito previo a la Cena. Es la formulación de este documento de la convención, sin atribuirla a todas las familias bautistas.",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Fe y Mensaje Bautistas (2000), art. VII",
        },
      ],
      sources: [
        {
          citations: ["BBFMVII"],
          label: "Fe y Mensaje VII",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el acto de obediencia",
        text: "Fe y Mensaje Bautistas llama a la Cena un «acto simbólico de obediencia», en el que los miembros de la iglesia participan del pan y del fruto de la vid para recordar la muerte del Redentor y anticipar su segunda venida.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. VII",
          },
        ],
        sources: [
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la conmemoración conjunta",
        text: "La Confesión de New Hampshire enseña: «mediante el uso [sagrado] del pan y del vino, han de conmemorar juntos el amor de Cristo en su muerte; precedido siempre de un solemne examen de sí mismos».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. XIV",
          },
        ],
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para Fe y Mensaje Bautistas, la Cena une una acción de obediencia con el recuerdo de la muerte del Redentor y la espera de su retorno (art. VII) {c:BBFMVII|Fe y Mensaje VII}.",
      "Para la Confesión de New Hampshire, es una conmemoración conjunta del amor de Cristo en su muerte, en la participación de los miembros de la iglesia y precedida del examen solemne de uno mismo (art. XIV) {c:BNHXIV|New Hampshire XIV}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Los artículos seleccionados ofrecen estos fines y sus textos de apoyo; no ofrecen una argumentación extensa sobre la sustancia, el alimento espiritual ni otras posiciones eucarísticas.",
  },
  scriptureSubtitle: "Los pasajes que los textos bautistas citan sobre la Cena del Señor, y cómo los leen.",
  scripture: [
    {
      refs: ["Exod.20.4-Exod.20.5"],
      text: "Segunda Confesión de Londres (1689), 30.3–4, p. 271: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.4 nota (f) (1688 p. 100): este versículo figura como nota al margen junto a la cláusula, en inglés, «The denyal of the Cup to the People, worshipping the Elements, the lifting them up, or carrying them about for adoration, and reserving them for any pretended religious use, are all contrary to the Nature of this Ordinance, and to the Institution of Christ.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Matt.3.13-Matt.3.17"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Matt.3.16"],
      text: "Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276.",
    },
    {
      refs: ["Matt.7.6"],
      text: "Segunda Confesión de Londres (1689), 30.8, p. 272: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.8, 1688 impresión p. 102 (margen nota n): este versículo figura como nota al margen junto a la cláusula, en inglés, «All ignorant and ungodly Persons, as they are unfit to enjoy Communion (m) with Christ, so are they unworthy of the Lord's Table, and cannot, without great sin against him, while they remain such, partake of these Holy Mysteries, (n) or be admitted thereunto: yea, whosoever shall receive unworthily, are guilty of the Body and Blood of the Lord, eating and drinking Judgment to themselves.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688).",
    },
    {
      refs: ["Matt.15.9"],
      text: "Segunda Confesión de Londres (1689), 30.3–4, p. 271: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.4 nota (f) (1688 p. 100): este versículo figura como nota al margen junto a la cláusula, en inglés, «The denyal of the Cup to the People, worshipping the Elements, the lifting them up, or carrying them about for adoration, and reserving them for any pretended religious use, are all contrary to the Nature of this Ordinance, and to the Institution of Christ.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Matt.26.26-Matt.26.27"],
      text: "Segunda Confesión de Londres (1689), 30.2, pp. 270–271: este versículo figura como nota al margen junto a la cláusula, en inglés, «In this ordinance Christ is not offered up to his Father, nor any real sacrifice made at all, for remission of sin of the quick or dead; but only a memorial of that one offering up of himself, by himself, upon the crosse, once for all […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.2 nota (d) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and a Spiritual Oblation of all possible Praise unto God for the same […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276.",
    },
    {
      refs: ["Matt.26.26-Matt.26.30"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Matt.26.26-Matt.26.28"],
      text: "Segunda Confesión de Londres (1689), 30.3–4, p. 271: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.4 nota (f) (1688 p. 100): este versículo figura como nota al margen junto a la cláusula, en inglés, «The denyal of the Cup to the People, worshipping the Elements, the lifting them up, or carrying them about for adoration, and reserving them for any pretended religious use, are all contrary to the Nature of this Ordinance, and to the Institution of Christ.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Matt.26.26"],
      text: "Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Matt.26.30"],
      text: "Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Matt.28.19-Matt.28.20"],
      text: "Segunda Confesión de Londres (1689), 28.1, p. 269: este versículo figura como nota al margen junto a la cláusula, en inglés, «Baptism and the Lord's Supper are ordinances of positive, and soveraign institution […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Matt.28.20"],
      text: "Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Mark.1.4"],
      text: "Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276.",
    },
    {
      refs: ["Mark.1.9-Mark.1.11"],
      text: "Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Mark.14.22-Mark.14.26"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Luke.3.21-Luke.3.22"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Luke.22.17"],
      text: "Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Luke.22.19-Luke.22.20"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Luke.24.6"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.6 nota (i) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «That Doctrine which maintains a change of the substance of Bread and Wine, into the substance of Christ's Body and Blood (commonly called Transubstantiation) by consecration of a Priest, or by any other way, is repugnant not to Scripture alone, but even to common sence and reason […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Luke.24.39"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.6 nota (i) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «That Doctrine which maintains a change of the substance of Bread and Wine, into the substance of Christ's Body and Blood (commonly called Transubstantiation) by consecration of a Priest, or by any other way, is repugnant not to Scripture alone, but even to common sence and reason […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["John.3.23"],
      text: "Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.2.41-Acts.2.42"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.2.41"],
      text: "Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.3.21"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.6 nota (i) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «That Doctrine which maintains a change of the substance of Bread and Wine, into the substance of Christ's Body and Blood (commonly called Transubstantiation) by consecration of a Priest, or by any other way, is repugnant not to Scripture alone, but even to common sence and reason […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Acts.8.35-Acts.8.39"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.8.38-Acts.8.39"],
      text: "Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276.",
    },
    {
      refs: ["Acts.16.30-Acts.16.33"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Acts.20.7"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Rom.6.3-Rom.6.5"],
      text: "Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.4.1"],
      text: "Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276.",
    },
    {
      refs: ["1Cor.10.16-1Cor.10.17"],
      text: "Segunda Confesión de Londres (1689), 30.1, p. 270: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] for the perpetual remembrance, and shewing forth the sacrifice in his death, confirmation of the faith of believers in all the benefits thereof, their spiritual nourishment, and growth in him […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.1 nota (b) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and to be a Bond and Pledge of their Communion with him, and with each other.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276.",
    },
    {
      refs: ["1Cor.10.16"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar. Segunda Confesión de Londres (1689), 30.7, 1688 impresión p. 102 (margen nota l): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] spiritually receive, and feed upon Christ crucified, (l) and all the benefits of his Death; the Body and Blood of Christ being then not corporally, or carnally, but spiritually present to the Faith of Believers, in that Ordinance, as the Elements themselves are to their outward senses.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688).",
    },
    {
      refs: ["1Cor.10.21"],
      text: "Segunda Confesión de Londres (1689), 30.1, p. 270: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] for the perpetual remembrance, and shewing forth the sacrifice in his death, confirmation of the faith of believers in all the benefits thereof, their spiritual nourishment, and growth in him […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.1 nota (b) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and to be a Bond and Pledge of their Communion with him, and with each other.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.11.23-1Cor.11.26"],
      text: "Segunda Confesión de Londres (1689), 30.1, p. 270: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] for the perpetual remembrance, and shewing forth the sacrifice in his death, confirmation of the faith of believers in all the benefits thereof, their spiritual nourishment, and growth in him […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.3–4, p. 271: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.1 nota (a) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Supper of the Lord Jesus, was instituted by him, the same Night wherein he was betrayed, to be observed in his Churches unto the end of the World, for the perpetual remembrance, and shewing forth the Sacrifice of himself in his Death […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Segunda Confesión de Londres (1689), 30.3 nota (e) (1688 p. 100): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Lord Jesus hath in this Ordinance, appointed his Ministers to Pray, and Bless the Elements of Bread and Wine, and thereby to set them apart from a common to an holy use, and to take and break the Bread; to take the Cup, and (they communicating also themselves) to give both to the Communicants.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Segunda Confesión de Londres (1689), 30.7, 1688 impresión p. 102 (margen nota l): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] spiritually receive, and feed upon Christ crucified, (l) and all the benefits of his Death; the Body and Blood of Christ being then not corporally, or carnally, but spiritually present to the Faith of Believers, in that Ordinance, as the Elements themselves are to their outward senses.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688).",
    },
    {
      refs: ["1Cor.11.23-1Cor.11.29"],
      text: "Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["1Cor.11.23"],
      text: "Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.11.24"],
      text: "Segunda Confesión de Londres (1689), 30.2, pp. 270–271: este versículo figura como nota al margen junto a la cláusula, en inglés, «In this ordinance Christ is not offered up to his Father, nor any real sacrifice made at all, for remission of sin of the quick or dead; but only a memorial of that one offering up of himself, by himself, upon the crosse, once for all […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.2 nota (d) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and a Spiritual Oblation of all possible Praise unto God for the same […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["1Cor.11.24-1Cor.11.25"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.6 nota (k) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] overthroweth the nature of the Ordinance, and hath been and is the cause of manifold Superstitions, yea, of gross Idolatries.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["1Cor.11.26"],
      text: "Segunda Confesión de Londres (1689), 28.1, p. 269: este versículo figura como nota al margen junto a la cláusula, en inglés, «Baptism and the Lord's Supper are ordinances of positive, and soveraign institution […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.5 nota (h) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["1Cor.11.27"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.5 nota (g) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] they are sometimes called by the name of the things they represent, to wit, the Body and Blood of Christ […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101. Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.11.28"],
      text: "Segunda Confesión de Londres (1689), 30.5–7, pp. 271–272: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.5 nota (h) (1688 p. 101): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] albeit in substance, and nature, they still remain truly, and only Bread, and Wine, as they were before.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["1Cor.11.29"],
      text: "Segunda Confesión de Londres (1689), 30.8, p. 272: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.8, 1688 impresión p. 102 (margen nota n): este versículo figura como nota al margen junto a la cláusula, en inglés, «All ignorant and ungodly Persons, as they are unfit to enjoy Communion (m) with Christ, so are they unworthy of the Lord's Table, and cannot, without great sin against him, while they remain such, partake of these Holy Mysteries, (n) or be admitted thereunto: yea, whosoever shall receive unworthily, are guilty of the Body and Blood of the Lord, eating and drinking Judgment to themselves.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688).",
    },
    {
      refs: ["2Cor.6.14-2Cor.6.15"],
      text: "Segunda Confesión de Londres (1689), 30.8, p. 272: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.8, 1688 impresión p. 102 (margen nota m): este versículo figura como nota al margen junto a la cláusula, en inglés, «All ignorant and ungodly Persons, as they are unfit to enjoy Communion (m) with Christ, so are they unworthy of the Lord's Table, and cannot, without great sin against him, while they remain such, partake of these Holy Mysteries, (n) or be admitted thereunto: yea, whosoever shall receive unworthily, are guilty of the Body and Blood of the Lord, eating and drinking Judgment to themselves.». Edición: A Confession of Faith, put forth by the Elders and Brethren of many Congregations (Londres, 1688).",
    },
    {
      refs: ["Gal.3.1"],
      text: "Credo Ortodoxo (1678), XXXIII, p. 148: este versículo figura como nota al margen (selección) junto a la cláusula, en inglés, «[…] for the confirmation of the faithful believers in all the benefits of his death and resurrection, and spiritual nourishment and growth in him; sealing unto them their continuance in the covenant of grace […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Col.2.12"],
      text: "Fe y Mensaje Bautistas (1925), XIII (1963 Annual, p. 276, columna derecha): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (1963), VII (Annual, p. 276, columna izquierda): este versículo figura como lista de textos de prueba conjunta del bautismo y la Cena; no todos los versículos se asignan a la Cena. Edición: Annual of the Southern Baptist Convention 1963, p. 276. Fe y Mensaje Bautistas (2000), VII (texto oficial): este versículo figura como lista de textos de prueba como en la de 1963, sin volver a comprobar. Edición: texto oficial en línea. Lectura todavía sin verificar.",
    },
    {
      refs: ["Heb.9.25-Heb.9.26"],
      text: "Segunda Confesión de Londres (1689), 30.2, pp. 270–271: este versículo figura como nota al margen junto a la cláusula, en inglés, «In this ordinance Christ is not offered up to his Father, nor any real sacrifice made at all, for remission of sin of the quick or dead; but only a memorial of that one offering up of himself, by himself, upon the crosse, once for all […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.2 nota (c) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «In this Ordinance Christ is not offered up to his Father, nor any real Sacrifice made at all, for Remission of Sin of the Quick or Dead, but only a Memorial of that one offering up of himself, by himself, upon the Cross, once for all […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
    {
      refs: ["Heb.9.28"],
      text: "Segunda Confesión de Londres (1689), 30.2, pp. 270–271: este versículo figura como nota al margen junto a la cláusula, en inglés, «In this ordinance Christ is not offered up to his Father, nor any real sacrifice made at all, for remission of sin of the quick or dead; but only a memorial of that one offering up of himself, by himself, upon the crosse, once for all […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 30.2 nota (c) (1688 p. 99): este versículo figura como nota al margen junto a la cláusula, en inglés, «In this Ordinance Christ is not offered up to his Father, nor any real Sacrifice made at all, for Remission of Sin of the Quick or Dead, but only a Memorial of that one offering up of himself, by himself, upon the Cross, once for all […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 96–101.",
    },
  ],
  passages: {
    title: "Los pasajes de la posición bautista",
    lede: "Los versículos que la tradición bautista cita sobre la Cena del Señor, completos y con su propia lectura.",
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
      "Para Fe y Mensaje Bautistas y la Confesión de New Hampshire, participan de la Cena los miembros de la iglesia, y el bautismo la precede (New Hampshire XIV; Fe y Mensaje VII).",
      "Estas son prescripciones de los documentos, no estadísticas sobre congregaciones observadas.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Participantes y bautismo",
        text: "La participación corresponde a los miembros de la iglesia y el bautismo precede a la Cena; no se deduce una restricción adicional a los miembros de una sola congregación local.",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Los elementos",
        text: "La Confesión de New Hampshire nombra pan y vino; Fe y Mensaje Bautistas, en 1963 y 2000, nombra pan y fruto de la vid.",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "CV-3",
        label: "La acción y su fin",
        text: "Los miembros comen y beben en un acto simbólico de obediencia, memoria y anticipación (Fe y Mensaje VII).",
        sources: [
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "CV-4",
        label: "La preparación",
        text: "La Confesión de New Hampshire requiere el examen solemne de uno mismo (art. XIV).",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
        ],
      },
      {
        id: "CV-5",
        label: "La frecuencia",
        text: "Ninguno de los cuatro artículos completos seleccionados fija una frecuencia numérica.",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
          },
        ],
      },
      {
        id: "CV-6",
        label: "Quién preside y cómo se distribuye",
        text: "Estos artículos no dan una rúbrica detallada sobre quién preside, cómo se distribuye ni la reserva.",
        sources: [
          {
            citations: ["BNHXIV"],
            label: "New Hampshire XIV",
          },
          {
            citations: ["BBFMVII"],
            label: "Fe y Mensaje VII",
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
          "La Escritura es la autoridad para la fe y la práctica, según el preámbulo de Fe y Mensaje Bautistas.",
        source: {
          citations: ["BBFMVII"],
          label: "Fe y Mensaje VII",
        },
      },
      confession: {
        label: "Confesiones de la convención",
        definition:
          "Según su preámbulo, una confesión expresa el consenso de un cuerpo bautista para orientar; puede revisarse, no es infalible y no añade condiciones de salvación. La Confesión de New Hampshire de 1853 es una confesión histórica, sin que cada cuerpo bautista actual la suscriba.",
        source: {
          citations: ["BNHXIV"],
          label: "New Hampshire XIV",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
