import React from "react";
import { PreventComponents } from "../components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  return (
    <PreventComponents fail={"/"} check={!localStorage.getItem("auth")}>
      <div className=" font-serif">
        HomePage
        <button onClick={handleLogout}>Logout</button>
      </div>
    </PreventComponents>
  );
};

export default HomePage;
