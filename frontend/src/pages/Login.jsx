import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const Login = () => {
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("users/login", {
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Erro ao logar: ${error.response.data}`);
      }
    } else {
      alert("Preencha os Cambos de email e senha corretamente ");
    }
  };

  const viewPassword = (e) => {
    e.preventDefault();

    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  if (redirect || user) return <Navigate to="/dashboard" />;

  return (
    <section className="flex items-center">
      <div className=" mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className=" text-3xl font-bold">Faça seu Login</h1>
        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-full"
            type="text"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative w-full">
            <input
              className="w-full border border-gray-300 px-4 py-2 rounded-full pr-10"
              type={inputType}
              placeholder="Digite sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Botão de olho dentro do input */}
            <button
              type="button"
              onClick={viewPassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {inputType === "password" ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          <button className=" bg-green-600 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white">
            {" "}
            Login
          </button>
        </form>
        <p>
          Ainda não tem conta?{" "}
          <Link className=" font-semibold underline" to="/register">
            Registre-se aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
