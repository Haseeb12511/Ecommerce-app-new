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

const ProductsList = () => {
  // Mock data for the products list
  const products = [
    {
      id: "prod1",
      image: "https://placehold.co/40x40/FFD700/000?text=TS",
      name: "T-Shirt",
      category: "Women Cloths",
      price: "$79.80",
      stock: 79,
      status: "Scheduled",
    },
    {
      id: "prod2",
      image: "https://placehold.co/40x40/ADD8E6/000?text=SH",
      name: "Shirt",
      category: "Man Cloths",
      price: "$76.89",
      stock: 86,
      status: "Active",
    },
    {
      id: "prod3",
      image: "https://placehold.co/40x40/90EE90/000?text=PA",
      name: "Pant",
      category: "Kid Cloths",
      price: "$86.65",
      stock: 74,
      status: "Draft",
    },
    {
      id: "prod4",
      image: "https://placehold.co/40x40/FFB6C1/000?text=SW",
      name: "Sweater",
      category: "Man Cloths",
      price: "$56.07",
      stock: 69,
      status: "Active",
    },
    {
      id: "prod5",
      image: "https://placehold.co/40x40/DDA0DD/000?text=SW",
      name: "Sweater",
      category: "Man Cloths",
      price: "$56.07",
      stock: 69,
      status: "Scheduled",
    },
    {
      id: "prod6",
      image: "https://placehold.co/40x40/F08080/000?text=LJ",
      name: "Light Jacket",
      category: "Women Cloths",
      price: "$36.00",
      stock: 65,
      status: "Draft",
    },
    {
      id: "prod7",
      image: "https://placehold.co/40x40/87CEEB/000?text=HS",
      name: "Half Shirt",
      category: "Man Cloths",
      price: "$46.78",
      stock: 58,
      status: "Active",
    },
    {
      id: "prod8",
      image: "https://placehold.co/40x40/FFC0CB/000?text=HS",
      name: "Umar",
      category: "Sweater",
      price: "$46.78",
      stock: 58,
      status: "Active",
    },
    {
      id: "prod9",
      image: "https://placehold.co/40x40/DA70D6/000?text=HS",
      name: "Muhmmad",
      category: "Man Cloths",
      price: "$46.78",
      stock: 58,
      status: "Scheduled",
    },
    {
      id: "prod10",
      image: "https://placehold.co/40x40/98FB98/000?text=HS",
      name: "Fatima",
      category: "Kid",
      price: "$46.78",
      stock: 58,
      status: "Active",
    },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case "Scheduled":
        return "bg-blue-100 text-blue-800";
      case "Active":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-xl font-semibold text-gray-800">Products list</h1>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter />
              <span>Filter</span>
            </Button>
            <Button variant="outline">See All</Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center space-x-2">
              <Plus />
              <span>Add Product</span>
            </Button>
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
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right pr-[30px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-purple-600"
                  />
                </TableCell>
                <TableCell className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded-lg mr-3"
                  />
                  {product.name}
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusClasses(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="link"
                    className="text-purple-600 hover:text-purple-700"
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

export default ProductsList;
