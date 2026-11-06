import { createServer } from "node:http";
import { getMemoryStore } from "@/content/ai-store/memory-store";
import { aiStatus, guardRequest, settleTicket } from "@/content/ai-guard/guard";

const failures = [];
let checks = 0;
const expect = (condition, message) => {
  checks += 1;
  if (!condition) failures.push(message);
};

const ENV_KEYS = [
  "AI_PROVIDER",
  "AI_STORE",
  "AI_ENABLED",
  "VERCEL",
  "NODE_ENV",
  "AI_EVAL_SECRET",
  "AI_ALERT_WEBHOOK",
  "AI_COOKIE_SECRET",
  "AI_IP_SALT",
  "AI_DAILY_BUDGET_USD",
  "AI_MONTHLY_BUDGET_USD",
  "AI_CHAT_PER_VISITOR_DAY",
  "AI_CHAT_PER_IP_DAY",
  "AI_CHAT_PER_IP_MINUTE",
  "AI_SIMPLIFY_PER_VISITOR_DAY",
  "AI_SIMPLIFY_PER_IP_DAY",
  "AI_CACHED_PER_IP_DAY",
];
const store = getMemoryStore();

function reset(env = {}) {
  for (const key of ENV_KEYS) delete process.env[key];
  Object.assign(process.env, {
    AI_PROVIDER: "fake",
    AI_STORE: "memory",
    AI_COOKIE_SECRET: "check-cookie-secret",
    AI_IP_SALT: "check-ip-salt",
    AI_CHAT_PER_IP_MINUTE: "1000",
    AI_CHAT_PER_IP_DAY: "1000",
    AI_CHAT_PER_VISITOR_DAY: "1000",
    ...env,
  });
  store.counters.clear();
  store.days.clear();
  store.months.clear();
  store.alerts.clear();
  store.settingsRow.enabled = true;
  store.settingsRow.chatEnabled = true;
  store.settingsRow.simplifyEnabled = true;
}

let ipCounter = 0;
const freshIp = () => `10.0.${Math.floor(++ipCounter / 250)}.${ipCounter % 250}`;

function post(headers = {}, path = "/api/ai/ask") {
  return new Request(`http://localhost:3110${path}`, {
    method: "POST",
    headers: { "x-forwarded-for": "203.0.113.9", ...headers },
    body: "{}",
  });
}

const get = (headers = {}) =>
  new Request("http://localhost:3110/api/ai/simplify?cacheOnly=1", {
    method: "GET",
    headers: { "x-forwarded-for": "203.0.113.9", ...headers },
  });

async function code(promise) {
  try {
    await promise;
    return "ok";
  } catch (error) {
    return error?.code ?? `unexpected:${error}`;
  }
}

async function quietly(work) {
  const originals = [console.log, console.warn, console.error];
  console.log = console.warn = console.error = () => undefined;
  try {
    return await work();
  } finally {
    [console.log, console.warn, console.error] = originals;
  }
}

const cookieOf = (ticket) => ticket.setCookie?.split(";")[0] ?? "";
const wait = (ms) => new Promise((done) => setTimeout(done, ms));

reset({ AI_ENABLED: "off" });
expect((await code(guardRequest(post(), "chat", 6000))) === "ai_disabled", "AI_ENABLED=off disables chat");
expect((await code(guardRequest(get(), "cached", 0))) === "ai_disabled", "AI_ENABLED=off disables cached reads");
reset({ AI_PROVIDER: "off" });
expect((await code(guardRequest(post(), "chat", 6000))) === "ai_disabled", "no provider disables chat");
expect((await code(guardRequest(get(), "cached", 0))) === "ok", "no provider still serves cached reads");
reset();
store.settingsRow.enabled = false;
expect(
  (await code(guardRequest(post(), "simplify", 1500))) === "ai_disabled",
  "the settings row switches everything off",
);
expect(
  (await code(guardRequest(get(), "cached", 0))) === "ai_disabled",
  "the settings row switches cached reads off too",
);
reset();
store.settingsRow.chatEnabled = false;
expect((await code(guardRequest(post(), "chat", 6000))) === "ai_disabled", "chat_enabled=false disables chat");
expect((await code(guardRequest(post(), "simplify", 1500))) === "ok", "chat_enabled=false leaves the simplifier on");

reset();
const sameSite = { origin: "http://localhost:3110" };
expect(
  (await code(guardRequest(post({ ...sameSite, "x-forwarded-for": freshIp() }), "chat", 6000))) === "ok",
  "same-origin POST passes",
);
expect(
  (await code(guardRequest(post({ origin: "https://evil.example", "x-forwarded-for": freshIp() }), "chat", 6000))) ===
    "ai_bad_request",
  "cross-origin POST is a bad request",
);
expect(
  (await code(guardRequest(post({ "sec-fetch-site": "cross-site", "x-forwarded-for": freshIp() }), "chat", 6000))) ===
    "ai_bad_request",
  "sec-fetch-site cross-site is a bad request",
);
expect(
  (await code(guardRequest(post({ origin: "not a url", "x-forwarded-for": freshIp() }), "chat", 6000))) ===
    "ai_bad_request",
  "an unparsable origin is a bad request",
);
expect(
  (await code(guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000))) === "ok",
  "a POST without origin passes the origin check",
);

reset({ AI_CHAT_PER_VISITOR_DAY: "2" });
const first = await guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000);
expect(
  first.setCookie !== null && /^doctrina_ai=[\w-]+\.[\w-]+;/.test(first.setCookie),
  "the first call issues the visitor cookie",
);
expect(
  /HttpOnly/.test(first.setCookie) &&
    /SameSite=Lax/.test(first.setCookie) &&
    /Max-Age=2592000/.test(first.setCookie) &&
    /Path=\//.test(first.setCookie),
  "the cookie is HttpOnly, SameSite=Lax, 30 days",
);
expect(!/Secure/.test(first.setCookie), "the cookie is not Secure outside production");
const mine = { cookie: cookieOf(first), "x-forwarded-for": freshIp() };
const second = await guardRequest(post(mine), "chat", 6000);
expect(second.setCookie === null && second.visitor === first.visitor, "the cookie is reused and not issued again");
expect(
  (await code(guardRequest(post({ ...mine, "x-forwarded-for": freshIp() }), "chat", 6000))) === "ai_daily_limit",
  "the third chat of a visitor hits the daily limit",
);
const tampered = await guardRequest(
  post({ cookie: `${cookieOf(first)}x`, "x-forwarded-for": freshIp() }),
  "chat",
  6000,
);
expect(tampered.setCookie !== null && tampered.visitor !== first.visitor, "a tampered cookie gets a new identity");
const forged = await guardRequest(post({ cookie: "doctrina_ai=abc.def", "x-forwarded-for": freshIp() }), "chat", 6000);
expect(forged.setCookie !== null, "a forged cookie is replaced");

reset({ NODE_ENV: "production" });
const secure = await guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000);
expect(/; Secure/.test(secure.setCookie), "the cookie is Secure in production");

reset({ AI_CHAT_PER_IP_DAY: "2" });
const sameIp = "198.51.100.7";
const ipResults = [];
for (let index = 0; index < 3; index += 1)
  ipResults.push(await code(guardRequest(post({ "x-forwarded-for": `${sameIp}, 10.1.1.1` }), "chat", 6000)));
expect(
  ipResults.join() === "ok,ok,ai_daily_limit",
  `the IP daily limit counts the first forwarded address (got ${ipResults.join()})`,
);

reset({ AI_CHAT_PER_IP_MINUTE: "1" });
const burstIp = freshIp();
const burst = [
  await code(guardRequest(post({ "x-forwarded-for": burstIp }), "chat", 6000)),
  await code(guardRequest(post({ "x-forwarded-for": burstIp }), "chat", 6000)),
];
expect(
  burst.join() === "ok,ai_rate_limited" || burst.join() === "ok,ok",
  `the minute burst limit answers ai_rate_limited (got ${burst.join()})`,
);
expect(burst[1] === "ai_rate_limited", "the second request in the same minute is rate limited");
expect(
  (await code(guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000))) === "ok",
  "another IP is not affected by the burst",
);

reset({ AI_SIMPLIFY_PER_VISITOR_DAY: "1" });
const simplifyIp = freshIp();
const simplifyFirst = await guardRequest(post({ "x-forwarded-for": simplifyIp }, "/api/ai/simplify"), "simplify", 1500);
expect(
  (await code(
    guardRequest(
      post({ cookie: cookieOf(simplifyFirst), "x-forwarded-for": simplifyIp }, "/api/ai/simplify"),
      "simplify",
      1500,
    ),
  )) === "ai_daily_limit",
  "the simplify visitor limit is separate and applies",
);
expect(
  (await code(guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000))) === "ok",
  "chat and simplify counters are separate buckets",
);

reset({ AI_DAILY_BUDGET_USD: "0.013" });
const spendIps = [freshIp(), freshIp(), freshIp(), freshIp()];
const t1 = await guardRequest(post({ "x-forwarded-for": spendIps[0] }), "chat", 6000);
const t2 = await guardRequest(post({ "x-forwarded-for": spendIps[1] }), "chat", 6000);
expect(t1.reservedMicros === 6000 && t2.reservedMicros === 6000, "tickets carry the reserved estimate");
expect(
  (await code(guardRequest(post({ "x-forwarded-for": spendIps[2] }), "chat", 6000))) === "ai_budget_exhausted",
  "the budget is exhausted at the daily cap",
);
await settleTicket(t1, 1000);
await settleTicket(t1, 1000);
const afterSettle = (await store.spend(t1.day, t1.month)).day;
expect(afterSettle.reservedMicros === 6000 && afterSettle.spentMicros === 1000, "settling twice counts once");
expect(
  (await code(guardRequest(post({ "x-forwarded-for": spendIps[3] }), "chat", 6000))) === "ok",
  "a settled ticket frees budget for the next request",
);

reset({ AI_CHAT_PER_VISITOR_DAY: "0", AI_CHAT_PER_IP_DAY: "0", AI_DAILY_BUDGET_USD: "0", AI_CACHED_PER_IP_DAY: "2" });
const cachedIp = freshIp();
const cachedCalls = [];
for (let index = 0; index < 3; index += 1)
  cachedCalls.push(
    await guardRequest(get({ "x-forwarded-for": cachedIp }), "cached", 6000).then(
      (ticket) => ticket,
      (error) => error,
    ),
  );
expect(
  cachedCalls[0].reservedMicros === 0 && cachedCalls[0].setCookie === null && cachedCalls[1].reservedMicros === 0,
  "cached reads pass with the model quotas and budget at zero, reserving nothing",
);
expect(cachedCalls[2]?.code === "ai_daily_limit", "the cached read quota applies");
expect(
  (await store.spend(cachedCalls[0].day, cachedCalls[0].month)).day.reservedMicros === 0,
  "cached reads leave the budget untouched",
);

reset({
  AI_EVAL_SECRET: "check-eval-secret",
  AI_CHAT_PER_VISITOR_DAY: "0",
  AI_CHAT_PER_IP_DAY: "0",
  AI_CHAT_PER_IP_MINUTE: "0",
  AI_DAILY_BUDGET_USD: "0.006",
});
const evalHeaders = { "x-ai-eval": "check-eval-secret", "x-forwarded-for": freshIp() };
const evalTicket = await guardRequest(post(evalHeaders), "chat", 6000);
expect(
  evalTicket.visitor === "eval" && evalTicket.setCookie === null && evalTicket.reservedMicros === 6000,
  "the eval header skips the quotas but reserves budget",
);
expect(
  (await code(guardRequest(post(evalHeaders), "chat", 6000))) === "ai_budget_exhausted",
  "the eval header does not skip the budget",
);
expect(
  (await code(guardRequest(post({ "x-ai-eval": "wrong", "x-forwarded-for": freshIp() }), "chat", 6000))) ===
    "ai_rate_limited",
  "a wrong eval header gets no bypass",
);
process.env.VERCEL = "1";
expect(
  (await code(guardRequest(post(evalHeaders), "chat", 6000))) === "ai_rate_limited",
  "the eval header is ignored on Vercel",
);

reset({ VERCEL: "1", AI_PROVIDER: "replay", NODE_ENV: "production" });
expect(
  (await quietly(() => code(guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000)))) ===
    "ai_bot_check_failed",
  "BotID runs on Vercel and fails closed outside a Next request",
);
expect(
  (await code(guardRequest(get({ "x-forwarded-for": freshIp() }), "cached", 0))) === "ok",
  "cached reads skip BotID",
);
reset({ VERCEL: "1", AI_PROVIDER: "fake" });
expect(
  (await code(guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000))) === "ok",
  "BotID is skipped with AI_PROVIDER=fake",
);
reset({ VERCEL: "1", AI_PROVIDER: "replay" });
delete process.env.AI_COOKIE_SECRET;
expect(
  (await code(guardRequest(get({ "x-forwarded-for": freshIp() }), "cached", 0))) === "ok",
  "cached reads need no cookie secret",
);
reset({ VERCEL: "1", AI_PROVIDER: "fake" });
delete process.env.AI_COOKIE_SECRET;
expect(
  (await code(guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000))) === "ai_misconfigured",
  "a missing cookie secret on Vercel is a misconfiguration",
);
reset({ VERCEL: "1", AI_PROVIDER: "fake" });
delete process.env.AI_IP_SALT;
expect(
  (await code(guardRequest(get({ "x-forwarded-for": freshIp() }), "cached", 0))) === "ai_misconfigured",
  "a missing IP salt on Vercel is a misconfiguration",
);

reset();
expect(JSON.stringify(await aiStatus()) === JSON.stringify({ chat: "on", simplify: "on" }), "status is on");
store.settingsRow.simplifyEnabled = false;
expect(
  JSON.stringify(await aiStatus()) === JSON.stringify({ chat: "on", simplify: "off" }),
  "status shows a feature that is off",
);
reset({ AI_ENABLED: "off" });
expect(
  JSON.stringify(await aiStatus()) === JSON.stringify({ chat: "off", simplify: "off" }),
  "status is off with AI_ENABLED=off",
);
reset({ AI_DAILY_BUDGET_USD: "0.0065" });
expect(
  JSON.stringify(await aiStatus()) === JSON.stringify({ chat: "on", simplify: "on" }),
  "status is on while the budget covers an estimate",
);
await guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000);
expect(
  JSON.stringify(await aiStatus()) === JSON.stringify({ chat: "paused", simplify: "paused" }),
  "status is paused when the budget cannot cover an estimate",
);

const received = [];
const sink = createServer((request, response) => {
  let body = "";
  request.on("data", (part) => (body += part));
  request.on("end", () => {
    received.push(body);
    response.end("ok");
  });
});
await new Promise((done) => sink.listen(0, "127.0.0.1", done));
reset({ AI_DAILY_BUDGET_USD: "0.012", AI_ALERT_WEBHOOK: `http://127.0.0.1:${sink.address().port}/hook` });
for (let index = 0; index < 2; index += 1) await guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000);
await code(guardRequest(post({ "x-forwarded-for": freshIp() }), "chat", 6000));
await wait(400);
const texts = received.map((body) => JSON.parse(body).content);
expect(
  texts.length === 2 && texts.some((text) => text.includes("50%")) && texts.some((text) => text.includes("used up")),
  `budget alerts fire once at 50% and 100% (got ${texts.length})`,
);
expect(
  received.every((body) => !/secret|key/i.test(body)),
  "alerts carry no secrets",
);
sink.close();
reset();

if (failures.length) throw new Error(failures.join("\n"));
console.log(`ok ${checks} checks`);
