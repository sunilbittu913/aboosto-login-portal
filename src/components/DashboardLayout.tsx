import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { UserProfile } from "@/components/UserProfile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Separator } from "@/components/ui/separator";
import aboostoLogoBlue from "@/assets/aboosto-logo-blue.svg";
import aboostoLogoWhite from "@/assets/aboosto-logo-white.svg";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          {/* Header with Trigger */}
          <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-2">
              <img 
                src={aboostoLogoBlue} 
                alt="Aboosto Fleet" 
                className="h-8 w-auto dark:hidden"
              />
              <img 
                src={aboostoLogoWhite} 
                alt="Aboosto Fleet" 
                className="h-8 w-auto hidden dark:block"
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <UserProfile />
              <ThemeToggle />
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
