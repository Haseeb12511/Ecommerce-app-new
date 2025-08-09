import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SearchItems from "./SearchItems";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
    setFiltered(saved);
  }, []);

  const handleFilterProducts = (filteredList) => {
    setProducts(filteredList);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-1/4 p-6 border-r border-gray-300">
        <SearchItems products={filtered} onFilter={handleFilterProducts} />
      </div>

      {/* Product Grid */}
      <div className="w-3/4 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
