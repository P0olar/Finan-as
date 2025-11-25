import React, { useState } from "react";
import Report from "./Report.jsx";

const ReportComponent = ({ anoSelect }) => {
  const meses = [
    {
      nome: "Janeiro",
      inicio: `${anoSelect}-01-01`,
      fim: `${anoSelect}-01-31`,
    },
    {
      nome: "Fevereiro",
      inicio: `${anoSelect}-02-01`,
      fim: `${anoSelect}-02-28`,
    },
    { nome: "Março", inicio: `${anoSelect}-03-01`, fim: `${anoSelect}-03-31` },
    { nome: "Abril", inicio: `${anoSelect}-04-01`, fim: `${anoSelect}-04-30` },
    { nome: "Maio", inicio: `${anoSelect}-05-01`, fim: `${anoSelect}-05-31` },
    { nome: "Junho", inicio: `${anoSelect}-06-01`, fim: `${anoSelect}-06-30` },
    { nome: "Julho", inicio: `${anoSelect}-07-01`, fim: `${anoSelect}-07-31` },
    { nome: "Agosto", inicio: `${anoSelect}-08-01`, fim: `${anoSelect}-08-31` },
    {
      nome: "Setembro",
      inicio: `${anoSelect}-09-01`,
      fim: `${anoSelect}-09-30`,
    },
    {
      nome: "Outubro",
      inicio: `${anoSelect}-10-01`,
      fim: `${anoSelect}-10-31`,
    },
    {
      nome: "Novembro",
      inicio: `${anoSelect}-11-01`,
      fim: `${anoSelect}-11-30`,
    },
    {
      nome: "Dezembro",
      inicio: `${anoSelect}-12-01`,
      fim: `${anoSelect}-12-31`,
    },
  ];

  const [mesSelecionado, setMesSelecionado] = useState(meses[0]);

  return (
    <>
      <div className="flex gap-3 w-3xl flex-wrap justify-center mt-1">
        {meses.map((m) => (
          <button
            key={m.nome}
            onClick={() => setMesSelecionado(m)}
            className={`px-4 py-2 rounded-full border w-1xl ${
              mesSelecionado.nome === m.nome
                ? "bg-emerald-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {m.nome}
          </button>
        ))}
      </div>

      {/* Report do mês selecionado */}
      <Report inicio={mesSelecionado.inicio} fim={mesSelecionado.fim} />
    </>
  );
};

export default ReportComponent;
