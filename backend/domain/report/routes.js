import { Router } from "express";
import { connect } from "../../conf/database.js";
import sql from "mssql";
import { data } from "./model.js";

const router = Router();

router.get("/", async (req, res) => {
    const pool = await connect();
    const result = await pool.request().query(data);
    res.json(result.recordset);
});

export default router;