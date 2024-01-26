import React from "react";

export default function BottomLeft() {
  return (
    <section>
      <div className="w-full bg-white  border border-[#EDF2F7] dark:bg-[#35353D] dark:border-[#35353D] p-[5%] rounded-xl mt-4 ">
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
              <tr className="border-b border-[#EDF2F6]">
                <td className="py-2  ">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-[#3A3F51] font-medium text-base font-plus_jakara_sans hover:text-blue-500  truncate"
                    >
                      Marcus Bergson
                    </a>
                  </div>
                </td>
                <td className="py-2 ">
                  <span className="text-sm font-plus_jakara_sans  text-[#737373]">
                    Nov 15, 2023
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  font-plus_jakara_sans text-[#0D062D] font-medium text-sm leading-none">
                    $80,000
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  text-[#34CAA5] text-sm font-plus_jakara_sans  leading-none">
                    Paid
                  </span>
                </td>
                <td className="py-2 ">
                  <span className="inline-block  text-[#0D062D] text-sm font-plus_jakara_sans  leading-none">
                    View
                  </span>
                </td>
              </tr>
              <tr className="border-b border-[#EDF2F6]">
                <td className="py-2  ">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-[#3A3F51] font-medium text-base font-plus_jakara_sans hover:text-blue-500  truncate"
                    >
                      Marcus Bergson
                    </a>
                  </div>
                </td>
                <td className="py-2  ">
                  <span className="text-sm font-plus_jakara_sans  text-[#737373]">
                    Nov 15, 2023
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  font-plus_jakara_sans text-[#0D062D] font-medium text-sm leading-none">
                    $80,000
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  text-[#34CAA5] text-sm font-plus_jakara_sans  leading-none">
                    Paid
                  </span>
                </td>
                <td className="py-2 ">
                  <span className="inline-block  text-[#0D062D] text-sm font-plus_jakara_sans  leading-none">
                    View
                  </span>
                </td>
              </tr>
              <tr className="border-b border-[#EDF2F6]">
                <td className="py-2  ">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-[#3A3F51] font-medium text-base font-plus_jakara_sans hover:text-blue-500  truncate"
                    >
                      Marcus Bergson
                    </a>
                  </div>
                </td>
                <td className="py-2  ">
                  <span className="text-sm font-plus_jakara_sans  text-[#737373]">
                    Nov 15, 2023
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  font-plus_jakara_sans text-[#0D062D] font-medium text-sm leading-none">
                    $80,000
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  text-[#34CAA5] text-sm font-plus_jakara_sans  leading-none">
                    Paid
                  </span>
                </td>
                <td className="py-2 ">
                  <span className="inline-block  text-[#0D062D] text-sm font-plus_jakara_sans  leading-none">
                    View
                  </span>
                </td>
              </tr>
              <tr className="border-b border-[#EDF2F6]">
                <td className="py-2  ">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-[#3A3F51] font-medium text-base font-plus_jakara_sans hover:text-blue-500  truncate"
                    >
                      Marcus Bergson
                    </a>
                  </div>
                </td>
                <td className="py-2  ">
                  <span className="text-sm font-plus_jakara_sans  text-[#737373]">
                    Nov 15, 2023
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  font-plus_jakara_sans text-[#0D062D] font-medium text-sm leading-none">
                    $80,000
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  text-[#34CAA5] text-sm font-plus_jakara_sans  leading-none">
                    Paid
                  </span>
                </td>
                <td className="py-2 ">
                  <span className="inline-block  text-[#0D062D] text-sm font-plus_jakara_sans  leading-none">
                    View
                  </span>
                </td>
              </tr>
              <tr className="border-b border-[#EDF2F6]">
                <td className="py-2  ">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="text-[#3A3F51] font-medium text-base font-plus_jakara_sans hover:text-blue-500  truncate"
                    >
                      Marcus Bergson
                    </a>
                  </div>
                </td>
                <td className="py-2  ">
                  <span className="text-sm font-plus_jakara_sans  text-[#737373]">
                    Nov 15, 2023
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  font-plus_jakara_sans text-[#0D062D] font-medium text-sm leading-none">
                    $80,000
                  </span>
                </td>
                <td className="py-2  ">
                  <span className="inline-block  text-[#34CAA5] text-sm font-plus_jakara_sans  leading-none">
                    Paid
                  </span>
                </td>
                <td className="py-2 ">
                  <span className="inline-block  text-[#0D062D] text-sm font-plus_jakara_sans  leading-none">
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
