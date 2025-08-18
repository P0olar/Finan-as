import { Router } from "express";
import UserRoutes from "../domain/users/routes.js"

const router = Router();

router.use("/users", UserRoutes);

export default router;