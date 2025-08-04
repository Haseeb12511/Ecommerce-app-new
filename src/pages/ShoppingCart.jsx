import React, { useEffect, useState } from "react";
import DeleteIcon from "../components/DeleteIcon";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [discount] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(saved);
  }, []);

  const handleDelete = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  //   const updateQuantity = (id, change) => {
  //     const updated = cart.map((item) => {
  //       if (item.id === id) {
  //         const newQty = (item.quantity || 1) + change;
  //         return {
  //           ...item,
  //           quantity: newQty < 1 ? 1 : newQty,
  //         };
  //       }
  //       return item;
  //     });
  //     setCart(updated);
  //     localStorage.setItem("cartItems", JSON.stringify(updated));
  //   };

  const updateQuantity = (id, change) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        const currentQty = item.quantity || 1;
        const newQty = currentQty + change;

        // if (newQty > item.stock) return item;

        return {
          ...item,
          quantity: newQty < 1 ? 1 : newQty,
        };
      }
      return item;
    });

    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];

    const updatedProducts = products.map((product) => {
      const cartItem = cart.find((item) => item.id === product.id);
      if (cartItem) {
        return {
          ...product,
          stock: product.stock - (cartItem.quantity || 1),
        };
      }
      return product;
    });

    localStorage.setItem("products", JSON.stringify(updatedProducts));

    localStorage.removeItem("cartItems");
    setCart([]);

    toast.success("Checkout successful! Thank you for your purchase.");

    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

        <div className="grid grid-cols-12 gap-4 text-sm font-semibold py-2 border-b">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Qty</div>
          <div className="col-span-2 text-center">Total</div>
        </div>

        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 gap-4 py-4 border-b items-center"
          >
            <div className="col-span-6 flex items-center gap-4">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">In Stock: {item.stock}</p>
              </div>
            </div>
            <div className="col-span-2 text-center">${item.price}</div>
            <div className="col-span-2 text-center flex items-center justify-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-2 py-1 bg-gray-200 rounded "
              >
                −
              </button>
              <span>{item.quantity || 1}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <div className="col-span-2 text-center font-semibold">
              ${(item.price * (item.quantity || 1)).toFixed(2)}
              <button
                onClick={() => handleDelete(item.id)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}

        <div className="mt-6 flex justify-between">
          <div>
            <label className="block text-sm font-medium mb-1">Promocode</label>
            <input
              type="text"
              placeholder="ABC"
              className="border px-3 py-2 rounded w-40"
            />
          </div>
          <div className="text-right space-y-1">
            <p className="text-sm">Discount: ${discount}</p>
            <p className="text-xl font-bold">
              Total price: ${(totalPrice - discount).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link to="/" className="px-4 py-2 bg-gray-200 rounded">
            Back
          </Link>
          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
