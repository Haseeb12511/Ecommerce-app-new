import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

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

  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevent card click
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      navigate("/login");
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
    navigate(`/product/${id}`);
  };

  // Limit description to 2 lines with ellipsis

  return (
    <Card className="rounded-3xl">
      <img
        src={images[0]}
        alt={title}
        className="h-40 w-full object-cover rounded-t-3xl"
      />
      <CardContent className="p-4">
        <h3 className="font-semibold">Product {i}</h3>
        <p
          className="text-sm text-muted-foreground"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            minHeight: "2.5em",
          }}
        >
          {description}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold">$49.99</span>
          <Button size="sm" className="rounded-lg">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-all duration-300 pt-0 cursor-pointer h-[450px] min-w-0"
      onClick={handleClick}
    >
      {/* Product Image */}
      <img
        src={images[0]}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />

      <CardHeader className="text-center ">
        <CardTitle className="text-lg font-bold text-gray-800">
          {title}
        </CardTitle>
        <CardDescription
          className="text-gray-500 text-sm line-clamp-2"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            minHeight: "2.5em",
          }}
        >
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="text-center">
        <div className="text-orange-400 text-sm mb-1">{stars}</div>
        <h3 className="text-xl font-semibold text-gray-800">${price}</h3>
      </CardContent>

      <CardFooter>
        <Button
          variant="default"
          className="w-full cursor-pointer"
          onClick={(e) => handleAddToCart(e)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
