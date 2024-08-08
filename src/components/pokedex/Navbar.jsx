import React from "react";
import { TbPokeball } from "react-icons/tb";
import { IoGitCompareSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="md:flex flex-col gap-6 h-[95vh] p-5 bg-[#f4f4f4] rounded-md text-[#2c2c2c] shadow-custom fixed top-5 left-5 hidden">
        <a className="flex gap-2 items-center" href="#">
          <TbPokeball className="text-[1.3rem] " />
        </a>
        <a className="flex gap-2 items-center" href="#">
          <IoGitCompareSharp className="text-[1.3rem] " />
        </a>
        <a className="flex gap-2 items-center" href="#">
          <RiTeamFill className="text-[1.3rem] " />
        </a>
        <a className="flex gap-2 items-center" href="#">
          <FaUser className="text-[1.3rem] " />
        </a>
      </nav>

      <button className="fixed z-10 p-1 shadow-custom rounded-md bg-[#f4f4f4] md:hidden block top-[1.6rem] left-3 text-xl">
        <HiOutlineMenuAlt4 />
      </button>
    </div>
  );
};

export default Navbar;
