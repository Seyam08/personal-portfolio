import nodemailer from "nodemailer";
import { env } from "../config/env.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.adminSenderEmailUsername,
    pass: env.adminSenderEmailPassword,
  },
});

export async function sendContactMail({ name, email, message }) {
  return transporter.sendMail({
    from: `"${name}" <${env.adminSenderEmailUsername}>`,
    to: env.adminReceiverEmail,
    replyTo: email,
    subject: `New portfolio contact message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br/>")}</p>`,
  });
}
