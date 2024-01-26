import React from "react";

export default function BottomLeft() {
  return (
    <div>
      <div className="overflow-x-scroll sm:overflow-hidden">
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #3C3E4D" }}>
              <td
                style={{
                  width: "33px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className="sm:text-[12px] lg:pr-[40px] md:pl-[10px] lg:pl-[20px] lg:text-[14px] text-[10px] font-inter font-normal text-white"
              >
                yes
              </td>
              <td
                style={{
                  width: "287px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className="sm:text-[12px] pr-7 md:pr-[-28px] md:pl-[27px] lg:text-[14px] lg:pr-[40px] lg:pl-[40px] text-[10px] font-inter font-normal text-[#21D4AF]"
              >
                yes
              </td>
              <td
                style={{
                  width: "234px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className="sm:text-[12px] pr-7 md:pr-[-28px] lg:text-[14px] lg:pr-[40px]  lg:pl-[40px] text-[10px] font-inter font-normal text-white"
              >
                {" "}
                yes
              </td>
              <td
                style={{
                  width: "125px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className="sm:text-[12px] pr-7 md:pr-[-28px] lg:text-[14px] lg:pr-[40px] text-[10px] lg:pl-[40px] font-inter font-normal text-white"
              >
                {" "}
                yessssssssssssssssssssssssssssssssssssssssssssssssssss
              </td>
              <td
                style={{
                  width: "109px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className="sm:text-[12px] pr-7  lg:text-[14px] lg:pr-[120px] md:pl-[40px] md:pr-[60px] lg:pl-[80px] text-[10px] font-inter font-normal text-white"
              >
                {" "}
                yessssssssssssssssssssssssssssssssssssssssssssssssssss
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
