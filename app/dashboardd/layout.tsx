import Sidebar from "../ui/dashboard/sidebar/page";

import Header from "../components/Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <div className=" sm:flex hidden w-[80px] border-r-[1px] border-[#989bac] bg-[#F7F8FA] dark:border-[#34CAA5] dark:bg-black  ">
        <Sidebar />
      </div>
      <div className=" w-full bg-[#f6f6f6]">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
