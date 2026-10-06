"""Minimal reader for SWORD zText Bible modules (KJV versification, LZSS or zlib blocks).

Used to extract John 6 from CrossWire's SpaScioNT module (pysword does not support LZSS).
"""
import struct
import zlib

N, F, THRESHOLD = 4096, 18, 3


def lzss_decode(data):
    ring = bytearray(b" " * N)
    r = N - F
    out = bytearray()
    flags = 0
    i = 0
    n = len(data)
    while True:
        flags >>= 1
        if not flags & 0x100:
            if i >= n:
                break
            flags = data[i] | 0xFF00
            i += 1
        if flags & 1:
            if i >= n:
                break
            c = data[i]; i += 1
            out.append(c); ring[r] = c; r = (r + 1) & (N - 1)
        else:
            if i + 1 >= n:
                break
            pos = data[i]; ln = data[i + 1]; i += 2
            pos |= (ln & 0xF0) << 4
            ln = (ln & 0x0F) + THRESHOLD
            for k in range(ln):
                c = ring[(pos + k) & (N - 1)]
                out.append(c); ring[r] = c; r = (r + 1) & (N - 1)
    return bytes(out)


def read_testament(path_prefix, compress="LZSS"):
    bzs = open(path_prefix + ".bzs", "rb").read()
    bzv = open(path_prefix + ".bzv", "rb").read()
    bzz = open(path_prefix + ".bzz", "rb").read()
    blocks = []
    for k in range(len(bzs) // 12):
        off, size, usize = struct.unpack("<III", bzs[k * 12:(k + 1) * 12])
        raw = bzz[off:off + size]
        dec = lzss_decode(raw) if compress == "LZSS" else zlib.decompress(raw)
        blocks.append(dec)
    verses = []
    for k in range(len(bzv) // 10):
        b, start, ln = struct.unpack("<IIH", bzv[k * 10:(k + 1) * 10])
        if ln == 0 or b >= len(blocks):
            verses.append("")
            continue
        verses.append(blocks[b][start:start + ln].decode("utf-8", errors="replace"))
    return verses


# KJV NT chapter lengths (SWORD KJV versification)
NT = [
    ("Matt", [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20]),
    ("Mark", [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20]),
    ("Luke", [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53]),
    ("John", [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25]),
]


def nt_index(book, chapter, verse):
    """SWORD index: [0]=testament header, then per book: book header, per chapter: chapter header + verses."""
    idx = 1
    for name, chs in NT:
        idx += 1  # book heading
        for c, nv in enumerate(chs, start=1):
            idx += 1  # chapter heading
            if name == book and c == chapter:
                return idx + verse
            idx += nv
    raise KeyError(book)
