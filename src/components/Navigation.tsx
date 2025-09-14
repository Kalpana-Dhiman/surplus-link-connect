import { useState } from "react";
import { Home, Heart, Map, TrendingUp, Settings, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthDialog } from "@/components/AuthDialog";
import { useAuth } from "@/components/MockAuth";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "donate", label: "Donate", icon: Heart },
  { id: "discover", label: "Discover", icon: Map },
  { id: "impact", label: "Impact", icon: TrendingUp },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary rounded-xl p-2">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SurplusLink
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    "flex items-center space-x-2 transition-all duration-200",
                    activeTab === item.id 
                      ? "bg-gradient-primary text-white shadow-md" 
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">Welcome, {user.name}!</span>
                <Button 
                  variant="outline" 
                  onClick={signOut}
                  className="border-primary/20 hover:border-primary/40"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => setAuthDialogOpen(true)}
                  className="border-primary/20 hover:border-primary/40"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => setAuthDialogOpen(true)}
                  className="bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-slide-up">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full justify-start space-x-3",
                    activeTab === item.id 
                      ? "bg-gradient-primary text-white" 
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
            <div className="pt-4 flex flex-col space-y-2">
              {user ? (
                <>
                  <div className="text-center py-2">
                    <span className="text-sm text-muted-foreground">Welcome, {user.name}!</span>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={signOut}
                    className="w-full border-primary/20 hover:border-primary/40"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setAuthDialogOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full border-primary/20 hover:border-primary/40"
                  >
                    Sign In
                  </Button>
                  <Button 
                    onClick={() => {
                      setAuthDialogOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-primary text-white hover:opacity-90"
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Auth Dialog */}
      <AuthDialog open={authDialogOpen} onClose={() => setAuthDialogOpen(false)} />
    </nav>
  );
};