import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center ">
      <p>Home</p>
      <p>Clique aqui para <Link className=" underline font-semibold" to="/login">entrar ou criar uma conta</Link></p>
    </div>
  );
};

export default Home;
