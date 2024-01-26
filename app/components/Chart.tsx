// "use client";
// import React from "react";

// import {
//   PieChart,
//   Pie,
//   Tooltip,
//   BarChart,
//   XAxis,
//   YAxis,
//   Legend,
//   CartesianGrid,
//   Bar,
// } from "recharts";

// const Chart = () => {
//   const data = [
//     { name: "Facebook", users: 2000000000 },
//     { name: "Instagram", users: 1500000000 },
//     { name: "Twiter", users: 1000000000 },
//     { name: "Telegram", users: 500000000 },
//   ];

//   return (
//     <div className="flex justify-center items-center">
     
//       <div className="App">
        
//     <div>
//         <BarChart
//           width={500}
//           height={500}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 80,
//             bottom: 5,
//           }}
//           barSize={20}
//         >
//           <XAxis
//             dataKey="name"
//             scale="point"
//             padding={{ left: 10, right: 10 }}
//           />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="6 6" />
//           <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
//         </BarChart>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chart;

