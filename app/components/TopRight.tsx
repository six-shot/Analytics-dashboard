import Image from "next/image";
import React from "react";
import boxtick from "@/public/assets/box-tick.svg";
import trendingup from "@/public/assets/trending-up.svg";
import Up from "./up";

export default function TopRight() {
  return (
    <div className="grid grid-cols-1 sm:grid-col-4">
      <div className="w-full bg-[#37373F] p-[5%] rounded-xl">
        <div className="flex justify-between items-center">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border boder-[#E6E6E6]">
            <Image src={boxtick} alt="box-tick" />
          </div>
          <Up />
        </div>
        <div className="mt-2">
          <h5>Total Order</h5>
          <h5 className="font-bold">350</h5>
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center bg-[#34caa51f] py-[2px] px-2 rounded-[100px]">
              <Image src={trendingup} alt="trending-up" />
              <h6 className="text-sm">23,5%</h6>
            </div>
            <div>
              <h6>vs. previous month</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
