"use client";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="w-full h-[70px] bg-white pl-[2.5%] pr-[6%] flex justify-between items-center">
      <div className="text-black font-semibold  capitalize text-[20px]">
        {pathname.split("/").pop()}
      </div>
      <div className="flex gap-4">
       yess
        <div className="flex justify-center items-center w-[50px] h-[50px] border border-primary rounded-full">
          <div className=" w-[43px] h-[43px] rounded-full bg-black "></div>
        </div>
        <div className="flex flex-col ">
          <h5 className="text-primary">Davide Mark</h5>
          <h6 className="text-[#8E8E8E]">Admin</h6>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
