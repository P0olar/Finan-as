import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import ReportComponent from "../components/ReportComponent.jsx";


const Dashboard = () => {
  const anos = [{ year: 2024 }, { year: 2025 }, { year: 2026 }];

  const { user, setUser, ready } = useUserContext();
  const [redirect, setRedirect] = useState(false);
  const [anoSelect, setAnoSelect] = useState(anos[1]);

  if (!user && ready) return <Navigate to="/" />;
  if (redirect) return <Navigate to="/" />;

  console.log(anoSelect);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p>Ano Selecionado</p>
      <div className=" flex gap-3 w-3xl flex-wrap justify-center">
        {anos.map((a) => (
          <button
            key={a.year}
            onClick={() => setAnoSelect(a)}
            className={` border rounded-full w-1xl px-4 py-1 ${
              anoSelect.year === a.year
                ? "bg-emerald-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {a.year}
          </button>
        ))}
      </div>

      <p>Mês  Selecionado</p>

      <ReportComponent anoSelect={anoSelect.year} />

      


    </div>
  );
};

export default Dashboard;
