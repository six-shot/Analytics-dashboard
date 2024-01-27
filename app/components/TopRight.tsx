import Image from "next/image";
import React from "react";
import boxtick from "@/public/assets/box-tick.svg";
import shopping from "@/public/assets/shopping-cart.svg";
import coin from "@/public/assets/coin.svg";
import rotate from "@/public/assets/3d-rotate.svg";
import trendingup from "@/public/assets/trending-up.svg";
import trendingdown from "@/public/assets/trending-down.svg";
import Up from "./up";
import Down from "./down";

export default function TopRight() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="w-full bg-white  border border-[#EDF2F7] p-[5%] rounded-xl">
        <div className="flex justify-between items-center">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border boder-[#E6E6E6]">
            <Image src={boxtick} alt="box-tick" />
          </div>
          <Up />
        </div>
        <div className="mt-2">
          <h5 className="font-plus_jakara_sans font-medium text-[#898989] text-lg">
            Total Order
          </h5>
          <h5 className="font-semibold font-plus_jakara_sans text-[#3A3F51] text-2xl">
            350
          </h5>
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-1 items-center bg-[#34caa51f] py-[2px] px-2 rounded-[100px]">
              <Image src={trendingup} alt="trending-up" />
              <h6 className="text-xs text-[#34CAA5] font-plus_jakara_sans ">
                23,5%
              </h6>
            </div>
            <div>
              <h6 className="font-inter text-sm">vs. previous month</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white  border border-[#EDF2F7] p-[5%] rounded-xl">
        <div className="flex justify-between items-center">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border boder-[#E6E6E6]">
            <Image src={rotate} alt="box-tick" />
          </div>
          <Down />
        </div>
        <div className="mt-2">
          <h5 className="font-plus_jakara_sans font-medium text-[#898989] text-lg">
            Total Refund
          </h5>
          <h5 className="font-semibold font-plus_jakara_sans text-[#3A3F51] text-2xl">
            270
          </h5>
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-1 items-center bg-[#ed544e1f] py-[2px] px-2 rounded-[100px]">
              <Image src={trendingdown} alt="trending-up" />
              <h6 className="text-xs text-[#ED544E] font-plus_jakara_sans ">
                23,5%
              </h6>
            </div>
            <div>
              <h6 className="font-inter text-sm">vs. previous month</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white border  border-[#EDF2F7] p-[5%] rounded-xl">
        <div className="flex justify-between items-center">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border boder-[#E6E6E6]">
            <Image src={shopping} alt="box-tick" />
          </div>
          <Down />
        </div>
        <div className="mt-2">
          <h5 className="font-plus_jakara_sans font-medium text-[#898989] text-lg">
            Average Sales
          </h5>
          <h5 className="font-semibold font-plus_jakara_sans text-[#3A3F51] text-2xl">
            1567
          </h5>
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-1 items-center bg-[#ed544e1f] py-[2px] px-2 rounded-[100px]">
              <Image src={trendingdown} alt="trending-up" />
              <h6 className="text-xs text-[#ED544E] font-plus_jakara_sans ">
                23,5%
              </h6>
            </div>
            <div>
              <h6 className="font-inter text-sm">vs. previous month</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white border border-[#EDF2F7]  p-[5%] rounded-xl">
        <div className="flex justify-between items-center">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border boder-[#E6E6E6]">
            <Image src={coin} alt="box-tick" />
          </div>
          <Up />
        </div>
        <div className="mt-2">
          <h5 className="font-plus_jakara_sans font-medium text-[#898989] text-lg">
            Total Income
          </h5>
          <h5 className="font-semibold font-plus_jakara_sans text-[#3A3F51] text-2xl">
            $350.000
          </h5>
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-1 items-center bg-[#34caa51f] py-[2px] px-2 rounded-[100px]">
              <Image src={trendingup} alt="trending-up" />
              <h6 className="text-xs text-[#34CAA5] font-plus_jakara_sans ">
                23,5%
              </h6>
            </div>
            <div>
              <h6 className="font-inter text-sm">vs. previous month</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
