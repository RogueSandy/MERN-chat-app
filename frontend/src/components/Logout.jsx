import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/logout.scss";
import { BiPowerOff } from "react-icons/bi";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <button title="Logout?">
      <BiPowerOff onClick={handleLogout} />
    </button>
  );
}

export default Logout;
