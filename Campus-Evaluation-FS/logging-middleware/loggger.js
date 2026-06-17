import { getToken } from "./auth.js";

const LOG_URL = "http://4.224.186.213/evaluation-service/logs";

export async function Log(stack, level, packageName, message) {
  const token = await getToken();

  const response = await fetch(LOG_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      stack,
      level,
      package: packageName,
      message,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}
