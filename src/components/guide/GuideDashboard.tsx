import { useState } from "react";
import { 
  Home, 
  Calendar, 
  DollarSign, 
  Star, 
  MessageSquare, 
  Settings,
  MapPin,
  Car,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  X
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GuideDashboardProps {
  onBack: () => void;
}

export function GuideDashboard({ onBack }: GuideDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock guide data
  const guideData = {
    name: "Rajesh Kumar Sharma",
    rating: 4.8,
    totalTrips: 247,
    totalEarnings: 198500,
    monthlyEarnings: 24500,
    pendingBookings: 5,
    todayBookings: 2,
    availabilityStatus: true,
  };

  const upcomingBookings = [
    {
      id: 1,
      customerName: "Sarah Johnson",
      date: "Today, 2:00 PM",
      duration: "4 hours",
      location: "Red Fort, Delhi",
      price: 800,
      status: "confirmed"
    },
    {
      id: 2,
      customerName: "Michael Chen",
      date: "Today, 5:30 PM",
      duration: "3 hours",
      location: "India Gate & Connaught Place",
      price: 600,
      status: "confirmed"
    },
    {
      id: 3,
      customerName: "Ananya Patel",
      date: "Tomorrow, 10:00 AM",
      duration: "6 hours",
      location: "Qutub Minar & Lotus Temple",
      price: 1200,
      status: "pending"
    }
  ];

  const recentReviews = [
    {
      id: 1,
      customerName: "Emma Wilson",
      rating: 5,
      comment: "Excellent guide! Very knowledgeable about history.",
      date: "2 days ago"
    },
    {
      id: 2,
      customerName: "John Smith",
      rating: 5,
      comment: "Great experience, highly recommended!",
      date: "3 days ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-white hover:bg-white/20"
            >
              ← Back
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 border-4 border-white/20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-2xl bg-white/20">RK</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">{guideData.name}</h1>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  {renderStars(guideData.rating)}
                  <span className="ml-1">{guideData.rating}</span>
                </div>
                <span>•</span>
                <span>{guideData.totalTrips} trips</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${guideData.availabilityStatus ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
                <span className="text-sm">
                  {guideData.availabilityStatus ? 'Available for bookings' : 'Currently busy'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <Badge variant="secondary">{guideData.todayBookings}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Today's Bookings</p>
              <p className="text-xl font-bold text-foreground">{guideData.pendingBookings}</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-sm text-muted-foreground">This Month</p>
              <p className="text-xl font-bold text-foreground">₹{guideData.monthlyEarnings.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-sm text-muted-foreground">Rating</p>
              <p className="text-xl font-bold text-foreground">{guideData.rating}/5.0</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground">Total Trips</p>
              <p className="text-xl font-bold text-foreground">{guideData.totalTrips}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Today's Schedule */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingBookings.slice(0, 2).map((booking) => (
                  <div key={booking.id} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{booking.customerName}</h4>
                        <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'}>
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {booking.date} • {booking.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {booking.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">₹{booking.price}</p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline">
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Reviews */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Recent Reviews
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentReviews.map((review) => (
                  <div key={review.id} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{review.customerName}</span>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{review.comment}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>All Bookings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{booking.customerName}</h4>
                        <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'}>
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {booking.date} • {booking.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {booking.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">₹{booking.price}</p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline">Accept</Button>
                        <Button size="sm" variant="outline">Decline</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Total Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">₹{guideData.totalEarnings.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mt-2">Lifetime earnings</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-500">₹{guideData.monthlyEarnings.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mt-2">Current month earnings</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Payout Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Available Balance</span>
                    <span className="font-semibold">₹12,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pending Clearance</span>
                    <span className="font-semibold">₹8,200</span>
                  </div>
                  <Button className="w-full mt-4">Request Withdrawal</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentReviews.map((review) => (
                  <div key={review.id} className="border-l-2 border-primary/20 pl-4 pb-4 border-b last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{review.customerName}</span>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{review.comment}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}