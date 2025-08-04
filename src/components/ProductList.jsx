import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!products.length) {
      setProducts(JSON.parse(localStorage.getItem("products")) || []);
    }
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center p-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} products={products} />
      ))}
    </div>
  );
};

export default ProductList;
