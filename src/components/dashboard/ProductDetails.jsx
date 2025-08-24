import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const allProducts = JSON.parse(localStorage.getItem("products")) || [];

  useEffect(() => {
    if (!id) return;
    setProduct(null);
    const foundProduct = allProducts.find((p) => String(p.id) === String(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error("Product not found in localStorage");
    }
  }, [id]);

  const handleIncrement = () => {
    setQuantity((prev) => (prev < product.stock ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleOrder = (e) => {
    e.stopPropagation(); // prevent card click
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      window.location.href = "/login"; // Redirect to login if not logged in
      return;
    }

    if (!product) return;
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const product = allProducts.find((p) => String(p.id) === String(id));
      const productData = {
        id: product.id,
        title: product.title,
        price: product.price,
        images: product.images,
        quantity: quantity,
      };
      cartItems.push(productData);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    toast.success("Product added to cart successfully!");

    // Update stock in localStorage
    const updatedProducts = allProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, stock: p.stock - quantity };
      }
      return p;
    });
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProduct((prev) => ({ ...prev, stock: prev.stock - quantity }));

    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
  };

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading product details...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-auto object-contain"
          />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-12 h-12 object-cover rounded-md"
                alt="thumbnail"
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold">${product.price}</h2>
          <h3 className="text-2xl font-semibold mt-2">{product.title}</h3>
          <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-gray-100 border border-gray-300">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={handleDecrement}
                className="px-3 py-1 text-lg font-bold"
              >
                -
              </button>
              <span className="px-4 text-lg">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-3 py-1 text-lg font-bold"
              >
                +
              </button>
            </div>

            <button
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              onClick={(e) => handleOrder(e)}
              disabled={product.stock < quantity}
            >
              Order Now →
            </button>
          </div>
        </div>
      </div>

      {/* Product Reviews Section */}

      <div className="mt-12 w-full max-w-5xl bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold mb-4">Product Reviews</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Rating Breakdown */}
          <div>
            {/* Average Rating */}
            <div className="text-4xl font-bold text-orange-500">
              {(
                product.reviews.reduce((sum, r) => sum + r.rating, 0) /
                product.reviews.length
              ).toFixed(1)}
            </div>
            <p className="text-sm text-gray-500">
              from {product.reviews.length} reviews
            </p>

            {/* Star Bar Breakdown */}
            <div className="mt-4 space-y-1">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = product.reviews.filter(
                  (r) => r.rating === star
                ).length;
                const percentage = (count / product.reviews.length) * 100 || 0;

                return (
                  <div key={star} className="flex items-center gap-2">
                    <span>{star}.0 ★</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded">
                      <div
                        className="h-full bg-orange-400 rounded"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reviews List */}
          <div className="md:col-span-3">
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="border-t py-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <span key={i} className="text-gray-300">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review Comment */}
                  <p className="mt-2 font-medium">{review.comment}</p>

                  {/* Review User */}
                  <p className="text-sm text-gray-700 mt-1">{review.user}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No reviews yet for this product.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
