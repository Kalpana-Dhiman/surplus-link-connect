import { Camera, MapPin, Shield, TrendingUp, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Camera,
    title: "Smart OCR Detection",
    description: "Upload a photo and our AI automatically reads expiry dates and item details",
    badge: "AI-Powered",
    color: "text-impact-meals"
  },
  {
    icon: MapPin,
    title: "Real-time Discovery",
    description: "Find surplus food and medicine near you with live map updates and filtering",
    badge: "Live Updates",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Verified Donations",
    description: "OTP verification and rating system ensures safe, quality donations",
    badge: "Secure",
    color: "text-impact-co2"
  },
  {
    icon: TrendingUp,
    title: "Impact Tracking",
    description: "See your environmental and social impact with detailed analytics",
    badge: "Analytics",
    color: "text-impact-value"
  },
  {
    icon: Clock,
    title: "Smart Notifications",
    description: "Get alerts for items near expiry and pickup reminders",
    badge: "Smart Alerts",
    color: "text-warning"
  },
  {
    icon: Users,
    title: "Community Network",
    description: "Connect with NGOs, individuals, and businesses in your area",
    badge: "Community",
    color: "text-success"
  }
];

export const FeatureSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Powerful features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> maximum impact</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to turn surplus into social good, backed by cutting-edge technology
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 bg-gradient-subtle rounded-lg ${feature.color} group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};