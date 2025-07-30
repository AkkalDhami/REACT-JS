import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  if (navigation.state === "loading") {
    return <div className="flex min-h-screen items-center justify-center text-5xl">Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
