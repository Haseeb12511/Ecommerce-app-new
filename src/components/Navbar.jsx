import { Link, useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const updateUser = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  };

  useEffect(() => {
    const updateCartCount = () => {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(items.length);
    };

    updateCartCount();
    updateUser();

    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("userUpdated", updateUser);

    return () => {
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
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center mb-4">
      <h1 className="text-xl font-bold text-gray-700">My Shop</h1>
      <div className="space-x-6 flex items-center relative">
        <Link to="/" className="text-blue-600 hover:underline">
          Products
        </Link>

        <Link to="/cart" className="relative text-blue-600">
          <CartIcon />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {!loggedInUser ? (
          <div className="flex items-center space-x-3">
            <Link
              to="/signup"
              className="text-sm font-medium text-black hover:underline"
            >
              Sign up
            </Link>
            <button
              onClick={() => navigate("/login")}
              className="bg-[#0d0d25] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1a1a40]"
            >
              Log in
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaUserCircle className="text-2xl text-gray-700" />
              <span className="text-sm font-medium text-gray-700">
                {loggedInUser.name || "User"}
              </span>
            </div>

            <FiLogOut
              className="text-xl text-gray-700 cursor-pointer hover:text-red-500"
              onClick={handleLogout}
              title="Logout"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
