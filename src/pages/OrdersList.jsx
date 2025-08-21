import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const OrdersList = () => {
  const orders = [
    {
      id: 87451,
      orderNo: "#87451",
      customer: "Esther Howard",
      date: "02/03/2022",
      amount: "$200",
      category: "Notebook",
      status: "Delivered",
    },
    {
      id: 87452,
      orderNo: "#87452",
      customer: "Wade Warren",
      date: "02/03/2022",
      amount: "$220",
      category: "Notebook",
      status: "Delivered",
    },
    {
      id: 87453,
      orderNo: "#87453",
      customer: "Jenny Wilson",
      date: "02/03/2022",
      amount: "$300",
      category: "Notebook",
      status: "Delivered",
    },
    {
      id: 87454,
      orderNo: "#87454",
      customer: "Guy Hawkins",
      date: "02/03/2022",
      amount: "$400",
      category: "Notebook",
      status: "Delivered",
    },
    {
      id: 87455,
      orderNo: "#87455",
      customer: "Robert Fox",
      date: "02/03/2022",
      amount: "$450",
      category: "Notebook",
      status: "Delivered",
    },
  ];

  const navigate = useNavigate();
  const handleViewDetails = () => navigate("/ordersdetails");

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-xl font-semibold text-gray-800">Orders list</h1>
          <div className="flex items-center w-full max-w-sm relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search orders..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-purple-600"
                />
              </TableHead>
              <TableHead>Order No</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-purple-600"
                  />
                </TableCell>
                <TableCell className="text-green-600 font-medium">
                  {order.orderNo}
                </TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.category}</TableCell>
                <TableCell className="text-blue-500">{order.status}</TableCell>
                <TableCell>
                  <Button
                    onClick={handleViewDetails}
                    variant="link"
                    className="text-purple-600 hover:text-purple-700 cursor-pointer p-0"
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" className="flex items-center space-x-2">
            <ChevronLeft />
            <span>Previous</span>
          </Button>
          <div className="flex space-x-2">
            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <Button
                key={index}
                variant={page === 1 ? "default" : "outline"}
                className={`w-10 h-10 ${
                  page === 1 ? "bg-purple-600 text-white" : ""
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <span>Next</span>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;

// // src/pages/Orders.jsx
// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // Mock Data
// const ordersData = [
//   {
//     id: "ORD001",
//     customer: "Haseeb Hussain",
//     amount: 25000,
//     date: "2024-08-15",
//     status: "Pending",
//     products: [
//       { name: "AirPods Pro", qty: 1, price: 20000 },
//       { name: "Phone Case", qty: 2, price: 2500 },
//     ],
//     shipping: "Lahore, Pakistan",
//     payment: "Paid",
//   },
//   {
//     id: "ORD002",
//     customer: "Ali Khan",
//     amount: 15000,
//     date: "2024-08-18",
//     status: "Dispatched",
//     products: [{ name: "Smart Watch", qty: 1, price: 15000 }],
//     shipping: "Karachi, Pakistan",
//     payment: "Pending",
//   },
//   {
//     id: "ORD003",
//     customer: "Ayesha Ahmed",
//     amount: 32000,
//     date: "2024-08-19",
//     status: "Delivered",
//     products: [
//       { name: "Laptop Bag", qty: 1, price: 8000 },
//       { name: "Wireless Mouse", qty: 2, price: 12000 },
//       { name: "Keyboard", qty: 1, price: 12000 },
//     ],
//     shipping: "Islamabad, Pakistan",
//     payment: "Paid",
//   },
// ];

// export default function Orders() {
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");

//   const filteredOrders = ordersData.filter((order) => {
//     const matchesSearch =
//       order.id.toLowerCase().includes(search.toLowerCase()) ||
//       order.customer.toLowerCase().includes(search.toLowerCase());
//     const matchesStatus =
//       statusFilter === "All" || order.status === statusFilter;
//     return matchesSearch && matchesStatus;
//   });

//   return (
//     <div className="container mx-auto px-6 lg:px-16 py-10">
//       <h1 className="text-3xl font-bold mb-6">Orders</h1>

//       {/* Search + Filter */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
//         <Input
//           placeholder="Search by Order ID or Customer..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="max-w-sm"
//         />
//         <Select value={statusFilter} onValueChange={setStatusFilter}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Filter by Status" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="All">All</SelectItem>
//             <SelectItem value="Pending">Pending</SelectItem>
//             <SelectItem value="Dispatched">Dispatched</SelectItem>
//             <SelectItem value="Delivered">Delivered</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Orders Table */}
//       <Card className="shadow-sm">
//         <CardHeader>
//           <CardTitle>Order List</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Order ID</TableHead>
//                   <TableHead>Customer</TableHead>
//                   <TableHead>Total</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Action</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredOrders.map((order) => (
//                   <TableRow key={order.id}>
//                     <TableCell>{order.id}</TableCell>
//                     <TableCell>{order.customer}</TableCell>
//                     <TableCell>Rs {order.amount.toLocaleString()}</TableCell>
//                     <TableCell>{order.date}</TableCell>
//                     <TableCell>
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           order.status === "Pending"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : order.status === "Dispatched"
//                             ? "bg-blue-100 text-blue-800"
//                             : "bg-green-100 text-green-800"
//                         }`}
//                       >
//                         {order.status}
//                       </span>
//                     </TableCell>
//                     <TableCell>
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <Button size="sm" variant="outline">
//                             View Details
//                           </Button>
//                         </DialogTrigger>
//                         <DialogContent className="max-w-lg">
//                           <DialogHeader>
//                             <DialogTitle>Order Details</DialogTitle>
//                           </DialogHeader>
//                           <div className="space-y-4">
//                             <p>
//                               <strong>Order ID:</strong> {order.id}
//                             </p>
//                             <p>
//                               <strong>Customer:</strong> {order.customer}
//                             </p>
//                             <p>
//                               <strong>Shipping:</strong> {order.shipping}
//                             </p>
//                             <p>
//                               <strong>Payment:</strong> {order.payment}
//                             </p>
//                             <p className="font-semibold">Products:</p>
//                             <ul className="list-disc list-inside">
//                               {order.products.map((p, i) => (
//                                 <li key={i}>
//                                   {p.name} × {p.qty} = Rs{" "}
//                                   {(p.qty * p.price).toLocaleString()}
//                                 </li>
//                               ))}
//                             </ul>
//                             <p className="font-bold">
//                               Total: Rs {order.amount.toLocaleString()}
//                             </p>

//                             {/* Status Update */}
//                             <div className="flex items-center gap-2">
//                               <Select
//                                 value={order.status}
//                                 onValueChange={(val) =>
//                                   console.log("Update status to", val)
//                                 }
//                               >
//                                 <SelectTrigger className="w-[150px]">
//                                   <SelectValue placeholder="Update Status" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                   <SelectItem value="Pending">
//                                     Pending
//                                   </SelectItem>
//                                   <SelectItem value="Dispatched">
//                                     Dispatched
//                                   </SelectItem>
//                                   <SelectItem value="Delivered">
//                                     Delivered
//                                   </SelectItem>
//                                 </SelectContent>
//                               </Select>
//                               <Button>Update</Button>
//                             </div>

//                             <Button className="w-full mt-4" variant="outline">
//                               Print Invoice
//                             </Button>
//                           </div>
//                         </DialogContent>
//                       </Dialog>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
