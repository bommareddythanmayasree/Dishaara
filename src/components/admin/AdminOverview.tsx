import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { 
  Users, 
  Car, 
  IndianRupee, 
  Calendar, 
  Shield, 
  Star, 
  TrendingUp, 
  MapPin,
  Clock,
  AlertTriangle
} from "lucide-react";

// Sample data for charts
const monthlyRevenueData = [
  { month: "Jan", revenue: 245000, users: 1240 },
  { month: "Feb", revenue: 287000, users: 1456 },
  { month: "Mar", revenue: 342000, users: 1789 },
  { month: "Apr", revenue: 398000, users: 2134 },
  { month: "May", revenue: 456000, users: 2567 },
  { month: "Jun", revenue: 523000, users: 2890 },
];

const categoryDistribution = [
  { name: "Bookings", value: 45, color: "hsl(var(--primary))" },
  { name: "Hotels", value: 25, color: "hsl(var(--secondary))" },
  { name: "Guides", value: 20, color: "hsl(217, 91%, 60%)" },
  { name: "Events", value: 10, color: "hsl(142, 69%, 58%)" },
];

const growthTrendsData = [
  { month: "Jan", bookings: 2400, revenue: 245000, users: 1240 },
  { month: "Feb", bookings: 2800, revenue: 287000, users: 1456 },
  { month: "Mar", bookings: 3200, revenue: 342000, users: 1789 },
  { month: "Apr", bookings: 3800, revenue: 398000, users: 2134 },
  { month: "May", bookings: 4200, revenue: 456000, users: 2567 },
  { month: "Jun", bookings: 4800, revenue: 523000, users: 2890 },
];

const heatmapData = [
  { location: "Mumbai", morning: 85, afternoon: 120, evening: 95, night: 45 },
  { location: "Delhi", morning: 78, afternoon: 110, evening: 88, night: 40 },
  { location: "Goa", morning: 65, afternoon: 95, evening: 125, night: 60 },
  { location: "Bangalore", morning: 72, afternoon: 105, evening: 82, night: 35 },
  { location: "Jaipur", morning: 55, afternoon: 80, evening: 70, night: 30 },
];

const chartConfig = {
  revenue: { label: "Revenue (₹)", color: "hsl(var(--primary))" },
  users: { label: "Users", color: "hsl(217, 91%, 60%)" },
  bookings: { label: "Bookings", color: "hsl(142, 69%, 58%)" },
};

export function AdminOverview() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Dashboard Overview</h1>
          <p className="text-muted-foreground">Real-time insights into your tourism platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Clock className="w-4 h-4 mr-2" />
            Last 24 Hours
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              Total Users
              <Users className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,283</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +12.3% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              Active Guides
              <Users className="w-4 h-4 text-blue-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +8.7% verified guides
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              Total Bookings
              <Calendar className="w-4 h-4 text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23,156</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +18.5% this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              Revenue (INR)
              <IndianRupee className="w-4 h-4 text-purple-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,45,890</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +25.2% growth
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue & User Sign-ups Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue & User Growth</CardTitle>
            <CardDescription>Revenue in INR and new user registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <BarChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar yAxisId="left" dataKey="revenue" fill="var(--color-revenue)" name="Revenue (₹)" />
                <Bar yAxisId="right" dataKey="users" fill="var(--color-users)" name="New Users" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Category Distribution Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Booking Distribution</CardTitle>
            <CardDescription>Category-wise booking breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Growth Trends & Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Trends Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Growth Trends</CardTitle>
            <CardDescription>Bookings, revenue, and user growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <LineChart data={growthTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line type="monotone" dataKey="bookings" stroke="var(--color-bookings)" strokeWidth={2} />
                <Line type="monotone" dataKey="users" stroke="var(--color-users)" strokeWidth={2} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* User Activity Heatmap */}
        <Card>
          <CardHeader>
            <CardTitle>User Activity Heatmap</CardTitle>
            <CardDescription>Activity levels by location and time of day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {heatmapData.map((location) => (
                <div key={location.location} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{location.location}</span>
                    <span className="text-xs text-muted-foreground">
                      Peak: {Math.max(location.morning, location.afternoon, location.evening, location.night)} users
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    <div className="text-center">
                      <div 
                        className="h-8 rounded flex items-center justify-center text-xs font-medium"
                        style={{ 
                          backgroundColor: `hsl(var(--primary) / ${location.morning / 150})`,
                          color: location.morning > 75 ? 'white' : 'hsl(var(--foreground))'
                        }}
                      >
                        {location.morning}
                      </div>
                      <span className="text-xs text-muted-foreground">Morning</span>
                    </div>
                    <div className="text-center">
                      <div 
                        className="h-8 rounded flex items-center justify-center text-xs font-medium"
                        style={{ 
                          backgroundColor: `hsl(var(--primary) / ${location.afternoon / 150})`,
                          color: location.afternoon > 75 ? 'white' : 'hsl(var(--foreground))'
                        }}
                      >
                        {location.afternoon}
                      </div>
                      <span className="text-xs text-muted-foreground">Afternoon</span>
                    </div>
                    <div className="text-center">
                      <div 
                        className="h-8 rounded flex items-center justify-center text-xs font-medium"
                        style={{ 
                          backgroundColor: `hsl(var(--primary) / ${location.evening / 150})`,
                          color: location.evening > 75 ? 'white' : 'hsl(var(--foreground))'
                        }}
                      >
                        {location.evening}
                      </div>
                      <span className="text-xs text-muted-foreground">Evening</span>
                    </div>
                    <div className="text-center">
                      <div 
                        className="h-8 rounded flex items-center justify-center text-xs font-medium"
                        style={{ 
                          backgroundColor: `hsl(var(--primary) / ${location.night / 150})`,
                          color: location.night > 75 ? 'white' : 'hsl(var(--foreground))'
                        }}
                      >
                        {location.night}
                      </div>
                      <span className="text-xs text-muted-foreground">Night</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2 text-primary" />
              Guides Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Online Guides</span>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                247 Active
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Pending Verification</span>
              <Badge variant="outline">12 Pending</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Average Rating</span>
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-500 mr-1" />
                <span className="text-sm font-medium">4.8</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-sm">
              <Car className="w-4 h-4 mr-2 text-blue-500" />
              Vehicle Pooling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Active Rides</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                89 Live
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Eco-Friendly</span>
              <Badge variant="outline" className="text-green-600">34%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Cost Saved</span>
              <span className="text-sm font-medium">₹45,230</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-2 text-purple-500" />
              Events & Offers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Active Events</span>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                23 Live
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Hidden Spots</span>
              <Badge variant="outline">156 Featured</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Attendance</span>
              <span className="text-sm font-medium">2,341 Today</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Recent Activities
          </CardTitle>
          <CardDescription>Latest system activities and alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 border-l-4 border-l-red-500">
              <div className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-red-500 mr-3" />
                <div>
                  <p className="text-sm font-medium">SOS Alert Received</p>
                  <p className="text-xs text-muted-foreground">Tourist in distress near India Gate, Delhi</p>
                </div>
              </div>
              <Badge variant="destructive">URGENT</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border-l-4 border-l-blue-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm font-medium">New Guide Registration</p>
                  <p className="text-xs text-muted-foreground">Rajesh Kumar applied for Mumbai tour guide</p>
                </div>
              </div>
              <Badge variant="secondary">NEW</Badge>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border-l-4 border-l-green-500">
              <div className="flex items-center">
                <Car className="w-4 h-4 text-green-500 mr-3" />
                <div>
                  <p className="text-sm font-medium">Pool Ride Completed</p>
                  <p className="text-xs text-muted-foreground">Delhi to Agra - 4 tourists, ₹1,200 saved</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">SUCCESS</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}