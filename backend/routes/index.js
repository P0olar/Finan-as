import { Router } from "express";
import UserRoutes from "../domain/users/routes.js";
import ReportRoutes from "../domain/report/routes.js";

const router = Router();

router.use("/users", UserRoutes);
router.use("/report", ReportRoutes);

export default router;
