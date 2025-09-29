import React, { useState } from "react";
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  Car, 
  Users, 
  Calendar, 
  Clock,
  MessageCircle,
  Heart,
  AlertTriangle,
  CheckCircle,
  Globe,
  Award,
  Navigation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

// Dummy data structure matching the requirements
const guideData = {
  id: "guide-001",
  name: "Rajesh Kumar Sharma",
  gender: "Male",
  age: 34,
  phone: "+91 98765 43210",
  email: "rajesh.guide@tourism.in",
  languages: [
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ta", name: "Tamil", flag: "🇮🇳" },
    { code: "fr", name: "French", flag: "🇫🇷" }
  ],
  experienceYears: 8,
  rating: 4.8,
  totalReviews: 247,
  city: "New Delhi",
  available: true,
  availableDates: ["2024-01-15", "2024-01-16", "2024-01-17"],
  currentLocation: { lat: 28.6139, lng: 77.2090 },
  specialties: [
    "Historical Tours",
    "Cultural Heritage", 
    "Adventure Trips",
    "Photography Tours",
    "Food & Culinary"
  ],
  vehicle: {
    type: "SUV",
    seats: 7,
    registration: "DL 01 AB 1234",
    model: "Toyota Innova Crysta",
    poolingAvailable: true
  },
  verified: true,
  govtIdProof: "Aadhaar Card Verified",
  emergencyContact: {
    name: "Priya Sharma",
    phone: "+91 98765 43211",
    relation: "Spouse"
  },
  rewardPoints: 1250,
  pricePerHour: 800,
  bio: "Passionate guide with 8+ years of experience showcasing India's rich heritage. Specialized in historical monuments and cultural experiences.",
  reviews: [
    {
      id: 1,
      username: "Sarah Johnson",
      rating: 5,
      comment: "Amazing guide! Rajesh made our Delhi tour unforgettable with his knowledge and enthusiasm.",
      date: "2024-01-10",
      userAvatar: "/placeholder.svg"
    },
    {
      id: 2,
      username: "Michael Chen",
      rating: 5,
      comment: "Professional, punctual, and very knowledgeable. Highly recommend for heritage tours!",
      date: "2024-01-08",
      userAvatar: "/placeholder.svg"
    },
    {
      id: 3,
      username: "Ananya Patel",
      rating: 4,
      comment: "Great experience! The vehicle was comfortable and Rajesh spoke excellent English.",
      date: "2024-01-05",
      userAvatar: "/placeholder.svg"
    }
  ],
  createdAt: "2023-03-15",
  updatedAt: "2024-01-12"
};

export function GuideInterface() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const { toast } = useToast();

  const handleBookGuide = () => {
    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      toast({
        title: "Booking Request Sent!",
        description: `Your request to book ${guideData.name} has been sent. You'll receive confirmation shortly.`,
      });
    }, 2000);
  };

  const handleSOS = () => {
    toast({
      title: "SOS Alert Activated",
      description: "Emergency services have been notified. Help is on the way.",
      variant: "destructive"
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : i < rating 
            ? "fill-yellow-200 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 pb-24">
      <div className="max-w-md mx-auto">
        {/* Header Profile Card */}
        <Card className="relative overflow-hidden shadow-warm border-0">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <CardHeader className="relative text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-primary/20 shadow-button">
                  <AvatarImage src="/placeholder.svg" alt={guideData.name} />
                  <AvatarFallback className="text-xl font-bold bg-gradient-primary text-primary-foreground">
                    {guideData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {guideData.verified && (
                  <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-foreground mb-1">{guideData.name}</h1>
            <p className="text-muted-foreground mb-3">
              {guideData.gender} • {guideData.age} years • {guideData.experienceYears} years experience
            </p>

            {/* Availability Status */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${guideData.available ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
              <span className={`text-sm font-medium ${guideData.available ? 'text-green-600' : 'text-red-600'}`}>
                {guideData.available ? 'Available Now' : 'Currently Busy'}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {renderStars(guideData.rating)}
              </div>
              <span className="font-semibold text-foreground">{guideData.rating}</span>
              <span className="text-muted-foreground">({guideData.totalReviews} reviews)</span>
            </div>

            {/* Languages */}
            <div className="flex flex-wrap justify-center gap-2">
              {guideData.languages.map((lang) => (
                <Badge key={lang.code} variant="secondary" className="text-xs">
                  {lang.flag} {lang.name}
                </Badge>
              ))}
            </div>
          </CardHeader>
        </Card>

        {/* Contact & Location */}
        <Card className="mt-4 shadow-card">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Current Location</p>
                  <p className="text-sm text-muted-foreground">{guideData.city}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{guideData.phone}</p>
                  <p className="text-sm text-muted-foreground">WhatsApp Available</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{guideData.email}</p>
                  <p className="text-sm text-muted-foreground">Response within 1 hour</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About & Specialties */}
        <Card className="mt-4 shadow-card">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              About & Specialties
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{guideData.bio}</p>
            
            <div className="flex flex-wrap gap-2">
              {guideData.specialties.map((specialty, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Information */}
        {guideData.vehicle && (
          <Card className="mt-4 shadow-card">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Car className="w-5 h-5 text-primary" />
                Vehicle Details
              </h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{guideData.vehicle.type} - {guideData.vehicle.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Capacity:</span>
                  <span className="font-medium flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {guideData.vehicle.seats} seats
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Registration:</span>
                  <span className="font-medium">{guideData.vehicle.registration}</span>
                </div>
                
                {guideData.vehicle.poolingAvailable && (
                  <Badge variant="secondary" className="w-full justify-center mt-2">
                    <Users className="w-4 h-4 mr-1" />
                    Carpooling Available
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Safety & Trust */}
        <Card className="mt-4 shadow-card">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Safety & Trust
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Verification Status:</span>
                <Badge variant="default" className="bg-green-500">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {guideData.govtIdProof}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Emergency Contact:</span>
                <span className="font-medium text-sm">{guideData.emergencyContact.name}</span>
              </div>

              <Button 
                variant="destructive" 
                className="w-full mt-3"
                onClick={handleSOS}
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                SOS Emergency
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pricing & Rewards */}
        <Card className="mt-4 shadow-card">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold text-primary">₹{guideData.pricePerHour}</p>
                <p className="text-sm text-muted-foreground">per hour</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-accent">{guideData.rewardPoints}</p>
                <p className="text-sm text-muted-foreground">reward points</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <Card className="mt-4 shadow-card">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Reviews ({guideData.totalReviews})
            </h3>
            
            <div className="space-y-4">
              {(showAllReviews ? guideData.reviews : guideData.reviews.slice(0, 2)).map((review) => (
                <div key={review.id} className="border-l-2 border-primary/20 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={review.userAvatar} />
                      <AvatarFallback className="text-xs">{review.username[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">{review.username}</span>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{review.comment}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              ))}
              
              {guideData.reviews.length > 2 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                >
                  {showAllReviews ? 'Show Less' : `View All ${guideData.totalReviews} Reviews`}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Sticky Booking Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 shadow-lg">
          <div className="max-w-md mx-auto">
            <Button 
              className="w-full h-12 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-button"
              onClick={handleBookGuide}
              disabled={isBooking || !guideData.available}
            >
              {isBooking ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Processing...
                </div>
              ) : guideData.available ? (
                <>
                  <Navigation className="w-5 h-5 mr-2" />
                  Book Guide - ₹{guideData.pricePerHour}/hr
                </>
              ) : (
                "Currently Unavailable"
              )}
            </Button>
            
            <div className="flex justify-center gap-4 mt-2">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                Save
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}