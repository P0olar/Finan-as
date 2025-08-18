import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conexão Estabelecida");
  } catch (error) {
    console.log("Erro na conexão", error);
  }
};
