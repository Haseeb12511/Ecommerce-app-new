import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
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
import { Badge } from "@/components/ui/badge";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleViewDetails = (id) => navigate(`/ordersdetails/${id}`);

  // ✅ Search filter (UserName + Order ID)
  const filteredOrders = orders.filter(
    (order) =>
      order.userName?.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toString().includes(search)
  );

  // ✅ Pagination calculation
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // ✅ Pagination handlers
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col space-y-3">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Orders List
        </h1>
        <div className="flex flex-row justify-between mb-5">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search order id or customer name..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-8 pr-3 py-2 text-sm w-[270px]"
            />
          </div>
        </div>
      </div>

      {/* Table (Desktop Only) */}
      <div className="hidden md:block overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>User ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Total Items</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.length > 0 ? (
              currentItems.map((order) => (
                <TableRow
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="font-semibold text-green-600 pl-4">
                    #{order.id}
                  </TableCell>
                  <TableCell className="pl-4">{order.userId}</TableCell>
                  <TableCell>{order.userName}</TableCell>
                  <TableCell className="pl-4">
                    <Badge variant="outline">{order.items.length}</Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-gray-700">
                    ${order.totalAmount}
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      onClick={() => handleViewDetails(order.id)}
                      size="sm"
                      variant="outline"
                      className="cursor-pointer"
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-6 text-gray-500"
                >
                  No orders found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {currentItems.length > 0 ? (
          currentItems.map((order) => (
            <div
              key={order.id}
              className="bg-white border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between shadow-sm"
            >
              <div>
                <h2 className="font-semibold text-gray-800">
                  Order #{order.id}
                </h2>
                <p className="text-sm text-gray-500">{order.userName}</p>
                <p className="text-xs text-gray-400">{order.date}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-purple-600 font-bold">
                  ${order.totalAmount}
                </p>
                <p className="text-xs text-gray-500">
                  {order.items.length} items
                </p>
                <Button
                  onClick={() => handleViewDetails(order.id)}
                  size="sm"
                  variant="outline"
                  className="cursor-pointer"
                >
                  Details
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found</p>
        )}
      </div>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm ${
                  page === currentPage
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </>
  );
};

export default OrdersList;
