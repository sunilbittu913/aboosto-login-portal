import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Referrals() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Referrals</h1>
          <p className="text-muted-foreground">Manage referral programs and rewards</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Referral Program</CardTitle>
            <CardDescription>Configure referral incentives and tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Referral program configuration coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
