import express from "express";
import cors from "cors";
import routers from "./routes/index.js";
import cookieParser from "cookie-parser";

const ORIGIN_CORS = process.env.ORIGIN_CORS || "http://localhost:5173";

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ORIGIN_CORS,
    credentials: true,
  })
);

app.use(routers);
