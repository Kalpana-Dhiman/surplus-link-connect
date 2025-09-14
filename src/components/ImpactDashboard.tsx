import { Heart, Leaf, Users, TrendingUp, Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const ImpactDashboard = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Track your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> real-world impact</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Every donation matters. See how your contributions are making a difference in your community and environment.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Meals Saved */}
          <Card className="bg-gradient-card border-border/50 hover:border-impact-meals/20 transition-all duration-300 hover:shadow-lg animate-scale-in">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Heart className="h-8 w-8 text-impact-meals" />
                <Badge variant="secondary" className="text-xs bg-impact-meals/10 text-impact-meals border-impact-meals/20">
                  +12 today
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground animate-counter-up">2,847</div>
                <p className="text-sm text-muted-foreground">Meals Saved</p>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground">75% of monthly goal</p>
              </div>
            </CardContent>
          </Card>

          {/* CO2 Prevented */}
          <Card className="bg-gradient-card border-border/50 hover:border-impact-co2/20 transition-all duration-300 hover:shadow-lg animate-scale-in delay-100">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Leaf className="h-8 w-8 text-impact-co2" />
                <Badge variant="secondary" className="text-xs bg-impact-co2/10 text-impact-co2 border-impact-co2/20">
                  +8kg today
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground animate-counter-up">152</div>
                <p className="text-sm text-muted-foreground">Kg CO₂ Prevented</p>
                <Progress value={60} className="h-2" />
                <p className="text-xs text-muted-foreground">60% of monthly goal</p>
              </div>
            </CardContent>
          </Card>

          {/* Communities Helped */}
          <Card className="bg-gradient-card border-border/50 hover:border-impact-value/20 transition-all duration-300 hover:shadow-lg animate-scale-in delay-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Users className="h-8 w-8 text-impact-value" />
                <Badge variant="secondary" className="text-xs bg-impact-value/10 text-impact-value border-impact-value/20">
                  +3 this week
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground animate-counter-up">89</div>
                <p className="text-sm text-muted-foreground">Communities Helped</p>
                <Progress value={89} className="h-2" />
                <p className="text-xs text-muted-foreground">89% of monthly goal</p>
              </div>
            </CardContent>
          </Card>

          {/* Donation Score */}
          <Card className="bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-scale-in delay-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Award className="h-8 w-8 text-primary" />
                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                  Excellent
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground animate-counter-up">4.9</div>
                <p className="text-sm text-muted-foreground">Donation Score</p>
                <Progress value={98} className="h-2" />
                <p className="text-xs text-muted-foreground">98% reliability rating</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Impact Timeline */}
          <Card className="bg-gradient-card border-border/50 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Recent Impact</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-impact-meals rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">5 bread loaves claimed</p>
                    <p className="text-xs text-muted-foreground">by Local Food Bank • 2 hours ago</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">+15 meals</Badge>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-impact-co2 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Medicine donated</p>
                    <p className="text-xs text-muted-foreground">to Community Health Center • 6 hours ago</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">+8kg CO₂</Badge>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-impact-value rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Vegetables shared</p>
                    <p className="text-xs text-muted-foreground">with Neighborhood Group • 1 day ago</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">+22 people</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-gradient-card border-border/50 animate-slide-in-right delay-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-impact-meals/10 rounded-lg border border-impact-meals/20">
                  <div className="w-12 h-12 bg-impact-meals/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-6 w-6 text-impact-meals" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Meal Hero</p>
                  <p className="text-xs text-muted-foreground">1000+ meals saved</p>
                </div>
                <div className="text-center p-4 bg-impact-co2/10 rounded-lg border border-impact-co2/20">
                  <div className="w-12 h-12 bg-impact-co2/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Leaf className="h-6 w-6 text-impact-co2" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Eco Warrior</p>
                  <p className="text-xs text-muted-foreground">100kg+ CO₂ prevented</p>
                </div>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">30-Day Streak</p>
                    <p className="text-xs text-muted-foreground">Keep up the amazing work!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};