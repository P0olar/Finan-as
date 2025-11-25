import express from "express";
import cors from "cors";
import routers from "./routes/index.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ORIGIN_CORS = process.env.ORIGIN_CORS || "http://localhost:5173";

export const app = express();

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ORIGIN_CORS,
    credentials: true,
  })
);

app.use(routers);
