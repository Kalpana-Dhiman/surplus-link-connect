import { Camera, Clock, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const DonationFlow = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Donate surplus in
            <span className="bg-gradient-primary bg-clip-text text-transparent"> 3 simple steps</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our smart technology makes donating as easy as taking a photo
          </p>
        </div>

        {/* Demo Flow */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Step 1: Upload Photo */}
            <Card className="bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-scale-in">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs">Step 1</Badge>
                <h3 className="text-xl font-semibold text-foreground">Upload Photo</h3>
                <p className="text-muted-foreground text-sm">
                  Take a photo of your surplus item. Our AI will automatically detect the product and expiry date.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 border-2 border-dashed border-border">
                  <div className="h-32 bg-gradient-subtle rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Camera className="h-8 w-8 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">Tap to capture</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: AI Processing */}
            <Card className="bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-scale-in delay-100">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs">Step 2</Badge>
                <h3 className="text-xl font-semibold text-foreground">Smart Detection</h3>
                <p className="text-muted-foreground text-sm">
                  AI reads product details and suggests pickup windows based on expiry date.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Item</span>
                    <span className="text-sm text-muted-foreground">Bread Loaves (5)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Expiry</span>
                    <span className="text-sm text-warning">2 days</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Category</span>
                    <span className="text-sm text-muted-foreground">Bakery</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Live on Map */}
            <Card className="bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-scale-in delay-200">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs">Step 3</Badge>
                <h3 className="text-xl font-semibold text-foreground">Live Discovery</h3>
                <p className="text-muted-foreground text-sm">
                  Your donation appears on the map instantly, ready to be claimed by those in need.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="h-32 bg-gradient-subtle rounded-lg flex items-center justify-center relative">
                    <div className="absolute top-4 left-4">
                      <div className="w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
                    </div>
                    <div className="text-center space-y-1">
                      <MapPin className="h-6 w-6 text-primary mx-auto" />
                      <p className="text-xs text-muted-foreground">Live on map</p>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-slide-up delay-300">
            <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 transition-opacity">
              <Camera className="mr-2 h-5 w-5" />
              Start Your First Donation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};