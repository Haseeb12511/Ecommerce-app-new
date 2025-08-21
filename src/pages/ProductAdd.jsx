// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";

// const CloudUpload = () => (
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
//     className="lucide lucide-cloud-upload"
//   >
//     <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
//     <path d="M12 12v9" />
//     <path d="m16 16-4-4-4 4" />
//   </svg>
// );

// const ProductAdd = () => {
//   const [productName, setProductName] = useState("");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");
//   const [productDate, setProductDate] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased flex justify-center items-start">
//       <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Column - Product Details */}
//         <div className="space-y-6">
//           {/* Product Name */}
//           <div>
//             <label
//               htmlFor="productName"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Product name <span className="text-red-500">*</span>
//             </label>
//             <Input
//               type="text"
//               id="productName"
//               placeholder="Enter product name"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               maxLength={20}
//             />
//             <p className="mt-1 text-xs text-gray-500">
//               Do not exceed 20 characters when entering the product name.
//             </p>
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Category <span className="text-red-500">*</span>
//             </label>
//             <Select value={category} onValueChange={setCategory}>
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Choose category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="electronics">Electronics</SelectItem>
//                 <SelectItem value="clothing">Clothing</SelectItem>
//                 <SelectItem value="books">Books</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/*Regular Price*/}
//           <div>
//             <label
//               htmlFor="Regular Price"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Regular Price <span className="text-red-500">*</span>
//             </label>
//             <Input
//               type="text"
//               id="regularPrice"
//               placeholder="$240"
//               //   value={regularPrice}
//               //   onChange={(e) => setRegularPrice(e.target.value)}
//             />
//           </div>

//           {/*Sale Price*/}
//           <div>
//             <label
//               htmlFor="Sale Price"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Sale Price <span className="text-red-500">*</span>
//             </label>
//             <Input
//               type="text"
//               id="salePrice"
//               placeholder="$250"
//               //   value={salePrice}
//               //   onChange={(e) => setSalePrice(e.target.value)}
//             />
//           </div>

//           {/*Sale Price*/}
//           <div>
//             <label
//               htmlFor="stock"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Stock <span className="text-red-500">*</span>
//             </label>
//             <Input
//               type="text"
//               id="stock"
//               placeholder="530"
//               //   value={stock}
//               //   onChange={(e) => setStock(e.target.value)}
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Description <span className="text-red-500">*</span>
//             </label>
//             <Textarea
//               id="description"
//               rows="4"
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               maxLength={100}
//             />
//             <p className="mt-1 text-xs text-gray-500">
//               Do not exceed 100 characters when entering the product name.
//             </p>
//           </div>
//         </div>

//         {/* Right Column - Images, Size, Date, Actions */}
//         <div className="space-y-6">
//           {/* Upload Images */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Upload images
//             </label>
//             <div className="grid grid-cols-3 gap-4">
//               <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500">
//                 <CloudUpload className="w-8 h-8 mb-1" />
//                 <span className="text-xs">Drop product Hero image here or</span>
//                 <span className="text-xs text-blue-600">click to browse</span>
//               </div>
//               <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500">
//                 <CloudUpload className="w-8 h-8 mb-1" />
//                 <span className="text-xs">
//                   Drop product second image here or
//                 </span>
//                 <span className="text-xs text-blue-600">click to browse</span>
//               </div>
//               <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500">
//                 <CloudUpload className="w-8 h-8 mb-1" />
//                 <span className="text-xs">
//                   Drop product third image here or
//                 </span>
//                 <span className="text-xs text-blue-600">click to browse</span>
//               </div>
//               <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500">
//                 <CloudUpload className="w-8 h-8 mb-1" />
//                 <span className="text-xs">
//                   Drop product fourth image here or
//                 </span>
//                 <span className="text-xs text-blue-600">click to browse</span>
//               </div>
//             </div>
//             <p className="mt-2 text-xs text-gray-500">
//               You need to add at least 4 images. Pay attention to the quality of
//               the pictures you add, comply with the background color standards.
//               Pictures must be in certain dimensions. Notice that the product
//               shows all the details
//             </p>
//           </div>

//           {/* Product Date */}
//           <div>
//             <label
//               htmlFor="productDate"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Product date
//             </label>
//             <Input
//               type="date"
//               id="productDate"
//               value={productDate}
//               onChange={(e) => setProductDate(e.target.value)}
//             />
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <Button variant="default" className="flex-1">
//               Add product
//             </Button>
//             <Button variant="secondary" className="flex-1">
//               Save product
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductAdd;

//////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
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
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";

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
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [productDate, setProductDate] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]);

  // Load products from localStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Image upload + Base64 conversion
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (images.length + files.length > 4) {
      toast.error("You can upload maximum 4 images!");
      return;
    }

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Add product
  const handleAddProduct = () => {
    if (
      !productName ||
      !category ||
      !regularPrice ||
      !salePrice ||
      !stock ||
      images.length < 1
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      title: productName,
      categorys: [category],
      description,
      productDate,
      regularPrice: Number(regularPrice),
      price: Number(salePrice),
      stock: Number(stock),
      images: images, // save base64 images
      reviews: [],
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    toast.success("Product added successfully!");

    // reset form
    setProductName("");
    setCategory("");
    setDescription("");
    setProductDate("");
    setRegularPrice("");
    setSalePrice("");
    setStock("");
    setImages([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased flex justify-center items-start">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Product name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              maxLength={30}
            />
          </div>

          {/* Category */}
          {/* <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
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
          </div> */}

          <div>
            <label className="block font-medium mb-1">Category</label>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
            />
          </div>

          {/* Regular Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Regular Price <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              placeholder="240"
              value={regularPrice}
              onChange={(e) => setRegularPrice(e.target.value)}
            />
          </div>

          {/* Sale Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Sale Price <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              placeholder="200"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Stock <span className="text-red-500">*</span>
            </label>
            <Input
              type="number"
              placeholder="530"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <Textarea
              rows="4"
              placeholder="Product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={150}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Images (Max 4) <span className="text-red-500">*</span>
            </label>
            <Label className="w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500">
              <CloudUpload className="w-10 h-10 mb-1" />
              <span className="text-sm">
                Click to browse or drop up to 4 images
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />
              <p className="mt-2 text-xs text-gray-500">
                You need to add at least 4 images. Pay attention to the quality
                of the pictures you add, comply with the background color
                standards. Pictures must be in certain dimensions. Notice that
                the product shows all the details
              </p>
            </Label>

            {/* Preview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-28 rounded-lg overflow-hidden border"
                >
                  <img
                    src={img}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Product date
            </label>
            <Input
              type="date"
              value={productDate}
              onChange={(e) => setProductDate(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="default"
              className="flex-1 cursor-pointer"
              onClick={handleAddProduct}
            >
              Add product
            </Button>
            <Button
              variant="secondary"
              className="flex-1 cursor-pointer"
              // onClick={() => toast.info("Saved draft (not implemented)")}
            >
              Save draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
