// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { CheckCircle } from "lucide-react";

// export default function OrderDetails() {
//   const orderItems = [
//     {
//       id: 1,
//       image: "https://placehold.co/50x50/ADD8E6/000?text=KW",
//       productName: "Kristin Watson",
//       quantity: 1,
//       price: "$50.47",
//     },
//     {
//       id: 2,
//       image: "https://placehold.co/50x50/FFB6C1/000?text=KW",
//       productName: "Kristin Watson",
//       quantity: 1,
//       price: "$50.47",
//     },
//     {
//       id: 3,
//       image: "https://placehold.co/50x50/90EE90/000?text=KW",
//       productName: "Kristin Watson",
//       quantity: 1,
//       price: "$50.47",
//     },
//   ];

//   const cartTotals = {
//     subtotal: "$70.13",
//     shipping: "$10.00",
//     tax: "$5.00",
//     totalPrice: "$90.58",
//   };

//   const summary = {
//     orderId: "#192847",
//     date: "20 Nov 2023",
//     total: "$948.5",
//   };

//   const shippingAddress = "3517 W. Gray St. Utica, Pennsylvania 57867";
//   const expectedDeliveryDate = "20 Nov 2023";

//   return (
//     <div className="min-h-screen bg-muted p-6 font-inter antialiased flex flex-col lg:flex-row gap-6">
//       {/* Left Column */}
//       <div className="flex-1 space-y-6">
//         {/* All Items */}
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between">
//             <CardTitle>All Items</CardTitle>
//             <Select>
//               <SelectTrigger className="w-48">
//                 <SelectValue placeholder="Sort" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="low-high">Price: Low to High</SelectItem>
//                 <SelectItem value="high-low">Price: High to Low</SelectItem>
//               </SelectContent>
//             </Select>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Product Name</TableHead>
//                   <TableHead>Quantity</TableHead>
//                   <TableHead className="text-right">Price</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {orderItems.map((item) => (
//                   <TableRow key={item.id}>
//                     <TableCell className="flex items-center gap-3">
//                       <img
//                         src={item.image}
//                         alt={item.productName}
//                         className="w-12 h-12 rounded-lg object-cover"
//                       />
//                       {item.productName}
//                     </TableCell>
//                     <TableCell>{item.quantity}</TableCell>
//                     <TableCell className="text-right">{item.price}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>

//         {/* Cart Totals */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Cart Totals</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               <div className="flex justify-between">
//                 <span className="font-medium">Subtotal:</span>
//                 <span>{cartTotals.subtotal}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-medium">Shipping:</span>
//                 <span>{cartTotals.shipping}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-medium">Tax (GST):</span>
//                 <span>{cartTotals.tax}</span>
//               </div>
//               <Separator />
//               <div className="flex justify-between text-lg font-bold text-orange-500">
//                 <span>Total price:</span>
//                 <span>{cartTotals.totalPrice}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Right Column */}
//       <div className="w-full lg:w-96 space-y-6">
//         {/* Summary */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Summary</CardTitle>
//           </CardHeader>
//           <CardContent className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
//             <span className="font-medium text-foreground">Order ID</span>
//             <span className="text-right">{summary.orderId}</span>
//             <span className="font-medium text-foreground">Date</span>
//             <span className="text-right">{summary.date}</span>
//             <span className="font-medium text-foreground">Total</span>
//             <span className="text-right font-semibold text-orange-500">
//               {summary.total}
//             </span>
//           </CardContent>
//         </Card>

//         {/* Shipping */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Shipping Address</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm text-muted-foreground">{shippingAddress}</p>
//           </CardContent>
//         </Card>

//         {/* Payment */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Payment Method</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm text-muted-foreground">
//               Pay on Delivery (Cash/Card). Cash on delivery (COD) available.
//               Card/Net banking acceptance subject to device availability.
//             </p>
//           </CardContent>
//         </Card>

//         {/* Delivery */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Expected Date Of Delivery</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-lg font-bold mb-4">{expectedDeliveryDate}</p>
//             <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
//               <CheckCircle className="mr-2 h-4 w-4" />
//               Track order
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

/////////////////////////////////////////////up vala code localstroge ka bagar ha

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { CheckCircle } from "lucide-react";

// export default function OrderDetails() {
//   const { id } = useParams(); // URL se order id
//   const [order, setOrder] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // LocalStorage se orders lao
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     const foundOrder = storedOrders.find((o) => o.id === parseInt(id));
//     setOrder(foundOrder);

//     // user bhi localStorage se lao
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//     const foundUser = storedUsers.find((u) => u.id === foundOrder?.userId);
//     setUser(foundUser);
//   }, [id]);

//   if (!order) {
//     return <p className="p-6">Order not found.</p>;
//   }

//   return (
//     <div className="min-h-screen bg-muted p-6 font-inter antialiased flex flex-col lg:flex-row gap-6">
//       {/* Left Column */}
//       <div className="flex-1 space-y-6">
//         {/* All Items */}
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between">
//             <CardTitle>All Items</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Product Name</TableHead>
//                   <TableHead>Quantity</TableHead>
//                   <TableHead className="text-right">Price</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {order.items.map((item, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{item.title}</TableCell>
//                     <TableCell>{item.quantity}</TableCell>
//                     <TableCell className="text-right">${item.price}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>

//         {/* Cart Totals */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Cart Totals</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               <div className="flex justify-between">
//                 <span className="font-medium">Subtotal:</span>
//                 <span>${order.subtotal}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-medium">Shipping:</span>
//                 <span>${order.shipping}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-medium">Tax (GST):</span>
//                 <span>${order.tax}</span>
//               </div>
//               <Separator />
//               <div className="flex justify-between text-lg font-bold text-orange-500">
//                 <span>Total price:</span>
//                 <span>${order.totalPrice}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Right Column */}
//       <div className="w-full lg:w-96 space-y-6">
//         {/* Summary */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Summary</CardTitle>
//           </CardHeader>
//           <CardContent className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
//             <span className="font-medium text-foreground">Order ID</span>
//             <span className="text-right">#{order.id}</span>
//             <span className="font-medium text-foreground">Date</span>
//             <span className="text-right">
//               {new Date(order.date).toLocaleDateString()}
//             </span>
//             <span className="font-medium text-foreground">Total</span>
//             <span className="text-right font-semibold text-orange-500">
//               ${order.totalPrice}
//             </span>
//             <span className="font-medium text-foreground">Customer</span>
//             <span className="text-right">{user?.name || "Unknown"}</span>
//           </CardContent>
//         </Card>

//         {/* Shipping */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Shipping Address</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm text-muted-foreground">
//               {order.shippingAddress}
//             </p>
//           </CardContent>
//         </Card>

//         {/* Payment */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Payment Method</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm text-muted-foreground">
//               {order.paymentMethod}
//             </p>
//           </CardContent>
//         </Card>

//         {/* Delivery */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Expected Date Of Delivery</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-lg font-bold mb-4">{order.deliveryDate}</p>
//             <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
//               <CheckCircle className="mr-2 h-4 w-4" />
//               Track order
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////

import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function OrderDetails() {
  const { id } = useParams(); // URL se orderId lo
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const productsData = JSON.parse(localStorage.getItem("products")) || [];

    const foundOrder = orders.find((o) => o.id === Number(id));
    if (foundOrder) {
      setOrder(foundOrder);
      setUser(users.find((u) => u.id === foundOrder.userId));
    }
    setProducts(productsData);
  }, [id]);

  if (!order) {
    return <p className="p-6">Order not found.</p>;
  }

  // Total price calculate karo
  const subtotal = order.items.reduce((sum, i) => {
    const product = products.find((p) => p.id === i.productId);
    return sum + (product?.price || 0) * i.quantity;
  }, 0);

  const shipping = 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-muted p-6 font-inter antialiased flex flex-col lg:flex-row gap-6">
      {/* Left Column */}
      <div className="flex-1 space-y-6">
        {/* All Items */}
        <Card>
          <CardHeader>
            <CardTitle>All Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.items.map((item) => {
                  const product = products.find((p) => p.id === item.productId);
                  return (
                    <TableRow key={item.productId}>
                      <TableCell className="flex items-center gap-3">
                        <img
                          src={product?.images[0]}
                          alt={product?.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        {product?.title}
                      </TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell className="text-right">
                        ${(product?.price || 0) * item.quantity}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Cart Totals */}
        <Card>
          <CardHeader>
            <CardTitle>Cart Totals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tax (5%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold text-orange-500">
                <span>Total price:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-96 space-y-6">
        {/* Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Order ID</span>
            <span className="text-right">#{order.id}</span>
            <span className="font-medium text-foreground">Date</span>
            <span className="text-right">
              {new Date(order.date).toLocaleDateString()}
            </span>
            <span className="font-medium text-foreground">Total</span>
            <span className="text-right font-semibold text-orange-500">
              ${total.toFixed(2)}
            </span>
            <span className="font-medium text-foreground">Customer</span>
            <span className="text-right">{user?.name || "Unknown"}</span>
          </CardContent>
        </Card>

        {/* Shipping */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {user?.address || "No Address"}
            </p>
          </CardContent>
        </Card>

        {/* Delivery */}
        {/* <Card>
          <CardHeader>
            <CardTitle>Expected Date Of Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-bold mb-4">2-3 Days</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <CheckCircle className="mr-2 h-4 w-4" />
              Track order
            </Button>
          </CardContent>
        </Card> */}

        <Card>
          <CardHeader>
            <CardTitle>Expected Date Of Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-bold mb-4">{order.deliveryDate}</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <CheckCircle className="mr-2 h-4 w-4" />
              Track order
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
