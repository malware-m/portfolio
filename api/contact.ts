// api/contact.ts (at project root, not in src/)
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // 👈 goes to your inbox
      subject: subject || "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.error("Error sending mail:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
