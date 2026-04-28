import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message, website } = await req.json();

  // Honeypot — bots fill hidden fields; real users never do
  if (website) {
    // Return 200 so bots think it succeeded
    return NextResponse.json({ ok: true });
  }

  // Basic server-side validation
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Invalid fields." }, { status: 400 });
  }

  // Rudimentary email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to   = process.env.CONTACT_TO_EMAIL ?? user;

  if (!user || !pass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars.");
    return NextResponse.json(
      { error: "Server email configuration is incomplete." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${user}>`,
    to,
    replyTo: `"${name}" <${email}>`,
    subject: `Portfolio enquiry from ${name}`,
    text: message,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
