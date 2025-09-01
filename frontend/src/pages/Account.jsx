import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Account = () => {
  const { user, ready } = useUserContext();

  if (!user && ready) return <Navigate to="/login" />;

  return 
  <div>Account</div>;
};

export default Account;
