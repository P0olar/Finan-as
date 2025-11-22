import sql from "mssql";
import "dotenv/config";

const {USER, PASSWORD, SERVER, DATABASE } = process.env;

const config = {
  user: USER,
  password: "!@#Senha",
  server: SERVER,
  database: DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};


export async function connect() {
    try {
        const pool = await sql.connect(config);
        console.log('Conectado ao SQL Server!');
        return pool;
    } catch (err) {
        console.error('Erro ao conectar:', err);
        throw err;
    }
}