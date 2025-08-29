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
import { Checkbox } from "@/components/ui/checkbox";

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
    navigate("/product-new");
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
    <>
      {/* Header */}
      <div className="flex flex-col space-y-3">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Our Products
        </h1>
        <div className="flex flex-row justify-between mb-5">
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
          <Button
            variant="default"
            onClick={handleAddProduct}
            className="flex items-center gap-1"
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
                <Checkbox />
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
                    <Checkbox />
                  </TableCell>
                  <TableCell className="flex items-center">
                    <img
                      src={product.images?.[0]}
                      alt={product.title}
                      className="w-10 h-10 rounded-lg mr-3 object-cover border"
                    />
                    <span className="font-medium">{product.title}</span>
                  </TableCell>
                  {/* <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {product.categorys?.[0] || "—"}
                    </Badge>
                  </TableCell> */}

                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {product.categorys?.length > 1
                        ? `${product.categorys[0]} +${
                            product.categorys.length - 1
                          }`
                        : product.categorys?.[0] || "—"}
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
                  <TableCell className="pl-4">{product.rating ?? 0}</TableCell>
                  <TableCell className="flex justify-center gap-2">
                    <Button size="sm" variant="outline">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
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
                <p className="text-sm text-gray-500">
                  {product.categorys?.length > 1
                    ? `${product.categorys[0]} +${product.categorys.length - 1}`
                    : product.categorys?.[0] || "—"}
                </p>
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

export default AllProductsList;
