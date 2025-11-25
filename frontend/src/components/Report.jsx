import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatValue, formatDate } from "../../helpers/formatValue.js";

const Report = ({ inicio, fim }) => {
  const [reports, setReports] = useState([]);

  const fetchReport = async () => {
    try {
      const { data } = await axios.get(`/report?inicio=${inicio}&fim=${fim}`);
      setReports(data);
    } catch (error) {
      alert(`Erro ao carregar: ${error.response?.data}`);
    }
  };

  useEffect(() => {
    fetchReport();
  }, [inicio, fim]);

  return (
    <div className="w-full flex justify-center mt-6">
      <table className="border w-[90%] max-w-5xl">
        <thead className="bg-gray-200">
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

        <tbody className="text-center">
          {reports.map((item, index) => (
            <tr key={item.Dia} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"} >
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
