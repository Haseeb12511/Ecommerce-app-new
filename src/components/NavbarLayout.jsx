// src/layouts/NavbarLayout.jsx
import Navbar from "../components/Navbar";

export default function NavbarLayout({ children }) {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/cart" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar navItems={navItems} />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
