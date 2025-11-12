import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Promotions() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Promotions</h1>
          <p className="text-muted-foreground">Create and manage promotional campaigns</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Promotions</CardTitle>
            <CardDescription>Manage discount codes and special offers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Promotions management coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
