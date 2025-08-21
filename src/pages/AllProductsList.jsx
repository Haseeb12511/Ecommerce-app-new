// import { Button } from "@/components/ui/button";
// import React, { useState } from "react";
// import { Plus, Filter, ChevronLeft, ChevronRight } from "lucide-react";

// import { useNavigate } from "react-router-dom";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";

// const AllProductsList = () => {
//   // Mock data for the products list
//   const products = [
//     {
//       id: "prod1",
//       image: "https://placehold.co/40x40/FFD700/000?text=TS",
//       name: "T-Shirt",
//       category: "Women Cloths",
//       price: "$79.80",
//       stock: 79,
//       status: "Scheduled",
//     },
//     {
//       id: "prod2",
//       image: "https://placehold.co/40x40/ADD8E6/000?text=SH",
//       name: "Shirt",
//       category: "Man Cloths",
//       price: "$76.89",
//       stock: 86,
//       status: "Active",
//     },
//     {
//       id: "prod3",
//       image: "https://placehold.co/40x40/90EE90/000?text=PA",
//       name: "Pant",
//       category: "Kid Cloths",
//       price: "$86.65",
//       stock: 74,
//       status: "Draft",
//     },
//     {
//       id: "prod4",
//       image: "https://placehold.co/40x40/FFB6C1/000?text=SW",
//       name: "Sweater",
//       category: "Man Cloths",
//       price: "$56.07",
//       stock: 69,
//       status: "Active",
//     },
//     {
//       id: "prod5",
//       image: "https://placehold.co/40x40/DDA0DD/000?text=SW",
//       name: "Sweater",
//       category: "Man Cloths",
//       price: "$56.07",
//       stock: 69,
//       status: "Scheduled",
//     },
//     {
//       id: "prod6",
//       image: "https://placehold.co/40x40/F08080/000?text=LJ",
//       name: "Light Jacket",
//       category: "Women Cloths",
//       price: "$36.00",
//       stock: 65,
//       status: "Draft",
//     },
//     {
//       id: "prod7",
//       image: "https://placehold.co/40x40/87CEEB/000?text=HS",
//       name: "Half Shirt",
//       category: "Man Cloths",
//       price: "$46.78",
//       stock: 58,
//       status: "Active",
//     },
//     {
//       id: "prod8",
//       image: "https://placehold.co/40x40/FFC0CB/000?text=HS",
//       name: "Umar",
//       category: "Sweater",
//       price: "$46.78",
//       stock: 58,
//       status: "Active",
//     },
//     {
//       id: "prod9",
//       image: "https://placehold.co/40x40/DA70D6/000?text=HS",
//       name: "Muhmmad",
//       category: "Man Cloths",
//       price: "$46.78",
//       stock: 58,
//       status: "Scheduled",
//     },
//     {
//       id: "prod10",
//       image: "https://placehold.co/40x40/98FB98/000?text=HS",
//       name: "Fatima",
//       category: "Kid",
//       price: "$46.78",
//       stock: 58,
//       status: "Active",
//     },
//   ];

//   const getStatusClasses = (status) => {
//     switch (status) {
//       case "Scheduled":
//         return "bg-blue-100 text-blue-800";
//       case "Active":
//         return "bg-green-100 text-green-800";
//       case "Draft":
//         return "bg-yellow-100 text-yellow-800";
//       default:
//         return "";
//     }
//   };
//   const navigate = useNavigate();

//   const handleAddProduct = () => {
//     navigate("/productAdd");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased">
//       <div className="bg-white p-6 rounded-2xl shadow-sm">
//         {/* Header Section */}
//         <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
//           <h1 className="text-xl font-semibold text-gray-800">Products list</h1>
//           <div className="flex space-x-2">
//             <Button variant="outline" className="flex items-center space-x-2">
//               <Filter />
//               <span>Filter</span>
//             </Button>
//             <Button variant="outline">See All</Button>
//             <Button
//               variant="default"
//               onClick={handleAddProduct}
//               className=" text-white flex items-center space-x-1"
//             >
//               <Plus className="w-4 h-4 text-white" />
//               <span>Add Product</span>
//             </Button>
//           </div>
//         </div>

//         {/* Products Table */}
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-[50px]">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox rounded text-purple-600"
//                 />
//               </TableHead>
//               <TableHead>Product Name</TableHead>
//               <TableHead>Category</TableHead>
//               <TableHead>Price</TableHead>
//               <TableHead>Stock</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead className="text-right pr-[30px]">Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {products.map((product) => (
//               <TableRow key={product.id}>
//                 <TableCell>
//                   <input
//                     type="checkbox"
//                     className="form-checkbox rounded text-purple-600"
//                   />
//                 </TableCell>
//                 <TableCell className="flex items-center">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-10 h-10 rounded-lg mr-3"
//                   />
//                   {product.name}
//                 </TableCell>
//                 <TableCell>{product.category}</TableCell>
//                 <TableCell>{product.price}</TableCell>
//                 <TableCell>{product.stock}</TableCell>
//                 <TableCell>
//                   <span
//                     className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusClasses(
//                       product.status
//                     )}`}
//                   >
//                     {product.status}
//                   </span>
//                 </TableCell>
//                 <TableCell className="text-right">
//                   <Button
//                     variant="link"
//                     className="text-purple-600 hover:text-purple-700"
//                   >
//                     Details
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         {/* Pagination */}
//         <div className="flex items-center justify-between mt-6">
//           <Button variant="outline" className="flex items-center space-x-2">
//             <ChevronLeft />
//             <span>Previous</span>
//           </Button>
//           <div className="flex space-x-2">
//             {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
//               <Button
//                 key={index}
//                 variant={page === 1 ? "default" : "outline"} // Highlight page 1 as active
//                 className={`w-10 h-10 ${
//                   page === 1
//                     ? "bg-purple-600 text-white"
//                     : "bg-white text-gray-700 hover:bg-gray-50"
//                 }`}
//               >
//                 {page}
//               </Button>
//             ))}
//           </div>
//           <Button variant="outline" className="flex items-center space-x-2">
//             <span>Next</span>
//             <ChevronRight />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllProductsList;
///
////////////////////////////////////////////////////////////////

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import {
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  Pencil,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const AllProductsList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleAddProduct = () => {
    navigate("/productAdd");
  };

  // ✅ Search filter
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Pagination Handlers
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // ✅ localStorage update
  };

  return (
    <div className="">
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Products <span className="text-purple-600">List</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1); // search karte hi page reset
                }}
                className="pl-8 pr-3 py-2 text-sm w-full"
              />
            </div>
            {/* <Button variant="outline" className="flex items-center gap-1">
              <Filter className="w-4 h-4" />
              Filter
            </Button> */}
            <Button
              variant="default"
              onClick={handleAddProduct}
              className="flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Table (Desktop Only) */}
        <div className="hidden md:block overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="w-[50px] pl-5">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-purple-600"
                  />
                </TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.length > 0 ? (
                currentItems.map((product) => (
                  <TableRow
                    key={product.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="w-[50px] pl-5">
                      <input
                        type="checkbox"
                        className="form-checkbox rounded text-purple-600"
                      />
                    </TableCell>
                    <TableCell className="flex items-center">
                      <img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="w-10 h-10 rounded-lg mr-3 object-cover border"
                      />
                      <span className="font-medium">{product.title}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {product.categorys?.[1] || "—"}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-gray-700">
                      ${product.price}
                    </TableCell>
                    <TableCell>
                      {product.stock > 0 ? (
                        <Badge className="bg-green-100 text-green-700">
                          {product.stock} in stock
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700">
                          Out of stock
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{product.rating ?? 0} ⭐</TableCell>
                    <TableCell className="flex justify-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="cursor-pointer"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        className="cursor-pointer"
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-6 text-gray-500"
                  >
                    No products found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-0">
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-14 h-14 rounded-lg object-cover border"
                  />
                  <div>
                    <h2 className="font-medium text-gray-800">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {product.categorys?.[1] || "—"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                  <p className="text-purple-600 font-bold">${product.price}</p>
                  <p
                    className={`text-xs px-2 py-1 rounded ${
                      product.stock > 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {product.rating ?? 0} ⭐
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products found</p>
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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-lg text-sm ${
                      page === currentPage
                        ? "bg-purple-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </Button>
                )
              )}
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
      </div>
    </div>
  );
};

export default AllProductsList;
