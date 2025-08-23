import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products, Users } from "./data/data";
import { ToastContainer } from "react-toastify";

// Pages
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
import ProductsList from "./pages/ProductsList";
import OrdersList from "./pages/OrdersList";
import OrdersDetails from "./pages/OrderDetails";
import ProductAdd from "./pages/ProductAdd";
import AllProductsList from "./pages/ProductsList";
import ProductList from "./components/ProductList";
import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import FAQ from "./pages/Faq";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/HomePage";
import UsersList from "./pages/UsersList";

function App() {
  // useEffect(() => {
  //   const productsWithRatings = Products.map((product) => {
  //     const reviews = product.reviews || [];
  //     const totalRating = reviews.reduce(
  //       (acc, review) => acc + review.rating,
  //       0
  //     );
  //     const averageRating = reviews.length ? totalRating / reviews.length : 0;
  //     return { ...product, rating: Math.round(averageRating) };
  //   });

  //   localStorage.setItem("products", JSON.stringify(productsWithRatings));
  //   localStorage.setItem("users", JSON.stringify(Users));
  // }, []);

  useEffect(() => {
    // Products set only if not already in localStorage
    if (!localStorage.getItem("products")) {
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
    }

    // Users set only if not already in localStorage
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(Users));
    }
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
              <HomePage />
            </NavbarLayout>
          }
        />
        <Route
          path="/products"
          element={
            <NavbarLayout>
              <ProductsPage />
            </NavbarLayout>
          }
        />
        <Route
          path="/about"
          element={
            <NavbarLayout>
              <AboutPage />
            </NavbarLayout>
          }
        />
        <Route
          path="/faqs"
          element={
            <NavbarLayout>
              <FAQ />
            </NavbarLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <NavbarLayout>
              <ContactPage />
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
          path="/productsList"
          element={
            <ProtectedRoute>
              <SidebarLayout>
                <AllProductsList />
              </SidebarLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/productAdd"
          element={
            <ProtectedRoute>
              <SidebarLayout>
                <ProductAdd />
              </SidebarLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/ordersList"
          element={
            <ProtectedRoute>
              <SidebarLayout>
                <OrdersList />
              </SidebarLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/ordersdetails/:id"
          element={
            <ProtectedRoute>
              <SidebarLayout>
                <OrdersDetails />
              </SidebarLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/usersList"
          element={
            <ProtectedRoute>
              <SidebarLayout>
                <UsersList />
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
