import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  images,
  title,
  price,
  rating,
  id,
  description,
  products,
}) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-orange-400" : "text-gray-400"}
      >
        ★
      </span>
    ));

  // const handleAddToCart = () => {
  //   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   const products = JSON.parse(localStorage.getItem("products")) || [];
  //   const productExists = cartItems.find((item) => item.id === id);

  //   if (productExists) {
  //     productExists.quantity += 1;
  //   } else {
  //     const product = products.find((product) => product.id === id);
  //     const productData = {
  //       id: product.id,
  //       title: product.title,
  //       price: product.price,
  //       images: product.images,
  //       quantity: 1,
  //     };
  //     cartItems.push(productData);
  //   }

  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));

  //   const event = new Event("cartUpdated");
  //   window.dispatchEvent(event);
  // };


const handleAddToCart = (e) => {
  e.stopPropagation(); // prevent card click
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
  if (!loggedInUser) {
    window.location.href = "/login"; // Redirect to login if not logged in
    return;
  }

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productExists = cartItems.find((item) => item.id === id);

  if (productExists) {
    productExists.quantity += 1;
  } else {
    const product = products.find((product) => product.id === id);
    const productData = {
      id: product.id,
      title: product.title,
      price: product.price,
      images: product.images,
      quantity: 1,
    };
    cartItems.push(productData);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  const event = new Event("cartUpdated");
  window.dispatchEvent(event);
};


  const handleClick = () => {
    window.location.href = `/product/${id}`;
  };

  return (
    <div
      className="bg-white w-56 p-5 rounded-2xl shadow-md text-center m-3"
      onClick={handleClick}
    >
      <img
        src={images[0]}
        alt={title}
        className="w-24 h-24 mx-auto object-contain mb-3"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <h3 className="text-lg font-bold text-gray-700 mt-2">${price}</h3>
      <div className="my-2">{stars}</div>
    <button
  className="text-white px-4 py-2 rounded-lg w-full bg-[#0ea5e9] hover:bg-[#2e77ff]"
  onClick={(e) => handleAddToCart(e)}
>
  Add to Cart
</button>
    </div>
  );
};

export default ProductCard;
