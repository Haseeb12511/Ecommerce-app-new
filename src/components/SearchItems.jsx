import React, { useState, useEffect } from "react";

// Star component for the rating filter
const Star = ({ filled, onClick }) => (
  <svg
    className={`h-6 w-6 cursor-pointer ${
      filled ? "text-yellow-400" : "text-gray-300"
    }`}
    fill="currentColor"
    viewBox="0 0 20 20"
    onClick={onClick}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
  </svg>
);

const SearchItems = ({ products, onFilter }) => {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [minStarRating, setMinStarRating] = useState(5);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!products) return;

    const allCategories = new Set();
    products.forEach((p) => {
      if (p.categories && Array.isArray(p.categories)) {
        p.categories.forEach((cat) => allCategories.add(cat));
      }
    });
    setCategories(["All", ...Array.from(allCategories)]);
  }, [products]);

  useEffect(() => {
    handleFilterProducts();
  }, [category, searchQuery, minStarRating, minPrice, maxPrice]);

  const handleFilterProducts = () => {
    let filtered = products
      .map((product) => {
        const avgRating =
          product.reviews?.reduce((sum, r) => sum + r.rating, 0) /
          (product.reviews?.length || 1);
        const roundedRating = Math.round(avgRating);

        return {
          ...product,
          roundedRating,
        };
      })
      .filter((product) => {
        const matchesCategory =
          category === "All" || product.categories?.includes(category);
        const matchesQuery =
          searchQuery.trim() === "" ||
          product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice =
          (!minPrice || product.price >= parseFloat(minPrice)) &&
          (!maxPrice || product.price <= parseFloat(maxPrice));

        // Yahan sirf max rating ko allow karo (minStarRating se upar wale skip)
        return (
          matchesCategory &&
          matchesQuery &&
          matchesPrice &&
          product.roundedRating <= minStarRating && // upar wale skip
          product.roundedRating >= 1 // 1 tak le aao
        );
      });

    // Sorting — sabse pehle selected star, phir neeche wale
    filtered.sort((a, b) => b.roundedRating - a.roundedRating);

    onFilter(filtered);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-0 font-sans">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl space-y-6">
        {/* Category Filter */}
        <div>
          <label
            htmlFor="category"
            className="block text-gray-600 text-sm mb-2"
          >
            Category:
          </label>
          <div className="relative">
            <select
              id="category"
              className="block w-full px-4 py-2 pr-8 rounded-xl bg-gray-50 border border-gray-200 focus:ring-red-500 focus:border-red-500 appearance-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Search Filter */}
        <div>
          <label htmlFor="search" className="block text-gray-600 text-sm mb-2">
            Search
          </label>
          <input
            type="text"
            id="search"
            className="block w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:ring-red-500 focus:border-red-500"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Min/Max Price */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="minPrice"
              className="block text-gray-600 text-sm mb-2"
            >
              Min Price
            </label>
            <input
              type="number"
              id="minPrice"
              className="block w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:ring-red-500 focus:border-red-500"
              placeholder="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="maxPrice"
              className="block text-gray-600 text-sm mb-2"
            >
              Max Price
            </label>
            <input
              type="number"
              id="maxPrice"
              className="block w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 focus:ring-red-500 focus:border-red-500"
              placeholder="999+"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Min Star Rating */}
        <div>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                filled={star <= minStarRating}
                onClick={() => setMinStarRating(star)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
