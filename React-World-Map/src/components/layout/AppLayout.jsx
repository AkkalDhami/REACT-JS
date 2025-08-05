import React from "react";
import Footer from "../ui/Footer";
import Headers from "../ui/Headers";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
