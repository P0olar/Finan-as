import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const { user, setUser } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubit = async (e) => {
    e.preventDefault();

    if (email && password && name) {
      try {
        const { data: userDoc } = await axios.post("/users", {
          name,
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Erro ao cadastrar: ${JSON.stringify(error)}`);
      }
    } else {
      alert("Preencha os dados corretamente ")
    }
  };

  if (redirect || user) return <Navigate to="/dashboard" />

  return (
    <section className="flex items-center py-50">
      <div className=" mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className=" text-3xl font-bold">Faça seu Cadastro</h1>
        <form onSubmit={handleSubit} className="flex w-full flex-col gap-2">
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="text"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-green-500 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white">
            Registrar
          </button>
        </form>
        <p>
          Já tem conta{" "}
          <Link className="font-semibold underline" to="/login">
            Logue aqui
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Register;
