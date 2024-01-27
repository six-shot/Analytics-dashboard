"use client";
import React from "react";
import { TooltipProps } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";
import * as RxIcons from "react-icons/rx";

const data = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 2400,
  },
  {
    name: "Feb",
    Expense: 3000,
  },
  {
    name: "Mar",
    Expense: 2000,
  },
  {
    name: "Apr",
    Expense: 2780,
  },
  {
    name: "May",
    Expense: 1890,
  },
  {
    name: "Jun",
    Expense: 2390,
  },
  {
    name: "July",
    Expense: 3490,
  },
  {
    name: "Aug",
    Expense: 2000,
  },
  {
    name: "Sep",
    Expense: 2780,
  },
  {
    name: "Oct",
    Expense: 1890,
  },
  {
    name: "Nov",
    Expense: 2390,
  },
  {
    name: "Dec",
    Expense: 3490,
  },
];

export default function Chart() {
  return (
    <div className="h-[24rem] overflow-y-hidden overflow-x-auto bg-white sm:pl-[1%] pl-[2%] pr-[3%] dark:bg-[#161619] dark:border dark:border-[#161619] py-4 font-plus_jakara_sans rounded-xl border border-gray-200 flex flex-col flex-1">
      <div className="flex justify-between items-center mb-2">
        <h5 className="font-semibold text-[#26282C] dark:text-[#EDF2F6]  px-[2%] font-plus_jakara_sans  ">
          Sales Trend
        </h5>
        <div className="flex items-center sm:gap-3 gap-2">
          <h5 className="text-sm font-medium">Short by:</h5>
          <div className="sm:w-[110px] w-[80px] px-3 sm:h-[38px] h-[34px] flex justify-between items-center text-sm border border-[#E1DFDF] rounded-[20px]">
            <h5 className="text-xs font-plus_jakara_sans">Weekly</h5>
            <RxIcons.RxCaretDown className="text-[25px]"/>
          </div>
        </div>
      </div>

      <div className="mt-3  flex-1 text-xs   sm:w-full w-[800px] ">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: -10,
              bottom: 0,
            }}
            barSize={27}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />

            <Bar
              dataKey="Expense"
              fill="rgba(52, 202, 165, 0.10)"
              radius={[20, 20, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
