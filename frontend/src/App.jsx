import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "../contexts/UserContext";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Account from "./pages/Account";

axios.defaults.baseURL = "/";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
