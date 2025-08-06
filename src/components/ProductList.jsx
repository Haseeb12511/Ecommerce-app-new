// import { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";
// import SearchItems from "./SearchItems";

// const ProductList = () => {
//   // const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   if (!products.length) {
//   //     setProducts(JSON.parse(localStorage.getItem("products")) || []);
//   //   }
//   // }, [products]);

//   // const handleFilteredProducts = (filteredProducts) => {
//   //   setProducts(filteredProducts);
//   // };

//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState("Everything");
//   // ... rest of your states

//   useEffect(() => {
//     if (!products) return;
//     setProducts(JSON.parse(localStorage.getItem("products")) || []);

//     const allCategories = new Set();
//     products.forEach((p) => {
//       if (p.categories && Array.isArray(p.categories)) {
//         p.categories.forEach((cat) => allCategories.add(cat));
//       }
//     });
//     setCategory(["Everything", ...Array.from(allCategories)]);
//   }, [products]);

//   const handleFilterProducts = () => {
//     const filtered = products.filter((product) => {
//       const avgRating =
//         product.reviews?.reduce((sum, r) => sum + r.rating, 0) /
//           product.reviews?.length || 0;

//       const matchesCategory =
//         category === "Everything" || product.categories?.includes(category);
//       const matchesQuery =
//         searchQuery.trim() === "" ||
//         product.title.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesRating = avgRating >= minStarRating;
//       const matchesPrice =
//         (!minPrice || product.price >= parseFloat(minPrice)) &&
//         (!maxPrice || product.price <= parseFloat(maxPrice));

//       return matchesCategory && matchesQuery && matchesRating && matchesPrice;
//     });

//     onFilter(filtered);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <div className="w-1/4 p-6 border-r border-gray-300">
//         <SearchItems products={products} onFilter={handleFilterProducts} />
//       </div>
//       {/* Product Grid */}
//       <div className="w-3/4 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} {...product} products={products} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

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
