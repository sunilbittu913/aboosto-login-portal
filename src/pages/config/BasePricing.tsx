import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BasePricing() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Base Pricing</h1>
          <p className="text-muted-foreground">Configure base pricing for your fleet services</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Base Pricing Configuration</CardTitle>
            <CardDescription>Set up standard rates and pricing structure</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Base pricing configuration coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
