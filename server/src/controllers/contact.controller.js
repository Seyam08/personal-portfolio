import { contactSchema } from "../schemas/contact.schema.js";
import { sendContactMail } from "../services/mailer.js";

export async function postContact(req, res) {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Validation failed",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  try {
    await sendContactMail(parsed.data);
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Failed to send contact mail:", error);
    return res.status(502).json({ message: "Failed to send message" });
  }
}
