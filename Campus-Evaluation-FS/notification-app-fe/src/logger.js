import { initAuth } from "../../logging-middleware/auth.js";
import { Log } from "../../logging-middleware/loggger.js";

initAuth({
  email: "dyogesh.official@gmail.com",
  name: "Yogesh D",
  rollNo: "12895",
  accessCode: "juFphv",
  clientID: "a0b8b4a0-74cf-4e90-9ce1-d177fd0cd781",
  clientSecret: "aeuSmZearHhqcxxv",
});

export function logFrontendEvent(level, message) {
  void Log("frontend", level, "hook", message).catch(() => {});
}
