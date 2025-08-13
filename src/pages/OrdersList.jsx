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
              <TableHead className="pl-6">Action</TableHead>
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
