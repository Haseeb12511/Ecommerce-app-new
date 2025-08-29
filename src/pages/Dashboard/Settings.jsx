// // src/components/ProfileSettingsShadcn.jsx
// import React from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { Upload } from "lucide-react";

// const Input = () => {
//   return (
//     <input
//       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm
//                  ring-offset-background file:border-0 file:bg-transparent file:text-sm
//                  file:font-medium placeholder:text-muted-foreground focus-visible:outline-none
//                  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
//                  disabled:cursor-not-allowed disabled:opacity-50"
//     />
//   );
// };

// export default function ProfileSettingsShadcn() {
//   return (
//     <div className="min-h-screen bg-muted/30 p-6">
//       <div className="mx-auto max-w-6xl">
//         <div className="overflow-hidden">
//           {/* Main */}
//           <div className="flex-1 p-6">
//             {/* Form + Image side-by-side */}
//             <div className="flex gap-6 items-start">
//               {/* Form */}
//               <section className="flex-1">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName">First name</Label>
//                     <Input id="firstName" placeholder="Type here" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="lastName">Last name</Label>
//                     <Input id="lastName" placeholder="Type here" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="example@mail.com"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone</Label>
//                     <Input id="phone" type="tel" placeholder="+1234567890" />
//                   </div>
//                   <div className="space-y-2 sm:col-span-2">
//                     <Label htmlFor="address">Address</Label>
//                     <Input id="address" placeholder="Type here" />
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <Button variant="default">Save changes</Button>
//                 </div>
//               </section>

//               {/* Profile photo */}
//               <section className="flex flex-col items-center gap-3">
//                 <Avatar className="h-36 w-36">
//                   <AvatarImage
//                     src="https://images.unsplash.com/photo-1647538044240-ab6ed1b8056a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8"
//                     alt="Profile"
//                   />
//                   <AvatarFallback>PP</AvatarFallback>
//                 </Avatar>
//                 <Button variant="default" size="sm" className="gap-2">
//                   <Upload className="h-4 w-4" />
//                   Upload
//                 </Button>
//               </section>
//             </div>

//             <Separator className="my-6" />

//             {/* Bottom cards */}
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="py-4  rounded-2xl bg-background">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base">Password</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3 text-sm text-muted-foreground">
//                   <p>You can reset or change your password by clicking here</p>
//                   <Button variant="default" size="sm">
//                     Change
//                   </Button>
//                 </CardContent>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { Upload } from "lucide-react";
// import { toast } from "react-toastify";

// const Input = () => {
//   return (
//     <input
//       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm
//                  ring-offset-background file:border-0 file:bg-transparent file:text-sm
//                  file:font-medium placeholder:text-muted-foreground focus-visible:outline-none
//                  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
//                  disabled:cursor-not-allowed disabled:opacity-50"
//     />
//   );
// };

// export default function ProfileSettingsShadcn() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     setUser(loggedInUser);
//   }, []);

//   const handleSave = () => {
//     if (!user) return;

//     // Update users array
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const updatedUsers = users.map((u) => (u.id === user.id ? user : u));

//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//     localStorage.setItem("loggedInUser", JSON.stringify(user));

//     window.dispatchEvent(new Event("userUpdated")); // for global updates
//     toast.success("Profile updated successfully!");
//   };

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="min-h-screen bg-muted/30 p-6">
//       <div className="mx-auto max-w-6xl">
//         <div className="overflow-hidden">
//           <div className="flex-1 p-6">
//             <div className="flex gap-6 items-start">
//               {/* Form */}
//               <section className="flex-1">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName">First name</Label>
//                     <Input
//                       id="firstName"
//                       value={user.first_name}
//                       onChange={(e) =>
//                         setUser({ ...user, first_name: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="lastName">Last name</Label>
//                     <Input
//                       id="lastName"
//                       value={user.last_name}
//                       onChange={(e) =>
//                         setUser({ ...user, last_name: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       value={user.email}
//                       onChange={(e) =>
//                         setUser({ ...user, email: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone</Label>
//                     <Input
//                       id="phone"
//                       value={user.phone}
//                       onChange={(e) =>
//                         setUser({ ...user, phone: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="space-y-2 sm:col-span-2">
//                     <Label htmlFor="address">Address</Label>
//                     <Input
//                       id="address"
//                       value={user.address}
//                       onChange={(e) =>
//                         setUser({ ...user, address: e.target.value })
//                       }
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <Button variant="default" onClick={handleSave}>
//                     Save changes
//                   </Button>
//                 </div>
//               </section>

//               {/* Profile photo */}
// <section className="flex flex-col items-center gap-3">
//   <div className="relative">
//     <Avatar className="h-36 w-36">
//       <AvatarImage
//         src={user.avatar}
//         alt="Profile"
//         className="object-cover w-full h-full"
//       />
//       <AvatarFallback className="text-4xl font-semibold">
//         {user.first_name?.[0]}
//         {user.last_name?.[0]}
//       </AvatarFallback>
//     </Avatar>
//   </div>

//   {/* Hidden File Input */}
//   <input
//     type="file"
//     accept="image/*"
//     id="avatarUpload"
//     style={{ display: "none" }}
//     onChange={(e) => {
//       const file = e.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setUser({ ...user, avatar: reader.result }); // Base64 image
//         };
//         reader.readAsDataURL(file);
//       }
//     }}
//   />

//   <Button
//     variant="default"
//     size="sm"
//     className="gap-2"
//     onClick={() =>
//       document.getElementById("avatarUpload").click()
//     }
//   >
//     <Upload className="h-4 w-4" />
//     Upload
//   </Button>
// </section>
//             </div>

//             <Separator className="my-6" />

//             {/* Bottom cards */}
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="py-4 rounded-2xl bg-background">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base">Password</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3 text-sm text-muted-foreground">
//                   <p>You can reset or change your password by clicking here</p>
//                   <Button variant="default" size="sm">
//                     Change
//                   </Button>
//                 </CardContent>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Upload } from "lucide-react";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Input = (props) => {
  return (
    <input
      {...props} // 👈 important: props spread karo (value, onChange etc.)
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm
                 ring-offset-background file:border-0 file:bg-transparent file:text-sm
                 file:font-medium placeholder:text-muted-foreground focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
};

export default function ProfileSettingsShadcn() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    avatar: "",
  });

  // ✅ Load user from localStorage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  // ✅ Save changes
  const handleSave = () => {
    // Get all users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Update user in users array
    users = users.map((u) =>
      u.id === user.id ? { ...user, updated_at: new Date().toISOString() } : u
    );

    // Save updated users and loggedInUser
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    toast.success("Profile updated successfully!");
    window.dispatchEvent(new Event("userUpdated"));
  };

  // ✅ Password Update Function
  const handlePasswordChange = () => {
    if (oldPass !== user.password) {
      alert("Old password is incorrect!");
      return;
    }
    if (newPass !== confirmPass) {
      alert("New passwords do not match!");
      return;
    }

    const updatedUser = { ...user, password: newPass };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map((u) =>
      u.id === updatedUser.id
        ? { ...updatedUser, updated_at: new Date().toISOString() }
        : u
    );

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    setUser(updatedUser);
    setOldPass("");
    setNewPass("");
    setConfirmPass("");

    toast.success("Password changed successfully!");
  };

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden">
          {/* Main */}
          <div className="flex-1 p-6">
            <div className="flex gap-6 items-start">
              {/* Form */}
              <section className="flex-1">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first_name">First name</Label>
                    <Input
                      id="first_name"
                      value={user.first_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last_name">Last name</Label>
                    <Input
                      id="last_name"
                      value={user.last_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={user.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={user.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <Button onClick={handleSave}>Save changes</Button>
                </div>
              </section>

              {/* Profile photo */}
              <section className="flex flex-col items-center gap-3">
                <div className="relative">
                  <Avatar className="h-36 w-36">
                    <AvatarImage
                      src={user.avatar}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="text-4xl font-semibold">
                      {user.first_name?.[0]}
                      {user.last_name?.[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Hidden File Input */}
                <input
                  type="file"
                  accept="image/*"
                  id="avatarUpload"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setUser({ ...user, avatar: reader.result }); // Base64 image
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />

                <Button
                  variant="default"
                  size="sm"
                  className="gap-2"
                  onClick={() =>
                    document.getElementById("avatarUpload").click()
                  }
                >
                  <Upload className="h-4 w-4" />
                  Upload
                </Button>
              </section>
            </div>

            <Separator className="my-6" />

            {/* Bottom cards */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="py-4 rounded-2xl bg-background">
                <h3 className="text-base px-4">Password</h3>
                <div className="space-y-3 text-sm text-muted-foreground px-4">
                  <p>You can reset or change your password by clicking here</p>

                  {/* 🔹 Password Change Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" size="sm">
                        Change
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Change Password</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="oldPass" className="mb-2">
                            Old Password
                          </Label>
                          <Input
                            id="oldPass"
                            type="password"
                            value={oldPass}
                            onChange={(e) => setOldPass(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="newPass" className="mb-2">
                            New Password
                          </Label>
                          <Input
                            id="newPass"
                            type="password"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirmPass" className="mb-2">
                            Confirm Password
                          </Label>
                          <Input
                            id="confirmPass"
                            type="password"
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                          />
                        </div>
                        <Button onClick={handlePasswordChange}>
                          Save Changes
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { Upload } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// const Input = () => {
//   return (
//     <input
//       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm
//                  ring-offset-background file:border-0 file:bg-transparent file:text-sm
//                  file:font-medium placeholder:text-muted-foreground focus-visible:outline-none
//                  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
//                  disabled:cursor-not-allowed disabled:opacity-50"
//     />
//   );
// };

// export default function ProfileSettingsShadcn() {
//   const [user, setUser] = useState({
//     id: null,
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     address: "",
//     avatar: "",
//     password: "",
//   });

//   // Password change states
//   const [oldPass, setOldPass] = useState("");
//   const [newPass, setNewPass] = useState("");
//   const [confirmPass, setConfirmPass] = useState("");

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (loggedInUser) {
//       setUser(loggedInUser);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.id]: e.target.value });
//   };

//   const handleSave = () => {
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     users = users.map((u) =>
//       u.id === user.id ? { ...user, updated_at: new Date().toISOString() } : u
//     );

//     localStorage.setItem("users", JSON.stringify(users));
//     localStorage.setItem("loggedInUser", JSON.stringify(user));

//     alert("Profile updated successfully!");
//     window.dispatchEvent(new Event("userUpdated"));
//   };

// // ✅ Password Update Function
// const handlePasswordChange = () => {
//   if (oldPass !== user.password) {
//     alert("Old password is incorrect!");
//     return;
//   }
//   if (newPass !== confirmPass) {
//     alert("New passwords do not match!");
//     return;
//   }
//   if (newPass.length < 6) {
//     alert("Password must be at least 6 characters!");
//     return;
//   }

//   const updatedUser = { ...user, password: newPass };

//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   users = users.map((u) =>
//     u.id === updatedUser.id
//       ? { ...updatedUser, updated_at: new Date().toISOString() }
//       : u
//   );

//   localStorage.setItem("users", JSON.stringify(users));
//   localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

//   setUser(updatedUser);
//   setOldPass("");
//   setNewPass("");
//   setConfirmPass("");

//   alert("Password changed successfully!");
// };

//   return (
//     <div className="min-h-screen bg-muted/30 p-6">
//       <div className="mx-auto max-w-6xl">
//         <div className="overflow-hidden">
//           <div className="flex-1 p-6">
//             <div className="flex gap-6 items-start">
//               {/* Form */}
//               <section className="flex-1">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <Label htmlFor="first_name">First name</Label>
//                     <Input
//                       id="first_name"
//                       value={user.first_name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="last_name">Last name</Label>
//                     <Input
//                       id="last_name"
//                       value={user.last_name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       value={user.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone</Label>
//                     <Input
//                       id="phone"
//                       type="tel"
//                       value={user.phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="space-y-2 sm:col-span-2">
//                     <Label htmlFor="address">Address</Label>
//                     <Input
//                       id="address"
//                       value={user.address}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <Button onClick={handleSave}>Save changes</Button>
//                 </div>
//               </section>

//               {/* Profile photo */}
//               <section className="flex flex-col items-center gap-3">
//                 <div className="relative">
//                   <Avatar className="h-36 w-36">
//                     <AvatarImage
//                       src={user.avatar}
//                       alt="Profile"
//                       className="object-cover w-full h-full"
//                     />
//                     <AvatarFallback className="text-4xl font-semibold">
//                       {user.first_name?.[0]}
//                       {user.last_name?.[0]}
//                     </AvatarFallback>
//                   </Avatar>
//                 </div>

//                 {/* Hidden File Input */}
//                 <input
//                   type="file"
//                   accept="image/*"
//                   id="avatarUpload"
//                   style={{ display: "none" }}
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     if (file) {
//                       const reader = new FileReader();
//                       reader.onloadend = () => {
//                         setUser({ ...user, avatar: reader.result }); // Base64 image
//                       };
//                       reader.readAsDataURL(file);
//                     }
//                   }}
//                 />

//                 <Button
//                   variant="default"
//                   size="sm"
//                   className="gap-2"
//                   onClick={() =>
//                     document.getElementById("avatarUpload").click()
//                   }
//                 >
//                   <Upload className="h-4 w-4" />
//                   Upload
//                 </Button>
//               </section>
//             </div>

//             <Separator className="my-6" />

//             {/* Password Change Section */}
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="py-4 rounded-2xl bg-background">
//                 <h3 className="text-base px-4">Password</h3>
//                 <div className="space-y-3 text-sm text-muted-foreground px-4">
//                   <p>You can reset or change your password by clicking here</p>

//                   {/* 🔹 Password Change Dialog */}
//                   <Dialog>
//                     <DialogTrigger asChild>
//                       <Button variant="default" size="sm">
//                         Change
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent>
//                       <DialogHeader>
//                         <DialogTitle>Change Password</DialogTitle>
//                       </DialogHeader>
//                       <div className="space-y-4">
//                         <div>
//                           <Label htmlFor="oldPass" className="mb-2">
//                             Old Password
//                           </Label>
//                           <Input
//                             id="oldPass"
//                             type="password"
//                             value={oldPass}
//                             onChange={(e) => setOldPass(e.target.value)}
//                           />
//                         </div>
//                         <div>
//                           <Label htmlFor="newPass" className="mb-2">
//                             New Password
//                           </Label>
//                           <Input
//                             id="newPass"
//                             type="password"
//                             value={newPass}
//                             onChange={(e) => setNewPass(e.target.value)}
//                           />
//                         </div>
//                         <div>
//                           <Label htmlFor="confirmPass" className="mb-2">
//                             Confirm Password
//                           </Label>
//                           <Input
//                             id="confirmPass"
//                             type="password"
//                             value={confirmPass}
//                             onChange={(e) => setConfirmPass(e.target.value)}
//                           />
//                         </div>
//                         <Button onClick={handlePasswordChange}>
//                           Save Changes
//                         </Button>
//                       </div>
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { Upload } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input"; // Import Shadcn UI Input
// import { toast } from "react-toastify"; // Ensure react-toastify is installed and configured

// export default function ProfileSettingsShadcn() {
//   const [user, setUser] = useState({
//     id: null,
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     address: "",
//     avatar: "",
//     password: "", // Include password in state for validation
//   });

//   // Password change states
//   const [oldPass, setOldPass] = useState("");
//   const [newPass, setNewPass] = useState("");
//   const [confirmPass, setConfirmPass] = useState("");
//   const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false); // State to control dialog open/close

//   // Load user data on component mount and whenever a user updates
//   useEffect(() => {
//     const fetchUserData = () => {
//       const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//       if (loggedInUser) {
//         setUser(loggedInUser);
//       } else {
//         // Reset user state if no user is logged in
//         setUser({
//           id: null,
//           first_name: "",
//           last_name: "",
//           email: "",
//           phone: "",
//           address: "",
//           avatar: "",
//           password: "",
//         });
//       }
//     };

//     fetchUserData(); // Initial fetch

//     // Listen for custom 'userUpdated' event to re-fetch data
//     window.addEventListener("userUpdated", fetchUserData);

//     // Cleanup listener on component unmount
//     return () => {
//       window.removeEventListener("userUpdated", fetchUserData);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.id]: e.target.value });
//   };

//   const handleSave = () => {
//     if (!user.id) {
//       toast.error("No user logged in to save changes for.");
//       return;
//     }

//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     users = users.map((u) =>
//       u.id === user.id ? { ...user, updated_at: new Date().toISOString() } : u
//     );

//     localStorage.setItem("users", JSON.stringify(users));
//     localStorage.setItem("loggedInUser", JSON.stringify(user));

//     toast.success("Profile updated successfully!"); // Replaced alert with toast
//     window.dispatchEvent(new Event("userUpdated"));
//   };

//   // ✅ Password Update Function
//   const handlePasswordChange = () => {
//     if (oldPass !== user.password) {
//       toast.error("Old password is incorrect!"); // Replaced alert with toast
//       return;
//     }
//     if (newPass !== confirmPass) {
//       toast.error("New passwords do not match!"); // Replaced alert with toast
//       return;
//     }
//     if (newPass.length < 6) {
//       toast.error("Password must be at least 6 characters!"); // Replaced alert with toast
//       return;
//     }

//     const updatedUser = { ...user, password: newPass };

//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     users = users.map((u) =>
//       u.id === updatedUser.id
//         ? { ...updatedUser, updated_at: new Date().toISOString() }
//         : u
//     );

//     localStorage.setItem("users", JSON.stringify(users));
//     localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

//     setUser(updatedUser); // Update local state
//     setOldPass("");
//     setNewPass("");
//     setConfirmPass("");
//     setIsPasswordDialogOpen(false); // Close the dialog on success

//     toast.success("Password changed successfully!"); // Replaced alert with toast
//     window.dispatchEvent(new Event("userUpdated"));
//   };

//   // Handle avatar upload with FileReader
//   const handleAvatarFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUser({ ...user, avatar: reader.result }); // Base64 image
//         toast.success("Avatar updated! Click 'Save changes' to apply.");
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   if (!user.id) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-muted/30 p-6 font-sans">
//         <p className="text-lg text-gray-600">
//           Please log in to view and edit your profile settings.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-muted/30 p-6 font-sans">
//       <div className="mx-auto max-w-6xl">
//         <div className="overflow-hidden rounded-lg shadow-lg bg-white">
//           {" "}
//           {/* Added shadow and rounded-lg */}
//           <div className="flex-1 p-6">
//             <h1 className="text-3xl font-bold text-gray-900 mb-6">
//               Profile Settings
//             </h1>

//             <div className="flex flex-col md:flex-row gap-8 items-start">
//               {" "}
//               {/* Increased gap */}
//               {/* Profile Form Section */}
//               <section className="flex-1 w-full">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div className="space-y-2">
//                     <Label htmlFor="first_name">First name</Label>
//                     <Input
//                       id="first_name"
//                       placeholder="Type here"
//                       value={user.first_name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="last_name">Last name</Label>
//                     <Input
//                       id="last_name"
//                       placeholder="Type here"
//                       value={user.last_name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="example@mail.com"
//                       value={user.email}
//                       readOnly // Email is read-only for simplicity; changing it often requires re-verification
//                       className="cursor-not-allowed bg-gray-100" // Visually indicate read-only
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone</Label>
//                     <Input
//                       id="phone"
//                       type="tel"
//                       placeholder="+1234567890"
//                       value={user.phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="space-y-2 sm:col-span-2">
//                     <Label htmlFor="address">Address</Label>
//                     <Input
//                       id="address"
//                       placeholder="Type here"
//                       value={user.address}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <Button variant="default" onClick={handleSave}>
//                     Save changes
//                   </Button>
//                 </div>
//               </section>
//               {/* Profile Photo Upload Section */}
//               <section className="flex flex-col items-center gap-3 md:w-1/4">
//                 <div className="relative">
//                   <Avatar className="h-36 w-36 shadow-lg border-2 border-gray-200">
//                     {/* <AvatarImage
//                       src={
//                         user.avatar ||
//                         "https://placehold.co/144x144/f3f4f6/a8a29e?text=No+Avatar"
//                       }
//                       alt="Profile Avatar"
//                       className="object-cover w-full h-full"
//                       onError={(e) =>
//                         (e.target.src =
//                           "https://placehold.co/144x144/f3f4f6/a8a29e?text=No+Avatar")
//                       } // Fallback on error
//                     /> */}
//                     <AvatarImage
//                       src={
//                         user.avatar ||
//                         "https://placehold.co/144x144/f3f4f6/a8a29e?text=No+Avatar"
//                       }
//                       alt="Profile Avatar"
//                       className="object-cover w-full h-full"
//                       onError={(e) =>
//                         (e.target.src =
//                           "https://placehold.co/144x144/f3f4f6/a8a29e?text=No+Avatar")
//                       } // Fallback on error
//                     />
//                     <AvatarFallback className="text-4xl font-semibold bg-gray-200 text-gray-700">
//                       {user.first_name?.[0] || ""}
//                       {user.last_name?.[0] || ""}
//                     </AvatarFallback>
//                   </Avatar>
//                 </div>

//                 {/* Hidden File Input tied to a button click */}
//                 <input
//                   type="file"
//                   accept="image/*"
//                   id="avatarUpload"
//                   style={{ display: "none" }}
//                   onChange={handleAvatarFileChange}
//                 />

//                 <Button
//                   variant="outline" // Changed to outline for better visual hierarchy
//                   size="sm"
//                   className="gap-2"
//                   onClick={() =>
//                     document.getElementById("avatarUpload").click()
//                   }
//                 >
//                   <Upload className="h-4 w-4" />
//                   Upload Avatar
//                 </Button>
//               </section>
//             </div>

//             <Separator className="my-8" />

//             {/* Password Change Section */}
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="py-4 rounded-2xl bg-background border border-gray-200 shadow-sm px-4">
//                 {" "}
//                 {/* Added px-4 here */}
//                 <h3 className="text-base font-semibold mb-2">Password</h3>{" "}
//                 {/* Added mb-2 */}
//                 <div className="space-y-3 text-sm text-muted-foreground">
//                   <p>You can reset or change your password by clicking here</p>

//                   {/* 🔹 Password Change Dialog */}
//                   <Dialog
//                     open={isPasswordDialogOpen}
//                     onOpenChange={setIsPasswordDialogOpen}
//                   >
//                     <DialogTrigger asChild>
//                       <Button variant="secondary" size="sm">
//                         {" "}
//                         {/* Changed to secondary for distinction */}
//                         Change Password
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent className="sm:max-w-[425px]">
//                       {" "}
//                       {/* Added max-width for better dialog sizing */}
//                       <DialogHeader>
//                         <DialogTitle className="text-xl font-bold">
//                           Change Password
//                         </DialogTitle>
//                       </DialogHeader>
//                       <div className="space-y-4 py-4">
//                         {" "}
//                         {/* Added padding */}
//                         <div>
//                           <Label htmlFor="oldPass" className="mb-2 block">
//                             {" "}
//                             {/* Added block for better layout */}
//                             Old Password
//                           </Label>
//                           <Input
//                             id="oldPass"
//                             type="password"
//                             value={oldPass}
//                             onChange={(e) => setOldPass(e.target.value)}
//                             className="w-full"
//                           />
//                         </div>
//                         <div>
//                           <Label htmlFor="newPass" className="mb-2 block">
//                             New Password
//                           </Label>
//                           <Input
//                             id="newPass"
//                             type="password"
//                             value={newPass}
//                             onChange={(e) => setNewPass(e.target.value)}
//                             className="w-full"
//                           />
//                         </div>
//                         <div>
//                           <Label htmlFor="confirmPass" className="mb-2 block">
//                             Confirm New Password
//                           </Label>
//                           <Input
//                             id="confirmPass"
//                             type="password"
//                             value={confirmPass}
//                             onChange={(e) => setConfirmPass(e.target.value)}
//                             className="w-full"
//                           />
//                         </div>
//                         <Button
//                           onClick={handlePasswordChange}
//                           className="w-full"
//                         >
//                           {" "}
//                           {/* Made button full width */}
//                           Save New Password
//                         </Button>
//                       </div>
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
