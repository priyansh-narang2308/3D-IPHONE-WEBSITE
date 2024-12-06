import React from "react";
import { appleImg, bagImg } from "../utils";
import { searchImg } from "./../utils/index";
import { navLists } from "./../constants/index";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white translate-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" height={18} width={18} />
          <img src={bagImg} alt="search" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
