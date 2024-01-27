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
import logout from "@/public/assets/logout.png"
import dashboard from "@/public/assets/dashboard.svg";
import setting from "@/public/assets/setting.svg";
import arrowright from "@/public/assets/arrow-right.svg";
import trendup from "@/public/assets/trend-up.svg";
import profile from "@/public/assets/profile-2user.svg";
import info from "@/public/assets/info-circle.svg";
import discount from "@/public/assets/discount-shape.svg";
import box from "@/public/assets/box.svg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>
      <div className="sm:hidden flex">
        <div className="w-full fixed top-0 z-10 bg-white dark:bg-black dark:border-b  dark:border-[#34CAA5] flex justify-center  h-[100px] px-[4%]  flex-col">
          <div className="flex items-center w-full justify-between ">
            <div className="flex gap-2 items-center">
              {/* <h5 className=" text-[18px]">MENU</h5> */}
              <IconContext.Provider value={{ size: "25px" }}>
                <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-[8px]">
                  <HiIcons.HiMenuAlt4 onClick={() => setNavbar(!navbar)} />
                </div>
                <div
                  className={`${
                    navbar ? "flex" : "hidden"
                  } w-full h-screen dark:bg-black bg-[#FAFAFA] absolute top-0 right-0   px-[4%] pt-[2%]  sm:hidden flex flex-col sidebar z-10`}
                >
                  <div className="flex w-full justify-between  ">
                    {" "}
                    <IconContext.Provider
                      value={{ color: "#34CAA5", size: "30px" }}
                    >
                      <IoIcons.IoCloseOutline
                        onClick={() => setNavbar(!navbar)}
                      />
                    </IconContext.Provider>
                    <div>
                      <RiLogoutCircleLine className="text-[#34CAA5]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 justify-center items-center mt-[10%]">
                    <Image src={Logo} alt="logo" />
                    <h4 className="text-[#34CAA5]  text-[24px] font-semibold font-plus_jakara_sans">
                      GeegPay
                    </h4>
                  </div>
                  <nav className="mt-5">
                    <ul className="flex font-plus_jakara_sans flex-col gap-5">
                      <li className="p-3 hover:bg-[#34CAA5] bg-[#34caa5] rounded-lg flex items-center gap-3">
                        <MdOutlineDashboard />
                        <h6>Dashboard</h6>
                      </li>
                      <li className="p-3 hover:bg-[#34CAA5] rounded-lg flex items-center gap-3">
                        <Image src={trendup} alt="trendup" />
                        <h6> Trend Up</h6>
                      </li>
                      <li className="p-3 hover:bg-[#34CAA5] rounded-lg flex items-center gap-3">
                        <Image src={profile} alt="profile" />
                        <h6> Profile User </h6>
                      </li>
                      <li className="p-3 hover:bg-[#34CAA5] rounded-lg flex items-center gap-3">
                        <Image src={discount} alt="discount" />
                        <h6> Discount</h6>
                      </li>
                      <li className="p-3 hover:bg-[#34CAA5] rounded-lg flex items-center gap-3">
                        <Image src={info} alt="info" />
                        <h6> Info</h6>
                      </li>
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
          </div>
          <div>
            <DayTime />
          </div>
        </div>
      </div>
      <div className="sm:flex hidden border-b border-[#E5EAEF] dark:border-[#34CAA5] dark:bg-black bg-[#FAFAFA] py-2 px-[2%]">
        <div className="flex justify-between w-full  items-center">
          <div className="lg:w-[35%]">
            <h4 className="font-plus_jakara_sans font-semibold text-[20px]">
              Dashboard
            </h4>
          </div>
          <div className="flex items-center gap-5 lg:gap-0 lg:w-[65%] justify-between ">
            <div className="lg:w-[364px] w-[200px] h-[40px] px-4 bg-transparent flex gap-3  items-center border border-[#DADDDD] rounded-[24px]">
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
                <Image src={calendar} alt="calendar" className="lg:flex hidden" />
                <DayTime />
              </div>
              <div className="flex w-[40px] h-[40px] rounded-full  justify-center items-center border-[1px] border-rgba(255,255,255,0.7) ">
                <IconContext.Provider value={{ size: "20px" }}>
                  <GoIcons.GoBell />
                </IconContext.Provider>
              </div>
            </div>
            <div className=" px-2 py-[3px] lg:border-[1px]  gap-3 flex items-center justify-between lg:border-rgba(255,255,255,0.7) rounded-[50px]">
              <div className="w-[40px] h-[40px]  bg-black rounded-full ">
                <Image
                  src={man}
                  className="w-full h-full object-cover rounded-full "
                  alt="man"
                />
              </div>
              <div className="lg:flex hidden flex-col font-inter ">
                <h5 className="text-base">Justin Bergson</h5>
                <h5 className="text-sm">Justin@gmail.com</h5>
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
