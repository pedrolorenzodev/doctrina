type Entry = {
  t: number;
  kind: "scroll" | "jump";
  y: number;
  to?: number;
  height: number;
  path: string;
  stack?: string | undefined;
};

const flagKey = "doctrina-debug-scroll";
const keep = 60;
const jumpPx = 1200;
const heightSlackPx = 5;

let active = false;
let log: Entry[] = [];
let last: Entry | null = null;

function push(entry: Entry) {
  log.push(entry);
  if (log.length > keep) log.shift();
  if (entry.kind !== "scroll") return;
  const suspicious =
    last !== null && Math.abs(entry.y - last.y) > jumpPx && Math.abs(entry.height - last.height) < heightSlackPx;
  if (suspicious) console.warn("[scroll-debug] far jump", { from: last, to: entry, recent: log.slice(-12) });
  last = entry;
}

const now = (kind: Entry["kind"], extra: Partial<Entry> = {}): Entry => ({
  t: Math.round(performance.now()),
  kind,
  y: Math.round(scrollY),
  height: document.documentElement.scrollHeight,
  path: location.pathname,
  ...extra,
});

export function noteJump(to: number) {
  if (!active) return;
  push(now("jump", { to: Math.round(to), stack: new Error().stack?.split("\n").slice(2, 7).join(" | ") }));
}

export function watchScroll(): () => void {
  try {
    active = localStorage.getItem(flagKey) === "1";
  } catch {
    active = false;
  }
  if (!active) return () => {};
  log = [];
  last = null;
  (window as unknown as { __scrollLog: Entry[] }).__scrollLog = log;
  const onScroll = () => push(now("scroll"));
  addEventListener("scroll", onScroll, { passive: true });
  return () => {
    removeEventListener("scroll", onScroll);
    active = false;
  };
}
