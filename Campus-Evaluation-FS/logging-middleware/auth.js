const AUTH_URL = "http://4.224.186.213/evaluation-service/auth";

let token = null;
let expiresAt = 0;
let credentials = null;

export function initAuth(config) {
  credentials = config;
}

export async function getToken() {
  if (token && Date.now() < expiresAt) {
    return token;
  }

  const response = await fetch(AUTH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Failed to obtain token");
  }

  const data = await response.json();

  token = data.access_token;

  // refresh one minute early
  expiresAt = Date.now() + (data.expires_in - 60) * 1000;

  return token;
}
