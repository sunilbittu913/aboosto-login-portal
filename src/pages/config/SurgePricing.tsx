import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SurgePricing() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Surge Pricing</h1>
          <p className="text-muted-foreground">Manage dynamic pricing based on demand</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Surge Pricing Rules</CardTitle>
            <CardDescription>Configure surge multipliers and conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Surge pricing configuration coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
