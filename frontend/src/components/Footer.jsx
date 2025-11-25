import React from "react";
import logo from "../assets/img/Project-Template.png";

const Footer = () => {
  return (
    <footer className=" w-full mb-5 mt-10 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] ">
      <div className="flex mx-auto max-w-7xl items-center justify-between px-4 sm:px-8 py-2 ">
        {/* Logo + descrição */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">SuaMarca</h2>
          <img className="h-12 object-cover" src={logo} alt="Logo Projeto" />
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: santosvictorfernando50@gmail.com</li>
            <li>WhatsApp: (41) 99294-2414</li>
            <li>Endereço: Campina G. do Sul</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 pt-6 border-t border-gray-700">
        © {new Date().getFullYear()} SuaMarca — Todos os direitos reservados.
      </div>

    </footer>
  );
};

export default Footer;
