import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Country() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Country Management</h1>
          <p className="text-muted-foreground">Manage countries for your fleet operations</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Countries</CardTitle>
            <CardDescription>Configure country settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Country configuration coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
