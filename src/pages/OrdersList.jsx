import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

// Reusing some lucide-react icons by defining them as SVGs
// In a real setup, you would import these from 'lucide-react'
const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-plus"
  >
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const Filter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-filter"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-left"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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

// --- Shadcn/ui Table Components (Simplified for direct use) ---
// In a real shadcn/ui setup, these would be imported from '@/components/ui/table'
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

const OrdersList = () => {
  // Mock data for the products list
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

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-xl font-semibold text-gray-800">Products list</h1>
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

        {/* Products Table */}
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
                    variant="link"
                    className="text-purple-600 hover:text-purple-700 p-0"
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
                variant={page === 1 ? "default" : "outline"} // Highlight page 1 as active
                className={`w-10 h-10 rounded-full ${
                  page === 1
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
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
