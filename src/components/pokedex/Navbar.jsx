import React from "react";
import { TbPokeball } from "react-icons/tb";
import { IoGitCompareSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="md:flex flex-col gap-6 h-[95vh] p-5 bg-[#F45741] rounded-md text-white shadow-custom fixed top-5 left-5 hidden">
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

      <button className="fixed md:hidden block top-7 left-5 text-xl">
        <HiOutlineMenuAlt4 />
      </button>
    </div>
  );
};

export default Navbar;
