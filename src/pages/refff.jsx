// src/pages/ProductList.jsx
import React, { useState } from "react";
import { Products } from "../data/Products"; // your product data
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ShoppingCart } from "lucide-react";
import { keyframes } from "framer-motion";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState([0, 2000]); // min and max price

  // Extract unique categories
  const categories = ["all", ...new Set(Products.map((p) => p.category))];

  // Filtering logic
  const filteredProducts = Products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ? true : product.category === category;

    const matchesPrice = product.price >= price[0] && product.price <= price[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />

        {/* Category */}
        <Select onValueChange={setCategory} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Price Range */}
        <div className="flex flex-col gap-2 w-full max-w-sm">
          <span className="text-sm text-muted-foreground">
            Price: ${price[0]} - ${price[1]}
          </span>
          <Slider
            defaultValue={[0, 2000]}
            max={2000}
            step={50}
            value={price}
            onValueChange={setPrice}
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition">
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <CardTitle className="mt-2 text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
..................




//////////////////////////////////////////////



 {/* Best Sellers */}
      <section className="container mx-auto px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-8">Best Sellers</h2>

        {isLoading ? (
          <p>Loading...</p>
        ) : products && products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 pt-0 cursor-pointer h-[450px] min-w-0 rounded-3xl"
              >
                {/* Product Image */}
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />

                <CardHeader className="text-center">
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {product.title}
                  </CardTitle>
                  <CardDescription
                    className="text-gray-500 text-sm"
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
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  {/* Rating Stars */}
                  <div className="text-orange-400 text-sm mb-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < product.rating
                              ? "text-orange-400"
                              : "text-gray-400"
                          }
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    ${product.price}
                  </h3>
                </CardContent>

                <Button
                  variant="default"
                  className="w-full cursor-pointer rounded-lg"
                  onClick={() => {
                    const loggedInUser = JSON.parse(
                      localStorage.getItem("loggedInUser")
                    );
                    if (!loggedInUser) {
                      window.location.href = "/login";
                      return;
                    }

                    const cartItems =
                      JSON.parse(localStorage.getItem("cartItems")) || [];
                    const productExists = cartItems.find(
                      (item) => item.id === product.id
                    );

                    if (productExists) {
                      productExists.quantity += 1;
                    } else {
                      cartItems.push({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        images: product.images,
                        quantity: 1,
                      });
                    }

                    localStorage.setItem(
                      "cartItems",
                      JSON.stringify(cartItems)
                    );
                    window.dispatchEvent(new Event("cartUpdated"));
                  }}
                >
                  Add to Cart
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No products available.</p>
        )}
      </section>



///////////////////////////////////////////////////
// old code cart keyframesa

{/* Best Sellers */}
<section className="container mx-auto px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-8">Best Sellers</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="rounded-3xl pt-0">
              <img
                src={`https://picsum.photos/400/300?random=${i}`}
                alt={`Product ${i}`}
                className="h-40 w-full object-cover rounded-t-3xl"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold">Product {i}</h3>
                <p className="text-sm text-muted-foreground">
                  High-quality product description.
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold">$49.99</span>
                  <Button size="sm" className="rounded-lg">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>