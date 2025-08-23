// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// // Mock Data
// const customersData = [
//   {
//     id: 1,
//     name: "Haseeb Hussain",
//     email: "haseeb@example.com",
//     registered: "2024-05-10",
//     orders: 5,
//     address: "Lahore, Pakistan",
//     phone: "+92 300 1234567",
//   },
//   {
//     id: 2,
//     name: "Ali Khan",
//     email: "ali@example.com",
//     registered: "2024-07-21",
//     orders: 2,
//     address: "Karachi, Pakistan",
//     phone: "+92 322 9876543",
//   },
//   {
//     id: 3,
//     name: "Ayesha Ahmed",
//     email: "ayesha@example.com",
//     registered: "2024-08-01",
//     orders: 8,
//     address: "Islamabad, Pakistan",
//     phone: "+92 301 2468101",
//   },
// ];

// export default function UsersList() {
//   const [search, setSearch] = useState("");

//   const filteredCustomers = customersData.filter((customer) =>
//     customer.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-6 lg:px-16 py-10">
//       <h1 className="text-3xl font-bold mb-6">Customers</h1>

//       {/* Search Bar */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
//         <Input
//           placeholder="Search customers..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="max-w-sm"
//         />
//         <Button variant="outline">+ Add Customer</Button>
//       </div>

//       {/* Customer Table */}
//       <Card className="shadow-sm">
//         <CardHeader>
//           <CardTitle>Customer List</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Name</TableHead>
//                   <TableHead>Email</TableHead>
//                   <TableHead>Registered</TableHead>
//                   <TableHead>Orders</TableHead>
//                   <TableHead>Action</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredCustomers.map((customer) => (
//                   <TableRow key={customer.id}>
//                     <TableCell className="flex items-center gap-2">
//                       <Avatar>
//                         <AvatarFallback>
//                           {customer.name.charAt(0)}
//                         </AvatarFallback>
//                       </Avatar>
//                       {customer.name}
//                     </TableCell>
//                     <TableCell>{customer.email}</TableCell>
//                     <TableCell>{customer.registered}</TableCell>
//                     <TableCell>{customer.orders}</TableCell>
//                     <TableCell>
//                       {/* Profile Modal */}
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <Button size="sm" variant="outline">
//                             View Profile
//                           </Button>
//                         </DialogTrigger>
//                         <DialogContent className="max-w-lg">
//                           <DialogHeader>
//                             <DialogTitle>Customer Profile</DialogTitle>
//                           </DialogHeader>
//                           <div className="space-y-4">
//                             <p>
//                               <strong>Name:</strong> {customer.name}
//                             </p>
//                             <p>
//                               <strong>Email:</strong> {customer.email}
//                             </p>
//                             <p>
//                               <strong>Phone:</strong> {customer.phone}
//                             </p>
//                             <p>
//                               <strong>Address:</strong> {customer.address}
//                             </p>
//                             <p>
//                               <strong>Registered:</strong> {customer.registered}
//                             </p>
//                             <p>
//                               <strong>Total Orders:</strong> {customer.orders}
//                             </p>
//                             <Button className="w-full">Edit Customer</Button>
//                           </div>
//                         </DialogContent>
//                       </Dialog>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////// upper vala olde code ha

// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// export default function UsersList() {
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // ek page me kitne users dikhane hain

//   // localStorage se users load karo
//   const customers = JSON.parse(localStorage.getItem("users")) || [];

//   // search filter
//   const filteredCustomers = customers.filter(
//     (customer) =>
//       customer.name.toLowerCase().includes(search.toLowerCase()) ||
//       customer.email.toLowerCase().includes(search.toLowerCase())
//   );

//   // ✅ Pagination logic
//   const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredCustomers.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 font-inter antialiased">
//       <div className="bg-white p-6 rounded-2xl shadow-sm">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
//           <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
//             Users <span className="text-purple-600">List</span>
//           </h1>
//           <div className="flex items-center w-full max-w-sm relative">
//             <Search
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//               size={18}
//             />
//             <Input
//               type="text"
//               placeholder="Search by Name or Email ..."
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setCurrentPage(1); // search karte hi page reset
//               }}
//               className="pl-10"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Registered</TableHead>
//                 <TableHead>Orders</TableHead>
//                 <TableHead>Action</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {currentItems.length === 0 ? (
//                 <TableRow>
//                   <TableCell
//                     colSpan={5}
//                     className="text-center text-gray-500 py-6"
//                   >
//                     No customers found
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 currentItems.map((customer, index) => (
//                   <TableRow key={customer.id || index}>
//                     <TableCell className="flex items-center gap-2">
//                       <Avatar>
//                         <AvatarFallback>
//                           {customer.name?.charAt(0).toUpperCase()}
//                         </AvatarFallback>
//                       </Avatar>
//                       {customer.name}
//                     </TableCell>
//                     <TableCell>{customer.email}</TableCell>
//                     <TableCell>
//                       {customer.registered || "Not Provided"}
//                     </TableCell>
//                     <TableCell>{customer.orders || 0}</TableCell>
//                     <TableCell>
//                       {/* Profile Modal */}
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <Button
//                             size="sm"
//                             variant="link"
//                             className="text-purple-600 hover:text-purple-700 p-0 cursor-pointer"
//                           >
//                             View Profile
//                           </Button>
//                         </DialogTrigger>
//                         <DialogContent className="max-w-lg">
//                           <DialogHeader>
//                             <DialogTitle>Customer Profile</DialogTitle>
//                           </DialogHeader>
//                           <div className="space-y-4">
//                             <p>
//                               <strong>Name:</strong> {customer.name}
//                             </p>
//                             <p>
//                               <strong>Email:</strong> {customer.email}
//                             </p>
//                             <p>
//                               <strong>Phone:</strong> {customer.phone}
//                             </p>
//                             <p>
//                               <strong>Address:</strong> {customer.address}
//                             </p>
//                             <p>
//                               <strong>Registered:</strong> {customer.registered}
//                             </p>
//                             <p>
//                               <strong>Total Orders:</strong>{" "}
//                               {customer.orders || 0}
//                             </p>
//                           </div>
//                         </DialogContent>
//                       </Dialog>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </div>

//         {/* ✅ Pagination */}
//         {totalPages > 1 && (
//           <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-3">
//             <Button
//               variant="outline"
//               className="flex items-center gap-2 cursor-pointer"
//               onClick={handlePrevious}
//               disabled={currentPage === 1}
//             >
//               <ChevronLeft className="w-4 h-4" />
//               Previous
//             </Button>
//             <div className="flex space-x-1">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (page) => (
//                   <Button
//                     key={page}
//                     onClick={() => setCurrentPage(page)}
//                     className={`w-9 h-9 rounded-lg text-sm cursor-pointer ${
//                       page === currentPage
//                         ? "bg-purple-600 text-white"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     {page}
//                   </Button>
//                 )
//               )}
//             </div>
//             <Button
//               variant="outline"
//               className="flex items-center gap-2 cursor-pointer"
//               onClick={handleNext}
//               disabled={currentPage === totalPages}
//             >
//               Next
//               <ChevronRight className="w-4 h-4" />
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////////

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
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function UsersList() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // localStorage se users load karo
  const customers = JSON.parse(localStorage.getItem("users")) || [];

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

    const order = allOrders.find((order) => order.userId === user_id);
    const orders = allOrders.filter((order) => order.userId === user_id);
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

      {/* Table (Desktop Only) */}
      <div className="hidden md:block overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Registered</TableHead>
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
                <TableRow
                  key={customer.id || index}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback className="bg-white border">
                        {customer.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {customer.name}
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.registered || "Not Provided"}</TableCell>
                  {/* <TableCell>{customer.orders || 0}</TableCell> */}
                  <TableCell>{getUserOrdersCount(customer.id)}</TableCell>

                  <TableCell className="text-center">
                    {/* Profile Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          className="cursor-pointer"
                        >
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
                            <strong>Phone:</strong> {customer.phone || "—"}
                          </p>
                          <p>
                            <strong>Address:</strong> {customer.address || "—"}
                          </p>
                          <p>
                            <strong>Registered:</strong>{" "}
                            {customer.registered || "—"}
                          </p>
                          <p>
                            <strong>Total Orders:</strong>
                            {getUserOrdersCount(customer.id)}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {currentItems.length > 0 ? (
          currentItems.map((customer, index) => (
            <div
              key={customer.id || index}
              className="bg-white border rounded-lg p-4 flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <AvatarFallback>
                    {customer.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-medium text-gray-800">{customer.name}</h2>
                  <p className="text-sm text-gray-500">{customer.email}</p>
                  <p className="text-xs text-gray-400">
                    {customer.registered || "Not Provided"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                {/* <p className="text-purple-600 font-bold">
                  {getUserOrdersCount(customer.id)} Orders
                </p> */}
                <p>
                  <strong>Total Orders:</strong>{" "}
                  {getUserOrdersCount(customer.id)}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="cursor-pointer"
                    >
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
                        <strong>Phone:</strong> {customer.phone || "—"}
                      </p>
                      <p>
                        <strong>Address:</strong> {customer.address || "—"}
                      </p>
                      <p>
                        <strong>Registered:</strong>{" "}
                        {customer.registered || "—"}
                      </p>
                      <p>
                        <strong>Total Orders:</strong>{" "}
                        {getUserOrdersCount(customer.id)}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No customers found</p>
        )}
      </div>

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
