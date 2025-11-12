import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { VehicleCards } from "@/components/dashboard/VehicleCards";
import { VehiclesTable } from "@/components/dashboard/VehiclesTable";

const Dashboard = () => {
  const [activeView, setActiveView] = useState<"cards" | "table">("cards");

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container px-4 py-8">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold mb-2">Fleet Dashboard</h2>
            <p className="text-muted-foreground">
              Monitor and manage your entire fleet in real-time
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <StatsCards />
          </div>

          {/* View Toggle */}
          <div className="mb-6 flex items-center justify-between animate-in fade-in slide-in-from-bottom-8 duration-900">
            <h3 className="text-2xl font-semibold">Active Vehicles</h3>
            <div className="flex gap-2">
              <Button
                variant={activeView === "cards" ? "default" : "outline"}
                onClick={() => setActiveView("cards")}
                className={activeView === "cards" ? "bg-gradient-to-r from-primary to-secondary" : ""}
              >
                Card View
              </Button>
              <Button
                variant={activeView === "table" ? "default" : "outline"}
                onClick={() => setActiveView("table")}
                className={activeView === "table" ? "bg-gradient-to-r from-primary to-secondary" : ""}
              >
                Table View
              </Button>
            </div>
          </div>

          {/* Vehicle Display */}
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {activeView === "cards" ? <VehicleCards /> : <VehiclesTable />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
