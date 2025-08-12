// // // src/pages/Dashboard.jsx
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   ResponsiveContainer,
// // } from "recharts";

// // export default function Dashboard() {
// //   const earningsData = [
// //     { month: "Jan", earnings: 50 },
// //     { month: "Feb", earnings: 80 },
// //     { month: "Mar", earnings: 65 },
// //     { month: "Apr", earnings: 120 },
// //     { month: "May", earnings: 110 },
// //     { month: "Jun", earnings: 150 },
// //     { month: "Jul", earnings: 90 },
// //     { month: "Aug", earnings: 70 },
// //     { month: "Sep", earnings: 85 },
// //     { month: "Oct", earnings: 95 },
// //     { month: "Nov", earnings: 100 },
// //     { month: "Dec", earnings: 105 },
// //   ];

// //   return (
// //     <div className="flex gap-6 bg-gray-50 p-4 rounded-lg">
// //       {/* Left Content */}
// //       <div className="flex-1">
// //         <div className="mb-6">
// //           <h1 className="text-3xl font-semibold text-gray-800">
// //             Welcome Back, Zac!
// //           </h1>
// //           <p className="text-gray-500">
// //             Here's what's happening with your store today
// //           </p>
// //         </div>

// //         {/* Stats Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// //           {[
// //             {
// //               title: "Total Customers",
// //               value: "307.48K",
// //               change: "+30%",
// //               changeColor: "text-green-500",
// //             },
// //             {
// //               title: "Total Revenue",
// //               value: "$30.58K",
// //               change: "-15%",
// //               changeColor: "text-red-500",
// //             },
// //             {
// //               title: "Total Deals",
// //               value: "2.48K",
// //               change: "+23%",
// //               changeColor: "text-green-500",
// //             },
// //           ].map((stat, i) => (
// //             <div
// //               key={i}
// //               className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
// //             >
// //               <h2 className="text-2xl font-bold text-gray-800">{stat.value}</h2>
// //               <p className="text-gray-500">{stat.title}</p>
// //               <span className={`text-sm font-medium ${stat.changeColor}`}>
// //                 {stat.change} This month
// //               </span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Earnings Chart */}
// //         <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow mb-6">
// //           <h2 className="text-lg font-bold text-gray-800 mb-4">Earnings</h2>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <LineChart data={earningsData}>
// //               <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
// //               <XAxis dataKey="month" stroke="#6b7280" />
// //               <YAxis stroke="#6b7280" />
// //               <Tooltip />
// //               <Line
// //                 type="monotone"
// //                 dataKey="earnings"
// //                 stroke="#3b82f6"
// //                 strokeWidth={3}
// //                 dot={{ r: 4 }}
// //               />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </div>

// //         {/* Top Selling Products */}
// //         <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
// //           <h2 className="text-lg font-bold text-gray-800 mb-4">
// //             Top Selling Products
// //           </h2>
// //           <table className="w-full text-left border-separate border-spacing-y-2">
// //             <thead>
// //               <tr className="text-gray-500">
// //                 <th className="py-2">Product Name</th>
// //                 <th>Category</th>
// //                 <th>Stock</th>
// //                 <th>Total Sales</th>
// //               </tr>
// //             </thead>
// //             <tbody className="text-gray-700">
// //               <tr className="bg-gray-50 rounded-lg">
// //                 <td className="py-3 px-2 rounded-l-lg">Denim Jacket</td>
// //                 <td>Men's Tops</td>
// //                 <td className="text-green-500 font-medium">In Stock</td>
// //                 <td>1.43K</td>
// //               </tr>
// //               <tr className="bg-gray-50 rounded-lg">
// //                 <td className="py-3 px-2 rounded-l-lg">Nike Air Max 07</td>
// //                 <td>Men's Shoes</td>
// //                 <td className="text-red-500 font-medium">Out of Stock</td>
// //                 <td>984</td>
// //               </tr>
// //               <tr className="bg-gray-50 rounded-lg">
// //                 <td className="py-3 px-2 rounded-l-lg">Jordan Air</td>
// //                 <td>Men's T-Shirt</td>
// //                 <td className="text-green-500 font-medium">In Stock</td>
// //                 <td>1.2K</td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>

// //       {/* Right Sidebar */}
// //       <div className="w-80 flex-shrink-0 space-y-6">
// //         {[
// //           {
// //             title: "Top Countries by Sells",
// //             items: [
// //               ["🇦🇺 Australia", "7.2K"],
// //               ["🇧🇪 Belgium", "4.15K"],
// //               ["🇨🇦 Canada", "6.65K"],
// //             ],
// //           },
// //           {
// //             title: "Top Customers",
// //             items: [
// //               ["Robert Lewis", "$4.9K"],
// //               ["Tom Barron", "$3.6K"],
// //             ],
// //           },
// //           {
// //             title: "Recent Orders",
// //             items: [["Nike Air Force 1"], ["Jordan DR-FIT Sport"]],
// //           },
// //         ].map((section, i) => (
// //           <div
// //             key={i}
// //             className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
// //           >
// //             <h2 className="text-lg font-bold text-gray-800 mb-4">
// //               {section.title}
// //             </h2>
// //             <ul className="space-y-2">
// //               {section.items.map((item, idx) => (
// //                 <li
// //                   key={idx}
// //                   className="flex justify-between text-gray-700 text-sm"
// //                 >
// //                   <span>{item[0]}</span>
// //                   {item[1] && <span className="font-medium">{item[1]}</span>}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import { LayoutDashboard } from "lucide-react";
// import React, { useState } from "react";

// // Reusing some lucide-react icons by defining them as SVGs
// const Search = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-search"
//   >
//     <circle cx="11" cy="11" r="8" />
//     <path d="m21 21-4.3-4.3" />
//   </svg>
// );

// const Bell = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-bell"
//   >
//     <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//     <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//   </svg>
// );

// const ChevronRight = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-chevron-right"
//   >
//     <path d="m9 18 6-6-6-6" />
//   </svg>
// );

// const Dot = ({ color = "currentColor" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill={color}
//     stroke="none"
//   >
//     <circle cx="12" cy="12" r="8" />
//   </svg>
// );

// const LineChart = ({ data, color = "#4ADE80" }) => {
//   // This is a simplified static representation of a line chart,
//   // not a functional charting library. It mimics the visual output.
//   const points = data.map(
//     (val, index) => `${index * (100 / (data.length - 1))},${100 - val * 0.8}`
//   ); // Scale values
//   const pathData = `M${points.join("L")}`;

//   return (
//     <svg
//       className="w-full h-16"
//       viewBox="0 0 100 100"
//       preserveAspectRatio="none"
//     >
//       <path d={pathData} fill="none" stroke={color} strokeWidth="2" />
//     </svg>
//   );
// };

// const Dashboard = () => {
//   const summaryData = [
//     {
//       title: "Total Customer",
//       value: "307.48K",
//       change: "+30%",
//       period: "This month",
//       color: "text-green-500",
//       bgColor: "bg-green-50",
//       lineColor: "#4ADE80",
//       chartData: [20, 30, 45, 40, 50, 60, 55],
//     },
//     {
//       title: "Total Revenue",
//       value: "$30.58K",
//       change: "-15%",
//       period: "This month",
//       color: "text-red-500",
//       bgColor: "bg-red-50",
//       lineColor: "#EF4444",
//       chartData: [60, 50, 40, 45, 30, 20, 25],
//     },
//     {
//       title: "Total Deals",
//       value: "2.48K",
//       change: "+23%",
//       period: "This month",
//       color: "text-green-500",
//       bgColor: "bg-blue-50", // Changed to blue-50 for visual distinction
//       lineColor: "#4ADE80",
//       chartData: [30, 25, 35, 40, 50, 45, 55],
//     },
//   ];

//   const topSellingProducts = [
//     {
//       s_no: "Q1",
//       productName: "Denim Jacket",
//       category: "Men's Tops",
//       stock: "In stock",
//       totalSales: "1.43K",
//     },
//     {
//       s_no: "Q7",
//       productName: "Nike Air Max 97",
//       category: "Men's Shoes",
//       stock: "Out of Stock",
//       totalSales: "2.68K",
//     },
//     {
//       s_no: "Q3",
//       productName: "Jordan Air",
//       category: "Men's T-Shirt",
//       stock: "In stock",
//       totalSales: "1.8K",
//     },
//     {
//       s_no: "Q9",
//       productName: "Leather Boots",
//       category: "Men's Shoes",
//       stock: "In stock",
//       totalSales: "1.2K",
//     },
//   ];

//   const topCountries = [
//     { country: "Australia", flag: "🇦🇺", sells: "34.48K", percentage: "7.12K" },
//     { country: "Belgium", flag: "🇧🇪", sells: "34.48K", percentage: "4.12K" },
//     { country: "Canada", flag: "🇨🇦", sells: "34.48K", percentage: "6.45K" },
//     { country: "Costa Rica", flag: "🇨🇷", sells: "34.48K", percentage: "3.85K" },
//     { country: "Austria", flag: "🇦🇹", sells: "34.48K", percentage: "6.98K" },
//   ];

//   const topCustomers = [
//     {
//       name: "Robert Lewis",
//       role: "20 Purchase",
//       avatar: "https://placehold.co/40x40/ADD8E6/000?text=RL",
//     },
//     {
//       name: "Tom Barrett",
//       role: "21 Purchase",
//       avatar: "https://placehold.co/40x40/FFB6C1/000?text=TB",
//     },
//     {
//       name: "Jenson Doyle",
//       role: "11 Purchase",
//       avatar: "https://placehold.co/40x40/90EE90/000?text=JD",
//     },
//     {
//       name: "Donald Cortez",
//       role: "15 Purchase",
//       avatar: "https://placehold.co/40x40/FFD700/000?text=DC",
//     },
//   ];

//   const recentOrders = [
//     { product: "Nike Air Force 1 Shoes", price: "$110.96" },
//     { product: "Men's Dri-Fit 7 Sports", price: "$35.97" },
//     { product: "Puma Sneakers", price: "$99.99" },
//   ];

//   // Simple earnings data for static chart
//   const earningsMonths = [
//     "JAN",
//     "FEB",
//     "MAR",
//     "APR",
//     "MAY",
//     "JUN",
//     "JUL",
//     "AUG",
//     "SEP",
//     "OCT",
//     "NOV",
//     "DEC",
//   ];
//   const earningsData1 = [
//     120, 130, 110, 140, 125, 150, 135, 145, 160, 155, 170, 165,
//   ]; // Green line
//   const earningsData2 = [
//     100, 110, 90, 115, 105, 120, 110, 125, 140, 135, 150, 145,
//   ]; // Grey line

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased">
//       {/* Header */}
//       <header className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-2xl font-semibold text-gray-800">
//             Welcome Back, Zac!
//           </h1>
//           <p className="text-sm text-gray-500">
//             Here's what happening with your store today
//           </p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-50">
//             <Search />
//           </div>
//           <div className="p-2 bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-50">
//             <Bell />
//           </div>
//           <div className="flex items-center space-x-2 bg-white p-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-50">
//             <img
//               src="https://placehold.co/32x32/cccccc/000?text=ZH"
//               alt="User Avatar"
//               className="w-8 h-8 rounded-full"
//             />
//             <span className="text-sm font-medium text-gray-700 hidden sm:block">
//               Zac Hudson
//             </span>
//             <ChevronRight className="w-4 h-4 text-gray-500" />
//           </div>
//         </div>
//       </header>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* Main Content Area */}
//         <div className="lg:col-span-3 space-y-6">
//           {/* Summary Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {summaryData.map((card, index) => (
//               <div
//                 key={index}
//                 className={`p-6 rounded-2xl shadow-sm ${card.bgColor}`}
//               >
//                 <h3 className="text-gray-500 text-sm font-medium">
//                   {card.title}
//                 </h3>
//                 <div className="flex items-center justify-between mt-2 mb-4">
//                   <span className="text-3xl font-bold text-gray-800">
//                     {card.value}
//                   </span>
//                   <span
//                     className={`text-xs font-medium px-2 py-1 rounded-full ${
//                       card.color
//                     } ${
//                       card.color.includes("green")
//                         ? "bg-green-100"
//                         : "bg-red-100"
//                     }`}
//                   >
//                     {card.change}
//                   </span>
//                 </div>
//                 <p className="text-xs text-gray-500">{card.period}</p>
//                 <LineChart data={card.chartData} color={card.lineColor} />
//               </div>
//             ))}
//           </div>

//           {/* Earnings Chart */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-lg font-semibold text-gray-800">Earnings</h2>
//               <div className="flex items-center space-x-4 text-sm text-gray-600">
//                 <div className="flex items-center">
//                   <Dot color="#4ADE80" />
//                   <span>First half</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Dot color="#D1D5DB" /> {/* Grey color for second line */}
//                   <span>Top Gross</span>
//                 </div>
//               </div>
//             </div>

//             {/* Static Chart Area */}
//             <div className="relative h-64 w-full">
//               {/* Y-axis labels */}
//               <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
//                 <span>400</span>
//                 <span>300</span>
//                 <span>200</span>
//                 <span>100</span>
//                 <span>50</span>
//                 <span>0</span>
//               </div>
//               {/* Chart lines and background grid */}
//               <div className="ml-8 h-full w-[calc(100%-2rem)] relative">
//                 {/* Horizontal grid lines */}
//                 {[0, 25, 50, 75, 100].map((top, idx) => (
//                   <div
//                     key={idx}
//                     className="absolute left-0 w-full border-b border-gray-200"
//                     style={{ top: `${top}%` }}
//                   ></div>
//                 ))}
//                 {/* Static SVG for earnings lines */}
//                 <svg
//                   className="w-full h-full absolute top-0 left-0"
//                   viewBox="0 0 1000 100"
//                   preserveAspectRatio="none"
//                 >
//                   {/* Green line - Scaled manually for visual representation */}
//                   <polyline
//                     fill="none"
//                     stroke="#4ADE80"
//                     strokeWidth="2"
//                     points={earningsData1
//                       .map(
//                         (val, idx) =>
//                           `${idx * (1000 / (earningsData1.length - 1))},${
//                             100 - (val / 400) * 100
//                           }`
//                       )
//                       .join(" ")}
//                   />
//                   {/* Grey line - Scaled manually for visual representation */}
//                   <polyline
//                     fill="none"
//                     stroke="#D1D5DB"
//                     strokeWidth="2"
//                     points={earningsData2
//                       .map(
//                         (val, idx) =>
//                           `${idx * (1000 / (earningsData2.length - 1))},${
//                             100 - (val / 400) * 100
//                           }`
//                       )
//                       .join(" ")}
//                   />
//                   {/* Highlighted point and tooltip (mocked) */}
//                   <circle cx="500" cy="37.5" r="4" fill="black" />{" "}
//                   {/* Roughly for June (5th point for 400 max val, at 150) */}
//                   <rect
//                     x="440"
//                     y="5"
//                     width="120"
//                     height="35"
//                     fill="black"
//                     rx="8"
//                     ry="8"
//                   />
//                   <text
//                     x="500"
//                     y="20"
//                     fill="white"
//                     fontSize="10"
//                     textAnchor="middle"
//                   >
//                     $307.48K
//                   </text>
//                   <text
//                     x="500"
//                     y="30"
//                     fill="white"
//                     fontSize="8"
//                     textAnchor="middle"
//                   >
//                     JUNE 2024
//                   </text>
//                 </svg>
//               </div>
//               {/* X-axis labels */}
//               <div className="absolute bottom-0 left-0 w-full ml-8 flex justify-between text-xs text-gray-500">
//                 {earningsMonths.map((month, idx) => (
//                   <span key={idx} className="flex-1 text-center">
//                     {month}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Top Selling Products */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm">
//             <h2 className="text-lg font-semibold text-gray-800 mb-6">
//               Top selling products
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg"
//                     >
//                       S/NO.
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Product Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Category
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Stock
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg"
//                     >
//                       Total sales
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {topSellingProducts.map((product, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                         {product.s_no}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center">
//                         <img
//                           src={`https://placehold.co/40x40/E0E7FF/000?text=P${index}`}
//                           alt="Product"
//                           className="w-10 h-10 rounded-lg mr-3"
//                         />
//                         {product.productName}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {product.category}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm">
//                         <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             product.stock === "In stock"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {product.stock}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {product.totalSales}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="lg:col-span-1 space-y-6">
//           {/* Top Countries by Sells */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Top Countries by Sells
//               </h2>
//               <span className="text-xs text-gray-400">Since last week</span>
//             </div>
//             <ul>
//               {topCountries.map((country, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
//                 >
//                   <div className="flex items-center">
//                     <span className="text-xl mr-3">{country.flag}</span>
//                     <span className="text-sm text-gray-800">
//                       {country.country}
//                     </span>
//                   </div>
//                   <span className="text-sm text-gray-500">
//                     {country.percentage}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Top Customers */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Top Customers
//               </h2>
//               <button className="text-blue-600 text-sm font-medium flex items-center hover:underline">
//                 See all <ChevronRight className="w-4 h-4 ml-1" />
//               </button>
//             </div>
//             <ul>
//               {topCustomers.map((customer, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
//                 >
//                   <div className="flex items-center">
//                     <img
//                       src={customer.avatar}
//                       alt="Customer Avatar"
//                       className="w-10 h-10 rounded-full mr-3"
//                     />
//                     <div>
//                       <span className="block text-sm font-medium text-gray-900">
//                         {customer.name}
//                       </span>
//                       <span className="block text-xs text-gray-500">
//                         {customer.role}
//                       </span>
//                     </div>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">
//                     $4.19K
//                   </span>{" "}
//                   {/* Mocked value */}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Recent Orders */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Recent Orders
//               </h2>
//               <button className="text-blue-600 text-sm font-medium flex items-center hover:underline">
//                 See all <ChevronRight className="w-4 h-4 ml-1" />
//               </button>
//             </div>
//             <ul>
//               {recentOrders.map((order, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
//                 >
//                   <div className="flex items-center">
//                     <img
//                       src={`https://placehold.co/40x40/E0F2F7/000?text=O${index}`}
//                       alt="Order Product"
//                       className="w-10 h-10 rounded-lg mr-3"
//                     />
//                     <span className="text-sm text-gray-800">
//                       {order.product}
//                     </span>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">
//                     {order.price}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";

// Reusing some lucide-react icons by defining them as SVGs
// In a real setup, you would import these from 'lucide-react'
const Search = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const Bell = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucude-bell"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Dot = ({ color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={color}
    stroke="none"
  >
    <circle cx="12" cy="12" r="8" />
  </svg>
);

const LineChart = ({ data, color = "#4ADE80" }) => {
  // This is a simplified static representation of a line chart,
  // not a functional charting library. It mimics the visual output.
  const points = data.map(
    (val, index) => `${index * (100 / (data.length - 1))},${100 - val * 0.8}`
  ); // Scale values
  const pathData = `M${points.join("L")}`;

  return (
    <svg
      className="w-full h-16"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d={pathData} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
};

// --- Shadcn/ui Table Components (Simplified for direct use) ---
// In a real shadcn/ui setup, these would be imported from '@/components/ui/table'
// For this example, we're defining them here to show their structure.

const Table = ({ children, className }) => (
  <div className={`w-full overflow-auto ${className}`}>
    <table className="w-full caption-bottom text-sm">{children}</table>
  </div>
);

const TableHeader = ({ children, className }) => (
  <thead className={`[&_tr]:border-b ${className}`}>{children}</thead>
);

const TableBody = ({ children, className }) => (
  <tbody className={`[&_tr:last-child]:border-0 ${className}`}>
    {children}
  </tbody>
);

const TableFooter = ({ children, className }) => (
  <tfoot
    className={`border-t bg-muted/50 font-medium [&>tr]:last:h-px ${className}`}
  >
    {children}
  </tfoot>
);

const TableRow = ({ children, className }) => (
  <tr
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
  >
    {children}
  </tr>
);

const TableHead = ({ children, className }) => (
  <th
    className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
  >
    {children}
  </th>
);

const TableCell = ({ children, className }) => (
  <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}>
    {children}
  </td>
);

const TableCaption = ({ children, className }) => (
  <caption className={`mt-4 text-sm text-muted-foreground ${className}`}>
    {children}
  </caption>
);

// --- Shadcn/ui Button Component (Simplified for direct use) ---
// In a real shadcn/ui setup, this would be imported from '@/components/ui/button'
const Button = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- End Shadcn/ui Components ---

const App = () => {
  const summaryData = [
    {
      title: "Total Customer",
      value: "307.48K",
      change: "+30%",
      period: "This month",
      color: "text-green-500",
      bgColor: "bg-green-50",
      lineColor: "#4ADE80",
      chartData: [20, 30, 45, 40, 50, 60, 55],
    },
    {
      title: "Total Revenue",
      value: "$30.58K",
      change: "-15%",
      period: "This month",
      color: "text-red-500",
      bgColor: "bg-red-50",
      lineColor: "#EF4444",
      chartData: [60, 50, 40, 45, 30, 20, 25],
    },
    {
      title: "Total Deals",
      value: "2.48K",
      change: "+23%",
      period: "This month",
      color: "text-green-500",
      bgColor: "bg-blue-50", // Changed to blue-50 for visual distinction
      lineColor: "#4ADE80",
      chartData: [30, 25, 35, 40, 50, 45, 55],
    },
  ];

  const topSellingProducts = [
    {
      s_no: "Q1",
      productName: "Denim Jacket",
      category: "Men's Tops",
      stock: "In stock",
      totalSales: "1.43K",
    },
    {
      s_no: "Q7",
      productName: "Nike Air Max 97",
      category: "Men's Shoes",
      stock: "Out of Stock",
      totalSales: "2.68K",
    },
    {
      s_no: "Q3",
      productName: "Jordan Air",
      category: "Men's T-Shirt",
      stock: "In stock",
      totalSales: "1.8K",
    },
    {
      s_no: "Q9",
      productName: "Leather Boots",
      category: "Men's Shoes",
      stock: "In stock",
      totalSales: "1.2K",
    },
  ];

  const topCountries = [
    { country: "Australia", flag: "🇦🇺", sells: "34.48K", percentage: "7.12K" },
    { country: "Belgium", flag: "🇧🇪", sells: "34.48K", percentage: "4.12K" },
    { country: "Canada", flag: "🇨🇦", sells: "34.48K", percentage: "6.45K" },
    { country: "Costa Rica", flag: "🇨🇷", sells: "34.48K", percentage: "3.85K" },
    { country: "Austria", flag: "🇦🇹", sells: "34.48K", percentage: "6.98K" },
  ];

  const topCustomers = [
    {
      name: "Robert Lewis",
      role: "20 Purchase",
      avatar: "https://placehold.co/40x40/ADD8E6/000?text=RL",
    },
    {
      name: "Tom Barrett",
      role: "21 Purchase",
      avatar: "https://placehold.co/40x40/FFB6C1/000?text=TB",
    },
    {
      name: "Jenson Doyle",
      role: "11 Purchase",
      avatar: "https://placehold.co/40x40/90EE90/000?text=JD",
    },
    {
      name: "Donald Cortez",
      role: "15 Purchase",
      avatar: "https://placehold.co/40x40/FFD700/000?text=DC",
    },
  ];

  const recentOrders = [
    { product: "Nike Air Force 1 Shoes", price: "$110.96" },
    { product: "Men's Dri-Fit 7 Sports", price: "$35.97" },
    { product: "Puma Sneakers", price: "$99.99" },
  ];

  // Simple earnings data for static chart
  const earningsMonths = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const earningsData1 = [
    120, 130, 110, 140, 125, 150, 135, 145, 160, 155, 170, 165,
  ]; // Green line
  const earningsData2 = [
    100, 110, 90, 115, 105, 120, 110, 125, 140, 135, 150, 145,
  ]; // Grey line

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome Back, Zac!
          </h1>
          <p className="text-sm text-gray-500">
            Here's what happening with your store today
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
          >
            <Search />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
          >
            <Bell />
          </Button>
          <div className="flex items-center space-x-2 bg-white p-2 rounded-full shadow-sm cursor-pointer hover:bg-gray-50">
            <img
              src="https://placehold.co/32x32/cccccc/000?text=ZH"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700 hidden sm:block">
              Zac Hudson
            </span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {summaryData.map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-sm ${card.bgColor}`}
              >
                <h3 className="text-gray-500 text-sm font-medium">
                  {card.title}
                </h3>
                <div className="flex items-center justify-between mt-2 mb-4">
                  <span className="text-3xl font-bold text-gray-800">
                    {card.value}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      card.color
                    } ${
                      card.color.includes("green")
                        ? "bg-green-100"
                        : "bg-red-100"
                    }`}
                  >
                    {card.change}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{card.period}</p>
                <LineChart data={card.chartData} color={card.lineColor} />
              </div>
            ))}
          </div>

          {/* Earnings Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Earnings</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Dot color="#4ADE80" />
                  <span>First half</span>
                </div>
                <div className="flex items-center">
                  <Dot color="#D1D5DB" /> {/* Grey color for second line */}
                  <span>Top Gross</span>
                </div>
              </div>
            </div>

            {/* Static Chart Area */}
            <div className="relative h-64 w-full">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>50</span>
                <span>0</span>
              </div>
              {/* Chart lines and background grid */}
              <div className="ml-8 h-full w-[calc(100%-2rem)] relative">
                {/* Horizontal grid lines */}
                {[0, 25, 50, 75, 100].map((top, idx) => (
                  <div
                    key={idx}
                    className="absolute left-0 w-full border-b border-gray-200"
                    style={{ top: `${top}%` }}
                  ></div>
                ))}
                {/* Static SVG for earnings lines */}
                <svg
                  className="w-full h-full absolute top-0 left-0"
                  viewBox="0 0 1000 100"
                  preserveAspectRatio="none"
                >
                  {/* Green line - Scaled manually for visual representation */}
                  <polyline
                    fill="none"
                    stroke="#4ADE80"
                    strokeWidth="2"
                    points={earningsData1
                      .map(
                        (val, idx) =>
                          `${idx * (1000 / (earningsData1.length - 1))},${
                            100 - (val / 400) * 100
                          }`
                      )
                      .join(" ")}
                  />
                  {/* Grey line - Scaled manually for visual representation */}
                  <polyline
                    fill="none"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    points={earningsData2
                      .map(
                        (val, idx) =>
                          `${idx * (1000 / (earningsData2.length - 1))},${
                            100 - (val / 400) * 100
                          }`
                      )
                      .join(" ")}
                  />
                  {/* Highlighted point and tooltip (mocked) */}
                  <circle cx="500" cy="37.5" r="4" fill="black" />{" "}
                  {/* Roughly for June (5th point for 400 max val, at 150) */}
                  <rect
                    x="440"
                    y="5"
                    width="120"
                    height="35"
                    fill="black"
                    rx="8"
                    ry="8"
                  />
                  <text
                    x="500"
                    y="20"
                    fill="white"
                    fontSize="10"
                    textAnchor="middle"
                  >
                    $307.48K
                  </text>
                  <text
                    x="500"
                    y="30"
                    fill="white"
                    fontSize="8"
                    textAnchor="middle"
                  >
                    JUNE 2024
                  </text>
                </svg>
              </div>
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 w-full ml-8 flex justify-between text-xs text-gray-500">
                {earningsMonths.map((month, idx) => (
                  <span key={idx} className="flex-1 text-center">
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Top Selling Products - Using Shadcn/ui Table */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Top selling products
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="rounded-tl-lg">S/NO.</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead className="text-right rounded-tr-lg">
                    Total sales
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topSellingProducts.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {product.s_no}
                    </TableCell>
                    <TableCell className="flex items-center">
                      <img
                        src={`https://placehold.co/40x40/E0E7FF/000?text=P${index}`}
                        alt="Product"
                        className="w-10 h-10 rounded-lg mr-3"
                      />
                      {product.productName}
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.stock === "In stock"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.stock}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {product.totalSales}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Top Countries by Sells */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Top Countries by Sells
              </h2>
              <span className="text-xs text-gray-400">Since last week</span>
            </div>
            <ul>
              {topCountries.map((country, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{country.flag}</span>
                    <span className="text-sm text-gray-800">
                      {country.country}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {country.percentage}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Customers */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Top Customers
              </h2>
              <Button
                variant="link"
                className="p-0 h-auto text-blue-600 text-sm font-medium flex items-center hover:underline"
              >
                See all <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <ul>
              {topCustomers.map((customer, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center">
                    <img
                      src={customer.avatar}
                      alt="Customer Avatar"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <span className="block text-sm font-medium text-gray-900">
                        {customer.name}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {customer.role}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    $4.19K
                  </span>{" "}
                  {/* Mocked value */}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Orders
              </h2>
              <Button
                variant="link"
                className="p-0 h-auto text-blue-600 text-sm font-medium flex items-center hover:underline"
              >
                See all <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <ul>
              {recentOrders.map((order, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center">
                    <img
                      src={`https://placehold.co/40x40/E0F2F7/000?text=O${index}`}
                      alt="Order Product"
                      className="w-10 h-10 rounded-lg mr-3"
                    />
                    <span className="text-sm text-gray-800">
                      {order.product}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {order.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
