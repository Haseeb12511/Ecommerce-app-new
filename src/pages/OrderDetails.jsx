import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

export default function OrderDetails() {
  const orderItems = [
    {
      id: 1,
      image: "https://placehold.co/50x50/ADD8E6/000?text=KW",
      productName: "Kristin Watson",
      quantity: 1,
      price: "$50.47",
    },
    {
      id: 2,
      image: "https://placehold.co/50x50/FFB6C1/000?text=KW",
      productName: "Kristin Watson",
      quantity: 1,
      price: "$50.47",
    },
    {
      id: 3,
      image: "https://placehold.co/50x50/90EE90/000?text=KW",
      productName: "Kristin Watson",
      quantity: 1,
      price: "$50.47",
    },
  ];

  const cartTotals = {
    subtotal: "$70.13",
    shipping: "$10.00",
    tax: "$5.00",
    totalPrice: "$90.58",
  };

  const summary = {
    orderId: "#192847",
    date: "20 Nov 2023",
    total: "$948.5",
  };

  const shippingAddress = "3517 W. Gray St. Utica, Pennsylvania 57867";
  const expectedDeliveryDate = "20 Nov 2023";

  return (
    <div className="min-h-screen bg-muted p-6 font-inter antialiased flex flex-col lg:flex-row gap-6">
      {/* Left Column */}
      <div className="flex-1 space-y-6">
        {/* All Items */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>All Items</CardTitle>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low-high">Price: Low to High</SelectItem>
                <SelectItem value="high-low">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
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
                {orderItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      {item.productName}
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell className="text-right">{item.price}</TableCell>
                  </TableRow>
                ))}
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
                <span>{cartTotals.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Shipping:</span>
                <span>{cartTotals.shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tax (GST):</span>
                <span>{cartTotals.tax}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold text-orange-500">
                <span>Total price:</span>
                <span>{cartTotals.totalPrice}</span>
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
            <span className="text-right">{summary.orderId}</span>
            <span className="font-medium text-foreground">Date</span>
            <span className="text-right">{summary.date}</span>
            <span className="font-medium text-foreground">Total</span>
            <span className="text-right font-semibold text-orange-500">
              {summary.total}
            </span>
          </CardContent>
        </Card>

        {/* Shipping */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{shippingAddress}</p>
          </CardContent>
        </Card>

        {/* Payment */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Pay on Delivery (Cash/Card). Cash on delivery (COD) available.
              Card/Net banking acceptance subject to device availability.
            </p>
          </CardContent>
        </Card>

        {/* Delivery */}
        <Card>
          <CardHeader>
            <CardTitle>Expected Date Of Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-bold mb-4">{expectedDeliveryDate}</p>
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
