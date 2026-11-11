import { initBotId } from "botid/client/core";

initBotId({
  protect: [
    { path: "/api/ai/ask", method: "POST" },
    { path: "/api/ai/simplify", method: "POST" },
  ],
});
