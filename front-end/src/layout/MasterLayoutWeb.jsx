import React from "react";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MasterLayoutWeb() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
