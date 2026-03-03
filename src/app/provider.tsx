"use client";
import AppSidebar from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-x-hidden">
        <SidebarTrigger />
        <TooltipProvider>{children}</TooltipProvider>
      </main>
    </SidebarProvider>
  );
}
