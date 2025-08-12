import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";

export default function SidebarLayout({ children }) {
  return (
    <SidebarProvider
      defaultOpen={true}
      style={{
        "--sidebar-width": "14rem",
        "--sidebar-width-mobile": "12rem",
      }}
    >
      <div className="min-h-screen flex">
        <AppSidebar />
        <div className="flex-1">
          <div className="p-4">
            <SidebarTrigger /> {/* optional toggle button */}
          </div>
          <main className="p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
