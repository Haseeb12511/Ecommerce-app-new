// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// const ProductDetails = () => {
//   const [quantity, setQuantity] = useState(1);
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const allProducts = JSON.parse(localStorage.getItem("products")) || [];

//   useEffect(() => {
//     if (!id) return;
//     setProduct(null);
//     const foundProduct = allProducts.find((p) => String(p.id) === String(id));
//     if (foundProduct) {
//       setProduct(foundProduct);
//     } else {
//       console.error("Product not found in localStorage");
//     }
//   }, [id]);

//   const handleIncrement = () => {
//     setQuantity((prev) => (prev < product.stock ? prev + 1 : prev));
//   };

//   const handleDecrement = () => {
//     setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
//   };

//   const handleOrder = () => {
//     if (!product) return;
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const existingItem = cartItems.find((item) => item.id === product.id);

//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       const product = allProducts.find((p) => String(p.id) === String(id));
//       const productData = {
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         images: product.images,
//         quantity: 1,
//       };
//       cartItems.push(productData);
//     }

//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     toast.success("Product added to cart successfully!");

//     const event = new Event("cartUpdated");
//     window.dispatchEvent(event);
//   };

//   if (!product)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-500">Loading product details...</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl flex flex-col md:flex-row">
//         {/* Left Side Image */}
//         <div className="w-full md:w-1/2">
//           <img
//             src={product.images[0]}
//             alt={product.title}
//             className="w-full h-auto object-contain"
//           />

//           <div className="flex gap-2 mt-4">
//             {product.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 className="w-12 h-12 object-cover rounded-md"
//                 alt="thumbnail"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right Side Details */}
//         <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
//           <h2 className="text-4xl font-bold">${product.price}</h2>
//           <h3 className="text-2xl font-semibold mt-2">{product.title}</h3>
//           <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-gray-100 border border-gray-300">
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>

//           <p className="text-gray-600 mt-4">{product.description}</p>

//           <div className="flex items-center gap-4 mt-6">
//             <div className="flex items-center border border-gray-300 rounded">
//               <button
//                 onClick={handleDecrement}
//                 className="px-3 py-1 text-lg font-bold"
//               >
//                 -
//               </button>
//               <span className="px-4 text-lg">{quantity}</span>
//               <button
//                 onClick={handleIncrement}
//                 className="px-3 py-1 text-lg font-bold"
//               >
//                 +
//               </button>
//             </div>

//             <button
//               className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
//               onClick={handleOrder}
//               disabled={product.stock < quantity}
//             >
//               Order Now →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;