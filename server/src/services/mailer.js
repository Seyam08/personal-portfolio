import nodemailer from "nodemailer";
import { env } from "../config/env.js";
import {
  adminNotificationTemplate,
  userAutoReplyTemplate,
} from "../templates/mail.templates.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.adminSenderEmailUsername,
    pass: env.adminSenderEmailPassword,
  },
});

export async function sendContactMail({ name, email, message }) {
  const adminMail = adminNotificationTemplate({ name, email, message });
  const userMail = userAutoReplyTemplate({ name });

  return Promise.all([
    transporter.sendMail({
      from: `"${name} (Portfolio)" <${env.adminSenderEmailUsername}>`,
      to: env.adminReceiverEmail,
      replyTo: email,
      subject: `New portfolio contact message from ${name}`,
      text: adminMail.text,
      html: adminMail.html,
    }),
    transporter.sendMail({
      from: `"Seyam Hossain " <${env.adminSenderEmailUsername}>`,
      to: email,
      subject: "I got your message!",
      text: userMail.text,
      html: userMail.html,
    }),
  ]);
}
