// src/components/ProfileSettingsShadcn.jsx
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Upload } from "lucide-react";

export default function ProfileSettingsShadcn() {
  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="mx-auto max-w-6xl">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="md:w-64 bg-muted/30 md:border-r">
              <nav className="p-4 space-y-1">
                {[
                  "General",
                  "Moderators",
                  "Admin account",
                  "SEO settings",
                  "Mail settings",
                  "Newsletter",
                ].map((item, i) => (
                  <Button
                    key={i}
                    variant={item === "General" ? "secondary" : "ghost"}
                    className={`w-full justify-start ${
                      item === "General"
                        ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                        : ""
                    }`}
                  >
                    {item}
                  </Button>
                ))}
              </nav>
            </aside>

            {/* Main */}
            <div className="flex-1 p-6">
              {/* Form + Image side-by-side */}
              <div className="flex gap-6 items-start">
                {/* Form */}
                <section className="flex-1">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="Type here" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Type here" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1234567890" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Type here" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="birthday">Birthday</Label>
                      <Input id="birthday" type="date" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button variant="default" className="cursor-pointer">
                      Save changes
                    </Button>
                  </div>
                </section>

                {/* Profile photo */}
                <section className="flex flex-col items-center gap-3">
                  <Avatar className="h-36 w-36">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1647538044240-ab6ed1b8056a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8"
                      alt="Profile"
                    />
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload
                  </Button>
                </section>
              </div>

              <Separator className="my-6" />

              {/* Bottom cards */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="gap-2 py-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Password</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      You can reset or change your password by clicking here
                    </p>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </CardContent>
                </Card>

                <Card className="gap-2 py-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Remove account</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Once you delete your account, there is no going back.</p>
                    <Button variant="outline" size="sm">
                      Deactivate
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
