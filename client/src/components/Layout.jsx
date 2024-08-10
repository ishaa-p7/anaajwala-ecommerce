import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
