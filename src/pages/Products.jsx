// import ProductList from "@/components/ProductList";
// import SearchItems from "@/components/SearchItems";
// import React, { useEffect, useState } from "react";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filtered, setFiltered] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("products")) || [];
//     setProducts(saved);
//     setFiltered(saved);
//   }, []);

//   const handleFilterProducts = (filteredList) => {
//     setProducts(filteredList);
//   };

//   return (
//     <div className="w-full flex flex-row px-3 relative mt-8">
//       {/* Sidebar */}

//       <div className="w-1/4 bg-white p-3 mt-4 mr-6 rounded-2xl sticky top-20 h-fit overflow-y-auto">
//         <SearchItems products={filtered} onFilter={handleFilterProducts} />
//       </div>

//       {/* Product Grid */}
//       <ProductList products={[...products, ...products]} />
//     </div>
//   );
// };

// export default Products;
////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState([0, 2000]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ? true : product.category === category;

    const matchesPrice = product.price >= price[0] && product.price <= price[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleAddToCart = (e, id) => {
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

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />

        <Select onValueChange={setCategory} defaultValue="all">
          <SelectTrigger className="w-[180px] cursor-pointer">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat, i) => (
              <SelectItem key={i} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex flex-col gap-2 w-full max-w-sm">
          <span className="text-sm text-muted-foreground">
            Price: ${price[0]} - ${price[1]}
          </span>
          <Slider
            defaultValue={[0, 2000]}
            max={2000}
            step={20}
            value={price}
            onValueChange={setPrice}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition gap-4 cursor-pointer"
              onClick={() => handleClick(product.id)}
            >
              <CardHeader>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <CardTitle className="mt-2 text-lg">{product.title}</CardTitle>
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
                  {product.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center">
                  <p className=" font-bold">${product.price.toFixed(2)}</p>
                  <div className="text-orange-400 text-sm">
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
                </div>
              </CardContent>

              <CardContent>
                <Button
                  className="w-full cursor-pointer"
                  onClick={(e) => handleAddToCart(e, product.id)}
                >
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
