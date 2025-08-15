import ProductList from "@/components/ProductList";
import SearchItems from "@/components/SearchItems";
import React, { useEffect, useState } from "react";

const Products = () => {
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
    <div className="w-full flex flex-row px-3 relative mt-8">
      {/* Sidebar */}

      <div className="w-1/4 bg-white p-3 mt-4 mr-6 rounded-2xl sticky top-20 h-fit overflow-y-auto">
        <SearchItems products={filtered} onFilter={handleFilterProducts} />
      </div>

      {/* Product Grid */}
      <ProductList products={[...products, ...products]} />
    </div>
  );
};

export default Products;
