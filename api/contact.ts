import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COMPANY_EMAIL = "blazetechintegrated@gmail.com";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  company_website?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const payload = (req.body ?? {}) as ContactPayload;

  // Honeypot: bots fill every field, real users never see this one.
  if (payload.company_website) {
    res.status(200).json({ ok: true });
    return;
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    res.status(400).json({ error: "Missing or invalid required fields" });
    return;
  }

  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_FROM, MAIL_TO } = process.env;

  if (!MAIL_HOST || !MAIL_PORT || !MAIL_USER || !MAIL_PASS) {
    console.error("Mail SMTP credentials are not configured");
    res.status(500).json({ error: "Contact form is not configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT),
    secure: Number(MAIL_PORT) === 465,
    auth: { user: MAIL_USER, pass: MAIL_PASS },
  });

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

  try {
    await transporter.sendMail({
      from: `"${MAIL_FROM || "BlazeTech Website"}" <${MAIL_USER}>`,
      to: MAIL_TO || COMPANY_EMAIL,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("SMTP send failed:", err);
    res.status(502).json({ error: "Failed to send message" });
    return;
  }

  res.status(200).json({ ok: true });
}
