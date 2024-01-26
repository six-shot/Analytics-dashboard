import React from "react";

export default function BottomLeft() {
  return (
    <section>
      <div className="w-full bg-white border border-[#EDF2F7] p-[5%] rounded-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[460px]">
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400  text-left">
                  Name
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400  py-2 text-left">
                  Date
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2  text-left ">
                  Amount
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2  text-left ">
                  Status
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2  text-left ">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#EDF2F6]">
                <td className="py-2  ">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-blue-500  truncate"
                    >
                      Marcus Bergson
                    </a>
                  </div>
                </td>
                <td className="py-2  ">
                  <span className="text-[13px] font-medium text-emerald-500">
                    Nov 15, 2023
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                    $80,000
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                    Paid
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                    View
                  </span>
                </td>
              </tr>
              <tr className="border-b border-[#EDF2F6]">
                <td className="py-2 ">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-blue-500  truncate"
                    >
                      Marcus Bergson
                    </a>
                  </div>
                </td>
                <td className="py-2  ">
                  <span className="text-[13px] font-medium text-emerald-500">
                    Nov 15, 2023
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                    $80,000
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                    Paid
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                    View
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
