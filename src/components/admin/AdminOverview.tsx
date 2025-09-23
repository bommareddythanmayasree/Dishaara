import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
        <Card>
          <CardHeader>
            <CardTitle>Booking Trends</CardTitle>
            <CardDescription>Monthly bookings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <p className="text-muted-foreground">Bookings Chart (Integration needed)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Destinations</CardTitle>
            <CardDescription>Top visited spots this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Goa Beaches</span>
                <Badge variant="secondary">2,341 visits</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Rajasthan Desert</span>
                <Badge variant="secondary">1,892 visits</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Kerala Backwaters</span>
                <Badge variant="secondary">1,654 visits</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Himachal Treks</span>
                <Badge variant="secondary">1,234 visits</Badge>
              </div>
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