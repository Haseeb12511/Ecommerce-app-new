// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { LogIn, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ navItems }) {
  const [cartCount, setCartCount] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {}, []);

  const updateUser = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  };

  useEffect(() => {
    const updateCartCount = () => {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(items.length);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);

    updateCartCount();
    updateUser();

    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("userUpdated", updateUser);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("userUpdated", updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    window.dispatchEvent(new Event("userUpdated"));
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm h-16 px-6 flex space-x-7 items-center fixed top-0 w-full z-10">
      <div className="flex items-center gap-4 justify-between w-full">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 hover:text-sky-600"
        >
          My Shop
        </Link>

        <div className="flex space-x-5 mx-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-600 hover:text-sky-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/cart" className="relative">
          <ShoppingBag
            className="text-gray-600 hover:text-gray-700 transition-colors"
            size={20}
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {!loggedInUser ? (
          <Link to="/login">
            <LogIn
              className="text-gray-600 hover:text-gray-700 transition-colors"
              size={20}
            />
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <FaUserCircle className="text-2xl text-gray-700" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
