import CrossIcon from "@/assets/icons/CrossIcon";
import HamBurgerMenu from "@/assets/icons/HamBurgerMenu";
import { NAVITEMS } from "@/constants/data";
import React, { SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = ({
  setIsNavOpen,
  isNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <nav className="flex items-center justify-between gap-4  p-4 bg-gray-100 shadow-[0px_2px_3px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between w-full">
          <span>Logo</span>
          <button
            className="block md:hidden cursor-pointer"
            onClick={() => setIsNavOpen(true)}
          >
            <HamBurgerMenu className="fill-zinc-600 w-8 h-8" />
          </button>
        </div>
        <div className="hidden md:flex gap-6 justify-between">
          <ul className="flex items-center justify-between gap-4">
            {NAVITEMS.map((nav) => (
              <li key={nav.id}>
                <NavLink
                  to={nav.link}
                  className="text-zinc-600 p-1  hover:border-b-[3px] hover:text-green-500 hover:border-green-500 transition-all duration-100"
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Button label="Login" />
            <Button label="Signup" variant={"secondary"} />
          </div>
        </div>
      </nav>
      <nav
        className={`${
          isNavOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-[100vh] opacity-0"
        } md:hidden transition-all duration-500 flex  flex-col items-center bg-gray-100 top-0  gap-4  p-4 bg-gray-100-600 shadow-[0px_2px_3px_rgba(0,0,0,0.1)] absolute w-full min-h-screen`}
      >
        <div className="flex justify-between w-full">
          <span>Logo</span>
          <button
            className="block md:hidden cursor-pointer  "
            onClick={() => setIsNavOpen(false)}
          >
            <CrossIcon className="fill-zinc-600 w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col md:hidden self-start gap-4 w-full   justify-center">
          <ul className="flex flex-col items-start justify-between gap-2">
            {NAVITEMS.map((nav) => (
              <li key={nav.id}>
                <NavLink
                  onClick={() => setIsNavOpen(false)}
                  to={nav.link}
                  className="text-zinc-600 p-1  hover:border-b-[3px] hover:text-green-500 hover:border-green-500 transition-all duration-100"
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col max-w-[8rem] items-center gap-2">
            <Button label="Login" />
            <Button label="Signup" variant={"secondary"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
