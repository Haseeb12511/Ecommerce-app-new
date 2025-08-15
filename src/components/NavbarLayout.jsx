// src/layouts/NavbarLayout.jsx
import Navbar from "../components/Navbar";

export default function NavbarLayout({ children }) {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="pt-16">
      <Navbar navItems={navItems} />
      <main className="">{children}</main>
    </div>
  );
}
