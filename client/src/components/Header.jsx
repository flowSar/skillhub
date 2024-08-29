import { useState } from "react";
import Categories from "./Categories";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";

const Header = () => {
  const [logInDisplayState, setlogInDisplayState] = useState(true);
  const displayLognIn = () => {
    if (logInDisplayState == true) {
      setlogInDisplayState(false);
    } else {
      setlogInDisplayState(true);
    }
  };

  return (
    <>
      <header className="fixed right-0 left-0 xl:right-[10rem] xl:left-[10rem] top-0  z-40 flex items-center  pl-2 justify-between border-b-2 border-black h-[50px] md:h-[60px] text-sm md:text-lg first-letter bg-[#bebece] text-white font-semibold">
        <div className="flex items-center cursor-pointer">
          <div className="relative w-[6rem] md:w-[8rem] bg-red-400">
            {" "}
            SkillHub Logo
          </div>
          <div className=" group hover:bg-[#60606e] px-2 py-[1rem]" href="">
            Categories
            <Categories classes="absolute bg-gray-100 text-black hidden group-hover:block" />
          </div>
          <Link className=" hover:bg-[#60606e] px-2 py-[1rem]" to="/about">
            about
          </Link>
          <Link className=" hover:bg-[#60606e] px-2 py-[1rem]" to="/contact">
            Contact us
          </Link>
        </div>

        <div className="space-x-1 mr-2">
          <Link
            to="/sign"
            className="hover:bg-[#2b2b5a] px-1 py-2 md:px-4 md:py-[0.6rem] hover:border-2 border-white rounded-lg border"
          >
            Sign Up
          </Link>
          <div
            className=" hover:bg-[#2b2b5a] hover:border-2 border border-white px-2 py-2 md:px-4 md:py-2 inline-block rounded-lg cursor-pointer"
            onClick={displayLognIn}
          >
            Log in
          </div>
          <LogIn
            display={logInDisplayState ? "hidden" : "block"}
            closeLogInWindows={displayLognIn}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
