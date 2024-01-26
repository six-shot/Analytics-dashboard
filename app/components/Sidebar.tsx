import Image from "next/image";
import logo from "@/public/assets/Logo.svg";
import React from "react";
import dashboard from "@/public/assets/dashboard.svg";
import setting from "@/public/assets/setting.svg";
import arrowright from "@/public/assets/arrow-right.svg";
import trendup from "@/public/assets/trend-up.svg";
import profile from "@/public/assets/profile-2user.svg";
import info from "@/public/assets/info-circle.svg";
import discount from "@/public/assets/discount-shape.svg";
import box from "@/public/assets/box.svg";

import MenuLink from "./menuLink";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: dashboard,
  },
  {
    title: "Users",
    path: "/dashboard/users",
    icon: trendup,
  },
  {
    title: "Products",
    path: "/dashboard/products",
    icon: profile,
  },
 
  {
    title: "Users",
    path: "/dashboard/users",
    icon: box,
  },
  {
    title: "Products",
    path: "/dashboard/products",
    icon: discount,
  },
  {
    title: "Transactions",
    path: "/dashboard/transactions",
    icon: info,
  }
 
];
const menuItemsbottom = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: arrowright,
  },
  {
    title: "Users",
    path: "/dashboard/users",
    icon: setting,
  },
  {
    title: "Products",
    path: "/dashboard/products",
    icon: setting,
  },
];
export default function Sidebar() {
  return (
    <div>
      <div className="h-screen justify-between  w-full flex  flex-col items-center  ">
        <div className="py-5">
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex flex-col justify-between mt-5 h-full">
          <div className="h-[60%]  ">
            <ul className="flex gap-8 h-full   flex-col">
              {menuItems.map((cat) => (
                <li key={cat.title} className="flex gap-6  flex-col">
                  <Image src={cat.icon} alt="icon" />
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[30%]  ">
            <ul className="flex gap-8 h-full   flex-col">
              {menuItemsbottom.map((catt) => (
                <li key={catt.title} className="flex gap-6  flex-col">
                  <Image src={catt.icon} alt="icon" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
