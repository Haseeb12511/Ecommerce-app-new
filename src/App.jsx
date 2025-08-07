import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ShoppingCart from "./pages/ShoppingCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Orders, Products, Users } from "./data/data";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    const productsWithRatings = Products.map((product) => {
      const reviews = product.reviews || [];
      const totalRating = reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      const averageRating = reviews.length ? totalRating / reviews.length : 0;
      return { ...product, rating: Math.round(averageRating) };
    });

    localStorage.setItem("products", JSON.stringify(productsWithRatings));

    // ✅ Store full users including passwords
    localStorage.setItem("users", JSON.stringify(Users));

    localStorage.setItem("orders", JSON.stringify(Orders));
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
export default App;
