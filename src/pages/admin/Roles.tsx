import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Plus } from "lucide-react";

const rolesData = [
  { id: 1, name: "Admin", description: "Full system access", users: 5, permissions: 25 },
  { id: 2, name: "Manager", description: "Fleet and driver management", users: 12, permissions: 15 },
  { id: 3, name: "Staff", description: "Basic operational access", users: 28, permissions: 8 },
  { id: 4, name: "Viewer", description: "Read-only access", users: 45, permissions: 3 },
];

const Roles = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container px-4 py-8">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <Shield className="h-8 w-8 text-primary" />
                  Role Management
                </h2>
                <p className="text-muted-foreground mt-1">
                  Manage user roles and access levels
                </p>
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary">
                <Plus className="h-4 w-4 mr-2" />
                Create Role
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {rolesData.map((role) => (
              <Card key={role.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Shield className="h-8 w-8 text-primary" />
                    <Badge variant="outline">{role.users} users</Badge>
                  </div>
                  <CardTitle className="mt-4">{role.name}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {role.permissions} permissions assigned
                    </p>
                    <Button variant="outline" className="w-full">
                      Manage Permissions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Roles;
