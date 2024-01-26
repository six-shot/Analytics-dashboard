import React from "react";
import TopRight from "./TopRight";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

export default function Container() {
  return (
    <section className=" px-[4%]">
      <TopRight/>
      <BottomLeft/>
      <BottomRight/>
    </section>
  );
}
