import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function VehicleCategory() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Vehicle Category</h1>
          <p className="text-muted-foreground">Manage vehicle types and classifications</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Vehicle Categories</CardTitle>
            <CardDescription>Configure vehicle types, capacities, and features</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Vehicle category configuration coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
