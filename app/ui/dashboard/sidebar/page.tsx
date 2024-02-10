import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLinks/menuLinks";
import Image from "next/image";
import logo from "@/public/assets/Logo.svg";
import ThemeSwitch from "@/app/components/ThemeSwitch";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboardd",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/superadmin/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Movies",
        path: "/superadmin/movies",
        icon: <MdShoppingBag />,
      },
      {
        title: "Series",
        path: "/superadmin/series",
        icon: <MdWork />,
      },
      {
        title: "Short Films",
        path: "/superadmin/short-films",
        icon: <MdAnalytics />,
      },
      {
        title: "Blog",
        path: "/superadmin/blogs",
        icon: <MdPeople />,
      },
      {
        title: "Terms and Conditions",
        path: "/superadmin/terms-and-conditions",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Privacy Policy",
        path: "/superadmin/privacy-policy",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
   <div>
      <div className="h-screen  justify-between  w-full flex  flex-col items-center  ">
        <div className="py-5">
          <Image src={logo} alt="logo" />
        </div>
       
        <div className="flex flex-col items-center justify-between mt-5 h-full">
          <div className="h-[60%] flex flex-col items-center ">
            <ul className="flex   gap-4 mb-4  flex-col">
              {menuItems.map((menu) => (
                <li key={menu.title} className="flex gap-8 flex-col">
                  {menu.list.map((item) => (
                    <MenuLink item={item} key={item.title} />
                  ))}
                </li>
              ))}
            </ul>
            <ThemeSwitch/>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
