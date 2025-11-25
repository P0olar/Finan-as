import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Account = () => {
  const { user, setUser, ready } = useUserContext();

  if (!user && ready) return <Navigate to="/login" />;

  const logout = async () => {
    try {
      const { data } = await axios.post("/users/logout");
      setUser(null);
      setRedirect(true);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center text-center">
      <div className=" p-4">
        <h1 className="text-2xl font-bold mb-4">Account</h1>
        <p>
          Logado como {user?.name} com o email {user?.email}
        </p>
      </div>

      <button
        className=" bg-red-700 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
