import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Report from "../components/Report.jsx";

const Dashboard = () => {
  const { user, setUser, ready } = useUserContext();
  const [redirect, setRedirect] = useState(false);

  if (!user && ready) return <Navigate to="/" />;

  const logout = async () => {
    try {
      const { data } = await axios.post("users/logout");
      console.log(data);

      setUser(null);
      setRedirect(true);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Dashboard</p>
      <button
        className=" bg-red-700 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition"
        onClick={logout}
      >
        Logout
      </button>

      <Report />

    </div>
  );
};

export default Dashboard;
