import React from "react";

import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <SidebarProvider>
        <LeftSidebar />
        <main>
          <SidebarTrigger className="hidden" />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default layout;
