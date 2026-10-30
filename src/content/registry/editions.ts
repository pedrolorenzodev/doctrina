import type { Edition } from "@/content/model/registry";

export const editions = {
  "triglot.la": {
    id: "triglot.la",
    works: ["augsburg", "apology", "smalcald", "fc-epitome", "fc-sd", "large-catechism", "treatise", "small-catechism"],
    lang: "la",
    bibliography:
      "Concordia Triglotta, St. Louis, CPH, 1921 (alemán, latín, inglés; inglés según bookofconcord.org). Dominio público.",
    licence: "public-domain",
  },
  "triglot.es": {
    id: "triglot.es",
    works: ["augsburg", "apology", "smalcald", "fc-epitome", "fc-sd", "large-catechism", "treatise", "small-catechism"],
    lang: "es",
    bibliography:
      "Concordia Triglotta, St. Louis, CPH, 1921 (alemán, latín, inglés; inglés según bookofconcord.org). Dominio público.",
    licence: "public-domain",
  },
  "triglot.en": {
    id: "triglot.en",
    works: ["augsburg", "apology", "smalcald", "fc-epitome", "fc-sd", "large-catechism", "treatise", "small-catechism"],
    lang: "en",
    bibliography:
      "Concordia Triglotta, St. Louis, CPH, 1921 (alemán, latín, inglés; inglés según bookofconcord.org). Dominio público.",
    licence: "public-domain",
  },
  "triglot.de": {
    id: "triglot.de",
    works: ["augsburg", "apology", "smalcald", "fc-epitome", "fc-sd", "large-catechism", "treatise", "small-catechism"],
    lang: "de",
    bibliography:
      "Concordia Triglotta, St. Louis, CPH, 1921 (alemán, latín, inglés; inglés según bookofconcord.org). Dominio público.",
    licence: "public-domain",
  },
  "pa.la": {
    id: "pa.la",
    works: ["pastor-aeternus"],
    lang: "la",
    bibliography:
      "Latín e inglés: Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), pp. 256–271; latín cotejado con vatican.va (A.S.S. VI, 1870-1871). Dominio público. No se halló español de dominio público.",
    licence: "public-domain",
  },
  "pa.en": {
    id: "pa.en",
    works: ["pastor-aeternus"],
    lang: "en",
    bibliography:
      "Latín e inglés: Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), pp. 256–271; latín cotejado con vatican.va (A.S.S. VI, 1870-1871). Dominio público. No se halló español de dominio público.",
    licence: "public-domain",
  },
  "site-translation.pastor-aeternus.es": {
    id: "site-translation.pastor-aeternus.es",
    works: ["pastor-aeternus"],
    lang: "es",
    bibliography: "Translation made for this site; no published edition in this language.",
    licence: "site-authored",
  },
  "mansi.la": {
    id: "mansi.la",
    works: ["florence-exsultate", "florence-laetentur"],
    lang: "la",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798, columna 1055 (leída en la imagen de la hoja 543). Dominio público. Sin español de dominio público: el español es traducción asistida por IA desde el latín.",
    licence: "public-domain",
  },
  "mansi.es": {
    id: "mansi.es",
    works: ["florence-exsultate", "florence-laetentur"],
    lang: "es",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798, columna 1055 (leída en la imagen de la hoja 543). Dominio público. Sin español de dominio público: el español es traducción asistida por IA desde el latín.",
    licence: "public-domain",
  },
  "mansi.en": {
    id: "mansi.en",
    works: ["florence-exsultate", "florence-laetentur"],
    lang: "en",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798, columna 1055 (leída en la imagen de la hoja 543). Dominio público. Sin español de dominio público: el español es traducción asistida por IA desde el latín.",
    licence: "public-domain",
  },
  "mansi.de": {
    id: "mansi.de",
    works: ["florence-exsultate", "florence-laetentur"],
    lang: "de",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798, columna 1055 (leída en la imagen de la hoja 543). Dominio público. Sin español de dominio público: el español es traducción asistida por IA desde el latín.",
    licence: "public-domain",
  },
  "vat2.la": {
    id: "vat2.la",
    works: ["lg", "ur", "sc", "gs", "dei-verbum", "dh"],
    lang: "la",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "vat2.es": {
    id: "vat2.es",
    works: ["lg", "ur", "sc", "gs", "dei-verbum", "dh"],
    lang: "es",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "vat2.en": {
    id: "vat2.en",
    works: ["lg", "ur", "sc", "gs", "dei-verbum", "dh"],
    lang: "en",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "vat2.de": {
    id: "vat2.de",
    works: ["lg", "ur", "sc", "gs", "dei-verbum", "dh"],
    lang: "de",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cec.la": {
    id: "cec.la",
    works: ["cec"],
    lang: "la",
    bibliography: "Catecismo de la Iglesia Católica. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cec.es": {
    id: "cec.es",
    works: ["cec"],
    lang: "es",
    bibliography: "Catecismo de la Iglesia Católica. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cec.en": {
    id: "cec.en",
    works: ["cec"],
    lang: "en",
    bibliography: "Catecismo de la Iglesia Católica. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cec.de": {
    id: "cec.de",
    works: ["cec"],
    lang: "de",
    bibliography: "Catecismo de la Iglesia Católica. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cic.la": {
    id: "cic.la",
    works: ["cic"],
    lang: "la",
    bibliography: "Código de Derecho Canónico (1983). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cic.es": {
    id: "cic.es",
    works: ["cic"],
    lang: "es",
    bibliography: "Código de Derecho Canónico (1983). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cic.en": {
    id: "cic.en",
    works: ["cic"],
    lang: "en",
    bibliography: "Código de Derecho Canónico (1983). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cic.de": {
    id: "cic.de",
    works: ["cic"],
    lang: "de",
    bibliography: "Código de Derecho Canónico (1983). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "uus.la": {
    id: "uus.la",
    works: ["uus"],
    lang: "la",
    bibliography:
      "Encíclica (magisterio auténtico, pontificio, no conciliar). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "uus.es": {
    id: "uus.es",
    works: ["uus"],
    lang: "es",
    bibliography:
      "Encíclica (magisterio auténtico, pontificio, no conciliar). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "uus.en": {
    id: "uus.en",
    works: ["uus"],
    lang: "en",
    bibliography:
      "Encíclica (magisterio auténtico, pontificio, no conciliar). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "uus.de": {
    id: "uus.de",
    works: ["uus"],
    lang: "de",
    bibliography:
      "Encíclica (magisterio auténtico, pontificio, no conciliar). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdfp.la": {
    id: "cdfp.la",
    works: ["cdf-primado"],
    lang: "la",
    bibliography:
      "Congregación para la Doctrina de la Fe, «Consideraciones» firmadas por el card. J. Ratzinger (prefecto) y Mons. T. Bertone (secretario); impresas primero como apéndice de Il Primato del Successore di Pietro (LEV, 1998), pp. 493–503. Sin fórmula de aprobación papal en el texto leído: sin grado propio. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdfp.es": {
    id: "cdfp.es",
    works: ["cdf-primado"],
    lang: "es",
    bibliography:
      "Congregación para la Doctrina de la Fe, «Consideraciones» firmadas por el card. J. Ratzinger (prefecto) y Mons. T. Bertone (secretario); impresas primero como apéndice de Il Primato del Successore di Pietro (LEV, 1998), pp. 493–503. Sin fórmula de aprobación papal en el texto leído: sin grado propio. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdfp.en": {
    id: "cdfp.en",
    works: ["cdf-primado"],
    lang: "en",
    bibliography:
      "Congregación para la Doctrina de la Fe, «Consideraciones» firmadas por el card. J. Ratzinger (prefecto) y Mons. T. Bertone (secretario); impresas primero como apéndice de Il Primato del Successore di Pietro (LEV, 1998), pp. 493–503. Sin fórmula de aprobación papal en el texto leído: sin grado propio. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdfp.de": {
    id: "cdfp.de",
    works: ["cdf-primado"],
    lang: "de",
    bibliography:
      "Congregación para la Doctrina de la Fe, «Consideraciones» firmadas por el card. J. Ratzinger (prefecto) y Mons. T. Bertone (secretario); impresas primero como apéndice de Il Primato del Successore di Pietro (LEV, 1998), pp. 493–503. Sin fórmula de aprobación papal en el texto leído: sin grado propio. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdf98.la": {
    id: "cdf98.la",
    works: ["cdf-note-1998", "pf-1989"],
    lang: "la",
    bibliography:
      "Nota doctrinal de la Congregación para la Doctrina de la Fe (1998), citada como clasificación de la propia Iglesia. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdf98.es": {
    id: "cdf98.es",
    works: ["cdf-note-1998", "pf-1989"],
    lang: "es",
    bibliography:
      "Nota doctrinal de la Congregación para la Doctrina de la Fe (1998), citada como clasificación de la propia Iglesia. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdf98.en": {
    id: "cdf98.en",
    works: ["cdf-note-1998", "pf-1989"],
    lang: "en",
    bibliography:
      "Nota doctrinal de la Congregación para la Doctrina de la Fe (1998), citada como clasificación de la propia Iglesia. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdf98.de": {
    id: "cdf98.de",
    works: ["cdf-note-1998", "pf-1989"],
    lang: "de",
    bibliography:
      "Nota doctrinal de la Congregación para la Doctrina de la Fe (1998), citada como clasificación de la propia Iglesia. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "me.la": {
    id: "me.la",
    works: ["mysterium-ecclesiae"],
    lang: "la",
    bibliography:
      "Declaración de la Congregación para la Doctrina de la Fe; Pablo VI «ha ratificado y confirmado esta Declaración […] y ha ordenado su publicación» (11 may 1973). Sin grado propio. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "me.es": {
    id: "me.es",
    works: ["mysterium-ecclesiae"],
    lang: "es",
    bibliography:
      "Declaración de la Congregación para la Doctrina de la Fe; Pablo VI «ha ratificado y confirmado esta Declaración […] y ha ordenado su publicación» (11 may 1973). Sin grado propio. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "me.en": {
    id: "me.en",
    works: ["mysterium-ecclesiae"],
    lang: "en",
    bibliography:
      "Declaración de la Congregación para la Doctrina de la Fe; Pablo VI «ha ratificado y confirmado esta Declaración […] y ha ordenado su publicación» (11 may 1973). Sin grado propio. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "me.de": {
    id: "me.de",
    works: ["mysterium-ecclesiae"],
    lang: "de",
    bibliography:
      "Declaración de la Congregación para la Doctrina de la Fe; Pablo VI «ha ratificado y confirmado esta Declaración […] y ha ordenado su publicación» (11 may 1973). Sin grado propio. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "srx.la": {
    id: "srx.la",
    works: ["sempiternus-rex"],
    lang: "la",
    bibliography:
      "Encíclica (magisterio auténtico); sus juicios históricos sobre Calcedonia son de Pío XII. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "srx.es": {
    id: "srx.es",
    works: ["sempiternus-rex"],
    lang: "es",
    bibliography:
      "Encíclica (magisterio auténtico); sus juicios históricos sobre Calcedonia son de Pío XII. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "srx.en": {
    id: "srx.en",
    works: ["sempiternus-rex"],
    lang: "en",
    bibliography:
      "Encíclica (magisterio auténtico); sus juicios históricos sobre Calcedonia son de Pío XII. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "srx.de": {
    id: "srx.de",
    works: ["sempiternus-rex"],
    lang: "de",
    bibliography:
      "Encíclica (magisterio auténtico); sus juicios históricos sobre Calcedonia son de Pío XII. © LEV: cita breve y enlace.",
    licence: "short-quote",
  },
  "donum-veritatis.la": {
    id: "donum-veritatis.la",
    works: ["donum-veritatis"],
    lang: "la",
    bibliography: "Instrucción. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "donum-veritatis.es": {
    id: "donum-veritatis.es",
    works: ["donum-veritatis"],
    lang: "es",
    bibliography: "Instrucción. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "donum-veritatis.en": {
    id: "donum-veritatis.en",
    works: ["donum-veritatis"],
    lang: "en",
    bibliography: "Instrucción. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "donum-veritatis.de": {
    id: "donum-veritatis.de",
    works: ["donum-veritatis"],
    lang: "de",
    bibliography: "Instrucción. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "wcf.en": {
    id: "wcf.en",
    works: ["wcf", "wlc"],
    lang: "en",
    bibliography: "Inglés: The Confession of Faith (texto de 1647), Edimburgo, Johnstone, Hunter & Co., 1894.",
    licence: "public-domain",
  },
  "wcf.es": {
    id: "wcf.es",
    works: ["wcf", "wlc"],
    lang: "es",
    bibliography: "Español: Monterrey, Tipografía del Comercio, 1880. Dominio público.",
    licence: "public-domain",
  },
  "dos.la": {
    id: "dos.la",
    works: ["dositheus"],
    lang: "la",
    bibliography:
      "The Acts and Decrees of the Synod of Jerusalem (1672), trad. J. N. W. B. Robertson, Londres, Thomas Baker, 1899, decreto X (pp. 122–124). Dominio público. Solo se cita el inglés.",
    licence: "public-domain",
  },
  "dos.es": {
    id: "dos.es",
    works: ["dositheus"],
    lang: "es",
    bibliography:
      "The Acts and Decrees of the Synod of Jerusalem (1672), trad. J. N. W. B. Robertson, Londres, Thomas Baker, 1899, decreto X (pp. 122–124). Dominio público. Solo se cita el inglés.",
    licence: "public-domain",
  },
  "dos.en": {
    id: "dos.en",
    works: ["dositheus"],
    lang: "en",
    bibliography:
      "The Acts and Decrees of the Synod of Jerusalem (1672), trad. J. N. W. B. Robertson, Londres, Thomas Baker, 1899, decreto X (pp. 122–124). Dominio público. Solo se cita el inglés.",
    licence: "public-domain",
  },
  "dos.de": {
    id: "dos.de",
    works: ["dositheus"],
    lang: "de",
    bibliography:
      "The Acts and Decrees of the Synod of Jerusalem (1672), trad. J. N. W. B. Robertson, Londres, Thomas Baker, 1899, decreto X (pp. 122–124). Dominio público. Solo se cita el inglés.",
    licence: "public-domain",
  },
  "enc1848.la": {
    id: "enc1848.la",
    works: ["enc-1848"],
    lang: "la",
    bibliography:
      "Encíclica de los patriarcas orientales (mayo de 1848), leída en el Internet History Sourcebook de Fordham (copia de orthodoxinfo.com); traductor e impresión desconocidos, «© Paul Halsall», sin uso comercial. Licencia no determinada.",
    licence: "unconfirmed",
  },
  "enc1848.es": {
    id: "enc1848.es",
    works: ["enc-1848"],
    lang: "es",
    bibliography:
      "Encíclica de los patriarcas orientales (mayo de 1848), leída en el Internet History Sourcebook de Fordham (copia de orthodoxinfo.com); traductor e impresión desconocidos, «© Paul Halsall», sin uso comercial. Licencia no determinada.",
    licence: "unconfirmed",
  },
  "enc1848.en": {
    id: "enc1848.en",
    works: ["enc-1848"],
    lang: "en",
    bibliography:
      "Encíclica de los patriarcas orientales (mayo de 1848), leída en el Internet History Sourcebook de Fordham (copia de orthodoxinfo.com); traductor e impresión desconocidos, «© Paul Halsall», sin uso comercial. Licencia no determinada.",
    licence: "unconfirmed",
  },
  "enc1848.de": {
    id: "enc1848.de",
    works: ["enc-1848"],
    lang: "de",
    bibliography:
      "Encíclica de los patriarcas orientales (mayo de 1848), leída en el Internet History Sourcebook de Fordham (copia de orthodoxinfo.com); traductor e impresión desconocidos, «© Paul Halsall», sin uso comercial. Licencia no determinada.",
    licence: "unconfirmed",
  },
  "enc1895.la": {
    id: "enc1895.la",
    works: ["enc-1895"],
    lang: "la",
    bibliography:
      "Encíclica patriarcal y sinodal de Antimo VII (1895), ed. E. Metallinos, Answer of the Great Church of Constantinople to the Papal Encyclical on Union, Manchester, 1896. Dominio público. Solo se cita el inglés.",
    licence: "public-domain",
  },
  "enc1895.es": {
    id: "enc1895.es",
    works: ["enc-1895"],
    lang: "es",
    bibliography:
      "Encíclica patriarcal y sinodal de Antimo VII (1895), ed. E. Metallinos, Answer of the Great Church of Constantinople to the Papal Encyclical on Union, Manchester, 1896. Dominio público. Solo se cita el inglés.",
    licence: "public-domain",
  },
  "enc1895.en": {
    id: "enc1895.en",
    works: ["enc-1895"],
    lang: "en",
    bibliography:
      "Encíclica patriarcal y sinodal de Antimo VII (1895), ed. E. Metallinos, Answer of the Great Church of Constantinople to the Papal Encyclical on Union, Manchester, 1896. Dominio público. Solo se cita el inglés.",
    licence: "public-domain",
  },
  "enc1895.de": {
    id: "enc1895.de",
    works: ["enc-1895"],
    lang: "de",
    bibliography:
      "Encíclica patriarcal y sinodal de Antimo VII (1895), ed. E. Metallinos, Answer of the Great Church of Constantinople to the Papal Encyclical on Union, Manchester, 1896. Dominio público. Solo se cita el inglés.",
    licence: "public-domain",
  },
  "st.la": {
    id: "st.la",
    works: ["status-stwcf-p", "status-stlut-p", "status-stlutac-p", "status-st1848-p", "status-st1895-p"],
    lang: "la",
    bibliography:
      "Línea de estado actual redactada para el sitio (2026-10-21) a partir de las fuentes que nombra. No es texto de la Iglesia nombrada.",
    licence: "site-authored",
  },
  "st.es": {
    id: "st.es",
    works: ["status-stwcf-p", "status-stlut-p", "status-stlutac-p", "status-st1848-p", "status-st1895-p"],
    lang: "es",
    bibliography:
      "Línea de estado actual redactada para el sitio (2026-10-21) a partir de las fuentes que nombra. No es texto de la Iglesia nombrada.",
    licence: "site-authored",
  },
  "st.en": {
    id: "st.en",
    works: ["status-stwcf-p", "status-stlut-p", "status-stlutac-p", "status-st1848-p", "status-st1895-p"],
    lang: "en",
    bibliography:
      "Línea de estado actual redactada para el sitio (2026-10-21) a partir de las fuentes que nombra. No es texto de la Iglesia nombrada.",
    licence: "site-authored",
  },
  "st.de": {
    id: "st.de",
    works: ["status-stwcf-p", "status-stlut-p", "status-stlutac-p", "status-st1848-p", "status-st1895-p"],
    lang: "de",
    bibliography:
      "Línea de estado actual redactada para el sitio (2026-10-21) a partir de las fuentes que nombra. No es texto de la Iglesia nombrada.",
    licence: "site-authored",
  },
  "ayala.la": {
    id: "ayala.la",
    works: ["trent"],
    lang: "la",
    bibliography:
      "Latín y español: El sacrosanto y ecuménico concilio de Trento, traducido al idioma castellano por Don Ignacio López de Ayala, 2.ª ed., Madrid, Imprenta Real, 1785, ses. IV pp. 40–47, leído en el escaneo (archive.org elsacrosantoyec00madgoog).",
    licence: "public-domain",
  },
  "ayala.es": {
    id: "ayala.es",
    works: ["trent"],
    lang: "es",
    bibliography:
      "Latín y español: El sacrosanto y ecuménico concilio de Trento, traducido al idioma castellano por Don Ignacio López de Ayala, 2.ª ed., Madrid, Imprenta Real, 1785, ses. IV pp. 40–47, leído en el escaneo (archive.org elsacrosantoyec00madgoog).",
    licence: "public-domain",
  },
  "ayala.en": {
    id: "ayala.en",
    works: ["trent"],
    lang: "en",
    bibliography:
      "Inglés: J. Waterworth, The Canons and Decrees of the Sacred and Oecumenical Council of Trent, Londres, Burns and Oates, 1848, ses. IV pp. 17–21 (OCR, archive.org cu31924029369760). Dominio público.",
    licence: "public-domain",
  },
  "pft.la": {
    id: "pft.la",
    works: ["pft"],
    lang: "la",
    bibliography:
      "Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), p. 207, leído en el escaneo. Dominio público. Profesión histórica: el texto actual es el de 1989.",
    licence: "public-domain",
  },
  "pft.es": {
    id: "pft.es",
    works: ["pft"],
    lang: "es",
    bibliography:
      "Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), p. 207, leído en el escaneo. Dominio público. Profesión histórica: el texto actual es el de 1989.",
    licence: "public-domain",
  },
  "pft.en": {
    id: "pft.en",
    works: ["pft"],
    lang: "en",
    bibliography:
      "Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), p. 207, leído en el escaneo. Dominio público. Profesión histórica: el texto actual es el de 1989.",
    licence: "public-domain",
  },
  "pft.de": {
    id: "pft.de",
    works: ["pft"],
    lang: "de",
    bibliography:
      "Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), p. 207, leído en el escaneo. Dominio público. Profesión histórica: el texto actual es el de 1989.",
    licence: "public-domain",
  },
  "df.la": {
    id: "df.la",
    works: ["dei-filius"],
    lang: "la",
    bibliography: "Latín: vatican.va (ASS, vol. V, 1869-1870, pp. 481-493).",
    licence: "public-domain",
  },
  "df.en": {
    id: "df.en",
    works: ["dei-filius"],
    lang: "en",
    bibliography:
      "Inglés: Philip Schaff, The Creeds of Christendom, vol. II, Nueva York, Harper & Brothers, 1877 (ejemplar de 1896), OCR. Dominio público.",
    licence: "public-domain",
  },
  "site-translation.dei-filius.es": {
    id: "site-translation.dei-filius.es",
    works: ["dei-filius"],
    lang: "es",
    bibliography: "Translation made for this site; no published edition in this language.",
    licence: "site-authored",
  },
  "dver.la": {
    id: "dver.la",
    works: ["donum-veritatis"],
    lang: "la",
    bibliography:
      "Congregación para la Doctrina de la Fe, instrucción. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "dver.es": {
    id: "dver.es",
    works: ["donum-veritatis"],
    lang: "es",
    bibliography:
      "Congregación para la Doctrina de la Fe, instrucción. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "dver.en": {
    id: "dver.en",
    works: ["donum-veritatis"],
    lang: "en",
    bibliography:
      "Congregación para la Doctrina de la Fe, instrucción. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "dver.de": {
    id: "dver.de",
    works: ["donum-veritatis"],
    lang: "de",
    bibliography:
      "Congregación para la Doctrina de la Fe, instrucción. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "pd.la": {
    id: "pd.la",
    works: ["providentissimus"],
    lang: "la",
    bibliography:
      "León XIII, encíclica. Texto de dominio público; las traducciones de vatican.va son de la Santa Sede. El pasaje es el n. 20 en inglés y los nn. 45–46 en español.",
    licence: "public-domain",
  },
  "pd.es": {
    id: "pd.es",
    works: ["providentissimus"],
    lang: "es",
    bibliography:
      "León XIII, encíclica. Texto de dominio público; las traducciones de vatican.va son de la Santa Sede. El pasaje es el n. 20 en inglés y los nn. 45–46 en español.",
    licence: "public-domain",
  },
  "pd.en": {
    id: "pd.en",
    works: ["providentissimus"],
    lang: "en",
    bibliography:
      "León XIII, encíclica. Texto de dominio público; las traducciones de vatican.va son de la Santa Sede. El pasaje es el n. 20 en inglés y los nn. 45–46 en español.",
    licence: "public-domain",
  },
  "pd.de": {
    id: "pd.de",
    works: ["providentissimus"],
    lang: "de",
    bibliography:
      "León XIII, encíclica. Texto de dominio público; las traducciones de vatican.va son de la Santa Sede. El pasaje es el n. 20 en inglés y los nn. 45–46 en español.",
    licence: "public-domain",
  },
  "das.la": {
    id: "das.la",
    works: ["divino-afflante"],
    lang: "la",
    bibliography:
      "Pío XII, encíclica (tramo de Pío XII del mapa, ©): cita breve. El pasaje es el n. 14 en español y los nn. 21–22 en inglés.",
    licence: "short-quote",
  },
  "das.es": {
    id: "das.es",
    works: ["divino-afflante"],
    lang: "es",
    bibliography:
      "Pío XII, encíclica (tramo de Pío XII del mapa, ©): cita breve. El pasaje es el n. 14 en español y los nn. 21–22 en inglés.",
    licence: "short-quote",
  },
  "das.en": {
    id: "das.en",
    works: ["divino-afflante"],
    lang: "en",
    bibliography:
      "Pío XII, encíclica (tramo de Pío XII del mapa, ©): cita breve. El pasaje es el n. 14 en español y los nn. 21–22 en inglés.",
    licence: "short-quote",
  },
  "das.de": {
    id: "das.de",
    works: ["divino-afflante"],
    lang: "de",
    bibliography:
      "Pío XII, encíclica (tramo de Pío XII del mapa, ©): cita breve. El pasaje es el n. 14 en español y los nn. 21–22 en inglés.",
    licence: "short-quote",
  },
  "vd.la": {
    id: "vd.la",
    works: ["verbum-domini"],
    lang: "la",
    bibliography: "Benedicto XVI, Verbum Domini (30 sep 2010). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "vd.es": {
    id: "vd.es",
    works: ["verbum-domini"],
    lang: "es",
    bibliography: "Benedicto XVI, Verbum Domini (30 sep 2010). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "vd.en": {
    id: "vd.en",
    works: ["verbum-domini"],
    lang: "en",
    bibliography: "Benedicto XVI, Verbum Domini (30 sep 2010). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "vd.de": {
    id: "vd.de",
    works: ["verbum-domini"],
    lang: "de",
    bibliography: "Benedicto XVI, Verbum Domini (30 sep 2010). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "status-stlut-s.la": {
    id: "status-stlut-s.la",
    works: ["status-stlut-s"],
    lang: "la",
    bibliography:
      "Constitución de la LCMS, art. II, «accepts without reservation … All the Symbolical Books»; Constituciones de la ELCA, ed. de octubre de 2024, 2.05–2.06, que nombra «the Apology of the Augsburg Confession, the Smalcald Articles and the Treatise». No se buscó ninguna declaración luterana que retire o matice estos pasajes; la línea no dice nada sobre retiro por eso.",
    licence: "unconfirmed",
  },
  "status-stlut-s.es": {
    id: "status-stlut-s.es",
    works: ["status-stlut-s"],
    lang: "es",
    bibliography:
      "Constitución de la LCMS, art. II, «accepts without reservation … All the Symbolical Books»; Constituciones de la ELCA, ed. de octubre de 2024, 2.05–2.06, que nombra «the Apology of the Augsburg Confession, the Smalcald Articles and the Treatise». No se buscó ninguna declaración luterana que retire o matice estos pasajes; la línea no dice nada sobre retiro por eso.",
    licence: "unconfirmed",
  },
  "status-stlut-s.en": {
    id: "status-stlut-s.en",
    works: ["status-stlut-s"],
    lang: "en",
    bibliography:
      "Constitución de la LCMS, art. II, «accepts without reservation … All the Symbolical Books»; Constituciones de la ELCA, ed. de octubre de 2024, 2.05–2.06, que nombra «the Apology of the Augsburg Confession, the Smalcald Articles and the Treatise». No se buscó ninguna declaración luterana que retire o matice estos pasajes; la línea no dice nada sobre retiro por eso.",
    licence: "unconfirmed",
  },
  "status-stlut-s.de": {
    id: "status-stlut-s.de",
    works: ["status-stlut-s"],
    lang: "de",
    bibliography:
      "Constitución de la LCMS, art. II, «accepts without reservation … All the Symbolical Books»; Constituciones de la ELCA, ed. de octubre de 2024, 2.05–2.06, que nombra «the Apology of the Augsburg Confession, the Smalcald Articles and the Treatise». No se buscó ninguna declaración luterana que retire o matice estos pasajes; la línea no dice nada sobre retiro por eso.",
    licence: "unconfirmed",
  },
  "wcat.en": {
    id: "wcat.en",
    works: ["wlc", "wsc"],
    lang: "en",
    bibliography:
      "Inglés: The Confession of Faith; the Larger and Shorter Catechisms (texto de 1647), Edimburgo, Johnstone, Hunter & Co., 1894 (OCR). El volumen de Monterrey 1880 solo trae la Confesión: el español es traducción asistida por IA. Dominio público.",
    licence: "public-domain",
  },
  "site-translation.wlc.es": {
    id: "site-translation.wlc.es",
    works: ["wlc"],
    lang: "es",
    bibliography: "Translation made for this site; no published edition in this language.",
    licence: "site-authored",
  },
  "site-translation.wsc.es": {
    id: "site-translation.wsc.es",
    works: ["wsc"],
    lang: "es",
    bibliography: "Translation made for this site; no published edition in this language.",
    licence: "site-authored",
  },
  "bfmpre.la": {
    id: "bfmpre.la",
    works: ["bfm-2000"],
    lang: "la",
    bibliography:
      "The Baptist Faith and Message (2000), preámbulo, bfm.sbc.net/preamble/. La página en español de la SBC no trae el preámbulo: el español es traducción asistida por IA. © SBC: cita breve y enlace.",
    licence: "short-quote",
  },
  "bfmpre.es": {
    id: "bfmpre.es",
    works: ["bfm-2000"],
    lang: "es",
    bibliography:
      "The Baptist Faith and Message (2000), preámbulo, bfm.sbc.net/preamble/. La página en español de la SBC no trae el preámbulo: el español es traducción asistida por IA. © SBC: cita breve y enlace.",
    licence: "short-quote",
  },
  "bfmpre.en": {
    id: "bfmpre.en",
    works: ["bfm-2000"],
    lang: "en",
    bibliography:
      "The Baptist Faith and Message (2000), preámbulo, bfm.sbc.net/preamble/. La página en español de la SBC no trae el preámbulo: el español es traducción asistida por IA. © SBC: cita breve y enlace.",
    licence: "short-quote",
  },
  "bfmpre.de": {
    id: "bfmpre.de",
    works: ["bfm-2000"],
    lang: "de",
    bibliography:
      "The Baptist Faith and Message (2000), preámbulo, bfm.sbc.net/preamble/. La página en español de la SBC no trae el preámbulo: el español es traducción asistida por IA. © SBC: cita breve y enlace.",
    licence: "short-quote",
  },
  "trent.la": {
    id: "trent.la",
    works: ["trent"],
    lang: "la",
    bibliography:
      "Latín y castellano: López de Ayala, El sacrosanto y ecuménico concilio de Trento, 2.ª ed., Madrid, Imprenta Real, 1785.",
    licence: "public-domain",
  },
  "trent.es": {
    id: "trent.es",
    works: ["trent"],
    lang: "es",
    bibliography:
      "Latín y castellano: López de Ayala, El sacrosanto y ecuménico concilio de Trento, 2.ª ed., Madrid, Imprenta Real, 1785.",
    licence: "public-domain",
  },
  "trent.en": {
    id: "trent.en",
    works: ["trent"],
    lang: "en",
    bibliography:
      "Inglés: J. Waterworth, The Canons and Decrees of the Sacred and Oecumenical Council of Trent, Londres, Burns and Oates. Dominio público.",
    licence: "public-domain",
  },
  "lateran-4.es": {
    id: "lateran-4.es",
    works: ["lateran-4"],
    lang: "es",
    bibliography: "Español: Los sacrosantos concilios generales y particulares, t. V, Madrid, 1794. Dominio público.",
    licence: "public-domain",
  },
  "site-translation.lateran-4.la": {
    id: "site-translation.lateran-4.la",
    works: ["lateran-4"],
    lang: "la",
    bibliography: "Translation made for this site; no published edition in this language.",
    licence: "site-authored",
  },
  "site-translation.lateran-4.en": {
    id: "site-translation.lateran-4.en",
    works: ["lateran-4"],
    lang: "en",
    bibliography: "Translation made for this site; no published edition in this language.",
    licence: "site-authored",
  },
  "schroeder.la": {
    id: "schroeder.la",
    works: ["vienne"],
    lang: "la",
    bibliography:
      "H. J. Schroeder, Disciplinary Decrees of the General Councils, St. Louis, B. Herder, 1937. Dominio público.",
    licence: "public-domain",
  },
  "schroeder.es": {
    id: "schroeder.es",
    works: ["vienne"],
    lang: "es",
    bibliography:
      "H. J. Schroeder, Disciplinary Decrees of the General Councils, St. Louis, B. Herder, 1937. Dominio público.",
    licence: "public-domain",
  },
  "schroeder.en": {
    id: "schroeder.en",
    works: ["vienne"],
    lang: "en",
    bibliography:
      "H. J. Schroeder, Disciplinary Decrees of the General Councils, St. Louis, B. Herder, 1937. Dominio público.",
    licence: "public-domain",
  },
  "schroeder.de": {
    id: "schroeder.de",
    works: ["vienne"],
    lang: "de",
    bibliography:
      "H. J. Schroeder, Disciplinary Decrees of the General Councils, St. Louis, B. Herder, 1937. Dominio público.",
    licence: "public-domain",
  },
  "gestis-verbisque.la": {
    id: "gestis-verbisque.la",
    works: ["gestis-verbisque"],
    lang: "la",
    bibliography:
      "Nota del Dicasterio; fórmula de aprobación: «El Sumo Pontífice Francisco, en la Audiencia concedida al suscrito Prefecto … el 31 de enero de 2024, aprobó la presente Nota … y ordenó su publicación». Sin grado afirmado. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "gestis-verbisque.es": {
    id: "gestis-verbisque.es",
    works: ["gestis-verbisque"],
    lang: "es",
    bibliography:
      "Nota del Dicasterio; fórmula de aprobación: «El Sumo Pontífice Francisco, en la Audiencia concedida al suscrito Prefecto … el 31 de enero de 2024, aprobó la presente Nota … y ordenó su publicación». Sin grado afirmado. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "gestis-verbisque.en": {
    id: "gestis-verbisque.en",
    works: ["gestis-verbisque"],
    lang: "en",
    bibliography:
      "Nota del Dicasterio; fórmula de aprobación: «El Sumo Pontífice Francisco, en la Audiencia concedida al suscrito Prefecto … el 31 de enero de 2024, aprobó la presente Nota … y ordenó su publicación». Sin grado afirmado. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "gestis-verbisque.de": {
    id: "gestis-verbisque.de",
    works: ["gestis-verbisque"],
    lang: "de",
    bibliography:
      "Nota del Dicasterio; fórmula de aprobación: «El Sumo Pontífice Francisco, en la Audiencia concedida al suscrito Prefecto … el 31 de enero de 2024, aprobó la presente Nota … y ordenó su publicación». Sin grado afirmado. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdf-note-1998.la": {
    id: "cdf-note-1998.la",
    works: ["cdf-note-1998"],
    lang: "la",
    bibliography:
      "Comentario doctrinal de la Congregación (1998), citado como clasificación de la propia Iglesia, sin grado propio. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdf-note-1998.es": {
    id: "cdf-note-1998.es",
    works: ["cdf-note-1998"],
    lang: "es",
    bibliography:
      "Comentario doctrinal de la Congregación (1998), citado como clasificación de la propia Iglesia, sin grado propio. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdf-note-1998.en": {
    id: "cdf-note-1998.en",
    works: ["cdf-note-1998"],
    lang: "en",
    bibliography:
      "Comentario doctrinal de la Congregación (1998), citado como clasificación de la propia Iglesia, sin grado propio. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "cdf-note-1998.de": {
    id: "cdf-note-1998.de",
    works: ["cdf-note-1998"],
    lang: "de",
    bibliography:
      "Comentario doctrinal de la Congregación (1998), citado como clasificación de la propia Iglesia, sin grado propio. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "fidei-depositum.la": {
    id: "fidei-depositum.la",
    works: ["fidei-depositum"],
    lang: "la",
    bibliography: "Constitución apostólica. Citada a través del mapa católico (4.F), solo en inglés.",
    licence: "unconfirmed",
  },
  "fidei-depositum.es": {
    id: "fidei-depositum.es",
    works: ["fidei-depositum"],
    lang: "es",
    bibliography: "Constitución apostólica. Citada a través del mapa católico (4.F), solo en inglés.",
    licence: "unconfirmed",
  },
  "fidei-depositum.en": {
    id: "fidei-depositum.en",
    works: ["fidei-depositum"],
    lang: "en",
    bibliography: "Constitución apostólica. Citada a través del mapa católico (4.F), solo en inglés.",
    licence: "unconfirmed",
  },
  "fidei-depositum.de": {
    id: "fidei-depositum.de",
    works: ["fidei-depositum"],
    lang: "de",
    bibliography: "Constitución apostólica. Citada a través del mapa católico (4.F), solo en inglés.",
    licence: "unconfirmed",
  },
  "mogila.la": {
    id: "mogila.la",
    works: ["mogila"],
    lang: "la",
    bibliography: "Edición de Overbeck, 1898, pp. 79–80.",
    licence: "unconfirmed",
  },
  "mogila.es": {
    id: "mogila.es",
    works: ["mogila"],
    lang: "es",
    bibliography: "Edición de Overbeck, 1898, pp. 79–80.",
    licence: "unconfirmed",
  },
  "mogila.en": {
    id: "mogila.en",
    works: ["mogila"],
    lang: "en",
    bibliography: "Edición de Overbeck, 1898, pp. 79–80.",
    licence: "unconfirmed",
  },
  "mogila.de": {
    id: "mogila.de",
    works: ["mogila"],
    lang: "de",
    bibliography: "Edición de Overbeck, 1898, pp. 79–80.",
    licence: "unconfirmed",
  },
  "schaff.la": {
    id: "schaff.la",
    works: ["philaret"],
    lang: "la",
    bibliography:
      "Filareto, Catecismo extenso, en Schaff, Creeds of Christendom II, Harper, pp. 491–492. Dominio público.",
    licence: "public-domain",
  },
  "schaff.es": {
    id: "schaff.es",
    works: ["philaret"],
    lang: "es",
    bibliography:
      "Filareto, Catecismo extenso, en Schaff, Creeds of Christendom II, Harper, pp. 491–492. Dominio público.",
    licence: "public-domain",
  },
  "schaff.en": {
    id: "schaff.en",
    works: ["philaret"],
    lang: "en",
    bibliography:
      "Filareto, Catecismo extenso, en Schaff, Creeds of Christendom II, Harper, pp. 491–492. Dominio público.",
    licence: "public-domain",
  },
  "schaff.de": {
    id: "schaff.de",
    works: ["philaret"],
    lang: "de",
    bibliography:
      "Filareto, Catecismo extenso, en Schaff, Creeds of Christendom II, Harper, pp. 491–492. Dominio público.",
    licence: "public-domain",
  },
  "oros.en": {
    id: "oros.en",
    works: ["oros-1755"],
    lang: "en",
    bibliography:
      "Inglés: traducción de G. Metallinos, leída en oodegr.com (©: citas breves). El griego (Mansi 38:617–622) no se leyó.",
    licence: "short-quote",
  },
  "site-translation.oros-1755.es": {
    id: "site-translation.oros-1755.es",
    works: ["oros-1755"],
    lang: "es",
    bibliography: "Translation made for this site; no published edition in this language.",
    licence: "site-authored",
  },
  "robertson.la": {
    id: "robertson.la",
    works: ["dositheus"],
    lang: "la",
    bibliography:
      "J. N. W. B. Robertson, The Acts and Decrees of the Synod of Jerusalem, Londres, 1899. Dominio público.",
    licence: "public-domain",
  },
  "robertson.es": {
    id: "robertson.es",
    works: ["dositheus"],
    lang: "es",
    bibliography:
      "J. N. W. B. Robertson, The Acts and Decrees of the Synod of Jerusalem, Londres, 1899. Dominio público.",
    licence: "public-domain",
  },
  "robertson.en": {
    id: "robertson.en",
    works: ["dositheus"],
    lang: "en",
    bibliography:
      "J. N. W. B. Robertson, The Acts and Decrees of the Synod of Jerusalem, Londres, 1899. Dominio público.",
    licence: "public-domain",
  },
  "robertson.de": {
    id: "robertson.de",
    works: ["dositheus"],
    lang: "de",
    bibliography:
      "J. N. W. B. Robertson, The Acts and Decrees of the Synod of Jerusalem, Londres, 1899. Dominio público.",
    licence: "public-domain",
  },
  "bfm.es": {
    id: "bfm.es",
    works: ["bfm-2000"],
    lang: "es",
    bibliography:
      "Español: Fe y Mensaje Bautistas, texto oficial de la SBC, leído en Wayback (15 jun 2026). © SBC: cita breve y enlace.",
    licence: "short-quote",
  },
  "site-translation.bfm-2000.en": {
    id: "site-translation.bfm-2000.en",
    works: ["bfm-2000"],
    lang: "en",
    bibliography: "Translation made for this site; no published edition in this language.",
    licence: "site-authored",
  },
  "ag.la": {
    id: "ag.la",
    works: ["ag-sft"],
    lang: "la",
    bibliography:
      "Asambleas de Dios (EE. UU.), Statement of Fundamental Truths y Declaración de Verdades Fundamentales, arts. 5 y 6 («El bautismo en agua»), leídos en Wayback (2026). © Concilio General de las Asambleas de Dios: cita breve.",
    licence: "short-quote",
  },
  "ag.es": {
    id: "ag.es",
    works: ["ag-sft"],
    lang: "es",
    bibliography:
      "Asambleas de Dios (EE. UU.), Statement of Fundamental Truths y Declaración de Verdades Fundamentales, arts. 5 y 6 («El bautismo en agua»), leídos en Wayback (2026). © Concilio General de las Asambleas de Dios: cita breve.",
    licence: "short-quote",
  },
  "ag.en": {
    id: "ag.en",
    works: ["ag-sft"],
    lang: "en",
    bibliography:
      "Asambleas de Dios (EE. UU.), Statement of Fundamental Truths y Declaración de Verdades Fundamentales, arts. 5 y 6 («El bautismo en agua»), leídos en Wayback (2026). © Concilio General de las Asambleas de Dios: cita breve.",
    licence: "short-quote",
  },
  "ag.de": {
    id: "ag.de",
    works: ["ag-sft"],
    lang: "de",
    bibliography:
      "Asambleas de Dios (EE. UU.), Statement of Fundamental Truths y Declaración de Verdades Fundamentales, arts. 5 y 6 («El bautismo en agua»), leídos en Wayback (2026). © Concilio General de las Asambleas de Dios: cita breve.",
    licence: "short-quote",
  },
  "lateran-4.la": {
    id: "lateran-4.la",
    works: ["lateran-4"],
    lang: "la",
    bibliography:
      "Latín e inglés: H. J. Schroeder, Disciplinary Decrees of the General Councils, St. Louis, B. Herder, 1937.",
    licence: "public-domain",
  },
  "lateran-4.en": {
    id: "lateran-4.en",
    works: ["lateran-4"],
    lang: "en",
    bibliography:
      "Latín e inglés: H. J. Schroeder, Disciplinary Decrees of the General Councils, St. Louis, B. Herder, 1937.",
    licence: "public-domain",
  },
  "florence-exsultate.la": {
    id: "florence-exsultate.la",
    works: ["florence-exsultate"],
    lang: "la",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798. Dominio público. Columna 1057.",
    licence: "public-domain",
  },
  "florence-exsultate.es": {
    id: "florence-exsultate.es",
    works: ["florence-exsultate"],
    lang: "es",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798. Dominio público. Columna 1057.",
    licence: "public-domain",
  },
  "florence-exsultate.en": {
    id: "florence-exsultate.en",
    works: ["florence-exsultate"],
    lang: "en",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798. Dominio público. Columna 1057.",
    licence: "public-domain",
  },
  "florence-exsultate.de": {
    id: "florence-exsultate.de",
    works: ["florence-exsultate"],
    lang: "de",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798. Dominio público. Columna 1057.",
    licence: "public-domain",
  },
  "florence-laetentur.la": {
    id: "florence-laetentur.la",
    works: ["florence-laetentur"],
    lang: "la",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798. Dominio público. Columna 1031. No se halló inglés ni español de dominio público.",
    licence: "public-domain",
  },
  "florence-laetentur.es": {
    id: "florence-laetentur.es",
    works: ["florence-laetentur"],
    lang: "es",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798. Dominio público. Columna 1031. No se halló inglés ni español de dominio público.",
    licence: "public-domain",
  },
  "florence-laetentur.en": {
    id: "florence-laetentur.en",
    works: ["florence-laetentur"],
    lang: "en",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798. Dominio público. Columna 1031. No se halló inglés ni español de dominio público.",
    licence: "public-domain",
  },
  "florence-laetentur.de": {
    id: "florence-laetentur.de",
    works: ["florence-laetentur"],
    lang: "de",
    bibliography:
      "Mansi, Sacrorum conciliorum nova et amplissima collectio, t. 31, Venecia, 1798. Dominio público. Columna 1031. No se halló inglés ni español de dominio público.",
    licence: "public-domain",
  },
  "roman-catechism.la": {
    id: "roman-catechism.la",
    works: ["roman-catechism"],
    lang: "la",
    bibliography:
      "Catecismo Romano, trad. Agustín Zorita, t. I, Barcelona, Imprenta de Sierra, 1833 (latín y castellano). Dominio público.",
    licence: "public-domain",
  },
  "roman-catechism.es": {
    id: "roman-catechism.es",
    works: ["roman-catechism"],
    lang: "es",
    bibliography:
      "Catecismo Romano, trad. Agustín Zorita, t. I, Barcelona, Imprenta de Sierra, 1833 (latín y castellano). Dominio público.",
    licence: "public-domain",
  },
  "roman-catechism.en": {
    id: "roman-catechism.en",
    works: ["roman-catechism"],
    lang: "en",
    bibliography:
      "Inglés: J. Donovan, The Catechism of the Council of Trent, Baltimore, Lucas Brothers, [1829], p. 162. Dominio público.",
    licence: "public-domain",
  },
  "roman-catechism.de": {
    id: "roman-catechism.de",
    works: ["roman-catechism"],
    lang: "de",
    bibliography:
      "Catecismo Romano, trad. Agustín Zorita, t. I, Barcelona, Imprenta de Sierra, 1833 (latín y castellano). Dominio público.",
    licence: "public-domain",
  },
  "sc.la": {
    id: "sc.la",
    works: ["sc"],
    lang: "la",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "sc.es": {
    id: "sc.es",
    works: ["sc"],
    lang: "es",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "sc.en": {
    id: "sc.en",
    works: ["sc"],
    lang: "en",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "sc.de": {
    id: "sc.de",
    works: ["sc"],
    lang: "de",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "lg.la": {
    id: "lg.la",
    works: ["lg"],
    lang: "la",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "lg.es": {
    id: "lg.es",
    works: ["lg"],
    lang: "es",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "lg.en": {
    id: "lg.en",
    works: ["lg"],
    lang: "en",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "lg.de": {
    id: "lg.de",
    works: ["lg"],
    lang: "de",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "oe.la": {
    id: "oe.la",
    works: ["oe"],
    lang: "la",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "oe.es": {
    id: "oe.es",
    works: ["oe"],
    lang: "es",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "oe.en": {
    id: "oe.en",
    works: ["oe"],
    lang: "en",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "oe.de": {
    id: "oe.de",
    works: ["oe"],
    lang: "de",
    bibliography: "Vaticano II. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "mysterium-fidei.la": {
    id: "mysterium-fidei.la",
    works: ["mysterium-fidei"],
    lang: "la",
    bibliography:
      "Encíclica. © Libreria Editrice Vaticana: cita breve y enlace. La página en español une los números 46 y 47 del inglés.",
    licence: "short-quote",
  },
  "mysterium-fidei.es": {
    id: "mysterium-fidei.es",
    works: ["mysterium-fidei"],
    lang: "es",
    bibliography:
      "Encíclica. © Libreria Editrice Vaticana: cita breve y enlace. La página en español une los números 46 y 47 del inglés.",
    licence: "short-quote",
  },
  "mysterium-fidei.en": {
    id: "mysterium-fidei.en",
    works: ["mysterium-fidei"],
    lang: "en",
    bibliography:
      "Encíclica. © Libreria Editrice Vaticana: cita breve y enlace. La página en español une los números 46 y 47 del inglés.",
    licence: "short-quote",
  },
  "mysterium-fidei.de": {
    id: "mysterium-fidei.de",
    works: ["mysterium-fidei"],
    lang: "de",
    bibliography:
      "Encíclica. © Libreria Editrice Vaticana: cita breve y enlace. La página en español une los números 46 y 47 del inglés.",
    licence: "short-quote",
  },
  "ede.la": {
    id: "ede.la",
    works: ["ede"],
    lang: "la",
    bibliography: "Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "ede.es": {
    id: "ede.es",
    works: ["ede"],
    lang: "es",
    bibliography: "Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "ede.en": {
    id: "ede.en",
    works: ["ede"],
    lang: "en",
    bibliography: "Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "ede.de": {
    id: "ede.de",
    works: ["ede"],
    lang: "de",
    bibliography: "Encíclica. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "misal.la": {
    id: "misal.la",
    works: ["misal"],
    lang: "la",
    bibliography: "Citada en el Catecismo, n. 1353.",
    licence: "unconfirmed",
  },
  "misal.es": {
    id: "misal.es",
    works: ["misal"],
    lang: "es",
    bibliography: "Citada en el Catecismo, n. 1353.",
    licence: "unconfirmed",
  },
  "misal.en": {
    id: "misal.en",
    works: ["misal"],
    lang: "en",
    bibliography: "Citada en el Catecismo, n. 1353.",
    licence: "unconfirmed",
  },
  "misal.de": {
    id: "misal.de",
    works: ["misal"],
    lang: "de",
    bibliography: "Citada en el Catecismo, n. 1353.",
    licence: "unconfirmed",
  },
  "ogmr.la": {
    id: "ogmr.la",
    works: ["ogmr"],
    lang: "la",
    bibliography:
      "Citada en Benedicto XVI, Sacramentum caritatis 48 (nota 149: «Ibíd. 79c.»). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "ogmr.es": {
    id: "ogmr.es",
    works: ["ogmr"],
    lang: "es",
    bibliography:
      "Citada en Benedicto XVI, Sacramentum caritatis 48 (nota 149: «Ibíd. 79c.»). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "ogmr.en": {
    id: "ogmr.en",
    works: ["ogmr"],
    lang: "en",
    bibliography:
      "Citada en Benedicto XVI, Sacramentum caritatis 48 (nota 149: «Ibíd. 79c.»). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "ogmr.de": {
    id: "ogmr.de",
    works: ["ogmr"],
    lang: "de",
    bibliography:
      "Citada en Benedicto XVI, Sacramentum caritatis 48 (nota 149: «Ibíd. 79c.»). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "sacramentum-caritatis.la": {
    id: "sacramentum-caritatis.la",
    works: ["sacramentum-caritatis"],
    lang: "la",
    bibliography: "Exhortación apostólica postsinodal. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "sacramentum-caritatis.es": {
    id: "sacramentum-caritatis.es",
    works: ["sacramentum-caritatis"],
    lang: "es",
    bibliography: "Exhortación apostólica postsinodal. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "sacramentum-caritatis.en": {
    id: "sacramentum-caritatis.en",
    works: ["sacramentum-caritatis"],
    lang: "en",
    bibliography: "Exhortación apostólica postsinodal. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "sacramentum-caritatis.de": {
    id: "sacramentum-caritatis.de",
    works: ["sacramentum-caritatis"],
    lang: "de",
    bibliography: "Exhortación apostólica postsinodal. © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "pcpcu-2001.la": {
    id: "pcpcu-2001.la",
    works: ["pcpcu-2001"],
    lang: "la",
    bibliography: "christianunity.va (inglés). © Santa Sede.",
    licence: "short-quote",
  },
  "pcpcu-2001.es": {
    id: "pcpcu-2001.es",
    works: ["pcpcu-2001"],
    lang: "es",
    bibliography: "christianunity.va (inglés). © Santa Sede.",
    licence: "short-quote",
  },
  "pcpcu-2001.en": {
    id: "pcpcu-2001.en",
    works: ["pcpcu-2001"],
    lang: "en",
    bibliography: "christianunity.va (inglés). © Santa Sede.",
    licence: "short-quote",
  },
  "pcpcu-2001.de": {
    id: "pcpcu-2001.de",
    works: ["pcpcu-2001"],
    lang: "de",
    bibliography: "christianunity.va (inglés). © Santa Sede.",
    licence: "short-quote",
  },
  "jp-audience-1989.la": {
    id: "jp-audience-1989.la",
    works: ["jp-audience-1989"],
    lang: "la",
    bibliography: "Audiencia general (español). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "jp-audience-1989.es": {
    id: "jp-audience-1989.es",
    works: ["jp-audience-1989"],
    lang: "es",
    bibliography: "Audiencia general (español). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "jp-audience-1989.en": {
    id: "jp-audience-1989.en",
    works: ["jp-audience-1989"],
    lang: "en",
    bibliography: "Audiencia general (español). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "jp-audience-1989.de": {
    id: "jp-audience-1989.de",
    works: ["jp-audience-1989"],
    lang: "de",
    bibliography: "Audiencia general (español). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "jp-audience-1991.la": {
    id: "jp-audience-1991.la",
    works: ["jp-audience-1991"],
    lang: "la",
    bibliography: "Audiencia general (español). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "jp-audience-1991.es": {
    id: "jp-audience-1991.es",
    works: ["jp-audience-1991"],
    lang: "es",
    bibliography: "Audiencia general (español). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "jp-audience-1991.en": {
    id: "jp-audience-1991.en",
    works: ["jp-audience-1991"],
    lang: "en",
    bibliography: "Audiencia general (español). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "jp-audience-1991.de": {
    id: "jp-audience-1991.de",
    works: ["jp-audience-1991"],
    lang: "de",
    bibliography: "Audiencia general (español). © Libreria Editrice Vaticana: cita breve y enlace.",
    licence: "short-quote",
  },
  "florence-cantate.la": {
    id: "florence-cantate.la",
    works: ["florence-cantate"],
    lang: "la",
    bibliography:
      "Bula de unión con los coptos y los etíopes, sesión XI, 4 feb 1442 (1441 según el cómputo florentino). Latín oficial en vatican.va, leído el 2026-10-21. Edición citada: Alberigo et al., Conciliorum Oecumenicorum Decreta, Bolonia 2013, pp. 567–582 (libro no consultado). Cita breve y enlace.",
    licence: "short-quote",
  },
  "florence-cantate.es": {
    id: "florence-cantate.es",
    works: ["florence-cantate"],
    lang: "es",
    bibliography:
      "Bula de unión con los coptos y los etíopes, sesión XI, 4 feb 1442 (1441 según el cómputo florentino). Latín oficial en vatican.va, leído el 2026-10-21. Edición citada: Alberigo et al., Conciliorum Oecumenicorum Decreta, Bolonia 2013, pp. 567–582 (libro no consultado). Cita breve y enlace.",
    licence: "short-quote",
  },
  "florence-cantate.en": {
    id: "florence-cantate.en",
    works: ["florence-cantate"],
    lang: "en",
    bibliography:
      "Bula de unión con los coptos y los etíopes, sesión XI, 4 feb 1442 (1441 según el cómputo florentino). Latín oficial en vatican.va, leído el 2026-10-21. Edición citada: Alberigo et al., Conciliorum Oecumenicorum Decreta, Bolonia 2013, pp. 567–582 (libro no consultado). Cita breve y enlace.",
    licence: "short-quote",
  },
  "florence-cantate.de": {
    id: "florence-cantate.de",
    works: ["florence-cantate"],
    lang: "de",
    bibliography:
      "Bula de unión con los coptos y los etíopes, sesión XI, 4 feb 1442 (1441 según el cómputo florentino). Latín oficial en vatican.va, leído el 2026-10-21. Edición citada: Alberigo et al., Conciliorum Oecumenicorum Decreta, Bolonia 2013, pp. 567–582 (libro no consultado). Cita breve y enlace.",
    licence: "short-quote",
  },
  "status-stwcf.la": {
    id: "status-stwcf.la",
    works: ["status-stwcf"],
    lang: "la",
    bibliography:
      "Texto vigente de la OPC (opc.org/wcf.html, leído 2026-10-17); Iglesia de Escocia, Asamblea General de 1986, Acta V (PDF leído 2026-10-19); INPM: edición de El Faro aprobada por su Asamblea General.",
    licence: "unconfirmed",
  },
  "status-stwcf.es": {
    id: "status-stwcf.es",
    works: ["status-stwcf"],
    lang: "es",
    bibliography:
      "Texto vigente de la OPC (opc.org/wcf.html, leído 2026-10-17); Iglesia de Escocia, Asamblea General de 1986, Acta V (PDF leído 2026-10-19); INPM: edición de El Faro aprobada por su Asamblea General.",
    licence: "unconfirmed",
  },
  "status-stwcf.en": {
    id: "status-stwcf.en",
    works: ["status-stwcf"],
    lang: "en",
    bibliography:
      "Texto vigente de la OPC (opc.org/wcf.html, leído 2026-10-17); Iglesia de Escocia, Asamblea General de 1986, Acta V (PDF leído 2026-10-19); INPM: edición de El Faro aprobada por su Asamblea General.",
    licence: "unconfirmed",
  },
  "status-stwcf.de": {
    id: "status-stwcf.de",
    works: ["status-stwcf"],
    lang: "de",
    bibliography:
      "Texto vigente de la OPC (opc.org/wcf.html, leído 2026-10-17); Iglesia de Escocia, Asamblea General de 1986, Acta V (PDF leído 2026-10-19); INPM: edición de El Faro aprobada por su Asamblea General.",
    licence: "unconfirmed",
  },
  "status-stsa.la": {
    id: "status-stsa.la",
    works: ["status-stsa"],
    lang: "la",
    bibliography:
      "LCMS, Handbook 2023, Constitución, art. II; ELCA, constitución, ed. de octubre de 2024, 2.05–2.06. No se buscó ninguna declaración luterana que retire o matice este pasaje.",
    licence: "unconfirmed",
  },
  "status-stsa.es": {
    id: "status-stsa.es",
    works: ["status-stsa"],
    lang: "es",
    bibliography:
      "LCMS, Handbook 2023, Constitución, art. II; ELCA, constitución, ed. de octubre de 2024, 2.05–2.06. No se buscó ninguna declaración luterana que retire o matice este pasaje.",
    licence: "unconfirmed",
  },
  "status-stsa.en": {
    id: "status-stsa.en",
    works: ["status-stsa"],
    lang: "en",
    bibliography:
      "LCMS, Handbook 2023, Constitución, art. II; ELCA, constitución, ed. de octubre de 2024, 2.05–2.06. No se buscó ninguna declaración luterana que retire o matice este pasaje.",
    licence: "unconfirmed",
  },
  "status-stsa.de": {
    id: "status-stsa.de",
    works: ["status-stsa"],
    lang: "de",
    bibliography:
      "LCMS, Handbook 2023, Constitución, art. II; ELCA, constitución, ed. de octubre de 2024, 2.05–2.06. No se buscó ninguna declaración luterana que retire o matice este pasaje.",
    licence: "unconfirmed",
  },
  "status-st1895.la": {
    id: "status-st1895.la",
    works: ["status-st1895"],
    lang: "la",
    bibliography:
      "diálogo de Alejandría 2023, §3.10–3.11, christianunity.va; comentario del Patriarcado de Moscú de 2019, mospat.ru. Sin retractación sinodal localizada.",
    licence: "unconfirmed",
  },
  "status-st1895.es": {
    id: "status-st1895.es",
    works: ["status-st1895"],
    lang: "es",
    bibliography:
      "diálogo de Alejandría 2023, §3.10–3.11, christianunity.va; comentario del Patriarcado de Moscú de 2019, mospat.ru. Sin retractación sinodal localizada.",
    licence: "unconfirmed",
  },
  "status-st1895.en": {
    id: "status-st1895.en",
    works: ["status-st1895"],
    lang: "en",
    bibliography:
      "diálogo de Alejandría 2023, §3.10–3.11, christianunity.va; comentario del Patriarcado de Moscú de 2019, mospat.ru. Sin retractación sinodal localizada.",
    licence: "unconfirmed",
  },
  "status-st1895.de": {
    id: "status-st1895.de",
    works: ["status-st1895"],
    lang: "de",
    bibliography:
      "diálogo de Alejandría 2023, §3.10–3.11, christianunity.va; comentario del Patriarcado de Moscú de 2019, mospat.ru. Sin retractación sinodal localizada.",
    licence: "unconfirmed",
  },
} satisfies Record<string, Edition>;

export type EditionId = keyof typeof editions;
