import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";

function Layout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}

export default Layout;
