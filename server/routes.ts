// routes.ts
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure email transporter (example: Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER, // your Gmail address
      pass: process.env.SMTP_PASS, // your Gmail App Password (not your login password!)
    },
  });

  // ---------------- CONTACT FORM ----------------
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      // Send email
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email, // 👈 sends back to the user who filled the form
        subject: subject || "Contact Form Submission",
        text: `Hello ${name},\n\nWe received your message:\n"${message}"\n\nThank you for contacting us!`,
      });

      return res.status(200).json({
        message: "Message received and email sent successfully",
        data: { name, email, subject, message },
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // ---------------- USER ROUTES ----------------
  app.post("/api/users", async (req, res) => {
    try {
      const { username, email } = req.body;

      if (!username || !email) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const user = await storage.createUser({ username, email });
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await storage.getUser(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  });

  app.get("/api/users/username/:username", async (req, res) => {
    const username = req.params.username;
    const user = await storage.getUserByUsername(username);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  });

  // ---------------- CREATE SERVER ----------------
  const httpServer = createServer(app);
  return httpServer;
}
