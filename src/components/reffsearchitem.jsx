import React, { useState } from "react";

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

const SearchItems = () => {
  const [category, setCategory] = useState("Everything");
  const [searchQuery, setSearchQuery] = useState("");
  const [minStarRating, setMinStarRating] = useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilterProducts = () => {
    // Here you would typically apply the filters to your product data
    console.log({
      category,
      searchQuery,
      minStarRating,
      minPrice,
      maxPrice,
    });
    alert(
      "Filtering products with current selections! Check console for details."
    );
  };

  return (
    <div className="flex justify-center items-center min-h-[0vh] bg-gray-100 p-0 font-sans">
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
              <option>Everything</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
              <option>Home Goods</option>
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

        {/* Min Star Rating */}
        <div>
          <label className="block text-gray-600 text-sm mb-2">
            Min Star Rating
          </label>
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

        {/* Filter Products Button */}
        <button
          onClick={handleFilterProducts}
          className="w-full py-3 px-4 bg-gray-800 text-white font-semibold rounded-xl shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition-colors"
        >
          Filter Products
        </button>
      </div>
    </div>
  );
};

export default SearchItems;
