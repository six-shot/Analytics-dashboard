import React from "react";
import TopRight from "./TopRight";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";
import TopLeft from "./TopLeft";

export default function Container() {
  return (
    <section className=" sm:px-[2%] px-[4%] sm:mt-0 pt-4 bg-[#FAFAFA] mt-[25%]">
      <div className="grid sm:grid-cols-8 grid-cols-1 gap-4">
        <div className="sm:col-span-5">
          <TopLeft />
        </div>
        <div className="sm:col-span-3 w-full">
          {" "}
          <TopRight />
        </div>
      </div>
      <div className="grid sm:grid-cols-8 grid-cols-1 gap-4">
        <div className="sm:col-span-5">
          <BottomLeft />
        </div>
        <div className="sm:col-span-3">
          {" "}
          <BottomRight />
        </div>
      </div>
    </section>
  );
}
