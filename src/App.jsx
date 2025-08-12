import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products, Users } from "./data/data";
import { ToastContainer } from "react-toastify";

// Pages
import ProductList from "./components/ProductList";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

// Layout
import NavbarLayout from "./components/NavbarLayout";

import "react-pro-sidebar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import SidebarLayout from "./components/SidebarLayout";
import Settings from "./pages/Settings";

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
    localStorage.setItem("users", JSON.stringify(Users));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public routes without Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Routes with Navbar + Sidebar */}
        <Route
          path="/"
          element={
            <NavbarLayout>
              <ProductList />
            </NavbarLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <NavbarLayout>
              <ShoppingCart />
            </NavbarLayout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <NavbarLayout>
              <ProductDetails />
            </NavbarLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SidebarLayout>
                <Dashboard />
              </SidebarLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SidebarLayout>
                <Settings />
              </SidebarLayout>
            </ProtectedRoute>
          }
        />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
