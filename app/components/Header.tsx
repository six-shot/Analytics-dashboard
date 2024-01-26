"use client";
import React from "react";
import { IconContext } from "react-icons";
import * as HiIcons from "react-icons/hi";
import * as CiIcons from "react-icons/ci";
import * as IoIcons from "react-icons/io5";
import * as GoIcons from "react-icons/go";
import Image from "next/image";
import man from "@/public/man.jpeg"
import DayTime from "./DayTime";
import ThemeSwitch from "./ThemeSwitch";
export default function Header() {
  return (
    <header className="w-full h-[80px] px-[4%] pt-[2%]">
      <div className="flex items-center w-full justify-between ">
        <div className="flex gap-2 items-center">
          {/* <h5 className=" text-[18px]">MENU</h5> */}
          <IconContext.Provider value={{ size: "25px",color:'white' }}>
            <div className="bg-black p-2 rounded-[8px]">
              <HiIcons.HiMenuAlt4 />
            </div>
          </IconContext.Provider>
        </div>
        <IconContext.Provider value={{ size: "20px" }}>
          <div className="flex items-center gap-1">
            <div className="p-1.5 border-[1px] border-rgba(255,255,255,0.7) rounded-[8px]">
              <CiIcons.CiSearch />
            </div>
            <div className="p-1.5 border-[1px] border-rgba(255,255,255,0.7) rounded-[8px]">
              <GoIcons.GoBell />
            </div>
            <ThemeSwitch />
            <div className="w-[50px] h-[40px]  bg-black rounded-[10px]">
              <Image
                src={man}
                className="w-full h-full object-cover rounded-[10px]"
                alt="man"
              />
            </div>
          </div>
        </IconContext.Provider>

        {/* <IconContext.Provider value={{ size: "20px", color: "black" }}>
          <div className="flex items-center gap-1">
            <div className="p-1.5 border-[1px] border-rgba(255,255,255,0.7) rounded-[8px]">
              <CiIcons.CiSearch />
            </div>

            <div className="p-1.5 border-[1px] border-rgba(255,255,255,0.7) rounded-[8px]">
              <GoIcons.GoBell />
            </div>
            <div className="w-[50px] h-[40px]  bg-black rounded-[10px]">
              <Image
                src={man}
                className="w-full h-full object-cover rounded-[10px]"
                alt="man"
              />
            </div>
          </div>
        </IconContext.Provider> */}
      </div>
      <div>
        <DayTime />
      </div>
    </header>
  );
}
