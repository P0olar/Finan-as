import React, { useState } from "react";
import axios from "axios";
import { formatValue, formatDate } from "../../helpers/formatValue.js";

const Report = () => {
  const [reports, setReports] = useState([]);

  const fetchReport = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("/report");
      console.log(data);
      setReports(data);
    } catch (error) {
      alert(`Erro ao logar: ${error.response.data}`);
    }
  };
  return (
    <div className=" flex justify-center flex-col">
      <button onClick={fetchReport} className=" border-gray-950 bg-amber-500">
        Pegar Relatorio
      </button>

      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Referências e Populares</th>
            <th>Bonificados/Vitaminas</th>
            <th>Genéricos</th>
            <th>Perfumarias</th>
            <th>Conveniências</th>
            <th>OUTROS</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {reports.map((item) => (
            <tr className=" " key={item.Dia}>
              <td>{formatDate(item.Dia)}</td>
              <td>{formatValue(item["Referências e Populares"])}</td>
              <td>{formatValue(item["Bonificados/Vitaminas"])}</td>
              <td>{formatValue(item.Genericos)}</td>
              <td>{formatValue(item.Perfumarias)}</td>
              <td>{formatValue(item.Conveniencias)}</td>
              <td>{formatValue(item.OUTROS)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
