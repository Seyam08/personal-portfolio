import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

export const env = {
  port: process.env.PORT || 5000,
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  adminSenderEmailUsername: process.env.ADMIN_SENDER_EMAIL_USERNAME,
  adminSenderEmailPassword: process.env.ADMIN_SENDER_EMAIL_PASSWORD,
  adminReceiverEmail: process.env.ADMIN_RECEIVER_EMAIL,
};
