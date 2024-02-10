import React from "react";
import TopRight from "./TopRight";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";
import TopLeft from "./TopLeft";


export default function Container() {
  return (
    <section>
     
      <div className=" sm:px-[2%] px-[4%] sm:mt-0 pt-6 bg-[#FAFAFA] dark:bg-black  mt-[25%]">
        <div className="grid lg:grid-cols-8 grid-cols-1 lg:gap-5  items-center">
          <div className="sm:col-span-5">
            <TopLeft />
          </div>
          <div className="sm:col-span-3 w-full pt-6 lg:pt-0">
            {" "}
            <TopRight />
          </div>
        </div>
        <div className="grid lg:grid-cols-8 grid-cols-1 lg:gap-5">
          <div className="sm:col-span-5">
            <BottomLeft />
          </div>
          <div className="sm:col-span-3 w-full">
            {" "}
            <BottomRight />
          </div>
        </div>
      </div>
    </section>
  );
}
