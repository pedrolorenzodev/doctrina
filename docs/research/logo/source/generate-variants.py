import json, sys
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

SP = "/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/9116ed4c-5158-4ffc-9eb8-92d9abfa9bd4/scratchpad"
NEWS = SP + "/fonts/Newsreader[opsz,wght].ttf"
NEWS_I = SP + "/fonts/Newsreader-Italic[opsz,wght].ttf"
GENT_B = SP + "/fonts/GentiumBookPlus-Bold.ttf"

_cache = {}


def load(path, axes=None):
    key = (path, tuple(sorted((axes or {}).items())))
    if key not in _cache:
        f = TTFont(path)
        if axes:
            f = instancer.instantiateVariableFont(f, axes, inplace=False)
        _cache[key] = f
    return _cache[key]


def glyph(path, ch, h, cx=16, cy=16, axes=None, w=None, dx=0, dy=0):
    f = load(path, axes)
    gs = f.getGlyphSet()
    name = f.getBestCmap()[ord(ch)]
    bp = BoundsPen(gs)
    gs[name].draw(bp)
    x0, y0, x1, y1 = bp.bounds
    s = h / (y1 - y0)
    if w is not None:
        s = min(s, w / (x1 - x0))
    xc, yc = (x0 + x1) / 2, (y0 + y1) / 2
    pen = SVGPathPen(gs, ntos=lambda v: ("%.2f" % v).rstrip("0").rstrip("."))
    tp = TransformPen(pen, (s, 0, 0, -s, cx + dx - xc * s, cy + dy + yc * s))
    gs[name].draw(tp)
    bw, bh = (x1 - x0) * s, (y1 - y0) * s
    return pen.getCommands(), (bw, bh)


def r(x, y, w, h, fill="F", rx=0):
    rxs = f' rx="{rx}"' if rx else ""
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}"{rxs} fill="{{{fill}}}"/>'


def p(d, fill="F"):
    return f'<path d="{d}" fill="{{{fill}}}"/>'


def line(d, w, stroke="F", cap="butt", join="miter"):
    return f'<path d="{d}" fill="none" stroke="{{{stroke}}}" stroke-width="{w}" stroke-linecap="{cap}" stroke-linejoin="{join}"/>'


SS = SP + "/fonts/SourceSerif4.ttf"


def gk(ch, h, cx=16, cy=16, **kw):
    return glyph(SS, ch, h, cx, cy, axes={"opsz": 8, "wght": 700}, **kw)


V = []


def add(id, fam, name, idea, body, note, name_dep=False, risk="", tile_kind="tile"):
    V.append(dict(id=id, family=fam, name=name, idea=idea, body="".join(body), note=note,
                  nameDependent=name_dep, risk=risk))


# ---------- Family A: abstract sign from the site's own devices
add("A1", "A", "Columnas Hexapla",
    "Tres columnas paralelas, la del medio más alta: la que se está leyendo.",
    [r(5.5, 9, 5, 14), r(13.5, 7, 5, 18, "H"), r(21.5, 9, 5, 14)],
    "Las columnas paralelas son el antecesor de comparar textos (Hexapla de Orígenes, antes del 240). Ninguna tradición moderna las tiene.",
    risk="Se parece a un gráfico de barras si las columnas no son iguales y cuadradas.")

add("A2", "A", "Dos columnas",
    "Dos losas con un surco: un libro abierto visto como bloques.",
    [r(6.5, 6, 9, 20), r(18.5, 10, 7, 16)],
    "La versión mínima de «dos textos enfrentados».",
    risk="Parecido al ícono de pausa si las losas son iguales; por eso son desiguales.")

add("A3", "A", "Arco de canon",
    "Un arco con dos columnas, como las tablas de Eusebio.",
    [line("M7 27V15a9 9 0 0 1 18 0V27", 3.4, "F"), r(11.2, 15, 3.2, 12, "H"), r(17.6, 15, 3.2, 12, "H")],
    "Las tablas canónicas de Eusebio son arcos con columnas en casi todos los manuscritos griegos y latinos.",
    risk="Se lee como banco o museo; el Internet Archive y Bible Gateway ya usan puertas y columnas.")

add("A4", "A", "Glosa al margen",
    "Cuatro líneas de texto y una marca corta en el margen.",
    [r(12, 7, 15, 3), r(12, 12.5, 15, 3), r(12, 18, 15, 3), r(12, 23.5, 15, 3), r(5, 12.5, 5, 3, "H")],
    "Las notas y subrayados al margen son el centro del lector; el paragraphos griego era una línea en el margen.",
    risk="Parece el ícono genérico de «alinear texto» si no es por la marca de color.")

add("A5", "A", "La regla",
    "Un eje con marcas; una sale de línea.",
    [r(6, 5, 3.4, 22), r(11.4, 7, 6, 3), r(11.4, 12.5, 6, 3), r(11.4, 18, 13, 3, "H"), r(11.4, 23.5, 6, 3)],
    "La regla lateral y la regla del tiempo son componentes propios del sitio.",
    risk="A 16 px las marcas finas se pegan.")

add("A6", "A", "Canto del códice",
    "Un libro cerrado visto de canto: lomo y tres cuadernillos.",
    [r(5, 6, 3.6, 20), r(10.6, 6.5, 16, 4.6), r(10.6, 13.7, 16, 4.6), r(10.6, 20.9, 16, 4.6)],
    "El códice es la forma de libro que adoptó el cristianismo temprano; evita el «Biblia abierta» de siempre.",
    risk="Parecido a un ícono de «base de datos» o «pila».")

add("A7", "A", "El lugar vacío",
    "Tres cuadrados y uno distinto: una pregunta abierta entre las voces.",
    [r(6, 6, 9.5, 9.5), r(6, 16.5, 9.5, 9.5), r(16.5, 16.5, 9.5, 9.5), r(16.5, 6, 9.5, 9.5, "H")],
    "Un signo que no describe nada; el espacio abstracto está libre entre los sitios cristianos (6 de 36).",
    risk="Genérico de startup si no tiene una idea detrás.")

# ---------- Family B: early-Christian / scribal symbol
add("B1", "B", "Staurograma",
    "La ligadura tau-rho de los papiros de hacia el 200.",
    [r(6, 5, 20, 3.6), line("M15 6.5V27", 3.6, "F"), line("M15 12.4H20.2a4.3 4.3 0 0 1 0 8.6H15", 3.6, "F")],
    "Es la primera referencia visual cristiana a la cruz, un recurso de escriba en P66 y P75. Casi nadie lo usa como marca.",
    risk="Hurtado lo lee como un crucificado en miniatura; ciertos lectores reformados podrían objetarlo. Se puede leer como una «P» con sombrero.")

d, _ = gk("Θ", 11.5, 16, 19.2)
d2, _ = gk("Σ", 11.5, 16, 19.2)
th1, (w1, h1) = gk("Θ", 11.5, 10.8, 19.5)
sg1, (w2, h2) = gk("Σ", 11.5, 21.6, 19.5)
add("B2", "B", "Nomen sacrum ΘΣ",
    "«Dios» abreviado con la raya de reverencia encima.",
    [p(th1), p(sg1), r(5.5, 6, 21, 2.6, "H")],
    "Los nomina sacra son la marca de reverencia de los manuscritos más antiguos, compartida por todos.",
    risk="Dos letras y una raya: a 16 px es el caso difícil. Se incluye para verlo fallar.")

th, (tw, th_) = gk("Θ", 15, 16, 19.5)
add("B3", "B", "Θ con raya",
    "Una sola theta bajo la raya de los nomina sacra.",
    [f'<ellipse cx="16" cy="19.2" rx="6.2" ry="7.6" fill="none" stroke="{{F}}" stroke-width="2.9"/>', r(10, 18, 12, 2.4), r(8, 5, 16, 2.8, "H")],
    "Θ de θεός y de teología, con la raya del escriba. Es la letra de D1 más una idea que la hace propia.",
    risk="Parecido al signo matemático del conjunto vacío o a una theta cualquiera sin la raya.")

add("B4", "B", "Códice cerrado",
    "Un bloque con lomo y dos muescas: el libro como forma, sin dibujo.",
    [r(8, 5, 17, 22, "F", 2), r(8, 5, 4.2, 22, "H"), r(22, 10, 3, 2.6, "H"), r(22, 19.4, 3, 2.6, "H")],
    "El códice distingue al cristianismo de los siglos II y III. Un bloque macizo evita la Biblia abierta.",
    risk="Puede leerse como puerta o como celular.")

add("B5", "B", "Crismón (control)",
    "El Chi-Rho de siempre, dibujado macizo.",
    [line("M16 4V28", 3.4, "F"), line("M16 4.6H19.4a4.7 4.7 0 0 1 0 9.4H16", 3.4, "F"), line("M8.5 9L23.5 25M23.5 9L8.5 25", 3.2, "H")],
    "Se incluye como control: es lo que todos esperan y sirve para medir a las otras contra ese lugar común.",
    risk="Compartido pero imperial y ya usado por incontables iglesias; a 16 px las diagonales se ensucian.")

add("B7", "B", "Alfa y Omega",
    "Las dos letras juntas, principio y fin.",
    [],
    "Apocalipsis 1:8; está en las catacumbas.",
    risk="Dos letras: a 16 px es difícil; es un lugar común cristiano.")
# B7 body built below (needs glyph)
al, (aw, ah) = gk("Α", 12, 9.6, 16)
om, (ow, oh) = gk("Ω", 12, 22.2, 16)
V[-1]["body"] = p(al) + p(om, "H")

add("B8", "B", "La raya sola",
    "Solo la raya del escriba sobre una baldosa vacía: el nombre se reverencia, no se dibuja.",
    [r(7, 11.5, 18, 3.6, "H")],
    "Un signo que se niega a representar es lo más neutral que hay entre reformados y ortodoxos.",
    risk="Se lee como «minimizar» o como un guion. Sirve como límite del experimento.")

# ---------- Family C: typographic monogram (name-dependent)
dD, (dw, dh) = glyph(NEWS, "D", 17, 16, 16, axes={"opsz": 6, "wght": 640, "wdth": None} if False else {"opsz": 6, "wght": 640})
add("C1", "C", "D de Newsreader",
    "La D del tipo de títulos del sitio, con el corte de texto (opsz 6) para que aguante a 16 px.",
    [p(dD)],
    "Una letra sobre baldosa es el patrón editorial más común que se lee a 16 px (Aeon, The Economist, Loeb).",
    name_dep=True, risk="Se rompe si cambia el nombre. Hay muchas D como marca.")

dd, (ddw, ddh) = glyph(NEWS_I, "d", 20, 16, 16, axes={"opsz": 6, "wght": 560})
add("C2", "C", "d cursiva",
    "Una d minúscula cursiva: la ascendente da una silueta propia.",
    [p(dd)],
    "La minúscula reconoce más (la «a» de Aeon, la «g» de Goodreads).",
    name_dep=True, risk="La cursiva se afina a 16 px; depende del nombre.")

dD3, (d3w, d3h) = glyph(NEWS, "D", 14.5, 16, 19.7, axes={"opsz": 6, "wght": 640})
add("C3", "C", "D con raya",
    "La D bajo la raya de los nomina sacra.",
    [p(dD3), r(8.5, 5.5, 15, 2.8, "H")],
    "Une la letra del nombre con un recurso de escriba; la raya hace propia una letra común.",
    name_dep=True, risk="Se rompe si cambia el nombre.")

dD4, (d4w, d4h) = glyph(NEWS, "D", 17, 16, 16, axes={"opsz": 6, "wght": 640})
add("C4", "C", "D de dos columnas",
    "La D con una columna dentro del vientre: el nombre y la idea de A1 a la vez.",
    [p(dD4), r(15.4, 11.6, 2.6, 8.8, "H")],
    "Junta la letra con las columnas paralelas.",
    name_dep=True, risk="Los contraformes son finos; a 16 px puede tapar la D.")

dl, (lw, lh) = gk("Δ", 14, 16, 16.5)
add("C6", "C", "Δ delta",
    "La inicial griega de δόγμα y διδαχή, en la fuente griega del sitio.",
    [p(dl)],
    "El sitio ya compone el griego en Gentium Book Plus.",
    name_dep=True, risk="Se parece al triángulo de Vercel y a todas las marcas «delta».")

dd7, (d7w, d7h) = glyph(NEWS, "d", 20, 16, 16, axes={"opsz": 6, "wght": 700})
add("C7", "C", "d de molde",
    "Una d minúscula redonda y firme, sin cursiva.",
    [p(dd7)],
    "La versión robusta de C2: más gruesa, nada que se afine.",
    name_dep=True, risk="Depende del nombre; muy parecida a otras «d» de marcas de tecnología.")

# ---------- Family D: bookish sign or sacred-script letter
t1, (t1w, t1h) = gk("Θ", 16.5, 16, 16)
add("D1", "D", "Θ sobre baldosa",
    "Una sola letra griega, el patrón de Sefaria con la escritura de este corpus.",
    ['<ellipse cx="16" cy="16" rx="7.2" ry="9.2" fill="none" stroke="{F}" stroke-width="3"/>', r(9, 14.8, 14, 2.4)],
    "Sefaria usa una letra hebrea sobre baldosa y se lee perfecto a 16 px. Ningún sitio cristiano del relevamiento usa una letra griega.",
    risk="Parece un símbolo matemático; el reconocimiento será bajo al principio.")

l1, (l1w, l1h) = gk("Λ", 14.5, 16, 16.5)
add("D2", "D", "Λ lambda",
    "La inicial de Λόγος (Juan 1:1).",
    [p(l1)],
    "Es la letra del Logos.",
    risk="Es la λ de Half-Life y de AWS Lambda, y «Logos» es la marca de software bíblico más grande.")

g1, (g1w, g1h) = glyph(NEWS, "«", 14, 16, 16, axes={"opsz": 6, "wght": 760})
add("D3", "D", "Comillas «",
    "Una sola comilla latina, la de las citas del sitio.",
    [p(g1)],
    "El sitio cita a cada tradición entre «». Es la puntuación nativa del español (Josse Bade, 1527).",
    risk="Parece el botón de retroceder o de rebobinar.")

add("D4", "D", "Corchetes de cita",
    "Dos chevrones hacia afuera: una cita vacía, el sitio que cita y no concluye.",
    [line("M12.4 8L5.4 16l7 8", 3.8, "F"), line("M19.6 8l7 8-7 8", 3.8, "F")],
    "«El sitio nunca concluye»: la forma de una cita sin texto.",
    risk="Es el ícono de «código» (<>) de todos los editores.")

pl, (plw, plh) = glyph(NEWS, "¶", 18, 16, 16, axes={"opsz": 6, "wght": 700})
add("D5", "D", "Calderón ¶",
    "El signo de párrafo medieval, con el cuerpo lleno.",
    [p(pl)],
    "Es el signo de los copistas para señalar un párrafo.",
    risk="Es el botón de «mostrar formato» de todo procesador de texto.")

order = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "B1", "B2", "B3", "B4", "B5", "B7", "B8", "C1", "C2", "C3", "C4", "C6", "C7", "D1", "D2", "D3", "D4", "D5"]
by = {v["id"]: v for v in V}
V = [by[i] for i in order]
print(len(V), "variants")

json.dump(V, open(SP + "/work/variants.json", "w"), ensure_ascii=False, indent=1)
