import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Main() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
}

export default Main;
