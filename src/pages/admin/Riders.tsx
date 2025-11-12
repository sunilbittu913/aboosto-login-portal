import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Car, Search, UserPlus, Star } from "lucide-react";
import { useState } from "react";

const ridersData = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", trips: 45, rating: 4.8, status: "active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", trips: 32, rating: 4.6, status: "active" },
  { id: 3, name: "Carol White", email: "carol@example.com", trips: 67, rating: 4.9, status: "active" },
  { id: 4, name: "David Brown", email: "david@example.com", trips: 12, rating: 4.5, status: "inactive" },
];

const Riders = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredRiders = ridersData.filter(rider =>
    rider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rider.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container px-4 py-8">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <Car className="h-8 w-8 text-primary" />
                  Rider Management
                </h2>
                <p className="text-muted-foreground mt-1">
                  Manage riders and their trip history
                </p>
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Rider
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search riders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Riders Table */}
          <Card className="animate-in fade-in slide-in-from-bottom-8 duration-900">
            <CardHeader>
              <CardTitle>All Riders</CardTitle>
              <CardDescription>A list of all registered riders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rider</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Trips</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRiders.map((rider) => (
                    <TableRow key={rider.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                              {getInitials(rider.name)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{rider.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{rider.email}</TableCell>
                      <TableCell className="font-semibold">{rider.trips}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-semibold">{rider.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={
                            rider.status === "active" 
                              ? "bg-gradient-to-r from-primary to-secondary" 
                              : "bg-muted text-muted-foreground"
                          }
                        >
                          {rider.status.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Riders;
