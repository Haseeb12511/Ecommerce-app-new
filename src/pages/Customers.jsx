// src/pages/Customers.jsx
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Mock Data
const customersData = [
  {
    id: 1,
    name: "Haseeb Hussain",
    email: "haseeb@example.com",
    registered: "2024-05-10",
    orders: 5,
    address: "Lahore, Pakistan",
    phone: "+92 300 1234567",
  },
  {
    id: 2,
    name: "Ali Khan",
    email: "ali@example.com",
    registered: "2024-07-21",
    orders: 2,
    address: "Karachi, Pakistan",
    phone: "+92 322 9876543",
  },
  {
    id: 3,
    name: "Ayesha Ahmed",
    email: "ayesha@example.com",
    registered: "2024-08-01",
    orders: 8,
    address: "Islamabad, Pakistan",
    phone: "+92 301 2468101",
  },
];

export default function Customers() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customersData.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <Input
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline">+ Add Customer</Button>
      </div>

      {/* Customer Table */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="flex items-center gap-2">
                      <Avatar>
                        <AvatarFallback>
                          {customer.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {customer.name}
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.registered}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell>
                      {/* Profile Modal */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                          <DialogHeader>
                            <DialogTitle>Customer Profile</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p>
                              <strong>Name:</strong> {customer.name}
                            </p>
                            <p>
                              <strong>Email:</strong> {customer.email}
                            </p>
                            <p>
                              <strong>Phone:</strong> {customer.phone}
                            </p>
                            <p>
                              <strong>Address:</strong> {customer.address}
                            </p>
                            <p>
                              <strong>Registered:</strong> {customer.registered}
                            </p>
                            <p>
                              <strong>Total Orders:</strong> {customer.orders}
                            </p>
                            <Button className="w-full">Edit Customer</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
