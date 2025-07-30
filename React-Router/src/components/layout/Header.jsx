import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  const getNavLinkStyles = ({ isActive }) => {
    return isActive ? { color: "green" } : null;
  };
  return (
    <header className="block font-sans w-full mx-auto bg-white bg-opacity-90 sticky top-0 shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <nav className="w-full max-w-7xl lg:px-8 lg:py-3  px-4 py-2">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <NavLink
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
            Logo
          </NavLink>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "flex items-center"
                  }>
                  Home
                </NavLink>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <NavLink to="/about" style={getNavLinkStyles}>
                  About
                </NavLink>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <NavLink
                  to="/contact"
                  className="flex items-center"
                  style={getNavLinkStyles}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
