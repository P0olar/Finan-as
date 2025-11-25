import express from "express";
import path from "path";
import { Router } from "express";
import UserRoutes from "../domain/users/routes.js";
import ReportRoutes from "../domain/report/routes.js";

const __dirname = path.resolve();

const router = Router();

router.use("/users", UserRoutes);
router.use("/report", ReportRoutes);
router.use(express.static(path.join(__dirname, `../frontend/dist`)));
router.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, `../frontend/dist/index.html`));
});

export default router;
