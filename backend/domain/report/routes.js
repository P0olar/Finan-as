import { Router } from "express";

import { connect } from "../../conf/database.js";
import sql from "mssql";
import { data } from "./model.js";

const router = Router();

router.get("/", async (req, res) => {
    const { inicio, fim } = req.query;

    if (!inicio || !fim) {
        return res.status(400).json("As datas 'inicio' e 'fim' são obrigatórias");
    }

    try {
        const pool = await connect();

        const query = data
            .replace("{{INICIO}}", inicio)
            .replace("{{FIM}}", fim);

        const result = await pool.request().query(query);

        res.json(result.recordset);
    } catch (err) {
        console.log(err);
        res.status(500).json("Erro ao buscar relatório");
    }
});

export default router;
