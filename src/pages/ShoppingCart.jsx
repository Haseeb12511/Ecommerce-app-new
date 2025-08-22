import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2 } from "lucide-react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [discount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(savedCart);
  }, []);

  const handleDelete = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const updateQuantity = (id, change) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        const newQty = (item.quantity || 1) + change;
        return { ...item, quantity: newQty < 1 ? 1 : newQty };
      }
      return item;
    });
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("You must be logged in to checkout!");
      return;
    }

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

    localStorage.setItem("products", JSON.stringify(updatedProducts)); // 💡 Build the new order object

    const orderItems = cart.map((item) => ({
      productId: item.id,
      quantity: item.quantity || 1,
    }));

    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: existingOrders.length + 1,
      userId: loggedInUser.id,
      userName: loggedInUser.name,
      items: orderItems,
      date: new Date().toLocaleDateString(),
      totalAmount: parseFloat(totalAmount.toFixed(2)),
    };

    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    localStorage.removeItem("cartItems");
    setCart([]);

    toast.success("Checkout successful! Thank you for your purchase.");

    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold tracking-tight">
            Your Shopping Cart
          </h2>
          <p className="text-muted-foreground">
            Review your items and proceed to checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <Card className="p-12 text-center shadow-lg">
            <p className="text-lg text-muted-foreground">
              Your cart is empty. Start adding items!
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <Card
                  key={item.id}
                  className="p-5 shadow-md hover:shadow-lg transition-all rounded-2xl"
                >
                  <CardContent className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    {/* Product Image */}
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-28 h-28 object-cover rounded-xl border"
                    />

                    {/* Details */}
                    <div className="flex-1 w-full space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        {/* Delete */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:bg-red-100 cursor-pointer"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full cursor-pointer"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Badge
                          variant="secondary"
                          className="px-4 py-1 rounded-full"
                        >
                          {item.quantity || 1}
                        </Badge>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full cursor-pointer"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Total */}
                      <div className="text-right font-semibold text-primary text-lg">
                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-6 h-fit">
              <Card className="shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span>-${discount}</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl border-t pt-4">
                    <span>Total</span>
                    <span>${(totalPrice - discount).toFixed(2)}</span>
                  </div>

                  {/* Promo */}
                  <div className="flex gap-3">
                    <Input placeholder="Promo code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" asChild className="flex-1">
                      <Link to="/products">Continue Shopping</Link>
                    </Button>
                    <Button
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-indigo-900 to-gray-500 hover:opacity-90 cursor-pointer"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
