import { useState } from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { DonationFlow } from "@/components/DonationFlow";
import { ImpactDashboard } from "@/components/ImpactDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <HeroSection />
            <FeatureSection />
            <DonationFlow />
          </>
        );
      case "donate":
        return (
          <div className="py-20 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold mb-6">Donation Flow</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Upload your surplus items and connect with those in need
              </p>
              <DonationFlow />
            </div>
          </div>
        );
      case "discover":
        return (
          <div className="py-20 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold mb-6">Discover Surplus</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find food and medicine surplus near you with real-time updates
              </p>
              <div className="bg-gradient-card rounded-xl p-8 border border-border/50">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "impact":
        return (
          <>
            <div className="py-12 text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-6">Your Impact Dashboard</h1>
                <p className="text-xl text-muted-foreground">
                  Track your environmental and social contributions
                </p>
              </div>
            </div>
            <ImpactDashboard />
          </>
        );
      case "settings":
        return (
          <div className="py-20 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold mb-6">Settings</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Customize your SurplusLink experience
              </p>
              <div className="bg-gradient-card rounded-xl p-8 border border-border/50">
                <p className="text-muted-foreground">Settings panel coming soon</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <HeroSection />
            <FeatureSection />
            <DonationFlow />
          </>
        );
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default Index;
