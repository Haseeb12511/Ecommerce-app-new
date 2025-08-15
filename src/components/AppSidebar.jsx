// src/components/AppSidebar.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Calendar,
  Home,
  HomeIcon,
  Inbox,
  LayoutDashboard,
  LogOut,
  Package,
  Search,
  Settings,
  ShoppingCart,
  SkipBack,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarFooter } from "react-pro-sidebar";
import { Button } from "./ui/button";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Products", url: "/productsList", icon: Package },
  { title: "Orders", url: "/ordersList", icon: ShoppingCart },
  { title: "Inbox", url: "/inbox", icon: Inbox },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ to get current path

  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.dispatchEvent(new Event("userUpdated"));
    navigate("/login");
  };

  return (
    <Sidebar
      collapsible="icon"
      variant={"sidebar"}
      className="transition-all duration-300 ease-in-out"
    >
      {open && (
        <SidebarHeader>
          <Link
            className="text-lg font-semibold transition-all duration-300 ease-in-out"
            to={"/"}
          >
            My Shop
          </Link>
        </SidebarHeader>
      )}

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={`text-sm rounded-md transition-colors duration-300 ease-in-out
                          hover:bg-gray-100 flex items-center p-2
                          ${
                            isActive
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                      >
                        <item.icon className="mr-2 transition-all duration-300 ease-in-out" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:bg-gray-100 flex space-x-2 justify-start items-center transition-all duration-300 ease-in-out"
                    onClick={handleLogout}
                  >
                    <LogOut className="transition-all duration-300 ease-in-out" />
                    <span>Logout</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
