"use client";
import React from 'react'
import { IconContext } from 'react-icons';
import * as RiIcons from "react-icons/ri";
import * as CiIcons from "react-icons/ci";
import * as IoIcons from "react-icons/io5";
import * as GoIcons from "react-icons/go";
export default function Header () {
  return (
    <header className="w-full">
      <IconContext.Provider value={{ size: "20px" }}>
        <div className="flex justify-between items-center ">
          <div>
            <RiIcons.RiMenu2Line />
          </div>
          <div className="flex items-center gap-1">
            <div className="p-1.5 border-[1px] border-black rounded-[8px]">
              <CiIcons.CiSearch />
            </div>
            <div className="p-1.5 border-[1px] border-black rounded-[8px]">
              <IoIcons.IoMoonOutline />
            </div>
            <div className="p-1.5 border-[1px] border-black rounded-[8px]">
              <GoIcons.GoBell />
            </div>
            <div className="w-[50px] h-[40px] py-2 bg-black rounded-[10px]">
       
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </header>
  );
}
