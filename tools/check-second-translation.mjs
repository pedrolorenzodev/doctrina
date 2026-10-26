import { noSecond, parseSecondChoice } from "../src/lib/second-translation.ts";

const failures = [];
const check = (name, ok, detail = "") => {
  if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
};

const same = (value, mode, id) => value.mode === mode && value.id === id;

check("nothing stored is off", parseSecondChoice(null) === noSecond);
check("a valid choice is read", same(parseSecondChoice('{"mode":"below","id":"bsb"}'), "below", "bsb"));
check("side is read", same(parseSecondChoice('{"mode":"side","id":"kjv"}'), "side", "kjv"));
check("a stored off is off", parseSecondChoice('{"mode":"off","id":"bsb"}') === noSecond);
check("a mode that does not exist is off", parseSecondChoice('{"mode":"above","id":"bsb"}') === noSecond);
check("no id is off", parseSecondChoice('{"mode":"below"}') === noSecond && parseSecondChoice('{"mode":"below","id":""}') === noSecond);
check("junk is off", parseSecondChoice("nope") === noSecond && parseSecondChoice("[1]") === noSecond && parseSecondChoice("3") === noSecond);

if (failures.length > 0) {
  console.error(failures.map((failure) => `FAIL ${failure}`).join("\n"));
  process.exit(1);
}
console.log("second-translation: ok");
