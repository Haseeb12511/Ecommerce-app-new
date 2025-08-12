// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "../components/AppSidebar";

// export default function SidebarLayout({ children }) {
//   return (
//     <SidebarProvider
//       defaultOpen={true}
//       style={{
//         "--sidebar-width": "14rem",
//         "--sidebar-width-mobile": "12rem",
//       }}
//     >
//       <div className="min-h-screen flex">
//         <AppSidebar />
//         <div className="flex-1">
//           <div className="p-4">
//             <SidebarTrigger /> {/* optional toggle button */}
//           </div>
//           <main className="p-4">{children}</main>
//         </div>
//       </div>
//     </SidebarProvider>
//   );
// }

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
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Optional top bar */}
          <div className="p-4 border-b">
            <SidebarTrigger /> {/* toggle button */}
          </div>

          {/* Page content */}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
