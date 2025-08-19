import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import ProductList from "@/components/ProductList";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(allProducts);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="space-y-16">
      <HeroSection />
      <div className="flex flex-col justify-center items-center space-y-16">
        <div>
          <h1 className="text-3xl font-bold">Featured Products</h1>
          <span className="border-2 w-full block mt-2 border-black"></span>
        </div>
        <div className="px-6">
          <ProductList products={products && products.slice(0, 4)} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
