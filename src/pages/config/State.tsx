import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function State() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">State Management</h1>
          <p className="text-muted-foreground">Manage states for your fleet operations</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>States</CardTitle>
            <CardDescription>Configure state settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">State configuration coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
