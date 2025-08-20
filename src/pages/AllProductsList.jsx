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

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Plus, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const AllProductsList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // ✅ Load products from localStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleAddProduct = () => {
    navigate("/productAdd");
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
            <Button
              variant="default"
              onClick={handleAddProduct}
              className=" text-white flex items-center space-x-1"
            >
              <Plus className="w-4 h-4 text-white" />
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
              {/* <TableHead>Status</TableHead> */}
              <TableHead>Rating</TableHead>
              {/* <TableHead className="text-right pr-[30px]">Action</TableHead> */}
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
                    src={product.images[0]}
                    alt={product.title}
                    className="w-10 h-10 rounded-lg mr-3"
                  />
                  {product.title}
                </TableCell>
                <TableCell>{product.categories[1]}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                {/* <TableCell>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusClasses(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>
                </TableCell> */}
                <TableCell>{product.rating ?? 0} ⭐</TableCell>
                {/* <TableCell className="text-right">
                  <Button
                    variant="link"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    Details
                  </Button>
                </TableCell> */}
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

export default AllProductsList;
