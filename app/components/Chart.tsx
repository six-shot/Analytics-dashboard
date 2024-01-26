"use client";
import React from "react";
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

const data = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 2400,
  },
  {
    name: "Feb",
    Expense: 3000,
    Income: 1398,
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Apr",
    Expense: 2780,
    Income: 3908,
  },
  {
    name: "May",
    Expense: 1890,
    Income: 4800,
  },
  {
    name: "Jun",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "July",
    Expense: 3490,
    Income: 4300,
  },
  {
    name: "Aug",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Sep",
    Expense: 2780,
    Income: 3908,
  },
  {
    name: "Oct",
    Expense: 1890,
    Income: 4800,
  },
  {
    name: "Nov",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "Dec",
    Expense: 3490,
    Income: 4300,
  },
];

export default function Chart() {
  return (
    <div className="h-[22rem] bg-white dark:bg-[#35353D] dark:border-[#35353D] py-4 font-plus_jakara_sans rounded-xl border border-gray-200 flex flex-col flex-1">
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
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
            <Tooltip />

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
