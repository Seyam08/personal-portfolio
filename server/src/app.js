import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(cors({ origin: env.clientUrl }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/contact", contactRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
