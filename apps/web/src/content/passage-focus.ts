import "server-only";
import baptismBaptist from "@data/passages/focus/baptism-baptist.json" with { type: "json" };
import baptismCatholic from "@data/passages/focus/baptism-catholic.json" with { type: "json" };
import baptismLutheran from "@data/passages/focus/baptism-lutheran.json" with { type: "json" };
import baptismOrthodox from "@data/passages/focus/baptism-orthodox.json" with { type: "json" };
import baptismReformed from "@data/passages/focus/baptism-reformed.json" with { type: "json" };
import eucharistBaptist from "@data/passages/focus/eucharist-baptist.json" with { type: "json" };
import eucharistCatholic from "@data/passages/focus/eucharist-catholic.json" with { type: "json" };
import eucharistLutheran from "@data/passages/focus/eucharist-lutheran.json" with { type: "json" };
import eucharistOrthodox from "@data/passages/focus/eucharist-orthodox.json" with { type: "json" };
import eucharistReformed from "@data/passages/focus/eucharist-reformed.json" with { type: "json" };
import papacyBaptist from "@data/passages/focus/papacy-baptist.json" with { type: "json" };
import papacyCatholic from "@data/passages/focus/papacy-catholic.json" with { type: "json" };
import papacyLutheran from "@data/passages/focus/papacy-lutheran.json" with { type: "json" };
import papacyOrthodox from "@data/passages/focus/papacy-orthodox.json" with { type: "json" };
import papacyReformed from "@data/passages/focus/papacy-reformed.json" with { type: "json" };
import solaScripturaBaptist from "@data/passages/focus/sola-scriptura-baptist.json" with { type: "json" };
import solaScripturaCatholic from "@data/passages/focus/sola-scriptura-catholic.json" with { type: "json" };
import solaScripturaLutheran from "@data/passages/focus/sola-scriptura-lutheran.json" with { type: "json" };
import solaScripturaOrthodox from "@data/passages/focus/sola-scriptura-orthodox.json" with { type: "json" };
import solaScripturaReformed from "@data/passages/focus/sola-scriptura-reformed.json" with { type: "json" };
import type { TraditionPage } from "@doctrina/core/model/page";

type FocusEntry = { refs: string[]; focus: string[]; status: "proposed" | "confirmed" };

const focusByPage = {
  "baptism-baptist": baptismBaptist,
  "baptism-catholic": baptismCatholic,
  "baptism-lutheran": baptismLutheran,
  "baptism-orthodox": baptismOrthodox,
  "baptism-reformed": baptismReformed,
  "eucharist-baptist": eucharistBaptist,
  "eucharist-catholic": eucharistCatholic,
  "eucharist-lutheran": eucharistLutheran,
  "eucharist-orthodox": eucharistOrthodox,
  "eucharist-reformed": eucharistReformed,
  "papacy-baptist": papacyBaptist,
  "papacy-catholic": papacyCatholic,
  "papacy-lutheran": papacyLutheran,
  "papacy-orthodox": papacyOrthodox,
  "papacy-reformed": papacyReformed,
  "sola-scriptura-baptist": solaScripturaBaptist,
  "sola-scriptura-catholic": solaScripturaCatholic,
  "sola-scriptura-lutheran": solaScripturaLutheran,
  "sola-scriptura-orthodox": solaScripturaOrthodox,
  "sola-scriptura-reformed": solaScripturaReformed,
} as unknown as Record<string, { passages: FocusEntry[] }>;

function entriesOf(page: Pick<TraditionPage, "doctrine" | "tradition">): FocusEntry[] {
  return focusByPage[`${page.doctrine}-${page.tradition}`]?.passages ?? [];
}

export function passageFocus(page: Pick<TraditionPage, "doctrine" | "tradition">, refs: string[]): Set<string> {
  const entry = entriesOf(page).find((candidate) => JSON.stringify(candidate.refs) === JSON.stringify(refs));
  return new Set(entry?.focus ?? []);
}
