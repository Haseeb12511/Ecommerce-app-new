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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

export default function UsersList() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState("view"); // "view" | "edit"
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // localStorage se users load karo
  const customersRaw = JSON.parse(localStorage.getItem("users")) || [];
  const customers = customersRaw.map((customer) => ({
    ...customer,
    name: `${customer.first_name || ""} ${customer.last_name || ""}`.trim(),
  }));

  // search filter
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCustomers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const getUserOrdersCount = (user_id) => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const orders = allOrders.filter((order) => order.userId === user_id);
    return orders.length;
  };

  const getFormattedDate = (date) => {
    if (!date) return "Not Provided";

    const d = new Date(date);
    return d.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleEditCustomer = (updatedCustomer) => {
    // purane users lao
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = storedUsers.map((u) =>
      u.id === updatedCustomer.id ? updatedCustomer : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setDialogOpen(false);
  };

  const handleDeleteCustomer = () => {
    if (!customerToDelete) return;

    const updated = customers.filter((c) => c.id !== customerToDelete.id);
    localStorage.setItem("users", JSON.stringify(updated));

    setDeleteDialogOpen(false);
    setSelectedCustomer(updated);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col space-y-3">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Users List
        </h1>
        <div className="flex flex-row justify-between mb-5">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search name or email..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-8 pr-3 py-2 text-sm w-full"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentItems.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-6 text-gray-500"
                >
                  No customers found
                </TableCell>
              </TableRow>
            ) : (
              currentItems.map((customer, index) => (
                <TableRow key={customer.id || index}>
                  <TableCell className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback className="bg-white">
                        {customer.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {customer.name}
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{getFormattedDate(customer.created_at)}</TableCell>
                  <TableCell className="pl-6">
                    {getUserOrdersCount(customer.id)}
                  </TableCell>

                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => {
                            setSelectedCustomer(customer);
                            setDialogMode("view");
                            setDialogOpen(true);
                          }}
                        >
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => {
                            setSelectedCustomer(customer);
                            setDialogMode("edit");
                            setDialogOpen(true);
                          }}
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600 cursor-pointer"
                          onClick={() => {
                            setCustomerToDelete(customer);
                            setDeleteDialogOpen(true);
                          }}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* ✅ Dialog (shared for view + edit) */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {dialogMode === "view" ? "Customer Profile" : "Edit Profile"}
            </DialogTitle>
          </DialogHeader>

          {selectedCustomer && (
            <div className="space-y-4">
              {dialogMode === "view" ? (
                <>
                  <p>
                    <strong>Name:</strong> {selectedCustomer.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedCustomer.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedCustomer.phone || "—"}
                  </p>
                  <p>
                    <strong>Address:</strong> {selectedCustomer.address || "—"}
                  </p>
                  <p>
                    <strong>Created at:</strong>{" "}
                    {getFormattedDate(selectedCustomer.created_at)}
                  </p>

                  <p>
                    <strong>Total Orders:</strong>{" "}
                    {getUserOrdersCount(selectedCustomer.id)}
                  </p>
                </>
              ) : (
                // ✏️ Editable Form

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();

                    const formData = new FormData(e.target);
                    const updatedCustomer = {
                      ...selectedCustomer,
                      first_name: formData.get("first_name"),
                      last_name: formData.get("last_name"),
                      email: formData.get("email"),
                      phone: formData.get("phone"),
                      address: formData.get("address"),
                      updated_at: new Date().toISOString(),
                    };

                    handleEditCustomer(updatedCustomer);
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      name="first_name"
                      defaultValue={selectedCustomer.first_name}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      name="last_name"
                      defaultValue={selectedCustomer.last_name}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      name="email"
                      defaultValue={selectedCustomer.email}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Phone</label>
                    <Input
                      name="phone"
                      defaultValue={selectedCustomer.phone}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Address</label>
                    <Input
                      name="address"
                      defaultValue={selectedCustomer.address}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Save Changes
                  </Button>
                </form>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* 🗑️ Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className=" w-[20rem] p-[16px]">
          <DialogHeader className="border-2 border-l-0 border-t-0 border-r-0 pb-2">
            <DialogTitle className="text-[16px]">Delete Customer</DialogTitle>
          </DialogHeader>
          <p className="text-[14px]">
            Are you sure you want to delete{" "}
            <strong>{customerToDelete?.name}</strong>?
          </p>
          <div className="flex justify-end gap-3 mt-4">
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteCustomer}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm ${
                  page === currentPage
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </>
  );
}
