import { ArrowRight, Heart, Leaf, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onTabChange: (tab: string) => void;
}

export const HeroSection = ({ onTabChange }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="inline-flex items-center space-x-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors animate-fade-in"
          >
            <Zap className="h-4 w-4" />
            <span>Reduce waste • Help communities • Track impact</span>
          </Badge>
          
          {/* Main Heading */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Turn surplus into</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                social impact
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Connect food and medicine surplus with those who need it most. 
              Track your environmental impact while building stronger, more sustainable communities.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <Button 
              size="lg" 
              onClick={() => onTabChange('donate')}
              className="bg-gradient-primary text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Start Donating
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onTabChange('discover')}
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-colors"
            >
              Discover Surplus
            </Button>
          </div>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-16 animate-slide-up delay-300">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center">
                <Heart className="h-8 w-8 text-impact-meals" />
              </div>
              <div className="text-3xl font-bold text-foreground animate-counter-up">2,847</div>
              <div className="text-sm text-muted-foreground">Meals Saved</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center">
                <Leaf className="h-8 w-8 text-impact-co2" />
              </div>
              <div className="text-3xl font-bold text-foreground animate-counter-up">152</div>
              <div className="text-sm text-muted-foreground">Kg CO₂ Prevented</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center">
                <Users className="h-8 w-8 text-impact-value" />
              </div>
              <div className="text-3xl font-bold text-foreground animate-counter-up">89</div>
              <div className="text-sm text-muted-foreground">Communities Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};