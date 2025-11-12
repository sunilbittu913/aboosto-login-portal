import { useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Gauge, 
  Fuel, 
  Calendar,
  User,
  Wrench,
  TrendingUp,
  Clock,
  Truck
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Mock data - in production this would come from API
const vehicleData = {
  id: "VH-001",
  name: "Truck Alpha",
  type: "Heavy Duty Truck",
  status: "active",
  location: "Lagos, Nigeria",
  speed: 65,
  fuel: 78,
  driver: {
    name: "John Okoro",
    phone: "+234 801 234 5678",
    license: "DL-2024-001",
    experience: "5 years"
  }
};

const maintenanceHistory = [
  { id: 1, date: "2024-01-15", type: "Oil Change", cost: "₦25,000", status: "Completed" },
  { id: 2, date: "2024-01-10", type: "Tire Replacement", cost: "₦180,000", status: "Completed" },
  { id: 3, date: "2023-12-20", type: "Brake Inspection", cost: "₦15,000", status: "Completed" },
  { id: 4, date: "2023-12-15", type: "Engine Tune-up", cost: "₦75,000", status: "Completed" },
  { id: 5, date: "2023-11-28", type: "AC Repair", cost: "₦45,000", status: "Completed" }
];

const fuelConsumption = [
  { date: "Mon", liters: 85, efficiency: 7.2 },
  { date: "Tue", liters: 92, efficiency: 6.8 },
  { date: "Wed", liters: 78, efficiency: 7.5 },
  { date: "Thu", liters: 88, efficiency: 7.1 },
  { date: "Fri", liters: 95, efficiency: 6.9 },
  { date: "Sat", liters: 82, efficiency: 7.3 },
  { date: "Sun", liters: 76, efficiency: 7.6 }
];

const routeHistory = [
  { id: 1, from: "Lagos", to: "Abuja", distance: "780 km", duration: "9h 15m", date: "2024-01-15" },
  { id: 2, from: "Lagos", to: "Ibadan", distance: "130 km", duration: "2h 05m", date: "2024-01-14" },
  { id: 3, from: "Ibadan", to: "Ilorin", distance: "180 km", duration: "2h 45m", date: "2024-01-13" },
  { id: 4, from: "Lagos", to: "Benin City", distance: "320 km", duration: "4h 30m", date: "2024-01-12" },
  { id: 5, from: "Lagos", to: "Port Harcourt", distance: "650 km", duration: "8h 10m", date: "2024-01-11" }
];

const VehicleDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container px-4 py-8">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status</CardTitle>
              <Gauge className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <Badge className="bg-gradient-to-r from-primary to-secondary">
                  {vehicleData.status.toUpperCase()}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{vehicleData.speed} km/h</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Location</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">{vehicleData.location}</div>
              <p className="text-xs text-muted-foreground mt-1">Last updated: 2 min ago</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fuel Level</CardTitle>
              <Fuel className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vehicleData.fuel}%</div>
              <p className="text-xs text-muted-foreground mt-1">~120L remaining</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Driver</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">{vehicleData.driver.name}</div>
              <p className="text-xs text-muted-foreground mt-1">{vehicleData.driver.phone}</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information Tabs */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="fuel">Fuel Analysis</TabsTrigger>
              <TabsTrigger value="routes">Route History</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      Vehicle Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vehicle ID:</span>
                      <span className="font-semibold">{vehicleData.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-semibold">{vehicleData.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="bg-gradient-to-r from-primary to-secondary">
                        {vehicleData.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Speed:</span>
                      <span className="font-semibold">{vehicleData.speed} km/h</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Driver Assignment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="font-semibold">{vehicleData.driver.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contact:</span>
                      <span className="font-semibold">{vehicleData.driver.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">License:</span>
                      <span className="font-semibold">{vehicleData.driver.license}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-semibold">{vehicleData.driver.experience}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Maintenance Tab */}
            <TabsContent value="maintenance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Maintenance History
                  </CardTitle>
                  <CardDescription>
                    Complete record of all maintenance activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Service Type</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {maintenanceHistory.map((record) => (
                        <TableRow key={record.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              {record.date}
                            </div>
                          </TableCell>
                          <TableCell>{record.type}</TableCell>
                          <TableCell className="font-semibold">{record.cost}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-primary text-primary">
                              {record.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Fuel Analysis Tab */}
            <TabsContent value="fuel" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Fuel Consumption Trends
                  </CardTitle>
                  <CardDescription>
                    Last 7 days fuel usage and efficiency metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={fuelConsumption}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis 
                        dataKey="date" 
                        className="text-muted-foreground"
                      />
                      <YAxis className="text-muted-foreground" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)",
                          color: "hsl(var(--card-foreground))"
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="liters" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        name="Liters"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="efficiency" 
                        stroke="hsl(var(--secondary))" 
                        strokeWidth={2}
                        name="km/L"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Daily Usage</CardTitle>
                    <Fuel className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85.4L</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">↓ 5%</span> vs last week
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7.2 km/L</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">↑ 3%</span> improvement
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Weekly Cost</CardTitle>
                    <Fuel className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₦127,500</div>
                    <p className="text-xs text-muted-foreground mt-1">598L consumed</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Route History Tab */}
            <TabsContent value="routes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Recent Routes
                  </CardTitle>
                  <CardDescription>
                    Trip history and distance tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Route</TableHead>
                        <TableHead>Distance</TableHead>
                        <TableHead>Duration</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {routeHistory.map((route) => (
                        <TableRow key={route.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              {route.date}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-semibold">{route.from} → {route.to}</div>
                          </TableCell>
                          <TableCell className="font-semibold">{route.distance}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              {route.duration}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VehicleDetails;
