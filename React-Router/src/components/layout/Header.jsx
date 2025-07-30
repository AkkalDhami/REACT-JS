import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header class="block w-full mx-auto bg-white bg-opacity-90 sticky top-0 shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <nav class="w-full max-w-7xl lg:px-8 lg:py-3  px-4 py-2">
        <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <NavLink
            href="/"
            class="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
            Logo
          </NavLink>
          <div class="hidden lg:block">
            <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <NavLink to="/about" class="flex items-center">
                  About
                </NavLink>
              </li>
              <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <NavLink to="/contact" class="flex items-center">
                  Contact
                </NavLink>
              </li>
              <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <NavLink to="#" class="flex items-center">
                  Blocks
                </NavLink>
              </li>
              <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <NavLink to="#" class="flex items-center">
                  Docs
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
