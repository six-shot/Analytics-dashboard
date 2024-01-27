import Image from "next/image";
import React from "react";
import man from "@/public/man.jpeg";
import view from "@/public/assets/document-download.svg"
const lastorders = [
  {
    name: "Marcus Bergson",
    date: "	Nov 15, 2023",
    status: "Paid",
    Amount: "$80,000",
    invoice: "view",
    path: "/dashboard",
    icon: man,
  },
  {
    name: "Jaydon Vaccaro",
    date: "	Nov 15, 2023",
    status: "Refund",
    Amount: "$150,000",
    invoice: "view",
    path: "/dashboard",
    icon: man,
  },
  {
    name: "Corey Schleifer",
    date: "	Nov 15, 2023",
    status: "Paid",
    Amount: "$87,000",
    invoice: "view",
    path: "/dashboard",
    icon: man,
  },
  {
    name: "Cooper Press",
    date: "	Nov 15, 2023",
    status: "Refund",
    Amount: "$100,000",
    invoice: "view",
    path: "/dashboard",
    icon: man,
  },
  {
    name: "Phillip Lubin",
    date: "	Nov 15, 2023",
    status: "Paid",
    Amount: "$78,000",
    invoice: "view",
    path: "/dashboard",
    icon: man,
  },
];
export default function BottomLeft() {
  return (
    <section>
      <div className="w-full bg-white dark:bg-[#161619] border border-[#EDF2F7]  p-[4%] rounded-xl mt-4 ">
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-[#26282C] font-plus_jakara_sans">
            Last order
          </h5>
          <h5 className="font-medium text-[#34CAA5] font-plus_jakara_sans">
            See All
          </h5>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[#EDF2F6]">
                <th className="text-[12px] uppercase tracking-wide  text-[#9CA4AB] font-plus_jakara_sans text-left">
                  Name
                </th>
                <th className="text-[12px] uppercase tracking-wide  text-[#9CA4AB] font-plus_jakara_sans   py-2 text-left">
                  Date
                </th>
                <th className="text-[12px] uppercase tracking-wide  text-[#9CA4AB] font-plus_jakara_sans  py-2  text-left ">
                  Amount
                </th>
                <th className="text-[12px] uppercase tracking-wide text-[#9CA4AB] font-plus_jakara_sans  py-2  text-left ">
                  Status
                </th>
                <th className="text-[12px] uppercase tracking-wide  text-[#9CA4AB] font-plus_jakara_sans  py-2  text-left ">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              {lastorders.map((order) => {
                return (
                  <tr key={order.name} className="border-b border-[#EDF2F6]">
                    <td className="py-2  ">
                      <div className="flex gap-3 items-center">
                        <Image
                          className="w-[35px] h-[35px] rounded-full object-cover"
                          src={order.icon}
                          alt="man"
                        />
                        <a
                          href="#"
                          className="text-[#3A3F51] font-medium text-base font-plus_jakara_sans hover:text-blue-500  truncate"
                        >
                          {order.name}
                        </a>
                      </div>
                    </td>
                    <td className="py-2  ">
                      <span className="text-sm font-plus_jakara_sans  text-[#737373]">
                        {order.date}
                      </span>
                    </td>
                    <td className="py-2  ">
                      <span className="inline-block  font-plus_jakara_sans text-[#0D062D] font-medium text-sm leading-none">
                        {order.Amount}
                      </span>
                    </td>
                    <td
                      className={`py-2 ${
                        order.status.toLowerCase() === "paid"
                          ? "text-[#34CAA5]"
                          : ""
                      } ${
                        order.status.toLowerCase() === "refund"
                          ? "text-[#ED544E]"
                          : ""
                      }`}
                    >
                      <span className="inline-block  text-sm font-plus_jakara_sans leading-none">
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 flex gap-2 items-center">
                      <Image src={view} alt="view" />
                      <span className="inline-block capitalize font-plus_jakara_sans text-[#0D062D] font-medium text-sm leading-none">
                        {order.invoice}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
