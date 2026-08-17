interface Env {
  GMAIL_CLIENT_ID?: string;
  GMAIL_CLIENT_SECRET?: string;
  GMAIL_REFRESH_TOKEN?: string;
  GMAIL_SENDER_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  company_website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function toBase64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function encodeHeader(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return `=?UTF-8?B?${btoa(binary)}?=`;
}

async function getAccessToken(env: Env): Promise<string> {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.GMAIL_CLIENT_ID!,
      client_secret: env.GMAIL_CLIENT_SECRET!,
      refresh_token: env.GMAIL_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to refresh Gmail access token: ${await response.text()}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  // Honeypot: bots fill every field, real users never see this one.
  if (payload.company_website) {
    return json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return json({ error: "Missing or invalid required fields" }, 400);
  }

  if (
    !env.GMAIL_CLIENT_ID ||
    !env.GMAIL_CLIENT_SECRET ||
    !env.GMAIL_REFRESH_TOKEN ||
    !env.GMAIL_SENDER_EMAIL
  ) {
    console.error("Gmail API credentials are not configured");
    return json({ error: "Contact form is not configured" }, 500);
  }

  const toEmail = env.CONTACT_TO_EMAIL || env.GMAIL_SENDER_EMAIL;

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    payload.phone ? `Phone: ${payload.phone.trim()}` : null,
    payload.company ? `Company: ${payload.company.trim()}` : null,
    payload.service ? `Service: ${payload.service.trim()}` : null,
    "",
    "Message:",
    message,
  ].filter((line): line is string => line !== null);

  const rawMessage = [
    `From: BlazeTech Website <${env.GMAIL_SENDER_EMAIL}>`,
    `To: ${toEmail}`,
    `Reply-To: ${email}`,
    `Subject: ${encodeHeader(`New website enquiry from ${name}`)}`,
    `Content-Type: text/plain; charset="UTF-8"`,
    "",
    lines.join("\n"),
  ].join("\r\n");

  try {
    const accessToken = await getAccessToken(env);

    const sendResponse = await fetch(
      "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ raw: toBase64Url(rawMessage) }),
      }
    );

    if (!sendResponse.ok) {
      const detail = await sendResponse.text();
      console.error("Gmail API error:", detail);
      return json({ error: "Failed to send message" }, 502);
    }
  } catch (err) {
    console.error("Gmail send failed:", err);
    return json({ error: "Failed to send message" }, 502);
  }

  return json({ ok: true });
}
