import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const CloudUpload = () => (
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
    className="lucide lucide-cloud-upload"
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

const ProductAdd = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [productDate, setProductDate] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeClick = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const availableSizes = [
    "EU - 44",
    "EU - 38.5",
    "EU - 39",
    "EU - 40",
    "EU - 41.5",
    "EU - 42",
    "EU - 43",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased flex justify-center items-start">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Product Details */}
        <div className="space-y-6">
          {/* Product Name */}
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="productName"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              maxLength={20}
            />
            <p className="mt-1 text-xs text-gray-500">
              Do not exceed 20 characters when entering the product name.
            </p>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="books">Books</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/*Regular Price*/}
          <div>
            <label
              htmlFor="Regular Price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Regular Price <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="regularPrice"
              placeholder="$240"
              //   value={regularPrice}
              //   onChange={(e) => setRegularPrice(e.target.value)}
            />
          </div>

          {/*Sale Price*/}
          <div>
            <label
              htmlFor="Sale Price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sale Price <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="salePrice"
              placeholder="$250"
              //   value={salePrice}
              //   onChange={(e) => setSalePrice(e.target.value)}
            />
          </div>

          {/*Sale Price*/}
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Stock <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="stock"
              placeholder="530"
              //   value={stock}
              //   onChange={(e) => setStock(e.target.value)}
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand <span className="text-red-500">*</span>
            </label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nike">Nike</SelectItem>
                <SelectItem value="adidas">Adidas</SelectItem>
                <SelectItem value="puma">Puma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <Textarea
              className="h-32"
              id="description"
              rows="4"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={100}
            />
            <p className="mt-1 text-xs text-gray-500">
              Do not exceed 100 characters when entering the product name.
            </p>
          </div>
        </div>

        {/* Right Column - Images, Size, Date, Actions */}
        <div className="space-y-6">
          {/* Upload Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload images
            </label>
            <div className="grid grid-cols-3 gap-4">
              <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500">
                <CloudUpload className="w-8 h-8 mb-1" />
                <span className="text-xs">Drop product Hero image here or</span>
                <span className="text-xs text-blue-600">click to browse</span>
              </div>
              <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500">
                <CloudUpload className="w-8 h-8 mb-1" />
                <span className="text-xs">
                  Drop product second image here or
                </span>
                <span className="text-xs text-blue-600">click to browse</span>
              </div>
              <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500">
                <CloudUpload className="w-8 h-8 mb-1" />
                <span className="text-xs">
                  Drop product third image here or
                </span>
                <span className="text-xs text-blue-600">click to browse</span>
              </div>
              <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500">
                <CloudUpload className="w-8 h-8 mb-1" />
                <span className="text-xs">
                  Drop product fourth image here or
                </span>
                <span className="text-xs text-blue-600">click to browse</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              You need to add at least 4 images. Pay attention to the quality of
              the pictures you add, comply with the background color standards.
              Pictures must be in certain dimensions. Notice that the product
              shows all the details
            </p>
          </div>

          {/* Add Size */}
          <div>
            <label
              htmlFor="addSize"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Add size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {availableSizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSizes.includes(size) ? "default" : "outline"}
                  onClick={() => handleSizeClick(size)}
                  className={`border ${
                    selectedSizes.includes(size)
                      ? "bg-blue-600 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Product Date */}
          <div>
            <label
              htmlFor="productDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product date
            </label>
            <Input
              type="date"
              id="productDate"
              value={productDate}
              onChange={(e) => setProductDate(e.target.value)}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="default" className="flex-1">
              Add product
            </Button>
            <Button variant="secondary" className="flex-1">
              Save product
            </Button>
            <Button variant="outline" className="flex-1">
              Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
