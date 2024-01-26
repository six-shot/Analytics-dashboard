"use client";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as HiIcons from "react-icons/hi";
import * as CiIcons from "react-icons/ci";
import * as IoIcons from "react-icons/io5";
import * as GoIcons from "react-icons/go";
import * as RxIcons from "react-icons/rx";
import Image from "next/image";
import man from "@/public/man.jpeg";
import DayTime from "./DayTime";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "@/public/assets/Logo.svg";
import calendar from "@/public/assets/Calendar.svg";
export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <div className="sm:hidden flex">
        <div className="w-full fixed top-0 z-10 bg-white h-[80px] px-[4%] pt-[2%]">
          <div className="flex items-center w-full justify-between ">
            <div className="flex gap-2 items-center">
              {/* <h5 className=" text-[18px]">MENU</h5> */}
              <IconContext.Provider value={{ size: "25px", color: "white" }}>
                <div className="bg-black p-2 rounded-[8px]">
                  <HiIcons.HiMenuAlt4 onClick={() => setNavbar(!navbar)} />
                </div>
                <div
                  className={`${
                    navbar ? "flex" : "hidden"
                  } w-full h-screen bg-white absolute top-0 right-0  my-2 px-[4%] pt-[2%] rounded-xl sm:hidden flex flex-col sidebar z-10`}
                >
                  <div className="flex w-full justify-between  ">
                    {" "}
                    <IconContext.Provider
                      value={{ color: "black", size: "30px" }}
                    >
                      <IoIcons.IoCloseOutline
                        onClick={() => setNavbar(!navbar)}
                      />
                    </IconContext.Provider>
                    <div>
                      <h5 className="text-black font-plus_jakara_sans text-xl">
                        Logout
                      </h5>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 justify-center items-center mt-[10%]">
                    <Image src={Logo} alt="logo" />
                    <h4 className="text-[#34CAA5] text-[28px] font-semibold font-plus_jakara_sans">
                      GeePay
                    </h4>
                  </div>
                  <nav>
                    <ul className="flex flex-col gap-5">
                      <li>Dashboard</li>
                      <li>Dashboard</li>
                      <li>Dashboard</li>
                      <li>Dashboard</li>
                    </ul>
                  </nav>
                </div>
              </IconContext.Provider>
            </div>
            <IconContext.Provider value={{ size: "20px" }}>
              <div className="flex items-center gap-2">
                <div className="p-1.5 border-[1px] border-rgba(255,255,255,0.7) rounded-full">
                  <CiIcons.CiSearch />
                </div>
                <div className="p-1.5 border-[1px] border-rgba(255,255,255,0.7) rounded-full">
                  <GoIcons.GoBell />
                </div>
                <ThemeSwitch />
                <div className="w-[50px] h-[50px]  bg-black rounded-full">
                  <Image
                    src={man}
                    className="w-full h-full object-cover rounded-full"
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
        </div>
      </div>
      <div className="sm:flex hidden border-b border-[#E5EAEF] bg-[#FAFAFA] py-2 px-[2%]">
        <div className="flex justify-between w-full  items-center">
          <div className="w-[35%]">
            <h4 className="font-plus_jakara_sans font-semibold text-[20px]">
              Dashboard
            </h4>
          </div>
          <div className="flex items-center w-[65%] justify-between ">
            <div className="w-[364px] h-[40px] px-4 bg-transparent flex gap-3  items-center border border-[#DADDDD] rounded-[24px]">
              <IconContext.Provider value={{ size: "23px" }}>
                <CiIcons.CiSearch />
              </IconContext.Provider>
              <input
                type="text"
                className="w-full h-full bg-transparent outline-none "
                placeholder="Search..."
              />
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex gap-2 items-center">
                <Image src={calendar} alt="calendar" />
                <DayTime />
              </div>
              <div className="flex w-[40px] h-[40px] rounded-full  justify-center items-center border-[1px] border-rgba(255,255,255,0.7) ">
                <IconContext.Provider value={{ size: "20px" }}>
                  <GoIcons.GoBell />
                </IconContext.Provider>
              </div>
            </div>
            <div className=" px-2 py-[3px] border-[1px] gap-3 flex items-center justify-between border-rgba(255,255,255,0.7) rounded-[50px]">
              <div className="w-[40px] h-[40px]  bg-black rounded-full">
                <Image
                  src={man}
                  className="w-full h-full object-cover rounded-full"
                  alt="man"
                />
              </div>
              <div className="flex flex-col ">
                <h5>Justin Bergson</h5>
                <h5>Justin@gmail.com</h5>
              </div>
              <div>
                <IconContext.Provider value={{ size: "20px" }}>
                  <RxIcons.RxCaretDown />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
