import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function City() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">City Management</h1>
          <p className="text-muted-foreground">Manage cities for your fleet operations</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cities</CardTitle>
            <CardDescription>Configure city settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">City configuration coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
